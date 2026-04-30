import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

export default function ContactMe() {
  const contacts = [
    { name: "Email", icon: <FaEnvelope />, link: "mailto:bhuvid2005@gmail.com", text: "bhuvid2005@gmail.com" },
    { name: "Phone", icon: <FaPhone />, link: "tel:+919611770970", text: "+91-9611770970" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/d-bhuvi", text: "linkedin.com/in/d-bhuvi" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/bhuvi-d", text: "github.com/bhuvi-d" },
    { name: "Kaggle", icon: <SiKaggle />, link: "https://www.kaggle.com/bhuvid16", text: "kaggle.com/bhuvid16" },
  ];

  return (
    <section id="contact" className="w-full bg-[#1e1e2f] text-white py-20 px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Get in <span className="text-[#ff5f9e]">Touch</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {contacts.map((contact, i) => (
          <motion.a
            key={i}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-[#ff5f9e]/50 hover:shadow-[0_0_25px_rgba(255,95,158,0.2)] transition-all group"
          >
            <div className="text-3xl text-[#9a79ff] group-hover:text-[#ff5f9e] transition-colors">
              {contact.icon}
            </div>
            <div className="overflow-hidden">
              <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">{contact.name}</h3>
              <p className="text-white/60 text-sm truncate group-hover:text-white/80 transition-colors">{contact.text}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
