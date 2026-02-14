import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import BirthdayCard from "@/components/BirthdayCard";

const Index = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!showCard && (
          <SplashScreen key="splash" onDiscover={() => setShowCard(true)} />
        )}
      </AnimatePresence>

      {showCard && <BirthdayCard />}
    </div>
  );
};

export default Index;
