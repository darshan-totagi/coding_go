"use client";

import { use } from "react";
import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, XCircle, ArrowLeft, ArrowRight, RotateCcw, Trophy, Zap, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { COURSE_REGISTRY } from "@/data/courseRegistry";
import { COURSE_COLORS, PASS_THRESHOLD, loadCourseProgress, saveCourseProgress, isCourseModuleUnlocked, CourseProgress, QuizQuestion } from "@/data/courseTypes";
import { notFound } from "next/navigation";

function ScoreResult({
  score, total, passed, questions, selectedAnswers, onRetake, courseId, moduleId, nextModuleId, isLastModule,
}: {
  score: number; total: number; passed: boolean; questions: QuizQuestion[]; selectedAnswers: number[];
  onRetake: () => void; courseId: string; moduleId: string; nextModuleId?: string; isLastModule: boolean;
}) {
  const percent = Math.round((score / total) * 100);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className={`rounded-2xl border p-8 text-center space-y-4 ${passed ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/20 bg-red-500/5"}`}>
        <div className="text-5xl">{passed ? "🎉" : "📚"}</div>
        <div>
          <h2 className="text-2xl font-black text-white mb-1">{passed ? "Quiz Passed!" : "Keep Practicing!"}</h2>
          <p className="text-zinc-400 text-sm">{passed ? "Excellent work! You've passed this module's quiz." : `You need ${PASS_THRESHOLD}/5 to pass. Review the content and try again!`}</p>
        </div>
        <div className="flex items-center justify-center gap-6 py-4">
          <div className="text-center"><div className={`text-6xl font-black ${passed ? "text-emerald-400" : "text-red-400"}`}>{score}</div><div className="text-xs text-zinc-500 mt-1">Correct</div></div>
          <div className="text-zinc-700 text-3xl font-light">/</div>
          <div className="text-center"><div className="text-6xl font-black text-zinc-400">{total}</div><div className="text-xs text-zinc-500 mt-1">Total</div></div>
        </div>
        <div className="max-w-xs mx-auto">
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className={`h-full rounded-full ${passed ? "bg-gradient-to-r from-emerald-500 to-teal-400" : "bg-gradient-to-r from-red-500 to-orange-400"}`} />
          </div>
          <div className="flex justify-between text-xs text-zinc-600 mt-1">
            <span>0</span><span className={`font-bold ${passed ? "text-emerald-400" : "text-red-400"}`}>{percent}%</span><span>100</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button onClick={onRetake} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
            <RotateCcw className="w-4 h-4" />Retake Quiz
          </button>
          {passed && !isLastModule && nextModuleId && (
            <Link href={`/courses/${courseId}/${nextModuleId}`}>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white transition">
                Next Module<ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          )}
          {passed && isLastModule && (
            <Link href={`/courses/${courseId}/certificate`}>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <Trophy className="w-4 h-4" />Get Certificate! 🎉
              </button>
            </Link>
          )}
          {!passed && (
            <Link href={`/courses/${courseId}/${moduleId}`}>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Review Content<ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-base font-black text-white mb-4">Answer Review</h3>
        <div className="space-y-4">
          {questions.map((q, qi) => {
            const selected = selectedAnswers[qi];
            const isCorrect = selected === q.correctIndex;
            return (
              <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: qi * 0.07 }}
                className={`rounded-xl border p-4 ${isCorrect ? "border-emerald-500/20 bg-emerald-500/5" : "border-red-500/20 bg-red-500/5"}`}>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-red-400" />}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white mb-2">Q{qi + 1}. {q.question}</p>
                    <div className="space-y-1 mb-3">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className={`text-xs px-3 py-1.5 rounded-lg font-medium ${oi === q.correctIndex ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : oi === selected && !isCorrect ? "bg-red-500/20 text-red-300 border border-red-500/30" : "bg-white/5 text-zinc-500"}`}>
                          {oi === q.correctIndex && "✓ "}{oi === selected && !isCorrect && "✗ "}{opt}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-zinc-400 bg-white/5 rounded-lg p-2.5">
                      <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /><span>{q.explanation}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function GenericQuizPage({ params }: { params: Promise<{ courseId: string; moduleId: string }> }) {
  const { courseId, moduleId } = use(params);
  const { user } = useApp();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const course = COURSE_REGISTRY[courseId];
  if (!course) notFound();

  const userId = user?.id || "anonymous";
  const c = COURSE_COLORS[course.color];
  const moduleIndex = course.modules.findIndex((m) => m.id === moduleId);
  const currentModule = course.modules[moduleIndex];
  if (!currentModule) notFound();
  const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;

  useEffect(() => {
    setMounted(true);
    setProgress(loadCourseProgress(courseId, userId, course.modules));
  }, [courseId, userId]);

  const handleReset = () => { setSelectedAnswers([]); setSubmitted(false); setScore(0); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (!mounted || !progress) return <div className="flex flex-col min-h-screen page-shell"><Header /><div className="flex-1 flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/10 border-t-orange-400 rounded-full animate-spin" /></div></div>;

  const unlocked = isCourseModuleUnlocked(moduleIndex, progress, course.modules);
  const modProg = progress.modules[moduleId];
  const isContentDone = modProg?.contentCompleted;

  if (!unlocked || !isContentDone) {
    return (
      <div className="flex flex-col min-h-screen page-shell"><Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl border border-white/10">{!unlocked ? "🔒" : "📖"}</div>
          <div><h1 className="text-2xl font-black text-white mb-2">{!unlocked ? "Module Locked" : "Complete Learning Content First"}</h1>
            <p className="text-zinc-400 max-w-md">{!unlocked ? "Unlock this module first." : "Please read through the module content and mark it as complete before taking the quiz."}</p></div>
          <Link href={`/courses/${courseId}/${moduleId}`}><button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition">{!unlocked ? "← Back to Course" : "Go to Module Content"}</button></Link>
        </div>
      </div>
    );
  }

  const questions = currentModule.quiz;
  const totalQ = questions.length;
  const allAnswered = selectedAnswers.filter((a) => a !== undefined).length === totalQ;

  const handleSelect = (qIndex: number, optIndex: number) => {
    if (submitted) return;
    const updated = [...selectedAnswers];
    updated[qIndex] = optIndex;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => { if (selectedAnswers[i] === q.correctIndex) correct++; });
    const passed = correct >= PASS_THRESHOLD;
    setScore(correct);
    setSubmitted(true);

    const prevBest = modProg?.bestScore ?? 0;
    const updated: CourseProgress = {
      ...progress,
      modules: {
        ...progress.modules,
        [moduleId]: { ...progress.modules[moduleId], quizScores: [...(modProg?.quizScores ?? []), correct], bestScore: Math.max(prevBest, correct), passed: passed || (modProg?.passed ?? false) },
      },
    };
    const allPassed = Object.values(updated.modules).every((m) => m.passed);
    if (allPassed) { updated.certificateUnlocked = true; updated.completedAt = new Date().toISOString(); }
    saveCourseProgress(courseId, updated);
    setProgress(updated);

    if (passed) confetti({ particleCount: 120, spread: 80, origin: { y: 0.4 }, colors: ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen page-shell relative">
      <Header />
      <div className="sticky top-[72px] z-30 bg-[#070812]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={`/courses/${courseId}/${moduleId}`} className="text-zinc-500 hover:text-white transition"><ArrowLeft className="w-4 h-4" /></Link>
            <span className="text-xs text-zinc-500 hidden sm:block">{currentModule.title}</span>
            <ChevronRight className="w-3 h-3 text-zinc-700 hidden sm:block" />
            <span className="text-xs font-bold text-white">Module {currentModule.number} Quiz</span>
          </div>
          {!submitted && <div className="text-xs text-zinc-500">{selectedAnswers.filter((a) => a !== undefined).length}/{totalQ} answered</div>}
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{currentModule.icon}</span>
            <div>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Module {currentModule.number} Quiz</p>
              <h1 className="text-2xl font-black text-white">{currentModule.title}</h1>
            </div>
          </div>
          {!submitted && (
            <div className="flex items-center gap-4 text-xs text-zinc-500 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-1.5"><Zap className={`w-3.5 h-3.5 ${c.badgeText}`} />{totalQ} Questions</div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" />Pass: {PASS_THRESHOLD}/{totalQ} correct</div>
              {modProg?.bestScore !== undefined && modProg.bestScore > 0 && (
                <><div className="w-px h-4 bg-white/10" /><div className="flex items-center gap-1.5"><Trophy className="w-3.5 h-3.5 text-amber-400" />Best: {modProg.bestScore}/{totalQ}</div></>
              )}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <ScoreResult key="result" score={score} total={totalQ} passed={score >= PASS_THRESHOLD} questions={questions} selectedAnswers={selectedAnswers}
              onRetake={handleReset} courseId={courseId} moduleId={moduleId} nextModuleId={nextModule?.id} isLastModule={!nextModule} />
          ) : (
            <motion.div key="questions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              {questions.map((q, qi) => (
                <motion.div key={q.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: qi * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-start gap-3 mb-5">
                    <div className={`shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br ${c.btn.split(" ")[0].replace("from-", "from-").replace("hover:", "")} flex items-center justify-center text-xs font-black text-white`}
                      style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
                      {qi + 1}
                    </div>
                    <p className="text-sm font-semibold text-white leading-relaxed whitespace-pre-line">{q.question}</p>
                  </div>
                  <div className="space-y-2 ml-10">
                    {q.options.map((opt, oi) => {
                      const isSelected = selectedAnswers[qi] === oi;
                      return (
                        <motion.button key={oi} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => handleSelect(qi, oi)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${isSelected ? `${c.border} ${c.bg} text-white` : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"}`}>
                          <div className="flex items-center gap-3">
                            <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? `${c.badgeText.replace("text-", "border-")} ${c.badgeText.replace("text-", "bg-").replace("400", "500")}` : "border-zinc-600"}`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <span>{opt}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
              <div className="pt-4">
                {!allAnswered && <p className="text-xs text-zinc-600 text-center mb-3">Please answer all {totalQ} questions before submitting.</p>}
                <motion.button whileHover={{ scale: allAnswered ? 1.02 : 1 }} whileTap={{ scale: allAnswered ? 0.98 : 1 }} onClick={handleSubmit} disabled={!allAnswered}
                  className={`w-full py-4 rounded-xl font-black text-sm transition-all ${allAnswered ? `bg-gradient-to-r ${c.btn} text-white` : "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed"}`}>
                  Submit Quiz
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
