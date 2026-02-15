# 6.2: 2024 Official Exam (Actual)

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
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">A tire of radius 15 inches rotates. The height $h(t)$ of a point on the tire above the ground is modeled by $h(t) = -15\cos(\frac{\pi}{3}t) + 15$. Find the period, justify when the point is rising fastest.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Period:</strong> $T = \frac{2\pi}{\pi/3} = 6$ seconds.</div>
                        <div><strong>Amplitude:</strong> $|a| = 15$ inches. Midline $d = 15$ inches.</div>
                        <div><strong>Rising Fastest:</strong> At $t$ where $h = $ midline and $h$ is increasing.</div>
                        <div style="margin-top:8px; color:var(--accent-magenta); font-style:italic;"><strong>Justification:</strong> "On the interval $(0, 3)$, $h(t)$ is increasing. The rate of change is greatest at $t = 0$ since the function is concave up on $(0, 1.5)$, meaning the rate of increase is itself increasing on this interval."</div>
                    </div>
                </details>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-bullseye"></i> Key Takeaways from 2024</h4>
                <ul style="line-height:2;">
                    <li><strong>Semi-log regression</strong> appeared on the calculator section — know how to convert $\ln(y) = mx + b$ back to $y = ae^{bx}$.</li>
                    <li><strong>Piecewise function continuity</strong> was tested — solve for the parameter that makes left = right limit.</li>
                    <li><strong>Rate of change tables</strong> dominated — always analyze $\Delta f$ across equal intervals.</li>
                    <li><strong>No proofs</strong> — AP Precalc is about <em>application</em> and <em>justification</em>, not formal proof.</li>
                </ul>
            </div>
        