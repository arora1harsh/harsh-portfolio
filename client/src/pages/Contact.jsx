function Contact() {
  return (
    <section className="px-8 py-20 max-w-4xl mx-auto">
      
      <h2 className="text-4xl font-bold mb-12 text-center">
        Contact <span className="text-blue-500">Me</span>
      </h2>

      <form className="space-y-6 bg-white/5 border border-gray-800 rounded-xl p-8 backdrop-blur-md">
        
        <div>
          <label className="block mb-2 text-gray-400">Name</label>
          <input
            type="text"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Email</label>
          <input
            type="email"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Message</label>
          <textarea
            rows="4"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;
