import ResCard from "./ResCard";
import {resListData} from "../Utils/mockData"

import { useState } from "react";

const Body = () => {
    let [listOfRestuarant, setListOfRestuarant] = useState(resListData);

    const filter_topRating = () => {
        let newList = listOfRestuarant.filter((res)=> res.data.rating > 4)
        setListOfRestuarant(newList);
    }

    return (
      <div className='body'>
        <div className='search'>
            <button onClick={filter_topRating}>Filter top rated rest</button>
        </div>
        <div className='res-container'>
          {
            //console.log(resListData)
            listOfRestuarant.map((restaurant) => {
              return <ResCard key={restaurant.data.imageID} resData={restaurant} />
            })
          }          
        </div>
      </div>
    );
  }

  export default Body;