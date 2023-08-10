import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../Store/CartSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantCategoryFoodItems = ({ food }) => {
  const dispath = useDispatch();
  const cartIds = useSelector((state) => state.cart.itemsIds);
  const location = useLocation();
  const [isResItem, setIsResItem] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/restaurant/")) {
      setIsResItem(true);
    }
  }, []);

  const handleAddClick = () => {
    dispath(addItem(food));
  };

  const handleSubClick = () => {
    dispath(removeItem(food.id));
  };

  const handleClearItem = () => {
    dispath(clearItem(food.id));
  };

  const Xbutton = () => {
    return (
      <button className="font=bold text-lg" onClick={handleClearItem}>
        X
      </button>
    );
  };

  return (
    <div className="border-b flex justify-between px-1 py-2">
      <div>
        <p className="font-medium">{food.name}</p>
        <p>₹{food.price ? food.price / 100 : food.defaultPrice / 100}</p>
        {isResItem && (
          <p className="text-sm font-light w-9/12">{food.description}</p>
        )}
      </div>
      <div className="flex wrap">
        {cartIds.hasOwnProperty(food.id) ? (
          <div className="flex max-h-9 justify-items-stretch">
            {/* <img> */}
            <button
              className="rounded-lg p-1 font-bold bg-red-100 hover:bg-red-200"
              onClick={handleSubClick}
            >
              -
            </button>
            <span className="m-1 p-1 bg-slate-50 font-bold">
              {cartIds[food.id] ? cartIds[food.id] : 0}
            </span>
            <button
              className="rounded-lg p-1 font-bold bg-green-100 hover:bg-green-200"
              onClick={handleAddClick}
            >
              +
            </button>
            {/* <div className="rounded-r-lg">+</div> */}
          </div>
        ) : (
          <button
            className="m-1 px-1 max-h-10 font-semibold align border-2 rounded-lg border-double border-green-400 bg-green-100 hover:bg-green-200"
            onClick={handleAddClick}
          >
            Add
          </button>
        )}
        {!isResItem && (
          <button
            className="font-bold text-lg mx-2 p-2 hover:font-extrabold"
            onClick={handleClearItem}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategoryFoodItems;
