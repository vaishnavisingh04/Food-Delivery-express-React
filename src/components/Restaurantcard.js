import { CDN_URL } from "../utilities/constant";
import Body from "./Body";
//res-container
const Rescard = (props) => {
 const {resData} = props;
 const {cloudinaryImageId, name,avgRating,cuisines, costForTwo,sla}= resData?.info;
  return (
  <div className='m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-400'>
     <img 
     className='rounded-lg'
     alt='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
     <h3 className="font-bold py-4 text-lg"> {name}</h3>
     <h4 className="flex flex-wrap">{cuisines.join(",")}</h4>
     <h4> {avgRating}</h4>
     <h4> {costForTwo}</h4>
     <h4> {sla.slaString}</h4>
     
     
  </div>
  )
};
export const withPromotedLabel= (Rescard)=>{
   return (props)=>{
      return (
         <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>;
            <Rescard {...props}/>;
         </div>
      );
   };

};
export default Rescard;