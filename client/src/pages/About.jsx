function About() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      
      <h2 className="text-4xl font-bold mb-12 text-center">
        About <span className="text-blue-500">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm Harsh Arora, a passionate full stack developer focused on
            building scalable and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy solving complex problems, optimizing performance,
            and creating clean UI/UX experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently exploring advanced backend systems and cloud deployment.
          </p>
        </div>

        <div className="bg-white/5 border border-gray-800 rounded-xl p-8 backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>
          
          <ul className="space-y-4 text-gray-400">
            <li>🎓 Engineering Student</li>
            <li>💻 Full Stack Developer</li>
            <li>🚀 React | Node | MongoDB</li>
            <li>📍 India</li>
          </ul>
        </div>

      </div>
      <div className="mt-20">
        <h3 className="text-3xl font-bold mb-10 text-center">
          My <span className="text-blue-500">Skills</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind CSS",
            "Git",
            "REST APIs",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-gray-800 rounded-lg py-4 hover:bg-blue-500/10 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;
