/**
 * Validate.js - Code Validation Script for Sabrina's Math Portal
 * Run this after any code changes to catch errors before deployment
 * 
 * Usage: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

const CHAPTERS_DIR = path.join(__dirname, '..', 'data', 'chapters');
const ROOT_DIR = path.join(__dirname, '..');

let hasErrors = false;

console.log('🔍 Sabrina Math Portal - Code Validation\n');
console.log('='.repeat(50));

// 1. Check JavaScript Syntax for all chapter files
console.log('\n📁 Checking Chapter Files for Syntax Errors...\n');

const chapterFiles = fs.readdirSync(CHAPTERS_DIR).filter(f => f.endsWith('.js'));

chapterFiles.forEach(file => {
    const filePath = path.join(CHAPTERS_DIR, file);
    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Try to parse as a function to check syntax
        new Function(content);

        console.log(`  ✅ ${file}`);
    } catch (err) {
        console.log(`  ❌ ${file}: ${err.message}`);
        hasErrors = true;
    }
});

// 2. Check main JS files
console.log('\\n📁 Checking Core JavaScript Files...\\n');

const coreFiles = ['data.js', 'app.js', 'router.js', 'ui-render.js', 'tutor-engine.js', 'lessons.js'];

coreFiles.forEach(file => {
    const filePath = path.join(ROOT_DIR, file);
    if (fs.existsSync(filePath)) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            new Function(content);
            console.log(`  ✅ ${file}`);
        } catch (err) {
            console.log(`  ❌ ${file}: ${err.message}`);
            hasErrors = true;
        }
    } else {
        console.log(`  ⚠️ ${file}: File not found`);
    }
});

// 3. Check for common LaTeX escaping issues
console.log('\\n🔬 Checking for LaTeX Escaping Issues...\\n');

const latexPatterns = [
    { pattern: /\\(?!\\)frac/g, issue: 'Single backslash in \\frac (should be \\frac in JS strings)' },
    { pattern: /\\(?!\\)cdot/g, issue: 'Single backslash in \\cdot' },
    { pattern: /\\(?!\\)times/g, issue: 'Single backslash in \\times' },
    { pattern: /\\(?!\\)sqrt/g, issue: 'Single backslash in \\sqrt' },
];

let latexIssues = 0;
chapterFiles.forEach(file => {
    const filePath = path.join(CHAPTERS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    latexPatterns.forEach(({ pattern, issue }) => {
        const matches = content.match(pattern);
        if (matches) {
            console.log(`  ⚠️ ${file}: ${issue} (${matches.length} occurrences)`);
            latexIssues++;
        }
    });
});

if (latexIssues === 0) {
    console.log('  ✅ No common LaTeX escaping issues found');
}

// 4. Check for unclosed template literals
console.log('\n📝 Checking for Unclosed Template Literals...\n');

chapterFiles.forEach(file => {
    const filePath = path.join(CHAPTERS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const backtickCount = (content.match(/`/g) || []).length;
    if (backtickCount % 2 !== 0) {
        console.log(`  ❌ ${file}: Unbalanced backticks (template literals) - count: ${backtickCount}`);
        hasErrors = true;
    }
});

console.log('  ✅ Template literals check complete');

// 5. Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
    console.log('\n❌ VALIDATION FAILED - Fix errors before deploying!\n');
    process.exit(1);
} else {
    console.log('\n✅ ALL CHECKS PASSED - Ready to deploy!\n');
    process.exit(0);
}
