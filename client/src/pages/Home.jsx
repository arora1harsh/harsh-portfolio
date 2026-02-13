import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm{" "}
            <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              Harsh Arora
            </span>
        </h1>


        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Full Stack Developer | Problem Solver
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          I build scalable, high-performance web applications using modern 
          technologies like React, Node.js, and MongoDB.
        </p>


        <div className="flex justify-center gap-6">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg shadow-blue-500/30"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-600 hover:border-blue-500 hover:text-blue-500 px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Contact Me
          </Link>
        </div>


      </div>
    </section>
  );
}

export default Home;
