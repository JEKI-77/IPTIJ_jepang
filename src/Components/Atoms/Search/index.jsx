/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const SearchBar = ({ placeholder, onChange, onClick, icon, width }) => {
  return (
    <div
      className="flex w-60 md:w-[40%] ml-4 justify-center "
    >
      <input
        style={{ width }}
        onChange={onChange}
        className=" md:py-[0.3em] px-[3em] md:px-[5em] text-black relative text-start   rounded-full w-[100%] flex justify-center items-center border border-gray-300 text-xl "
        type="text"
        placeholder={placeholder}
      />

      <div
        onClick={onClick}
        className="absolute ml-[8em] md:ml-[14em] mt-1 md:mt-3 text-2xl text-gray-600 cursor-pointer  "
      >
        {icon}
      </div>
    </div>
  );
};

export default SearchBar;
