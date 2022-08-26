import Styles from "./Login.module.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import Context from '../../Context/Context'
import { useEffect } from "react";
import { useState } from "react";

const axios = require("axios").default;

const Login = () => {

  const [,setLoggedInUserData] = useContext(Context)
  const [currUser,setCurrUser] =useState({});

  const [email,setemail]=useState('');
  const [pass,setpass] = useState('');

  const login = () => {

    axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: pass    
    }, 
    {
        headers: { 
            'Content-Type' : 'application/json' 
        }
    })
      .then(function (response) {
          console.log('User Logged in from login Screen',response.data);
          setCurrUser(response.data);
          setLoggedInUserData({
            status:true,
            data:response.data,
            cartActive:response.data.others.cartStatus,
            cartId: response.data.others.cartId
          })
          toast.success(`Login Success`, { duration: 4000 });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Login Failed!", { duration: 4000 });
      });

      
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.login}>
        <div className={Styles.options}>
          <div>Login</div>
          <div className={Styles.active}>
            <Link to="/Register">Register</Link>
          </div>
        </div>
        <form action="">
          <input type="email" onChange={(event)=>{ setemail(event.target.value) }} name="email" id="email" placeholder="email" />
          <input type="password" onChange={(event)=>{ setpass(event.target.value) }} name="pass" id="pass" placeholder="password" />
          <p>forgot password ?</p>
        </form>

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
