"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { mockLeaderboard } from "@/data/contests";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Zap, Coins, Flame, Award, HelpCircle } from "lucide-react";

export default function GamificationPage() {
  const { user, spinWheel } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Spin wheel animation state
  const [spinning, setSpinning] = useState(false);
  const [spinOutcome, setSpinOutcome] = useState<any>(null);
  const [rotationDegrees, setRotationDegrees] = useState(0);

  if (!user) return null;

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setSpinOutcome(null);

    // Pick random outcome degrees
    const randomRotations = 5 + Math.floor(Math.random() * 5); // 5 to 10 full turns
    const extraDegrees = Math.floor(Math.random() * 360);
    const finalRot = randomRotations * 360 + extraDegrees;
    setRotationDegrees(finalRot);

    setTimeout(() => {
      const outcome = spinWheel();
      setSpinOutcome(outcome);
      setSpinning(false);
    }, 3000); // 3 seconds spin
  };

  const dailyMissions = [
    { id: "m1", title: "Daily Challenge Master", desc: "Solve today's active coding challenge.", reward: "+20 Coins, +30 XP", done: user.solvedProblems.length > 2 },
    { id: "m2", title: "Bookmark Checker", desc: "Save at least 1 problem to bookmarks list.", reward: "+5 Coins", done: user.bookmarks.length > 0 },
    { id: "m3", title: "Resume Auditor", desc: "Initiate an ATS resume score audit check.", reward: "+10 Coins, +15 XP", done: user.resumeScore > 68 }
  ];

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-grow text-left">
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              Playground & Daily Missions <Gift className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Complete practice goals, spin the daily wheel to boost XP boosts, and see your rank changes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left: Daily Missions & Leaderboard */}
            <div className="lg:col-span-2 space-y-6">
              {/* Daily coding missions */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" /> Active Daily Missions
                </h3>
                <div className="space-y-3">
                  {dailyMissions.map((m) => (
                    <div
                      key={m.id}
                      className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition ${
                        m.done ? "bg-emerald-950/10 border-emerald-500/20" : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div>
                        <h4 className={`text-sm font-bold ${m.done ? "text-emerald-400 line-through" : "text-white"}`}>
                          {m.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{m.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-brand-cyan-400 font-bold block mb-1">
                          {m.reward}
                        </span>
                        {m.done ? (
                          <span className="text-xs text-emerald-400 font-bold">Claimed ✓</span>
                        ) : (
                          <span className="text-xs text-gray-500 font-medium">In Progress</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contest Leaderboards */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-purple-400" /> Global Leaderboard Standings
                </h3>

                <div className="overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-xs text-left text-gray-400">
                    <thead className="bg-white/5 text-[10px] uppercase font-bold text-gray-400 border-b border-white/10">
                      <tr>
                        <th className="px-4 py-3">Rank</th>
                        <th className="px-4 py-3">User</th>
                        <th className="px-4 py-3 text-center">Score</th>
                        <th className="px-4 py-3 text-right">Solved</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {/* Top list */}
                      {mockLeaderboard.slice(0, 5).map((entry) => (
                        <tr key={entry.rank} className="hover:bg-white/[0.02] transition">
                          <td className="px-4 py-3 font-mono font-bold text-white">{entry.rank}</td>
                          <td className="px-4 py-3 flex items-center gap-2">
                            <span>{entry.avatar}</span>
                            <span className="font-semibold text-white">{entry.username}</span>
                          </td>
                          <td className="px-4 py-3 text-center text-brand-cyan-400 font-bold">{entry.score}</td>
                          <td className="px-4 py-3 text-right">{entry.solved}</td>
                        </tr>
                      ))}
                      {/* Current user node */}
                      <tr className="bg-brand-purple-950/20 font-bold border-t border-brand-purple-500/20">
                        <td className="px-4 py-3 text-white">#1284</td>
                        <td className="px-4 py-3 flex items-center gap-2 text-white">
                          <span>{user.avatar}</span>
                          <span>{user.name} (You)</span>
                        </td>
                        <td className="px-4 py-3 text-center text-brand-cyan-400">{user.rating}</td>
                        <td className="px-4 py-3 text-right">{user.solvedProblems.length}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right: Spin Wheel */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-6">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2">
                  <Coins className="w-4 h-4 text-yellow-500" /> Daily Rewards Wheel
                </h3>
                <p className="text-[10px] text-gray-500">Spin the wheel once a day to secure coding boosts.</p>
              </div>

              {/* Wheel graphics */}
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <motion.div
                  animate={{ rotate: rotationDegrees }}
                  transition={spinning ? { duration: 3, ease: "easeOut" } : { duration: 0 }}
                  className="w-full h-full rounded-full border-4 border-brand-purple-500 bg-gradient-to-tr from-brand-purple-900 to-brand-cyan-950 flex items-center justify-center relative overflow-hidden shadow-glass"
                  style={{ transformOrigin: "center" }}
                >
                  {/* Dividers */}
                  <div className="absolute inset-0 border-t border-brand-purple-500/30 transform rotate-45"></div>
                  <div className="absolute inset-0 border-t border-brand-purple-500/30 transform rotate-90"></div>
                  <div className="absolute inset-0 border-t border-brand-purple-500/30 transform rotate-135"></div>
                  {/* labels */}
                  <div className="absolute top-4 text-[9px] font-bold text-white font-mono">100 XP</div>
                  <div className="absolute bottom-4 text-[9px] font-bold text-white font-mono">50 CC</div>
                  <div className="absolute right-4 text-[9px] font-bold text-white font-mono">10 CC</div>
                  <div className="absolute left-2 text-[9px] font-bold text-white font-mono">1-Day PRO</div>
                </motion.div>
                {/* Center peg pointer */}
                <div className="absolute top-[-8px] w-4 h-4 bg-yellow-500 rounded-full shadow-neon-purple flex items-center justify-center border border-white z-10">
                  ▼
                </div>
              </div>

              <button
                onClick={handleSpin}
                disabled={spinning}
                className="w-full py-2.5 bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white rounded-xl text-xs font-bold shadow-glass transition"
              >
                {spinning ? "Spinning wheel..." : "Spin the Wheel"}
              </button>

              <AnimatePresence>
                {spinOutcome && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-3 bg-brand-purple-950/20 border border-brand-purple-500/20 text-brand-purple-300 text-xs font-semibold rounded-lg"
                  >
                    🎉 {spinOutcome.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
