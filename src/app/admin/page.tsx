"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  PlusCircle,
  Coins,
  CreditCard,
  Trash,
  AlertCircle
} from "lucide-react";

export default function AdminPanelPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminTab, setAdminTab] = useState<"dashboard" | "users" | "add-problem">("dashboard");

  // New problem form
  const [newTitle, setNewTitle] = useState("");
  const [newDiff, setNewDiff] = useState("Easy");
  const [newTags, setNewTags] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const mockTransactions = [
    { id: "INV-1092", user: "Ryan Go", date: "2026-07-16", amount: "₹499", status: "Successful" },
    { id: "INV-1091", user: "Priya Sharma", date: "2026-07-15", amount: "₹249", status: "Successful (Coupon: DISCOUNT50)" },
    { id: "INV-1090", user: "Jessica Lee", date: "2026-07-14", amount: "₹499", status: "Successful" }
  ];

  const [platformUsers, setPlatformUsers] = useState([
    { id: 1, name: "Alex Coder", email: "alex@codeplace.ai", role: "Student", premium: "Free" },
    { id: 2, name: "Priya Sharma", email: "priya@codeplace.ai", role: "Student", premium: "Premium" },
    { id: 3, name: "HR Lead Google", email: "google-recruit@google.com", role: "Recruiter", premium: "Free" }
  ]);

  if (!user) return null;

  const handleCreateProblem = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess("");
    if (!newTitle || !newDesc) {
      alert("Please fill in the problem title and description.");
      return;
    }
    // Simulate database write
    setFormSuccess(`Problem "${newTitle}" has been added to the library database successfully!`);
    setNewTitle("");
    setNewDesc("");
    setNewTags("");
  };

  const handleTogglePremium = (userId: number) => {
    const updated = platformUsers.map((u) => {
      if (u.id === userId) {
        return { ...u, premium: u.premium === "Premium" ? "Free" : "Premium" };
      }
      return u;
    });
    setPlatformUsers(updated);
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-6 flex-grow overflow-y-auto text-left">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                Platform Admin Control <ShieldCheck className="w-6 h-6 text-brand-purple-400" />
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                Oversee platform revenue metrics, manage user role permissions, and seed coding challenges.
              </p>
            </div>

            {/* Navigation tabs */}
            <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10 text-xs">
              <button
                onClick={() => setAdminTab("dashboard")}
                className={`px-3 py-1.5 rounded-md transition font-semibold ${
                  adminTab === "dashboard" ? "bg-brand-purple-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setAdminTab("users")}
                className={`px-3 py-1.5 rounded-md transition font-semibold ${
                  adminTab === "users" ? "bg-brand-purple-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setAdminTab("add-problem")}
                className={`px-3 py-1.5 rounded-md transition font-semibold ${
                  adminTab === "add-problem" ? "bg-brand-purple-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                + Add Problem
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* REVENUE DASHBOARD */}
            {adminTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">Gross Revenue (Monthly)</span>
                    <h3 className="text-2xl font-extrabold text-white">₹2,45,600</h3>
                    <p className="text-[10px] text-emerald-400 font-semibold">+18% vs previous month</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">Active Premium Subscribers</span>
                    <h3 className="text-2xl font-extrabold text-brand-cyan-400">492 Coders</h3>
                    <p className="text-[10px] text-gray-500 font-medium">Goal: 500 subscribers</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">Coupon Activations</span>
                    <h3 className="text-2xl font-extrabold text-brand-purple-400">82 times</h3>
                    <p className="text-[10px] text-gray-500 font-medium">Coupon code DISCOUNT50 matches top logs</p>
                  </div>
                </div>

                {/* Transactions Table */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-purple-400" /> Recent Billing Transactions
                  </h3>

                  <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/25">
                    <table className="w-full text-xs text-left text-gray-400">
                      <thead className="bg-white/5 uppercase font-bold text-gray-400 border-b border-white/10">
                        <tr>
                          <th className="px-6 py-4">Invoice ID</th>
                          <th className="px-6 py-4">User</th>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4 text-center">Amount</th>
                          <th className="px-6 py-4 text-right">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {mockTransactions.map((tx) => (
                          <tr key={tx.id} className="hover:bg-white/[0.02] transition">
                            <td className="px-6 py-4 font-mono font-semibold text-white">{tx.id}</td>
                            <td className="px-6 py-4 text-white">{tx.user}</td>
                            <td className="px-6 py-4">{tx.date}</td>
                            <td className="px-6 py-4 text-center text-brand-cyan-400 font-bold">{tx.amount}</td>
                            <td className="px-6 py-4 text-right text-gray-500 font-mono text-[10px]">{tx.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* USERS MANAGEMENT */}
            {adminTab === "users" && (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4"
              >
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-purple-400" /> Platform Registered Directory
                </h3>

                <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/25">
                  <table className="w-full text-xs text-left text-gray-400">
                    <thead className="bg-white/5 uppercase font-bold text-gray-400 border-b border-white/10">
                      <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Platform Role</th>
                        <th className="px-6 py-4 text-center">Access Tier</th>
                        <th className="px-6 py-4 text-right">Tier Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {platformUsers.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.02] transition">
                          <td className="px-6 py-4 font-semibold text-white">{item.name}</td>
                          <td className="px-6 py-4">{item.email}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400">{item.role}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span
                              className={`px-2 py-0.5 rounded font-semibold ${
                                item.premium === "Premium" ? "bg-brand-purple-500/10 text-brand-purple-400" : "bg-gray-500/10 text-gray-500"
                              }`}
                            >
                              {item.premium}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleTogglePremium(item.id)}
                              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs font-semibold text-white transition ml-auto block"
                            >
                              Toggle Access
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* ADD PROBLEM SEED FORM */}
            {adminTab === "add-problem" && (
              <motion.form
                key="add-problem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleCreateProblem}
                className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl border border-white/10 space-y-6"
              >
                <div className="border-b border-white/5 pb-3">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <PlusCircle className="w-5 h-5 text-brand-purple-400" /> Create Coding Challenge
                  </h3>
                </div>

                {formSuccess && (
                  <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium rounded-lg text-center">
                    {formSuccess}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Problem Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Two Sum III"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Difficulty</label>
                    <select
                      value={newDiff}
                      onChange={(e) => setNewDiff(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2 text-white focus:outline-none"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400">Categories / Tags (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Arrays, Hash Table"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400 block">Problem Description Markdown</label>
                  <textarea
                    rows={4}
                    placeholder="Given an array of integer inputs..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold shadow-glass transition"
                >
                  Create & Seed Problem
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
