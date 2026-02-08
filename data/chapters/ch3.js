window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch3"] = {
    "ch3-1": {
        title: "3.1 & 3.2 Solving Systems",
        subtitle: "Substitution vs. Elimination Algorithms",
        content: `
            <div class="lesson-section">
                <h2>I. The Classification of Systems</h2>
                <p>A system of linear equations doesn't always have one solution. We classify systems based on the **Existence** and **Uniqueness** of their intersection.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-crosshairs"></i> The Uniqueness of State</h3>
                    <p>A system of equations is a set of <strong>logical constraints</strong>. If only one solution exists, your system is perfectly defined. If none exist, your constraints are contradictory. If infinite exist, your code is redundant.</p>
                </div>

                <table class="glass-table" style="width:100%; margin-top:15px;">
                    <tr><th>Classification</th><th>Geometry</th><th>Solutions</th></tr>
                    <tr><td><strong>Consistent Independent</strong></td><td>Lines Intersect</td><td>One Unique Solution</td></tr>
                    <tr><td><strong>Consistent Dependent</strong></td><td>Lines Overlap</td><td>Infinitely Many</td></tr>
                    <tr><td><strong>Inconsistent</strong></td><td>Parallel Lines</td><td>No Solution</td></tr>
                </table>
            </div>

            <div class="proof-box glass" style="margin-top:20px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-cogs"></i> Choice of Algorithm</h4>
                <p><strong>Substitution:</strong> Best for 'Sparse' systems where one equation is simple. <br>
                <strong>Elimination (Addition Method):</strong> The standard for 'Dense' systems. It is the core logic behind <strong>Gaussian Elimination</strong> in Linear Algebra.</p>
            </div>

            <h2>II. Practice Problems</h2>
            <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 1:</strong> Solve using substitution: $y = 2x + 1$ and $3x + y = 11$</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Substitute $2x + 1$ for $y$ in the second equation.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">$3x + (2x+1) = 11 \\rightarrow 5x = 10 \\rightarrow x = 2, y = 5$</p>
                    </details>
                </div>

                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 2:</strong> Solve using elimination: $2x + 3y = 12$ and $4x - 3y = 6$</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Add the equations to eliminate $y$.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">$6x = 18 \\rightarrow x = 3$, then $y = 2$. Solution: $(3, 2)$</p>
                    </details>
                </div>

                <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 3:</strong> Classify: $y = 2x + 3$ and $y = 2x - 1$. Consistent or Inconsistent?</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Compare the slopes and y-intercepts. Same slope, different intercept = parallel lines.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;"><strong>Inconsistent</strong> - Parallel lines, no intersection.</p>
                    </details>
                </div>

                <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                    <p><strong>Problem 4:</strong> Find the intersection of $x + y = 7$ and $x - y = 1$</p>
                    <details style="margin-top:10px;">
                        <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                        <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Add the equations to find $x$, then substitute back.</p>
                    </details>
                    <details style="margin-top:8px;">
                        <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                        <p style="margin-top:8px;">$2x = 8 \\rightarrow x = 4, y = 3$. Intersection: $(4, 3)$</p>
                    </details>
                </div>
            </div>
        `
    },
    "ch3-3": {
        title: "3.3 Systems of Inequalities",
        subtitle: "Defining the Feasible Region",
        content: `
            <div class="lesson-section">
                <h2>I. Solution Sets as Regions</h2>
                <p>While an equation defines a 1D line, an inequality defines a 2D <strong>Half-Plane</strong>. The solution to a system of inequalities is the <strong>Intersection</strong> of these planes.</p>
                
                <div class="paradigm-shift" style="border-left-color: var(--accent-orange);">
                    <h4>Boundary Analysis</h4>
                    <ul class="glass-list">
                        <li><strong>Dashed Line ($<$ or $>$):</strong> The boundary itself is NOT included (Exclusive).</li>
                        <li><strong>Solid Line ($\\\\le$ or $\\\\ge$):</strong> The boundary IS included (Inclusive).</li>
                    </ul>
                </div>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-filter"></i> CS Integration: Hit-Testing</h4>
                    <p>In mobile apps, when you tap a button, the OS runs a 3.3 inequality system check: Is <code>user_x > button_left</code> AND <code>user_x < button_right</code>? If all inequalities are TRUE, the 'Feasible Region' (the button) is triggered.</p>
                </div>
            </div>
        `
    },
    "ch3-4": {
        title: "3.4 Linear Programming",
        subtitle: "The Science of Optimization",
        content: `
            <div class="lesson-section">
                <h2>I. Maximizing under Constraints</h2>
                <p><strong>Linear Programming</strong> is a method used to find the optimal value (maximum or minimum) of an objective function, subject to a set of linear inequalities known as <strong>Constraints</strong>.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-mountain"></i> The Peak Principle</h3>
                    <p>Optimization is like finding the highest point on a mountain range, but you are only allowed to walk in a fenced-in yard (Feasible Region). The math proves that the 'highest peak' will always be one of the fence's corners.</p>
                </div>

                <div class="proof-box glass" style="border-left-color: var(--accent-green);">
                    <h4>The Vertex Principle</h4>
                    <p>The **Fundamental Theorem of Linear Programming** states that if an optimal solution exists, it MUST occur at one of the **Vertices** (corners) of the feasible region.</p>
                </div>

                <div class="example-box glass" style="margin-top:20px;">
                    <p><strong>Step-by-Step Optimization:</strong></p>
                    <ol class="glass-list">
                        <li>Graph the constraints to find the <strong>Feasible Region</strong>.</li>
                        <li>Identify the coordinates of all <strong>Vertices</strong>.</li>
                        <li>Substitute each vertex into the <strong>Objective Function</strong>.</li>
                        <li>Select the highest (Maximum) or lowest (Minimum) result.</li>
                    </ol>
                </div>
            </div>
        `
    },
    "ch3-5": {
        title: "3.5 Systems with 3 Variables",
        subtitle: "The 3rd Dimension (x, y, z)",
        content: `
            <div class="lesson-section">
                <h2>I. Geometry of 3D Space</h2>
                <p>In 3D, a linear equation $ax + by + cz = d$ represents a <strong>Plane</strong>. A system of 3 equations describes the intersection of 3 planes.</p>
                
                <div class="paradigm-shift" style="border-left-color: var(--accent-blue);">
                    <h4>Algorithmic Approach: Gaussian Elimination</h4>
                    <p>In 3D, we use a systematic "Pair-wise Reduction" strategy:</p>
                    <ol>
                        <li>Pick two equations and eliminate one variable ($z$).</li>
                        <li>Pick another pair and eliminate the SAME variable ($z$).</li>
                        <li>You now have a 2x2 system. Solve it normally for $x$ and $y$.</li>
                        <li>Substitute back to find $z$.</li>
                    </ol>
                </div>
            </div>
        `
    },
    "ch3-rev": {
        title: "Chapter 3 Review Challenge",
        subtitle: "The Chief Optimization Officer (COO) Mission",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Systems</h2>
                <p>Systems of equations and inequalities provide the framework for <strong>Constraint Satisfaction Problemet (CSP)</strong>. By mastering these, you can optimize any logical system.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Algorithmic Stability</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand when a system is redundant (Dependent) or broken (Inconsistent).</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Optimal Vertices</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize that the best answer always lies on the boundaries of what is possible.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Higher Dimensions</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Scale your reasoning from 2D lines to 3D planes and beyond.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Logical Masking</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use systems of inequalities to define valid states in complex environments.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Reflection: The System Architect</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>If two planes are parallel, what can we say about the solution to the 3-variable system?</li>
                    <li>In Linear Programming, why is it unnecessary to check points inside the feasible region?</li>
                    <li>How does the 'Elimination' method naturally lead to Matrix algebra?</li>
                </ol>
            </div>
        `
    }
};


