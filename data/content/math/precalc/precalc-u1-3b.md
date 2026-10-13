# 1.3b: Slant Asymptotes & Polynomial Long Division

            <div class="intuition-box glass">
                <h3><i class="fas fa-chart-line"></i> When the Numerator Outgrows the Denominator</h3>
                <p>A rational function has three possible end behaviors, decided by one comparison: <strong>degree of numerator ($n$) vs. degree of denominator ($d$)</strong>. If $n = d$, the graph levels off at a horizontal asymptote. If $n < d$, it crushes down to $y = 0$. But if $n = d + 1$ — the numerator is <em>exactly one degree taller</em> — the graph follows a <strong>slant (oblique) asymptote</strong>: a tilted line the curve approaches but never quite touches.</p>
            </div>

            <h3>1. The 3-Case Leading-Term Test</h3>
            <div class="math-block">
                $$ \text{Let } f(x) = \frac{a_n x^n + \cdots}{b_d x^d + \cdots} $$
            </div>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-list-ol"></i> The Three Cases</h4>
                <p><strong>Case 1 — $n < d$:</strong> Horizontal asymptote at $y = 0$. The denominator dominates.</p>
                <p><strong>Case 2 — $n = d$:</strong> Horizontal asymptote at $y = \frac{a_n}{b_d}$ (ratio of leading coefficients).</p>
                <p><strong>Case 3 — $n = d + 1$:</strong> <strong>Slant asymptote</strong> — found by polynomial long division. The quotient (ignoring the remainder) is the asymptote line.</p>
                <p><strong>Case 4 — $n > d + 1$:</strong> No linear asymptote; the end behavior follows a <em>curvilinear</em> (polynomial) curve. Named here, not drilled.</p>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Slant Asymptote Protocol</h4>
                <ol>
                    <li>Confirm $n = d + 1$ (exactly one degree taller).</li>
                    <li>Perform <strong>polynomial long division</strong>: divide numerator by denominator.</li>
                    <li>The <strong>quotient</strong> is the slant asymptote: $y = mx + b$.</li>
                    <li><strong>Discard the remainder</strong> — with a reason: $\frac{r(x)}{g(x)} \to 0$ as $x \to \pm\infty$, so it vanishes at scale.</li>
                </ol>
            </div>

            <h3>2. Worked Example: Long Division Walkthrough</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-divide"></i> Find the slant asymptote of $f(x) = \frac{6x^2 + 7x + 6}{2x + 1}$</h4>
                <p><strong>Step 1 — check degrees:</strong> numerator degree 2, denominator degree 1. $2 = 1 + 1$ ✓ → slant asymptote exists.</p>
                <p><strong>Step 2 — long division:</strong></p>
                <p>Divide $6x^2 \div 2x = 3x$. Multiply: $3x(2x+1) = 6x^2 + 3x$. Subtract: $(6x^2+7x) - (6x^2+3x) = 4x$. Bring down $+6$.</p>
                <p>Divide $4x \div 2x = 2$. Multiply: $2(2x+1) = 4x + 2$. Subtract: $(4x+6) - (4x+2) = 4$.</p>
                <p><strong>Step 3 — read the result:</strong> $f(x) = 3x + 2 + \frac{4}{2x+1}$.</p>
                <p><strong>Step 4 — the asymptote:</strong> as $x \to \pm\infty$, $\frac{4}{2x+1} \to 0$. So the slant asymptote is $\mathbf{y = 3x + 2}$.</p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-search"></i> Quick ID: $g(x) = \frac{x^3 - 2x + 1}{x^2 + 1}$</h4>
                <p>Numerator degree 3, denominator degree 2 → $3 = 2 + 1$ → slant asymptote.</p>
                <p>Long division: $x^3 \div x^2 = x$; $x(x^2+1) = x^3 + x$; subtract → $-3x + 1$. Since $-3x$ is lower degree than $x^2$, stop.</p>
                <p>Result: $g(x) = x + \frac{-3x+1}{x^2+1}$ → slant asymptote $\mathbf{y = x}$.</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-skull-crossbones"></i> AP Trap: The Remainder Is Not Zero — It Just Vanishes</h4>
                <p>Students sometimes write the asymptote as $y = \text{quotient} + \text{remainder}$. Wrong. The remainder term $\frac{r(x)}{g(x)}$ is a <em>fraction whose denominator outgrows its numerator</em> — it shrinks to 0 at the ends. The asymptote is the quotient <strong>alone</strong>. Also: a slant asymptote can be <em>crossed</em> in the middle of the graph — asymptotes only govern end behavior.</p>
            </div>
