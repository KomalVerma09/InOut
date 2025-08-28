import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 mt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="nebula absolute top-1/4 left-1/4 w-96 h-96"></div>
        <div className="nebula absolute bottom-1/4 right-1/4 w-80 h-80"></div>
        
        {/* Floating tokens */}
        <motion.div
          className="absolute top-20 left-20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Orbiting moon around INOUT token */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center font-orbitron font-bold text-white">
              INOUT
            </div>
            <div className="orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-8 text-glow leading-tight">
            Lend, Earn, Ascend
            <motion.span
              className="inline-block ml-6"
              animate={{ y: [0, -10, 0] }} // smooth floating instead of spinning
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-12 h-12 text-purple-400" />
            </motion.span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-purple-200 mb-16 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Backed by Crypto Evolution. Powered by Community.
            <br />
            <span className="text-purple-400 italic font-medium">Experience limitless potential and financial freedom</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Link to="/register" className="btn-cosmic text-xl px-10 py-5 pulse-glow font-semibold">
              Connect Wallet
            </Link>
            <motion.button
              className="btn-cosmic bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-xl px-10 py-5 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Opportunities
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="card-cosmic p-8 hover-lift">
              <div className="text-4xl font-orbitron font-bold text-purple-400 mb-3">$42M+</div>
              <div className="text-gray-300 text-lg">Total Value Locked</div>
            </div>
            <div className="card-cosmic p-8 hover-lift">
              <div className="text-4xl font-orbitron font-bold text-green-400 mb-3">15.7%</div>
              <div className="text-gray-300 text-lg">Average APY</div>
            </div>
            <div className="card-cosmic p-8 hover-lift">
              <div className="text-4xl font-orbitron font-bold text-blue-400 mb-3">50K+</div>
              <div className="text-gray-300 text-lg">Active Users</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;