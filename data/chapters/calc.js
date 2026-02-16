window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["calc"] = {
    // UNIT 1: Limits & Continuity (Mapped to differentiation/part-a)
    "calc-u1-1": {
        title: "1.1 The Essence of Calculus",
        subtitle: "The Study of Change",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-microscope"></i> The Zoom Logic</h3>
                    <p>A curve looks like a straight line if you zoom in enough. Calculus is the mathematical "microscope" that calculates the slope of that line at an infinitely small scale.</p>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin: 30px 0; border-top: 1px solid var(--accent-cyan); padding: 25px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: The Essence of Calculus</h5>
                    <div style="position: relative; width: 100%; max-width: 500px; margin: 0 auto; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(0,210,255,0.2);">
                        <iframe src="https://www.youtube.com/embed/9vKqVkMQHKk" style="position: absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:linear-gradient(45deg, rgba(0,210,255,0.05), rgba(255,0,255,0.05)); border: 1px solid rgba(0,210,255,0.2);">
                    <h4><i class="fas fa-search-plus"></i> Visual Intuition: The Zoom Microscope</h4>
                    <div style="display: flex; justify-content: center; gap: 40px; align-items: center; margin: 20px 0;">
                        <!-- Normal View -->
                        <div style="text-align: center;">
                            <svg width="100" height="100" viewBox="0 0 100 100" style="background: rgba(0,0,0,0.3); border-radius: 8px;">
                                <path d="M 10 90 Q 50 85 90 10" stroke="var(--accent-cyan)" fill="none" stroke-width="2" />
                                <circle cx="50" cy="65" r="4" fill="var(--accent-magenta)" />
                            </svg>
                            <p style="font-size: 0.7rem; margin-top: 5px; opacity: 0.6;">Curved Aspect</p>
                        </div>
                        <i class="fas fa-arrow-right" style="opacity: 0.3;"></i>
                        <!-- Zoomed View -->
                        <div style="text-align: center;">
                            <svg width="100" height="100" viewBox="0 0 100 100" style="background: rgba(0,0,0,0.3); border-radius: 50%; border: 2px solid var(--accent-magenta); box-shadow: 0 0 15px rgba(255,0,255,0.3);">
                                <line x1="10" y1="90" x2="90" y2="10" stroke="var(--accent-cyan)" stroke-width="4" />
                                <circle cx="50" cy="50" r="5" fill="var(--accent-magenta)" />
                            </svg>
                            <p style="font-size: 0.7rem; margin-top: 5px; color: var(--accent-magenta); font-weight: bold;">Locally Linear</p>
                        </div>
                    </div>
                    <p style="font-size:0.85rem; opacity:0.8;">At an <strong>infinitesimal scale</strong>, any smooth curve is indistinguishable from its tangent line. This is the superpower of Differentiation.</p>
                </div>

                <h2>I. The Paradox of the Instant</h2>
                <p>Calculus was born from a crisis in logic: How do you measure the slope of a curve at a <em>single point</em>? A point has no width ($\\Delta x = 0$), and a slope requires two points.</p>
                <div class="glass-card elite-border" style="padding: 20px;">
                    <p><strong>The "Leibniz" Perspective:</strong> We imagine $dx$ and $dy$ as "infinitesimals"?봭umbers so small they are practically zero but not quite. This allowed them to calculate $dy/dx$ without the universe collapsing.</p>
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
        title: "1.2 Formal $\\epsilon-\\delta$ Definition",
        subtitle: "The Language of Rigor",
        content: `
            <div class="lesson-section">
                <div class="mastery-box glass" style="border-left:4px solid var(--accent-magenta);">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-key"></i> The Challenge-Response Protocol</h4>
                    <p>When someone gives you an $\\epsilon$ (how close $f(x)$ must be to $L$), you must provide a $\\Delta$ (how close $x$ must be to $c$).</p>
                </div>

                <h2>I. Beyond "Approaching"</h2>
                <p>The word "approaching" is too vague for a mathematician. We need a way to prove that $f(x)$ gets close to $L$.</p>
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <p><strong>Definition:</strong> $\\lim_{x \\to c} f(x) = L$ if for every $\\epsilon > 0$, there exists a $\\delta > 0$ such that:</p>
                    <p>$$0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$$</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <div style="display:inline-block; position:relative; width:150px; height:80px; border:1px solid rgba(255,255,255,0.2);">
                        <div style="position:absolute; top:20px; bottom:20px; left:0; right:0; background:rgba(255,0,255,0.1); border-top:1px dashed var(--accent-magenta); border-bottom:1px dashed var(--accent-magenta);"></div>
                        <div style="position:absolute; left:60px; right:60px; top:0; bottom:0; background:rgba(0,210,255,0.1); border-left:1px dashed var(--accent-cyan); border-right:1px dashed var(--accent-cyan);"></div>
                        <span style="position:absolute; right:-40px; top:30px; font-size:0.7rem; color:var(--accent-magenta);">$2\\epsilon$ window</span>
                        <span style="position:absolute; bottom:-20px; left:50px; font-size:0.7rem; color:var(--accent-cyan);">$2\\Delta$ window</span>
                    </div>
                    <p style="font-size:0.8rem; margin-top:25px;">$\\Delta$ is the "safety gate" that keeps the output inside the $\\epsilon$ "target zone."</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-shield-alt"></i> Security Analogy</h4>
                    <p>Think of $\\epsilon$ as the maximum allowed error in a cryptographic hash. Your $\\delta$ is the precision required in the input data to guarantee that the output stays within the safe error margin.</p>
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
                    <p>For $\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x}$, multiply by $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$. This transforms the radical problem into a simple polynomial cancellation.</p>
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
                <p>Horizontal Asymptotes are limits as $x$ goes to $\\infty$. Vertical Asymptotes are where $f(x)$ goes to $\\infty$.</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-chart-line"></i> Big-O Notation Connection</h4>
                    <p>In Computer Science, we care about $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)}$. If $g(x)$ grows faster, the limit is 0. This is the exact logic behind <strong>Asymptotic Analysis</strong> of algorithms!</p>
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
                    <li>$\\lim_{x \\to c} f(x)$ exists.</li>
                    <li>$\\lim_{x \\to c} f(x) = f(c)$.</li>
                </ol>

                <div class="mastery-box glass" style="border:1px solid var(--accent-magenta); padding:20px; margin:20px 0;">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-scroll"></i> FRQ Justification Protocol: IVT</h4>
                    <p>To earn full points on AP exams, you must follow this exact sentence structure:</p>
                    <div class="math-block" style="font-style: italic; color: #ccc;">
                        "Since $f(x)$ is <strong>continuous</strong> on the closed interval $[a,b]$, and since $f(a) < k < f(b)$, by the <strong>Intermediate Value Theorem</strong>, there must exist at least one value $c$ in $(a,b)$ such that $f(c) = k$."
                    </div>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="100">
                        <path d="M 0 80 Q 50 20 100 50 T 200 10" stroke="#fff" fill="transparent" stroke-width="2"/>
                        <line x1="0" y1="40" x2="200" y2="40" stroke="var(--accent-magenta)" stroke-dasharray="4"/>
                        <circle cx="85" cy="40" r="5" fill="var(--accent-magenta)"/>
                        <text x="10" y="35" fill="var(--accent-magenta)" font-size="10">Target K</text>
                    </svg>
                    <p style="font-size:0.8rem;">The "unbroken path" must cross the horizontal gate at least once.</p>
                </div>
            </div>
        `
    },

    "calc-u2-1": {
        title: "2.1 The Tangent Problem",
        subtitle: "Slope at a Point",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-tachometer-alt"></i> The Infinitesimal Slide</h3>
                    <p>The derivative is the "frozen motion" of a curve. It tells you exactly how fast a function is changing at one exact microsecond.</p>
                </div>

                <h2>I. The Derivative as a Limit</h2>
                <p>The derivative is the "Slope of the Tangent Line". It is the limiting value of secant slopes as the interval shrinks to zero.</p>
                <div class="math-block">
                    \\[f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\]
                </div>

                <div class="mastery-box glass" style="border-left:4px solid var(--accent-cyan);">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-pencil-alt"></i> Definition of Derivative Protocol</h4>
                    <p>On the AP exam, if you see a limit that looks like the formula above, <strong>do not evaluate the limit algebraically</strong>. Recognize it as a derivative and use power rules!</p>
                </div>

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
                
                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; display:flex; justify-content:space-around; align-items:flex-end; height:100px;">
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 0 60 L 30 10 L 60 60" stroke="var(--accent-red)" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Corner ($|x|$)</p>
                    </div>
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 0 10 Q 30 60 60 10" stroke="var(--accent-magenta)" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Cusp</p>
                    </div>
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 30 0 L 30 60" stroke="#fff" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Vertical Tan</p>
                    </div>
                </div>

                <ul class="glass-list">
                    <li><strong>Corners:</strong> Sharp turns where left-slope $\\neq$ right-slope.</li>
                    <li><strong>Cusps:</strong> "Spikes" where the slope goes to $\\pm \\infty$ instantly.</li>
                    <li><strong>Vertical Tangents:</strong> Where the graph becomes perfectly vertical (infinite slope).</li>
                </ul>
            </div>
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
                <p>For any real number $n$: $\\frac{d}{dx}[x^n] = nx^{n-1}$.</p>
                <div class="glass-card elite-border" style="padding: 15px;">
                    <p><strong>Elite Insight:</strong> This rule works for negative and fractional exponents too. $\\frac{d}{dx}[\\frac{1}{x}] = -x^{-2}$ and $\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2\\sqrt{x}}$. Master these patterns to save time during the AP exam.</p>
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
                    <li><strong>Quotient:</strong> $(f/g)' = \\frac{f'g - fg'}{g^2}$ ("Low d-High minus High d-Low, Square the Low")</li>
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
                <p>$$\\frac{d}{dx}[\\sin x] = \\cos x, \\quad \\frac{d}{dx}[\\cos x] = -\\sin x$$</p>
                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-wave-square"></i> Signal Processing</h4>
                    <p>In electronic music synth (FM Synthesis), we modulate the frequency of one wave with another. The math of how these waves "interference" is entirely governed by these trig derivative rules.</p>
                </div>
            </div>
        `
    },

    // UNIT 3: Implicit & Inverse
    "calc-u3-1": {
        title: "3.1 The Chain Rule Protocol",
        subtitle: "The Onion Principle",
        content: `
            <div class="lesson-section">
                <h2>I. Functions within Functions</h2>
                <p>The Chain Rule is used to differentiate composite functions. You differentiate the "outer" layer first, then multiply by the derivative of the "inner" layer.</p>
                \\[\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}\\]
                <div class="glass-card elite-border" style="padding: 20px;">
                    <p><strong>Elite Insight:</strong> Think of it as a Russian Doll or an Onion. You peel one layer at a time. The most common AP mistake is forgetting the $u'$ at the end!</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> Performance Optimization</h4>
                    <p>In deep learning, "Backpropagation" is essentially the Chain Rule applied to millions of nested weights to minimize error. Calculus is the architect of modern AI.</p>
                </div>
            </div>
        `
    },
    "calc-u3-2": {
        title: "3.2 Implicit Differentiation",
        subtitle: "Solving for the Hidden Velocity",
        content: `
            <div class="lesson-section">
                <h2>I. When y is Trapped</h2>
                <p>Implicit differentiation is used when $y$ is mixed into the equation ($x^2 + y^2 = 25$). We differentiate both sides w.r.t $x$ and treat $y$ as a function $y(x)$.</p>
                <div class="glass-card" style="padding: 15px;">
                    <p><strong>The Golden Rule:</strong> Every time you differentiate a term with $y$ in it, you MUST attach a $\\frac{dy}{dx}$.</p>
                </div>
                <p>Example for a circle: $2x + 2y\\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}$.</p>
            </div>
        `
    },
    "calc-u3-3": {
        title: "3.3 Derivatives of Inverses",
        subtitle: "The Reciprocal Speed",
        content: `
            <div class="lesson-section">
                <h2>I. Slope Mirroring</h2>
                <p>The derivative of an inverse function is the reciprocal of the derivative of the original function at the corresponding point.</p>
                \\[(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}\\]
                <div class="tj-edge glass" style="border-left-color: var(--accent-blue);">
                    <h4><i class="fas fa-dna"></i> Symmetric Logic</h4>
                    <p>If you know $f(2)=5$ and $f'(2)=3$, then $f^{-1}(5)=2$ and $(f^{-1})'(5)$ is immediately $1/3$. No complicated algebra needed!</p>
                </div>
            </div>
        `
    },
    "calc-u3-4": {
        title: "3.4 Inverse Trig Masterclass",
        subtitle: "The Triangle Bridge",
        content: `
            <div class="lesson-section">
                <h2>I. Arctan and Arc-Sine</h2>
                <p>The derivatives of inverse trig functions don't look like trig at all. They look like rational functions.</p>
                <ul class="glass-list">
                    <li>$\\frac{d}{dx}[\\sin^{-1} x] = \\frac{1}{\\sqrt{1-x^2}}$</li>
                    <li>$\\frac{d}{dx}[\\tan^{-1} x] = \\frac{1}{1+x^2}$</li>
                </ul>
                <div class="glass-card elite-border">
                    <p><strong>Integration Preview:</strong> Memorize these now! Half of the challenge in Unit 6 (Integration) is recognizing these patterns in reverse.</p>
                </div>
            </div>
        `
    },

    "calc-u4-1": {
        title: "4.1 Related Rates Strategies",
        subtitle: "The Domino Effect of Change",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-link"></i> The Linkage Logic</h3>
                    <p>In Related Rates, variables are like gears in a clock. If one gear turns at a certain speed, the other gear's speed is determined by the size and connection of the gears.</p>
                </div>

                <h2>I. Beyond Static Equations</h2>
                <p>If two variables are linked, their speeds of change are also linked. We differentiate the governing equation with respect to <strong>time ($t$)</strong>.</p>
                
                <div class="mastery-box glass" style="border:1px solid var(--accent-cyan); padding:15px; margin:20px 0;">
                    <h4 style="color:var(--accent-cyan);"><i class="fas fa-clipboard-list"></i> The Elite Solve Protocol</h4>
                    <ol style="font-size:0.9rem;">
                        <li><strong>D-W-E-S:</strong> Draw, Write (Eq), Eval (Deriv), Sub (Values).</li>
                        <li><strong>NEVER</strong> substitute constant values <em>before</em> differentiating, unless they are truly constant throughout the motion!</li>
                    </ol>
                </div>
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
                    <p>Engineers often use $\\sin(\\theta) \\approx \\theta$ for small angles. This isn't laziness; it's using the first term of a Taylor Series (Linearization) to simplify complex oscillation models.</p>
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
                <p>When subbing limits yields $0/0$ or $\\infty/\\infty$, and functions are differentiable near $c$:</p>
                <p>$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$</p>
                <div class="glass-card" style="border-left-color: var(--accent-red);">
                    <p><strong>Warning:</strong> ALWAYS check for $0/0$ or $\\infty/\\infty$ before applying L'Hospital's. Using it on a defined ratio will lead to incorrect results!</p>
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
                <p>MVT states that there's a point $c$ in $(a,b)$ where: $f'(c) = \\frac{f(b)-f(a)}{b-a}$.</p>
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
                <div class="intuition-box glass">
                    <h3><i class="fas fa-th"></i> The Pixelation of Area</h3>
                    <p>Riemann sums are like "low-res" versions of an area. As the number of rectangles ($n$) goes to $\\infty$, the resolution becomes perfect, and the sum becomes an <strong>Integral</strong>.</p>
                </div>

                <h2>I. Accumulation</h2>
                <p>Before integrals, we use sums of rectangles (Left, Right, Midpoint). In BC, we also master <strong>Trapezoidal Sums</strong> for higher precision.</p>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-layer-group"></i> Riemann Approximation Styles</h4>
                    <div style="display:flex; gap:10px; justify-content:center; margin-top:15px;">
                        <div style="width:40px; height:60px; border:1px solid #fff; background:rgba(0,210,255,0.2);">L</div>
                        <div style="width:40px; height:50px; border:1px solid #fff; background:rgba(255,0,255,0.2);">R</div>
                        <div style="width:40px; height:55px; border:1px solid #fff; background:rgba(255,255,255,0.1);">M</div>
                    </div>
                    <p style="font-size:0.8rem; margin-top:10px;">The choice of sample point (Left vs. Right) determines if you <strong>Overestimate</strong> or <strong>Underestimate</strong> based on function monotonicity.</p>
                </div>

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
                <div class="mastery-box glass" style="border:1px solid var(--accent-green); margin-bottom:20px;">
                    <h4 style="color:var(--accent-green);"><i class="fas fa-link"></i> The Master Theorem (FTC)</h4>
                    <p>The FTC is the "secret door" that connects derivatives (rates) to integrals (accumulation).</p>
                </div>

                <h2>I. The Fundamental Theorem (FTC)</h2>
                <p>Part 1: $\\frac{d}{dx} \\int_a^x f(t) dt = f(x)$.</p>
                <p>Part 2: $\\int_a^b f'(x) dx = f(b) - f(a)$.</p>

                <div class="mastery-box glass" style="border-left:4px solid var(--accent-blue); padding:15px; margin-top:20px;">
                    <h4 style="color:var(--accent-blue);"><i class="fas fa-scroll"></i> FRQ Justification: Net Change</h4>
                    <p>When asked for the <strong>total accumulation</strong>, always use:</p>
                    <div class="math-block">
                        $$Final Value = Initial Value + \\int_{start}^{end} Rate(t) dt$$
                    </div>
                    <p style="font-size:0.8rem;">This is the most common use of FTC on the AP exam.</p>
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
                <p>Formula: $\\int u dv = uv - \\int v du$.</p>
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
                <p>Break up complex fractions like $\\frac{1}{x^2-1}$ into $\\frac{A}{x-1} + \\frac{B}{x+1}$. This makes "un-integrable" fractions easy for $\\ln$ rules.</p>
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
                <div class="intuition-box glass">
                    <h3><i class="fas fa-walking"></i> The Foggy Path</h3>
                    <p>Euler's Method is like hiking in dense fog with only a compass. You walk in one direction for a bit, then check the compass again to see if your direction (slope) has changed.</p>
                </div>

                <h2>I. Step-by-Step Evolution</h2>
                <p>When an analytic solution is impossible, we "walk" along tangent line segments.</p>
                <div class="math-block">
                    \\[y_{new} = y_{old} + f'(x_{old}, y_{old}) \\cdot \\Delta x\\]
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="100">
                        <path d="M 0 100 Q 100 80 200 0" stroke="rgba(255,255,255,0.2)" fill="transparent" stroke-width="2" stroke-dasharray="2"/>
                        <line x1="0" y1="100" x2="50" y2="85" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="50" y1="85" x2="100" y2="60" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="100" y1="60" x2="150" y2="25" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <circle cx="50" cy="85" r="3" fill="#fff"/>
                        <circle cx="100" cy="60" r="3" fill="#fff"/>
                    </svg>
                    <p style="font-size:0.8rem;">The magenta segments (Euler) "drift" from the true curve as steps increase.</p>
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
                <p>$$\\frac{dP}{dt} = kP(1 - \\frac{P}{K})$$</p>
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
                <p>$$V = \\pi \\int_a^b [R(x)]^2 - [r(x)]^2 dx$$</p>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-cube"></i> CT Scans</h4>
                    <p>Medical CT scans work by taking many 2D X-ray slices of your body and using integration algorithms to reconstruct a 3D model of your organs!</p>
                </div>
            </div>
        `
    },
    "calc-u8-3": {
        title: "8.3 Known Cross-Sections",
        subtitle: "The Deli Slicer Method",
        content: `
            <div class="lesson-section">
                <h2>I. Non-Revolution Solids</h2>
                <p>Not all 3D shapes are round. If we know the shape of a cross-section (Squares, Semicircles, Triangles), we integrate its <strong>Area Function</strong>.</p>
                \\[V = \int_a^b A(x) dx\\]
                <div class="glass-card elite-border">
                    <p><strong>Common Areas:</strong> Square ($s^2$), Semicircle ($\\frac{\\pi}{8}d^2$), Isosceles Right Triangle ($\\frac{1}{4}d^2$).</p>
                </div>
            </div>
        `
    },
    "calc-u8-4": {
        title: "8.4 Arc Length & Surface Area (BC)",
        subtitle: "Measuring the Curve",
        content: `
            <div class="lesson-section">
                <h2>I. The Distance Formula Integral</h2>
                <p>For a function $y=f(x)$, the length is: $L = \\int_a^b \\sqrt{1 + [f'(x)]^{2}} dx$.</p>
                <div class="glass-card elite-border">
                    <p><strong>Elite Trick:</strong> In BC, we often use the version for parametric curves: $\\int_a^b \\sqrt{(x')^2 + (y')^2} dt$. This is just the integral of the <em>speed</em> vector's magnitude!</p>
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
                    <h4><i class="fas fa-bezier-curve"></i> Computer Graphics: B챕zier Curves</h4>
                    <p>Typography and vector art (SVG) use parametric equations called B챕zier Curves. Adjusting the "control points" changes the $t$ parameter flow to create smooth, scalable fonts.</p>
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
                <p>In BC, motion is a vector $\\vec{r}(t) = \\langle x(t), y(t) \\rangle$. The <strong>Speed</strong> is the magnitude of the velocity vector $|\\vec{v}(t)| = \\sqrt{(x')^2 + (y')^2}$.</p>
            </div>
        `
    },
    "calc-u9-3": {
        title: "9.3 Polar Coordinates & Graphs",
        subtitle: "Radial Thinking",
        content: `
            <div class="lesson-section">
                <h2>I. A New Coordinate System</h2>
                <p>Shapes like circles and roses are easiest in $(r, \\theta)$. Relations: $x = r \\cos \\theta, y = r \\sin \\theta$.</p>
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
                <div class="intuition-box glass">
                    <h3><i class="fas fa-fan"></i> The Radar Sweep</h3>
                    <p>Polar area is not built with rectangles. Imagine a radar beam sweeping across a region. The area is the sum of infinitely many tiny "wedges" or pie slices.</p>
                </div>

                <h2>I. Polar Area</h2>
                <p>Instead of rectangles, we use "sectors" (triangular pie slices). Area $A = \\frac{1}{2} \\int_\\alpha^\\beta [r(\\theta)]^2 d\\theta$.</p>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="100" height="100">
                        <path d="M 50 50 L 80 20 A 45 45 0 0 1 100 50 Z" fill="rgba(0,210,255,0.3)" stroke="var(--accent-cyan)"/>
                        <circle cx="50" cy="50" r="2" fill="#fff"/>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:5px;">Area is the "swept" region $\\int \\frac{1}{2}r^2 d\\theta$.</p>
                </div>
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
                <p>A sequence $\\\{a_n\\\}$ converges to $L$ if $\\lim_{n \\to \\infty} a_n = L$. In BC, we distinguish between a sequence (the numbers) and a series (the sum).</p>
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
                    <li><strong>Divergence Test:</strong> If $\\lim a_n \\neq 0$, it explodes.</li>
                    <li><strong>Geometric:</strong> $|r| < 1$.</li>
                    <li><strong>p-Series:</strong> $p > 1$.</li>
                    <li><strong>Ratio Test:</strong> $\\lim |a_{n+1}/a_n| < 1$. Essential for Power Series.</li>
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
                <div class="intuition-box glass">
                    <h3><i class="fas fa-compass"></i> The Radius of Safety</h3>
                    <p>A Power Series is like a Wi-Fi signal. It works perfectly near the router (center), but as you walk away, the signal weakens until it cuts out completely at the <strong>Boundary</strong>.</p>
                </div>

                <h2>I. The Interval of Convergence</h2>
                <p>A power series $\\sum c_n(x-a)^n$ creates a domain where it is valid. We use the <strong>Ratio Test</strong> to find the distance ($R$) from the center $a$.</p>

                <div class="mastery-box glass" style="border-left:4px solid var(--accent-magenta); margin:20px 0;">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-exclamation-triangle"></i> The Endpoint Protocol</h4>
                    <p>The Ratio Test <em>cannot</em> tell you what happens at the exact edges ($x=a \\pm R$). You MUST plug those $x$-values back into the original series and use basic convergence tests (harmonic, alternate harmonic, etc.).</p>
                </div>
            </div>
        `
    },
    "calc-u10-4": {
        title: "10.4 Taylor & Maclaurin Series",
        subtitle: "Polynomi-fying Reality",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-dna"></i> Polynomial DNA</h3>
                    <p>Taylor Series prove that every complex function (sin, cos, exp) is secretly just an infinite polynomial. The derivatives at the center contain the "genetic code" for the entire function.</p>
                </div>

                <h2>I. Universal Proximity</h2>
                \\[f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \dots\\]

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-layer-group"></i> Layered Approximation</h4>
                    <div style="position:relative; height:80px; width:200px; margin:0 auto; border-bottom:1px solid #fff;">
                        <svg width="200" height="80">
                            <path d="M 0 40 Q 100 0 200 80" stroke="#fff" fill="transparent" stroke-width="1" stroke-dasharray="4"/>
                            <line x1="50" y1="20" x2="150" y2="20" stroke="var(--accent-blue)" stroke-width="2"/>
                            <path d="M 60 25 Q 100 10 140 25" stroke="var(--accent-cyan)" fill="transparent" stroke-width="2"/>
                        </svg>
                    </div>
                    <p style="font-size:0.8rem; margin-top:10px;">Blue (Linear) $\\to$ Cyan (Quadratic) $\\to$ White (Actual Function). More terms = Better "Cling".</p>
                </div>
            </div>
        `
    },
    "calc-u10-5": {
        title: "10.5 Lagrange Error Bound (BC)",
        subtitle: "Quantifying the Shadow",
        content: `
            <div class="lesson-section">
                <div class="mastery-box glass" style="border:1px solid rgba(255,255,255,0.3);">
                    <h3><i class="fas fa-umbrella"></i> The Error Umbrella</h3>
                    <p>If you don't use the infinite sum, the Lagrange Error Bound tells you exactly how much "rain" (error) could still hit you. It is the maximum possible gap between the series and reality.</p>
                </div>

                <h2>I. The Remainder Term</h2>
                <p>The error $|R_n(x)|$ is bounded by the "Next Term" but using the maximum possible value ($M$) of the $(n+1)$-th derivative:</p>
                \\[|R_n(x)| \\le \\frac{M}{(n+1)!}|x-a|^{n+1}\\]

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-shield-alt"></i> Safety Standards</h4>
                    <p>When NASA calculates a trajectory, they don't use infinite series. They use Taylor polynomials and ensure the Lagrange Bound is below a critical threshold (e.g., $10^{-12}$) to guarantee safety.</p>
                </div>
            </div>
        `
    },
    "calc-marathon-1": {
        title: "The Grand Synthesis",
        subtitle: "The Infinity Marathon Part 1",
        content: `
            <div class="lesson-section">
                <h2>I. Cross-Unit Integration</h2>
                <p>In this final module, we combine everything. Typical BC FRQ: \"Given a polar curve $r(\\theta)$, find the Taylor polynomial for the area function $A(\\theta)$ and its Euler approximation.\"</p>
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
    },
    // ==========================================================
    // UNIT 11: BC EXAM ARCHIVES (2023-2025)
    // ==========================================================
    "calc-u11-1": {
        title: "11.1: 2023 Official Practice",
        subtitle: "Foundational Standards",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-university" style="color:#00d2ff"></i> 2023 Sample Logic</h3>
                <p>The 2023 sample sets focused heavily on <strong>Taylor Convergence</strong> and <strong>Parametric Area</strong>. Many students lost points by not checking the endpoints of the interval of convergence.</p>
            </div>
            <h3>Simulation: The Convergence Boundary</h3>
            <p><strong>Problem:</strong> Find the interval of convergence for $\\sum \\frac{(x-2)^n}{n \\cdot 3^n}$.</p>
            <p><strong>Decoding Strategy:</strong> Ratio test gives $|x-2| < 3 \\to -1 < x < 5$. You MUST test $x=-1$ and $x=5$ separately. At $x=-1$, it's an alternating harmonic (Converges). At $x=5$, it's harmonic (Diverges). Interval: $[-1, 5)$.</p>
        `
    },
    "calc-u11-2": {
        title: "11.2: 2024 Released Exam (Actual)",
        subtitle: "Physics & Series Masters",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-trophy" style="color:#ffd700"></i> The 2024 Gold Standard</h3>
                <p>2024 FRQs were heavy on <strong>Particle Motion (FRQ 2)</strong> and <strong>Maclaurin Series (FRQ 6)</strong>.</p>
            </div>
            <h3>Simulation: 2024 FRQ 2 (Parametric Motion)</h3>
            <p><strong>Context:</strong> A particle moves with velocity vector $v(t) = \\langle \\cos(t^2), e^t \\rangle$. Find the position at $t=1$ if $x(0)=2, y(0)=0$.</p>
            <p><strong>Scoring Insight:</strong> $x(1) = 2 + \\int_0^1 \\cos(t^2) dt$. You must use your calculator to evaluate the integral. The setup alone is worth 2/9 points.</p>
            
            <h3>Simulation: 2024 FRQ 6 (The Series Boss)</h3>
            <p><strong>Context:</strong> Using the Alternating Series Estimation Theorem to show the error in $P_3(1)$ is less than $1/1000$.</p>
        `
    },
    "calc-u11-3": {
        title: "11.3: 2025 Elite Prediction",
        subtitle: "Rigor & Justification",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-bolt" style="color:#ff5e62"></i> 2025 Hard Mode</h3>
                <p>Expect 2025 to increase rigor in <strong>Differential Equation Justification</strong>?봲pecifically Slope Fields with Euler's Method error analysis.</p>
            </div>
            <h3>Mock FRQ: Euler vs. Reality</h3>
            <p><strong>Problem:</strong> If $dy/dx = x+y$ and $y(0)=1$, use Euler's method with $\\Delta x = 0.5$ to estimate $y(1)$. Is it an over/under estimate?</p>
            <p><strong>The 'Elite' Answer:</strong> Calculate $y'' = 1 + dy/dx = 1 + x + y$. Since $x, y > 0$, $y'' > 0$ (Concave Up). Therefore, the Euler tangent line approximation is an <strong>Underestimate</strong>.</p>
        `
    }
};


