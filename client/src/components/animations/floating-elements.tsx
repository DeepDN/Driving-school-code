import { motion } from "framer-motion";
import { Car, Zap, Shield, FileText } from "lucide-react";

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Car */}
      <motion.div
        className="absolute top-20 left-10 text-primary/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Car size={80} />
      </motion.div>

      {/* Floating Shield */}
      <motion.div
        className="absolute top-40 right-20 text-secondary/10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Shield size={60} />
      </motion.div>

      {/* Floating Document */}
      <motion.div
        className="absolute bottom-20 left-20 text-accent/10"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <FileText size={50} />
      </motion.div>

      {/* Floating Zap */}
      <motion.div
        className="absolute bottom-40 right-10 text-primary/10"
        animate={{
          y: [0, 25, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Zap size={40} />
      </motion.div>

      {/* Road Lines Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/5 to-transparent">
        <div className="flex justify-center items-end h-full">
          <motion.div
            className="w-2 h-8 bg-accent/20 mx-2"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-2 h-8 bg-accent/20 mx-2"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-2 h-8 bg-accent/20 mx-2"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
}
