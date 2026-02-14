import { motion } from "framer-motion";
import Confetti from "./Confetti";
import FloatingBalloons from "./FloatingBalloons";
import FloatingHearts from "./FloatingHearts";
import { Sparkles } from "lucide-react";

interface SplashScreenProps {
  onDiscover: () => void;
}

const SplashScreen = ({ onDiscover }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden z-50"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingBalloons count={14} />
      <FloatingHearts count={18} />
      <Confetti count={45} />

      <motion.div
        className="relative z-20 flex flex-col items-center gap-6 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
        >
          <span className="text-7xl">🎂</span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl text-primary font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Feliz Aniversário!
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Tem uma surpresa especial te esperando ✨
        </motion.p>

        <motion.button
          onClick={onDiscover}
          className="mt-4 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg shadow-lg flex items-center gap-2 hover:shadow-xl active:scale-95"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={20} />
          Descobrir
        </motion.button>
      </motion.div>

      {/* Soft glow behind */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, hsl(340, 65%, 55%), hsl(38, 80%, 55%), transparent)",
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
