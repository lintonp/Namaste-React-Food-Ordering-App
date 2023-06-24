import ResCard from "./ResCard";
import {resListData} from "../Utils/mockData"

import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState(resListData);
    const [filterButton, setFilterButton] = useState(true);

    useEffect(() => {
      console.log("UseEffect Called");
    }, []);
    
    console.log("Body Rendered");

    const filter_topRating = () => {
      if(filterButton){
        let newList = listOfRestuarant.filter((res)=> res.data.rating > 4)
        setListOfRestuarant(newList);
        setFilterButton(false);
      }
      else{
        setListOfRestuarant(resListData);
        setFilterButton(true);
      }
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