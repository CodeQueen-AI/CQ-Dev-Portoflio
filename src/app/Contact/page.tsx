export default function ContactMe() {
  return (
    <>
    <section
        className="min-h-screen px-4 py-20 text-gray-900 bg-gradient-to-l from-[#FFF0F3] via-white to-pink-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-1">Contact Me</h2>
            <p className="text-[#FF0B55] font-semibold text-lg mb-8">— Get in Touch</p>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-base mb-6 leading-relaxed">
              Got an idea, or just want to chat? I am always excited to hear about new projects and opportunities. Let’s connect and build something great together!
            </p>
          <div className="space-y-6 text-base">
              <div className="flex items-start gap-3">
                <span className="text-[#FF0B55] text-2xl">👩‍💼</span>
                <div>
                  <p className="font-semibold">Name</p>
                  <p>Sumbal Naz</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#FF0B55] text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Pakistan, Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#FF0B55] text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>codeq209@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Message Me</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-[#FF0B55]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md p-3 w-full focus:outline-[#FF0B55]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-[#FF0B55]"
              />
              <textarea
                rows="5"
                placeholder="Describe Project ....."
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-[#FF0B55]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#FF0B55] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#FF0B55] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
