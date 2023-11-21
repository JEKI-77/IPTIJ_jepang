/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const SearchBar = ({ placeholder, onChange, onClick, icon }) => {
  return (
    <div className="flex w-[100%] justify-center ">
      <input
        onChange={onChange}
        className=" py-[0.3em] px-[3em] md:px-[5em] text-black relative text-start   rounded-full w-[100%] flex justify-center items-center border border-gray-300 text-xl "
        type="text"
        placeholder={placeholder}
      />

      <div
        onClick={onClick}
        className="absolute ml-[10em] md:ml-[14em] mt-3 text-2xl text-gray-600 cursor-pointer  "
      >
        {icon}
      </div>
    </div>
  );
};

export default SearchBar;
