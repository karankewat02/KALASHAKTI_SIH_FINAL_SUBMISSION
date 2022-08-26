import React, { useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Styles from "./MainProductseller.module.css"
import tanjore from "./tanjorepainting.png"
import Saree from "./saree.png"
import rajsathani from "./rajsathani.png"
import Context from '../../Context/Context'
const MainProductSellerPage = () => {
    const [loggedInUserData, setLoggedInUserData] = useContext(Context)



    return (
        <>
            <div  >
                <div className={Styles.productnav}  >
                    <div className={Styles.picard} >
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'decor' }
                            })
                        }} to="/Homedecor">Home Decor</Link>
                    </div>
                    <div className={Styles.picard}>
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://storage.myphotoprint.in/products/2111301724395878.jpg" alt="" />
                            <br />
                        </div>
                        <Link to="/Homedecor">Souvenir</Link>
                    </div>
                    <div className={Styles.picard} >
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1590593162201-f67611a18b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'art' }
                            })
                        }} to="/Homedecor">Arts</Link>
                    </div>

                    <div className={Styles.picard}>
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'handloom' }
                            })
                        }} to="/Homedecor">Handloom</Link>
                    </div>

                    <div className={Styles.picard}>
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1600364971552-381b40141177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'handicraft' }
                            })
                        }} to="/Homedecor">Handicraft</Link>
                    </div>

                    <div className={Styles.picard}>
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'bags' }
                            })
                        }} to="/Homedecor">Bags</Link>
                    </div>

                    <div className={Styles.picard}>
                        <div className={Styles.imgcircle}>
                            <img className={Styles.imageins} src="https://images.unsplash.com/photo-1600685912448-8bc35c141e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                        <Link onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'others' }
                            })
                        }} to="/ecommerce">Others</Link>
                    </div>
                </div>

            </div>
            <div className={Styles.productmainqualitysection} >
                <div className={Styles.mainflexsection}>
                    <div className={Styles.mainsectionheading}>
                        <h1>Make you Home</h1>
                        <h3>more beautiful</h3>
                        <h4>than ever</h4>
                        <p style={{ color: "#fff" }} >It is evident that Indian Handicrafts & Artwork is famous all over the world. Due to the massive use of internet across the nation, the sales of these handicrafts have increased three folds since when they have seen exposure in the online stores.</p><br />
                        <p style={{ color: "#fff" }}> <i style={{ color: "#fff", border: "1px solid white ", padding: "0.4rem", borderRadius: "8rem", marginRight: "0.4rem" }} className="fa-solid fa-check"></i> High Quality Material</p><br />
                        <p style={{ color: "#fff" }}> <i style={{ color: "#fff", border: "1px solid white ", padding: "0.4rem", borderRadius: "8rem", marginRight: "0.4rem" }} className="fa-solid fa-check"></i> Designed by Indian Artsians</p><br />
                        <p style={{ color: "#fff" }}> <i style={{ color: "#fff", border: "1px solid white ", padding: "0.4rem", borderRadius: "8rem", marginRight: "0.4rem" }} className="fa-solid fa-check"></i> Fine and Genuine Quality work</p>
                    </div>

                    <div className={Styles.mainsectionimage}  >
                        <img src={tanjore} alt="" />
                    </div>
                </div>
            </div>


            <div className={Styles.mainproductcardsection}>
                <h1 style={{ color: "#557571", textAlign: "center", fontWieght: "200" }} >Our Signature Products</h1><br />
                <div className={Styles.FrequentProductflex} >

                    <div className={Styles.container}>
                        <div className={Styles.card}>
                            <div className={Styles.imgBx}>
                                <img src={tanjore} alt="" />
                            </div>

                            <div className={Styles.contentBx}>

                                <h2>Tanjore Painting</h2>
                                <Link to="/" >Buy Now</Link>
                            </div>

                        </div>
                    </div>
                    <div className={Styles.container}>
                        <div className={Styles.card}>
                            <div className={Styles.imgBx}>
                                <img style={{ height: "50%", width: "50%" }} src={Saree} alt="nike-air-shoe" />
                            </div>

                            <div className={Styles.contentBx}>

                                <h2>Banarsai Saree</h2>
                                <Link to="/" >Buy Now</Link>
                            </div>

                        </div>
                    </div>
                    <div className={Styles.container}>
                        <div className={Styles.card}>
                            <div className={Styles.imgBx}>
                                <img style={{ height: "50%", width: "50%" }} src={rajsathani} alt="nike-air-shoe" />
                            </div>

                            <div className={Styles.contentBx}>

                                <h2>Rajasthani Bag</h2>
                                <Link to="/" >Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.productcollectioncard} >
                <br />
                <h1 style={{ color: "#fff", textAlign: "center", fontWeight: "400" }} >FAQ</h1>
                <div style={{ Display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "center", padding: "1rem" }}>
                    <div className={Styles.cardproduct}>
                        {/* <h3>Top Picks for Home</h3>
                                <div style={{padding:"1rem",display:"flex",flexWrap:"wrap",width:"200px",height:"200px"}}>
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                            <img style={{width:"20px",height:"20px"}} src={Saree} alt="" />
                                </div> */}
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Do you ship to my country?</summary>
                            <p>We’ve shipped authentic Indian handloom and handicrafts to over 200+ countries and we love adding more to the list!

                                Plus you get free worldwide tracked shipping on all orders over $40</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Why can't we place bulk order?</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                    </div>
                </div>


            </div>
        </>
    )
}

export default MainProductSellerPage