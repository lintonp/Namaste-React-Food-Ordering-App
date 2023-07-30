const RestaurantCategoryFoodItems = ({ food }) => {
  return (
    <div className="border-b flex justify-between px-1 py-2">
      <div>
        <p className="font-medium">{food.name}</p>
        <p>₹{food.price ? food.price / 100 : food.defaultPrice / 100}</p>
        <p className="text-sm font-light w-9/12">{food.description}</p>
      </div>
      <div className="align">
        {/* <img> */}
        <button className="rounded-lg p-1 border-solid border-red-600 bg-green-300 hover:bg-green-400">
          Add
        </button>
        {/* <div className="rounded-r-lg">+</div> */}
      </div>
    </div>
  );
};

export default RestaurantCategoryFoodItems;
