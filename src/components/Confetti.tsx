import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(10, 70%, 60%)",
  "hsl(38, 80%, 55%)",
  "hsl(270, 40%, 70%)",
  "hsl(160, 40%, 70%)",
  "hsl(50, 90%, 60%)",
  "hsl(200, 60%, 60%)",
];

const SHAPES = ["circle", "square", "star"];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: string;
  rotation: number;
}

const Confetti = ({ count = 50 }: { count?: number }) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 10 + 5,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 3,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      rotation: Math.random() * 360,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.shape === "circle" ? p.size : p.size * 1.2,
            backgroundColor: p.shape !== "star" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "square" ? "2px" : "0",
            borderLeft: p.shape === "star" ? `${p.size / 2}px solid transparent` : undefined,
            borderRight: p.shape === "star" ? `${p.size / 2}px solid transparent` : undefined,
            borderBottom: p.shape === "star" ? `${p.size}px solid ${p.color}` : undefined,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 900,
            rotate: p.rotation + 720,
            x: [0, Math.sin(p.id) * 80, Math.cos(p.id) * -60, 0],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
