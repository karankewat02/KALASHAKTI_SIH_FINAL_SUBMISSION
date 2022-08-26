import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Style from "./SellerPage.module.css";
import Context from '../../Context/Context'
import Loading from "../Loading/Loading";
import { Routes,Route, Link } from "react-router-dom";
import AddProduct from "./SubRoutes/AddProduct";
import Orders from "./SubRoutes/Orders";
import ListedProducts from "./SubRoutes/ListedProducts";
const axios = require("axios").default;
export default function SellerPage() {


  return (
    <div className={Style.AdminPage}>
      <h1>Seller Dashboard</h1>

      <div className={Style.sellerOptions}>

          <Link to="addProduct"><div>Add Product</div></Link>

          <Link to="orders"><div>Orders</div></Link>

          <Link to="product"><div>Listed Prouducts</div></Link>

      </div>

      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="addProduct" element={<AddProduct/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="product" element={<ListedProducts/>}/>
      </Routes>

    </div>
  );
}
