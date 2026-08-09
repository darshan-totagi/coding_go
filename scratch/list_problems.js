const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/problems.ts'), 'utf8');

const problemBlocks = content.split('id: "');

const list = [];
problemBlocks.forEach((block, idx) => {
  if (idx === 0) return;
  const idMatch = block.match(/^([^"]+)"/);
  const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
  const diffMatch = block.match(/difficulty:\s*["'](Easy|Medium|Hard)["']/);
  const tagsMatch = block.match(/tags:\s*\[([^\]]+)\]/);
  
  if (idMatch && titleMatch && diffMatch) {
    const id = idMatch[1];
    const title = titleMatch[1];
    const diff = diffMatch[1];
    const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["']/g, '').trim()) : [];
    list.push({ id, title, diff, tags });
  }
});

console.log("Current Problems List:");
console.log(JSON.stringify(list, null, 2));
