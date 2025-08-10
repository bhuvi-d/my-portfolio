import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Bhuvi's Portfolio",
      description:
        "The very site you're exploring — built with React, Framer Motion, and glassy neon aesthetics to showcase my work.",
      badges: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
      link: "#home",
    },
    {
      title: "MQTT Dashboard",
      description:
        "A dashboard implemented using Wokwi and Node-RED for real-time IoT device monitoring and data visualization.",
      badges: ["Node-RED", "Wokwi", "MQTT", "JavaScript"],
      link: "#",
    },
    {
      title: "Hostalague",
      description:
        "A MERN stack-based tracker for hostel food logging with date filters, helping streamline meal records.",
      badges: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
    },
    {
      title: "Mandala Therapy",
      description:
        "A mindful frontend app for digital therapy through art and affirmations, designed for mental wellness.",
      badges: ["React", "CSS", "Canvas API"],
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
        className="text-4xl sm:text-5xl font-bold mb-12 text-center"
      >
        My <span className="text-[#ff5f9e]">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       rounded-2xl p-6 shadow-lg transition 
                       hover:border-[#ff5f9e] hover:shadow-[#ff5f9e]/50"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.badges.map((badge, i) => (
                <span
                  key={i}
                  className="bg-[#9a79ff]/30 text-[#9a79ff] text-sm font-medium px-3 py-1 rounded-full select-none"
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#9a79ff] hover:text-[#ff5f9e] transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

