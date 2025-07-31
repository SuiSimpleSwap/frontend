# SimpleSwap DEX - GameFi Exchange

A fully-featured GameFi-powered decentralized exchange (DEX) built on the Sui blockchain with a neo-cyberpunk arcade aesthetic.

## 🎮 Features

### Core DeFi Features
- **Swap Interface**: Animated token swapping with $SUI, $USDC, and $SWAP tokens
- **Liquidity Pools**: Provide liquidity to earn fees and farm $SWAP rewards
- **LP Token Staking**: Stake liquidity provider tokens for additional rewards

### GameFi Features
- **Quest System**: Complete daily, weekly, and achievement quests to earn XP and rewards
- **Experience & Leveling**: Gain XP from trading activities and level up your account
- **Tier System**: Progress through Bronze, Silver, Gold, and Diamond tiers
- **LootVault**: Unlock mystical crates containing $SWAP tokens, XP boosts, and cosmetics
- **Referral Arena**: Compete with traders worldwide and earn rewards for referrals
- **Utility Token ($SWAP)**: Power boosts, governance voting, and enhanced rewards

### UI/UX Design
- **Neo-Cyberpunk Theme**: Dark backgrounds with glowing neon lights
- **Pixel Fonts**: VT323 and Orbitron fonts for authentic arcade feel
- **Interactive Elements**: Responsive components that light up and shake on interaction
- **Smooth Animations**: Framer Motion powered transitions and effects

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Custom CSS with cyberpunk theme + Radix UI components
- **Animations**: Framer Motion for smooth transitions
- **Blockchain**: Sui Network integration via @mysten/dapp-kit
- **State Management**: TanStack React Query
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd simpleswapdex

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build the application
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 🎨 Design System

### Color Palette
- **Neon Blue**: `#00ffff` - Primary interactive elements
- **Neon Purple**: `#8a2be2` - Secondary elements and highlights
- **Neon Green**: `#39ff14` - Success states and rewards
- **Neon Pink**: `#ff007f` - Accent colors
- **Neon Orange**: `#ff6600` - Warning states and special features

### Typography
- **VT323**: Pixel font for retro gaming elements
- **Orbitron**: Tech font for headers and important text

### Component Architecture
- `Navigation.tsx` - Main navigation with wallet connection
- `SwapInterface.tsx` - Token swapping with animated feedback
- `QuestCenter.tsx` - Quest management and progress tracking
- `LootVault.tsx` - Loot crate system with opening animations
- `LiquidityPools.tsx` - Liquidity provision and LP staking
- `ReferralArena.tsx` - Referral system and leaderboards
- `UtilityToken.tsx` - $SWAP token utilities and governance

## 🎮 GameFi Features

### Quest System
- **Daily Quests**: Reset every 24 hours
- **Weekly Challenges**: More complex, higher rewards
- **Achievements**: Long-term goals with premium rewards
- **XP Rewards**: Gain experience points from all activities

### Loot System
- **Common Crates**: Basic rewards for new traders
- **Rare Crates**: Enhanced rewards for active traders  
- **Epic Crates**: Premium rewards for elite traders
- **Legendary Crates**: Ultimate rewards for master traders

### Utility Token ($SWAP)
- **Power Boosts**: Temporary enhancements (XP multipliers, fee reductions)
- **Governance**: Vote on protocol upgrades and parameters
- **Staking**: Earn passive income up to 60% APY
- **Loot Access**: Unlock premium crates and exclusive content

## 🔗 Sui Integration

The dApp integrates with the Sui blockchain using:
- **@mysten/dapp-kit** for wallet connections and transactions
- **@mysten/sui** for blockchain interactions
- Support for multiple networks (devnet, testnet, mainnet)

## 🛠 Development

### Project Structure
```
src/
├── components/          # React components
├── styles/             # CSS stylesheets
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

### Key Dependencies
- `framer-motion` - Animations and transitions
- `lucide-react` - Icon components  
- `react-router-dom` - Client-side routing
- `@mysten/dapp-kit` - Sui wallet integration
- `@tanstack/react-query` - Data fetching and caching

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px and above)
- Tablet (768px - 1919px)  
- Mobile (320px - 767px)

## 🎭 Theme Customization

The cyberpunk theme can be customized by modifying CSS variables in `globals.css`:

```css
:root {
  --neon-blue: #00ffff;
  --neon-purple: #8a2be2;
  --neon-green: #39ff14;
  /* ... more variables */
}
```

## 🚀 Deployment

The application can be deployed to any static hosting service:

```bash
# Build for production
pnpm build

# The dist/ folder contains the built application
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced trading features (limit orders, stop-loss)
- [ ] NFT marketplace integration
- [ ] Guild system and team competitions
- [ ] Cross-chain bridge support
- [ ] Advanced analytics dashboard
