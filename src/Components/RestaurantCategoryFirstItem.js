const RestaurantCategoryFirstItem = ({ name, total }) => {
  return (
    <div className="border-b flex justify-between px-1 py-2 hover:bg-slate-100">
      <div>
        <p className="font-medium">{name}</p>
        {/* <p>₹{food.price}</p>
        <p className="text-sm font-light w-9/12">{food.description}</p> */}
      </div>
      <div className="flex wrap">
        <div className="my-2">
          <span className="font-normal text-lg mx-4 my-2 p-2">₹{total}</span>
        </div>
        <button className="m-1 w-20 px-1 max-h-10 font-semibold align border-2 rounded-lg border-double border-green-400 bg-green-100 hover:bg-green-200">
          Add
        </button>

        {/* X button */}
        <button className="font-light text-lg mx-2 p-2 hover:font-normal">
          <img
            src="https://www.pngfind.com/pngs/b/608-6087089_close-png.png"
            className="h-3 w-3"
            alt="Close Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default RestaurantCategoryFirstItem;
