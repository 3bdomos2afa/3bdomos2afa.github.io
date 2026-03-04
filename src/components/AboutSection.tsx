import { motion } from "framer-motion";
import { Calendar, GraduationCap, Code, Sparkles } from "lucide-react";

const stats = [
  { label: "Born", value: "12/11/2005", icon: Calendar },
  { label: "Major", value: "Computer Science", icon: GraduationCap },
  { label: "Focus", value: "Web Development", icon: Code },
  { label: "Passion", value: "Creative Design", icon: Sparkles },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// about me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Who Am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 gradient-border glow">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Abdelrahman Mostafa Gamal
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science student with a deep passion for building beautiful, 
                interactive web experiences. I love combining creativity with technology to 
                create memorable digital products that stand out.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From glassmorphism UIs to smooth animations, I focus on crafting experiences 
                that feel alive. Always learning, always building, always pushing creative boundaries.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center gradient-border cursor-default"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-foreground font-semibold text-sm">{stat.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
