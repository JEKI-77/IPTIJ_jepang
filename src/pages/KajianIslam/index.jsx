/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../Components/Atoms/Search";
import image from "../../assets/images/bannerbg.jpg";
import Card1 from "../../Components/Atoms/NewsCard/Card1";
import Card2 from "../../Components/Atoms/NewsCard/Card2";
import Filter from "../../Components/Atoms/Filter";

const Kajina = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api-berita-indonesia.vercel.app/republika/islam/")
      .then((res) => {
        const responseApi = res.data.data.posts;
        console.log("data", responseApi);
        setData(responseApi);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" md:w-[80%] w-[90%] mx-auto mb-8  ">
      <Filter />
      <div className="flex ">
        <div className="ml-10 ">
          <SearchBar title="cari" placeholder="Search...." />
        </div>
      </div>
      <h1 className="text-center py-8 text-2xl">Berita Islam Terbaru</h1>
      <div className=" mb-8 mx-">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul className=" grid md:grid-cols-3 gap-4 ">
            {data.map((info) => (
              <li key={info}>
                <Card2
                  image={info.thumbnail}
                  judul={info.title}
                  // description={info.description}
                  tanggal={info.pubDate}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Kajina;
