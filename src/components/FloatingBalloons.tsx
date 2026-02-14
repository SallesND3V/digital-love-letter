import { motion } from "framer-motion";
import { useMemo } from "react";

const BALLOON_COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(10, 70%, 60%)",
  "hsl(38, 80%, 55%)",
  "hsl(270, 40%, 70%)",
  "hsl(200, 60%, 65%)",
  "hsl(160, 40%, 65%)",
];

interface Balloon {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
}

const FloatingBalloons = ({ count = 12 }: { count?: number }) => {
  const balloons = useMemo<Balloon[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      size: Math.random() * 30 + 40,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 6,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.x}%`, bottom: -100 }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: typeof window !== "undefined" ? -(window.innerHeight + 200) : -1000,
            opacity: [0, 1, 1, 1, 0.5],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          {/* Balloon body */}
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width={b.size} height={b.size * 1.3} viewBox="0 0 50 65">
              <defs>
                <radialGradient id={`grad-${b.id}`} cx="35%" cy="30%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="100%" stopColor={b.color} />
                </radialGradient>
              </defs>
              <ellipse
                cx="25"
                cy="22"
                rx="20"
                ry="22"
                fill={`url(#grad-${b.id})`}
              />
              <polygon points="25,44 22,48 28,48" fill={b.color} />
              <line
                x1="25"
                y1="48"
                x2="25"
                y2="65"
                stroke={b.color}
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
