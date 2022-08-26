import logo from './assets/logo.png'
import Style from './Nav.module.css'

import {Link, useNavigate} from 'react-router-dom'

import Button from '../Button/Button'
import { useState,useContext } from 'react'

import Context from '../../Context/Context'
import toast from 'react-hot-toast'

import solana from './assets/solana.svg'


export default function Nav() {

  const navigate = useNavigate();
  const [loggedInUserData,setLoggedInUserData] = useContext(Context)

  const [currTab,setCurrtab] =useState('home')
  const [userOptionActive,setUserOptionActive] =useState(false)
  const borderStyle = {borderBottom:".2rem",borderBottomColor:"#800000",borderBottomStyle:"solid",borderRadius:'.2rem'};


  const handelLogout = ()=>{
    navigate('/')
    setLoggedInUserData({
      status : false,
      data : {},
      cartStatus:false,
      cartId:'',
      cartData:{},
      checkoutPrice:0
    })
    toast('Logged out!',
      {
        icon: '👋',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  }

  

  return (
    <div className={Style.navbar}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <ul>
            <Link to='/'><li style={currTab==='home'?borderStyle:[]} onClick={()=>setCurrtab('home')} >Home </li></Link>
            <Link to='/about'><li style={currTab==='about'?borderStyle:[]} onClick={()=>setCurrtab('about')} >About</li></Link>
            <Link to='/region'><li style={currTab==='artisians_brands'?borderStyle:[]} onClick={()=>setCurrtab('artisians_brands')} >Region</li></Link>
            <Link to='/news'><li style={currTab==='news'?borderStyle:[]} onClick={()=>setCurrtab('news')} >News</li></Link>
            <li className={Style.CategorySubMenu} >Category<ul>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'decor' }
                            })
                        }}><Link to="/Homedecor">Home Decor</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'gifts' }
                            })
                        }}><Link to="/Homedecor">Souvenir</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'art' }
                            })
                        }}><Link to="/Homedecor">Arts</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'handloom' }
                            })
                        }}><Link to="/Homedecor">Handloom</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'handicraft' }
                            })
                        }}><Link to="/Homedecor">Handicraft</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'bags' }
                            })
                        }}><Link to="/Homedecor">Bags</Link></li>
                <li onClick={() => {
                            setLoggedInUserData(prevloggedInUserData => {
                                return { ...prevloggedInUserData, productCategory: 'others' }
                            })
                        }}><Link to="/Homedecor">Others</Link></li>
              </ul>

            </li>
            <Link to="/help"><li>Help</li></Link>
        </ul>

        <div className={Style.buttons}>
            <a target="_blank" href='https://nft-marketplace-candy-shop-sih.vercel.app/'>

            <img src={solana} style={{width:'34px',aspectRatio:1,}} alt="" />
            </a>

            <div>
              <i className="fa-solid fa-user-group"></i> {loggedInUserData.status?<span style={{border:'2px solid #800000',padding:'.25rem 1rem',marginInline:'.5rem',borderRadius:'100vw',color:'#000',fontSize:'.9rem'}}>{loggedInUserData.data.others.name}</span>:""}
        

              <span onClick={()=>setUserOptionActive(!userOptionActive)}><i style={{fontSize:'20px'}} className="fa-solid fa-caret-down"></i></span> 
              {userOptionActive?
                <ul className={Style.userOptions}>
                  {loggedInUserData.status?
                  <>
                    <li >Favourite</li>
                    <li onClick={handelLogout}>Logout</li>
                  </>
                  :
                  <>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/login'><li>Regsiter</li></Link>
                  </>
                  }
                </ul>
              :<></>}
            

            </div>
            {loggedInUserData.status?loggedInUserData.cartActive?<Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>:<></>:<></>}

            <i className="fa-solid fa-language" style={{position:'relative',overflow:'hidden'}}><div id="google_translate_element" style={{opacity:0,position:'absolute',top:'50%',left:'50%',marginTop:'20%', transform:`translateX(-50%) translateY(-50%)`}}></div></i>

            <Link to='/ecommerce'>
              <Button title="Shop Now" />
            </Link>
        </div>

    </div>
  )
}
