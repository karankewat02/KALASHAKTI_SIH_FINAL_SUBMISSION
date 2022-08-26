import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CheckoutBTN.css'
export default function CheckoutBTN() {

    const navigate = useNavigate()
    const [orderPalced,setOrderPlaced] = useState(false)
    useEffect(()=>{
      if(orderPalced){

        setTimeout(()=>{
          navigate('/orderPlaced')
        },10200)
      }
    },[orderPalced])
  return (
    <button onClick={()=>setOrderPlaced(!orderPalced)} className={`order ${orderPalced?"animate":""}`}>
      <span className="default">Complete Order</span>
      <span className="success">
        Order Placed
        <svg viewbox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
  );
}
