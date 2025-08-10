import { useState } from "react";
import { motion } from "framer-motion";

const clusters = [
  {
    name: "Frontend",
    skills: ["React", "JS"],
    color: "#ff5f9e",
  },
  {
    name: "Backend",
    skills: ["Node", "Python", "Java", "C"],
    color: "#9a79ff",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "SQL"],
    color: "#00f7ff",
  },
];

const radius = 100; // radius of orbit
const centerSize = 72; // center circle diameter / 2

const lineVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (i) => ({
    opacity: 0.3,
    pathLength: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

export default function SkillClusters() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 lg:px-12 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-[#ff5f9e]">Skills</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-row justify-center items-center gap-16 flex-wrap">
        {clusters.map(({ name, skills, color }) => (
          <div
            key={name}
            className="relative"
            style={{
              width: centerSize * 2 + radius * 2,
              height: centerSize * 2 + radius * 2,
            }}
          >
            {/* Center Label inside bigger circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-default"
              style={{
                color,
                width: centerSize * 2,
                height: centerSize * 2,
                borderRadius: "50%",
                border: `4px solid ${color}`,
                boxShadow: `0 0 20px ${color}`,
                fontWeight: "700",
                fontSize: "1.5rem",
                textAlign: "center",
                userSelect: "none",
                padding: "1rem",
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            >
              {name}
            </motion.div>

            {/* SVG Lines connecting badges (polygon only, no center lines) */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {skills.length > 2 &&
                skills.map((_, i) => {
                  const nextI = (i + 1) % skills.length;
                  const angle1 = (360 / skills.length) * i - 90;
                  const angle2 = (360 / skills.length) * nextI - 90;
                  const rad1 = (angle1 * Math.PI) / 180;
                  const rad2 = (angle2 * Math.PI) / 180;

                  const centerX = centerSize + radius;
                  const centerY = centerSize + radius;

                  const x1 = centerX + radius * Math.cos(rad1);
                  const y1 = centerY + radius * Math.sin(rad1);
                  const x2 = centerX + radius * Math.cos(rad2);
                  const y2 = centerY + radius * Math.sin(rad2);

                  return (
                    <motion.line
                      key={`poly-line-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={color}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      variants={lineVariants}
                      custom={i + skills.length}
                      initial="hidden"
                      animate="visible"
                    />
                  );
                })}
            </svg>

            {/* Skill badges orbiting */}
            {skills.map((skill, i) => {
              const angle = (360 / skills.length) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              const isHovered = hovered === `${name}-${skill}`;

              return (
                <motion.div
                  key={skill}
                  className="absolute w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/30 flex items-center justify-center cursor-pointer select-none"
                  style={{
                    top: `calc(50% + ${y}px - 2rem)`,
                    left: `calc(50% + ${x}px - 2rem)`,
                    boxShadow: isHovered ? `0 0 15px 4px ${color}` : "none",
                    color: isHovered ? color : "white",
                    fontWeight: "600",
                    userSelect: "none",
                    transition: "box-shadow 0.3s ease",
                  }}
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setHovered(`${name}-${skill}`)}
                  onHoverEnd={() => setHovered(null)}
                  title={skill}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
