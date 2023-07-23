/* eslint-disable react/no-unescaped-entities */
import Banner from "../../Components/Atoms/Banner";
import agenda from "../../assets/images/logo_iptij.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "../../Components/Atoms/Link";
import { LiaDonateSolid } from "react-icons/lia";
import { MdAppRegistration } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className=" animate__animated animate__zoomIn">
        <Banner />
      </div>

      <div className="md:w-[80%]  m-auto -mt-24 md:mt-0" id="gallery">
        <div className="text-center  mt-8 opacity-70">
          <div>
            <div className="">
              <div className="mt-16 flex flex-col text-justify gap-4 ">
                <div className="grid md:grid-flow-col gap-20 md:gap-2  ">
                  <div className="  items-center flex justify-center">
                    <img
                      className="md:flex hidden w-[50%] shadow-lg"
                      src={agenda}
                      alt=""
                    />
                  </div>

                  {/* decription */}

                  <div className="flex flex-col items-center justify-center animate__animated animate__backInRight shadow-lg w-[90%] md:w-[90%] m-auto p-4  rounded-lg ">
                    <p
                      className="text-lg text-center text-gray-900
                      font-semibold mb-4 md:text-2xl"
                    >
                      Ikatan Persaudaran Trainee Indonesia di Jepang
                      <span className="text-sm md:text-lg"> (IPTIJ)</span>
                    </p>
                    <p className="text-[16px]  md:flex hidden  ">
                      Ikatan Persaudaraan Trainee Indonesia di Jepang merupakan
                      sebuah
                    </p>
                    <h2 className="mt-8 text-lg font-semibold mb-2 items-start  md:flex hidden">
                      Tujuan IPTIJ
                    </h2>
                    <p className="text-[16px] flex text-justify indent-4">
                      Organisasi IPTIJ dibentuk untuk memfasilitasi dan
                      memperkuat hubungan antara trainee atau peserta program
                      pelatihan dari Indonesia yang tinggal dan bekerja di
                      Jepang.
                    </p>
                  </div>
                </div>

                <div className="flex  flex-col gap-2 mt-4 m-auto">
                  <a href="https://api.whatsapp.com/send?phone=817016675994">
                    <Link
                      icon={<LiaDonateSolid />}
                      backgroundColor="#0057e7"
                      title="Donasi Untuk Dakwah IPTIJ"
                    />
                  </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSPvjh8Z2A4szaH5ZSUzPe-MQG2xjNAqWAj6u1MPnUq8G41A/viewform">
                    <Link
                      icon={<MdAppRegistration />}
                      backgroundColor="#d62d20"
                      title="Daftar menjadi pengurus"
                    />
                  </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScFI8vy-jE82vp1m5vjH-UbLsUL_OaCFs3BsZk_QftN-XhpJw/viewform">
                    <Link
                      icon={<MdAppRegistration />}
                      backgroundColor="#ffa700"
                      title="Registrasi Tahsin"
                    />
                  </a>
                </div>

                {/* Agenda */}
                <AnimationOnScroll animateIn="animate__backInUp">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-16 w-[90%] m-auto ">
                    <h2 className="col-span-2 md:col-span-3 text-center text-lg font-semibold ">
                      Agenda Kegiatan
                    </h2>

                    <div className="shadow-lg text-center">
                      <img className=" " src={agenda} alt="" srcSet="" />
                      <p>Keagaman</p>
                    </div>

                    <div className="shadow-lg text-center">
                      <img src={agenda} alt="" srcSet="" />
                      <p>Pertemuan dan Diskusi</p>
                    </div>

                    <div className="shadow-lg text-center">
                      <img src={agenda} alt="" srcSet="" />
                      <p>Bimbingan dan Konsultasi</p>
                    </div>

                    <div className="shadow-lg text-center">
                      <img src={agenda} alt="" srcSet="" />
                      <p>Kegiatan Sosial dan Budaya</p>
                    </div>

                    <div className="shadow-lg text-center">
                      <img src={agenda} alt="" srcSet="" />
                      <p>Pelatihan dan Workshop</p>
                    </div>

                    <div className="shadow-lg text-center">
                      <img src={agenda} alt="" srcSet="" />
                      <p>Pelatihan dan Workshop</p>
                    </div>
                  </div>
                </AnimationOnScroll>
                {/* Quote */}
                <AnimationOnScroll animateIn="animate__backInUp animate__slow">
                  <div className=" bg-[#d2e8ef] shadow-lg  h-52 flex justify-center items-center m-4 rounded-xl  ">
                    <p className="text-gray-900 md:text-lg text-md text-center  m-2 font-semibold ">
                      <i className="text-md">
                        "Jangan pernah menyerah, karena kemenangan selalu berada
                        di ujung perjuangan"
                      </i>
                      <div className="text-end mt-4 ">
                        <span className=""> - Soekarno</span>
                      </div>
                    </p>
                  </div>
                </AnimationOnScroll>

                {/* partner */}
                <AnimationOnScroll animateIn="animate__backInUp">
                  <div className="flex  flex-col justify-center items-center gap-2 -mt-1 m-8 h-40 ">
                    <div className=" flex text--lg">
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
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
