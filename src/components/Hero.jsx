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

  return (
    <section
      id="home"
      className="relative min-h-screen w-full px-6 py-12 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 bg-black overflow-hidden"
    >
      {/* PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#ff5f9e", "#9a79ff", "#00f7ff"] },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: "out" } },
            size: { value: 2 },
            opacity: { value: 0.6 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* MAIN CONTENT */}
      <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          className="relative w-56 h-56 rounded-full border-4 border-[#ff5f9e] shadow-xl overflow-hidden"
        >
          <img
            src={myPic}
            alt="Bhuvi"
            className="w-full h-full object-cover rounded-full"
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
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4"
        />

        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="bg-[#9a79ff] hover:bg-[#ff5f9e] px-4 py-2 rounded-2xl shadow-lg transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-[#9a79ff] hover:bg-[#ff5f9e] px-4 py-2 rounded-2xl transition"
          >
            Contact Me
          </a>
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
