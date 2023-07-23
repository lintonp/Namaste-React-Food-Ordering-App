import { useState, useEffect } from "react";
import {SWIGGY_MENU_API_URL} from "../Utils/constants"

const useRestaurantMenu = (resID) => {
    const [resDetails, setResDetails] = useState({});
    const [resMenuDetails, setResMenuDetails] = useState([]);

    useEffect(()=>{
        fetchResDetails();
    },[])

    const fetchResDetails = async () => {
        // console.log("Fetching inside Restaurant Menu");
        const rawData = await fetch(SWIGGY_MENU_API_URL + resID);
        const jsonData = await rawData.json();
        setResDetails(jsonData?.data?.cards[0]?.card?.card?.info);
        console.log(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResMenuDetails(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);        
    }

    return {resDetails, resMenuDetails};
}

export default useRestaurantMenu;