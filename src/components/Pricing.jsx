import { motion } from 'framer-motion';
import { useState } from 'react';
import ConsultationForm from './ConsultationForm';

const pricingPlans = {
  project: [
    {
      name: "Basic Website",
      price: "1,200 AED",
      duration: "1-2 weeks",
      features: [
        "Custom WordPress/React Website",
        "5 Pages Design & Development",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Social Media Integration",
        "3 Rounds of Revisions",
        "2 Months Support"
      ],
      popular: false
    },
    {
      name: "Professional E-commerce",
      price: "2,200 AED",
      duration: "2-3 weeks",
      features: [
        "WordPress/WooCommerce or React/Next.js",
        "Up to 50 Products Setup",
        "Payment Gateway Integration",
        "Advanced Product Filters",
        "Order Management System",
        "Inventory Management",
        "SEO Optimization",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Custom",
      duration: "Project Based",
      features: [
        "Full-Stack Development",
        "Custom Features & Integration",
        "API Development",
        "Database Design",
        "Advanced Security Features",
        "Performance Optimization",
        "Comprehensive Documentation",
        "6 Months Support"
      ],
      popular: false
    }
  ],
  monthly: [
    {
      name: "Maintenance Basic",
      price: "499 AED",
      duration: "per month",
      features: [
        "Regular Updates & Backups",
        "Security Monitoring",
        "Technical Support",
        "Content Updates (2/month)",
        "Performance Monitoring",
        "Monthly Reports",
        "Bug Fixes",
        "24/7 Emergency Support"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      price: "999 AED",
      duration: "per month",
      features: [
        "All Basic Features",
        "Weekly Content Updates",
        "SEO Optimization",
        "Analytics & Reporting",
        "Speed Optimization",
        "Social Media Integration",
        "Email Marketing Setup",
        "Conversion Optimization"
      ],
      popular: true
    }
  ]
};

const PriceCard = ({ plan, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 ${
        plan.popular ? 'border-2 border-electric-teal' : 'border border-gray-700'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-electric-teal text-black px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-quintessential text-electric-teal mb-4">{plan.name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-gray-400 ml-2">{plan.duration}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <svg className="w-6 h-6 text-electric-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <a
          href="#contact"
          className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-r from-electric-teal to-blue-500 text-black hover:scale-105'
              : 'bg-gray-800 text-electric-teal border border-electric-teal hover:bg-electric-teal hover:text-black'
          } w-full`}
        >
          Get Started
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-gray-900/20 to-deep-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-quintessential mb-6 bg-gradient-to-r from-white to-electric-teal bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins">
            Choose the perfect plan for your business needs, with flexible options for both project-based and ongoing support.
          </p>
        </motion.div>

        {/* Project Based Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-quintessential text-center mb-12 text-electric-teal">
            Project Based Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.project.map((plan, index) => (
              <PriceCard key={index} plan={plan} type="project" />
            ))}
          </div>
        </div>

        {/* Monthly Support Plans */}
        <div>
          <h3 className="text-3xl font-quintessential text-center mb-12 text-electric-teal">
            Monthly Support & Maintenance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.monthly.map((plan, index) => (
              <PriceCard key={index} plan={plan} type="monthly" />
            ))}
          </div>
        </div>

        {/* Custom Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Need a custom solution? Let's discuss your specific requirements and create a tailored package that perfectly fits your business needs.
          </p>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-montserrat font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <ConsultationForm 
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;