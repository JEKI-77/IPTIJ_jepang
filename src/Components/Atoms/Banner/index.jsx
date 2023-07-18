import bannerbg from "../../../assets/images/bannerbg.jpg";
import img2 from "../../../assets/images/image2.png";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay:4000}}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="w-full h-[350px] object-cover "
            src={bannerbg}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[350px] object-cover"
            src={img2}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[350px] object-cover"
            src={bannerbg}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[350px] object-cover"
            src={img2}
            alt="bannerBg"
          />
        </SwiperSlide>
      </Swiper>
  
    </div>
  );
};

export default Banner;
