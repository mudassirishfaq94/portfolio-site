import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="hero-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const ResultsGrid = () => {
  const results = [
    { number: '30+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'WordPress Sites' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {results.map((result, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="bg-deep-black/50 backdrop-blur-sm border border-electric-teal/20 rounded-xl p-6 flex flex-col items-center justify-center hover:border-electric-teal/50 transition-colors"
        >
          <span className="text-3xl md:text-4xl font-bold text-electric-teal mb-2">{result.number}</span>
          <span className="text-sm md:text-base text-gray-400 text-center">{result.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

const TypewriterText = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
      className="overflow-hidden whitespace-nowrap"
    >
      {text}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden pt-24 md:pt-32">
      <ParticleBackground />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="z-10">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FULL-STACK
            </motion.h1>
            <div className="font-fira text-2xl md:text-3xl lg:text-4xl text-electric-teal mb-6 text-left">
              <TypewriterText text="DEVELOPMENT & WORDPRESS EXPERT" delay={0.8} />
            </div>
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-8 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Bridging the gap between custom development and WordPress solutions. 
              From complex web applications to stunning WordPress sites, I deliver 
              scalable, secure, and user-friendly digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#solutions" 
                className="bg-electric-teal text-deep-black font-semibold px-8 py-4 rounded-lg hover:bg-electric-teal/90 transition-colors"
              >
                View Portfolio
              </a>
              <a 
                href="#contact" 
                className="border-2 border-electric-teal text-electric-teal font-semibold px-8 py-4 rounded-lg hover:bg-electric-teal/10 transition-colors"
              >
                Start Project
              </a>
            </motion.div>
          </div>

          {/* Right Column - Results Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="z-10"
          >
            <ResultsGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;