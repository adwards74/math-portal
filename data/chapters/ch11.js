window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch11"] = {
    "ch11-1": {
        title: "11.1 Pattern Intelligence",
        subtitle: "The Logic of the Next Step",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-link"></i> The Link Chain</h3>
                    <p>A sequence is the **Memory of Math**. Recursion tells you how the current state depends on the past, while the explicit formula lets you predict any future point instantly. It is the foundation of loops and iterative logic.</p>
                </div>

                <h2>I. Recursive vs. Explicit Logic</h2>
                <p>A **Recursive** definition expresses a term based on its predecessors. An **Explicit** formula allows you to jump directly to any step $n$.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>The Fibonacci Evolution</h4>
                    <p>$a_n = a_{n-1} + a_{n-2}$, with $a_1=1, a_2=1$.</p>
                    <p style="margin-top:10px;">As $n \\to \\infty$, the ratio of consecutive terms converges to the **Golden Ratio ($\\phi \\approx 1.618$)**. This pattern appears in everything from nautilus shells to stock market wave analysis.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-microchip"></i> CS: Tail Call Optimization</h4>
                <p>Deeply recursive sequences can cause a "Stack Overflow" error. Modern compilers use <strong>Tail Call Optimization</strong> to turn these recursive patterns into flat efficiency. Mastering sequences is the first step toward writing bulletproof algorithms.</p>
            </div>
        `
    },
    "ch11-2": {
        title: "11.2 Arithmetic Progressions",
        subtitle: "Linear Growth in Discrete Steps",
        content: `
            <div class="lesson-section">
                <h2>I. The Arithmetic Series Sum</h2>
                <p>When summing an arithmetic sequence, we use the legend of young Gauss.</p>
                
                <div class="proof-box glass">
                    \\[S_n = \\frac{n(a_1 + a_n)}{2}\\]
                    <p style="margin-top:10px;">By pairing the first and last terms, then second and second-to-last, we find that every pair sums to the same value. Summing becomes simple multiplication.</p>
                </div>
            </div>
        `
    },
    "ch11-3": {
        title: "11.3 Geometric Scaling",
        subtitle: "The Power of the Common Ratio ($r$)",
        content: `
            <div class="lesson-section">
                <h2>I. The Geometric Series Sum</h2>
                <p>For a sequence where you multiply by $r$ at each step, the sum of $n$ terms is:</p>
                
                <div class="proof-box glass">
                    \\[S_n = \\frac{a_1(1 - r^n)}{1 - r}\\]
                    <p style="margin-top:10px;">Unlike arithmetic sums, geometric sums depend on the power of the ratio. As $n$ increases, $r^n$ either vanishes (convergence) or explodes (divergence). This formula captures the total state of that growth.</p>
                </div>
            </div>
        `
    },
    "ch11-4": {
        title: "11.4 Series & Sigma Notation",
        subtitle: "The Summation Operator $\\Sigma$",
        content: `
            <div class="lesson-section">
                <h2>I. Sigma Architecture</h2>
                <p>The symbol $\\Sigma$ is a loop instruction for mathematicians. It defines where to start, where to stop, and what rule to follow at each iteration.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>Linearity Properties</h4>
                    <ul class="glass-list">
                        <li><strong>Sum Rule:</strong> $\\sum (a_i + b_i) = \\sum a_i + \\sum b_i$</li>
                        <li><strong>Constant Rule:</strong> $\\sum (c \\cdot a_i) = c \\cdot \\sum a_i$</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-terminal"></i> CS: For-Loops & Reduction</h4>
                <p>In programming, $\\sum$ is equivalent to a <code>reduce()</code> function or a <code>for</code> loop that accumulates a total. Understanding the linearity of Sigma allows you to optimize algorithms by factoring out constants from inside the loop, saving millions of CPU cycles.</p>
            </div>
        `
    },
    "ch11-5": {
        title: "11.5 Convergent Series",
        subtitle: "Summing the Infinite",
        content: `
            <div class="lesson-section">
                <h2>I. The Paradox of Zeno</h2>
                <p>How can you sum infinite numbers and get a finite answer? This is the core of **Calculus**. If each step gets significantly smaller ($|r| < 1$), the "tail" of the series vanishes.</p>
                
                <div class="proof-box glass">
                    \\[S_\\infty = \\frac{a_1}{1 - r}\\]
                    <p style="margin-top:10px;">This formula only works when the terms dwindle fast enough to be ignored at infinity. If $|r| \\ge 1$, the series **Diverges** (explodes to infinity).</p>
                </div>
            </div>
        `
    },
    "ch11-rev": {
        title: "Chapter 11 Review Challenge",
        subtitle: "The Pattern Architect",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Discrete to Continuous</h2>
                <p>Sequences and Series are the bridge between individual data points and smooth, continuous functions. They allow us to approximate the complex using simple, repetitive steps.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Growth Scales</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Distinguish between additive (Arithmetic) and multiplicative (Geometric) expansion.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Summation Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Master the algebraic shortcuts to sum thousands of terms in one step.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Recursion Depth</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Analyze how terms depend on their past to build future trajectories.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">The Limit View</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand when an infinite pile of numbers stays within a finite box.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-magenta);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Pattern Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why is it impossible to sum an infinite *Arithmetic* series to a finite number?</li>
                    <li>How does the concept of 'Convergence' allow us to represent decimals like $0.999...$ as the integer 1?</li>
                    <li>In a geometric sequence, what happens to the sum as the common ratio $r$ approaches 1?</li>
                </ol>
            </div>
        `
    }
};


