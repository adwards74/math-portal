# 1.2: The Battle of Scale (Dominance Mastery)

            <div class="intuition-box glass">
                <h3><i class="fas fa-crown" style="color:#ffd700"></i> The Dictator Rule</h3>
                <p>As $x \to \infty$, all terms in a polynomial surrender to the highest degree term. In computer science, we call this <strong>Big-O Dominance</strong>.</p>
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
                        <div style="font-weight:bold;">$300M - 5M + 1K \approx 300M$</div>
                        <small style="color:var(--accent-green);">(Quartic dominates!)</small>
                    </div>
                </div>
            </div>

            <h3>1. End Behavior Mastery</h3>
            <p>To identify end behavior, only look at the leading term $ax^n$:</p>
            <ul>
                <li><strong>Even Degree ($n$), Positive $a$:</strong> $\lim_{x \to \pm\infty} f(x) = \infty$ (Touchdown arms)</li>
                <li><strong>Odd Degree ($n$), Positive $a$:</strong> Same as $y=x$ (Dancing style)</li>
            </ul>
        