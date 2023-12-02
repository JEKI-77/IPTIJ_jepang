/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const SearchBar = ({
  placeholder,
  onChange,
  onClick,
  icon,
  onKeyPress,

}) => {
  return (
    <div className="flex w-60 md:w-[40%] ml-4 md:ml-20 justify-center ">
      <input
        onKeyUp={onKeyPress}
        onChange={onChange}
        className=" md:py-[0.3em] px-[1em] md:px-[2em] text-black relative text-start w-60  rounded-full md:text-sm  flex justify-center items-center border border-gray-300 text-md "
        type="text"
        placeholder={placeholder}
      />
      <div
        onClick={onClick}
        className="absolute ml-[10em] md:ml-[7.2em] mt-1  text-xl md:text-2xl text-gray-600 cursor-pointer  "
      >
        {icon}
      </div>
    </div>
  );
};

export default SearchBar;
