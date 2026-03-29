#!/usr/bin/env node
/* ============================================================
   Daily English — Build Script
   Output: dist/education/dailyenglish/
   Usage:
     npm run build   — clean + copy all files to dist/
     npm run clean   — remove dist/ only
   ============================================================ */

const fs   = require('fs');
const path = require('path');

const SRC  = __dirname;
const DEST = path.join(__dirname, 'dist', 'education', 'dailyenglish');

/* Files and folders to exclude from the build output */
const EXCLUDE = new Set([
  'dist',
  'node_modules',
  'package.json',
  'package-lock.json',
  'build.js',
  '.git',
  '.gitignore',
  '.DS_Store',
  'README.md',
]);

/* ── Helpers ─────────────────────────────────────────────── */

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (EXCLUDE.has(entry.name)) continue;

    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function countFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countFiles(full);
    else count++;
  }
  return count;
}

/* ── Main ────────────────────────────────────────────────── */

const isCleanOnly = process.argv.includes('--clean');

console.log('');
console.log('Daily English — Build');
console.log('─'.repeat(50));

/* Always clean first */
console.log('Cleaning dist/ ...');
rmDir(path.join(__dirname, 'dist'));

if (isCleanOnly) {
  console.log('dist/ removed.');
  console.log('');
  process.exit(0);
}

/* Copy source → dist/education/dailyenglish/ */
console.log(`Copying files to dist/education/dailyenglish/ ...`);
copyDir(SRC, DEST);

const total = countFiles(DEST);
console.log(`Done. ${total} files copied.`);
console.log('');
console.log('Output directory:');
console.log(`  ${DEST}`);
console.log('');
console.log('Deploy contents of dist/ to your server root.');
console.log('The app will be served at:  /education/dailyenglish/');
console.log('─'.repeat(50));
console.log('');
