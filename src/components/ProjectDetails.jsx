import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'evc',
    title: 'EVC Solutions',
    image: '/evc-compressed.png',
    category: 'Electric Vehicle Infrastructure',
    techStack: ['WordPress', 'Elementor Pro', 'WPForms', 'Custom CSS', 'Yoast SEO'],
    description: 'A comprehensive website for an electric vehicle charging solutions provider, featuring service information and booking capabilities.',
    challenge: 'Creating an informative and user-friendly platform that effectively communicates complex EV charging solutions while maintaining high performance.',
    solution: 'Implemented a custom WordPress solution with optimized page builders and carefully crafted content presentation.',
    features: [
      'Service showcase',
      'Online booking system',
      'Location finder',
      'Resource center',
      'Contact integration',
      'Performance optimization'
    ],
    results: [
      '300% increase in online inquiries',
      'Improved user engagement',
      'Faster load times',
      'Enhanced brand presence'
    ],
    liveSite: 'https://evcglobal.netlify.app/'
  },
  {
    id: 'medico',
    title: 'Medico Healthcare',
    image: '/medico-compressed.png',
    category: 'Healthcare',
    techStack: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Custom CSS', 'HIPAA Compliance'],
    description: 'A modern healthcare platform connecting patients with healthcare providers, featuring appointment scheduling and telemedicine capabilities.',
    challenge: 'Building a HIPAA-compliant platform that could handle sensitive medical data while providing a seamless user experience for both patients and healthcare providers.',
    solution: 'Developed a secure WordPress implementation with specialized healthcare plugins and custom features for patient management.',
    features: [
      'Secure patient portal',
      'Appointment booking system',
      'Service catalog',
      'Doctor profiles',
      'Medical blog',
      'Contact system'
    ],
    results: [
      'Reduced appointment no-shows by 60%',
      'Served 5000+ patients',
      'Average consultation time reduced by 25%',
      '4.8/5 user rating'
    ],
    liveSite: 'https://medico.mudassirishfaq.com/'
  },
  {
    id: 'capital-constructions',
    title: 'Capital Constructions',
    image: '/capital-constructions-compressed.png',
    category: 'Construction Management',
    techStack: ['WordPress', 'Elementor Pro', 'Custom CSS', 'Gallery Plugin', 'Contact Form 7'],
    description: 'A professional WordPress website for a leading construction company, showcasing their portfolio and streamlining project inquiries.',
    challenge: 'Creating a visually impressive website that could handle large media files while maintaining fast load times and providing easy content management.',
    solution: 'Developed an optimized WordPress implementation with efficient media handling and user-friendly content management.',
    features: [
      'Project portfolio',
      'Service showcase',
      'Image gallery',
      'Testimonials',
      'Contact forms',
      'Responsive design'
    ],
    results: [
      '40% increase in lead generation',
      '3x faster page load times',
      'Improved client communication',
      'Enhanced project visibility'
    ],
    liveSite: 'https://capitalconstructions.netlify.app/'
  },
  {
    id: 'linkshort',
    title: 'LinkShort URL Shortener',
    image: '/linkshort-compressed.png',
    category: 'Web Tool',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'TypeScript'],
    description: 'A modern URL shortening service with advanced analytics and custom branded links.',
    challenge: 'Building a scalable system that could handle millions of redirects while providing real-time analytics and maintaining short response times.',
    solution: 'Implemented a distributed caching system, optimized database queries, and created an efficient analytics collection pipeline.',
    features: [
      'Custom branded domains',
      'QR code generation',
      'Click analytics',
      'Link expiration',
      'Password protection',
      'API access'
    ],
    results: [
      'Processed 1M+ shortened links',
      '99.99% uptime',
      'Average response time under 100ms',
      'Used by 10,000+ active users'
    ],
    liveSite: 'https://mylink-short.netlify.app/'
  }
];

const ProjectDetails = ({ isOpen, onClose, projectId }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      setSelectedProject(project);
    }
  }, [projectId]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-lg"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-electric-teal transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-quintessential mb-4 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                <p className="text-electric-teal text-lg">{selectedProject.category}</p>
              </div>

              {/* Project Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-2xl font-quintessential text-electric-teal mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-deep-black/50 border border-electric-teal/30 rounded-full text-sm text-electric-teal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-quintessential text-electric-teal mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-quintessential text-electric-teal mb-4">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-quintessential text-electric-teal mb-4">The Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-quintessential text-electric-teal mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-electric-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-2xl font-quintessential text-electric-teal mb-4">Results & Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedProject.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-deep-black/50 border border-electric-teal/20 rounded-xl p-6 text-center hover:border-electric-teal/50 transition-colors"
                    >
                      <p className="text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visit Site Button */}
              <div className="text-center">
                <a
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Visit Live Site
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;