window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch2"] = {
    "ch2-1": {
        title: "2.1 Relations & Functions",
        subtitle: "Mapping the Inputs of the Universe",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-microchip"></i> The Deterministic Machine</h3>
                    <p>A function is like a **Program**. For a given input, you must get exactly one predictable output. If you get different outputs for the same input, your code (relation) is 'broken' as a function.</p>
                </div>

                <h2>I. The Formal Definition of a Function</h2>
                <p>A <strong>Function</strong> $f: A \\rightarrow B$ is a relation that assigns to each element in set $A$ (the Domain) exactly one element in set $B$ (the Codomain).</p>
                
                <div class="paradigm-shift" style="border-left-color:var(--accent-blue);">
                    <h4>The "Horizontal Line Test" Logic</h4>
                    <ul class="glass-list">
                        <li><strong>Injective (One-to-One):</strong> Each output is mapping to at most one input. (Passes Horizontal Line Test).</li>
                        <li><strong>Surjective (Onto):</strong> Every element in the codomain has at least one matching input.</li>
                        <li><strong>Bijective:</strong> Both Injective and Surjective. This is required for an <strong>Inverse</strong> to exist.</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-section">
                <h2>II. Domain & Range: The Permission Map</h2>
                <p><strong>Domain:</strong> Every possible input $x$ that doesn't break the math (e.g., no division by zero, no negatives under even roots).<br>
                <strong>Range:</strong> Every possible output $f(x)$ that the function can reach.</p>
                
                <div class="proof-box glass">
                    <h4>Interval Notation Mastery</h4>
                    <p>$[a, b]$ means "inclusive" (includes endpoints).<br>
                    $(a, b)$ means "exclusive" (up to but not including).</p>
                    <p style="margin-top:10px;">Example: Domain of $f(x) = \\frac{1}{x}$ is $(-\\infty, 0) \\cup (0, \\infty)$.</p>
                    <p>Example: Domain of $f(x) = \\sqrt{x}$ is $[0, \\infty)$.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-code"></i> Developer's Perspective: Determinism</h4>
                <p>In Software Engineering, a <strong>Pure Function</strong> is a mathematical function: for the same input, it returns the same output without side effects. If a function depended on a global variable, it would be a <em>Relation</em>, not a <em>Function</em> in the mathematical sense.</p>
            </div>
        `
    },
    "ch2-2": {
        title: "2.2 Direct Variation",
        subtitle: "The Pure Ratio of Growth",
        content: `
            <div class="lesson-section">
                <h2>I. Proportionality: $y = kx$</h2>
                <p>Direct variation represents the simplest linear relationship. The ratio $\\frac{y}{x}$ is always a constant $k$.</p>
                
                <div class="proof-box glass">
                    <h4>The Origin Constraint</h4>
                    <p>In the equation $y = kx$, if $x = 0$, then $y$ MUST be $0$. This means direct variation ALWAYS passes through the <strong>Origin $(0,0)$</strong>. If a line has a non-zero y-intercept, it is linear but NOT a direct variation.</p>
                </div>
            </div>
        `
    },
    "ch2-3": {
        title: "2.3 Linear Functions & Slope",
        subtitle: "The Mathematics of Constant Change",
        content: `
            <div class="lesson-section">
                <h2>I. Slope as an Instantaneous Rate</h2>
                <p>Slope ($m$) is more than just "rise over run". It is the <strong>Constant Rate of Change</strong>. In Physics, the slope of a Position-Time graph is your <strong>Velocity</strong>.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-chart-line"></i> The Velocity of Variable</h3>
                    <p>Slope is the **Speedometer** of a function. It tells you not just where you are, but how fast you are moving towards the next point. If the slope is constant, you are on a predictable path.</p>
                </div>

                <div class="glass-card" style="padding: 25px; border-left: 4px solid var(--accent-green);">
                    \\[m = \\frac{\\Delta y}{\\Delta x} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}\\]
                    <p style="margin-top:10px; font-size:0.9rem; opacity:0.8;">This formula is the precursor to the <strong>Difference Quotient</strong> in Calculus.</p>
                </div>

                <div class="special-note glass" style="margin-top:20px;">
                    <h5 style="color:var(--accent-green);"><i class="fas fa-microscope"></i> The Point-Slope Form: $y - y_1 = m(x - x_1)$</h5>
                    <p>This is the most powerful form for high-level math. It allows you to build a function knowing only one "state" (point) and the "rule" (slope).</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Find the slope between $(2, 5)$ and $(6, 13)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Subtract the y-values and divide by the x-difference.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$m = \\frac{13-5}{6-2} = \\frac{8}{4} = 2$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Write the equation of a line with slope $3$ passing through $(1, 7)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use point-slope form: $y - y_1 = m(x - x_1)$, then simplify to slope-intercept.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$y - 7 = 3(x - 1) \\rightarrow y = 3x + 4$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Are the lines $y = 2x + 3$ and $y = 2x - 5$ parallel, perpendicular, or neither?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Compare their slopes. Same slopes = parallel. Product of slopes = -1 means perpendicular.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">Both have slope $m = 2$, so they are <strong>parallel</strong>.</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Find the equation of a line perpendicular to $y = 4x - 1$ passing through $(0, 3)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Perpendicular slope is the negative reciprocal. If original slope is 4, perpendicular slope is $-\\frac{1}{4}$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$y = -\\frac{1}{4}x + 3$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch2-4": {
        title: "2.4 Designing Linear Models",
        subtitle: "Using Data to Predict the Future",
        content: `
            <div class="lesson-section">
                <h2>I. The Data Scientist's First Tool</h2>
                <p>Linear Regression (Line of Best Fit) is the simplest form of Machine Learning. You are training a model ($y=mx+b$) to minimize error against a dataset.</p>
                <div class="glass-card">
                    <p><strong>Scenario:</strong> You are tracking server load over time.</p>
                    <p>At 1PM: 20% load. At 3PM: 45% load.</p>
                    <p>Predict the load at 5PM.</p>
                    <p>Math: Finding the equation of the line passing through (1, 20) and (3, 45).</p>
                </div>
            </div>
        `
    },
    "ch2-5": {
        title: "2.5 Absolute Value Functions",
        subtitle: "The V-Shape of Logic",
        content: `
            <div class="lesson-section">
                <h2>I. The V-Graph and Symmetry</h2>
                <p>An Absolute Value graph ($y = a|x - h| + k$) is a piece-wise linear function with a sharp turn at the **Vertex $(h, k)$**.</p>
                
                <div class="paradigm-shift" style="border-left-color:var(--accent-orange);">
                    <h4>Geometric Insight</h4>
                    <p>The graph is symmetric about the line $x = h$. The slope of the right branch is $a$, and the slope of the left branch is $-a$. This symmetry is a direct result of the distance definition of absolute value.</p>
                </div>
            </div>
        `
    },
    "ch2-pc": {
        title: "2.5B Piecewise Modeling",
        subtitle: "Complex Logic requires Multiple Rules",
        content: `
            <div class="lesson-section">
                <h2>I. Defining Domains</h2>
                <p>Piecewise functions are the mathematical equivalent of **Conditional Branches (if-else)**. You define different equations for mutually exclusive intervals of the domain.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-magenta);">
                    <p><strong>Example: Step Functions</strong></p>
                    <p>Often used in shipping costs where the price jumps at specific weight thresholds. There is no 'smooth transition'? he output is discrete.</p>
                </div>
            </div>
        `
    },
    "ch2-6": {
        title: "2.6 & 2.7 Families of Functions",
        subtitle: "The Art of Transformation",
        content: `
            <div class="lesson-section">
                <h2>I. The Universal Transformation Engine</h2>
                <p>Every function in this course is just a transformed version of a <strong>Parent Function</strong>. If you master the transformation constants, you can graph any function instantly.</p>
                
                <table class="glass-table" style="width:100%; margin-top:15px;">
                    <tr><th>Constant</th><th>Operation</th><th>Effect</th></tr>
                    <tr><td>$a$</td><td>$a \\cdot f(x)$</td><td>Vertical Stretch/Compression</td></tr>
                    <tr><td>$h$</td><td>$f(x - h)$</td><td>Horizontal Shift (Opposite Direction)</td></tr>
                    <tr><td>$k$</td><td>$f(x) + k$</td><td>Vertical Shift</td></tr>
                </table>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-video"></i> Animation Hint</h4>
                    <p>In game engines (like Unity), these are known as **Translation** and **Scaling** matrices. A shift in $k$ is just moving a 3D object along the Y-axis!</p>
                </div>
            </div>
        `
    },
    "ch2-inv": {
        title: "2.8 Intro to Inverse Functions",
        subtitle: "Reversing the Flow of Data",
        content: `
            <div class="lesson-section">
                <h2>I. The Undo Button</h2>
                <p>An <strong>Inverse Function</strong> $f^{-1}(x)$ reverses the action of $f(x)$. The domain of the original becomes the range of the inverse, and vice versa.</p>
                
                <div class="proof-box glass">
                    <h4>The One-to-One Condition</h4>
                    <p>A function ONLY has an inverse if it is **One-to-One** (Passes the Horizontal Line Test). If two inputs lead to the same output (like in $y=x^2$), you cannot reverse the process uniquely without restricting the domain.</p>
                </div>

                <div class="glass-card" style="margin-top:15px;">
                    <p><strong>Reflection Propety:</strong> The graph of $f^{-1}$ is the reflection of $f$ across the diagonal line $y = x$.</p>
                </div>
            </div>
        `
    },
    "ch2-rev": {
        title: "2.9 Chapter 2 Review Challenge",
        subtitle: "Function Mastery Check",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Functions</h2>
                <p>Functions are the <strong>Engines of Mapping</strong>. In this chapter, we moved from simple relations to complex transformations and inverses.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Input/Output Integrity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand Domain, Range, and the Vertical Line Test for determinism.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">The Slope Vector</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Master linear rates of change as the precursor to Calculus derivatives.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Transformation Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Apply $a, h, k$ shifts to switch between parent and children functions.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Invertibility</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Determine if a process is reversible using the Horizontal Line Test.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Reflection: The Function Mindset</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>If I shift a function down by 3 units, am I changing the Domain or the Range?</li>
                    <li>Why does a "U-shaped" parabola fail the horizontal line test? What does this mean for its inverse?</li>
                    <li>How does the point-slope form simplify the process of modeling real-world data?</li>
                </ol>
            </div>
        `
    }
};


