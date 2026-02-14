function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300">
      
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
