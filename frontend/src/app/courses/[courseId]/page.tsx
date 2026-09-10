"use client";

import { use } from "react";
import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, PlayCircle, Award, ChevronRight, Clock, Star,
  Zap, Trophy, GraduationCap, ChevronDown, FileText,
  HelpCircle, Download, Smartphone, MessageCircle,
  Users, Bookmark, BookOpen,
} from "lucide-react";
import { COURSE_REGISTRY } from "@/data/courseRegistry";
import {
  COURSE_COLORS, PASS_THRESHOLD,
  loadCourseProgress, saveCourseProgress,
  createEmptyCourseProgress, isCourseModuleUnlocked,
  getCourseOverallProgress, CourseProgress,
} from "@/data/courseTypes";
import { notFound } from "next/navigation";

const COURSE_PHOTOS = ["/course-img-1.jpg", "/course-img-2.jpg", "/course-img-3.jpg"];

const INCLUDES = [
  { icon: PlayCircle,  label: "65 hours on demand video" },
  { icon: Download,    label: "45 downloadable resources" },
  { icon: Smartphone,  label: "Access on mobile and TV" },
  { icon: FileText,    label: "86 articles" },
  { icon: Clock,       label: "30 min personal weekly session" },
  { icon: Users,       label: "Meeting with Oxford Professor" },
  { icon: Award,       label: "Certificate of completion" },
];

