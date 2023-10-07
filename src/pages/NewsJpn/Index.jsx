// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "animate.css/animate.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Card2 from "../../Components/Atoms/NewsCard/Card2";
import Filter from "../../Components/Atoms/Filter";
// import Loading from "react-loading";

const Newsjpn = () => {
  const [datajpn, setDatajpn] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${
          import.meta.env.VITE_APP_JPNEWS
        }`
      )
      .then((res) => {
        const responseApi = res.data.articles;
        setDatajpn(responseApi);
        console.log("api key", import.meta.env.REACT_APP_JPNEWS);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleLinkClick = (event) => {
    const postLink = event.currentTarget;
    const url = postLink.dataset.url;
    console.log("Url", url);
    window.open(url, "_blank");
  };

  return (
    <div className="md:w-[80%] w-[90%] m-auto justify-center items-center flex flex-col mb-8">
      <Filter />
      <div className="w-full text-start   ">
        <h2 className="text-xl m-4 ">Berita Jepang Hari Ini</h2>
      </div>
      <ul className=" grid md:grid-cols-3 gap-4">
        {Array.isArray(datajpn) && datajpn.length > 0 ? (
          datajpn.map((info) => (
            <li key={info.title}>
              <Card2
                onClick={handleLinkClick}
                data_url={info.url}
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
