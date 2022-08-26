import React from "react";
import Style from "./Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import HomeMain from '../../components/HomeMain/Home'
import HomeSlide1 from "../../components/HomeSlide1/HomeSlide1";
import HomeSlide2 from "../../components/HomeSlide2/HomeSlide2";
import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
export default function Home() {
  return (
    // <div style={{minHeight:'90vh',display:'flex',alignItems:'flex-start'}}>
    <div>
    {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide><HomeMain/></SwiperSlide>
        <SwiperSlide><HomeSlide1/></SwiperSlide>
        <SwiperSlide><HomeSlide2/></SwiperSlide>
      </Swiper> */}
      <HomeMain/>
      <HomeSlide1/>

      <div>
        <h2 style={{margin:'2rem',color:'var(--tertiary)',textAlign:'left',fontSize:'1.7rem'}}>Top Products</h2>

        <div className={Style.TopProductgrid}>
          <HomePageProductCard price={300} imgURL="https://m.media-amazon.com/images/I/819M3OZRcNL._UL1500_.jpg" name="Jute bag"/>
          <HomePageProductCard price={600} imgURL="https://www.culturalindia.net/iliimages/Madhubani%20painting%205.jpg" name="MADHUBANI PAINTING"/>
          <HomePageProductCard price={450} imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVJ4kwLr1W16jGdrfqbfTzF4IxQxPfSIMTQ&usqp=CAU" name="Marbel Statue"/>
        </div>
      </div>
      
    </div>
  );
}
