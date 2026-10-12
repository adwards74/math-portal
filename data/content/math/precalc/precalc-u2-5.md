# 2.5: Inverses of Exponential & Log Functions

            <div class="intuition-box glass">
                <h3><i class="fas fa-exchange-alt"></i> Inverse = Swap the Roles</h3>
                <p>An inverse function undoes everything the original did. The algebraic recipe never changes: write $y = f(x)$, <strong>swap $x \leftrightarrow y$</strong>, then <strong>isolate the new $y$</strong>. For exponentials and logs, the isolation step always runs through the log $\leftrightarrow$ exponential conversion.</p>
            </div>

            <h3>1. Equation $\rightarrow$ Inverse (the direction you know)</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-arrow-right"></i> Find $f^{-1}(x)$ for $f(x) = 2(5)^{x+2} - 1$</h4>
                <p>Swap: $x = 2(5)^{y+2} - 1$.</p>
                <p>Isolate the exponential <strong>before</strong> converting: $x + 1 = 2(5)^{y+2} \;\Rightarrow\; \frac{x+1}{2} = 5^{y+2}$.</p>
                <p>Convert to log form: $y + 2 = \log_5\!\left(\frac{x+1}{2}\right)$.</p>
                <div class="math-block">$$ \boxed{f^{-1}(x) = \log_5\!\left(\frac{x+1}{2}\right) - 2} $$</div>
                <p>Domain check (free): the log argument must be positive, so $\frac{x+1}{2} > 0 \Rightarrow x > -1$ — exactly the range of $f$.</p>
            </div>

            <h3>2. Graph $\rightarrow$ Equation (the reverse direction)</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-chart-line"></i> A transformed $\log$ graph has vertical asymptote $x = 2$ and passes through $(3,1)$, $(6,2)$, $(18,3)$. Find its equation.</h4>
                <p><strong>Step 1 — asymptote gives the shift:</strong> $x = 2 \Rightarrow h = 2$, so $g(x) = a\log_b(x-2) + k$.</p>
                <p><strong>Step 2 — quotient-of-differences trick:</strong> look at the $x$-values <em>after</em> shifting: $1, 4, 16$. They form a geometric sequence with ratio $4$ — while the $y$-values $1, 2, 3$ step by $+1$. Equal $y$-steps over equal $x$-<em>ratios</em> means the base is $4$ and $a = 1$.</p>
                <p><strong>Step 3 — solve for $k$:</strong> $1 = \log_4(1) + k \Rightarrow k = 1$.</p>
                <div class="math-block">$$ \boxed{g(x) = \log_4(x-2) + 1} $$</div>
                <p>Verify: $\log_4(4) + 1 = 2$ ✓, $\log_4(16) + 1 = 3$ ✓.</p>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-green); padding:15px;">
                <h4 style="color:var(--accent-green);"><i class="fas fa-check-double"></i> The Composition Check</h4>
                <p>To <strong>verify</strong> an inverse pair, compose one way — $f(f^{-1}(x)) = x$ is enough. But <em>show</em> the check; a blank page earns zero even when the pair is right.</p>
                <p>Check for the pair above: $f(f^{-1}(x)) = 2(5)^{\left[\log_5\left(\frac{x+1}{2}\right) - 2\right] + 2} - 1 = 2(5)^{\log_5\left(\frac{x+1}{2}\right)} - 1 = 2\cdot\frac{x+1}{2} - 1 = x$ ✓</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-exclamation-triangle"></i> The #1 Inverse Slip</h4>
                <p>Isolate the <strong>entire exponential term</strong> before converting to log form. Converting $x = 2(5)^{y+2} - 1$ directly into a log is impossible — the $-1$ and the coefficient $2$ are not inside the exponent. Algebra first, conversion second.</p>
            </div>
