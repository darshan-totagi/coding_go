"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { problems } from "@/data/problems";
import { contests } from "@/data/contests";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Award,
  Zap,
  Target,
  Sparkles,
  BookOpen,
  Calendar,
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If user is not logged in, show a state or redirect
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!user) {
    return (
      <div className="min-h-screen bg-mesh-dark flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Please Log In</h3>
        <p className="text-gray-400 text-sm mb-6">You need to sign in to access your coding dashboard.</p>
        <Link href="/auth">
          <button className="px-6 py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-sm font-semibold transition">
            Go to Login
          </button>
        </Link>
      </div>
    );
  }

  // Calculate solved counts
  const solvedList = problems.filter((p) => user.solvedProblems.includes(p.id));
  const easySolved = solvedList.filter((p) => p.difficulty === "Easy").length;
  const mediumSolved = solvedList.filter((p) => p.difficulty === "Medium").length;
  const hardSolved = solvedList.filter((p) => p.difficulty === "Hard").length;
  const totalSolved = solvedList.length;

  const totalEasy = problems.filter((p) => p.difficulty === "Easy").length;
  const totalMedium = problems.filter((p) => p.difficulty === "Medium").length;
  const totalHard = problems.filter((p) => p.difficulty === "Hard").length;

  // AI recommendations
  const recommendedProblems = problems
    .filter((p) => !user.solvedProblems.includes(p.id))
    .slice(0, 3);

  // Heatmap rendering helpers
  const weeks = Array.from({ length: 24 }); // 24 weeks columns
  const daysOfWeek = Array.from({ length: 7 }); // 7 rows

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-grow">
          {/* Greeting Banner */}
          <div className="p-6 rounded-2xl glass-panel-glow border border-brand-purple-500/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-brand-purple-500/10 rounded-full blur-2xl"></div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                Welcome back, {user.name}! <Sparkles className="w-5 h-5 text-brand-purple-400" />
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                You are currently in the top <strong className="text-white">15%</strong> of active software candidates.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="block text-[10px] text-gray-500 uppercase font-bold">XP Level</span>
                <span className="text-base font-extrabold text-brand-cyan-400">{user.level}</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="block text-[10px] text-gray-500 uppercase font-bold">Codecoins</span>
                <span className="text-base font-extrabold text-yellow-400">🪙 {user.coins}</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-center">
                <span className="block text-[10px] text-gray-500 uppercase font-bold">Rating</span>
                <span className="text-base font-extrabold text-brand-purple-400">{user.rating}</span>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left side stats and heatmap (col-span-2) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Circular / Bar stats of solved */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-purple-400" /> Coding Progress Overview
                  </h3>
                  <span className="text-xs text-brand-cyan-400 font-semibold">{totalSolved} / {problems.length} Solved</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Easy */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-emerald-400 font-semibold">Easy</span>
                      <span className="text-gray-400">{easySolved}/{totalEasy}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${(easySolved / (totalEasy || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-brand-cyan-400 font-semibold">Medium</span>
                      <span className="text-gray-400">{mediumSolved}/{totalMedium}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-cyan-400 rounded-full"
                        style={{ width: `${(mediumSolved / (totalMedium || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Hard */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-brand-rose-500 font-semibold">Hard</span>
                      <span className="text-gray-400">{hardSolved}/{totalHard}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-rose-500 rounded-full"
                        style={{ width: `${(hardSolved / (totalHard || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contributions Heatmap */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-purple-400" /> Solved Heatmap (Activity Log)
                  </h3>
                  <span className="text-xs text-gray-500">Last 24 Weeks</span>
                </div>

                <div className="overflow-x-auto p-2 bg-black/35 rounded-xl border border-white/5">
                  <div className="min-w-[650px] flex gap-2">
                    {/* Days row label */}
                    <div className="flex flex-col justify-between text-[9px] text-gray-600 pt-5 pr-1 font-mono">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>
                    <div className="flex-1 grid grid-flow-col auto-cols-max gap-1">
                      {weeks.map((_, wIdx) => (
                        <div key={wIdx} className="grid grid-rows-7 gap-1">
                          {daysOfWeek.map((_, dIdx) => {
                            // Map coordinates to some active color depending on dummy state index
                            const totalDays = wIdx * 7 + dIdx;
                            let colorClass = "bg-[#161b22]"; // default dark empty
                            if (totalDays % 11 === 0) colorClass = "bg-emerald-950";
                            else if (totalDays % 15 === 0) colorClass = "bg-emerald-800";
                            else if (totalDays % 27 === 0) colorClass = "bg-emerald-600";
                            else if (totalDays % 38 === 0) colorClass = "bg-emerald-400";
                            
                            return (
                              <div
                                key={dIdx}
                                className={`w-3 h-3 rounded-[2px] transition ${colorClass}`}
                                title={`Activity index: ${totalDays}`}
                              ></div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges and achievements */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-purple-400" /> Unlocked Achievements
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {user.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-brand-purple-500/30 transition"
                    >
                      <span className="text-3xl block animate-pulse">{badge.icon}</span>
                      <h4 className="text-xs font-bold text-white">{badge.name}</h4>
                      <p className="text-[10px] text-gray-400">{badge.desc}</p>
                    </div>
                  ))}
                  {/* Placeholders */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-dashed text-center flex flex-col justify-center items-center opacity-40">
                    <Trophy className="w-6 h-6 text-gray-500 mb-1" />
                    <span className="text-[10px] text-gray-400">Locked Badge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side AI and Contests updates */}
            <div className="space-y-6">
              {/* Weak topics detection and suggestions */}
              <div className="glass-panel-glow p-6 rounded-2xl border border-brand-purple-500/20 space-y-4">
                <div className="flex items-center gap-2 text-brand-purple-400">
                  <Zap className="w-5 h-5 text-brand-purple-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Coach Suggestions</h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-brand-purple-950/20 rounded-xl border border-brand-purple-500/10">
                    <h4 className="text-xs font-bold text-brand-purple-300">Weak Topics Identified</h4>
                    <p className="text-xs text-gray-400 mt-1">Graphs, Dynamic Programming. Let&apos;s fix that.</p>
                  </div>

                  <h4 className="text-xs font-semibold text-white">Recommended Questions:</h4>
                  <div className="space-y-2">
                    {recommendedProblems.map((prob) => (
                      <Link
                        key={prob.id}
                        href={`/problems?id=${prob.id}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-brand-cyan-500/30 hover:bg-white/10 transition"
                      >
                        <div className="overflow-hidden">
                          <span className="text-xs font-bold text-white truncate block">{prob.title}</span>
                          <span className="text-[10px] text-gray-400">Tags: {prob.tags.slice(0,2).join(", ")}</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            prob.difficulty === "Easy"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : prob.difficulty === "Medium"
                              ? "bg-brand-cyan-500/10 text-brand-cyan-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {prob.difficulty}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resume ATS check */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-purple-400" /> ATS Resume Score
                  </h3>
                  <span className="text-xs font-bold text-brand-cyan-400">{user.resumeScore}/100</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/5 rounded-full h-2">
                    <div
                      className="bg-brand-cyan-400 h-full rounded-full"
                      style={{ width: `${user.resumeScore}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your resume has moderate keyphrase matches for Google / Uber roles. Run an AI optimization checks now.
                </p>
                <Link href="/resume" className="block w-full">
                  <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold transition">
                    Audit Resume
                  </button>
                </Link>
              </div>

              {/* Upcoming Contests */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-purple-400" /> Contests Enrolling
                </h3>
                <div className="space-y-3">
                  {contests.slice(0,2).map((contest) => (
                    <div key={contest.id} className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">{contest.title}</span>
                        <span className="text-[10px] text-brand-purple-400 font-semibold">{contest.type}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-gray-400">
                        <span>{contest.startTime}</span>
                        <span>{contest.registeredCount} joined</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
