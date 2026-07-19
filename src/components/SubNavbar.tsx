"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp, ALL_BADGES, BadgeDefinition } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, FileText, Gift, Award, Lock, Sparkles, X } from "lucide-react";

export const SubNavbar: React.FC = () => {
  const pathname = usePathname();
  const { user } = useApp();
  const [showAchievementsModal, setShowAchievementsModal] = useState(false);

  if (!user) return null;

  // Define navigation tabs
  const tabs = [
    { name: "Problem Library", href: "/problems", icon: Code2 },
    { name: "Playground & Missions", href: "/gamification", icon: Gift },
  ];

  // Calculate next badge progress
  const nextBadge = ALL_BADGES.find(
    (bDef) => !user.badges.some((ub) => ub.id === bDef.id)
  );

  let progressPercent = 0;
  let currentVal = 0;
  let targetVal = 0;
  let unit = "";

  if (nextBadge) {
    targetVal = nextBadge.requirementValue;
    if (nextBadge.requirementType === "xp") {
      currentVal = user.xp;
      unit = "XP";
    } else if (nextBadge.requirementType === "coins") {
      currentVal = user.coins;
      unit = "Coins";
    } else if (nextBadge.requirementType === "problems") {
      currentVal = user.solvedProblems.length;
      unit = "Problems";
    } else if (nextBadge.requirementType === "resumeScore") {
      currentVal = user.resumeScore;
      unit = "ATS Score";
    }
    progressPercent = Math.min(100, Math.round((currentVal / targetVal) * 100));
  }

  return (
    <>
      <div className="w-full bg-[#07070a]/80 backdrop-blur-md border-b border-white/5 py-2 px-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-[61px] z-30">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5 w-full md:w-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href || pathname.startsWith(tab.href + "?") || pathname.startsWith(tab.href + "/");

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 w-full md:w-auto justify-center ${
                  isActive
                    ? "bg-gradient-to-r from-brand-purple-600/30 to-brand-cyan-500/10 text-white border border-brand-purple-500/25 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-cyan-400" : "text-gray-500"}`} />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Badge Progression Widget */}
        <div
          onClick={() => setShowAchievementsModal(true)}
          className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-brand-purple-500/40 p-2.5 rounded-xl cursor-pointer transition w-full md:w-auto hover:bg-white/10 select-none group"
        >
          {/* Badge Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-brand-purple-950/40 border border-brand-purple-500/20 rounded-lg group-hover:scale-105 transition">
            <span className="text-xl">🏆</span>
            <div className="absolute -top-1.5 -right-1.5 bg-brand-cyan-500 text-[9px] font-black text-black rounded-full px-1.5 py-0.5 border border-black shadow">
              {user.badges.length}
            </div>
          </div>

          {/* Progress Slider */}
          <div className="flex-1 md:w-48 text-left space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold">
              <span className="text-white group-hover:text-brand-purple-300 transition">Achievements</span>
              <span className="text-brand-cyan-400">
                {nextBadge ? `${progressPercent}%` : "MAX"}
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-brand-purple-500 to-brand-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${nextBadge ? progressPercent : 100}%` }}
              />
            </div>
            <div className="text-[9px] text-gray-500 font-medium truncate">
              {nextBadge
                ? `Next: ${nextBadge.icon} ${nextBadge.name} (${currentVal}/${targetVal} ${unit})`
                : "Unlocked all point milestones!"}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Modal */}
      <AnimatePresence>
        {showAchievementsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAchievementsModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#050508] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] z-10"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#09090e] rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-purple-400" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    Badges & Achievements Library <Sparkles className="w-4 h-4 text-brand-cyan-400" />
                  </h3>
                </div>
                <button
                  onClick={() => setShowAchievementsModal(false)}
                  className="text-gray-400 hover:text-white p-1 hover:bg-white/5 rounded-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-4 bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-extrabold">Unlocked</span>
                    <span className="text-xl font-black text-white">{user.badges.length}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-extrabold">Total Badges</span>
                    <span className="text-xl font-black text-brand-purple-400">{ALL_BADGES.length + 1}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-extrabold">Total XP</span>
                    <span className="text-xl font-black text-brand-cyan-400">{user.xp} XP</span>
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Milestone Badges
                  </span>
                  
                  {/* Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ALL_BADGES.map((badgeDef) => {
                      const unlockedBadge = user.badges.find((ub) => ub.id === badgeDef.id);
                      const isUnlocked = !!unlockedBadge;

                      return (
                        <div
                          key={badgeDef.id}
                          className={`p-4 rounded-xl border transition-all duration-200 relative flex items-start gap-4 ${
                            isUnlocked
                              ? "bg-brand-purple-950/10 border-brand-purple-500/20 hover:border-brand-purple-500/40"
                              : "bg-black/40 border-white/5 opacity-55"
                          }`}
                        >
                          {/* Badge Icon */}
                          <div className={`w-14 h-14 shrink-0 rounded-lg flex items-center justify-center text-3xl border relative ${
                            isUnlocked ? "bg-white/5 border-white/10 shadow-lg" : "bg-white/[0.02] border-white/5"
                          }`}>
                            <span className={isUnlocked ? "" : "filter grayscale opacity-30"}>
                              {badgeDef.icon}
                            </span>
                            {!isUnlocked && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg text-gray-500">
                                <Lock className="w-4 h-4" />
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="space-y-1 text-left">
                            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                              {badgeDef.name}
                              {isUnlocked && <span className="text-[9px] bg-brand-purple-500/20 text-brand-purple-300 font-extrabold px-1.5 py-0.5 rounded">Unlocked</span>}
                            </h4>
                            <p className="text-[11px] text-gray-400 leading-normal">{badgeDef.desc}</p>
                            <p className="text-[10px] font-semibold text-gray-500">
                              {isUnlocked
                                ? `Unlocked on ${unlockedBadge.date}`
                                : `Target: ${badgeDef.requirementValue} ${
                                    badgeDef.requirementType === "xp"
                                      ? "XP Points"
                                      : badgeDef.requirementType === "coins"
                                      ? "Codecoins"
                                      : badgeDef.requirementType === "problems"
                                      ? "Solved Problems"
                                      : "ATS Score"
                                  }`}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
