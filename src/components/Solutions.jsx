import { motion } from 'framer-motion';

const solutions = [
  {
    problem: 'Custom Web Applications',
    solution: 'Full-stack development with React, Node.js, and modern frameworks for scalable, high-performance applications.',
    icon: '💻'
  },
  {
    problem: 'WordPress Development',
    solution: 'Custom themes, plugins, and headless WordPress solutions that combine flexibility with ease of management.',
    icon: '🎨'
  },
  {
    problem: 'E-commerce Solutions',
    solution: 'WooCommerce and custom e-commerce platforms with secure payment integration and inventory management.',
    icon: '🛍️'
  },
  {
    problem: 'Performance Optimization',
    solution: 'Speed optimization for both custom applications and WordPress sites, ensuring fast load times and better SEO.',
    icon: '⚡'
  },
  {
    problem: 'API Integration',
    solution: 'Seamless integration of third-party APIs and custom API development for enhanced functionality.',
    icon: '🔄'
  },
  {
    problem: 'Maintenance & Support',
    solution: 'Ongoing maintenance, security updates, and technical support for both custom and WordPress websites.',
    icon: '🛡️'
  }
];

const SolutionCard = ({ problem, solution, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-electric-teal transition-colors group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-electric-teal">{problem}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors">{solution}</p>
    </motion.div>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="section-diagonal bg-gray-900/50 py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Web Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From custom web applications to WordPress solutions, I deliver tailored digital experiences 
            that combine technical excellence with user-friendly management.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;