export default function CourseOverviewPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const { user } = useApp();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [mounted, setMounted] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  const course = COURSE_REGISTRY[courseId];
  if (!course) notFound();

  const userId = user?.id || "anonymous";

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
    if (course.modules.length > 0) {
      setExpandedModules(new Set([course.modules[0].id]));
    }
  }, [courseId, userId]);

  if (!mounted || !progress) {
    return (
      <div className="flex flex-col min-h-screen page-shell">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-8 h-8 border-2 rounded-full animate-spin"
            style={{ borderColor: "rgba(0,0,0,0.1)", borderTopColor: "#7c3aed" }}
          />
        </div>
      </div>
    );
  }

  const overallPercent = getCourseOverallProgress(progress, course.modules);
  const passedCount = Object.values(progress.modules).filter((m) => m.passed).length;
  const allPassed = passedCount === course.modules.length;
  const totalLectures = course.modules.reduce((acc, m) => acc + m.topics.length, 0);

  const photoIdx = courseId.charCodeAt(0) % COURSE_PHOTOS.length;
  const coursePhoto = COURSE_PHOTOS[photoIdx];

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedModules(new Set());
    } else {
      setExpandedModules(new Set(course.modules.map((m) => m.id)));
    }
    setAllExpanded(!allExpanded);
  };

  return (
    <div className="flex flex-col min-h-screen page-shell">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/8 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-500">
          <Link href="/courses" className="hover:text-cyan-300 transition font-medium">
            Courses
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-400">Popular courses</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-semibold truncate max-w-xs">{course.title}</span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 w-full flex flex-col lg:flex-row gap-8 items-start">

        {/* ── LEFT: Main Content ── */}
        <div className="flex-1 min-w-0 space-y-6">

          {/* Course header card */}
          <div className="glass-panel rounded-2xl p-7">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-white">4.9</span>
                <span className="text-xs text-gray-400">based on</span>
                <span className="text-xs text-purple-600 font-semibold underline cursor-pointer">236 reviews</span>
              </div>
              <button className="p-1.5 rounded-lg hover:bg-white/5 transition">
                <Bookmark className="w-5 h-5 text-purple-500" />
              </button>
            </div>

            <h1 className="text-2xl font-black text-white leading-snug mb-3">{course.title}</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">{course.description}</p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  {course.title.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-purple-600">
                  {course.title.split(" ")[0]} Instructor
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Users className="w-3.5 h-3.5" />
                250+ students bought this course
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <MessageCircle className="w-3.5 h-3.5" />
                98% students recommend this course
              </div>
            </div>
          </div>

          {/* Course content accordion */}
          <div className="glass-panel rounded-2xl p-7">
            <h2 className="text-lg font-black text-white mb-4">Course content</h2>

            <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-400 mb-5 pb-4 border-b border-white/8">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                <span><strong className="text-zinc-200">{course.modules.length}</strong> sections</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PlayCircle className="w-3.5 h-3.5 text-gray-400" />
                <span><strong className="text-zinc-200">{totalLectures}</strong> lectures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span><strong className="text-zinc-200">{course.totalHours}</strong> total length</span>
              </div>
              <button
                onClick={toggleAll}
                className="ml-auto text-cyan-300 font-semibold hover:text-cyan-200 transition text-xs"
              >
                {allExpanded ? "Collapse all sections" : "Expand all sections"}
              </button>
            </div>

            <div className="space-y-2">
              {course.modules.map((mod, index) => {
                const modProg = progress.modules[mod.id];
                const unlocked = isCourseModuleUnlocked(index, progress, course.modules);
                const isPassed = modProg?.passed;
                const bestScore = modProg?.bestScore ?? 0;
                const isExpanded = expandedModules.has(mod.id);
                const modPercent = isPassed ? 100 : modProg?.contentCompleted ? 50 : 0;

                return (
                  <div key={mod.id} className="border border-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full flex items-center justify-between px-5 py-3.5 bg-white/[0.04] hover:bg-white/[0.07] transition text-left"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                        <span className="text-sm font-bold text-white truncate">
                          Week {mod.number} – {mod.subtitle}
                        </span>
                        {isPassed && (
                          <span className="shrink-0 text-[10px] font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                            PASSED ✓
                          </span>
                        )}
                        {!unlocked && (
                          <span className="shrink-0 text-[10px] font-bold text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" /> LOCKED
                          </span>
                        )}
                      </div>
                      {/* Circular progress */}
                      <div className="relative w-9 h-9 shrink-0 ml-3">
                        <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.5" fill="none" stroke="#27272a" strokeWidth="3" />
                          <circle
                            cx="18" cy="18" r="15.5" fill="none"
                            stroke={isPassed ? "#10b981" : "#7c3aed"}
                            strokeWidth="3"
                            strokeDasharray={`${modPercent} 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-zinc-300">
                          {modPercent}%
                        </span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="divide-y divide-white/5">
                            <Link href={`/courses/${courseId}/${mod.id}`}>
                              <div className="flex items-center justify-between px-6 py-3 hover:bg-violet-500/10 transition cursor-pointer">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-zinc-300">Read before you start</span>
                                </div>
                                <span className="text-xs text-gray-400 shrink-0">4 min</span>
                              </div>
                            </Link>

                            {mod.topics.map((topic, ti) => (
                              <Link key={ti} href={unlocked ? `/courses/${courseId}/${mod.id}` : "#"}>
                                <div className={`flex items-center justify-between px-6 py-3 transition ${unlocked ? "hover:bg-violet-500/10 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>
                                  <div className="flex items-center gap-3 min-w-0">
                                    {unlocked
                                      ? <PlayCircle className="w-4 h-4 text-gray-400 shrink-0" />
                                      : <Lock className="w-4 h-4 text-gray-300 shrink-0" />}
                                    <span className="text-sm text-zinc-300 truncate">{topic}</span>
                                  </div>
                                  <span className="text-xs text-gray-400 shrink-0 ml-4">{mod.estimatedTime}</span>
                                </div>
                              </Link>
                            ))}

                            <div className="flex items-center justify-between px-6 py-3 hover:bg-violet-500/10 transition">
                              <div className="flex items-center gap-3">
                                <HelpCircle className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-zinc-300">Quiz — Module {mod.number}</span>
                                {isPassed && (
                                  <span className="text-[10px] text-emerald-400 font-bold">({bestScore}/5)</span>
                                )}
                              </div>
                              <span className="text-xs text-gray-400">5 Questions</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Certificate row */}
              <div className={`border rounded-xl overflow-hidden ${allPassed ? "border-amber-500/30 bg-amber-500/10" : "border-white/10"}`}>
                <div className="flex items-center justify-between px-5 py-4 gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 ${allPassed ? "bg-amber-500/20" : "bg-white/10"}`}>
                      {allPassed ? "🏆" : "🔒"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">Certificate of Completion</p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {allPassed
                          ? `Congratulations! You have completed ${course.title}.`
                          : `Pass all ${course.modules.length} quizzes (minimum ${PASS_THRESHOLD}/5 each) to unlock`}
                      </p>
                    </div>
                  </div>
                  {allPassed ? (
                    <Link href={`/courses/${courseId}/certificate`} className="shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-lg shadow-sm hover:opacity-90 transition">
                        <GraduationCap className="w-4 h-4" /> Get Certificate
                      </button>
                    </Link>
                  ) : (
                    <div className="shrink-0 flex items-center gap-1.5 text-xs text-gray-400 font-semibold">
                      <Lock className="w-3.5 h-3.5" /> Locked
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Sticky Sidebar ── */}
        <div className="w-full lg:w-80 xl:w-96 shrink-0 lg:sticky lg:top-24 space-y-4">

          {/* Thumbnail + Price/CTA */}
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={coursePhoto}
                alt={course.title}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-white">Free</span>
                <span className="text-sm text-gray-400 line-through">$87.99</span>
                <span className="text-xs font-bold text-orange-600">🔥 100% free</span>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  <span>Your progress</span>
                  <span className="font-bold text-violet-300">{overallPercent}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {passedCount} of {course.modules.length} modules completed
                </p>
              </div>

              {allPassed ? (
                <Link href={`/courses/${courseId}/certificate`}>
                  <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-xl shadow hover:opacity-90 transition flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4" /> View Certificate 🎉
                  </button>
                </Link>
              ) : (
                <Link href={`/courses/${courseId}/${course.modules[passedCount]?.id || course.modules[0].id}`}>
                  <button className="w-full py-3 btn-primary text-sm rounded-xl flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    {passedCount === 0 ? "Buy course now" : "Continue Learning"}
                  </button>
                </Link>
              )}

              <button className="w-full py-2.5 btn-ghost text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 text-gray-500" />
                Send message to teacher
              </button>
            </div>
          </div>

          {/* Course includes */}
          <div className="glass-panel rounded-2xl p-5">
            <h3 className="text-sm font-bold text-white mb-4">This course includes</h3>
            <ul className="space-y-3">
              {INCLUDES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-xs text-zinc-400">
                  <Icon className="w-4 h-4 text-gray-400 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Trial card */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg">
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-bold">10 min trial course</p>
              <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">Preview</span>
            </div>
            <p className="text-xs text-purple-200 leading-relaxed mb-4">
              Have a look and feel at the course with a quick trial of the first module.
            </p>
            <Link href={`/courses/${courseId}/${course.modules[0].id}`}>
              <button className="w-full py-2 bg-white text-violet-800 text-xs font-bold rounded-lg hover:bg-violet-50 transition flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" /> Try first module free
              </button>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
