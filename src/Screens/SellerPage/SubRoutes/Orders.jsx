import React, { useState, useEffect, useContext } from 'react'
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import Style from '../SellerPage.module.css'
import Context from '../../../Context/Context'

const axios = require('axios').default
export default function Orders() {
    const [loggedInUserData,] = useContext(Context)
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const getOrders = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'token': `Bearer ${loggedInUserData.data.accessToken}`
        }
        axios.get("http://localhost:5000/api/order",{
            headers: headers
        })
        .then(function (response) {
            setOrders(response.data);
            console.log(response)
            setLoading(false)
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false)
          toast.error(" Failed!", { duration: 4000 });
        });
    }

    useEffect(()=>{
        getOrders();
    },[])

  return (
    <>
    {loading?<Loading/>:
    <div>
        <h3>Orders</h3>

        <div className={Style.OrdersContainer}>
            {orders.map((e,index)=>{
                return(
                    <div key={index} className={Style.OrderCard}>
                        <div>
                            <p><small>Order id : </small> {e._id}</p>
                            <p><small>Product id : </small>{e.products[0].productId}</p>
                            <p>&#8377; {e.ammount}</p>
                            <p><small>Quantity : </small> {e.products[0].quantity}</p>
                        </div>
                        <div>
                            <h4>Delivery Details</h4>
                            <p><small>Address :</small>{e.address}</p>
                            <p><small>Phone No :</small>{e.phno}</p>
                            <p><small>Email :</small>{e.email}</p>
                            <button>Mark Out for Delivery</button>
                        </div>
                        <small>{e.createdAt}</small>
                    </div>
                    )
                })}

        </div>
    </div>
    }
    </>
  )
}
