import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Rocket, Moon, Zap } from 'lucide-react';
import AirplanePro from "./AirplanePro"; // adjust path as needed

// Hook to detect if screen is small
const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsSmall(window.innerWidth < 768); // Tailwind md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isSmall;
};

const TokenShowcase = () => {
  const isSmallScreen = useIsSmallScreen();

  // Animation values depending on screen size
  const airplaneAnimation = isSmallScreen
    ? {
        x: [0, 120, 420, 660],
        y: [-40, -100, -220, -360],
        rotate: [6, 10, 14, 18],
      }
    : {
        x: [0, 220, 520, 760],
        y: [0, -40, -140, -290],
        rotate: [6, 10, 14, 18],
      };

  const competitorTokens = [
    { name: 'SHIB', price: 0.000008, color: '#FFA500', delay: 0 },
    { name: 'DOGE', price: 0.08, color: '#C2A633', delay: 0.5 },
    { name: 'PEPE', price: 0.000001, color: '#00FF00', delay: 1 },
    { name: 'FLOKI', price: 0.00003, color: '#FF6B6B', delay: 1.5 }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 text-glow">
            The Token That Only Rises
          </h2>
          <p className="text-2xl text-purple-300 max-w-4xl mx-auto">
            Revolutionary INOUT Protocol: <span className="text-green-400">No dips, just dreams.</span>
            <br />
            <span className="text-blue-400 italic">A moon mission hardcoded into the protocol.</span>
          </p>
          <motion.div
  className="
    transform -translate-x-1/2 -translate-y-1/2 
    text-center
    w-auto 
    px-4 md:px-6
  "
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 2 }}
  viewport={{ once: true }}
>
  <div
    className="
      bg-gradient-to-r from-purple-600/20 to-blue-600/20 
      backdrop-blur-md rounded-2xl 
      p-4 md:p-6 border border-purple-500/30
    "
  >
    <h3 className="text-lg md:text-2xl font-orbitron font-bold text-white mb-2">
      🚀 INOUT Leading the Race!
    </h3>
    <p className="text-sm md:text-base text-purple-200">
      While others struggle, INOUT soars to new heights
    </p>
  </div>
</motion.div>
        </motion.div>

        {/* Enhanced Token Race Animation */}
        <div className="relative h-[600px] mb-16 overflow-hidden">
          {/* Space Background with Stars */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Moon Destination */}
          <motion.div
            className="absolute right-8 top-8"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity }
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 rounded-full shadow-2xl">
                <div className="absolute inset-2 bg-gradient-to-br from-yellow-100 to-yellow-400 rounded-full">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <Moon className="w-12 h-12 text-yellow-600" />
                  </div>
                </div>
              </div>
              {/* Moon glow effect */}
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Price Chart Background */}
          <div className="absolute bottom-0 left-0 right-0 h-96">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#4ECDC4', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#45B7D1', stopOpacity: 0.9 }} />
                </linearGradient>
              </defs>
              
              {/* Price trajectory line */}
              <motion.path
                d="M 0 350 Q 200 300 400 200 T 800 50"
                stroke="url(#priceGradient)"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {/* INOUT Airplane - Main Character */}
{/* Desktop / Large Screen Animation (your original) */}
<div className="relative h-[600px] mb-16 overflow-hidden">
          {/* Airplane (single div, responsive animation) */}
          <motion.div
            className="absolute bottom-20 left-8"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={airplaneAnimation}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          >
            <div className="relative">
              <AirplanePro />
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold shadow-md"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                $0.089
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ... rest of your code ... */}






          {/* Competitor Tokens - Falling Behind */}
          {/* Competitor Tokens - Falling Behind (realistic trails) */}
{competitorTokens.map((token, index) => (
  <motion.div
    key={token.name}
    className="absolute bottom-32"
    style={{ left: `${20 + index * 15}%` }}
    initial={{ y: 0, opacity: 1 }}
    animate={{
      y: [0, -15, 5, -10, 20],
      opacity: [1, 0.9, 0.75, 0.55, 0.35]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: token.delay,
      ease: "easeInOut"
    }}
  >
    <div className="relative">
      {/* Coin */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2"
        style={{
          background: token.color,
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          borderColor: token.color as string
        }}
      >
        {token.name}
      </div>

      {/* Exhaust haze (horizontal blur line) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -bottom-3"
        animate={{ opacity: [0.45, 0.8, 0.45], scaleX: [0.9, 1.1, 0.9] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: token.delay }}
        style={{ width: "38px" }}
      >
        <div className="h-[4px] w-full rounded-full bg-gradient-to-b from-gray-200/50 to-gray-400/40 blur-[2px]" />
      </motion.div>

      {/* Small dissipating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-gray-300/70"
          style={{ width: 4, height: 4, bottom: -8 - i * 10 }}
          initial={{ opacity: 0.6 }}
          animate={{ y: [0, 8], opacity: [0.6, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: token.delay + i * 0.25,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Price Indicator */}
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-400 text-xs"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: token.delay }}
      >
        ${token.price}
      </motion.div>
    </div>
  </motion.div>
))}

          {/* Price Milestones */}
          <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between py-8">
            {['$1.00', '$0.50', '$0.10', '$0.05', '$0.01'].map((price, index) => (
              <motion.div
                key={price}
                className="text-gray-400 text-sm font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {price}
              </motion.div>
            ))}
          </div>

          {/* Success Message */}
          {/* Success Message */}


        </div>

        {/* Token Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="card-cosmic p-8 text-center hover-lift"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Anti-Dump Mechanism</h3>
            <p className="text-gray-300">
              Revolutionary tokenomics that prevent price dumps through smart contract automation
            </p>
          </motion.div>

          <motion.div
            className="card-cosmic p-8 text-center hover-lift"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Yield Generation</h3>
            <p className="text-gray-300">
              Automatic yield generation for holders through innovative staking mechanisms
            </p>
          </motion.div>

          <motion.div
            className="card-cosmic p-8 text-center hover-lift"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Moon Protocol</h3>
            <p className="text-gray-300">
              Built-in mechanisms that drive continuous price appreciation over time
            </p>
          </motion.div>
        </div>

        {/* Token Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-green-400 count-up">+2,847%</div>
            <div className="text-gray-400">All-Time Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-blue-400 count-up">$0.089</div>
            <div className="text-gray-400">Current Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-purple-400 count-up">$42.7M</div>
            <div className="text-gray-400">Market Cap</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-yellow-400 count-up">1.2M</div>
            <div className="text-gray-400">Holders</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenShowcase;