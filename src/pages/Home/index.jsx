/* eslint-disable react/no-unescaped-entities */
import Banner from "../../Components/Atoms/Banner";
import workshop from "../../assets/images/Agenda/Workshop.jpg";
import olahraga from "../../assets/images/Agenda/olahraga.jpg";
import Rekreasi from "../../assets/images/bannerbg.jpg";
import imgGallery6 from "../../assets/imagesIptij/img6.jpg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "../../Components/Atoms/Link";
import { LiaDonateSolid } from "react-icons/lia";
import { MdAppRegistration } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          height={3}
          fill="#143559"
          fillOpacity="1"
          d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,192C672,224,768,224,864,202.7C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="md:w-[80%] m-auto -mt-24 md:mt-0" id="gallery">
        <div className="text-center  mt-8 opacity-70">
          <div>
            <div className="mt-16 flex flex-col text-justify gap-4  ">
              <div className="grid md:grid-flow-col gap-20 md:gap-2  ">
                <div className=" items-center flex justify-center">
                  <img className=" hidden w-[50%] shadow-lg" src={""} alt="" />
                </div>

                {/* decription */}

                <div className=" flex flex-col items-center justify-center animate__animated animate__backInRight shadow-xl  shadow-slate-400 w-[90%] md:w-[90%] m-auto p-4  rounded-lg ">
                  <p
                    className="text-lg text-center text-gray-900
                      font-semibold mb-4 md:text-2xl"
                  >
                    Ikatan Persaudaran Trainee Indonesia di Jepang
                    <span className="text-sm md:text-lg"> (IPTIJ)</span>
                  </p>
                  <h2 className="mt-8 text-lg font-semibold mb-2 items-start  md:flex hidden">
                    Tujuan IPTIJ
                  </h2>

                  <p className="text-sm md:text-lg  flex text-justify indent-4">
                    IPTIJ (Ikatan Persaudaran Trainee Indonesia di Jepang)
                    merupakan komunitas yang telah ada selama 18 tahun dijepang
                    yang dibentuk untuk memfasilitasi dan memperkuat hubungan
                    antara para trainee atau peserta program pelatihan dari
                    Indonesia yang tinggal dan bekerja di Jepang.
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
                <div className="grid grid-cols-2 md:grid-cols-3  gap-4 place-items-center mt-16 w-[90%] m-auto ">
                  <h2 className="col-span-2 md:col-span-3 text-center text-lg font-semibold ">
                    Agenda Kegiatan
                  </h2>

                  <div className="shadow-lg text-center rounded-b-xl">
                    <img
                      className=" w-full md:h-60  h-40 rounded-t-xl  "
                      src={imgGallery6}
                      alt=""
                      srcSet=""
                    />
                    <p>Kajian Islam</p>
                  </div>

                  <div className="shadow-lg text-center rounded-b-xl">
                    <img
                      className=" w-full md:h-60  h-40 rounded-t-xl"
                      src={workshop}
                      alt=""
                      srcSet=""
                    />
                    <p>Workshop</p>
                  </div>

                  <div className="shadow-lg text-center rounded-b-xl">
                    <img
                      className=" w-full md:h-60  h-40 rounded-t-xl"
                      src={Rekreasi}
                      alt=""
                      srcSet=""
                    />
                    <p>Rekreasi</p>
                  </div>

                  <div className="shadow-lg text-center md:col-span-3 rounded-b-xl">
                    <img
                      className=" w-full  h-40 md:h-60 rounded-t-xl"
                      src={olahraga}
                      alt=""
                      srcSet=""
                    />
                    <p>Olahraga</p>
                  </div>
                </div>
              </AnimationOnScroll>
              {/* Quote */}
              <AnimationOnScroll animateIn="animate__backInUp animate__slow">
                <div className=" bg-[#26b2c8] shadow-lg  h-52 flex justify-center items-center m-4 rounded-xl  ">
                  <p className="text-gray-900 md:text-lg text-md text-center  m-2 font-semibold ">
                    <div className="text-start mb-4">
                      <span className=""></span>
                    </div>
                    <i className="text-md">
                      "Tidak ada beban yang diberikan kepada seseorang melainkan
                      sesuai dengan kesanggupannya."
                    </i>
                    <div className="text-end mt-4">
                      <span className=""> - (Q.S. Al-Baqarah, 2:286) -</span>
                    </div>
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
