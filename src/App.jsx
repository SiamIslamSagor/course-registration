import { useState } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [courses, setCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);

  const creditHandler = (course) => {
    const sumCredit = totalCredit + course.credit;
    const remainingCredit = creditRemaining - course.credit;
    if (remainingCredit < 0) {
      return alert("credit finished");
    }
    setCreditRemaining(remainingCredit);
    setTotalCredit(sumCredit);
  };

  const handleClick = (course) => {
    const courseExist = courses.find((item) => course.id == item.id);
    if (courseExist) {
      return alert("you have alredy selected this course ");
    } else {
      const newCourses = [...courses, course];
      setCourses(newCourses);
      creditHandler(course);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="flex flex-col md:flex-row gap-6">
          <Cards handleClick={handleClick}></Cards>
          <Cart
            creditRemaining={creditRemaining}
            totalCredit={totalCredit}
            courses={courses}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
