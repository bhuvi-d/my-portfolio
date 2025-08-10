import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    duration: "Jan 2023 - Present",
    description:
      "Leading a team to build scalable web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Solutions",
    duration: "Jun 2020 - Dec 2022",
    description:
      "Developed user-friendly interfaces and improved UX for e-commerce platforms.",
  },
  {
    title: "Intern Developer",
    company: "Startup Labs",
    duration: "Jan 2019 - May 2020",
    description:
      "Assisted in creating internal tools and automation scripts using Python.",
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

      <div className="relative border-l-4 border-[#ff5f9e] pl-8 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="mb-12 relative"
          >
            {/* Circle marker */}
            <div className="absolute -left-6 top-2 w-5 h-5 bg-[#ff5f9e] rounded-full border-2 border-black" />

            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-[#ff5f9e] font-medium">{exp.company}</p>
            <p className="text-sm italic mb-2">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
