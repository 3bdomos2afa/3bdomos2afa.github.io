import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef, MouseEvent } from "react";
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";

const roles = [
  "Computer Science Student 🎓",
  "Frontend Developer 💻",
  "Creative Thinker ✨",
  "Problem Solver 🧩",
  "UI/UX Enthusiast 🎨",
];

const floatingIcons = [
  { Icon: Code2, x: "15%", y: "20%", delay: 0, size: 20 },
  { Icon: Github, x: "80%", y: "15%", delay: 1, size: 18 },
  { Icon: Linkedin, x: "85%", y: "75%", delay: 2, size: 16 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(springX, [0, 1], [-15, 15]);
  const bgY = useTransform(springY, [0, 1], [-15, 15]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Parallax floating elements */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          style={{ left: x, top: y, x: bgX, y: bgY }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Hero glow center */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[200px]"
        style={{ x: bgX, y: bgY }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm text-primary font-mono gradient-border">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for hire
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block text-foreground"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm{" "}
          </motion.span>
          <motion.span
            className="inline-block gradient-text glow-text"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Abdelrahman
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Mostafa Gamal
        </motion.p>

        {/* Typing effect */}
        <motion.div
          className="h-10 mb-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-xl md:text-2xl text-primary font-mono">
            {displayText}
          </span>
          <motion.span
            className="w-0.5 h-6 bg-primary ml-1 inline-block"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-[hsl(260,85%,60%)] text-primary-foreground font-semibold overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(217, 91%, 60%, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(260,85%,60%)] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass-card gradient-border text-foreground font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(217, 91%, 60%, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-3 justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[Github, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors gradient-border"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">scroll</span>
            <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-primary"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
