import { motion } from "framer-motion";
import { Heart, PartyPopper, Gift } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const BirthdayCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4 py-8">
      <FloatingHearts count={10} />

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", damping: 15 }}
      >
        {/* Card */}
        <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
          {/* Card header */}
          <div
            className="relative p-6 pb-8 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(340, 65%, 55%), hsl(10, 70%, 60%), hsl(38, 80%, 55%))",
            }}
          >
            <motion.div
              className="flex justify-center gap-2 mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PartyPopper className="text-primary-foreground" size={24} />
              <Gift className="text-primary-foreground" size={24} />
              <PartyPopper className="text-primary-foreground" size={24} />
            </motion.div>

            <motion.h2
              className="font-display text-4xl text-primary-foreground font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              Para você, Bellinha!
            </motion.h2>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 400 30" className="w-full">
                <path
                  d="M0,30 Q100,0 200,15 T400,30 L400,30 L0,30 Z"
                  fill="hsl(var(--card))"
                />
              </svg>
            </div>
          </div>

          {/* Card body */}
          <motion.div
            className="p-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="space-y-4 font-body text-card-foreground leading-relaxed">
              <motion.p
                className="text-lg font-semibold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Bellinhaaaa,
              </motion.p>

              <motion.p
                className="text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                Obrigado por ser a amiga que você é! Em várias fases da minha vida e em várias escolhas, tu tem me ajudado muito.
              </motion.p>

              <motion.p
                className="text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                Obrigado por ser tão especial assim! 💖
              </motion.p>

              <motion.p
                className="text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                Desculpa o atraso do presente kakakaka 😅
              </motion.p>

              <motion.p
                className="text-lg font-semibold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              >
                Espero que goste!!!!!
              </motion.p>
            </div>

            {/* Divider with heart */}
            <motion.div
              className="flex items-center gap-3 my-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <div className="flex-1 h-px bg-border" />
              <Heart size={16} className="text-primary fill-primary" />
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            {/* Signature */}
            <motion.div
              className="text-center space-y-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
            >
              <p className="text-sm text-muted-foreground font-body">De</p>
              <p className="font-display text-2xl text-primary font-bold">
                Tiago Sales
              </p>
              <p className="text-sm text-muted-foreground font-body">Para</p>
              <p className="font-display text-2xl text-accent font-bold">
                Isabella Ribeiro
              </p>
              <motion.p
                className="text-3xl mt-3"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎉
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl z-0 top-1/4 left-1/2 -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, hsl(340, 65%, 55%), hsl(38, 80%, 55%), transparent)",
        }}
      />
    </div>
  );
};

export default BirthdayCard;
