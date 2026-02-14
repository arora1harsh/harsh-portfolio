import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");

  const fetchProjects = async () => {
    const res = await axios.get("https://harsh-portfolio-flpe.onrender.com/api/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(
				`https://harsh-portfolio-flpe.onrender.com/api/projects/${id}`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);

			fetchProjects();
		} catch (error) {
			alert("Delete failed");
		}
	};

  const handleAddProject = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://harsh-portfolio-flpe.onrender.com/api/projects",
        {
          title,
          description,
          tech: tech.split(","),
          github: "#",
          live: "#",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Project added!");
      setTitle("");
      setDescription("");
      setTech("");

    } catch (error) {
      alert("Unauthorized");
    }
  };

  return (
    <section className="relative px-8 py-20 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Admin <span className="text-blue-500">Dashboard</span>
      </h2>
			<button
				onClick={() => {
					localStorage.removeItem("token");
					window.location.replace = "/admin";
				}}
				className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
			>
				Logout
			</button>
      <form
        onSubmit={handleAddProject}
        className="space-y-6 bg-white/5 border border-gray-800 rounded-xl p-8"
      >
        <input
          type="text"
          placeholder="Project Title"
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tech (comma separated)"
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
        >
          Add Project
        </button>
      </form>
			<div className="mt-12 space-y-4">
				{projects.map((project) => (
					<div
						key={project._id}
						className="flex justify-between items-center bg-white/5 border border-gray-800 p-4 rounded-lg"
					>
						<span>{project.title}</span>

						<button
							onClick={() => handleDelete(project._id)}
							className="text-red-500 hover:text-red-400"
						>
							Delete
						</button>
					</div>
				))}
			</div>

    </section>
  );
}

export default AdminDashboard;
