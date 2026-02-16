import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";


function Navbar({ theme, setTheme }) {
  return (
    <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-gray-100 dark:bg-white/5 border-b border-gray-300 dark:border-gray-800 sticky top-0 z-50">
      
      <h1 className="text-xl font-bold tracking-wide">
        <span className="text-blue-500">Harsh</span>.dev
      </h1>

      <div className="space-x-8 text-gray-600 dark:text-gray-400">
        <Link className="hover:text-blue-500 transition" to="/">Home</Link>
        <Link className="hover:text-blue-500 transition" to="/about">About</Link>
        <Link className="hover:text-blue-500 transition" to="/projects">Projects</Link>
        <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-6 text-xl hover:scale-110 transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
