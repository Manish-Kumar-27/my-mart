import React, { useEffect, useState } from "react"
import { mensClothingService } from "../../services/mensclothing/mensclothingService";
import Card from "../product card/card";

function Mensclothing(){

  let [mensClothing,setMensClothing] = useState([]);

      useEffect(()=>{getMensClothingData();},[])

   const getMensClothingData = ()=>{
    mensClothingService()
    .then((res)=>{console.log(res.data); setMensClothing(res.data)})
    .catch((error)=>{console.log(error) ; alert("catch is executed something is wrong with Mens Clothing Data")})
   }

  return (
    <div>
      
      
      {mensClothing.length> 0 ? (<div className="d-flex flex-wrap justify-content-evenly gap-3" >{mensClothing.map((product)=>{return <Card products={product}/>})} </div>) : (<h2 style={{color:"red" , fontSize:"24" , marginTop:"50px", textAlign:"center"}} >NO MENS CLOTHING AVAILABLE</h2>)}

    </div>
  )
};

export default Mensclothing;
