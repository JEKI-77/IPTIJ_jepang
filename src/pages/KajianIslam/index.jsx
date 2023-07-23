/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../Components/Atoms/Search";
import image from "../../assets/images/bannerbg.jpg";
import Card1 from "../../Components/Atoms/NewsCard/Card1";
import Card2 from "../../Components/Atoms/NewsCard/Card2";
import Filter from "../../Components/Atoms/Filter";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Kajina = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api-berita-indonesia.vercel.app/republika/islam/")
      .then((res) => {
        const responseApi = res.data.data.posts;
        console.log("kajian islam", responseApi);
        setData(responseApi);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:w-[80%] w-[90%] m-auto justify-center items-center flex flex-col mb-8">
    <Filter />
    <h2 className="text-xl font-semibold mb-4">Berita Terbaru</h2>
    {/* berita terbaru */}
    <div className="w-full h-[400px] md:mb-5">
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
            <SwiperSlide key={info.title}>
              <Card1
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
    <div className="w-full text-start   ">
      <h2 className="text-xl m-4 ">Berita Indonesia Hari Ini</h2>
    </div>
    <ul className=" grid md:grid-cols-3 gap-4">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((info) => (
          <li key={info.title}>
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

export default Kajina;
