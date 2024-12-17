import { CDN_URL } from "../utilities/constant";
import Body from "./Body";
//res-container
const Rescard = (props) => {
 const {resData} = props;
 const {cloudinaryImageId, name,avgRating,cuisines, costForTwo,sla}= resData?.info;
  return (
  <div className='res-card'>
     <img 
     className='res-logo'
     alt='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
     <h3> {name}</h3>
     <h4>{cuisines.join(",")}</h4>
     <h4> {avgRating}</h4>
     <h4> {costForTwo}</h4>
     <h4> {sla.slaString}</h4>
     
     
  </div>
  )
};

export default Rescard;