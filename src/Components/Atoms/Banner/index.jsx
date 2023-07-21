import bannerbg from "../../../assets/images/bannerbg.jpg";
import img2 from "../../../assets/images/image2.png";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
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
    <div className="w-[95%]  m-auto">
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
          <img
            className=" w-full h-[300px] md:h-[400px] object-cover "
            src={bannerbg}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[300px] md:h-[400px] object-cover  object-center"
            src={banner1}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[300px] md:h-[400px]  object-cover object-left"
            src={banner2}
            alt="bannerBg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-[300px] md:h-[400px]  object-cover"
            src={banner3}
            alt="bannerBg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
