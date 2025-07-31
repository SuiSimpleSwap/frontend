"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Wallet,
  Zap,
  Trophy,
  Gift,
  Users,
  Coins,
  ArrowUpDown,
  Plus,
  Star,
  Flame,
  Sparkles,
  Target,
  Crown,
  Gamepad2,
  Volume2,
  Settings,
  Shield,
  Sword,
  Gem,
  Lock,
  Unlock,
  TrendingUp,
  Eye,
  Clock,
  Award,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Rocket,
  Layers,
  BarChart3,
  PieChart,
  Activity,
  Wifi,
  Radio,
  Radar,
  Cpu,
  Headphones
} from "lucide-react"

export default function SimpleSwapGameFiDEX() {
  const [activeTab, setActiveTab] = useState("swap")
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletType, setWalletType] = useState("")
  const [swapAmount, setSwapAmount] = useState("")
  const [fromToken, setFromToken] = useState("SUI")
  const [toToken, setToToken] = useState("USDC")
  const [isSwapping, setIsSwapping] = useState(false)
  const [showTutorial, setShowTutorial] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Game state
  const [gameStats, setGameStats] = useState({
    currentXP: 2450,
    nextLevelXP: 3000,
    level: 12,
    tier: "Silver",
    swapCount: 47,
    totalVolume: 123456.78,
    lootCrates: 3,
    boostActive: false,
    questsCompleted: 15,
    referrals: 8,
    stakingRewards: 234.56
  })

  // Update time every second for cyberpunk clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSwap = async () => {
    if (!walletConnected || !swapAmount) return
    
    setIsSwapping(true)
    // Simulate swap animation
    setTimeout(() => {
      setIsSwapping(false)
      setGameStats(prev => ({
        ...prev,
        currentXP: prev.currentXP + 50,
        swapCount: prev.swapCount + 1,
        totalVolume: prev.totalVolume + parseFloat(swapAmount || "0")
      }))
      setSwapAmount("")
      if (soundEnabled) {
        // Play success sound
      }
    }, 3000)
  }

  const walletOptions = [
    { id: "suiet", name: "Suiet Wallet", icon: "🔷" },
    { id: "ethos", name: "Ethos Wallet", icon: "⚡" },
    { id: "surf", name: "Surf Wallet", icon: "🌊" }
  ]

  const tokens = [
    { symbol: "SUI", name: "Sui", icon: "🔵", color: "cyan", balance: 1234.56 },
    { symbol: "USDC", name: "USD Coin", icon: "💚", color: "lime", balance: 5678.90 },
    { symbol: "SWAP", name: "SimpleSwap Token", icon: "⭐", color: "purple", balance: 9876.54 },
    { symbol: "WETH", name: "Wrapped Ethereum", icon: "💎", color: "blue", balance: 12.34 }
  ]

  const quests = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first swap transaction",
      progress: 100,
      maxProgress: 100,
      reward: "500 XP + Starter Crate",
      tier: "Bronze",
      completed: true,
      type: "tutorial"
    },
    {
      id: 2,
      name: "Volume Trader",
      description: "Execute $10,000 in swap volume",
      progress: 7534,
      maxProgress: 10000,
      reward: "1000 XP + Epic Crate",
      tier: "Silver",
      completed: false,
      type: "trading"
    },
    {
      id: 3,
      name: "Liquidity Master",
      description: "Provide liquidity to 3 different pools",
      progress: 1,
      maxProgress: 3,
      reward: "1500 XP + Legendary Key",
      tier: "Gold",
      completed: false,
      type: "liquidity"
    },
    {
      id: 4,
      name: "Referral Champion",
      description: "Refer 10 active traders",
      progress: 8,
      maxProgress: 10,
      reward: "2000 XP + Mythic Crate",
      tier: "Diamond",
      completed: false,
      type: "social"
    }
  ]

  const lootCrates = [
    {
      id: 1,
      name: "Starter Crate",
      rarity: "Common",
      color: "lime",
      available: 3,
      cost: 0,
      rewards: ["50-100 XP", "Basic Boosts", "Token Rewards"],
      glowIntensity: "low"
    },
    {
      id: 2,
      name: "Epic Vault",
      rarity: "Epic",
      color: "purple",
      available: 1,
      cost: 500,
      rewards: ["500-1000 XP", "Rare NFTs", "Premium Boosts"],
      glowIntensity: "medium"
    },
    {
      id: 3,
      name: "Legendary Chest",
      rarity: "Legendary",
      color: "yellow",
      available: 0,
      cost: 2000,
      rewards: ["2000-5000 XP", "Legendary NFTs", "Exclusive Skins"],
      glowIntensity: "high"
    },
    {
      id: 4,
      name: "Mythic Nexus",
      rarity: "Mythic",
      color: "cyan",
      available: 0,
      cost: 10000,
      rewards: ["10000+ XP", "Mythic NFTs", "Ultimate Powers"],
      glowIntensity: "extreme"
    }
  ]

  const leaderboard = [
    { rank: 1, address: "0x742d...35C4", volume: "2,456,789", xp: "125,678", rewards: "5,234", tier: "Diamond" },
    { rank: 2, address: "0x8E3f...29B7", volume: "1,987,654", xp: "98,765", rewards: "4,123", tier: "Platinum" },
    { rank: 3, address: "0x1A2b...78F9", volume: "1,234,567", xp: "67,890", rewards: "3,456", tier: "Gold" },
    { rank: 4, address: "0x9C4d...84E2", volume: "987,654", xp: "45,678", rewards: "2,789", tier: "Silver" },
    { rank: 5, address: "0x5F8a...91D6", volume: "765,432", xp: "34,567", rewards: "1,987", tier: "Silver" }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-vt323 relative overflow-hidden">
      {/* Animated Matrix Background */}
      <div className="matrix-bg">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 50 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Cyberpunk Grid Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none"></div>

      {/* Dynamic Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-cyan-500/30 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-lime-400 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <Zap className="w-6 h-6 text-black font-bold" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-orbitron neon-text-cyan animate-neon-flicker">
                    SimpleSwap
                  </div>
                  <div className="text-xs text-purple-400 font-bold tracking-wider">GAMEFI DEX v2.0</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/50 animate-pulse">
                  <Radio className="w-3 h-3 mr-1" />
                  ARCADE MODE
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                  <Wifi className="w-3 h-3 mr-1" />
                  SUI MAINNET
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Time Display */}
              <div className="hidden md:flex items-center space-x-2 text-sm font-orbitron">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour12: false, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit' 
                  })}
                </span>
              </div>

              {/* Player Stats */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-cyan-400 font-bold">{gameStats.currentXP.toLocaleString()}</span>
                  <span className="text-gray-400">XP</span>
                </div>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 font-orbitron">
                  <Crown className="w-3 h-3 mr-1" />
                  LVL {gameStats.level}
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                  {gameStats.tier.toUpperCase()}
                </Badge>
              </div>

              {/* Audio Toggle */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`${soundEnabled ? 'text-cyan-400 glow-cyan' : 'text-gray-500'} hover:text-cyan-300 transition-all duration-300`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <Headphones className="w-4 h-4" />}
              </Button>

              {/* Wallet Connection */}
              {!walletConnected ? (
                <Select onValueChange={(value) => {
                  setWalletType(value)
                  setWalletConnected(true)
                  setGameStats(prev => ({ ...prev, currentXP: prev.currentXP + 100 }))
                }}>
                  <SelectTrigger className="btn-cyber bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-cyan-400 hover:from-cyan-400/30 hover:to-purple-400/30 transition-all duration-300 min-w-[160px]">
                    <Wallet className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Connect Wallet" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-cyan-500/30 backdrop-blur-md">
                    {walletOptions.map((wallet) => (
                      <SelectItem key={wallet.id} value={wallet.id} className="text-white hover:bg-cyan-500/10">
                        <span className="mr-2">{wallet.icon}</span>
                        {wallet.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex items-center space-x-3 card-cyber rounded-lg px-4 py-2 glow-cyan">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                    <span className="text-lime-400 text-sm font-bold">CONNECTED</span>
                  </div>
                  <div className="text-cyan-400 text-sm font-mono">0x742d...35C4</div>
                  <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/50 text-xs">
                    {walletType.toUpperCase()}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-cyan-500/30 bg-black/70 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-transparent border-none h-auto p-0">
              <TabsTrigger
                value="swap"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=active]:border-b-2 data-[state=active]:border-cyan-400 data-[state=active]:glow-cyan hover:bg-cyan-500/10 transition-all duration-300 py-4 relative group"
              >
                <ArrowUpDown className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">SWAP</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
              <TabsTrigger
                value="quests"
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-400 data-[state=active]:glow-purple hover:bg-purple-500/10 transition-all duration-300 py-4 relative group"
              >
                <Target className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">QUESTS</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
              <TabsTrigger
                value="vault"
                className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 data-[state=active]:glow-lime hover:bg-lime-500/10 transition-all duration-300 py-4 relative group"
              >
                <Gift className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">LOOT VAULT</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
              <TabsTrigger
                value="liquidity"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 py-4 relative group"
              >
                <Plus className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">LIQUIDITY</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
              <TabsTrigger
                value="referral"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 data-[state=active]:glow-yellow hover:bg-yellow-500/10 transition-all duration-300 py-4 relative group"
              >
                <Users className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">ARENA</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
              <TabsTrigger
                value="utility"
                className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-400 data-[state=active]:border-b-2 data-[state=active]:border-pink-400 data-[state=active]:glow-pink hover:bg-pink-500/10 transition-all duration-300 py-4 relative group"
              >
                <Coins className="w-4 h-4 mr-2 group-hover:animate-shake" />
                <span className="font-orbitron">$SWAP</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <Tabs value={activeTab} className="w-full">
          {/* SWAP INTERFACE */}
          <TabsContent value="swap" className="space-y-6 animate-popup">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Swap Panel */}
              <div className="lg:col-span-2">
                <Card className="card-cyber glow-cyan relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-lime-400 animate-cyber-scan"></div>
                  <CardHeader className="relative">
                    <CardTitle className="text-cyan-400 flex items-center font-orbitron">
                      <div className="relative mr-3">
                        <Zap className="w-6 h-6 animate-pulse-glow" />
                        <div className="absolute inset-0 w-6 h-6 animate-rotate-glow">
                          <Cpu className="w-6 h-6 text-cyan-400/30" />
                        </div>
                      </div>
                      QUANTUM SWAP ENGINE
                      <Badge className="ml-auto bg-lime-500/20 text-lime-400 border-lime-500/50 animate-pulse">
                        <Activity className="w-3 h-3 mr-1" />
                        ONLINE
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* From Token */}
                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 font-orbitron tracking-wider">FROM TOKEN</label>
                      <div className="relative">
                        <div className="card-cyber glow-cyan p-4 hover:glow-cyan transition-all duration-300 group">
                          <div className="flex items-center justify-between">
                            <Input
                              value={swapAmount}
                              onChange={(e) => setSwapAmount(e.target.value)}
                              placeholder="0.0"
                              className="bg-transparent border-none text-3xl font-bold text-white p-0 focus:ring-0 font-orbitron placeholder:text-gray-600"
                              disabled={isSwapping}
                            />
                            <div className="flex items-center space-x-3">
                              <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse-glow">
                                  <span className="text-sm font-bold text-black">SUI</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                              </div>
                              <div>
                                <div className="font-bold text-cyan-400 font-orbitron">SUI</div>
                                <div className="text-xs text-gray-400">Sui Network</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="text-gray-400">Balance: 1,234.56 SUI</span>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 text-xs">25%</Button>
                              <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 text-xs">50%</Button>
                              <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 text-xs">MAX</Button>
                            </div>
                          </div>
                        </div>
                        {isSwapping && (
                          <div className="absolute inset-0 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                            <div className="cyber-spinner"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Swap Arrow */}
                    <div className="flex justify-center relative">
                      <Button
                        size="icon"
                        className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/50 hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 rounded-full relative group"
                        onClick={() => {
                          const temp = fromToken
                          setFromToken(toToken)
                          setToToken(temp)
                        }}
                        disabled={isSwapping}
                      >
                        <ArrowUpDown className="w-5 h-5 text-purple-400 group-hover:animate-shake" />
                        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse-glow"></div>
                      </Button>
                    </div>

                    {/* To Token */}
                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 font-orbitron tracking-wider">TO TOKEN</label>
                      <div className="card-cyber glow-lime p-4 hover:glow-lime transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="text-3xl font-bold text-white font-orbitron">
                            {swapAmount && !isSwapping ? (parseFloat(swapAmount) * 1.85).toFixed(2) : "0.0"}
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-lime-400 rounded-full flex items-center justify-center animate-pulse-glow">
                                <span className="text-sm font-bold text-black">USDC</span>
                              </div>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                            </div>
                            <div>
                              <div className="font-bold text-lime-400 font-orbitron">USDC</div>
                              <div className="text-xs text-gray-400">USD Coin</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-3">Balance: 5,678.90 USDC</div>
                      </div>
                    </div>

                    {/* Swap Details */}
                    <div className="space-y-3 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Exchange Rate</span>
                        <span className="text-white font-bold">1 SUI = 1.85 USDC</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Trading Fee</span>
                        <span className="text-lime-400 font-bold">0.25% {gameStats.boostActive && <span className="text-xs">(50% OFF)</span>}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">XP Reward</span>
                        <span className="text-purple-400 font-bold">+50 XP {gameStats.boostActive && <span className="text-xs">(2x BOOST)</span>}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Slippage Tolerance</span>
                        <span className="text-cyan-400 font-bold">0.5%</span>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <Button
                      onClick={handleSwap}
                      className="w-full btn-cyber bg-gradient-to-r from-cyan-500 via-purple-500 to-lime-500 hover:from-cyan-400 hover:via-purple-400 hover:to-lime-400 text-black font-bold py-6 text-lg font-orbitron transition-all duration-300 hover:scale-105 relative group"
                      disabled={!walletConnected || !swapAmount || isSwapping}
                    >
                      {isSwapping ? (
                        <div className="flex items-center space-x-3">
                          <div className="cyber-spinner border-black"></div>
                          <span>PROCESSING QUANTUM SWAP...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <Sparkles className="w-5 h-5 group-hover:animate-shake" />
                          <span>
                            {walletConnected 
                              ? (swapAmount ? "EXECUTE QUANTUM SWAP" : "ENTER AMOUNT") 
                              : "CONNECT WALLET TO SWAP"
                            }
                          </span>
                          <Sparkles className="w-5 h-5 group-hover:animate-shake" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Tutorial Quest Panel & Game Stats */}
              <div className="space-y-6">
                {/* Tutorial Quest Panel */}
                <Card className="card-cyber glow-purple relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-cyber-scan"></div>
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center font-orbitron">
                      <Gamepad2 className="w-5 h-5 mr-2 animate-bounce" />
                      TUTORIAL QUEST
                      <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/50 animate-pulse">
                        <Target className="w-3 h-3 mr-1" />
                        ACTIVE
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 font-orbitron">PROGRESS</span>
                        <span className="text-sm text-purple-400 font-bold">3/5 COMPLETE</span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={60}
                          className="progress-cyber bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500 h-3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-cyber-scan"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { task: "Connect Wallet", completed: true, xp: 100 },
                        { task: "First Swap", completed: true, xp: 200 },
                        { task: "Add Liquidity", completed: false, xp: 300 },
                        { task: "Join Arena", completed: false, xp: 400 },
                        { task: "Open Loot Crate", completed: false, xp: 500 }
                      ].map((quest, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between p-3 rounded border transition-all duration-300 ${
                            quest.completed 
                              ? "bg-green-500/10 border-green-500/30 glow-lime" 
                              : "bg-gray-900/50 border-gray-700 hover:border-purple-500/30"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              quest.completed ? "bg-green-400 animate-pulse" : "bg-yellow-400 animate-pulse"
                            }`}></div>
                            <span className={`text-sm font-orbitron ${
                              quest.completed ? "text-green-400" : "text-yellow-400"
                            }`}>
                              {quest.task} {quest.completed && "✓"}
                            </span>
                          </div>
                          <Badge className={`text-xs ${
                            quest.completed 
                              ? "bg-green-500/20 text-green-400 border-green-500/50" 
                              : "bg-purple-500/20 text-purple-400 border-purple-500/50"
                          }`}>
                            +{quest.xp} XP
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4 glow-purple">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-purple-400 font-orbitron">COMPLETION REWARD</span>
                        <Gift className="w-5 h-5 text-pink-400 animate-pulse" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">+1500 XP</Badge>
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">Starter Crate</Badge>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Epic Boost</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* XP Progress */}
                <Card className="card-cyber glow-yellow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Crown className="w-5 h-5 text-yellow-400 animate-pulse-glow" />
                        <span className="text-yellow-400 font-bold font-orbitron">LEVEL {gameStats.level}</span>
                      </div>
                      <span className="text-sm text-gray-400 font-orbitron">
                        {gameStats.currentXP.toLocaleString()}/{gameStats.nextLevelXP.toLocaleString()} XP
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={(gameStats.currentXP / gameStats.nextLevelXP) * 100}
                        className="progress-cyber bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-orange-500 h-3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-cyber-scan"></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2 text-center font-orbitron">
                      {gameStats.nextLevelXP - gameStats.currentXP} XP TO NEXT LEVEL
                    </div>
                  </CardContent>
                </Card>

                {/* Game Stats Dashboard */}
                <Card className="card-cyber glow-cyan">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 font-orbitron text-sm">PLAYER STATS</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-gray-900/50 rounded border border-gray-700">
                        <div className="text-lg font-bold text-cyan-400 font-orbitron">{gameStats.swapCount}</div>
                        <div className="text-xs text-gray-400">Swaps</div>
                      </div>
                      <div className="text-center p-2 bg-gray-900/50 rounded border border-gray-700">
                        <div className="text-lg font-bold text-purple-400 font-orbitron">{gameStats.questsCompleted}</div>
                        <div className="text-xs text-gray-400">Quests</div>
                      </div>
                      <div className="text-center p-2 bg-gray-900/50 rounded border border-gray-700">
                        <div className="text-lg font-bold text-lime-400 font-orbitron">${gameStats.totalVolume.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Volume</div>
                      </div>
                      <div className="text-center p-2 bg-gray-900/50 rounded border border-gray-700">
                        <div className="text-lg font-bold text-yellow-400 font-orbitron">{gameStats.lootCrates}</div>
                        <div className="text-xs text-gray-400">Crates</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* QUEST CENTER */}
          <TabsContent value="quests" className="space-y-6 animate-popup">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Missions */}
              <Card className="card-cyber glow-purple">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center font-orbitron">
                    <Target className="w-5 h-5 mr-2 animate-pulse-glow" />
                    ACTIVE MISSIONS
                    <Badge className="ml-auto bg-lime-500/20 text-lime-400 border-lime-500/50">
                      {quests.filter(q => !q.completed).length} ACTIVE
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quests.map((quest, i) => (
                    <div
                      key={quest.id}
                      className={`card-cyber p-4 transition-all duration-300 hover:scale-[1.02] ${
                        quest.completed 
                          ? "bg-green-500/10 border-green-500/30 glow-lime" 
                          : "hover:glow-purple"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            quest.completed 
                              ? "bg-green-500/20 border border-green-500/50" 
                              : "bg-purple-500/20 border border-purple-500/50"
                          }`}>
                            {quest.completed ? (
                              <Sparkles className="w-4 h-4 text-green-400" />
                            ) : (
                              <Target className="w-4 h-4 text-purple-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-white font-orbitron">{quest.name}</div>
                            <div className="text-xs text-gray-400">{quest.description}</div>
                          </div>
                        </div>
                        <Badge
                          className={`${
                            quest.tier === "Bronze" ? "bg-orange-500/20 text-orange-400 border-orange-500/50" :
                            quest.tier === "Silver" ? "bg-gray-500/20 text-gray-400 border-gray-500/50" :
                            quest.tier === "Gold" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" :
                            "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                          }`}
                        >
                          {quest.tier}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-purple-400 font-bold">
                            {quest.progress}/{quest.maxProgress}
                          </span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={(quest.progress / quest.maxProgress) * 100}
                            className="progress-cyber bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500 h-2"
                          />
                          {!quest.completed && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-cyber-scan"></div>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {quest.completed ? "COMPLETED!" : `${((quest.progress / quest.maxProgress) * 100).toFixed(1)}% Complete`}
                          </span>
                          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs">
                            {quest.reward}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tier System */}
              <Card className="card-cyber glow-cyan">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center font-orbitron">
                    <Crown className="w-5 h-5 mr-2 animate-pulse-glow" />
                    TIER SYSTEM
                    <Badge className="ml-auto bg-purple-500/20 text-purple-400 border-purple-500/50">
                      CURRENT: {gameStats.tier.toUpperCase()}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { tier: "Diamond", xp: "50,000+", color: "from-cyan-400 to-blue-400", perks: "All Perks + Exclusive", current: false, icon: Gem },
                    { tier: "Platinum", xp: "25,000+", color: "from-gray-300 to-gray-500", perks: "Premium Rewards", current: false, icon: Award },
                    { tier: "Gold", xp: "10,000+", color: "from-yellow-400 to-orange-400", perks: "Epic Rewards", current: false, icon: Trophy },
                    { tier: "Silver", xp: "2,500+", color: "from-gray-400 to-gray-600", perks: "Enhanced Rewards", current: true, icon: Shield },
                    { tier: "Bronze", xp: "0+", color: "from-orange-400 to-red-400", perks: "Basic Rewards", current: false, icon: Sword }
                  ].map((tier, i) => {
                    const IconComponent = tier.icon
                    return (
                      <div
                        key={i}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          tier.current 
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50 glow-purple" 
                            : "bg-gray-900/30 border-gray-700 hover:border-cyan-500/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${tier.color} relative`}>
                              {tier.current && (
                                <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <IconComponent className={`w-4 h-4 ${tier.current ? "text-purple-400" : "text-gray-400"}`} />
                              <span className={`font-bold font-orbitron ${tier.current ? "text-purple-400 neon-text-purple" : "text-gray-400"}`}>
                                {tier.tier}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400 font-orbitron">{tier.xp} XP</div>
                            <div className="text-xs text-gray-500">{tier.perks}</div>
                          </div>
                        </div>
                        {tier.current && (
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-purple-400 font-bold animate-pulse">CURRENT TIER</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* LOOT VAULT */}
          <TabsContent value="vault" className="space-y-6 animate-popup">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold font-orbitron neon-text-lime mb-2">LOOT VAULT NEXUS</h2>
              <p className="text-gray-400">Claim your rewards from the digital realm</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lootCrates.map((crate, i) => {
                const isAvailable = crate.available > 0
                const glowClass = `glow-${crate.color}`
                
                return (
                  <Card
                    key={crate.id}
                    className={`card-cyber relative overflow-hidden transition-all duration-500 ${
                      isAvailable 
                        ? `${glowClass} hover:scale-105 cursor-pointer` 
                        : "opacity-50"
                    }`}
                  >
                    {isAvailable && (
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${crate.color}-400 via-${crate.color}-500 to-${crate.color}-400 animate-cyber-scan`}></div>
                    )}
                    
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Crate Visual */}
                      <div className="relative">
                        <div
                          className={`w-24 h-24 mx-auto bg-gradient-to-br from-${crate.color}-400/20 to-${crate.color}-600/20 border-2 border-${crate.color}-500/50 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isAvailable ? `animate-pulse-glow hover:animate-shake` : ""
                          }`}
                        >
                          <Gift className={`w-12 h-12 text-${crate.color}-400`} />
                        </div>
                        
                        {/* Floating particles */}
                        {isAvailable && Array.from({ length: 6 }).map((_, j) => (
                          <div
                            key={j}
                            className={`absolute w-1 h-1 bg-${crate.color}-400 rounded-full animate-float`}
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${2 + Math.random() * 2}s`
                            }}
                          ></div>
                        ))}

                        {/* Availability indicator */}
                        {isAvailable && (
                          <div className="absolute -top-2 -right-2">
                            <Badge className={`bg-${crate.color}-500/20 text-${crate.color}-400 border-${crate.color}-500/50 animate-pulse`}>
                              {crate.available}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Crate Info */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-white font-orbitron text-lg">{crate.name}</h3>
                        <Badge
                          className={`bg-${crate.color}-500/20 text-${crate.color}-400 border-${crate.color}-500/50 font-orbitron`}
                        >
                          {crate.rarity.toUpperCase()}
                        </Badge>
                      </div>

                      {/* Rewards Preview */}
                      <div className="space-y-2">
                        <div className="text-xs text-gray-400 font-orbitron">CONTAINS:</div>
                        <div className="space-y-1">
                          {crate.rewards.map((reward, j) => (
                            <div key={j} className="text-xs text-gray-300 bg-gray-900/50 rounded px-2 py-1">
                              {reward}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cost & Action */}
                      <div className="space-y-3">
                        {crate.cost > 0 && (
                          <div className="flex items-center justify-center space-x-2">
                            <Coins className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400 font-bold font-orbitron">{crate.cost} $SWAP</span>
                          </div>
                        )}
                        
                        <Button
                          className={`w-full btn-cyber font-orbitron font-bold ${
                            isAvailable
                              ? `bg-gradient-to-r from-${crate.color}-500/20 to-${crate.color}-600/20 border border-${crate.color}-500/50 hover:from-${crate.color}-500/30 hover:to-${crate.color}-600/30 text-${crate.color}-400 hover:text-${crate.color}-300`
                              : "bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"
                          }`}
                          disabled={!isAvailable}
                        >
                          {isAvailable ? (
                            <div className="flex items-center space-x-2">
                              <Unlock className="w-4 h-4" />
                              <span>OPEN CRATE</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Lock className="w-4 h-4" />
                              <span>LOCKED</span>
                            </div>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Vault Statistics */}
            <Card className="card-cyber glow-purple">
              <CardHeader>
                <CardTitle className="text-purple-400 font-orbitron">VAULT STATISTICS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-lime-400 font-orbitron">12</div>
                    <div className="text-xs text-gray-400">Crates Opened</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400 font-orbitron">3</div>
                    <div className="text-xs text-gray-400">Epic Items</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-cyan-400 font-orbitron">1</div>
                    <div className="text-xs text-gray-400">Legendary Items</div>
                  </div>
                  <div className="text-center p-3 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-yellow-400 font-orbitron">45K</div>
                    <div className="text-xs text-gray-400">Total XP Earned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* LIQUIDITY POOLS */}
          <TabsContent value="liquidity" className="space-y-6 animate-popup">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Liquidity */}
              <Card className="card-cyber glow-blue">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center font-orbitron">
                    <Plus className="w-5 h-5 mr-2 animate-pulse-glow" />
                    ADD LIQUIDITY
                    <Badge className="ml-auto bg-lime-500/20 text-lime-400 border-lime-500/50">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +45.2% APY
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Token A */}
                    <div className="card-cyber glow-cyan p-4">
                      <div className="text-sm text-gray-400 mb-2 font-orbitron">TOKEN A</div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse-glow"></div>
                        <span className="font-bold text-cyan-400 font-orbitron">SUI</span>
                      </div>
                      <Input 
                        placeholder="0.0" 
                        className="bg-transparent border-gray-600 text-white font-orbitron" 
                      />
                      <div className="text-xs text-gray-400 mt-2">Balance: 1,234.56</div>
                    </div>

                    {/* Token B */}
                    <div className="card-cyber glow-lime p-4">
                      <div className="text-sm text-gray-400 mb-2 font-orbitron">TOKEN B</div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-lime-400 rounded-full animate-pulse-glow"></div>
                        <span className="font-bold text-lime-400 font-orbitron">USDC</span>
                      </div>
                      <Input 
                        placeholder="0.0" 
                        className="bg-transparent border-gray-600 text-white font-orbitron" 
                      />
                      <div className="text-xs text-gray-400 mt-2">Balance: 5,678.90</div>
                    </div>
                  </div>

                  <div className="space-y-3 p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Pool Share</span>
                      <span className="text-blue-400 font-bold">0.15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">LP Tokens</span>
                      <span className="text-lime-400 font-bold">124.56 SUI-USDC</span>
                    </div>
                  </div>

                  <Button className="w-full btn-cyber bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-black font-bold font-orbitron">
                    <Plus className="w-4 h-4 mr-2" />
                    ADD LIQUIDITY
                  </Button>
                </CardContent>
              </Card>

              {/* LP Staking */}
              <Card className="card-cyber glow-green">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center font-orbitron">
                    <Layers className="w-5 h-5 mr-2 animate-pulse-glow" />
                    LP TOKEN STAKING
                    <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                      <Flame className="w-3 h-3 mr-1" />
                      HOT
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Active Stake */}
                  <div className="card-cyber glow-lime p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-lime-400 rounded-full"></div>
                        <span className="text-white font-bold font-orbitron">SUI-USDC LP</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 animate-pulse">
                        45.2% APY
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Staked</span>
                        <span className="text-lime-400 font-bold">1,234.56 LP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rewards</span>
                        <span className="text-green-400 font-bold">45.67 $SWAP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Daily Earnings</span>
                        <span className="text-yellow-400 font-bold">~12.34 $SWAP</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="btn-cyber bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-500/50 text-green-400 font-orbitron">
                      <Plus className="w-4 h-4 mr-2" />
                      STAKE MORE
                    </Button>
                    <Button className="btn-cyber bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 text-yellow-400 font-orbitron">
                      <Gift className="w-4 h-4 mr-2" />
                      CLAIM
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pool Overview */}
            <Card className="card-cyber glow-purple">
              <CardHeader>
                <CardTitle className="text-purple-400 font-orbitron">ACTIVE LIQUIDITY POOLS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { pair: "SUI-USDC", tvl: "$2.4M", apy: "45.2%", rewards: "High", status: "Active" },
                    { pair: "SUI-WETH", tvl: "$1.8M", apy: "38.7%", rewards: "Medium", status: "Active" },
                    { pair: "SWAP-SUI", tvl: "$945K", apy: "67.3%", rewards: "Epic", status: "Hot" }
                  ].map((pool, i) => (
                    <div key={i} className="card-cyber p-4 hover:glow-purple transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white font-orbitron">{pool.pair}</span>
                        <Badge className={`${pool.status === "Hot" ? "bg-orange-500/20 text-orange-400 border-orange-500/50 animate-pulse" : "bg-lime-500/20 text-lime-400 border-lime-500/50"}`}>
                          {pool.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">TVL</span>
                          <span className="text-cyan-400 font-bold">{pool.tvl}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">APY</span>
                          <span className="text-green-400 font-bold">{pool.apy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rewards</span>
                          <span className="text-purple-400 font-bold">{pool.rewards}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* REFERRAL ARENA */}
          <TabsContent value="referral" className="space-y-6 animate-popup">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold font-orbitron neon-text-yellow mb-2">REFERRAL ARENA</h2>
              <p className="text-gray-400">Compete with other traders and earn epic rewards</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leaderboard */}
              <div className="lg:col-span-2">
                <Card className="card-cyber glow-yellow">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center font-orbitron">
                      <Trophy className="w-5 h-5 mr-2 animate-pulse-glow" />
                      CHAMPION LEADERBOARD
                      <Badge className="ml-auto bg-orange-500/20 text-orange-400 border-orange-500/50 animate-pulse">
                        <Flame className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {leaderboard.map((user, i) => {
                        const rankIcons = ["👑", "🥈", "🥉", "🏅", "⭐"]
                        const rankColors = ["text-yellow-400", "text-gray-300", "text-orange-400", "text-purple-400", "text-cyan-400"]
                        
                        return (
                          <div
                            key={i}
                            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                              i === 0 ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50 glow-yellow" :
                              i === 1 ? "bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-gray-500/50" :
                              i === 2 ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/50" :
                              "bg-gray-900/50 border-gray-700 hover:border-purple-500/30"
                            }`}
                          >
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl">{rankIcons[i]}</span>
                                <div className={`font-bold font-orbitron ${rankColors[i]}`}>#{user.rank}</div>
                              </div>
                              <div>
                                <div className="font-mono text-white">{user.address}</div>
                                <Badge className={`text-xs ${
                                  user.tier === "Diamond" ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50" :
                                  user.tier === "Platinum" ? "bg-gray-500/20 text-gray-400 border-gray-500/50" :
                                  user.tier === "Gold" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" :
                                  "bg-purple-500/20 text-purple-400 border-purple-500/50"
                                }`}>
                                  {user.tier}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-yellow-400 font-bold font-orbitron">${user.volume}</div>
                              <div className="text-sm text-gray-400">{user.xp} XP</div>
                              <div className="text-sm text-green-400">${user.rewards} earned</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Your Arena Stats */}
              <div className="space-y-6">
                <Card className="card-cyber glow-pink">
                  <CardHeader>
                    <CardTitle className="text-pink-400 flex items-center font-orbitron">
                      <Users className="w-5 h-5 mr-2 animate-pulse-glow" />
                      YOUR ARENA STATS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50 rounded-full flex items-center justify-center animate-pulse-glow">
                          <Crown className="w-10 h-10 text-pink-400" />
                        </div>
                        <Badge className="absolute -top-2 -right-2 bg-purple-500/20 text-purple-400 border-purple-500/50">
                          #47
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-3xl font-bold text-pink-400 font-orbitron">{gameStats.referrals}</div>
                          <div className="text-sm text-gray-400">Active Referrals</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-400 font-orbitron">${gameStats.totalVolume.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Total Volume</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-cyan-400 font-orbitron">{gameStats.stakingRewards} $SWAP</div>
                          <div className="text-sm text-gray-400">Referral Rewards</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full btn-cyber bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold font-orbitron">
                      <Users className="w-4 h-4 mr-2" />
                      SHARE REFERRAL LINK
                    </Button>
                  </CardContent>
                </Card>

                {/* Referral Rewards */}
                <Card className="card-cyber glow-green">
                  <CardHeader>
                    <CardTitle className="text-green-400 font-orbitron text-sm">REFERRAL BONUSES</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { milestone: "1 Referral", reward: "10% Fee Share", completed: true },
                      { milestone: "5 Referrals", reward: "Epic Boost", completed: true },
                      { milestone: "10 Referrals", reward: "Legendary Crate", completed: false },
                      { milestone: "25 Referrals", reward: "Diamond Status", completed: false }
                    ].map((bonus, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded border text-sm ${
                          bonus.completed 
                            ? "bg-green-500/10 border-green-500/30 text-green-400" 
                            : "bg-gray-900/50 border-gray-700 text-gray-400"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-orbitron">{bonus.milestone}</span>
                          <span className={bonus.completed ? "text-green-400" : "text-purple-400"}>
                            {bonus.reward} {bonus.completed && "✓"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* $SWAP UTILITY TOKEN */}
          <TabsContent value="utility" className="space-y-6 animate-popup">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold font-orbitron neon-text-pink mb-2">$SWAP UTILITY NEXUS</h2>
              <p className="text-gray-400">Unlock the full power of the SimpleSwap ecosystem</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Boost Powers */}
              <Card className="card-cyber glow-pink">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center font-orbitron">
                    <Flame className="w-5 h-5 mr-2 animate-pulse-glow" />
                    BOOST POWERS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "2x XP Boost", cost: 100, duration: "24h", color: "pink", active: false },
                    { name: "Fee Reduction", cost: 250, duration: "7d", color: "cyan", active: false },
                    { name: "Loot Multiplier", cost: 500, duration: "24h", color: "purple", active: gameStats.boostActive },
                    { name: "Referral Bonus", cost: 1000, duration: "30d", color: "yellow", active: false }
                  ].map((boost, i) => (
                    <div
                      key={i}
                      className={`card-cyber p-4 transition-all duration-300 ${
                        boost.active 
                          ? `glow-${boost.color} bg-${boost.color}-500/10 border-${boost.color}-500/50` 
                          : "hover:glow-pink"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold font-orbitron">{boost.name}</span>
                        <Badge className={`bg-${boost.color}-500/20 text-${boost.color}-400 border-${boost.color}-500/50`}>
                          {boost.cost} $SWAP
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400 mb-3">Duration: {boost.duration}</div>
                      <Button 
                        className={`w-full btn-cyber font-orbitron ${
                          boost.active 
                            ? `bg-${boost.color}-500/30 border-${boost.color}-500/50 text-${boost.color}-400` 
                            : `bg-${boost.color}-500/20 border-${boost.color}-500/50 text-${boost.color}-400 hover:bg-${boost.color}-500/30`
                        }`}
                        disabled={boost.active}
                      >
                        {boost.active ? "ACTIVE" : "ACTIVATE"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Unlock Loot */}
              <Card className="card-cyber glow-purple">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center font-orbitron">
                    <Gift className="w-5 h-5 mr-2 animate-pulse-glow" />
                    UNLOCK LOOT
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Epic Crate Key", cost: 500, description: "Unlock Epic tier rewards", color: "purple" },
                    { name: "Legendary Access", cost: 2000, description: "Access legendary loot pool", color: "yellow" },
                    { name: "Mythic Portal", cost: 10000, description: "Enter the mythic realm", color: "cyan" }
                  ].map((item, i) => (
                    <div key={i} className="card-cyber p-4 hover:glow-purple transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold font-orbitron">{item.name}</span>
                        <Badge className={`bg-${item.color}-500/20 text-${item.color}-400 border-${item.color}-500/50`}>
                          {item.cost} $SWAP
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                      <Button className={`w-full btn-cyber bg-${item.color}-500/20 border-${item.color}-500/50 text-${item.color}-400 hover:bg-${item.color}-500/30 font-orbitron`}>
                        UNLOCK
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Staking Pool */}
              <Card className="card-cyber glow-green">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center font-orbitron">
                    <Coins className="w-5 h-5 mr-2 animate-pulse-glow" />
                    STAKING POOL
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 font-orbitron animate-pulse-glow">12.5%</div>
                    <div className="text-sm text-gray-400">Annual Percentage Yield</div>
                  </div>

                  <div className="card-cyber glow-lime p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Your Stake</span>
                        <span className="text-white font-bold font-orbitron">1,234 $SWAP</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Claimable Rewards</span>
                        <span className="text-green-400 font-bold font-orbitron">45.67 $SWAP</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Next Reward</span>
                        <span className="text-yellow-400 font-bold">12h 34m</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="btn-cyber bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-500/50 text-green-400 font-orbitron">
                      <Plus className="w-4 h-4 mr-1" />
                      STAKE
                    </Button>
                    <Button className="btn-cyber bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 text-yellow-400 font-orbitron">
                      <Gift className="w-4 h-4 mr-1" />
                      CLAIM
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Token Economics */}
            <Card className="card-cyber glow-cyan">
              <CardHeader>
                <CardTitle className="text-cyan-400 font-orbitron">$SWAP TOKEN ECONOMICS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-cyan-400 font-orbitron">1B</div>
                    <div className="text-xs text-gray-400">Total Supply</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400 font-orbitron">350M</div>
                    <div className="text-xs text-gray-400">Circulating</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-lime-400 font-orbitron">12.5%</div>
                    <div className="text-xs text-gray-400">Staked</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-2xl font-bold text-yellow-400 font-orbitron">$0.045</div>
                    <div className="text-xs text-gray-400">Current Price</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-cyan-500/30 bg-black/90 backdrop-blur-md mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-lime-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div className="text-xl font-bold font-orbitron neon-text-cyan">SimpleSwap</div>
              </div>
              <p className="text-sm text-gray-400">
                The ultimate GameFi-powered DEX on Sui blockchain. Trade, earn, and unlock legendary rewards.
              </p>
              <div className="flex space-x-3">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Activity className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <Radar className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-lime-400 transition-colors duration-300">
                  <Radio className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-white font-orbitron">QUICK ACCESS</h3>
              <div className="space-y-2">
                {["Swap Tokens", "Add Liquidity", "Earn Rewards", "View Quests"].map((link, i) => (
                  <Button key={i} variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link}
                  </Button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-bold text-white font-orbitron">RESOURCES</h3>
              <div className="space-y-2">
                {["Documentation", "API Guide", "Support Center", "Bug Bounty"].map((link, i) => (
                  <Button key={i} variant="ghost" className="justify-start p-0 h-auto text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <h3 className="font-bold text-white font-orbitron">LIVE STATS</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Total Volume</span>
                  <span className="text-cyan-400 font-bold font-orbitron">$12.4M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Active Users</span>
                  <span className="text-purple-400 font-bold font-orbitron">8,452</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Quests Completed</span>
                  <span className="text-lime-400 font-bold font-orbitron">23,891</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 flex items-center justify-between">
            <div className="text-sm text-gray-400 font-orbitron">
              © 2024 SimpleSwap DEX - Powered by Sui Blockchain
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`${soundEnabled ? 'text-cyan-400' : 'text-gray-500'} hover:text-cyan-300 transition-all duration-300`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <Headphones className="w-4 h-4" />}
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="text-xs text-gray-500 font-mono">
                v2.0.1-ARCADE
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
