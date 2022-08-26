import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Wishlist from "./components/Wishlist/Wishlist";
import About from "./Screens/About/About";
import SellerPage from "./Screens/SellerPage/SellerPage";
import Cart from "./Screens/Cart/Cart";
import Checkout from "./Screens/Checkout/Checkout";
import Ecompage from "./Screens/Ecommerce/Ecommerce";
import Home from "./Screens/Home/Home";
// import Login from "./Screens/Login/Login";
import Login2 from "./Screens/Login2/Login2";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";
import Register from "./Screens/Register/Register";
import Map from './Screens/Map/Map'
import OrderConfirmation from "./Screens/OrderConfirmation/OrderConfirmation";
import Admintext from "./Screens/AdminTest/AdminTest";
import Context from './Context/Context'
import Error from "./Screens/Error/Error";
import NotFound from "./Screens/NotFound/NotFound";
import Homedecor from "./Screens/HomeDecort/Homedecor"
import MainProductSellerPage  from "./Screens/MainProductsellpage/MainProductSellerPage"
import Help from "./Screens/Help/Help";
import News from "./Screens/News/News";
import HomeDecortRegion from "./Screens/HomeDecortRegion/HomeDecortRegion";

function App() {

  const [loggedInUserData, ] = useContext(Context);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}  />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ecommerce" element={<Ecompage />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={loggedInUserData.status?<Cart />:<Error/>} />
        <Route path="/checkout" element={loggedInUserData.status ? <Checkout /> : <Error/>}   />
        <Route path="/seller/*" element= { loggedInUserData.status ? <SellerPage /> : <NotFound/>} />
        <Route path="/region" element={<Map />} />
        <Route path="/orderPlaced" element={ loggedInUserData.status ? <OrderConfirmation /> : <Error/>} />
        <Route path="/admin/*" element={<Admintext />} />
        <Route path="/Homedecor" element={<Homedecor/>} />
        <Route path="/HomeDecortRegion" element={<HomeDecortRegion/>} />
        <Route path="/MainProduct" element={<MainProductSellerPage />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/news" element={<News/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
