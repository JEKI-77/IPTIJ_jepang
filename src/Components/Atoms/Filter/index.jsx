import { useNavigate } from "react-router-dom";

const Filter = () => {
  const handleNavigate = () => {
    navigateTo("/newsjpn");
  };
  const handleNavigateIndo = (e) => {
    navigateTo("/newsindo");
    console.log(e);
  };
  const BeritaIslamNavigate = (e) => {
    navigateTo("/kajian");
    console.log(e);
  };

  const navigateTo = useNavigate();
  return (
    <>
      <div className="text-center">
        <p className="text-4xl md:mb-12 font-semibold mb-8 ">IPTIJ News</p>
      </div>
      <div className="flex text-2xl mb-8 gap-4 w-full ">
        <p
          className="cursor-pointer hover:bg-cyan-600 bg-cyan-800 text-white  px-4 py-1  rounded-xl text-[16px] text-center justify-center items-center flex leading-6 md:leading-none"
          onClick={handleNavigateIndo}
        >
          Berita Indonesia
        </p>
        <p
          className="cursor-pointer hover:bg-cyan-600 bg-cyan-800 text-white px-4 py-1 rounded-xl text-[16px] text-center justify-center items-center flex leading-6 md:leading-none "
          onClick={handleNavigate}
        >
          Berita Jepang
        </p>
        <p
          className="cursor-pointer hover:bg-cyan-600 bg-cyan-800 text-white px-4 py-1 rounded-xl text-[16px] text-center justify-center items-center flex leading-6 md:leading-none "
          onClick={BeritaIslamNavigate}
        >
          Berita Islam
        </p>
      </div>
    </>
  );
};

export default Filter;
