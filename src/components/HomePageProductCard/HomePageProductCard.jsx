import React from 'react'
import './HomePageProductCard.css'
export default function HomePageProductCard(props) {
  return (
    <div className="wrapper">
  <div className="container">
    <div className="top" style={{backgroundImage:`url(${props.imgURL})`}}></div>
    <div className="bottom">
      <div className="left">
        <div className="details">
          <h1>{props.name}</h1>
          <p> &#8377; {props.price} </p>
        </div>
        {/* <div className="buy"><i class="fa-solid fa-cart-shopping"></i></div> */}
      </div>
      <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>{props.name}</h1>
          <p>Added to your cart</p>
        </div>
        <div className="remove"><i className="material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div className="inside">
    <div className="icon"><i className="fa-solid fa-circle-info"></i></div>
    <div className="contents">
      <table>
        <tr>
          <th>Dimentions</th>
          {/* <th>Height</th> */}
        </tr>
        <tr>
          <td>50cmx150cmx5cm
          </td>
          {/* <td>4000mm</td> */}
        </tr>
        <tr>
          <th>Weight</th>
        </tr>
        <tr>
          <td>450gms</td>
        </tr>

      </table>
    </div>
  </div>
</div>
  )
}
