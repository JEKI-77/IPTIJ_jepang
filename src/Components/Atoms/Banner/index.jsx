import bannerUpdate from "../../../assets/images/bannerUpdt.jpg";
import bannerUpdate2 from "../../../assets/images/bannerUpdt2.jpg";
import banner12 from "../../../assets/images/baner12.jpg";
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="w-[95%]  m-auto mt-2">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("")}
      >
        <SwiperSlide>
          <div className="flex m-auto justify-center ">
            <img
              className="w-full h-[18em] md:w-[80%] md:h-[400px] object-cover md:object-fill   rounded-xl"
              src={banner12}
              alt="bannerBg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex m-auto justify-center ">
            <img
              className="w-full h-[18em] md:w-[80%] md:h-[400px] object-cover md:object-fill   rounded-xl"
              src={bannerUpdate}
              alt="bannerBg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex m-auto justify-center ">
            <img
              className="w-full h-[18em] md:w-[80%]  md:h-[400px]  object-cover  md:object-fill    rounded-xl"
              src={bannerUpdate2}
              alt="bannerBg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
