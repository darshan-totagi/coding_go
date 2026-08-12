"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Flame, Trophy, Sparkles, User, LogOut, X, Sun, Zap, Megaphone, ChevronDown, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RazorpayModal } from "./RazorpayModal";

export const Header: React.FC = () => {
  const { user, logout } = useApp();
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);

  const notifications = [
    { id: 1, text: "🔥 Daily Challenge: Two Sum II is live!", time: "2 hrs ago" },
    { id: 2, text: "🏆 Weekly Contest 128 starts in 3 hours", time: "3 hrs ago" },
    { id: 3, text: "🪙 Earned +10 Codecoins for validating stack!", time: "1 day ago" }
  ];

  return (
    <div className="w-full flex flex-col z-40 sticky top-0">
      {/* Top Promo Discount Banner */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-gradient-to-r from-red-950 via-[#330f11] to-[#170002] border-b border-red-500/20 py-2 px-4 flex items-center justify-between text-xs text-white relative select-none z-50 overflow-hidden"
          >
            <button
              onClick={() => setShowPromo(false)}
              className="text-gray-400 hover:text-white transition p-1 absolute left-4"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex-grow flex items-center justify-center gap-2 font-medium">
              <Megaphone className="w-4 h-4 text-orange-400 fill-orange-400/20 animate-bounce shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                <span className="font-bold text-white tracking-wide">Discount Unlocked!</span>
                <span className="text-zinc-300 text-[11px] sm:text-xs">Limited time discount for you</span>
              </div>
            </div>

            <div className="font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-[11px] animate-pulse absolute right-4 hidden md:block">
              30% OFF on PRO
            </div>
            {/* Small text version for mobile */}
            <div className="font-bold text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded-full text-[10px] animate-pulse md:hidden">
              30% OFF
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="w-full bg-[#0a0a0c] border-b border-white/5 py-4 px-6 flex items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            {/* Custom Chef Hat Logo container */}
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/15 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5.5 h-5.5 text-orange-400 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M6 18h12" />
                <path d="M12 2c-3 0-5 2.24-5 5c0 1.25.5 2.13 1.5 2.76c-1.5.58-2.5 1.74-2.5 3.24c0 2.5 3.5 3 8 3s8-.5 8-3c0-1.5-1-2.66-2.5-3.24c1-.63 1.5-1.51 1.5-2.76c0-2.76-2-5-5-5Z" />
              </svg>
            </div>
            <span className="text-lg font-black tracking-wider text-white uppercase font-sans">
              CODE<span className="text-orange-400">PLACE</span>
            </span>
          </Link>
        </div>

        {/* Central Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group py-2">
            <Link
              href="/roadmaps"
              className={`text-[13px] font-bold transition-all duration-200 select-none flex items-center gap-1 ${
                pathname.startsWith("/roadmaps") ? "text-orange-400" : "text-zinc-400 hover:text-white"
              }`}
            >
              Courses
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0e0e11] border border-white/10 rounded-2xl p-2 shadow-[0_10px_35px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider border-b border-white/5 mb-1.5">
                Learning Pathways
              </div>
              {[
                { label: "Beginner DSA Masterclass", href: "/roadmaps" },
                { label: "Intermediate DSA Pathway", href: "/roadmaps" },
                { label: "Advanced Algorithm Spec", href: "/roadmaps" },
                { label: "Google Interview Prep Path", href: "/roadmaps" },
                { label: "Amazon Interview Prep Path", href: "/roadmaps" }
              ].map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-2 text-[12px] font-semibold text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition text-left"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/problems"
            className={`text-[13px] font-bold transition-all duration-200 select-none ${
              pathname === "/problems" ? "text-orange-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            Practice
          </Link>
        </nav>

        {/* Right side: Stats & Profile */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Sun Icon */}
          <button className="p-2 rounded-full text-zinc-400 hover:text-white transition">
            <Sun className="w-5 h-5" />
          </button>

          {/* Buy Now Button */}
          <button
            onClick={() => setIsRazorpayOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-4 py-1.5 rounded-lg text-xs flex items-center gap-1 transition-all shadow-[0_4px_14px_rgba(249,115,22,0.2)]"
          >
            Buy Now
            <Zap className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
          </button>

          {user ? (
            <>
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
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-80 rounded-xl bg-[#0e0e11] border border-white/10 p-4 text-sm z-50 shadow-2xl"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-white/10 mb-2">
                        <span className="font-semibold text-white">Notifications</span>
                        <span className="text-xs text-orange-400 cursor-pointer hover:underline">Mark all read</span>
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

              {/* Profile Dropdown (Chef Avatar style) */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 hover:border-orange-500/40 transition select-none outline-none"
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/15 flex items-center justify-center font-bold text-white text-xs select-none">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    {/* Tiny Chef Hat Badge on bottom-left / top-right */}
                    <div className="absolute -bottom-1 -left-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-0.5 border border-zinc-950 shadow-md">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-zinc-950">
                        <path d="M12 2c-3 0-5 2.24-5 5c0 1.25.5 2.13 1.5 2.76c-1.5.58-2.5 1.74-2.5 3.24c0 2.5 3.5 3 8 3s8-.5 8-3c0-1.5-1-2.66-2.5-3.24c1-.63 1.5-1.51 1.5-2.76c0-2.76-2-5-5-5Z" />
                      </svg>
                    </div>
                  </div>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-56 rounded-xl bg-[#0e0e11] border border-white/10 p-2 z-50 text-sm shadow-2xl"
                    >
                      <div className="px-3 py-2 border-b border-white/10 mb-1 space-y-1">
                        <p className="font-semibold text-white truncate">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-orange-400 font-bold">Level {user.level}</span>
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
                            <span className={`font-bold ${user.isPremium ? "text-orange-400" : "text-zinc-500"}`}>
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
                        <User className="w-4 h-4 text-orange-400" />
                        My Profile
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          href="/admin"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                        >
                          <ShieldCheck className="w-4 h-4 text-brand-purple-400" />
                          Admin Panel
                        </Link>
                      )}
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
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-1.5 rounded-lg shadow-glass text-xs"
              >
                Sign In
              </motion.button>
            </Link>
          )}
        </div>
      </header>

      {/* Payment simulation modal */}
      <RazorpayModal isOpen={isRazorpayOpen} onClose={() => setIsRazorpayOpen(false)} />
    </div>
  );
};
