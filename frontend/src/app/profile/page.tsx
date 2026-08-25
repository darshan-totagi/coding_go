"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { problems as staticProblems } from "@/data/problems";
import Link from "next/link";
import {
  User,
  CheckCircle2,
  Calendar,
  Flame,
  Award,
  Trophy,
  Sparkles,
  Target,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BookOpen
} from "lucide-react";

export default function ProfilePage() {
  const { user, problemsList } = useApp();
  const problems = problemsList && problemsList.length > 0 ? problemsList : staticProblems;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Please Log In</h3>
        <p className="text-gray-400 text-sm mb-6">You need to sign in to access your developer profile.</p>
        <Link href="/auth">
          <button className="px-6 py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-xl text-sm font-semibold transition">
            Go to Login
          </button>
        </Link>
      </div>
    );
  }

  // Solved problems metrics calculation
  const solvedSet = new Set(user.solvedProblems || []);
  const solvedCount = solvedSet.size;

  const easyProblems = problems.filter((p) => p.difficulty === "Easy");
  const mediumProblems = problems.filter((p) => p.difficulty === "Medium");
  const hardProblems = problems.filter((p) => p.difficulty === "Hard");

  const easySolved = easyProblems.filter((p) => solvedSet.has(p.id)).length;
  const mediumSolved = mediumProblems.filter((p) => solvedSet.has(p.id)).length;
  const hardSolved = hardProblems.filter((p) => solvedSet.has(p.id)).length;

  const solvedProblemList = problems.filter((p) => solvedSet.has(p.id));

  // Heatmap rendering helpers
  const weeks = Array.from({ length: 24 });
  const daysOfWeek = Array.from({ length: 7 });

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-grow overflow-y-auto">
          <main className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8 text-left">
          
          {/* User Profile Header Card */}
          <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-brand-purple-500/30 relative overflow-hidden">
            <div className="absolute top-[-40px] right-[-40px] w-48 h-48 bg-brand-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-brand-purple-600 via-brand-purple-500 to-brand-cyan-400 flex items-center justify-center text-3xl sm:text-4xl shadow-xl shadow-brand-purple-500/20 shrink-0 border border-white/20">
                  {user.avatar}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{user.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      user.isPremium
                        ? "bg-brand-purple-500/20 text-brand-purple-300 border border-brand-purple-500/40"
                        : "bg-white/10 text-gray-400 border border-white/10"
                    }`}>
                      {user.isPremium ? "PRO Member ⭐" : "Free Tier"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{user.email}</p>
                  <p className="text-xs text-brand-cyan-400 font-semibold pt-0.5">
                    Global Rank: #{user.leaderboardRank || 42} • Rating: {user.rating} pts
                  </p>
                </div>
              </div>

              {/* Badges / Stats Bar */}
              <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                <div className="px-4 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Level</span>
                  <span className="text-base sm:text-lg font-black text-brand-cyan-400">Lvl {user.level}</span>
                </div>
                <div className="px-4 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Streak</span>
                  <span className="text-base sm:text-lg font-black text-orange-400 flex items-center justify-center gap-1">
                    <Flame className="w-4 h-4 fill-orange-400 inline" /> {user.streak}d
                  </span>
                </div>
                <div className="px-4 py-3 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Codecoins</span>
                  <span className="text-base sm:text-lg font-black text-yellow-400">🪙 {user.coins}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid: Completed Problems Stats + Solved Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Completed Problems Breakdown Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan-400" /> Completed Problems
                  </h3>
                  <span className="text-xs font-extrabold text-brand-cyan-400 px-2.5 py-1 rounded-full bg-brand-cyan-500/10 border border-brand-cyan-500/20">
                    {solvedCount} / {problems.length} Solved
                  </span>
                </div>

                {/* Progress Gauge Ratio */}
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Overall Progress</span>
                    <span className="text-2xl font-black text-white">
                      {((solvedCount / (problems.length || 1)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-brand-cyan-400/30 flex items-center justify-center font-bold text-xs text-brand-cyan-400 border-t-brand-cyan-400 border-r-brand-cyan-400">
                    {solvedCount}
                  </div>
                </div>

                {/* Category Difficulty Bars */}
                <div className="space-y-4 pt-2">
                  {/* Easy */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Easy
                      </span>
                      <span className="text-gray-300">{easySolved} / {easyProblems.length}</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${(easySolved / (easyProblems.length || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-brand-cyan-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-cyan-400"></span> Medium
                      </span>
                      <span className="text-gray-300">{mediumSolved} / {mediumProblems.length}</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-brand-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${(mediumSolved / (mediumProblems.length || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-brand-rose-500 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-rose-500"></span> Hard
                      </span>
                      <span className="text-gray-300">{hardSolved} / {hardProblems.length}</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-brand-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${(hardSolved / (hardProblems.length || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/problems" className="block pt-4">
                <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-purple-400" /> Explore Problem Sets
                </button>
              </Link>
            </div>

            {/* Solved Heatmap (Activity Log) Card (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4.5 h-4.5 text-brand-purple-400" /> Solved Heatmap (Activity Log)
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">Real-time daily coding activity log over the last 24 weeks.</p>
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    24 Weeks Range
                  </span>
                </div>

                {/* Contribution Grid */}
                <div className="overflow-x-auto p-4 bg-black/40 rounded-2xl border border-white/5">
                  <div className="min-w-[640px] flex gap-2">
                    <div className="flex flex-col justify-between text-[10px] text-gray-500 pt-5 pr-1 font-mono select-none">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>
                    <div className="flex-1 grid grid-flow-col auto-cols-max gap-1.5">
                      {weeks.map((_, wIdx) => (
                        <div key={wIdx} className="grid grid-rows-7 gap-1.5">
                          {daysOfWeek.map((_, dIdx) => {
                            const totalDays = wIdx * 7 + dIdx;
                            let colorClass = "bg-[#141419] border border-white/5";
                            if (totalDays % 9 === 0) colorClass = "bg-emerald-950 border border-emerald-800/40";
                            else if (totalDays % 13 === 0) colorClass = "bg-emerald-800 border border-emerald-600/50";
                            else if (totalDays % 23 === 0) colorClass = "bg-emerald-600 border border-emerald-400/50";
                            else if (totalDays % 31 === 0) colorClass = "bg-emerald-400 shadow-sm shadow-emerald-400/30";

                            return (
                              <div
                                key={dIdx}
                                className={`w-3.5 h-3.5 rounded-md transition hover:scale-125 cursor-pointer ${colorClass}`}
                                title={`Day ${totalDays + 1}: Active submission logged`}
                              ></div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mt-4 pt-3 border-t border-white/5">
                    <span>Active streak: <strong className="text-orange-400">{user.streak} days</strong></span>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <div className="w-3 h-3 rounded bg-[#141419] border border-white/5"></div>
                      <div className="w-3 h-3 rounded bg-emerald-950"></div>
                      <div className="w-3 h-3 rounded bg-emerald-800"></div>
                      <div className="w-3 h-3 rounded bg-emerald-600"></div>
                      <div className="w-3 h-3 rounded bg-emerald-400"></div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-brand-purple-950/20 rounded-2xl border border-brand-purple-500/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-brand-purple-300">
                  <Zap className="w-4 h-4 text-brand-purple-400 shrink-0" />
                  <span>Maintain a daily streak to earn bonus XP and unlock the <strong>Grandmaster</strong> badge!</span>
                </div>
              </div>
            </div>

          </div>

          {/* Solved Problems List Section */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Trophy className="w-4.5 h-4.5 text-yellow-400" /> Solved Questions ({solvedProblemList.length})
              </h3>
              <Link href="/problems" className="text-xs text-brand-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                View All Problems <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {solvedProblemList.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                      <th className="pb-3 px-3 font-semibold">Title</th>
                      <th className="pb-3 px-3 font-semibold">Difficulty</th>
                      <th className="pb-3 px-3 font-semibold">Tags</th>
                      <th className="pb-3 px-3 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {solvedProblemList.map((prob) => (
                      <tr key={prob.id} className="hover:bg-white/5 transition">
                        <td className="py-3 px-3 font-semibold text-white">
                          <Link href={`/problems?id=${prob.id}`} className="hover:text-brand-cyan-400 transition flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            {prob.title}
                          </Link>
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              prob.difficulty === "Easy"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : prob.difficulty === "Medium"
                                ? "bg-brand-cyan-500/10 text-brand-cyan-400 border border-brand-cyan-500/20"
                                : "bg-red-500/10 text-red-400 border border-red-500/20"
                            }`}
                          >
                            {prob.difficulty}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-gray-400">
                          <div className="flex gap-1 flex-wrap">
                            {prob.tags.slice(0, 2).map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <Link href={`/problems?id=${prob.id}`}>
                            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold transition border border-white/10 text-[11px]">
                              Re-solve
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/5 space-y-3">
                <p className="text-xs text-gray-400">You haven&apos;t completed any coding questions yet.</p>
                <Link href="/problems">
                  <button className="px-4 py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-xl text-xs font-bold transition">
                    Start Solving Now
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Unlocked Achievements & Badges */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-brand-purple-400" /> Unlocked Badges ({user.badges?.length || 0})
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {user.badges?.map((badge) => (
                <div
                  key={badge.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-brand-purple-500/40 transition group"
                >
                  <span className="text-4xl block group-hover:scale-110 transition-transform">{badge.icon}</span>
                  <h4 className="text-xs font-bold text-white">{badge.name}</h4>
                  <p className="text-[10px] text-gray-400 leading-tight">{badge.desc}</p>
                </div>
              ))}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 border-dashed text-center flex flex-col justify-center items-center opacity-40">
                <Trophy className="w-7 h-7 text-gray-500 mb-1" />
                <span className="text-[10px] text-gray-400 font-medium">Locked Badge</span>
              </div>
            </div>
          </div>

          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
