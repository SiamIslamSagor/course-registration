import { useState } from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = (course) => {
    const newCourses = [...courses, course];
    setCourses(newCourses);
    // console.log(newCourses);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        {/* <div className="md:flex"> */}
        <div className="flex flex-col md:flex-row gap-6">
          <Cards handleClick={handleClick}></Cards>
          <Cart courses={courses}></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
