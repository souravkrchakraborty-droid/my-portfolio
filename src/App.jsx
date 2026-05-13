import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px at ${position.x}px ${position.y}px,
            rgba(0, 255, 255, 0.15),
            transparent 80%
          )`,
        }}
      />

      {/* Floating Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10">

        <ParticlesBackground />

        <Navbar />

        <ChatBot />

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
        >

          <motion.img
            src="https://img.magnific.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80"
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-2xl mb-6"
            
            animate={{
              y: [0, -15, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Sourav
          </h1>

          <TypeAnimation
            sequence={[
              "AWS & GenAI Developer",
              2000,
              "React Frontend Engineer",
              2000,
              "Cloud Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-cyan-400 font-semibold mt-4 block"
          />

          <p className="mt-6 text-slate-300 text-lg md:text-2xl max-w-2xl">
            Frontend Developer | AWS & GenAI Learner
          </p>

          <div className="flex gap-4 mt-8 flex-wrap justify-center">

            <div className="flex gap-6 mt-10">

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/80 transition duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                Contact Me
              </motion.a>

            </div>

          </div>
        </motion.section>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20">

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
        <section
          id="skills"
          className="relative z-10 py-24 px-6 text-white"
        >

          <h2 className="text-5xl font-bold mb-16 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "AWS",
              "GitHub",
              "GenAI",
            ].map((skill) => (

              <motion.div
                key={skill}

                initial={{ opacity: 0, y: 50 }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                }}

                viewport={{ once: true }}

                whileHover={{
                  scale: 1.08,
                  y: -8,
                }}

                className="
                  backdrop-blur-lg
                  bg-white/10
                  border border-white/20
                  rounded-3xl
                  p-8
                  text-center
                  shadow-xl
                  hover:shadow-cyan-500/40
                  transition
                  duration-300
                "
              >

                <h3 className="text-2xl font-semibold text-cyan-300">
                  {skill}
                </h3>

              </motion.div>

            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative z-10 py-24 px-6 text-white"
        >

          <h2 className="text-5xl font-bold mb-16 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {[
              {
                title: "AWS EC2 Web App",
                description:
                  "Deployed a live web application using AWS EC2, GitHub, and cloud hosting workflows.",

                tech: "AWS • GitHub • HTML • CSS",
              },

              {
                title: "React Portfolio",
                description:
                  "Built a premium responsive developer portfolio using React, Tailwind CSS, and Framer Motion.",

                tech: "React • Tailwind • Framer Motion",
              },

            ].map((project, index) => (

              <motion.div
                key={index}

                initial={{ opacity: 0, y: 60 }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                }}

                viewport={{ once: true }}

                whileHover={{
                  scale: 1.03,
                  y: -10,
                }}

                className="
                  backdrop-blur-lg
                  bg-white/10
                  border border-white/20
                  rounded-3xl
                  p-8
                  shadow-2xl
                  hover:shadow-cyan-500/40
                  transition
                  duration-300
                "
              >

                <h3 className="text-3xl font-bold text-cyan-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-200 mb-8">
                  {project.tech}
                </p>

                <div className="flex gap-4">

                  <a
                    href="https://my-portfolio-orpin-five-32.vercel.app/"
                    target="_blank"
                    className="
                      px-6 py-3
                      rounded-xl
                      bg-cyan-500
                      text-black
                      font-semibold
                      hover:bg-cyan-400
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href="https://souravkrchakraborty-droid.github.io/aws-ec2-webapp/"
                    target="_blank"
                    className="
                      px-6 py-3
                      rounded-xl
                      border border-cyan-400
                      text-cyan-300
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20">

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

    </div>
  )
}


export default App