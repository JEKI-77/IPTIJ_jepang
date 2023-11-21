import workshop from "../../../assets/images/Agenda/Workshop.jpg";
import olahraga from "../../../assets/images/Agenda/olahraga.jpg";
import Rekreasi from "../../../assets/images/bannerbg.jpg";
import imgGallery6 from "../../../assets/imagesIptij/img6.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";

const AgendaCard = () => {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-flow-col gap-20 md:gap-2  ">
      <AnimationOnScroll animateIn="animate__backInUp">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 place-items-center mt-16 w-[90%] m-auto ">
          <h2 className="col-span-2 md:col-span-3 text-center text-lg font-semibold ">
            {t("agenda.title")}
          </h2>

          <div className="shadow-lg text-center rounded-b-xl hover:scale-105 duration-100">
            <img
              className=" w-full md:h-60  h-40 rounded-t-xl  "
              src={imgGallery6}
              alt=""
              srcSet=""
            />
            <p>{t("agenda.kajian")}</p>
          </div>

          <div className="shadow-lg text-center rounded-b-xl hover:scale-105 duration-100 ">
            <img
              className=" w-full md:h-60  h-40 rounded-t-xl "
              src={workshop}
              alt=""
              srcSet=""
            />
            <p>{t("agenda.workshop")}</p>
          </div>

          <div className="shadow-lg text-center rounded-b-xl hover:scale-105 duration-100">
            <img
              className=" w-full md:h-60  h-40 rounded-t-xl"
              src={Rekreasi}
              alt=""
              srcSet=""
            />
            <p>{t("agenda.rekreasi")}</p>
          </div>

          <div className="shadow-lg text-center md:col-span-3 rounded-b-xl hover:scale-105 duration-100">
            <img
              className=" w-full  h-40 md:h-60 rounded-t-xl"
              src={olahraga}
              alt=""
              srcSet=""
            />
            <p>{t("agenda.olahraga")}</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default AgendaCard;
