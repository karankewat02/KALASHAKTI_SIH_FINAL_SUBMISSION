import React, { useContext, useEffect } from "react";
import Style from "./Wishlist.module.css";
import Context from "../../Context/Context";
import OrderItem from "../OrderItem/OrderItem";
import {toast} from 'react-hot-toast'
export default function Wishlist() {
  const [loggedInUserData, ] = useContext(Context);

  useEffect(()=>{
    if(!loggedInUserData.status){
        toast.error('Login First!',2000)
    }
  },[])

  return (
    <>
    {loggedInUserData.status?
      <div className={Style.WishlistContainer}>
        <div>
          <h3>{loggedInUserData.data.others.name}'s Wishlist</h3>
          <button

            >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div>
          <OrderItem editable={false} addToCart={true} />
          <OrderItem editable={false} addToCart={true} />
          <OrderItem editable={false} addToCart={true} />
        </div>
      </div>
    :<></>}
    </>
  );
}
