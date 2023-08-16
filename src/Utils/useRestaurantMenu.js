import { useState, useEffect } from "react";
import { SWIGGY_MENU_API_URL } from "../Utils/constants";

const useRestaurantMenu = (resID) => {
  const [resMenuDetails, setResMenuDetails] = useState([]);
  const [resCategoryDetails, setResCategoryDetails] = useState([]);

  useEffect(() => {
    fetchResDetails();
  }, []);

  const fetchResDetails = async () => {
    // console.log("Fetching inside Restaurant Menu");
    const rawData = await fetch(SWIGGY_MENU_API_URL + resID);
    const jsonData = await rawData.json();
    const list =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResMenuDetails(list);
    setResCategoryDetails(
      list.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );

    // setResMenuDetails(
    //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    // );
    // setResCategoryDetails(
    //   resMenuDetails.filter((card) => {
    //     return (
    //       card?.card?.["@type"] ===
    //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     );
    //   })
    // );
    // setResDetails(jsonData?.data?.cards[0]?.card?.card?.info);
    // console.log(
    //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    //     ?.card?.card?.itemCards
    // );
    // setResMenuDetails(
    //   jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    //     ?.card?.card?.itemCards
    // );
  };

  return { resMenuDetails, resCategoryDetails };
};

export default useRestaurantMenu;
