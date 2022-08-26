import React, { useEffect, useContext, useState } from "react";
import Style from "./Checkout.module.css";
import OrderItem from "../../components/OrderItem/OrderItem";
import Context from "../../Context/Context";
import CheckoutBTN from "../../components/CheckoutBTN/CheckoutBTN";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";
const axios = require("axios").default;
export default function Checkout() {

  const [loggedInUserData,setLoggedInUserData] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [userCartData, setUserCartData] = useState({});
  
  const [name, setName] = useState("");
  const [phno, setPhno] = useState(0);
  const [email, setEmail] = useState("");
  const [country,setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState(0);
  const [landmark, setLandmark] = useState("");
  const [completeAddress ,setCompleteAddress] = useState("");

  useEffect(()=>{
    const deliveryAddress = 'country='+country+'address='+address+'address2='+address2+'pincode='+pincode +'landmark='+landmark;
    setCompleteAddress(deliveryAddress)
  },[country,address,address2,pincode,landmark])


  const getData = () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${loggedInUserData.data.accessToken}`,
    };
    axios.get(
        `http://localhost:5000/api/cart/find/${loggedInUserData.data.others._id}`,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        // data get fetched successfully
        setUserCartData(response.data);
        toast.success(" Cart Status updated");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Cart Data error", error);
        toast.error("Cart Data Failed!");
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);



  const handelCheckOut=()=>{
    if(name,email,phno,country,address,address2,pincode,landmark){
      const headers = {
        "Content-Type": "application/json",
        'token': `Bearer ${loggedInUserData.data.accessToken}`,
      };
      const data = {...userCartData,address: completeAddress, ammount : 350, phno : phno , email : email};
      axios
      .post(`http://localhost:5000/api/order`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response)
        toast.success(" Order pLaced successfully");
      }).catch((error) => {
        console.log(" error", error);
        toast.error("Order Failed!");
      })
    }else{
      toast.error("Please fill all the fields");
    }
  }
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={Style.Checkout}>
          <div className={Style.checkoutForm}>
            <form action="">
              <h2>add your delivery Details</h2>

              <div>
                <label htmlFor="">Full Name</label>
                <br />
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Mobile number</label>
                <br />
                <input type="number" placeholder="Phone no." value={phno} onChange={(e)=>setPhno(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Email</label>
                <br />
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Country/Region</label>
                <br />
                <input type="text" placeholder="Country/Region" value={country} onChange={(e)=>setCountry(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">
                  Flat, House no., Building, Company, Apartment
                </label>
                <br />
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Area, Street, Sector, Village</label>
                <br />
                <input type="text" value={address2} onChange={(e)=>setAddress2(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Pincode</label>
                <br />
                <input type="number" placeholder="6 digit Pincode"  value={pincode} onChange={(e)=>setPincode(e.target.value)} />
              </div>
              <div>
                <label htmlFor="">Landmark</label>
                <br />
                <input
                  type="text"
                  placeholder="E.g. Near Kalashakti Handloom Center"
                  value={landmark} onChange={(e)=>setLandmark(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className={Style.PaymentSection}>
            <h2>payment</h2>

            <div>
              <input
                contentEditable={false}
                type="radio"
                name="paymentMode"
                id="COD"
              />
              <label htmlFor="COD">{`Cash on Delivery (COD)`}</label> <br />
              <input type="radio" name="paymentMode" id="online" />
              <label htmlFor="online">
                {`Online payment`}{" "}
                <span style={{ color: "red" }}>*Currently not availble</span>
              </label>
            </div>

            <div className={Style.Products}>
              {userCartData?.products?.map((e, index) => {
                return (
                  <OrderItem
                    key={index}
                    cartData={userCartData}
                    data={e}
                    quantity={e.quantity}
                    editable={false}
                    cartID={userCartData._id}
                  />
                );
              })}
            </div>

            <div>
              <p>
                subtotal : <span>&#8377; {300}</span>
              </p>
              <p>
                Delivery Charges: <span>&#8377; 50</span>
              </p>
              <h2>Total : &#8377; {350}</h2>

              <span onClick={handelCheckOut}>
                <CheckoutBTN />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
