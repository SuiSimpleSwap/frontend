import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Star, 
  Gift, 
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react';
import { Quest, User } from '../types/gamefi';

const QuestCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'achievements'>('daily');
  
  // Mock user data
  const user: User = {
    address: '0x123...abc',
    level: 15,
    xp: 2750,
    xpToNextLevel: 250,
    tier: 'gold',
    swapTokenBalance: 1250,
    totalSwapVolume: 45000,
    referralCount: 8,
    completedQuests: ['quest-1', 'quest-3']
  };

  const quests: Quest[] = [
    {
      id: 'daily-1',
      title: 'First Swap of the Day',
      description: 'Complete your first swap transaction today',
      type: 'daily',
      requirements: { count: 1 },
      rewards: { xp: 50, swapTokens: 10 },
      progress: 1,
      maxProgress: 1,
      completed: true,
      tier: 'bronze'
    },
    {
      id: 'daily-2',
      title: 'Volume Trader',
      description: 'Execute swaps worth at least 100 SUI',
      type: 'daily',
      requirements: { amount: 100 },
      rewards: { xp: 100, swapTokens: 25 },
      progress: 65,
      maxProgress: 100,
      completed: false,
      tier: 'silver'
    },
    {
      id: 'weekly-1',
      title: 'Liquidity Provider',
      description: 'Provide liquidity to any pool',
      type: 'weekly',
      requirements: { count: 1 },
      rewards: { xp: 200, swapTokens: 50, lootCrates: 1 },
      progress: 0,
      maxProgress: 1,
      completed: false,
      tier: 'gold'
    },
    {
      id: 'achievement-1',
      title: 'Master Swapper',
      description: 'Complete 1000 successful swaps',
      type: 'swap',
      requirements: { count: 1000 },
      rewards: { xp: 1000, swapTokens: 500, lootCrates: 5 },
      progress: 342,
      maxProgress: 1000,
      completed: false,
      tier: 'diamond'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze': return 'text-orange-400';
      case 'silver': return 'text-gray-300';
      case 'gold': return 'text-yellow-400';
      case 'diamond': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  const getTierBadgeClass = (tier: string) => {
    switch (tier) {
      case 'bronze': return 'tier-badge tier-bronze';
      case 'silver': return 'tier-badge tier-silver';
      case 'gold': return 'tier-badge tier-gold';
      case 'diamond': return 'tier-badge tier-diamond';
      default: return 'tier-badge tier-bronze';
    }
  };

  const filteredQuests = quests.filter(quest => {
    if (activeTab === 'daily') return quest.type === 'daily';
    if (activeTab === 'weekly') return quest.type === 'weekly';
    return quest.type !== 'daily' && quest.type !== 'weekly';
  });

  const xpPercentage = (user.xp / (user.xp + user.xpToNextLevel)) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* User Progress Header */}
      <motion.div
        className="quest-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-bg-primary rounded-full px-2 py-1">
                <span className="text-xs font-bold pixel-font text-neon-orange">
                  LVL {user.level}
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tech-font neon-text">
                QUEST TERMINAL
              </h2>
              <div className={getTierBadgeClass(user.tier)}>
                {user.tier.toUpperCase()}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold pixel-font text-neon-green">
              {user.swapTokenBalance} $SWAP
            </div>
            <div className="text-sm text-text-secondary">
              Available Tokens
            </div>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium tech-font">
              Experience Points
            </span>
            <span className="text-sm text-neon-blue pixel-font">
              {user.xp} / {user.xp + user.xpToNextLevel} XP
            </span>
          </div>
          <div className="xp-bar h-3">
            <motion.div
              className="xp-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${xpPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-blue/30">
            <div className="text-lg font-bold text-neon-blue pixel-font">
              ${user.totalSwapVolume.toLocaleString()}
            </div>
            <div className="text-xs text-text-secondary">Total Volume</div>
          </div>
          <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-purple/30">
            <div className="text-lg font-bold text-neon-purple pixel-font">
              {user.referralCount}
            </div>
            <div className="text-xs text-text-secondary">Referrals</div>
          </div>
          <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-green/30">
            <div className="text-lg font-bold text-neon-green pixel-font">
              {user.completedQuests.length}
            </div>
            <div className="text-xs text-text-secondary">Completed</div>
          </div>
        </div>
      </motion.div>

      {/* Quest Tabs */}
      <div className="flex space-x-4">
        {[
          { id: 'daily', label: 'Daily Quests', icon: Clock },
          { id: 'weekly', label: 'Weekly Challenges', icon: Target },
          { id: 'achievements', label: 'Achievements', icon: Star }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium tech-font transition-all ${
              activeTab === tab.id
                ? 'bg-neon-blue text-bg-primary'
                : 'bg-bg-secondary text-text-secondary hover:text-neon-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Quest List */}
      <div className="space-y-4">
        {filteredQuests.map((quest, index) => (
          <motion.div
            key={quest.id}
            className={`quest-item ${quest.completed ? 'quest-complete' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${quest.completed ? 'bg-neon-blue/20' : 'bg-bg-tertiary'}`}>
                  {quest.completed ? (
                    <CheckCircle className="h-6 w-6 text-neon-blue" />
                  ) : (
                    <Target className="h-6 w-6 text-neon-orange" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold tech-font text-lg">
                      {quest.title}
                    </h3>
                    <div className={getTierBadgeClass(quest.tier)}>
                      {quest.tier.toUpperCase()}
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">
                    {quest.description}
                  </p>
                  
                  {/* Progress Bar */}
                  {!quest.completed && (
                    <div className="w-full bg-bg-tertiary rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-neon-orange to-neon-pink h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(quest.progress / quest.maxProgress) * 100}%` }}
                      />
                    </div>
                  )}
                  
                  <div className="text-xs text-text-secondary">
                    Progress: {quest.progress} / {quest.maxProgress}
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-neon-green" />
                  <span className="text-neon-green font-bold pixel-font">
                    +{quest.rewards.xp} XP
                  </span>
                </div>
                
                {quest.rewards.swapTokens && (
                  <div className="flex items-center space-x-2">
                    <Gift className="h-4 w-4 text-neon-purple" />
                    <span className="text-neon-purple font-bold pixel-font">
                      +{quest.rewards.swapTokens} $SWAP
                    </span>
                  </div>
                )}
                
                {quest.rewards.lootCrates && (
                  <div className="flex items-center space-x-2">
                    <Gift className="h-4 w-4 text-neon-orange" />
                    <span className="text-neon-orange font-bold pixel-font">
                      +{quest.rewards.lootCrates} Crates
                    </span>
                  </div>
                )}

                {quest.completed && (
                  <motion.button
                    className="gamefi-button text-xs px-3 py-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CLAIM
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuestCenter;
