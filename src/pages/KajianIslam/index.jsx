import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../Components/Atoms/Search";
import CardBerita from "../../Components/Atoms/NewsCard/Card1";
import image from "../../assets/images/bannerbg.jpg";

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
    <div className="mt-2 bg-slate-200 w-[80%] m-auto ">
      <h1 className="text-center py-8 text-4xl">Kajian Islam</h1>
      <div className="flex mt-10">
        {/* <div className="text-center -mt-6">
          <Filter />
        </div> */}
        <div className="ml-10">
          <SearchBar title="cari" placeholder="Search...." />
        </div>
      </div>

      <div className="mt-14">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul className="grid md:grid-cols-3 grid-cols-2  gap-8">
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
        )}
      </div>
    </div>
  );
};

export default Kajina;
