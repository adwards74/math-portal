# 6.3: 2025 Elite Prediction (Hard Mode)

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
                            <li>Polar rate of change ($dr/d\theta$)</li>
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
                        <div><strong>(a)</strong> AROC $= \frac{280-50}{4-0} = \frac{230}{4} = 57.5$ bacteria/hour.</div>
                        <div><strong>(b)</strong> Check ratios: $120/50 = 2.4$, $280/120 \approx 2.33$, $650/280 \approx 2.32$. The ratios are approximately constant (~2.33), so exponential model is appropriate.</div>
                        <div><strong>Justification:</strong> "Since the ratio of consecutive outputs over equal input intervals is approximately constant ($\approx 2.33$), the data is best modeled by an exponential function."</div>
                        <div><strong>(c)</strong> $f(t) \approx 50 \cdot (2.33)^{t/2}$. $f(10) \approx 50 \cdot 2.33^5 \approx 50 \cdot 67.9 \approx 3395$.</div>
                    </div>
                </details>
            </div>

            <div class="example-card glass" style="padding:20px; border-left:3px solid var(--accent-magenta);">
                <h4><i class="fas fa-pencil-alt"></i> Hard Mode FRQ #2: Parametric Motion</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">A particle moves with $x(t) = t^2 - 4t$ and $y(t) = 3t - 1$. (a) Eliminate the parameter. (b) At what time $t$ is the particle moving to the left? (c) Find the slope of the path at $t = 3$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Solution Framework</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>(a)</strong> From $y = 3t - 1$: $t = \frac{y+1}{3}$. Sub into $x$: $x = (\frac{y+1}{3})^2 - 4(\frac{y+1}{3})$.</div>
                        <div><strong>(b)</strong> "Left" means $x'(t) < 0$. $x'(t) = 2t - 4 < 0 \implies t < 2$. The particle moves left for $t \in [0, 2)$.</div>
                        <div><strong>(c)</strong> Slope $= \frac{dy/dt}{dx/dt} = \frac{3}{2(3)-4} = \frac{3}{2} = 1.5$.</div>
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
        