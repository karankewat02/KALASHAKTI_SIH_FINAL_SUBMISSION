import React from 'react'
import Style from './Button.module.css'

export default function Button(props) {
  return (
    <div className={Style.buttonStyle}>{props.title}</div>
  )
}
