import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, 
  Sparkles, 
  Lock, 
  Unlock,
  Star,
  Zap,
  Coins
} from 'lucide-react';
import { LootCrate } from '../types/gamefi';

const LootVault: React.FC = () => {
  const [selectedCrate, setSelectedCrate] = useState<LootCrate | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [openedReward, setOpenedReward] = useState<any>(null);

  const lootCrates: LootCrate[] = [
    {
      id: 'common-1',
      type: 'common',
      name: 'Neural Core Crate',
      description: 'Basic rewards for new traders',
      contents: { swapTokens: 50, xpBoost: 1.1 },
      rarity: 60,
      owned: 3
    },
    {
      id: 'rare-1',
      type: 'rare',
      name: 'Quantum Cache',
      description: 'Enhanced rewards for active traders',
      contents: { swapTokens: 150, liquidityBoost: 1.2, xpBoost: 1.3 },
      rarity: 25,
      owned: 1
    },
    {
      id: 'epic-1',
      type: 'epic',
      name: 'Cyber Vault',
      description: 'Premium rewards for elite traders',
      contents: { swapTokens: 500, liquidityBoost: 1.5, cosmetic: 'Neon Trail' },
      rarity: 10,
      owned: 0
    },
    {
      id: 'legendary-1',
      type: 'legendary',
      name: 'Nexus Singularity',
      description: 'Ultimate rewards for master traders',
      contents: { swapTokens: 2000, liquidityBoost: 2.0, xpBoost: 2.0, cosmetic: 'Holographic Avatar' },
      rarity: 1,
      owned: 0
    }
  ];

  const getCrateStyle = (type: string) => {
    switch (type) {
      case 'common':
        return {
          borderColor: '#9ca3af',
          glowColor: 'rgba(156, 163, 175, 0.4)',
          bgGradient: 'from-gray-600 to-gray-700'
        };
      case 'rare':
        return {
          borderColor: '#3b82f6',
          glowColor: 'rgba(59, 130, 246, 0.4)',
          bgGradient: 'from-blue-600 to-blue-700'
        };
      case 'epic':
        return {
          borderColor: '#8b5cf6',
          glowColor: 'rgba(139, 92, 246, 0.4)',
          bgGradient: 'from-purple-600 to-purple-700'
        };
      case 'legendary':
        return {
          borderColor: '#f59e0b',
          glowColor: 'rgba(245, 158, 11, 0.4)',
          bgGradient: 'from-yellow-500 to-orange-600'
        };
      default:
        return {
          borderColor: '#9ca3af',
          glowColor: 'rgba(156, 163, 175, 0.4)',
          bgGradient: 'from-gray-600 to-gray-700'
        };
    }
  };

  const openCrate = async (crate: LootCrate) => {
    if (crate.owned === 0) return;
    
    setSelectedCrate(crate);
    setIsOpening(true);

    // Simulate opening animation
    await new Promise(resolve => setTimeout(resolve, 3000));

    const reward = crate.contents;
    setOpenedReward(reward);
    setIsOpening(false);
  };

  const closeModal = () => {
    setSelectedCrate(null);
    setIsOpening(false);
    setOpenedReward(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold tech-font neon-text mb-4">
          LOOT VAULT
        </h1>
        <p className="text-text-secondary text-lg">
          Unlock mystical crates filled with $SWAP tokens, XP boosts, and exclusive cosmetics
        </p>
      </motion.div>

      {/* Vault Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="gamefi-card text-center">
          <Gift className="h-8 w-8 text-neon-blue mx-auto mb-2" />
          <div className="text-2xl font-bold pixel-font text-neon-blue">
            {lootCrates.reduce((sum, crate) => sum + crate.owned, 0)}
          </div>
          <div className="text-sm text-text-secondary">Total Crates</div>
        </div>
        
        <div className="gamefi-card text-center">
          <Sparkles className="h-8 w-8 text-neon-purple mx-auto mb-2" />
          <div className="text-2xl font-bold pixel-font text-neon-purple">42</div>
          <div className="text-sm text-text-secondary">Opened Today</div>
        </div>
        
        <div className="gamefi-card text-center">
          <Star className="h-8 w-8 text-neon-orange mx-auto mb-2" />
          <div className="text-2xl font-bold pixel-font text-neon-orange">127</div>
          <div className="text-sm text-text-secondary">Rare Items</div>
        </div>
        
        <div className="gamefi-card text-center">
          <Zap className="h-8 w-8 text-neon-green mx-auto mb-2" />
          <div className="text-2xl font-bold pixel-font text-neon-green">+250%</div>
          <div className="text-sm text-text-secondary">Lucky Streak</div>
        </div>
      </motion.div>

      {/* Crate Grid */}
      <div className="loot-vault-grid">
        {lootCrates.map((crate, index) => {
          const style = getCrateStyle(crate.type);
          
          return (
            <motion.div
              key={crate.id}
              className="loot-crate-card loot-crate"
              style={{ 
                borderColor: style.borderColor,
                boxShadow: `0 0 20px ${style.glowColor}`
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openCrate(crate)}
            >
              {/* Crate Icon */}
              <div className="relative mb-4">
                <motion.div
                  className={`w-20 h-20 mx-auto bg-gradient-to-br ${style.bgGradient} rounded-lg flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px ${style.glowColor}`
                  }}
                >
                  {crate.owned > 0 ? (
                    <Unlock className="h-10 w-10 text-white" />
                  ) : (
                    <Lock className="h-10 w-10 text-gray-400" />
                  )}
                </motion.div>
                
                {crate.owned > 0 && (
                  <div className="absolute -top-2 -right-2 bg-neon-orange text-bg-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {crate.owned}
                  </div>
                )}
              </div>

              {/* Crate Info */}
              <h3 className="text-lg font-bold tech-font mb-2" style={{ color: style.borderColor }}>
                {crate.name}
              </h3>
              
              <p className="text-sm text-text-secondary mb-4">
                {crate.description}
              </p>

              {/* Rarity */}
              <div className="mb-4">
                <div className="text-xs text-text-secondary mb-1">Drop Rate</div>
                <div className="w-full bg-bg-secondary rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-neon-orange to-neon-pink"
                    style={{ width: `${crate.rarity}%` }}
                  />
                </div>
                <div className="text-xs mt-1" style={{ color: style.borderColor }}>
                  {crate.rarity}% Chance
                </div>
              </div>

              {/* Contents Preview */}
              <div className="space-y-1 text-xs">
                {crate.contents.swapTokens && (
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">$SWAP Tokens:</span>
                    <span className="text-neon-green font-bold">
                      {crate.contents.swapTokens}
                    </span>
                  </div>
                )}
                {crate.contents.xpBoost && (
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">XP Boost:</span>
                    <span className="text-neon-blue font-bold">
                      {crate.contents.xpBoost}x
                    </span>
                  </div>
                )}
                {crate.contents.liquidityBoost && (
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">LP Boost:</span>
                    <span className="text-neon-purple font-bold">
                      {crate.contents.liquidityBoost}x
                    </span>
                  </div>
                )}
              </div>

              {/* Open Button */}
              <motion.button
                className={`gamefi-button w-full mt-4 ${
                  crate.owned === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={crate.owned === 0}
                whileHover={crate.owned > 0 ? { scale: 1.05 } : {}}
                whileTap={crate.owned > 0 ? { scale: 0.95 } : {}}
              >
                {crate.owned > 0 ? 'OPEN CRATE' : 'LOCKED'}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Opening Modal */}
      <AnimatePresence>
        {selectedCrate && (
          <motion.div
            className="fixed inset-0 bg-bg-modal backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="gamefi-card max-w-md w-full mx-4 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {isOpening ? (
                <div className="py-8">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Gift className="h-16 w-16 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold tech-font neon-text mb-2">
                    OPENING CRATE...
                  </h3>
                  <p className="text-text-secondary pixel-font">
                    Decrypting neural pathways...
                  </p>
                </div>
              ) : openedReward ? (
                <div className="py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-neon-green to-neon-blue rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="h-16 w-16 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold tech-font neon-text mb-4">
                    REWARDS UNLOCKED!
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {openedReward.swapTokens && (
                      <div className="flex items-center justify-center space-x-2">
                        <Coins className="h-5 w-5 text-neon-green" />
                        <span className="text-lg font-bold text-neon-green pixel-font">
                          +{openedReward.swapTokens} $SWAP
                        </span>
                      </div>
                    )}
                    {openedReward.xpBoost && (
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="h-5 w-5 text-neon-blue" />
                        <span className="text-lg font-bold text-neon-blue pixel-font">
                          {openedReward.xpBoost}x XP Boost
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <button className="gamefi-button" onClick={closeModal}>
                    COLLECT REWARDS
                  </button>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LootVault;
