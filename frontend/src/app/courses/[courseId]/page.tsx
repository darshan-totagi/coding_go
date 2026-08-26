"use client";

import { use } from "react";
import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Lock, PlayCircle, BookOpen, Award, ChevronRight, Clock, Star, Zap, Trophy, BarChart3, ArrowRight, GraduationCap } from "lucide-react";
import { COURSE_REGISTRY } from "@/data/courseRegistry";
import { COURSE_COLORS, PASS_THRESHOLD, loadCourseProgress, saveCourseProgress, createEmptyCourseProgress, isCourseModuleUnlocked, getCourseOverallProgress, CourseProgress } from "@/data/courseTypes";
import { notFound } from "next/navigation";

export default function CourseOverviewPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const { user } = useApp();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [mounted, setMounted] = useState(false);

  const course = COURSE_REGISTRY[courseId];
  if (!course) notFound();

  const userId = user?.id || "anonymous";
  const c = COURSE_COLORS[course.color];

  useEffect(() => {
    setMounted(true);
    const p = loadCourseProgress(courseId, userId, course.modules);
    if (!localStorage.getItem(`codeplace_course_${courseId}_progress`)) {
      const empty = createEmptyCourseProgress(courseId, userId, course.modules);
      saveCourseProgress(courseId, empty);
      setProgress(empty);
    } else {
      setProgress(p);
    }
  }, [courseId, userId]);

  if (!mounted || !progress) {
    return (
      <div className="flex flex-col min-h-screen bg-[#030303]">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className={`w-8 h-8 border-2 border-t-orange-400 rounded-full animate-spin`} style={{ borderColor: "rgba(255,255,255,0.1)", borderTopColor: "#fb923c" }} />
        </div>
      </div>
    );
  }

  const overallPercent = getCourseOverallProgress(progress, course.modules);
  const passedCount = Object.values(progress.modules).filter((m) => m.passed).length;
  const allPassed = passedCount === course.modules.length;

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] relative overflow-x-clip">
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-600/6 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />

      <Header />

      {/* Hero Banner */}
      <section className="relative py-12 px-6 border-b border-white/5 bg-gradient-to-br from-[#0d0d1a] to-[#0a0a12]">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/courses" className="hover:text-white transition">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">{course.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{course.icon}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${c.badge}`}>
                  {course.level}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">{course.title}</h1>
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400"><BookOpen className={`w-4 h-4 ${c.badgeText}`} />{course.modules.length} Modules</div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400"><Clock className="w-4 h-4 text-purple-400" />{course.totalHours}</div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400"><Star className="w-4 h-4 text-amber-400 fill-amber-400" />{course.modules.length * 5} Quiz Questions</div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400"><Award className="w-4 h-4 text-emerald-400" />Certificate on Completion</div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 space-y-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Your Progress</span>
                  <span className={`text-sm font-black ${c.badgeText}`}>{overallPercent}%</span>
                </div>
                <div className="relative h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${c.progress} rounded-full`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-black text-white">{passedCount}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Modules Passed</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-2xl font-black text-white">{course.modules.length - passedCount}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Remaining</div>
                  </div>
                </div>
                {allPassed ? (
                  <Link href={`/courses/${courseId}/certificate`}>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2">
                      <Trophy className="w-4 h-4" />View Certificate 🎉
                    </motion.button>
                  </Link>
                ) : (
                  <Link href={`/courses/${courseId}/${course.modules[passedCount]?.id || course.modules[0].id}`}>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 bg-gradient-to-r ${c.btn} text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2`}>
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
        <h2 className="text-2xl font-black text-white mb-2">Learning Path</h2>
        <p className="text-zinc-500 text-sm mb-8">Complete each module and pass the quiz to unlock the next one.</p>

        <div className="space-y-4">
          {course.modules.map((mod, index) => {
            const modProg = progress.modules[mod.id];
            const unlocked = isCourseModuleUnlocked(index, progress, course.modules);
            const isPassed = modProg?.passed;
            const isContentDone = modProg?.contentCompleted;
            const bestScore = modProg?.bestScore ?? 0;
            const isCurrent = !isPassed && unlocked;

            return (
              <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isPassed ? "border-emerald-500/30 bg-emerald-500/5"
                    : isCurrent ? `${c.border} ${c.bg} ${c.glow}`
                    : "border-white/5 bg-white/[0.02]"
                }`}>
                {isCurrent && <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${c.accent} rounded-l-2xl`} />}
                {isPassed && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl" />}

                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${
                    isPassed ? "bg-emerald-500/10 border-emerald-500/20"
                      : isCurrent ? `${c.iconBg}`
                      : "bg-white/5 border-white/5"
                  }`}>
                    {isPassed ? "✅" : !unlocked ? "🔒" : mod.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Module {mod.number}</span>
                      {isPassed && <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">COMPLETED ✓</span>}
                      {isCurrent && <span className={`text-[10px] font-bold ${c.badgeText} ${c.badge} px-2 py-0.5 rounded-full border animate-pulse`}>IN PROGRESS</span>}
                      {!unlocked && <span className="text-[10px] font-bold text-zinc-600 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">LOCKED 🔒</span>}
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${!unlocked ? "text-zinc-600" : "text-white"}`}>{mod.title}</h3>
                    <p className={`text-xs mb-3 ${!unlocked ? "text-zinc-700" : "text-zinc-500"}`}>{mod.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.topics.slice(0, 4).map((t) => (
                        <span key={t} className={`text-[10px] px-2 py-0.5 rounded-lg font-medium ${!unlocked ? "bg-white/3 text-zinc-700" : "bg-white/5 text-zinc-400"}`}>{t}</span>
                      ))}
                      {mod.topics.length > 4 && <span className="text-[10px] px-2 py-0.5 rounded-lg font-medium bg-white/5 text-zinc-500">+{mod.topics.length - 4} more</span>}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3 shrink-0">
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
                    {unlocked ? (
                      <Link href={`/courses/${courseId}/${mod.id}`}>
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                            isPassed ? "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
                              : `bg-gradient-to-r ${c.btn} text-white`
                          }`}>
                          {isPassed ? <><BookOpen className="w-4 h-4" />Review</> : isContentDone ? <><Zap className="w-4 h-4" />Take Quiz</> : <><PlayCircle className="w-4 h-4" />Start</>}
                        </motion.button>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed">
                        <Lock className="w-4 h-4" />Locked
                      </div>
                    )}
                  </div>
                </div>

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${allPassed ? "border-amber-500/40 bg-amber-500/5 shadow-[0_0_40px_rgba(245,158,11,0.08)]" : "border-white/5 bg-white/[0.02]"}`}>
            {allPassed && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" />}
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${allPassed ? "bg-amber-500/10 border-amber-500/20" : "bg-white/5 border-white/5"}`}>
                {allPassed ? "🏆" : "🔒"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Final Reward</span>
                  {allPassed && <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">UNLOCKED 🎉</span>}
                </div>
                <h3 className={`text-base font-bold mb-1 ${!allPassed ? "text-zinc-600" : "text-white"}`}>Certificate of Completion</h3>
                <p className={`text-xs ${!allPassed ? "text-zinc-700" : "text-zinc-400"}`}>
                  {allPassed ? `Congratulations! You've completed ${course.title}.` : `Pass all ${course.modules.length} quizzes (≥${PASS_THRESHOLD}/5 each) to unlock your certificate.`}
                </p>
              </div>
              {allPassed ? (
                <Link href={`/courses/${courseId}/certificate`}>
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
                    <GraduationCap className="w-4 h-4" />Get Certificate
                  </motion.button>
                </Link>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed">
                  <Lock className="w-4 h-4" />Locked
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
