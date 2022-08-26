import React from "react";
import Style from "./HomeSlide.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import ImageSlide from "../ImageSlide/ImageSlide";

export default function HomeSlide1() {

  const imgObj = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwOXcd-n3qVXLOzfSbDnOcJZnkfbBpXo7g&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQO8d3ZSNd6VevKyiOYjb8OvYcsG-s_gC6Q&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJMSbZLTvlakQOPkL9pld4PJd-B8a7zxNvA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZvY3uJ38ksp5Fjx2GuckQGpqUgKYl9x9WA&usqp=CAU",
    },
  ];


  return (
    <div className={Style.HomeSlide1}>
      <div>
        <h1>KalaShakti</h1>
        <p>Let the art speak for you...</p>

        <p>
        ‘Unity in diversity, a phrase often used to describe the people of India, is indeed quite apt. In a country as diverse and as big as ours, local cultures, traditions, and artworks are what billions of people identify with and take pride in. We reimagine the potential of craft in India.
        </p>
      </div>

      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          {imgObj.map((e,index)=>{
            return(
              <SwiperSlide key={index}><ImageSlide  imgURL={e.url} /></SwiperSlide>
            )
          })}

        </Swiper>
      </div>
    </div>
  );
}
