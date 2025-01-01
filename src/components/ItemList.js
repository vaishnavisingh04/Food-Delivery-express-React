import { CDN_URL } from "../utilities/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const ItemList= ({items})=>{

  const dispatch= useDispatch();
  const handleAdditem=(item)=>{
    dispatch(addItem(item));
  };

return (<div>
   
    {items?.map((item)=>(
      <div key ={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between">
      
      <div className="w-9/12">
      <div className="py-2">
        <span >{item.card.info.name}</span>
        <span>-₹ {item.card.info.price?item.card.info.price/100 : item.card.info.defaultprice/100}</span>
      </div>
      <p className="text-xs">{item.card.info.description}</p>
    </div>
    <div className="w-40 p-4">

        <div className="absolute">
          <button className="p-2 mx-16 bg-black text-white shadow-lg " onClick={()=>handleAdditem(item)}>ADD+</button>
        </div>

    <img src={`${CDN_URL}${item.card.info.imageId}`} className="w-full" alt="Item Image" />
      </div>
    </div>
  
  ))}
  </div>
);
};

export default ItemList;