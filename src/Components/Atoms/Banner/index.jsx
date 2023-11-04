import update1 from "../../../assets/images/update1.jpeg";
import update2 from "../../../assets/images/update2.jpeg";
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
    <div className="bg-[#143559] h-[23em] mb-[-1em] mt-[-1px] ">
      <div className="w-[95%] m-auto animate__animated animate__zoomIn ">
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
            <div className="flex m-auto justify-center   ">
              <img
                className="w-full h-[20em] md:w-[50%] md:h-[400px] object-fill md:object-fill   rounded-xl"
                src={update1}
                alt="bannerBg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex m-auto justify-center ">
              <img
                className="w-full h-[18em] md:w-[50%] md:h-[400px] object-fill md:object-fill   rounded-xl"
                src={update2}
                alt="bannerBg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
