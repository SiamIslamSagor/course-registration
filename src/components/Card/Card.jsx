// import { FaBookmark } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { LuDollarSign } from "react-icons/lu";

import PropTypes from "prop-types";

const Card = ({ card, handleClick }) => {
  const { img, course_title, course_details, price, credit } = card;
  return (
    <div className="p-4 flex space-y-4 justify-center items-center flex-col bg-white rounded-xl lg:h-[]">
      <img className="w-full" src={img} alt={course_title} />
      <h2 className="text-xl w-full md:text-left font-semibold">
        {course_title}
      </h2>
      <p className="text-gray-500">{course_details}</p>
      <div className="w-full flex justify-between text-gray-500">
        <div className="flex items-center gap-3">
          <span>
            <LuDollarSign></LuDollarSign>
          </span>
          <p>Price : {price}</p>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <GoBook />
          </span>
          <p>Credit : {credit}hr</p>
        </div>
      </div>
      <div
        onClick={() => handleClick(card)}
        className="bg-sky-700 w-full text-center py-2 rounded-md text-white font-semibold cursor-pointer "
      >
        <button>Select</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
