window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch1"] = {
    "ch1-1": {
        title: "1.1 The Axioms of Algebra",
        subtitle: "The Mathematical Laws of Physics",
        content: `
            <div class="lesson-section">
                <h2>I. The Foundation of Reality</h2>
                <p>Algebra isn't just about $x$; it's about the **Axioms**—the immutable laws that govern how numbers interact. In formal mathematics, we don't assume anything is true unless it's an axiom or proven from one.</p>
                
                <div class="paradigm-shift">
                    <h4>The Axiom Table</h4>
                    <table class="glass-table" style="width:100%;">
                        <tr><th>Axiom</th><th>Addition</th><th>Multiplication</th></tr>
                        <tr><td>Commutative</td><td>$a+b = b+a$</td><td>$ab = ba$</td></tr>
                        <tr><td>Associative</td><td>$(a+b)+c = a+(b+c)$</td><td>$(ab)c = a(bc)$</td></tr>
                        <tr><td>Identity</td><td>$a+0=a$</td><td>$a \cdot 1 = a$</td></tr>
                        <tr><td>Inverse</td><td>$a+(-a)=0$</td><td>$a(1/a)=1$ ($a \neq 0$)</td></tr>
                    </table>
                </div>

                <div class="proof-box glass" style="border: 1px solid var(--accent-blue); padding: 25px;">
                    <h4 style="color:var(--accent-blue); margin-bottom:15px;"><i class="fas fa-scroll"></i> Deep Dive: Proving $a \cdot 0 = 0$</h4>
                    <p>Why is anything times zero always zero? It's not just a 'rule'; it's a consequence of the <strong>Distributive Property</strong>.</p>
                    <ol style="margin-top:10px; line-height:1.8;">
                        <li>$a \cdot 0 = a(0 + 0)$ <span style="opacity:0.6;">(Additive Identity: $0+0=0$)</span></li>
                        <li>$a \cdot 0 = a \cdot 0 + a \cdot 0$ <span style="opacity:0.6;">(Distributive Property)</span></li>
                        <li>$- (a \cdot 0) + a \cdot 0 = - (a \cdot 0) + (a \cdot 0 + a \cdot 0)$ <span style="opacity:0.6;">(Add Inverse to both sides)</span></li>
                        <li>$0 = (- a \cdot 0 + a \cdot 0) + a \cdot 0$ <span style="opacity:0.6;">(Associative Property)</span></li>
                        <li>$0 = 0 + a \cdot 0$ <span style="opacity:0.6;">(Inverse Property)</span></li>
                        <li>$0 = a \cdot 0$ <span style="opacity:0.6;">(Identity Property)</span></li>
                    </ol>
                    <p style="margin-top:10px; font-weight:bold; color:var(--accent-green);">Q.E.D. — The logic is ironclad.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-microchip"></i> CS Connection: Operator Precedence</h4>
                <p>In Java or Python, the <strong>Axioms</strong> are hard-coded into the compiler. The hierarchy of operations (PEMDAS/BODMAS) ensures the machine processes expressions exactly the same way every time. To a coder, axioms are the 'Source Code' of the universe.</p>
            </div>
        `
    },
    "ch1-2": {
        title: "1.2 Number Sets & Systems",
        subtitle: "The Classification of Data",
        content: `
            <div class="lesson-section">
                <h2>I. The Hierarchy of Numbers</h2>
                <p>Mathematical objects are organized into sets based on their properties. This classification allows us to predict how equations will behave before we even solve them.</p>
                
                <div class="visual-analogy glass">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-layer-group"></i> The Venn Diagram of Reality</h4>
                    <p>Imagine a series of nesting boxes:</p>
                    <ul class="glass-list" style="text-align:left;">
                        <li><strong>Natural ($\\\\mathbb{N}$):</strong> Counting numbers {1, 2, 3...}.</li>
                        <li><strong>Whole ($\\\\mathbb{W}$):</strong> Naturals + {0}.</li>
                        <li><strong>Integers ($\\\\mathbb{Z}$):</strong> Wholes + Negatives.</li>
                        <li><strong>Rational ($\\\\mathbb{Q}$):</strong> Anything that can be a fraction (Repeating/Terminating decimals).</li>
                        <li><strong>Irrational ($\\\\mathbb{I}$):</strong> Infinite, non-repeating (like $\\\\pi$ or $\\\\sqrt{2}$).</li>
                        <li><strong>Real ($\\\\mathbb{R}$):</strong> All of them combined.</li>
                    </ul>
                </div>

                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>Math Set</th><th>Definition</th><th>CS Data Type</th></tr>
                    <tr><td>$\\\\mathbb{Z}$ (Integers)</td><td>Whole numbers and opposites</td><td><code>int</code> / <code>Long</code></td></tr>
                    <tr><td>$\\\\mathbb{Q}$ (Rationals)</td><td>Quotient of two integers</td><td><code>BigDecimal</code></td></tr>
                    <tr><td>$\\\\mathbb{R}$ (Reals)</td><td>The complete number line</td><td><code>double</code> / <code>Float</code></td></tr>
                </table>
            </div>

            <div class="lesson-section">
                <h2>II. The Density Explorer</h2>
                <p>The set of Real numbers is <strong>dense</strong>. Between any two rational numbers, there is another rational number. In fact, between any two reals, there are <em>infinitely many</em> more.</p>
                <div class="paradigm-shift" style="border-left-color:var(--accent-green);">
                    <h4>Key Intuition</h4>
                    <p>Floating-point errors in programming (like 0.1 + 0.2 != 0.3) happen becausecomputers try to represent a 'dense' infinite system ($\\\\mathbb{R}$) using a 'discrete' finite system (Binary Bits). Algebra is where we learn to handle the pure, infinite versions.</p>
                </div>
            </div>
        `
    },
    "ch1-3": {
        title: "1.3 Solving Linear Equations",
        subtitle: "Algorithmic thinking for variable isolation",
        content: `
            <div class="lesson-section">
                <h2>I. The Algorithm of Isolation</h2>
                <p>Solving for $x$ is not magic; it's a deterministic <strong>algorithm</strong>. Your goal is to simplify the entropy of the equation until only the target variable remains.</p>
                
                <div class="glass-card" style="padding: 25px; border-left: 4px solid var(--accent-cyan);">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-balance-scale"></i> The Golden Rule of Balance</h4>
                    <p>An equation is a balanced scale. To maintain the <strong>Equality State</strong>, any operation applied to the Left-Hand Side (LHS) must be applied to the Right-Hand Side (RHS).</p>
                    <p style="margin-top:10px;"><strong>The Inverse Protocol:</strong></p>
                    <ul class="glass-list">
                        <li>To undo Addition ($+$), use <strong>Subtraction</strong> ($-$).</li>
                        <li>To undo Multiplication ($\cdot$), use <strong>Division</strong> ($/$).</li>
                    </ul>
                </div>
            </div>

            <div class="proof-box glass">
                <h4 style="color:var(--accent-cyan);">The Optimization Workflow</h4>
                <ol style="line-height:1.8;">
                    <li><strong>Simplify:</strong> Use the Distributive Property to clear parentheses.</li>
                    <li><strong>Collect:</strong> Combine like terms on each side.</li>
                    <li><strong>Isolate:</strong> Move all variable terms to one side and constants to the other.</li>
                    <li><strong>Solve:</strong> Perform the final inverse operation to find $x$.</li>
                </ol>
            </div>

            <div class="tj-edge glass">
                <h4><i class="fas fa-bug"></i> Debugging Tip: The Checksum</h4>
                <p>Always perform a 'unit test' on your solution. Substitute your value back into the original equation. If both sides match, your logic is verified. If not, re-trace your steps for a sign error—the most common bug in math!</p>
            </div>
        `
    },
    "ch1-4": {
        title: "1.4 Literal Equations & Formulas",
        subtitle: "Abstract Variable Manipulation",
        content: `
            <div class="lesson-section">
                <h2>I. Symbolic Logic</h2>
                <p>In advanced science and engineering, we rarely deal with pure numbers. We solve for <strong>Literal Equations</strong>—formulas where most terms are variables (letters).</p>
                
                <div class="paradigm-shift" style="border-left-color:var(--accent-purple);">
                    <h4>Why it matters?</h4>
                    <p>In computer graphics (like rendering a shadow), a single formula might be reused millions of times. By 'pre-solving' the formula for our target variable ($x$, $y$, or $z$), we drastically reduce the computational load. We are effectively refactoring the math for performance.</p>
                </div>

                <div class="example-box" style="background:rgba(255,157,0,0.05); border-color:var(--accent-orange);">
                    <h4 style="color:var(--accent-orange);"><i class="fas fa-flask"></i> Physics Case Study: Ideal Gas Law</h4>
                    <p>Original: $PV = nRT$ (Pressure, Volume, Amount, Constant, Temp)</p>
                    <p>If we need to calculate Pressure ($P$) based on varying Volume ($V$), we transform it to:</p>
                    <p style="text-align:center; font-size:1.5rem; margin:15px 0;">$P = \\\\frac{nRT}{V}$</p>
                    <p>Now, we have a clear <strong>input/output function</strong> for $P$.</p>
                </div>
            </div>
        `
    },
    "ch1-5": {
        title: "1.5/1.6 Word Problems & Models",
        subtitle: "Translating Real World to Code",
        content: `
            <div class="lesson-section">
                <h2>I. Modeling Reality</h2>
                <p>Word problems are just "Client Requirements" that need to be translated into code (equations). </p>
                <ul class="glass-list">
                    <li>"Sum of" $\\\\rightarrow +$</li>
                    <li>"Product of" $\\\\rightarrow \\\\times$</li>
                    <li>"Is" $\\\\rightarrow =$ (Assignment)</li>
                </ul>
            </div>
        `
    },
    "ch1-7": {
        title: "1.7 Absolute Value Equations",
        subtitle: "Dealing with Distance and Magnitude",
        content: `
            <div class="lesson-section">
                <h2>I. The Geometric Interpretation</h2>
                <p>The <strong>Absolute Value</strong> of a number $|x|$ is its distance from zero on the number line. Distance is never negative, which is why $|x| \\\\ge 0$ always.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-orange); padding:20px;">
                    <h4 style="color:var(--accent-orange);"><i class="fas fa-arrows-alt-h"></i> Distance Logic</h4>
                    <p>When solving $|ax + b| = c$:</p>
                    <ul class="glass-list">
                        <li><strong>Scenario 1:</strong> $ax + b = c$ (Distance in positive direction)</li>
                        <li><strong>Scenario 2:</strong> $ax + b = -c$ (Distance in negative direction)</li>
                    </ul>
                    <p style="margin-top:10px;"><strong>Constraint:</strong> If $c < 0$, the equation has <u>No Solution</u>. You cannot have a negative distance.</p>
                </div>
            </div>

            <div class="lesson-section">
                <h2>II. Extraneous Solutions</h2>
                <p>When an equation has variables on both sides, like $|x - 1| = 2x$, you must <strong>Verify</strong> your answers. Some solutions might satisfy the algebraic cases but fail the geometric definition (making the distance negative).</p>
            </div>
        `
    },
    "ch1-rev": {
        title: "1.8 Chapter 1 Review Challenge",
        subtitle: "Unit Test Your Knowledge",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture</h2>
                <p>Chapter 1 wasn't just about arithmetic; it was about the <strong>Logical Guardrails</strong> of Algebra. Before moving to Functions, ensure you can:</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Structural Integrity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize and apply Axioms to justify algebraic steps.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">Isolation Skill</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Solve multi-step linear and literal equations with precision.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Absolute Clarity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Handle distance-based equations and check for extraneous roots.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Modeling Mastery</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Translate complex word problems into solvable models.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Metacognition: Review Questions</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Can I explain <em>why</em> the distributive property is used to clear fractions?</li>
                    <li>Do I see the difference between a Rational and an Irrational number in terms of decimal behavior?</li>
                    <li>If I encounter a negative distance in an absolute value problem, what is my immediate conclusion?</li>
                </ol>
            </div>
        `
    }
};
