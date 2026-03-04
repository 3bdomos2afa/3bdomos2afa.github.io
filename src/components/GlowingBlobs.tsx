import { motion } from "framer-motion";

const GlowingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-3/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[hsl(250,80%,60%,0.1)] rounded-full blur-[130px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse" />
    </div>
  );
};

export default GlowingBlobs;
