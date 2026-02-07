window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["precalc"] = {
    // ==========================================================
    // UNIT 1: POLYNOMIAL & RATIONAL DYNAMICS
    // ==========================================================
    // ==========================================================
    // UNIT 1: POLYNOMIAL & RATIONAL DYNAMICS
    // ==========================================================
    "precalc-u1-1": {
        title: "1.1: Change & Concavity (Level 4 Mastery)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-microscope" style="color:#ffd700"></i> Elite Insight</h3>
                <p>On the AP Exam, the "Numerical Approach" is king. They won't just give you a graph; they will give you a <strong>Finite Difference Table</strong>. If the rate of change is decreasing while y is increasing, the function is <strong>Concave Down</strong>.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Mastery Justification Protocol</h4>
                <p>To get full credit on the FRQ, use this exact sentence structure:</p>
                <div class="logic-box" style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; font-style: italic;">
                    "Since the average rate of change on the interval [a, b] is [increasing/decreasing] while the function values are [increasing/decreasing], the function is concave [up/down] on the interval."
                </div>
            </div>

            <h3>1. The Logic of Discrete Rate of Change</h3>
            <p>In Algebra 1, we calculated slope as a constant. In Precalc, we analyze how that slope <em>changes</em>. This is the precursor to the Second Derivative in Calculus.</p>
            <div class="math-block">
                $$ r(x) = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} \\text{ (Average Rate of Change)} $$
            </div>
            
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; text-align: center; background: linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-eye"></i> Visual Logic: Concave Down</h4>
                <div style="display: flex; justify-content: center; align-items: flex-end; height: 100px; gap: 5px;">
                    <div style="width: 20px; height: 30%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.5;"></div>
                    <div style="width: 20px; height: 60%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.7;"></div>
                    <div style="width: 20px; height: 80%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.9;"></div>
                    <div style="width: 20px; height: 90%; background: var(--accent-magenta); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 20px; height: 95%; background: var(--accent-magenta); border-radius: 4px 4px 0 0; opacity: 0.8;"></div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">Notice: The "jumps" are getting smaller ($30\\% \\to 20\\% \\to 10\\% \\to 5\\%$). <br>The growth is <strong>Slowing Down</strong> = Concave Down.</p>
            </div>

            <div class="example-card glass" style="margin-top:20px;">
                <h4><i class="fas fa-table"></i> Numerical Deep Dive (AP Style)</h4>
                <table style="width:100%; text-align:center; border-collapse:collapse; margin:15px 0;">
                    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th>x</th><td>0</td><td>2</td><td>4</td><td>6</td></tr>
                    <tr><th>f(x)</th><td>10</td><td>15</td><td>18</td><td>20</td></tr>
                    <tr style="color:var(--accent-cyan);"><th>$\\Delta f$</th><td></td><td>+5</td><td>+3</td><td>+2</td></tr>
                </table>
                <p><strong>Analysis:</strong> As $x$ increases by 2, the changes in $f(x)$ are $5 \\to 3 \\to 2$. Since the rate of increase is dropping, the acceleration is negative $\implies$ <strong>Concave Down</strong>.</p>
            </div>
        `
    },
    "precalc-u1-2": {
        title: "1.2: The Battle of Scale (Dominance Mastery)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-crown" style="color:#ffd700"></i> The Dictator Rule</h3>
                <p>As $x \\to \\infty$, all terms in a polynomial surrender to the highest degree term. In computer science, we call this <strong>Big-O Dominance</strong>.</p>
            </div>

            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; background: rgba(255,100,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                <h4><i class="fas fa-compress-alt"></i> Visualizing Scale: $f(x) = 3x^4 - 500x^2 + 10x$</h4>
                <div style="display:flex; justify-content:space-around; align-items:center; margin-top:15px;">
                    <div style="text-align:center;">
                        <span style="font-size:0.8rem; color:var(--accent-magenta);">At $x=1$</span><br>
                        <div style="font-weight:bold;">$3 - 500 + 10 = -487$</div>
                        <small style="color:var(--accent-red);">(Quadratic wins)</small>
                    </div>
                    <div style="font-size:1.5rem;"><i class="fas fa-arrow-right"></i></div>
                    <div style="text-align:center;">
                        <span style="font-size:0.8rem; color:var(--accent-cyan);">At $x=100$</span><br>
                        <div style="font-weight:bold;">$300M - 5M + 1K \\approx 300M$</div>
                        <small style="color:var(--accent-green);">(Quartic dominates!)</small>
                    </div>
                </div>
            </div>

            <h3>1. End Behavior Mastery</h3>
            <p>To identify end behavior, only look at the leading term $ax^n$:</p>
            <ul>
                <li><strong>Even Degree ($n$), Positive $a$:</strong> $\\lim_{x \\to \\pm\\infty} f(x) = \\infty$ (Touchdown arms)</li>
                <li><strong>Odd Degree ($n$), Positive $a$:</strong> Same as $y=x$ (Dancing style)</li>
            </ul>
        `
    },
    "precalc-u1-3": {
        title: "1.3: Rational Dynamics (Discontinuity Mastery)",
        content: `
            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-magenta); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-microscope"></i> The 2-Step Analysis Protocol</h4>
                <ol>
                    <li>Factor both $N(x)$ and $D(x)$.</li>
                    <li><strong>Match Found?</strong> $\\to$ <strong>Hole</strong> (Removable).</li>
                    <li><strong>Mismatch in Denominator?</strong> $\\to$ <strong>Vertical Asymptote</strong> (Pole).</li>
                </ol>
            </div>

            <h3>1. Removable vs. Non-Removable</h3>
            <div class="grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:15px;">
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-green);">
                    <h4 style="color:var(--accent-green);">The "Hole" Logic</h4>
                    <p>If $(x-c)$ cancels, the function is undefined strictly at $c$, but the limit exists.</p>
                </div>
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-red);">
                    <h4 style="color:var(--accent-red);">The "VA" Logic</h4>
                    <p>If $(x-c)$ remains in $D(x)$, the values explode. <strong>Limit is $\\pm\\infty$</strong>.</p>
                </div>
            </div>
            
            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-bolt"></i> AP Mastery Trap</h4>
                <p>A function can have a Horizontal Asymptote at $y=L$, but it CAN still cross that line in the middle. <strong>A Horizontal Asymptote only dictates the "End Behavior", not the middle behavior.</strong></p>
            </div>
        `
    },
    "precalc-u1-4": {
        title: "1.4: AP Continuity Mastery",
        content: `
            <div class="intuition-box glass" style="border-right:4px solid var(--accent-cyan);">
                <h3><i class="fas fa-link"></i> The 3-Step Legal Proof</h3>
                <p>For a function to be continuous at $x=c$, you must satisfy ALL THREE:</p>
                <div class="logic-box" style="margin:10px 0; background:rgba(0,0,0,0.2); border-radius:10px; padding:15px;">
                    1. $f(c)$ is defined.<br>
                    2. $\\lim_{x \\to c} f(x)$ exists ($L = R$).<br>
                    3. $\\lim_{x \\to c} f(x) = f(c)$.
                </div>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border: 1px dashed var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-fingerprint"></i> FRQ Justification Protocol</h4>
                <p>Standard response for proving continuity:</p>
                <div style="background:rgba(0,0,0,0.4); padding:10px; border-radius:5px; font-style:italic;">
                    "The function $f(x)$ is continuous at $x=c$ because $f(c)$ is defined as [value], $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = [value]$, and the limit equals the function value."
                </div>
            </div>

            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; text-align: center; background: linear-gradient(135deg, rgba(255,255,0,0.1), rgba(0,0,0,0.5));">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-eye"></i> Visual Logic: Continuity</h4>
                <div style="display: flex; justify-content: center; align-items: center; height: 100px; gap: 30px;">
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-green); border-radius: 50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:10px; height:10px; background:var(--accent-green); border-radius:50%; top:calc(50% - 5px); left:calc(50% - 5px);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-green); transform:rotate(45deg);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-green); transform:rotate(-45deg);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-green);">Hole (Limit Exists)</p>
                    </div>
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-red); display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px);"></div>
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px); transform:translateX(-20px);"></div>
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px); transform:translateX(20px);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-red);">VA (Limit DNE)</p>
                    </div>
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-magenta); display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-magenta); left:calc(50% - 1px); transform:translateY(-20px);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-magenta); left:calc(50% - 1px); transform:translateY(20px);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-magenta);">Jump (Limit DNE)</p>
                    </div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">Continuity requires no holes, no VAs, and no jumps.</p>
            </div>

            <div class="tj-edge glass">
                <h4><i class="fas fa-exclamation-triangle"></i> The Piecewise Trap</h4>
                <p>On the AP exam, they will give you a piecewise function and ask for the value of '$k$' to make it continuous. <strong>Always set the Left limit equal to the Right limit and solve.</strong></p>
            </div>
        `
    },

    // ==========================================================
    // UNIT 2: EXPONENTIAL & LOGISTIC (Modeling Deep Dive)
    // ==========================================================
    "precalc-u2-1": {
        title: "2.1: The Magnitude Compressor (Log Logic)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-compress-arrows-alt"></i> Why Logs?</h3>
                <p>Logarithms are the "zoom out" lens of mathematics. They turn multiplication into addition and exponential explosion into linear growth.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; background:linear-gradient(to right, rgba(0,210,255,0.1), rgba(255,0,255,0.1));">
                <h4><i class="fas fa-eye"></i> Visualizing Magnitude (Base 10)</h4>
                <div style="display:flex; align-items:flex-end; height:60px; gap:10px; justify-content:center;">
                    <div style="width:10px; height:2px; background:var(--accent-cyan);"></div>
                    <div style="width:10px; height:20px; background:var(--accent-cyan);"></div>
                    <div style="width:10px; height:50px; background:var(--accent-magenta);"></div>
                </div>
                <p style="font-size:0.8rem; margin-top:10px;">Linear Scale: $1 \\to 10 \\to 100$ (Impossible to graph together)<br>
                <strong>Log Scale: $0 \\to 1 \\to 2$ (Perfect for data analysis)</strong></p>
            </div>

            <h3>1. The Master Property</h3>
            <div class="math-block">
                $$ \\log_b(m \\cdot n) = \\log_b(m) + \\log_b(n) $$
            </div>
            <p>This property allows us to "linearize" products. In AP Precalc, you must be able to use logs to solve for time ($t$) in exponential growth models.</p>
        `
    },
    "precalc-u2-2": {
        title: "2.2: Logistic Dynamics (Mastering the Inflection)",
        content: `
            <div class="mastery-box glass" style="border-left:4px solid var(--accent-cyan); margin:20px 0; padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-chart-area"></i> The Inflection Protocol</h4>
                <p>A logistic model $f(x) = \\frac{L}{1+ae^{-bx}}$ has a <strong>Carrying Capacity $L$</strong>. The point of fastest growth occurs at exactly $y = L/2$.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; text-align:center;">
                <div style="display:inline-block; position:relative; width:200px; height:100px; border-left:1px solid #fff; border-bottom:1px solid #fff;">
                    <svg viewBox="0 0 200 100" style="width:100%; height:100%;">
                        <path d="M 0 95 Q 100 95 100 50 T 200 5" fill="none" stroke="var(--accent-magenta)" stroke-width="2" />
                        <circle cx="100" cy="50" r="3" fill="var(--accent-cyan)" />
                    </svg>
                    <p style="font-size:0.7rem; color:var(--accent-cyan);">Fastest Growth Point ($L/2$)</p>
                </div>
            </div>

            <h3>1. Mastery Justification</h3>
            <p>If asked to justify when a phenomenon is growing faster and faster:</p>
            <div class="logic-box" style="font-style:italic; background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                "The rate of growth is increasing while $0 < y < L/2$ (concave up) and decreasing after $y > L/2$ (concave down)."
            </div>
        `
    },
    "precalc-u2-3": {
        title: "2.3: Semi-Log Analysis (Mastery)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-magic"></i> The Linearization Trick</h3>
                <p>Data $(x, y)$ that follows $y=ab^x$ will look like a straight line if you transform it to $(x, \\ln y)$.</p>
            </div>

    <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
        <h4 style="color:var(--accent-cyan);"><i class="fas fa-brain"></i> The Conversion Roadmap</h4>
        <p>If the linear regression of $(x, \\ln y)$ is $Y = 0.5x + 1.2$:</p>
        <ul>
            <li>Slope ($0.5$) $= \\ln(b) \\implies b = e^{0.5}$</li>
            <li>Intercept ($1.2$) $= \\ln(a) \\implies a = e^{1.2}$</li>
        </ul>
    </div>
`
    },
    "precalc-u2-4": {
        title: "2.4: Model Validation (Residual Mastery)",
        content: `
            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px;">
                <h4><i class="fas fa-chart-bar"></i> Residual Plot Verdict</h4>
                <div style="display:flex; justify-content:space-around; align-items:center;">
                    <div style="text-align:center;">
                        <i class="fas fa-random" style="font-size:2rem; color:var(--accent-green);"></i><br>
                        <small>Random Scatter</small><br>
                        <strong>GOOD MODEL</strong>
                    </div>
                    <div style="text-align:center;">
                        <i class="fas fa-wave-square" style="font-size:2rem; color:var(--accent-red);"></i><br>
                        <small>Pattern/Curve</small><br>
                        <strong>BAD MODEL</strong>
                    </div>
                </div>
            </div>

            <div class="mastery-box glass" style="border-right:4px solid var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-edit"></i> FRQ Justification</h4>
                <p>"Since the residual plot shows a <strong>random scatter</strong> of points with no clear pattern, the linear model is an appropriate fit for the transformed data."</p>
            </div>
        `
    },

    // ==========================================================
    // UNIT 3: TRIGONOMETRIC MASTERY (The Harmonic Path)
    // ==========================================================
    "precalc-u3-1": {
        title: "3.1: The Rotation Generator (Mastery)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-redo"></i> Radian Logic</h3>
                <p>A radian is the angle where the arc length equals the radius. It is a "pure" number, unlike degrees. This is why we use it in Calculus?봳o keep our units "natural."</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:radial-gradient(circle, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4><i class="fas fa-circle-notch"></i> The Rotating Engine</h4>
                <div style="position:relative; width:100px; height:100px; border:2px solid #fff; border-radius:50%; margin:15px auto;">
                    <div style="position:absolute; width:50%; height:2px; background:var(--accent-magenta); top:50%; left:50%; transform-origin:left center; transform:rotate(-45deg);"></div>
                    <div style="position:absolute; width:100%; height:1px; background:rgba(255,255,255,0.2); top:50%;"></div>
                    <div style="position:absolute; width:1px; height:100%; background:rgba(255,255,255,0.2); left:50%;"></div>
                </div>
                <p style="font-size:0.8rem;">Angle $\\theta \implies$ Point $(\\cos\\theta, \\sin\\theta)$</p>
            </div>

            <div class="mastery-box glass" style="border-left:4px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-wave-square"></i> Periodic Modeling Protocol</h4>
                <p>Standard Equation: $f(t) = a\\sin(b(t-h)) + d$</p>
                <ul>
                    <li>$|a|$: Amplitude (half the range).</li>
                    <li>$d$: Midline (average value).</li>
                    <li>$period$: $2\\pi/|b|$.</li>
                </ul>
            </div>
        `
    },
    "precalc-u3-2": {
        title: "3.2: Inverse Trig (Domain Mastery)",
        content: `
            <div class="intuition-box glass" style="border-right:4px solid var(--accent-magenta);">
                <h3><i class="fas fa-lock"></i> The Domain Prison</h3>
                <p>To make trig functions invertible, we must restrict them to a <strong>Principal Branch</strong> where they are One-to-One.</p>
                <ul style="font-size:0.9rem;">
                    <li>$\\arcsin(x)$: $[-\\pi/2, \\pi/2]$ (Quadrants I & IV)</li>
                    <li>$\\arccos(x)$: $[0, \\pi]$ (Quadrants I & II)</li>
                    <li>$\\arctan(x)$: $(-\\pi/2, \\pi/2)$ (Quadrants I & IV)</li>
                </ul>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-exclamation-triangle"></i> AP Mastery Trap</h4>
                <p>The equation $\\sin(x) = 0.5$ has INFINITE solutions. However, $\\arcsin(0.5)$ has only ONE: $\\pi/6$. <strong>Never provide multiple answers for an inverse trig function.</strong></p>
            </div>
        `
    },
    "precalc-u3-3": {
        title: "3.3: Polar Dynamics (Mastery)",
        content: `
            <div class="mastery-box glass" style="border-top:3px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-compass"></i> Mapping the Shift</h4>
                <div class="math-block">
                    $$ x = r\\cos\\theta, \quad y = r\\sin\\theta, \quad r^2 = x^2+y^2, \quad \\tan\\theta = y/x $$
                </div>
            </div>

            <h3>1. Analyzing Polar Rate of Change</h3>
            <p>This is the most "Calculus" part of Unit 3. We look at $dr/d\\theta$:</p>
            <ul>
                <li>$dr/d\\theta > 0$: Curve is moving <strong>away from the pole</strong>.</li>
                <li>$dr/d\\theta < 0$: Curve is moving <strong>toward the pole</strong>.</li>
            </ul>
            
            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; text-align:center;">
                <svg viewBox="0 0 100 100" style="width:80px; height:80px;">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" />
                    <path d="M 50 50 Q 70 30 90 50" fill="none" stroke="var(--accent-magenta)" stroke-width="2" />
                    <circle cx="90" cy="50" r="3" fill="var(--accent-magenta)" />
                </svg>
                <p style="font-size:0.8rem;">Polar Path: The distance $r$ is a function of rotation.</p>
            </div>
        `
    },
    "precalc-u3-4": {
        title: "3.4: Trig Identities & Harmonic Refactoring",
        content: `
            <h3>1. The Pythagorean Trinity</h3>
            <p>The identity $\\sin^2\\theta + \\cos^2\\theta = 1$ is just the Pythagorean theorem applied to the unit circle. From this, we derive the identities for $\\sec, \\tan, \\csc, \\text{ and } \\cot$.</p>
            <h3>2. Sum & Difference Formulas</h3>
            <p>These allow us to calculate exact values like $\\sin(15^\\circ)$ by breaking them into $(45^\\circ - 30^\\circ)$. These formulas are the "bit-shifting" equivalent of trig?봫anipulating components for precise results.</p>
            <div class="math-block">
                $$ \\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B $$
            </div>
        `
    },

    // ==========================================================
    // UNIT 4: ADVANCED FUNCTIONS (Conics & Vectors)
    // ==========================================================
    "precalc-u4-1": {
        title: "4.1: Parametric Mastery (Decoupling Time)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-history"></i> The 3rd Dimension: Time ($t$)</h3>
                <p>Instead of $y$ depending on $x$, both depend on $t$. This allows us to track <strong>position and speed</strong> simultaneously.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; text-align:center;">
                <div style="position:relative; width:200px; height:50px; border-bottom:1px solid #fff; margin:10px auto;">
                    <div style="position:absolute; width:10px; height:10px; background:var(--accent-magenta); border-radius:50%; left:20%; bottom:0;"></div>
                    <div style="position:absolute; width:10px; height:10px; background:var(--accent-magenta); border-radius:50%; left:50%; bottom:0; opacity:0.5;"></div>
                    <div style="position:absolute; width:10px; height:10px; background:var(--accent-magenta); border-radius:50%; left:80%; bottom:0; opacity:0.2;"></div>
                </div>
                <p style="font-size:0.8rem;">Particle at $t=1, t=2, t=3$.</p>
            </div>

            <h3>1. Eliminating the Parameter</h3>
            <p>To see the "shape" of the path, solve for $t$ in one equation (usually $x$) and substitute into the other.</p>
            <div class="logic-box" style="font-style:italic; background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                "Equation for $x$ gives you the 'search' for time. Substituting into $y$ gives you the height at that exact moment."
            </div>
        `
    },
    "precalc-u4-2": {
        title: "4.2: Vector Mastery (Force & Direction)",
        content: `
            <div class="mastery-box glass" style="border-left:4px solid var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-arrows-alt"></i> Component Decomposition</h4>
                <div class="math-block">
                    $$ \\vec{v} = |v|\\cos\\theta, |v|\\sin\\theta $$
                </div>
            </div>

            <h3>1. Dot Product: The "Collaboration" Metric</h3>
            <p>The dot product tells you how much two vectors are working together. If $\\vec{u} \\cdot \\vec{v} = 0$, they are <strong>orthogonal</strong> (perpendicular).</p>
            
            <div class="tj-edge glass">
                <h4><i class="fas fa-bolt"></i> Physics Link</h4>
                <p>Work is the dot product of Force and Displacement. If you push a wall but it doesn't move, the dot product (Work) is zero!</p>
            </div>
        `
    },
    "precalc-u4-3": {
        title: "4.3: Matrix Mastery (Linear Warping)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-th"></i> Matrices as Functions</h3>
                <p>A matrix isn't just a table of numbers; it's a <strong>Transformation Machine</strong>. It takes a vector and spits out a new, transformed version of it.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; border:1px solid rgba(255,255,255,0.2);">
                <h4 style="font-size:0.9rem;">Identity $\\to$ Rotation</h4>
                <div style="display:flex; justify-content:center; gap:20px;">
                    <div style="width:40px; height:40px; border:1px solid #fff;"></div>
                    <i class="fas fa-arrow-right" style="align-self:center;"></i>
                    <div style="width:40px; height:40px; border:1px solid var(--accent-cyan); transform:rotate(30deg);"></div>
                </div>
            </div>

            <h3>1. The Determinant Verdict</h3>
            <p>If $\\det(A) = 0$, the matrix squashes the entire space into a lower dimension (a line or a point). This means the transformation is <strong>not invertible</strong> (you can't "un-squash" it).</p>
        `
    },
    "precalc-u4-4": {
        title: "4.4: Conics in Parametric Form",
        content: `
            <h3>1. Orbits and Circularity</h3>
            <p>Standard Cartesian conics are hard to graph. Parametric forms are clean and intuitive for modeling orbits.</p>
            <ul>
                <li><strong>Circle:</strong> $x = \\cos t, y = \\sin t$</li>
                <li><strong>Ellipse:</strong> $x = a\\cos t, y = b\\sin t$</li>
            </ul>
            <div class="tj-edge glass">
                <h4><i class="fas fa-satellite"></i> SpaceX Sync</h4>
                <p>Orbital mechanics uses these parametric definitions to calculate precisely when a satellite will be over a certain coordinate. The angle $\\theta$ changes slowly or quickly depending on the altitude (Kepler's Laws).</p>
            </div>
        `
    },

    // ==========================================================
    // UNIT 5: CALCULUS PREREQUISITES (The Limit Bridge)
    // ==========================================================
    "precalc-u5-1": {
        title: "5.1: The Limit Concept",
        content: `
            <h3>1. The GPS Mentality</h3>
            <p>A limit asks: "As we get closer to $x=c$, where is the function heading?" It doesn't matter if there is a hole at the actual point.</p>
        `
    },
    "precalc-u5-2": {
        title: "5.2: Continuity Defined (Formal)",
        content: `
            <h3>1. The Connected Path</h3>
            <p>Formal definitions of continuity lead to the Intermediate Value Theorem?봳he proof that you cannot teleport through a range of values.</p>
        `
    },
    "precalc-u5-3": {
        title: "5.3: Rate of Change (The Big Bridge)",
        content: `
            <h3>1. Secant vs. Tangent</h3>
            <p>The transition from Average Rate (Algebra) to Instantaneous Rate (Calculus) is the single most important bridge in mathematics.</p>
        `
    },

    // ==========================================================
    // UNIT 6: AP EXAM ARCHIVES (High-Fidelity Simulation)
    // ==========================================================
    "precalc-u6-1": {
        title: "6.1: 2023 Official Sample Exam",
        content: `
            <h3>1. The New Standard</h3>
            <p>Focus on justification. AP Scoring requires you to explain WHY a function is increasing or concave using specific interval language.</p>
        `
    },
    "precalc-u6-2": {
        title: "6.2: 2024 Released Exam (Actual)",
        content: `
            <h3>1. The Inaugural Battle</h3>
            <p>The 2024 FRQs focused on modeling real-world phenomena (Tire heights, Sales growth) using sinusoidals and logs.</p>
        `
    },
    "precalc-u6-3": {
        title: "6.3: 2025 Elite Prediction",
        content: `
            <h3>1. The Hard Mode Frontier</h3>
            <p>Expect deeper questions on parametric conics and matrix area transformations (determinants) as the course matures.</p>
        `
    }
};


