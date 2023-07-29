import { useState } from "react";
import RestaurantCategoryFoodItems from "./RestaurantCategoryFoodItems";

const RestaurantCategoryItem = ({ title, items }) => {
  const [foodItemsDisplay, setFoodItemsDisplay] = useState(false);  
  const [food, setFood] = useState([]);
  const changeDisplay = () => {
    foodItemsDisplay ? setFoodItemsDisplay(false) : setFoodItemsDisplay(true);
  };
  // console.log(items)
  // setFood(items.map(card => card?.info));
  // console.log(food);

  return (
    <div className="border-b-2 shadow-md m-2 px-2 py-1 bg-gray-100">
      <div
        className="flex justify-between font-bold text-lg hover: cursor-grab"
        onClick={changeDisplay}
      >
        <span>{title}</span>
        <span>V</span>
      </div>
      {foodItemsDisplay ? (
        <div className="">
          {/* items.map((card) => {<RestaurantCategoryFoodItems food={card?.card?.info} />}); */}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RestaurantCategoryItem;
