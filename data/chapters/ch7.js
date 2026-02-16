window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch7"] = {
    "ch7-1": {
        title: "7.1 n-th Roots & Radicals",
        subtitle: "The Inverse of Growth & Exception Handling",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-history"></i> The Time-Traveler's Trace</h3>
                    <p>An $n$-th root is the **Inverse Operation** of growth. If a population grows by $x^3$, the cube root tells you where it started. It is the algebraic 'Undo' button for exponential scaling.</p>
                </div>

                <h2>I. The nth Root Operator</h2>
                <p>The expression $\\\\sqrt[n]{b}$ is a number $a$ such that $a^n = b$. The behavior of this radical depends critically on the <strong>Index ($n$)</strong>.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <ul class="glass-list">
                        <li><strong>Even Index ($n=2, 4, \\\\dots$):</strong> Radicand MUST be $\\\\ge 0$ for a real result (e.g., $\\\\sqrt{-4}$ is non-real).</li>
                        <li><strong>Odd Index ($n=3, 5, \\\\dots$):</strong> Radicand can be any real number (e.g., $\\\\sqrt[3]{-8} = -2$).</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-exclamation-triangle"></i> Domain Guarding</h4>
                <p>In programming, taking the square root of a negative variable without a <code>try-catch</code> or a conditional guard like <code>if (x < 0)</code> will result in a <code>NaN</code> error. Understanding indices is the key to writing robust math algorithms that don't crash.</p>
            </div>
        `
    },
    "ch7-2": {
        title: "7.2 Power of the Fractional",
        subtitle: "Rational Exponents & Continuity",
        content: `
            <div class="lesson-section">
                <h2>I. The Fractional Bridge</h2>
                <p>Rational exponents $b^{m/n}$ allow us to treat roots as powers. This is not just a change in notation; it's a <strong>Unified Algebra</strong>.</p>
                
                <div class="proof-box glass">
                    \\[b^{m/n} = \\sqrt[n]{b^m} = (\\sqrt[n]{b})^m\\]
                    <p style="margin-top:10px;">This notation is superior because it allows us to use all laws of exponents (Addition, Subtraction, Multiplier) seamlessly.</p>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan); margin-top:20px;">
                    <h4><i class="fas fa-calculator"></i> Preview: The Power Rule</h4>
                    <p>In Calculus, finding the rate of change for $\\\\sqrt{x}$ is trivial IF you rewrite it as $x^{1/2}$. Mastering rational exponents is the secret to making high-level Calculus feel like simple Algebra.</p>
                </div>
            </div>
        `
    },
    "ch7-3": {
        title: "7.3 Binomial Radical Expressions",
        subtitle: "Conjugates & Rationalization",
        content: `
            <div class="lesson-section">
                <h2>I. The Power of Conjugates</h2>
                <p>To eliminate a radical like $\\\\sqrt{2}$ from the denominator $3 + \\\\sqrt{2}$, we use the <strong>Conjugate</strong> $3 - \\\\sqrt{2}$.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-green); padding:20px;">
                    <h4>Difference of Squares Trick</h4>
                    <p>$(a + \\\\sqrt{b})(a - \\\\sqrt{b}) = a^2 - b$.</p>
                    <p style="margin-top:10px;">By multiplying both numerator and denominator by the conjugate, the radical "squares itself out" of existence in the denominator.</p>
                </div>
            </div>
        `
    },
    "ch7-4": {
        title: "7.4 Advanced Laws of Exponents",
        subtitle: "Scaling & Data Compression",
        content: `
            <div class="lesson-section">
                <h2>I. The Power Laws Revisited</h2>
                <p>All integer exponent laws apply to rational exponents. This provides a unified algebra for all real powers.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-compress-arrows-alt"></i> CS: Companding & Log-Scaling</h4>
                    <p>In data compression (like G.711 for phone calls), we use <strong>Companding</strong> (Compressing-Expanding). Power laws $y = x^{\\gamma}$ are used to prioritize precision in small signals while allowing large range? ptimizing the bit-rate of the signal!</p>
                </div>
            </div>
        `
    },
    "ch7-5": {
        title: "7.5 Solving Radical Equations",
        subtitle: "Extraneous Solutions & False Positives",
        content: `
            <div class="lesson-section">
                <h2>I. The Squaring Protocol</h2>
                <p>To solve $\\\\sqrt{x + 2} = x$, we must isolate the radical and raise both sides to the appropriate power. However, this process often introduces **Extraneous Solutions**.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-mask"></i> The Ghost in the Machine</h3>
                    <p>An **Extraneous Solution** is a ghost created by the algebra. When you square both sides, you lose the 'sign' information, allowing an impossible answer to sneak through. Always audit your solutions in the original context.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-check-double"></i> Mastery Protocol: The Verification Audit</h4>
                    <p>In high-rigor math, a solution is not 'correct' until it is verified. Always plug your answers back into the <strong>Original Radical Expression</strong> to prune false positives.</p>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-green); margin-top:20px;">
                    <h4><i class="fas fa-check-double"></i> Mandatory Verification</h4>
                    <p>In software engineering, this is synonymous with a **False Positive**. Your algorithm might terminate successfully, but the data is invalid. Always "plug back in" to verify your result in the original radical context.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Simplify $\\sqrt{72}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Find the largest perfect square factor of 72. $72 = 36 \\times 2$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Solve $\\sqrt{x + 3} = 5$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Square both sides to eliminate the radical.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x + 3 = 25 \\rightarrow x = 22$. Verify: $\\sqrt{25} = 5$ ✓</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Rewrite $\\sqrt[3]{x^5}$ using fractional exponents.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$\\sqrt[n]{x^m} = x^{m/n}$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x^{5/3}$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Solve $\\sqrt{2x - 1} = x - 2$. Check for extraneous solutions!</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Square both sides: $2x - 1 = (x-2)^2$. Solve and TEST both solutions!</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x = 1$ fails (RHS = -1 ≠ LHS), $x = 5$ works. <strong>Only $x = 5$</strong>.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch7-6": {
        title: "7.6 Function Operations",
        subtitle: "Algorithm Modularity (Composition)",
        content: `
            <div class="lesson-section">
                <h2>I. The Logic Pipeline</h2>
                <p>Function Composition $f(g(x))$ means the output of function $g$ becomes the raw material for function $f$.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-blue);">
                    <h4><i class="fas fa-stream"></i> Modular Programming</h4>
                    <p>Think of this as a data pipeline. If $g(x)$ is "encrypt data" and $f(x)$ is "send to server", then $f(g(x))$ is the complete secure transmission process. Breaking complex tasks into simple, composable functions is the hallmark of high-quality code.</p>
                </div>
            </div>
        `
    },
    "ch7-7": {
        title: "7.7 Inverse Relations & Functions",
        subtitle: "The Architecture of Reversibility",
        content: `
            <div class="lesson-section">
                <h2>I. Swapping Input & Output</h2>
                <p>An **Inverse Function** $f^{-1}(x)$ undoes everything $f(x)$ did. Graphically, it is a reflection across the line $y = x$.</p>
                
                <div class="paradigm-shift" style="border-left-color: var(--accent-magenta);">
                    <h4>Existence Condition: The Horizontal Line Test</h4>
                    <p>For an inverse to be a true *function*, every output must match exactly one input. We sometimes have to **restrict the domain** (e.g., $y=x^2$ only for $x \\\\ge 0$) to make an inverse possible.</p>
                </div>
            </div>
        `
    },
    "ch7-rev": {
        title: "Chapter 7 Review Challenge",
        subtitle: "The Radical Architect",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Roots & Powers</h2>
                <p>Radicals and fractional exponents allow us to navigate between dimensions of growth and compression. They are the inverse operators of the universe.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Unified Exponents</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Treat roots as fractional powers to simplify complex algebraic expressions.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Verification Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Always validate results to prune extraneous 'false positive' solutions.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Pipeline Thinking</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use composition $f(g(x))$ to build complex behaviors from simple units.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Reversibility</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Master inverses to rotate perspective and solve equations from the output-side.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Radical Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why is $b^{1/2}$ sometimes more useful than $\\\\sqrt{b}$ in algebraic manipulation?</li>
                    <li>How does squaring both sides potentially 'create' answers that aren't actually correct?</li>
                    <li>What is the physical meaning of the domain restriction when finding the inverse of $f(x) = x^2$?</li>
                </ol>
            </div>
        `
    }
};


