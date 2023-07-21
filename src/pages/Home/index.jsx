/* eslint-disable react/no-unescaped-entities */
import Banner from "../../Components/Atoms/Banner";
import agenda from "../../assets/images/logo_iptij.png";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <ScrollAnimation animateIn = 'fadeIn'>
      
      </ScrollAnimation> */}
      <div className="w-[80%] m-auto" id="gallery">
        <div className="text-center  mt-8 opacity-70">
          <div>
            <div className="">
              <div className="mt-16 flex flex-col text-justify gap-4 ">
                <div className="grid md:grid-flow-col gap-20">
                  <div>
                    <img className="md:flex hidden" src={agenda} alt="" />
                  </div>

                  {/* decription */}
                  <div className="flex flex-col items-center justify-center">
                    <p
                      className="text-3xl text-center text-gray-900
                      font-semibold mb-4"
                    >
                      Ikatan Persaudaran Trainee Indonesia di Jepang
                      <span className="text-xl"> (IPTIJ)</span>
                    </p>
                    <p>
                      Ikatan Persaudaraan Trainee Indonesia di Jepang (IPTIJ)
                      merupakan sebuah
                    </p>
                    <h2 className="mt-8 font-semibold mb-2 items-start flex">
                      Tujuan IPTIJ
                    </h2>
                    <p>
                      organisasi yang dibentuk untuk memfasilitasi dan
                      memperkuat hubungan antara trainee atau peserta program
                      pelatihan dari Indonesia yang tinggal dan bekerja di
                      Jepang.
                    </p>
                  </div>
                </div>

                {/* Agenda */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-20 ">
                  <h2 className="col-span-2 md:col-span-3 text-center text-2xl font-semibold text-gray-900 ">
                    Agenda kegiatan
                  </h2>

                  <div className="bg-cyan-300  text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Keagaman</p>
                  </div>

                  <div className="bg-cyan-300  text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Pertemuan dan Diskusi</p>
                  </div>

                  <div className="bg-cyan-300  text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Bimbingan dan Konsultasi</p>
                  </div>

                  <div className="bg-cyan-300  text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Kegiatan Sosial dan Budaya</p>
                  </div>

                  <div className="bg-cyan-300  text-center">
                    <img src={agenda} alt="" srcSet="" />
                    <p>Pelatihan dan Workshop</p>
                  </div>

                  <div className="bg-cyan-300  text-center">
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
                {/* partner */}
                <div className="flex bg-slate-200 flex-col justify-center items-center gap-2 -mt-1 m-8 h-40 ">
                  <div className=" flex text-2xl">
                    <h2>Partner</h2>
                  </div>
                  <div className="flex  ">
                    <span>
                      <img className="w-40" src={agenda} />
                    </span>
                    <span>
                      <img className="w-40" src={agenda} />
                    </span>
                    <span>
                      <img className="w-40" src={agenda} />
                    </span>
                    <span>
                      <img className="w-40" src={agenda} />
                    </span>
                    <span>
                      <img className="w-40" src={agenda} />
                    </span>
                  </div>
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
