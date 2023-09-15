import PropTypes from "prop-types";
const Cart = ({ courses }) => {
  return (
    <div className="md:basis-1/3 lg:basis-1/4">
      <div className="p-8 flex space-y-4 flex-col bg-white rounded-xl w-full">
        <h2 className="text-xl text-blue-500 w-full md:text-left font-semibold">
          Credit Hour Remaining hr
        </h2>
        <hr />
        <p className="font-bold text-xl">Course Name</p>
        <div>
          <ol className="list-decimal	pl-6 space-y-4 text-gray-500 font-medium">
            {courses.map((course) => (
              <li key={course.id}>{course.course_title}</li>
            ))}
          </ol>
        </div>
        <hr />
        <div>
          <p className="text-gray-700 font-bold">Total Credit Hour : 13</p>
        </div>
        <hr />
        <div>
          <p className="text-gray-700 font-bold">Total Price : 48000 USD</p>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Cart;
