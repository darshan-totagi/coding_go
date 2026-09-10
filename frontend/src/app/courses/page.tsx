"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, MonitorPlay } from "lucide-react";
import { ALL_COURSES } from "@/data/courseRegistry";

// Badge styles cycling through orange, green, yellow, blue, purple, rose
const BADGE_STYLES = [
  { label: "BEGINNER",     bg: "bg-orange-500",  text: "text-white" },
  { label: "BEGINNER",     bg: "bg-green-500",   text: "text-white" },
  { label: "INTERMEDIATE", bg: "bg-yellow-400",  text: "text-black" },
  { label: "ADVANCED",     bg: "bg-blue-500",    text: "text-white" },
  { label: "BEGINNER",     bg: "bg-purple-500",  text: "text-white" },
  { label: "INTERMEDIATE", bg: "bg-rose-500",    text: "text-white" },
];

// Representative photos cycling per course
const COURSE_PHOTOS = [
  "/course-img-1.jpg",
  "/course-img-2.jpg",
  "/course-img-3.jpg",
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen page-shell relative overflow-x-clip">
      <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

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
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black text-white">Available Courses</h2>
            <p className="text-zinc-500 text-sm mt-1">{ALL_COURSES.length} courses · All free</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Beginner Friendly
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_COURSES.map((course, i) => {
            const badge = BADGE_STYLES[i % BADGE_STYLES.length];
            const photo = COURSE_PHOTOS[i % COURSE_PHOTOS.length];
            const href = `/courses/${course.id}`;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group"
              >
                <Link href={href} className="block h-full">
                  <div className="rounded-2xl overflow-hidden border border-white/8 h-full flex flex-col card-hover shine bg-[#0c0e1c]">

                    {/* Photo */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        src={photo}
                        alt={course.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                    </div>

                    {/* Purple content body */}
                    <div className="flex-1 flex flex-col bg-gradient-to-b from-[#1a1640] to-[#0e1024] px-6 pt-5 pb-6">
                      {/* Badge */}
                      <span className={`${badge.bg} ${badge.text} text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-sm w-fit mb-3`}>
                        {badge.label}
                      </span>

                      {/* Title */}
                      <h3 className="text-white font-extrabold text-lg leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-purple-200/70 text-xs leading-relaxed mb-5 line-clamp-3 flex-1">
                        {course.description}
                      </p>

                      {/* CTA button */}
                      <button className="flex items-center gap-2 btn-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl w-fit">
                        <MonitorPlay className="w-4 h-4 text-purple-300" />
                        Apply Now
                      </button>
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
