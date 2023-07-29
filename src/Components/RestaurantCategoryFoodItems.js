import { useState } from "react";

const RestaurantCategoryFoodItems = ({items}) => {
  const[foodItems, setFoodItems] = useState([]);
  const list = []
  items?.card?.info.map(food => list+food);
  console.log(list)
  return <div>ButterChicken</div>;
};

export default RestaurantCategoryFoodItems;
