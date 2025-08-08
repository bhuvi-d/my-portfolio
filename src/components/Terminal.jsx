import { useEffect, useRef, useState } from "react";

const commands = {
  about: "Hi, I'm Bhuvi — a developer who blends creativityand logic. I craft code, design, and dreams!",
  skills: "React, Node.js, Express, MongoDB, Python, C, Canva, Writing",
  contact: "Email: bhuvi@example.com | GitHub: github.com/bhuvi",
  help: "Try typing: about, skills, contact, dreamer, tea",
  dreamer: "Dream big. Code bigger. ✨",
  tea: "☕ Brewing ideas... one sip at a time!",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  const handleCommand = async (e) => {
    if (e.key === "Enter" && !isTyping) {
      const command = input.toLowerCase();
      const response = commands[command] || "Unknown command. Try 'help'.";
      setIsTyping(true);
      setHistory((prev) => [...prev, { input, response: "" }]);
      setInput("");

      // Typing effect
      for (let i = 0; i <= response.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
        setHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].response = response.slice(0, i);
          return updated;
        });
      }

      setIsTyping(false);
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping]);

  return (
    <div className="bg-[#1e1e2f] text-[#fef9ff] font-mono p-4 rounded-2xl w-full max-w-2xl mx-auto shadow-2xl mt-10 transition-all duration-500">
      <div className="text-pink-400 mb-2 text-sm">~/portfolio-terminal</div>
      <div className="space-y-2 h-64 overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
        {history.map((item, idx) => (
          <div key={idx}>
            <div className="text-purple-400">❯ {item.input}</div>
            <div className="text-white flex">
              {item.response}
              {idx === history.length - 1 && isTyping && (
                <span className="animate-ping ml-1">|</span>
              )}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex mt-4">
        <span className="text-purple-400 mr-2">❯</span>
        <input
          className="bg-transparent border-b border-purple-500 outline-none w-full text-white placeholder-gray-400 focus:border-pink-400 transition duration-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Type a command (e.g., about, help)..."
        />
      </div>
    </div>
  );
}
