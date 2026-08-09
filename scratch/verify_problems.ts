import { problems } from "../src/data/problems";

const tagOptions = [
  "Arrays", "Hash Table", "Stacks", "Strings", "Linked Lists",
  "Recursion", "Two Pointers", "Sorting", "Trees", "BFS",
  "Graphs", "DFS", "DP", "Binary Search", "System Design",
  "Bit Manipulation", "Math", "SQL", "Backtracking", "Queues"
];

const counts: { [tag: string]: number } = {};
tagOptions.forEach(t => counts[t] = 0);

problems.forEach(p => {
  p.tags.forEach(t => {
    if (counts[t] !== undefined) {
      counts[t]++;
    }
  });
});

console.log("Runtime Counts:");
console.log(JSON.stringify(counts, null, 2));
console.log("Total Problems:", problems.length);
