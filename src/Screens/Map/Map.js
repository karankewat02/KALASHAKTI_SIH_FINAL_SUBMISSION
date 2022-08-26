import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ArtCard from './ArtCard/ArtCard'
import IndiaSVG from './assests/IndiaSVG'
import Style from './Map.module.css'

export default function Map() {

  const [hoverState,setHoverState] = useState({id: 'MP',name:'Madhya Pradesh'});

  useEffect(()=>{

    
  },[hoverState])


  return (
    <div className={Style.MapContainer}>
        <h1 style={{textAlign:'center'}}>MAP</h1>
        <p style={{textAlign:'center'}}>Click on the state to know there art</p>
        <div>
          <IndiaSVG setStateId={id=>setHoverState(id)} />
          <div>
            <h2 style={{color:"#000" , textAlign:'center',marginBottom:'1rem'}}>Famous Art</h2>
            <ArtCard stateId={hoverState}  />
          </div>
        </div>
    </div>
  )
}
