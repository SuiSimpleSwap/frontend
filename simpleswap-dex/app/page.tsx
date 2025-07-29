"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"

export default function SimpleSwapDEX() {
  const [activeTab, setActiveTab] = useState("swap")
  const [walletConnected, setWalletConnected] = useState(false)
  const [swapAmount, setSwapAmount] = useState("")
  const [fromToken, setFromToken] = useState("SUI")
  const [toToken, setToToken] = useState("USDC")

  const questData = {
    currentXP: 2450,
    nextLevelXP: 3000,
    level: 12,
    tier: "Silver",
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                SimpleSwap
              </div>
              <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/50 animate-pulse">ARCADE MODE</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-cyan-400">{questData.currentXP} XP</span>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">LVL {questData.level}</Badge>
              </div>

              {!walletConnected ? (
                <Button
                  onClick={() => setWalletConnected(true)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">0x1234...5678</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-500/30 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-transparent border-none h-auto p-0">
              <TabsTrigger
                value="swap"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 data-[state=active]:border-b-2 data-[state=active]:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 py-4"
              >
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Swap
              </TabsTrigger>
              <TabsTrigger
                value="quests"
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 data-[state=active]:border-b-2 data-[state=active]:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 py-4"
              >
                <Target className="w-4 h-4 mr-2" />
                Quests
              </TabsTrigger>
              <TabsTrigger
                value="vault"
                className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-400 data-[state=active]:border-b-2 data-[state=active]:border-lime-400 hover:bg-lime-500/10 transition-all duration-300 py-4"
              >
                <Gift className="w-4 h-4 mr-2" />
                LootVault
              </TabsTrigger>
              <TabsTrigger
                value="liquidity"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 py-4"
              >
                <Plus className="w-4 h-4 mr-2" />
                Liquidity
              </TabsTrigger>
              <TabsTrigger
                value="referral"
                className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400 data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 py-4"
              >
                <Users className="w-4 h-4 mr-2" />
                Arena
              </TabsTrigger>
              <TabsTrigger
                value="utility"
                className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-400 data-[state=active]:border-b-2 data-[state=active]:border-pink-400 hover:bg-pink-500/10 transition-all duration-300 py-4"
              >
                <Coins className="w-4 h-4 mr-2" />
                $SWAP
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <Tabs value={activeTab} className="w-full">
          {/* Swap Interface */}
          <TabsContent value="swap" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Swap Panel */}
              <div className="lg:col-span-2">
                <Card className="bg-black/80 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 flex items-center">
                      <Zap className="w-5 h-5 mr-2 animate-pulse" />
                      Quantum Swap Engine
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* From Token */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">From</label>
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <Input
                              value={swapAmount}
                              onChange={(e) => setSwapAmount(e.target.value)}
                              placeholder="0.0"
                              className="bg-transparent border-none text-2xl font-bold text-white p-0 focus:ring-0"
                            />
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-black">SUI</span>
                              </div>
                              <span className="font-bold text-cyan-400">SUI</span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-400 mt-2">Balance: 1,234.56 SUI</div>
                        </div>
                      </div>
                    </div>

                    {/* Swap Arrow */}
                    <div className="flex justify-center">
                      <Button
                        size="icon"
                        className="bg-purple-500/20 border border-purple-500/50 hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 rounded-full"
                      >
                        <ArrowUpDown className="w-4 h-4 text-purple-400" />
                      </Button>
                    </div>

                    {/* To Token */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">To</label>
                      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-white">0.0</div>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-lime-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-black">USDC</span>
                            </div>
                            <span className="font-bold text-lime-400">USDC</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-2">Balance: 567.89 USDC</div>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-lime-500 hover:from-cyan-400 hover:via-purple-400 hover:to-lime-400 text-black font-bold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                      disabled={!walletConnected || !swapAmount}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      {walletConnected ? "Execute Quantum Swap" : "Connect Wallet to Swap"}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Tutorial Quest Panel */}
              <div className="space-y-6">
                <Card className="bg-black/80 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center">
                      <Gamepad2 className="w-5 h-5 mr-2 animate-bounce" />
                      Tutorial Quest
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm text-purple-400">3/5 Complete</span>
                      </div>
                      <Progress
                        value={60}
                        className="bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-2 bg-green-500/10 border border-green-500/30 rounded">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-green-400">Connect Wallet ✓</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-green-500/10 border border-green-500/30 rounded">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-green-400">First Swap ✓</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-yellow-400">Add Liquidity</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-purple-400">Reward Preview</span>
                        <Gift className="w-4 h-4 text-pink-400 animate-pulse" />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">+500 XP + Starter Loot Crate</div>
                    </div>
                  </CardContent>
                </Card>

                {/* XP Progress */}
                <Card className="bg-black/80 border-yellow-500/30 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-yellow-400 font-bold">Level {questData.level}</span>
                      <span className="text-sm text-gray-400">
                        {questData.currentXP}/{questData.nextLevelXP} XP
                      </span>
                    </div>
                    <Progress
                      value={(questData.currentXP / questData.nextLevelXP) * 100}
                      className="bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-yellow-500 [&>div]:to-orange-500"
                    />
                    <div className="text-xs text-gray-400 mt-2 text-center">
                      {questData.nextLevelXP - questData.currentXP} XP to next level
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Quest Center */}
          <TabsContent value="quests" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/80 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Active Missions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Swap Master", progress: 75, reward: "1000 XP", tier: "Bronze" },
                    { name: "Liquidity Provider", progress: 40, reward: "Epic Crate", tier: "Silver" },
                    { name: "Referral Champion", progress: 20, reward: "2500 XP", tier: "Gold" },
                  ].map((quest, i) => (
                    <div
                      key={i}
                      className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white">{quest.name}</span>
                        <Badge
                          className={`${quest.tier === "Bronze" ? "bg-orange-500/20 text-orange-400 border-orange-500/50" : quest.tier === "Silver" ? "bg-gray-500/20 text-gray-400 border-gray-500/50" : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"}`}
                        >
                          {quest.tier}
                        </Badge>
                      </div>
                      <Progress
                        value={quest.progress}
                        className="bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500 mb-2"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{quest.progress}% Complete</span>
                        <span className="text-purple-400 font-bold">{quest.reward}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center">
                    <Crown className="w-5 h-5 mr-2" />
                    Tier System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { tier: "Diamond", xp: "50,000+", color: "from-cyan-400 to-blue-400", current: false },
                    { tier: "Platinum", xp: "25,000+", color: "from-gray-300 to-gray-500", current: false },
                    { tier: "Gold", xp: "10,000+", color: "from-yellow-400 to-orange-400", current: false },
                    { tier: "Silver", xp: "2,500+", color: "from-gray-400 to-gray-600", current: true },
                    { tier: "Bronze", xp: "0+", color: "from-orange-400 to-red-400", current: false },
                  ].map((tier, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border ${tier.current ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50" : "bg-gray-900/30 border-gray-700"} transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tier.color}`}></div>
                          <span className={`font-bold ${tier.current ? "text-purple-400" : "text-gray-400"}`}>
                            {tier.tier}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">{tier.xp} XP</span>
                      </div>
                      {tier.current && <div className="text-xs text-purple-400 mt-1 animate-pulse">CURRENT TIER</div>}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* LootVault */}
          <TabsContent value="vault" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Starter Crate", rarity: "Common", glow: "lime", available: 3 },
                { name: "Epic Loot Box", rarity: "Epic", glow: "purple", available: 1 },
                { name: "Legendary Vault", rarity: "Legendary", glow: "yellow", available: 0 },
                { name: "Mythic Chest", rarity: "Mythic", glow: "cyan", available: 0 },
              ].map((crate, i) => (
                <Card
                  key={i}
                  className={`bg-black/80 border-${crate.glow}-500/30 backdrop-blur-sm hover:border-${crate.glow}-400/50 transition-all duration-300 ${crate.available > 0 ? "hover:scale-105" : "opacity-50"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-${crate.glow}-400/20 to-${crate.glow}-600/20 border-2 border-${crate.glow}-500/50 rounded-lg flex items-center justify-center ${crate.available > 0 ? "animate-pulse" : ""}`}
                    >
                      <Gift className={`w-10 h-10 text-${crate.glow}-400`} />
                    </div>
                    <h3 className="font-bold text-white mb-2">{crate.name}</h3>
                    <Badge
                      className={`bg-${crate.glow}-500/20 text-${crate.glow}-400 border-${crate.glow}-500/50 mb-3`}
                    >
                      {crate.rarity}
                    </Badge>
                    <div className="text-sm text-gray-400 mb-4">Available: {crate.available}</div>
                    <Button
                      className={`w-full bg-gradient-to-r from-${crate.glow}-500/20 to-${crate.glow}-600/20 border border-${crate.glow}-500/50 hover:from-${crate.glow}-500/30 hover:to-${crate.glow}-600/30 text-${crate.glow}-400`}
                      disabled={crate.available === 0}
                    >
                      {crate.available > 0 ? "Open Crate" : "Locked"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Liquidity */}
          <TabsContent value="liquidity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/80 border-blue-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Add Liquidity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Token A</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        <span className="font-bold text-cyan-400">SUI</span>
                      </div>
                      <Input placeholder="0.0" className="mt-2 bg-transparent border-gray-600" />
                    </div>
                    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Token B</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-lime-400 rounded-full"></div>
                        <span className="font-bold text-lime-400">USDC</span>
                      </div>
                      <Input placeholder="0.0" className="mt-2 bg-transparent border-gray-600" />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-black font-bold">
                    Add Liquidity
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Coins className="w-5 h-5 mr-2" />
                    LP Token Staking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">SUI-USDC LP</span>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">45.2% APY</Badge>
                    </div>
                    <div className="text-sm text-gray-400">Staked: 1,234.56 LP</div>
                    <div className="text-sm text-green-400">Rewards: 45.67 $SWAP</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 text-black font-bold">
                    Claim Rewards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Referral Arena */}
          <TabsContent value="referral" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/80 border-yellow-500/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { rank: 1, address: "0x1234...5678", volume: "1,234,567", xp: "45,678", icon: "👑" },
                        { rank: 2, address: "0x2345...6789", volume: "987,654", xp: "34,567", icon: "🥈" },
                        { rank: 3, address: "0x3456...7890", volume: "765,432", xp: "23,456", icon: "🥉" },
                        { rank: 4, address: "0x4567...8901", volume: "543,210", xp: "12,345", icon: "🏅" },
                        { rank: 5, address: "0x5678...9012", volume: "321,098", xp: "8,765", icon: "⭐" },
                      ].map((user, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-yellow-500/50 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">{user.icon}</span>
                            <div>
                              <div className="font-bold text-white">#{user.rank}</div>
                              <div className="text-sm text-gray-400">{user.address}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-400 font-bold">${user.volume}</div>
                            <div className="text-sm text-gray-400">{user.xp} XP</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-black/80 border-pink-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Your Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">12</div>
                    <div className="text-sm text-gray-400">Referrals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">$45,678</div>
                    <div className="text-sm text-gray-400">Total Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">2,345 XP</div>
                    <div className="text-sm text-gray-400">Earned</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold">
                    Share Referral Link
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Utility Token */}
          <TabsContent value="utility" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black/80 border-pink-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center">
                    <Flame className="w-5 h-5 mr-2" />
                    Boost Powers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">2x XP Boost</span>
                      <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/50">100 $SWAP</Badge>
                    </div>
                    <div className="text-sm text-gray-400">Duration: 24 hours</div>
                    <Button className="w-full mt-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/50 text-pink-400">
                      Activate
                    </Button>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Fee Reduction</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">250 $SWAP</Badge>
                    </div>
                    <div className="text-sm text-gray-400">50% off trading fees</div>
                    <Button className="w-full mt-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-400">
                      Activate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Unlock Loot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Epic Crate Key</span>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">500 $SWAP</Badge>
                    </div>
                    <div className="text-sm text-gray-400">Unlock Epic tier rewards</div>
                    <Button className="w-full mt-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-400">
                      Purchase
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Coins className="w-5 h-5 mr-2" />
                    Staking Pool
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">12.5%</div>
                    <div className="text-sm text-gray-400">APY</div>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Your Stake</div>
                    <div className="text-xl font-bold text-white">1,234 $SWAP</div>
                    <div className="text-sm text-green-400">Rewards: 45.67 $SWAP</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 text-black font-bold">
                    Claim Rewards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 bg-black/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">© 2024 SimpleSwap DEX - Powered by Sui Blockchain</div>
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400">
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
