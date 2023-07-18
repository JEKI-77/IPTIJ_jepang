// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Filter from "../../Components/Atoms/Filter";
import axios from "axios";
import { useEffect } from "react";
import Card from "../../Components/Atoms/Card";
import SearchBar from "../../Components/Atoms/Search";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const responseApi = res.data;
        console.log("data", responseApi);
        setData(responseApi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="mt-2 bg-slate-200 w-[80%] m-auto ">
      <h1 className="text-center py-8 ">Belanja </h1>
      <div className="flex mt-10">
        <div className="text-center -mt-6">
          <h1>Kategori</h1>
          <Filter />
        </div>
        <div className="ml-10">
          <SearchBar title="cari" placeholder="Search...." />
        </div>
      </div>

      {/* content */}

      {/* buku */}

      <div className=" flex justify-center items-center mt-14">
        <ul className="grid grid-cols-5 gap-4 ">
          {data.map((datas) => (
            <Card key={datas.id} img={datas.image} title={datas.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
