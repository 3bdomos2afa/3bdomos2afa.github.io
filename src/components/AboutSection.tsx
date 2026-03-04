import { motion, useMotionValue, useTransform } from "framer-motion";
import { Calendar, GraduationCap, Code, Sparkles, Heart, Zap } from "lucide-react";
import { useRef, MouseEvent } from "react";

const stats = [
  { label: "Born", value: "12/11/2005", icon: Calendar, gradient: "from-primary to-[hsl(250,80%,60%)]" },
  { label: "Major", value: "Computer Science", icon: GraduationCap, gradient: "from-[hsl(250,80%,60%)] to-[hsl(280,70%,50%)]" },
  { label: "Focus", value: "Web Development", icon: Code, gradient: "from-[hsl(190,80%,55%)] to-primary" },
  { label: "Passion", value: "Creative Design", icon: Sparkles, gradient: "from-primary to-[hsl(190,80%,55%)]" },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-primary font-mono text-sm inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {"// about me"}
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 gradient-text section-heading">Who Am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <TiltCard>
              <div className="glass-card rounded-3xl p-8 md:p-10 gradient-border glow relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="text-xs text-muted-foreground/50 font-mono ml-2">about.tsx</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Abdelrahman Mostafa Gamal
                  </h3>
                  <p className="text-primary font-mono text-sm mb-6 flex items-center gap-2">
                    <Zap size={14} />
                    Computer Science Student
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    I'm a passionate CS student who loves building beautiful, 
                    interactive web experiences. I combine creativity with technology to 
                    create memorable digital products that stand out.
                  </p>
                  <p className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <Heart size={16} className="text-primary mt-1 shrink-0" />
                    From glassmorphism UIs to smooth animations, I focus on crafting experiences 
                    that feel alive. Always learning, always pushing creative boundaries.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <TiltCard>
                  <motion.div
                    whileHover={{ scale: 1.08, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-card rounded-2xl p-6 text-center gradient-border group h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow`}>
                      <stat.icon className="text-primary-foreground" size={22} />
                    </div>
                    <p className="text-foreground font-bold text-sm">{stat.label}</p>
                    <p className="text-muted-foreground text-xs mt-1">{stat.value}</p>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
