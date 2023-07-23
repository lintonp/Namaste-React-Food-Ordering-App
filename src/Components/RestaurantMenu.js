import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import {SWIGGY_MENU_API_URL} from "../Utils/constants"

const RestaurantMenu = () => {
    const {resID} = useParams();
    const [resDetails, setResDetails] = useState({});
    const [resMenuDetails, setResMenuDetails] = useState([]);

    const {name, cuisines} = resDetails;

    useEffect(() => {
        fetchResDetails();
    },);

    const fetchResDetails = () => {
        // console.log("Fetching inside Restaurant Menu");
        fetch(SWIGGY_MENU_API_URL+resID)
        .then((rawData) => {
            rawData.json()
            .then((data) => {
                console.log(data);
                // console.log(data?.data?.cards[0]?.card?.card?.info);
                setResDetails(data?.data?.cards[0]?.card?.card?.info);
                console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
                setResMenuDetails(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            })
        });
    }

    return(
        <div className="restaurant-menu-container">
            <h1>Restaurant Name - {name}</h1>
            <h3>Restaurant Cuisines - {cuisines}</h3>
            <ul>
                {resMenuDetails.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name}</li>
                })}
            </ul>
        </div>
    );
}

export default RestaurantMenu;