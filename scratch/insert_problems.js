const fs = require('fs');
const path = require('path');

const problemsFile = path.join(__dirname, '../src/data/problems.ts');
let content = fs.readFileSync(problemsFile, 'utf8');

const newProblems = [
  {
    id: "63",
    title: "Valid Palindrome",
    titleSlug: "valid-palindrome",
    difficulty: "Easy",
    acceptanceRate: 45.3,
    tags: ["Two Pointers", "Strings"],
    companies: ["Google", "Meta", "Microsoft"],
    description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.",
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.'
      }
    ],
    codeTemplates: {
      python: "def isPalindrome(s: str) -> bool:\n    # Write your code here\n    return False",
      javascript: "function isPalindrome(s) {\n    // Write your code here\n    return false;\n}",
      cpp: "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your code here\n        return false;\n    }\n};",
      java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', output: "true" },
      { input: '"race a car"', output: "false" },
      { input: '" "', output: "true" }
    ],
    hints: [
      "Use two pointers, one starting from the beginning and one starting from the end.",
      "Move the pointers inward, skipping non-alphanumeric characters."
    ],
    editorial: "### Two Pointer Scan\\nBy moving pointers from both ends towards the center, we compare alphanumeric characters while ignoring case. This runs in O(N) time and O(1) space.",
    videoUrl: "https://www.youtube.com/embed/jJXyudgpydI"
  },
  {
    id: "64",
    title: "Find Center of Star Graph",
    titleSlug: "find-center-of-star-graph",
    difficulty: "Easy",
    acceptanceRate: 83.4,
    tags: ["Graphs"],
    companies: ["Google", "Amazon"],
    description: "There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.\n\nGiven a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi, return the center of the given star graph.",
    constraints: [
      "3 <= n <= 10^5",
      "edges.length == n - 1",
      "edges[i].length == 2",
      "1 <= ui, vi <= n",
      "ui != vi",
      "The given edges represent a valid star graph."
    ],
    examples: [
      {
        input: "edges = [[1,2],[2,3],[4,2]]",
        output: "2",
        explanation: "As shown in the input, node 2 is connected to every other node, so 2 is the center."
      }
    ],
    codeTemplates: {
      python: "def findCenter(edges: list[list[int]]) -> int:\n    # Write your code here\n    return -1",
      javascript: "function findCenter(edges) {\n    // Write your code here\n    return -1;\n}",
      cpp: "class Solution {\npublic:\n    int findCenter(vector<vector<int>>& edges) {\n        // Write your code here\n        return -1;\n    }\n};"
    },
    testCases: [
      { input: "[[1,2],[2,3],[4,2]]", output: "2" },
      { input: "[[1,2],[5,1],[1,3],[1,4]]", output: "1" }
    ],
    hints: [
      "The center node must appear in every edge.",
      "You only need to compare the first two edges to find the common node."
    ],
    editorial: "### O(1) Common Node Check\\nSince the center node must connect to all other nodes, it will be present in every single edge. Thus, comparing the nodes of the first two edges is sufficient to find the center.",
    videoUrl: "https://www.youtube.com/embed/P62C0eGz2yU"
  },
  {
    id: "65",
    title: "Sum of All Subset XOR Totals",
    titleSlug: "sum-of-all-subset-xor-totals",
    difficulty: "Easy",
    acceptanceRate: 81.2,
    tags: ["Backtracking", "Bit Manipulation"],
    companies: ["Google", "Amazon"],
    description: "The XOR total of an array is the bitwise XOR of all its elements of the array, or 0 if the array is empty.\n\nGiven an array nums, return the sum of all XOR totals for every subset of nums.\n\nNote: Subsets with the same elements should be counted multiple times.",
    constraints: [
      "1 <= nums.length <= 12",
      "1 <= nums[i] <= 20"
    ],
    examples: [
      {
        input: "nums = [1,3]",
        output: "6",
        explanation: "The subsets are: [] (XOR total 0), [1] (XOR 1), [3] (XOR 3), [1,3] (XOR 2). Total = 0 + 1 + 3 + 2 = 6."
      }
    ],
    codeTemplates: {
      python: "def subsetXORSum(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function subsetXORSum(nums) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[1,3]", output: "6" },
      { input: "[5,1,6]", output: "28" }
    ],
    hints: [
      "Generate all subsets using recursion / backtracking.",
      "Alternatively, use bit manipulation: for any bit that is set in at least one element, it will be set in exactly 2^(N-1) subsets."
    ],
    editorial: "### Bit Manipulation / Backtracking\\nWe can traverse the subset tree recursively keeping track of current XOR, or bitwise OR all elements and multiply by 2^(N-1). Time complexity: O(N) or O(2^N).",
    videoUrl: "https://www.youtube.com/embed/z1X2XhE60o4"
  },
  {
    id: "66",
    title: "Design a Unique ID Generator",
    titleSlug: "design-unique-id-generator",
    difficulty: "Easy",
    acceptanceRate: 90.0,
    tags: ["System Design"],
    companies: ["Twitter", "Uber", "Amazon"],
    description: "Design a system to generate 64-bit unique IDs. The IDs must be unique globally, roughly sorted by time, and highly available (able to generate millions of IDs per second with low latency). Describe the ID components and architecture.",
    constraints: [
      "Ids must be fit in a 64-bit signed integer.",
      "Must generate globally unique IDs.",
      "Roughly sorted by timestamp."
    ],
    examples: [
      {
        input: "Request: getNextId()",
        output: "Id: 182390847293847293",
        explanation: "A unique 64-bit identifier built from 41 bits timestamp, 10 bits machine/node ID, and 12 bits sequence number."
      }
    ],
    codeTemplates: {
      python: "class SnowflakeIdGenerator:\n    def __init__(self, worker_id: int, datacenter_id: int):\n        # Initialize generator\n        pass\n        \n    def next_id(self) -> int:\n        # Return next unique ID\n        return 0",
      javascript: "class SnowflakeIdGenerator {\n    constructor(workerId, datacenterId) {}\n    nextId() {\n        return 0;\n    }\n}"
    },
    testCases: [
      { input: "worker_id=1, datacenter_id=1\nrequests=2", output: "[unique, sorted]" }
    ],
    hints: [
      "Look into Twitter Snowflake's 64-bit design.",
      "Break the ID into timestamp, datacenter/machine identifier, and sequence number."
    ],
    editorial: "### Twitter Snowflake Architecture\\nSnowflake divides the 64 bits into: 1 sign bit (unused), 41 bits for epoch timestamp (approx. 69 years), 10 bits for worker/datacenter IDs, and 12 bits for local auto-incrementing sequence count. This allows generating sorted, unique IDs without centralized coordination.",
    videoUrl: "https://www.youtube.com/embed/gocwRvZHYg4"
  },
  {
    id: "67",
    title: "Single Number II",
    titleSlug: "single-number-ii",
    difficulty: "Medium",
    acceptanceRate: 59.8,
    tags: ["Bit Manipulation"],
    companies: ["Google", "Amazon"],
    description: "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    constraints: [
      "1 <= nums.length <= 3 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1",
      "Each element in nums appears exactly three times except for one element which appears once."
    ],
    examples: [
      {
        input: "nums = [2,2,3,2]",
        output: "3"
      }
    ],
    codeTemplates: {
      python: "def singleNumber(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function singleNumber(nums) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[2,2,3,2]", output: "3" },
      { input: "[0,1,0,1,0,1,99]", output: "99" }
    ],
    hints: [
      "Consider the bits of the numbers. Sum the bits in each position.",
      "Since every number appears three times except for one, the sum of bits at any position modulo 3 will give the bit of the single number."
    ],
    editorial: "### Bitwise Modulo 3 Sum\\nBy iterating through all 32-bit positions and summing up the set bits at each position from all elements, the remainder after dividing by 3 represents the bit value of the unique number. Time complexity: O(32 * N) = O(N). Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/cOcycyzZsOM"
  },
  {
    id: "68",
    title: "Trapping Rain Water",
    titleSlug: "trapping-rain-water",
    difficulty: "Hard",
    acceptanceRate: 60.5,
    tags: ["Two Pointers", "Stacks", "Arrays"],
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Apple"],
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped."
      }
    ],
    codeTemplates: {
      python: "def trap(height: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function trap(height) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "[4,2,0,3,2,5]", output: "9" }
    ],
    hints: [
      "Use two pointers, left and right, starting at each end.",
      "Keep track of the maximum height on the left and right sides. Water trapped at any index is min(max_left, max_right) - height[i]."
    ],
    editorial: "### Two Pointer Approach\\nBy moving pointers from both ends towards the center while keeping track of max_left and max_right heights, we can accumulate the trapped water in O(N) time and O(1) space.",
    videoUrl: "https://www.youtube.com/embed/ZI2z5pq0TqA"
  },
  {
    id: "69",
    title: "Median of Two Sorted Arrays",
    titleSlug: "median-of-two-sorted-arrays",
    difficulty: "Hard",
    acceptanceRate: 38.6,
    tags: ["Binary Search", "Sorting", "Arrays"],
    companies: ["Google", "Microsoft", "Amazon", "Apple"],
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).",
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m, n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6"
    ],
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2."
      }
    ],
    codeTemplates: {
      python: "def findMedianSortedArrays(nums1: list[int], nums2: list[int]) -> float:\n    # Write your code here\n    return 0.0",
      javascript: "function findMedianSortedArrays(nums1, nums2) {\n    // Write your code here\n    return 0.0;\n}"
    },
    testCases: [
      { input: "[1,3]\n[2]", output: "2.00000" },
      { input: "[1,2]\n[3,4]", output: "2.50000" }
    ],
    hints: [
      "To solve this in O(log(m+n)), partition the two arrays such that left parts and right parts are balanced.",
      "Perform a binary search on the smaller array to find the correct partition position."
    ],
    editorial: "### Binary Search on Partitioning\\nWe partition arrays A and B into two halves such that A_left + B_left equals A_right + B_right and max(A_left, B_left) <= min(A_right, B_right). Binary search is performed on the smaller array. Time: O(log(min(M, N))). Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/q6IEA26mjy8"
  },
  {
    id: "70",
    title: "Binary Tree Maximum Path Sum",
    titleSlug: "binary-tree-maximum-path-sum",
    difficulty: "Hard",
    acceptanceRate: 39.4,
    tags: ["Trees", "DFS", "Recursion"],
    companies: ["Meta", "Google", "Amazon"],
    description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.\n\nGiven the root of a binary tree, return the maximum path sum of any non-empty path.",
    constraints: [
      "The number of nodes in the tree is in the range [1, 3 * 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      }
    ],
    codeTemplates: {
      python: "def maxPathSum(root) -> int:\n    # Write your code here\n    return 0",
      javascript: "function maxPathSum(root) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[1,2,3]", output: "6" },
      { input: "[-10,9,20,null,null,15,7]", output: "42" }
    ],
    hints: [
      "Use Depth First Search.",
      "For each node, compute the max path sum that starts at this node and goes downwards. Also update a global maximum path sum using left and right branches."
    ],
    editorial: "### Recursive Post-Order DFS\\nFor each node, we recursively find the maximum path sum of its left and right subtrees. The maximum path sum passing through the current node as a pivot is left_gain + right_gain + node.val. We update the global maximum and return node.val + max(left_gain, right_gain) to the parent. Time: O(N), Space: O(H).",
    videoUrl: "https://www.youtube.com/embed/Hr5cYGldG5Y"
  },
  {
    id: "71",
    title: "Word Ladder",
    titleSlug: "word-ladder",
    difficulty: "Hard",
    acceptanceRate: 37.4,
    tags: ["BFS", "Graphs", "Strings"],
    companies: ["Google", "Amazon", "Meta"],
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:\n- Every adjacent pair of words differs by a single letter.\n- Every si is in wordList.\n\nGiven two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
    constraints: [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters."
    ],
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: "One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\", which is 5 words long."
      }
    ],
    codeTemplates: {
      python: "def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function ladderLength(beginWord, endWord, wordList) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]', output: "5" }
    ],
    hints: [
      "Use Breadth First Search (BFS) since we want the shortest path in an unweighted graph.",
      "To optimize adjacent word lookups, replace each character in the current word with letters 'a'-'z' and check if it is in the wordList."
    ],
    editorial: "### BFS with Wildcard Map\\nBy using a queue for BFS, we traverse level by level representing the transformation steps. To optimize checking adjacent words, we can pre-process words into generic patterns or mutate each letter. Time complexity: O(M^2 * N) where M is word length and N is word list size. Space: O(M^2 * N).",
    videoUrl: "https://www.youtube.com/embed/h9iTnkgv05E"
  },
  {
    id: "72",
    title: "N-Queens",
    titleSlug: "n-queens",
    difficulty: "Hard",
    acceptanceRate: 65.8,
    tags: ["Backtracking"],
    companies: ["Google", "Meta", "Adobe"],
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.\n\nGiven an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.\n\nEach solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.",
    constraints: [
      "1 <= n <= 9"
    ],
    examples: [
      {
        input: "n = 4",
        output: "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]",
        explanation: "There exist two distinct solutions for the 4-queens puzzle as shown."
      }
    ],
    codeTemplates: {
      python: "def solveNQueens(n: int) -> list[list[str]]:\n    # Write your code here\n    return []",
      javascript: "function solveNQueens(n) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "4", output: "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]" }
    ],
    hints: [
      "Place queens row by row.",
      "Use three boolean sets/arrays to keep track of columns, positive diagonals (row + col), and negative diagonals (row - col) already under attack."
    ],
    editorial: "### Recursive Backtracking with Set Checks\\nWe place queens row-by-row and check if placing in the current column attacks any previously placed queens. Columns, main diagonals, and anti-diagonals are cached in hash sets to enable O(1) checks. Time complexity: O(N!). Space: O(N) auxiliary stack.",
    videoUrl: "https://www.youtube.com/embed/Ph95IHmF5_8"
  },
  {
    id: "73",
    title: "Basic Calculator",
    titleSlug: "basic-calculator",
    difficulty: "Hard",
    acceptanceRate: 43.1,
    tags: ["Math", "Stacks"],
    companies: ["Google", "Amazon", "Microsoft"],
    description: "Given a string s representing a valid expression, implement a basic calculator to evaluate it.\n\nNote: You are not allowed to use any built-in eval functions. Expression contains '+', '-', '(', ')' and spaces.",
    constraints: [
      "1 <= s.length <= 3 * 10^5",
      "s consists of digits, '+', '-', '(', ')' and ' '."
    ],
    examples: [
      {
        input: 's = "1 + 1"',
        output: "2"
      },
      {
        input: 's = " (1+(4+5+2)-3)+(6+8)"',
        output: "23"
      }
    ],
    codeTemplates: {
      python: "def calculate(s: str) -> int:\n    # Write your code here\n    return 0",
      javascript: "function calculate(s) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: '"1 + 1"', output: "2" },
      { input: '" (1+(4+5+2)-3)+(6+8)"', output: "23" }
    ],
    hints: [
      "Use a stack to keep track of sign and result before entering parentheses.",
      "Store numbers, sign (+1 or -1), and evaluate values on-the-fly."
    ],
    editorial: "### Stack-based Linear Scan\\nWe process elements one by one. If we encounter a digit, we parse the complete integer. If we encounter `+` or `-`, we apply the sign. On `(`, we push the current result and sign onto the stack. On `)`, we pop sign and previous result, adding them up. Time: O(N). Space: O(N).",
    videoUrl: "https://www.youtube.com/embed/081AqOZsO0c"
  },
  {
    id: "74",
    title: "Maximum XOR of Two Numbers in an Array",
    titleSlug: "maximum-xor-of-two-numbers-in-an-array",
    difficulty: "Hard",
    acceptanceRate: 54.8,
    tags: ["Bit Manipulation"],
    companies: ["Google", "Amazon"],
    description: "Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.",
    constraints: [
      "1 <= nums.length <= 2 * 10^5",
      "0 <= nums[i] <= 2^31 - 1"
    ],
    examples: [
      {
        input: "nums = [3,10,5,25,2,8]",
        output: "28",
        explanation: "The maximum result is 5 XOR 25 = 28."
      }
    ],
    codeTemplates: {
      python: "def findMaximumXOR(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function findMaximumXOR(nums) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[3,10,5,25,2,8]", output: "28" }
    ],
    hints: [
      "Use a Trie to store the binary representations of the numbers.",
      "For each number, traverse the Trie, trying to choose the path with the opposite bit to maximize XOR."
    ],
    editorial: "### Binary Trie Insert & Query\\nBy converting all integers to 32-bit binary strings and inserting them into a binary Trie, we can query each number against the Trie, greedy-branching to the opposite bit at each node to achieve maximum XOR. Time: O(32 * N) = O(N). Space: O(32 * N).",
    videoUrl: "https://www.youtube.com/embed/jY-EWygeUxA"
  },
  {
    id: "75",
    title: "Department Top Three Salaries",
    titleSlug: "department-top-three-salaries",
    difficulty: "Hard",
    acceptanceRate: 51.5,
    tags: ["SQL"],
    companies: ["Google", "Meta", "Microsoft"],
    description: "A company's employee salary data is given in Employee and Department tables. A high earner in a department is an employee who has a salary in the top three unique salaries for that department. Write an SQL query to find employees who are high earners in each department.",
    constraints: [
      "Schema contains Employee (id, name, salary, departmentId) and Department (id, name).",
      "Return result table with Department, Employee, and Salary columns."
    ],
    examples: [
      {
        input: "Employee table and Department table with sample salaries",
        output: "List of top 3 earning employees in IT and Sales",
        explanation: "We filter employees whose salary rank is less than or equal to 3 using dense_rank() partition window function."
      }
    ],
    codeTemplates: {
      sql: "/* Write your T-SQL/MySQL query statement below */\nSELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.departmentId = d.id\n# Write your filter clause here"
    },
    testCases: [
      { input: "Employee=[[1,'Joe',85000,1],[2,'Henry',80000,2]], Department=[[1,'IT'],[2,'Sales']]", output: "[ IT | Joe | 85000 ], [ Sales | Henry | 80000 ]" }
    ],
    hints: [
      "Use the DENSE_RANK() window function to compute salary rank partitioned by department.",
      "Filter the subquery results where the computed dense rank is <= 3."
    ],
    editorial: "### SQL Window Function DENSE_RANK()\\nUsing `DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC)` allows us to find rank. We then filter entries with rank <= 3. This resolves tie-breaking properly.",
    videoUrl: "https://www.youtube.com/embed/5-b0tWqXn7U"
  },
  {
    id: "76",
    title: "Design a Unique ID Generator (Easy)",
    titleSlug: "design-unique-id-generator-easy",
    difficulty: "Easy",
    acceptanceRate: 92.1,
    tags: ["System Design"],
    companies: ["Twitter", "Uber", "Amazon"],
    description: "Design a simple high-level URL Shortener database key generator. Describe the components needed to generate unique base62/base58 IDs.",
    constraints: [
      "Globally unique base-62 codes",
      "High performance"
    ],
    examples: [
      {
        input: "Generator request",
        output: "Id: 'ab39d'",
        explanation: "Simple distributed auto-increment counter with base-62 encoding mapping index to alpha-numeric values."
      }
    ],
    codeTemplates: {
      python: "def base62_encode(num: int) -> str:\n    # Return base62 encoded ID\n    return ''"
    },
    testCases: [
      { input: "12345", output: "'dnh'" }
    ],
    hints: [
      "Use a set of alphanumeric characters to encode numerical index values.",
      "Define characters as '0-9a-zA-Z'."
    ],
    editorial: "Convert numerical sequence values to base-62 character mappings. Time complexity: O(log_62 N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/gocwRvZHYg4"
  }
];

