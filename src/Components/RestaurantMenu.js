import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const { resMenuDetails, resDetails } = useRestaurantMenu(resID);

  const { name, cuisines } = resDetails;

  return (
    <div className="restaurant-menu-container">
      <h1>Restaurant Name - {name}</h1>
      <h3>Restaurant Cuisines - {cuisines}</h3>
      <ul>
        {resMenuDetails.map((item) => {
          return <li key={item.info.id}>{item.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
