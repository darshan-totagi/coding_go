"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RazorpayModal } from "@/components/RazorpayModal";
import { motion } from "framer-motion";
import {
  Layers,
  BookOpen,
  ClipboardList,
  Trophy,
  Sparkles,
  Terminal,
  Play,
  Code2,
  ListCollapse,
  Users,
  MessageSquare
} from "lucide-react";

export default function PricingPage() {
  const { user } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: 299 });

  const plans = [
    {
      name: "Free",
      period: "Forever",
      priceText: "₹0",
      subText: "Standard community access",
      priceVal: 0,
      popular: false,
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
      features: [
        { text: "Public Problem Set Access", icon: Layers },
        { text: "Basic Quick Compiler", icon: Terminal },
        { text: "Community Forum Discussions", icon: MessageSquare },
        { text: "Activity Log & Heatmap Tracking", icon: BookOpen },
        { text: "Basic DSA Learning Roadmaps", icon: Code2 }
      ]
    },
    {
      name: "Premium",
      period: "/year",
      priceText: "₹299",
      subText: "Most popular choice for active prep",
      priceDetails: "Billed annually at ₹299",
      priceVal: 299,
      popular: true,
      buttonStyle: "bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white shadow-glass-glow",
      features: [
        { text: "All 400+ Coding Problems & Solutions", icon: Layers },
        { text: "Unlimited AI Tutor & Solution Explanations", icon: Sparkles },
        { text: "Interactive Learning Roadmaps & Tracks", icon: BookOpen },
        { text: "ATS Resume Builder & Auditor", icon: ClipboardList },
        { text: "Live Contests & Certificate Rewards", icon: Trophy },
        { text: "High-Priority Code Execution", icon: Terminal },
        { text: "PRO Developer Badge on Profile", icon: Users }
      ]
    },
    {
      name: "Lifetime",
      period: "one-time",
      priceText: "₹999",
      subText: "Pay once, unlock forever",
      priceDetails: "Single payment for lifetime access",
      priceVal: 999,
      popular: false,
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-brand-purple-500/40",
      features: [
        { text: "Everything in Premium Plan", icon: Layers },
        { text: "Lifetime Unlimited Platform Access", icon: Trophy },
        { text: "All Future Courses & System Design Additions", icon: BookOpen },
        { text: "VIP Discord & Community Spotlight", icon: MessageSquare },
        { text: "Priority Recruiter Resume Visibility", icon: Users }
      ]
    }
  ];

  const handleSubscribe = (planName: string, price: number) => {
    if (price === 0) return;
    setSelectedPlan({ name: planName, price });
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-grow overflow-y-auto">
          <main className="p-6 max-w-7xl w-full mx-auto space-y-12 text-left">
          {/* Header text */}
          <div className="text-center space-y-3 pt-6">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Flexible Plans for{" "}
              <span className="bg-gradient-to-r from-brand-purple-400 via-brand-cyan-400 to-brand-purple-500 bg-clip-text text-transparent">
                Every Developer
              </span>
            </h1>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Unlock the entire prep arena. Master algorithms, audit your resumes, and practice with real-time AI mentoring.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "bg-brand-purple-950/15 border-2 border-brand-purple-500/50 shadow-glass-glow shadow-brand-purple-500/5"
                    : "glass-panel border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-brand-purple-600/30 text-brand-purple-300 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-brand-purple-500/30">
                    Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-gray-400">{plan.subText}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1 text-white">
                      <span className="text-4xl font-extrabold tracking-tight">{plan.priceText}</span>
                      <span className="text-xs text-gray-400 font-semibold">{plan.period}</span>
                    </div>
                    {plan.priceDetails && (
                      <p className="text-xs font-semibold text-gray-400">{plan.priceDetails}</p>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => handleSubscribe(plan.name, plan.priceVal)}
                    className={`w-full py-3 rounded-2xl text-xs font-bold transition duration-200 ${plan.buttonStyle}`}
                  >
                    {plan.priceVal === 0 ? "Current Plan" : "Subscribe"}
                  </button>

                  <div className="border-t border-white/5 pt-6 space-y-4">
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">This plan includes:</p>
                    <ul className="space-y-3.5">
                      {plan.features.map((feat, idx) => {
                        const Icon = feat.icon;
                        return (
                          <li key={idx} className="flex items-center gap-3 text-xs text-gray-300">
                            <Icon className="w-4 h-4 text-brand-purple-400 shrink-0" />
                            <span className="flex-1 truncate">{feat.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plan Price Summary Table */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-brand-purple-400" /> Plan Price Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white font-bold">
                    <th className="py-3 px-4">Plan</th>
                    <th className="py-3 px-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-3.5 px-4 font-semibold text-white">Free</td>
                    <td className="py-3.5 px-4 text-right font-semibold text-white">₹0</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition bg-brand-purple-950/20">
                    <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                      Premium <span className="text-[10px] bg-brand-purple-500/20 text-brand-purple-300 px-2 py-0.5 rounded-full uppercase font-bold border border-brand-purple-500/30">Popular</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-brand-cyan-400">₹299/year</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-3.5 px-4 font-semibold text-white">Lifetime</td>
                    <td className="py-3.5 px-4 text-right font-bold text-brand-purple-300">₹999 one-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          </main>
          <Footer />
        </div>
      </div>

      <RazorpayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        price={selectedPlan.price}
        planName={`${selectedPlan.name} Subscription`}
      />
    </div>
  );
}
