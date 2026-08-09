"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SubNavbar } from "@/components/SubNavbar";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Plus,
  Trash,
  Sparkles,
  Download,
  AlertCircle,
  Printer
} from "lucide-react";

export default function ResumeBuilderPage() {
  const { user, updateResumeScore } = useApp();

  // Resume form state
  const [fullName, setFullName] = useState(user?.name || "Alex Coder");
  const [email, setEmail] = useState(user?.email || "alex@codeplace.ai");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [role, setRole] = useState("Software Engineer Intern");
  const [summary, setSummary] = useState(
    "Passionate coding student with strong problem-solving capabilities, specialized in dynamic arrays, graphs, and stack operations."
  );
  const [skills, setSkills] = useState("React, Next.js, Node.js, TypeScript, PostgreSQL, Python, Git");

  const [experience, setExperience] = useState([
    { company: "Codeplace Labs", role: "Frontend developer", duration: "June 2026 - Present", details: "Maintained glassmorphic components using Next.js 15." }
  ]);

  const [projects, setProjects] = useState([
    { name: "Codeplace Sandbox", tech: "TypeScript, Express", details: "Built safe browser-driven JS interpreters for sandbox compilation runs." }
  ]);

  // Scanner status
  const [isScanning, setIsScanning] = useState(false);
  const [atsScore, setAtsScore] = useState(user?.resumeScore || 68);
  const [auditFeedback, setAuditFeedback] = useState<string[]>([
    "Add more metrics to your experience descriptions (e.g. 'boosted speeds by 30%').",
    "Missing target keyphrase: 'Scalability'.",
    "Consider adding 'Docker' and 'Kubernetes' tags under Skills."
  ]);

  if (!user) return null;

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", role: "", duration: "", details: "" }]);
  };

  const handleRemoveExperience = (idx: number) => {
    setExperience(experience.filter((_, i) => i !== idx));
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: "", tech: "", details: "" }]);
  };

  const handleRemoveProject = (idx: number) => {
    setProjects(projects.filter((_, i) => i !== idx));
  };

  const handleAtsAudit = async () => {
    setIsScanning(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsScanning(false);
    
    // Simulate updating score
    const newScore = Math.min(88, atsScore + 10);
    setAtsScore(newScore);
    updateResumeScore(newScore, { fullName, email, phone, role, summary, skills });
    setAuditFeedback([
      "Keyword match looks good! Added target terms.",
      "Redundant styling removed.",
      "Tip: Add your Codeplace profile rank URL directly in header metadata for recruiters!"
    ]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden print:bg-white print:text-black">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="print:hidden">
          <Header />
          <SubNavbar />
        </div>

        <div className="flex-grow overflow-y-auto print:overflow-visible">
          <main className="p-6 max-w-7xl w-full mx-auto space-y-6 text-left">
          <div className="border-b border-white/5 pb-4 print:hidden">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
              ATS Resume Builder & Auditor <FileText className="w-6 h-6 text-brand-purple-400" />
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Construct professional templates and execute AI keywords compatibility scans to maximize interview selections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left: Input Editor */}
            <div className="space-y-6 print:hidden">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Candidate Particulars</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Target Role Title</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">Phone</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-semibold block">Professional Summary</label>
                  <textarea
                    rows={3}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs resize-none"
                  ></textarea>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-semibold block">Technical Skills (comma-separated)</label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass-input text-xs"
                  />
                </div>
              </div>

              {/* Experience list */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Work History</h3>
                  <button
                    onClick={handleAddExperience}
                    className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold flex items-center gap-1 hover:bg-white/10 transition"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>

                {experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/25 border border-white/5 space-y-3 relative">
                    <button
                      onClick={() => handleRemoveExperience(idx)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-red-400"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].company = e.target.value;
                          setExperience(updated);
                        }}
                        className="px-3 py-2 rounded-lg glass-input text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].role = e.target.value;
                          setExperience(updated);
                        }}
                        className="px-3 py-2 rounded-lg glass-input text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g. 2024-2025)"
                        value={exp.duration}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].duration = e.target.value;
                          setExperience(updated);
                        }}
                        className="px-3 py-2 rounded-lg glass-input text-xs col-span-2"
                      />
                      <textarea
                        placeholder="Role Details description..."
                        rows={2}
                        value={exp.details}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].details = e.target.value;
                          setExperience(updated);
                        }}
                        className="px-3 py-2 rounded-lg glass-input text-xs col-span-2 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: ATS Audit Score & Preview Sheet */}
            <div className="space-y-6">
              {/* ATS Analyzer Card */}
              <div className="glass-panel-glow p-6 rounded-2xl border border-brand-purple-500/20 space-y-4 print:hidden">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-purple-400" /> ATS AI Auditor
                  </h3>
                  <span className="text-sm font-extrabold text-brand-cyan-400">{atsScore} / 100</span>
                </div>

                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-cyan-400 rounded-full" style={{ width: `${atsScore}%` }}></div>
                </div>

                <div className="space-y-2 text-xs">
                  {auditFeedback.map((fb, i) => (
                    <p key={i} className="text-gray-300 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-brand-purple-400 shrink-0 mt-0.5" />
                      <span>{fb}</span>
                    </p>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleAtsAudit}
                    disabled={isScanning}
                    className="flex-1 py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    {isScanning ? "Auditing formatting..." : "Run AI Audit check"}
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold transition flex items-center justify-center"
                    title="Print / Save PDF"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Minimalist preview Sheet */}
              <div className="p-8 rounded-xl bg-white border border-gray-200 text-black font-serif text-sm space-y-6 shadow-2xl min-h-[550px]">
                {/* Print layout header */}
                <div className="text-center space-y-1 pb-4 border-b border-gray-300">
                  <h2 className="text-xl font-bold uppercase tracking-tight text-black">{fullName}</h2>
                  <p className="text-xs text-gray-600 font-sans">{role}</p>
                  <div className="text-[10px] text-gray-500 font-sans space-x-2">
                    <span>{email}</span>
                    <span>|</span>
                    <span>{phone}</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1">Professional Summary</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">{summary}</p>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1">Professional Experience</h3>
                  {experience.map((exp, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-gray-800">
                        <span>{exp.company}</span>
                        <span className="font-normal text-gray-500">{exp.duration}</span>
                      </div>
                      <div className="text-[11px] italic text-gray-600">{exp.role}</div>
                      <p className="text-xs text-gray-700">{exp.details}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1">Technical Skills</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">{skills}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    </div>
  </div>
  );
}
