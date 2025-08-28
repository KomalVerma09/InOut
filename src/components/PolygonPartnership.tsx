import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, CheckCircle } from 'lucide-react';

const PolygonPartnership = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8 text-glow">
            Polygon Network Partnership
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Proudly partnered with Polygon for lightning-fast, secure, and scalable blockchain infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Polygon Logo Visualization */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 relative flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Proper Polygon Logo */}
                <svg width="240" height="240" viewBox="0 0 240 240" className="drop-shadow-2xl">
                  <defs>
                    <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8247E5' }} />
                      <stop offset="100%" style={{ stopColor: '#4F46E5' }} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main Polygon hexagon */}
                  <motion.polygon
                    points="120,30 200,70 200,150 120,190 40,150 40,70"
                    fill="url(#polygonGradient)"
                    stroke="#8247E5"
                    strokeWidth="3"
                    filter="url(#glow)"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  
                  {/* Inner geometric pattern */}
                  <motion.polygon
                    points="120,50 180,80 180,140 120,170 60,140 60,80"
                    fill="rgba(130, 71, 229, 0.4)"
                    stroke="#A855F7"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  
                  {/* Center circle */}
                  <motion.circle
                    cx="120"
                    cy="120"
                    r="30"
                    fill="#8247E5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  
                  {/* Polygon text */}
                  <motion.text
                    x="120"
                    y="128"
                    textAnchor="middle"
                    className="fill-white font-orbitron text-sm font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    MATIC
                  </motion.text>
                </svg>
                
                {/* Orbiting particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-purple-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * 60) * Math.PI / 180) * 140,
                      y: Math.sin((i * 60) * Math.PI / 180) * 140,
                    }}
                    transition={{
                      duration: 12 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Partnership Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-orbitron font-bold text-purple-400 mb-8">
                Built on Trust. Scaling with Speed.
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Lightning Fast Transactions</h4>
                    <p className="text-gray-300 leading-relaxed">Process thousands of transactions per second with minimal fees and instant confirmation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Enterprise Security</h4>
                    <p className="text-gray-300 leading-relaxed">Bank-grade security with decentralized validation and multi-layer protection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Massive Ecosystem</h4>
                    <p className="text-gray-300 leading-relaxed">Join millions of users in the thriving Polygon ecosystem with endless possibilities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Status Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-cosmic p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="font-orbitron text-lg font-bold text-white">INOUT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-orbitron text-sm font-bold text-white">MATIC</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-2xl font-orbitron font-bold text-purple-400 mb-4">
              Polygon × INOUT — The Chain of Change
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Experience the future of DeFi with our revolutionary partnership that combines 
              Polygon's cutting-edge infrastructure with INOUT's innovative tokenomics.
            </p>
            
            <div className="inline-flex items-center space-x-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-full border border-green-500/30">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Partnership Active & Verified</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PolygonPartnership;