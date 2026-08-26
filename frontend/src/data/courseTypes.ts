// ─── Shared types and helpers for all CodePlace courses ──────────────────────

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ContentSection {
  type: "heading" | "paragraph" | "code" | "list" | "tip";
  title?: string;
  text?: string;
  code?: string;
  language?: string;
  items?: string[];
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  estimatedTime: string;
  topics: string[];
  content: ContentSection[];
  quiz: QuizQuestion[];
}

export interface CourseData {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  icon: string;
  color: "blue" | "orange" | "emerald" | "cyan" | "purple" | "rose";
  totalHours: string;
  modules: CourseModule[];
}

export interface ModuleProgress {
  contentCompleted: boolean;
  quizScores: number[];
  bestScore: number;
  passed: boolean;
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  startedAt: string;
  modules: Record<string, ModuleProgress>;
  certificateUnlocked: boolean;
  completedAt?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
export const PASS_THRESHOLD = 4;

// ─── Theme color map (all classes must be statically present for Tailwind JIT) ──
export const COURSE_COLORS = {
  blue: {
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    badgeText: "text-blue-400",
    border: "border-blue-500/40",
    bg: "bg-blue-500/5",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.08)]",
    btn: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-[0_4px_20px_rgba(99,102,241,0.3)]",
    accent: "from-blue-400 to-purple-500",
    progress: "from-blue-500 to-purple-500",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    bar: "bg-blue-400",
  },
  orange: {
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    badgeText: "text-orange-400",
    border: "border-orange-500/40",
    bg: "bg-orange-500/5",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.08)]",
    btn: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-[0_4px_20px_rgba(249,115,22,0.3)]",
    accent: "from-orange-400 to-red-500",
    progress: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    bar: "bg-orange-400",
  },
  emerald: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    badgeText: "text-emerald-400",
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/5",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.08)]",
    btn: "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-[0_4px_20px_rgba(16,185,129,0.3)]",
    accent: "from-emerald-400 to-teal-500",
    progress: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    bar: "bg-emerald-400",
  },
  cyan: {
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    badgeText: "text-cyan-400",
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/5",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.08)]",
    btn: "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-[0_4px_20px_rgba(6,182,212,0.3)]",
    accent: "from-cyan-400 to-blue-500",
    progress: "from-cyan-500 to-blue-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    bar: "bg-cyan-400",
  },
  purple: {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    badgeText: "text-purple-400",
    border: "border-purple-500/40",
    bg: "bg-purple-500/5",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.08)]",
    btn: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-[0_4px_20px_rgba(168,85,247,0.3)]",
    accent: "from-purple-400 to-pink-500",
    progress: "from-purple-500 to-pink-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    bar: "bg-purple-400",
  },
  rose: {
    badge: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    badgeText: "text-rose-400",
    border: "border-rose-500/40",
    bg: "bg-rose-500/5",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.08)]",
    btn: "from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 shadow-[0_4px_20px_rgba(244,63,94,0.3)]",
    accent: "from-rose-400 to-orange-500",
    progress: "from-rose-500 to-orange-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    bar: "bg-rose-400",
  },
};

// ─── Progress Helpers ─────────────────────────────────────────────────────────

export function getStorageKey(courseId: string): string {
  return `codeplace_course_${courseId}_progress`;
}

export function loadCourseProgress(courseId: string, userId: string, modules: CourseModule[]): CourseProgress {
  if (typeof window === "undefined") return createEmptyCourseProgress(courseId, userId, modules);
  const raw = localStorage.getItem(getStorageKey(courseId));
  if (!raw) return createEmptyCourseProgress(courseId, userId, modules);
  try {
    const parsed = JSON.parse(raw) as CourseProgress;
    if (parsed.userId !== userId) return createEmptyCourseProgress(courseId, userId, modules);
    // Ensure all module keys exist (handles adding new modules)
    for (const mod of modules) {
      if (!parsed.modules[mod.id]) {
        parsed.modules[mod.id] = { contentCompleted: false, quizScores: [], bestScore: 0, passed: false };
      }
    }
    return parsed;
  } catch {
    return createEmptyCourseProgress(courseId, userId, modules);
  }
}

export function saveCourseProgress(courseId: string, progress: CourseProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getStorageKey(courseId), JSON.stringify(progress));
}

export function createEmptyCourseProgress(courseId: string, userId: string, modules: CourseModule[]): CourseProgress {
  const moduleMap: Record<string, ModuleProgress> = {};
  for (const mod of modules) {
    moduleMap[mod.id] = { contentCompleted: false, quizScores: [], bestScore: 0, passed: false };
  }
  return {
    userId,
    courseId,
    startedAt: new Date().toISOString(),
    modules: moduleMap,
    certificateUnlocked: false,
  };
}

export function isCourseModuleUnlocked(moduleIndex: number, progress: CourseProgress, modules: CourseModule[]): boolean {
  if (moduleIndex === 0) return true;
  const prevModule = modules[moduleIndex - 1];
  return progress.modules[prevModule.id]?.passed === true;
}

export function getCourseOverallProgress(progress: CourseProgress, modules: CourseModule[]): number {
  const totalModules = modules.length;
  if (totalModules === 0) return 0;
  const passedModules = Object.values(progress.modules).filter((m) => m.passed).length;
  return Math.round((passedModules / totalModules) * 100);
}
