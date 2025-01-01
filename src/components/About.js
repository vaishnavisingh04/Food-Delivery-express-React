import User from "./User";
import Userclass from "./Userclass";
import { useContext } from "react";
import Usercontext from "../utilities/Usercontext";

const About = () =>{
  const {loggedInUser}=useContext(Usercontext);
  return (
    <div>
      <h1>This is About page</h1>
      <h2 className="font-semibold">User:{loggedInUser}</h2>
      <Userclass name={"Vaishnavi(class)"}/>;
    </div>
  )
};

export default About;