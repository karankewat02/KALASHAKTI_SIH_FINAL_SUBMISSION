import React, { useEffect } from 'react'
import Style from './productCard.module.css'
import { Link } from 'react-router-dom';

export default function ProductCard(props) {

    const FakeDiscount = Math.floor(Math.random() * 1000);
	const productListedAt = props.data.updatedAt
	const CurrDate = new Date();

	useEffect(()=>{

		// TODO Change the HOT Lable of the Product Card to the Newest , Trending etc etc
		// console.log('Product Date', productListedAt);
		// console.log('Curr Date', CurrDate)
	},[])


  return (
	<div className={Style.productCard}>
		<div className={Style.badge}>Hot</div>
		<div className={Style.productTumb}>
			<img src={props.data.img[0]} alt="" />
		</div>
		<div className={Style.productDetails}>
			<span className={Style.productCatagory}>{props.data.categories.map((e,index)=>{return e+' | '})}</span>
			<h4>
				<Link to={{
					pathname:`/ProductDetail/${props.data._id}`,
					state: FakeDiscount
				}}>
					{props.data.title}
				</Link>
			</h4>
			<p>{props.data.desc.slice(0,20) + " ..."}</p>
			<div className={Style.productBottomDetails}>
				<div className={Style.productPrice}><small>&#8377; {props.data.price+FakeDiscount}</small>&#8377; {props.data.price}</div>
				<div className={Style.productLinks}>
					<a href=""><i className="fa fa-heart"></i></a>
					<a href=""><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
  )
}
