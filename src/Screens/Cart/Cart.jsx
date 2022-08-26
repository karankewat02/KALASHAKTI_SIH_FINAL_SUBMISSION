import React, { useState, useContext, useEffect } from 'react'
import Loading from '../Loading/Loading'
import Style from './Cart.module.css'
import Context from '../../Context/Context'
import OrderItem from '../../components/OrderItem/OrderItem'
import { toast } from 'react-hot-toast'
import {Link} from 'react-router-dom'

const axios = require('axios').default

export default function Cart() {
    const [loggedInUserData,] = useContext(Context)
    const [loading,setLoading] =useState(false)
    const [userCartData,setUserCartData] = useState({})
    const getData=()=>{
            setLoading(true)
            const headers = {
                'Content-Type': 'application/json',
                'token': `Bearer ${loggedInUserData.data.accessToken}`
            }
            axios.get(`http://localhost:5000/api/cart/find/${loggedInUserData.data.others._id}`, {
                headers: headers
            })
            .then((response) => {
                console.log(response)
                // data get fetched successfully 
                setUserCartData(response.data) 
                console.log(response.data)
                toast.success(" Cart Status updated");
                setLoading(false)
            })
            .catch((error) => {
                console.log("Cart Data error",error);
                toast.error('Cart Data Failed!')
                setLoading(false)
            })
    }


    useEffect(()=>{    
        getData();
    },[])



    return (
    <>
        {loading?<Loading/>:
        <>
        {loggedInUserData.cartActive ?
        <>{loggedInUserData.status?
        <div className={Style.CartContainer}>

            <h1>{loggedInUserData.data.others.name}'s Cart</h1>
            <div className={Style.OrderSummary}>
                <div>
                    <p>Orders</p>
                    {userCartData?.products?.map((e,index)=>{
                        return(
                            <>
                            {loading?"Loading...":
                                <OrderItem key={index} quantity={e.quantity} cartID={userCartData._id} cartData={userCartData} data={e} editable={true} />
                            }
                            </>
                        )
                    })}
                </div>

                
                <Link to='/checkout'><button>Confirm and Checkout</button></Link>
            </div>
            </div>
            :<p>Loign First</p>}
        </>
        :
            <p>Nothing to See here go buy something first</p>
        }
        </>
        }
    </>
  )
}
