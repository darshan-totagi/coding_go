"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { contests } from "@/data/contests";
import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Zap, CheckCircle } from "lucide-react";

export default function ContestsPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registered, setRegistered] = useState<string[]>([]);

  if (!user) return null;

  const handleRegister = (id: string) => {
    if (registered.includes(id)) return;
    setRegistered([...registered, id]);
    alert("Registration confirmed! We will notify you 15 minutes before the coding sprint begins.");
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-grow overflow-y-auto text-left">
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              Coding Contests & Tournaments <Trophy className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Participate in weekly sprints, rank up on global boards, and secure placement offers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Upcoming Rounds</h3>
            <div className="space-y-4">
              {contests.map((c) => {
                const isRegistered = registered.includes(c.id);
                return (
                  <div
                    key={c.id}
                    className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-brand-purple-500/20 transition"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            c.type === "Company"
                              ? "bg-brand-purple-500/10 text-brand-purple-400 border border-brand-purple-500/20"
                              : "bg-white/5 text-gray-400"
                          }`}
                        >
                          {c.type}
                        </span>
                        <span className="text-xs font-semibold text-gray-500">Duration: {c.duration}</span>
                      </div>
                      <h4 className="text-base font-bold text-white">{c.title}</h4>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-cyan-400" /> {c.startTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-brand-purple-400" /> {c.registeredCount + (isRegistered ? 1 : 0)} joined
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRegister(c.id)}
                      disabled={isRegistered}
                      className={`px-5 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                        isRegistered
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                          : "bg-brand-purple-600 hover:bg-brand-purple-700 text-white shadow-glass"
                      }`}
                    >
                      {isRegistered ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Registered
                        </span>
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="pt-12">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
