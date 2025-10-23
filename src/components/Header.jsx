import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const menuItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'projects', label: 'Projects', href: '#case-studies' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleMenuClick = (href) => {
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-deep-black/90 backdrop-blur-lg' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative z-10">
              <a 
                href="#home" 
                className="hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('#home');
                }}
              >
                <Logo />
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 w-10 h-10 flex items-center justify-center"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 mt-1.5 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-gradient-to-b from-deep-black via-gray-900 to-deep-black"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-electric-teal/20 rounded-full filter blur-3xl" />
              <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl" />
            </div>

            {/* Menu Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center">
              <nav className="space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: index * 0.1 }}
                    className="overflow-hidden"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(item.href);
                      }}
                      className="text-4xl font-bold text-white hover:text-electric-teal transition-colors duration-300 relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-teal transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;