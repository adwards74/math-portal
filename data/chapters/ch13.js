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
                <p>Cosine tracks the horizontal displacement on the unit circle. It is identical to Sine but "leads" by 90 degrees ($\\pi/2$).</p>
                
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
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-arrows-alt-v"></i> The Reciprocal Identity Hub</h3>
                    <p>Trigonometry isn't just about three functions. Every primary ratio has an "inverse twin" that reveals where the original becomes zero or extreme. These functions—**Cosecant ($\\csc$)**, **Secant ($\\sec$)**, and **Cotangent ($\\cot$)**—are the keys to non-linear scaling.</p>
                </div>

                <!-- VISUAL DYNAMIC: THE FLIP LOGIC -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); text-align: center;">
                    <h5 style="color: var(--accent-red); margin-bottom: 20px;"><i class="fas fa-exchange-alt"></i> Visualizing Inversion: Sine vs. Cosecant</h5>
                    <svg viewBox="0 0 400 150" width="350">
                        <!-- Wave Guide -->
                        <path d="M 50,75 Q 100,25 150,75 T 250,75 T 350,75" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4"/>
                        <!-- Cosecant Curves -->
                        <path d="M 60,60 Q 100,10 140,60" fill="none" stroke="var(--accent-red)" stroke-width="3"/>
                        <path d="M 160,90 Q 200,140 240,90" fill="none" stroke="var(--accent-red)" stroke-width="3"/>
                        <!-- Points -->
                        <circle cx="100" cy="50" r="4" fill="var(--accent-cyan)"/>
                        <circle cx="100" cy="25" r="4" fill="var(--accent-red)"/>
                        <text x="110" y="55" fill="var(--accent-cyan)" font-size="10">$\sin(x) = 1$</text>
                        <text x="110" y="20" fill="var(--accent-red)" font-size="10">$\csc(x) = 1$</text>
                    </svg>
                    <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 15px;">Where Sine has a peak (value 1), Cosecant has a valley (value 1). Where Sine hits zero, Cosecant explodes to **Infinity**.</p>
                </div>

                <h2>I. The Big Three Reciprocals</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 20px;">
                    <div class="glass-card" style="border-top: 3px solid var(--accent-blue);">
                        <h6>$\\csc(x) = 1/\\sin(x)$</h6>
                        <p style="font-size: 0.8rem;">Asymptotes at $n\\pi$. Range: $(-\\infty, -1] \\cup [1, \\infty)$.</p>
                    </div>
                    <div class="glass-card" style="border-top: 3px solid var(--accent-magenta);">
                        <h6>$\\sec(x) = 1/\\cos(x)$</h6>
                        <p style="font-size: 0.8rem;">Asymptotes at $(2n+1)\\pi/2$. Twin of Cosecant shifted.</p>
                    </div>
                    <div class="glass-card" style="border-top: 3px solid var(--accent-orange);">
                        <h6>$\\cot(x) = 1/\\tan(x)$</h6>
                        <p style="font-size: 0.8rem;">The mirror of Tangent. Decreasing in every period.</p>
                    </div>
                </div>

                <div class="tj-edge glass" style="margin-top: 30px; border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-atom"></i> Physics Link: Geometric Optics</h4>
                    <p>In lens engineering, the **Magnification** of an image relates to the cosecant of the angle of incidence. When the angle goes to horizontal, the magnification becomes infinite—the mathematical reason why you can't focus on something infinitely thin.</p>
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
                <p>You have moved from static triangles to dynamic waves. Trigonometry is the math of energy? ight, sound, electricity, and even the vibration of atoms.</p>
                
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


