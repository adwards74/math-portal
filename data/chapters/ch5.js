window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch5"] = {
    "ch5-1": {
        title: "5.1 & 5.2 Parabolas & Vertex Form",
        subtitle: "The Geometry of Perfection & Optics",
        content: `
            <div class="lesson-section">
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
                        <li>The distance from Vertex to Focus is $p = \\\\frac{1}{4a}$.</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-satellite-dish"></i> The Optical Property</h4>
                <p>Parallel rays hitting a parabolic surface always reflect through the Focus. This is why telescope mirrors are parabolic. In gaming, parabolic arcs are used to calculate the ideal trajectory of a projectile to hit a specific target focus.</p>
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
                    <p>Expand $(x - r_1)(x - r_2) = x^2 - (r_1 + r_2)x + (r_1 \\\\cdot r_2)$. Matching this with $x^2 + \\\\frac{b}{a}x + \\\\frac{c}{a} = 0$ reveals the secret constants!</p>
                </div>
            </div>
        `
    },
    "ch5-4": {
        title: "5.4 Complex Numbers Intro",
        subtitle: "The Imaginary Unit i",
        content: `
            <div class="lesson-section">
                <h2>I. The Argand Plane</h2>
                <p>Complex numbers $a + bi$ are not "imaginary" in the sense that they don't exist; they simply represent a <strong>2D Coordinate</strong> in the Complex Plane ($x$=Real, $y$=Imaginary).</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-sync"></i> Multiplication as Rotation</h4>
                    <p>Multiplying a number by $i$ results in a <strong>90-degree counter-clockwise rotation</strong> in the plane. In signal processing and electrical engineering, complex numbers are the standard tool for analyzing alternating currents (AC) and wave functions.</p>
                </div>
            </div>
        `
    },
    "ch5-5": {
        title: "5.5 Completing the Square",
        subtitle: "Forcing Symmetry",
        content: `
            <div class="lesson-section">
                <h2>I. The Perfect Square Algorithm</h2>
                <p>Completing the Square is a technique to transform a general quadratic $ax^2 + bx + c$ into the vertex form $a(x-h)^2 + k$. It is the "Manual Override" for finding the vertex without a formula.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-cyan);">
                    <h4>The Identity Logic</h4>
                    <p>To make $x^2 + bx$ a perfect square, we add $(b/2)^2$. This is based on the identity: $(x + h)^2 = x^2 + 2hx + h^2$.</p>
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
                        <p style="font-size:0.85rem; opacity:0.8;">2 Complex Roots. The parabola never touches the X-axis.</p>
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
                <p>Solving $f(x) \\\\ge 0$ means finding the intervals of $x$ where the parabola is <strong>on or above</strong> the X-axis.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-orange);">
                    <h4><i class="fas fa-microscope"></i> Boundary Logic</h4>
                    <p>Always solve the equation $f(x) = 0$ first to find the <strong>Critical Points</strong>. Then, test a point in each interval to see where the inequality holds TRUE.</p>
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


