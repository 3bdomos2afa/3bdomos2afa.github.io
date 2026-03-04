import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 glass-strong">
      <div className="container mx-auto text-center">
        <motion.p
          className="text-muted-foreground text-sm flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Built with <Heart size={14} className="text-primary" /> by{" "}
          <span className="gradient-text font-semibold">Abdelrahman Mostafa</span>
        </motion.p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
