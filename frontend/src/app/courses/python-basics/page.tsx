"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Lock,
  PlayCircle,
  BookOpen,
  Award,
  ChevronRight,
  Clock,
  Star,
  Zap,
  Trophy,
  BarChart3,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import {
  PYTHON_COURSE_MODULES,
  COURSE_TITLE,
  COURSE_LEVEL,
  PASS_THRESHOLD,
  loadProgress,
  saveProgress,
  createEmptyProgress,
  isModuleUnlocked,
  getOverallProgress,
  CourseProgress,
} from "@/data/pythonCourse";

export default function PythonBasicsPage() {
  const { user } = useApp();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [mounted, setMounted] = useState(false);

  const userId = user?.id || "anonymous";

  useEffect(() => {
    setMounted(true);
    const p = loadProgress(userId);
    // If no progress yet, create and save empty
    if (!localStorage.getItem("codeplace_python_basics_progress")) {
      const empty = createEmptyProgress(userId);
      saveProgress(empty);
      setProgress(empty);
    } else {
      setProgress(p);
    }
  }, [userId]);

  if (!mounted || !progress) {
    return (
      <div className="flex flex-col min-h-screen bg-[#030303]">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-purple-500/40 border-t-brand-purple-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  const overallPercent = getOverallProgress(progress);
  const passedCount = Object.values(progress.modules).filter((m) => m.passed).length;
  const allPassed = passedCount === PYTHON_COURSE_MODULES.length;

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] relative overflow-x-clip">
      {/* Background glows */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full bg-cyan-600/6 blur-[120px] pointer-events-none" />

      <Header />

      {/* Hero Banner */}
      <section className="relative py-12 px-6 border-b border-white/5"
        style={{
          background: "linear-gradient(135deg, #0d1f3c 0%, #0a0a12 50%, #0d1520 100%)",
          backgroundImage: "linear-gradient(135deg, #0d1f3c 0%, #0a0a12 50%, #0d1520 100%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 28px 28px, 28px 28px",
        }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-[15%] w-72 h-72 rounded-full bg-blue-500/10 blur-[90px]" />
          <div className="absolute bottom-0 right-[10%] w-48 h-48 rounded-full bg-purple-500/10 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-zinc-400">Courses</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">{COURSE_TITLE}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Title & Info */}
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🐍</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {COURSE_LEVEL}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                {COURSE_TITLE}
              </h1>
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                Learn Python from zero — covering variables, data types, loops, functions, data structures, OOP, and file handling through structured modules and quizzes.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  5 Modules
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Clock className="w-4 h-4 text-purple-400" />
                  ~4 Hours Total
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  25 Quiz Questions
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Certificate on Completion
                </div>
              </div>
            </div>

            {/* Right: Progress Card */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 space-y-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Your Progress</span>
                  <span className="text-sm font-black text-blue-400">{overallPercent}%</span>
                </div>

                {/* Progress bar */}
                <div className="relative h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-black text-white">{passedCount}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Modules Passed</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-black text-white">{PYTHON_COURSE_MODULES.length - passedCount}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Remaining</div>
                  </div>
                </div>

                {allPassed ? (
                  <Link href="/courses/python-basics/certificate">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition flex items-center justify-center gap-2"
                    >
                      <Trophy className="w-4 h-4" />
                      View Certificate 🎉
                    </motion.button>
                  </Link>
                ) : (
                  <Link href={`/courses/python-basics/module-${passedCount + 1}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition flex items-center justify-center gap-2"
                    >
                      <PlayCircle className="w-4 h-4" />
                      {passedCount === 0 ? "Start Course" : "Continue Learning"}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="max-w-6xl mx-auto px-6 py-14 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-white">Learning Path</h2>
            <p className="text-zinc-500 text-sm mt-1">Complete each module and pass the quiz to unlock the next one.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-500">
            <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Completed</span>
            <span className="flex items-center gap-1"><PlayCircle className="w-3.5 h-3.5 text-blue-400" /> Available</span>
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-zinc-600" /> Locked</span>
          </div>
        </div>

        {/* Module path visual */}
        <div className="flex items-center gap-2 flex-wrap mb-10 text-xs font-semibold text-zinc-500">
          {PYTHON_COURSE_MODULES.map((mod, i) => (
            <React.Fragment key={mod.id}>
              <span className={progress.modules[mod.id]?.passed ? "text-emerald-400" : i === passedCount ? "text-blue-400" : "text-zinc-600"}>
                Module {i + 1}
              </span>
              {i < PYTHON_COURSE_MODULES.length - 1 && <ChevronRight className="w-3 h-3" />}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3 h-3" />
          <span className={allPassed ? "text-amber-400 font-bold" : "text-zinc-600"}>Certificate</span>
        </div>

        {/* Module Cards */}
        <div className="space-y-4">
          {PYTHON_COURSE_MODULES.map((mod, index) => {
            const modProgress = progress.modules[mod.id];
            const unlocked = isModuleUnlocked(index, progress);
            const isPassed = modProgress?.passed;
            const isContentDone = modProgress?.contentCompleted;
            const bestScore = modProgress?.bestScore ?? 0;
            const isCurrent = !isPassed && unlocked;

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isPassed
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : isCurrent
                    ? "border-blue-500/40 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                {/* Current module accent bar */}
                {isCurrent && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-l-2xl" />
                )}
                {isPassed && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl" />
                )}

                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* Icon */}
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${
                    isPassed
                      ? "bg-emerald-500/10 border-emerald-500/20"
                      : isCurrent
                      ? "bg-blue-500/10 border-blue-500/20"
                      : "bg-white/5 border-white/5"
                  }`}>
                    {isPassed ? "✅" : !unlocked ? "🔒" : mod.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Module {mod.number}</span>
                      {isPassed && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          COMPLETED ✓
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full animate-pulse">
                          IN PROGRESS
                        </span>
                      )}
                      {!unlocked && (
                        <span className="text-[10px] font-bold text-zinc-600 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                          LOCKED 🔒
                        </span>
                      )}
                    </div>

                    <h3 className={`text-base font-bold mb-1 ${!unlocked ? "text-zinc-600" : "text-white"}`}>
                      {mod.title}
                    </h3>
                    <p className={`text-xs mb-3 ${!unlocked ? "text-zinc-700" : "text-zinc-500"}`}>{mod.subtitle}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5">
                      {mod.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className={`text-[10px] px-2 py-0.5 rounded-lg font-medium ${
                            !unlocked ? "bg-white/3 text-zinc-700" : "bg-white/5 text-zinc-400"
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                      {mod.topics.length > 4 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-lg font-medium bg-white/5 text-zinc-500">
                          +{mod.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right side: Quiz score + CTA */}
                  <div className="flex flex-col items-end gap-3 shrink-0">
                    {/* Quiz score */}
                    {isPassed && (
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-sm font-black text-emerald-400">Quiz {bestScore}/5</span>
                      </div>
                    )}
                    {isContentDone && !isPassed && bestScore > 0 && (
                      <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                        <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-sm font-black text-amber-400">Quiz {bestScore}/5</span>
                      </div>
                    )}

                    {/* CTA */}
                    {unlocked ? (
                      <Link href={`/courses/python-basics/${mod.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                            isPassed
                              ? "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-[0_4px_14px_rgba(99,102,241,0.25)]"
                          }`}
                        >
                          {isPassed ? (
                            <><BookOpen className="w-4 h-4" />Review</>
                          ) : isContentDone ? (
                            <><Zap className="w-4 h-4" />Take Quiz</>
                          ) : (
                            <><PlayCircle className="w-4 h-4" />Start</>
                          )}
                        </motion.button>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed">
                        <Lock className="w-4 h-4" />
                        Locked
                      </div>
                    )}
                  </div>
                </div>

                {/* Sub-row: content status + quiz status */}
                {unlocked && (
                  <div className="px-6 pb-5 flex items-center gap-4 flex-wrap">
                    <div className={`flex items-center gap-1.5 text-xs font-semibold ${isContentDone ? "text-emerald-400" : "text-zinc-600"}`}>
                      <div className={`w-2 h-2 rounded-full ${isContentDone ? "bg-emerald-400" : "bg-zinc-700"}`} />
                      Learning Content {isContentDone ? "— Done ✓" : "— Not started"}
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-semibold ${isPassed ? "text-emerald-400" : isContentDone && bestScore > 0 ? "text-amber-400" : "text-zinc-600"}`}>
                      <div className={`w-2 h-2 rounded-full ${isPassed ? "bg-emerald-400" : isContentDone && bestScore > 0 ? "bg-amber-400" : "bg-zinc-700"}`} />
                      Quiz {isPassed ? `— Passed (${bestScore}/5) ✓` : bestScore > 0 ? `— ${bestScore}/5 (need ${PASS_THRESHOLD}/5)` : "— Not taken"}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
              allPassed
                ? "border-amber-500/40 bg-amber-500/5 shadow-[0_0_40px_rgba(245,158,11,0.08)]"
                : "border-white/5 bg-white/[0.02]"
            }`}
          >
            {allPassed && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" />
            )}
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${
                allPassed ? "bg-amber-500/10 border-amber-500/20" : "bg-white/5 border-white/5"
              }`}>
                {allPassed ? "🏆" : "🔒"}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Final Reward</span>
                  {allPassed && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      UNLOCKED 🎉
                    </span>
                  )}
                </div>
                <h3 className={`text-base font-bold mb-1 ${!allPassed ? "text-zinc-600" : "text-white"}`}>
                  Certificate of Completion
                </h3>
                <p className={`text-xs ${!allPassed ? "text-zinc-700" : "text-zinc-400"}`}>
                  {allPassed
                    ? "Congratulations! You've completed Python Basics. Download your certificate."
                    : `Pass all 5 module quizzes (≥${PASS_THRESHOLD}/5 each) to unlock your certificate.`}
                </p>
              </div>

              {allPassed ? (
                <Link href="/courses/python-basics/certificate">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)] transition"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Get Certificate
                  </motion.button>
                </Link>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed">
                  <Lock className="w-4 h-4" />
                  Locked
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
