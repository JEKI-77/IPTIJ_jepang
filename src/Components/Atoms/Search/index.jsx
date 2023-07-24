// eslint-disable-next-line react/prop-types
const SearchBar = ({ title, placeholder, onChange, onClick }) => {
  return (
    <div className="flex w-[100%]  justify-center">
      <input
        onChange={onChange}
        className=" py-[0.3em] px-[5em] md:px-[5em] relative text-start  rounded-full  border border-gray-300 text-md text-sm"
        type="text"
        placeholder={placeholder}
      />

      <div className="absolute ml-[17em]   ">
        <button
          onClick={onClick}
          className="bg-cyan-600  text-white px-4 py-[0.2em]  rounded-full items-center  "
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
