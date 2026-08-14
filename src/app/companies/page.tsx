"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubNavbar } from "@/components/SubNavbar";
import { RazorpayModal } from "@/components/RazorpayModal";
import { problems as staticProblems, Problem } from "@/data/problems";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Building2,
  CheckCircle,
  Lock,
  Crown,
  BookOpen,
  TrendingUp,
  Sparkles,
  Compass,
  Trophy,
  ChevronRight,
  Filter,
  Check
} from "lucide-react";

// Company specific brand color presets
const COMPANY_STYLES: { [key: string]: { gradient: string; border: string; text: string; accent: string } } = {
  Google: {
    gradient: "from-red-500 via-yellow-500 via-blue-500 to-green-500",
    border: "group-hover:border-blue-500/50",
    text: "text-blue-400",
    accent: "#3b82f6"
  },
  Microsoft: {
    gradient: "from-blue-600 to-teal-500",
    border: "group-hover:border-teal-500/50",
    text: "text-teal-400",
    accent: "#0d9488"
  },
  Amazon: {
    gradient: "from-orange-400 to-amber-500",
    border: "group-hover:border-orange-500/50",
    text: "text-orange-400",
    accent: "#f97316"
  },
  Meta: {
    gradient: "from-blue-600 to-indigo-500",
    border: "group-hover:border-blue-500/50",
    text: "text-blue-400",
    accent: "#2563eb"
  },
  Apple: {
    gradient: "from-gray-300 to-gray-600",
    border: "group-hover:border-gray-400/50",
    text: "text-gray-300",
    accent: "#9ca3af"
  },
  Netflix: {
    gradient: "from-red-600 to-rose-700",
    border: "group-hover:border-red-500/50",
    text: "text-red-400",
    accent: "#ef4444"
  },
  Uber: {
    gradient: "from-zinc-100 to-zinc-400",
    border: "group-hover:border-zinc-300/50",
    text: "text-zinc-300",
    accent: "#d4d4d8"
  },
  Adobe: {
    gradient: "from-red-500 to-orange-600",
    border: "group-hover:border-red-500/50",
    text: "text-red-400",
    accent: "#f43f5e"
  },
  NVIDIA: {
    gradient: "from-green-500 to-emerald-600",
    border: "group-hover:border-green-500/50",
    text: "text-green-400",
    accent: "#22c55e"
  },
  Salesforce: {
    gradient: "from-cyan-400 to-blue-500",
    border: "group-hover:border-cyan-500/50",
    text: "text-cyan-400",
    accent: "#22d3ee"
  },
  Default: {
    gradient: "from-purple-600 to-pink-500",
    border: "group-hover:border-purple-500/50",
    text: "text-purple-400",
    accent: "#a855f7"
  }
};

export default function CompaniesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Prep Hub...</div>}>
      <CompaniesContent />
    </Suspense>
  );
}

