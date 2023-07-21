// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import image from "../../assets/images/bannerbg.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Card2 from "../../Components/Atoms/NewsCard/Card2";
import Card1 from "../../Components/Atoms/NewsCard/Card1";
import { useNavigate } from "react-router-dom";
import Filter from "../../Components/Atoms/Filter";

const Newsjpn = () => {
  const [datajpn, setDatajpn] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=jp&apiKey=f6c324aba071454d97bae6374e58c4ba"
        // "https://newsapi.org/v2/top-headlines?country=id&apiKey=f6c324aba071454d97bae6374e58c4ba"
      )
      .then((res) => {
        const responseApi = res.data.articles;
        console.log("jpnData", responseApi);
        setDatajpn(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="w-[90%] md:w-[80%] m-auto justify-center items-center flex flex-col mb-8">
      <Filter />
      <h2 className="text-xl font-semibold mb-4">Berita Terbaru</h2>
      {/* berita terbaru */}
      <div className="w-full h-[400px] mb-52 animate__animated  animate__fadeInDown">
        {/* Atur tinggi sesuai kebutuhan */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            567: {
              slidesPerView: 2,
            },
            728: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          autoplay={{ delay: 4000 }}
          navigation
          direction="horizontal"
        >
          <div className="w-full text-start   "></div>
          {Array.isArray(datajpn) && datajpn.length > 0 ? (
            datajpn.map((info) => (
              <SwiperSlide key={info.id}>
                <Card1
                  image={info.urlToImage}
                  judul={info.title}
                  //  description={info.description}
                  tanggal={info.publishedAt}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>loading....</p>
          )}
        </Swiper>
      </div>

      {/* news*/}
      <div className="w-full text-start ">
        <h2 className="text-xl ">Berita Jepang Hari Ini</h2>
      </div>
      <ul className=" grid md:grid-cols-3 gap-4">
        {Array.isArray(datajpn) && datajpn.length > 0 ? (
          datajpn.map((info) => (
            <li key={info}>
              <Card2
                image={info.urlToImage}
                judul={info.title}
                // description={info.description}
                tanggal={info.pubDate}
              />
            </li>
          ))
        ) : (
          <p> Loading .... </p>
        )}
      </ul>
    </div>
  );
};

export default Newsjpn;
