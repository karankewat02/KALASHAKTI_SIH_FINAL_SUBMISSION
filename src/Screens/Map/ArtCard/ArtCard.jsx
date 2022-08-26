import React from 'react'
import Style from './ArtCard.module.css'
import Mapdata from '../MapData.json'
export default function ArtCard(props) {
  return (
    <div className={Style.ArtCard}>
        <p>{props.stateId.name}</p>
        {Mapdata.map((e,index)=>{
            if(e.code==props.stateId.id){
              return(
                <img src={e.img} alt="" />
              )
            }else{
              // return(
              //   <img src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png" alt="" />
              // )
            }
        })}
    </div>
  )
}
