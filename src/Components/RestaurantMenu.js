import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategoryItem from "./RestaurantCategoryItem";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const { resMenuDetails, resCategoryDetails } = useRestaurantMenu(resID);
  const [seeCategoryIndex, setSeeCategoryIndex] = useState(null);

  return (
    <div className="m-4 p-2 w-8/12 place-items-center">
      {resCategoryDetails.map((card, index) => (
        <RestaurantCategoryItem
          key={card.card.card.title}
          title={card.card.card.title}
          items={card.card.card.itemCards}
          showItem={index === seeCategoryIndex ? true : false}
          setSeeCategoryIndex={() => setSeeCategoryIndex(index)}
          collapseAll={() => setSeeCategoryIndex(null)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
