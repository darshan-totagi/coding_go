"use client";

import React, { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Award } from "lucide-react";

export const BadgeUnlockModal: React.FC = () => {
  const { newlyUnlockedBadge, clearNewlyUnlockedBadge, triggerConfetti } = useApp();

  useEffect(() => {
    if (newlyUnlockedBadge) {
      // Trigger confetti multiple times for extra premium excitement
      triggerConfetti();
      const t1 = setTimeout(() => triggerConfetti(), 300);
      const t2 = setTimeout(() => triggerConfetti(), 600);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [newlyUnlockedBadge]);

  if (!newlyUnlockedBadge) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={clearNewlyUnlockedBadge}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-md w-full glass-panel-glow border border-brand-purple-500/30 p-8 rounded-3xl text-center space-y-6 overflow-hidden z-10"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-purple-600/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-brand-cyan-500/10 rounded-full blur-2xl -z-10" />

          {/* Heading with particles */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-brand-purple-400 font-extrabold text-xs tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Achievement Unlocked</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-black bg-gradient-to-r from-white via-brand-purple-200 to-brand-cyan-400 bg-clip-text text-transparent">
              Congratulations!
            </h2>
          </div>

          {/* Badge Visual representation */}
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple-600 to-brand-cyan-400 rounded-full animate-pulse opacity-20 blur-xl" />
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.15, type: "spring" }}
              className="w-28 h-28 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl flex items-center justify-center relative group"
            >
              <span className="text-6xl drop-shadow-xl filter select-none transform group-hover:scale-110 transition duration-300">
                {newlyUnlockedBadge.icon}
              </span>
              <div className="absolute -bottom-2 right-[-8px] bg-yellow-500 text-black rounded-full p-1 border border-white shadow-lg animate-bounce">
                <Trophy className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          </div>

          {/* Badge Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {newlyUnlockedBadge.name}
            </h3>
            <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
              {newlyUnlockedBadge.desc}
            </p>
          </div>

          {/* Mini reward detail */}
          <div className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-xs inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-500" />
            <span>Added to your digital achievements portfolio</span>
          </div>

          {/* Action button */}
          <div>
            <button
              onClick={clearNewlyUnlockedBadge}
              className="w-full py-3 bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white font-bold rounded-xl text-sm transition-all duration-300 shadow-glass-glow shadow-brand-purple-500/25"
            >
              Claim Badge & Continue
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
