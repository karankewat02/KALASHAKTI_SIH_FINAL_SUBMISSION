import React from 'react'
import Styles from '../MainProductsellpage/MainProductSellerPage'

export default function News() {
  return (
    <div style={{padding:"0 10vw",backgroundColor:"#51a789",minHeight:'70vh'}} className={Styles.productcollectioncard} >
                <br />
                <h1 style={{ color: "#fff", textAlign: "center", fontWeight: "400" }} >Schemes</h1>
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
                            <summary>Handloom Weavers Comprehensive Welfare Scheme</summary>
                            <p>We’ve shipped authentic Indian handloom and handicrafts to over 200+ countries and we love adding more to the list!

                                Plus you get free worldwide tracked shipping on all orders over $40</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>National Handloom Development Program(NHDP)</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Deen Dayal Hathkargha Protsahan Yojana</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Handloom Marketing Assistance</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Weaver MUDRA Assistance</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>Yarn Supply Scheme</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                        <br />
                        <br />
                        <details style={{ color: "#FFFFF0" }} >
                            <summary>All India Handloom Board abolished in 2020</summary>
                            <p>KalaShakti cuts off the middleman. Bulk order may create a possibility of people finding a loop hole in our policy and so bulk order are disbanded.</p>
                        </details>
                    </div>
                </div>
    </div>
  )
}
