# 1.5 Continuity & IVT Logic
## The Connected Path


            <div class="lesson-section">
                <h2>I. The Continuity Checklist</h2>
                <p>A function is continuous at $c$ if it passes the "Triple Check":</p>
                <ol class="glass-list">
                    <li>$f(c)$ is defined.</li>
                    <li>$\lim_{x \to c} f(x)$ exists.</li>
                    <li>$\lim_{x \to c} f(x) = f(c)$.</li>
                </ol>

                <div class="mastery-box glass" style="border:1px solid var(--accent-magenta); padding:20px; margin:20px 0;">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-scroll"></i> FRQ Justification Protocol: IVT</h4>
                    <p>To earn full points on AP exams, you must follow this exact sentence structure:</p>
                    <div class="math-block" style="font-style: italic; color: #ccc;">
                        "Since $f(x)$ is <strong>continuous</strong> on the closed interval $[a,b]$, and since $f(a) < k < f(b)$, by the <strong>Intermediate Value Theorem</strong>, there must exist at least one value $c$ in $(a,b)$ such that $f(c) = k$."
                    </div>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="100">
                        <path d="M 0 80 Q 50 20 100 50 T 200 10" stroke="#fff" fill="transparent" stroke-width="2"/>
                        <line x1="0" y1="40" x2="200" y2="40" stroke="var(--accent-magenta)" stroke-dasharray="4"/>
                        <circle cx="85" cy="40" r="5" fill="var(--accent-magenta)"/>
                        <text x="10" y="35" fill="var(--accent-magenta)" font-size="10">Target K</text>
                    </svg>
                    <p style="font-size:0.8rem;">The "unbroken path" must cross the horizontal gate at least once.</p>
                </div>
            </div>
        