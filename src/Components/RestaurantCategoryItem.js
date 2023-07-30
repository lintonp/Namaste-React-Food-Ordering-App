import { useState } from "react";
import RestaurantCategoryFoodItems from "./RestaurantCategoryFoodItems";

const RestaurantCategoryItem = ({ title, items }) => {
  const [foodItemsDisplay, setFoodItemsDisplay] = useState(false);

  const changeDisplay = () => {
    foodItemsDisplay ? setFoodItemsDisplay(false) : setFoodItemsDisplay(true);
  };

  return (
    <div className="border-b-2 shadow-md m-2 px-2 py-1 bg-gray-100">
      <div
        className="flex justify-between font-bold text-lg px-1 hover: cursor-grab"
        onClick={changeDisplay}
      >
        <span>
          {title} ({items.length})
        </span>
        <span>V</span>
      </div>

      {foodItemsDisplay ? (
        <div>
          {items.map((card) => (
            <RestaurantCategoryFoodItems
              key={card?.card?.info?.id}
              food={card?.card?.info}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RestaurantCategoryItem;
