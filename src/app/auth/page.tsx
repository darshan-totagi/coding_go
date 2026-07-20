"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mail, Lock, Key, ArrowRight, ShieldCheck } from "lucide-react";

export default function AuthPage() {
  const { login, verifyOtp, user } = useApp();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"login" | "otp">("login");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to dashboard
  React.useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, [user, router]);

  const handleSocialLogin = async (provider: string) => {
    setError("");
    setLoading(true);
    try {
      await login(`${provider.toLowerCase()}@codeplace.ai`, provider);
      router.push("/profile");
    } catch (err) {
      setError("Social login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all credentials.");
      return;
    }
    setLoading(true);
    try {
      // Simulate sending OTP
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStep("otp");
    } catch (err) {
      setError("Failed to initiate login.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (otp.length !== 6) {
      setError("Enter the 6-digit verification code.");
      return;
    }
    setLoading(true);
    try {
      const isOk = await verifyOtp(otp);
      if (isOk) {
        await login(email, "Email");
        router.push("/profile");
      } else {
        setError("Invalid OTP code. Enter '123456' to pass.");
      }
    } catch (err) {
      setError("Verification failed.");
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
            {step === "login" ? "Welcome Back" : "Security Check"}
          </h2>
          <p className="text-xs text-gray-400">
            {step === "login"
              ? "Access your dashboard and start solving coding challenges."
              : `Verification code sent to ${email}`}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-400 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === "login" ? (
            <motion.form
              key="login-form"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onSubmit={handleEmailSubmit}
              className="space-y-4"
            >
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs text-brand-purple-400 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 disabled:bg-brand-purple-800 text-white rounded-lg font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                {loading ? "Initializing..." : "Sign In with Email"}
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
            </motion.form>
          ) : (
            <motion.form
              key="otp-form"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onSubmit={handleOtpSubmit}
              className="space-y-4"
            >
              <div className="p-3 rounded-lg bg-brand-purple-950/20 border border-brand-purple-500/20 text-brand-purple-300 text-xs text-center flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-purple-400" />
                <span>Verification code sent. Use test code <strong>123456</strong>.</span>
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">One Time Passcode (OTP)</label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-sm tracking-[0.5em] font-bold text-center"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-brand-purple-600 hover:bg-brand-purple-700 disabled:bg-brand-purple-800 text-white rounded-lg font-semibold text-sm transition"
              >
                {loading ? "Verifying..." : "Verify Code"}
              </button>

              <button
                type="button"
                onClick={() => setStep("login")}
                className="w-full text-center text-xs text-gray-500 hover:text-white transition"
              >
                Back to credentials
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
