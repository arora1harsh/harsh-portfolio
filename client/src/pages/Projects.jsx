import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Nirvana Fest Website",
      description: "A full event management website built with React and Tailwind.",
      tech: ["React", "Tailwind", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Dynamic full-stack portfolio with admin panel.",
      tech: ["React", "MongoDB", "Express"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-blue-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;
