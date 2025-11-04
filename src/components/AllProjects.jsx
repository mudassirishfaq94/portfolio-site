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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black cursor-pointer hover:shadow-2xl hover:shadow-electric-teal/20 transition-all duration-300"
      onClick={() => onProjectClick(id)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain object-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Top Section - Metrics */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
            viewport={{ once: true }}
            className="bg-electric-teal text-black px-3 py-1 rounded-full text-xs font-montserrat font-semibold"
          >
            {metrics}
          </motion.div>
        </div>

        {/* Bottom Section - Title & Description */}
        <div>
          <h3 className="text-xl font-quintessential text-white mb-2 group-hover:text-electric-teal transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
            {description}
          </p>

          {/* View Details Button */}
          <div className="flex items-center gap-2 text-electric-teal font-montserrat font-medium text-sm group-hover:gap-3 transition-all duration-300">
            <span>View Details</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6); // Show 6 projects per page

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProject(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of projects section
    document.querySelector('#projects-grid')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-gray-900/20 to-deep-black" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-quintessential mb-6 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins">
              Explore my complete portfolio of digital solutions that have driven measurable business growth and innovation across industries.
            </p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-electric-teal hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects-grid" className="pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                {...project} 
                index={index} 
                onProjectClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center items-center gap-2"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-montserrat font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-electric-teal hover:bg-electric-teal hover:text-black'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-montserrat font-medium transition-all duration-300 ${
                    currentPage === pageNumber
                      ? 'bg-electric-teal text-black'
                      : 'text-electric-teal hover:bg-electric-teal hover:text-black'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-montserrat font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-electric-teal hover:bg-electric-teal hover:text-black'
                }`}
              >
                Next
              </button>
            </motion.div>
          )}

          {/* Future Projects Placeholder - Only show on last page */}
          {currentPage === totalPages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="border-2 border-dashed border-gray-700 rounded-3xl p-12 bg-gray-900/20">
                <h3 className="text-2xl font-quintessential text-gray-400 mb-4">More Projects Coming Soon</h3>
                <p className="text-gray-500">
                  This space is reserved for future projects. Stay tuned for more innovative solutions!
                </p>
              </div>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-quintessential text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-montserrat font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectDetails
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        projectId={selectedProject}
      />
    </div>
  );
};

export default AllProjects;