"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ThumbsUp, Send, User, Sparkles } from "lucide-react";

export default function CommunityPage() {
  const { user } = useApp();

  // Discussion threads
  const [threads, setThreads] = useState([
    { id: 1, title: "Google L4 Interview Experience (Software Engineer) - July 2026", author: "Anish G.", category: "Interview Experience", likes: 24, replies: 8 },
    { id: 2, title: "Why building heap from array is O(N) instead of O(N log N)? Detailed proof.", author: "dsa_master", category: "DSA Articles", likes: 45, replies: 12 },
    { id: 3, title: "System Design: Designing rate limiter using token bucket algorithms.", author: "arch_guru", category: "System Design", likes: 32, replies: 6 }
  ]);

  // Form input
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Interview Experience");
  const [newContent, setNewContent] = useState("");

  if (!user) return null;

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      author: user.name,
      category: newCategory,
      likes: 1,
      replies: 0
    };

    setThreads([newPost, ...threads]);
    setNewTitle("");
    setNewContent("");
    alert("Post published successfully!");
  };

  const handleLike = (id: number) => {
    setThreads(threads.map(t => t.id === id ? { ...t, likes: t.likes + 1 } : t));
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-grow overflow-y-auto">
          <main className="p-6 max-w-7xl w-full mx-auto space-y-6 text-left">
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              Developer Discussion Forum <MessageSquare className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Share interview experiences, ask technical queries, and collaborate on system design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Thread feed */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Recent Discussions</h3>
              <div className="space-y-4">
                {threads.map((t) => (
                  <div
                    key={t.id}
                    className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 hover:border-brand-purple-500/20 transition text-left"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider font-semibold text-brand-cyan-400">
                        {t.category}
                      </span>
                      <span className="text-[10px] text-gray-500">By {t.author}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">{t.title}</h4>

                    <div className="flex items-center gap-4 text-xs pt-2 border-t border-white/5">
                      <button
                        onClick={() => handleLike(t.id)}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition"
                      >
                        <ThumbsUp className="w-4 h-4 text-brand-purple-400" /> {t.likes} Likes
                      </button>
                      <span className="text-gray-500">
                        {t.replies} Replies
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publish Form */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-purple-400" /> Publish Post
              </h3>

              <form onSubmit={handleSubmitPost} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Post Title</label>
                  <input
                    type="text"
                    placeholder="e.g. My Microsoft Interview..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Interview Experience">Interview Experience</option>
                    <option value="DSA Articles">DSA Articles</option>
                    <option value="System Design">System Design</option>
                    <option value="Placement Tips">Placement Tips</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">Content</label>
                  <textarea
                    rows={3}
                    placeholder="Outline your thoughts..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Publish
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
  );
}
