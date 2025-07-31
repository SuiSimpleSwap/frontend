import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import SwapInterface from './components/SwapInterface';
import LiquidityPools from './components/LiquidityPools';
import QuestCenter from './components/QuestCenter';
import LootVault from './components/LootVault';
import ReferralArena from './components/ReferralArena';
import UtilityToken from './components/UtilityToken';
import './styles/globals.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary">
        <Navigation />
        
        <motion.main 
          className="container mx-auto px-4 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Routes>
            <Route path="/" element={<SwapInterface />} />
            <Route path="/liquidity" element={<LiquidityPools />} />
            <Route path="/quests" element={<QuestCenter />} />
            <Route path="/vault" element={<LootVault />} />
            <Route path="/arena" element={<ReferralArena />} />
            <Route path="/utility" element={<UtilityToken />} />
          </Routes>
        </motion.main>

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </Router>
  );
}

export default App;
