import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const hireTemplate = `Hi Harsh,

  I came across your portfolio and I am interested in discussing an opportunity with you.

  Looking forward to connecting with you.

  Best regards,
  `;

  const bugTemplate = `Hi Harsh,

  I found a bug on your website.

  Page:
  Issue:
  Steps to reproduce:
  Expected behavior:
  Actual behavior:

  Thanks,
  `;

  const handleTemplate = (type) => {
    if (type === "hire") {
      setMessage(hireTemplate);
    } else if (type === "bug") {
      setMessage(bugTemplate);
    } else {
      setMessage("");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        { name, email, message }
      );

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - FORM */}
          <div className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 backdrop-blur-md">

            {/* TEMPLATE BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">

                <button
                  type="button"
                  onClick={() => handleTemplate("hire")}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition text-sm"
                >
                  Hire Me
                </button>

                <button
                  type="button"
                  onClick={() => handleTemplate("bug")}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition text-sm"
                >
                  Report a Bug
                </button>

                <button
                  type="button"
                  onClick={() => handleTemplate("custom")}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded-full transition text-sm"
                >
                  Custom Message
                </button>

              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>

              </form>

          </div>

          {/* RIGHT SIDE - CONTACT INFO */}
          <div className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-gray-800 rounded-2xl p-8 backdrop-blur-md space-y-8">

            <h3 className="text-2xl font-semibold">Contact Information</h3>

            {/* Basic Info */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400">

              <div className="flex items-center gap-3">
                <MdLocationOn className="text-blue-500 text-xl" />
                <span>23, Narmada Hostel, JNU, New Delhi</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-blue-500 text-xl" />
                <span>+91-9329751775</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-blue-500 text-xl" />
                <span>arora1harsh@gmail.com</span>
              </div>

            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>

              <div className="flex gap-6 text-2xl">

                <a
                  href="https://www.linkedin.com/in/harsh-arora-12ba55285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition hover:scale-110"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/arora1harsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition hover:scale-110"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://twitter.com/arora1harsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition hover:scale-110"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://instagram.com/arora1harsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition hover:scale-110"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/919329751775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition hover:scale-110"
                >
                  <FaWhatsapp />
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  );
}

export default Contact;
