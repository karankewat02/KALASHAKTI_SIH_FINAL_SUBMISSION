import React, { useState } from 'react'
import Style from './Footer.module.css'
import logo from './assets/logo.png'
import toast from 'react-hot-toast'
export default function Footer() {
    const [email,setEmail] = useState("");
    const handelNewsletter=(e)=>{
        e.preventDefault()
        if(!email){
            toast.error('Enter email ! ',5000)
        }else{
            toast.success('Newsletter Subscribed ! ',5000)
        } 
    }

  return (
    <div className={Style.footer}>
        <div className={Style.footerContent}>

            <div>
                <img src={logo} alt="" />
                <p>Buy a piece of India's rich culture and be a part of the history it tells</p>
            </div>

            <div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li>Why Kalashakti ?</li>
                        <li>Blog</li>
                        <li>Guide</li>
                        <li>Digital literacy</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Featured Artwork</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>

        </div>


        <div className={Style.newsLetter}>
            <p>newsletter</p>
            <h1>Subscribe for new Update</h1>
            <form action="">
                <input type="email" name="" id="" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
                <button onClick={handelNewsletter}><i className="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>

        <div><i className="fa-solid fa-copyright"></i> &nbsp;&nbsp; Copyright 2022 Kalashakti Org | Privacy Policy </div>
    </div>
  )
}
