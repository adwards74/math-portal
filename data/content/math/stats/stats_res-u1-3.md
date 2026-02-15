# T-Test Mechanics
## Comparing Means with Statistical Rigor


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-balance-scale"></i> Section I: Signal vs. Noise</h3>
                    <p>The <strong>T-Test</strong> is the workhorse of IBET statistics. It determines if the difference between two sample means is likely due to a real effect or just random sampling error.</p>
                </div>

                <div class="math-block">
                    $$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
                </div>

                <div class="visual-dynamic glass" style="margin:20px 0; padding:15px; text-align:center;">
                    <svg width="320" height="120" viewBox="0 0 320 120">
                        <!-- Two overlapping bell curves -->
                        <path d="M10,110 Q80,10 150,110" fill="rgba(0,210,255,0.2)" stroke="var(--accent-cyan)"/>
                        <path d="M50,110 Q120,10 190,110" fill="rgba(255,0,255,0.2)" stroke="var(--accent-magenta)"/>
                        <line x1="80" y1="60" x2="120" y2="60" stroke="#fff" marker-end="url(#arrowhead)"/>
                        <text x="70" y="50" fill="#fff" font-size="10">Difference (Signal)</text>
                    </svg>
                    <p style="font-size:0.8rem;">If the "Signal" (difference) is large compared to the "Noise" (width), $t$ increases.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-microchip"></i> Decision Logic</h4>
                    <ol class="glass-list">
                        <li><strong>Student's T-Test:</strong> Assumes equal variances ($s_1^2 \approx s_2^2$).</li>
                        <li><strong>Welch's T-Test:</strong> More robust; does NOT assume equal variances. Use this for IBET by default.</li>
                    </ol>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo Strategy</h4>
                    <p>On the AP Exam or in senior research, always check **Degrees of Freedom ($df$)**. For a T-test, $df$ defines the shape of the distribution. As $df \to \infty$, the T-distribution morphs into the Normal Distribution.</p>
                </div>
            </div>
        