import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "Intel IoT Club",
    duration: "Sept 2024 – Present",
    description:
      "Working on MERN-based applications and IoT-integrated systems for campus initiatives. Built dashboards, automated workflows, and contributed to real-time monitoring solutions using APIs and messaging systems.",
  },
  {
    title: "Software Engineer Trainee",
    company: "Workplace Options",
    duration: "May 2025 – June 2025",
    description:
      "Contributed to a production-scale React healthcare platform. Worked with Next.js and Material UI to improve UI components, fix logic-level issues, and ship user-focused features in an agile environment.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="w-full px-4 sm:px-6 lg:px-12 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-[#ff5f9e]">Experience</span>
      </h2>

      <div className="relative border-l-[3px] border-[#ff5f9e]/30 pl-8 max-w-5xl mx-auto">
        {/* Animated Line overlay */}
        <motion.div 
          initial={{ height: 0 }} 
          whileInView={{ height: "100%" }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          viewport={{ once: true, margin: "-100px" }}
          className="absolute left-[-3px] top-0 w-[3px] bg-gradient-to-b from-[#ff5f9e] to-[#9a79ff] origin-top"
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`mb-12 relative p-6 rounded-2xl transition-all duration-300 ${i === 0 ? "bg-white/5 border border-[#ff5f9e]/20 shadow-[0_0_20px_rgba(255,95,158,0.1)]" : "hover:bg-white/5"}`}
          >
            {/* Circle marker with glow pulse for first item */}
            <div className={`absolute -left-[43px] top-8 w-5 h-5 rounded-full border-[3px] border-black ${i === 0 ? "bg-[#ff5f9e] shadow-[0_0_15px_#ff5f9e] animate-[pulse_2s_ease-in-out_infinite]" : "bg-[#9a79ff]"}`} />

            <h3 className={`text-2xl font-bold ${i === 0 ? "text-white" : "text-white/90"}`}>{exp.title}</h3>
            <p className="text-[#ff5f9e] font-semibold text-lg mt-1">{exp.company}</p>
            <p className="text-sm text-gray-400 font-mono mt-1 mb-4 bg-white/10 inline-block px-3 py-1 rounded-full">{exp.duration}</p>
            <p className="text-gray-300 leading-relaxed text-md">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
