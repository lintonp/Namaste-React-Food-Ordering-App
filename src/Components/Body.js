import ResCard from "./ResCard";
import {resListData} from "../Utils/mockData"
import {SWIGGY_API_URL} from "../Utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredListOfRestuarant, setFilteredListOfRestuarant] = useState(listOfRestuarant);
    
    const [filterButton, setFilterButton] = useState(true);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    let rawDataJson;

    useEffect(() => {
      console.log("UseEffect Called");
      // fetchDataAPI();
      getResList();
    }, []);
    
    console.log("Body Rendered");

    const fetchDataAPI = async () => {
      //for now without API
      setListOfRestuarant(resListData);
      console.log("Calling API");
      const raw_data = await fetch(SWIGGY_API_URL);
      console.log(raw_data);
      rawDataJson = raw_data.json();
      console.log(rawDataJson);
    }

    const getResList = () => {
      console.log("Fetching List");
      fetch(SWIGGY_API_URL).then(
        (raw) => {
          console.log(raw);
          raw.json().then(
            (data) => {
              console.log(data.data?.cards[2]?.data?.data?.cards)
              setListOfRestuarant(data.data?.cards[2]?.data?.data?.cards);
              setFilteredListOfRestuarant(data.data?.cards[2]?.data?.data?.cards)
            }
          )
        }
      )
    }

    const filter_topRating = () => {
      console.log(rawDataJson);
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
    
    if(onlineStatus===false){
      return <h1>Sorry, You are Offline.</h1>
    }

    if(filteredListOfRestuarant.length === 0){
      return <h1>Loading</h1>
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
              return <Link key={restaurant.data.id} to={"restaurant/" + restaurant.data.id}><ResCard resData={restaurant} /></Link>
            })
          }          
        </div>
      </div>
    );
  }

  export default Body;