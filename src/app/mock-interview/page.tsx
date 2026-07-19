"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Mic,
  MicOff,
  Play,
  StopCircle,
  Timer,
  TrendingUp,
  Brain,
  Award,
  Sparkles,
  RefreshCw,
  AlertCircle
} from "lucide-react";

export default function MockInterviewPage() {
  const { user } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // States
  const [interviewType, setInterviewType] = useState<"coding" | "hr" | "behavioral" | "design">("coding");
  const [stage, setStage] = useState<"lobby" | "active" | "report">("lobby");
  const [timeRemaining, setTimeRemaining] = useState(2700); // 45 minutes
  const [confidence, setConfidence] = useState(75);
  const [isRecording, setIsRecording] = useState(false);
  const [userResponse, setUserResponse] = useState("");

  const [chatMessages, setChatMessages] = useState<{ sender: "interviewer" | "user"; text: string }[]>([]);
  const [aiTyping, setAiTyping] = useState(false);

  // Timer countdown
  useEffect(() => {
    let interval: any;
    if (stage === "active" && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
        // Slightly random confidence meter fluctuations to feel alive
        setConfidence((prev) => {
          const shift = Math.floor(Math.random() * 5) - 2;
          return Math.min(Math.max(prev + shift, 65), 95);
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setStage("report");
    }
    return () => clearInterval(interval);
  }, [stage, timeRemaining]);

  if (!user) return null;

  const getQuestionPool = () => {
    const pools = {
      coding: [
        "Interviewer: Welcome! Let's start. How would you determine if a binary tree is a valid Binary Search Tree (BST)? Please write out the logical checks.",
        "Interviewer: Got it. What is the time complexity of building a heap from an unsorted array, and why is it O(N) rather than O(N log N)?"
      ],
      hr: [
        "Interviewer: Tell me about yourself and why you're interested in joining our engineering team.",
        "Interviewer: Where do you see your technical career progressing in the next 3 to 5 years?"
      ],
      behavioral: [
        "Interviewer: Describe a situation where you had a major technical disagreement with a team member. How did you resolve it?",
        "Interviewer: Tell me about a time you missed a project deadline. What did you learn?"
      ],
      design: [
        "Interviewer: How would you design a distributed, highly-scalable notifications engine that handles 1 billion push messages daily?",
        "Interviewer: Describe the database schema and caching layer choices you would implement for an e-commerce checkout platform."
      ]
    };
    return pools[interviewType];
  };

  const startInterview = () => {
    if (!user.isPremium) {
      alert("AI Mock Interviews require Premium Membership. Activate your ₹499/Year access now!");
      return;
    }
    setStage("active");
    setTimeRemaining(2700);
    setConfidence(78);
    const initialQuestion = getQuestionPool()[0];
    setChatMessages([{ sender: "interviewer", text: initialQuestion }]);
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSendResponse = async () => {
    if (!userResponse.trim()) return;
    
    // Add user response to chat
    const responseText = userResponse;
    setChatMessages((prev) => [...prev, { sender: "user", text: responseText }]);
    setUserResponse("");
    
    setAiTyping(true);
    // Simulate AI thinking and asking the next question or ending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setAiTyping(false);

    const questions = getQuestionPool();
    const currentQuestionCount = chatMessages.filter(m => m.sender === "interviewer").length;

    if (currentQuestionCount < questions.length) {
      setChatMessages((prev) => [...prev, { sender: "interviewer", text: questions[currentQuestionCount] }]);
      // Raise confidence on structured answer
      setConfidence(prev => Math.min(prev + 5, 95));
    } else {
      // Completed interview
      setStage("report");
    }
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 max-w-5xl w-full mx-auto space-y-6 flex-grow overflow-y-auto text-left">
          <div className="border-b border-white/5 pb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              AI Mock Interview Center <Video className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Test your technical, HR, behavioral, and system design skills with a simulated live interviewer.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* LOBBY STAGE */}
            {stage === "lobby" && (
              <motion.div
                key="lobby"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Selectors */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Select Interview Track</h3>
                  <div className="space-y-3">
                    {[
                      { id: "coding", title: "Coding & DSA Interview", desc: "BST traversals, arrays manipulation, heaps, dynamic program optimization." },
                      { id: "design", title: "System Design Interview", desc: "Scalability, microservices, caches, partition keys, SQL vs NoSQL structures." },
                      { id: "behavioral", title: "Behavioral (STAR) Interview", desc: "Conflict resolution, engineering collaboration, failure reviews, deadlines." },
                      { id: "hr", title: "HR & Professional Fit", desc: "Salaries check, work values fit, professional roadmap, technical vision." }
                    ].map((track) => (
                      <button
                        key={track.id}
                        onClick={() => setInterviewType(track.id as any)}
                        className={`w-full p-4 rounded-xl border text-left transition ${
                          interviewType === track.id
                            ? "bg-brand-purple-950/20 border-brand-purple-500/50"
                            : "border-white/10 hover:border-white/20 bg-white/5"
                        }`}
                      >
                        <span className="text-sm font-bold text-white block">{track.title}</span>
                        <p className="text-xs text-gray-400 mt-1">{track.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instructions & CTA */}
                <div className="glass-panel-glow p-8 rounded-2xl border border-brand-purple-500/20 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Brain className="w-5 h-5 text-brand-purple-400" /> AI Interview Guidelines
                    </h3>
                    <ul className="space-y-3 text-xs text-gray-300">
                      <li>• The session takes approximately **45 minutes** max.</li>
                      <li>• Solve coding questions by outlining logic step-by-step.</li>
                      <li>• A real-time confidence sensor parses your syntax/key phrases.</li>
                      <li>• Speak using the microphone toggle or type responses directly.</li>
                      <li className="text-brand-cyan-400 font-semibold">• Test credentials: Enter clear code or answers to build score!</li>
                    </ul>
                  </div>

                  <button
                    onClick={startInterview}
                    className="w-full py-3 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-glass-glow transition"
                  >
                    <Play className="w-4 h-4" /> Start AI Mock Session
                  </button>
                </div>
              </motion.div>
            )}

            {/* ACTIVE INTERVIEW STAGE */}
            {stage === "active" && (
              <motion.div
                key="active"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Visualizer & Metrics */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Timer */}
                  <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5 uppercase">
                      <Timer className="w-4 h-4 text-brand-purple-400" /> Session Timer
                    </span>
                    <span className="font-mono text-base font-extrabold text-white">{formatTime(timeRemaining)}</span>
                  </div>

                  {/* Interviewer avatar video simulation */}
                  <div className="aspect-video relative rounded-xl border border-white/10 overflow-hidden bg-zinc-950 flex items-center justify-center">
                    <span className="text-4xl animate-pulse">🤖</span>
                    <div className="absolute bottom-2 left-2 bg-black/60 text-[9px] px-2 py-0.5 rounded text-white border border-white/10 font-bold uppercase tracking-wider">
                      AI Interviewer Active
                    </div>
                  </div>

                  {/* Confidence meter */}
                  <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-cyan-400" /> Confidence Meter
                      </span>
                      <span className="font-bold text-brand-cyan-400">{confidence}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${confidence}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] text-gray-500">Fluctuates based on answer articulation and pacing.</p>
                  </div>
                </div>

                {/* Console chat */}
                <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-[450px]">
                  <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 bg-black/25 rounded-xl border border-white/5 p-4">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl text-xs space-y-1 ${
                          msg.sender === "interviewer"
                            ? "bg-brand-purple-950/20 text-brand-purple-300 border border-brand-purple-500/10 self-start"
                            : "bg-white/5 text-gray-200 border border-white/10 self-end"
                        }`}
                      >
                        <strong className="block uppercase text-[9px] tracking-wider text-white">
                          {msg.sender === "interviewer" ? "AI Lead Interviewer" : "You (Candidate)"}
                        </strong>
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      </div>
                    ))}
                    {aiTyping && <div className="text-[10px] text-gray-500 animate-pulse">Interviewer is evaluating response...</div>}
                  </div>

                  <div className="space-y-3">
                    {/* Microphone simulation */}
                    <div className="flex items-center justify-between gap-4 p-2 rounded-lg bg-white/5 border border-white/10">
                      <button
                        type="button"
                        onClick={() => setIsRecording(!isRecording)}
                        className={`p-2.5 rounded-lg border transition ${
                          isRecording
                            ? "bg-red-600 border-red-500 text-white animate-pulse"
                            : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                        }`}
                      >
                        {isRecording ? <StopCircle className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>

                      {isRecording && (
                        <div className="flex-1 flex gap-1 justify-center items-center h-4">
                          {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                            <div
                              key={i}
                              className="w-0.5 bg-red-500"
                              style={{ height: `${h * 4}px`, animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      )}

                      {!isRecording && (
                        <input
                          type="text"
                          placeholder="Type your structured solution response..."
                          value={userResponse}
                          onChange={(e) => setUserResponse(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendResponse();
                          }}
                          className="flex-1 bg-transparent text-xs text-white outline-none focus:ring-0 placeholder:text-gray-600"
                        />
                      )}

                      <button
                        onClick={handleSendResponse}
                        className="px-4 py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold transition"
                      >
                        Submit
                      </button>
                    </div>

                    <button
                      onClick={() => setStage("report")}
                      className="w-full text-center text-xs text-gray-500 hover:text-white transition"
                    >
                      Complete Session & Evaluate Score
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* REPORT CARD STAGE */}
            {stage === "report" && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="max-w-3xl mx-auto glass-panel-glow border border-brand-purple-500/20 p-8 rounded-2xl space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-brand-purple-500/25 border border-brand-purple-500/40 flex items-center justify-center text-2xl mx-auto">
                    🏆
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">AI Evaluation Complete</h3>
                  <p className="text-xs text-gray-400">Mock session report generated successfully.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">Overall Score</span>
                    <span className="text-2xl font-extrabold text-brand-cyan-400">84/100</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">Confidence</span>
                    <span className="text-2xl font-extrabold text-brand-purple-400">88%</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">Result Status</span>
                    <span className="text-2xl font-extrabold text-emerald-400">HIRE</span>
                  </div>
                </div>

                {/* Specific bullets */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-purple-400" /> Key Strengths:
                    </h4>
                    <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                      <li>Proper base-case validations during recursion recursion checks.</li>
                      <li>Accurate estimations of memory allocations requirements.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-brand-rose-500" /> Focus Areas for Improvement:
                    </h4>
                    <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                      <li>Elaborate more on alternative space-optimized dynamic lists representations.</li>
                      <li>Speed up response delivery. Take less pauses on basic stack structures definitions.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStage("lobby")}
                    className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Practice Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
