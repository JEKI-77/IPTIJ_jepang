/* eslint-disable react/prop-types */

const DarkMode = ({ isChecked, handleToggle }) => {
  return (
    <div>
      {/* darkmode */}
      <label className="flex flex-1 items-center space-x-2 cursor-pointer mr-4 mt-1 md:mt-0  ">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`md:w-10 md:h-5 w-8 h-4 rounded-full shadow-inner ${
              isChecked ? " bg-black " : "bg-gray-400"
            }`}
          >
            <div
              className={`md:w-5 md:h-5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                isChecked ? "translate-x-6" : "translate-x-0 "
              }`}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
