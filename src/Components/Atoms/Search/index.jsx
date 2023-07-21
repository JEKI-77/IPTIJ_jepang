// eslint-disable-next-line react/prop-types
const SearchBar = ({ title, placeholder }) => {
  return (
    <div className="mr-4 flex w-[100%]">
      <input
        className=" py-1 px-20 w-full text-start border border-gray-300"
        type="text"
        placeholder={placeholder}
      />
      <button className="bg-cyan-600  text-white px-6 py-1 rounded-md ">
        {title}
      </button>
    </div>
  );
};

export default SearchBar;
