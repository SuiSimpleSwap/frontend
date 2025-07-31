import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Coins, 
  Zap, 
  Lock, 
  Unlock,
  TrendingUp,
  Gift,
  Clock,
  Star,
  Flame,
  Shield
} from 'lucide-react';
import { Boost } from '../types/gamefi';

const UtilityToken: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'boosts' | 'staking' | 'governance'>('overview');
  const [swapBalance] = useState(1250);
  const [stakedAmount] = useState(500);

  const boosts: Boost[] = [
    {
      id: 'xp-boost',
      name: 'Neural Accelerator',
      description: 'Double XP gain from all activities',
      type: 'xp_multiplier',
      multiplier: 2.0,
      duration: 24,
      cost: 100,
      icon: '⚡',
      active: true,
      expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000) // 8 hours from now
    },
    {
      id: 'fee-reduction',
      name: 'Quantum Bypass',
      description: 'Reduce trading fees by 50%',
      type: 'fee_reduction',
      multiplier: 0.5,
      duration: 72,
      cost: 250,
      icon: '🛡️',
      active: false
    },
    {
      id: 'loot-chance',
      name: 'Fortune Matrix',
      description: 'Increase loot crate drop chance by 3x',
      type: 'loot_chance',
      multiplier: 3.0,
      duration: 48,
      cost: 200,
      icon: '🎁',
      active: false
    },
    {
      id: 'apr-boost',
      name: 'Yield Amplifier',
      description: 'Boost LP rewards APR by 25%',
      type: 'apr_boost',
      multiplier: 1.25,
      duration: 168, // 1 week
      cost: 500,
      icon: '📈',
      active: false
    }
  ];

  const stakingTiers = [
    { amount: 100, apr: 15, tier: 'Bronze', benefits: 'Basic rewards' },
    { amount: 500, apr: 25, tier: 'Silver', benefits: 'Enhanced rewards + Fee discount' },
    { amount: 1000, apr: 40, tier: 'Gold', benefits: 'Premium rewards + Priority support' },
    { amount: 5000, apr: 60, tier: 'Diamond', benefits: 'Maximum rewards + Governance voting' }
  ];

  const governanceProposals = [
    {
      id: 1,
      title: 'Increase LP Rewards by 20%',
      description: 'Proposal to increase liquidity provider rewards to boost TVL',
      status: 'Active',
      votesFor: 15420,
      votesAgainst: 3250,
      timeLeft: '5 days',
      requiredTokens: 1000
    },
    {
      id: 2,
      title: 'Add New Trading Pair: SWAP/BTC',
      description: 'Community proposal to add Bitcoin trading pair',
      status: 'Pending',
      votesFor: 8750,
      votesAgainst: 1200,
      timeLeft: '12 days',
      requiredTokens: 1000
    }
  ];

  const activateBoost = (boostId: string) => {
    console.log(`Activating boost: ${boostId}`);
    // Implementation would go here
  };

  const formatTimeLeft = (expiresAt: Date) => {
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const getBoostColor = (type: string) => {
    switch (type) {
      case 'xp_multiplier': return 'text-neon-blue';
      case 'fee_reduction': return 'text-neon-green';
      case 'loot_chance': return 'text-neon-purple';
      case 'apr_boost': return 'text-neon-orange';
      default: return 'text-neon-blue';
    }
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
          $SWAP UTILITY HUB
        </h1>
        <p className="text-text-secondary text-lg">
          Maximize your trading experience with $SWAP token utilities
        </p>
      </motion.div>

      {/* Balance Card */}
      <motion.div
        className="utility-panel mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Coins className="h-16 w-16 text-neon-orange mx-auto mb-4" />
            <div className="text-3xl font-bold pixel-font text-neon-orange mb-2">
              {swapBalance.toLocaleString()} $SWAP
            </div>
            <div className="text-sm text-text-secondary">Available Balance</div>
          </div>
          
          <div className="text-center">
            <Lock className="h-16 w-16 text-neon-purple mx-auto mb-4" />
            <div className="text-3xl font-bold pixel-font text-neon-purple mb-2">
              {stakedAmount.toLocaleString()} $SWAP
            </div>
            <div className="text-sm text-text-secondary">Staked Amount</div>
          </div>
          
          <div className="text-center">
            <TrendingUp className="h-16 w-16 text-neon-green mx-auto mb-4" />
            <div className="text-3xl font-bold pixel-font text-neon-green mb-2">
              25% APY
            </div>
            <div className="text-sm text-text-secondary">Current Staking APY</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        {[
          { id: 'overview', label: 'Overview', icon: Coins },
          { id: 'boosts', label: 'Power Boosts', icon: Zap },
          { id: 'staking', label: 'Staking', icon: Lock },
          { id: 'governance', label: 'Governance', icon: Shield }
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

      {activeTab === 'overview' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Token Stats */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Token Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-blue/30">
                <div className="text-2xl font-bold text-neon-blue pixel-font">$0.45</div>
                <div className="text-sm text-text-secondary">Current Price</div>
                <div className="text-xs text-neon-green mt-1">+12.5% (24h)</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-green/30">
                <div className="text-2xl font-bold text-neon-green pixel-font">$4.5M</div>
                <div className="text-sm text-text-secondary">Market Cap</div>
                <div className="text-xs text-neon-green mt-1">Rank #245</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-purple/30">
                <div className="text-2xl font-bold text-neon-purple pixel-font">10M</div>
                <div className="text-sm text-text-secondary">Total Supply</div>
                <div className="text-xs text-text-secondary mt-1">Fixed Supply</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-orange/30">
                <div className="text-2xl font-bold text-neon-orange pixel-font">65%</div>
                <div className="text-sm text-text-secondary">Circulating</div>
                <div className="text-xs text-text-secondary mt-1">6.5M Tokens</div>
              </div>
            </div>
          </div>

          {/* Utility Features */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Utility Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Power Boosts',
                  description: 'Activate temporary boosts for enhanced rewards and reduced fees',
                  color: 'text-neon-blue'
                },
                {
                  icon: Lock,
                  title: 'Staking Rewards',
                  description: 'Stake $SWAP tokens to earn passive income up to 60% APY',
                  color: 'text-neon-purple'
                },
                {
                  icon: Gift,
                  title: 'Loot Crates',
                  description: 'Use tokens to unlock premium loot crates with rare rewards',
                  color: 'text-neon-green'
                },
                {
                  icon: Shield,
                  title: 'Governance Rights',
                  description: 'Vote on protocol upgrades and earn governance rewards',
                  color: 'text-neon-orange'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-bg-secondary rounded-lg border border-gray-600 hover:border-neon-blue transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <h3 className="text-lg font-bold tech-font mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'boosts' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Active Boosts */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Active Boosts
            </h2>
            
            {boosts.filter(boost => boost.active).length > 0 ? (
              <div className="space-y-4">
                {boosts.filter(boost => boost.active).map((boost) => (
                  <div key={boost.id} className="p-4 bg-bg-secondary rounded-lg border border-neon-green">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{boost.icon}</div>
                        <div>
                          <h3 className="font-bold tech-font text-lg">{boost.name}</h3>
                          <p className="text-text-secondary text-sm">{boost.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold text-neon-green pixel-font">
                          {boost.multiplier}x
                        </div>
                        <div className="text-xs text-neon-green">
                          {boost.expiresAt && formatTimeLeft(boost.expiresAt)} left
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-text-secondary">
                <Zap className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>No active boosts. Activate some below to enhance your experience!</p>
              </div>
            )}
          </div>

          {/* Available Boosts */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Available Boosts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boosts.filter(boost => !boost.active).map((boost) => (
                <motion.div
                  key={boost.id}
                  className="p-6 bg-bg-secondary rounded-lg border border-gray-600 hover:border-neon-orange transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{boost.icon}</div>
                    <h3 className="text-xl font-bold tech-font mb-2">{boost.name}</h3>
                    <p className="text-text-secondary text-sm mb-4">{boost.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Effect:</span>
                      <span className={`font-bold pixel-font ${getBoostColor(boost.type)}`}>
                        {boost.multiplier}x
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Duration:</span>
                      <span className="text-neon-blue">{boost.duration}h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Cost:</span>
                      <span className="text-neon-orange font-bold">
                        {boost.cost} $SWAP
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => activateBoost(boost.id)}
                    disabled={swapBalance < boost.cost}
                    className={`boost-button w-full ${
                      swapBalance < boost.cost ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    whileHover={swapBalance >= boost.cost ? { scale: 1.05 } : {}}
                    whileTap={swapBalance >= boost.cost ? { scale: 0.95 } : {}}
                  >
                    {swapBalance < boost.cost ? 'Insufficient Balance' : 'Activate Boost'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'staking' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Current Staking Position */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Your Staking Position
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-purple/30">
                <Lock className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-purple pixel-font">
                  {stakedAmount.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">$SWAP Staked</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-green/30">
                <TrendingUp className="h-8 w-8 text-neon-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-green pixel-font">25%</div>
                <div className="text-sm text-text-secondary">Current APY</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-orange/30">
                <Coins className="h-8 w-8 text-neon-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-orange pixel-font">
                  34.2
                </div>
                <div className="text-sm text-text-secondary">Pending Rewards</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="Amount to stake"
                className="token-input flex-1"
              />
              <motion.button
                className="gamefi-button px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                STAKE
              </motion.button>
              <motion.button
                className="boost-button px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HARVEST
              </motion.button>
            </div>
          </div>

          {/* Staking Tiers */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Staking Tiers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stakingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg border text-center ${
                    stakedAmount >= tier.amount
                      ? 'border-neon-gold bg-neon-gold/10'
                      : 'border-gray-600 bg-bg-secondary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className={`h-8 w-8 mx-auto mb-4 ${
                    stakedAmount >= tier.amount ? 'text-neon-gold' : 'text-gray-400'
                  }`} />
                  
                  <h3 className="text-lg font-bold tech-font mb-2">{tier.tier}</h3>
                  <div className="text-2xl font-bold pixel-font text-neon-green mb-2">
                    {tier.apr}% APY
                  </div>
                  <div className="text-sm text-text-secondary mb-4">
                    Min: {tier.amount.toLocaleString()} $SWAP
                  </div>
                  <div className="text-xs text-text-secondary">
                    {tier.benefits}
                  </div>
                  
                  {stakedAmount >= tier.amount && (
                    <div className="mt-3 text-xs bg-neon-gold text-bg-primary px-2 py-1 rounded-full">
                      UNLOCKED
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'governance' && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Voting Power */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Your Voting Power
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-blue/30">
                <Shield className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-blue pixel-font">
                  {(stakedAmount * 1.5).toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Voting Power</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-green/30">
                <Clock className="h-8 w-8 text-neon-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-green pixel-font">3</div>
                <div className="text-sm text-text-secondary">Votes Cast</div>
              </div>
              
              <div className="text-center p-4 bg-bg-secondary rounded-lg border border-neon-purple/30">
                <Flame className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-neon-purple pixel-font">125</div>
                <div className="text-sm text-text-secondary">Governance Rewards</div>
              </div>
            </div>
          </div>

          {/* Active Proposals */}
          <div className="gamefi-card">
            <h2 className="text-2xl font-bold tech-font neon-text mb-6">
              Active Proposals
            </h2>
            
            <div className="space-y-6">
              {governanceProposals.map((proposal) => (
                <div key={proposal.id} className="p-6 bg-bg-secondary rounded-lg border border-gray-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold tech-font">{proposal.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          proposal.status === 'Active' 
                            ? 'bg-neon-green text-bg-primary' 
                            : 'bg-neon-orange text-bg-primary'
                        }`}>
                          {proposal.status}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm mb-4">{proposal.description}</p>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-sm text-text-secondary mb-1">Time Left</div>
                      <div className="text-lg font-bold text-neon-orange pixel-font">
                        {proposal.timeLeft}
                      </div>
                    </div>
                  </div>

                  {/* Voting Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neon-green">For: {proposal.votesFor.toLocaleString()}</span>
                      <span className="text-neon-orange">Against: {proposal.votesAgainst.toLocaleString()}</span>
                    </div>
                    
                    <div className="w-full bg-bg-tertiary rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-neon-green to-neon-blue h-3 rounded-full"
                        style={{ 
                          width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      className="gamefi-button flex-1 py-2"
                      disabled={stakedAmount < proposal.requiredTokens}
                      whileHover={stakedAmount >= proposal.requiredTokens ? { scale: 1.05 } : {}}
                      whileTap={stakedAmount >= proposal.requiredTokens ? { scale: 0.95 } : {}}
                    >
                      VOTE FOR
                    </motion.button>
                    
                    <motion.button
                      className="bg-bg-tertiary border border-neon-orange text-neon-orange py-2 px-6 rounded-lg font-bold tech-font hover:bg-neon-orange hover:text-bg-primary transition-all flex-1"
                      disabled={stakedAmount < proposal.requiredTokens}
                      whileHover={stakedAmount >= proposal.requiredTokens ? { scale: 1.05 } : {}}
                      whileTap={stakedAmount >= proposal.requiredTokens ? { scale: 0.95 } : {}}
                    >
                      VOTE AGAINST
                    </motion.button>
                  </div>

                  {stakedAmount < proposal.requiredTokens && (
                    <div className="mt-3 text-center text-sm text-neon-orange">
                      Minimum {proposal.requiredTokens} $SWAP required to vote
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UtilityToken;
