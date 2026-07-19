"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: 499 });

  const plans = [
    {
      name: "Basic Plan",
      period: "1 month access",
      priceText: "₹499",
      subText: "Monthly paid plan.",
      priceVal: 499,
      popular: false,
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
      features: [
        { text: "All Course Access (DSA + more)", icon: Layers },
        { text: "Core CS Subjects", icon: BookOpen },
        { text: "Mock Tests", icon: ClipboardList },
        { text: "Coding Contest", icon: Trophy },
        { text: "AI Support with 25K/day Tokens", icon: Sparkles, badge: "25K/day" },
        { text: "Quick Compiler (50/day)", icon: Terminal, badge: "50/day" },
        { text: "Run/Submit (50/day)", icon: Play, badge: "50/day" },
        { text: "DSA Sheet", icon: Code2 },
        { text: "400+ Coding Problem", icon: ListCollapse },
        { text: "Live Group Sessions", icon: Users },
        { text: "Interview Experience", icon: MessageSquare }
      ]
    },
    {
      name: "Pro Plan",
      period: "/month",
      priceText: "₹292",
      subText: "2 year paid plan.",
      priceDetails: "₹6,999 for 2 years",
      priceVal: 6999,
      popular: true,
      buttonStyle: "bg-gradient-to-r from-brand-purple-600 to-brand-cyan-500 hover:from-brand-purple-700 hover:to-brand-cyan-600 text-white shadow-glass-glow",
      features: [
        { text: "All Course Access (DSA + more)", icon: Layers },
        { text: "Core CS Subjects", icon: BookOpen },
        { text: "Mock Tests", icon: ClipboardList },
        { text: "Coding Contest", icon: Trophy },
        { text: "AI Support with 75K/day Tokens", icon: Sparkles, badge: "75K/day" },
        { text: "Quick Compiler (300/day)", icon: Terminal, badge: "300/day" },
        { text: "Run/Submit (300/day)", icon: Play, badge: "300/day" },
        { text: "DSA Sheet", icon: Code2 },
        { text: "400+ Coding Problem", icon: ListCollapse },
        { text: "Live Group Sessions", icon: Users },
        { text: "Interview Experience", icon: MessageSquare }
      ]
    },
    {
      name: "Plus Plan",
      period: "/month",
      priceText: "₹417",
      subText: "1 year paid plan.",
      priceDetails: "₹4,999 for 1 year",
      priceVal: 4999,
      popular: false,
      buttonStyle: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
      features: [
        { text: "All Course Access (DSA + more)", icon: Layers },
        { text: "Core CS Subjects", icon: BookOpen },
        { text: "Mock Tests", icon: ClipboardList },
        { text: "Coding Contest", icon: Trophy },
        { text: "AI Support with 50K/day Tokens", icon: Sparkles, badge: "50K/day" },
        { text: "Quick Compiler (100/day)", icon: Terminal, badge: "100/day" },
        { text: "Run/Submit (100/day)", icon: Play, badge: "100/day" },
        { text: "DSA Sheet", icon: Code2 },
        { text: "400+ Coding Problem", icon: ListCollapse },
        { text: "Live Group Sessions", icon: Users },
        { text: "Interview Experience", icon: MessageSquare }
      ]
    }
  ];

  const handleSubscribe = (planName: string, price: number) => {
    setSelectedPlan({ name: planName, price });
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-7xl w-full mx-auto space-y-12 flex-grow overflow-y-auto text-left">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pb-12">
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
                    Subscribe
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
            <div className="pt-12">
              <Footer />
            </div>
          </div>
        </main>
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
