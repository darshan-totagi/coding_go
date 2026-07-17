"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { problems, Problem } from "@/data/problems";
import Editor from "@monaco-editor/react";
import {
  Search,
  Filter,
  CheckCircle,
  Play,
  Send,
  Sparkles,
  Info,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Bookmark,
  FileCode2,
  Code2,
  List,
  Terminal,
  Activity,
  Layers
} from "lucide-react";

export default function ProblemsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Workspace...</div>}>
      <ProblemsContent />
    </Suspense>
  );
}

function ProblemsContent() {
  const { user, solveProblem, toggleBookmark, saveNote } = useApp();
  const searchParams = useSearchParams();
  const router = useRouter();

  const problemId = searchParams.get("id");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // List filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [selectedCompany, setSelectedCompany] = useState<string>("All");

  // Selected Problem Details
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);

  // Coding Workspace States
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
  const [code, setCode] = useState<string>("");
  const [leftTab, setLeftTab] = useState<"desc" | "editorial" | "hints" | "discuss" | "ai">("desc");
  const [editorTheme, setEditorTheme] = useState<"vs-dark" | "light">("vs-dark");
  const [vimMode, setVimMode] = useState(false);

  // Console execution output
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [executionState, setExecutionState] = useState<"idle" | "running" | "success" | "error">("idle");
  const [executionResult, setExecutionResult] = useState<any>(null);

  // AI Chat States inside workspace
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessages, setAiMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! I am your AI Mentor. Write some code or select an option below and I will help you review it." }
  ]);

  // Load selected problem
  useEffect(() => {
    if (problemId) {
      const found = problems.find((p) => p.id === problemId);
      if (found) {
        setCurrentProblem(found);
        // Load default template code
        const defaultCode = found.codeTemplates[selectedLanguage] || found.codeTemplates["python"] || "";
        setCode(defaultCode);
      }
    } else {
      setCurrentProblem(null);
    }
  }, [problemId, selectedLanguage]);

  // Handle run code simulation
  const handleRunCode = async () => {
    setConsoleOpen(true);
    setExecutionState("running");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setExecutionState("success");
    setExecutionResult({
      runtime: "48 ms",
      memory: "14.2 MB",
      cpu: "1.2%",
      time: "0.04s",
      passed: 3,
      total: 3,
      cases: [
        { name: "Test Case 1", status: "Passed", input: "Example Input 1", output: "Matches Expected" },
        { name: "Test Case 2", status: "Passed", input: "Example Input 2", output: "Matches Expected" },
        { name: "Hidden Cases", status: "Passed", input: "Confidential", output: "Matches Expected" }
      ],
      logs: "Stdout:\nExecution completed with status code 0."
    });
  };

  // Handle submit code simulation (triggers XP solve problem updates)
  const handleSubmitCode = async () => {
    setConsoleOpen(true);
    setExecutionState("running");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setExecutionState("success");
    setExecutionResult({
      runtime: "52 ms",
      memory: "14.4 MB",
      cpu: "1.4%",
      time: "0.05s",
      passed: 4,
      total: 4,
      cases: [
        { name: "Test Case 1", status: "Passed" },
        { name: "Test Case 2", status: "Passed" },
        { name: "Test Case 3", status: "Passed" },
        { name: "Hidden cases", status: "Passed" }
      ],
      logs: "All tests matched successfully!"
    });
    if (currentProblem) {
      solveProblem(currentProblem.id, currentProblem.difficulty);
    }
  };

  // AI assistant requests
  const handleAiAction = async (action: "explain" | "optimize" | "find-bugs") => {
    if (!user) return;
    if (!user.isPremium) {
      alert("AI Explanations require Premium Membership. Activate your ₹499/Year access now!");
      return;
    }

    setLeftTab("ai");
    setAiLoading(true);
    setAiMessages((prev) => [...prev, { role: "user", content: `Please ${action} this code.` }]);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let response = "";
    if (action === "explain") {
      response = `### Algorithm Explanation
This solution maps characters and index complements to dynamic maps.
- **Complexity:** Time: O(N) because we iterate through the list once. Space: O(N) to store key indexes.
- **Edge cases:** An empty input size is handled by array check conditions.`;
    } else if (action === "optimize") {
      response = `### Optimization Suggestions
Your code looks highly optimal, using a single pass dictionary lookups instead of nested index iterations. Time is O(N) and Space is O(N). No additional optimization is necessary.`;
    } else {
      response = `### Bug Audit
No compile syntax errors or logical bugs found! The code structure fully passes the constraints. Ensure that negative elements in arrays are supported properly in input mappings.`;
    }

    setAiMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setAiLoading(false);
  };

  // Get problem lists tags/companies options
  const allTags = ["All", ...Array.from(new Set(problems.flatMap((p) => p.tags)))];
  const allCompanies = ["All", ...Array.from(new Set(problems.flatMap((p) => p.companies)))];

  // Filter problems list
  const filteredProblems = problems.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiff = selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
    const matchesTag = selectedTag === "All" || p.tags.includes(selectedTag);
    const matchesCompany = selectedCompany === "All" || p.companies.includes(selectedCompany);
    return matchesSearch && matchesDiff && matchesTag && matchesCompany;
  });

  return (
    <div className="flex h-screen bg-[#030303] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Conditional Rendering: Code Editor Workspace OR Problem Library List */}
        {currentProblem ? (
          /* CODE WORKSPACE VIEW */
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left Panel: Problem Stats / Discussion / Editorial / AI */}
            <div className="w-full lg:w-1/2 flex flex-col border-r border-border bg-[#050508] overflow-hidden">
              {/* Tab Navigation header */}
              <div className="flex bg-[#0b0b10] border-b border-border text-xs">
                <button
                  onClick={() => setLeftTab("desc")}
                  className={`px-4 py-3 flex items-center gap-1.5 font-bold ${
                    leftTab === "desc" ? "bg-[#050508] text-white border-b-2 border-brand-purple-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Info className="w-3.5 h-3.5" /> Description
                </button>
                <button
                  onClick={() => setLeftTab("editorial")}
                  className={`px-4 py-3 flex items-center gap-1.5 font-bold ${
                    leftTab === "editorial" ? "bg-[#050508] text-white border-b-2 border-brand-purple-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" /> Editorial
                </button>
                <button
                  onClick={() => setLeftTab("hints")}
                  className={`px-4 py-3 flex items-center gap-1.5 font-bold ${
                    leftTab === "hints" ? "bg-[#050508] text-white border-b-2 border-brand-purple-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Hints
                </button>
                <button
                  onClick={() => setLeftTab("ai")}
                  className={`px-4 py-3 flex items-center gap-1.5 font-bold ${
                    leftTab === "ai" ? "bg-[#050508] text-white border-b-2 border-brand-purple-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-purple-400" /> AI Mentor
                </button>
              </div>

              {/* Tab Workspace Contents */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {leftTab === "desc" && (
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-start gap-4">
                      <h2 className="text-2xl font-bold text-white">
                        {currentProblem.id}. {currentProblem.title}
                      </h2>
                      <button
                        onClick={() => toggleBookmark(currentProblem.id)}
                        className={`p-2 rounded-lg bg-white/5 border border-white/10 hover:text-white transition ${
                          user?.bookmarks.includes(currentProblem.id) ? "text-yellow-400" : "text-gray-400"
                        }`}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          currentProblem.difficulty === "Easy"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : currentProblem.difficulty === "Medium"
                            ? "bg-brand-cyan-500/10 text-brand-cyan-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {currentProblem.difficulty}
                      </span>
                      <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        Acceptance: {currentProblem.acceptanceRate}%
                      </span>
                    </div>

                    <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {currentProblem.description}
                    </div>

                    {currentProblem.examples.map((ex, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                        <h4 className="text-xs font-bold text-white">Example {idx + 1}:</h4>
                        <div className="font-mono text-xs text-gray-400 space-y-1">
                          <p>
                            <strong className="text-gray-300">Input:</strong> {ex.input}
                          </p>
                          <p>
                            <strong className="text-gray-300">Output:</strong> {ex.output}
                          </p>
                          {ex.explanation && (
                            <p>
                              <strong className="text-gray-300">Explanation:</strong> {ex.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Constraints:</h4>
                      <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                        {currentProblem.constraints.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Companies Asked:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProblem.companies.map((c) => (
                          <span key={c} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {leftTab === "editorial" && (
                  <div className="space-y-4 text-left">
                    <h3 className="text-lg font-bold text-white">Official Editorial Solution</h3>
                    <div className="p-4 rounded-xl bg-[#08080c] border border-white/5 font-mono text-xs text-brand-purple-300 leading-relaxed whitespace-pre-wrap">
                      {currentProblem.editorial || "No editorial solution configured for this question yet."}
                    </div>
                    {currentProblem.videoUrl && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-white">Video Solution Walkthrough:</h4>
                        <div className="aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
                          <iframe
                            className="w-full h-full"
                            src={currentProblem.videoUrl}
                            title="Video Solution"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {leftTab === "hints" && (
                  <div className="space-y-4 text-left">
                    <h3 className="text-lg font-bold text-white">Helpful Hints</h3>
                    <div className="space-y-3">
                      {currentProblem.hints.map((hint, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                          <strong className="text-white block mb-1">Hint {idx + 1}:</strong>
                          {hint}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {leftTab === "ai" && (
                  <div className="space-y-4 flex flex-col h-full text-left">
                    <div className="flex-1 space-y-4 overflow-y-auto max-h-[350px] p-2 bg-black/25 rounded-xl border border-white/5">
                      {aiMessages.map((msg, idx) => (
                        <div key={idx} className={`p-3 rounded-xl text-xs space-y-1 ${msg.role === "user" ? "bg-white/5 text-gray-200 border border-white/10" : "bg-brand-purple-950/20 text-brand-purple-300 border border-brand-purple-500/10"}`}>
                          <strong className="block text-white uppercase text-[9px] tracking-wider">
                            {msg.role === "user" ? "You" : "AI Mentor"}
                          </strong>
                          <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        </div>
                      ))}
                      {aiLoading && <div className="text-xs text-gray-500 animate-pulse">AI is compiling code metrics...</div>}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleAiAction("explain")}
                        className="py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-semibold transition"
                      >
                        Explain Code
                      </button>
                      <button
                        onClick={() => handleAiAction("optimize")}
                        className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-semibold transition"
                      >
                        Optimize Complexity
                      </button>
                      <button
                        onClick={() => handleAiAction("find-bugs")}
                        className="py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-semibold transition"
                      >
                        Find Mistakes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Editor + Runner Console */}
            <div className="w-full lg:w-1/2 flex flex-col bg-[#08080c] overflow-hidden">
              {/* Toolbar */}
              <div className="px-4 py-3 bg-[#0c0c12] border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg text-xs px-2.5 py-1.5 text-white font-medium focus:outline-none"
                  >
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="rust">Rust</option>
                  </select>

                  <select
                    value={editorTheme}
                    onChange={(e) => setEditorTheme(e.target.value as any)}
                    className="bg-white/5 border border-white/10 rounded-lg text-xs px-2.5 py-1.5 text-white font-medium focus:outline-none"
                  >
                    <option value="vs-dark">Theme: Dark</option>
                    <option value="light">Theme: Light</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.push("/problems")}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <List className="w-3.5 h-3.5" /> Back to library
                  </button>
                </div>
              </div>

              {/* Editor Workspace */}
              <div className="flex-1 relative bg-[#030303] overflow-hidden">
                <Editor
                  height="100%"
                  language={selectedLanguage}
                  value={code}
                  theme={editorTheme}
                  onChange={(val) => setCode(val || "")}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    fontFamily: "var(--font-geist-mono)",
                    lineHeight: 22,
                    automaticLayout: true
                  }}
                />
              </div>

              {/* Execution Actions bar */}
              <div className="p-4 bg-[#0a0a0f] border-t border-border flex items-center justify-between">
                <button
                  onClick={() => setConsoleOpen(!consoleOpen)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white text-xs font-semibold flex items-center gap-1 transition"
                >
                  <Terminal className="w-3.5 h-3.5" /> Console
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleRunCode}
                    disabled={executionState === "running"}
                    className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" /> Run Code
                  </button>
                  <button
                    onClick={handleSubmitCode}
                    disabled={executionState === "running"}
                    className="px-5 py-2 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold shadow-glass transition flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit
                  </button>
                </div>
              </div>

              {/* Console Drawer */}
              {consoleOpen && (
                <div className="h-56 bg-[#030305] border-t border-border p-4 overflow-y-auto space-y-4 font-mono text-xs text-left">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-400 font-bold flex items-center gap-1">
                      <Terminal className="w-4 h-4" /> Run Metrics Output
                    </span>
                    <button onClick={() => setConsoleOpen(false)} className="text-gray-500 hover:text-white">✕</button>
                  </div>

                  {executionState === "running" && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <div className="w-4 h-4 border-2 border-brand-purple-500 border-t-transparent rounded-full animate-spin"></div>
                      <span>Simulating compiler pipeline inside isolation sandbox...</span>
                    </div>
                  )}

                  {executionState === "success" && executionResult && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-2 rounded bg-white/5 border border-white/5">
                          <span className="block text-[10px] text-gray-500">RUNTIME</span>
                          <span className="font-bold text-emerald-400">{executionResult.runtime}</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5">
                          <span className="block text-[10px] text-gray-500">MEMORY USAGE</span>
                          <span className="font-bold text-brand-cyan-400">{executionResult.memory}</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5">
                          <span className="block text-[10px] text-gray-500">CPU LOAD</span>
                          <span className="font-bold text-gray-300">{executionResult.cpu}</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/5">
                          <span className="block text-[10px] text-gray-500">TEST CASES</span>
                          <span className="font-bold text-white">
                            {executionResult.passed} / {executionResult.total}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1 pt-2">
                        <span className="text-xs font-bold text-gray-400 block">Console Logs:</span>
                        <pre className="p-2 rounded bg-black/45 border border-white/5 text-[10px] text-gray-400 leading-relaxed overflow-x-auto">
                          {executionResult.logs}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* PROBLEM LIST VIEW */
          <main className="p-6 max-w-7xl w-full mx-auto space-y-6 overflow-y-auto flex-grow text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                  Problem Practice Arena <Code2 className="w-6 h-6 text-brand-purple-400" />
                </h1>
                <p className="text-xs text-gray-400 mt-1">
                  Filter through 150+ coding problems and practice in our Monaco playground.
                </p>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search problem title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input text-xs"
                />
              </div>

              {/* Difficulty */}
              <div className="flex flex-col gap-1">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2.5 text-white focus:outline-none"
                >
                  <option value="All">Difficulty: All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-1">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2.5 text-white focus:outline-none"
                >
                  <option value="All">Tag: All</option>
                  {allTags.filter((t) => t !== "All").map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full bg-[#030303] border border-white/10 rounded-lg text-xs px-3 py-2.5 text-white focus:outline-none"
                >
                  <option value="All">Company: All</option>
                  {allCompanies.filter((c) => c !== "All").map((comp) => (
                    <option key={comp} value={comp}>
                      {comp}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Problem Table */}
            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-400">
                  <thead className="text-xs uppercase bg-white/5 text-gray-400 border-b border-white/10 font-bold">
                    <tr>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Difficulty</th>
                      <th className="px-6 py-4">Acceptance</th>
                      <th className="px-6 py-4">Tags</th>
                      <th className="px-6 py-4 text-right">Practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredProblems.slice(0, 50).map((problem) => {
                      const isSolved = user?.solvedProblems.includes(problem.id);
                      return (
                        <tr key={problem.id} className="hover:bg-white/[0.02] transition">
                          <td className="px-6 py-4">
                            {isSolved ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-white/20"></div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-semibold text-white block">{problem.title}</span>
                            <span className="text-[10px] text-gray-500">Asked: {problem.companies.slice(0, 3).join(", ")}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                problem.difficulty === "Easy"
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : problem.difficulty === "Medium"
                                  ? "bg-brand-cyan-500/10 text-brand-cyan-400"
                                  : "bg-red-500/10 text-red-400"
                              }`}
                            >
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs">{problem.acceptanceRate}%</td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {problem.tags.slice(0, 2).map((t) => (
                                <span key={t} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-gray-400">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => router.push(`/problems?id=${problem.id}`)}
                              className="px-3.5 py-1.5 bg-brand-purple-600 hover:bg-brand-purple-700 text-white rounded-lg text-xs font-bold transition"
                            >
                              Solve
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredProblems.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-xs text-gray-500">
                          No matching problems found. Try adjusting filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {filteredProblems.length > 50 && (
              <p className="text-[10px] text-gray-500 text-center">Showing first 50 results. Narrow down using filters.</p>
            )}
          </main>
        )}

        {/* Footer shown on list, not in full editor */}
        {!problemId && <Footer />}
      </div>
    </div>
  );
}
