import {useEffect, useState} from "react"
import "./Electronics.css"
import Card from "../product card/card";
import { electronicsService } from "../../services/electronics/electronicsService";


function Electronics(){

  let [electronicProducts,setElectronicProducts] = useState([]);

    useEffect(()=>{getElectronicData();},[])

  const getElectronicData = () => {
    electronicsService()
      .then((res) => {
        console.log(res.data);
        setElectronicProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching electronic data:", error);
        alert("Something went wrong while getting electronics data");
      });
      
  };

  return (
    <div className="electronicsContainer">
         
        {electronicProducts.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly gap-3">
          {electronicProducts.map(function (product) {
            return (
              <Card products={product}/>
            ) ;
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "50px" , fontSize:"24" }}>
          No Electronics Data
        </h2>
      )}

    </div>
  )
};

export default Electronics;
