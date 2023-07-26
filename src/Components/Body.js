import ResCard from "./ResCard";
import { resListData } from "../Utils/mockData";
import { SWIGGY_API_URL } from "../Utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarant, setListOfRestuarant] = useState([]);
  const [filteredListOfRestuarant, setFilteredListOfRestuarant] =
    useState(listOfRestuarant);

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
  };

  const getResList = () => {
    console.log("Fetching List");
    fetch(SWIGGY_API_URL).then((raw) => {
      console.log(raw);
      raw.json().then((data) => {
        console.log("data", data);
        console.log(
          data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        let list =
          data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setListOfRestuarant(list);
        setFilteredListOfRestuarant(list);
        // setListOfRestuarant(data.data?.cards[2]?.data?.data?.cards);
        // setFilteredListOfRestuarant(data.data?.cards[2]?.data?.data?.cards);
      });
    });
  };

  const filter_topRating = () => {
    console.log(rawDataJson);
    if (filterButton) {
      let newList = listOfRestuarant.filter((res) => res.info.avgRating > 4);
      setFilteredListOfRestuarant(newList);
      setFilterButton(false);
    } else {
      setFilteredListOfRestuarant(resListData);
      setFilterButton(true);
    }
  };

  const searchFilter = () => {
    console.log(searchText);
    let newList = listOfRestuarant.filter((res) => {
      return res.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setFilteredListOfRestuarant(newList);
  };

  if (onlineStatus === false) {
    return <h1>Sorry, You are Offline.</h1>;
  }

  if (filteredListOfRestuarant.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="">
      <div className="filter flex m-2 content-center">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-2 bg-green-200 rounded-lg"
            onClick={searchFilter}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-2 bg-gray-100 rounded-lg"
            onClick={filter_topRating}
          >
            Filter top rated restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {
          //console.log(resListData)
          filteredListOfRestuarant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"restaurant/" + restaurant.info.id}
              >
                <ResCard resData={restaurant} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
