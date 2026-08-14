"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Send,
  Check,
  Mail,
  Code2,
  Heart
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 mt-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
        
        {/* Brand & Mission Column */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple-600 via-brand-purple-500 to-brand-cyan-400 flex items-center justify-center font-black text-white shadow-lg shadow-brand-purple-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-brand-purple-300 bg-clip-text text-transparent">
              Codeplace
            </span>
          </Link>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            The next-generation AI-powered developer platform. Master algorithms, practice real-world challenges, build ATS-ready resumes, and unlock tech roles.
          </p>

          <div className="flex items-center gap-2.5 pt-1">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-brand-purple-500/40 transition"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan-400 hover:bg-white/10 hover:border-brand-cyan-500/40 transition"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan-400 hover:bg-white/10 hover:border-brand-cyan-500/40 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
            </a>
            <a
              href="mailto:support@codeplace.dev"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-purple-400 hover:bg-white/10 hover:border-brand-purple-500/40 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/problems" className="hover:text-brand-cyan-400 transition">Problem Sets</Link></li>
            <li><Link href="/companies" className="hover:text-brand-cyan-400 transition">Company Questions</Link></li>
            <li><Link href="/roadmaps" className="hover:text-brand-cyan-400 transition">Learning Roadmaps</Link></li>
            <li><Link href="/contests" className="hover:text-brand-cyan-400 transition">Live Contests</Link></li>
            <li><Link href="/community" className="hover:text-brand-cyan-400 transition">Community Hub</Link></li>
          </ul>
        </div>

        {/* Enterprise & Tools Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/resume" className="hover:text-brand-cyan-400 transition">ATS Resume Auditor</Link></li>
            <li><Link href="/recruiter" className="hover:text-brand-cyan-400 transition">For Recruiters</Link></li>
            <li><Link href="/pricing" className="hover:text-brand-cyan-400 transition">Pro Membership</Link></li>
            <li><Link href="/admin" className="hover:text-brand-cyan-400 transition">Platform Metrics</Link></li>
            <li><Link href="/auth" className="hover:text-brand-cyan-400 transition">Get Started</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Stay Ahead</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Get weekly DSA cheat sheets, system design updates, and contest alerts.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-w-0 px-3.5 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple-500/50 focus:ring-1 focus:ring-brand-purple-500/50 transition"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-3.5 py-2 bg-gradient-to-r from-brand-purple-600 to-brand-purple-500 hover:from-brand-purple-500 hover:to-brand-purple-400 text-white rounded-xl font-medium transition shadow-md shadow-brand-purple-500/20 shrink-0 flex items-center justify-center"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Subscribed successfully!
              </p>
            )}
          </form>

          <div className="pt-1 flex items-center gap-1.5 text-[11px] text-brand-purple-400">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Pro plan starting at ₹299/year</span>
          </div>
        </div>
      </div>

      {/* Bottom copyright & legal bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center sm:text-left">
        <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
          <span>&copy; {new Date().getFullYear()} Codeplace Inc. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for developers
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link href="/pricing" className="hover:text-gray-300 transition">Privacy Policy</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition">Terms of Service</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};
