import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
  
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-8 py-20 max-w-6xl mx-auto"
      >

        
        <h2 className="text-4xl font-bold mb-16 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - PHOTO + QUICK INFO */}
          <div className="space-y-8">

            <div className="flex justify-center">
              <motion.img
                src={profile}
                alt="Harsh Arora"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-56 h-56 rounded-2xl object-cover border border-gray-700 shadow-2xl shadow-blue-500/30 hover:scale-105 transition duration-300"
              />

            </div>

            <div className="bg-white/5 border border-gray-800 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>

              <ul className="space-y-4 text-gray-400">
                <li>🎓 Engineering Student</li>
                <li>💻 Full Stack Developer</li>
                <li>🚀 React | Node | MongoDB</li>
                <li>📍 India</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE - ABOUT TEXT */}
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I'm Harsh Arora, a passionate full stack developer focused on
              building scalable and user-friendly web applications.
            </p>

            <p>
              I enjoy solving complex problems, optimizing performance,
              and creating clean UI/UX experiences.
            </p>

            <p>
              Currently exploring advanced backend systems, system design,
              and cloud deployment.
            </p>
          </div>

        </div>

        
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center">
            My <span className="text-blue-500">Skills</span>
          </h3>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
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
          </motion.div>
        </div>

      </motion.section>
    </motion.div>
  );
}

export default About;
