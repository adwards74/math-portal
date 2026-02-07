window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch13"] = {
    "ch13-1": {
        title: "13.1 The Physics of Cycles",
        subtitle: "Periodic Functions & Amplitude",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-wave-square"></i> The Engine of Energy</h3>
                    <p>Trigonometric waves are the **Vibrations of the Universe**. From the light hitting your eyes to the AC power in your walls, everything that oscillates follows the circular path of Sine and Cosine.</p>
                </div>

                <h2>I. The Heartbeat of Math</h2>
                <p>A function is **Periodic** if it repeats its output exactly every $P$ units: $f(x + P) = f(x)$. This $P$ is the <strong>Period</strong>.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>Key Wave Metrics</h4>
                    <ul class="glass-list">
                        <li><strong>Amplitude ($|a|$):</strong> The maximum displacement from the midline. It represents 'energy' or 'volume'.</li>
                        <li><strong>Midline ($y=k$):</strong> The horizontal equilibrium point around which the function oscillates.</li>
                    </ul>
                </div>
            </div>
        `
    },
    "ch13-2": {
        title: "13.2 Angles & Rotation",
        subtitle: "Standard Position & Coterminal Angles",
        content: `
            <div class="lesson-section">
                <h2>I. Circular Direction</h2>
                <p>In trigonometry, we track position using **Terminal Sides**. Two angles are <strong>Coterminal</strong> if they share the same terminal side, differing only by full $360^{\\circ}$ rotations.</p>
                
                <div class="proof-box glass">
                    <p>$\\theta_{coterminal} = \\theta \\pm 360^{\\circ} \\cdot n$ (where $n$ is an integer).</p>
                </div>
            </div>
        `
    },
    "ch13-3": {
        title: "13.3 Radian Mastery",
        subtitle: "The Natural Language of Circles",
        content: `
            <div class="lesson-section">
                <h2>I. Pure Geometry</h2>
                <p>Degrees are arbitrary (why 360?). **Radians** are natural; they define an angle by the ratio of arc length to radius ($\\theta = s/r$).</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <p><strong>The Limit Insight:</strong> In Calculus, using radians allows for the elegant approximation $\\sin x \\approx x$ for small angles. Using degrees would require a messy multiplier of $\\pi/180$.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-code"></i> CS: Performance Optimization</h4>
                <p>In high-performance gaming engines, computing $\\sin(\\theta)$ is expensive. Developers often replace the function with a **Polynomial Approximation** (Taylor Series) that only works if $\\theta$ is in radians. This optimization is why modern VR can run at 120Hz!</p>
            </div>
        `
    },
    "ch13-4": {
        title: "13.4 The Sine Wave",
        subtitle: "Modeling Oscillation",
        content: `
            <div class="lesson-section">
                <h2>I. The Fundamental Wave</h2>
                <p>The parent function $y = \\sin(x)$ maps the $y$-coordinate of a point moving around the unit circle.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-green);">
                    <h4>Transformation Architecture</h4>
                    <p>$y = a \\sin(bx)$</p>
                    <ul class="glass-list" style="margin-top:10px;">
                        <li>$|a|$: Amplitude (Stretch vertically).</li>
                        <li>$P = \\frac{2\\pi}{b}$: Period (Stretch/Squeeze horizontally).</li>
                    </ul>
                </div>
            </div>
        `
    },
    "ch13-5": {
        title: "13.5 The Cosine Wave",
        subtitle: "Phase Shifted Reality",
        content: `
            <div class="lesson-section">
                <h2>I. The $x$-Coordinate Wave</h2>
                <p>Cosine tracks the horizontal displacement on the unit circle. It is identical to Sine but "leads" by 90 degrees ($\pi/2$).</p>
                
                <div class="proof-box glass">
                    <p>$\\cos(x) = \\sin(x + \\pi/2)$</p>
                    <p style="margin-top:10px;">In electronics, this shift is known as being **"Out of Phase"**. If two waves are perfectly out of phase, they cancel each other out (the math behind Noise Cancelling Headphones!).</p>
                </div>
            </div>
        `
    },
    "ch13-6": {
        title: "13.6 Tangent & Asymptotes",
        subtitle: "Slope Function",
        content: `
            <div class="lesson-section">
                <h2>I. Ratio Paradoxes</h2>
                <p>Tangent represents the slope ($\\frac{y}{x}$) of the terminal ray. Every time the ray points straight up or down ($x=0$), the slope explodes to infinity.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <h4>Asymptotic Pattern</h4>
                    <p>Period of Tangent = $\\pi$ (half a circle). It repeats twice as fast as Sine or Cosine because slopes repeat every $180^{\\circ}$.</p>
                </div>
            </div>
        `
    },
    "ch13-7": {
        title: "13.7 Phase Shifting",
        subtitle: "Translating Waves",
        content: `
            <div class="lesson-section">
                <h2>I. The Unified Transformation</h2>
                \\[y = a \\sin(b(x - h)) + k\\]
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">h (Phase Shift)</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The horizontal delay. Essential for synchronizing audio tracks.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">k (Midline)</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The vertical offset. Like adding a DC battery to an AC signal.</p>
                    </div>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px; border-left-color: var(--accent-cyan);">
                <h4><i class="fas fa-microchip"></i> CS: Signal Latency</h4>
                <p>In networking, <strong>Latency</strong> is a Phase Shift. If your data "wave" arrives late, it's shifted on the x-axis. Engineers use trigonometric math to predict and compensate for this shift to prevent 'lag' in multiplayer games.</p>
            </div>
        `
    },
    "ch13-8": {
        title: "13.8 Reciprocal Graphs",
        subtitle: "Cosecant, Secant, Cotangent",
        content: `
            <div class="lesson-section">
                <h2>I. The Inversion Rule</h2>
                <p>$\\csc(x)$, $\\sec(x)$, and $\\cot(x)$ are the reciprocals of the primary three. They undefined where the primary functions are zero.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-red);">
                    <p><strong>Cosecant:</strong> $\\frac{1}{\\sin(x)}$. As Sine approaches 0, Cosecant approaches $\\infty$. This inverse relationship is the key to calculating light refraction and lens focal lengths.</p>
                </div>
            </div>
        `
    },
    "ch13-rev": {
        title: "Chapter 13 Review Challenge",
        subtitle: "The Wave Engineer",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Harmonic Mastery</h2>
                <p>You have moved from static triangles to dynamic waves. Trigonometry is the math of energy—light, sound, electricity, and even the vibration of atoms.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Circle to Wave</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand how rotating around a circle creates an oscillating wave on a flat timeline.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Radian Fluidity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Think in terms of arc length for natural and scalable rotation math.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Modular Shifts</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Master the parameters that control height, length, and delay of a wave.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Slope Explosions</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize where ratios fail and asymptotes begin (Tangent/Reciprocals).</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-blue);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Wave Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>How does the Sine wave connect the discrete geometry of a triangle to the continuous motion of a wave?</li>
                    <li>If you multiply the $b$ value by 2 in $y = \\sin(bx)$, why does the period get *smaller*?</li>
                    <li>In what real-world scenarios would you need to calculate the phase shift ($h$) of two meeting signals?</li>
                </ol>
            </div>
        `
    }
};
