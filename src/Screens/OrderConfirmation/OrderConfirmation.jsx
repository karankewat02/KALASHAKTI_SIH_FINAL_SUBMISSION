import React from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './OrderConfirmation.module.css'

export default function OrderConfirmation() {

    const navigate = useNavigate();


  return (
    <div className={Style.ConfirmationContainer}>
        <video loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-order-confirm-5146444-4308302.mp4" type="video/mp4" autoPlay="autoplay" loop="loop"></video>
        <h2>Order Placed Successfully✅</h2>
        <p>Further Details will be shared via registered email and mobile number</p>
        <button onClick={()=>navigate("../home", { replace: true })}>Continue Shopping</button>
    </div>
  )
}
