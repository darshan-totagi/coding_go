"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Sparkles, User, LogOut, X, Sun, Moon, Zap, Megaphone, ChevronDown, ShieldCheck, Menu, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RazorpayModal } from "./RazorpayModal";

export const Header: React.FC = () => {
  const { user, logout, theme, toggleTheme } = useApp();
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const notifications = [
    { id: 1, text: "🔥 Daily Challenge: Two Sum II is live!", time: "2 hrs ago" },
    { id: 2, text: "🏆 Weekly Contest 128 starts in 3 hours", time: "3 hrs ago" },
    { id: 3, text: "🪙 Earned +10 Codecoins for validating stack!", time: "1 day ago" }
  ];

  const navLink = (href: string, label: string, extra?: React.ReactNode) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <Link
        href={href}
        onClick={() => setMobileOpen(false)}
        className={`relative text-[13px] font-semibold tracking-wide transition-colors duration-200 select-none px-3 py-2 rounded-lg ${
          active ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          {label}
          {extra}
        </span>
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
          />
        )}
      </Link>
    );
  };

  return (
    <div className="w-full flex flex-col z-40 sticky top-0">
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full relative overflow-hidden border-b border-violet-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-950 via-indigo-950 to-cyan-950" />
            <div className="absolute inset-0 opacity-40 animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20" />
            <div className="relative py-2 px-4 flex items-center justify-between text-xs text-white select-none z-50">
              <button
                onClick={() => setShowPromo(false)}
                className="text-zinc-400 hover:text-white transition p-1"
                aria-label="Dismiss promotion"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex-grow flex items-center justify-center gap-2 font-medium">
                <Megaphone className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="font-semibold text-white tracking-wide">Limited launch offer</span>
                <span className="hidden sm:inline text-zinc-300">— unlock Premium with 30% off</span>
              </div>

              <div className="font-bold text-cyan-200 bg-white/10 border border-white/15 px-3 py-1 rounded-full text-[11px] hidden md:block">
                CODEPLACE30
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="w-full bg-[#070812]/80 backdrop-blur-xl border-b border-white/8 py-3 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 select-none group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_24px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_32px_rgba(34,211,238,0.4)] transition-shadow duration-300">
              <Code2 className="w-4.5 h-4.5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-lg font-black tracking-[0.14em] text-white uppercase">
              CODE<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">PLACE</span>
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center">
          {navLink("/", "Home")}

          <div className="relative group">
            <Link
              href="/courses"
              className={`text-[13px] font-semibold transition-colors duration-200 select-none flex items-center gap-1 px-3 py-2 rounded-lg ${
                pathname.startsWith("/courses") || pathname.startsWith("/roadmaps")
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Courses
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0c0e1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.55)] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Structured tracks
              </div>
              {[
                { label: "Python Basics", href: "/courses/python-basics", badge: "New" },
                { label: "Java Basics", href: "/courses/java-basics", badge: "New" },
                { label: "SQL Basics", href: "/courses/sql-basics", badge: "New" },
                { label: "C Programming", href: "/courses/c-programming", badge: "New" },
              ].map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition"
                >
                  <span>{sub.label}</span>
                  <span className="text-[9px] font-extrabold bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    {sub.badge}
                  </span>
                </Link>
              ))}
              <Link href="/courses" className="flex items-center justify-center gap-1.5 px-4 py-2.5 mt-1 text-[11px] font-bold text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition">
                View all courses →
              </Link>
            </div>
          </div>

          {navLink("/problems", "Practice")}
          {navLink(
            "/companies",
            "Companies",
            <span className="text-[9px] font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              New
            </span>
          )}
          {navLink("/contests", "Contests")}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsRazorpayOpen(true)}
            className="hidden sm:inline-flex btn-primary text-white font-bold px-4 py-1.5 rounded-lg text-xs items-center gap-1"
          >
            Go Pro
            <Zap className="w-3.5 h-3.5 fill-current" />
          </button>

          {user ? (
            <>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowProfileMenu(false);
                  }}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      className="absolute right-0 mt-3 w-80 rounded-2xl glass-panel-glow p-4 text-sm z-50"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-white/10 mb-2">
                        <span className="font-semibold text-white">Notifications</span>
                        <span className="text-xs text-cyan-300 cursor-pointer hover:underline">Mark all read</span>
                      </div>
                      <div className="space-y-2">
                        {notifications.map((n) => (
                          <div key={n.id} className="p-2.5 rounded-xl hover:bg-white/5 transition duration-150">
                            <p className="text-zinc-200 text-xs">{n.text}</p>
                            <span className="text-[10px] text-zinc-500">{n.time}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-1.5 p-0.5 rounded-full border border-white/10 hover:border-violet-400/40 transition select-none outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className="w-3 h-3 text-zinc-400 mr-1 hidden sm:block" />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-3 w-56 rounded-2xl glass-panel-glow p-2 z-50 text-sm"
                    >
                      <div className="px-3 py-2 border-b border-white/10 mb-1 space-y-1">
                        <p className="font-semibold text-white truncate">{user.name}</p>
                        <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-violet-300 font-bold">Level {user.level}</span>
                          <span className="text-[10px] text-zinc-500">({user.xp} XP)</span>
                        </div>
                        <div className="flex flex-col gap-1 text-[11px] text-zinc-400 pt-1.5 border-t border-white/5">
                          <div className="flex justify-between">
                            <span>Daily streak</span>
                            <span className="font-bold text-orange-400">{user.streak} Days</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Codecoins</span>
                            <span className="font-bold text-yellow-400">{user.coins} CC</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status</span>
                            <span className={`font-bold ${user.isPremium ? "text-cyan-300" : "text-zinc-500"}`}>
                              {user.isPremium ? "PRO Member" : "Free Tier"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition"
                      >
                        <User className="w-4 h-4 text-violet-400" />
                        My Profile
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          href="/admin"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition"
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
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white text-zinc-950 hover:bg-zinc-100 font-bold px-5 py-1.5 rounded-lg text-xs"
              >
                Sign In
              </motion.button>
            </Link>
          )}

          <button
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:bg-white/5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#070812]/95 backdrop-blur-xl border-b border-white/8"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLink("/", "Home")}
              {navLink("/courses", "Courses")}
              {navLink("/problems", "Practice")}
              {navLink("/companies", "Companies")}
              {navLink("/contests", "Contests")}
              <button
                onClick={() => { setIsRazorpayOpen(true); setMobileOpen(false); }}
                className="mt-2 btn-primary rounded-xl py-2.5 text-xs flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> Go Pro
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <RazorpayModal isOpen={isRazorpayOpen} onClose={() => setIsRazorpayOpen(false)} />
    </div>
  );
};
