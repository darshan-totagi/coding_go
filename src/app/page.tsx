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
  Flame,
  Flag,
  Award,
  Star,
  GraduationCap,
  Clock,
  Lightbulb,
  Users
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

      {/* Hero Poster Section */}
      <section 
        className="w-full relative py-12 md:py-16 px-6 md:px-12 border-b border-white/5"
        style={{ 
          backgroundColor: "#0d2757", 
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", 
          backgroundSize: "24px 24px" 
        }}
      >
        {/* Subtle glow highlights */}
        <div className="absolute top-0 left-[20%] w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 text-left">
          {/* Left Column: Title and details */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 tracking-wider uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
              <Flag className="w-3.5 h-3.5 fill-current" />
              Python with Beginner DSA
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Python with Beginner DSA
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Learn the basics of Python and data structures. Use practice modules to boost your coding and logic. End the roadmap with projects to showcase your Python abilities.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-lg select-none">
                <Award className="w-4 h-4 text-blue-400" />
                Certification Available
              </div>

              <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg select-none">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                4.6 (179.6k+)
              </div>

              <Link href="/roadmaps" className="text-xs text-zinc-400 hover:text-white underline transition">
                179.6k+ Reviews
              </Link>
            </div>
          </div>

          {/* Right Column: Stats & CTA Card */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="rounded-2xl bg-[#081530]/80 border border-white/5 shadow-2xl p-6 backdrop-blur-md flex flex-col gap-6">
              {/* Stat rows */}
              <div className="grid grid-cols-3 gap-2 text-center border-b border-white/5 pb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-white">6 Courses</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-white">6 months</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-blue-500/10 rounded-xl">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-bold text-white">739 Problems</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-4">
                <Link href="/roadmaps">
                  <button className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition duration-200 text-center">
                    Start Roadmap Now
                  </button>
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>832,531 people already enrolled</span>
                </div>
              </div>
            </div>
          </div>
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
