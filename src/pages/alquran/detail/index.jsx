import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Components/Atoms/Loading";
const Detail = () => {
  const [data, setData] = useState([]);
  const [titleIdn, setTitleIdn] = useState("");
  const [titleArb, setTitleArb] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://quran-api.santrikoding.com/api/surah/${id}`)
      .then((response) => {
        const responseAPI = response.data.ayat;
        const titleIdn = response.data.nama;
        const titleArb = response.data.nama_latin;
        setTitleIdn(titleIdn);
        setTitleArb(titleArb);
        setData(responseAPI);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  return (
    <div className="md:w-[80%] w-[90%] m-auto">
      <div className="m-8 text-center font-semibold">
        <h2>{titleIdn}</h2>
        <h2>{titleArb}</h2>
      </div>
      <ul>
        {isLoading ? (
          data?.map((info, index) => (
            <div className="flex gap-4 justify-end " key={index}>
              <li className="mb-8 text-2xl  text-end flex-col flex   ">
                <span className="leading-10 "> {info.ar} </span>
                <span className="text-sm text-gray-600 mt-2">{info.idn}</span>
              </li>
              <li className="w-8 h-8 border-2 border-gray-400 rounded-full flex p-3 items-center justify-center">
                {info.nomor}
              </li>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default Detail;
