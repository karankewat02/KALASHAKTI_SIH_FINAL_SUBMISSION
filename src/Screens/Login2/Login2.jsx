import React, { useEffect, useState,useContext } from "react";
import "./Login2.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Context from '../../Context/Context'

const axios = require("axios").default;
export default function Login2() {

  
  const [,setLoggedInUserData] = useContext(Context)  
  const [currUser,setCurrUser] =useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setPno] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const navigate = useNavigate();

  const registration = (event) => {
    event.preventDefault();
    axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: email,
          password: password,
          userType: userType,
          name: name,
          pno: pno,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        toast.success("Registeration Success login to continue", { duration: 6000 });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          "Registeration Failed! \n Email already used try something else",
          { duration: 4000 }
        );
      });     
  };

  const login = (event) => {

    event.preventDefault();
    
    axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password    
    }, 
    {
        headers: { 
            'Content-Type' : 'application/json' 
        }
    })
      .then(async function (response) {
          setCurrUser(response.data);

          setLoggedInUserData({
            status:true,
            data:response.data,
            cartActive:response.data.others.cartStatus,
            cartId:response.data.others.cartStatus,
            cartData : {},
            checkoutPrice:0
          })
          console.log(response.data)
          toast.success(`Login Success`, { duration: 3000 });
          response.data.others.isAdmin?navigate('/admin'):navigate('/ecommerce');
          response.data.others.userType==='seller'?navigate('/seller'):navigate('/ecommerce');
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Login Failed!", { duration: 4000 });
      });
    
  };

  return (
    <div className="LoginRegisterContainer">
      <div className="container" id="container">
        <div className="formcontainer signupcontainer">
          <form action="#">
            <h1>Create Account</h1>
            <span>Use your email for registration</span>
            <input required type="text" placeholder="Name"  onChange={(event)=>{setName(event.target.value)}} />
            <input required type="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} />
            <input
              required
              type="number"
              placeholder="Phone no."
              name="pno"
              id="pno"
              onChange={(event)=>{setPno(event.target.value)}}
            />
            <input required type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
            <div className="userType">
              <div>
                <input value="buyer" type="radio" name="userType" id="buyer" onChange={event=>{setUserType(event.target.value)}} />
                <label htmlFor="buyer">Buyer </label>
              </div>
              <div>
                <input
                  value="seller"
                  type="radio"
                  name="userType"
                  id="Seller"
                  onChange={event=>{setUserType(event.target.value)}}
                />
                <label htmlFor="Seller">Seller </label>
              </div>
            </div>
            <button onClick={registration}>Sign Up</button>
          </form>
        </div>
        <div className="formcontainer signincontainer">
          <form action="#">
            <h1>Sign in</h1>
            <span>Use your email account</span>
            <input type="email" placeholder="Email" onChange={(event)=>{ setEmail(event.target.value) }} />
            <input type="password" placeholder="Password" onChange={(event)=>{ setPassword(event.target.value) }} />
            <a href="#">Forgot your password?</a>
            <button onClick={login}>Sign In</button>
          </form>
        </div>
        <div className="overlaycontainer">
          <div className="overlay">
            <div className="overlaypanel overlayleft">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                onClick={(event) => {
                  const container = document.getElementById("container");
                  container.classList.remove("rightpanelactive");
                }}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlaypanel overlayright">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  const container = document.getElementById("container");
                  container.classList.add("rightpanelactive");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
