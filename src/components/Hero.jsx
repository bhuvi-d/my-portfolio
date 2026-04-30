import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import myPic from "../assets/me1.jpg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const smoothScrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full px-6 py-12 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 bg-black overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: ["#ff5f9e", "#9a79ff", "#00f7ff"] },
            links: {
              enable: true,
              distance: 180,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 0.8, outModes: { default: "out" } },
            size: { value: 2 },
            opacity: { value: 0.5 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "repulse" },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.6 } },
              repulse: { distance: 150, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
      />

      <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ duration: 1, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,95,158,0.7)" }}
          className="relative w-64 h-64 rounded-full border-4 border-[#ff5f9e] shadow-[0_0_30px_rgba(255,95,158,0.5)] overflow-hidden cursor-pointer transition-shadow"
        >
          <img
            src={myPic}
            alt="Bhuvi"
            className="w-full h-full object-cover rounded-full brightness-110 contrast-105"
          />
        </motion.div>

        <TypeAnimation
          sequence={[
            "Hey there, I'm Bhuvi",
            2000,
            "Dreamer | Developer | Designer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ff5f9e]"
        />

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(154, 121, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("projects")}
            className="cursor-pointer bg-[#9a79ff] hover:bg-[#ff5f9e] px-5 py-2.5 rounded-2xl shadow-lg transition-colors font-semibold"
          >
            View Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(154, 121, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("skills")}
            className="cursor-pointer bg-[#9a79ff] hover:bg-[#ff5f9e] px-5 py-2.5 rounded-2xl shadow-lg transition-colors font-semibold"
          >
            Skills
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(154, 121, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScrollTo("experience")}
            className="cursor-pointer bg-[#9a79ff] hover:bg-[#ff5f9e] px-5 py-2.5 rounded-2xl shadow-lg transition-colors font-semibold"
          >
            Experience
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 95, 158, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-[#9a79ff] hover:bg-[#ff5f9e] hover:border-[#ff5f9e] px-5 py-2.5 rounded-2xl transition-colors font-semibold flex items-center justify-center"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full lg:w-1/2 z-10"
      >
        <Terminal />
      </motion.div>
    </section>
  );
}
