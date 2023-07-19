// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CardBerita from "../../Components/Atoms/NewsCard";
import image from "../../assets/images/bannerbg.jpg";

const Upadate = () => {
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
        <h2 className="text-xl font-semibold mb-4">News</h2>
        <p className="text-4xl mb-12 font-semibold">Realise Berita</p>
      </div>

      <ul className="grid grid-cols-3 gap-8">
        {data.map((info) => (
          <li key={info.source.id}>
            <CardBerita
              image={image}
              judul={info.title}
              tanggal={info.publishedAt}
            />
          </li>
        ))}
      </ul>
      <p> halaman Upadate</p>
    </div>
  );
};

export default Upadate;
