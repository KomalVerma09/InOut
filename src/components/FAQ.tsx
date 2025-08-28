import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the INOUT 'only rises' mechanism work?",
      answer: "Our revolutionary anti-dump protocol uses smart contract automation to prevent large sells that could crash the price. Combined with automatic buybacks and burn mechanisms, INOUT is designed to trend upward over time."
    },
    {
      question: "What makes your lending platform different?",
      answer: "We offer industry-leading APY rates up to 18%, instant liquidity without lock-up periods, and our yields are backed by our innovative INOUT tokenomics that create sustainable returns for all participants."
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our top priority. We're audited by leading blockchain security firms, use multi-signature wallets, and implement bank-grade encryption. Our partnership with Polygon ensures enterprise-level security standards."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes! Our platform offers instant liquidity. You can withdraw your funds at any time without penalties or lock-up periods, giving you complete control over your investments."
    },
    {
      question: "How does the referral system work?",
      answer: "Our multi-level referral system rewards you with 10% commission on your direct referrals' activities, plus smaller percentages from their referrals. It's a sustainable way to build passive income in the crypto ecosystem."
    }
  ];

  const teamMembers = [
    { name: 'Alex Chen', role: 'CEO & Founder', avatar: '👨‍💼' },
    { name: 'Sarah Kim', role: 'CTO', avatar: '👩‍💻' },
    { name: 'Mike Rodriguez', role: 'Head of DeFi', avatar: '👨‍🔬' }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6 text-center text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-purple-200 text-center max-w-3xl mx-auto mb-12">
            Everything you need to know about our revolutionary InOut finance ecosystem
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card-cosmic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: 'rgba(160, 136, 242, 0.1)' }}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 text-center text-glow">
            Get in Touch
          </h2>
          <p className="text-xl text-purple-200 text-center max-w-3xl mx-auto mb-12">
            Have questions? Our cosmic team is here to help you on your DeFi journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="card-cosmic p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full btn-cosmic text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Team */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Contact Methods */}
              <div className="card-cosmic p-8">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400">support@cryptoevolution.io</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Discord</div>
                      <div className="text-gray-400">Join our community</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">24/7 Support</div>
                      <div className="text-gray-400">Always here to help</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team */}
              <div className="card-cosmic p-8">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Our Team</h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl">{member.avatar}</div>
                      <div>
                        <div className="text-white font-semibold">{member.name}</div>
                        <div className="text-purple-400 text-sm">{member.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;