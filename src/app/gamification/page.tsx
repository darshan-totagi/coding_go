"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { SubNavbar } from "@/components/SubNavbar";
import { Flame, Target, CheckCircle2, Circle } from "lucide-react";

export default function GamificationPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;

  const dailyMissions = [
    { id: "m1", title: "Daily Challenge Master", desc: "Solve today's active coding challenge.", reward: "+20 Coins, +30 XP", done: user.solvedProblems.length > 2 },
    { id: "m2", title: "Bookmark Checker", desc: "Save at least 1 problem to bookmarks list.", reward: "+5 Coins", done: user.bookmarks.length > 0 },
    { id: "m3", title: "Resume Auditor", desc: "Initiate an ATS resume score audit check.", reward: "+10 Coins, +15 XP", done: user.resumeScore > 68 }
  ];

  const completedCount = dailyMissions.filter(m => m.done).length;

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <SubNavbar />

        <main className="p-6 max-w-4xl w-full mx-auto space-y-6 flex-grow overflow-y-auto text-left">
          {/* Header */}
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              Daily Coding Missions <Target className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Track and complete your daily preparation milestones to unlock career-boosting achievements.
            </p>
          </div>

          {/* Progress Overview Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-brand-purple-500/10 rounded-full blur-xl"></div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Missions Progress</h3>
                <p className="text-xs text-gray-400">Complete all daily milestones for maximum rewards.</p>
              </div>
              <span className="text-lg font-black text-brand-cyan-400">
                {completedCount} / {dailyMissions.length} Done
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-brand-purple-500 to-brand-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / dailyMissions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Daily coding missions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" /> Active Daily Objectives
            </h3>
            
            <div className="space-y-3">
              {dailyMissions.map((m) => (
                <div
                  key={m.id}
                  className={`p-5 rounded-2xl border flex items-center justify-between gap-6 transition ${
                    m.done 
                      ? "bg-emerald-950/5 border-emerald-500/20 shadow-sm shadow-emerald-950/10" 
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      {m.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${m.done ? "text-emerald-400 line-through opacity-80" : "text-white"}`}>
                        {m.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{m.desc}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold border ${
                      m.done 
                        ? "bg-emerald-950/20 border-emerald-500/25 text-emerald-400"
                        : "bg-brand-cyan-950/20 border-brand-cyan-500/25 text-brand-cyan-400"
                    }`}>
                      {m.reward}
                    </span>
                    {m.done ? (
                      <span className="text-[10px] text-emerald-400 font-bold tracking-wide uppercase">Claimed ✓</span>
                    ) : (
                      <span className="text-[10px] text-zinc-500 font-bold tracking-wide uppercase">Active</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-12">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
