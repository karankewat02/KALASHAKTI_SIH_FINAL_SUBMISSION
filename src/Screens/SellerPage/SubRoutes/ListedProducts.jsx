import React, { useState, useEffect, useContext } from 'react'
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import Style from '../SellerPage.module.css'
import Context from '../../../Context/Context'

const axios = require('axios').default
export default function Orders() {
    const [loggedInUserData,] = useContext(Context)
    const [ProductData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getOrders = async () => {
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
    }

    useEffect(()=>{
        getOrders();
    },[])

  return (
    <>
    {loading?<Loading/>:
    <div>
        <h3>Listed Products</h3>

        <div className={Style.OrdersContainer}>
            {ProductData.map((e,index)=>{
                return(
                    <>
                    {e.sellerId === loggedInUserData.data._id?
                        <div key={index} className={Style.OrderCard}>
                            <div>
                                <p><small>Product id : </small>{e._id}</p>
                                <p><small>Product Name : </small>{e.title}</p>
                                <p>&#8377; {e.price}</p>
                                <p><small>Categorie : </small> {e.categories}</p>
                                <p><small>Region : </small> {e.region}</p>
                            </div>
                            <div>
                                <h4>Product Images</h4>
                                <div style={{marginBlock:'1rem'}}>
                                    {e?.img.map((img,index)=>{
                                        return(
                                            <img style={{marginInline:"1rem"}} width={100} key={index} src={img} alt="product" />
                                        )
                                    })}
                                </div>
                                <p><small style={{color:e.isApproved?"green":"red"}}>Approved :</small>{e.isApproved?"Yes":"Pending"}</p>
                            </div>
                            <small>{e.createdAt}</small>
                        </div>
                        :<></>}
                    </>
                    )
                })}

        </div>
    </div>
    }
    </>
  )
}
