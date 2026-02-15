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
                <p><strong>Analysis:</strong> As $x$ increases by 2, the changes in $f(x)$ are $5 \\to 3 \\to 2$. Since the rate of increase is dropping, the acceleration is negative $\\implies$ <strong>Concave Down</strong>.</p>
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
                <p style="font-size:0.8rem;">Angle $\\theta \\implies$ Point $(\\cos\\theta, \\sin\\theta)$</p>
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
                    $$ x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad r^2 = x^2+y^2, \\quad \\tan\\theta = y/x $$
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
            <div class="intuition-box glass">
                <h3><i class="fas fa-location-arrow" style="color:#ffd700"></i> The GPS Mentality</h3>
                <p>A limit doesn't ask "Where ARE you?" — it asks "Where are you <strong>HEADING</strong>?" Even if there's a pothole (hole) at the destination, the GPS still knows where the road points. This is the foundation of all Calculus: analyzing <strong>tendency</strong>, not position.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Formal Notation</h4>
                <div class="math-block">
                    $$ \\lim_{x \\to c} f(x) = L $$
                </div>
                <p>Read as: "As $x$ approaches $c$, $f(x)$ approaches $L$." The function does NOT need to equal $L$ at $x=c$.</p>
            </div>

            <h3>1. One-Sided Limits</h3>
            <p>Sometimes the left and right paths disagree:</p>
            <div class="grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:15px;">
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-green);">
                    <h4 style="color:var(--accent-green);">Left-Hand Limit</h4>
                    <p>$\\lim_{x \\to c^-} f(x)$</p>
                    <p style="font-size:0.85rem; opacity:0.8;">Values approaching from the <strong>left</strong> (smaller values).</p>
                </div>
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-magenta);">
                    <h4 style="color:var(--accent-magenta);">Right-Hand Limit</h4>
                    <p>$\\lim_{x \\to c^+} f(x)$</p>
                    <p style="font-size:0.85rem; opacity:0.8;">Values approaching from the <strong>right</strong> (larger values).</p>
                </div>
            </div>
            <p style="margin-top:15px;"><strong>Critical Rule:</strong> The two-sided limit exists <strong>if and only if</strong> $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x)$.</p>

            <h3>2. Evaluating Limits</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4><i class="fas fa-list-ol"></i> The 3-Step Protocol</h4>
                <ol style="line-height:2.2;">
                    <li><strong>Direct Substitution:</strong> Plug in $x=c$. If you get a number, that's the limit. Done.</li>
                    <li><strong>$0/0$ Indeterminate?</strong> Factor, cancel, and try again. (e.g., $\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2$)</li>
                    <li><strong>$\\pm k/0$?</strong> The limit is $\\pm\\infty$ or DNE (check left/right behavior).</li>
                </ol>
            </div>

            <div class="example-card glass" style="margin-top:20px; padding:20px; border-left:3px solid var(--accent-cyan);">
                <h4><i class="fas fa-pencil-alt"></i> Worked Example: Removable Discontinuity</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Step 1:</strong> Direct sub → $\\frac{4-4}{2-2} = \\frac{0}{0}$ — Indeterminate!</div>
                        <div><strong>Step 2:</strong> Factor numerator: $\\frac{(x-2)(x+2)}{(x-2)}$</div>
                        <div><strong>Step 3:</strong> Cancel $(x-2)$: $= x + 2$</div>
                        <div><strong>Step 4:</strong> Now substitute: $2 + 2 = \\mathbf{4}$</div>
                        <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">The limit is $4$. Note: $f(2)$ is undefined, but the limit still exists!</div>
                    </div>
                </details>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-bolt"></i> Calculus Preview</h4>
                <p>The derivative is defined as a limit: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$. Every single derivative you ever compute in Calculus is just this limit evaluation technique applied to a rate formula.</p>
            </div>
        `
    },
    "precalc-u5-2": {
        title: "5.2: Continuity Defined (Formal)",
        content: `
            <div class="intuition-box glass" style="border-right:4px solid var(--accent-magenta);">
                <h3><i class="fas fa-link"></i> The Unbroken Chain</h3>
                <p>A continuous function is one you can draw <strong>without lifting your pen</strong>. Formally, this means three conditions must all hold simultaneously. If any one fails, the function has a "break" — a discontinuity.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-gavel"></i> The 3-Part Legal Test for Continuity at $x = c$</h4>
                <div class="logic-box" style="margin:10px 0; background:rgba(0,0,0,0.2); border-radius:10px; padding:15px; line-height:2.5;">
                    <strong>1.</strong> $f(c)$ is <strong>defined</strong> (the point exists).<br>
                    <strong>2.</strong> $\\lim_{x \\to c} f(x)$ <strong>exists</strong> (left = right).<br>
                    <strong>3.</strong> $\\lim_{x \\to c} f(x) = f(c)$ (the limit equals the value).
                </div>
                <p style="margin-top:10px; font-size:0.9rem; color:var(--accent-red);"><i class="fas fa-exclamation-triangle"></i> If ANY of these three fails → Discontinuous at $x=c$.</p>
            </div>

            <h3>1. Types of Discontinuity</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; text-align: center; background: linear-gradient(135deg, rgba(255,255,0,0.05), rgba(0,0,0,0.5));">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-eye"></i> Visual Classification</h4>
                <div style="display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap:wrap;">
                    <div style="text-align:center;">
                        <div style="width:60px; height:60px; border:2px solid var(--accent-green); border-radius:50%; margin:0 auto 8px; display:flex; align-items:center; justify-content:center;">
                            <div style="width:8px; height:8px; border:2px solid var(--accent-green); border-radius:50%; background:transparent;"></div>
                        </div>
                        <strong style="color:var(--accent-green);">Hole</strong><br>
                        <small>Removable<br>Limit exists, but ≠ f(c)</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:60px; height:60px; border:2px solid var(--accent-red); margin:0 auto 8px; display:flex; align-items:center; justify-content:center;">
                            <div style="width:2px; height:100%; background:var(--accent-red);"></div>
                        </div>
                        <strong style="color:var(--accent-red);">Vertical Asymptote</strong><br>
                        <small>Non-removable<br>Limit → ±∞</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:60px; height:60px; border:2px solid var(--accent-magenta); margin:0 auto 8px; display:flex; align-items:center; justify-content:center;">
                            <div style="width:20px; height:2px; background:var(--accent-magenta); transform:translateY(-10px);"></div>
                            <div style="width:20px; height:2px; background:var(--accent-magenta); transform:translateY(10px); position:absolute;"></div>
                        </div>
                        <strong style="color:var(--accent-magenta);">Jump</strong><br>
                        <small>Non-removable<br>Left ≠ Right limit</small>
                    </div>
                </div>
            </div>

            <h3>2. The Intermediate Value Theorem (IVT)</h3>
            <div class="glass-card" style="padding:20px; border-left:4px solid var(--accent-green); margin:15px 0;">
                <p><strong>If</strong> $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$,</p>
                <p><strong>then</strong> there exists at least one $c \\in (a, b)$ such that $f(c) = N$.</p>
                <p style="margin-top:10px; font-size:0.85rem; opacity:0.8;"><i class="fas fa-lightbulb"></i> Intuition: A continuous function cannot "skip" a value. It must pass through every y-value between its endpoints.</p>
            </div>

            <div class="example-card glass" style="margin-top:20px; padding:20px; border-left:3px solid var(--accent-magenta);">
                <h4><i class="fas fa-pencil-alt"></i> Worked Example: Finding $k$ for Continuity</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">$f(x) = \\begin{cases} 3x + k & x < 2 \\\\ x^2 + 1 & x \\geq 2 \\end{cases}$. Find $k$ so $f$ is continuous at $x = 2$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Step 1:</strong> Right-hand value: $f(2) = 2^2 + 1 = 5$</div>
                        <div><strong>Step 2:</strong> Left-hand limit: $\\lim_{x \\to 2^-} (3x + k) = 6 + k$</div>
                        <div><strong>Step 3:</strong> For continuity: $6 + k = 5$</div>
                        <div style="margin-top:8px; color:var(--accent-magenta); font-style:italic;">$k = -1$. This forces the left piece to "meet" the right piece at $x=2$.</div>
                    </div>
                </details>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border: 1px dashed var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-fingerprint"></i> FRQ Justification Protocol</h4>
                <div style="background:rgba(0,0,0,0.4); padding:10px; border-radius:5px; font-style:italic;">
                    "The function $f$ is continuous at $x=c$ because: (1) $f(c)$ is defined as [value], (2) $\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = $ [value], and (3) the limit equals the function value."
                </div>
            </div>
        `
    },
    "precalc-u5-3": {
        title: "5.3: Instantaneous Rate of Change (The Big Bridge)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-tachometer-alt" style="color:#ffd700"></i> The Speed Paradox</h3>
                <p>Your speedometer reads 60 mph — but that's your speed at a single <strong>instant</strong>. How can you have a "rate" at a point with zero time elapsed? The answer is the limit: we shrink the time interval to nearly zero and see what the average rate approaches. This is the <strong>derivative</strong>.</p>
            </div>

            <h3>1. From Secant to Tangent</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(255,0,255,0.1), rgba(0,0,0,0.5));">
                <h4><i class="fas fa-eye"></i> The Zoom-In Principle</h4>
                <div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:15px;">
                    <div style="text-align:center;">
                        <div style="width:80px; height:80px; border-radius:50%; border:2px solid var(--accent-cyan); position:relative; overflow:hidden;">
                            <div style="position:absolute; width:100%; height:2px; background:var(--accent-red); top:20%; left:0; transform:rotate(30deg); transform-origin:center;"></div>
                        </div>
                        <small style="color:var(--accent-red);">Secant Line<br>(2 points)</small>
                    </div>
                    <div style="font-size:1.5rem;"><i class="fas fa-arrow-right"></i></div>
                    <div style="text-align:center;">
                        <div style="width:80px; height:80px; border-radius:50%; border:2px solid var(--accent-cyan); position:relative; overflow:hidden;">
                            <div style="position:absolute; width:100%; height:2px; background:var(--accent-green); top:35%; left:0; transform:rotate(20deg); transform-origin:center;"></div>
                        </div>
                        <small style="color:var(--accent-green);">Tangent Line<br>(1 point, limit)</small>
                    </div>
                </div>
                <p style="font-size:0.85rem; margin-top:15px; text-align:center;">As the two points get infinitely close, the secant becomes the tangent.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> The Difference Quotient</h4>
                <div class="math-block">
                    $$ \\text{Average Rate} = \\frac{f(x+h) - f(x)}{h} $$
                </div>
                <div class="math-block" style="margin-top:10px;">
                    $$ \\text{Instantaneous Rate} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$
                </div>
                <p style="margin-top:10px; font-size:0.9rem;">The first formula gives the <strong>slope of the secant</strong>. The limit gives the <strong>slope of the tangent</strong> (= the derivative).</p>
            </div>

            <div class="example-card glass" style="margin-top:20px; padding:20px; border-left:3px solid var(--accent-cyan);">
                <h4><i class="fas fa-pencil-alt"></i> Worked Example: Finding Instantaneous Rate</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">Find the instantaneous rate of change of $f(x) = x^2$ at $x = 3$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Step 1:</strong> $\\frac{f(3+h) - f(3)}{h} = \\frac{(3+h)^2 - 9}{h}$</div>
                        <div><strong>Step 2:</strong> Expand: $\\frac{9 + 6h + h^2 - 9}{h} = \\frac{6h + h^2}{h}$</div>
                        <div><strong>Step 3:</strong> Simplify: $= 6 + h$</div>
                        <div><strong>Step 4:</strong> Take the limit: $\\lim_{h \\to 0} (6 + h) = \\mathbf{6}$</div>
                        <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">The slope of the tangent line at $x=3$ is $6$. In Calculus, you'll learn $f'(x)=2x$, so $f'(3)=6$. Same answer!</div>
                    </div>
                </details>
            </div>

            <h3>2. Average vs. Instantaneous: The AP Distinction</h3>
            <div style="overflow-x:auto; margin:20px 0;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                    <tr style="background:rgba(0,210,255,0.15);">
                        <th style="padding:12px; text-align:left;">Concept</th>
                        <th style="padding:12px; text-align:left;">Average Rate</th>
                        <th style="padding:12px; text-align:left;">Instantaneous Rate</th>
                    </tr>
                    <tr><td style="padding:10px;">Formula</td><td style="padding:10px;">$\\frac{f(b)-f(a)}{b-a}$</td><td style="padding:10px;">$\\lim_{h \\to 0}\\frac{f(x+h)-f(x)}{h}$</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">Geometry</td><td style="padding:10px;">Slope of <strong>secant</strong></td><td style="padding:10px;">Slope of <strong>tangent</strong></td></tr>
                    <tr><td style="padding:10px;">Interval</td><td style="padding:10px;">Over $[a,b]$</td><td style="padding:10px;">At a single point $x=c$</td></tr>
                    <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">Calculus Name</td><td style="padding:10px;">—</td><td style="padding:10px;"><strong>The Derivative</strong></td></tr>
                </table>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-rocket"></i> The Big Bridge to Calculus</h4>
                <p>Everything in Calculus AB/BC builds on this one idea. Derivatives, integrals, differential equations — they all start from this limit. <strong>If you master this concept, you have already learned the hardest part of Calculus.</strong></p>
            </div>
        `
    },

    // ==========================================================
    // UNIT 6: AP EXAM ARCHIVES (High-Fidelity Simulation)
    // ==========================================================
    "precalc-u6-1": {
        title: "6.1: 2023 Official Sample (Foundry)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-flask" style="color:#ffd700"></i> The Blueprint Year</h3>
                <p>The 2023 Sample Exam was AP Precalculus's <strong>first official release</strong>. It established the scoring pattern and question style that every future exam will follow. Study this like an architect studies blueprints — it reveals what the College Board considers "testable."</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-chart-pie"></i> Exam Structure Breakdown</h4>
                <div style="overflow-x:auto;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background:rgba(0,210,255,0.15);">
                            <th style="padding:10px; text-align:left;">Section</th>
                            <th style="padding:10px;">Questions</th>
                            <th style="padding:10px;">Time</th>
                            <th style="padding:10px;">Calculator</th>
                            <th style="padding:10px;">Weight</th>
                        </tr>
                        <tr><td style="padding:8px;">Part A: MCQ</td><td style="padding:8px; text-align:center;">28</td><td style="padding:8px; text-align:center;">80 min</td><td style="padding:8px; text-align:center;">No</td><td style="padding:8px; text-align:center;">~35%</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;">Part B: MCQ</td><td style="padding:8px; text-align:center;">12</td><td style="padding:8px; text-align:center;">40 min</td><td style="padding:8px; text-align:center;">Yes</td><td style="padding:8px; text-align:center;">~15%</td></tr>
                        <tr><td style="padding:8px;">Part A: FRQ</td><td style="padding:8px; text-align:center;">2</td><td style="padding:8px; text-align:center;">30 min</td><td style="padding:8px; text-align:center;">No</td><td style="padding:8px; text-align:center;">~25%</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;">Part B: FRQ</td><td style="padding:8px; text-align:center;">2</td><td style="padding:8px; text-align:center;">30 min</td><td style="padding:8px; text-align:center;">Yes</td><td style="padding:8px; text-align:center;">~25%</td></tr>
                    </table>
                </div>
            </div>

            <h3>1. FRQ Scoring Economy</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4><i class="fas fa-coins"></i> Point Distribution on a 9-Point FRQ</h4>
                <div style="display:flex; justify-content:center; align-items:flex-end; height:100px; gap:8px;">
                    <div style="text-align:center;">
                        <div style="width:40px; height:30px; background:var(--accent-green); border-radius:4px 4px 0 0;"></div>
                        <small>Part (a)<br>2 pts</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:40px; height:50px; background:var(--accent-cyan); border-radius:4px 4px 0 0;"></div>
                        <small>Part (b)<br>3 pts</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:40px; height:30px; background:var(--accent-magenta); border-radius:4px 4px 0 0;"></div>
                        <small>Part (c)<br>2 pts</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:40px; height:30px; background:var(--accent-red); border-radius:4px 4px 0 0;"></div>
                        <small>Part (d)<br>2 pts</small>
                    </div>
                </div>
                <p style="font-size:0.85rem; margin-top:15px; text-align:center;"><strong>Strategy:</strong> Never skip Part (a). It's usually the easiest and sets up context for later parts.</p>
            </div>

            <h3>2. The Justification Framework</h3>
            <div class="glass-card" style="padding:20px; border-left:4px solid var(--accent-green); margin:15px 0;">
                <p>AP Precalc FRQs demand <strong>interval-based language</strong>:</p>
                <ul style="line-height:2;">
                    <li><strong>Increasing/Decreasing:</strong> "On the interval $(a, b)$, $f$ is increasing because the rate of change is positive."</li>
                    <li><strong>Concavity:</strong> "On $(a, b)$, $f$ is concave down because the rate of change is decreasing."</li>
                    <li><strong>Model Selection:</strong> "A linear model is appropriate because the rate of change is approximately constant across equal intervals."</li>
                </ul>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-exclamation-triangle"></i> Common Scoring Mistakes</h4>
                <ul style="font-size:0.9rem; line-height:1.8;">
                    <li><strong>Vague language:</strong> "It goes up" → No credit. Must reference specific intervals.</li>
                    <li><strong>Missing units:</strong> If the context is "gallons per minute," you must include units.</li>
                    <li><strong>Contradictions:</strong> If you write two conflicting answers, graders use the incorrect one.</li>
                </ul>
            </div>
        `
    },
    "precalc-u6-2": {
        title: "6.2: 2024 Official Exam (Actual)",
        content: `
            <div class="intuition-box glass" style="border-right:4px solid var(--accent-magenta);">
                <h3><i class="fas fa-trophy" style="color:#ffd700"></i> The Inaugural Battle</h3>
                <p>May 2024 was the <strong>first-ever AP Precalculus exam</strong>. The FRQs focused heavily on real-world modeling: tire rotations (sinusoidal), population growth (logistic), and revenue analysis (exponential). The College Board established that <strong>justification is king</strong>.</p>
            </div>

            <h3>1. Topic Distribution Analysis</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px;">
                <h4><i class="fas fa-chart-bar"></i> What Was Actually Tested (2024)</h4>
                <div style="display:flex; flex-direction:column; gap:8px; margin-top:15px;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:60%; height:20px; background:linear-gradient(90deg, var(--accent-cyan), rgba(0,210,255,0.3)); border-radius:4px;"></div>
                        <small>Polynomial/Rational (~30%)</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:45%; height:20px; background:linear-gradient(90deg, var(--accent-magenta), rgba(255,0,255,0.3)); border-radius:4px;"></div>
                        <small>Exponential/Log (~25%)</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:50%; height:20px; background:linear-gradient(90deg, var(--accent-green), rgba(0,255,100,0.3)); border-radius:4px;"></div>
                        <small>Trigonometric (~25%)</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:30%; height:20px; background:linear-gradient(90deg, var(--accent-red), rgba(255,0,0,0.3)); border-radius:4px;"></div>
                        <small>Conics/Parametric (~15%)</small>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:10%; height:20px; background:linear-gradient(90deg, var(--accent-orange, #ff8c00), rgba(255,140,0,0.3)); border-radius:4px;"></div>
                        <small>Polar (~5%)</small>
                    </div>
                </div>
            </div>

            <h3>2. FRQ Deep Dive: Sinusoidal Modeling</h3>
            <div class="example-card glass" style="padding:20px; border-left:3px solid var(--accent-magenta);">
                <h4><i class="fas fa-pencil-alt"></i> 2024 FRQ Style: Tire Height Model</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">A tire of radius 15 inches rotates. The height $h(t)$ of a point on the tire above the ground is modeled by $h(t) = -15\\cos(\\frac{\\pi}{3}t) + 15$. Find the period, justify when the point is rising fastest.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Period:</strong> $T = \\frac{2\\pi}{\\pi/3} = 6$ seconds.</div>
                        <div><strong>Amplitude:</strong> $|a| = 15$ inches. Midline $d = 15$ inches.</div>
                        <div><strong>Rising Fastest:</strong> At $t$ where $h = $ midline and $h$ is increasing.</div>
                        <div style="margin-top:8px; color:var(--accent-magenta); font-style:italic;"><strong>Justification:</strong> "On the interval $(0, 3)$, $h(t)$ is increasing. The rate of change is greatest at $t = 0$ since the function is concave up on $(0, 1.5)$, meaning the rate of increase is itself increasing on this interval."</div>
                    </div>
                </details>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-bullseye"></i> Key Takeaways from 2024</h4>
                <ul style="line-height:2;">
                    <li><strong>Semi-log regression</strong> appeared on the calculator section — know how to convert $\\ln(y) = mx + b$ back to $y = ae^{bx}$.</li>
                    <li><strong>Piecewise function continuity</strong> was tested — solve for the parameter that makes left = right limit.</li>
                    <li><strong>Rate of change tables</strong> dominated — always analyze $\\Delta f$ across equal intervals.</li>
                    <li><strong>No proofs</strong> — AP Precalc is about <em>application</em> and <em>justification</em>, not formal proof.</li>
                </ul>
            </div>
        `
    },
    "precalc-u6-3": {
        title: "6.3: 2025 Elite Prediction (Hard Mode)",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-chess-king" style="color:#ffd700"></i> The Hard Mode Frontier</h3>
                <p>Based on the 2023 sample and 2024 actual exam patterns, we predict the 2025 exam will push deeper into <strong>multi-step modeling</strong>, <strong>parametric rate analysis</strong>, and <strong>combined function types</strong>. This unit simulates questions at a difficulty level above the actual exam.</p>
            </div>

            <h3>1. Predicted Focus Areas</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px;">
                <h4><i class="fas fa-crosshairs"></i> High-Probability Topics for 2025</h4>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:15px;">
                    <div class="glass" style="padding:12px; border-top:3px solid var(--accent-red);">
                        <h5 style="color:var(--accent-red); margin-bottom:5px;"><i class="fas fa-fire"></i> Hot</h5>
                        <ul style="font-size:0.85rem; line-height:1.8;">
                            <li>Polar rate of change ($dr/d\\theta$)</li>
                            <li>Parametric elimination</li>
                            <li>Logistic inflection analysis</li>
                        </ul>
                    </div>
                    <div class="glass" style="padding:12px; border-top:3px solid var(--accent-cyan);">
                        <h5 style="color:var(--accent-cyan); margin-bottom:5px;"><i class="fas fa-snowflake"></i> Likely</h5>
                        <ul style="font-size:0.85rem; line-height:1.8;">
                            <li>Matrix determinant as area scale</li>
                            <li>Multi-model comparison (linear vs. exp)</li>
                            <li>Inverse trig domain restrictions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>2. Elite Practice Problems</h3>
            <div class="example-card glass" style="padding:20px; border-left:3px solid var(--accent-red); margin-bottom:20px;">
                <h4><i class="fas fa-pencil-alt"></i> Hard Mode FRQ #1: Multi-Model Analysis</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">A researcher measures bacteria count: (0, 50), (2, 120), (4, 280), (6, 650). (a) Find the average rate of change on $[0,4]$. (b) Justify whether an exponential or linear model is more appropriate. (c) Using your model, predict $f(10)$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-red); font-weight:600; cursor:pointer;">View Solution Framework</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>(a)</strong> AROC $= \\frac{280-50}{4-0} = \\frac{230}{4} = 57.5$ bacteria/hour.</div>
                        <div><strong>(b)</strong> Check ratios: $120/50 = 2.4$, $280/120 \\approx 2.33$, $650/280 \\approx 2.32$. The ratios are approximately constant (~2.33), so exponential model is appropriate.</div>
                        <div><strong>Justification:</strong> "Since the ratio of consecutive outputs over equal input intervals is approximately constant ($\\approx 2.33$), the data is best modeled by an exponential function."</div>
                        <div><strong>(c)</strong> $f(t) \\approx 50 \\cdot (2.33)^{t/2}$. $f(10) \\approx 50 \\cdot 2.33^5 \\approx 50 \\cdot 67.9 \\approx 3395$.</div>
                    </div>
                </details>
            </div>

            <div class="example-card glass" style="padding:20px; border-left:3px solid var(--accent-magenta);">
                <h4><i class="fas fa-pencil-alt"></i> Hard Mode FRQ #2: Parametric Motion</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">A particle moves with $x(t) = t^2 - 4t$ and $y(t) = 3t - 1$. (a) Eliminate the parameter. (b) At what time $t$ is the particle moving to the left? (c) Find the slope of the path at $t = 3$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Solution Framework</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>(a)</strong> From $y = 3t - 1$: $t = \\frac{y+1}{3}$. Sub into $x$: $x = (\\frac{y+1}{3})^2 - 4(\\frac{y+1}{3})$.</div>
                        <div><strong>(b)</strong> "Left" means $x'(t) < 0$. $x'(t) = 2t - 4 < 0 \\implies t < 2$. The particle moves left for $t \\in [0, 2)$.</div>
                        <div><strong>(c)</strong> Slope $= \\frac{dy/dt}{dx/dt} = \\frac{3}{2(3)-4} = \\frac{3}{2} = 1.5$.</div>
                    </div>
                </details>
            </div>

            <div class="mastery-box glass" style="border-top:3px solid var(--accent-green); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-green);"><i class="fas fa-shield-alt"></i> Exam Day Protocol</h4>
                <ol style="line-height:2.2;">
                    <li><strong>Read the entire FRQ first.</strong> Parts (c) and (d) often hint at what method to use in (a).</li>
                    <li><strong>Show all work.</strong> Even if you use a calculator, write the setup.</li>
                    <li><strong>Use "Because...Therefore" structure</strong> for every justification.</li>
                    <li><strong>Never leave a part blank.</strong> Write the formula and any partial work for partial credit.</li>
                    <li><strong>Circle your final answer.</strong> Graders scan quickly — make it obvious.</li>
                </ol>
            </div>
        `
    }
};


