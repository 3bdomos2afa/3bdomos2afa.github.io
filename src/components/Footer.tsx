import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 glass-strong relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-muted-foreground text-sm flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-primary" />
            </motion.span>{" "}
            by <span className="gradient-text font-bold">Abdelrahman Mostafa</span>
          </motion.p>

          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <motion.a
            href="#home"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary gradient-border"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
