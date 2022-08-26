import React from 'react'
import Style from './ImageSlide.module.css'
export default function ImageSlide(props) {
  return (
    <div className={Style.imgSlide} style={{backgroundImage: `url(${props.imgURL})`}}></div>
  )
}
