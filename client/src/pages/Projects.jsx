import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://harsh-portfolio-flpe.onrender.com/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-blue-500">Projects</span>
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
