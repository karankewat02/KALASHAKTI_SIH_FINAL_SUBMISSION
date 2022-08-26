import React, { useEffect, useState, useContext } from "react";
import Loading from "../Loading/Loading";
import Style from "./ProductDetail.module.css";
import Context from '../../Context/Context'

import toast from "react-hot-toast";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

const axios = require("axios").default;
export default function ProductDetail() {

    const [loggedInUserData,setLoggedInUserData] = useContext(Context)
    const navigate = useNavigate();
    const DummyImg = ["https://picsum.photos/420/200",
                      "https://picsum.photos/400/200",
                      "https://picsum.photos/460/200",
                      "https://picsum.photos/500/200"]

    const [loading, setLoading] = useState(false);
    const [activeImg,setactiveImg] =useState(DummyImg[0])
    const [ProductData,setProductData] = useState({})
    
    useEffect(()=>{
        let url = window.location.href;
        const id = url.split('/').pop();

        setLoading(true)
        if(id){
            axios.get(`http://localhost:5000/api/products/find/${id}`)
            .then(function (response) {
                setProductData(response.data);
                setactiveImg(response.data.img[0])
                console.log(ProductData)
                setTimeout(()=>{
                    setLoading(false)
                },1000)
            })
            .catch(function (error) {
                console.log(error);
                setTimeout(()=>{
                    setLoading(false)
                },1000)
                toast.error(" Failed!", { duration: 4000 });
            });
        }
    },[])

    const updateCartStatus = (cartId)=>{
        const headers = {
            'Content-Type': 'application/json',
            'token': `Bearer ${loggedInUserData.data.accessToken}`
          }
        
          const data = {
            cartStatus:true,
            cartId: cartId
          }
          
        axios.put(`http://localhost:5000/api/user/${loggedInUserData.data.others._id}`, data, {
            headers: headers
        })
        .then((response) => {
            
            console.log("Cart Status update",response);
            toast.success(" Cart Status updated");
        })
        .catch((error) => {
            console.log("Cart Status update error",error);
            toast.error('Cart Status update Failed!')
        })
    }

    const handelAddWishlist=()=>{
        toast('Feature Currently under development')
    }

    const handelAddCart = ()=>{
        if(loggedInUserData.status){
            const productId = ProductData._id;
            if(loggedInUserData.data.cartStatus){
                toast('One item aleready in cart')
            }else{
                const headers = {
                    'Content-Type': 'application/json',
                    'token': `Bearer ${loggedInUserData.data.accessToken}`
                  }
                
                  const data = {
                    userId: loggedInUserData.data.others._id,
                    products: [
                        {
                            productId : productId,
                            quantity : 1
                        }
                    ]
                  }
                  
                axios.post("http://localhost:5000/api/cart/", data, {
                    headers: headers
                })
                .then((response) => {
                    updateCartStatus(response.data._id);
                    console.log(response);
                    toast.success("Added to Cart");
                    setLoggedInUserData({
                        status: false,
                        data : {},
                        cartActive: false,
                        cartId : "",
                        cartData : {},
                        checkoutPrice: 0
                    })
                    toast("Please re-login !",3000);
                    setTimeout(()=>{
                        navigate('/login')
                    },1500)
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Failed!')
                })
            }

        }else{
            toast.error("Please Login First!")
        }
    }



  return <>{loading ? <Loading /> : 
    <div className={Style.ProductDetailContainer}>
        <div className={Style.HeroDesc}>

            <div className={Style.gallary}>
                <div className={Style.Selector}>
                    {ProductData?.img?.map((e,index)=>{
                        return(
                            <div key={index} className={Style.ImgOption} onClick={()=>{setactiveImg(e)}} style={{backgroundImage:`url(${e})`}} />
                        )
                    })}
                </div>

                <div className={Style.ActiveImg} style={{backgroundImage:`url(${activeImg})`}}/>
            </div>

            <div className={Style.ProductDescriptionMain}>
                <p style={{color:`var(--tertiary)`,fontSize:'.9rem'}}>{/*ProductData?ProductData.categories.map((e,index)=>{return e+' | '}):*/'Category'}</p>
                <h1 style={{fontSize:'2rem', letterSpacing:'1.5px'}}>{ProductData?.title}</h1>
                
                <p style={{fontSize:'.9rem',color:'red',marginTop:'1rem'}}><del>&#8377;{ProductData?.price + Math.floor(Math.random() * 1000)}</del></p>
                <p style={{fontSize:'1.75rem'}}>&#8377; {ProductData?.price}</p>
                {ProductData?.variantStatus?
                <>
                    <p style={{marginTop:'2rem',marginBottom:".5rem"}}>Varients</p>
                    <div className={Style.ProductSizeVarients}>
                        <div className={Style.SizeOption}>S</div>
                        <div className={Style.SizeOption}>M</div>
                        <div className={Style.SizeOption}>L</div>
                        <div className={Style.SizeOption}>XL</div>
                        <div className={Style.SizeOption}>XXL</div>
                    </div>
                </>
                : <></>}

                <div className={Style.CheckOutOptions}>
                    <button onClick={handelAddWishlist}><i className="fa-solid fa-heart"></i> Wishlist</button>
                    <button onClick={handelAddCart}><i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
                </div>

                <div className={Style.ProductDescription}>
                    <p>Product Description</p>
                    <p>{ProductData.desc}</p>
                </div>
            </div>
        </div>


        <div style={{display:'grid',gridTemplateColumns:`repeat(2,1fr)`,gap:'2rem',alignItems:'center',marginTop:'3rem',minHeight:'50vh'}}>  

                <div className={Style.ProductHighlights}>

                    <p>Procuct highlights</p>

                    <ul>
                        <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Authentic Indian Art</li>
                        <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Tradional</li>
                        <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Handcrafted</li>
                        <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Child Safe</li>
                        {/* <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Easy to use</li> */}
                        {/* <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Easy to use</li> */}
                        {/* <li><i style={{color:`var(--tertiary)`}} className="fa-solid fa-star"></i> &nbsp; Easy to use</li> */}
                    </ul>

                </div>

                <div className={Style.ProductSpecification}>
                    <p>Product Specifications</p>

                    <ul>
                        <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Weight</p> | <p>200gm</p></li>
                        <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Height</p> | <p>200gm</p></li>
                        <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Length</p> | <p>200gm</p></li>
                        <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Breadth</p> | <p>200gm</p></li>
                        {/* <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Weight</p> | <p>200gm</p></li> */}
                        {/* <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Weight</p> | <p>200gm</p></li> */}
                        {/* <li><p><i style={{color:`var(--tertiary)`}} className="fa-solid fa-circle-info"></i> &nbsp; Weight</p> | <p>200gm</p></li> */}
                    </ul>
                </div>

        </div>
        {/* <p>Similar Products</p>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.SmilarProductCard}>
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Product Name</p>
                </div>
            </SwiperSlide>


        </Swiper> */}

    </div>
  }</>;
}
