"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RazorpayModal } from "@/components/RazorpayModal";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Code2,
  Terminal,
  Trophy,
  Brain,
  Search,
  CheckCircle,
  ArrowRight,
  User,
  Heart,
  TrendingUp,
  Cpu,
  Flame
} from "lucide-react";

export default function LandingPage() {
  const { user } = useApp();
  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // AI chat simulator states
  const [aiPrompt, setAiPrompt] = useState("Explain dynamic programming in 1 sentence.");
  const [aiResponse, setAiResponse] = useState(
    "Dynamic programming is an optimization method that solves complex problems by breaking them down into simpler, overlapping subproblems and storing their results to avoid redundant calculations."
  );
  const [aiTyping, setAiTyping] = useState(false);

  const simulateAiPrompt = async (prompt: string, response: string) => {
    setAiPrompt(prompt);
    setAiTyping(true);
    setAiResponse("");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setAiResponse(response);
    setAiTyping(false);
  };

  const codeSnippet = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + right`;

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-clip bg-mesh-dark">
      {/* Background radial blurs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple-glow/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-cyan-glow/10 blur-[120px] pointer-events-none"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple-950/30 border border-brand-purple-500/30 text-xs font-semibold text-brand-purple-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen AI Coding Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Master the Coding{" "}
            <span className="bg-gradient-to-r from-brand-purple-400 via-brand-cyan-400 to-brand-purple-500 bg-clip-text text-transparent">
              Interview
            </span>{" "}
            with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-lg"
          >
            The premium prep arena inspired by Apple & Stripe. Get real-time code explanations, dynamic learning paths, resume audits, and gamified statistics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href={user ? "/profile" : "/auth"}>
              <button className="px-8 py-3 bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white rounded-full font-bold text-sm shadow-glass-glow flex items-center gap-2 group transition-all">
                Enter Arena
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button
              onClick={() => setIsRazorpayOpen(true)}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-sm transition"
            >
              Get Premium Access
            </button>
          </motion.div>

          {/* User statistics counter snippet */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-md">
            <div>
              <span className="block text-2xl font-bold text-white">150+</span>
              <span className="text-xs text-gray-500">Free Problems</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-brand-cyan-400">98%</span>
              <span className="text-xs text-gray-500">Hiring Success</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-brand-purple-400">24/7</span>
              <span className="text-xs text-gray-500">AI Coding Tutor</span>
            </div>
          </div>
        </div>

        {/* Floating Snip Preview / Animation */}
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl glass-panel p-4 border border-white/10 shadow-glass relative overflow-hidden"
          >
            <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-brand-rose-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-brand-amber-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-brand-emerald-500 block"></span>
              </div>
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> quicksort.py
              </span>
            </div>
            <pre className="text-left font-mono text-xs text-brand-cyan-400 overflow-x-auto select-none p-2 leading-relaxed bg-black/45 rounded-lg border border-white/5">
              <code>{codeSnippet}</code>
            </pre>
            {/* Interactive Float indicator */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 bg-brand-purple-600/90 text-white text-[10px] px-3 py-1.5 rounded-full font-bold shadow-glass border border-brand-purple-400/20"
            >
              🚀 Click Run inside IDE
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Streak Dashboard Highlight */}
      <section className="py-16 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Maintain Your Daily Coding Streak</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Level up, earn coins, and unlock exclusive badges by solving challenges consistently. Codeplace gamification makes prep a rewarding habit.
            </p>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/20 text-orange-400 flex items-center gap-3">
                <Flame className="w-8 h-8 animate-bounce text-orange-500 fill-orange-500" />
                <div>
                  <h4 className="font-bold text-lg">12 Days Active</h4>
                  <p className="text-xs text-gray-400">Current record streak</p>
                </div>
              </div>
            </div>
          </div>
          {/* Calendar visual */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span className="font-bold text-white">Daily Coding Calendar</span>
              <span>Streak: +12</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, idx) => {
                const isActive = idx < 12 || idx === 15 || idx === 20;
                return (
                  <div
                    key={idx}
                    className={`aspect-square rounded-md border flex items-center justify-center text-xs font-bold transition-all ${
                      isActive
                        ? "bg-orange-500/25 border-orange-500/50 text-orange-400"
                        : "bg-white/5 border-white/10 text-gray-600"
                    }`}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI Mentor Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ask your Premium AI Mentor</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Instant algorithm complexity reviews, automated bug detection, and code optimization suggestions. Click a prompt below to see the AI in action.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl glass-panel-glow border border-brand-purple-500/20 overflow-hidden flex flex-col text-left">
          {/* Top prompt selectors */}
          <div className="flex flex-wrap gap-2 p-3 bg-white/5 border-b border-white/10">
            <button
              onClick={() =>
                simulateAiPrompt(
                  "Explain binary search complexity.",
                  "Binary search runs in O(log N) time because it halves the search space at each step. In the worst case, you'll perform approximately log2(N) comparisons."
                )
              }
              className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold transition"
            >
              Explain Binary Search
            </button>
            <button
              onClick={() =>
                simulateAiPrompt(
                  "How do I optimize this O(N^2) nested loop?",
                  "You can optimize a nested loops lookup by caching array elements into a Hash Map (dictionary) to search keys in O(1) time, reducing complexity to O(N)."
                )
              }
              className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold transition"
            >
              Optimize Loop
            </button>
            <button
              onClick={() =>
                simulateAiPrompt(
                  "What is dynamic programming in 1 sentence?",
                  "Dynamic programming is an optimization method that solves complex problems by breaking them down into simpler, overlapping subproblems and storing their results to avoid redundant calculations."
                )
              }
              className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold transition"
            >
              Explain DP
            </button>
          </div>

          {/* Mock Console Chat */}
          <div className="p-6 space-y-4 font-mono text-sm">
            <div className="flex gap-2">
              <span className="text-brand-cyan-400 font-bold">&gt; Prompt:</span>
              <span className="text-white">{aiPrompt}</span>
            </div>
            <div className="flex gap-2 pt-2 border-t border-white/5">
              <span className="text-brand-purple-400 font-bold flex items-center gap-1">
                <Brain className="w-4 h-4 text-brand-purple-400" /> Mentor:
              </span>
              <div className="text-gray-300 leading-relaxed flex-1">
                {aiTyping ? (
                  <span className="inline-block w-2.5 h-4 bg-brand-purple-400 animate-pulse"></span>
                ) : (
                  <span>{aiResponse}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-12 z-10">
        <h2 className="text-3xl font-extrabold text-white">Full Coding Ecosystem Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple-500/20 flex items-center justify-center text-brand-purple-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Monaco Code Editor</h4>
            <p className="text-sm text-gray-400">Professional VS Code style code executor supporting themes, auto-save, split screen layout, and Vim modes.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan-500/20 flex items-center justify-center text-brand-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Interactive Roadmaps</h4>
            <p className="text-sm text-gray-400">Graph node maps tailored specifically for Beginner, Intermediate, Advanced, and top hiring corporations.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Global Coding Contests</h4>
            <p className="text-sm text-gray-400">Participate in Weekly, Biweekly, and Monthly tournaments to claim coins and rank high on leaderboards.</p>
          </div>
        </div>
      </section>

      {/* Trusted By / Hiring section */}
      <section className="py-12 bg-white/[0.01] border-y border-white/5 text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Our Alumni Land Coding Offers At</p>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 opacity-40">
          {["Google", "Microsoft", "Amazon", "Meta", "NVIDIA", "Uber", "Apple"].map((company) => (
            <span key={company} className="text-white text-lg font-extrabold font-sans hover:opacity-100 transition">
              {company}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-12 z-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Transparent, Budget-Friendly Plans</h2>
          <p className="text-gray-400 text-sm">Choose the plan that matches your career preparation goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free plan */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Free Practice Arena</h3>
              <p className="text-sm text-gray-400">For beginners starting out their coding journey.</p>
              <div className="text-4xl font-extrabold text-white">₹0</div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2 text-emerald-400">✓ 150+ Free Problems</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Daily Coding Challenges</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Basic Coding Editor Workspace</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Participate in Public Contests</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Basic AI Assistance (5 requests/day)</li>
              </ul>
            </div>
            <Link href="/problems" className="w-full">
              <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-semibold transition">
                Start Practicing
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="glass-panel-glow p-8 rounded-2xl border border-brand-purple-500/40 text-left space-y-6 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-brand-purple-600 text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase">
              Best Value
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Premium Access <Sparkles className="w-4 h-4 text-brand-purple-400" />
              </h3>
              <p className="text-sm text-gray-400">For developers aiming to crack FAANG & top tech hiring interviews.</p>
              <div className="text-4xl font-extrabold text-white">
                ₹299 <span className="text-sm text-gray-500 font-normal">/ year</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2 text-brand-cyan-400">✓ Unlimited AI Coding Mentor & Explanations</li>
                <li className="flex items-center gap-2 text-brand-cyan-400">✓ Premium Mock Interviews (Coding, HR, System Design)</li>
                <li className="flex items-center gap-2 text-brand-cyan-400">✓ Premium Company-wise Roadmaps (Google, Amazon)</li>
                <li className="flex items-center gap-2 text-brand-cyan-400">✓ ATS Resume Builder & AI Score Audit</li>
                <li className="flex items-center gap-2 text-brand-cyan-400">✓ Premium Code Explanations & Editorial Videos</li>
              </ul>
            </div>
            <button
              onClick={() => setIsRazorpayOpen(true)}
              className="w-full py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-xl text-sm font-bold shadow-glass-glow transition"
            >
              Get Premium Access
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {[
            {
              q: "Is Codeplace suitable for beginners?",
              a: "Absolutely! We provide Beginner tracks in our learning paths, focusing on standard syntax, data structures, and basic loops before introducing advanced complexities."
            },
            {
              q: "How does the AI Mentor review code?",
              a: "When you run or write code, click 'AI Mentor' to request a review. The assistant analyzes logical structure, points out missing edge cases, and provides optimal complexity equivalents."
            },
            {
              q: "Can I use the ATS Resume Builder for free?",
              a: "Free members get basic score reviews, while Premium users unlock specific item-by-item keyword optimization recommendations."
            }
          ].map((faq, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center text-sm font-bold text-white text-left focus:outline-none"
              >
                <span>{faq.q}</span>
                <span>{activeFaq === idx ? "-" : "+"}</span>
              </button>
              {activeFaq === idx && <p className="text-xs text-gray-400 mt-2 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Razorpay simulation checkout */}
      <RazorpayModal isOpen={isRazorpayOpen} onClose={() => setIsRazorpayOpen(false)} />
    </div>
  );
}
