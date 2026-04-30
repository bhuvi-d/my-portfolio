import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Bhuvi's Portfolio",
      description:
        "A sleek, interactive portfolio built with React and Framer Motion, designed to blend smooth animations with a modern glassmorphism aesthetic. Focused on performance, responsiveness, and creating a visually engaging developer identity.",
      badges: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "MQTT Dashboard",
      description:
        "A real-time IoT dashboard for monitoring sensor data using MQTT and Node-RED. Built end-to-end data flow from Raspberry Pi devices to live visualizations, making complex data streams easy to understand.",
      badges: ["Node-RED", "MQTT", "Raspberry Pi", "IoT"],
      link: "#",
    },
    {
      title: "Mandala Therapy",
      description:
        "A creative frontend application combining art and mindfulness through interactive mandala design and affirmations. Built using Canvas API to deliver a calming, user-driven digital therapy experience.",
      badges: ["React", "CSS", "Canvas API"],
      link: "#",
    },
    {
      title: "Hostalague",
      description:
        "A MERN-based system for hostel food logging with smart filtering and record tracking. Designed to simplify daily operations while improving data consistency and usability for real-world deployment.",
      badges: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 lg:px-12 py-20 bg-black text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-[#ff5f9e]">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 
                       rounded-2xl p-7 shadow-xl transition-all duration-300 overflow-hidden
                       hover:border-[#ff5f9e]/70 hover:shadow-[0_0_25px_rgba(255,95,158,0.25)] flex flex-col h-full"
          >
            {/* Hover Gradient Preview Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff5f9e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-[#ff5f9e] transition-colors">{project.title}</h3>
            <p className="text-white/70 mb-6 relative z-10 flex-grow leading-relaxed">{project.description}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.badges.map((badge, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-[#9a79ff]/20 border border-[#9a79ff]/40 text-[#9a79ff] text-xs font-semibold px-3 py-1 rounded-full select-none"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#9a79ff] font-medium hover:text-[#ff5f9e] transition-colors relative z-10 w-fit group/link"
            >
              <span className="relative">
                View Project
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff5f9e] transition-all duration-300 group-hover/link:w-full"></span>
              </span>
              <motion.span whileHover={{ x: 3 }}>→</motion.span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
