window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch5"] = {
    unitQuiz: {
        title: "Chapter 5 Mastery: Quadratic Systems",
        levels: [
            {
                level: 1,
                question: "Which form of a quadratic equation is most useful for identifying the vertex $(h, k)$?",
                options: ["Standard Form: $ax^2 + bx + c = 0$", "Vertex Form: $a(x-h)^2 + k$", "Intercept Form: $a(x-p)(x-q)$", "Quadratic Formula"],
                answer: "Vertex Form: $a(x-h)^2 + k$",
                explanation: "The Vertex Form directly gives the coordinates $(h, k)$ without calculation."
            },
            {
                level: 2,
                question: "If a quadratic equation $ax^2 + bx + c = 0$ has a discriminant $D = 0$, what does this tell you about the graph of the parabola?",
                options: ["It intersects the x-axis at 2 distinct points", "It does not intersect the x-axis at all", "It is tangent to the x-axis at a single point", "It is a straight line"],
                answer: "It is tangent to the x-axis at a single point",
                explanation: "D=0 means there is one repeated real root, which geometrically corresponds to the vertex touching the x-axis (tangency)."
            },
            {
                level: 3,
                question: "MASTERY CHALLENGE: A parabola $y = x^2 + kx + 4$ is tangent to the x-axis. Using Vieta's formulas or the discriminant, prove that $k = 4$ or $k = -4$. Justify your reasoning.",
                template: "Step 1: For tangency, the discriminant must be... \\nStep 2: Setup the equation... \\nStep 3: Solve for k...",
                answer: "For tangency, $D = b^2 - 4ac = 0$. Here $a=1, b=k, c=4$. So $k^2 - 4(1)(4) = 0 \\implies k^2 = 16 \\implies k = \\pm 4$.",
                explanation: "This covers the Elite mastery requirement for justifying tangency through algebraic invariants."
            }
        ]
    },
    "ch5-1": {
        title: "5.1 & 5.2 Parabolas & Vertex Form",
        subtitle: "The Geometry of Perfection & Optics",
        content: `
            <div class="lesson-section fadeIn">
                <div class="mastery-workshop glass" style="margin-bottom:25px; padding:20px; border:2px solid var(--accent-orange); background:rgba(255,75,43,0.05); border-radius:15px;">
                    <h3 style="color:var(--accent-orange); margin-top:0;"><i class="fas fa-crown"></i> ELITE MASTERY WORKSHOP: 5.1-5.2</h3>
                    <p style="font-size:0.9rem; margin-bottom:15px;">Chapter 5 is the foundation of TJHSST Algebra 2. Your focus should be on **Vertex Precision** and **Completing the Square**—the two areas where elite students differentiate themselves.</p>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                        <div class="glass-card" style="padding:15px;">
                            <strong style="color:var(--accent-cyan);">🔥 Hot Tip:</strong>
                            <p style="font-size:0.8rem; opacity:0.8; margin-top:5px;">In $y=a(x-h)^2+k$, the sign of $h$ is always **opposite** what you see in the parenthesis. $(x-3)$ means $h=3$. $(x+4)$ means $h=-4$.</p>
                        </div>
                        <div class="glass-card" style="padding:15px;">
                            <strong style="color:var(--accent-magenta);">🎯 Focus Goal:</strong>
                            <p style="font-size:0.8rem; opacity:0.8; margin-top:5px;">Master the conversion from Standard ($ax^2+bx+c$) to Vertex Form without making arithmetic errors in the 'Half-and-Square' step.</p>
                        </div>
                    </div>
                </div>

                <div class="intuition-box glass">
                    <h3><i class="fas fa-bullseye"></i> The Signal Path</h3>
                    <p>A parabola is a **Logic Mirror**. Every beam of light or radio wave hitting its surface is forced to a single, perfect point (the Focus). In calculus, this shape is the result of a constant acceleration (gravity).</p>
                </div>

                <h2>I. The Geometric Locus</h2>
                <p>A <strong>Parabola</strong> is defined as the set of all points $(x, y)$ that are equidistant from a fixed point (the <strong>Focus</strong>) and a fixed line (the <strong>Directrix</strong>).</p>
                
                <div class="proof-box glass" style="border-left-color: var(--accent-blue);">
                    <p>Vertex Form: $y = a(x - h)^2 + k$</p>
                    <ul class="glass-list">
                        <li>$(h, k)$ is the <strong>Vertex</strong> (Turning Point).</li>
                        <li>$a$ determines the width and orientation (up/down).</li>
                        <li>The distance from Vertex to Focus is $p = \\frac{1}{4a}$.</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-satellite-dish"></i> The Optical Property</h4>
                <p>Parallel rays hitting a parabolic surface always reflect through the Focus. This is why telescope mirrors are parabolic. In gaming, parabolic arcs are used to calculate the ideal trajectory of a projectile to hit a specific target focus.</p>
            </div>

            <h2>II. Practice Problems</h2>
            <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 1:</strong> Identify the vertex of $y = 3(x - 5)^2 + 7$.</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Compare with $y = a(x - h)^2 + k$. Remember the sign inside the parenthesis!</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">Vertex: $(5, 7)$</p>
                    </details>
                </div>

                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 2:</strong> Identify the vertex of $y = -(x + 2)^2 - 4$. Does it open up or down?</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">If $a$ is negative, it opens down. For the vertex, $(x+2)$ means $h = -2$.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">Vertex: $(-2, -4)$. Opens: <strong>Down</strong></p>
                    </details>
                </div>

                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 3:</strong> Find the distance from the vertex to the focus ($p$) for $y = \\frac{1}{8}x^2$.</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use the formula $p = \\frac{1}{4a}$, where $a = 1/8$.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">$p = \\frac{1}{4(1/8)} = \\frac{1}{1/2} = 2$.</p>
                    </details>
                </div>

                <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 4:</strong> Write the equation of a parabola with vertex $(3, 1)$ and $a = 2$.</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Plug $h=3, k=1, a=2$ into $y = a(x-h)^2 + k$.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">$y = 2(x - 3)^2 + 1$</p>
                    </details>
                </div>

                <!-- TJ MARATHON: High-Difficulty Challenge -->
                <div class="tj-marathon-box glass" style="margin-top:30px; border:2px solid var(--accent-orange); background:rgba(255,75,43,0.05); padding:20px; border-radius:15px;">
                    <h3 style="color:var(--accent-orange); margin-top:0;"><i class="fas fa-fire"></i> TJ MARATHON: CHAPTER 5 ELITE CHALLENGE</h3>
                    <p style="font-size:0.9rem; margin-bottom:15px;">These problems replicate the 'Elite' standard seen in advanced TJHSST Algebra 2 curriculum. Focus on the steps, not just the answer.</p>
                    
                    <div class="challenge-item" style="margin-bottom:15px; border-left:3px solid var(--accent-orange); padding-left:15px;">
                        <p style="font-weight:700; color:white;">Challenge 1: The Standard to Vertex Transition</p>
                        <p style="font-size:0.85rem; opacity:0.8;">Convert $y = 2x^2 - 12x + 23$ into Vertex Form by **Completing the Square**. Identify the vertex and focus.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer; font-size:0.85rem;">View Step-by-Step Solution</summary>
                            <div style="margin-top:10px; font-size:0.85rem; line-height:1.6;">
                                <ol>
                                    <li>Factor out $a=2$: $y = 2(x^2 - 6x) + 23$</li>
                                    <li>Complete the square inside: half of -6 is -3, square it is 9. Add and subtract 9. <br> $y = 2(x^2 - 6x + 9 - 9) + 23$</li>
                                    <li>Distribute: $y = 2(x - 3)^2 - 18 + 23$</li>
                                    <li>Simplify: **$y = 2(x - 3)^2 + 5$**</li>
                                    <li>Vertex is **$(3, 5)$**. Focus is $p = 1/(4 \cdot 2) = 1/8$ above vertex: **$(3, 5.125)$**.</li>
                                </ol>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-3": {
        title: "5.3 Factoring Mastery",
        subtitle: "Expanding & Vieta's Algorithm",
        content: `
            <div class="lesson-section">
                <h2>I. Vieta's Formulas</h2>
                <p>For any quadratic $ax^2 + bx + c = 0$ with roots $r_1, r_2$, there is a beautiful relationship between the coefficients and the roots:</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-dna"></i> The Algebraic DNA</h3>
                    <p>Vieta's Formulas show that the coefficients of a quadratic are **encodings** of its roots. You don't need to solve the equation to know how the roots sum up or multiply.</p>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-green); padding:20px;">
                    <p><strong>Sum of Roots:</strong> $r_1 + r_2 = -\\frac{b}{a}$</p>
                    <p><strong>Product of Roots:</strong> $r_1 \\cdot r_2 = \\frac{c}{a}$</p>
                </div>

                <div class="paradigm-shift" style="margin-top:20px;">
                    <h4>Proof Sketch</h4>
                    <p>Expand $(x - r_1)(x - r_2) = x^2 - (r_1 + r_2)x + (r_1 \\cdot r_2)$. Matching this with $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$ reveals the secret constants!</p>
                </div>

                <h2>II. Algebra 1 Factoring Drills</h2>
                <div class="intuition-box glass" style="border-left-color: var(--accent-green);">
                    <h3><i class="fas fa-tools"></i> Why Practice This?</h3>
                    <p>Factoring is the <strong>most important skill</strong> from Algebra 1. If you can factor quickly, you can solve quadratics, simplify expressions, and find roots almost instantly. Master these patterns!</p>
                </div>

                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <h4 style="color:var(--accent-green); margin-bottom:15px;"><i class="fas fa-dumbbell"></i> Level 1: GCF Factoring</h4>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Factor $6x^2 + 9x$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">What is the Greatest Common Factor of 6 and 9? Both terms also have at least one $x$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">GCF = $3x$. Answer: $3x(2x + 3)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Factor $12x^3 - 8x^2 + 4x$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">GCF of 12, 8, and 4? Lowest power of $x$ in all three terms?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">GCF = $4x$. Answer: $4x(3x^2 - 2x + 1)$</p>
                        </details>
                    </div>

                    <h4 style="color:var(--accent-blue); margin:25px 0 15px;"><i class="fas fa-dumbbell"></i> Level 2: Difference of Squares ($a^2 - b^2$)</h4>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Factor $x^2 - 25$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Pattern: $a^2 - b^2 = (a+b)(a-b)$. Here $a = x$ and $b = 5$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x^2 - 5^2 = (x+5)(x-5)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Factor $4x^2 - 49$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$4x^2 = (2x)^2$ and $49 = 7^2$. Apply the difference of squares pattern.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(2x)^2 - 7^2 = (2x+7)(2x-7)$</p>
                        </details>
                    </div>

                    <h4 style="color:var(--accent-magenta); margin:25px 0 15px;"><i class="fas fa-dumbbell"></i> Level 3: Trinomial Factoring ($x^2 + bx + c$)</h4>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 5:</strong> Factor $x^2 + 7x + 12$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Find two numbers that <strong>multiply</strong> to 12 AND <strong>add</strong> to 7.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">3 and 4 (multiply to 12, add to 7). Answer: $(x+3)(x+4)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 6:</strong> Factor $x^2 - 5x + 6$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Two numbers that multiply to +6 and add to $-5$. Both must be negative!</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$-2$ and $-3$ (multiply to 6, add to $-5$). Answer: $(x-2)(x-3)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 7:</strong> Factor $x^2 + 2x - 15$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Two numbers that multiply to $-15$ and add to $+2$. One positive, one negative!</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$5$ and $-3$ (multiply to $-15$, add to $2$). Answer: $(x+5)(x-3)$</p>
                        </details>
                    </div>

                    <h4 style="color:var(--accent-orange); margin:25px 0 15px;"><i class="fas fa-dumbbell"></i> Level 4: Harder Trinomials ($ax^2 + bx + c$, AC Method)</h4>
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 8:</strong> Factor $2x^2 + 7x + 3$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">AC Method: Multiply $a \\times c = 2 \\times 3 = 6$. Find two numbers that multiply to 6 and add to 7.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">1 and 6. Rewrite: $2x^2 + 6x + x + 3 = 2x(x+3) + 1(x+3) = (2x+1)(x+3)$</p>
                        </details>
                    </div>
                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 9:</strong> Factor $3x^2 - 10x - 8$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">AC = $3 \\times (-8) = -24$. Find two numbers that multiply to $-24$ and add to $-10$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$2$ and $-12$. Rewrite: $3x^2 + 2x - 12x - 8 = x(3x+2) - 4(3x+2) = (x-4)(3x+2)$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-4": {
        title: "5.4 Complex Numbers Intro",
        subtitle: "The Imaginary Unit i",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-atom"></i> What is $i$?</h3>
                    <p>When you try to solve $x^2 = -1$, there is NO real number that works. Mathematicians invented <strong>$i$</strong> (the imaginary unit) to fill this gap. It is defined as: $i = \\sqrt{-1}$, which means $i^2 = -1$.</p>
                </div>

                <h2>I. The Definition</h2>
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <p><strong>Key Fact:</strong> $i = \\sqrt{-1}$ and $i^2 = -1$</p>
                    <p style="margin-top:10px;">A <strong>Complex Number</strong> has the form $a + bi$ where $a$ is the Real Part and $b$ is the Imaginary Part.</p>
                </div>

                <h2>II. Powers of $i$ (The Cycle)</h2>
                <p>The powers of $i$ repeat every 4 steps. Memorize this cycle!</p>
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:15px; margin-top:15px;">
                    <div class="glass-card" style="padding:15px; text-align:center; border-top: 3px solid var(--accent-cyan);">
                        <h5>$i^1$</h5>
                        <p style="font-size:1.2rem;">$i$</p>
                    </div>
                    <div class="glass-card" style="padding:15px; text-align:center; border-top: 3px solid var(--accent-magenta);">
                        <h5>$i^2$</h5>
                        <p style="font-size:1.2rem;">$-1$</p>
                    </div>
                    <div class="glass-card" style="padding:15px; text-align:center; border-top: 3px solid var(--accent-orange);">
                        <h5>$i^3$</h5>
                        <p style="font-size:1.2rem;">$-i$</p>
                    </div>
                    <div class="glass-card" style="padding:15px; text-align:center; border-top: 3px solid var(--accent-green);">
                        <h5>$i^4$</h5>
                        <p style="font-size:1.2rem;">$1$</p>
                    </div>
                </div>
                <p style="margin-top:10px; font-size:0.9rem; opacity:0.8;">To find $i^n$: Divide $n$ by 4, and use the remainder. Example: $i^{17}$: $17 \\div 4 = 4$ remainder $1$, so $i^{17} = i^1 = i$.</p>

                <h2>III. Operations with Complex Numbers</h2>
                <div class="glass-card" style="padding:20px; border-left: 4px solid var(--accent-blue);">
                    <h4>Add/Subtract: Combine "like terms"</h4>
                    <p>$(3 + 2i) + (5 - 4i) = (3+5) + (2-4)i = 8 - 2i$</p>
                </div>
                <div class="glass-card" style="padding:20px; margin-top:15px; border-left: 4px solid var(--accent-green);">
                    <h4>Multiply: Use FOIL, then replace $i^2$ with $-1$</h4>
                    <p>$(2 + 3i)(4 - i)$</p>
                    <p style="margin-top:5px;">$= 8 - 2i + 12i - 3i^2$</p>
                    <p>$= 8 + 10i - 3(-1) = 8 + 10i + 3 = 11 + 10i$</p>
                </div>
                <div class="glass-card" style="padding:20px; margin-top:15px; border-left: 4px solid var(--accent-orange);">
                    <h4>Conjugate: Flip the sign of the imaginary part</h4>
                    <p>The conjugate of $a + bi$ is $a - bi$.</p>
                    <p style="margin-top:5px;">Example: Conjugate of $5 - 7i$ is $5 + 7i$.</p>
                    <p style="margin-top:5px; font-size:0.9rem; opacity:0.8;">Multiplying a number by its conjugate always gives a <strong>Real</strong> number: $(a+bi)(a-bi) = a^2 + b^2$.</p>
                </div>
                <div class="glass-card" style="padding:20px; margin-top:15px; border-left: 4px solid var(--accent-cyan);">
                    <h4>Simplify Square Roots of Negatives</h4>
                    <p>$\\sqrt{-n} = i\\sqrt{n}$. Example: $\\sqrt{-36} = i\\sqrt{36} = 6i$</p>
                </div>

                <h2>IV. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> What is $i^2$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">This is the most fundamental definition of $i$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$i^2 = -1$ (by definition)</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Simplify $i^{23}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Divide 23 by 4. What is the remainder? Use the cycle: remainder 1→$i$, 2→$-1$, 3→$-i$, 0→$1$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$23 \\div 4 = 5$ remainder $3$. So $i^{23} = i^3 = -i$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Add $(4 + 3i) + (2 - 7i)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Combine real parts $(4+2)$ and imaginary parts $(3i + (-7i))$ separately.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(4+2) + (3-7)i = 6 - 4i$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Multiply $(1 + 2i)(3 - i)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use FOIL: First, Outer, Inner, Last. Then replace $i^2$ with $-1$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$3 - i + 6i - 2i^2 = 3 + 5i - 2(-1) = 3 + 5i + 2 = 5 + 5i$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 5:</strong> Simplify $\\sqrt{-49}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$\\sqrt{-49} = i\\sqrt{49}$. What is $\\sqrt{49}$?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\sqrt{-49} = 7i$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 6:</strong> What is the conjugate of $3 - 5i$? What is $(3-5i)(3+5i)$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Flip the sign of the imaginary part. Then use $(a-bi)(a+bi) = a^2 + b^2$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">Conjugate: $3 + 5i$. Product: $3^2 + 5^2 = 9 + 25 = 34$ (a real number!)</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-5": {
        title: "5.5 Completing the Square",
        subtitle: "Forcing Symmetry",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-puzzle-piece"></i> Why Complete the Square?</h3>
                    <p>Completing the Square lets you rewrite ANY quadratic into <strong>Vertex Form</strong>. This reveals the vertex (highest/lowest point), helps you solve equations the quadratic formula can't simplify easily, and is the key to deriving the quadratic formula itself!</p>
                </div>

                <h2>I. The Perfect Square Algorithm</h2>
                <p>Completing the Square transforms $ax^2 + bx + c$ into vertex form $a(x-h)^2 + k$.</p>

                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-cyan);">
                    <h4><i class="fas fa-list-ol"></i> The Step-by-Step Algorithm</h4>
                    <ol class="glass-list" style="line-height:2;">
                        <li>If $a \\neq 1$, factor $a$ out from the $x^2$ and $x$ terms.</li>
                        <li>Take the coefficient of $x$, <strong>divide by 2</strong>, then <strong>square it</strong>: $(b/2)^2$.</li>
                        <li><strong>Add AND subtract</strong> that value inside the expression (to keep it balanced).</li>
                        <li>Group the perfect square trinomial: $(x + b/2)^2$.</li>
                        <li>Simplify the remaining constant.</li>
                    </ol>
                </div>

                <h2>II. Worked Examples</h2>

                <div class="proof-box glass" style="margin-top:15px; border-left-color: var(--accent-green);">
                    <h4 style="color:var(--accent-green);">Example 1: $y = x^2 + 6x + 2$</h4>
                    <table style="width:100%; border-collapse:collapse;">
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 1:</strong></td>
                            <td>$a = 1$, so no factoring needed.</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 2:</strong></td>
                            <td>Coefficient of $x$ is $6$. Half of 6 is 3. Square it: $3^2 = 9$.</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 3:</strong></td>
                            <td>$y = (x^2 + 6x + 9) - 9 + 2$</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 4:</strong></td>
                            <td>$y = (x + 3)^2 - 7$</td>
                        </tr>
                        <tr>
                            <td style="padding:8px;"><strong>Result:</strong></td>
                            <td style="color:var(--accent-green);">Vertex = $(-3, -7)$</td>
                        </tr>
                    </table>
                </div>

                <div class="proof-box glass" style="margin-top:15px; border-left-color: var(--accent-magenta);">
                    <h4 style="color:var(--accent-magenta);">Example 2: Solve $x^2 - 4x - 12 = 0$</h4>
                    <table style="width:100%; border-collapse:collapse;">
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 1:</strong></td>
                            <td>Move constant: $x^2 - 4x = 12$</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 2:</strong></td>
                            <td>Half of $-4$ is $-2$. Square: $(-2)^2 = 4$. Add to both sides.</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 3:</strong></td>
                            <td>$x^2 - 4x + 4 = 12 + 4$</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:8px;"><strong>Step 4:</strong></td>
                            <td>$(x - 2)^2 = 16$</td>
                        </tr>
                        <tr>
                            <td style="padding:8px;"><strong>Step 5:</strong></td>
                            <td style="color:var(--accent-magenta);">$x - 2 = \\pm 4$ → $x = 6$ or $x = -2$</td>
                        </tr>
                    </table>
                </div>

                <h2>III. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Complete the square: $x^2 + 6x + ?$ = $(x + ?)^2$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Half of 6 is 3. Square it to get the missing number.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$? = 9$. $x^2 + 6x + 9 = (x + 3)^2$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Complete the square: $x^2 - 10x + ?$ = $(x - ?)^2$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Half of $-10$ is $-5$. Square $(-5)$ to get the missing number.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$? = 25$. $x^2 - 10x + 25 = (x - 5)^2$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Convert to vertex form: $y = x^2 + 4x + 1$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Half of 4 is 2. Add and subtract $2^2 = 4$: $y = (x^2 + 4x + 4) - 4 + 1$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$y = (x + 2)^2 - 3$. Vertex: $(-2, -3)$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Convert to vertex form: $y = x^2 - 8x + 20$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Half of $-8$ is $-4$. Add and subtract $(-4)^2 = 16$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$y = (x - 4)^2 + 4$. Vertex: $(4, 4)$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 5:</strong> Solve by completing the square: $x^2 + 6x + 5 = 0$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Move 5 to the right: $x^2 + 6x = -5$. Add $(6/2)^2 = 9$ to both sides.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(x+3)^2 = 4$ → $x+3 = \\pm 2$ → $x = -1$ or $x = -5$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 6:</strong> Solve by completing the square: $x^2 - 2x - 8 = 0$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Move $-8$ to the right: $x^2 - 2x = 8$. Add $(-2/2)^2 = 1$ to both sides.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(x-1)^2 = 9$ → $x-1 = \\pm 3$ → $x = 4$ or $x = -2$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-6": {
        title: "5.6 The Quadratic Formula",
        subtitle: "The Automated Root Solver",
        content: `
            <div class="lesson-section">
                <h2>I. The Discriminant ($D = b^2 - 4ac$)</h2>
                <p>The **Discriminant** reveals the nature of the roots without solving the entire equation.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px; border-top: 3px solid var(--accent-green);">
                        <h5>$D > 0$</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">2 Real Roots. The parabola crosses the X-axis twice.</p>
                    </div>
                    <div class="glass-card" style="padding:15px; border-top: 3px solid var(--accent-blue);">
                        <h5>$D = 0$</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">1 Real Root (Double Root). The vertex is exactly on the X-axis.</p>
                    </div>
                    <div class="glass-card" style="padding:15px; border-top: 3px solid var(--accent-magenta);">
                        <h5>$D < 0$</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">2 Imaginary Roots. The parabola floats above (or below) the axis.</p>
                    </div>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Solve $x^2 - 10x + 25 = 0$ using the Quadratic Formula.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$a=1, b=-10, c=25$. Notice $D = b^2 - 4ac$ first.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$D = 100 - 100 = 0$. So $x = \\frac{10 \\pm 0}{2} = 5$. Only one real solution.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Solve $x^2 - 4x + 13 = 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$a=1, b=-4, c=13$. $D = 16 - 52 = -36$. Remember $\\sqrt{-36} = 6i$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Solve $3x^2 + 5x - 2 = 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$a=3, b=5, c=-2$. $D = 25 - 4(3)(-2) = 25 + 24 = 49$. $\\sqrt{49} = 7$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x = \\frac{-5 \\pm 7}{6} \\rightarrow x = 1/3$ or $x = -2$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Find the nature of roots for $2x^2 + 4x + 5 = 0$ using only the discriminant.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$D = b^2 - 4ac = 16 - 4(2)(5)$. Is it positive, zero, or negative?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$D = 16 - 40 = -24$. Since $D < 0$, there are <strong>2 complex (imaginary) roots</strong>.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-7": {
        title: "5.7 Quadratic Inequalities",
        subtitle: "Shading the Feasible Region",
        content: `
            <div class="lesson-section">
                <h2>I. Mapping the Solution Zone</h2>
                <p>Solving $f(x) \\ge 0$ means finding the intervals of $x$ where the parabola is <strong>on or above</strong> the X-axis.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-orange);">
                    <h4><i class="fas fa-microscope"></i> Boundary Logic</h4>
                    <p>Always solve the equation $f(x) = 0$ first to find the <strong>Critical Points</strong>. Then, test a point in each interval to see where the inequality holds TRUE.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Solve: $x^2 - 4 > 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Set $x^2 - 4 = 0$ to find the boundaries. $x = 2$ and $x = -2$. Now test values in $(-\\infty, -2)$, $(-2, 2)$, and $(2, \\infty)$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x < -2$ or $x > 2$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Solve: $x^2 - 5x + 6 \\le 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Factor the quadratic: $(x-2)(x-3) \\le 0$. The roots are 2 and 3. Since it's $\\le$ and the parabola opens up, the solution is between the roots.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$2 \\le x \\le 3$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Solve: $x^2 + 2x - 8 < 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Roots are $x = 2$ and $x = -4$. Test a value like $x=0$ to see if the middle interval is true.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$-4 < x < 2$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Solve: $x^2 - 4x + 4 > 0$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">This factors to $(x-2)^2 > 0$. When is a square always greater than zero?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">All real numbers except $x = 2$. Or $(-\\infty, 2) \\cup (2, \\infty)$.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-8": {
        title: "5.8 Linear-Quadratic Systems",
        subtitle: "Intersection Points",
        content: `
            <div class="lesson-section">
                <h2>I. System Collisions</h2>
                <p>Finding where $y = mx + b$ and $y = ax^2 + bx + c$ intersect is a <strong>Collision Detection</strong> problem. By setting them equal, we form a new quadratic.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-shield-alt"></i> The Collision Map</h3>
                    <p>In game development, checking if a bullet (line) hits an enemy's shield (parabola) uses this exact quadratic system. The **Discriminant** is your collision detector: $D > 0$ mean two hits, $D = 0$ is a graze, $D < 0$ is a miss.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-check-double"></i> Mastery Protocol: Tangency Proof</h4>
                    <p>If $D = 0$ for a Linear-Quadratic system, the line is <strong>Tangent</strong>. This is the foundation of finding 'Instantaneous Velocity' in Calculus.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Find the intersection points of $y = x^2$ and $y = x + 2$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Set them equal: $x^2 = x + 2$. Rearrange to $x^2 - x - 2 = 0$ and factor.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(x-2)(x+1) = 0 \\rightarrow x=2, x=-1$. Points are $(2, 4)$ and $(-1, 1)$.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Use the discriminant to determine if $y = 3x - 5$ intersects $y = x^2$.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Set $x^2 = 3x - 5 \\rightarrow x^2 - 3x + 5 = 0$. Calculate $D = b^2 - 4ac$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$D = 9 - 20 = -11$. Since $D < 0$, <strong>they do not intersect</strong>.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> For what value of $k$ is the line $y = 4x + k$ tangent to the parabola $y = x^2$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Set $x^2 = 4x + k \\rightarrow x^2 - 4x - k = 0$. For tangency, $D$ must be $0$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$D = 16 - 4(1)(-k) = 16 + 4k$. Set $16 + 4k = 0 \\rightarrow k = -4$.</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch5-rev": {
        title: "Chapter 5 Review Challenge",
        subtitle: "The Parabolic Architect",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Quadratics</h2>
                <p>Quadratics are the first step into the world of <strong>Curvature</strong>. They model gravity, light, and optimization.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Symmetry Mastery</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Locate the vertex to find the maximum or minimum state of any system.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Algebraic Bridge</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use Vieta's formulas to connect coefficients directly to the solution space.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Dimensional Expansion</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Navigate the complex plane to handle 'impossible' roots.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">Geometric Roots</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Interpret common solutions as tangible intersections of space and logic.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Reflection: The Parabolic Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why does every quadratic inequality have either an 'internal' or 'external' solution interval?</li>
                    <li>If a rocket follows a parabolic path, what algebraic point represents its highest altitude?</li>
                    <li>How can we predict the number of intersections between a line and a parabola without graphing?</li>
                </ol>
            </div>
        `
    }
};


