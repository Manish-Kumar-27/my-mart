import React, { useEffect, useState } from "react"
import { cartService } from "../../services/cart/cartService";
import Card from "../product card/card";

function AddToCart(){
  

 let [cartItem,setcartItem] = useState();

 useEffect (()=>{getCartItem()},[]);

 const getCartItem = ()=>{
  cartService()
  .then((res)=>{setcartItem(res.data),console.log("cart data",res.data)})
  .catch((err)=>{console.error("error getting cart service",err)})
 }

 return (

  <div>
    {cartItem&&cartItem.length > 0 ? (<div className="d-flex flex-wrap justify-content-evenly gap-3">{ cartItem.map((cprod) => ( <Card products={cprod} />))}</div>) : (<div><h1>mapping error</h1></div>) }
  </div>

 )

};

export default AddToCart;
