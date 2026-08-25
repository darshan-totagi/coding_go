"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users2,
  Building,
  GraduationCap,
  Search,
  Filter,
  CheckCircle,
  Mail,
  TrendingUp,
  Award,
  Sparkles,
  BookOpen,
  Calendar
} from "lucide-react";

export default function RecruiterPortalPage() {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState<"recruiter" | "college">("recruiter");

  // Search filter
  const [skillFilter, setSkillFilter] = useState("");
  const [minRating, setMinRating] = useState(1500);

  // Recruiter mock candidates
  const mockCandidates = [
    { id: 1, name: "Priya Sharma", level: 5, rating: 1680, solved: 14, skills: ["Python", "C++", "Graphs"], ats: 85 },
    { id: 2, name: "Ryan Go", level: 4, rating: 1590, solved: 8, skills: ["TypeScript", "Next.js", "PostgreSQL"], ats: 78 },
    { id: 3, name: "Alex Coder", level: 4, rating: 1580, solved: 2, skills: ["React", "Python", "Git"], ats: 68 }, // corresponds to mock user
    { id: 4, name: "Jessica Lee", level: 6, rating: 1720, solved: 22, skills: ["Java", "SQL", "System Design"], ats: 92 }
  ];

  // College mock stats
  const collegeStats = {
    collegeName: "BITS Pilani Engineering Department",
    totalStudents: 480,
    placedRatio: "86%",
    averageRating: 1592,
    assignments: [
      { id: "a1", title: "Trees and Depth First Search", due: "July 24, 2026", status: "Active" },
      { id: "a2", title: "Valid Stacks and Queue Models", due: "July 18, 2026", status: "Expired" }
    ],
    rankings: [
      { rank: 1, name: "Jessica Lee", branch: "CS", solved: 22, rating: 1720 },
      { rank: 2, name: "Priya Sharma", branch: "CS", solved: 14, rating: 1680 },
      { rank: 3, name: "Anish Gupta", branch: "EE", solved: 10, rating: 1610 }
    ]
  };

  const filteredCandidates = mockCandidates.filter((cand) => {
    const matchesSkill = skillFilter
      ? cand.skills.some((sk) => sk.toLowerCase().includes(skillFilter.toLowerCase()))
      : true;
    const matchesRating = cand.rating >= minRating;
    return matchesSkill && matchesRating;
  });

  if (!user) return null;

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-grow overflow-y-auto">
          <main className="p-6 max-w-7xl w-full mx-auto space-y-6 text-left">
          {/* Header titles */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                Enterprise & University Portal <Building className="w-6 h-6 text-brand-purple-400" />
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                Recruit premium talent or manage student assignment analytics within one unified platform.
              </p>
            </div>

            {/* Toggle Category */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("recruiter")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === "recruiter"
                    ? "bg-brand-purple-600 text-white shadow-glass"
                    : "bg-white/5 border border-white/10 text-gray-400"
                }`}
              >
                <Users2 className="w-4 h-4" /> Recruiter Space
              </button>
              <button
                onClick={() => setActiveTab("college")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === "college"
                    ? "bg-brand-purple-600 text-white shadow-glass"
                    : "bg-white/5 border border-white/10 text-gray-400"
                }`}
              >
                <GraduationCap className="w-4 h-4" /> College Dashboard
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* RECRUITER PORTAL VIEW */}
            {activeTab === "recruiter" && (
              <motion.div
                key="recruiter"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Search filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  {/* Skill Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search candidate skill (e.g. Python)..."
                      value={skillFilter}
                      onChange={(e) => setSkillFilter(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-xs"
                    />
                  </div>

                  {/* Rating filter */}
                  <div className="flex flex-col gap-1">
                    <select
                      value={minRating}
                      onChange={(e) => setMinRating(parseInt(e.target.value))}
                      className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2.5 text-white focus:outline-none"
                    >
                      <option value="1500">Min Rating: 1500+</option>
                      <option value="1600">Min Rating: 1600+</option>
                      <option value="1700">Min Rating: 1700+</option>
                    </select>
                  </div>

                  <div className="p-2.5 bg-brand-purple-950/20 border border-brand-purple-500/10 text-brand-purple-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-purple-400" /> Matches: {filteredCandidates.length} Active Candidates
                  </div>
                </div>

                {/* Candidate Listing */}
                <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
                  <table className="w-full text-xs text-left text-gray-400">
                    <thead className="bg-white/5 uppercase font-bold text-gray-400 border-b border-white/10">
                      <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Coding Score</th>
                        <th className="px-6 py-4 text-center">ATS Match</th>
                        <th className="px-6 py-4">Skills</th>
                        <th className="px-6 py-4 text-right">Interview Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredCandidates.map((cand) => (
                        <tr key={cand.id} className="hover:bg-white/[0.02] transition">
                          <td className="px-6 py-4">
                            <span className="font-semibold text-white block">{cand.name}</span>
                            <span className="text-[10px] text-gray-500">Solved: {cand.solved} problems</span>
                          </td>
                          <td className="px-6 py-4 font-bold text-brand-cyan-400">{cand.rating}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                              {cand.ats}%
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {cand.skills.map((sk) => (
                                <span key={sk} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400">
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => alert(`Invite dispatched to ${cand.name}`)}
                              className="px-3.5 py-1.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg font-bold transition flex items-center gap-1 ml-auto"
                            >
                              <Mail className="w-3.5 h-3.5" /> Invite
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* COLLEGE PORTAL VIEW */}
            {activeTab === "college" && (
              <motion.div
                key="college"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Placement Stats */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider block">University Stats</h3>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-3">
                      <div>
                        <span className="text-[10px] text-gray-500 block">PLACEMENT RATIO</span>
                        <span className="text-xl font-extrabold text-white">{collegeStats.placedRatio}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">AVERAGE CODING RATING</span>
                        <span className="text-xl font-extrabold text-brand-cyan-400">{collegeStats.averageRating}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">ENROLLED CANDIDATES</span>
                        <span className="text-xl font-extrabold text-brand-purple-400">{collegeStats.totalStudents}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active lab assignments */}
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Faculty Assignments</h3>
                    <div className="space-y-3">
                      {collegeStats.assignments.map((ass) => (
                        <div key={ass.id} className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-2 text-xs">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-white block">{ass.title}</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[9px] ${
                                ass.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-gray-500/10 text-gray-500"
                              }`}
                            >
                              {ass.status}
                            </span>
                          </div>
                          <div className="text-[10px] text-gray-500">Due: {ass.due}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CS Department Leaderboard */}
                <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-purple-400" /> Department Coding Rankings
                  </h3>

                  <div className="overflow-x-auto rounded-xl border border-white/5">
                    <table className="w-full text-xs text-left text-gray-400">
                      <thead className="bg-white/5 uppercase font-bold text-gray-400 border-b border-white/10">
                        <tr>
                          <th className="px-4 py-3">Rank</th>
                          <th className="px-4 py-3">Student Name</th>
                          <th className="px-4 py-3">Branch</th>
                          <th className="px-4 py-3 text-center">Score</th>
                          <th className="px-4 py-3 text-right">Problems Solved</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {collegeStats.rankings.map((stud) => (
                          <tr key={stud.rank} className="hover:bg-white/[0.02] transition">
                            <td className="px-4 py-3 font-mono font-bold text-white">{stud.rank}</td>
                            <td className="px-4 py-3 font-semibold text-white">{stud.name}</td>
                            <td className="px-4 py-3 text-gray-500">{stud.branch}</td>
                            <td className="px-4 py-3 text-center text-brand-cyan-400 font-bold">{stud.rating}</td>
                            <td className="px-4 py-3 text-right">{stud.solved}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  </div>
  );
}
