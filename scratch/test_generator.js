const realProblemNames = {
  "Stacks": [
    "Simplify Path", "Evaluate Reverse Polish Notation", "Online Stock Span", 
    "Score of Parentheses", "Next Greater Element I", "Next Greater Element II", 
    "Asteroid Collision", "Decode String", "Remove K Digits", "132 Pattern", 
    "Basic Calculator II", "Maximal Rectangle", "Remove Duplicate Letters", 
    "Mini Parser", "Next Greater Element III", "132 Pattern II", "Build Array with Stack",
    "Baseball Game", "Backspace String Compare", "Crawler Log Folder"
  ],
  "Two Pointers": [
    "Remove Duplicates from Sorted Array", "4Sum", "Subarrays with K Different Integers", 
    "Minimum Window Substring", "Boats to Save People", "Move Zeroes", 
    "Merge Sorted Array", "Squares of a Sorted Array", "Interval List Intersections", 
    "Sort Colors", "Compare Version Numbers", "Bag of Tokens", "Reverse String",
    "Rotate Array", "3Sum Smaller", "Push Dominoes", "Remove Palindromic Subsequences",
    "Longest Mountain in Array", "Partition Labels", "Validation of Backspaces"
  ],
  "Trees": [
    "Binary Tree Zigzag Level Order Traversal", "Path Sum", "Path Sum II", "Path Sum III", 
    "Same Tree", "Symmetric Tree", "Binary Tree Right Side View", "Flatten Binary Tree to Linked List", 
    "Serialize and Deserialize Binary Tree", "Construct Binary Tree from Preorder and Inorder Traversal", 
    "Kth Smallest Element in a BST", "Subtree of Another Tree", "Convert Sorted Array to Binary Search Tree", 
    "Balanced Binary Tree", "Sum Root to Leaf Numbers", "Path Sum IV", "Construct String from Binary Tree",
    "Search in a Binary Search Tree", "Insert into a Binary Search Tree", "Trim a Binary Search Tree"
  ],
  "Graphs": [
    "Course Schedule II", "Redundant Connection", "Network Delay Time", "Is Graph Bipartite?", 
    "Reconstruct Itinerary", "Cheapest Flights Within K Stops", "All Paths From Source to Target", 
    "Find Eventual Safe States", "Keys and Rooms", "Max Area of Island", "Surrounded Regions", 
    "Pacific Atlantic Water Flow", "Find the Town Judge", "Minimum Height Trees", "Shortest Path in Binary Matrix",
    "As Far from Land as Possible", "Flower Planting With No Adjacent", "Regions Cut By Slashes",
    "Evaluate Division", "Smallest String With Swaps"
  ],
  "Backtracking": [
    "Permutations", "Permutations II", "Combinations", "Combination Sum", 
    "Combination Sum II", "Combination Sum III", "Letter Combinations of a Phone Number", 
    "N-Queens II", "Sudoku Solver", "Palindromic Partitioning", "Restore IP Addresses", 
    "Beautiful Arrangement", "Factor Combinations", "Target Sum", "Path With Maximum Gold",
    "Split a String Into the Max Number of Unique Substrings", "Letter Case Permutation",
    "Sequential Digits", "Word Search II", "Non-decreasing Subsequences"
  ],
  "BFS": [
    "Sliding Puzzle", "Open the Lock", "Shortest Path in Binary Matrix", "01 Matrix", 
    "Perfect Squares", "Minimum Depth of Binary Tree", "Word Ladder II", "Cut Off Trees for Golf Event", 
    "Escape a Large Maze", "Web Crawler", "Bus Routes", "Snakes and Ladders", 
    "As Far from Land as Possible", "Shortest Path to Get All Keys", "Shortest Path in a Grid with Obstacles Elimination",
    "Zero One Matrix", "Coloring A Border", "Shortest Path Visiting All Nodes", "Matrix Block Sum", "N-ary Tree Level Order Traversal"
  ],
  "DFS": [
    "Pacific Atlantic Water Flow", "Surrounded Regions", "Max Area of Island", "Flood Fill", 
    "Target Sum", "Matchsticks to Square", "Shopping Offers", "Accounts Merge", 
    "Reconstruct Itinerary", "Pyramid Transition Matrix", "Find Eventual Safe States", "Keys and Rooms",
    "Binary Tree Paths", "Leaf-Similar Trees", "Path Sum", "Flatten Nest List Iterator",
    "Balanced Binary Tree Check", "Sum of Nodes with Even-Valued Grandparent", "Count Servers that Communicate", "Longest ZigZag Path in a Binary Tree"
  ],
  "DP": [
    "Word Break", "Decode Ways", "Partition Equal Subset Sum", "Min Cost Climbing Stairs", 
    "House Robber II", "Maximal Square", "Ones and Zeroes", "Target Sum", "Out of Boundary Paths", 
    "Knight Probability in Chessboard", "Best Time to Buy and Sell Stock II", "Best Time to Buy and Sell Stock III",
    "Best Time to Buy and Sell Stock IV", "Maximal Rectangle", "Perfect Squares", "Trapping Rain Water II",
    "Interleaving String", "Unique Paths II", "Minimum Path Sum", "Triangle"
  ],
  "Binary Search": [
    "First Bad Version", "Find Minimum in Rotated Sorted Array", "Search in Rotated Sorted Array II", 
    "Find Peak Element", "Search Insert Position", "Koko Eating Bananas", "Capacity To Ship Packages Within D Days", 
    "Split Array Largest Sum", "Peak Index in a Mountain Array", "Time Based Key-Value Store", "Intersection of Two Arrays", 
    "Intersection of Two Arrays II", "Find K Closest Elements", "Heaters", "Online Election", 
    "Random Pick with Weight", "Valid Perfect Square", "Arranging Coins", "Find Smallest Letter Greater Than Target", "Peak Index Lookup"
  ],
  "Queues": [
    "Design Circular Queue", "Design Circular Deque", "Task Scheduler", "First Unique Character in a String", 
    "Number of Recent Calls", "Dota2 Senate", "Shortest Subarray with Sum at Least K", "Find Median from Data Stream", 
    "Kth Largest Element in a Stream", "Furthest Building You Can Reach", "Constrained Subsequence Sum", 
    "Find K Pairs with Smallest Sums", "Swim in Rising Water", "Reveal Cards In Increasing Order", "Product of the Last K Numbers",
    "Design Front Middle Back Queue", "Moving Average from Data Stream", "Design Snake Game", "Logger Rate Limiter", "Unique Number of Occurrences"
  ],
  "Math": [
    "Happy Number", "Ugly Number", "Ugly Number II", "Count Primes", "Factorial Trailing Zeroes", 
    "Excel Sheet Column Title", "Excel Sheet Column Number", "Fraction to Recurring Decimal", "Integer to Roman", 
    "Roman to Integer", "Basic Calculator II", "Multiply Strings", "Add Strings", "Power of Three", 
    "Self Dividing Numbers", "Integer Break", "Super Pow", "Valid Square", "Arranging Coins", "Minimum Moves to Equal Array Elements"
  ],
  "Bit Manipulation": [
    "Power of Two", "Missing Number", "Sum of Two Integers", "UTF-8 Validation", "Hamming Distance", 
    "Binary Number with Alternating Bits", "Single Number III", "Min Flips to Make a OR b Equal to c", 
    "Bitwise AND of Numbers Range", "Integer Replacement", "Pyramid Transition Matrix", "Find the Difference",
    "Number of Steps to Reduce a Number to Zero", "Prime Number of Set Bits in Binary Representation",
    "Binary Gap", "XOR Queries of a Subarray", "Number of Wonderful Substrings", "Maximum Product of Word Lengths",
    "Decode XORed Array", "Minimum One Bit Operations to Make Integers Zero"
  ],
  "SQL": [
    "Second Highest Salary", "Employees Earning More Than Their Managers", "Duplicate Emails", "Delete Duplicate Emails", 
    "Rising Temperature", "Game Play Analysis I", "Game Play Analysis II", "Employee Bonus", "Find Customer Referee", 
    "Customer Placing the Largest Number of Orders", "Big Countries", "Classes More Than 5 Students", "Sales Person", 
    "Actors and Directors Who Cooperated At Least Three Times", "Product Sales Analysis I", 
    "Replace Employee ID With The Unique Identifier", "Students and Examinations", "Project Employees I",
    "Project Employees II", "Product Sales Analysis II"
  ],
  "System Design": [
    "Design a Rate Limiter", "Design a Notification System", "Design a Web Crawler", "Design YouTube", 
    "Design Google Drive", "Design a Search Autocomplete System", "Design Facebook News Feed", "Design an API Gateway", 
    "Design consistent hashing", "Design a Distributed Message Queue", "Design a Metrics Monitoring System", 
    "Design a Distributed Key-Value Store", "Design Ad Click Aggregation System", "Design a Hotel Reservation System", 
    "Design a Distributed Mail System", "Design Airbnb", "Design Uber", "Design TikTok", "Design Instagram", "Design Reddit"
  ],
  "Linked Lists": [
    "Middle of the Linked List", "Linked List Cycle", "Linked List Cycle II", "Palindrome Linked List", 
    "Intersection of Two Linked Lists", "Remove Linked List Elements", "Odd Even Linked List", "Add Two Numbers", 
    "Add Two Numbers II", "Copy List with Random Pointer", "Rotate List", "Reverse Nodes in k-Group", 
    "Swap Nodes in Pairs", "Partition List", "Remove Duplicates from Sorted List", "Remove Duplicates from Sorted List II",
    "Convert Sorted List to Binary Search Tree", "Split Linked List in Parts", "Insertion Sort List", "Sort List"
  ],
  "Sorting": [
    "Largest Number", "K Closest Points to Origin", "Sort an Array", "Merge Sorted Array", 
    "Queue Reconstruction by Height", "Custom Sort String", "Sort Characters By Frequency", "Car Fleet", 
    "H-Index", "Meeting Rooms", "Meeting Rooms II", "Sort Colors", "Intersection of Two Arrays",
    "Intersection of Two Arrays II", "Relative Sort Array", "Sort Array By Parity", "Sort Array By Parity II",
    "Largest Perimeter Triangle", "Height Checker", "Minimum Absolute Difference"
  ],
  "Arrays": [
    "Two Sum", "Container With Most Water", "3Sum", "Merge Intervals", "Search in Rotated Sorted Array",
    "Maximum Subarray", "Product of Array Except Self", "3Sum Closest", "Rotate Array", "Move Zeroes",
    "Remove Duplicates from Sorted Array", "Squares of a Sorted Array", "Sort Colors", "Find Peak Element",
    "Find Minimum in Rotated Sorted Array", "Intersection of Two Arrays", "Intersection of Two Arrays II",
    "Subsets", "Single Number", "Sliding Window Maximum"
  ],
  "Hash Table": [
    "Two Sum", "Longest Substring Without Repeating Characters", "Valid Anagram", "Group Anagrams",
    "Top K Frequent Elements", "LRU Cache", "Two Sum II", "Intersection of Two Arrays", "Intersection of Two Arrays II",
    "Find Duplicate File in System", "First Unique Character in a String", "Subarray Sum Equals K",
    "Design HashMap", "Design HashSet", "Jewels and Stones", "Verifying an Alien Dictionary",
    "N-Repeated Element in Size 2N Array", "Unique Number of Occurrences", "Contiguous Array", "Find All Anagrams in a String"
  ],
  "Strings": [
    "Longest Substring Without Repeating Characters", "Valid Palindrome", "Valid Anagram", "Group Anagrams",
    "Generate Parentheses", "Longest Palindromic Substring", "Edit Distance", "Word Ladder",
    "Reverse String", "Reverse Words in a String", "Implement strStr()", "Longest Common Prefix",
    "String to Integer (atoi)", "Roman to Integer", "Integer to Roman", "Valid Parentheses",
    "Simplify Path", "Multiply Strings", "Compare Version Numbers", "Decode String"
  ],
  "Recursion": [
    "Merge Two Sorted Lists", "Reverse Linked List", "Climbing Stairs", "Pow(x, n)", "Lowest Common Ancestor",
    "Validate Binary Search Tree", "Generate Parentheses", "Subsets", "Subsets II", "Word Search",
    "Binary Tree Maximum Path Sum", "Fibonacci Number", "Range Sum of BST", "Merge Sort", "Quick Sort",
    "Tower of Hanoi", "Sum Root to Leaf Numbers", "All Paths From Source to Target", "Josephus Problem", "K-th Symbol in Grammar"
  ]
};

