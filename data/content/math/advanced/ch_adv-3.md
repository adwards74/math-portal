# 1.3 Multiple Integrals: Calculating Volumes
## Multiple Integrals - Volume & Density


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-layer-group"></i> Section I: Iterated Sums (The Slicing Logic)</h3>
                    <p>While single integrals find the area under a curve, <strong>Double Integrals</strong> find the volume under a surface. Think of it as stacking thin slices to form a solid.</p>
                </div>

                <div class="math-block">
                    $$V = \iint_R f(x, y) dA = \int_a^b \int_c^d f(x, y) dy dx$$
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,163,255,0.02); border:1px solid rgba(0,163,255,0.1);">
                    <h4><i class="fas fa-cube"></i> Volume as an Iterated Sum</h4>
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <!-- Base Rectangle -->
                        <polygon points="50,130 150,110 250,130 150,150" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)"/>
                        <!-- Volume Pillars (Simulated) -->
                        <rect x="140" y="70" width="20" height="60" fill="rgba(0,163,255,0.3)" stroke="var(--accent-cyan)"/>
                        <rect x="110" y="80" width="20" height="45" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)"/>
                        <rect x="170" y="85" width="20" height="40" fill="rgba(0,163,255,0.1)" stroke="var(--accent-cyan)"/>
                        <!-- Integration path -->
                        <path d="M 50,135 L 150,115 L 250,135" stroke="var(--accent-magenta)" fill="transparent" stroke-width="1.5" stroke-dasharray="4"/>
                        <text x="120" y="60" fill="var(--accent-cyan)" font-size="10">Volume Elements (dA · height)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Just as an area is an infinite sum of widths, volume is an infinite sum of <strong>area slices</strong> or <strong>rectangular pillars</strong>.</p>
                </div>

                <h2>II. Fubini's Theorem</h2>
                <p>If the region $R$ is rectangular and the function is continuous, you can switch the order of integration without changing the result.</p>
                
                <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; border:1px dashed var(--accent-blue);">
                    <p style="font-size:0.9rem;"><i class="fas fa-redo"></i> **Elite Insight:** Sometimes $dy dx$ is 10x easier than $dx dy$. Always analyze the boundaries before rushing into calculation.</p>
                </div>
            </div>
        