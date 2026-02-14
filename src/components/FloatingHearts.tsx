import { motion } from "framer-motion";
import { useMemo } from "react";
import { Heart } from "lucide-react";

const HEART_COLORS = [
  "hsl(340, 65%, 55%)",
  "hsl(340, 65%, 65%)",
  "hsl(10, 70%, 60%)",
  "hsl(350, 80%, 70%)",
];

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 16 + 12,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 5,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      opacity: Math.random() * 0.4 + 0.3,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.x}%`, bottom: -40 }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: typeof window !== "undefined" ? -(window.innerHeight + 100) : -900,
            opacity: [0, h.opacity, h.opacity, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart
              size={h.size}
              fill={h.color}
              color={h.color}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
