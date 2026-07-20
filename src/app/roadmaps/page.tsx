"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { roadmaps, Roadmap, RoadmapStep } from "@/data/roadmaps";
import { problems } from "@/data/problems";
import Link from "next/link";
import { motion } from "framer-motion";
import { Map, ArrowRight, CheckCircle2, Lock, Unlock, PlayCircle } from "lucide-react";

export default function RoadmapsPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"General" | "Company">("General");
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);

  // Default select first general track
  useEffect(() => {
    const list = roadmaps.filter((r) => r.category === activeCategory);
    if (list.length > 0) {
      setSelectedRoadmap(list[0]);
    }
  }, [activeCategory]);

  if (!user) return null;

  // Calculate stats for a step
  const getStepProgress = (step: RoadmapStep) => {
    const total = step.problemIds.length;
    const solved = step.problemIds.filter((id) => user.solvedProblems.includes(id)).length;
    const percent = Math.round((solved / (total || 1)) * 100);
    return { solved, total, percent };
  };

  const getRoadmapProgress = (rm: Roadmap) => {
    const totalIds = rm.steps.flatMap((s) => s.problemIds);
    const total = totalIds.length;
    const solved = totalIds.filter((id) => user.solvedProblems.includes(id)).length;
    const percent = Math.round((solved / (total || 1)) * 100);
    return { solved, total, percent };
  };

  const filteredRoadmaps = roadmaps.filter((r) => r.category === activeCategory);

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-grow overflow-y-auto text-left">
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              Career Learning paths <Map className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Follow structural, tree-node pathways specifically curated by our AI coach for target interview success.
            </p>
          </div>

          {/* Category Toggle Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveCategory("General")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition ${
                activeCategory === "General" ? "bg-brand-purple-600 text-white shadow-glass" : "bg-white/5 border border-white/10 text-gray-400"
              }`}
            >
              General DSA Tracks
            </button>
            <button
              onClick={() => setActiveCategory("Company")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition ${
                activeCategory === "Company" ? "bg-brand-purple-600 text-white shadow-glass" : "bg-white/5 border border-white/10 text-gray-400"
              }`}
            >
              Company Interview Guides
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar list of roadmaps */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Available Pathways</h3>
              {filteredRoadmaps.map((rm) => {
                const isSelected = selectedRoadmap?.id === rm.id;
                const { percent } = getRoadmapProgress(rm);
                return (
                  <button
                    key={rm.id}
                    onClick={() => setSelectedRoadmap(rm)}
                    className={`w-full p-4 rounded-xl text-left border flex flex-col justify-between transition-all ${
                      isSelected
                        ? "bg-brand-purple-950/20 border-brand-purple-500/50 shadow-glass-glow"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-xs font-bold text-white truncate">{rm.title}</span>
                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">{rm.difficulty}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2">{rm.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px]">
                      <span className="text-gray-500">Progress: {percent}%</span>
                      <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-cyan-400 rounded-full" style={{ width: `${percent}%` }}></div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Visualized Tree Nodes */}
            <div className="lg:col-span-2 space-y-6">
              {selectedRoadmap ? (
                <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-8">
                  <div className="border-b border-white/5 pb-4">
                    <h2 className="text-xl font-bold text-white">{selectedRoadmap.title}</h2>
                    <p className="text-xs text-gray-400 mt-1">{selectedRoadmap.description}</p>
                  </div>

                  {/* Nodes structure flow */}
                  <div className="relative space-y-8 pl-8 border-l border-white/10 ml-4 py-2">
                    {selectedRoadmap.steps.map((step, idx) => {
                      const { solved, total, percent } = getStepProgress(step);
                      const isUnlocked = idx === 0 || getStepProgress(selectedRoadmap.steps[idx - 1]).percent === 100;
                      
                      return (
                        <div key={step.id} className="relative space-y-3">
                          {/* Node Icon on connection line */}
                          <div
                            className={`absolute left-[-41px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                              percent === 100
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                                : isUnlocked
                                ? "bg-brand-purple-600 border-brand-purple-400 text-white"
                                : "bg-zinc-950 border-white/10 text-gray-600"
                            }`}
                          >
                            {percent === 100 ? "✓" : idx + 1}
                          </div>

                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div>
                              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                                {step.title}
                                {!isUnlocked && <Lock className="w-3.5 h-3.5 text-gray-500" />}
                              </h4>
                              <p className="text-xs text-gray-400">{step.description}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-500 font-mono">
                                {step.duration}
                              </span>
                            </div>
                          </div>

                          {/* Progress bar / Problems listing for current step */}
                          <div className="p-4 rounded-xl bg-black/45 border border-white/5 space-y-3">
                            <div className="flex justify-between items-center text-[10px] text-gray-500">
                              <span>Milestone: {solved}/{total} Problems Solved</span>
                              <span>{percent}% Complete</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${percent === 100 ? "bg-emerald-500" : "bg-brand-cyan-400"}`}
                                style={{ width: `${percent}%` }}
                              ></div>
                            </div>

                            {/* Question Links */}
                            {isUnlocked && (
                              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {step.problemIds.map((pId) => {
                                  const prob = problems.find((p) => p.id === pId);
                                  if (!prob) return null;
                                  const solvedStatus = user.solvedProblems.includes(pId);
                                  return (
                                    <Link
                                      key={pId}
                                      href={`/problems?id=${pId}`}
                                      className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-brand-purple-500/20 text-xs text-gray-300 hover:text-white transition"
                                    >
                                      <span className="truncate">{prob.title}</span>
                                      {solvedStatus ? (
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                      ) : (
                                        <PlayCircle className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500 bg-white/5 border border-white/10 rounded-2xl">
                  Select a learning track from the left to view the interactive path diagram.
                </div>
              )}
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
