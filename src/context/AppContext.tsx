"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";

export interface Badge {
  id: string;
  name: string;
  icon: string;
  desc: string;
  date: string;
}

export interface BadgeDefinition {
  id: string;
  name: string;
  icon: string;
  desc: string;
  requirementType: "xp" | "coins" | "problems" | "resumeScore";
  requirementValue: number;
}

export const ALL_BADGES: BadgeDefinition[] = [
  { id: "badge-solved-1", name: "First Blood", icon: "🩸", desc: "Solved first coding question", requirementType: "problems", requirementValue: 1 },
  { id: "badge-solved-5", name: "Problem Solver", icon: "🧩", desc: "Solved 5+ coding problems", requirementType: "problems", requirementValue: 5 },
  { id: "badge-solved-10", name: "Algorithmic Master", icon: "🧙‍♂️", desc: "Solved 10+ coding problems", requirementType: "problems", requirementValue: 10 },
  { id: "badge-xp-500", name: "Code Apprentice", icon: "📜", desc: "Earned 500+ XP points", requirementType: "xp", requirementValue: 500 },
  { id: "badge-xp-1000", name: "Code Specialist", icon: "🛠️", desc: "Earned 1000+ XP points", requirementType: "xp", requirementValue: 1000 },
  { id: "badge-xp-2000", name: "Grandmaster", icon: "🌌", desc: "Earned 2000+ XP points", requirementType: "xp", requirementValue: 2000 },
  { id: "badge-coins-200", name: "Coin Collector", icon: "🪙", desc: "Acquired 200+ Codecoins", requirementType: "coins", requirementValue: 200 },
  { id: "badge-coins-500", name: "Treasure Hunter", icon: "👑", desc: "Acquired 500+ Codecoins", requirementType: "coins", requirementValue: 500 },
  { id: "badge-resume-80", name: "Resume Perfectionist", icon: "📄", desc: "Achieved ATS resume score of 80+", requirementType: "resumeScore", requirementValue: 80 }
];

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
  badges: Badge[];
  heatmap: { [date: string]: number }; // e.g., "2026-07-16": 3 (representing count of solutions)
  bookmarks: string[]; // Problem IDs bookmarked
  notes: { [problemId: string]: string }; // problemId -> notes content
  resumeScore: number;
  resumeDetails: any;
}

interface AppContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (email: string, password?: string, provider?: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
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
  newlyUnlockedBadge: Badge | null;
  clearNewlyUnlockedBadge: () => void;
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
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<Badge | null>(null);

  const clearNewlyUnlockedBadge = () => {
    setNewlyUnlockedBadge(null);
  };

  useEffect(() => {
    // Load session mock
    const saved = localStorage.getItem("codeplace_user");
    if (saved) {
      setUser(JSON.parse(saved));
    } else {
      setUser(defaultUser);
    }
  }, []);

  const checkAndAwardBadges = (updatedUser: UserProfile): UserProfile => {
    const newlyAwarded: Badge[] = [];
    const todayStr = new Date().toISOString().split("T")[0];

    ALL_BADGES.forEach((badgeDef) => {
      const hasBadge = updatedUser.badges.some((b) => b.id === badgeDef.id);
      if (hasBadge) return;

      let meetsRequirement = false;
      if (badgeDef.requirementType === "xp") {
        meetsRequirement = updatedUser.xp >= badgeDef.requirementValue;
      } else if (badgeDef.requirementType === "coins") {
        meetsRequirement = updatedUser.coins >= badgeDef.requirementValue;
      } else if (badgeDef.requirementType === "problems") {
        meetsRequirement = updatedUser.solvedProblems.length >= badgeDef.requirementValue;
      } else if (badgeDef.requirementType === "resumeScore") {
        meetsRequirement = updatedUser.resumeScore >= badgeDef.requirementValue;
      }

      if (meetsRequirement) {
        const newBadge: Badge = {
          id: badgeDef.id,
          name: badgeDef.name,
          icon: badgeDef.icon,
          desc: badgeDef.desc,
          date: todayStr,
        };
        updatedUser.badges = [...updatedUser.badges, newBadge];
        newlyAwarded.push(newBadge);
      }
    });

    if (newlyAwarded.length > 0) {
      setNewlyUnlockedBadge(newlyAwarded[newlyAwarded.length - 1]);
      triggerConfetti();
    }

    return updatedUser;
  };

  const saveUser = (updated: UserProfile | null) => {
    let finalUser = updated;
    if (updated) {
      finalUser = checkAndAwardBadges({ ...updated });
    }
    setUser(finalUser);
    if (finalUser) {
      localStorage.setItem("codeplace_user", JSON.stringify(finalUser));
      // Sync update to Neon database in the background (async/non-blocking)
      fetch("/api/auth/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalUser),
      }).catch((err) => {
        console.error("Background profile sync failed:", err);
      });
    } else {
      localStorage.removeItem("codeplace_user");
    }
  };

  const login = async (email: string, password?: string, provider = "Email"): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    try {
      let res;
      if (provider !== "Email") {
        res = await fetch("/api/auth/social-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name: email.split("@")[0].toUpperCase(), provider }),
        });
      } else {
        res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
      }

      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Authentication failed." };
      }

      setUser(data.user);
      localStorage.setItem("codeplace_user", JSON.stringify(data.user));
      return { success: true };
    } catch (err: any) {
      console.error("Login call failed:", err);
      return { success: false, error: "Unable to reach server. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password?: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || "Registration failed." };
      }

      setUser(data.user);
      localStorage.setItem("codeplace_user", JSON.stringify(data.user));
      return { success: true };
    } catch (err: any) {
      console.error("Signup call failed:", err);
      return { success: false, error: "Unable to reach server. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (otp: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setLoading(false);
    return otp === "123456";
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

    let updatedBadges = [...user.badges];
    if (newXp >= currentXpBoundary) {
      newLevel += 1;
      triggerConfetti();
      // Unlocked a badge for level up!
      const levelUpBadge = {
        id: `badge-level-${newLevel}`,
        name: `Level ${newLevel} Titan`,
        icon: "🏆",
        desc: `Reached coding profile Level ${newLevel}`,
        date: new Date().toISOString().split("T")[0]
      };
      updatedBadges = [...updatedBadges, levelUpBadge];
      setNewlyUnlockedBadge(levelUpBadge);
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
      rating: user.rating + (difficulty === "Easy" ? 5 : difficulty === "Medium" ? 12 : 25),
      badges: updatedBadges
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

  const spinWheel = (): { type: "coins" | "xp" | "premium_day"; amount: number; message: string } => {
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
        signup,
        verifyOtp,
        logout,
        solveProblem,
        toggleBookmark,
        saveNote,
        purchasePremium,
        spinWheel,
        updateResumeScore,
        addCoins,
        triggerConfetti,
        newlyUnlockedBadge,
        clearNewlyUnlockedBadge
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
