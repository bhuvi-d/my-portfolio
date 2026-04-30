import { motion } from "framer-motion";

export default function Hackathons() {
  const hackathons = [
    {
      title: "Smart India Hackathon (Internal Round)",
      description: "Ranked in the Top 50. Built AI-powered systems including NLP classifiers, computer vision pipelines, and real-time dashboards.",
      highlight: "Top 50"
    },
    {
      title: "GHCI Hackathon",
      description: "Cleared Round 1 out of 9000+ participating teams.",
      highlight: "Top 1%"
    }
  ];

  return (
    <section
      id="hackathons"
      className="w-full px-4 sm:px-6 lg:px-12 py-20 bg-[#1e1e2f] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      >
        Hackathons & <span className="text-[#ff5f9e]">Achievements</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
        {hackathons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       rounded-2xl p-8 shadow-lg transition relative overflow-hidden
                       hover:border-[#ff5f9e] hover:shadow-[#ff5f9e]/50"
          >
            <div className="absolute top-0 right-0 bg-[#ff5f9e] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              {item.highlight}
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-2 text-[#9a79ff]">{item.title}</h3>
            <p className="text-white/80 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
