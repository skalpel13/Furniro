import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style/swipper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Swipper() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={0}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img alt="" src="./images/sl1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="./images/sl2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="./images/sl3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="./images/sl1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="./images/sl2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src="./images/sl3.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
