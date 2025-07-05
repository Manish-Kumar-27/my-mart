import React, { useEffect, useState } from "react"
import { womensClothingService } from "../../services/womensclothing/womensclothing";
import Card from "../product card/card";


function Womensclothing() {

  let [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => { getWomensClothingData(); }, [])


  const getWomensClothingData = () => {

    womensClothingService()
      .then((res) => { console.log(res.data); setWomensClothing(res.data) })
      .catch((error) => { console.log(error); alert("catch is called something is wrong with womens clothing data") })

  }

  return (
    <div>
      <h2>Womens Clothing</h2>


      {
        womensClothing.length > 0 ?
          (<div className="d-flex flex-wrap justify-content-evenly gap-3"> {womensClothing.map((product) => { return <Card products={product} /> })} </div>)
          : (<h2 style={{ color: "red", fontSize: "24", textAlign: "center", marginTop: "50px", marginBottom: "200px" }}> NO WOMENS CLOTHING DATA AVAILABLE</h2>)
      }

    </div>
  )
};

export default Womensclothing;
