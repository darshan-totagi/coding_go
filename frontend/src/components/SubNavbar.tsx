"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Code2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export const SubNavbar: React.FC = () => {
  const pathname = usePathname();
  const { user } = useApp();

  if (!user) return null;

  const tabs = [
    { name: "Problem Library", href: "/problems", icon: Code2 },
    { name: "Company Questions", href: "/companies", icon: Building2 },
  ];

  return (
    <div className="w-full bg-[#070812]/70 backdrop-blur-xl border-b border-white/5 py-2 px-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-[61px] z-30">
      <nav className="flex items-center gap-1 p-1 bg-black/35 rounded-2xl border border-white/8 w-full md:w-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || pathname.startsWith(tab.href + "?") || pathname.startsWith(tab.href + "/");

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full md:w-auto justify-center ${
                isActive ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="subnav-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/40 to-cyan-500/20 border border-violet-400/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <Icon className={`relative z-10 w-3.5 h-3.5 ${isActive ? "text-cyan-300" : "text-zinc-500"}`} />
              <span className="relative z-10">{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
