import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  return (
    <nav className="w-full backdrop-blur-md bg-gray-100 dark:bg-white/5 border-b border-gray-300 dark:border-gray-800 sticky top-0 z-50">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-blue-500">Harsh</span>.dev
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400">

          <Link className="hover:text-blue-500 transition" to="/">Home</Link>
          <Link className="hover:text-blue-500 transition" to="/about">About</Link>
          <Link className="hover:text-blue-500 transition" to="/projects">Projects</Link>
          <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-lg sm:text-xl hover:scale-110 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
