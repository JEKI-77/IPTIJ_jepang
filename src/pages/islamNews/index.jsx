/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card2 from "../../Components/Atoms/NewsCard/Card2";
import Filter from "../../Components/Atoms/Filter";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Atoms/Loading";
import { useTranslation } from "react-i18next";

const IslamNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://api-berita-indonesia.vercel.app/republika/islam")
      .then((res) => {
        const responseApi = res.data.data.posts;
        const link = res.data.data.posts;
        setData(responseApi);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleLinkClick = (event) => {
    const postLink = event.currentTarget;
    const url = postLink.dataset.link;
    // Lakukan apa pun yang diinginkan dengan data link, misalnya membuka tautan
    window.open(url, "_blank"); // Buka tautan di tab baru
  };

  return (
    <div className="md:w-[80%] w-[90%] m-auto justify-center items-center flex flex-col mb-8">
      <Helmet>
        <title>IPTIJ | News</title>
        <meta
          name="IPTIJ seputar berita islam dan berita indonesia "
          content="Halaman News IPTIJ"
        />
      </Helmet>

      <Filter />
      <div className="w-full text-start   ">
        <h2 className="text-xl m-4 ">{t("berita")}</h2>
      </div>
      <ul className=" grid md:grid-cols-2 gap-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((info) => (
            <li key={info.title}>
              <Card2
                onClick={handleLinkClick}
                data_link={info.link}
                image={info.thumbnail}
                judul={info.title}
                // description={info.description}
                tanggal={info.pubDate}
              />
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default IslamNews;
