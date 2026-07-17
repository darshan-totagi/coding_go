"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { Bell, Flame, Database, Coins, Trophy, Sparkles, User, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { user, logout, purchasePremium } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, text: "🔥 Daily Challenge: Two Sum II is live!", time: "2 hrs ago" },
    { id: 2, text: "🏆 Weekly Contest 128 starts in 3 hours", time: "3 hrs ago" },
    { id: 3, text: "🪙 Earned +10 Codecoins for validating stack!", time: "1 day ago" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border py-3 px-6 flex items-center justify-between">
      {/* Left side: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button onClick={onToggleSidebar} className="lg:hidden text-gray-400 hover:text-white transition">
            <Menu className="w-6 h-6" />
          </button>
        )}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple-600 to-brand-cyan-500 flex items-center justify-center font-bold text-white shadow-glass-glow">
            C
          </span>
          <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-purple-400 bg-clip-text text-transparent tracking-tight">
            Codeplace
          </span>
        </Link>
      </div>

      {/* Right side: Stats & Profile */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            {/* Streak count */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 text-orange-400 text-sm font-semibold"
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>{user.streak} Days</span>
            </motion.div>

            {/* Coins count */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-950/40 border border-yellow-500/20 text-yellow-400 text-sm font-semibold"
            >
              <Coins className="w-4 h-4 text-yellow-500" />
              <span>{user.coins} CC</span>
            </motion.div>

            {/* Premium action */}
            {!user.isPremium ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={purchasePremium}
                className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white font-semibold text-xs px-3.5 py-2 rounded-full shadow-glass-glow transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Go Premium (₹499)
              </motion.button>
            ) : (
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-brand-purple-950/40 border border-brand-purple-500/40 text-brand-purple-400 text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5 text-brand-purple-400" />
                PRO Member
              </div>
            )}

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-purple-500 rounded-full ring-2 ring-background"></span>
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-80 rounded-xl glass-panel-glow p-4 border border-brand-purple-500/20 text-sm z-50"
                  >
                    <div className="flex justify-between items-center pb-2 border-b border-white/10 mb-2">
                      <span className="font-semibold text-white">Notifications</span>
                      <span className="text-xs text-brand-purple-400 cursor-pointer hover:underline">Mark all read</span>
                    </div>
                    <div className="space-y-3">
                      {notifications.map((n) => (
                        <div key={n.id} className="p-2 rounded hover:bg-white/5 transition duration-150">
                          <p className="text-gray-200 text-xs">{n.text}</p>
                          <span className="text-[10px] text-gray-500">{n.time}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <div className="w-8 h-8 rounded-full bg-brand-purple-500 flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-56 rounded-xl glass-panel p-2 z-50 text-sm"
                  >
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="font-semibold text-white truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-brand-cyan-400">Level {user.level}</span>
                        <span className="text-[10px] text-gray-500">({user.xp} XP)</span>
                      </div>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        logout();
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/20 transition text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Log out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <Link href="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-purple-600 hover:bg-brand-purple-700 text-white font-semibold px-5 py-2 rounded-full shadow-glass text-sm"
            >
              Sign In
            </motion.button>
          </Link>
        )}
      </div>
    </header>
  );
};
