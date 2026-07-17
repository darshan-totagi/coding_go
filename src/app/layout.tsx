import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codeplace | AI-Powered Coding Interview Preparation Platform",
  description: "Accelerate your programming career with real-time AI mentoring, interactive learning roadmaps, ATS resume scanner, dynamic gamified statistics, and mock interview engines.",
  keywords: ["coding interview", "data structures", "algorithms", "nextjs", "leetcode", "react", "framer motion", "developer jobs", "system design", "ai programming tutor"],
  openGraph: {
    title: "Codeplace | Next-Gen AI Coding Platform",
    description: "Accelerate your programming career with real-time AI mentoring and interactive roadmaps.",
    type: "website",
    locale: "en_US",
    url: "https://codeplace.ai",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-[#f5f5f7] min-h-screen`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
