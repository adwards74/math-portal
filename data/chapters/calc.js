window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["calc"] = {
    // UNIT 1: Limits & Continuity (Mapped to differentiation/part-a)
    "calc-u1-1": {
        title: "1.1 The Essence of Calculus",
        subtitle: "The Study of Change",
        content: `
            <div class="lesson-section">
                <h2>I. The Paradox of the Instant</h2>
                <p>Calculus was born from a crisis in logic: How do you measure the slope of a curve at a <em>single point</em>? A point has no width ($\Delta x = 0$), and a slope requires two points.</p>
                <div class="glass-card elite-border" style="padding: 20px;">
                    <p><strong>The "Leibniz" Perspective:</strong> We imagine $dx$ and $dy$ as "infinitesimals"—numbers so small they are practically zero but not quite. This allowed them to calculate $dy/dx$ without the universe collapsing.</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> CS Connection: Precision Bottlenecks</h4>
                    <p>In high-frequency trading algorithms, calculating the "instantaneous" rate of price change is critical. However, sensor data comes in discrete sets. Calculus provides the theoretical ceiling for these discrete approximations.</p>
                </div>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> Verified MIT OCW Context</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-1-introduction-to-derivatives/" target="_blank" class="resource-link">MIT 18.01SC: Session 1 - The Big Picture</a>
                </div>
            </div>
        `
    },
    "calc-u1-2": {
        title: "1.2 Formal $\epsilon-\delta$ Definition",
        subtitle: "The Language of Rigor",
        content: `
            <div class="lesson-section">
                <h2>I. Beyond "Approaching"</h2>
                <p>The word "approaching" is too vague for a mathematician. We need a way to prove that $f(x)$ gets close to $L$.</p>
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <p><strong>Definition:</strong> $\lim_{x \to c} f(x) = L$ if for every $\epsilon > 0$, there exists a $\delta > 0$ such that:</p>
                    <p>$$0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$$</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-shield-alt"></i> Security Analogy</h4>
                    <p>Think of $\epsilon$ as the maximum allowed error in a cryptographic hash. Your $\delta$ is the precision required in the input data to guarantee that the output stays within the safe error margin.</p>
                </div>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Theory Session</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-8-continuity-and-the-intermediate-value-theorem/" target="_blank" class="resource-link">MIT 18.01SC: Session 8 - Rigorous Limits</a>
                </div>
            </div>
        `
    },
    "calc-u1-3": {
        title: "1.3 Limit Laws & Manipulations",
        subtitle: "The Algebra of Infinity",
        content: `
            <div class="lesson-section">
                <h2>I. Solving $0/0$</h2>
                <p>When direct substitution yields an indeterminate form, we use "Math Refactoring":</p>
                <ul class="glass-list">
                    <li><strong>Factoring:</strong> Canceling out the "hole" in the function.</li>
                    <li><strong>Rationalization:</strong> Using conjugates to remove radicals from the denominator.</li>
                    <li><strong>Compound Fractions:</strong> Finding common denominators to simplify the "Difference Quotient".</li>
                </ul>
                <div class="glass-card" style="margin-top: 15px;">
                    <h5><i class="fas fa-bolt"></i> Elite Trick: Conjugate Multiplication</h5>
                    <p>For $\lim_{x \to 0} \frac{\sqrt{x+4}-2}{x}$, multiply by $\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}$. This transforms the radical problem into a simple polynomial cancellation.</p>
                </div>
            </div>
        `
    },
    "calc-u1-4": {
        title: "1.4 Infinite Limits & Asymptotes",
        subtitle: "Behavior at the Edge",
        content: `
            <div class="lesson-section">
                <h2>I. End Behavior</h2>
                <p>Horizontal Asymptotes are limits as $x$ goes to $\infty$. Vertical Asymptotes are where $f(x)$ goes to $\infty$.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-chart-line"></i> Big-O Notation Connection</h4>
                    <p>In Computer Science, we care about $\lim_{x \to \infty} \frac{f(x)}{g(x)}$. If $g(x)$ grows faster, the limit is 0. This is the exact logic behind <strong>Asymptotic Analysis</strong> of algorithms!</p>
                </div>
            </div>
        `
    },
    "calc-u1-5": {
        title: "1.5 Continuity & IVT Logic",
        subtitle: "The Connected Path",
        content: `
            <div class="lesson-section">
                <h2>I. The Continuity Checklist</h2>
                <p>A function is continuous at $c$ if it passes the "Triple Check":</p>
                <ol class="glass-list">
                    <li>$f(c)$ is defined.</li>
                    <li>$\lim_{x \to c} f(x)$ exists.</li>
                    <li>$\lim_{x \to c} f(x) = f(c)$.</li>
                </ol>
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-compass"></i> Intermediate Value Theorem (IVT)</h4>
                    <p>If $f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$, then there exists at least one $c$ such that $f(c)=k$. This is the mathematical proof that you cannot teleport—you must pass through every point in between!</p>
                </div>
            </div>
        `
    },

    "calc-u2-1": {
        title: "2.1 The Tangent Problem",
        subtitle: "Slope at a Point",
        content: `
            <div class="lesson-section">
                <h2>I. The Derivative as a Limit</h2>
                <p>The derivative is the "Slope of the Tangent Line". It is the limiting value of secant slopes as the interval shrinks to zero.</p>
                \\[f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\]
                <div class="tj-edge glass">
                    <h4><i class="fas fa-rocket"></i> Physics Logic: Instantaneous Velocity</h4>
                    <p>If $s(t)$ is your position, $s'(t)$ is precisely what your speedometer shows at that exact nanosecond. It is the "Best Linear Approximation" of the motion.</p>
                </div>
            </div>
        `
    },
    "calc-u2-2": {
        title: "2.2 Differentiability & Smoothness",
        subtitle: "When Derivatives Fail",
        content: `
            <div class="lesson-section">
                <h2>I. Non-Differentiable Points</h2>
                <p>A function can be continuous but NOT differentiable. You cannot draw a unique tangent at:</p>
                <ul class="glass-list">
                    <li><strong>Corners:</strong> Sharp turns like $|x|$ at $x=0$.</li>
                    <li><strong>Cusps:</strong> "Spikes" where the slope goes to $\pm \infty$.</li>
                    <li><strong>Vertical Tangents:</strong> Like $\sqrt[3]{x}$ at $x=0$.</li>
                </ul>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Deep Dive</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-2-definition-of-the-derivative/" target="_blank" class="resource-link">MIT 18.01SC: Session 2 - Differentiability</a>
                </div>
            </div>
        `
    },
    "calc-u2-3": {
        title: "2.3 Basic Rules & Power Law",
        subtitle: "The Mechanics of Power",
        content: `
            <div class="lesson-section">
                <h2>I. The Power Rule</h2>
                <p>For any real number $n$: $\frac{d}{dx}[x^n] = nx^{n-1}$.</p>
                <div class="glass-card elite-border" style="padding: 15px;">
                    <p><strong>Elite Insight:</strong> This rule works for negative and fractional exponents too. $\frac{d}{dx}[\frac{1}{x}] = -x^{-2}$ and $\frac{d}{dx}[\sqrt{x}] = \frac{1}{2\sqrt{x}}$. Master these patterns to save time during the AP exam.</p>
                </div>
            </div>
        `
    },
    "calc-u2-4": {
        title: "2.4 Product & Quotient Rules",
        subtitle: "Handling Interaction",
        content: `
            <div class="lesson-section">
                <h2>I. Complexity in Pairs</h2>
                <p>Derivatives don't simply "distribute" over multiplication.</p>
                <ul class="glass-list">
                    <li><strong>Product:</strong> $(fg)' = f'g + fg'$</li>
                    <li><strong>Quotient:</strong> $(f/g)' = \frac{f'g - fg'}{g^2}$ ("Low d-High minus High d-Low, Square the Low")</li>
                </ul>
            </div>
        `
    },
    "calc-u2-5": {
        title: "2.5 Trig Derivatives",
        subtitle: "The Wave Cycle",
        content: `
            <div class="lesson-section">
                <h2>I. Symmetries of Sine and Cosine</h2>
                <p>The derivatives of trig functions are periodic:</p>
                <p>$$\frac{d}{dx}[\sin x] = \cos x, \quad \frac{d}{dx}[\cos x] = -\sin x$$</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-wave-square"></i> Signal Processing</h4>
                    <p>In electronic music synth (FM Synthesis), we modulate the frequency of one wave with another. The math of how these waves "interference" is entirely governed by these trig derivative rules.</p>
                </div>
            </div>
        `
    },

    "calc-u4-1": {
        title: "4.1 Related Rates Strategies",
        subtitle: "The Domino Effect of Change",
        content: `
            <div class="lesson-section">
                <h2>I. Beyond Static Equations</h2>
                <p>If two variables are linked, their speeds of change are also linked. We differentiate the governing equation with respect to <strong>time ($t$)</strong>.</p>
                <div class="glass-card elite-border">
                    <p><strong>The Protocol:</strong> 1) ID Knowns/Unknowns, 2) Write the static Relational Eq, 3) Chain Rule Differentiate w.r.t $t$, 4) Substitute and Solve.</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-gamepad"></i> Game Engines</h4>
                    <p>Physics engines in games (like Unreal) solve these related rates tens of thousands of times per second to ensure that when a character hits a ball, the rebound velocity matches the physics of the impact volume change.</p>
                </div>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Related Rates</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/session-30-related-rates/" target="_blank" class="resource-link">MIT 18.01SC: Session 30</a>
                </div>
            </div>
        `
    },
    "calc-u4-2": {
        title: "4.2 Linearization & Differentials",
        subtitle: "Mining Local Stability",
        content: `
            <div class="lesson-section">
                <h2>I. Local Linearity</h2>
                <p>Near a point $a$, any smooth curve is "practically" a line. This is the **Tangent Line Approximation**.</p>
                <p>$$L(x) = f(a) + f'(a)(x-a)$$</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-calculator"></i> Engineering Shortcuts</h4>
                    <p>Engineers often use $\sin(\theta) \approx \theta$ for small angles. This isn't laziness; it's using the first term of a Taylor Series (Linearization) to simplify complex oscillation models.</p>
                </div>
            </div>
        `
    },
    "calc-u4-3": {
        title: "4.3 L'Hospital's Rule & Indeterminants",
        subtitle: "Breaking the $0/0$ Ceiling",
        content: `
            <div class="lesson-section">
                <h2>I. The Infinite Ratio</h2>
                <p>When subbing limits yields $0/0$ or $\infty/\infty$, and functions are differentiable near $c$:</p>
                <p>$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$</p>
                <div class="glass-card" style="border-left-color: var(--accent-red);">
                    <p><strong>Warning:</strong> ALWAYS check for $0/0$ or $\infty/\infty$ before applying L'Hospital's. Using it on a defined ratio will lead to incorrect results!</p>
                </div>
            </div>
        `
    },
    // UNIT 5: Analytical Apps
    "calc-u5-1": {
        title: "5.1 Extreme Values & Rolle's",
        subtitle: "Finding Peaks and Valleys",
        content: `
            <div class="lesson-section">
                <h2>I. The Extreme Value Theorem (EVT)</h2>
                <p>A continuous function on a closed interval MUST have a Max and Min. These occur at <strong>Critical Points</strong> ($f'=0$ or undef) or endpoints.</p>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Applications</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-2-applications-of-differentiation/" target="_blank" class="resource-link">MIT 18.01SC: Unit 2 Applications</a>
                </div>
            </div>
        `
    },
    "calc-u5-2": {
        title: "5.2 Mean Value Theorem",
        subtitle: "The Guaranteed Velocity",
        content: `
            <div class="lesson-section">
                <h2>I. The Average vs. Instantaneous</h2>
                <p>MVT states that there's a point $c$ in $(a,b)$ where: $f'(c) = \frac{f(b)-f(a)}{b-a}$.</p>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-car-side"></i> Traffic Logic</h4>
                    <p>If you cross two EZ-Pass toll booths 60 miles apart in 45 minutes, your average speed was 80mph. MVT mathematically proves you were speeding at some point, even if you never saw a cop!</p>
                </div>
            </div>
        `
    },
    "calc-u5-3": {
        title: "5.3 Concavity & Second Deriv Test",
        subtitle: "The Shape of Growth",
        content: `
            <div class="lesson-section">
                <h2>I. Curvature Intuition</h2>
                <p>$f''(x) > 0$ means "Concave Up" (Smiley Face), $f''(x) < 0$ means "Concave Down" (Frown).</p>
                <div class="glass-card">
                    <p><strong>Inflection Points:</strong> Where concavity CHANGES. This marks a fundamental shift in the <em>acceleration</em> of the data.</p>
                </div>
            </div>
        `
    },
    "calc-u5-4": {
        title: "5.4 Optimization Problems",
        subtitle: "Maximizing Reality",
        content: `
            <div class="lesson-section">
                <h2>I. The Architect's Tool</h2>
                <p>Optimization is modeling a constraint and finding the absolute peak of the objective function. It's used in everything from structural load balancing to pricing strategies in economics.</p>
            </div>
        `
    },
    // UNIT 6: Integration
    "calc-u6-1": {
        title: "6.1 Sigma Notation & Riemann Sums",
        subtitle: "The Calculus of Slicing",
        content: `
            <div class="lesson-section">
                <h2>I. Accumulation</h2>
                <p>Before integrals, we use sums of rectangles (Left, Right, Midpoint). In BC, we also master <strong>Trapezoidal Sums</strong> for higher precision.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-project-diagram"></i> Digital Sampling</h4>
                    <p>When you record sound, the computer "samples" air pressure at discrete intervals. Riemann Sums are the mathematical foundation of how we reconstruct the continuous "sound" from these digital slices.</p>
                </div>
            </div>
        `
    },
    "calc-u6-2": {
        title: "6.2 Definite Integrals & FTC",
        subtitle: "The Bridge of Calculus",
        content: `
            <div class="lesson-section">
                <h2>I. The Fundamental Theorem (FTC)</h2>
                <p>Part 1: $\frac{d}{dx} \int_a^x f(t) dt = f(x)$.</p>
                <p>Part 2: $\int_a^b f'(x) dx = f(b) - f(a)$.</p>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Integration</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-3-the-definite-integral-and-its-applications/" target="_blank" class="resource-link">MIT 18.01SC: Unit 3 Essentials</a>
                </div>
            </div>
        `
    },
    "calc-u6-3": {
        title: "6.3 Integration by Substitution",
        subtitle: "The Inverse Chain Rule",
        content: `
            <div class="lesson-section">
                <h2>I. The $u$-Sub Protocol</h2>
                <p>Look for a function ($u$) and its derivative ($du$) inside the integral. This simplifies the expression back to a basic power form.</p>
            </div>
        `
    },
    "calc-u6-4": {
        title: "6.4 Integration by Parts (BC)",
        subtitle: "The Product Rule's Echo",
        content: `
            <div class="lesson-section">
                <h2>I. Standard BC Technique</h2>
                <p>Formula: $\int u dv = uv - \int v du$.</p>
                <div class="glass-card elite-border">
                    <p><strong>LIPET Rule:</strong> Choose $u$ based on priority: <strong>L</strong>og, <strong>I</strong>nverse Trig, <strong>P</strong>olynomial, <strong>E</strong>xponential, <strong>T</strong>rig.</p>
                </div>
            </div>
        `
    },
    "calc-u6-5": {
        title: "6.5 Partial Fractions (BC)",
        subtitle: "Decomposing Complexity",
        content: `
            <div class="lesson-section">
                <h2>I. Rational Refactoring</h2>
                <p>Break up complex fractions like $\frac{1}{x^2-1}$ into $\frac{A}{x-1} + \frac{B}{x+1}$. This makes "un-integrable" fractions easy for $\ln$ rules.</p>
            </div>
        `
    },
    // UNIT 7: Diff Eqs
    "calc-u7-1": {
        title: "7.1 Slope Fields & General Solutions",
        subtitle: "Visualizing Direction",
        content: `
            <div class="lesson-section">
                <h2>I. Directional Flows</h2>
                <p>A slope field displays $dy/dx$ at every point on a grid. Any solution to the differential equation must "follow the current" of these lines.</p>
            </div>
        `
    },
    "calc-u7-2": {
        title: "7.2 Euler's Method (BC)",
        subtitle: "Numerical Navigation",
        content: `
            <div class="lesson-section">
                <h2>I. Step-by-Step Evolution</h2>
                <p>When an analytic solution is impossible, we "walk" along tangent line segments.</p>
                <p>$y_{new} = y_{old} + \Delta x \cdot (dy/dx)_{old}$</p>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-robot"></i> Simulation Logic</h4>
                    <p>Mars rover landing simulations use 4th-order versions of Euler's method to predict movement 100 times per second, ensuring exact trajectory corrections in real-time.</p>
                </div>
            </div>
        `
    },
    "calc-u7-3": {
        title: "7.3 Separation of Variables",
        subtitle: "Isolating the Unknown",
        content: `
            <div class="lesson-section">
                <h2>I. Algebraic Independence</h2>
                <p>Move all $y$'s to one side and $x$'s to the other. Integrate both sides separately to find the particular solution.</p>
            </div>
        `
    },
    "calc-u7-4": {
        title: "7.4 Logistic Growth Models (BC)",
        subtitle: "The S-Curve of Reality",
        content: `
            <div class="lesson-section">
                <h2>I. Carrying Capacity ($K$)</h2>
                <p>Nature doesn't grow exponentially forever. Resources limit growth.</p>
                <p>$$\frac{dP}{dt} = kP(1 - \frac{P}{K})$$</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-green);">
                    <h4><i class="fas fa-virus"></i> Epidemiology</h4>
                    <p>Viral transmission models (SIR models) are complex extensions of this logistic equation, predicting when a pandemic will reach "Herd Immunity" based on limiting factors.</p>
                </div>
            </div>
        `
    },

    // UNIT 8: Applications of Integration (Mapped to integration/part-c)
    "calc-u8-1": {
        title: "8.1 Areas between Curves",
        subtitle: "The Net Change of Region",
        content: `
            <div class="lesson-section">
                <h2>I. Finding the Enclosure</h2>
                <p>To find the area between two curves $f(x)$ and $g(x)$, we integrate the height of the vertical slices: $|f(x) - g(x)|$.</p>
                \\[A = \\int_a^b (Top - Bottom) dx\\]
            </div>
        `
    },
    "calc-u8-2": {
        title: "8.2 Volumes of Revolution",
        subtitle: "3D Printing with Math",
        content: `
            <div class="lesson-section">
                <h2>I. The Disc & Washer Method</h2>
                <p>Rotating a region around an axis creates a solid. If we slice it perpendicularly to the axis:</p>
                <p>$$V = \pi \int_a^b [R(x)]^2 - [r(x)]^2 dx$$</p>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-cube"></i> CT Scans</h4>
                    <p>Medical CT scans work by taking many 2D X-ray slices of your body and using integration algorithms to reconstruct a 3D model of your organs!</p>
                </div>
            </div>
        `
    },
    "calc-u8-3": {
        title: "8.3 Arc Length & Surface Area (BC)",
        subtitle: "Measuring the Curve",
        content: `
            <div class="lesson-section">
                <h2>I. The Distance Formula Integral</h2>
                <p>For a function $y=f(x)$, the length is: $L = \int_a^b \sqrt{1 + [f'(x)]^2} dx$.</p>
                <div class="glass-card elite-border">
                    <p><strong>Elite Trick:</strong> In BC, we often use the version for parametric curves: $\int_a^b \sqrt{(x')^2 + (y')^2} dt$. This is just the integral of the <em>speed</em> vector's magnitude!</p>
                </div>
            </div>
        `
    },

    // UNIT 9: Parametric & Polar (Mapped to integration/part-c)
    "calc-u9-1": {
        title: "9.1 Parametric Curves & Calc",
        subtitle: "Freedom from Functions",
        content: `
            <div class="lesson-section">
                <h2>I. Two Timelines</h2>
                <p>Regular functions $y=f(x)$ fail if they loop. Parametric equations $x(t), y(t)$ allow us to model ANY path.</p>
                \\[\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}\\]
                <div class="tj-edge glass">
                    <h4><i class="fas fa-bezier-curve"></i> Computer Graphics: Bézier Curves</h4>
                    <p>Typography and vector art (SVG) use parametric equations called Bézier Curves. Adjusting the "control points" changes the $t$ parameter flow to create smooth, scalable fonts.</p>
                </div>
            </div>
        `
    },
    "calc-u9-2": {
        title: "9.2 Vectors in the Plane",
        subtitle: "Directional Data",
        content: `
            <div class="lesson-section">
                <h2>I. Velocity & Acceleration Vectors</h2>
                <p>In BC, motion is a vector $\vec{r}(t) = \langle x(t), y(t) \rangle$. The <strong>Speed</strong> is the magnitude of the velocity vector $|\vec{v}(t)| = \sqrt{(x')^2 + (y')^2}$.</p>
            </div>
        `
    },
    "calc-u9-3": {
        title: "9.3 Polar Coordinates & Graphs",
        subtitle: "Radial Thinking",
        content: `
            <div class="lesson-section">
                <h2>I. A New Coordinate System</h2>
                <p>Shapes like circles and roses are easiest in $(r, \theta)$. Relations: $x = r \cos \theta, y = r \sin \theta$.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-radar"></i> Radar & Sonar</h4>
                    <p>Radar screens are naturally Polar! They measure distance ($r$) and angle ($\\theta$) to detect aircraft. Your math class is teaching you how to read a radar screen.</p>
                </div>
            </div>
        `
    },
    "calc-u9-4": {
        title: "9.4 Area & Arc Length in Polar (BC)",
        subtitle: "Slicing the Pie",
        content: `
            <div class="lesson-section">
                <h2>I. Polar Area</h2>
                <p>Instead of rectangles, we use "sectors" (triangular pie slices). Area $A = \frac{1}{2} \int_\alpha^\beta [r(\theta)]^2 d\theta$.</p>
            </div>
        `
    },

    // UNIT 10: Series (Mapped to infinite-series)
    "calc-u10-1": {
        title: "10.1 Sequences & Convergence",
        subtitle: "Behavior of the Infinite",
        content: `
            <div class="lesson-section">
                <h2>I. The Limit of a Sequence</h2>
                <p>A sequence $\{a_n\}$ converges to $L$ if $\lim_{n \to \infty} a_n = L$. In BC, we distinguish between a sequence (the numbers) and a series (the sum).</p>
            </div>
        `
    },
    "calc-u10-2": {
        title: "10.2 Convergence Tests Masterlist",
        subtitle: "The Toolkit of Rigor",
        content: `
            <div class="lesson-section">
                <h2>I. Decision Matrix</h2>
                <ul class="glass-list">
                    <li><strong>Divergence Test:</strong> If $\lim a_n \neq 0$, it explodes.</li>
                    <li><strong>Geometric:</strong> $|r| < 1$.</li>
                    <li><strong>p-Series:</strong> $p > 1$.</li>
                    <li><strong>Ratio Test:</strong> $\lim |a_{n+1}/a_n| < 1$. Essential for Power Series.</li>
                </ul>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Infinite Series</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/part-b-taylor-series/session-94-infinite-series/" target="_blank" class="resource-link">MIT 18.01SC: Session 94</a>
                </div>
            </div>
        `
    },
    "calc-u10-3": {
        title: "10.3 Power Series & Radius",
        subtitle: "Functions defined by Series",
        content: `
            <div class="lesson-section">
                <h2>I. The Interval of Convergence</h2>
                <p>A power series $\sum c_n(x-a)^n$ creates a domain where it is valid. We use the Ratio Test to find the **Radius ($R$)**.</p>
            </div>
        `
    },
    "calc-u10-4": {
        title: "10.4 Taylor & Maclaurin Series",
        subtitle: "Polynomi-fying Reality",
        content: `
            <div class="lesson-section">
                <h2>I. Universal Proximity</h2>
                <p>$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n$.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-calculator"></i> Inside the CPU</h4>
                    <p>Calculators don't use protractors for $\sin(x)$. They use Taylor Polynomial approximations to reach 10+ decimal places of precision in nanoseconds.</p>
                </div>
            </div>
        `
    },
    "calc-u10-5": {
        title: "10.5 Lagrange Error Bound (BC)",
        subtitle: "Quantifying the Shadow",
        content: `
            <div class="lesson-section">
                <h2>I. The Remainder Term</h2>
                <p>If we stop a Taylor Series at term $n$, how big is the error? $|R_n(x)| \le \frac{M}{(n+1)!}|x-a|^{n+1}$, where $M$ is the max of $|f^{(n+1)}|$ on the interval.</p>
            </div>
        `
    },
    "calc-marathon-1": {
        title: "The Grand Synthesis",
        subtitle: "The Infinity Marathon Part 1",
        content: `
            <div class="lesson-section">
                <h2>I. Cross-Unit Integration</h2>
                <p>In this final module, we combine everything. Typical BC FRQ: "Given a polar curve $r(\theta)$, find the Taylor polynomial for the area function $A(\theta)$ and its Euler approximation."</p>
                <div class="glass-card elite-border" style="background: rgba(255, 215, 0, 0.05);">
                    <p><i class="fas fa-crown"></i> <strong>Goal:</strong> Synthesize the discrete (Euler, Riemann) and the infinite (Taylor, Limits) into one coherent architectural vision.</p>
                </div>
            </div>
        `
    },
    "calc-marathon-2": {
        title: "Theoretical Edge",
        subtitle: "MIT 18.01 Review Session",
        content: `
            <div class="lesson-section">
                <h2>I. Rigorous Reflection</h2>
                <p>Final review focusing on the proofs and theoretical pitfalls that separate a '5' from a 'Grand Architect'.</p>
                <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> Complete MIT 18.01SC Archive</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" target="_blank" class="resource-link">MIT OCW: 18.01SC Home</a>
                </div>
            </div>
        `
    }
};
