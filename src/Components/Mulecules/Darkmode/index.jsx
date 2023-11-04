/* eslint-disable react/prop-types */

const DarkMode = ({isChecked, handleToggle}) => {
  return (
    <div>
      {/* darkmode */}
      <label className="flex flex-1 items-center space-x-2 cursor-pointer mr-4  ">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`w-10 h-5 rounded-full shadow-inner ${
              isChecked ? " bg-black " : "bg-gray-400"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                isChecked ? "translate-x-6" : "translate-x-0 "
              }`}
            />
          </div>
        </div>
      </label>
    </div>
  );
}

export default DarkMode;
