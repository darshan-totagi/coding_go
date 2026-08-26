"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  ArrowLeft,
  Lock,
  Trophy,
  Star,
  CheckCircle,
  Shield,
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  loadProgress,
  PYTHON_COURSE_MODULES,
  COURSE_TITLE,
} from "@/data/pythonCourse";

function generateCertId(userId: string, completedAt: string): string {
  const date = completedAt ? new Date(completedAt) : new Date();
  const dateStr = date.toISOString().split("-").join("").split(":").join("").split("T").join("").split(".").join("").slice(0, 14);
  const userHash = userId.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return `CP-PY-${dateStr.slice(0, 8)}-${String(userHash).padStart(4, "0")}`;
}

function formatDate(isoStr?: string): string {
  const date = isoStr ? new Date(isoStr) : new Date();
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function CertificatePage() {
  const { user } = useApp();
  const [progress, setProgress] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  const userId = user?.id || "anonymous";
  const studentName = user?.name || "Python Learner";

  useEffect(() => {
    setMounted(true);
    const p = loadProgress(userId);
    setProgress(p);

    // Show confetti if all passed
    const allPassed = Object.values(p.modules).every((m: any) => m.passed);
    if (allPassed) {
      setTimeout(() => {
        confetti({
          particleCount: 180,
          spread: 100,
          origin: { y: 0.3 },
          colors: ["#f59e0b", "#8b5cf6", "#06b6d4", "#10b981", "#f43f5e"],
        });
      }, 600);
    }
  }, [userId]);

  if (!mounted || !progress) {
    return (
      <div className="flex flex-col min-h-screen bg-[#030303]">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-amber-500/40 border-t-amber-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  const allPassed = Object.values(progress.modules).every((m: any) => m.passed);

  if (!allPassed) {
    return (
      <div className="flex flex-col min-h-screen bg-[#030303]">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-5xl border border-white/10"
          >
            🔒
          </motion.div>
          <div>
            <h1 className="text-3xl font-black text-white mb-3">Certificate Locked</h1>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Complete and pass all <span className="text-white font-semibold">5 module quizzes</span> (scoring at least 4/5 on each) to unlock your Python Basics certificate.
            </p>
          </div>

          {/* Progress */}
          <div className="w-full max-w-sm space-y-2">
            {PYTHON_COURSE_MODULES.map((mod) => {
              const modP = progress.modules[mod.id];
              const passed = modP?.passed;
              return (
                <div key={mod.id} className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <span>{passed ? "✅" : "⬜"}</span>
                    <span className={passed ? "text-emerald-400 font-semibold" : "text-zinc-500"}>{mod.title}</span>
                  </div>
                  {passed ? (
                    <span className="text-xs font-bold text-emerald-400">{modP.bestScore}/5 ✓</span>
                  ) : (
                    <span className="text-xs text-zinc-600">Not passed</span>
                  )}
                </div>
              );
            })}
          </div>

          <Link href="/courses/python-basics">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Course
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const certId = generateCertId(userId, progress.completedAt || new Date().toISOString());
  const completionDate = formatDate(progress.completedAt);
  const totalScore = Object.values(progress.modules).reduce((sum: number, m: any) => sum + (m.bestScore || 0), 0);
  const maxScore = PYTHON_COURSE_MODULES.length * 5;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] relative overflow-x-clip">
      {/* Background */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Print-only styles */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #certificate-print, #certificate-print * { visibility: visible !important; }
          #certificate-print {
            position: fixed !important;
            left: 0 !important; top: 0 !important;
            width: 100vw !important; height: 100vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: white !important;
          }
        }
      `}</style>

      <div className="print:hidden">
        <Header />
      </div>

      {/* Page content */}
      <main className="flex-1 px-6 py-12">
        {/* Back + Actions bar */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-8 print:hidden">
          <Link href="/courses/python-basics" className="flex items-center gap-2 text-zinc-500 hover:text-white transition text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </Link>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </motion.button>
        </div>

        {/* Confetti / congrats message */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-8 print:hidden"
        >
          <h1 className="text-3xl font-black text-white mb-2">Congratulations! 🎉</h1>
          <p className="text-zinc-400 text-sm">You've successfully completed the Python Basics course. Download your certificate below.</p>
        </motion.div>

        {/* ─── Certificate ─────────────────────────────────────────────────── */}
        <div id="certificate-print">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Outer decorative frame */}
            <div
              className="relative rounded-3xl p-1 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #8b5cf6, #06b6d4, #10b981, #f59e0b)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              <style>{`
                @keyframes gradientShift {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>

              {/* Certificate body */}
              <div
                className="relative rounded-[22px] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0d0d1a 0%, #0f1630 50%, #0a0a12 100%)",
                  minHeight: "560px",
                }}
              >
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Large radial glows */}
                  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]" />
                  <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[80px]" />
                  <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-blue-500/8 blur-[80px]" />

                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-32 h-32 rounded-full border border-amber-500/10" />
                  <div className="absolute top-12 right-12 w-20 h-20 rounded-full border border-amber-500/15" />
                  <div className="absolute bottom-8 left-8 w-28 h-28 rounded-full border border-purple-500/10" />
                  <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full border border-purple-500/15" />
                </div>

                {/* Certificate Content */}
                <div className="relative z-10 px-10 py-12 flex flex-col items-center text-center">
                  {/* Header row */}
                  <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/15 border border-orange-500/30 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-orange-400">
                          <path d="M6 18h12" /><path d="M12 2c-3 0-5 2.24-5 5c0 1.25.5 2.13 1.5 2.76c-1.5.58-2.5 1.74-2.5 3.24c0 2.5 3.5 3 8 3s8-.5 8-3c0-1.5-1-2.66-2.5-3.24c1-.63 1.5-1.51 1.5-2.76c0-2.76-2-5-5-5Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-black text-white tracking-wider uppercase">CODE<span className="text-orange-400">PLACE</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400/70">
                      <Shield className="w-3.5 h-3.5" />
                      <span className="font-mono">VERIFIED</span>
                    </div>
                  </div>

                  {/* Trophy icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                    className="mb-6"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 border-2 border-amber-500/40 flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                        🏆
                      </div>
                      {/* Star accents */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="absolute"
                          style={{
                            top: `${50 + 55 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                            left: `${50 + 55 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <Star className="w-3 h-3 text-amber-400/60 fill-amber-400/40" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Certificate of Completion */}
                  <p className="text-xs font-bold text-amber-400/70 uppercase tracking-[0.3em] mb-2">
                    Certificate of Completion
                  </p>
                  <p className="text-sm text-zinc-500 mb-6">This is to certify that</p>

                  {/* Student name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-2"
                  >
                    <h2
                      className="text-4xl sm:text-5xl font-black text-white"
                      style={{ textShadow: "0 0 30px rgba(245,158,11,0.3), 0 0 60px rgba(245,158,11,0.1)" }}
                    >
                      {studentName}
                    </h2>
                    {/* Decorative underline */}
                    <div className="h-0.5 mt-2 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full" />
                  </motion.div>

                  <p className="text-sm text-zinc-400 mb-3">has successfully completed the course</p>

                  {/* Course name */}
                  <div
                    className="text-2xl sm:text-3xl font-black mb-1"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #8b5cf6, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {COURSE_TITLE}
                  </div>
                  <p className="text-xs text-zinc-600 mb-8">Beginner Level • 5 Modules • 25 Quiz Questions</p>

                  {/* Stats row */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="text-center">
                      <div className="text-xl font-black text-emerald-400">5/5</div>
                      <div className="text-[10px] text-zinc-600 mt-0.5">Modules</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-xl font-black text-blue-400">{totalScore}/{maxScore}</div>
                      <div className="text-[10px] text-zinc-600 mt-0.5">Quiz Score</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-xl font-black text-purple-400">100%</div>
                      <div className="text-[10px] text-zinc-600 mt-0.5">Complete</div>
                    </div>
                  </div>

                  {/* Module checkmarks */}
                  <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
                    {PYTHON_COURSE_MODULES.map((mod) => (
                      <div key={mod.id} className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        {mod.title}
                      </div>
                    ))}
                  </div>

                  {/* Footer info */}
                  <div className="w-full flex items-end justify-between border-t border-white/10 pt-6">
                    <div className="text-left">
                      <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Issued On</p>
                      <p className="text-sm font-bold text-white">{completionDate}</p>
                    </div>

                    {/* Signature area */}
                    <div className="text-center">
                      <div
                        className="text-2xl font-black text-white/100 mb-1"
                        style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                      >
                        CodePlace
                      </div>
                      <div className="w-24 h-px bg-white/20 mx-auto" />
                      <p className="text-[10px] text-zinc-600 mt-1">Platform Director</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Certificate ID</p>
                      <p className="text-xs font-mono font-bold text-amber-400/80">{certId}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Module score breakdown */}
        <div className="max-w-4xl mx-auto mt-10 print:hidden">
          <h3 className="text-base font-black text-white mb-4">Your Quiz Scores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PYTHON_COURSE_MODULES.map((mod) => {
              const modP = progress.modules[mod.id];
              return (
                <div key={mod.id} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl">{mod.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{mod.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                          style={{ width: `${((modP?.bestScore ?? 0) / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-emerald-400">{modP?.bestScore ?? 0}/5</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back to course */}
        <div className="max-w-4xl mx-auto mt-8 text-center print:hidden">
          <Link href="/courses/python-basics">
            <button className="text-sm text-zinc-500 hover:text-white transition font-semibold flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              Back to Python Basics
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
