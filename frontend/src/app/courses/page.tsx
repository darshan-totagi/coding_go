"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, Star, Award, ArrowRight, GraduationCap, ChevronRight } from "lucide-react";
import { ALL_COURSES } from "@/data/courseRegistry";
import { COURSE_COLORS } from "@/data/courseTypes";

const levelColor: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Advanced: "text-red-400 bg-red-500/10 border-red-500/20",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303] relative overflow-x-clip">
      <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[130px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[120px] pointer-events-none" />

      <Header />

      {/* Hero */}
      <section className="pt-16 pb-12 px-6 border-b border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full w-fit mx-auto mb-5">
            <GraduationCap className="w-3.5 h-3.5" />
            CodePlace Courses
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Learn to Code,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Module by Module
            </span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xl mx-auto">
            Structured courses with rich learning content, interactive quizzes, progress tracking and a certificate on completion.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-black text-white">Available Courses</h2>
            <p className="text-zinc-500 text-sm mt-0.5">{ALL_COURSES.length} courses · All free</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Beginner Friendly
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ALL_COURSES.map((course, i) => {
            const c = COURSE_COLORS[(course.color as keyof typeof COURSE_COLORS) || "blue"];
            const modulesCount = "modules" in course ? course.modules.length : 5;
            const href = `/courses/${course.id}`;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={href}>
                  <div className={`group rounded-2xl border ${c.border.replace("40", "20")} bg-white/[0.03] hover:${c.bg} hover:${c.border} transition-all duration-300 overflow-hidden cursor-pointer hover:${c.glow} p-6 h-full`}>
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${c.iconBg} border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-black text-white">{course.title}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelColor[course.level]}`}>
                            {course.level}
                          </span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-bold ${c.badgeText} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Start <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>

                    <p className="text-zinc-500 text-xs leading-relaxed mb-4">{course.description}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                        <BookOpen className={`w-3.5 h-3.5 ${c.badgeText}`} />
                        {modulesCount} Modules
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        {course.totalHours}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        {modulesCount * 5} Quiz Questions
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                        <Award className="w-3.5 h-3.5 text-zinc-500" />
                        Certificate
                      </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <div className={`mt-5 pt-4 border-t border-white/5 flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: modulesCount }).map((_, mi) => (
                          <div key={mi} className={`w-1.5 h-1.5 rounded-full ${c.bar} opacity-30`} />
                        ))}
                      </div>
                      <span className={`text-xs font-bold ${c.badgeText} flex items-center gap-1`}>
                        View Course <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
