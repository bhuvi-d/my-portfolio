import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white py-20"
      style={{ marginLeft: "-1rem", marginRight: "-1rem" }} // to counteract parent's horizontal padding if needed
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          About <span className="text-[#ff5f9e]">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-lg shadow-[#ff5f9e]/40 w-full"
        >
          <p className="text-lg leading-relaxed text-white/90 mb-6">
            Hello! I’m Bhuvi — a passionate developer, designer, and all-around dreamer who loves turning ideas into vibrant, interactive web experiences.
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-6">
            I specialize in React, JavaScript, and UI/UX design. My approach blends clean code with eye-catching visuals, crafting projects that not only function flawlessly but also captivate and inspire.
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-6">
            Beyond coding, I’m inspired by art, synthwave music, and the endless possibilities of technology. Always learning, always creating.
          </p>

          <blockquote className="border-l-4 border-[#ff5f9e] pl-6 italic text-[#ff5f9e]/90">
            “Code is like poetry — every line tells a story.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
