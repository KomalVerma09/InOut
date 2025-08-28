import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, ArrowLeft, Zap, RotateCcw } from 'lucide-react';

const Login = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();

  const wallets = [
    { name: 'MetaMask', icon: '🦊', color: 'from-orange-500 to-yellow-500' },
    { name: 'WalletConnect', icon: '🔗', color: 'from-blue-500 to-purple-500' },
    { name: 'Coinbase Wallet', icon: '🔵', color: 'from-blue-600 to-blue-700' },
    { name: 'Trust Wallet', icon: '🛡️', color: 'from-blue-500 to-cyan-500' }
  ];

  const handleWalletConnect = async (walletName: string) => {
    setSelectedWallet(walletName);
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-6 preserve-3d">
        <motion.div
          className="card-flip-container"
          initial={{ opacity: 0, y: 50, rotateY: 0 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotateY: isFlipping ? 180 : 0
          }}
          transition={{ duration: 1 }}
        >
          <div className="card-flip-inner">
            {/* Front Side - Login */}
            <div className="card-flip-front">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                  </Link>
                  <motion.button
                    onClick={() => {
                      setIsFlipping(true);
                      setTimeout(() => navigate('/register'), 800);
                    }}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Register
                  </motion.button>
                </div>
                
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Wallet className="w-10 h-10 text-white" />
                </motion.div>
                
                <h1 className="text-4xl font-orbitron font-bold text-white mb-4 text-glow">
                  Connect Wallet
                </h1>
                <p className="text-purple-200">
                  Choose your preferred wallet to access the Crypto Evolution platform
                </p>
              </div>

              {/* Wallet Options */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {wallets.map((wallet, index) => (
                  <motion.button
                    key={wallet.name}
                    onClick={() => handleWalletConnect(wallet.name)}
                    disabled={isConnecting}
                    className={`w-full p-4 card-cosmic hover-lift transition-all duration-300 ${
                      selectedWallet === wallet.name ? 'ring-2 ring-purple-400' : ''
                    } ${isConnecting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                    whileHover={!isConnecting ? { scale: 1.02 } : {}}
                    whileTap={!isConnecting ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${wallet.color} rounded-full flex items-center justify-center text-2xl`}>
                        {wallet.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-semibold">{wallet.name}</div>
                        <div className="text-gray-400 text-sm">
                          {selectedWallet === wallet.name && isConnecting
                            ? 'Connecting...'
                            : 'Connect using your wallet'
                          }
                        </div>
                      </div>
                      {selectedWallet === wallet.name && isConnecting && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-5 h-5 text-purple-400" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Connection Status */}
              {isConnecting && (
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="inline-flex items-center space-x-2 text-purple-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Establishing secure connection...</span>
                  </motion.div>
                </motion.div>
              )}

              {/* Security Notice */}
              <motion.div
                className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold text-white mb-1">Secure Connection</div>
                    Your wallet connection is encrypted and secure. We never store your private keys.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;