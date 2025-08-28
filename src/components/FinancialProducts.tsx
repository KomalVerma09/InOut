import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, TrendingUp, Users, Zap, DollarSign, Shield } from 'lucide-react';

const FinancialProducts = () => {
  const products = [
    {
      icon: PiggyBank,
      title: 'Lending & Earning',
      description: 'Lend your crypto assets and earn competitive yields with our automated lending protocols.',
      features: ['Up to 18% APY', 'Instant liquidity', 'Zero lock-up periods'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Stake & Fly',
      description: 'Stake INOUT tokens and watch your portfolio soar to the moon with our revolutionary staking rewards.',
      features: ['25% staking rewards', 'Compound interest', 'Moon mission guarantee'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Referral Growth',
      description: 'Build your crypto empire by referring friends and earning lifetime commissions from their activities.',
      features: ['10% referral bonus', 'Multi-level rewards', 'Passive income stream'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 relative" id="lending">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6 text-glow">
            Unlock a New Era of
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Wealth Creation
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience the future of decentralized finance with our cutting-edge products designed for maximum returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="card-cosmic p-8 hover-lift group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                <product.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4 text-center">
                {product.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-center">
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-purple-200">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                className="w-full btn-cosmic"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Animated Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div
              className="text-5xl font-orbitron font-bold text-green-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              $127M+
            </motion.div>
            <div className="text-gray-300 text-lg">Total Value Locked</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-5xl font-orbitron font-bold text-blue-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              89,247
            </motion.div>
            <div className="text-gray-300 text-lg">Active Lenders</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-5xl font-orbitron font-bold text-purple-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              18.7%
            </motion.div>
            <div className="text-gray-300 text-lg">Average APY</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialProducts;