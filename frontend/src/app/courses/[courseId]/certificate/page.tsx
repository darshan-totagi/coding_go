"use client";

import { use } from "react";
import React, { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Download, Share2, CheckCircle, Star } from "lucide-react";
import confetti from "canvas-confetti";
import { COURSE_REGISTRY } from "@/data/courseRegistry";
import { COURSE_COLORS, loadCourseProgress } from "@/data/courseTypes";
import { notFound } from "next/navigation";

export default function GenericCertificatePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const { user } = useApp();
  const [mounted, setMounted] = useState(false);
  const [fired, setFired] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const course = COURSE_REGISTRY[courseId];
  if (!course) notFound();

  const userId = user?.id || "anonymous";
  const displayName = (user as { name?: string })?.name || user?.email || "Developer";
  const c = COURSE_COLORS[course.color];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const progress = loadCourseProgress(courseId, userId, course.modules);
    const allPassed = Object.values(progress.modules).every((m) => m.passed);
    if (allPassed && !fired) {
      setFired(true);
      const fire = () => confetti({ particleCount: 100, spread: 100, origin: { y: 0.3 }, colors: ["#8b5cf6", "#f59e0b", "#10b981", "#06b6d4"] });
      fire();
      setTimeout(fire, 600);
      setTimeout(fire, 1200);
    }
  }, [mounted]);

  if (!mounted) return <div className="flex flex-col min-h-screen page-shell"><Header /><div className="flex-1 flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/10 border-t-amber-400 rounded-full animate-spin" /></div></div>;

  const progress = loadCourseProgress(courseId, userId, course.modules);
  const allPassed = Object.values(progress.modules).every((m) => m.passed);
  const avgScore = allPassed ? (() => { const scores = Object.values(progress.modules).map((m) => m.bestScore); return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1); })() : null;

  const completedDate = progress.completedAt ? new Date(progress.completedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const certIdDate = (progress.completedAt ? new Date(progress.completedAt) : new Date()).toISOString().split("-").join("").split("T")[0];
  const userHash = userId.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const certId = `CP-${courseId.toUpperCase().replace(/-/g, "").slice(0, 4)}-${certIdDate}-${String(userHash).padStart(4, "0")}`;

  if (!allPassed) {
    return (
      <div className="flex flex-col min-h-screen page-shell"><Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl border border-white/10">🔒</div>
          <div><h1 className="text-2xl font-black text-white mb-2">Certificate Locked</h1>
            <p className="text-zinc-400 max-w-md">Pass all {course.modules.length} module quizzes (≥4/5 each) in {course.title} to earn your certificate.</p></div>
          <Link href={`/courses/${courseId}`}><button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition">← Back to Course</button></Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => { if (!certRef.current) return; window.print(); };

  return (
    <div className="flex flex-col min-h-screen page-shell relative overflow-x-clip">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-amber-600/8 to-transparent pointer-events-none" />
      <style>{`@media print { .no-print { display: none !important; } body { background: white !important; } .cert-container { box-shadow: none !important; } }`}</style>
      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-14">
        {/* Header */}
        <div className="no-print flex items-center justify-between mb-10">
          <Link href={`/courses/${courseId}`}>
            <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition font-semibold"><ArrowLeft className="w-4 h-4" />Back to {course.title}</button>
          </Link>
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
              <Download className="w-4 h-4" />Download / Print
            </motion.button>
          </div>
        </div>

        {/* Confetti banner */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="no-print text-center mb-8">
          <p className="text-xl font-black text-white mb-1">🎉 Congratulations, {displayName.split(" ")[0]}!</p>
          <p className="text-zinc-400 text-sm">You've successfully completed the {course.title} course.</p>
        </motion.div>

        {/* Certificate */}
        <motion.div ref={certRef} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className={`cert-container relative rounded-3xl bg-gradient-to-br from-[#0f0f1c] to-[#0a0a12] p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.5)]`}>
          {/* Gradient border */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.accent} opacity-60`} style={{ padding: "3px" }} />
          <div className="relative bg-gradient-to-br from-[#0c0c1a] to-[#070710] rounded-[22px] p-12 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-amber-900/10" />

            <div className="relative z-10 space-y-6">
              {/* Logo */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-lg font-black text-white">C</div>
                <span className="text-lg font-black text-white">CodePlace</span>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">Certificate of Completion</p>
                <div className={`inline-block w-24 h-px bg-gradient-to-r ${c.accent} mx-auto`} />
              </div>

              <div>
                <p className="text-sm text-zinc-500 mb-2">This certifies that</p>
                <p className={`text-4xl font-black bg-gradient-to-r ${c.accent} bg-clip-text text-transparent pb-1`}>{displayName}</p>
              </div>

              <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                has successfully completed all <strong className="text-white">{course.modules.length} modules</strong> of the{" "}
                <strong className="text-white">{course.title}</strong> course on CodePlace, demonstrating proficiency in core concepts and passing all module assessments.
              </p>

              {/* Metrics */}
              <div className="flex items-center justify-center gap-8 py-4">
                <div className="text-center">
                  <div className={`text-3xl font-black bg-gradient-to-r ${c.accent} bg-clip-text text-transparent`}>{course.modules.length}/5</div>
                  <div className="text-xs text-zinc-600 mt-0.5">Modules</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className={`text-3xl font-black bg-gradient-to-r ${c.accent} bg-clip-text text-transparent`}>{avgScore}/5</div>
                  <div className="text-xs text-zinc-600 mt-0.5">Avg Score</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-400 flex items-center gap-1">
                    <Star className="w-7 h-7 fill-amber-400" />100
                  </div>
                  <div className="text-xs text-zinc-600 mt-0.5">XP Earned</div>
                </div>
              </div>

              {/* Date & ID */}
              <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
                <span>Issued: {completedDate}</span>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className={`font-bold ${c.badgeText}`}>{course.icon} {course.title}</span>
                </div>
                <span>ID: {certId}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module breakdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="no-print mt-10">
          <h2 className="text-lg font-black text-white mb-5 text-center">Module Scores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {course.modules.map((mod) => {
              const mp = progress.modules[mod.id];
              return (
                <div key={mod.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="text-xl mb-2">{mod.icon}</div>
                  <p className="text-xs text-zinc-500 font-semibold mb-1">{mod.title}</p>
                  <div className={`text-xl font-black ${c.badgeText}`}>{mp?.bestScore ?? 0}/5</div>
                  <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto mt-1" />
                </div>
              );
            })}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
