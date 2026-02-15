window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA['proof_logic'] = {
    "proof_logic-u1-1": {
        title: "The First Rule: Axioms",
        subtitle: "The Atoms of Mathematical Reality",
        content: `
            <p>In the beginning of any mathematical system, we must agree on certain truths. These are <strong>Axioms</strong> (or Postulates).</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-microchip"></i> Neo-Sense Analysis</h4>
                <p>Think of axioms as the "Source Code" of the universe. You cannot derive them from anything simpler; they are the bedrock upon which all logic is built.</p>
            </div>
            <h3>1. The Euclidean Example</h3>
            <p>Euclid’s first postulate: "A straight line segment can be drawn joining any two points." It sounds simple, but without it, Geometry cannot exist.</p>
            <div class="tj-edge glass">
                <h4>🤔 Socratic Inquiry</h4>
                <p>If we changed a single axiom — for example, saying parallel lines <em>must</em> eventually meet — would the resulting math be "wrong," or simply a different kind of reality?</p>
            </div>
        `
    },
    "proof_logic-u2-1": {
        title: "Slicing to Find Area",
        subtitle: "A Visual Proof of $A = \\pi r^2$",
        vizConfig: {
            expressions: [
                "x^2 + y^2 = 4",
                "y = x*tan(pi/8) {x > 0}",
                "y = -x*tan(pi/8) {x > 0}"
            ],
            bounds: { left: -3, right: 3, bottom: -3, top: 3 }
        },
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-pizza-slice"></i> Section I: The Rearrangement Logic</h3>
                    <p>How do we know the area of a circle is $\\pi r^2$? We can "see" it through the <strong>Method of Rearrangement</strong>. By slicing a circle into infinitely thin wedges, we can reshape it into a familiar polygon.</p>
                </div>

                <div class="visual-dynamic glass" style="margin:20px 0; text-align:center;">
                    <svg width="400" height="120" viewBox="0 0 400 120">
                        <!-- Circle slices being moved -->
                        <g transform="translate(100,60)">
                            <circle cx="0" cy="0" r="40" fill="none" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2"/>
                            <path d="M0,0 L40,0 A40,40 0 0,1 37,15 Z" fill="rgba(0,210,255,0.3)" stroke="var(--accent-cyan)"/>
                        </g>
                        <line x1="160" y1="60" x2="220" y2="60" stroke="var(--accent-magenta)" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <!-- Rectangular shape -->
                        <g transform="translate(240,45)">
                            <path d="M0,30 Q10,0 20,30 Q30,0 40,30 Q50,0 60,30 Q70,0 80,30 L80,35 Q70,65 60,35 Q50,65 40,35 Q30,65 20,35 Q10,65 0,35 Z" fill="rgba(0,210,255,0.2)" stroke="var(--accent-cyan)"/>
                        </g>
                    </svg>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-infinity"></i> The Limit Transformation</h4>
                    <ol>
                        <li>Slice a circle into $n$ equal wedges (sectors).</li>
                        <li>Line them up alternating point-up and point-down.</li>
                        <li>The shape approaches a **Rectangle**.</li>
                        <li>The width approaches half the circumference: $W = \\frac{1}{2}(2\\pi r) = \\pi r$.</li>
                        <li>The height approaches the radius: $H = r$.</li>
                        <li>$Area = W \\times H = \\pi r \\times r = \\pi r^2$.</li>
                    </ol>
                </div>
            </div>
        `
    },
    "proof_logic-u3-1": {
        title: "Deriving the Quadratic Formula",
        subtitle: "The Geometry of Completing the Square",
        content: `
            <p>The Quadratic Formula $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ isn't magic. It is simply the result of <strong>Completing the Square</strong> on the general form $ax^2 + bx + c = 0$.</p>
            <div class="lab-protocol-box glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-layer-group"></i> Logic Path</h4>
                <ol>
                    <li>Divide everything by $a$.</li>
                    <li>Move constant $c/a$ to the right.</li>
                    <li>Add $(\\frac{b}{2a})^2$ to both sides to "Complete the Square".</li>
                    <li>Take the square root and isolate $x$.</li>
                </ol>
            </div>
            <p>By following these steps, we transform a messy polynomial into a clean solution.</p>
        `
    },
    "proof_logic-u4-1": {
        title: "The Secret of the Secant",
        subtitle: "Visualizing the Derivative Definition",
        vizConfig: {
            expressions: [
                "f(x) = 0.5x^2",
                "a = 1",
                "h = 1",
                "(a, f(a))",
                "(a+h, f(a+h))",
                "y - f(a) = ((f(a+h)-f(a))/h)*(x-a)"
            ],
            bounds: { left: -1, right: 4, bottom: -1, top: 5 }
        },
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-microchip"></i> Section I: Slopes at a Single Point?</h3>
                    <p>Standard geometry tells us you need two points to define a slope. Calculus allows us to perform a "Neural Hack" to find the slope at exactly one point by using the limit of a shrinking distance.</p>
                </div>

                <div class="math-block">
                    $$m_{\\text{secant}} = \\frac{f(x+h) - f(x)}{h}$$
                </div>

                <p>We start with a <strong>Secant Line</strong> connecting two points $(x, f(x))$ and $(x+h, f(x+h))$.</p>
                
                <div class="glass-card elite-border">
                    <h5><i class="fas fa-bolt"></i> The Vanishing 'h'</h5>
                    <p>As $h$ approaches zero, the second point slides down the curve until it nearly collides with the first. The secant line becomes the <strong>Tangent Line</strong>. This is the definition of the Derivative:</p>
                    <div class="math-block" style="color:var(--accent-cyan);">
                        $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
                    </div>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-tachometer-alt"></i> Physical Insight</h4>
                    <p>The derivative isn't just a slope; it is **Instantaneous Velocity**. If you freeze time to a single frame, the derivative tells you how fast you were moving at that exact millisecond.</p>
                </div>
            </div>
        `
    },
    "proof_logic-u1-2": {
        title: "Syllogisms & Truth Tables",
        subtitle: "The Mechanics of Inference",
        content: `
            <p>Logic is the processing unit of math. We use **Truth Tables** to verify if a statement is always true (Tautology) or always false (Contradiction).</p>
        `
    },
    "proof_logic-u2-2": {
        title: "The Square inside a Square",
        subtitle: "A Geometric Proof of Pythagoras",
        content: `
            <p>By arranging four identical right triangles inside a large square, we can visually see that $a^2 + b^2 = c^2$.</p>
        `
    },
    "proof_logic-u3-2": {
        title: "Pascal’s Triangle Mechanics",
        subtitle: "Unlocking Binomial Expansions",
        content: `
            <p>Pascal's Triangle is more than a pyramid of numbers; it's a map of combinations and the coefficients of $(a+b)^n$.</p>
        `
    },
    "proof_logic-u4-2": {
        title: "Power Rule First Principles",
        subtitle: "Deriving Shortcuts through Limits",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-key"></i> Section I: Why does the Power Rule work?</h3>
                    <p>We use the limit definition to prove why the derivative of $x^n$ is simply $nx^{n-1}$. This relies on either the **Binomial Theorem** or algebraic factoring.</p>
                </div>

                <div class="math-block">
                    $$\\frac{d}{dx} x^n = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h}$$
                </div>

                <h2>II. The Algebraic Proof</h2>
                <div class="glass-card elite-border">
                    <p>Using the expansion $(x+h)^n = x^n + nx^{n-1}h + \\frac{n(n-1)}{2}x^{n-2}h^2 + \\dots + h^n$:</p>
                    <ol class="glass-list">
                        <li>Substitute into the limit: $\\lim_{h \\to 0} \\frac{(x^n + nx^{n-1}h + \\dots) - x^n}{h}$</li>
                        <li>Cancel $x^n$: $\\lim_{h \\to 0} \\frac{nx^{n-1}h + \\text{terms with } h^2}{h}$</li>
                        <li>Divide by $h$: $\\lim_{h \\to 0} (nx^{n-1} + \\text{terms with } h)$</li>
                        <li>Set $h=0$: The result is <strong>$nx^{n-1}$</strong>.</li>
                    </ol>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo Strategy</h4>
                    <p>In high-level competitive math, we don't just memorize the rule; we understand that the power rule is essentially the 'first coefficient' of a polynomial expansion. The rest of the terms vanish because they contain higher orders of $h$.</p>
                </div>
            </div>
        `
    }
};
