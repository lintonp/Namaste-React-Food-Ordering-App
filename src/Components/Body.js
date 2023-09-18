import ResCard, { withVeg } from "./ResCard";
// import { resListData } from "../Utils/mockData";
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

  const ResCardVeg = withVeg(ResCard);

  const getResList = async () => {
    // console.log("Fetching List");
    // const rawData = await fetch(SWIGGY_API_URL);
    // const data = await rawData.json();
    let data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    data = json;

    let list =
      data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // list.map((res) => console.log(res));
    setListOfRestuarant(list);
    setFilteredListOfRestuarant(list);
  };
  useEffect(() => {
    // fetchDataAPI();
    getResList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filter_topRating = () => {
    // console.log("filteredListOfRestuarant", filteredListOfRestuarant);
    if (filterButton) {
      let newList = filteredListOfRestuarant.filter(
        (res) => res.info.avgRating > 4
      );
      setFilteredListOfRestuarant(newList);
      setFilterButton(false);
    } else {
      setFilteredListOfRestuarant(listOfRestuarant);
      setFilterButton(true);
    }
  };

  const searchFilter = () => {
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
    <div className="p-4 items-center">
      <div className="flex m-2 content-center">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black p-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 p-2 bg-green-200 rounded-lg hover:bg-green-300"
            onClick={searchFilter}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="p-2 rounded-lg bg-blue-200  hover:bg-blue-300"
            onClick={filter_topRating}
          >
            {filterButton ? "Filter top rated restaurants" : "Reset Filter"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          //console.log(resListData)
          filteredListOfRestuarant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"restaurant/" + restaurant.info.id}
                data-testid="resCardID"
              >
                {restaurant.info.veg ? (
                  <ResCardVeg resData={restaurant} />
                ) : (
                  <ResCard resData={restaurant} />
                )}
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
