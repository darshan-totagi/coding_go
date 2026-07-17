"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: number;
  xp: number;
  coins: number;
  streak: number;
  isPremium: boolean;
  rating: number;
  leaderboardRank: number;
  solvedProblems: string[]; // Problem IDs solved
  weakTopics: string[];
  badges: { id: string; name: string; icon: string; desc: string; date: string }[];
  heatmap: { [date: string]: number }; // e.g., "2026-07-16": 3 (representing count of solutions)
  bookmarks: string[]; // Problem IDs bookmarked
  notes: { [problemId: string]: string }; // problemId -> notes content
  resumeScore: number;
  resumeDetails: any;
}

interface AppContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (email: string, provider?: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
  solveProblem: (problemId: string, difficulty: "Easy" | "Medium" | "Hard") => void;
  toggleBookmark: (problemId: string) => void;
  saveNote: (problemId: string, note: string) => void;
  purchasePremium: () => void;
  spinWheel: () => { type: "coins" | "xp" | "premium_day"; amount: number; message: string };
  updateResumeScore: (score: number, details: any) => void;
  addCoins: (amount: number) => void;
  triggerConfetti: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialHeatmap = () => {
  const map: { [date: string]: number } = {};
  const today = new Date();
  // Fill some random coding activities for the last 6 months to make the heatmap look realistic
  for (let i = 0; i < 180; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    if (Math.random() > 0.6) {
      map[dateStr] = Math.floor(Math.random() * 4) + 1; // 1 to 4 commits
    }
  }
  return map;
};

const defaultUser: UserProfile = {
  id: "user-123",
  name: "Alex Coder",
  email: "alex@codeplace.ai",
  avatar: "⚡",
  level: 4,
  xp: 380,
  coins: 150,
  streak: 12,
  isPremium: false,
  rating: 1580,
  leaderboardRank: 1284,
  solvedProblems: ["1", "2"], // pre-solved Two Sum and Valid Parentheses
  weakTopics: ["Graphs", "DP"],
  badges: [
    { id: "b1", name: "First Blood", icon: "🩸", desc: "Solved first coding question", date: "2026-07-10" },
    { id: "b2", name: "Stacker", icon: "🥞", desc: "Solved 1 Stack problem", date: "2026-07-12" }
  ],
  heatmap: initialHeatmap(),
  bookmarks: ["4"],
  notes: {
    "1": "O(N) solution using a Hash Map is much faster than the O(N^2) brute force."
  },
  resumeScore: 68,
  resumeDetails: null
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load session mock
    const saved = localStorage.getItem("codeplace_user");
    if (saved) {
      setUser(JSON.parse(saved));
    } else {
      setUser(defaultUser);
    }
  }, []);

  const saveUser = (updated: UserProfile | null) => {
    setUser(updated);
    if (updated) {
      localStorage.setItem("codeplace_user", JSON.stringify(updated));
    } else {
      localStorage.removeItem("codeplace_user");
    }
  };

  const login = async (email: string, provider = "Email") => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newUser: UserProfile = {
      ...defaultUser,
      email: email || "user@codeplace.ai",
      name: email ? email.split("@")[0].toUpperCase() : "Coder Candidate",
      avatar: provider === "Google" ? "🌐" : provider === "GitHub" ? "🐙" : provider === "LinkedIn" ? "💼" : "👤",
    };
    saveUser(newUser);
    setLoading(false);
    return true;
  };

  const verifyOtp = async (otp: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    return otp === "123456"; // demo otp
  };

  const logout = () => {
    saveUser(null);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b5cf6", "#06b6d4", "#10b981", "#ff79c6"]
    });
  };

  const solveProblem = (problemId: string, difficulty: "Easy" | "Medium" | "Hard") => {
    if (!user) return;

    if (user.solvedProblems.includes(problemId)) {
      // Already solved, just trigger minor animation
      triggerConfetti();
      return;
    }

    const xpGains = { Easy: 15, Medium: 30, Hard: 60 };
    const coinGains = { Easy: 10, Medium: 20, Hard: 40 };

    const xpAwarded = xpGains[difficulty];
    const coinsAwarded = coinGains[difficulty];

    const newXp = user.xp + xpAwarded;
    const currentXpBoundary = user.level * 150;
    let newLevel = user.level;

    if (newXp >= currentXpBoundary) {
      newLevel += 1;
      triggerConfetti();
      // Unlocked a badge for level up!
      user.badges.push({
        id: `badge-level-${newLevel}`,
        name: `Level ${newLevel} Titan`,
        icon: "🏆",
        desc: `Reached coding profile Level ${newLevel}`,
        date: new Date().toISOString().split("T")[0]
      });
    } else {
      triggerConfetti();
    }

    const todayStr = new Date().toISOString().split("T")[0];
    const newHeatmap = { ...user.heatmap };
    newHeatmap[todayStr] = (newHeatmap[todayStr] || 0) + 1;

    // Check if streak increases
    let newStreak = user.streak;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];
    if (newHeatmap[yesterdayStr]) {
      newStreak += 1;
    }

    const updatedUser: UserProfile = {
      ...user,
      solvedProblems: [...user.solvedProblems, problemId],
      xp: newXp,
      level: newLevel,
      coins: user.coins + coinsAwarded,
      streak: newStreak,
      heatmap: newHeatmap,
      rating: user.rating + (difficulty === "Easy" ? 5 : difficulty === "Medium" ? 12 : 25)
    };

    saveUser(updatedUser);
  };

  const toggleBookmark = (problemId: string) => {
    if (!user) return;
    const isBookmarked = user.bookmarks.includes(problemId);
    const updatedBookmarks = isBookmarked
      ? user.bookmarks.filter((id) => id !== problemId)
      : [...user.bookmarks, problemId];

    saveUser({
      ...user,
      bookmarks: updatedBookmarks
    });
  };

  const saveNote = (problemId: string, noteText: string) => {
    if (!user) return;
    saveUser({
      ...user,
      notes: {
        ...user.notes,
        [problemId]: noteText
      }
    });
  };

  const purchasePremium = () => {
    if (!user) return;
    saveUser({
      ...user,
      isPremium: true
    });
    triggerConfetti();
  };

  const spinWheel = () => {
    if (!user) return { type: "coins", amount: 0, message: "No active user" };
    const outcomes: { type: "coins" | "xp" | "premium_day"; amount: number; message: string }[] = [
      { type: "coins", amount: 50, message: "Won 50 Codecoins!" },
      { type: "xp", amount: 100, message: "Eared 100 XP Boost!" },
      { type: "coins", amount: 10, message: "Won 10 Codecoins!" },
      { type: "xp", amount: 25, message: "Earned 25 XP Boost!" },
      { type: "coins", amount: 100, message: "Jackpot! Won 100 Codecoins!" },
      { type: "premium_day", amount: 1, message: "Unlocked 1-Day Trial Premium access!" }
    ];

    const pick = outcomes[Math.floor(Math.random() * outcomes.length)];

    let updated = { ...user };
    if (pick.type === "coins") {
      updated.coins += pick.amount;
    } else if (pick.type === "xp") {
      updated.xp += pick.amount;
    } else if (pick.type === "premium_day") {
      updated.isPremium = true;
    }

    saveUser(updated);
    triggerConfetti();
    return pick;
  };

  const updateResumeScore = (score: number, details: any) => {
    if (!user) return;
    saveUser({
      ...user,
      resumeScore: score,
      resumeDetails: details
    });
  };

  const addCoins = (amount: number) => {
    if (!user) return;
    saveUser({
      ...user,
      coins: user.coins + amount
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        login,
        verifyOtp,
        logout,
        solveProblem,
        toggleBookmark,
        saveNote,
        purchasePremium,
        spinWheel,
        updateResumeScore,
        addCoins,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
