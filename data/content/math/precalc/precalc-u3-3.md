# 3.3: Polar Dynamics (Mastery)

            <div class="mastery-box glass" style="border-top:3px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-compass"></i> Mapping the Shift</h4>
                <div class="math-block">
                    $$ x = r\cos\theta, \quad y = r\sin\theta, \quad r^2 = x^2+y^2, \quad \tan\theta = y/x $$
                </div>
            </div>

            <h3>1. Analyzing Polar Rate of Change</h3>
            <p>This is the most "Calculus" part of Unit 3. We look at $dr/d\theta$:</p>
            <ul>
                <li>$dr/d\theta > 0$: Curve is moving <strong>away from the pole</strong>.</li>
                <li>$dr/d\theta < 0$: Curve is moving <strong>toward the pole</strong>.</li>
            </ul>
            
            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; text-align:center;">
                <svg viewBox="0 0 100 100" style="width:80px; height:80px;">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" />
                    <path d="M 50 50 Q 70 30 90 50" fill="none" stroke="var(--accent-magenta)" stroke-width="2" />
                    <circle cx="90" cy="50" r="3" fill="var(--accent-magenta)" />
                </svg>
                <p style="font-size:0.8rem;">Polar Path: The distance $r$ is a function of rotation.</p>
            </div>
        