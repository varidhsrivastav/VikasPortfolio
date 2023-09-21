import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./style.css";
import wawe from "./image/wavy-black-white-background.jpg";
import w1 from "./image/w1.jpg";
import w2 from "./image/w2.jpg";
import w3 from "./image/w3.jpg";
import w4 from "./image/w4.jpg";
import w5 from "./image/w5.jpg";
import w6 from "./image/w6.jpg";
import { Autoplay } from "swiper/modules";
const WhatsappRev = () => {
  return (
    <div className="py-[100px] relative overflow-hidden">
      <img
        src={wawe}
        alt=""
        className="absolute w-[100%] top-[0%] -z-10 opacity-10 h-[100%]"
      />
      <div className="container">
        <div className="flex md:flex-row flex-col">
          <div className="flex-1 flex justify-center  flex-col">
            <p className="text-3xl sm:text-6xl pb-3 sm:pb-5 font-bold justify-center md:justify-start md:!text-left text-center text-[#495057]">
              Get the <span className="text-[#2FCE86]"> Inside Scoop</span> from
              Our Traders
            </p>
          </div>
          <div className="flex-1">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[EffectCards, Autoplay]}
              className="mySwiper sm:h-[700px] sm:w-[340px] h-[600px] w-[300px] pt-[50px]"
            >
              <SwiperSlide>
                <img className="" src={w1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={w2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={w3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={w4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={w5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={w6} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappRev;
