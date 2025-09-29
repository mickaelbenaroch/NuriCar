const fs = require('fs');
const path = require('path');

const appDir = './src/app';

// Recursive file finder
function getTsFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getTsFiles(fullPath));
    } else if (file.endsWith('.ts') && !file.endsWith('.spec.ts')) {
      files.push(fullPath);
    }
  });
  return files;
}

// Transform file
function makeStandalone(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;

  // Match @Component / @Pipe / @Directive with {...} including newlines
  const decoratorRegex = /@(Component|Pipe|Directive)\s*\(\s*{([\s\S]*?)}\s*\)/gm;

  content = content.replace(decoratorRegex, (match, type, inner) => {
    // Skip if standalone already exists
    if (/standalone\s*:\s*true/.test(inner)) return match;

    // Insert standalone: true at the start
    let newInner = `standalone: true, ${inner.trim()}`;
    updated = true;
    return `@${type}({${newInner}})`;
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Made standalone: ${filePath}`);
  }
}

// Main
const files = getTsFiles(appDir);
files.forEach(makeStandalone);
console.log(`\nDone! Processed ${files.length} TypeScript files.`);
