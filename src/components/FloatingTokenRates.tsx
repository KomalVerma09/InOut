import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, X, BarChart3 } from 'lucide-react';

const FloatingTokenRates = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  const [tokenData, setTokenData] = useState({
    price: 0.089,
    change: 12.7,
    volume: 2.4,
    marketCap: 42.7
  });

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setTokenData(prev => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 0.001,
        change: prev.change + (Math.random() - 0.5) * 0.5,
        volume: prev.volume + (Math.random() - 0.5) * 0.1,
        marketCap: prev.marketCap + (Math.random() - 0.5) * 0.5
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(true)}
      >
        {/* Floating Button */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <BarChart3 className="w-6 h-6 text-white" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Card */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="card-cosmic p-4 min-w-[280px] relative"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false)
                  }}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 transition"
                >
                  <X className="w-4 h-4 text-gray-300 hover:text-white" />
                </button>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="font-orbitron text-xs font-bold text-white">IO</span>
                    </div>
                    <span className="font-orbitron font-bold text-white">INOUT</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {tokenData.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-bold ${tokenData.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tokenData.change > 0 ? '+' : ''}{tokenData.change.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Price</span>
                    <motion.span
                      className="font-orbitron font-bold text-white count-up"
                      key={tokenData.price}
                      initial={{ scale: 1.1, color: '#A088F2' }}
                      animate={{ scale: 1, color: '#ffffff' }}
                      transition={{ duration: 0.3 }}
                    >
                      ${tokenData.price.toFixed(4)}
                    </motion.span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">24H Volume</span>
                    <motion.span
                      className="text-white count-up"
                      key={Math.floor(tokenData.volume)}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${tokenData.volume.toFixed(1)}M
                    </motion.span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Market Cap</span>
                    <motion.span
                      className="text-white count-up"
                      key={Math.floor(tokenData.marketCap)}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${tokenData.marketCap.toFixed(1)}M
                    </motion.span>
                  </div>
                </div>

                {/* Pulse indicator for live updates */}
                <motion.div
                  className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingTokenRates;