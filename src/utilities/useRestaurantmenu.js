import {useEffect, useState} from "react";
import { MENU_API } from "./constant";

const useRestaurantmenu= (resId)=>{
const [resInfo,setresInfo]= useState(null)

useEffect(()=>{
  fetchdata();
}, []);

const fetchdata= async () =>{
  const data= await fetch(
     MENU_API +resId+"&catalog_qa=undefined&submitAction=ENTER");
  
    const json = await data.json();
    //console.log(json);
    setresInfo(json.data)
};



return resInfo;

};
export default useRestaurantmenu;