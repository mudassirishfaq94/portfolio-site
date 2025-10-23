import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const email = 'mudassir.dev09@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-gray-900/50 section-diagonal">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Solve Your Web Challenge?</h2>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-gray-400">{email}</span>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-electric-teal/20 text-electric-teal rounded-lg hover:bg-electric-teal/30 transition-colors relative"
            >
              {copySuccess || 'Copy Email'}
            </button>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-deep-black border border-gray-800 rounded-lg focus:outline-none focus:border-electric-teal transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-deep-black border border-gray-800 rounded-lg focus:outline-none focus:border-electric-teal transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-deep-black border border-gray-800 rounded-lg focus:outline-none focus:border-electric-teal transition-colors"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-electric-teal text-deep-black font-semibold px-8 py-4 rounded-lg hover:bg-electric-teal/90 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;