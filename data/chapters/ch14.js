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

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin: 30px 0; border-top: 1px solid var(--accent-orange); padding: 25px;">
                    <h5 style="color: var(--accent-orange); margin-bottom: 20px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Trig Identities Intuition</h5>
                    <div style="position: relative; width: 100%; max-width: 500px; margin: 0 auto; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(255,157,0,0.2);">
                        <iframe src="https://www.youtube.com/embed/9vKqVkMQHKk" style="position: absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                    </div>
                    <p style="font-size: 0.8rem; margin-top: 15px; text-align: center; opacity: 0.7;">3Blue1Brown explores why these identities are fundamental to the "Essence" of mathematics.</p>
                </div>

                <h2>I. The Pythagorean Engine</h2>
                <p>The unit circle identity $x^2 + y^2 = 1$ is the parent of all trigonometric identities. By dividing through, we generate the entire family of relations.</p>
                
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 25px; background: rgba(0,0,0,0.2);">
                    <h5 style="color: var(--accent-orange); margin-bottom: 20px; text-align: center;"><i class="fas fa-bullseye"></i> Visual Intuition: The Unit Circle Kernel</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg width="240" height="240" viewBox="0 0 240 240">
                            <!-- Axes -->
                            <line x1="20" y1="120" x2="220" y2="120" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                            <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                            
                            <!-- Circle -->
                            <circle cx="120" cy="120" r="80" fill="none" stroke="rgba(255,157,0,0.2)" stroke-width="2" />
                            
                            <!-- Triangle -->
                            <path d="M 120 120 L 180 120 L 180 67 Z" fill="rgba(255,157,0,0.1)" stroke="var(--accent-orange)" stroke-width="2" />
                            
                            <!-- Radius line to edge -->
                            <line x1="120" y1="120" x2="180" y2="67" stroke="var(--accent-orange)" stroke-width="3" />
                            
                            <!-- Labels -->
                            <text x="150" y="135" fill="var(--accent-orange)" font-size="10" font-weight="bold">cos θ</text>
                            <text x="185" y="100" fill="var(--accent-cyan)" font-size="10" font-weight="bold">sin θ</text>
                            <text x="140" y="90" fill="white" font-size="10" transform="rotate(-41 120 120)">r = 1</text>
                        </svg>
                        <p style="font-size: 0.85rem; opacity: 0.8; text-align: center;">
                            On a circle with $r=1$, the coordinates are $(\cos \theta, \sin \theta)$.<br>
                            Pythagoras gives us: $\mathbf{\cos^2 \theta + \sin^2 \theta = 1}$
                        </p>
                    </div>
                </div>

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
                
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 25px; background: rgba(0,0,0,0.2);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-satellite"></i> Visual Intuition: SLAM Triangulation</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg width="320" height="140" viewBox="0 0 320 140">
                            <!-- Robot path -->
                            <line x1="40" y1="110" x2="280" y2="110" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4" />
                            
                            <!-- Landmark -->
                            <polygon points="160,20 170,40 150,40" fill="var(--accent-magenta)" opacity="0.8" />
                            <circle cx="160" cy="30" r="15" fill="none" stroke="var(--accent-magenta)" stroke-dasharray="2" opacity="0.3" />
                            <text x="160" y="55" text-anchor="middle" fill="var(--accent-magenta)" font-size="10">Landmark</text>
                            
                            <!-- Triangle at Pos 1 -->
                            <circle cx="60" cy="110" r="5" fill="var(--accent-cyan)" />
                            <line x1="60" y1="110" x2="160" y2="35" stroke="var(--accent-cyan)" stroke-width="1.5" stroke-dasharray="3" />
                            <text x="60" y="125" text-anchor="middle" fill="var(--accent-cyan)" font-size="9">Pos A</text>
                            
                            <!-- Triangle at Pos 2 -->
                            <circle cx="200" cy="110" r="5" fill="var(--accent-blue)" />
                            <line x1="200" y1="110" x2="160" y2="35" stroke="var(--accent-blue)" stroke-width="1.5" stroke-dasharray="3" />
                            <text x="200" y="125" text-anchor="middle" fill="var(--accent-blue)" font-size="9">Pos B</text>
                            
                            <!-- Known Baseline -->
                            <line x1="60" y1="110" x2="200" y2="110" stroke="var(--accent-cyan)" stroke-width="2" />
                            <text x="130" y="125" text-anchor="middle" fill="white" font-size="9">Known Baseline (d)</text>
                        </svg>
                        <p style="font-size: 0.85rem; opacity: 0.8; text-align: center;">
                            By measuring angles from two known positions ($A, B$) to a single landmark, <br>
                            the <strong>Law of Sines</strong> calculates the exact range to that object.
                        </p>
                    </div>
                </div>
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


