export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  problemIds: string[];
  duration: string;
  status: "locked" | "available" | "completed";
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "General" | "Company";
  company?: string;
  steps: RoadmapStep[];
}

export const roadmaps: Roadmap[] = [
  {
    id: "beginner-dsa",
    title: "Beginner DSA Masterclass",
    description: "Build a strong foundation in variables, loops, arrays, strings, recursion, and basic complexity analysis.",
    difficulty: "Beginner",
    category: "General",
    steps: [
      {
        id: "step-1-arrays",
        title: "Dynamic Arrays",
        description: "Learn inserting, deleting, and accessing array indices. Master the Two-Pointer technique.",
        problemIds: ["1", "5", "6"],
        duration: "1 week",
        status: "available"
      },
      {
        id: "step-2-strings",
        title: "String Manipulations",
        description: "Understand ASCII, substring slices, and dictionary hash mappings.",
        problemIds: ["2", "4"],
        duration: "1 week",
        status: "locked"
      },
      {
        id: "step-3-recursion",
        title: "Basic Recursion",
        description: "Master calling call-stacks, base conditions, and induction logic.",
        problemIds: ["3"],
        duration: "5 days",
        status: "locked"
      }
    ]
  },
  {
    id: "intermediate-dsa",
    title: "Intermediate DSA Pathway",
    description: "Level up your skills with search, stacks, queues, hash maps, heaps, and tree structures.",
    difficulty: "Intermediate",
    category: "General",
    steps: [
      {
        id: "step-1-stacks",
        title: "Stack and Queue Design",
        description: "Understand FIFO/LIFO structures and matching algorithms.",
        problemIds: ["2"],
        duration: "1 week",
        status: "available"
      },
      {
        id: "step-2-trees",
        title: "Binary Trees & Breadth First Search",
        description: "Traverse graphs and trees using level-order queues.",
        problemIds: ["8"],
        duration: "10 days",
        status: "locked"
      }
    ]
  },
  {
    id: "advanced-dsa",
    title: "Advanced Algorithm Specialization",
    description: "Deep dive into DP, advanced graph traversals (Tarjan, Dijkstra), segment trees, and hard design patterns.",
    difficulty: "Advanced",
    category: "General",
    steps: [
      {
        id: "step-1-graphs",
        title: "Advanced Graphs & Traversal clones",
        description: "Learn DFS/BFS cycle checks, topological sorting, and cloning nodes.",
        problemIds: ["9"],
        duration: "2 weeks",
        status: "available"
      },
      {
        id: "step-2-dp",
        title: "Multi-dimensional Dynamic Programming",
        description: "Master subproblem overlap, memoization lookup, and space compression.",
        problemIds: ["10"],
        duration: "3 weeks",
        status: "locked"
      }
    ]
  },
  // Company specific roadmaps
  {
    id: "google-prep",
    title: "Google Interview Prep Path",
    description: "Curated collection of Google's highly asked Graph, String sliding-window, and DP coding problems.",
    difficulty: "Intermediate",
    category: "Company",
    company: "Google",
    steps: [
      {
        id: "g-step-1",
        title: "Sliding Window and Lookup Maps",
        description: "Highly focused on string optimizations and hash tables.",
        problemIds: ["4"],
        duration: "1 week",
        status: "available"
      },
      {
        id: "g-step-2",
        title: "Connected Graph Components",
        description: "Solve graph networks, cycle checks, and tree levels.",
        problemIds: ["8", "9"],
        duration: "2 weeks",
        status: "locked"
      }
    ]
  },
  {
    id: "amazon-prep",
    title: "Amazon Interview Prep Path",
    description: "Focused heavily on custom object design, merge intervals, heap sort, and linked list traversals.",
    difficulty: "Intermediate",
    category: "Company",
    company: "Amazon",
    steps: [
      {
        id: "a-step-1",
        title: "Sorting and Range Merges",
        description: "Learn to handle intervals, timing schedules, and sweep-line algorithms.",
        problemIds: ["7"],
        duration: "1 week",
        status: "available"
      },
      {
        id: "a-step-2",
        title: "Linked Lists & Pointers",
        description: "Merging, reversing, and checking list intersections.",
        problemIds: ["3"],
        duration: "5 days",
        status: "locked"
      }
    ]
  },
  {
    id: "microsoft-prep",
    title: "Microsoft Interview Prep Path",
    description: "Build skills in binary search tree checks, matrix structures, stack operations, and binary conversions.",
    difficulty: "Intermediate",
    category: "Company",
    company: "Microsoft",
    steps: [
      {
        id: "m-step-1",
        title: "Stack Structures and Arrays",
        description: "Understand index calculations, sum pairs, and brackets validation.",
        problemIds: ["1", "2"],
        duration: "1 week",
        status: "available"
      }
    ]
  }
];
