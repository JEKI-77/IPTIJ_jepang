import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";

const Quotes = () => {
  const { t } = useTranslation();
  return (
    <AnimationOnScroll animateIn="animate__backInUp animate__slow">
      <div className="bg-[#1662d4] shadow-lg h-52 flex justify-center items-center m-4 rounded-xl mt-16 mb-10">
        <div className="text-gray-900 md:text-lg text-md text-center m-2 font-semibold ">
          <i className="text-md md:text-2xl text-gray-100">{t("quote")}</i>
          <p className="text-end mt-4 text-gray-800">
            <span className=""> - (Q.S. Al-Baqarah, 2:286) -</span>
          </p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Quotes;
