import React, { useState } from "react"
import { useEffect } from "react";
import { productsService } from "../../services/products/productService";
import Card from "../product card/card";
import "./Home.css"

function Home(){

 let [product,setProduct] = useState();

 useEffect(()=> {getProductsData()},[])

 const getProductsData = ()=> {
  productsService()
  .then((res)=>{console.log(res.data);setProduct(res.data)})
  .catch((err)=>{console.error("Error fetching productsService Data",err.data)})
 }

  return (
    <div>
      <div className="animeImages" onClick= {()=> {window.location.reload()}} style={{cursor : "pointer"}}></div>
      <div>
      <div >
        {product&&product.length > 0 ? ( <div className="d-flex flex-wrap justify-content-evenly gap-3">{product.map((prod)=>{return <Card products={prod}></Card> })}</div>) 
        : (<div><h1> Mapping Error </h1></div>)  }
      </div>
      </div>
    </div>
  )
};

export default Home ;
