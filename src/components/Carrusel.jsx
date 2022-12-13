
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carrusel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <img src="https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg" alt="" />
            <div className="card-description">
              <div className="card-title">
                <h4 className="text-white">Descriptions</h4>
              </div>
              <div className="card-text">
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eos vitae dicta itaque vel perferendis veniam, quidem labore id nulla eum ducimus? Mollitia voluptatum doloribus quibusdam ratione ipsam repellendus laudantium.</p>
              </div>
              <div className="card-link">
                <a href="#">Follow</a>
              </div>
            </div></SwiperSlide>
      </Swiper>
    </>
  );
}