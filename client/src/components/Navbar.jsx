import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/5 border-b border-gray-800 sticky top-0 z-50">
      
      <h1 className="text-xl font-bold tracking-wide">
        <span className="text-blue-500">Harsh</span>.dev
      </h1>

      <div className="space-x-8 text-gray-300">
        <Link className="hover:text-blue-500 transition" to="/">Home</Link>
        <Link className="hover:text-blue-500 transition" to="/about">About</Link>
        <Link className="hover:text-blue-500 transition" to="/projects">Projects</Link>
        <Link className="hover:text-blue-500 transition" to="/blog">Blog</Link>
        <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;
