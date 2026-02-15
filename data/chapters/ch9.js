window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch9"] = {
    "ch9-1": {
        title: "9.1 Variation Theory",
        subtitle: "Direct vs. Inverse Scaling",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-balance-scale"></i> The Resource Cap</h3>
                    <p>Inverse variation is about **Sharing**. If you have a fixed slice of pizza ($k$), the more people ($x$) you share it with, the smaller each slice ($y$) becomes. It is the math of finite resources and load balancing.</p>
                </div>

                <h2>I. Inverse Variation: $y = k/x$</h2>
                <p>In an **Inverse Variation**, the product of two variables remains constant: $xy = k$. As one variable grows, the other must shrink to maintain the balance.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-orange);">
                    <p><strong>Constant of Variation ($k$):</strong> This is the "Total Effort" or "Resource Cap" of the system.</p>
                    <p style="margin-top:10px;">Example: If you have a fixed budget for a party, the cost per person is inversely proportional to the number of guests.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-network-wired"></i> CS: Load Balancing & Throughput</h4>
                <p>The time to process a 1GB file is inversely proportional to the **Bandwidth** of your network. If you double the speed ($x$), the time ($y$) is cut in half. Designing systems that scale inversely is the heart of cloud performance optimization.</p>
            </div>
        `
    },
    "ch9-2": {
        title: "9.2 Reciprocal Families",
        subtitle: "The Basic Hyperbola",
        content: `
            <div class="lesson-section">
                <h2>I. The Parent Hyperbola</h2>
                <p>The graph of $y = \\\\frac{a}{x-h} + k$ represents a transformation of the parent $1/x$.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <ul class="glass-list">
                        <li><strong>Vertical Asymptote:</strong> $x = h$ (Where the system crashes).</li>
                        <li><strong>Horizontal Asymptote:</strong> $y = k$ (The long-term limit).</li>
                        <li><strong>Branches:</strong> Exist in quadrants relative to the shifted center $(h, k)$.</li>
                    </ul>
                </div>
            </div>
        `
    },
    "ch9-3": {
        title: "9.3 Asymptote Analysis",
        subtitle: "The Unreachable Limits",
        content: `
            <div class="lesson-section">
                <h2>I. The Asymptote Protocol</h2>
                <p>Asymptotes represent the behavior of a function at its extremes. They are the "Guardrails" of the mathematical world.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>Determining the Horizontal Asymptote</h4>
                    <p>For $f(x) = \\\\frac{P(x)}{Q(x)}$ with leading terms $ax^n$ and $bx^d$:</p>
                    <ul class="glass-list" style="margin-top:10px;">
                        <li><strong>$n < d$:</strong> The denominator "wins" the race to infinity. $y = 0$.</li>
                        <li><strong>$n = d$:</strong> The leading coefficients tie. $y = a/b$.</li>
                        <li><strong>$n > d$:</strong> The numerator grows faster. No horizontal asymptote (often Slant/Oblique).</li>
                    </ul>
                </div>
            </div>
        `
    },
    "ch9-4": {
        title: "9.4 Rational Algebra",
        subtitle: "The Anatomy of a Hole",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-ghost"></i> The Discontinuity Duel</h3>
                    <p>When you divide by zero, the graph usually explodes into an **Asymptote**. But if a factor is canceled out from both top and bottom, it creates a **Hole** (Removable Discontinuity). It's a single pixel missing from an otherwise perfect line.</p>
                </div>

                <!-- VISUAL DYNAMIC: THE REMOVABLE POINT -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); text-align: center;">
                    <h5 style="color: var(--accent-orange); margin-bottom: 20px;"><i class="fas fa-bullseye"></i> Visualizing Discontinuity</h5>
                    <svg viewBox="0 0 400 100" width="350">
                        <!-- X Axis -->
                        <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                        <!-- The Graph (y = x+1) -->
                        <line x1="100" y1="80" x2="192" y2="43" stroke="var(--accent-cyan)" stroke-width="3"/>
                        <line x1="208" y1="36" x2="300" y2="10" stroke="var(--accent-cyan)" stroke-width="3"/>
                        <!-- The Hole -->
                        <circle cx="200" cy="40" r="5" fill="none" stroke="var(--accent-orange)" stroke-width="2"/>
                        <text x="215" y="55" fill="var(--accent-orange)" font-size="12">$(2, 3)$ is undefined</text>
                    </svg>
                    <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 15px;">$f(x) = \\frac{(x-2)(x+1)}{x-2}$ behaves like $y = x+1$, but vanishes exactly at $x=2$.</p>
                </div>

                <div class="mastery-protocol glass" style="border-left-color: var(--accent-green);">
                    <h4><i class="fas fa-clipboard-check"></i> 3-Step Hole Protocol</h4>
                    <ol style="font-size: 0.9rem; line-height: 1.8;">
                        <li><strong>Factor:</strong> Fully factor the numerator and denominator.</li>
                        <li><strong>Cancel:</strong> Identify factors appearing in BOTH. These are your "Hole Generators."</li>
                        <li><strong>Locate:</strong> Set the canceled factor to zero for the X-coord. Plug that X into the *remaining* function for the Y-coord.</li>
                    </ol>
                </div>

                <div class="tj-edge glass" style="margin-top: 30px; border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-microchip"></i> CS Analogy: Garbage Collection</h4>
                    <p>In programming, a "Dangling Pointer" is like a hole in a function. The memory address (factor) exists in the code, but if the underlying data (denominator) is cleared while the reference (numerator) remains, the system crashes if you try to access that exact point. Functional "Sanitization" is the act of identifying these holes before they cause a crash.</p>
                </div>
            </div>
        `
    },
    "ch9-5": {
        title: "9.5 Complex Fractions",
        subtitle: "Fractions within Fractions",
        content: `
            <div class="lesson-section">
                <h2>I. The LCD Efficiency</h2>
                <p>Simplifying complex fractions is about eliminating high-frequency "noise" (mini-denominators) to reveal the clean, underlying rational form.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-layer-group"></i> CS: Recursive Simplification</h4>
                    <p>In compiler design, simplifying nested expressions (like $1 / (1 + 1/x)$) uses a recursive algorithm similar to finding the LCD. Reducing depth is the key to faster execution.</p>
                </div>
            </div>
        `
    },
    "ch9-6": {
        title: "9.6 Solving Rational Systems",
        subtitle: "The Complexity of Fractions",
        content: `
            <div class="lesson-section">
                <h2>I. The Domain Guard Protocol</h2>
                <p>Solving rational equations is straightforward: multiply by LCD to clear fractions. But you MUST check your answers against the <strong>Excluded Values</strong>.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-heartbeat"></i> The Pulse Check</h3>
                    <p>Solving rational equations is like monitoring a patient's pulse. Most of the time it's steady, but a zero-denominator ($NullPointer$) is a fatal heart attack. Always audit your solutions against the 'Dead Zones' of the domain.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-check-double"></i> Mastery Protocol: Domain Exclusion Audit</h4>
                    <p>Before any algebra, list every $x$ that makes any denominator zero. These are your **Exclusion Zones**. If your final 'solution' lands in an exclusion zone, it is a false positive.</p>
                </div>
            </div>
        `
    },
    "ch9-rev": {
        title: "Chapter 9 Review Challenge",
        subtitle: "The Rational Architect",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Limits & Constraints</h2>
                <p>Rational functions define the boundaries of what is possible. They model the constraints of resources, the infinity of division, and the precision of digital systems.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Scaling Laws</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Identify inverse relationships where resources are shared or distributed.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Boundary Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Map vertical asymptotes to understand where systems become unstable.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Hole Detection</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Distinguish between permanent boundaries (asymptotes) and temporary gaps (holes).</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Validation</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Sanitizing inputs to prevent the logical disaster of division by zero.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-orange);">
                <h4><i class="fas fa-brain"></i> Reflection: The Rational Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>How does a 'Hole' differ from a 'Vertical Asymptote' in terms of algebraic cancellation?</li>
                    <li>If the degree of the numerator is MUCH larger than the denominator, what happens to the function as x goes to infinity?</li>
                    <li>Why is 'Clearing the Denominator' a potentially dangerous operation if not followed by verification?</li>
                </ol>
            </div>
        `
    }
};


