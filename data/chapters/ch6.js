window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch6"] = {
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
                        <li><strong>Even Degree ($n$ even):</strong> Both ends go to $+\\\\infty$ (if $a_n>0$) or $-\\\\infty$ (if $a_n<0$).</li>
                        <li><strong>Odd Degree ($n$ odd):</strong> Ends go in opposite directions.</li>
                    </ul>
                    <p style="margin-top:10px; font-family: monospace;">As $x \\\\to \\\\infty, f(x) \\\\to \\\\infty$ (Notation of Calculus)</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-chart-line"></i> CS: Big O Dominance</h4>
                <p>In complexity analysis, $O(n^3 + n^2)$ is simplified to $O(n^3)$. Why? Because as $n$ grows, the cubic term grows so much faster that the quadratic term might as well be zero. Math "End Behavior" is the foundation of Algorithm Efficiency.</p>
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
                    <p>Plug in $x = c$: $f(c) = (c - c)q(c) + r = 0 \\\\cdot q(c) + r = r$.</p>
                    <p><strong>Conclusion:</strong> $f(c) = r$. This is why evaluating a function is the same as finding a remainder!</p>
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
                        <li><strong>Sum/Diff of Cubes:</strong> $a^3 \\\\pm b^3 = (a \\\\pm b)(a^2 \\\\mp ab + b^2)$</li>
                        <li><strong>Grouping:</strong> Used when four or more terms share partial commonality.</li>
                        <li><strong>Quartic Forms:</strong> Treat $x^4 + 5x^2 + 4$ as a quadratic in terms of $x^2$.</li>
                    </ul>
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
                    <p>Complex roots always come in pairs?봪ike matter and anti-matter. If $2 + 3i$ exists, $2 - 3i$ must also exist to ensure the polynomial's 'Real' structure remains stable. This is the **Law of Symmetry** in Algebra.</p>
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
                    <p>Instead of testing an infinite set of numbers, you only test $\\\\pm \\\\text{factors of constant} / \\\\text{factors of leading coeff}$. In AI, this is **Branch Pruning**?봢liminating billions of impossible paths to find the single correct leaf node quickly.</p>
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
                        <p style="font-size:0.85rem, opacity:0.8;">Identify the degree and leading coefficient to predict long-term system behavior.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Efficiency</h5>
                        <p style="font-size:0.85rem, opacity:0.8;">Apply Synthetic Division and Horner's Method for optimal evaluation.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Search Pruning</h5>
                        <p style="font-size:0.85rem, opacity:0.8;">Use the Rational Root Theorem to minimize guestimation effort.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Root Dynamics</h5>
                        <p style="font-size:0.85rem, opacity:0.8;">Understand multiplicity to predict the geometric 'touch points' of any function.</p>
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


