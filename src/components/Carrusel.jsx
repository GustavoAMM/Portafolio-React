
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

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
          <img src="https://w.wallhaven.cc/full/4x/wallhaven-4x7w6z.png" alt="" />
          <div className="card-description">
            <h4 className="text-white text-center font-extrabold my-2 text-xl">Proyecto personal academico de UPQS</h4>
            <p className="card-text text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, maxime ratione! A odio itaque saepe inventore necessitatibus pariatur minus error sapiente iste quibusdam accusantium quisquam et repellat, sequi soluta? Dignissimos!</p>
          </div>
          <div className="card-link flex justify-center hover:scale-110">
            <a href="https://github.com/GustavoAMM" className="flex my-2 justify-center animate-bounce" target="_blank">More<BsFillArrowUpRightSquareFill className="m-1" /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.wallhaven.cc/full/4x/wallhaven-4x7w6z.png" alt="" />
          <div className="card-description">
            <h4 className="text-white text-center font-extrabold my-2 text-xl">Proyecto personal academico de UPQS</h4>
            <p className="card-text text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, maxime ratione! A odio itaque saepe inventore necessitatibus pariatur minus error sapiente iste quibusdam accusantium quisquam et repellat, sequi soluta? Dignissimos!</p>
          </div>
          <div className="card-link flex justify-center hover:scale-110">
            <a href="https://github.com/GustavoAMM" className="flex my-2 justify-center animate-bounce" target="_blank">More<BsFillArrowUpRightSquareFill className="m-1" /></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.wallhaven.cc/full/4x/wallhaven-4x7w6z.png" alt="" />
          <div className="card-description">
            <h4 className="text-white text-center font-extrabold my-2 text-xl">Proyecto personal academico de UPQS</h4>
            <p className="card-text text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, maxime ratione! A odio itaque saepe inventore necessitatibus pariatur minus error sapiente iste quibusdam accusantium quisquam et repellat, sequi soluta? Dignissimos!</p>
          </div>
          <div className="card-link flex justify-center hover:scale-110">
            <a href="https://github.com/GustavoAMM" className="flex my-2 justify-center animate-bounce" target="_blank">More<BsFillArrowUpRightSquareFill className="m-1" /></a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}