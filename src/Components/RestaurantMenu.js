import { useParams } from "react-router-dom";

import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantMenu = () => {
  const { resID } = useParams();
  // const [resCategoryDetails, setResCategoryDetails] = useState([]);

  const { resMenuDetails, resCategoryDetails } = useRestaurantMenu(resID);

  console.log("RestaurantMenu", resCategoryDetails);

  resCategoryDetails.map((card) => console.log(card.card.card.title));

  return (
    <div className="m-4 p-2 w-6/12 place-items-center">
      {resCategoryDetails.map((card) => (
        <RestaurantCategoryItem
          key={card.card.card.title}
          title={card.card.card.title}
          items={card.card.card.itemCards}
        />
      ))}
      {/* <h1>Restaurant Name - {name}</h1>
      <h3>Restaurant Cuisines - {cuisines}</h3>
      <ul>
        {resMenuDetails.map((item) => {
          return <li key={item.info.id}>{item.info.name}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
