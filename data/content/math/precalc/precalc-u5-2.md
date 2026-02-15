# 5.2: Continuity Defined (Formal)

            <div class="intuition-box glass" style="border-right:4px solid var(--accent-magenta);">
                <h3><i class="fas fa-link"></i> The Unbroken Chain</h3>
                <p>A continuous function is one you can draw <strong>without lifting your pen</strong>. Formally, this means three conditions must all hold simultaneously. If any one fails, the function has a "break" — a discontinuity.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-gavel"></i> The 3-Part Legal Test for Continuity at $x = c$</h4>
                <div class="logic-box" style="margin:10px 0; background:rgba(0,0,0,0.2); border-radius:10px; padding:15px; line-height:2.5;">
                    <strong>1.</strong> $f(c)$ is <strong>defined</strong> (the point exists).<br>
                    <strong>2.</strong> $\lim_{x \to c} f(x)$ <strong>exists</strong> (left = right).<br>
                    <strong>3.</strong> $\lim_{x \to c} f(x) = f(c)$ (the limit equals the value).
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
                <p><strong>then</strong> there exists at least one $c \in (a, b)$ such that $f(c) = N$.</p>
                <p style="margin-top:10px; font-size:0.85rem; opacity:0.8;"><i class="fas fa-lightbulb"></i> Intuition: A continuous function cannot "skip" a value. It must pass through every y-value between its endpoints.</p>
            </div>

            <div class="example-card glass" style="margin-top:20px; padding:20px; border-left:3px solid var(--accent-magenta);">
                <h4><i class="fas fa-pencil-alt"></i> Worked Example: Finding $k$ for Continuity</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">$f(x) = \begin{cases} 3x + k & x < 2 \\ x^2 + 1 & x \geq 2 \end{cases}$. Find $k$ so $f$ is continuous at $x = 2$.</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Step 1:</strong> Right-hand value: $f(2) = 2^2 + 1 = 5$</div>
                        <div><strong>Step 2:</strong> Left-hand limit: $\lim_{x \to 2^-} (3x + k) = 6 + k$</div>
                        <div><strong>Step 3:</strong> For continuity: $6 + k = 5$</div>
                        <div style="margin-top:8px; color:var(--accent-magenta); font-style:italic;">$k = -1$. This forces the left piece to "meet" the right piece at $x=2$.</div>
                    </div>
                </details>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border: 1px dashed var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-fingerprint"></i> FRQ Justification Protocol</h4>
                <div style="background:rgba(0,0,0,0.4); padding:10px; border-radius:5px; font-style:italic;">
                    "The function $f$ is continuous at $x=c$ because: (1) $f(c)$ is defined as [value], (2) $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = $ [value], and (3) the limit equals the function value."
                </div>
            </div>
        