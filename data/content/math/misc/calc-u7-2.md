# 7.2 Euler's Method (BC)
## Numerical Navigation


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-walking"></i> The Foggy Path</h3>
                    <p>Euler's Method is like hiking in dense fog with only a compass. You walk in one direction for a bit, then check the compass again to see if your direction (slope) has changed.</p>
                </div>

                <h2>I. Step-by-Step Evolution</h2>
                <p>When an analytic solution is impossible, we "walk" along tangent line segments.</p>
                <div class="math-block">
                    \[y_{new} = y_{old} + f'(x_{old}, y_{old}) \cdot \Delta x\]
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="100">
                        <path d="M 0 100 Q 100 80 200 0" stroke="rgba(255,255,255,0.2)" fill="transparent" stroke-width="2" stroke-dasharray="2"/>
                        <line x1="0" y1="100" x2="50" y2="85" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="50" y1="85" x2="100" y2="60" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="100" y1="60" x2="150" y2="25" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <circle cx="50" cy="85" r="3" fill="#fff"/>
                        <circle cx="100" cy="60" r="3" fill="#fff"/>
                    </svg>
                    <p style="font-size:0.8rem;">The magenta segments (Euler) "drift" from the true curve as steps increase.</p>
                </div>
            </div>
        