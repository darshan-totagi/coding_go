"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Flame, Database, Coins, Trophy, Sparkles, User, LogOut, Menu, X, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { user, logout, purchasePremium } = useApp();
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, text: "🔥 Daily Challenge: Two Sum II is live!", time: "2 hrs ago" },
    { id: 2, text: "🏆 Weekly Contest 128 starts in 3 hours", time: "3 hrs ago" },
    { id: 3, text: "🪙 Earned +10 Codecoins for validating stack!", time: "1 day ago" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0c] border-b border-white/5 py-4 px-6 flex items-center justify-between">
      {/* Left side: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button onClick={onToggleSidebar} className="lg:hidden text-gray-400 hover:text-white transition">
            <Menu className="w-6 h-6" />
          </button>
        )}
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple-600 to-brand-cyan-500 flex items-center justify-center font-bold text-white shadow-glass-glow">
            C
          </span>
          <span className="text-xl font-bold text-white tracking-tight">
            Codeplace
          </span>
        </Link>
      </div>

      {/* Central Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          { name: "Explore", href: "/gamification", isExplore: true },
          { name: "Practice", href: "/problems" },
          { name: "Pricing", href: "/pricing" }
        ].map((item) => {
          const isExploreActive = pathname === "/gamification" || pathname.startsWith("/gamification/") || pathname === "/contests" || pathname.startsWith("/contests/");
          const isActive = item.isExplore ? isExploreActive : (pathname === item.href || pathname.startsWith(item.href + "/"));

          if (item.isExplore) {
            return (
              <div key={item.name} className="relative group py-2">
                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-200 select-none ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#18181b] rounded-2xl p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {[
                    { label: "Problem Library", href: "/problems" },
                    { label: "Daily Coding Missions", href: "/gamification" },
                    { label: "Contest Lobby", href: "/contests" }
                  ].map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2.5 text-[13px] font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition text-left"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-all duration-200 select-none ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Right side: Stats & Profile */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            {/* Theme Toggle Sun Icon */}
            <button className="p-2 rounded-full text-zinc-400 hover:text-white transition">
              <Sun className="w-5 h-5" />
            </button>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="p-2 rounded-full text-zinc-400 hover:text-white transition"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-purple-500 rounded-full"></span>
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
                className="flex items-center gap-2 p-0.5 rounded-full border border-white/10 hover:border-white/20 transition select-none"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white text-sm select-none">
                  {user.name.charAt(0).toUpperCase()}
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
                    <div className="px-3 py-2 border-b border-white/10 mb-1 space-y-1">
                      <p className="font-semibold text-white truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-brand-cyan-400">Level {user.level}</span>
                        <span className="text-[10px] text-gray-500">({user.xp} XP)</span>
                      </div>
                      <div className="flex flex-col gap-1 text-[11px] text-zinc-400 pt-1.5 border-t border-white/5">
                        <div className="flex justify-between">
                          <span>🔥 Daily Streak:</span>
                          <span className="font-bold text-orange-400">{user.streak} Days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>🪙 Codecoins:</span>
                          <span className="font-bold text-yellow-400">{user.coins} CC</span>
                        </div>
                        <div className="flex justify-between">
                          <span>🏆 Status:</span>
                          <span className={`font-bold ${user.isPremium ? "text-brand-purple-400" : "text-zinc-500"}`}>
                            {user.isPremium ? "PRO Member" : "Free Tier"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                    >
                      <User className="w-4 h-4 text-brand-purple-400" />
                      My Profile
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
