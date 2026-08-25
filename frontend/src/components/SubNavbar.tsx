"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Code2, Building2 } from "lucide-react";

export const SubNavbar: React.FC = () => {
  const pathname = usePathname();
  const { user } = useApp();

  if (!user) return null;

  // Define navigation tabs
  const tabs = [
    { name: "Problem Library", href: "/problems", icon: Code2 },
    { name: "Company Questions", href: "/companies", icon: Building2 },
  ];

  return (
    <div className="w-full bg-[#07070a]/80 backdrop-blur-md border-b border-white/5 py-2 px-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-[61px] z-30">
      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5 w-full md:w-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || pathname.startsWith(tab.href + "?") || pathname.startsWith(tab.href + "/");

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 w-full md:w-auto justify-center ${
                isActive
                  ? "bg-gradient-to-r from-brand-purple-600/30 to-brand-cyan-500/10 text-white border border-brand-purple-500/25 shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brand-cyan-400" : "text-gray-500"}`} />
              <span>{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
