import React, { useContext, useEffect, useState } from "react";
import Style from "./Ecommerce.module.css";
import Products from "./product.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";

const axios = require("axios").default;
export default function Ecompage() {
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:5000/api/products")
      .then(function (response) {
          setProductData(response.data);
          console.log(response)
          console.log(ProductData)
          setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
        toast.error(" Failed!", { duration: 4000 });
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={Style.sort}>
            <p>Newest First</p>
            <p>Price Low to High</p>
            <p>Price High to Low</p>
          </div>

          <div className={Style.productContiner}>

            {ProductData.map((data, index) => {
              return <ProductCard data={data} key={index} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
