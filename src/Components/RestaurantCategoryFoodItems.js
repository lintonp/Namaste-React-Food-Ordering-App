import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../Store/CartSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantCategoryFoodItems = ({ food }) => {
  const dispath = useDispatch();
  const cartIds = useSelector((state) => state.cart.itemsIds);
  const location = useLocation();
  const [isResItem, setIsResItem] = useState(false);
  const [itemTotal, setItemTotal] = useState(food.price / 100);

  useEffect(() => {
    if (location.pathname.includes("/restaurant/")) {
      setIsResItem(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const price = food.price ? food.price : food.defaultPrice;
    setItemTotal(parseFloat(((price / 100) * cartIds[food.id]).toFixed(2)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartIds]);

  const handleAddClick = () => {
    dispath(addItem(food));
  };

  const handleSubClick = () => {
    dispath(removeItem(food.id));
  };

  const handleClearItem = () => {
    dispath(clearItem(food.id));
  };

  return (
    <div className="border-b flex justify-between px-1 py-2 hover:bg-slate-100">
      <div className="items-start">
        <p className="font-medium">{food.name}</p>
        {!isResItem && (
          <p className="mr-auto mx-4 font-normal">
            ₹{food.price ? food.price / 100 : food.defaultPrice / 100}
          </p>
        )}
        {isResItem && (
          <p className="text-sm font-light w-9/12">{food.description}</p>
        )}
      </div>
      <div className="flex">
        {!isResItem && (
          <div className="my-2">
            <span className="font-normal text-lg mx-4 my-2 p-2">
              ₹{itemTotal}
            </span>
          </div>
        )}

        {/* Add, Remove Button */}
        {cartIds.hasOwnProperty(food.id) ? (
          <div className="flex max-h-9 m-2 border border-1 rounded-lg border-slate-300 justify-evenly">
            {/* <img> */}
            <button
              className="rounded-l-lg w-6 p-1 font-bold hover:bg-red-200 hover:border-2 hover:border-red-300"
              onClick={handleSubClick}
            >
              -
            </button>
            <span className="m-1 p-1 bg-slate-50 font-bold">
              {cartIds[food.id] ? cartIds[food.id] : 0}
            </span>
            <button
              className="rounded-r-lg w-6 p-1 font-bold hover:bg-green-200 hover:border-2 hover:border-green-300"
              onClick={handleAddClick}
            >
              +
            </button>
            {/* <div className="rounded-r-lg">+</div> */}
          </div>
        ) : (
          <button
            className="m-1 w-20 px-1 max-h-10 font-semibold align border-2 rounded-lg border-double border-green-400 bg-green-100 hover:bg-green-200"
            onClick={handleAddClick}
          >
            Add
          </button>
        )}
        {/* X button */}
        {!isResItem && (
          <button
            className="font-light text-lg mx-2 p-2 hover:font-normal"
            onClick={handleClearItem}
          >
            <img
              src="https://www.pngfind.com/pngs/b/608-6087089_close-png.png"
              className="h-3 w-3"
              alt="Close Icon"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategoryFoodItems;
