import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ConsultationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    requirements: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Demo mode - simulate email sending without actual EmailJS setup
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll show success
      // In production, replace this with actual EmailJS configuration
      console.log('Demo: Consultation form submitted with data:', formData);
      
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          requirements: ''
        });
      }, 2000);
      
      /* 
      // Uncomment and configure this section when you have EmailJS set up:
      
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_CONSULTATION_TEMPLATE_ID', // Replace with your EmailJS template ID for consultations
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          requirements: formData.requirements,
          to_email: 'mudassir.dev09@gmail.com',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          onClose();
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            requirements: ''
          });
        }, 2000);
      }
      */
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send consultation request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[90%] max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-quintessential text-electric-teal">
                Project Consultation
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-electric-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                >
                  <option value="">Select Project Type</option>
                  <option value="website">Custom Website</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="webapp">Web Application</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range (AED)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="1000-2000">1,000 - 2,000</option>
                    <option value="2000-5000">2,000 - 5,000</option>
                    <option value="5000-10000">5,000 - 10,000</option>
                    <option value="10000+">10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  >
                    <option value="">Select Timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="normal">Normal (2-4 weeks)</option>
                    <option value="flexible">Flexible (1-2 months)</option>
                    <option value="planning">Still Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-electric-teal focus:ring-1 focus:ring-electric-teal outline-none transition-colors"
                  placeholder="Please describe your project requirements, features needed, and any specific preferences..."
                />
              </div>

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-center"
                >
                  {submitError}
                </motion.div>
              )}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gradient-to-r from-electric-teal to-blue-500 text-black font-semibold rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500/90 text-black px-6 py-3 rounded-full font-semibold shadow-xl"
                >
                  Thank you! Your consultation request has been submitted.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationForm;