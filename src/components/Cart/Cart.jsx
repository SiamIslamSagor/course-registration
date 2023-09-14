const Cart = () => {
  return (
    <div className="p-4 flex space-y-4 flex-col">
      <h2 className="text-xl text-blue-500 w-full md:text-left font-semibold">
        Credit Hour Remaining hr
      </h2>
      <hr />
      <p className="font-bold text-xl m-8">Course Name</p>
      <div></div>
      <hr />
      <div>
        <p className="text-gray-700 font-medium">Total Credit Hour : 13</p>
      </div>
      <hr />
      <div>
        <p className="text-gray-700 font-medium">Total Price : 48000 USD</p>
      </div>
    </div>
  );
};

export default Cart;
