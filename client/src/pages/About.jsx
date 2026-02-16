import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";

import { BsDatabase } from "react-icons/bs";


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

            <div className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>

              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li>🎓 Engineering Student</li>
                <li>💻 Full Stack Developer</li>
                <li>🚀 React | Node | MongoDB</li>
                <li>📍 India</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE - ABOUT TEXT */}
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
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
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Download CV
            </a>

          </div>

        </div>

        
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center">
            My <span className="text-blue-500">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { name: "React", icon: <FaReact /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
              { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
              { name: "Express", icon: <SiExpress /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
              { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
              { name: "REST APIs", icon: <BsDatabase className="text-purple-400" /> },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
              >
                <div className="text-4xl">
                  {skill.icon}
                </div>

                <span className="text-gray-600 dark:text-gray-400font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}

          </div>

        </div>

      </motion.section>
    </motion.div>
  );
}

export default About;
