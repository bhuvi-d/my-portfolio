import { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const trailElements = [];
    const colors = ['#ff5f9e', '#9a79ff', '#fef9ff'];

    const createTrailDot = (x, y) => {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      document.body.appendChild(dot);
      trailElements.push(dot);

      setTimeout(() => {
        dot.remove();
      }, 500); // trail lifespan
    };

    const handleMouseMove = (e) => {
      createTrailDot(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // nothing rendered directly
};

export default MouseTrail;
