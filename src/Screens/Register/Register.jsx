import Styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from 'react-hot-toast';
import { useEffect } from "react";

const axios = require("axios").default;

const Register = () => {

    const [name,setName] = useState('');
    const [username,setusername] = useState('');
    const [email,setEmail] = useState('');
    const [pno,setPno] = useState('');
    const [password,setPassword] = useState('')
    // const [checkPassword,setCheckPassword] = useState('')
    const [userType,setUserType] = useState('')

    // const [passChecked,setpassChecked] = useState(false)


    // useEffect(()=>{
    //     const confirmPass = document.getElementById("checkPass")
    //     if(password===checkPassword){
    //         console.log("PASSWORD MATCHED")
    //         setPassword(password)
    //         setCheckPassword(true)
    //     }else{
    //         console.log("password",password)
    //         console.log("checkPassword",checkPassword)
    //         confirmPass.style.boxShadow='0 0 2px solid red';
    //         setpassChecked(false)
    //     }
    // },[checkPassword])



  const registration = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/api/auth/register", {
        username: username,
        email: email,
        password: password,
        userType:userType,
        name:name,
        pno:pno
    }, 
    {
        headers: { 
            'Content-Type' : 'application/json' 
        }
    })
      .then(function (response) {
        console.log(response);
        toast.success("Registeration Success!", { duration: 7000 });
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Registeration Failed! \n Either the Username or Email already in use try something else", { duration: 4000 });
      });
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.login}>
        <div className={Styles.options}>
          <div className={Styles.active}>
            <Link to="/Login">Login</Link>
          </div>
          <div>Register</div>
        </div>
        <form action="">
          <input required type="text" name="name" id="name" placeholder="Name" onChange={(event)=>{setName(event.target.value)}} />
          {/* <input required type="text" name="username" id="username" placeholder="username" onChange={(event)=>{setusername(event.target.value)}} /> */}
          <input required type="email" name="email" id="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} />
          <input
            required
            type="number"
            name="pno"
            id="pno"
            placeholder="Phone No."
            onChange={(event)=>{setPno(event.target.value)}}
          />
          <input
            required
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            onChange={(event)=>{setPassword(event.target.value)}}
          />
          {/* <input
            required
            type="password"
            name="checkPass"
            id="checkPass"
            placeholder="Confirm Password"
            onChange={(event)=>{setCheckPassword(event.target.value)}}
          /> */}
          <span>User Type:</span>
          <div className={Styles.userType}>
            <div>
              <input value="buyer" type="radio" name="userType" id="buyer" onChange={event=>{setUserType(event.target.value)}} />
              <label htmlFor="buyer">Buyer </label>
            </div>
            <div>
              <input value="seller" type="radio" name="userType" id="Seller" onChange={event=>{setUserType(event.target.value)}} />
              <label htmlFor="Seller">Seller </label>
            </div>
          </div>
          <button style={{visibility:'hidden'}} id='registerBTN'  onClick={registration}></button>
        </form>

        {/* <Link to="/Login"> */}
          <button id="regBTN" style={{userSelect:"none"}} onClick={()=>{document.getElementById('registerBTN').click()}}>Register</button>

      </div>
    </div>
  );
};

export default Register;
