import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const { resMenuDetails, resCategoryDetails } = useRestaurantMenu(resID);

  return (
    <div className="m-4 p-2 w-8/12 place-items-center">
      {resCategoryDetails.map((card) => (
        <RestaurantCategoryItem
          key={card.card.card.title}
          title={card.card.card.title}
          items={card.card.card.itemCards}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
