import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-32 ">
      <div className=" flex flex-col items-center justify-center animate__animated animate__backInRight shadow-xl  shadow-slate-400 w-[90%] md:w-[90%] m-auto p-4  rounded-lg ">
        <p
          className="text-lg text-center text-gray-900
                      font-semibold mb-4 md:text-2xl"
        >
          {t("title")}
          <span className="text-sm md:text-lg"> (IPTIJ)</span>
        </p>
        <h2 className="mt-8 text-lg font-semibold mb-2 items-start  md:flex hidden">
          {t("tujuan")}
        </h2>

        <p className="text-md md:text-lg text-center lg:text-justify">
          {t("visimisi")}
        </p>
      </div>
    </div>
  );
};

export default Description;
