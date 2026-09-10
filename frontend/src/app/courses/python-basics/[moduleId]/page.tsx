"use client";

import { use } from "react";

import React, { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Zap,
  Lock,
  Lightbulb,
  Copy,
  Check,
} from "lucide-react";
import {
  PYTHON_COURSE_MODULES,
  loadProgress,
  saveProgress,
  createEmptyProgress,
  isModuleUnlocked,
  CourseProgress,
  ContentSection,
} from "@/data/pythonCourse";

// ─── Code Block Component ──────────────────────────────────────────────────────
function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 my-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          {language || "python"}
        </span>
        <button
          onClick={handleCopy}
          className="text-zinc-500 hover:text-white transition flex items-center gap-1 text-xs"
        >
          {copied ? (
            <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
          ) : (
            <><Copy className="w-3.5 h-3.5" />Copy</>
          )}
        </button>
      </div>
      {/* Code body */}
      <pre className="overflow-x-auto p-5 bg-[#0d1117] text-sm font-mono leading-relaxed">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );
}

// ─── Content Renderer ─────────────────────────────────────────────────────────
function RenderSection({ section }: { section: ContentSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-xl font-black text-white mt-10 mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
          <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full inline-block" />
          {section.title}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-zinc-300 leading-relaxed text-sm mb-4">{section.text}</p>
      );
    case "code":
      return <CodeBlock code={section.code || ""} language={section.language} />;
    case "list":
      return (
        <div className="mb-4">
          {section.title && (
            <p className="text-zinc-300 font-semibold text-sm mb-2">{section.title}</p>
          )}
          <ul className="space-y-2">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-blue-400 mt-1 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "tip":
      return (
        <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 my-4">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200 leading-relaxed">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = use(params);
  const { user } = useApp();
  const router = useRouter();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [mounted, setMounted] = useState(false);
  const [markingComplete, setMarkingComplete] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const userId = user?.id || "anonymous";
  const moduleIndex = PYTHON_COURSE_MODULES.findIndex((m) => m.id === moduleId);
  const currentModule = PYTHON_COURSE_MODULES[moduleIndex];

  useEffect(() => {
    setMounted(true);
    const p = loadProgress(userId);
    setProgress(p);
  }, [userId]);

  if (!mounted || !progress) {
    return (
      <div className="flex flex-col min-h-screen page-shell">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-purple-500/40 border-t-brand-purple-500 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!currentModule) {
    return (
      <div className="flex flex-col min-h-screen page-shell">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-zinc-400">Module not found.</p>
          <Link href="/courses/python-basics" className="text-blue-400 hover:underline">← Back to course</Link>
        </div>
      </div>
    );
  }

  const unlocked = isModuleUnlocked(moduleIndex, progress);
  const modProgress = progress.modules[moduleId];
  const isContentDone = modProgress?.contentCompleted;
  const isPassed = modProgress?.passed;
  const prevModule = moduleIndex > 0 ? PYTHON_COURSE_MODULES[moduleIndex - 1] : null;
  const nextModule = moduleIndex < PYTHON_COURSE_MODULES.length - 1 ? PYTHON_COURSE_MODULES[moduleIndex + 1] : null;

  if (!unlocked) {
    return (
      <div className="flex flex-col min-h-screen page-shell">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl border border-white/10">🔒</div>
          <div>
            <h1 className="text-2xl font-black text-white mb-2">Module Locked</h1>
            <p className="text-zinc-400 max-w-md">
              Complete and pass the quiz for the previous module to unlock <span className="text-white font-semibold">{currentModule.title}</span>.
            </p>
          </div>
          <Link href="/courses/python-basics">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition">
              ← Back to Course
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleMarkComplete = async () => {
    setMarkingComplete(true);
    await new Promise((r) => setTimeout(r, 600));

    const updated: CourseProgress = {
      ...progress,
      modules: {
        ...progress.modules,
        [moduleId]: {
          ...progress.modules[moduleId],
          contentCompleted: true,
        },
      },
    };
    saveProgress(updated);
    setProgress(updated);
    setMarkingComplete(false);
    setJustCompleted(true);

    // Scroll to bottom to reveal quiz button
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen page-shell relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <Header />

      {/* Sticky top progress bar */}
      <div className="sticky top-[72px] z-30 bg-[#070812]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/courses/python-basics" className="text-zinc-500 hover:text-white transition shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-xs text-zinc-500 truncate hidden sm:block">Python Basics</span>
            <ChevronRight className="w-3 h-3 text-zinc-700 hidden sm:block shrink-0" />
            <span className="text-xs font-bold text-white truncate">{currentModule.title}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock className="w-3.5 h-3.5" />
              {currentModule.estimatedTime}
            </div>
            {isPassed && (
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                Passed
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        {/* Module header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Module {currentModule.number} of {PYTHON_COURSE_MODULES.length}
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{currentModule.icon}</span>
            <div>
              <h1 className="text-3xl font-black text-white">{currentModule.title}</h1>
              <p className="text-zinc-400 text-sm mt-1">{currentModule.subtitle}</p>
            </div>
          </div>

          {/* Topics pill list */}
          <div className="flex flex-wrap gap-2">
            {currentModule.topics.map((topic) => (
              <span key={topic} className="text-xs bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Learning content */}
        <div className="prose prose-invert max-w-none">
          {currentModule.content.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}
        </div>

        {/* Mark as Complete section */}
        <div ref={bottomRef} className="mt-16 border-t border-white/5 pt-10">
          {!isContentDone ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <p className="text-zinc-400 text-sm">
                You've reached the end of the learning content for <span className="text-white font-semibold">{currentModule.title}</span>.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleMarkComplete}
                disabled={markingComplete}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl text-sm shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition disabled:opacity-60"
              >
                {markingComplete ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <CheckCircle className="w-4 h-4" />
                )}
                {markingComplete ? "Saving..." : "Mark as Complete"}
              </motion.button>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                {/* Content complete badge */}
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-sm">Learning content completed!</span>
                </div>

                {/* Quiz CTA */}
                <div className={`rounded-2xl border p-6 text-center space-y-4 ${
                  isPassed
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-blue-500/30 bg-blue-500/5"
                }`}>
                  <div className="text-3xl">{isPassed ? "🎉" : "📝"}</div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-1">
                      {isPassed ? "Module Passed!" : `Ready for the Quiz?`}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {isPassed
                        ? `You scored ${modProgress.bestScore}/5 on this quiz. Next module is unlocked!`
                        : `Answer 5 questions about ${currentModule.title}. Score ≥4/5 to pass and unlock the next module.`}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href={`/courses/python-basics/${moduleId}/quiz`}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${
                          isPassed
                            ? "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-[0_4px_14px_rgba(99,102,241,0.3)]"
                        }`}
                      >
                        <Zap className="w-4 h-4" />
                        {isPassed ? "Retake Quiz" : "Start Module Quiz"}
                      </motion.button>
                    </Link>

                    {isPassed && nextModule && isModuleUnlocked(moduleIndex + 1, progress) && (
                      <Link href={`/courses/python-basics/${nextModule.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-[0_4px_14px_rgba(99,102,241,0.3)] transition"
                        >
                          Next: {nextModule.title}
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Prev / Next module nav */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
          {prevModule ? (
            <Link href={`/courses/python-basics/${prevModule.id}`}>
              <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition font-semibold">
                <ArrowLeft className="w-4 h-4" />
                {prevModule.title}
              </button>
            </Link>
          ) : (
            <Link href="/courses/python-basics">
              <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition font-semibold">
                <ArrowLeft className="w-4 h-4" />
                Course Overview
              </button>
            </Link>
          )}

          {nextModule && isModuleUnlocked(moduleIndex + 1, progress) ? (
            <Link href={`/courses/python-basics/${nextModule.id}`}>
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition font-semibold">
                {nextModule.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          ) : nextModule ? (
            <div className="flex items-center gap-2 text-sm text-zinc-700 cursor-not-allowed font-semibold">
              {nextModule.title}
              <Lock className="w-3.5 h-3.5" />
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
