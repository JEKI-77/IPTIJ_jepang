/* eslint-disable react/no-unescaped-entities */
import Banner from "../../Components/Atoms/Banner";
import agenda from "../../assets/images/logo_iptij.png";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="w-full">
        <div className="text-center  mt-8 opacity-70">
          <p className="text-3xl text-center text-gray-900 font-semibold ">
            Ikatan Persaudaran Trainee Indonesia di Jepang
            <span className="text-xl"> (IPTIJ)</span>
          </p>
          <div>
            <div className="">
              <div className="mt-16 flex flex-col text-justify gap-4 ">
                <p>
                  Ikatan Persaudaraan Trainee Indonesia di Jepang (IPTIJ) adalah
                  sebuah organisasi yang dibentuk untuk memfasilitasi dan
                  memperkuat hubungan antara trainee atau peserta program
                  pelatihan dari Indonesia yang tinggal dan bekerja di Jepang.
                  Organisasi ini bertujuan untuk menyediakan dukungan, advokasi,
                  dan layanan bagi trainee Indonesia yang sedang menjalani
                  program pelatihan di Jepang.
                </p>
                {/* Agenda */}
                <div className="grid grid-cols-3 gap-4 place-items-center ">
                  <h2 className="grid col-span-3 text-center text-2xl font-semibold text-gray-900 ">
                    Agenda kegiatan
                  </h2>
                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Keagaman</p>
                  </div>

                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Pertemuan dan Diskusi</p>
                  </div>

                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Bimbingan dan Konsultasi</p>
                  </div>

                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Kegiatan Sosial dan Budaya</p>
                  </div>

                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Pelatihan dan Workshop</p>
                  </div>

                  <div className="bg-gray-400 w-60 text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Pelatihan dan Workshop</p>
                  </div>
                </div>
                {/* Quote */}
                <div className="bg-green-950 h-52 flex justify-center items-center m-4">
                  <p className="text-white text-2xl font-semibold">
                    <i>
                      "Jangan pernah menyerah, karena kemenangan selalu berada
                      di ujung perjuangan"
                    </i>
                    <div className="text-end mt-4 ">
                      <span className=""> - Soekarno</span>
                    </div>
                  </p>
                </div>

                <div className="flex justify-center items-center gap-2 m-8">
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                  <img className="w-12" src={agenda} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
