import { useState, useEffect } from "react";
import Rescard from "./Restaurantcard";
import Shimmer from "./Shimmer";

// Body componenet
const Body = () =>{
//Local state variable
const [listOfRestaurant,setlistOfRestaurant]= useState([]);
const [filteredRestaurant, setfilteredRestaurant] = useState([]);
const [searchtext, setsearchtext]= useState("");

useEffect(() => {
  fetchData();
}, []);


 const fetchData= async ()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
 const json = await data.json();
 console.log(json);
 setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
 setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 

 };
 console.log(listOfRestaurant);

 
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
   ) : (
  <div className ='body'>
     <div className='filter'>
      <div className="search">
        <input type="text" className="search-box"  value={searchtext} onChange={(e)=>{
setsearchtext(e.target.value)
        }

        }/>
        <button  onClick={()=>{
const filteredRestaurant = listOfRestaurant.filter( (res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
setfilteredRestaurant(filteredRestaurant);
        }}>Search</button>
        </div>
      <button className="filter-btn" onClick={()=> {
       const filterlist = filteredRestaurant.filter
        ((res)=>res.info.avgRating > 4.5);
        setfilteredRestaurant(filterlist);

      }}>Top Rated Restaurant</button>
     </div>
     <div className='res-container'>
         {filteredRestaurant.map((restaurant)=>(
          console.log(restaurant),
          <Rescard key ={restaurant.info.id} resData={restaurant}/>
         ))}
         

     </div>
  
  </div>
  );
  
};
  
export default Body;