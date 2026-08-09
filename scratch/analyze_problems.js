const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/problems.ts'), 'utf8');

// A simple regex approach to find all problems
const problemBlocks = content.split('id: "');

const topics = [
  "Stacks",
  "Strings",
  "Linked Lists",
  "Recursion",
  "Two Pointers",
  "Sorting",
  "Trees",
  "BFS",
  "Graphs",
  "DFS",
  "DP",
  "Binary Search",
  "Backtracking",
  "Queues",
  "Math",
  "Bit Manipulation",
  "SQL",
  "System Design"
];

const counts = {};
topics.forEach(t => {
  counts[t] = { Easy: 0, Medium: 0, Hard: 0 };
});

problemBlocks.forEach((block, idx) => {
  if (idx === 0) return; // leading text
  
  // Find difficulty
  const diffMatch = block.match(/difficulty:\s*["'](Easy|Medium|Hard)["']/);
  const diff = diffMatch ? diffMatch[1] : null;
  
  // Find tags
  const tagsMatch = block.match(/tags:\s*\[([^\]]+)\]/);
  if (tagsMatch && diff) {
    const tags = tagsMatch[1].split(',').map(t => t.replace(/["']/g, '').trim());
    tags.forEach(tag => {
      if (counts[tag]) {
        counts[tag][diff]++;
      }
    });
  }
});

console.log("Topic Difficulty Counts:");
console.log(JSON.stringify(counts, null, 2));
