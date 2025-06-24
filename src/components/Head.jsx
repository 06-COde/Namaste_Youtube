import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_Search_Api } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestion(searchCache[search]);
      } else {
        getSuggestion();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const getSuggestion = async () => {
    const data = await fetch(Youtube_Search_Api + search);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(cacheResults({ [search]: json[1] }));
  };

  const toggleBtnHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left - Logo and Menu */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
        <img
          onClick={toggleBtnHandler}
          className="h-6 sm:h-8 cursor-pointer"
          src="https://as1.ftcdn.net/jpg/02/24/13/60/1000_F_224136032_b11na6zJLTpORSjfauRdpKamQDc7Uejv.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 sm:h-10 md:h-14"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
          />
        </a>
      </div>

      {/* Middle - Search bar */}
      <div className="relative w-full max-w-xl">
        <div className="flex">
          <input
            className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none text-sm"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setTimeout(() => setshowSuggestion(false), 150)}
          />
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Suggestions */}
        {showSuggestion && suggestion.length > 0 && (
          <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
            <ul className="divide-y divide-gray-100 dark:divide-gray-700 text-sm">
              {suggestion.map((s, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <i className="fa-solid fa-magnifying-glass mr-2 text-gray-500 dark:text-gray-400"></i>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right - User icon and Theme Toggle */}
      <div className="w-full sm:w-auto flex justify-end items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Toggle Theme"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <img
          className="h-8 sm:h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s"
          alt="user"
        />
      </div>
    </header>
  );
};

export default Head;
