import { useState } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (course) => {
    const courseExist = courses.find((item) => course.id === item.id);
    if (courseExist) {
      return toast("You have already selected this course ");
    }
    const sumCredit = totalCredit + course.credit;
    const remainingCredit = creditRemaining - course.credit;
    const newCourses = [...courses, course];
    const totalSum = totalPrice + course.price;
    const sumTotal = totalSum.toFixed(2) * 1;
    if (remainingCredit < 0) {
      return toast("You don't have credit for selecting more courses");
    } else {
      setCourses(newCourses);
      setCreditRemaining(remainingCredit);
      setTotalCredit(sumCredit);
      setTotalPrice(sumTotal);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="flex flex-col md:flex-row gap-6">
          <Cards handleClick={handleClick}></Cards>
          <Cart
            totalPrice={totalPrice}
            creditRemaining={creditRemaining}
            totalCredit={totalCredit}
            courses={courses}
          ></Cart>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