function CompaniesContent() {
  const { user, problemsList } = useApp();
  const problems = problemsList && problemsList.length > 0 ? problemsList : staticProblems;
  const searchParams = useSearchParams();
  const router = useRouter();

  // Selected Company from query params or state
  const companyQuery = searchParams.get("name");
  
  // State variables
  const [companySearch, setCompanySearch] = useState("");
  const [problemSearch, setProblemSearch] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // Compute stats per company dynamically
  const companyStats = useMemo(() => {
    const uniqueCompanies = Array.from(
      new Set(problems.flatMap((p) => p.companies || []))
    ).filter(Boolean);

    return uniqueCompanies.map((name) => {
      const companyProblems = problems.filter((p) => p.companies?.includes(name));
      const easyProblems = companyProblems.filter((p) => p.difficulty === "Easy");
      const mediumProblems = companyProblems.filter((p) => p.difficulty === "Medium");
      const hardProblems = companyProblems.filter((p) => p.difficulty === "Hard");
      const solvedCount = companyProblems.filter((p) => user?.solvedProblems?.includes(p.id)).length;
      
      const percentSolved = companyProblems.length > 0 
        ? Math.round((solvedCount / companyProblems.length) * 100) 
        : 0;

      return {
        name,
        total: companyProblems.length,
        easy: easyProblems.length,
        medium: mediumProblems.length,
        hard: hardProblems.length,
        solved: solvedCount,
        percentSolved,
        problems: companyProblems
      };
    }).sort((a, b) => b.total - a.total); // Sort by total questions asked (Big Tech first)
  }, [problems, user]);

  // Determine active company
  const activeCompany = useMemo(() => {
    if (companyStats.length === 0) return null;
    if (companyQuery) {
      const found = companyStats.find(c => c.name.toLowerCase() === companyQuery.toLowerCase());
      if (found) return found;
    }
    return companyStats[0]; // Default to first company
  }, [companyStats, companyQuery]);

  // Filter companies based on search
  const filteredCompanies = useMemo(() => {
    return companyStats.filter(c => 
      c.name.toLowerCase().includes(companySearch.toLowerCase())
    );
  }, [companyStats, companySearch]);

  // Filter problems for active company based on search/difficulty
  const filteredProblems = useMemo(() => {
    if (!activeCompany) return [];
    return activeCompany.problems.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(problemSearch.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(problemSearch.toLowerCase()));
      const matchesDiff = selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
      return matchesSearch && matchesDiff;
    });
  }, [activeCompany, problemSearch, selectedDifficulty]);

  // Navigation action
  const selectCompany = (name: string) => {
    router.push(`/companies?name=${encodeURIComponent(name)}`);
    setProblemSearch("");
    setSelectedDifficulty("All");
  };

  const handleSolve = (problemId: string) => {
    if (!user) {
      router.push("/auth");
    } else if (!user.isPremium) {
      setIsPayModalOpen(true);
    } else {
      router.push(`/problems?id=${problemId}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030303]">
      <Header />
      <SubNavbar />

      <div className="flex-grow flex flex-col">
        {/* Banner Section */}
        <section className="relative overflow-hidden py-12 px-6 border-b border-white/5 bg-gradient-to-b from-[#0a0a0f] to-transparent">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase animate-pulse">
                <Sparkles className="w-3 h-3 text-orange-400" /> Career Preparation
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans tracking-tight">
                Company-Specific <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Interview Prep</span>
              </h1>
              <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
                Filter and master programming challenges frequently asked in real-world interviews at Google, Meta, Amazon, and other top-tier technology giants.
              </p>
            </div>

            {/* Quick stats board */}
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="text-center px-4 border-r border-white/5">
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold">Companies</span>
                <span className="text-xl font-black text-white">{companyStats.length}</span>
              </div>
              <div className="text-center px-4 border-r border-white/5">
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Prep Qs</span>
                <span className="text-xl font-black text-orange-400">{problems.length}</span>
              </div>
              <div className="text-center px-4">
                <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold">Solved</span>
                <span className="text-xl font-black text-emerald-400">
                  {problems.filter(p => user?.solvedProblems?.includes(p.id)).length}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="flex-grow p-6 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Company Search & Grid (span 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 text-left">
                  <Building2 className="w-4 h-4 text-brand-purple-400" /> Select Target Company
                </h3>
                
                {/* Search input */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={companySearch}
                    onChange={(e) => setCompanySearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple-500/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Companies Grid list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredCompanies.map((c) => {
                  const style = COMPANY_STYLES[c.name] || COMPANY_STYLES.Default;
                  const isActive = activeCompany?.name === c.name;
                  
                  return (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={c.name}
                      onClick={() => selectCompany(c.name)}
                      className={`group p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden select-none ${
                        isActive
                          ? "bg-gradient-to-br from-[#0c0c14] to-[#120a1c] border-brand-purple-500/40 shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
                          : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                      }`}
                    >
                      {/* Left vertical status glow stripe if active */}
                      {isActive && (
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${style.gradient}`} />
                      )}

                      <div className="flex items-center gap-3">
                        {/* Custom visual Logo representing company */}
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.gradient} p-0.5 shadow-md flex items-center justify-center shrink-0`}>
                          <div className="w-full h-full rounded-[10px] bg-black/60 flex items-center justify-center font-black text-white text-sm">
                            {c.name.substring(0, 2).toUpperCase()}
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-white truncate group-hover:text-orange-400 transition">
                              {c.name}
                            </span>
                            {c.percentSolved > 0 && (
                              <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.5 rounded-full">
                                {c.percentSolved}%
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-500 block mt-0.5 font-semibold">
                            {c.total} Questions Asked
                          </span>
                        </div>
                      </div>

                      {/* Difficulty Stats breakdown bar */}
                      <div className="mt-3.5 space-y-1">
                        <div className="h-1.5 w-full bg-white/5 rounded-full flex overflow-hidden">
                          <div
                            style={{ width: `${(c.easy / c.total) * 100}%` }}
                            className="bg-emerald-500 h-full"
                            title={`Easy: ${c.easy}`}
                          />
                          <div
                            style={{ width: `${(c.medium / c.total) * 100}%` }}
                            className="bg-brand-cyan-500 h-full"
                            title={`Medium: ${c.medium}`}
                          />
                          <div
                            style={{ width: `${(c.hard / c.total) * 100}%` }}
                            className="bg-red-500 h-full"
                            title={`Hard: ${c.hard}`}
                          />
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-gray-500 pt-0.5 font-bold">
                          <span className="text-emerald-400">{c.easy} Easy</span>
                          <span className="text-brand-cyan-400">{c.medium} Med</span>
                          <span className="text-red-400">{c.hard} Hard</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {filteredCompanies.length === 0 && (
                  <div className="col-span-2 text-center py-10 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <p className="text-xs text-gray-500">No matching target companies found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive selected company questions list (span 7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {activeCompany ? (
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col gap-6">
                  {/* Decorative background logo blur */}
                  <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/5 blur-3xl pointer-events-none select-none"></div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${COMPANY_STYLES[activeCompany.name]?.gradient || COMPANY_STYLES.Default.gradient} p-0.5 flex items-center justify-center shadow-lg shadow-black/40`}>
                        <div className="w-full h-full rounded-[14px] bg-black/60 flex items-center justify-center font-black text-white text-base">
                          {activeCompany.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                          {activeCompany.name} Questions
                          {user?.isPremium && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-extrabold bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                              <Crown className="w-2.5 h-2.5 fill-black" /> Pro Hub
                            </span>
                          )}
                        </h2>
                        <p className="text-xs text-gray-400 mt-1">
                          Practice problems that were actually asked in coding interviews at {activeCompany.name}.
                        </p>
                      </div>
                    </div>

                    {/* Progress tracking badge */}
                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-center shrink-0">
                      <span className="text-[9px] text-gray-500 uppercase tracking-widest font-extrabold block">Solved Ratio</span>
                      <span className="text-sm font-black text-white">
                        {activeCompany.solved} <span className="text-xs font-normal text-gray-500">/ {activeCompany.total}</span>
                      </span>
                    </div>
                  </div>

                  {/* Filter panel */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search bar inside company */}
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search company question title or tag..."
                        value={problemSearch}
                        onChange={(e) => setProblemSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg bg-black/40 border border-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/30 transition-all shadow-inner"
                      />
                    </div>

                    {/* Difficulty Tabs */}
                    <div className="flex items-center gap-1 bg-black/40 p-1 border border-white/5 rounded-lg shrink-0 select-none">
                      {["All", "Easy", "Medium", "Hard"].map((diff) => (
                        <button
                          key={diff}
                          onClick={() => setSelectedDifficulty(diff)}
                          className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                            selectedDifficulty === diff
                              ? diff === "Easy"
                                ? "bg-emerald-500 text-white font-extrabold"
                                : diff === "Medium"
                                ? "bg-brand-cyan-500 text-white font-extrabold"
                                : diff === "Hard"
                                ? "bg-red-500 text-white font-extrabold"
                                : "bg-white/10 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Problems list */}
                  <div className="rounded-xl border border-white/5 overflow-hidden bg-black/25">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left text-gray-400">
                        <thead className="text-[10px] uppercase bg-white/[0.03] text-gray-400 border-b border-white/5 font-extrabold tracking-widest">
                          <tr>
                            <th className="px-5 py-3">Status</th>
                            <th className="px-5 py-3">Title</th>
                            <th className="px-5 py-3">Difficulty</th>
                            <th className="px-5 py-3">Acceptance</th>
                            <th className="px-5 py-3 text-right">Practice</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {filteredProblems.map((p) => {
                            const isSolved = user?.solvedProblems?.includes(p.id);
                            
                            return (
                              <tr key={p.id} className="hover:bg-white/[0.01] transition-all">
                                <td className="px-5 py-3.5">
                                  {isSolved ? (
                                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-white/20"></div>
                                  )}
                                </td>
                                <td className="px-5 py-3.5">
                                  <div>
                                    <span className="font-semibold text-white block hover:text-orange-400 transition cursor-pointer" onClick={() => handleSolve(p.id)}>
                                      {p.title}
                                    </span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {p.tags.slice(0, 2).map((t) => (
                                        <span key={t} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-500">
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-3.5">
                                  <span
                                    className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                      p.difficulty === "Easy"
                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                                        : p.difficulty === "Medium"
                                        ? "bg-brand-cyan-500/10 text-brand-cyan-400 border border-brand-cyan-500/15"
                                        : "bg-red-500/10 text-red-400 border border-red-500/15"
                                    }`}
                                  >
                                    {p.difficulty}
                                  </span>
                                </td>
                                <td className="px-5 py-3.5 text-gray-500 font-semibold">{p.acceptanceRate}%</td>
                                <td className="px-5 py-3.5 text-right">
                                  <button
                                    onClick={() => handleSolve(p.id)}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ml-auto ${
                                      user && !user.isPremium
                                        ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/25"
                                        : "bg-brand-purple-600 hover:bg-brand-purple-700 text-white"
                                    }`}
                                  >
                                    {user && !user.isPremium ? (
                                      <>
                                        <Lock className="w-3 h-3 text-amber-400" /> Unlock
                                      </>
                                    ) : (
                                      <>
                                        Solve <ChevronRight className="w-3 h-3" />
                                      </>
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}

                          {filteredProblems.length === 0 && (
                            <tr>
                              <td colSpan={5} className="text-center py-12 text-xs text-gray-500">
                                No matching prep questions found for this company.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center bg-white/[0.02] border border-white/5 rounded-2xl py-20 flex flex-col items-center justify-center gap-4">
                  <Compass className="w-12 h-12 text-gray-600 animate-spin" style={{ animationDuration: "12s" }} />
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-white text-base">Select a Target Company</h3>
                    <p className="text-xs text-gray-500 max-w-sm">
                      Choose a company from the left panel to list its related programming questions and start practice.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </section>
      </div>

      <Footer />
      <RazorpayModal isOpen={isPayModalOpen} onClose={() => setIsPayModalOpen(false)} />
    </div>
  );
}
