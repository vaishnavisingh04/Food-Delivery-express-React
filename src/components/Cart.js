import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilities/cartSlice";


const Cart= ()=>{
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  };
  return (
    <div className="m-10 p-10 text-center">
      <h1 className="text-center font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items= {cartItems} />
        <button className="bg-black text-white rounded-lg p-2 m-2" 
        onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length==0 && <h1 className="font-bold text-center">Your cart is Empty</h1>}
      </div>
    </div>
  )
};

export default Cart;