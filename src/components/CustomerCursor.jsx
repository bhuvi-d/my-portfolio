import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorXSpring, cursorYSpring]);

  return (
    <>
      <motion.div
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[10000] w-2 h-2 bg-white rounded-full mix-blend-difference"
      />
      <motion.div
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-[#ff5f9e]/50"
        animate={{
          boxShadow: ["0 0 10px #ff5f9e", "0 0 20px #00f7ff", "0 0 10px #ff5f9e"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
}
