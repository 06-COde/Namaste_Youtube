import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import {
  FaFire,
  FaVideo,
  FaBolt,
  FaCut,
  FaHome,
  FaGamepad,
  FaFilm,
  FaThumbsUp,
  FaMusic,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Auto close on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600 && isMenuOpen) {
        dispatch(toggleMenu());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <aside className="w-52 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-md px-4 py-6 text-sm text-gray-800 dark:text-gray-200 space-y-6 z-30">
      {/* Main Navigation */}
      <div>
        <h2 className="text-xs font-semibold uppercase mb-2 text-gray-500 dark:text-gray-400">
          Explore
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 hover:text-red-600 cursor-pointer">
            <FaFire className="text-base" /> Trending
          </li>
          <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <FaVideo className="text-base" /> Shorts
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaBolt className="text-base" /> Live
          </li>
          <li className="flex items-center gap-2 hover:text-pink-600 cursor-pointer">
            <FaCut className="text-base" /> CapCut
          </li>
        </ul>
      </div>

      {/* Subscriptions */}
      <div>
        <h2 className="text-xs font-semibold uppercase mb-2 text-gray-500 dark:text-gray-400">
          Subscriptions
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 hover:text-indigo-600 cursor-pointer">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-2 hover:text-orange-600 cursor-pointer">
            <FaVideo /> Shorts
          </li>
          <li className="flex items-center gap-2 hover:text-purple-600 cursor-pointer">
            <FaGamepad /> Gaming
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer">
            <FaFilm /> Movies
          </li>
        </ul>
      </div>

      {/* Liked Videos */}
      <div>
        <h2 className="text-xs font-semibold uppercase mb-2 text-gray-500 dark:text-gray-400">
          Liked Videos
        </h2>
        <ul className="space-y-2">
          <li className="hover:text-red-500 cursor-pointer">Tmkoc</li>
          <li className="hover:text-green-500 cursor-pointer">Hollywood</li>
          <li className="hover:text-blue-500 cursor-pointer">Bollywood</li>
          <li className="hover:text-pink-500 cursor-pointer">Supershit</li>
        </ul>
      </div>

      {/* Watch Later */}
      <div>
        <h2 className="text-xs font-semibold uppercase mb-2 text-gray-500 dark:text-gray-400">
          Watch Later
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
            <FaMusic /> Music
          </li>
          <li className="flex items-center gap-2 hover:text-gray-500 cursor-pointer">
            <FaClock /> Listening
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
