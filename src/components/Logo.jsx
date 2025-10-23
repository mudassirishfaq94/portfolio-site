import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Magical Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-teal via-blue-500 to-purple-500 opacity-50 blur-xl rounded-full animate-pulse" />
      
      {/* Main Text */}
      <h1 className="relative text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-teal via-blue-500 to-purple-500 animate-gradient-x">
        Mudassir
      </h1>
      
      {/* Sparkle Effects */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-electric-teal rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};

export default Logo;