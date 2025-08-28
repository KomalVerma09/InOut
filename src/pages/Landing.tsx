import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PolygonPartnership from '../components/PolygonPartnership';
import TokenShowcase from '../components/TokenShowcase';
import SwapInterface from '../components/SwapInterface';
import FinancialProducts from '../components/FinancialProducts';
import FAQ from '../components/FAQ';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between items-center h-16 gap-5">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://in-out.live/Appland/assets/images/logo/logo-6.png"
                alt=""
                style={{ maxHeight: '60px' }}
              />
            </div>
            <div className='hidden sm:flex md:hidden'>

            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center col-span-2 lg:col-span-4 justify-end gap-7">
              <a href="#lending" className="text-white hover:text-purple-400 transition-colors">Lending</a>
              <a href="#swap" className="text-white hover:text-purple-400 transition-colors">Swap</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
            </div>

            {/* Connect Wallet + Hamburger */}
            <div className="flex justify-end items-center gap-4">
              <Link to="/login" className="btn-cosmic flex justify-center min-w-[170px] max-w-[170px]">
                Connect Wallet
              </Link>

              {/* Hamburger only on small screens */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-md border-t border-purple-500/20 px-6 py-4 space-y-4"
            >
              <a href="#lending" className="block text-white hover:text-purple-400 transition-colors">Lending</a>
              <a href="#swap" className="block text-white hover:text-purple-400 transition-colors">Swap</a>
              <a href="#about" className="block text-white hover:text-purple-400 transition-colors">About</a>
              {/* <Link
                to="/login"
                className="btn-cosmic block text-center w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect Wallet
              </Link> */}
            </motion.div>
          )}
        </AnimatePresence>

        
      </nav>

      {/* Sections */}
      <HeroSection />
      <PolygonPartnership />
      <TokenShowcase />
      <FinancialProducts />
      <SwapInterface />
      <FAQ />

      {/* Footer */}
      <footer className="relative mt-20 py-16 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-purple-400" />
                <span className="font-orbitron text-lg font-bold text-white">CRYPTO EVOLUTION</span>
              </div>
              <p className="text-gray-400">Fueling the Future of Finance</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Lending</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Staking</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Swap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>&copy; 2025 Crypto Evolution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
