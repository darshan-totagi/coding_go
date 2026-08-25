"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, User } from "lucide-react";

export default function AuthPage() {
  const { login, signup, user } = useApp();
  const router = useRouter();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to profile
  React.useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, [user, router]);

  const handleSocialLogin = async (provider: string) => {
    setError("");
    setLoading(true);
    try {
      const result = await login(`${provider.toLowerCase()}@codeplace.ai`, undefined, provider);
      if (result.success) {
        router.push("/profile");
      } else {
        setError(result.error || "Social login failed. Try again.");
      }
    } catch (err) {
      setError("Social login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password || (mode === "signup" && !name)) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      let result;
      if (mode === "signup") {
        result = await signup(name, email, password);
      } else {
        result = await login(email, password);
      }

      if (result.success) {
        router.push("/profile");
      } else {
        setError(result.error || "Authentication failed. Check credentials.");
      }
    } catch (err: any) {
      setError("Unable to connect to authentication server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh-dark flex items-center justify-center p-6 relative">
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-brand-purple-glow/10 blur-[100px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-brand-cyan-glow/10 blur-[100px] pointer-events-none rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl glass-panel-glow border border-brand-purple-500/20 p-8 shadow-glass-glow space-y-6"
      >
        {/* Brand */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple-600 to-brand-cyan-500 flex items-center justify-center font-bold text-white text-base shadow-glass-glow">
              C
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-purple-400 bg-clip-text text-transparent tracking-tight">
              Codeplace
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {mode === "signin" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-xs text-gray-400">
            {mode === "signin"
              ? "Access your dashboard and start solving coding challenges."
              : "Register to track your coding stats and save progress to the Neon database."}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 p-1 bg-white/5 rounded-lg border border-white/10">
          <button
            type="button"
            onClick={() => { setMode("signin"); setError(""); }}
            className={`py-1.5 text-xs font-semibold rounded-md transition ${
              mode === "signin"
                ? "bg-brand-purple-600 text-white shadow-glass-glow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode("signup"); setError(""); }}
            className={`py-1.5 text-xs font-semibold rounded-md transition ${
              mode === "signup"
                ? "bg-brand-purple-600 text-white shadow-glass-glow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-400 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Alex Coder"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm text-white bg-transparent outline-none border border-white/10 focus:border-brand-purple-500/50"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm text-white bg-transparent outline-none border border-white/10 focus:border-brand-purple-500/50"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
              {mode === "signin" && (
                <a href="#" className="text-xs text-brand-purple-400 hover:underline">Forgot password?</a>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm text-white bg-transparent outline-none border border-white/10 focus:border-brand-purple-500/50"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 disabled:bg-brand-purple-800 text-white rounded-lg font-semibold text-sm transition flex items-center justify-center gap-2"
          >
            {loading ? "Authenticating..." : mode === "signin" ? "Sign In" : "Sign Up"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-[10px] text-gray-500 uppercase tracking-wider">or sign in with</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition"
            >
              Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin("GitHub")}
              className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition"
            >
              GitHub
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin("LinkedIn")}
              className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition"
            >
              LinkedIn
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
