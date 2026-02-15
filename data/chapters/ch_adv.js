window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch_adv"] = {
    "ch_adv-1": {
        title: "1.1 Partial Derivatives: Slopes in Multi-Dimensional Space",
        subtitle: "Multivariable Calculus - Rates of Change",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-mountain"></i> Section I: Navigating the Terrain (The Zoom Logic)</h3>
                    <p>A multivariable function $z = f(x, y)$ is like a 3D landscape. The slope when walking in just one direction (parallel to the x-axis) is the <strong>Partial Derivative</strong>. The key is to treat all other variables as 'fixed' constants.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:linear-gradient(45deg, rgba(0,210,255,0.05), rgba(157,80,187,0.05));">
                    <h4><i class="fas fa-project-diagram"></i> The Slicing Mechanism</h4>
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <!-- Plane representing Y = Y0 -->
                        <polygon points="40,40 220,10 260,110 80,140" fill="rgba(0,163,255,0.1)" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2"/>
                        <!-- The Surface Slice Curve -->
                        <path d="M 80,110 Q 150,40 230,60" stroke="var(--accent-magenta)" fill="transparent" stroke-width="3"/>
                        <!-- Tangent line -->
                        <line x1="110" y1="85" x2="190" y2="35" stroke="var(--accent-magenta)" stroke-width="2" stroke-dasharray="4"/>
                        <circle cx="150" cy="58" r="4" fill="var(--accent-magenta)"/>
                        <!-- Labels -->
                        <text x="50" y="35" fill="var(--accent-cyan)" font-size="10">Cutting Plane (y = y₀)</text>
                        <text x="200" y="85" fill="var(--accent-magenta)" font-size="10">Slope = ∂f/∂x</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">By fixing $y$, we reduce the 3D surface to a 2D curve, making the concept of 'slope' intuitive again.</p>
                </div>

                <h2>II. Mathematical Mechanism</h2>
                <p>For a function $f(x, y)$, the partial derivative with respect to $x$ is defined as the limit where only $x$ changes:</p>
                <div class="math-block">
                    $$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x, y)}{h}$$
                </div>
                
                <div class="glass-card elite-border">
                    <h5><i class="fas fa-bolt"></i> Elite Calculus Protocol</h5>
                    <p>Calculation for $f(x, y) = \\sin(x^2 y)$:</p>
                    <ul class="glass-list">
                        <li><strong>Differentiate wrt x:</strong> $y$ is constant. Using chain rule: $\\cos(x^2 y) \\cdot (2xy)$.</li>
                        <li><strong>Differentiate wrt y:</strong> $x^2$ is constant. Result: $\\cos(x^2 y) \\cdot (x^2)$.</li>
                    </ul>
                </div>

                <h2>III. Advanced Apps: Tangent Planes</h2>
                <p>While single-variable functions have tangent lines, multivariable functions have <strong>Tangent Planes</strong>. The equation at $(x_0, y_0, z_0)$ is:</p>
                <div class="math-block" style="color:var(--accent-cyan);">
                    $$z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$
                </div>

                <div class="practice-section glass" style="margin-top:30px; border-top: 2px solid var(--accent-magenta); padding:20px;">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-edit"></i> Elite Practice Set</h4>
                    <div class="problem-card" style="margin-bottom:15px;">
                        <p><strong>Q1.</strong> If $f(x, y) = e^{xy} + \\ln(x)$, find $f_x(1, 2)$.</p>
                        <details class="glass-details">
                            <summary>Show Solution</summary>
                            <div class="solution">
                                <p>$f_x = y e^{xy} + \\frac{1}{x}$. Substituting $x=1, y=2$ gives $2e^2 + 1$.</p>
                            </div>
                        </details>
                    </div>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> CS Connection: Backpropagation</h4>
                    <p>Neural networks optimize thousands of weights ($w$) by calculating the <strong>partial derivative</strong> of the error function with respect to each weight. Deep learning is essentially a massive collection of synchronized partial derivatives.</p>
                </div>
            </div>
        `
    },
    "ch_adv-2": {
        title: "1.2 Gradient Vectors & Directional Derivatives",
        subtitle: "The Path of Steepest Ascent",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-magenta);">
                    <h3><i class="fas fa-location-arrow"></i> Section I: Finding the Steepest Way</h3>
                    <p>The <strong>Gradient ($\\nabla f$)</strong> is a vector made of all partial derivatives. It always points in the direction where the function increases 'most rapidly'.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-compass"></i> Orthogonality of Gradient</h4>
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <!-- Level Curves (Equipotential lines) -->
                        <ellipse cx="150" cy="90" rx="100" ry="60" stroke="rgba(0,163,255,0.2)" fill="transparent" stroke-width="1"/>
                        <ellipse cx="150" cy="90" rx="70" ry="42" stroke="rgba(0,163,255,0.4)" fill="transparent" stroke-width="1"/>
                        <ellipse cx="150" cy="90" rx="40" ry="24" stroke="rgba(0,163,255,0.6)" fill="transparent" stroke-width="1.5"/>
                        <!-- Gradient Vectors at points -->
                        <g transform="translate(190, 55) rotate(-30)">
                            <line x1="0" y1="0" x2="30" y2="0" stroke="var(--accent-magenta)" stroke-width="2"/>
                            <polygon points="30,0 24,-3 24,3" fill="var(--accent-magenta)"/>
                        </g>
                        <g transform="translate(150, 30)">
                            <line x1="0" y1="0" x2="0" y2="-30" stroke="var(--accent-magenta)" stroke-width="2"/>
                            <polygon points="0,-30 -3,-24 3,-24" fill="var(--accent-magenta)"/>
                        </g>
                        <text x="160" y="20" fill="var(--accent-magenta)" font-size="10">Max Steepness (∇f)</text>
                        <text x="210" y="160" fill="var(--accent-cyan)" font-size="10">Level Curve (f=const)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">The gradient vector points in the direction of <strong>max rate of change</strong>, which is always perpendicular (orthogonal) to the path of zero change (the level curve).</p>
                </div>

                <h2>II. Directional Derivatives</h2>
                <p>To find the slope in an arbitrary direction $\\vec{u}$, perform the Dot Product with the gradient.</p>
                <div class="math-block">
                    $$D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u} = |\\nabla f| \\cos \\theta$$
                </div>

                <div class="practice-section glass" style="margin-top:20px; padding:15px;">
                    <h5 style="color:var(--accent-cyan);">Mastery Check</h5>
                    <p>When is $D_{\\vec{u}} f$ maximized? When $\\cos \\theta = 1$, meaning $\\vec{u}$ aligns with the gradient direction.</p>
                </div>
            </div>
        `
    },
    "ch_adv-3": {
        title: "1.3 Multiple Integrals: Calculating Volumes",
        subtitle: "Multiple Integrals - Volume & Density",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-layer-group"></i> Section I: Iterated Sums (The Slicing Logic)</h3>
                    <p>While single integrals find the area under a curve, <strong>Double Integrals</strong> find the volume under a surface. Think of it as stacking thin slices to form a solid.</p>
                </div>

                <div class="math-block">
                    $$V = \\iint_R f(x, y) dA = \\int_a^b \\int_c^d f(x, y) dy dx$$
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,163,255,0.02); border:1px solid rgba(0,163,255,0.1);">
                    <h4><i class="fas fa-cube"></i> Volume as an Iterated Sum</h4>
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <!-- Base Rectangle -->
                        <polygon points="50,130 150,110 250,130 150,150" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)"/>
                        <!-- Volume Pillars (Simulated) -->
                        <rect x="140" y="70" width="20" height="60" fill="rgba(0,163,255,0.3)" stroke="var(--accent-cyan)"/>
                        <rect x="110" y="80" width="20" height="45" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)"/>
                        <rect x="170" y="85" width="20" height="40" fill="rgba(0,163,255,0.1)" stroke="var(--accent-cyan)"/>
                        <!-- Integration path -->
                        <path d="M 50,135 L 150,115 L 250,135" stroke="var(--accent-magenta)" fill="transparent" stroke-width="1.5" stroke-dasharray="4"/>
                        <text x="120" y="60" fill="var(--accent-cyan)" font-size="10">Volume Elements (dA · height)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Just as an area is an infinite sum of widths, volume is an infinite sum of <strong>area slices</strong> or <strong>rectangular pillars</strong>.</p>
                </div>

                <h2>II. Fubini's Theorem</h2>
                <p>If the region $R$ is rectangular and the function is continuous, you can switch the order of integration without changing the result.</p>
                
                <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; border:1px dashed var(--accent-blue);">
                    <p style="font-size:0.9rem;"><i class="fas fa-redo"></i> **Elite Insight:** Sometimes $dy dx$ is 10x easier than $dx dy$. Always analyze the boundaries before rushing into calculation.</p>
                </div>
            </div>
        `
    },
    "ch_adv-4": {
        title: "2.1 The Skeleton of Space: Basis & Dimension",
        subtitle: "Vector Spaces - Linear Foundations",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-cube"></i> Section I: The Recipe of Space</h3>
                    <p>Every element in a vector space is built from a few 'core vectors'. These are called the <strong>Basis</strong>, and the number of basis vectors is the <strong>Dimension</strong> of that space.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                        <!-- Grid -->
                        <path d="M 20 130 L 180 130 M 30 20 L 30 140" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                        <!-- Basis Vectors -->
                        <line x1="30" y1="130" x2="80" y2="130" stroke="var(--accent-cyan)" stroke-width="3"/>
                        <line x1="30" y1="130" x2="30" y2="80" stroke="var(--accent-magenta)" stroke-width="3"/>
                        <polygon points="80,130 75,127 75,133" fill="var(--accent-cyan)"/>
                        <polygon points="30,80 27,85 33,85" fill="var(--accent-magenta)"/>
                        <text x="85" y="140" fill="var(--accent-cyan)" font-size="10">e₁ (1,0)</text>
                        <text x="5" y="75" fill="var(--accent-magenta)" font-size="10">e₂ (0,1)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">The standard basis vectors ($e_1, e_2$) form the grid that defines 2D space.</p>
                </div>

                <h2>II. Linear Independence</h2>
                <p>To be a basis, vectors must be independent—no vector in the set can be represented as a combination of others. There must be NO redundant information.</p>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-microchip"></i> CS Connection: Data Compression (PCA)</h5>
                    <p>Principal Component Analysis (PCA) finds the most important 'basis' in high-dimensional data, allowing us to compress it while stripping away noise.</p>
                </div>
            </div>
        `
    },
    "ch_adv-5": {
        title: "2.2 Linear Transformations: Movement of Space",
        subtitle: "Matrices as Operators",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-blue);">
                    <h3><i class="fas fa-expand-arrows-alt"></i> Section I: Matrix as a Mapping</h3>
                    <p>A matrix-vector product $A\\vec{v}$ moves a vector to a new location. Scaling, rotating, and shearing space are all <strong>Linear Transformations</strong> expressed by matrices.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-th"></i> Transformation of a Unit Square</h4>
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- Original Grid -->
                        <g opacity="0.3">
                            <rect x="40" y="40" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="#fff"/>
                            <text x="35" y="95" fill="#fff" font-size="8">Before</text>
                        </g>
                        <!-- Arrow -->
                        <line x1="100" y1="60" x2="150" y2="60" stroke="var(--accent-cyan)" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <!-- Transformed Grid (Shear Example) -->
                        <g transform="translate(180, 40)">
                            <polygon points="0,0 60,0 80,40 20,40" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)" stroke-width="2"/>
                            <text x="25" y="55" fill="var(--accent-cyan)" font-size="8">After (Shear)</text>
                        </g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-cyan)" />
                            </marker>
                        </defs>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Matrices do not just move points; they <strong>warp the very grid</strong> of space itself.</p>
                </div>

                <h2>II. Determinants & Area Scaling</h2>
                <p>The <strong>Determinant</strong> $\\det(A)$ represents how the area (or volume) changes after transformation. If $\\det(A)=0$, space has collapsed into a lower dimension.</p>

                <div class="practice-section glass" style="margin-top:20px; border-top: 2px solid var(--accent-blue); padding:15px;">
                    <h5 style="color:var(--accent-blue);">Practice Set</h5>
                    <p><strong>Q.</strong> Write the matrix that scales the x-axis by a factor of 2.</p>
                    <details class="glass-details">
                        <summary>Show Solution</summary>
                        <p>$\\begin{bmatrix} 2 & 0 \\ 0 & 1 \\end{bmatrix}$</p>
                    </details>
                </div>
            </div>
        `
    },
    "ch_adv-6": {
        title: "2.3: The Power of Eigenvalues",
        subtitle: "The Invariant Directions of Space",
        vizConfig: {
            expressions: [
                "f(x,y) = (1.5x, 0.5y)",
                "v_1 = (1, 0)",
                "v_2 = (0, 1)"
            ],
            bounds: { left: -3, right: 3, bottom: -3, top: 3 }
        },
        content: `
            <p>In most transformations, vectors change direction. But for every matrix, there are special "privileged" directions that stay the same. These are **Eigenvectors**.</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-dna"></i> The DNA of a Matrix</h4>
                <p>Eigenvectors are the vectors that only get scaled (stretched or squished) but never rotated. The factor by which they are scaled is the **Eigenvalue** ($\\lambda$).</p>
            </div>
            <div class="math-block">
                $$A\\vec{v} = \\lambda\\vec{v}$$
            </div>
            <h3>1. Why They Matter</h3>
            <ul>
                <li><strong>Principal Component Analysis (PCA)</strong>: Finding the most important directions in big data.</li>
                <li><strong>Structural Engineering</strong>: Analyzing resonance and stability.</li>
                <li><strong>Google PageRank</strong>: Your search results are literally the eigenvector of the web's link matrix.</li>
            </ul>
        `
    }
};
