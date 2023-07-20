/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../Components/Atoms/Search";
import image from "../../assets/images/bannerbg.jpg";
import Card1 from "../../Components/Atoms/NewsCard/Card1";

const Kajina = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=f6c324aba071454d97bae6374e58c4ba"
      )
      .then((res) => {
        const responseApi = res.data;
        console.log("data", responseApi);
        setData(responseApi.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" md:w-[80%] mx-auto  grid ">
      <h1 className="text-center py-8 text-4xl">Kajian Islam</h1>
      <div className="flex ">
        {/* <div className="text-center -mt-6">
          <Filter />
        </div> */}
        <div className="ml-10 ">
          <SearchBar title="cari" placeholder="Search...." />
        </div>
      </div>

      <div className="mt-16 mb-8 mx-4">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
            {data.map((info) => (
              <li key={info.source.id}>
                <Card1
                  image={image}
                  judul={info.title}
                  tanggal={info.publishedAt}
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
