import Style from './Help.module.css'
import React from 'react'
import VoiceRecog from '../../components/VoiceRecog/VoiceRecog'

export default function Help() {
  return (
    <div className={Style.helpPage}> 
        <h2>Help</h2>
        <VoiceRecog/>
        <div className={Style.HelpVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-dBM11Hx0SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>How to use KalaShakti</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-dBM11Hx0SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>
  )
}
