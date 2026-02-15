# 5.1: The Limit Concept

            <div class="intuition-box glass">
                <h3><i class="fas fa-location-arrow" style="color:#ffd700"></i> The GPS Mentality</h3>
                <p>A limit doesn't ask "Where ARE you?" — it asks "Where are you <strong>HEADING</strong>?" Even if there's a pothole (hole) at the destination, the GPS still knows where the road points. This is the foundation of all Calculus: analyzing <strong>tendency</strong>, not position.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Formal Notation</h4>
                <div class="math-block">
                    $$ \lim_{x \to c} f(x) = L $$
                </div>
                <p>Read as: "As $x$ approaches $c$, $f(x)$ approaches $L$." The function does NOT need to equal $L$ at $x=c$.</p>
            </div>

            <h3>1. One-Sided Limits</h3>
            <p>Sometimes the left and right paths disagree:</p>
            <div class="grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:15px;">
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-green);">
                    <h4 style="color:var(--accent-green);">Left-Hand Limit</h4>
                    <p>$\lim_{x \to c^-} f(x)$</p>
                    <p style="font-size:0.85rem; opacity:0.8;">Values approaching from the <strong>left</strong> (smaller values).</p>
                </div>
                <div class="glass" style="padding:15px; border-top:3px solid var(--accent-magenta);">
                    <h4 style="color:var(--accent-magenta);">Right-Hand Limit</h4>
                    <p>$\lim_{x \to c^+} f(x)$</p>
                    <p style="font-size:0.85rem; opacity:0.8;">Values approaching from the <strong>right</strong> (larger values).</p>
                </div>
            </div>
            <p style="margin-top:15px;"><strong>Critical Rule:</strong> The two-sided limit exists <strong>if and only if</strong> $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$.</p>

            <h3>2. Evaluating Limits</h3>
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4><i class="fas fa-list-ol"></i> The 3-Step Protocol</h4>
                <ol style="line-height:2.2;">
                    <li><strong>Direct Substitution:</strong> Plug in $x=c$. If you get a number, that's the limit. Done.</li>
                    <li><strong>$0/0$ Indeterminate?</strong> Factor, cancel, and try again. (e.g., $\frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2} = x+2$)</li>
                    <li><strong>$\pm k/0$?</strong> The limit is $\pm\infty$ or DNE (check left/right behavior).</li>
                </ol>
            </div>

            <div class="example-card glass" style="margin-top:20px; padding:20px; border-left:3px solid var(--accent-cyan);">
                <h4><i class="fas fa-pencil-alt"></i> Worked Example: Removable Discontinuity</h4>
                <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">Evaluate $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$</p>
                <details>
                    <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                    <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                        <div><strong>Step 1:</strong> Direct sub → $\frac{4-4}{2-2} = \frac{0}{0}$ — Indeterminate!</div>
                        <div><strong>Step 2:</strong> Factor numerator: $\frac{(x-2)(x+2)}{(x-2)}$</div>
                        <div><strong>Step 3:</strong> Cancel $(x-2)$: $= x + 2$</div>
                        <div><strong>Step 4:</strong> Now substitute: $2 + 2 = \mathbf{4}$</div>
                        <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">The limit is $4$. Note: $f(2)$ is undefined, but the limit still exists!</div>
                    </div>
                </details>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-bolt"></i> Calculus Preview</h4>
                <p>The derivative is defined as a limit: $f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$. Every single derivative you ever compute in Calculus is just this limit evaluation technique applied to a rate formula.</p>
            </div>
        