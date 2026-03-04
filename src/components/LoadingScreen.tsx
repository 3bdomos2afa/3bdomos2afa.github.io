import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "const developer = new Creative();",
  "await developer.init('Abdelrahman');",
  "developer.loadPortfolio();",
  "// Ready to impress ✨",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev < codeLines.length - 1 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(lineInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] animate-glow-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[hsl(260,80%,55%,0.08)] rounded-full blur-[150px] animate-blob" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="mb-8 relative"
      >
        <div className="w-24 h-24 rounded-2xl glass-card glow-intense flex items-center justify-center gradient-border">
          <span className="text-4xl font-bold gradient-text">A</span>
        </div>
        {/* Orbiting dot */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-primary glow"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ top: -6, left: "calc(50% - 6px)", transformOrigin: "6px 54px" }}
        />
      </motion.div>

      {/* Code lines */}
      <div className="mb-8 font-mono text-xs space-y-1 w-72">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: i <= currentLine ? 1 : 0.2,
              x: i <= currentLine ? 0 : -20,
            }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`flex items-center gap-2 ${
              i <= currentLine ? "text-primary" : "text-muted-foreground/30"
            }`}
          >
            <span className="text-muted-foreground/40 w-4">{i + 1}</span>
            <span>{line}</span>
            {i === currentLine && (
              <motion.span
                className="w-2 h-4 bg-primary inline-block"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-56 h-1.5 rounded-full bg-secondary overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-[hsl(250,80%,60%)] to-[hsl(190,80%,55%)]"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>

      <motion.span
        className="text-xs text-muted-foreground font-mono mt-4 tabular-nums"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
