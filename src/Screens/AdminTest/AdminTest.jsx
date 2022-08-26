import React from 'react'
import Styles from './AdminTest.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import Addproducts from './Sidesections/Addproducts'
import AddDeleteuser from './Sidesections/AddDeleteuser'
import Data from './Sidesections/Data'
import Sellerapprov from './Sidesections/Sellerapprov'
const Admintext = () => {
  return (
    <>
      <div className={Styles.pageorder} >
        <div className={Styles.sidebar}>
          <div >
          <h2> Welcome Admin!</h2>
          <br />
            <ul className={Styles.list}>
              <Link  className={Styles.elements } to="AddProducts" ><i className="fa-solid fa-cart-arrow-down"></i> Add /remove Products</Link>
              <Link className={Styles.elements} to="Approve" > <i className="fa-solid fa-person-circle-check"></i> Approve seller Product</Link>
              <Link className={Styles.elements} to="Data" > <i className="fa-solid fa-database"></i> Data Representation</Link>
              <Link className={Styles.elements} to="User" > <i className="fa-solid fa-users"></i> Add/Delete User</Link>
            </ul>
          </div>
          <Link className={Styles.elements} to="User" > <i className="fa-solid fa-right-from-bracket"></i>LOGOUT</Link>
        </div>
        <div className={Styles.datasection}>
          <Routes>
            <Route path="AddProducts" element={<Addproducts />} />
            <Route path="User" element={<AddDeleteuser/>}/>
            <Route path='Data' element={<Data/>}/>
            <Route path ="Approve" element={<Sellerapprov/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Admintext