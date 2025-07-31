export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'swap' | 'liquidity' | 'referral' | 'daily' | 'weekly';
  requirements: {
    amount?: number;
    count?: number;
    token?: string;
  };
  rewards: {
    xp: number;
    swapTokens?: number;
    lootCrates?: number;
  };
  progress: number;
  maxProgress: number;
  completed: boolean;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
}

export interface User {
  address: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  swapTokenBalance: number;
  totalSwapVolume: number;
  referralCount: number;
  completedQuests: string[];
}

export interface LootCrate {
  id: string;
  type: 'common' | 'rare' | 'epic' | 'legendary';
  name: string;
  description: string;
  contents: {
    swapTokens?: number;
    xpBoost?: number;
    liquidityBoost?: number;
    cosmetic?: string;
  };
  rarity: number;
  owned: number;
}

export interface TokenPair {
  id: string;
  tokenA: Token;
  tokenB: Token;
  reserve0: string;
  reserve1: string;
  totalSupply: string;
  apr: number;
  userLiquidity?: string;
  userShare?: number;
}

export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoUrl: string;
  balance?: string;
  price?: number;
}

export interface SwapQuote {
  tokenIn: Token;
  tokenOut: Token;
  amountIn: string;
  amountOut: string;
  priceImpact: number;
  route: string[];
  fee: string;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  displayName?: string;
  totalVolume: number;
  xp: number;
  level: number;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  referralCount: number;
  avatar?: string;
}

export interface Boost {
  id: string;
  name: string;
  description: string;
  type: 'xp_multiplier' | 'fee_reduction' | 'loot_chance' | 'apr_boost';
  multiplier: number;
  duration: number; // in hours
  cost: number; // in SWAP tokens
  icon: string;
  active: boolean;
  expiresAt?: Date;
}

export interface GameStats {
  totalUsers: number;
  totalVolume: string;
  totalLiquidity: string;
  dailyActiveUsers: number;
  questsCompleted: number;
  lootCratesOpened: number;
}
