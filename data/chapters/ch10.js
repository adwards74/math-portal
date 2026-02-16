window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch10"] = {
    "ch10-1": {
        title: "10.1 Exploring Conic Sections",
        subtitle: "The Slices of Reality",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-eye"></i> The Perspective Warp</h3>
                    <p>Conics are the result of **Slicing 3D Reality**. Depending on the angle of your 'blade' (the intersection plane), you get a circle, ellipse, parabola, or hyperbola. It is the same data, just viewed from different perspectives.</p>
                </div>

                <h2>I. The Universal Identifier</h2>
                <p>Every conic section follows the general second-degree equation: $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$. By looking at the coefficients, we can predict the shape before graphing.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <h4>The Conic Discriminant ($B^2 - 4AC$)</h4>
                    <ul class="glass-list">
                        <li>$< 0$: **Ellipse** (or Circle if $A=C, B=0$)</li>
                        <li>$= 0$: **Parabola**</li>
                        <li>$> 0$: **Hyperbola**</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-cube"></i> Image Processing</h4>
                <p>Computer vision algorithms use these discriminants to detect objects. When a camera sees a circular coin from an angle, it becomes an **Ellipse**. The math of conics allows the software to 'un-warp' the image and calculate the original shape.</p>
            </div>
        `
    },
    "ch10-2": {
        title: "10.2 Circles & Distance",
        subtitle: "The Locus of Equality",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-puzzle-piece"></i> The Completion Pattern</h3>
                    <p>Completing the Square is not just a trick; it's **Reconstructing the Center**. By forcing the equation into a perfect square, you reveal the 'Gravity Center' ($h, k$) of the shape. It is the algebraic equivalent of 'centering the camera'.</p>
                </div>

                <h2>I. Standard Form vs. General Form</h2>
                <p>A circle is rarely given in its clean $(x-h)^2 + (y-k)^2 = r^2$ form. Usually, you encounter the **General Form**: $x^2 + y^2 + Dx + Ey + F = 0$.</p>
                
                <div class="proof-box glass">
                    <h4>The Conversion Algorithm</h4>
                    <p>To find the center and radius, we must <strong>Complete the Square</strong> twice? nce for $x$ and once for $y$. This is the same logic used in Chapter 5, but scaled for 2D space.</p>
                </div>
            </div>
        `
    },
    "ch10-3": {
        title: "10.3 Ellipses & Orbits",
        subtitle: "The Two-Focus Geometry",
        content: `
            <div class="lesson-section">
                <h2>I. Major & Minor Realities</h2>
                <p>An ellipse consists of two axes: the <strong>Major Axis</strong> (longest diameter) and the <strong>Minor Axis</strong> (shortest diameter).</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <p><strong>Eccentricity ($e = c/a$):</strong> A measure of how "stretched" the ellipse is.</p>
                    <ul class="glass-list" style="margin-top:10px;">
                        <li>$e = 0$: Perfect Circle.</li>
                        <li>$0 < e < 1$: Ellipse.</li>
                        <li>$e \\\\to 1$: Extremely flat, needle-like orbit.</li>
                    </ul>
                </div>

                <div class="tj-edge glass" style="margin-top:20px; border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-rocket"></i> SpaceX & HOHMANN Transfer</h4>
                    <p>Changing orbits in space (like going from Earth to Mars) involves moving along an **Elliptical Transfer Orbit**. By calculating the exact eccentricity, engineers ensure the spacecraft meets the planet at the perfect tangent point.</p>
                </div>
            </div>
        `
    },
    "ch10-4": {
        title: "10.4 Hyperbolas & GPS",
        subtitle: "The Difference of Distances",
        content: `
            <div class="lesson-section">
                <h2>I. The Unbound Path</h2>
                <p>Unlike circles and ellipses, a hyperbola is an **Open Curve**. It describes objects that are not captured by a gravity well, but merely "deflected" by it.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <h4>Asymptote Architecture</h4>
                    <p>Every hyperbola $\\\\frac{x^2}{a^2} - \\\\frac{y^2}{b^2} = 1$ is boxed in by two diagonal lines: $y = \\\\pm \\\\frac{b}{a}x$.</p>
                    <p style="margin-top:10px;">These lines represent the 'target' velocity of a spacecraft as it escapes a planet's influence.</p>
                </div>

                <div class="tj-edge glass" style="margin-top:20px; border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-meteor"></i> GRAVITY ASSIST (Slingshot)</h4>
                    <p>When the Voyager probes visited the outer planets, they used <strong>Hyperbolic Trajectories</strong>. By aiming carefully, they used a planet's gravity to "bend" their path and gain velocity, effectively stealing a tiny bit of the planet's orbital momentum. The math of hyperbolas made interstellar travel possible.</p>
                </div>
            </div>
        `
    },
    "ch10-rev": {
        title: "Chapter 10 Review Challenge",
        subtitle: "The Orbit Architect",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: The Geometry of Motion</h2>
                <p>Conic sections are not just shapes on paper; they are the fundamental tracks of the universe. From subatomic particles to colliding galaxies, everything moves along a conic.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Identification</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use the discriminant and coefficients to classify curves instantly.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Symmetry</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize the roles of h, k, a, and b in centering and stretching shapes.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Locus Laws</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand conics as sets of points governed by distance constants (Sum vs Difference).</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">Application</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Connect theory to GPS triangulation and orbital mechanics.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Conic Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>How does changing a '+' to a '-' in the standard equation fundamentally flip a curve from 'Closed' (Ellipse) to 'Open' (Hyperbola)?</li>
                    <li>Why is 'Completing the Square' the primary tool for extracting physical meaning (Center/Radius) from standard algebra?</li>
                    <li>If a planet's eccentricity $e$ were to reach 1.0, what would happen to its orbit around the sun?</li>
                </ol>
            </div>
        `
    }
};


