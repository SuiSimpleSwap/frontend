import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectButton } from '@mysten/dapp-kit';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeftRight, 
  Droplets, 
  Trophy, 
  Gift, 
  Users, 
  Coins,
  Zap,
  Menu,
  X
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'swap', label: 'Swap', icon: ArrowLeftRight, path: '/' },
    { id: 'liquidity', label: 'Liquidity', icon: Droplets, path: '/liquidity' },
    { id: 'quests', label: 'Quests', icon: Trophy, path: '/quests' },
    { id: 'loot', label: 'Loot Vault', icon: Gift, path: '/loot' },
    { id: 'referral', label: 'Referral', icon: Users, path: '/referral' },
    { id: 'utility', label: 'Utility', icon: Coins, path: '/utility' },
  ];

  if (isMobile) {
    return (
      <>
        <nav className="main-nav">
          <div className="nav-container">
            <div className="nav-logo">
              <Zap className="logo-icon" />
              <span className="logo-text">SimpleSwap</span>
            </div>
            <div className="nav-actions">
              <ConnectButton />
              <button 
                className="hamburger-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => 
                    `mobile-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Zap className="logo-icon" />
          <span className="logo-text">SimpleSwap</span>
        </div>

        <div className="nav-items">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;