// Let's modify the file content:
const searchTarget = 'videoUrl: "https://www.youtube.com/embed/cTBiBSJIyGg"\n  }\n];';
const insertionString = 'videoUrl: "https://www.youtube.com/embed/cTBiBSJIyGg"\n  },\n' + newProblems.map(p => {
  return `  {\n    id: "${p.id}",\n    title: ${JSON.stringify(p.title)},\n    titleSlug: ${JSON.stringify(p.titleSlug)},\n    difficulty: "${p.difficulty}",\n    acceptanceRate: ${p.acceptanceRate},\n    tags: ${JSON.stringify(p.tags)},\n    companies: ${JSON.stringify(p.companies)},\n    description: ${JSON.stringify(p.description)},\n    constraints: ${JSON.stringify(p.constraints)},\n    examples: ${JSON.stringify(p.examples)},\n    codeTemplates: ${JSON.stringify(p.codeTemplates, null, 6).replace(/}$/, '    }')},\n    testCases: ${JSON.stringify(p.testCases)},\n    hints: ${JSON.stringify(p.hints)},\n    editorial: ${JSON.stringify(p.editorial)},\n    videoUrl: "${p.videoUrl}"\n  }`;
}).join(',\n') + '\n];';

if (content.includes(searchTarget)) {
  content = content.replace(searchTarget, insertionString);
  fs.writeFileSync(problemsFile, content, 'utf8');
  console.log("Successfully appended all 14 new problems!");
} else {
  console.error("Error: Could not locate the search target in problems.ts!");
}
