"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Send, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full glass-panel border-t border-border mt-auto py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple-600 to-brand-cyan-500 flex items-center justify-center font-bold text-white shadow-glass-glow">
              C
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-purple-400 bg-clip-text text-transparent tracking-tight">
              Codeplace
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            A next-generation AI coding platform. Learn algorithms, check resume compatibility, practice challenges, and unlock roles.
          </p>
        </div>

        {/* Links: Platform */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/problems" className="hover:text-brand-cyan-400 transition">Problem Sets</Link></li>
            <li><Link href="/roadmaps" className="hover:text-brand-cyan-400 transition">Learning Tracks</Link></li>
            <li><Link href="/mock-interview" className="hover:text-brand-cyan-400 transition">Mock Interviews</Link></li>
            <li><Link href="/contests" className="hover:text-brand-cyan-400 transition">Contests</Link></li>
          </ul>
        </div>

        {/* Links: Company */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Enterprise</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/recruiter" className="hover:text-brand-cyan-400 transition">For Recruiters</Link></li>
            <li><Link href="/admin" className="hover:text-brand-cyan-400 transition">Platform Metrics</Link></li>
            <li><Link href="/auth" className="hover:text-brand-cyan-400 transition">Join Platform</Link></li>
            <li><span className="text-xs text-brand-purple-400 flex items-center gap-1"><Sparkles className="w-3 h-3"/> ₹499/Year Plan</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h4>
          <p className="text-xs text-gray-400">Get the latest DSA templates and system design updates straight to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-lg glass-input text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="p-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg transition"
            >
              {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-4">
        <span>&copy; {new Date().getFullYear()} Codeplace Inc. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
