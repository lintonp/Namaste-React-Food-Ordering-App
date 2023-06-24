import ResCard from "./ResCard";
import {resListData} from "../Utils/mockData"

import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState(resListData);
    const [filteredListOfRestuarant, setFilteredListOfRestuarant] = useState(listOfRestuarant);
    
    const [filterButton, setFilterButton] = useState(true);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      console.log("UseEffect Called");
      fetchDataAPI();
    }, []);
    
    console.log("Body Rendered");

    const fetchDataAPI = () => {
      //for now without API
      setListOfRestuarant(resListData);
    }

    const filter_topRating = () => {
      if(filterButton){
        let newList = listOfRestuarant.filter((res)=> res.data.rating > 4)
        setFilteredListOfRestuarant(newList);
        setFilterButton(false);
      }
      else{
        setFilteredListOfRestuarant(resListData);
        setFilterButton(true);
      }
    }

    const searchFilter = () => {
      console.log(searchText);
      let newList = listOfRestuarant.filter((res)=>{
        return res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      })
      setFilteredListOfRestuarant(newList)
    }

    return (
      <div className='body'>
        <div className='search'>
            <input type="text" 
              value={searchText} 
              onChange={(e)=>{
                setSearchText(e.target.value);
              }}
            />
            <button onClick={searchFilter}>Search</button>
            <button onClick={filter_topRating}>Filter top rated rest</button>
        </div>
        <div className='res-container'>
          {
            //console.log(resListData)
            filteredListOfRestuarant.map((restaurant) => {
              return <ResCard key={restaurant.data.imageID} resData={restaurant} />
            })
          }          
        </div>
      </div>
    );
  }

  export default Body;