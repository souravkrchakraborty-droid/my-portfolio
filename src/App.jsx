function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <img
          src="https://img.magnific.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"
          alt="profile"
          className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-xl mb-6"
        />

        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm Sourav 👋
        </h1>

        <p className="mt-6 text-slate-300 text-lg md:text-2xl max-w-2xl">
          Frontend Developer | AWS & GenAI Learner
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg">

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            I am learning modern web development, React, AWS and Generative AI
            by building real-world projects and deploying applications.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold mb-8 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {["HTML", "CSS", "JavaScript", "React", "GitHub"].map((skill) => (
            <div
              key={skill}
              className="bg-cyan-400 text-black font-semibold rounded-2xl py-4 text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-4">
              AWS EC2 Web App
            </h3>

            <p className="text-slate-300 mb-6">
              Built and deployed using GitHub Pages while learning Git workflows,
              deployment and hosting.
            </p>

            <a
              href="https://souravkrchakraborty-droid.github.io/aws-ec2-webapp/"
              target="_blank"
              className="text-cyan-400 hover:text-white transition"
            >
              🔗 Live Demo
            </a>

          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <h3 className="text-2xl font-bold mb-4">
              React Portfolio
            </h3>

            <p className="text-slate-300 mb-6">
              Modern responsive portfolio using React and Tailwind CSS.
            </p>

            <a
              href="https://github.com/souravkrchakraborty-droid"
              target="_blank"
              className="text-cyan-400 hover:text-white transition"
            >
              🔗 GitHub
            </a>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg">

          <h2 className="text-4xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-slate-300 mb-6">
            Connect with me on GitHub and follow my learning journey.
          </p>

          <a
            href="https://github.com/souravkrchakraborty-droid"
            target="_blank"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition inline-block"
          >
            GitHub Profile
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-400 border-t border-white/10">
        © 2026 Sourav Kumar
      </footer>

    </div>
  )
}

export default App