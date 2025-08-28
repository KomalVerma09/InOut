import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, TrendingUp, RefreshCw, BarChart3, Settings, 
  Wallet, PlusCircle, Users, Gift, Rocket, Zap,
  DollarSign, PiggyBank, Share, ArrowUpRight
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const stats = {
    totalBalance: 12847.89,
    totalEarnings: 2347.56,
    activeLends: 5,
    referrals: 23,
    stakingRewards: 1247.33,
    inoutTokens: 15847.22
  };

  const recentTransactions = [
    { type: 'Lend', amount: 500, token: 'DAI', apy: '15.7%', status: 'Active' },
    { type: 'Stake', amount: 1000, token: 'INOUT', apy: '25.2%', status: 'Active' },
    { type: 'Referral', amount: 50, token: 'INOUT', apy: '-', status: 'Completed' },
    { type: 'Lend', amount: 750, token: 'USDC', apy: '14.3%', status: 'Active' }
  ];

  const mobileNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'earn', icon: TrendingUp, label: 'Earn' },
    { id: 'swap', icon: RefreshCw, label: 'Swap' },
    { id: 'stats', icon: BarChart3, label: 'Stats' },
    { id: 'more', icon: Settings, label: 'More' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-purple-400" />
              <span className="font-orbitron text-xl font-bold text-white">CRYPTO EVOLUTION</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-purple-600/20 rounded-lg px-3 py-2">
                <Wallet className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">${stats.totalBalance.toLocaleString()}</span>
              </div>
              <button className="btn-cosmic px-4 py-2">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Funds
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
              Welcome back, Crypto Pioneer! 🚀
            </h1>
            <p className="text-purple-200">Your journey to the moon continues...</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="card-cosmic p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-orbitron font-bold text-white count-up">
                ${stats.totalBalance.toLocaleString()}
              </div>
              <div className="text-gray-400">Total Portfolio Value</div>
              <div className="text-green-400 text-sm mt-1">+12.7% this month</div>
            </div>

            <div className="card-cosmic p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-orbitron font-bold text-white count-up">
                ${stats.totalEarnings.toLocaleString()}
              </div>
              <div className="text-gray-400">Total Earnings</div>
              <div className="text-green-400 text-sm mt-1">+8.4% this week</div>
            </div>

            <div className="card-cosmic p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-orbitron font-bold text-white count-up">
                {stats.inoutTokens.toLocaleString()}
              </div>
              <div className="text-gray-400">INOUT Tokens</div>
              <div className="text-green-400 text-sm mt-1">Moon mission active 🌙</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Investments */}
            <motion.div
              className="card-cosmic p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-orbitron font-bold text-white">Active Investments</h2>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'Lend' ? 'bg-green-500/20' :
                        tx.type === 'Stake' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                      }`}>
                        {tx.type === 'Lend' ? <PiggyBank className="w-5 h-5 text-green-400" /> :
                         tx.type === 'Stake' ? <Zap className="w-5 h-5 text-blue-400" /> :
                         <Gift className="w-5 h-5 text-purple-400" />}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{tx.type}</div>
                        <div className="text-gray-400 text-sm">{tx.token}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{tx.amount} {tx.token}</div>
                      <div className="text-green-400 text-sm">{tx.apy !== '-' ? tx.apy : 'Bonus'}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="card-cosmic p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h2 className="text-xl font-orbitron font-bold text-white mb-6">Quick Actions</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PiggyBank className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold">Lend</div>
                  <div className="text-green-400 text-sm">Up to 18% APY</div>
                </motion.button>

                <motion.button
                  className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold">Stake</div>
                  <div className="text-blue-400 text-sm">25% Rewards</div>
                </motion.button>

                <motion.button
                  className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold">Swap</div>
                  <div className="text-purple-400 text-sm">Best Rates</div>
                </motion.button>

                <motion.button
                  className="p-4 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Share className="w-8 h-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-white font-semibold">Refer</div>
                  <div className="text-orange-400 text-sm">Earn 10%</div>
                </motion.button>
              </div>

              {/* Referral Stats */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border border-purple-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">Referral Network</div>
                    <div className="text-gray-400 text-sm">{stats.referrals} active referrals</div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 font-bold">$347.89</div>
                    <div className="text-gray-400 text-sm">This month</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="mobile-nav fixed bottom-0 left-0 right-0 md:hidden">
        <div className="flex justify-around items-center py-2">
          {mobileNavItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                activeTab === item.id ? 'text-purple-400' : 'text-gray-400'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;