"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RazorpayModal } from "@/components/RazorpayModal";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Zap, Code2, Terminal, Trophy, Brain, Search,
  CheckCircle, ArrowRight, User, Heart, TrendingUp, Cpu,
  Flame, Flag, Award, Star, GraduationCap, Clock, Lightbulb,
  Users, BookOpen, ChevronDown, Target, Shield, Rocket,
  Monitor, Building2, Play, ChevronRight,
} from "lucide-react";

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  return (
    <motion.span
      onViewportEnter={() => {
        if (started) return;
        setStarted(true);
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 20);
      }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}

export default function LandingPage() {
  const { user } = useApp();
  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(499);
  const [selectedPlanName, setSelectedPlanName] = useState("Premium Access");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen page-shell overflow-x-clip">
      <Header />

      {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-fade opacity-60" />
        <div className="absolute top-[12%] left-[8%] w-[480px] h-[480px] rounded-full bg-violet-600/25 blur-[140px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[8%] right-[8%] w-[420px] h-[400px] rounded-full bg-cyan-500/15 blur-[130px] pointer-events-none animate-float" />

        <motion.div
          aria-hidden
          className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] h-[340px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="absolute inset-8 rounded-3xl glass-panel-glow p-5 font-mono text-[11px] text-cyan-200/80 leading-relaxed animate-float-slow">
            <p className="text-violet-300/80 mb-2">// daily challenge</p>
            <p>function twoSum(nums, target) {"{"}</p>
            <p className="pl-3">const map = new Map();</p>
            <p className="pl-3">for (let i = 0; i {"<"} nums.length; i++) {"{"}</p>
            <p className="pl-6">const need = target - nums[i];</p>
            <p className="pl-6">if (map.has(need)) return [map.get(need), i];</p>
            <p className="pl-6">map.set(nums[i], i);</p>
            <p className="pl-3">{"}"}</p>
            <p>{"}"}</p>
          </div>
          <div className="absolute -top-3 -right-2 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Accepted · 98ms
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-400/25 px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
            >
              <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
              #1 Coding Prep Platform for India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 section-title"
            >
              Master Coding.{" "}
              <span className="animate-gradient bg-gradient-to-r from-violet-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                Crack Any Interview.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Practice 700+ problems, take structured courses, compete in contests, and get AI-powered guidance — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/courses">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-xl text-sm">
                  <GraduationCap className="w-4 h-4" />
                  Our Courses
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/problems">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 btn-ghost text-white font-bold rounded-xl text-sm">
                  <Play className="w-4 h-4" />
                  Practice Now
                </motion.button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["🧑‍💻", "👩‍💻", "🧑‍🎓", "👨‍💻"].map((e, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm border-2 border-[#030303]">{e}</div>
                  ))}
                </div>
                <span className="text-xs text-zinc-400"><span className="text-white font-bold">832K+</span> learners</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                <span className="text-xs text-zinc-400"><span className="text-white font-bold">4.8</span> rating</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span><span className="text-white font-bold">Free</span> to get started</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 z-10"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── 2. SEARCH / QUICK ACCESS BAR ─────────────────────────────────── */}
      <section className="relative py-14 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-700" />
        <div className="absolute inset-0 opacity-30 animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-fuchsia-500/20 via-transparent to-cyan-400/20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-2 section-title">
            Find Your Problem. Start Solving Now!
          </h2>
          <p className="text-indigo-100 text-center text-sm mb-6">Search from 700+ coding problems across all difficulty levels</p>
          <div className="flex gap-0 rounded-2xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.35)] border border-white/25 backdrop-blur-sm">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && searchQuery.trim()) window.location.href = `/problems?search=${encodeURIComponent(searchQuery)}`; }}
              type="text"
              placeholder="Search problems e.g. 'Two Sum', 'Binary Tree', 'Dynamic Programming'..."
              className="flex-1 px-6 py-4 bg-white text-gray-800 text-sm font-medium placeholder-gray-400 outline-none min-w-0"
            />
            <Link href={`/problems${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`}>
              <button className="px-8 py-4 bg-[#0b0c18] hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-2 h-full">
                <Search className="w-4 h-4" />
                Search
              </button>
            </Link>
          </div>
          {/* Quick tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Arrays", "Dynamic Programming", "Graphs", "Binary Search", "Sorting", "Trees"].map((tag) => (
              <Link key={tag} href={`/problems?tag=${tag}`}>
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold cursor-pointer transition border border-white/20">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STATS ROW ──────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Code2 className="w-6 h-6 text-blue-400" />, value: 739, suffix: "+", label: "Coding Problems", color: "blue" },
              { icon: <Users className="w-6 h-6 text-purple-400" />, value: 832531, suffix: "+", label: "Active Learners", color: "purple" },
              { icon: <GraduationCap className="w-6 h-6 text-emerald-400" />, value: 4, suffix: "", label: "Free Courses", color: "emerald" },
              { icon: <Trophy className="w-6 h-6 text-amber-400" />, value: 98, suffix: "%", label: "Interview Success", color: "amber" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-black text-white`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-zinc-500 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT WE OFFER (3 big colored cards) ───────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> What We Offer
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Grow as a Developer
              </span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
              A complete coding ecosystem built for aspiring developers — from day one to dream offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-10 h-10" />,
                emoji: "🤖",
                title: "AI Coding Mentor",
                desc: "Get instant code reviews, complexity analysis, bug detection and step-by-step explanations powered by AI. Like having a senior engineer beside you 24/7.",
                link: "/problems",
                linkText: "Try AI Mentor",
                bg: "from-purple-600 to-indigo-700",
                glow: "shadow-[0_20px_60px_rgba(139,92,246,0.3)]",
                badge: "Premium",
              },
              {
                icon: <Monitor className="w-10 h-10" />,
                emoji: "💻",
                title: "Monaco Code Lab",
                desc: "Professional VS Code-style editor with multi-language support, real-time output, test case validation, and auto-save — practice problems the right way.",
                link: "/problems",
                linkText: "Start Coding",
                bg: "from-blue-600 to-cyan-600",
                glow: "shadow-[0_20px_60px_rgba(59,130,246,0.3)]",
                badge: "Free",
              },
              {
                icon: <Trophy className="w-10 h-10" />,
                emoji: "🏆",
                title: "Reach Your Goals",
                desc: "Structured courses with certificates, global coding contests with leaderboards, daily streak system, and company-specific roadmaps for FAANG & top startups.",
                link: "/courses",
                linkText: "View Roadmaps",
                bg: "from-emerald-600 to-teal-600",
                glow: "shadow-[0_20px_60px_rgba(16,185,129,0.3)]",
                badge: "Free",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-3xl bg-gradient-to-br ${card.bg} p-8 flex flex-col gap-5 overflow-hidden ${card.glow} group shine`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute top-4 right-4 text-[10px] font-black text-white/80 bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  {card.badge}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <Link href={card.link}>
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-xl transition">
                      {card.linkText} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COURSES SECTION (Coursera-style) ──────────────────────────── */}
      <section className="py-20 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                <GraduationCap className="w-3.5 h-3.5" /> Free Courses
              </div>
              <h2 className="text-4xl font-black text-white">Start Learning Today</h2>
              <p className="text-zinc-400 text-sm mt-2">Structured modules · Interactive quizzes · Completion certificate</p>
            </div>
            <Link href="/courses" className="text-sm text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1.5 transition mt-auto">
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Coursera-style banner: left promo + cards */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f1b4d] via-[#132064] to-[#1a2a7a] border border-blue-500/20 shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
            <div className="flex flex-col lg:flex-row">

              {/* ── Left promo panel ── */}
              <div className="lg:w-56 shrink-0 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                {/* Logo */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-sm">C</div>
                    <div>
                      <span className="text-white font-black text-sm">CodePlace</span>
                      <span className="ml-2 text-[9px] font-black text-blue-300 bg-blue-500/25 border border-blue-400/30 px-1.5 py-0.5 rounded uppercase tracking-wider">PLUS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base leading-tight mb-2">Free Coding Collection</h3>
                    <p className="text-blue-200/70 text-xs leading-relaxed">Explore structured beginner courses in Python, Java, SQL &amp; C. Learn more</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/courses">
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="w-full py-2.5 bg-white hover:bg-blue-50 text-blue-700 font-black text-xs rounded-xl transition shadow-lg">
                      Browse All Courses
                    </motion.button>
                  </Link>
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-200/50 justify-center">
                    <Shield className="w-3 h-3" /> 100% Free · No card needed
                  </div>
                </div>
              </div>

              {/* ── Course cards ── */}
              <div className="flex-1 p-5 overflow-x-auto">
                <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-4">
                  {[
                    {
                      emoji: "🐍",
                      title: "Python Basics",
                      href: "/courses/python-basics",
                      label: "FUNDAMENTALS",
                      type: "Beginner Course",
                      rating: "4.8",
                      thumbFrom: "#3b5cf6",
                      thumbTo: "#7c3aed",
                      thumbAccent: "#a78bfa",
                    },
                    {
                      emoji: "☕",
                      title: "Java Basics",
                      href: "/courses/java-basics",
                      label: "OOP & CLASSES",
                      type: "Beginner Course",
                      rating: "4.8",
                      thumbFrom: "#ea580c",
                      thumbTo: "#b91c1c",
                      thumbAccent: "#fb923c",
                    },
                    {
                      emoji: "🗄️",
                      title: "SQL Basics",
                      href: "/courses/sql-basics",
                      label: "DATABASE",
                      type: "Beginner Course",
                      rating: "4.8",
                      thumbFrom: "#059669",
                      thumbTo: "#0d9488",
                      thumbAccent: "#34d399",
                    },
                    {
                      emoji: "⚙️",
                      title: "C Programming",
                      href: "/courses/c-programming",
                      label: "SYSTEMS",
                      type: "Beginner Course",
                      rating: "4.8",
                      thumbFrom: "#0891b2",
                      thumbTo: "#2563eb",
                      thumbAccent: "#38bdf8",
                    },
                  ].map((course, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="w-44 lg:w-auto"
                    >
                      <Link href={course.href}>
                        <div className="group rounded-2xl bg-[#0a0f2e]/80 border border-white/10 overflow-hidden hover:border-white/25 hover:scale-[1.03] transition-all duration-300 cursor-pointer">

                          {/* Thumbnail */}
                          <div className="relative h-28 flex items-center justify-center overflow-hidden"
                            style={{ background: `linear-gradient(135deg, ${course.thumbFrom}, ${course.thumbTo})` }}>
                            {/* Background circles */}
                            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-full opacity-20"
                              style={{ background: course.thumbAccent }} />
                            <div className="absolute bottom-[-15px] left-[-10px] w-16 h-16 rounded-full opacity-15"
                              style={{ background: course.thumbAccent }} />
                            {/* Emoji icon */}
                            <span className="relative z-10 text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {course.emoji}
                            </span>
                            {/* Label strip */}
                            <div className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
                              style={{ background: "rgba(0,0,0,0.45)" }}>
                              <span className="text-[9px] font-black text-white uppercase tracking-widest">
                                {course.label}
                              </span>
                            </div>
                          </div>

                          {/* Card body */}
                          <div className="p-3.5">
                            {/* Provider row */}
                            <div className="flex items-center gap-1.5 mb-2">
                              <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[8px] font-black shrink-0">C</div>
                              <span className="text-[10px] text-zinc-400 font-semibold">CodePlace</span>
                            </div>
                            {/* Title */}
                            <h3 className="text-sm font-black text-white leading-tight mb-2 group-hover:text-blue-300 transition">
                              {course.title}
                            </h3>
                            {/* Type */}
                            <p className="text-[10px] text-zinc-500 mb-2">{course.type}</p>
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              <span className="text-[11px] font-black text-amber-400">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FEATURES GRID ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white mb-3">Full Coding Ecosystem Features</h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">Every tool you need to go from beginner to interview-ready</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Code2 className="w-6 h-6" />, title: "Monaco Code Editor", desc: "VS Code-style editor with syntax highlighting, multi-language support, auto-save and test case runner.", color: "purple" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Interactive Roadmaps", desc: "Visual learning paths for Beginner, Intermediate, Advanced tracks and company-specific prep.", color: "cyan" },
              { icon: <Trophy className="w-6 h-6" />, title: "Coding Contests", desc: "Weekly, Biweekly & Monthly tournaments with real-time leaderboard and coin rewards.", color: "amber" },
              { icon: <Building2 className="w-6 h-6" />, title: "Company Profiles", desc: "Curated problem sets for Google, Amazon, Meta, Microsoft and 50+ top hiring companies.", color: "blue" },
              { icon: <Flame className="w-6 h-6" />, title: "Daily Streak System", desc: "Gamified daily challenges, XP, badges and streaks to keep you motivated and consistent.", color: "orange" },
              { icon: <Rocket className="w-6 h-6" />, title: "Certificates", desc: "Earn verifiable certificates for each completed course to showcase on LinkedIn and resumes.", color: "emerald" },
            ].map((feat, i) => {
              const colorMap: Record<string, string> = {
                purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
                cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
                amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
                orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
                emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
              };
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 p-6 group hover:bg-white/[0.05] transition-all">
                  <div className={`w-12 h-12 rounded-xl border ${colorMap[feat.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {feat.icon}
                  </div>
                  <h4 className="text-base font-black text-white mb-2">{feat.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. STREAK / DAILY CHALLENGE BANNER ──────────────────────────── */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-orange-400" /> Daily Streak System
            </div>
            <h2 className="text-4xl font-black text-white mb-4 leading-tight">
              Maintain Your<br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Daily Coding Streak</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Level up, earn coins, and unlock exclusive badges by solving challenges consistently. Codeplace's gamification makes interview prep a rewarding habit you'll never want to break.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                <div>
                  <p className="text-sm font-black text-white">12 Days</p>
                  <p className="text-[10px] text-zinc-500">Current streak</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Award className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="text-sm font-black text-white">1,240 XP</p>
                  <p className="text-[10px] text-zinc-500">Points earned</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <div className="flex justify-between items-center text-xs mb-4">
              <span className="font-black text-white text-base">Daily Coding Calendar</span>
              <span className="text-orange-400 font-bold">Streak: 🔥 12</span>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <div key={i} className="text-center text-[10px] text-zinc-600 font-bold">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, idx) => {
                const active = idx < 12 || idx === 15 || idx === 20;
                const today = idx === 11;
                return (
                  <div key={idx} className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
                    today ? "bg-orange-500 text-white ring-2 ring-orange-400 ring-offset-1 ring-offset-[#030303]"
                      : active ? "bg-orange-500/25 border border-orange-500/40 text-orange-400"
                      : "bg-white/5 border border-white/8 text-zinc-700"
                  }`}>
                    {idx + 1}
                  </div>
                );
              })}
            </div>
            <Link href="/problems">
              <button className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-sm rounded-xl transition shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
                🔥 Solve Today&apos;s Challenge
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 8. TRUSTED BY ─────────────────────────────────────────────────── */}
      <section className="py-12 border-b border-white/5 overflow-hidden">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8 text-center">Our Alumni Land Offers At</p>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05060f] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05060f] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-16 px-8">
            {["Google", "Microsoft", "Amazon", "Meta", "NVIDIA", "Uber", "Apple", "Flipkart", "Google", "Microsoft", "Amazon", "Meta", "NVIDIA", "Uber", "Apple", "Flipkart"].map((company, i) => (
              <span key={`${company}-${i}`} className="text-zinc-500 hover:text-white text-lg font-black transition duration-300 cursor-default whitespace-nowrap">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. PRICING ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Simple Pricing
          </div>
          <h2 className="text-4xl font-black text-white mb-3">Transparent, Budget-Friendly Plans</h2>
          <p className="text-zinc-400 text-sm mb-12">Choose the plan that matches your career goals.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 text-left flex flex-col">
              <h3 className="text-lg font-black text-white mb-1">Free Practice Arena</h3>
              <p className="text-xs text-zinc-500 mb-4">For beginners starting their journey.</p>
              <div className="text-5xl font-black text-white mb-6">₹0</div>
              <ul className="space-y-3 text-sm text-zinc-400 flex-1 mb-8">
                {["150+ Free Problems", "Daily Coding Challenges", "Monaco Code Editor", "Public Contests", "5 AI requests/day"].map(f => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />{f}</li>
                ))}
              </ul>
              <Link href="/problems"><button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-bold transition">Start Practicing</button></Link>
            </motion.div>

            {/* Premium */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl bg-gradient-to-b from-purple-900/40 to-indigo-900/40 border border-purple-500/40 p-8 text-left flex flex-col relative shadow-[0_0_50px_rgba(139,92,246,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-wider whitespace-nowrap">
                ⭐ Best Value
              </div>
              <h3 className="text-lg font-black text-white mb-1 flex items-center gap-2">Premium Access <Sparkles className="w-4 h-4 text-purple-400" /></h3>
              <p className="text-xs text-zinc-400 mb-4">For developers aiming to crack FAANG & top tech.</p>
              <div className="text-5xl font-black text-white mb-1">₹499</div>
              <p className="text-xs text-zinc-500 mb-6">per year</p>
              <ul className="space-y-3 text-sm text-zinc-300 flex-1 mb-8">
                {["Unlimited AI Coding Mentor", "Premium Mock Interviews", "Company Roadmaps (Google, Amazon)", "ATS Resume Builder", "Editorial Videos"].map(f => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />{f}</li>
                ))}
              </ul>
              <button onClick={() => { setSelectedPlanPrice(499); setSelectedPlanName("Premium Access (1 Year)"); setIsRazorpayOpen(true); }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-sm font-black transition shadow-[0_4px_20px_rgba(139,92,246,0.4)]">
                Get Premium Access
              </button>
            </motion.div>

            {/* Lifetime */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 p-8 text-left flex flex-col transition-colors">
              <h3 className="text-lg font-black text-white mb-1 flex items-center gap-2">Lifetime Access <Trophy className="w-4 h-4 text-amber-400" /></h3>
              <p className="text-xs text-zinc-500 mb-4">Pay once, unlock the entire platform forever.</p>
              <div className="text-5xl font-black text-white mb-1">₹999</div>
              <p className="text-xs text-zinc-500 mb-6">one-time payment</p>
              <ul className="space-y-3 text-sm text-zinc-400 flex-1 mb-8">
                {["Everything in Premium", "Lifetime Platform Access", "All Future Courses", "VIP Discord Community", "Priority Resume Visibility"].map(f => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />{f}</li>
                ))}
              </ul>
              <button onClick={() => { setSelectedPlanPrice(999); setSelectedPlanName("Lifetime Access"); setIsRazorpayOpen(true); }}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-bold transition">
                Get Lifetime Access
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-zinc-400 text-sm">Quick answers to common questions</p>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is Codeplace suitable for beginners?", a: "Absolutely! We provide Beginner tracks in our learning paths, focusing on standard syntax, data structures, and basic loops before introducing advanced complexities. Our structured courses (Python, Java, SQL, C) start from zero." },
              { q: "How does the AI Mentor review code?", a: "When you run or write code, click 'AI Mentor' to request a review. The assistant analyzes logical structure, points out missing edge cases, and provides optimal complexity equivalents." },
              { q: "Can I use the ATS Resume Builder for free?", a: "Free members get basic score reviews, while Premium users unlock specific item-by-item keyword optimization recommendations and recruiter visibility." },
              { q: "Are the courses really free?", a: "Yes! Python, Java, SQL, and C Programming courses are completely free — including all 5 modules, quizzes, and certificates. Premium plans unlock AI features and mock interviews." },
            ].map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-sm font-bold text-white text-left hover:bg-white/5 transition">
                  <span>{faq.q}</span>
                  <motion.span animate={{ rotate: activeFaq === idx ? 45 : 0 }} className="text-zinc-500 text-xl leading-none shrink-0 ml-4">+</motion.span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA BANNER ─────────────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(circle at 70% 50%, rgba(139,92,246,0.15), transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Ready to Level Up?</h2>
          <p className="text-zinc-300 text-base mb-8">Join 832,000+ developers already building their careers on CodePlace.</p>
          <div className="flex flex-wrap gap-4 justify-center">
              <Link href={user ? "/problems" : "/auth"}>
              <button className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-xl text-sm">
                <Zap className="w-4 h-4" />
                {user ? "Continue Practicing" : "Get Started Free"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/courses">
              <button className="inline-flex items-center gap-2 px-8 py-4 btn-ghost text-white font-bold rounded-xl text-sm">
                <GraduationCap className="w-4 h-4" /> Browse Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <RazorpayModal
        isOpen={isRazorpayOpen}
        onClose={() => setIsRazorpayOpen(false)}
        price={selectedPlanPrice}
        planName={selectedPlanName}
      />
    </div>
  );
}
