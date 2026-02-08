---
description: Validate code changes before commit to prevent errors
---

# Code Validation Workflow

Run this workflow after making any changes to JavaScript files to ensure no syntax errors.

## Steps

// turbo
1. Run the validation script:
   ```
   node scripts/validate.js
   ```

2. Review the output:
   - ✅ = File passed
   - ❌ = Syntax error (must fix!)
   - ⚠️ = Warning (review recommended)

3. If errors are found:
   - Open the file mentioned in the error
   - Check for missing commas, brackets, or backticks
   - Re-run validation until all checks pass

// turbo
4. Run a local test server to verify:
   ```
   npx live-server --port=3000
   ```

5. Test in browser:
   - Open http://localhost:3000
   - Navigate through subjects
   - Check browser console for errors (F12)

// turbo
6. If all tests pass, commit changes:
   ```
   git add -A && git commit -m "Update: <description>" && git push origin master
   ```

## Common Errors

### Unclosed Template Literals
```javascript
// Wrong
content: `
    <div>Hello
// Missing closing backtick!

// Correct
content: `
    <div>Hello</div>
`
```

### Missing Commas Between Object Properties
```javascript
// Wrong
{
    title: "Lesson 1"  // Missing comma!
    content: `...`
}

// Correct
{
    title: "Lesson 1",
    content: `...`
}
```

### LaTeX Escaping in JavaScript Strings
```javascript
// Wrong - single backslash
content: `The formula is $\frac{a}{b}$`

// Correct - double backslash
content: `The formula is $\\frac{a}{b}$`
```
