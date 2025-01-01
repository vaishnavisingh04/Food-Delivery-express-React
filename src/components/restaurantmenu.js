import {useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilities/constant";
import useRestaurantmenu from "../utilities/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = ()=>{

  
  const {resId}= useParams();
  const resInfo= useRestaurantmenu(resId);
  const [showIndex, setshowIndex]=useState(null);
  


if(resInfo== null)return<Shimmer/>;
const {name,cuisines,costForTwoMessage,avgRating}= resInfo?.cards[2]?.card?.card?.info;
const {itemCards}=  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)//

const Categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
       c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);
console.log(Categories);




return (

  <div className="text-center">
    <h1 className="font-bold my-6 text-2xl ">{name}</h1>
    <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}-avgRating:
      {avgRating}</p>
      {}
      {Categories.map((category, index)=>(<RestaurantCategory key= {category?.card?.card?.title} data= {category?.card?.card}
      showItems= {index=== showIndex?true:false}
      setshowIndex= {()=> setshowIndex(index)}
      
      
      />))}

  </div>
);

};

export default Restaurantmenu;