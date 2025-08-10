import { useState } from "react";
import { motion } from "framer-motion";

const puzzle = {
  sentence: "In JavaScript, the ___ keyword is used to declare a constant variable.",
  answer: "const",
  secretMessage: "🎉 You cracked the code! Here's a secret project for you:",
  secretLink: {
    title: "Secret React Mini-Game",
    url: "https://github.com/yourusername/secret-react-game",
  },
};

export default function CodeBreaker() {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.trim().toLowerCase() === puzzle.answer) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  }

  return (
    <section
      id="codebreaker"
      className="w-full bg-black py-20 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full p-10 bg-black rounded-3xl text-white shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#ff5f9e]">
          Code Breaker Puzzle
        </h2>

        <p className="mb-6 text-lg text-white/80">
          {puzzle.sentence.replace("___", "______")}
        </p>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your guess..."
            className="flex-grow p-4 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#ff5f9e]"
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[#ff5f9e] rounded-lg font-semibold hover:bg-[#e14f8f] transition"
          >
            Guess
          </button>
        </form>

        {feedback === "wrong" && (
          <p className="text-red-500 mb-4 italic text-center">
            Nope, try again! Hint: It's a JS declaration keyword.
          </p>
        )}

        {feedback === "correct" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#ff5f9e]/20 rounded-lg p-6 text-center"
          >
            <p className="mb-4">{puzzle.secretMessage}</p>
            <a
              href={puzzle.secretLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline font-semibold hover:text-white/80"
            >
              {puzzle.secretLink.title}
            </a>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
