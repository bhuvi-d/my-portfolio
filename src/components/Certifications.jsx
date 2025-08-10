import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certifications() {
  const certificates = [
    {
      title: "React Developer Certification",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20200426214212/template12.png",
      link: "#",
    },
    {
      title: "Node.js Mastery",
      img: "https://via.placeholder.com/1200x800.png?text=Node.js+Certification",
      link: "#",
    },
    {
      title: "UI/UX Design",
      img: "https://via.placeholder.com/1200x800.png?text=UI+UX+Certification",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % certificates.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);

  return (
    <section
      id="certifications"
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
        My <span className="text-[#ff5f9e]">Certifications</span>
      </motion.h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center max-w-6xl mx-auto h-[600px]">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Image */}
        <div className="w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.a
              key={current}
              href={certificates[current].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={certificates[current].img}
                alt={certificates[current].title}
                className="max-h-full max-w-full object-contain rounded-2xl border border-white/20 shadow-lg"
              />
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Caption */}
      <p className="text-center text-lg mt-6 text-white/80">
        {certificates[current].title}
      </p>
    </section>
  );
}
