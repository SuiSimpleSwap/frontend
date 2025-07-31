import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  Share, 
  Copy,
  Crown,
  Medal,
  Award,
  TrendingUp,
  Zap,
  ExternalLink
} from 'lucide-react';
import { LeaderboardEntry, User } from '../types/gamefi';

const ReferralArena: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'referrals' | 'rewards'>('leaderboard');
  const [copied, setCopied] = useState(false);

  const currentUser: User = {
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

  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      address: '0x789...def',
      displayName: 'CyberWhale',
      totalVolume: 2500000,
      xp: 15750,
      level: 42,
      tier: 'diamond',
      referralCount: 156,
      avatar: '🐋'
    },
    {
      rank: 2,
      address: '0xabc...123',
      displayName: 'NeonTrader',
      totalVolume: 1800000,
      xp: 12500,
      level: 38,
      tier: 'diamond',
      referralCount: 98,
      avatar: '⚡'
    },
    {
      rank: 3,
      address: '0xdef...456',
      displayName: 'QuantumSwap',
      totalVolume: 1200000,
      xp: 9800,
      level: 32,
      tier: 'gold',
      referralCount: 72,
      avatar: '🌟'
    },
    {
      rank: 4,
      address: '0x456...789',
      displayName: 'DeFiNinja',
      totalVolume: 890000,
      xp: 7200,
      level: 28,
      tier: 'gold',
      referralCount: 54,
      avatar: '🥷'
    },
    {
      rank: 15,
      address: currentUser.address,
      displayName: 'You',
      totalVolume: currentUser.totalSwapVolume,
      xp: currentUser.xp,
      level: currentUser.level,
      tier: currentUser.tier,
      referralCount: currentUser.referralCount,
      avatar: '🚀'
    }
  ];

  const referralCode = 'NEON-SWAP-2024';

  const copyReferralLink = () => {
    const link = `https://simpleswap.xyz?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2: return <Medal className="h-6 w-6 text-gray-300" />;
      case 3: return <Award className="h-6 w-6 text-orange-400" />;
      default: return <Trophy className="h-5 w-5 text-neon-blue" />;
    }
  };

  const getRankClass = (rank: number) => {
    switch (rank) {
      case 1: return 'leaderboard-rank first';
      case 2: return 'leaderboard-rank second';
      case 3: return 'leaderboard-rank third';
      default: return 'leaderboard-rank';
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

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return `$${(volume / 1000000).toFixed(2)}M`;
    if (volume >= 1000) return `$${(volume / 1000).toFixed(1)}K`;
    return `$${volume.toFixed(0)}`;
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
          REFERRAL ARENA
        </h1>
        <p className="text-text-secondary text-lg">
          Compete with traders worldwide and earn rewards for building the community
        </p>
      </motion.div>

      {/* User Stats Card */}
      <motion.div
        className="gamefi-card mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">{leaderboard.find(l => l.address === currentUser.address)?.avatar}</span>
            </div>
            <div className="text-2xl font-bold pixel-font text-neon-blue">#{leaderboard.find(l => l.address === currentUser.address)?.rank}</div>
            <div className="text-sm text-text-secondary">Global Rank</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold pixel-font text-neon-green">
              {currentUser.referralCount}
            </div>
            <div className="text-sm text-text-secondary">Referrals</div>
            <div className="text-xs text-neon-green mt-1">+2 this week</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold pixel-font text-neon-purple">
              {formatVolume(currentUser.totalSwapVolume)}
            </div>
            <div className="text-sm text-text-secondary">Volume</div>
            <div className="text-xs text-neon-purple mt-1">+$5.2K today</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold pixel-font text-neon-orange">
              2,450 $SWAP
            </div>
            <div className="text-sm text-text-secondary">Referral Rewards</div>
            <div className="text-xs text-neon-orange mt-1">+125 pending</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        {[
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'referrals', label: 'My Referrals', icon: Users },
          { id: 'rewards', label: 'Rewards', icon: Zap }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium tech-font transition-all ${
              activeTab === tab.id
                ? 'bg-neon-orange text-bg-primary'
                : 'bg-bg-secondary text-text-secondary hover:text-neon-orange'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {activeTab === 'leaderboard' && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {leaderboard.map((entry, index) => (
            <motion.div
              key={entry.address}
              className={`leaderboard-item ${entry.address === currentUser.address ? 'border-neon-orange bg-neon-orange/5' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex items-center space-x-3">
                  <div className={getRankClass(entry.rank)}>
                    {entry.rank}
                  </div>
                  {getRankIcon(entry.rank)}
                </div>

                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                  <span className="text-xl">{entry.avatar}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-bold tech-font text-lg">
                      {entry.displayName || `${entry.address.slice(0, 6)}...${entry.address.slice(-4)}`}
                    </h3>
                    <div className={getTierBadgeClass(entry.tier)}>
                      {entry.tier.toUpperCase()}
                    </div>
                    {entry.address === currentUser.address && (
                      <span className="text-xs bg-neon-orange text-bg-primary px-2 py-1 rounded-full font-bold">
                        YOU
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Level {entry.level} • {entry.xp.toLocaleString()} XP
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-right">
                <div>
                  <div className="text-lg font-bold text-neon-green pixel-font">
                    {formatVolume(entry.totalVolume)}
                  </div>
                  <div className="text-xs text-text-secondary">Total Volume</div>
                </div>
                
                <div>
                  <div className="text-lg font-bold text-neon-purple pixel-font">
                    {entry.referralCount}
                  </div>
                  <div className="text-xs text-text-secondary">Referrals</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === 'referrals' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Referral Link */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-4">
              Your Referral Link
            </h2>
            
            <div className="bg-bg-secondary rounded-lg p-4 border border-neon-blue/30 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-text-secondary mb-1">Referral Code</div>
                  <div className="text-lg font-mono text-neon-blue">{referralCode}</div>
                </div>
                <motion.button
                  onClick={copyReferralLink}
                  className="gamefi-button flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                className="flex items-center justify-center space-x-2 p-4 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Share className="h-5 w-5" />
                <span>Share on Twitter</span>
                <ExternalLink className="h-4 w-4" />
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center space-x-2 p-4 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Share className="h-5 w-5" />
                <span>Share on Discord</span>
                <ExternalLink className="h-4 w-4" />
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center space-x-2 p-4 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Share className="h-5 w-5" />
                <span>Share on Telegram</span>
                <ExternalLink className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          {/* Referral Stats */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Referral Performance
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-green/30">
                <TrendingUp className="h-8 w-8 text-neon-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-green pixel-font">8</div>
                <div className="text-sm text-text-secondary">Active Referrals</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-blue/30">
                <Users className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-blue pixel-font">23</div>
                <div className="text-sm text-text-secondary">Total Referrals</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-purple/30">
                <Trophy className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-purple pixel-font">15%</div>
                <div className="text-sm text-text-secondary">Commission Rate</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-orange/30">
                <Zap className="h-8 w-8 text-neon-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-orange pixel-font">2.5x</div>
                <div className="text-sm text-text-secondary">XP Multiplier</div>
              </div>
            </div>

            {/* Recent Referrals */}
            <div>
              <h3 className="text-lg font-bold tech-font mb-4">Recent Referrals</h3>
              <div className="space-y-3">
                {[
                  { address: '0x123...abc', volume: 2500, reward: 375, time: '2 hours ago' },
                  { address: '0x456...def', volume: 1200, reward: 180, time: '1 day ago' },
                  { address: '0x789...ghi', volume: 850, reward: 127.5, time: '3 days ago' }
                ].map((ref, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-bg-secondary rounded-lg">
                    <div>
                      <div className="font-mono text-neon-blue">{ref.address}</div>
                      <div className="text-xs text-text-secondary">{ref.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-neon-green">${ref.volume} volume</div>
                      <div className="text-xs text-neon-purple">+{ref.reward} $SWAP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'rewards' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Referral Rewards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-bg-secondary rounded-lg border border-neon-green/30">
                <div className="text-center">
                  <Zap className="h-12 w-12 text-neon-green mx-auto mb-4" />
                  <div className="text-3xl font-bold text-neon-green pixel-font mb-2">
                    2,325 $SWAP
                  </div>
                  <div className="text-sm text-text-secondary mb-4">Available to Claim</div>
                  <motion.button
                    className="gamefi-button w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CLAIM REWARDS
                  </motion.button>
                </div>
              </div>

              <div className="p-6 bg-bg-secondary rounded-lg border border-neon-blue/30">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-neon-blue pixel-font mb-2">
                    125 $SWAP
                  </div>
                  <div className="text-sm text-text-secondary mb-4">Pending (24h)</div>
                  <div className="text-xs text-neon-blue">
                    Auto-claimed every 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Tier Benefits */}
            <div>
              <h3 className="text-lg font-bold tech-font mb-4">Tier Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { tier: 'Bronze', commission: '5%', bonus: '1.0x', referrals: '0-4' },
                  { tier: 'Silver', commission: '10%', bonus: '1.5x', referrals: '5-14' },
                  { tier: 'Gold', commission: '15%', bonus: '2.0x', referrals: '15-49', current: true },
                  { tier: 'Diamond', commission: '25%', bonus: '3.0x', referrals: '50+' }
                ].map((tier) => (
                  <div 
                    key={tier.tier} 
                    className={`p-4 rounded-lg border ${
                      tier.current 
                        ? 'border-neon-orange bg-neon-orange/10' 
                        : 'border-gray-600 bg-bg-secondary'
                    }`}
                  >
                    <div className={`text-center ${tier.current ? 'text-neon-orange' : 'text-text-secondary'}`}>
                      <div className="font-bold tech-font mb-2">{tier.tier}</div>
                      <div className="text-sm mb-1">{tier.commission} Commission</div>
                      <div className="text-sm mb-1">{tier.bonus} XP Bonus</div>
                      <div className="text-xs">{tier.referrals} Referrals</div>
                      {tier.current && (
                        <div className="mt-2 text-xs bg-neon-orange text-bg-primary px-2 py-1 rounded-full">
                          CURRENT
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ReferralArena;
