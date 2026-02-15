window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch14"] = {
    "ch14-1": {
        title: "14.1 Fundamental Identities",
        subtitle: "The Basic Units of Oscillation",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-tools"></i> The Refactoring Toolkit</h3>
                    <p>Identities are the **Logical Equivalent** of things. They allow you to swap a complex, expensive calculation for a simple, efficient one without changing the outcome. It is the ultimate optimization tool in geometry.</p>
                </div>

                <h2>I. The Pythagorean Engine</h2>
                <p>The unit circle identity $x^2 + y^2 = 1$ is the parent of all trigonometric identities. By dividing through, we generate the entire family of relations.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <ul class="glass-list">
                        <li><strong>Primary:</strong> $\\sin^2 \\theta + \\cos^2 \\theta = 1$</li>
                        <li><strong>Tangent-Secant:</strong> $1 + \\tan^2 \\theta = \\sec^2 \\theta$</li>
                        <li><strong>Cotangent-Cosecant:</strong> $1 + \\cot^2 \\theta = \\csc^2 \\theta$</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-microchip"></i> CS: Computational Reduction</h4>
                <p>In low-level graphics code, calculating two trig functions is twice as slow as one. Using these identities, we can compute $\\cos \\theta$ using only the stored value of $\\sin \\theta$ through a simple square root and subtraction. This <strong>Algebraic Bypass</strong> is a staple of efficient engine design.</p>
            </div>
        `
    },
    "ch14-2": {
        title: "14.2 The Art of Proof",
        subtitle: "Verifying Identities",
        content: `
            <div class="lesson-section">
                <h2>I. Proof Strategy Architecture</h2>
                <p>Proving an identity is an exercise in **Refactoring**. Your goal is to simplify a complex expression until it matches a target "Base Case".</p>
                
                <div class="proof-box glass">
                    <h4>The Developer's Strategy</h4>
                    <ol class="glass-list">
                        <li><strong>Sine/Cosine Reduction:</strong> Convert Tangent, Secant, etc. into their S/C components.</li>
                        <li><strong>Algebraic Unification:</strong> Use common denominators to combine fractions.</li>
                        <li><strong>Pattern Matching:</strong> Look for $a^2 - b^2$ or $1 - \\sin^2 \\theta$ to substitute identities.</li>
                    </ol>
                </div>
            </div>
        `
    },
    "ch14-3": {
        title: "14.3 Sum & Double Angles",
        subtitle: "Decompressing Complex Rotations",
        content: `
            <div class="lesson-section">
                <h2>I. Sum & Difference Architecture</h2>
                \\[\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B\\]
                \\[\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B\\]
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>The Double Angle Shortcut</h4>
                    <p>$\\sin(2\\theta) = 2 \\sin \\theta \\cos \\theta$</p>
                    <p>$\\cos(2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta$</p>
                </div>
            </div>
        `
    },
    "ch14-4": {
        title: "14.4 Solving Trig Systems",
        subtitle: "Finding the Angle",
        content: `
            <div class="lesson-section">
                <h2>I. The Infinite Solution Space</h2>
                <p>Because trig functions are periodic, one equation usually has infinite solutions. We must distinguish between solutions in a **Specific Interval** ($[0, 2\\pi)$) and the **General Solution**.</p>
                
                <div class="proof-box glass">
                    <h4>The Periodicity Factor</h4>
                    <p>If $\\sin x = 1/2$, the primary solutions are $x = \\pi/6$ and $x = 5\\pi/6$.</p>
                    <p style="margin-top:10px;">The <strong>General Solution</strong> adds the "loop" factor: $x = \\pi/6 + 2n\\pi$ and $5\\pi/6 + 2n\\pi$ (where $n$ is any integer).</p>
                </div>
            </div>
        `
    },
    "ch14-5": {
        title: "14.5 Law of Sines & Cosines",
        subtitle: "Solving the Arbitrary Triangle",
        content: `
            <div class="lesson-section">
                <h2>I. Triangulation Protocols</h2>
                <p>When a triangle isn't "Right", we use these two laws to solve for missing vectors.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Law of Sines</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Best for AAS or ASA cases. Relates side-angle ratios.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Law of Cosines</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Best for SAS or SSS. A generalization of Pythagoras ($c^2 = a^2 + b^2 - 2ab \\cos C$).</p>
                    </div>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px; border-left-color: var(--accent-cyan);">
                <h4><i class="fas fa-satellite"></i> CS: SLAM Algorithm</h4>
                <p>Robots use **Simultaneous Localization and Mapping (SLAM)** to navigate. By measuring the angle to a landmark from two different positions, they use the Law of Sines to calculate their exact distance to that object. Without this trig, automated vacuums and self-driving cars would be blind.</p>
            </div>
        `
    },
    "ch14-rev": {
        title: "Chapter 14 Review Challenge",
        subtitle: "The Global Architect",
        content: `
            <div class="lesson-section">
                <h2>I. Graduation: The Architect's Perspective</h2>
                <p>Congratulations. You have completed the core Algebra 2 curriculum. You no longer see just numbers; you see the functional architecture of the reality.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Identities</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">The ability to refactor complex expressions into simple core truths.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Equilibrium</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Solving equations by balancing the weights of oscillating variables.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Connectivity</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Using triangles to measure the scale of the planet and beyond.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">The Graduation</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Transitioning from Algebra to the continuous world of Calculus.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-magenta);">
                <h4><i class="fas fa-graduation-cap"></i> Final Synthesis: The Master Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>How does the "Pythagorean Identity" connect the static geometry of Chapter 1 to the dynamic waves of Chapter 14?</li>
                    <li>In what way is proving a trigonometric identity similar to "Code Refactoring" in software development?</li>
                    <li>Looking back at the entire course, how has your definition of a 'Function' evolved from a simple mapping to a tool for modeling the universe?</li>
                </ol>
            </div>
        `
    }
};


