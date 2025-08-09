
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full"
        style={{
          background: "linear-gradient(45deg, #ff5f9e, #9a79ff, #00f7ff)",
          backgroundSize: "400% 400%",
          animation: "colorShift 6s ease infinite",
          boxShadow: "0 0 15px rgba(255, 95, 158, 0.8)",
        }}
      />

      <style>
        {`
          @keyframes colorShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  );
}
