import { useState, useEffect } from "react";
import Rescard, {withPromotedLabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utilities/useOnlinestatus";
import { useContext } from "react";
import Usercontext from "../utilities/Usercontext";;
// Body componenet
const Body = () => {
  //Local state variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const RestaurantCardPromoted= withPromotedLabel(Rescard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
 const Onlinestatus= useOnlinestatus();

 if(Onlinestatus===false){
  return <h1>Hii!! Something issue with your internet connection!!</h1>
 };
const {loggedInUser,setUserName}= useContext(Usercontext);
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button className="px-4 py-2 m-4 bg-red-300 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-400 rounded-lg"
          onClick={() => {
            const filterlist = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredRestaurant(filterlist);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className=" m-4 p-4 flex items-center">
          <label>Username:</label>
          <input className="border-black border p-2" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          //console.log(restaurant),

          <Link key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}>
            {
              (restaurant.info.promoted)?<RestaurantCardPromoted resData= {restaurant}/>:<Rescard resData={restaurant} />
            };
          
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
