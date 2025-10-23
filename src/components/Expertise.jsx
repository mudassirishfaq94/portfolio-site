import { motion } from 'framer-motion';

const skills = {
  "Frontend Development": [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TailwindCSS", level: 95 },
    { name: "JavaScript", level: 90 }
  ],
  "WordPress Development": [
    { name: "Custom Themes", level: 95 },
    { name: "Plugin Development", level: 85 },
    { name: "WooCommerce", level: 90 },
    { name: "Performance", level: 95 }
  ],
  "Backend & Tools": [
    { name: "Node.js", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "RESTful APIs", level: 90 },
    { name: "Database Design", level: 85 }
  ]
};

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-montserrat text-sm text-gray-300">{name}</span>
        <span className="font-montserrat text-sm text-electric-teal">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-electric-teal to-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const ExpertiseCard = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl"
    >
      <h3 className="font-quintessential text-2xl text-electric-teal mb-6">{title}</h3>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar key={skill.name} {...skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ Icon, delay }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
      className="absolute text-electric-teal/20"
    >
      {Icon}
    </motion.div>
  );
};

const Expertise = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon
        Icon={
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6.042c-2.967 0-5.375 2.408-5.375 5.375s2.408 5.375 5.375 5.375 5.375-2.408 5.375-5.375-2.408-5.375-5.375-5.375zm0 9.75c-2.412 0-4.375-1.963-4.375-4.375s1.963-4.375 4.375-4.375 4.375 1.963 4.375 4.375-1.963 4.375-4.375 4.375z" />
          </svg>
        }
        delay={0}
      />
      <FloatingIcon
        Icon={
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12z" />
          </svg>
        }
        delay={1}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quintessential mb-4 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Bridging modern web development with WordPress expertise to create powerful, scalable solutions that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, skillSet], index) => (
            <ExpertiseCard key={title} title={title} skills={skillSet} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-montserrat font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;