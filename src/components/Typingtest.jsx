import { useState, useEffect, useRef } from "react";

const BOARD_SIZE = 20; // 20x20 grid
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 150; // ms between moves

function getRandomFoodPosition(snake) {
  while (true) {
    const x = Math.floor(Math.random() * BOARD_SIZE);
    const y = Math.floor(Math.random() * BOARD_SIZE);
    if (!snake.some((seg) => seg.x === x && seg.y === y)) return { x, y };
  }
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(getRandomFoodPosition(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const directionRef = useRef(direction);
  directionRef.current = direction;

  // Handle keyboard input for direction
  useEffect(() => {
    function handleKey(e) {
      if (gameOver) return;

      const { x, y } = directionRef.current;
      switch (e.key) {
        case "ArrowUp":
          if (y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (x !== -1) setDirection({ x: 1, y: 0 });
          break;
        case " ":
          // Space toggles pause/start
          setIsRunning((r) => !r);
          break;
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameOver]);

  // Game loop
  useEffect(() => {
    if (!isRunning || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = {
          x: (head.x + directionRef.current.x + BOARD_SIZE) % BOARD_SIZE,
          y: (head.y + directionRef.current.y + BOARD_SIZE) % BOARD_SIZE,
        };

        // Check collision with self
        if (prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          setIsRunning(false);
          return prev;
        }

        const ateFood = newHead.x === food.x && newHead.y === food.y;
        let newSnake = [newHead, ...prev];
        if (!ateFood) {
          newSnake.pop();
        } else {
          setFood(getRandomFoodPosition(newSnake));
          setScore((s) => s + 1);
        }
        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [isRunning, gameOver, food]);

  function resetGame() {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomFoodPosition(INITIAL_SNAKE));
    setScore(0);
    setGameOver(false);
    setIsRunning(true);
  }

  return (
    <section id="snake-game" className="w-full bg-black py-20">
      <div className="max-w-md mx-auto p-6 rounded-3xl shadow-lg text-white select-none">
        <h2 className="text-3xl font-bold mb-4 text-[#ff5f9e] text-center">
          Snake Game
        </h2>

        <div
          className="relative bg-gray-900 rounded-lg border border-[#ff5f9e] mx-auto"
          style={{
            width: 400,
            height: 400,
            display: "grid",
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
            gap: 1,
          }}
        >
          {[...Array(BOARD_SIZE * BOARD_SIZE)].map((_, i) => {
            const x = i % BOARD_SIZE;
            const y = Math.floor(i / BOARD_SIZE);

            const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
            const isHead = snake.length && snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={i}
                className={`w-full h-full rounded-sm transition-colors ${
                  isHead
                    ? "bg-[#ff5f9e]"
                    : isSnake
                    ? "bg-[#9a79ff]"
                    : isFood
                    ? "bg-[#00f7ff]"
                    : "bg-gray-800"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-4 flex justify-between items-center px-4">
          <p className="text-lg font-semibold">Score: {score}</p>
          {gameOver ? (
            <button
              onClick={resetGame}
              className="px-4 py-2 rounded-lg bg-[#ff5f9e] hover:bg-[#e14f8f] transition"
            >
              Restart
            </button>
          ) : (
            <button
              onClick={() => setIsRunning((r) => !r)}
              className="px-4 py-2 rounded-lg bg-[#9a79ff] hover:bg-[#7f66db] transition"
            >
              {isRunning ? "Pause" : "Start"}
            </button>
          )}
        </div>

        <p className="mt-3 text-center text-sm text-white/70">
          Use arrow keys to move. Space to start/pause.
        </p>
      </div>
    </section>
  );
}
