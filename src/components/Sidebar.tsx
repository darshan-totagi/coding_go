"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  LayoutDashboard,
  Code2,
  Map,
  Trophy,
  Video,
  FileText,
  MessageSquare,
  Compass,
  Gift
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { user } = useApp();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Problem Library", href: "/problems", icon: Code2 },
    { name: "Learning Paths", href: "/roadmaps", icon: Map },
    { name: "Contests Lobby", href: "/contests", icon: Trophy },
    { name: "AI Mock Interviews", href: "/mock-interview", icon: Video },
    { name: "Playground & Missions", href: "/gamification", icon: Gift },
    { name: "Community Forum", href: "/community", icon: MessageSquare },
  ];


  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 transform glass-panel border-r border-border pt-20 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full justify-between pb-6 px-4">
        <div className="space-y-6">
          {/* Main sections */}
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider px-3">
              Coding Arena
            </span>
            <ul className="mt-2 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition duration-150 ${
                        isActive
                          ? "bg-gradient-to-r from-brand-purple-600/25 to-brand-cyan-500/10 text-white border-l-2 border-brand-purple-500"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-brand-cyan-400" : "text-gray-400"}`} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>


        </div>

        {/* User Card inside Sidebar when not on top header */}
        {user && (
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-purple-500 flex items-center justify-center text-xl">
              {user.avatar}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">{user.name}</p>
              <p className="text-[10px] text-brand-cyan-400">Score: {user.rating}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
