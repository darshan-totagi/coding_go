"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ErrorBoundary caught an error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#030303] text-[#f5f5f7] p-6 text-center space-y-6">
      <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
        <AlertTriangle className="w-10 h-10 animate-pulse" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-white">Something went wrong!</h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
          {error?.message || "An unexpected error occurred during rendering. Please try reloading the page."}
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition text-xs font-bold flex items-center gap-2"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Try Again
      </button>
    </div>
  );
}