// Simulate loading detailedProblems
const fs = require('fs');
const path = require('path');
const fileContent = fs.readFileSync(path.join(__dirname, '../src/data/problems.ts'), 'utf8');

const problemBlocks = fileContent.split('id: "');
const detailedProblems = [];
problemBlocks.forEach((block, idx) => {
  if (idx === 0) return;
  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
  const diffMatch = block.match(/difficulty:\s*["'](Easy|Medium|Hard)["']/);
  const tagsMatch = block.match(/tags:\s*\[([^\]]+)\]/);
  
  if (titleMatch && diffMatch) {
    const title = titleMatch[1];
    const difficulty = diffMatch[1];
    const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["']/g, '').trim()) : [];
    detailedProblems.push({ title, difficulty, tags });
  }
});

// Run simulation
const generatedProblems = [];
let nextId = 200;

Object.keys(realProblemNames).forEach(tag => {
  const existingWithTag = [
    ...detailedProblems,
    ...generatedProblems
  ].filter(p => p.tags.includes(tag));
  
  let needed = 40 - existingWithTag.length;
  if (needed > 0) {
    const candidates = realProblemNames[tag];
    candidates.forEach(name => {
      if (needed <= 0) return;
      
      // Check if problem already exists by title
      const alreadyExists = [
        ...detailedProblems,
        ...generatedProblems
      ].some(p => p.title.toLowerCase() === name.toLowerCase());
      
      if (!alreadyExists) {
        const diffs = ["Easy", "Medium", "Hard"];
        const difficulty = diffs[generatedProblems.length % 3];
        generatedProblems.push({
          id: String(nextId++),
          title: name,
          difficulty,
          tags: [tag]
        });
        needed--;
      }
    });
    
    let genIndex = 1;
    while (needed > 0) {
      const name = `${tag} Practice Challenge ${genIndex++}`;
      const alreadyExists = [
        ...detailedProblems,
        ...generatedProblems
      ].some(p => p.title.toLowerCase() === name.toLowerCase());
      
      if (!alreadyExists) {
        const diffs = ["Easy", "Medium", "Hard"];
        const difficulty = diffs[generatedProblems.length % 3];
        generatedProblems.push({
          id: String(nextId++),
          title: name,
          difficulty,
          tags: [tag]
        });
        needed--;
      }
    }
  }
});

const counts = {};
Object.keys(realProblemNames).forEach(t => {
  counts[t] = 0;
});

[...detailedProblems, ...generatedProblems].forEach(p => {
  p.tags.forEach(t => {
    if (counts[t] !== undefined) {
      counts[t]++;
    }
  });
});

console.log("Counts after generation:");
console.log(JSON.stringify(counts, null, 2));
console.log("Total generated count:", generatedProblems.length);
