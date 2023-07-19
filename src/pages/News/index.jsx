// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CardBerita from "../../Components/Atoms/NewsCard/Card1";
import image from "../../assets/images/bannerbg.jpg";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Card2 from "../../Components/Atoms/NewsCard/Card2";

const News = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=f6c324aba071454d97bae6374e58c4ba"
      )
      .then((res) => {
        const responseApi = res.data.articles;
        console.log("data", responseApi);
        setData(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <div className="w-[80%] m-auto justify-center items-center flex flex-col">
      <div className="text-center">
        <p className="text-4xl mb-12 font-semibold">Kenshusei News</p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Berita Terbaru</h2>

      {/* berita terbaru */}
      <div className="w-full h-[400px] mb-52">
        {/* Atur tinggi sesuai kebutuhan */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
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
              <SwiperSlide key={info.id}>
                <CardBerita
                  image={image}
                  judul={info.title}
                  tanggal={info.publishedAt}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>loading....</p>
          )}
        </Swiper>
      </div>

      {/* last news */}
      <div className="w-full text-start ">
        <h2 className="text-xl m-4 ">Last News</h2>
      </div>
      <ul className="">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((info) => (
            <li key={info.source.id}>
              <Card2
                image={image}
                judul={info.title}
                tanggal={info.publishedAt}
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

export default News;
