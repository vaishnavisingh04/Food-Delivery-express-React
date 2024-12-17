import { LOGO_URL } from "../utilities/constant";
import { useState } from "react";

//Header componenet
const Header = () => {
  let btnName = "Login"
  const [btnNameReact, setbtnNameReact]= useState("Login");
  return(
   <div className="header">
   <div className="logo-container">
   <img className="logo" src={LOGO_URL} />
   </div>
   <div className="nav-items">
   <ul>
   <li>Home</li>
   <li>About Us</li>
   <li>Contact Us</li>
   <li>Cart</li>
   <button className="Login"   onClick= {()=>{
         btnNameReact === "login"
         ? setbtnNameReact("logout")
         : setbtnNameReact("login");
   }}>{btnNameReact}</button>
   </ul>
   
   </div>
   </div>
  )
  };

  export default Header;