import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, TrendingUp, BarChart3, Zap } from 'lucide-react';

const SwapInterface = () => {
  const [fromToken, setFromToken] = useState('INOUT');
  const [toToken, setToToken] = useState('DAI');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const chartData = [
    { time: '00:00', price: 0.078 },
    { time: '04:00', price: 0.082 },
    { time: '08:00', price: 0.085 },
    { time: '12:00', price: 0.089 },
    { time: '16:00', price: 0.091 },
    { time: '20:00', price: 0.089 },
    { time: '24:00', price: 0.093 }
  ];

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <section className="py-20 relative" id="swap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6 text-glow">
            Trade with
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Lightning Speed
            </span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience seamless token swaps with real-time charts and minimal slippage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trading Chart */}
          <motion.div
            className="card-cosmic p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-orbitron font-bold text-white">INOUT/USD</h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-400">$0.089</span>
                <span className="text-green-400 text-sm">+12.7%</span>
              </div>
            </div>
            
            {/* Animated Chart */}
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#A088F2', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#A088F2', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                
                <motion.path
                  d="M 0 150 Q 50 140 100 130 T 200 120 T 300 110 T 400 100"
                  stroke="#A088F2"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                
                <motion.path
                  d="M 0 150 Q 50 140 100 130 T 200 120 T 300 110 T 400 100 L 400 200 L 0 200 Z"
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                />
              </svg>
              
              {/* Animated data points */}
              {chartData.map((point, index) => (
                <motion.div
                  key={index}
                  className="absolute w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    left: `${(index / (chartData.length - 1)) * 100}%`,
                    top: `${(1 - (point.price - 0.07) / 0.03) * 100}%`
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            
            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <span>24H Volume: $2.4M</span>
              <span>Market Cap: $42.7M</span>
            </div>
          </motion.div>

          {/* Swap Interface */}
          <motion.div
            className="card-cosmic p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-orbitron font-bold text-white">Swap Tokens</h3>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            
            {/* From Token */}
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">From</span>
                  <span className="text-gray-400 text-sm">Balance: 1,247.89</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-3">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                    className="flex bg-transparent text-2xl font-bold text-white outline-none sm:col-span-3 col-span-2"
                  />
                  <div className="flex items-center  justify-center bg-purple-600/20 rounded-lg px-3 py-2 gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <span className="font-orbitron font-bold text-white">{fromToken}</span>
                  </div>
                </div>
              </div>
              
              {/* Swap Button */}
              <div className="flex justify-center">
                <motion.button
                  onClick={handleSwapTokens}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpDown className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              
              {/* To Token */}
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">To</span>
                  <span className="text-gray-400 text-sm">Balance: 892.34</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-3">
                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-2xl font-bold text-white outline-none sm:col-span-3 col-span-2"
                  />
                  <div className="flex items-center justify-center bg-gray-600/20 rounded-lg px-3 py-2 gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    <span className="font-orbitron font-bold text-white">{toToken}</span>
                  </div>
                </div>
              </div>
              
              {/* Swap Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Rate</span>
                  <span>1 {fromToken} = 12.47 {toToken}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Price Impact</span>
                  <span className="text-green-400">0.12%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Network Fee</span>
                  <span>~$0.02</span>
                </div>
              </div>
              
              <motion.button
                className="w-full btn-cosmic text-lg py-4 mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Swap Tokens
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Order Book */}
        <motion.div
          className="mt-12 card-cosmic p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2" />
            Live Order Book
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buy Orders */}
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Buy Orders</h4>
              <div className="space-y-2">
                {[
                  { price: 0.0890, amount: 1247.89, total: 111.06 },
                  { price: 0.0889, amount: 2341.56, total: 208.18 },
                  { price: 0.0888, amount: 3456.78, total: 307.02 },
                  { price: 0.0887, amount: 4567.89, total: 405.37 }
                ].map((order, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-3 text-sm py-2 px-3 rounded bg-green-900/20 hover:bg-green-900/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-green-400">${order.price}</span>
                    <span className="text-gray-300">{order.amount.toLocaleString()}</span>
                    <span className="text-gray-400">${order.total}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sell Orders */}
            <div>
              <h4 className="text-red-400 font-semibold mb-4">Sell Orders</h4>
              <div className="space-y-2">
                {[
                  { price: 0.0891, amount: 1234.56, total: 110.02 },
                  { price: 0.0892, amount: 2345.67, total: 209.24 },
                  { price: 0.0893, amount: 3456.78, total: 308.69 },
                  { price: 0.0894, amount: 4567.89, total: 408.37 }
                ].map((order, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-3 text-sm py-2 px-3 rounded bg-red-900/20 hover:bg-red-900/30 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-400">${order.price}</span>
                    <span className="text-gray-300">{order.amount.toLocaleString()}</span>
                    <span className="text-gray-400">${order.total}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SwapInterface;