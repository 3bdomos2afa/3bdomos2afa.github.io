import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "Python", level: 75 },
  { name: "Git", level: 80 },
  { name: "Figma", level: 65 },
];

const techStack = [
  "React", "TypeScript", "Tailwind", "Framer Motion", "Three.js",
  "Next.js", "Node.js", "Git", "Figma", "Vite", "HTML5", "CSS3",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm">{"// skills"}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 gradient-text section-heading">What I Know</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill bars */}
          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-foreground font-semibold">{skill.name}</span>
                  <span className="text-xs text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(260,85%,60%)] relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <motion.div
                        className="w-full h-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech stack cloud */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 gradient-border glow h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold text-foreground mb-6 font-mono">
                <span className="text-primary">{"<"}</span>
                TechStack
                <span className="text-primary">{" />"}</span>
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0 0 20px hsl(217, 91%, 60%, 0.2)",
                    }}
                    className="glass px-4 py-2 rounded-full text-sm font-mono text-foreground/80 gradient-border cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
