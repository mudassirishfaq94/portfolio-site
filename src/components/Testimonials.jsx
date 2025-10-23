import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    role: "E-commerce Director",
    location: "Dubai, UAE",
    content: "Working with this developer was a game-changer for our Dubai-based luxury retail platform. His deep understanding of both WordPress and modern tech helped us expand into the digital space seamlessly. The communication was always prompt despite our busy schedules, and he consistently delivered before deadlines.",
    image: "https://ui-avatars.com/api/?name=Ahmed+Al-Rashid&background=00FFF5&color=000",
    rating: 5,
    stats: { 
      revenue: "+300%",
      visitors: "25K/month",
      completion: "2 weeks early"
    }
  },
  {
    id: 2,
    name: "Sophie Weber",
    role: "Digital Agency Owner",
    location: "Berlin, Germany",
    content: "After our first project, we've made him our go-to developer for all WordPress-React integrations. His ability to bridge traditional WordPress with modern development is exceptional. Always available for quick calls despite the time difference, and his technical documentation is impeccable.",
    image: "https://ui-avatars.com/api/?name=Sophie+Weber&background=00FFF5&color=000",
    rating: 5,
    stats: {
      projects: "12 completed",
      retention: "100%",
      referrals: "8 new clients"
    }
  },
  {
    id: 3,
    name: "Ali Hassan",
    role: "Tech Startup Founder",
    location: "Lahore, Pakistan",
    content: "As a startup founder, finding a developer who understands both business goals and technical requirements is crucial. His work on our platform's WordPress-React integration was exceptional. We've already hired him for three more projects - that's how impressed we are!",
    image: "https://ui-avatars.com/api/?name=Ali+Hassan&background=00FFF5&color=000",
    rating: 5,
    stats: {
      growth: "+250%",
      performance: "90% faster",
      user_base: "10K+ users"
    }
  },
  {
    id: 4,
    name: "Maria Petrova",
    role: "Marketing Director",
    location: "London, UK",
    content: "Our WordPress site needed a complete overhaul with modern features. His expertise in both WordPress and React made the transition smooth. The communication was excellent - daily updates, clear timelines, and he even suggested improvements we hadn't considered.",
    image: "https://ui-avatars.com/api/?name=Maria+Petrova&background=00FFF5&color=000",
    rating: 5,
    stats: {
      engagement: "+180%",
      load_time: "2s to 0.5s",
      conversions: "+75%"
    }
  },
  {
    id: 5,
    name: "Khalid Al-Mansoori",
    role: "Real Estate CEO",
    location: "Dubai, UAE",
    content: "Our real estate portal needed someone who could handle both custom development and WordPress. His solution exceeded our expectations. Always available on WhatsApp for quick changes, and his understanding of UAE market requirements was invaluable.",
    image: "https://ui-avatars.com/api/?name=Khalid+Al-Mansoori&background=00FFF5&color=000",
    rating: 5,
    stats: {
      listings: "5000+",
      inquiries: "+400%",
      response_time: "< 1 hour"
    }
  },
  {
    id: 6,
    name: "Zara Malik",
    role: "Fashion Brand Owner",
    location: "Islamabad, Pakistan",
    content: "The e-commerce solution he built for our fashion brand was exactly what we needed. His attention to detail and understanding of both technical and business aspects made the project a success. We're already planning our next project with him.",
    image: "https://ui-avatars.com/api/?name=Zara+Malik&background=00FFF5&color=000",
    rating: 5,
    stats: {
      sales: "+200%",
      returns: "-40%",
      repeat_customers: "85%"
    }
  }
];

const TestimonialCard = ({ testimonial, isActive, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`cursor-pointer ${
        isActive 
          ? 'col-span-full md:col-span-2 lg:col-span-2' 
          : 'col-span-1'
      } bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 transition-all duration-500 ease-in-out`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <div className="flex items-start gap-4">
        <motion.img
          layout
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full ring-2 ring-electric-teal"
        />
        <div className="flex-1">
          <motion.h4 layout className="font-quintessential text-xl text-electric-teal">
            {testimonial.name}
          </motion.h4>
          <motion.div layout className="space-y-1">
            <p className="text-gray-400 text-sm font-poppins">
              {testimonial.role}
            </p>
            <p className="text-gray-500 text-xs font-poppins flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {testimonial.location}
            </p>
          </motion.div>
        </div>
        {isActive && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 hover:text-electric-teal transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </div>

      <motion.div layout className="mt-6">
        <p className="text-gray-300 font-poppins leading-relaxed">
          {testimonial.content}
        </p>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(testimonial.stats).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-electric-teal font-montserrat font-bold text-xl">
                    {value}
                  </p>
                  <p className="text-gray-400 text-sm font-poppins capitalize">
                    {key.replace(/_/g, ' ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="mt-6 flex justify-between items-center">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-electric-teal text-sm font-poppins"
          >
            <span className="hidden md:inline">Click to expand</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-gray-900/20 to-deep-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-quintessential mb-4 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
            Global Client Success Stories
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Real results and lasting partnerships from clients across Dubai, Europe, and Pakistan. Click on any testimonial to see detailed performance metrics.
          </p>
        </motion.div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={activeId === testimonial.id}
              onClick={() => setActiveId(activeId === testimonial.id ? null : testimonial.id)}
            />
          ))}
        </motion.div>

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
            Start Your Success Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;