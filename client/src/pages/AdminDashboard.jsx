import { useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");

  const handleAddProject = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/projects",
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
    <section className="px-8 py-20 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Admin <span className="text-blue-500">Dashboard</span>
      </h2>

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
    </section>
  );
}

export default AdminDashboard;
