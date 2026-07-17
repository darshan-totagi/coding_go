export interface Contest {
  id: string;
  title: string;
  type: "Weekly" | "Biweekly" | "Monthly" | "Private" | "College" | "Company" | "Virtual";
  startTime: string;
  duration: string; // e.g. "1.5 hours"
  registeredCount: number;
  problemsCount: number;
  status: "upcoming" | "active" | "past";
  difficulty: "Easy" | "Medium" | "Hard" | "Mixed";
}

export const contests: Contest[] = [
  {
    id: "weekly-128",
    title: "Weekly Contest 128",
    type: "Weekly",
    startTime: "Saturday, 8:00 PM GMT",
    duration: "1.5 Hours",
    registeredCount: 4850,
    problemsCount: 4,
    status: "upcoming",
    difficulty: "Mixed"
  },
  {
    id: "biweekly-64",
    title: "Biweekly Contest 64",
    type: "Biweekly",
    startTime: "Saturday, 9:00 AM GMT",
    duration: "1.5 Hours",
    registeredCount: 2320,
    problemsCount: 4,
    status: "upcoming",
    difficulty: "Mixed"
  },
  {
    id: "monthly-hack-july",
    title: "July Monthly Coding Sprint",
    type: "Monthly",
    startTime: "July 25, 6:00 PM GMT",
    duration: "3.0 Hours",
    registeredCount: 9812,
    problemsCount: 6,
    status: "upcoming",
    difficulty: "Hard"
  },
  {
    id: "google-challenge-2026",
    title: "Google Hiring Challenge",
    type: "Company",
    startTime: "Aug 12, 10:00 AM GMT",
    duration: "2.0 Hours",
    registeredCount: 15410,
    problemsCount: 3,
    status: "upcoming",
    difficulty: "Hard"
  },
  {
    id: "college-battle-bits",
    title: "BITS Pilani Annual Coding Lab",
    type: "College",
    startTime: "July 20, 2:00 PM GMT",
    duration: "2.5 Hours",
    registeredCount: 420,
    problemsCount: 5,
    status: "upcoming",
    difficulty: "Medium"
  },
  {
    id: "virtual-fight-1",
    title: "Daily Speed Battle #42",
    type: "Virtual",
    startTime: "Start Anytime",
    duration: "1.0 Hours",
    registeredCount: 124,
    problemsCount: 3,
    status: "active",
    difficulty: "Easy"
  }
];

export interface LeaderboardEntry {
  rank: number;
  username: string;
  solved: number;
  score: number;
  time: string;
  avatar: string;
  country: string;
}

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, username: "tourist", solved: 4, score: 1000, time: "22:15", avatar: "🤖", country: "BY" },
  { rank: 2, username: "neal_wu", solved: 4, score: 980, time: "24:45", avatar: "🦁", country: "US" },
  { rank: 3, username: "kamyu", solved: 4, score: 950, time: "28:10", avatar: "🐼", country: "TW" },
  { rank: 4, username: "code_ninja", solved: 4, score: 920, time: "31:40", avatar: "🔥", country: "IN" },
  { rank: 5, username: "ecnerwala", solved: 4, score: 900, time: "33:05", avatar: "🐯", country: "US" },
  { rank: 6, username: "alex_coder", solved: 3, score: 750, time: "18:22", avatar: "⚡", country: "DE" },
  { rank: 7, username: "priya_dsa", solved: 3, score: 730, time: "21:40", avatar: "✨", country: "IN" },
  { rank: 8, username: "kenji", solved: 3, score: 710, time: "25:12", avatar: "🌸", country: "JP" }
];
