import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">Harsh Arora</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Full Stack Developer | Problem Solver
        </h2>

        <p className="text-gray-500 mb-8">
          I build scalable web applications with modern technologies like 
          React, Node.js, and MongoDB.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-500 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Home;
