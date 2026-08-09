const fs = require('fs');
const path = require('path');

const problemsFile = path.join(__dirname, '../src/data/problems.ts');
const fileContent = fs.readFileSync(problemsFile, 'utf8');

// We can evaluate or parse the file to find the detailedProblems array
// Let's use a quick regex check to locate all example arrays in detailedProblems.
// Since detailedProblems is a static JSON-like array, let's extract it or search for 'examples: [' blocks.
const lines = fileContent.split('\n');
let currentTitle = '';
let inExamples = false;
let exampleLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('const tagOptions = [')) {
    // End of detailedProblems
    break;
  }
  if (line.includes('title: "')) {
    const match = line.match(/title:\s*"(.*?)"/);
    if (match) {
      currentTitle = match[1];
    }
  }
  if (line.includes('examples: [')) {
    inExamples = true;
    exampleLines = [line];
    continue;
  }
  if (inExamples) {
    exampleLines.push(line);
    if (line.includes('],')) {
      inExamples = false;
      // count number of '{' in exampleLines
      const text = exampleLines.join('\n');
      const matches = text.match(/\{/g);
      const count = matches ? matches.length : 0;
      if (count < 2) {
        console.log(`Problem "${currentTitle}" has only ${count} example(s).`);
      }
    }
  }
}
