const Description = () => {
  return (
    <div className="text-center mt-32 ">
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
          IPTIJ (Ikatan Persaudaran Trainee Indonesia di Jepang) merupakan
          komunitas yang telah ada selama 18 tahun dijepang yang dibentuk untuk
          memfasilitasi dan memperkuat hubungan antara para trainee atau peserta
          program pelatihan dari Indonesia yang tinggal dan bekerja di Jepang.
        </p>
      </div>
    </div>
  );
};

export default Description;
