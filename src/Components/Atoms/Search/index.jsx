// eslint-disable-next-line react/prop-types
const SearchBar = ({ title, placeholder, onChange, onClick }) => {
  return (
    <div className="mr-4 flex w-[100%]">
      <input
        onChange={onChange}
        className=" py-1 px-[3em] text-start text-xl rounded-full relative border border-gray-300"
        type="text"
        placeholder={placeholder}
      />
      <button
        onClick={onClick}
        className="bg-cyan-600 absolute text-white px-6 py-[0.4em] rounded-full items-center ml-[16rem]"
      >
        {title}
      </button>
    </div>
  );
};

export default SearchBar;
