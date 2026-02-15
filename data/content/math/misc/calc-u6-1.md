# 6.1 Sigma Notation & Riemann Sums
## The Calculus of Slicing


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-th"></i> The Pixelation of Area</h3>
                    <p>Riemann sums are like "low-res" versions of an area. As the number of rectangles ($n$) goes to $\infty$, the resolution becomes perfect, and the sum becomes an <strong>Integral</strong>.</p>
                </div>

                <h2>I. Accumulation</h2>
                <p>Before integrals, we use sums of rectangles (Left, Right, Midpoint). In BC, we also master <strong>Trapezoidal Sums</strong> for higher precision.</p>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-layer-group"></i> Riemann Approximation Styles</h4>
                    <div style="display:flex; gap:10px; justify-content:center; margin-top:15px;">
                        <div style="width:40px; height:60px; border:1px solid #fff; background:rgba(0,210,255,0.2);">L</div>
                        <div style="width:40px; height:50px; border:1px solid #fff; background:rgba(255,0,255,0.2);">R</div>
                        <div style="width:40px; height:55px; border:1px solid #fff; background:rgba(255,255,255,0.1);">M</div>
                    </div>
                    <p style="font-size:0.8rem; margin-top:10px;">The choice of sample point (Left vs. Right) determines if you <strong>Overestimate</strong> or <strong>Underestimate</strong> based on function monotonicity.</p>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-cyan);">
                    <h4><i class="fas fa-project-diagram"></i> Digital Sampling</h4>
                    <p>When you record sound, the computer "samples" air pressure at discrete intervals. Riemann Sums are the mathematical foundation of how we reconstruct the continuous "sound" from these digital slices.</p>
                </div>
            </div>
        