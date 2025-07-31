import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpDown, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { Token, SwapQuote } from '../types/gamefi';

const SwapInterface: React.FC = () => {
  const [tokenIn, setTokenIn] = useState<Token>({
    symbol: 'SUI',
    name: 'Sui',
    address: '0x2::sui::SUI',
    decimals: 9,
    logoUrl: '/tokens/sui.png',
    balance: '1000.0'
  });

  const [tokenOut, setTokenOut] = useState<Token>({
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x2::usdc::USDC',
    decimals: 6,
    logoUrl: '/tokens/usdc.png',
    balance: '500.0'
  });

  const [amountIn, setAmountIn] = useState('');
  const [amountOut, setAmountOut] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapQuote, setSwapQuote] = useState<SwapQuote | null>(null);
  const [slippage, setSlippage] = useState(0.5);

  const availableTokens: Token[] = [
    tokenIn,
    tokenOut,
    {
      symbol: 'SWAP',
      name: 'SimpleSwap Token',
      address: '0x2::swap::SWAP',
      decimals: 9,
      logoUrl: '/tokens/swap.png',
      balance: '250.0'
    }
  ];

  const handleSwapTokens = () => {
    const temp = tokenIn;
    setTokenIn(tokenOut);
    setTokenOut(temp);
    setAmountIn(amountOut);
    setAmountOut(amountIn);
  };

  const handleSwap = async () => {
    setIsSwapping(true);
    // Simulate swap animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSwapping(false);
    setAmountIn('');
    setAmountOut('');
  };

  const calculateQuote = (amount: string) => {
    if (!amount || isNaN(Number(amount))) {
      setAmountOut('');
      setSwapQuote(null);
      return;
    }

    // Mock quote calculation
    const rate = 1.85; // SUI to USDC rate
    const output = (Number(amount) * rate * (1 - slippage / 100)).toFixed(6);
    setAmountOut(output);

    setSwapQuote({
      tokenIn,
      tokenOut,
      amountIn: amount,
      amountOut: output,
      priceImpact: 0.05,
      route: [tokenIn.symbol, tokenOut.symbol],
      fee: '0.3'
    });
  };

  useEffect(() => {
    calculateQuote(amountIn);
  }, [amountIn, tokenIn, tokenOut, slippage]);

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="swap-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tech-font neon-text">
            NEURAL SWAP
          </h2>
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-neon-orange animate-pulse" />
            <span className="pixel-font text-neon-orange">ACTIVE</span>
          </div>
        </div>

        {/* Token Input */}
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-text-secondary mb-2 tech-font">
              FROM
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                value={amountIn}
                onChange={(e) => setAmountIn(e.target.value)}
                placeholder="0.0"
                className="token-input flex-1"
              />
              <motion.button
                className="token-selector hover-shake"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-neon-blue rounded-full"></div>
                  <span>{tokenIn.symbol}</span>
                </div>
              </motion.button>
            </div>
            <div className="mt-1 text-xs text-text-secondary">
              Balance: {tokenIn.balance} {tokenIn.symbol}
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center">
            <motion.button
              onClick={handleSwapTokens}
              className="swap-arrow p-3 bg-bg-secondary rounded-full border border-neon-orange hover-shake"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpDown className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Token Output */}
          <div className="relative">
            <label className="block text-sm font-medium text-text-secondary mb-2 tech-font">
              TO
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                value={amountOut}
                readOnly
                placeholder="0.0"
                className="token-input flex-1 opacity-80"
              />
              <motion.button
                className="token-selector hover-shake"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-neon-green rounded-full"></div>
                  <span>{tokenOut.symbol}</span>
                </div>
              </motion.button>
            </div>
            <div className="mt-1 text-xs text-text-secondary">
              Balance: {tokenOut.balance} {tokenOut.symbol}
            </div>
          </div>
        </div>

        {/* Quote Information */}
        <AnimatePresence>
          {swapQuote && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-3 bg-bg-secondary rounded-lg border border-neon-blue/30"
            >
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Rate:</span>
                  <span className="text-neon-blue">
                    1 {tokenIn.symbol} = {(Number(amountOut) / Number(amountIn)).toFixed(4)} {tokenOut.symbol}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Price Impact:</span>
                  <span className="text-neon-green">&lt; 0.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Fee:</span>
                  <span className="text-text-secondary">0.3%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slippage Settings */}
        <div className="mt-4 p-3 bg-bg-secondary rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">Slippage Tolerance</span>
            <AlertCircle className="h-4 w-4 text-neon-orange" />
          </div>
          <div className="flex space-x-2">
            {[0.1, 0.5, 1.0].map((value) => (
              <button
                key={value}
                onClick={() => setSlippage(value)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  slippage === value
                    ? 'bg-neon-blue text-bg-primary'
                    : 'bg-bg-tertiary text-text-secondary hover:text-neon-blue'
                }`}
              >
                {value}%
              </button>
            ))}
          </div>
        </div>

        {/* Swap Button */}
        <motion.button
          onClick={handleSwap}
          disabled={!amountIn || !amountOut || isSwapping}
          className="gamefi-button w-full mt-6 py-4 text-lg disabled:opacity-50"
          whileHover={{ scale: isSwapping ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center space-x-2">
            {isSwapping ? (
              <>
                <div className="loading-spinner w-5 h-5"></div>
                <span>PROCESSING SWAP...</span>
              </>
            ) : (
              <>
                <TrendingUp className="h-5 w-5" />
                <span>EXECUTE SWAP</span>
              </>
            )}
          </div>
        </motion.button>

        {/* GameFi Stats */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-green/30">
            <div className="text-lg font-bold text-neon-green pixel-font">+25 XP</div>
            <div className="text-xs text-text-secondary">Per Swap</div>
          </div>
          <div className="text-center p-3 bg-bg-secondary rounded-lg border border-neon-purple/30">
            <div className="text-lg font-bold text-neon-purple pixel-font">5% APY</div>
            <div className="text-xs text-text-secondary">SWAP Rewards</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SwapInterface;
