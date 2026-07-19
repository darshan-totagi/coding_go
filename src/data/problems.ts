export interface Problem {
  id: string;
  title: string;
  titleSlug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  acceptanceRate: number;
  tags: string[];
  companies: string[];
  description: string;
  constraints: string[];
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  codeTemplates: {
    [key: string]: string;
  };
  testCases: {
    input: string;
    output: string;
    isHidden?: boolean;
  }[];
  editorial: string;
  videoUrl: string;
  hints: string[];
}

// 62 highly detailed, unique coding, system design, and SQL problems covering all 20 topics
const detailedProblems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    titleSlug: "two-sum",
    difficulty: "Easy",
    acceptanceRate: 49.2,
    tags: ["Arrays", "Hash Table"],
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Apple"],
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.`,
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    codeTemplates: {
      python: "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Write your code here\n    pass",
      javascript: "function twoSum(nums, target) {\n    // Write your code here\n    return [];\n}",
      cpp: "#include <vector>\n\nclass Solution {\npublic:\n    std::vector<int> twoSum(std::vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};",
      java: "import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
      rust: "impl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        // Write your code here\n        vec![]\n    }\n}"
    },
    testCases: [
      { input: "[2,7,11,15]\n9", output: "[0,1]" },
      { input: "[3,2,4]\n6", output: "[1,2]" },
      { input: "[3,3]\n6", output: "[0,1]" },
      { input: "[1,5,9,3,7]\n12", output: "[2,3]", isHidden: true }
    ],
    hints: [
      "Try to use a hash map to look up the complement in O(1) time.",
      "For each element, its complement is target - nums[i]."
    ],
    editorial: "### O(N) Hash Map Solution\nUsing a hash map to keep track of elements and their indices allows us to find the pair in a single pass. \n\n**Time Complexity:** O(N)  \n**Space Complexity:** O(N)",
    videoUrl: "https://www.youtube.com/embed/KLlXCFG5Tk0"
  },
  {
    id: "2",
    title: "Valid Parentheses",
    titleSlug: "valid-parentheses",
    difficulty: "Easy",
    acceptanceRate: 41.0,
    tags: ["Stacks", "Strings"],
    companies: ["Google", "Meta", "Netflix", "Microsoft"],
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses characters only."
    ],
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "()[]{}"',
        output: "true"
      },
      {
        input: 's = "(]"',
        output: "false"
      }
    ],
    codeTemplates: {
      python: "def isValid(s: str) -> bool:\n    # Write your code here\n    return False",
      javascript: "function isValid(s) {\n    // Write your code here\n    return false;\n}",
      cpp: "#include <string>\n\nclass Solution {\npublic:\n    bool isValid(std::string s) {\n        // Write your code here\n        return false;\n    }\n};",
      java: "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n}"
    },
    testCases: [
      { input: '"()"', output: "true" },
      { input: '"()[]{}"', output: "true" },
      { input: '"(]"', output: "false" },
      { input: '"{[]}"', output: "true", isHidden: true }
    ],
    hints: [
      "Use a stack to store open brackets.",
      "When a closing bracket is found, pop from the stack and check if they match."
    ],
    editorial: "### Stack-based Approach\nKeep a stack of expected closing brackets or open brackets. Loop through the string. Push matching close symbols on open, or pop and verify on close.\n\n**Time Complexity:** O(N)  \n**Space Complexity:** O(N)",
    videoUrl: "https://www.youtube.com/embed/WTzjTmaQPQo"
  },
  {
    id: "3",
    title: "Merge Two Sorted Lists",
    titleSlug: "merge-two-sorted-lists",
    difficulty: "Easy",
    acceptanceRate: 62.4,
    tags: ["Linked Lists", "Recursion"],
    companies: ["Amazon", "Apple", "Uber"],
    description: `You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.`,
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      }
    ],
    codeTemplates: {
      python: "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n\ndef mergeTwoLists(list1, list2):\n    pass",
      javascript: "function mergeTwoLists(list1, list2) {\n    return null;\n}"
    },
    testCases: [
      { input: "[1,2,4]\n[1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "[]\n[]", output: "[]" }
    ],
    hints: [
      "You can solve this iteratively with a dummy head node.",
      "Alternatively, recursion offers a concise solution."
    ],
    editorial: "### Iterative Dummy Node\nCreate a pre-head node to easily track the beginning of the merged list. Compare heads of list1 and list2, link the smaller node, and advance.\n\n**Time Complexity:** O(N + M)  \n**Space Complexity:** O(1)",
    videoUrl: "https://www.youtube.com/embed/GfRQvf7MB3U"
  },
  {
    id: "4",
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    acceptanceRate: 33.8,
    tags: ["Strings", "Hash Table"],
    companies: ["Google", "Amazon", "Microsoft", "Adobe", "Salesforce"],
    description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.'
      }
    ],
    codeTemplates: {
      python: "def lengthOfLongestSubstring(s: str) -> int:\n    # Write code here\n    return 0",
      javascript: "function lengthOfLongestSubstring(s) {\n    return 0;\n}"
    },
    testCases: [
      { input: '"abcabcbb"', output: "3" },
      { input: '"bbbbb"', output: "1" },
      { input: '"pwwkew"', output: "3" }
    ],
    hints: [
      "Use a sliding window with left and right pointers.",
      "Store indices of elements in a map to skip duplicate characters instantly."
    ],
    editorial: "### Sliding Window\nKeep a hash map storing the latest index of each character. Move the right pointer, and if a duplicate is found, drag the left pointer forward.\n\n**Time Complexity:** O(N)  \n**Space Complexity:** O(min(A, N)) where A is alphabet size.",
    videoUrl: "https://www.youtube.com/embed/wiGpG14cmaY"
  },
  {
    id: "5",
    title: "Container With Most Water",
    titleSlug: "container-with-most-water",
    difficulty: "Medium",
    acceptanceRate: 54.1,
    tags: ["Arrays", "Two Pointers"],
    companies: ["Google", "Meta", "NVIDIA", "Adobe"],
    description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i-th\` line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.`,
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "The max water is between index 1 (height 8) and index 8 (height 7). Width is 7, height is min(8,7) = 7. Area = 7 * 7 = 49."
      }
    ],
    codeTemplates: {
      python: "def maxArea(height: list[int]) -> int:\n    return 0",
      javascript: "function maxArea(height) {\n    return 0;\n}"
    },
    testCases: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "[1,1]", output: "1" }
    ],
    hints: [
      "Start with pointers at both ends of the array.",
      "Move the pointer corresponding to the shorter bar inwards, hoping to find a taller height."
    ],
    editorial: "### Two Pointer Greedy Strategy\nBy starting at maximum width, we can shrink width while maximizing height. We always move the pointer that is shorter.\n\n**Time Complexity:** O(N)  \n**Space Complexity:** O(1)",
    videoUrl: "https://www.youtube.com/embed/UuiTKBwPgFY"
  },
  {
    id: "6",
    title: "3Sum",
    titleSlug: "3sum",
    difficulty: "Medium",
    acceptanceRate: 32.7,
    tags: ["Arrays", "Two Pointers", "Sorting"],
    companies: ["Facebook", "Microsoft", "Bloomberg"],
    description: `Given an integer array nums, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Notice that the solution set must not contain duplicate triplets.`,
    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]"
      }
    ],
    codeTemplates: {
      python: "def threeSum(nums: list[int]) -> list[list[int]]:\n    return []",
      javascript: "function threeSum(nums) {\n    return [];\n}"
    },
    testCases: [
      { input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "[0,1,1]", output: "[]" }
    ],
    hints: [
      "Sort the array first to avoid duplicate checks easily.",
      "Fix one number and use Two Sum II (Two Pointers) on the remaining sorted sub-array."
    ],
    editorial: "Sort, fix `nums[i]`, and run a two-pointer scan. Skip duplicate numbers to satisfy uniqueness. Time Complexity is O(N^2).",
    videoUrl: "https://www.youtube.com/embed/jzZsG8n2R9A"
  },
  {
    id: "7",
    title: "Merge Intervals",
    titleSlug: "merge-intervals",
    difficulty: "Medium",
    acceptanceRate: 46.1,
    tags: ["Arrays", "Sorting"],
    companies: ["Google", "Amazon", "Apple", "Salesforce"],
    description: `Given an array of \`intervals\` where \`intervals[i] = [start_i, end_i]\`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.`,
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= start_i <= end_i <= 10^4"
    ],
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]"
      }
    ],
    codeTemplates: {
      python: "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    return []",
      javascript: "function merge(intervals) {\n    return [];\n}"
    },
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
    ],
    hints: [
      "Sort the intervals by their start time.",
      "Iterate through, and if the current interval starts before the previous one ends, merge them."
    ],
    editorial: "### Sorting-based intervals merge\nSort by start time. Insert first interval. For each subsequent interval, if it overlaps with the last inserted interval, merge it by updating the end time.",
    videoUrl: "https://www.youtube.com/embed/44yI314iK1g"
  },
  {
    id: "8",
    title: "Binary Tree Level Order Traversal",
    titleSlug: "binary-tree-level-order-traversal",
    difficulty: "Medium",
    acceptanceRate: 64.2,
    tags: ["Trees", "BFS"],
    companies: ["Microsoft", "Meta", "Google"],
    description: `Given the head of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).`,
    constraints: ["0 <= number of nodes <= 2000"],
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]"
      }
    ],
    codeTemplates: {
      python: "def levelOrder(root): \n    return []",
      javascript: "function levelOrder(root) {\n    return [];\n}"
    },
    testCases: [
      { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }
    ],
    hints: ["Use a queue for Breadth First Search.", "Process nodes level by level using queue length."],
    editorial: "Using a queue, we queue the root, count the size of the queue at each level, and pop exactly that many nodes, inserting their children.",
    videoUrl: "https://www.youtube.com/embed/6ZnyEApgFYg"
  },
  {
    id: "9",
    title: "Clone Graph",
    titleSlug: "clone-graph",
    difficulty: "Medium",
    acceptanceRate: 52.8,
    tags: ["Graphs", "BFS", "DFS"],
    companies: ["Google", "Meta", "Amazon"],
    description: `Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.`,
    constraints: ["The number of nodes in the graph is between 0 and 100."],
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ],
    codeTemplates: {
      python: "def cloneGraph(node):\n    return None",
      javascript: "function cloneGraph(node) {\n    return null;\n}"
    },
    testCases: [
      { input: "[[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" }
    ],
    hints: ["Use a hash map to map original nodes to their cloned node counterparts."],
    editorial: "Traverse using DFS/BFS. Map nodes using a hash map to avoid duplication. Clone node, then clone adjacencies recursively.",
    videoUrl: "https://www.youtube.com/embed/mQeF6bN8hMk"
  },
  {
    id: "10",
    title: "Edit Distance",
    titleSlug: "edit-distance",
    difficulty: "Hard",
    acceptanceRate: 52.4,
    tags: ["DP", "Strings"],
    companies: ["Google", "Microsoft", "Meta", "Adobe"],
    description: `Given two strings \`word1\` and \`word2\`, return *the minimum number of operations required to convert \`word1\` to \`word2\`*.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character`,
    constraints: [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters."
    ],
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation: "horse -> rorse (replace 'h' with 'r'), rorse -> rose (delete 'r'), rose -> ros (delete 'e')"
      }
    ],
    codeTemplates: {
      python: "def minDistance(word1: str, word2: str) -> int:\n    return 0",
      javascript: "function minDistance(word1, word2) {\n    return 0;\n}"
    },
    testCases: [
      { input: '"horse"\n"ros"', output: "3" },
      { input: '"intention"\n"execution"', output: "5" }
    ],
    hints: ["This is a classic DP problem.", "Define dp[i][j] as the edit distance of prefixes word1[0...i] and word2[0...j]."],
    editorial: "If characters match, no operations needed: dp[i][j] = dp[i-1][j-1]. Else take 1 + min of insert, delete, and replace.",
    videoUrl: "https://www.youtube.com/embed/XYi2-L1ahj8"
  },
  {
    id: "11",
    title: "Reverse Linked List",
    titleSlug: "reverse-linked-list",
    difficulty: "Easy",
    acceptanceRate: 73.5,
    tags: ["Linked Lists", "Recursion"],
    companies: ["Google", "Amazon", "Apple", "Adobe"],
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    constraints: ["The number of nodes in the list is in the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]"
      }
    ],
    codeTemplates: {
      python: "def reverseList(head):\n    # Write your code here\n    pass",
      javascript: "function reverseList(head) {\n    // Write your code here\n    return null;\n}"
    },
    testCases: [
      { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" }
    ],
    hints: [
      "You can solve this iteratively or recursively.",
      "Try traversing the list and changing the next pointers as you go."
    ],
    editorial: "Iterative approach: maintain three pointers (prev, curr, next). Recursively: pop sublist, reverse tail.",
    videoUrl: "https://www.youtube.com/embed/G0_I-ZF0S38"
  },
  {
    id: "12",
    title: "Binary Search",
    titleSlug: "binary-search",
    difficulty: "Easy",
    acceptanceRate: 56.2,
    tags: ["Binary Search", "Arrays"],
    companies: ["Microsoft", "Meta", "Google"],
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    constraints: ["1 <= nums.length <= 10^4", "-10^4 < nums[i], target < 10^4", "All the integers in nums are unique.", "nums is sorted in ascending order."],
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4"
      }
    ],
    codeTemplates: {
      python: "def search(nums: list[int], target: int) -> int:\n    # Write your code here\n    return -1",
      javascript: "function search(nums, target) {\n    // Write your code here\n    return -1;\n}"
    },
    testCases: [
      { input: "[-1,0,3,5,9,12]\n9", output: "4" },
      { input: "[-1,0,3,5,9,12]\n2", output: "-1" }
    ],
    hints: [
      "Find the middle index.",
      "If the target is smaller than middle value, discard the right half. Otherwise, discard the left half."
    ],
    editorial: "Classic Binary Search with left and right bounds. Time: O(log N). Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/s4DPM8ct1Hs"
  },
  {
    id: "13",
    title: "Two Sum II - Input Array Is Sorted",
    titleSlug: "two-sum-ii-input-array-is-sorted",
    difficulty: "Medium",
    acceptanceRate: 60.1,
    tags: ["Two Pointers", "Binary Search", "Arrays"],
    companies: ["Amazon", "Google", "Adobe"],
    description: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
    constraints: ["2 <= numbers.length <= 3 * 10^4", "-1000 <= numbers[i] <= 1000", "numbers is sorted in non-decreasing order.", "-1000 <= target <= 1000", "The tests are generated such that there is exactly one solution."],
    examples: [
      {
        input: "numbers = [2,7,11,15], target = 9",
        output: "[1,2]"
      }
    ],
    codeTemplates: {
      python: "def twoSum(numbers: list[int], target: int) -> list[int]:\n    # Write your code here\n    return []",
      javascript: "function twoSum(numbers, target) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "[2,7,11,15]\n9", output: "[1,2]" }
    ],
    hints: [
      "Use two pointers, one at the start and one at the end.",
      "If the sum is less than target, increment left. If it is greater, decrement right."
    ],
    editorial: "Two pointer approach takes O(N) time and O(1) space.",
    videoUrl: "https://www.youtube.com/embed/cQ1Oz4ckceM"
  },
  {
    id: "14",
    title: "Best Time to Buy and Sell Stock",
    titleSlug: "best-time-to-buy-and-sell-stock",
    difficulty: "Easy",
    acceptanceRate: 54.3,
    tags: ["Arrays", "DP"],
    companies: ["Google", "Amazon", "Microsoft", "Meta"],
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5"
      }
    ],
    codeTemplates: {
      python: "def maxProfit(prices: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function maxProfit(prices) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[7,1,5,3,6,4]", output: "5" }
    ],
    hints: [
      "Keep track of the minimum price bought so far.",
      "At each step, calculate the potential profit and update max profit."
    ],
    editorial: "Linear scan keeping track of minPrice and maxProfit. Time: O(N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/1pkOgXD1jiM"
  },
  {
    id: "15",
    title: "Valid Anagram",
    titleSlug: "valid-anagram",
    difficulty: "Easy",
    acceptanceRate: 63.1,
    tags: ["Hash Table", "Strings", "Sorting"],
    companies: ["Uber", "Amazon", "Google"],
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    examples: [
      {
        input: "s = 'anagram', t = 'nagaram'",
        output: "true"
      }
    ],
    codeTemplates: {
      python: "def isAnagram(s: str, t: str) -> bool:\n    # Write your code here\n    return False",
      javascript: "function isAnagram(s, t) {\n    // Write your code here\n    return false;\n}"
    },
    testCases: [
      { input: "'anagram'\n'nagaram'", output: "true" },
      { input: "'rat'\n'car'", output: "false" }
    ],
    hints: [
      "Use a frequency map for characters.",
      "Compare the frequency counts of both strings."
    ],
    editorial: "We count characters using a hash map or an array of size 26. Time complexity: O(N), Space complexity: O(1).",
    videoUrl: "https://www.youtube.com/embed/gIPtBD8X5o4"
  },
  {
    id: "16",
    title: "Group Anagrams",
    titleSlug: "group-anagrams",
    difficulty: "Medium",
    acceptanceRate: 66.9,
    tags: ["Hash Table", "Strings", "Sorting"],
    companies: ["Microsoft", "Amazon", "Meta"],
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters."],
    examples: [
      {
        input: "strs = ['eat','tea','tan','ate','nat','bat']",
        output: "[['bat'],['nat','tan'],['ate','eat','tea']]"
      }
    ],
    codeTemplates: {
      python: "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Write your code here\n    return []",
      javascript: "function groupAnagrams(strs) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "['eat','tea','tan','ate','nat','bat']", output: "[['eat','tea','ate'],['tan','nat'],['bat']]" }
    ],
    hints: [
      "Categorize strings by their sorted representation.",
      "Use the sorted string as a key in a hash map."
    ],
    editorial: "Sort each string and use it as a hash key. Time: O(N * K log K) where K is max string length.",
    videoUrl: "https://www.youtube.com/embed/vzdNOK2oB2E"
  },
  {
    id: "17",
    title: "Maximum Subarray",
    titleSlug: "maximum-subarray",
    difficulty: "Medium",
    acceptanceRate: 50.2,
    tags: ["Arrays", "DP"],
    companies: ["Google", "LinkedIn", "Apple"],
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6"
      }
    ],
    codeTemplates: {
      python: "def maxSubArray(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function maxSubArray(nums) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
    ],
    hints: [
      "Use Kadane's algorithm.",
      "At each element, decide whether to add it to the existing subarray or start a new one."
    ],
    editorial: "Kadane's algorithm maintains currentSum and maxSum. Time: O(N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/5WZlOh8YNWM"
  },
  {
    id: "18",
    title: "Product of Array Except Self",
    titleSlug: "product-of-array-except-self",
    difficulty: "Medium",
    acceptanceRate: 65.1,
    tags: ["Arrays"],
    companies: ["Apple", "Netflix", "Amazon"],
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30", "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."],
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]"
      }
    ],
    codeTemplates: {
      python: "def productExceptSelf(nums: list[int]) -> list[int]:\n    # Write your code here\n    return []",
      javascript: "function productExceptSelf(nums) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "[1,2,3,4]", output: "[24,12,8,6]" }
    ],
    hints: [
      "Use prefix and suffix product arrays.",
      "Optimize to O(1) extra space by using the output array to accumulate prefix products first."
    ],
    editorial: "Calculate prefix products in the answer array, then multiply with suffix products running from right to left. Time: O(N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/b8UFALtU4VY"
  },
  {
    id: "19",
    title: "Search in Rotated Sorted Array",
    titleSlug: "search-in-rotated-sorted-array",
    difficulty: "Medium",
    acceptanceRate: 39.8,
    tags: ["Binary Search", "Arrays"],
    companies: ["Google", "Microsoft", "Facebook"],
    description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values of nums are unique.", "nums is an ascending array that is rotated.", "-10^4 <= target <= 10^4"],
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4"
      }
    ],
    codeTemplates: {
      python: "def search(nums: list[int], target: int) -> int:\n    # Write your code here\n    return -1",
      javascript: "function search(nums, target) {\n    // Write your code here\n    return -1;\n}"
    },
    testCases: [
      { input: "[4,5,6,7,0,1,2]\n0", output: "4" },
      { input: "[4,5,6,7,0,1,2]\n3", output: "-1" }
    ],
    hints: [
      "Identify which half of the array is normally sorted.",
      "Perform binary search, checking if the target lies within the sorted half."
    ],
    editorial: "Compare mid value with left and right bounds to see which half is sorted, then adjust pointers. Time: O(log N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/U8XEN0F_iS4"
  },
  {
    id: "20",
    title: "3Sum Closest",
    titleSlug: "3sum-closest",
    difficulty: "Medium",
    acceptanceRate: 45.8,
    tags: ["Two Pointers", "Arrays", "Sorting"],
    companies: ["Bloomberg", "Microsoft"],
    description: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.",
    constraints: ["3 <= nums.length <= 500", "-1000 <= nums[i] <= 1000", "-10^4 <= target <= 10^4"],
    examples: [
      {
        input: "nums = [-1,2,1,-4], target = 1",
        output: "2"
      }
    ],
    codeTemplates: {
      python: "def threeSumClosest(nums: list[int], target: int) -> int:\n    # Write your code here\n    return 0",
      javascript: "function threeSumClosest(nums, target) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[-1,2,1,-4]\n1", output: "2" }
    ],
    hints: [
      "Sort the array.",
      "Use a nested two pointer loop. Keep track of the sum with the minimum absolute difference to target."
    ],
    editorial: "Sort and scan with two pointers, checking absolute difference. Time: O(N^2), Space: O(log N) for sorting.",
    videoUrl: "https://www.youtube.com/embed/qBr2-qHWGJA"
  },
  {
    id: "21",
    title: "Remove Nth Node From End of List",
    titleSlug: "remove-nth-node-from-end-of-list",
    difficulty: "Medium",
    acceptanceRate: 42.5,
    tags: ["Linked Lists", "Two Pointers"],
    companies: ["Google", "Amazon", "Meta"],
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    constraints: ["The number of nodes in the list is sz.", "1 <= sz <= 30", "0 <= Node.val <= 100", "1 <= n <= sz"],
    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]"
      }
    ],
    codeTemplates: {
      python: "def removeNthFromEnd(head, n: int):\n    # Write your code here\n    pass",
      javascript: "function removeNthFromEnd(head, n) {\n    // Write your code here\n    return null;\n}"
    },
    testCases: [
      { input: "[1,2,3,4,5]\n2", output: "[1,2,3,5]" }
    ],
    hints: [
      "Use two pointers starting at the head.",
      "Advance the first pointer by n steps first, then move both together until the first pointer reaches the end."
    ],
    editorial: "Fast and slow pointer approach. Fast is moved n steps forward. When fast reaches end, slow is just before the target node. Time: O(N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/XVuQxVej6y8"
  },
  {
    id: "22",
    title: "Generate Parentheses",
    titleSlug: "generate-parentheses",
    difficulty: "Medium",
    acceptanceRate: 73.2,
    tags: ["Backtracking", "Recursion", "Strings"],
    companies: ["Microsoft", "Uber", "Apple"],
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    constraints: ["1 <= n <= 8"],
    examples: [
      {
        input: "n = 3",
        output: "['((()))','(()())','(())()','()(())','()()()']"
      }
    ],
    codeTemplates: {
      python: "def generateParenthesis(n: int) -> list[str]:\n    # Write your code here\n    return []",
      javascript: "function generateParenthesis(n) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "3", output: "['((()))','(()())','(())()','()(())','()()()']" }
    ],
    hints: [
      "Keep track of the number of opening and closing parentheses.",
      "Only add an opening parenthesis if open < n, and a closing parenthesis if close < open."
    ],
    editorial: "Backtracking recursion. We maintain the counts of opened and closed brackets, and branch recursively. Time: O(4^n / sqrt(n)), Space: O(n).",
    videoUrl: "https://www.youtube.com/embed/s9fokUqJ1h4"
  },
  {
    id: "23",
    title: "Merge k Sorted Lists",
    titleSlug: "merge-k-sorted-lists",
    difficulty: "Hard",
    acceptanceRate: 50.1,
    tags: ["Linked Lists", "Recursion", "Queues"],
    companies: ["Google", "Amazon", "Microsoft", "Meta"],
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500", "-10^4 <= lists[i][j] <= 10^4", "lists[i] is sorted in ascending order."],
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]"
      }
    ],
    codeTemplates: {
      python: "def mergeKLists(lists):\n    # Write your code here\n    pass",
      javascript: "function mergeKLists(lists) {\n    // Write your code here\n    return null;\n}"
    },
    testCases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }
    ],
    hints: [
      "Use divide and conquer to merge lists in pairs.",
      "Alternatively, use a min-heap (priority queue) to retrieve the minimum node among all list heads."
    ],
    editorial: "Divide and conquer or Min-Heap. Time: O(N log k) where N is total nodes, Space: O(log k) or O(k).",
    videoUrl: "https://www.youtube.com/embed/q5a5OiGbT6Q"
  },
  {
    id: "24",
    title: "Search a 2D Matrix",
    titleSlug: "search-a-2d-matrix",
    difficulty: "Medium",
    acceptanceRate: 48.9,
    tags: ["Binary Search", "Arrays"],
    companies: ["Meta", "Amazon", "Netflix"],
    description: "Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties: integers in each row are sorted from left to right, and the first integer of each row is greater than the last integer of the previous row.",
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 100", "-10^4 <= matrix[i][j], target <= 10^4"],
    examples: [
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        output: "true"
      }
    ],
    codeTemplates: {
      python: "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    # Write your code here\n    return False",
      javascript: "function searchMatrix(matrix, target) {\n    // Write your code here\n    return false;\n}"
    },
    testCases: [
      { input: "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3", output: "true" }
    ],
    hints: [
      "Treat the 2D matrix as a virtual 1D array.",
      "Use binary search on this virtual array with indices mapped back: row = mid / n, col = mid % n."
    ],
    editorial: "Standard binary search with indices mapped from virtual 1D to 2D coordinates. Time: O(log(M * N)), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/ZYpYurGD_y4"
  },
  {
    id: "25",
    title: "Subsets",
    titleSlug: "subsets",
    difficulty: "Medium",
    acceptanceRate: 76.3,
    tags: ["Backtracking", "Recursion"],
    companies: ["Facebook", "Bloomberg", "Google"],
    description: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers of nums are unique."],
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      }
    ],
    codeTemplates: {
      python: "def subsets(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    return []",
      javascript: "function subsets(nums) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "[1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
    ],
    hints: [
      "Use backtracking to either include or exclude the current element at each recursive step.",
      "Alternatively, use bit manipulation where bit positions represent elements."
    ],
    editorial: "Backtracking recursively adds elements to a running path and pops it upon return. Time: O(N * 2^N), Space: O(N).",
    videoUrl: "https://www.youtube.com/embed/REOH22IV58I"
  },
  {
    id: "26",
    title: "Word Search",
    titleSlug: "word-search",
    difficulty: "Medium",
    acceptanceRate: 40.8,
    tags: ["Backtracking", "DFS", "Arrays"],
    companies: ["Google", "Amazon", "Microsoft"],
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    constraints: ["m == board.length", "n == board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15", "board and word consist of English letters."],
    examples: [
      {
        input: "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'",
        output: "true"
      }
    ],
    codeTemplates: {
      python: "def exist(board: list[list[str]], word: str) -> bool:\n    # Write your code here\n    return False",
      javascript: "function exist(board, word) {\n    // Write your code here\n    return false;\n}"
    },
    testCases: [
      { input: "[['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\n'ABCCED'", output: "true" }
    ],
    hints: [
      "Explore all 4 directions recursively starting from any matching character cell.",
      "Mark visited cells to avoid reusing them within the same recursive path."
    ],
    editorial: "Backtracking DFS. Temporarily modify board[r][c] to a placeholder to mark visited, and restore it on return. Time: O(M * N * 4^L) where L is word length, Space: O(L) recursion stack.",
    videoUrl: "https://www.youtube.com/embed/pfiQ_PS1g8E"
  },
  {
    id: "27",
    title: "Climbing Stairs",
    titleSlug: "climbing-stairs",
    difficulty: "Easy",
    acceptanceRate: 52.5,
    tags: ["DP", "Recursion", "Math"],
    companies: ["Apple", "Adobe", "Google"],
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    constraints: ["1 <= n <= 45"],
    examples: [
      {
        input: "n = 3",
        output: "3",
        explanation: "1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step"
      }
    ],
    codeTemplates: {
      python: "def climbStairs(n: int) -> int:\n    # Write your code here\n    return 0",
      javascript: "function climbStairs(n) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "3", output: "3" },
      { input: "2", output: "2" }
    ],
    hints: [
      "To reach step n, you must come from step n-1 or step n-2.",
      "This is equivalent to finding the nth Fibonacci number."
    ],
    editorial: "Dynamic programming with space optimization. dp[i] = dp[i-1] + dp[i-2]. Time: O(N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/Y0lT9Fck7qI"
  },
  {
    id: "28",
    title: "Coin Change",
    titleSlug: "coin-change",
    difficulty: "Medium",
    acceptanceRate: 42.8,
    tags: ["DP"],
    companies: ["Amazon", "Microsoft", "Uber"],
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3"
      }
    ],
    codeTemplates: {
      python: "def coinChange(coins: list[int], amount: int) -> int:\n    # Write your code here\n    return -1",
      javascript: "function coinChange(coins, amount) {\n    // Write your code here\n    return -1;\n}"
    },
    testCases: [
      { input: "[1,2,5]\n11", output: "3" }
    ],
    hints: [
      "Use an array dp of size amount + 1, initialized to a large value.",
      "For each coin, update dp[i] = min(dp[i], dp[i - coin] + 1) for all i from coin to amount."
    ],
    editorial: "Bottom-up 1D dynamic programming. dp[i] represents the minimum coins for amount i. Time: O(Amount * N), Space: O(Amount).",
    videoUrl: "https://www.youtube.com/embed/H9bfqW1b8tM"
  },
  {
    id: "29",
    title: "Longest Palindromic Substring",
    titleSlug: "longest-palindromic-substring",
    difficulty: "Medium",
    acceptanceRate: 32.9,
    tags: ["DP", "Strings"],
    companies: ["Google", "Amazon", "Meta"],
    description: "Given a string s, return the longest palindromic substring in s.",
    constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."],
    examples: [
      {
        input: "s = 'babad'",
        output: "'bab'"
      }
    ],
    codeTemplates: {
      python: "def longestPalindrome(s: str) -> str:\n    # Write your code here\n    return ''",
      javascript: "function longestPalindrome(s) {\n    // Write your code here\n    return '';\n}"
    },
    testCases: [
      { input: "'babad'", output: "'bab'" },
      { input: "'cbbd'", output: "'bb'" }
    ],
    hints: [
      "Expand around potential centers.",
      "A palindrome can center on a single character or between two characters."
    ],
    editorial: "Expand around center approach takes O(N^2) time and O(1) space, which is faster and uses less memory than standard DP.",
    videoUrl: "https://www.youtube.com/embed/XYQECzJyAl8"
  },
  {
    id: "30",
    title: "Course Schedule",
    titleSlug: "course-schedule",
    difficulty: "Medium",
    acceptanceRate: 45.8,
    tags: ["Graphs", "BFS", "DFS"],
    companies: ["Google", "Meta", "Salesforce"],
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a. Return true if you can finish all courses. Otherwise, return false.",
    constraints: ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= 5000", "prerequisites[i].length == 2", "All pairs prerequisites[i] are unique."],
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true"
      }
    ],
    codeTemplates: {
      python: "def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    # Write your code here\n    return True",
      javascript: "function canFinish(numCourses, prerequisites) {\n    // Write your code here\n    return true;\n}"
    },
    testCases: [
      { input: "2\n[[1,0]]", output: "true" },
      { input: "2\n[[1,0],[0,1]]", output: "false" }
    ],
    hints: [
      "This problem is equivalent to cycle detection in a directed graph.",
      "Use Kahn's algorithm for topological sorting or DFS cycle detection."
    ],
    editorial: "Kahn's BFS using in-degrees or DFS using recursion state tracking. Time: O(V + E), Space: O(V + E).",
    videoUrl: "https://www.youtube.com/embed/EgI5nU9etnU"
  },
  {
    id: "31",
    title: "Number of Islands",
    titleSlug: "number-of-islands",
    difficulty: "Medium",
    acceptanceRate: 57.2,
    tags: ["Graphs", "BFS", "DFS"],
    companies: ["Amazon", "Microsoft", "Google"],
    description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", "grid[i][j] is '0' or '1'."],
    examples: [
      {
        input: "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]",
        output: "1"
      }
    ],
    codeTemplates: {
      python: "def numIslands(grid: list[list[str]]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function numIslands(grid) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]", output: "1" }
    ],
    hints: [
      "Traverse the grid. When a '1' is encountered, trigger a DFS/BFS to mark all connected land cells as visited.",
      "Increment the island count for each starting '1' node."
    ],
    editorial: "DFS traversal in 4 directions. Marks visited land as '0' to save space. Time: O(M * N), Space: O(M * N) for call stack.",
    videoUrl: "https://www.youtube.com/embed/pV2kpPDTOII"
  },
  {
    id: "32",
    title: "Implement Queue using Stacks",
    titleSlug: "implement-queue-using-stacks",
    difficulty: "Easy",
    acceptanceRate: 63.9,
    tags: ["Stacks", "Queues"],
    companies: ["Amazon", "Microsoft"],
    description: "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    constraints: ["1 <= x <= 9", "At most 100 calls will be made to push, pop, peek, and empty.", "All calls to pop and peek are valid."],
    examples: [
      {
        input: "MyQueue queue = new MyQueue(); queue.push(1); queue.push(2); queue.peek(); // returns 1; queue.pop(); // returns 1; queue.empty(); // returns false",
        output: "N/A"
      }
    ],
    codeTemplates: {
      python: "class MyQueue:\n    def __init__(self):\n        self.s1 = []\n        self.s2 = []\n\n    def push(self, x: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> int:\n        # Write your code here\n        return 0\n\n    def peek(self) -> int:\n        # Write your code here\n        return 0\n\n    def empty(self) -> bool:\n        # Write your code here\n        return True",
      javascript: "class MyQueue {\n    constructor() {\n        this.s1 = [];\n        this.s2 = [];\n    }\n    push(x) {}\n    pop() { return 0; }\n    peek() { return 0; }\n    empty() { return true; }\n}"
    },
    testCases: [
      { input: "push(1)\npush(2)\npeek()", output: "1" }
    ],
    hints: [
      "Use s1 for pushing and s2 for popping.",
      "When popping or peeking, if s2 is empty, transfer all elements of s1 to s2."
    ],
    editorial: "Amortized O(1) push and pop operations using two stacks. Transfer elements only when secondary stack is empty.",
    videoUrl: "https://www.youtube.com/embed/Wg8IiY1LbII"
  },
  {
    id: "33",
    title: "Implement Stack using Queues",
    titleSlug: "implement-stack-using-queues",
    difficulty: "Easy",
    acceptanceRate: 60.4,
    tags: ["Stacks", "Queues"],
    companies: ["Apple", "Meta"],
    description: "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all functions of a normal stack (push, top, pop, and empty).",
    constraints: ["1 <= x <= 9", "At most 100 calls will be made to push, pop, top, and empty."],
    examples: [
      {
        input: "MyStack stack = new MyStack(); stack.push(1); stack.push(2); stack.top(); // returns 2; stack.pop(); // returns 2; stack.empty(); // returns false",
        output: "N/A"
      }
    ],
    codeTemplates: {
      python: "class MyStack:\n    def __init__(self):\n        # Write initialization here\n        pass\n\n    def push(self, x: int) -> None:\n        # Write your code here\n        pass\n\n    def pop(self) -> int:\n        # Write your code here\n        return 0\n\n    def top(self) -> int:\n        # Write your code here\n        return 0\n\n    def empty(self) -> bool:\n        # Write your code here\n        return True",
      javascript: "class MyStack {\n    constructor() {}\n    push(x) {}\n    pop() { return 0; }\n    top() { return 0; }\n    empty() { return true; }\n}"
    },
    testCases: [
      { input: "push(1)\npush(2)\ntop()", output: "2" }
    ],
    hints: [
      "When pushing a new element, queue it and then rotate the queue elements so that the new element is at the front."
    ],
    editorial: "Rotate elements after push. The push operation is O(N) while pop and top are O(1).",
    videoUrl: "https://www.youtube.com/embed/rW4vm0-DLYc"
  },
  {
    id: "34",
    title: "Min Stack",
    titleSlug: "min-stack",
    difficulty: "Medium",
    acceptanceRate: 52.8,
    tags: ["Stacks"],
    companies: ["Google", "Amazon", "Adobe"],
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    constraints: ["-2^31 <= val <= 2^31 - 1", "Methods pop, top and getMin will always be called on non-empty stacks."],
    examples: [
      {
        input: "MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); // return -3",
        output: "N/A"
      }
    ],
    codeTemplates: {
      python: "class MinStack:\n    def __init__(self):\n        # Write initialization here\n        pass\n\n    def push(self, val: int) -> None:\n        # Write code here\n        pass\n\n    def pop(self) -> None:\n        # Write code here\n        pass\n\n    def top(self) -> int:\n        # Write code here\n        return 0\n\n    def getMin(self) -> int:\n        # Write code here\n        return 0",
      javascript: "class MinStack {\n    constructor() {}\n    push(val) {}\n    pop() {}\n    top() { return 0; }\n    getMin() { return 0; }\n}"
    },
    testCases: [
      { input: "push(-2)\npush(0)\npush(-3)\ngetMin()", output: "-3" }
    ],
    hints: [
      "Use an auxiliary stack to keep track of the minimum values at each step."
    ],
    editorial: "Maintain a main stack and a minStack. When pushing, push min(val, minStack.top()) to minStack. Time: O(1) for all ops, Space: O(N).",
    videoUrl: "https://www.youtube.com/embed/qkLlG54_688"
  },
  {
    id: "35",
    title: "Sliding Window Maximum",
    titleSlug: "sliding-window-maximum",
    difficulty: "Hard",
    acceptanceRate: 46.5,
    tags: ["Queues", "Arrays"],
    companies: ["Google", "Amazon", "Uber"],
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "1 <= k <= nums.length"],
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]"
      }
    ],
    codeTemplates: {
      python: "def maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    # Write code here\n    return []",
      javascript: "function maxSlidingWindow(nums, k) {\n    // Write code here\n    return [];\n}"
    },
    testCases: [
      { input: "[1,3,-1,-3,5,3,6,7]\n3", output: "[3,3,5,5,6,7]" }
    ],
    hints: [
      "Use a monotonic double-ended queue (deque) to store indices.",
      "Ensure indices in deque are within the sliding window, and elements are in descending order."
    ],
    editorial: "Monotonic deque maintains indices of elements in decreasing order of values. Time: O(N), Space: O(K).",
    videoUrl: "https://www.youtube.com/embed/DfljaUwZsOk"
  },
  {
    id: "36",
    title: "Top K Frequent Elements",
    titleSlug: "top-k-frequent-elements",
    difficulty: "Medium",
    acceptanceRate: 63.2,
    tags: ["Hash Table", "Sorting"],
    companies: ["Meta", "Apple", "Yandex"],
    description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "k is in the range [1, the number of unique elements in the array].", "It is guaranteed that the answer is unique."],
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]"
      }
    ],
    codeTemplates: {
      python: "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Write code here\n    return []",
      javascript: "function topKFrequent(nums, k) {\n    // Write code here\n    return [];\n}"
    },
    testCases: [
      { input: "[1,1,1,2,2,3]\n2", output: "[1,2]" }
    ],
    hints: [
      "Count element frequencies using a hash map.",
      "Use bucket sort or a min-heap to extract the top k frequent elements."
    ],
    editorial: "Bucket sort approach. Create frequency buckets. Scan buckets from right to left to get top k. Time: O(N), Space: O(N).",
    videoUrl: "https://www.youtube.com/embed/YPTqKIgVk-k"
  },
  {
    id: "37",
    title: "Single Number",
    titleSlug: "single-number",
    difficulty: "Easy",
    acceptanceRate: 71.2,
    tags: ["Bit Manipulation", "Arrays"],
    companies: ["Google", "Amazon"],
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
    constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4", "Each element in the array appears twice except for one element which appears only once."],
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1"
      }
    ],
    codeTemplates: {
      python: "def singleNumber(nums: list[int]) -> int:\n    # Write code here\n    return 0",
      javascript: "function singleNumber(nums) {\n    // Write code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[2,2,1]", output: "1" },
      { input: "[4,1,2,1,2]", output: "4" }
    ],
    hints: [
      "If we XOR a number with itself, the result is 0.",
      "XOR all numbers in the array; duplicates cancel out, leaving the single element."
    ],
    editorial: "Bitwise XOR. A ^ A = 0, A ^ 0 = A. Time complexity: O(N), Space complexity: O(1).",
    videoUrl: "https://www.youtube.com/embed/qWGlHxYZOEs"
  },
  {
    id: "38",
    title: "Number of 1 Bits",
    titleSlug: "number-of-1-bits",
    difficulty: "Easy",
    acceptanceRate: 68.5,
    tags: ["Bit Manipulation"],
    companies: ["Microsoft", "Apple"],
    description: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
    constraints: ["The input must be a binary string of length 32."],
    examples: [
      {
        input: "n = 11 (binary: 00000000000000000000000000001011)",
        output: "3"
      }
    ],
    codeTemplates: {
      python: "def hammingWeight(n: int) -> int:\n    # Write code here\n    return 0",
      javascript: "function hammingWeight(n) {\n    // Write code here\n    return 0;\n}"
    },
    testCases: [
      { input: "11", output: "3" }
    ],
    hints: [
      "Use bitwise operations like shift and mask.",
      "An optimized way is n & (n - 1), which clears the lowest set bit."
    ],
    editorial: "Using n & (n - 1) in a loop until n becomes 0. Time: O(number of 1s), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/5Km3utixwZs"
  },
  {
    id: "39",
    title: "Counting Bits",
    titleSlug: "counting-bits",
    difficulty: "Easy",
    acceptanceRate: 77.1,
    tags: ["Bit Manipulation", "DP"],
    companies: ["Google", "Tesla"],
    description: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1 bits in the binary representation of i.",
    constraints: ["0 <= n <= 10^5"],
    examples: [
      {
        input: "n = 2",
        output: "[0,1,1]"
      }
    ],
    codeTemplates: {
      python: "def countBits(n: int) -> list[int]:\n    # Write code here\n    return []",
      javascript: "function countBits(n) {\n    // Write code here\n    return [];\n}"
    },
    testCases: [
      { input: "2", output: "[0,1,1]" }
    ],
    hints: [
      "Think about how odd and even numbers relate to their 1 bits.",
      "For even i, ans[i] == ans[i >> 1]. For odd i, ans[i] == ans[i >> 1] + 1."
    ],
    editorial: "1D DP relation: dp[i] = dp[i >> 1] + (i & 1). Time complexity is O(N), Space is O(1) auxiliary space.",
    videoUrl: "https://www.youtube.com/embed/ryz_jqp0t3M"
  },
  {
    id: "40",
    title: "Reverse Bits",
    titleSlug: "reverse-bits",
    difficulty: "Easy",
    acceptanceRate: 56.9,
    tags: ["Bit Manipulation"],
    companies: ["Microsoft", "NVIDIA"],
    description: "Reverse bits of a given 32 bits unsigned integer.",
    constraints: ["The input must be a 32-bit integer."],
    examples: [
      {
        input: "n = 43261596",
        output: "964176192"
      }
    ],
    codeTemplates: {
      python: "def reverseBits(n: int) -> int:\n    # Write code here\n    return 0",
      javascript: "function reverseBits(n) {\n    // Write code here\n    return 0;\n}"
    },
    testCases: [
      { input: "43261596", output: "964176192" }
    ],
    hints: [
      "Loop 32 times.",
      "Retrieve the last bit of n using bitwise AND, shift the result left, and shift n right."
    ],
    editorial: "Process all 32 bits: result = (result << 1) | (n & 1); n >>= 1. Time: O(1) (fixed 32 loops), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/UcoN6yVQgEs"
  },
  {
    id: "41",
    title: "Palindrome Number",
    titleSlug: "palindrome-number",
    difficulty: "Easy",
    acceptanceRate: 54.8,
    tags: ["Math"],
    companies: ["Adobe", "Google"],
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    examples: [
      {
        input: "x = 121",
        output: "true"
      },
      {
        input: "x = -121",
        output: "false"
      }
    ],
    codeTemplates: {
      python: "def isPalindrome(x: int) -> bool:\n    # Write code here\n    return False",
      javascript: "function isPalindrome(x) {\n    // Write code here\n    return false;\n}"
    },
    testCases: [
      { input: "121", output: "true" },
      { input: "-121", output: "false" }
    ],
    hints: [
      "Negative numbers are not palindromes due to negative signs.",
      "Reverse the integer mathematically and compare to original. To prevent overflow, reverse only half of the integer."
    ],
    editorial: "Reverse the second half of the number and check if it matches the first half. Time: O(log N), Space: O(1).",
    videoUrl: "https://www.youtube.com/embed/yubRKwEgpJJ"
  },
  {
    id: "42",
    title: "Fizz Buzz",
    titleSlug: "fizz-buzz",
    difficulty: "Easy",
    acceptanceRate: 70.9,
    tags: ["Math"],
    companies: ["Amazon", "Goldman Sachs"],
    description: "Given an integer n, return a string array answer (1-indexed) where:\n- answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.\n- answer[i] == 'Fizz' if i is divisible by 3.\n- answer[i] == 'Buzz' if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.",
    constraints: ["1 <= n <= 10^4"],
    examples: [
      {
        input: "n = 3",
        output: "['1','2','Fizz']"
      }
    ],
    codeTemplates: {
      python: "def fizzBuzz(n: int) -> list[str]:\n    # Write code here\n    return []",
      javascript: "function fizzBuzz(n) {\n    // Write code here\n    return [];\n}"
    },
    testCases: [
      { input: "3", output: "['1','2','Fizz']" }
    ],
    hints: [
      "Loop from 1 to n.",
      "Use modular arithmetic `%` to check conditions in correct order."
    ],
    editorial: "Simple string concatenation or nested modular checks. Time complexity: O(N), Space: O(1) auxiliary.",
    videoUrl: "https://www.youtube.com/embed/QPZ0pIK_wsc"
  },
  {
    id: "43",
    title: "Pow(x, n)",
    titleSlug: "pow-x-n",
    difficulty: "Medium",
    acceptanceRate: 33.5,
    tags: ["Math", "Recursion"],
    companies: ["Facebook", "LinkedIn"],
    description: "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    constraints: ["-100.0 < x < 100.0", "-2^31 <= n <= 2^31 - 1", "n is an integer.", "Either x is not zero or n > 0.", "-10^4 <= x^n <= 10^4"],
    examples: [
      {
        input: "x = 2.00000, n = 10",
        output: "1024.00000"
      }
    ],
    codeTemplates: {
      python: "def myPow(x: float, n: int) -> float:\n    # Write code here\n    return 0.0",
      javascript: "function myPow(x, n) {\n    // Write code here\n    return 0.0;\n}"
    },
    testCases: [
      { input: "2.0\n10", output: "1024.0" }
    ],
    hints: [
      "Use binary exponentiation (divide-and-conquer).",
      "If n is even, pow(x, n) = pow(x * x, n / 2). If odd, pow(x, n) = x * pow(x * x, (n-1)/2). Handle negative n properly."
    ],
    editorial: "Binary exponentiation. Time complexity is O(log N). Space complexity is O(log N) for recursive or O(1) for iterative.",
    videoUrl: "https://www.youtube.com/embed/g9YQyYi4IQQ"
  },
  {
    id: "44",
    title: "Sqrt(x)",
    titleSlug: "sqrt-x",
    difficulty: "Easy",
    acceptanceRate: 37.8,
    tags: ["Binary Search", "Math"],
    companies: ["Microsoft", "Bloomberg"],
    description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.",
    constraints: ["0 <= x <= 2^31 - 1"],
    examples: [
      {
        input: "x = 8",
        output: "2",
        explanation: "The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned."
      }
    ],
    codeTemplates: {
      python: "def mySqrt(x: int) -> int:\n    # Write code here\n    return 0",
      javascript: "function mySqrt(x) {\n    // Write code here\n    return 0;\n}"
    },
    testCases: [
      { input: "8", output: "2" },
      { input: "4", output: "2" }
    ],
    hints: [
      "Use binary search from 1 to x.",
      "If mid * mid <= x, it could be the answer. Try to search in the right half to find a larger integer."
    ],
    editorial: "Binary search space: [1, x]. Adjust left and right bounds using integer division comparison mid <= x/mid to avoid overflow. Time: O(log X).",
    videoUrl: "https://www.youtube.com/embed/u7dD-Fyl2W0"
  },
  {
    id: "45",
    title: "Department Highest Salary",
    titleSlug: "department-highest-salary",
    difficulty: "Medium",
    acceptanceRate: 50.8,
    tags: ["SQL"],
    companies: ["Amazon", "Google", "Oracle"],
    description: "Write a SQL query to find employees who have the highest salary in each of the departments. The output schema is Department, Employee, Salary.",
    constraints: ["Department table has columns: id, name.", "Employee table has columns: id, name, salary, departmentId."],
    examples: [
      {
        input: "Employee and Department tables populated in database",
        output: "Department, Employee, Salary fields"
      }
    ],
    codeTemplates: {
      sql: "-- Write your SQL query here\nSELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.departmentId = d.id\nWHERE (e.departmentId, e.salary) IN (\n    SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentId\n);"
    },
    testCases: [
      { input: "DB Schema details", output: "Query matches output" }
    ],
    hints: [
      "Use GROUP BY to retrieve the maximum salary per department.",
      "Use an IN clause or JOIN on both departmentId and salary to filter original table rows."
    ],
    editorial: "Using subquery containing MAX(salary) grouped by departmentId. Joining with Employee and Department tables completes details.",
    videoUrl: "https://www.youtube.com/embed/7VskwW-x-qM"
  },
  {
    id: "46",
    title: "Combine Two Tables",
    titleSlug: "combine-two-tables",
    difficulty: "Easy",
    acceptanceRate: 74.5,
    tags: ["SQL"],
    companies: ["Apple", "IBM"],
    description: "Write a SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.",
    constraints: ["Person table has columns: personId, lastName, firstName.", "Address table has columns: addressId, personId, city, state."],
    examples: [
      {
        input: "Person and Address database schemas",
        output: "Report containing firstName, lastName, city, state"
      }
    ],
    codeTemplates: {
      sql: "-- Write your SQL query here\nSELECT p.firstName, p.lastName, a.city, a.state\nFROM Person p\nLEFT JOIN Address a ON p.personId = a.personId;"
    },
    testCases: [
      { input: "DB Schema details", output: "Query matches output" }
    ],
    hints: [
      "Use an OUTER JOIN since we want to report null if the address is not present in the secondary table.",
      "A LEFT OUTER JOIN on personId is perfect here."
    ],
    editorial: "A standard LEFT JOIN returns all rows from the left table (Person), and matching rows from the right table (Address).",
    videoUrl: "https://www.youtube.com/embed/fAruA4k42y4"
  },
  {
    id: "47",
    title: "Customers Who Never Order",
    titleSlug: "customers-who-never-order",
    difficulty: "Easy",
    acceptanceRate: 68.9,
    tags: ["SQL"],
    companies: ["TCS", "Infosys"],
    description: "Write a SQL query to report all customers who never order anything. Return a table of columns under the name Customers.",
    constraints: ["Customers table has columns: id, name.", "Orders table has columns: id, customerId."],
    examples: [
      {
        input: "Customers and Orders table data",
        output: "Customers with no orders matching their ID"
      }
    ],
    codeTemplates: {
      sql: "-- Write your SQL query here\nSELECT name AS Customers\nFROM Customers\nWHERE id NOT IN (\n    SELECT customerId FROM Orders\n);"
    },
    testCases: [
      { input: "DB Schema details", output: "Query matches output" }
    ],
    hints: [
      "Use a subquery to select all customerIds from the Orders table.",
      "Query Customers where id NOT IN this subquery, or use a LEFT JOIN checking for NULL order IDs."
    ],
    editorial: "Standard NOT IN subquery or LEFT JOIN ... WHERE Orders.id IS NULL. NOT IN is highly readable and performs well when indexes are set.",
    videoUrl: "https://www.youtube.com/embed/s81uOclN5P0"
  },
  {
    id: "48",
    title: "Design TinyURL (URL Shortener)",
    titleSlug: "design-tinyurl-url-shortener",
    difficulty: "Medium",
    acceptanceRate: 82.1,
    tags: ["System Design"],
    companies: ["Google", "Facebook", "Twitter", "Amazon"],
    description: "Design a client-server distributed system that generates short URLs from long links. Provide description of database design, key-generation service, API endpoints, scalability, and redirection caching.",
    constraints: ["High Availability", "Low Latency redirection (< 100ms)", "Scalable up to millions of requests per day."],
    examples: [
      {
        input: "Writeup detailing key components",
        output: "Approved architecture description"
      }
    ],
    codeTemplates: {
      text: "# System Design: URL Shortener (TinyURL)\n\n## 1. Requirements & Goals\n- **Functional**: Shorten long URL, redirect to original URL, custom alias.\n- **Non-Functional**: High availability, low latency, unique IDs.\n\n## 2. API Design\n- `createURL(longUrl, customAlias)`\n- `getUrl(shortUrl)` (Redirection HTTP 302)\n\n## 3. High-level Design\n# Enter your architecture layout details here..."
    },
    testCases: [
      { input: "TinyURL architecture design", output: "success" }
    ],
    hints: [
      "Discuss base-62 encoding (a-z, A-Z, 0-9).",
      "Incorporate caching using Redis to speed up redirection.",
      "Explain how to avoid collisions using a distributed Key Generation Service (KGS)."
    ],
    editorial: "Standard URL Shortener design: Client -> Load Balancer -> Web Server -> Caching/DB. KGS pre-allocates keys to prevent duplicates.",
    videoUrl: "https://www.youtube.com/embed/fMZMn_0WlhU"
  },
  {
    id: "49",
    title: "Design a Key-Value Store",
    titleSlug: "design-a-key-value-store",
    difficulty: "Hard",
    acceptanceRate: 68.2,
    tags: ["System Design"],
    companies: ["Amazon", "Microsoft", "Meta"],
    description: "Design a highly scalable, distributed, partition-tolerant key-value store database system. Address quorum reads/writes, replica syncing, consistent hashing, conflict resolution, and data partitioning.",
    constraints: ["Follows CAP theorem tradeoffs.", "High scalability and write throughput.", "Tunable consistency."],
    examples: [
      {
        input: "KeyValue store architecture design document",
        output: "Approved consistent hashing schema details"
      }
    ],
    codeTemplates: {
      text: "# System Design: Distributed Key-Value Store\n\n## 1. Core Architecture\n- **Data Partitioning**: Consistent hashing.\n- **Data Replication**: Masterless replication using Dynamo style vector clocks.\n- **Consistency**: Tunable quorum (W + R > N).\n\n## 2. Partitioning Details\n# Enter consistent hashing and ring management details here..."
    },
    testCases: [
      { input: "Key-value store architecture writeup", output: "success" }
    ],
    hints: [
      "Explain how consistent hashing minimizes keys re-mapping during scale-up.",
      "Detail how Vector Clocks resolve conflicts when multiple versions exist.",
      "Describe sloppy quorum and hinted handoff."
    ],
    editorial: "Amazon Dynamo-style DB design. Focuses on masterless architectures, gossip protocols for membership, and quorum voting rules.",
    videoUrl: "https://www.youtube.com/embed/rnZmdmlR-2M"
  },
  {
    id: "50",
    title: "Design a Chat System",
    titleSlug: "design-a-chat-system",
    difficulty: "Hard",
    acceptanceRate: 72.1,
    tags: ["System Design"],
    companies: ["Meta", "Apple", "Slack"],
    description: "Design a scalable real-time chat application (like WhatsApp or Slack) supporting group messages, read receipts, online/offline status indicator, and media file transfer.",
    constraints: ["Real-time message delivery (< 100ms)", "Message ordering validation", "Storage scalability for massive historical chat files."],
    examples: [
      {
        input: "Chat server layout with WebSockets",
        output: "Approved real-time architecture draft"
      }
    ],
    codeTemplates: {
      text: "# System Design: Real-Time Chat Application\n\n## 1. Protocols & Channels\n- **WebSockets**: Bi-directional connection for low-latency messages.\n- **Long Polling / HTTP**: Backup protocols.\n\n## 2. Services List\n- Chat Server, Presence Service, Push Notification Server, Media Storage Server.\n\n## 3. Database Schema\n# Enter database configuration details here..."
    },
    testCases: [
      { input: "Real-time chat server layout", output: "success" }
    ],
    hints: [
      "Use WebSockets for real-time bi-directional messaging.",
      "Store messages in a wide-column NoSQL DB like Cassandra to handle high write rates.",
      "Use a Key-Value cache for presence states (online/offline status)."
    ],
    editorial: "WebSocket connections are maintained by chat servers. Message queues broker events. Presence service uses heartbeat signals to track user state.",
    videoUrl: "https://www.youtube.com/embed/vvhC64hQ9yc"
  },
  {
    id: "51",
    title: "Invert Binary Tree",
    titleSlug: "invert-binary-tree",
    difficulty: "Easy",
    acceptanceRate: 75.9,
    tags: ["Trees"],
    companies: ["Google", "Amazon", "Microsoft"],
    description: "Given the root of a binary tree, invert the tree, and return its root.",
    constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]"
      }
    ],
    codeTemplates: {
      python: "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\ndef invertTree(root):\n    # Write your code here\n    return None",
      javascript: "function invertTree(root) {\n    // Write your code here\n    return null;\n}"
    },
    testCases: [
      { input: "[4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }
    ],
    hints: [
      "Invert left and right subtrees recursively.",
      "Swap the left child and right child of the current node."
    ],
    editorial: "Recursive swap. Swap left and right nodes, then call invertTree recursively. Time: O(N), Space: O(H) where H is tree height.",
    videoUrl: "https://www.youtube.com/embed/f3GeW_9jCqU"
  },
  {
    id: "52",
    title: "Maximum Depth of Binary Tree",
    titleSlug: "maximum-depth-of-binary-tree",
    difficulty: "Easy",
    acceptanceRate: 74.8,
    tags: ["Trees", "BFS", "DFS"],
    companies: ["Goldman Sachs", "Google", "Amazon"],
    description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-100 <= Node.val <= 100"],
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3"
      }
    ],
    codeTemplates: {
      python: "def maxDepth(root) -> int:\n    # Write your code here\n    return 0",
      javascript: "function maxDepth(root) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[3,9,20,null,null,15,7]", output: "3" }
    ],
    hints: [
      "Use DFS recursion to find the maximum depth of left and right subtrees.",
      "Maximum depth is 1 + max(depth(left), depth(right))."
    ],
    editorial: "Recursive depth calculation. The depth is calculated as 1 + max of left and right child depths. Time: O(N), Space: O(H).",
    videoUrl: "https://www.youtube.com/embed/hTM3phVI6Oc"
  },
  {
    id: "53",
    title: "Lowest Common Ancestor of a Binary Tree",
    titleSlug: "lowest-common-ancestor-of-a-binary-tree",
    difficulty: "Medium",
    acceptanceRate: 59.8,
    tags: ["Trees", "DFS", "Recursion"],
    companies: ["Google", "Facebook", "Amazon", "Microsoft"],
    description: "Given a binary tree, find the lowest common ancestor (LCA) node of two given nodes in the tree. According to the definition of LCA on Wikipedia: The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants.",
    constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p and q will exist in the tree and p != q."],
    examples: [
      {
        input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        output: "3",
        explanation: "The LCA of nodes 5 and 1 is 3."
      }
    ],
    codeTemplates: {
      python: "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\ndef lowestCommonAncestor(root, p, q):\n    # Write your code here\n    return None",
      javascript: "function lowestCommonAncestor(root, p, q) {\n    // Write your code here\n    return null;\n}"
    },
    testCases: [
      { input: "[3,5,1,6,2,0,8,null,null,7,4]\n5\n1", output: "3" }
    ],
    hints: [
      "Traverse the tree in a post-order fashion recursively.",
      "If the current node matches p or q, return the current node.",
      "If left and right child recursive calls both return non-null values, then the current node is the LCA."
    ],
    editorial: "Post-order recursive traversal. Returns non-null if subtree contains p or q. If both left and right return non-null, root is LCA. Time: O(N), Space: O(H).",
    videoUrl: "https://www.youtube.com/embed/13m9ZCB8gjw"
  },
  {
    id: "54",
    title: "Kth Largest Element in an Array",
    titleSlug: "kth-largest-element-in-an-array",
    difficulty: "Medium",
    acceptanceRate: 66.5,
    tags: ["Sorting", "Queues", "Arrays"],
    companies: ["Facebook", "Amazon", "Microsoft", "Google"],
    description: "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    constraints: ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5"
      }
    ],
    codeTemplates: {
      python: "def findKthLargest(nums: list[int], k: int) -> int:\n    # Write your code here\n    return 0",
      javascript: "function findKthLargest(nums, k) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[3,2,1,5,6,4]\n2", output: "5" }
    ],
    hints: [
      "Sort the array in descending order, then retrieve index k-1.",
      "For a more optimal solution, use a min-heap of size k to keep track of the largest k elements, achieving O(N log k) time."
    ],
    editorial: "Max-Heap, Min-Heap, or Quickselect partition algorithms. Quickselect average time is O(N) but worst-case is O(N^2). Min-Heap size k takes O(N log K) time and O(K) space.",
    videoUrl: "https://www.youtube.com/embed/XEmy13g1Qxc"
  },
  {
    id: "55",
    title: "Validate Binary Search Tree",
    titleSlug: "validate-binary-search-tree",
    difficulty: "Medium",
    acceptanceRate: 32.5,
    tags: ["Trees", "DFS", "Recursion"],
    companies: ["Google", "Amazon", "Microsoft"],
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys less than the node's key.\n- The right subtree of a node contains only nodes with keys greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.",
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-2^31 <= Node.val <= 2^31 - 1"],
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true"
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
        explanation: "The root node's value is 5 but its right child's value is 4."
      }
    ],
    codeTemplates: {
      python: "def isValidBST(root) -> bool:\n    # Write your code here\n    return True",
      javascript: "function isValidBST(root) {\n    // Write your code here\n    return true;\n}"
    },
    testCases: [
      { input: "[2,1,3]", output: "true" },
      { input: "[5,1,4,null,null,3,6]", output: "false" }
    ],
    hints: [
      "Pass min and max bounds recursively down the tree.",
      "For the left child, the max bound becomes the parent's value. For the right child, the min bound becomes the parent's value."
    ],
    editorial: "Recursion with min/max range boundaries. Ensures every node satisfies lower < node.val < upper. Time: O(N), Space: O(H).",
    videoUrl: "https://www.youtube.com/embed/s6ATEkipzow"
  },
  {
    id: "56",
    title: "Rotting Oranges",
    titleSlug: "rotting-oranges",
    difficulty: "Medium",
    acceptanceRate: 53.2,
    tags: ["Graphs", "BFS", "Arrays"],
    companies: ["Amazon", "Microsoft", "Google"],
    description: "You are given an m x n grid where each cell can have one of three values:\n- 0 representing an empty cell,\n- 1 representing a fresh orange, or\n- 2 representing a rotten orange.\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 10", "grid[i][j] is 0, 1, or 2."],
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4"
      }
    ],
    codeTemplates: {
      python: "def orangesRotting(grid: list[list[int]]) -> int:\n    # Write your code here\n    return -1",
      javascript: "function orangesRotting(grid) {\n    // Write your code here\n    return -1;\n}"
    },
    testCases: [
      { input: "[[2,1,1],[1,1,0],[0,1,1]]", output: "4" }
    ],
    hints: [
      "Use a queue to perform a multi-source Breadth-First Search (BFS).",
      "Queue all initial rotten oranges first. Keep track of the number of fresh oranges and decrement it as you rot neighbors."
    ],
    editorial: "Multi-source BFS traversal. Tracks time elapsed using queue boundaries. If freshCount is 0 at the end, return elapsed time; else -1. Time: O(M * N), Space: O(M * N).",
    videoUrl: "https://www.youtube.com/embed/y704fEOx0s0"
  },
  {
    id: "57",
    title: "House Robber",
    titleSlug: "house-robber",
    difficulty: "Medium",
    acceptanceRate: 50.1,
    tags: ["DP", "Arrays"],
    companies: ["Google", "Amazon", "Microsoft", "Adobe"],
    description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.",
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 400"],
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
        explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."
      }
    ],
    codeTemplates: {
      python: "def rob(nums: list[int]) -> int:\n    # Write your code here\n    return 0",
      javascript: "function rob(nums) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "[1,2,3,1]", output: "4" },
      { input: "[2,7,9,3,1]", output: "12" }
    ],
    hints: [
      "This is a classic DP problem: at each house, decide whether to rob it or skip it.",
      "If you rob the current house, your max money is nums[i] + maxRobbed[i-2]. If you skip it, it is maxRobbed[i-1]."
    ],
    editorial: "1D Dynamic Programming. Recurrence: dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Space can be optimized to O(1) by keeping just two variables. Time: O(N).",
    videoUrl: "https://www.youtube.com/embed/73r3KqWX_QQ"
  },
  {
    id: "58",
    title: "Unique Paths",
    titleSlug: "unique-paths",
    difficulty: "Medium",
    acceptanceRate: 63.8,
    tags: ["DP", "Math"],
    companies: ["Google", "Meta", "Netflix"],
    description: "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.",
    constraints: ["1 <= m, n <= 100"],
    examples: [
      {
        input: "m = 3, n = 7",
        output: "28"
      }
    ],
    codeTemplates: {
      python: "def uniquePaths(m: int, n: int) -> int:\n    # Write your code here\n    return 0",
      javascript: "function uniquePaths(m, n) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "3\n7", output: "28" }
    ],
    hints: [
      "To reach cell (r, c), you must arrive from (r-1, c) or (r, c-1).",
      "Mathematically, this can be solved using combinations: (m + n - 2) choose (m - 1)."
    ],
    editorial: "2D Dynamic Programming. grid[r][c] = grid[r-1][c] + grid[r][c-1]. Alternatively, combinatorics formula: (m + n - 2)! / ((m - 1)! * (n - 1)!). Time: O(M * N) or O(Min(M, N)), Space: O(N) or O(1).",
    videoUrl: "https://www.youtube.com/embed/IlEsdFT_aZg"
  },
  {
    id: "59",
    title: "LRU Cache",
    titleSlug: "lru-cache",
    difficulty: "Hard",
    acceptanceRate: 41.5,
    tags: ["Linked Lists", "Hash Table", "System Design"],
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Apple"],
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.\n- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key.",
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5", "At most 2 * 10^5 calls will be made to get and put."],
    examples: [
      {
        input: "[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]",
        output: "[null, null, null, 1, null, -1, null, -1, 3, 4]"
      }
    ],
    codeTemplates: {
      python: "class LRUCache:\n    def __init__(self, capacity: int):\n        # Initialize cache here\n        pass\n\n    def get(self, key: int) -> int:\n        # Write code here\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        # Write code here\n        pass",
      javascript: "class LRUCache {\n    constructor(capacity) {}\n    get(key) { return -1; }\n    put(key, value) {}\n}"
    },
    testCases: [
      { input: "capacity=2\nput(1,1)\nput(2,2)\nget(1)", output: "1" }
    ],
    hints: [
      "To achieve O(1) time complexity for both get and put operations, combine a Hash Map with a Doubly Linked List.",
      "The Hash Map allows O(1) key lookups, and the Doubly Linked List allows O(1) additions/evictions at the head and tail."
    ],
    editorial: "Hash map maps key to nodes in a doubly linked list. Nodes are detached and moved to the head on access. On overflow, evict tail node. Time: O(1), Space: O(Capacity).",
    videoUrl: "https://www.youtube.com/embed/7ABFKPK2dx8"
  },
  {
    id: "60",
    title: "Longest Common Subsequence",
    titleSlug: "longest-common-subsequence",
    difficulty: "Medium",
    acceptanceRate: 58.9,
    tags: ["DP", "Strings"],
    companies: ["Google", "Amazon", "Apple"],
    description: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",
    constraints: ["1 <= text1.length, text2.length <= 1000", "text1 and text2 consist of only lowercase English characters."],
    examples: [
      {
        input: "text1 = \"abcde\", text2 = \"ace\"",
        output: "3",
        explanation: "The longest common subsequence is \"ace\" and its length is 3."
      }
    ],
    codeTemplates: {
      python: "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    # Write your code here\n    return 0",
      javascript: "function longestCommonSubsequence(text1, text2) {\n    // Write your code here\n    return 0;\n}"
    },
    testCases: [
      { input: "\"abcde\"\n\"ace\"", output: "3" }
    ],
    hints: [
      "Create a 2D grid of size (length1 + 1) x (length2 + 1).",
      "If text1[i] == text2[j], dp[i][j] = dp[i-1][j-1] + 1. Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1])."
    ],
    editorial: "Classic 2D DP LCS calculation. Time complexity is O(M * N). Space is optimized to O(N) by keeping only the current and previous rows.",
    videoUrl: "https://www.youtube.com/embed/Ua0GhsJSlWM"
  },
  {
    id: "61",
    title: "Subsets II",
    titleSlug: "subsets-ii",
    difficulty: "Medium",
    acceptanceRate: 56.4,
    tags: ["Backtracking", "Recursion", "Sorting"],
    companies: ["Amazon", "Microsoft", "Google"],
    description: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10"],
    examples: [
      {
        input: "nums = [1,2,2]",
        output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]"
      }
    ],
    codeTemplates: {
      python: "def subsetsWithDup(nums: list[int]) -> list[list[int]]:\n    # Write your code here\n    return []",
      javascript: "function subsetsWithDup(nums) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "[1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" }
    ],
    hints: [
      "Sort the array first to group duplicates together.",
      "In the backtracking recursion loop, skip duplicates: if i > start and nums[i] == nums[i-1], skip."
    ],
    editorial: "Sort array and apply recursive backtracking. Duplicates are skipped at the same recursive level. Time complexity: O(N * 2^N), Space: O(N) recursion stack.",
    videoUrl: "https://www.youtube.com/embed/Vn2v6ajA7U0"
  },
  {
    id: "62",
    title: "Daily Temperatures",
    titleSlug: "daily-temperatures",
    difficulty: "Medium",
    acceptanceRate: 66.2,
    tags: ["Stacks", "Arrays"],
    companies: ["Google", "Amazon", "Microsoft", "Meta"],
    description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    constraints: ["1 <= temperatures.length <= 10^5", "30 <= temperatures[i] <= 100"],
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]"
      }
    ],
    codeTemplates: {
      python: "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    # Write your code here\n    return []",
      javascript: "function dailyTemperatures(temperatures) {\n    // Write your code here\n    return [];\n}"
    },
    testCases: [
      { input: "[73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }
    ],
    hints: [
      "Use a monotonic decreasing stack to store the indices of the temperatures.",
      "Iterate through, and while the current temperature is warmer than the temperature at the top of the stack, pop from the stack and calculate difference."
    ],
    editorial: "Monotonic decreasing stack. Time complexity: O(N) because each index is pushed and popped at most once. Space: O(N).",
    videoUrl: "https://www.youtube.com/embed/cTBiBSJIyGg"
  }
];

// List of all coding tag options requested
const tagOptions = [
  "Arrays", "Hash Table", "Stacks", "Strings", "Linked Lists",
  "Recursion", "Two Pointers", "Sorting", "Trees", "BFS",
  "Graphs", "DFS", "DP", "Binary Search", "System Design",
  "Bit Manipulation", "Math", "SQL", "Backtracking", "Queues"
];

// List of hiring companies asked
const companyOptions = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix",
  "Uber", "Adobe", "Salesforce", "NVIDIA", "Atlassian", "Flipkart",
  "Goldman Sachs", "Morgan Stanley", "PayPal", "Walmart", "Oracle",
  "IBM", "Infosys", "TCS", "Accenture"
];

// Combine all problems (exactly 62 high quality distinct questions, no programmatically duplicated mock questions)
export const problems: Problem[] = [...detailedProblems];
