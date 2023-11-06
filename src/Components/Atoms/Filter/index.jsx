import { useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { useState } from "react";

const Filter = () => {
  // const handleNavigate = () => {
  //   navigateTo("/newsjpn");
  // };
  const handleNavigateIndo = () => {
    navigateTo("/newsindo");
  };
  const BeritaIslamNavigate = () => {
    navigateTo("/news");
  };

  const navigateTo = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=" mt-8 mb-4 -ml-52">
      <div className="relative ">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-gray-200 w-42 px-3  font-semibold  hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-whitefont-medium rounded-lg text-md  text-center items-center flex bg-slate-800  "
          type="button"
          onClick={toggleDropdown}
        >
          Pilih Kategori
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            id="dropdown"
            className="z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-white absolute right-0 mt-2"
          >
            <ul className="py-2 text-md text-gray-700">
              <li>
                <a
                  href="#"
                  onClick={BeritaIslamNavigate}
                  className="block px-4 py-2 hover:bg-gray-100 text-md  "
                >
                  Berita Islami
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  onClick={handleNavigate}
                  className="block px-4 py-2 hover:bg-gray-100 text-md  "
                >
                  Japang
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  onClick={handleNavigateIndo}
                  className="block px-4 py-2 hover:bg-gray-100 text-md  "
                >
                  Indonesia
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
