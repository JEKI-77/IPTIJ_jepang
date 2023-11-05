/* eslint-disable react/no-unescaped-entities */
import Banner from "../../Components/Atoms/Banner";
import { Helmet } from "react-helmet";
import "animate.css/animate.min.css";
import AgendaCard from "../../Components/Mulecules/AgendaCard";
import Quotes from "../../Components/Mulecules/Quotes";
import Description from "../../Components/Mulecules/Description";
import LinkDonasi from "../../Components/Mulecules/LinkDonasi";
import Svg from "../../Components/Atoms/svg";
import Whatsapp from "../../Components/Atoms/whatsUpIcon";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>IPTIJ - Kenshuusei Jepang</title>
        <meta
          name="description"
          content="Selamat datang di IPTIJ - Organisasi Kenshusei Jepang. Kami menyediakan berbagai informasi kenshusei Jepang."
        />
      </Helmet>

      <Banner />
      <Svg />

      <div className="md:w-[80%] m-auto -mt-24 md:mt-0" id="gallery">
        {/* <div className=" items-center flex justify-center">
          <img className=" hidden w-[50%] shadow-lg" src={""} alt="" />
        </div> */}

        {/* decription */}
        <Description />

        <LinkDonasi />
        {/* Agenda */}
        <AgendaCard />
        {/* Quote */}
        <Quotes />
        <Whatsapp />
      </div>
    </div>
  );
};

export default Home;
