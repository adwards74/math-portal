window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch1"] = {
    "ch1-1": {
        title: "1.1 The Axioms of Algebra",
        subtitle: "The Mathematical Laws of Physics",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-gavel"></i> The Supreme Court of Math</h3>
                    <p>Axioms are like the Constitution. They aren't "facts" we discovered; they are the <strong>agreed-upon rules</strong> that make the entire system of logic possible.</p>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin: 30px 0; border-top: 1px solid var(--accent-blue); padding: 25px;">
                    <h5 style="color: var(--accent-blue); margin-bottom: 20px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: The Laws of Real Numbers</h5>
                    <div style="position: relative; width: 100%; max-width: 560px; margin: 0 auto; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(6,182,212,0.2);">
                        <iframe src="https://www.youtube.com/embed/5V5n_7X8D1o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                    </div>
                </div>

                <neo-graph type="sine"></neo-graph>

                <div class="glass-card" style="margin: 20px 0; border-left: 4px solid var(--accent-blue);">
                    <h4><i class="fas fa-microchip"></i> Neo-Solver Integrated</h4>
                    <p>For complex symbolic manipulation, use the <strong>Neo-Solver</strong> (Calculator icon in the header) to verify your isolation algorithms.</p>
                </div>

                <h2>I. The Foundation of Reality</h2>
                <p>Algebra isn't just about $x$; it's about the **Axioms**? he immutable laws that govern how numbers interact. In formal mathematics, we don't assume anything is true unless it's an axiom or proven from one.</p>
                
                <div class="paradigm-shift">
                    <h4>The Axiom Table</h4>
                    <table class="glass-table" style="width:100%;">
                        <tr><th>Axiom</th><th>Addition</th><th>Multiplication</th></tr>
                        <tr><td>Commutative</td><td>$a+b = b+a$</td><td>$ab = ba$</td></tr>
                        <tr><td>Associative</td><td>$(a+b)+c = a+(b+c)$</td><td>$(ab)c = a(bc)$</td></tr>
                        <tr><td>Identity</td><td>$a+0=a$</td><td>$a \\cdot 1 = a$</td></tr>
                        <tr><td>Inverse</td><td>$a+(-a)=0$</td><td>$a(1/a)=1$ ($a \\neq 0$)</td></tr>
                    </table>
                </div>

                <div class="proof-box glass" style="border: 1px solid var(--accent-blue); padding: 25px;">
                    <h4 style="color:var(--accent-blue); margin-bottom:15px;"><i class="fas fa-scroll"></i> Deep Dive: Proving $a \\cdot 0 = 0$</h4>
                    <p>Why is anything times zero always zero? It's not just a 'rule'; it's a consequence of the <strong>Distributive Property</strong>.</p>
                    <ol style="margin-top:10px; line-height:1.8;">
                        <li>$a \\cdot 0 = a(0 + 0)$ <span style="opacity:0.6;">(Additive Identity: $0+0=0$)</span></li>
                        <li>$a \\cdot 0 = a \\cdot 0 + a \\cdot 0$ <span style="opacity:0.6;">(Distributive Property)</span></li>
                        <li>$- (a \\cdot 0) + a \\cdot 0 = - (a \\cdot 0) + (a \\cdot 0 + a \\cdot 0)$ <span style="opacity:0.6;">(Add Inverse to both sides)</span></li>
                        <li>$0 = (- a \\cdot 0 + a \\cdot 0) + a \\cdot 0$ <span style="opacity:0.6;">(Associative Property)</span></li>
                        <li>$0 = 0 + a \\cdot 0$ <span style="opacity:0.6;">(Inverse Property)</span></li>
                        <li>$0 = a \\cdot 0$ <span style="opacity:0.6;">(Identity Property)</span></li>
                    </ol>
                    <p style="margin-top:10px; font-weight:bold; color:var(--accent-green);">Q.E.D. ??The logic is ironclad.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-microchip"></i> CS Connection: Operator Precedence</h4>
                <p>In Java or Python, the <strong>Axioms</strong> are hard-coded into the compiler. The hierarchy of operations (PEMDAS/BODMAS) ensures the machine processes expressions exactly the same way every time. To a coder, axioms are the 'Source Code' of the universe.</p>
            </div>
        `,
        "javaLogic": "axioms"
    },
    "ch1-2": {
        title: "1.2 Number Sets & Systems",
        subtitle: "The Classification of Data",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-microscope"></i> The Resolution of Numbers</h3>
                    <p>Standard mathematics uses <strong>Real Numbers</strong>, which are like high-definition video? nfinitely smooth. Computer science uses <strong>Binary</strong>, which is like pixelated video. Understanding how we 'simplify' reality into numbers is the goal of this section.</p>
                </div>

                <h2>I. The Hierarchy of Numbers</h2>
                <p>Mathematical objects are organized into sets based on their properties. This classification allows us to predict how equations will behave before we even solve them.</p>
                
                <div class="visual-analogy glass">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-layer-group"></i> The Venn Diagram of Reality</h4>
                    <p>Imagine a series of nesting boxes:</p>
                    <ul class="glass-list" style="text-align:left;">
                        <li><strong>Natural ($\\mathbb{N}$):</strong> Counting numbers {1, 2, 3...}.</li>
                        <li><strong>Whole ($\\mathbb{W}$):</strong> Naturals + {0}.</li>
                        <li><strong>Integers ($\\mathbb{Z}$):</strong> Wholes + Negatives.</li>
                        <li><strong>Rational ($\\mathbb{Q}$):</strong> Anything that can be a fraction (Repeating/Terminating decimals).</li>
                        <li><strong>Irrational ($\\mathbb{I}$):</strong> Infinite, non-repeating (like $\\pi$ or $\\sqrt{2}$).</li>
                        <li><strong>Real ($\\mathbb{R}$):</strong> All of them combined.</li>
                    </ul>
                </div>

                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>Math Set</th><th>Definition</th><th>CS Data Type</th></tr>
                    <tr><td>$\\mathbb{Z}$ (Integers)</td><td>Whole numbers and opposites</td><td><code>int</code> / <code>Long</code></td></tr>
                    <tr><td>$\\mathbb{Q}$ (Rationals)</td><td>Quotient of two integers</td><td><code>BigDecimal</code></td></tr>
                    <tr><td>$\\mathbb{R}$ (Reals)</td><td>The complete number line</td><td><code>double</code> / <code>Float</code></td></tr>
                </table>
            </div>

            <div class="lesson-section">
                <h2>II. The Density Explorer</h2>
                <p>The set of Real numbers is <strong>dense</strong>. Between any two rational numbers, there is another rational number. In fact, between any two reals, there are <em>infinitely many</em> more.</p>
                <div class="paradigm-shift" style="border-left-color:var(--accent-green);">
                    <h4>Key Intuition</h4>
                    <p>Floating-point errors in programming (like 0.1 + 0.2 != 0.3) happen because computers try to represent a 'dense' infinite system ($\\mathbb{R}$) using a 'discrete' finite system (Binary Bits). Algebra is where we learn to handle the pure, infinite versions.</p>
                </div>
            </div>
        `
    },
    "ch1-3": {
        title: "1.3 Solving Linear Equations",
        subtitle: "Algorithmic thinking for variable isolation",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-key"></i> The Variable's Prison</h3>
                    <p>Solving for $x$ is like <strong>Prison Break</strong>. The variable is locked behind layers of operations (Additions, Powers, Divisions). Your job is to pick those locks in REVERSE order of how they were applied.</p>
                </div>

                <h2>I. The Algorithm of Isolation</h2>
                <p>Solving for $x$ is not magic; it's a deterministic <strong>algorithm</strong>. Your goal is to simplify the entropy of the equation until only the target variable remains.</p>
                
                <div class="glass-card" style="padding: 25px; border-left: 4px solid var(--accent-cyan);">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-balance-scale"></i> The Golden Rule of Balance</h4>
                    <p>An equation is a balanced scale. To maintain the <strong>Equality State</strong>, any operation applied to the Left-Hand Side (LHS) must be applied to the Right-Hand Side (RHS).</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-check-double"></i> Mastery Protocol: The Inverse Audit</h4>
                    <p>When you solve an equation, check your work by substituting the value back into the <strong>Original Equation</strong>. If the LHS does not equal the RHS, your algorithm had a bug.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Solve $5x + 3 = 28$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">First subtract 3 from both sides, then divide by 5.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$5x = 25 \\rightarrow x = 5$. Check: $5(5)+3 = 28$ ✓</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Solve $3(x - 4) = 2(x + 1) + 5$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Distribute first: $3x - 12 = 2x + 2 + 5$. Then combine like terms.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$3x - 12 = 2x + 7 \\rightarrow x = 19$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Solve $\\frac{x}{4} + 7 = 10$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Subtract 7 first, then multiply both sides by 4.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\frac{x}{4} = 3 \\rightarrow x = 12$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Solve $2(3x + 1) - 4 = 5x + 7$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Expand left side: $6x + 2 - 4 = 5x + 7$, then solve for x.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$6x - 2 = 5x + 7 \\rightarrow x = 9$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch1-4": {
        title: "1.4 Literal Equations & Formulas",
        subtitle: "The Interface of Algebra",
        content: `
            <div class="lesson-section">
                <h2>I. The Art of Rewriting</h2>
                <p>In many real-world scenarios, we don't just solve for a number; we solve for a <strong>variable</strong>. A literal equation is an equation that consists mainly of letters.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-exchange-alt"></i> The Algebra Interface</h3>
                    <p>A formula is like an **API**. You provide certain inputs, and you get an output. Literal equations allow you to 'rewrite' the API so that a different variable becomes the output.</p>
                </div>

                <div class="glass-card elite-border">
                    <h4>Isolating the Target Interface</h4>
                    <p>Think of a formula like $V = lwh$ (Volume of a prism). If you know $V, l,$ and $w$, and you need $h$, you rewrite the formula by isolating $h$.</p>
                    <div class="formula-box glass" style="margin-top:15px; text-align:center; font-size:1.2rem;">
                        $h = \\frac{V}{lw}$
                    </div>
                </div>

                <div class="proof-box glass" style="margin-top:20px;">
                    <h4 style="color:var(--accent-orange);">Example: Surface Area to Height</h4>
                    <p>Solve $S = 2\\pi r^2 + 2\\pi rh$ for $h$:</p>
                    <ol style="line-height:2; margin-top:10px;">
                        <li>Subtract $2\\pi r^2$: $S - 2\\pi r^2 = 2\\pi rh$</li>
                        <li>Divide by $2\\pi r$: $\\frac{S - 2\\pi r^2}{2\\pi r} = h$</li>
                        <li>Final Interface: $h = \\frac{S}{2\\pi r} - r$</li>
                    </ol>
                </div>
            </div>

            <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                <h4><i class="fas fa-terminal"></i> CS Analogy: Refactoring</h4>
                <p>Rewriting a formula is exactly like <strong>Refactoring Code</strong>. You aren't changing the relationship between variables (the logic); you are just changing which variable is the primary "Return Value" (the isolated variable).</p>
            </div>
        `
    },
    "ch1-5": {
        title: "1.5/1.6 Word Problems & Models",
        subtitle: "Translating Reality into Code",
        content: `
            <div class="lesson-section">
                <h2>I. The Syntax of Translation</h2>
                <p>Most students fear word problems, but they are simply "Requirements Engineering". You take a messy, human-language description and translate it into a clean algebraic model.</p>
                
                <div class="paradigm-shift" style="border-left-color:var(--accent-green);">
                    <h4>The Dictionary of Algebra</h4>
                    <ul class="glass-list">
                        <li><strong>"Sum", "More than", "Increased by":</strong> Addition ($+$)</li>
                        <li><strong>"Difference", "Less than", "Decreased by":</strong> Subtraction ($-$)</li>
                        <li><strong>"Product", "Of", "Twice":</strong> Multiplication ($\\cdot$)</li>
                        <li><strong>"Quotient", "Ratio", "Per":</strong> Division ($/$)</li>
                    </ul>
                </div>

                <div class="glass-card" style="margin-top:20px;">
                    <h4>Case Study: Mixture Modeling</h4>
                    <p>How many liters of 20% solution ($x$) must be added to 30 liters of 50% solution to get a 30% mixture?</p>
                    <p style="margin-top:10px; font-family:monospace; background:rgba(0,0,0,0.3); padding:10px;">
                        0.20x + 0.50(30) = 0.30(x + 30)
                    </p>
                    <p style="margin-top:5px; opacity:0.8; font-size:0.9rem;">Solving this "Balance of Concentrations" allows us to predict the final chemical state exactly.</p>
                </div>
            </div>
        `
    },
    "ch1-7": {
        title: "1.7 Absolute Value Equations",
        subtitle: "The Geometry of Distance",
        content: `
            <div class="lesson-section">
                <h2>I. Distance from Zero</h2>
                <p>The absolute value of a number $|x|$ is its distance from zero on the number line. Because distance is always non-negative, the output of an absolute value is always $\\ge 0$.</p>

                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 25px; background: rgba(0,0,0,0.2);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-arrows-alt-h"></i> Visual Intuition: Distance on the Line</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg width="320" height="80" viewBox="0 0 320 80">
                            <!-- Number Line -->
                            <line x1="20" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                            <line x1="160" y1="40" x2="160" y2="60" stroke="#fff" stroke-width="2" /> <!-- Zero -->
                            <text x="160" y="75" text-anchor="middle" fill="#fff" font-size="12">0</text>
                            
                            <!-- Positive side -->
                            <path d="M 160 50 L 260 50" stroke="var(--accent-cyan)" stroke-width="4" stroke-linecap="round" />
                            <circle cx="260" cy="50" r="6" fill="var(--accent-cyan)" />
                            <text x="260" y="75" text-anchor="middle" fill="var(--accent-cyan)" font-size="12">5</text>
                            
                            <!-- Negative side -->
                            <path d="M 160 50 L 60 50" stroke="var(--accent-magenta)" stroke-width="4" stroke-linecap="round" />
                            <circle cx="60" cy="50" r="6" fill="var(--accent-magenta)" />
                            <text x="60" y="75" text-anchor="middle" fill="var(--accent-magenta)" font-size="12">-5</text>
                            
                            <!-- Measurement arcs -->
                            <path d="M 160 35 Q 210 15 260 35" stroke="var(--accent-cyan)" fill="none" stroke-width="1.5" stroke-dasharray="3" />
                            <text x="210" y="25" text-anchor="middle" fill="var(--accent-cyan)" font-size="10">dist = 5</text>
                            
                            <path d="M 160 35 Q 110 15 60 35" stroke="var(--accent-magenta)" fill="none" stroke-width="1.5" stroke-dasharray="3" />
                            <text x="110" y="25" text-anchor="middle" fill="var(--accent-magenta)" font-size="10">dist = 5</text>
                        </svg>
                        <p style="font-size: 0.85rem; opacity: 0.8; text-align: center;">
                            $|5| = 5$ &nbsp; and &nbsp; $|-5| = 5$ <br>
                            Both have the <strong>same magnitude</strong> (distance from origin).
                        </p>
                    </div>
                </div>
                
                <div class="glass-card elite-border">
                    <h4>Solving $|ax + b| = c$</h4>
                    <p>To solve an absolute value equation, you must consider two cases: the case where the expression is positive and the case where it is negative.</p>
                    <div class="formula-box glass" style="margin-top:10px;">
                        If $|u| = a$, then $u = a$ OR $u = -a$.
                    </div>
                </div>

                <div class="proof-box glass" style="margin-top:20px;">
                    <h4 style="color:var(--accent-blue);">Example: $|2x - 3| = 7$</h4>
                    <p>Split into two logical branches:</p>
                    <ul class="glass-list">
                        <li><strong>Case 1:</strong> $2x - 3 = 7 \\rightarrow 2x = 10 \\rightarrow x = 5$</li>
                        <li><strong>Case 2:</strong> $2x - 3 = -7 \\rightarrow 2x = -4 \\rightarrow x = -2$</li>
                    </ul>
                    <p style="margin-top:10px; opacity:0.8;">Solution Set: $\\{5, -2\\}$</p>
                </div>
            </div>

            <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-microchip"></i> Error Handling: The $|x| = -1$ Paradox</h4>
                <p>If you see an equation like $|x + 5| = -2$, do not calculate. Distance cannot be negative. This is a <strong>Null State</strong> (No Solution). Always check the RHS before starting your algorithm.</p>
            </div>
        `
    },
    "ch1-rev": {
        title: "Chapter 1 Review Challenge",
        subtitle: "The Algebra Architect",
        content: `
            <div class="lesson-section">
                <h2>I. Synthesis: The Code of Math</h2>
                <p>You have mastered the basic syntax of the universe. In the next chapter, we move into linear dynamics? ow variables change together.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">The Axioms</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The legal system for numbers.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Isolation</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The strategy of variable separation.</p>
                    </div>
                </div>
            </div>
        `
    }
};


