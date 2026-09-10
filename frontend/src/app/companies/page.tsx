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
  ChevronLeft,
  Filter,
  Check,
  FileText,
  BarChart2
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

// Helper functions for card design styling matching the screenshot
const getCompanyTitle = (name: string) => {
  return `${name} Coding Interview Questions`;
};

const getCompanyDescription = (name: string) => {
  return `Prepare for your ${name} online assessment and Interview with most commonly asked coding...`;
};

const getCompanyLevel = (easy: number, medium: number, hard: number) => {
  const total = easy + medium + hard;
  if (total === 0) return "Beginner level";
  if (easy / total > 0.45) return "Beginner level";
  if (medium / total > 0.45) return "Intermediate level";
  return "Mixed level";
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
  const rawProblems = problemsList && problemsList.length > 0 ? problemsList : staticProblems;
  const searchParams = useSearchParams();
  const router = useRouter();

  // Dynamically assign problems to strictly TCS NQT, Infosys, and Wipro
  const problems = useMemo(() => {
    return rawProblems.map((p, idx) => {
      const assignedCompanies: string[] = [];
      if (idx % 3 === 0) assignedCompanies.push("TCS NQT");
      if (idx % 3 === 1 || idx % 5 === 0) assignedCompanies.push("Infosys");
      if (idx % 3 === 2 || idx % 7 === 0) assignedCompanies.push("Wipro");
      return {
        ...p,
        companies: assignedCompanies
      };
    });
  }, [rawProblems]);

  // Selected Company from query params or state
  const companyQuery = searchParams.get("name");
  
  // State variables
  const [companySearch, setCompanySearch] = useState("");
  const [problemSearch, setProblemSearch] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // Compute stats per company dynamically
  const companyStats = useMemo(() => {
    const uniqueCompanies = ["TCS NQT", "Infosys", "Wipro"];

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
    }).sort((a, b) => b.total - a.total); // Sort by total questions asked
  }, [problems, user]);

  // Determine active company
  const activeCompany = useMemo(() => {
    if (companyStats.length === 0) return null;
    if (companyQuery) {
      const found = companyStats.find(c => c.name.toLowerCase() === companyQuery.toLowerCase());
      if (found) return found;
    }
    return null; // Don't default to first company, show only companies list initially
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
    <div className="min-h-screen flex flex-col page-shell text-[#f5f5f7]">
      <Header />
      <SubNavbar />

      <div className="flex-grow flex flex-col">
        {/* Banner Section */}
        <section className="relative overflow-hidden py-12 px-6 border-b border-zinc-200 dark:border-white/5 bg-gradient-to-b from-zinc-100 dark:from-[#0a0a0f] to-transparent">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 uppercase animate-pulse">
                <Sparkles className="w-3 h-3 text-orange-600 dark:text-orange-400" /> Career Preparation
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white font-sans tracking-tight">
                Company-Specific <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Interview Prep</span>
              </h1>
              <p className="text-sm text-zinc-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                Filter and master programming challenges frequently asked in real-world interviews at Google, Meta, Amazon, and other top-tier technology giants.
              </p>
            </div>

            {/* Quick stats board */}
            <div className="flex items-center gap-4 bg-white/5 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="text-center px-4 border-r border-zinc-200 dark:border-white/5">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Companies</span>
                <span className="text-xl font-black text-zinc-900 dark:text-white">{companyStats.length}</span>
              </div>
              <div className="text-center px-4 border-r border-zinc-200 dark:border-white/5">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Total Prep Qs</span>
                <span className="text-xl font-black text-orange-500 dark:text-orange-400">{problems.length}</span>
              </div>
              <div className="text-center px-4">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Solved</span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                  {problems.filter(p => user?.solvedProblems?.includes(p.id)).length}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="flex-grow p-6 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN / FULL GRID: Company Search & Grid */}
            <div className={`${activeCompany ? "lg:col-span-5" : "lg:col-span-12"} space-y-6`}>
              <div className={`flex flex-col ${!activeCompany ? "md:flex-row md:items-center" : ""} justify-between items-start gap-4 ${!activeCompany ? "border-b border-zinc-200 dark:border-zinc-900 pb-6 mb-6" : ""}`}>
                <div className="space-y-1">
                  <h3 className="font-bold text-zinc-800 dark:text-white tracking-tight flex items-center gap-2 text-xl">
                    <Building2 className="w-5 h-5 text-zinc-500 dark:text-zinc-400" /> Company Based Questions
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Prepare for technical assessments and target-specific interviews.
                  </p>
                </div>
                
                {/* Search input with clean modern styling */}
                <div className={`relative ${!activeCompany ? "w-full md:w-80" : "w-full"}`}>
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search target companies..."
                    value={companySearch}
                    onChange={(e) => setCompanySearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-700 transition-all focus:bg-zinc-50 dark:focus:bg-zinc-900/80"
                  />
                </div>
              </div>

              {/* Companies Grid list */}
              <div className={`grid grid-cols-1 gap-5 ${activeCompany ? "sm:grid-cols-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar" : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto w-full"}`}>
                {filteredCompanies.map((c) => {
                  const isActive = activeCompany?.name === c.name;
                  
                  return (
                    <motion.div
                      whileHover={{ y: -4, borderColor: "rgba(0,0,0,0.15) rgba(255,255,255,0.12)" }}
                      whileTap={{ scale: 0.99 }}
                      key={c.name}
                      onClick={() => selectCompany(c.name)}
                      className={`group relative rounded-xl border text-left cursor-pointer transition-all duration-200 overflow-hidden select-none flex flex-col h-full ${
                        isActive
                          ? "border-zinc-400 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-lg"
                          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                      }`}
                    >
                      {/* Card Content Wrapper */}
                      <div className={`${!activeCompany ? "p-7 space-y-5" : "p-4 space-y-4"} flex-grow flex flex-col justify-between`}>
                        
                        {/* Header Row: Logo & Title */}
                        <div className="flex items-center gap-4">
                          {/* Company Initials Logo squircle */}
                          <div className={`${!activeCompany ? "w-12 h-12 rounded-xl" : "w-9 h-9 rounded-lg"} bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0`}>
                            <span className={`font-bold text-zinc-600 dark:text-zinc-300 ${!activeCompany ? "text-sm" : "text-xs"}`}>
                              {c.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>

                          <div className="min-w-0 flex-grow">
                            <h4 className={`font-semibold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-zinc-900 group-hover:dark:text-white transition-colors ${!activeCompany ? "text-sm md:text-base" : "text-xs"}`}>
                              {getCompanyTitle(c.name)}
                            </h4>
                            <span className={`text-zinc-400 dark:text-zinc-500 block mt-0.5 font-medium tracking-wide ${!activeCompany ? "text-xs" : "text-[10px]"}`}>
                              {c.name} Prep
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal flex-grow ${!activeCompany ? "text-xs md:text-[13px]" : "text-[11px]"}`}>
                          {getCompanyDescription(c.name)}
                        </p>

                        {/* Footer Section: Badges */}
                        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-2">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium ${!activeCompany ? "text-xs" : "text-[10px] px-2.5 py-1"}`}>
                            <FileText className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                            <span>{c.total} Problems</span>
                          </div>
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium ${!activeCompany ? "text-xs" : "text-[10px] px-2.5 py-1"}`}>
                            <BarChart2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                            <span>{getCompanyLevel(c.easy, c.medium, c.hard)}</span>
                          </div>
                          {c.percentSolved > 0 && (
                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium ${!activeCompany ? "text-xs" : "text-[10px] px-2.5 py-1"}`}>
                              <CheckCircle className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                              <span>{c.percentSolved}% Solved</span>
                            </div>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  );
                })}

                {filteredCompanies.length === 0 && (
                  <div className={`text-center py-10 bg-white/[0.02] border border-white/5 rounded-2xl ${activeCompany ? "col-span-2" : "col-span-full"}`}>
                    <p className="text-xs text-gray-500">No matching target companies found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive selected company questions list (span 7) */}
            {activeCompany && (
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden flex flex-col gap-6">
                  {/* Decorative background logo blur */}
                  <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/5 blur-3xl pointer-events-none select-none"></div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      {/* Back button to clear selection */}
                      <button
                        onClick={() => router.push('/companies')}
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center shrink-0"
                        title="Back to all companies"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-lg shadow-black/40">
                        <div className="w-full h-full rounded-[10px] bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-300 text-sm">
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
              </div>
            )}
            
          </div>
        </section>
      </div>

      <Footer />
      <RazorpayModal isOpen={isPayModalOpen} onClose={() => setIsPayModalOpen(false)} />
    </div>
  );
}
