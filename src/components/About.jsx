import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white py-20"
      style={{ marginLeft: "-1rem", marginRight: "-1rem" }} // counter parent's horizontal padding if needed
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-[#ff5f9e]">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          animate={{ y: [0, -5, 0] }}
          className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl shadow-[#ff5f9e]/5 w-full transition-all duration-500 hover:border-[#ff5f9e]/50 hover:shadow-[0_0_40px_rgba(255,95,158,0.2)] overflow-hidden"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          {/* Animated Glow Border/Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff5f9e]/10 to-[#9a79ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-lg leading-relaxed text-white/90 mb-6 relative z-10">
            Hey, I’m Bhuvaneshwari — a builder at heart who loves turning ideas into things people can actually use.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-lg leading-relaxed text-white/80 mb-6 relative z-10">
            I work across React, full-stack systems, and a bit of AI/ML — but more than the tech, I enjoy figuring out how things connect. Whether it’s an IoT dashboard streaming real-time data or an AI model making sense of messy inputs, I like building systems that feel both smart and intuitive.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="text-lg leading-relaxed text-white/80 mb-6 relative z-10">
            Lately, I’ve been exploring the intersection of web, AI, and automation — creating projects that go beyond just “working” and actually solve something meaningful.
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="text-lg leading-relaxed text-white/80 mb-6 relative z-10">
            Outside of code, you’ll probably find me diving into new tech rabbit holes, experimenting with ideas, or chasing that one “what if we try this?” moment.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="text-lg leading-relaxed text-white/80 mb-6 relative z-10">
            Still learning. Still building. Always curious.
          </motion.p>

          <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="border-l-4 border-[#ff5f9e] pl-6 italic text-[#ff5f9e]/90 font-medium relative z-10">
            “Code is like poetry — every line tells a story.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
