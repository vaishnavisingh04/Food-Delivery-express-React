import { LOGO_URL } from "../utilities/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utilities/useOnlinestatus";
import Usercontext from "../utilities/Usercontext";
import { useSelector } from "react-redux";

//Header componenet
const Header = () => {
  const [btnNameReact, setbtnNameReact]= useState("Login");
  const onlinestatus =useOnlinestatus();

  const {loggedInUser}=useContext(Usercontext);
  //Subscribing to the using selector
  const cartItems= useSelector((store)=>store.cart.items);



  return(
   <div className="bg-pink-100 flex justify-between shadow-lg ">
   <div className="logo-container">
   <img className="w-56" src={LOGO_URL} />
   </div>
   <div className="flex items-center ">
   <ul className="flex p-4 m-4 ">
      <li className="px-4" >Online status: {onlinestatus? "yes":"No"}</li>
   <li className="px-4"><Link to= "/">HOME</Link></li>
   <li className="px-4"><Link to= "/about">About</Link></li>
   <li className="px-4"><Link to= "/contact">Contact Us</Link></li>
   <li className="px-4 font-bold"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
   <button className="Login"   onClick= {()=>{
         btnNameReact === "login"
         ? setbtnNameReact("logout")
         : setbtnNameReact("login");
   }}>{btnNameReact}</button>
   <li className="px-4 font-bold">{loggedInUser}</li>
   </ul>
   
   </div>
   </div>
  )
  };

  export default Header;