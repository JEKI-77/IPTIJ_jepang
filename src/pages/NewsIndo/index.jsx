// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CardBerita from "../../Components/Atoms/NewsCard/Card1";
// import image from "../../assets/images/bannerbg.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Card2 from "../../Components/Atoms/NewsCard/Card2";

const NewsIndo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://news-eosin-one.vercel.app/jpnn/terbaru/"
        // "https://newsapi.org/v2/top-headlines?country=id&apiKey=f6c324aba071454d97bae6374e58c4ba"
      )
      .then((res) => {
        const responseApi = res.data.data.posts;
        console.log("indoData", responseApi);
        setData(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleNavigate = () => {
    navigateTo("/newsjpn");
  };
  const handleNavigateIndo = (e) => {
    navigateTo("/newsindo");
    console.log(e);
  };

  const navigateTo = useNavigate();

  return (
    <div className="md:w-[80%] w-[90%] m-auto justify-center items-center flex flex-col">
      <div className="text-center">
        <p className="text-4xl mb-12 font-semibold ">IPTIJ News</p>
      </div>
      <div className="flex text-2xl mb-8 gap-4 w-full ">
        <p
          className="cursor-pointer hover:text-cyan-600 bg-cyan-900 text-white px-4 rounded-xl text-[16px]"
          onClick={handleNavigateIndo}
        >
          Berita Indonesia
        </p>
        <p
          className="cursor-pointer hover:text-cyan-600 bg-cyan-900 text-white px-4 rounded-xl text-[16px] "
          onClick={handleNavigate}
        >
          Berita Jepang
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Berita Terbaru</h2>

      {/* berita terbaru */}
      <div className="w-full h-[400px] mb-5">
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
          <div className="w-full text-start"></div>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((info) => (
              <SwiperSlide key={info}>
                <CardBerita
                  image={info.thumbnail}
                  judul={info.title}
                  //  description={info.description}
                  tanggal={info.pubDate}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>loading....</p>
          )}
        </Swiper>
      </div>

      {/* last news */}
      <div className="w-full text-start  ">
        <h2 className="text-xl m-4 ">Berita Indonesia Hari Ini</h2>
      </div>
      <ul className="">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((info) => (
            <li key={info}>
              <Card2
                image={info.thumbnail}
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

export default NewsIndo;
