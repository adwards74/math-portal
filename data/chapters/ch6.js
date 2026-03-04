window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch6"] = {
    unitQuiz: {
        title: "Chapter 6 Mastery: Polynomial Functions",
        levels: [
            {
                level: 1,
                question: "What is the end behavior of a polynomial $f(x) = -3x^5 + 2x^2 - 1$?",
                options: ["As $x \\to \\infty, f(x) \\to \\infty$; As $x \\to -\\infty, f(x) \\to -\\infty$", "As $x \\to \\infty, f(x) \\to -\\infty$; As $x \\to -\\infty, f(x) \\to \\infty$", "Both ends go to $\\infty$", "Both ends go to $-\\infty$"],
                answer: "As $x \\to \\infty, f(x) \\to -\\infty$; As $x \\to -\\infty, f(x) \\to \\infty$",
                explanation: "Odd degree ($n=5$) means ends go in opposite directions. Negative leading coefficient ($a=-3$) means it goes down on the right."
            },
            {
                level: 2,
                question: "According to the Rational Root Theorem, what are the possible rational roots of $y = 2x^3 + x^2 - 3$?",
                options: ["$\\pm 1, \\pm 3$", "$\\pm 1, \\pm 3, \\pm 1/2, \\pm 3/2$", "$\\pm 2, \\pm 1$", "No rational roots possible"],
                answer: "$\\pm 1, \\pm 3, \\pm 1/2, \\pm 3/2$",
                explanation: "Possible roots are $\\pm p/q$ where $p$ is a factor of 3 (constant) and $q$ is a factor of 2 (leading coefficient)."
            },
            {
                level: 3,
                question: "MASTERY CHALLENGE: If a polynomial $P(x)$ has a root at $2 + i$, what other root MUST it have (assuming real coefficients)? Explain the Fundamental Theorem of Algebra's implication on complex pairs.",
                template: "Root 1: 2 + i \\nRoot 2 must be... \\nReasoning...",
                answer: "Root 2 must be $2 - i$. Complex roots of polynomials with real coefficients always occur in conjugate pairs.",
                explanation: "This tests understanding of the Complex Conjugate Root Theorem, an Elite 6.0 mastery requirement."
            }
        ]
    },
    "ch6-1": {
        title: "6.1 Polynomial Essentials",
        subtitle: "Degrees, Coefficients & End Behavior",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-mountain"></i> The Horizon Rule</h3>
                    <p>End behavior is like looking at a mountain range from a distance. The smaller hills (lower-degree terms) vanish, and only the highest peak (leading term) defines the shape of the horizon. In calculus, this is why we focus on 'Growth Rates'.</p>
                </div>

                <h2>I. The Dominant Term Rule</h2>
                <p>The **End Behavior** of a polynomial is determined solely by its leading term $a_n x^n$. As $|x|$ becomes very large, the other terms become insignificant.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <ul class="glass-list">
                        <li><strong>Even Degree ($n$ even):</strong> Both ends go to $+\\infty$ (if $a_n>0$) or $-\\infty$ (if $a_n<0$).</li>
                        <li><strong>Odd Degree ($n$ odd):</strong> Ends go in opposite directions.</li>
                    </ul>
                    <p style="margin-top:10px; font-family: monospace;">As $x \\to \\infty, f(x) \\to \\infty$ (Notation of Calculus)</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-chart-line"></i> CS: Big O Dominance</h4>
                <p>In complexity analysis, $O(n^3 + n^2)$ is simplified to $O(n^3)$. Why? Because as $n$ grows, the cubic term grows so much faster that the quadratic term might as well be zero. Math "End Behavior" is the foundation of Algorithm Efficiency.</p>
            </div>

            <h2>II. Practice Problems</h2>
            <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 1:</strong> Determine the end behavior of $f(x) = 2x^4 - 3x^2 + 5$.</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Degree is 4 (Even), Leading Coefficient is 2 (Positive). Look at the Even Degree rule.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">As $x \\to \\infty, f(x) \\to \\infty$ and as $x \\to -\\infty, f(x) \\to \\infty$. (Both ends up)</p>
                    </details>
                </div>
                <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 2:</strong> Determine the end behavior of $f(x) = -x^3 + 10x$.</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Degree is 3 (Odd), Leading Coefficient is -1 (Negative). Odd degree ends go in opposite directions.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">As $x \\to \\infty, f(x) \\to -\\infty$ and as $x \\to -\\infty, f(x) \\to \\infty$.</p>
                    </details>
                </div>
            </div>
        `
    },
    "ch6-2": {
        title: "6.2 Polynomials & Linear Factors",
        subtitle: "The Remainder Theorem & Checksums",
        content: `
            <div class="lesson-section">
                <h2>I. The Remainder & Factor Theorems</h2>
                <p>The <strong>Remainder Theorem</strong> is an elegant shortcut: $f(c)$ is the remainder when $f(x)$ is divided by $(x - c)$.</p>
                
                <div class="proof-box glass">
                    <h4>The Algebraic Proof</h4>
                    <p>By division algorithm: $f(x) = (x - c)q(x) + r$.</p>
                    <p>Plug in $x = c$: $f(c) = (c - c)q(c) + r = 0 \\cdot q(c) + r = r$.</p>
                    <p><strong>Conclusion:</strong> $f(c) = r$. This is why evaluating a function is the same as finding a remainder!</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Find the remainder when $f(x) = x^3 - 2x^2 + 5x - 7$ is divided by $(x - 2)$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use the Remainder Theorem: simply calculate $f(2)$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$f(2) = 2^3 - 2(2^2) + 5(2) - 7 = 8 - 8 + 10 - 7 = 3$. The remainder is 3.</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Is $(x + 1)$ a factor of $x^{10} - 1$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Check if $f(-1) = 0$. If the remainder is zero, it's a factor.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$f(-1) = (-1)^{10} - 1 = 1 - 1 = 0$. <strong>Yes</strong>, $(x+1)$ is a factor.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch6-3": {
        title: "6.3 Synthetic Division",
        subtitle: "The Optimized Division Algorithm",
        content: `
            <div class="lesson-section">
                <h2>I. The Pipelined Division</h2>
                <p>Synthetic division is an optimized version of Long Division. By eliminating the variables and focusing only on coefficients, we reduce the problem to a series of <strong>Multiply-and-Add</strong> operations.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-microchip"></i> Hardware Parallelism</h4>
                    <p>In CPU design, synthetic division (Horner's Method) is preferred because it avoids expensive power calculations ($x^n$). It uses a "stream" of data: take coefficient, multiply by $c$, add next coefficient, repeat. It's a perfect example of an iterative algorithm.</p>
                </div>

                <h2>II. Worked Example</h2>
                <div class="proof-box glass" style="margin-top:15px; border-left-color: var(--accent-blue);">
                    <p>Divide $(2x^3 - 5x^2 - x + 3)$ by $(x - 3)$</p>
                    <ol class="glass-list">
                        <li>Root is $3$. Write coefficients: $2, -5, -1, 3$.</li>
                        <li>Bring down the first number ($2$).</li>
                        <li>Multiply by $3$: $2 \\times 3 = 6$. Add to next coeff: $-5 + 6 = 1$.</li>
                        <li>Multiply by $3$: $1 \\times 3 = 3$. Add to next coeff: $-1 + 3 = 2$.</li>
                        <li>Multiply by $3$: $2 \\times 3 = 6$. Add to next coeff: $3 + 6 = 9$.</li>
                        <li><strong>Quotient:</strong> $2x^2 + x + 2$, <strong>Remainder:</strong> $9$</li>
                    </ol>
                </div>

                <h2>III. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Use synthetic division: $(x^3 + 4x^2 - 5x + 3) \\div (x + 2)$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use $-2$ as the root. Coeffs: $1, 4, -5, 3$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">Quotient: $x^2 + 2x - 9$, Remainder: $21$.</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Evaluate $f(3)$ for $f(x) = x^4 - 2x^2 + 5$ using synthetic division.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Don't forget the zero coefficients for $x^3$ and $x^1$: $1, 0, -2, 0, 5$. Use root $3$. The remainder is the answer.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">Remainder is $68$. $f(3) = 68$.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch6-4": {
        title: "6.4 Factoring Polynomials",
        subtitle: "Sum/Difference of Cubes & Quartic Forms",
        content: `
            <div class="lesson-section">
                <h2>I. The Factoring Toolkit</h2>
                <p>Factoring is the process of breaking down a complex signal into its base components (Linear Factors). Mastering special patterns allows for rapid decomposition.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <ul class="glass-list">
                        <li><strong>Sum/Diff of Cubes:</strong> $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$</li>
                        <li><strong>Grouping:</strong> Used when four or more terms share partial commonality.</li>
                        <li><strong>Quartic Forms:</strong> Treat $x^4 + 5x^2 + 4$ as a quadratic in terms of $x^2$.</li>
                    </ul>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Factor $x^3 + 8$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">This is a sum of cubes: $x^3 + 2^3$. Use $(a+b)(a^2 - ab + b^2)$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(x + 2)(x^2 - 2x + 4)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Factor by grouping: $x^3 + 2x^2 + 5x + 10$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Group the first two and last two: $(x^3 + 2x^2) + (5x + 10)$. Factor out the GCF from each pair.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x^2(x+2) + 5(x+2) = (x^2 + 5)(x + 2)$.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch6-5": {
        title: "6.5 Theorems About Roots",
        subtitle: "Conjugate Pairs & Descartes' Rule",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-yin-yang"></i> The Conjugate Balance</h3>
                    <p>Complex roots always come in pairs? Like matter and anti-matter. If $2 + 3i$ exists, $2 - 3i$ must also exist to ensure the polynomial's 'Real' structure remains stable. This is the **Law of Symmetry** in Algebra.</p>
                </div>

                <h2>I. Symmetry of the Solution Space</h2>
                <p>If a polynomial has real coefficients, the <strong>Complex Conjugate Root Theorem</strong> states that if $a + bi$ is a root, $a - bi$ must also be a root.</p>
                
                <div class="proof-box glass">
                    <p>This symmetry arises because complex roots represent "missing" intersections with the real X-axis. They exist in pairs to maintain the real-valued nature of the coefficients.</p>
                </div>
            </div>
        `
    },
    "ch6-6": {
        title: "6.6 Rational Root Theorem",
        subtitle: "Pruned Search Algorithm",
        content: `
            <div class="lesson-section">
                <h2>I. The $p/q$ Heuristic</h2>
                <p>How do we start solving $3x^4 - 2x^2 + 5 = 0$? The <strong>Rational Root Theorem</strong> provides a finite list of candidates.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-green);">
                    <h4><i class="fas fa-search"></i> Pruned Search Space</h4>
                    <p>Instead of testing an infinite set of numbers, you only test $\\pm \\text{factors of constant} / \\text{factors of leading coeff}$. In AI, this is **Branch Pruning** — eliminating billions of impossible paths to find the single correct leaf node quickly.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> List all possible rational roots for $f(x) = 2x^3 + 3x^2 - 1$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$p$ is factors of 1: $\\{\\pm 1\\}$. $q$ is factors of 2: $\\{1, 2\\}$. List all $p/q$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\pm 1, \\pm \\frac{1}{2}$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch6-7": {
        title: "6.7 The Fundamental Theorem of Algebra",
        subtitle: "Multiplicity & Completeness",
        content: `
            <div class="lesson-section">
                <h2>I. The $n$-Root Guarantee</h2>
                <p>Every polynomial of degree $n > 0$ has exactly $n$ complex roots. But what about their behavior on a graph?</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px; border-left: 3px solid var(--accent-cyan);">
                        <h5>Odd Multiplicity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The graph **crosses** the X-axis (e.g., $y=x^3$).</p>
                    </div>
                    <div class="glass-card" style="padding:15px; border-left: 3px solid var(--accent-magenta);">
                        <h5>Even Multiplicity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The graph **touches and turns** (Tangent) (e.g., $y=x^2$).</p>
                    </div>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> A polynomial has the roots $x = 3$ (multiplicity 2) and $x = -1$ (multiplicity 3). What is its minimum degree?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">The degree is the sum of the multiplicities of all complex roots.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$2 + 3 = 5$. Minimum degree is 5.</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> If $f(x) = (x-2)^2 (x+5)^3$, how does the graph behave at $x = 2$ and $x = -5$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Look at the multiplicity: 2 is even, 3 is odd.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">At $x = 2$: Touches and turns. At $x = -5$: Crosses the X-axis.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch6-rev": {
        title: "Chapter 6 Review Challenge",
        subtitle: "Polynomial Architecture Mastery",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Polynomials</h2>
                <p>Polynomials are the high-level language of algebraic functions. They allow us to model complex curves using simple arithmetic operations.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Structural Analysis</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Identify the degree and leading coefficient to predict long-term system behavior.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Efficiency</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Apply Synthetic Division and Horner's Method for optimal evaluation.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Search Pruning</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use the Rational Root Theorem to minimize guestimation effort.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Root Dynamics</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand multiplicity to predict the geometric 'touch points' of any function.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Reflection: The Polynomial Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>How does the Remainder Theorem connect Division to Evaluation?</li>
                    <li>If a 5th-degree polynomial has 2 complex roots, how many real roots MUST it have?</li>
                    <li>Why does even multiplicity cause a 'touch and turn' behavior rather than a cross?</li>
                </ol>
            </div>
        `
    }
};


