import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Plus, 
  Minus, 
  TrendingUp,
  Info,
  Zap,
  Lock
} from 'lucide-react';
import { TokenPair, Token } from '../types/gamefi';

const LiquidityPools: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'pools' | 'manage' | 'stake'>('pools');
  const [selectedPair, setSelectedPair] = useState<TokenPair | null>(null);

  const tokens: Token[] = [
    {
      symbol: 'SUI',
      name: 'Sui',
      address: '0x2::sui::SUI',
      decimals: 9,
      logoUrl: '/tokens/sui.png',
      balance: '1000.0',
      price: 1.85
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      address: '0x2::usdc::USDC',
      decimals: 6,
      logoUrl: '/tokens/usdc.png',
      balance: '500.0',
      price: 1.0
    },
    {
      symbol: 'SWAP',
      name: 'SimpleSwap Token',
      address: '0x2::swap::SWAP',
      decimals: 9,
      logoUrl: '/tokens/swap.png',
      balance: '250.0',
      price: 0.45
    }
  ];

  const liquidityPairs: TokenPair[] = [
    {
      id: 'sui-usdc',
      tokenA: tokens[0],
      tokenB: tokens[1],
      reserve0: '50000.123456789',
      reserve1: '92500.000000',
      totalSupply: '2154.987654321',
      apr: 12.5,
      userLiquidity: '125.456789123',
      userShare: 5.82
    },
    {
      id: 'sui-swap',
      tokenA: tokens[0],
      tokenB: tokens[2],
      reserve0: '25000.987654321',
      reserve1: '102777.777777778',
      totalSupply: '1624.123456789',
      apr: 24.8,
      userLiquidity: '0',
      userShare: 0
    },
    {
      id: 'usdc-swap',
      tokenA: tokens[1],
      tokenB: tokens[2],
      reserve0: '30000.000000',
      reserve1: '66666.666666667',
      totalSupply: '1421.356789123',
      apr: 18.3,
      userLiquidity: '45.789123456',
      userShare: 3.22
    }
  ];

  const [amounts, setAmounts] = useState({ tokenA: '', tokenB: '' });
  const [isAdding, setIsAdding] = useState(true);

  const handleAmountChange = (token: 'tokenA' | 'tokenB', value: string) => {
    setAmounts(prev => ({ ...prev, [token]: value }));
    
    if (selectedPair && value) {
      const ratio = parseFloat(selectedPair.reserve1) / parseFloat(selectedPair.reserve0);
      if (token === 'tokenA') {
        setAmounts(prev => ({ ...prev, tokenB: (parseFloat(value) * ratio).toFixed(6) }));
      } else {
        setAmounts(prev => ({ ...prev, tokenA: (parseFloat(value) / ratio).toFixed(6) }));
      }
    }
  };

  const calculateTVL = (pair: TokenPair) => {
    const valueA = parseFloat(pair.reserve0) * (pair.tokenA.price || 0);
    const valueB = parseFloat(pair.reserve1) * (pair.tokenB.price || 0);
    return valueA + valueB;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
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
          LIQUIDITY NEXUS
        </h1>
        <p className="text-text-secondary text-lg">
          Provide liquidity to earn fees and farm $SWAP rewards
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        {[
          { id: 'pools', label: 'All Pools', icon: Droplets },
          { id: 'manage', label: 'Manage Position', icon: Plus },
          { id: 'stake', label: 'LP Staking', icon: Lock }
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id as any)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium tech-font transition-all ${
              selectedTab === tab.id
                ? 'bg-neon-purple text-bg-primary'
                : 'bg-bg-secondary text-text-secondary hover:text-neon-purple'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {selectedTab === 'pools' && (
        <div className="space-y-4">
          {liquidityPairs.map((pair, index) => (
            <motion.div
              key={pair.id}
              className="pool-pair"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedPair(pair);
                setSelectedTab('manage');
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Token Pair Icons */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-12 h-12 bg-neon-blue rounded-full border-2 border-bg-primary flex items-center justify-center">
                      <span className="font-bold text-sm">{pair.tokenA.symbol}</span>
                    </div>
                    <div className="w-12 h-12 bg-neon-green rounded-full border-2 border-bg-primary flex items-center justify-center">
                      <span className="font-bold text-sm">{pair.tokenB.symbol}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tech-font">
                      {pair.tokenA.symbol}/{pair.tokenB.symbol}
                    </h3>
                    <div className="text-sm text-text-secondary">
                      TVL: {formatNumber(calculateTVL(pair))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-lg font-bold text-neon-green pixel-font">
                      {pair.apr}%
                    </div>
                    <div className="text-xs text-text-secondary">APR</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-neon-blue pixel-font">
                      {parseFloat(pair.userLiquidity || '0') > 0 
                        ? formatNumber(parseFloat(pair.userLiquidity || '0')) 
                        : '$0'}
                    </div>
                    <div className="text-xs text-text-secondary">Your Liquidity</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-bold text-neon-purple pixel-font">
                      {pair.userShare?.toFixed(2) || '0.00'}%
                    </div>
                    <div className="text-xs text-text-secondary">Pool Share</div>
                  </div>
                </div>
              </div>

              {/* Pool Stats */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      {pair.tokenA.symbol} Reserve:
                    </span>
                    <span className="text-neon-blue font-mono">
                      {parseFloat(pair.reserve0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      {pair.tokenB.symbol} Reserve:
                    </span>
                    <span className="text-neon-green font-mono">
                      {parseFloat(pair.reserve1).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedTab === 'manage' && selectedPair && (
        <motion.div
          className="gamefi-card max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tech-font neon-text">
              {selectedPair.tokenA.symbol}/{selectedPair.tokenB.symbol}
            </h2>
            
            <div className="flex space-x-2">
              <motion.button
                onClick={() => setIsAdding(true)}
                className={`px-4 py-2 rounded-lg font-medium tech-font ${
                  isAdding 
                    ? 'bg-neon-green text-bg-primary' 
                    : 'bg-bg-secondary text-text-secondary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Plus className="h-4 w-4 inline mr-1" />
                Add
              </motion.button>
              <motion.button
                onClick={() => setIsAdding(false)}
                className={`px-4 py-2 rounded-lg font-medium tech-font ${
                  !isAdding 
                    ? 'bg-neon-orange text-bg-primary' 
                    : 'bg-bg-secondary text-text-secondary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Minus className="h-4 w-4 inline mr-1" />
                Remove
              </motion.button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                {selectedPair.tokenA.symbol} Amount
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={amounts.tokenA}
                  onChange={(e) => handleAmountChange('tokenA', e.target.value)}
                  placeholder="0.0"
                  className="token-input flex-1"
                />
                <div className="token-selector">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-neon-blue rounded-full"></div>
                    <span>{selectedPair.tokenA.symbol}</span>
                  </div>
                </div>
              </div>
              <div className="mt-1 text-xs text-text-secondary">
                Balance: {selectedPair.tokenA.balance} {selectedPair.tokenA.symbol}
              </div>
            </div>

            <div className="flex justify-center">
              <Plus className="h-6 w-6 text-neon-purple" />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                {selectedPair.tokenB.symbol} Amount
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  value={amounts.tokenB}
                  onChange={(e) => handleAmountChange('tokenB', e.target.value)}
                  placeholder="0.0"
                  className="token-input flex-1"
                />
                <div className="token-selector">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-neon-green rounded-full"></div>
                    <span>{selectedPair.tokenB.symbol}</span>
                  </div>
                </div>
              </div>
              <div className="mt-1 text-xs text-text-secondary">
                Balance: {selectedPair.tokenB.balance} {selectedPair.tokenB.symbol}
              </div>
            </div>
          </div>

          {/* Pool Information */}
          <div className="bg-bg-secondary rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="h-4 w-4 text-neon-blue" />
              <span className="font-medium">Pool Information</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Current APR:</span>
                <span className="text-neon-green font-bold">{selectedPair.apr}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Pool Share:</span>
                <span className="text-neon-blue">{selectedPair.userShare?.toFixed(4)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Trading Fee:</span>
                <span className="text-text-secondary">0.3%</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            className="gamefi-button w-full py-4 text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center space-x-2">
              {isAdding ? (
                <>
                  <Droplets className="h-5 w-5" />
                  <span>ADD LIQUIDITY</span>
                </>
              ) : (
                <>
                  <Minus className="h-5 w-5" />
                  <span>REMOVE LIQUIDITY</span>
                </>
              )}
            </div>
          </motion.button>

          {/* Rewards Info */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-green/30">
              <div className="text-lg font-bold text-neon-green pixel-font">+15 XP</div>
              <div className="text-xs text-text-secondary">Per Transaction</div>
            </div>
            <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-purple/30">
              <div className="text-lg font-bold text-neon-purple pixel-font">2.5%</div>
              <div className="text-xs text-text-secondary">$SWAP Bonus APR</div>
            </div>
          </div>
        </motion.div>
      )}

      {selectedTab === 'stake' && (
        <motion.div
          className="gamefi-card max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tech-font neon-text mb-4">
              LP TOKEN STAKING
            </h2>
            <p className="text-text-secondary">
              Stake your LP tokens to earn additional $SWAP rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liquidityPairs.filter(pair => parseFloat(pair.userLiquidity || '0') > 0).map((pair) => (
              <div key={pair.id} className="bg-bg-secondary rounded-lg p-6 border border-neon-purple/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold tech-font">
                    {pair.tokenA.symbol}/{pair.tokenB.symbol} LP
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-neon-orange" />
                    <span className="text-neon-orange font-bold pixel-font">
                      {(pair.apr * 1.5).toFixed(1)}% APY
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Available to Stake:</span>
                    <span className="text-neon-blue font-mono">
                      {parseFloat(pair.userLiquidity || '0').toFixed(6)} LP
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Currently Staked:</span>
                    <span className="text-neon-green font-mono">0.000000 LP</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Pending Rewards:</span>
                    <span className="text-neon-purple font-mono">0.000 $SWAP</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="0.0"
                    className="token-input w-full"
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      className="gamefi-button py-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      STAKE
                    </motion.button>
                    <motion.button
                      className="bg-bg-tertiary border border-neon-orange text-neon-orange py-2 px-4 rounded-lg font-bold tech-font text-sm hover:bg-neon-orange hover:text-bg-primary transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      HARVEST
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LiquidityPools;
