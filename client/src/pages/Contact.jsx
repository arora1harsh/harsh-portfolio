import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

      <section className="px-8 py-20 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>
    </motion.div>
  );
}

export default Contact;
