import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Store/CartSlice";

const RestaurantCategoryFoodItems = ({ food }) => {
  const dispath = useDispatch();
  const cartIds = useSelector((state) => state.cart.itemsIds);

  const handleAddClick = () => {
    dispath(addItem(food));
  };

  const handleSubClick = () => {
    dispath(removeItem(food.id));
  };

  return (
    <div className="border-b flex justify-between px-1 py-2">
      <div>
        <p className="font-medium">{food.name}</p>
        <p>₹{food.price ? food.price / 100 : food.defaultPrice / 100}</p>
        <p className="text-sm font-light w-9/12">{food.description}</p>
      </div>
      <div className="align">
        {/* <img> */}
        <button
          className="rounded-lg p-1  bg-gray-300 hover:bg-gray-400"
          onClick={handleSubClick}
        >
          -
        </button>
        <span className="m-1 p-1">
          {cartIds[food.id] ? cartIds[food.id] : 0}
        </span>
        <button
          className="rounded-lg p-1  bg-gray-300 hover:bg-gray-400"
          onClick={handleAddClick}
        >
          +
        </button>
        {/* <div className="rounded-r-lg">+</div> */}
      </div>
    </div>
  );
};

export default RestaurantCategoryFoodItems;
