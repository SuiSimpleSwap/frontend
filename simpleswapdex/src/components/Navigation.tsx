import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectButton } from '@mysten/dapp-kit';
import { motion } from 'framer-motion';
import { 
  ArrowLeftRight, 
  Droplets, 
  Trophy, 
  Gift, 
  Users, 
  Coins,
  Zap
} from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Swap', icon: ArrowLeftRight },
    { path: '/liquidity', label: 'Liquidity', icon: Droplets },
    { path: '/quests', label: 'Quests', icon: Trophy },
    { path: '/vault', label: 'LootVault', icon: Gift },
    { path: '/arena', label: 'Arena', icon: Users },
    { path: '/utility', label: '$SWAP', icon: Coins },
  ];

  return (
    <motion.nav 
      className="main-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-6 w-6 text-neon-blue" />
            <span className="text-lg font-bold tech-font neon-text">
              SimpleSwap
            </span>
            <span className="text-xs pixel-font text-neon-green">DEX</span>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item flex items-center space-x-2 hover-shake ${
                    isActive ? 'active' : ''
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-2">
          <div className="grid grid-cols-3 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item flex flex-col items-center py-1 text-xs hover-shake ${
                    isActive ? 'active' : ''
                  }`
                }
              >
                <item.icon className="h-3 w-3 mb-1" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
