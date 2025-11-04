import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 'linkshort',
    title: 'LinkShort',
    description: 'Create beautiful, shareable short links with a premium-grade interface and instant QR codes.',
    image: '/linkshort-compressed.png',
    metrics: '150% Higher CTR'
  },
  {
    id: 'medico',
    title: 'Medico Healthcare',
    description: 'Streamlined healthcare management platform that revolutionizes patient care and administrative efficiency.',
    image: '/medico-compressed.png',
    metrics: '60% Less Wait Time'
  },
  {
    id: 'capital-constructions',
    title: 'Capital Constructions',
    description: 'Revolutionized the construction industry with a digital platform that streamlined project management and client satisfaction.',
    image: '/capital-constructions-compressed.png',
    metrics: '40% Faster Delivery'
  },
  {
    id: 'evc',
    title: 'EVC Solutions',
    description: 'Transformed electric vehicle charging management with an intuitive platform for enhanced accessibility.',
    image: '/evc-compressed.png',
    metrics: '300% Network Growth'
  },
  {
    id: 'notestaker',
    title: 'Notes Taker',
    description: 'A simple notes taker web app built with HTML, CSS, and vanilla JavaScript — no frameworks.',
    image: '/notestaker.png',
    metrics: 'Vanilla JS'
  }
];

const ProjectCard = ({ id, title, description, image, metrics, index, onProjectClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black cursor-pointer"
      onClick={() => onProjectClick(id)}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          {/* Metrics Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-electric-teal/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-electric-teal rounded-full animate-pulse" />
            <span className="text-electric-teal font-medium">{metrics}</span>
          </motion.div>

          {/* Title */}
          <h3 className="text-4xl font-bold text-white mb-4 transform group-hover:translate-x-4 transition-transform duration-500">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {description}
          </p>

          {/* View Project Button */}
          <button className="mt-6 inline-flex items-center text-electric-teal hover:text-white transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="mr-2">View Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 p-6">
        <div className="w-20 h-20 rounded-full bg-electric-teal/10 backdrop-blur-xl transform group-hover:scale-150 transition-transform duration-700" />
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="case-studies" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-gray-900/20 to-deep-black" />
      
      {/* Section Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-quintessential mb-6 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
            Transforming Visions into Reality
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins">
            Discover how our solutions have driven measurable business growth and innovation across industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={index} 
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 border-2 border-electric-teal text-electric-teal font-montserrat font-semibold px-8 py-4 rounded-full hover:bg-electric-teal hover:text-black transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-montserrat font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetails
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        projectId={selectedProject}
      />
    </section>
  );
};

export default CaseStudies;