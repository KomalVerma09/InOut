import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Users, Gift, Rocket, RotateCcw } from 'lucide-react';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    referralCode: searchParams.get('ref') || '',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [referrerName, setReferrerName] = useState('');
  const [isFlipping, setIsFlipping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      if (formData.referralCode) {
        setReferrerName('CryptoMaster2023'); // Simulate referrer lookup
        setShowCelebration(true);
        
        // After celebration, go to dashboard
        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
      } else {
        navigate('/dashboard');
      }
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {!showCelebration ? (
          <div className="relative z-10 w-full max-w-md px-6 preserve-3d">
            <motion.div
              className="card-flip-container"
              initial={{ opacity: 0, y: 50, rotateY: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: isFlipping ? 180 : 0
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <div className="card-flip-inner">
                {/* Front Side - Register */}
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
                          setTimeout(() => navigate('/login'), 800);
                        }}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Login
                      </motion.button>
                    </div>
                    
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Users className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h1 className="text-4xl font-orbitron font-bold text-white mb-4 text-glow">
                      Join the Evolution
                    </h1>
                    <p className="text-purple-200">
                      Start your cosmic journey to financial freedom
                    </p>
                  </div>

                  {/* Referral Notice */}
                  {formData.referralCode && (
                    <motion.div
                      className="mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/30"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Gift className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">Referral Code Detected!</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        You've been invited to join by <span className="text-green-400 font-semibold">{referrerName || 'a community member'}</span>
                      </p>
                    </motion.div>
                  )}

                  {/* Registration Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Referral Code (Optional)
                      </label>
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                        placeholder="Enter referral code"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
                        required
                      />
                      <label className="text-sm text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={!formData.acceptTerms || isSubmitting}
                      className={`w-full btn-cosmic text-lg py-4 ${
                        (!formData.acceptTerms || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      whileHover={formData.acceptTerms && !isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={formData.acceptTerms && !isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Rocket className="w-5 h-5" />
                          </motion.div>
                          <span>Launching Account...</span>
                        </div>
                      ) : (
                        'Join the Evolution'
                      )}
                    </motion.button>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Celebration Screen
          <motion.div
            className="relative z-10 w-full max-w-2xl px-6 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 360, 720],
                    y: [-100, 100],
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-8xl mb-6">🎉</div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6 text-glow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Welcome to the
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Crypto Evolution!
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-purple-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              🚀 Thanks to <span className="text-green-400 font-bold">{referrerName}</span> for inviting you to the moon!
            </motion.p>

            <motion.div
              className="space-y-4 text-lg text-gray-300"
              initial={{ scale: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <p>Your cosmic journey begins now...</p>
              <p>Prepare for liftoff! 🚀</p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <div className="inline-flex items-center space-x-2 text-purple-400">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-6 h-6" />
                </motion.div>
                <span>Redirecting to your dashboard...</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Register;