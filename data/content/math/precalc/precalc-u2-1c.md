# 2.1c: Solving Exponential & Log Equations — The Finish Protocol

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-flag-checkered"></i> The Finish Protocol</h4>
                <p>Most lost points in this unit are not setup errors — they are <strong>unfinished</strong> solutions. Run every equation through all five steps:</p>
                <ol>
                    <li><strong>Isolate</strong> the log or exponential term.</li>
                    <li><strong>Convert</strong> form exactly once (log $\leftrightarrow$ exponential).</li>
                    <li><strong>Solve</strong> the resulting algebra to the end.</li>
                    <li><strong>Check the domain</strong> — every log argument must be positive in the <em>original</em> equation. Reject extraneous roots.</li>
                    <li><strong>Box</strong> the final answer.</li>
                </ol>
            </div>

            <h3>1. The Extraneous-Root Classic</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-ghost"></i> Solve: $\log_6(1-x) + \log_6(2-x) = 1$</h4>
                <p><strong>Isolate + condense:</strong> $\log_6\big[(1-x)(2-x)\big] = 1$.</p>
                <p><strong>Convert:</strong> $(1-x)(2-x) = 6^1 = 6$.</p>
                <p><strong>Solve:</strong> $2 - 3x + x^2 = 6 \;\Rightarrow\; x^2 - 3x - 4 = 0 \;\Rightarrow\; (x-4)(x+1) = 0$.</p>
                <p>Candidates: $x = 4$ or $x = -1$.</p>
                <p><strong>Domain check (in the ORIGINAL equation):</strong> for $x = 4$, the argument $1 - x = -3 < 0$ — <strong>reject</strong>. For $x = -1$: $1 - (-1) = 2 > 0$ and $2 - (-1) = 3 > 0$ — valid.</p>
                <div class="math-block">$$ \boxed{x = -1} $$</div>
            </div>

            <h3>2. Different Bases? Take the Log.</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-balance-scale"></i> Solve: $7^{x-5} = 2^{x-2}$</h4>
                <p>Take $\ln$ of both sides: $(x-5)\ln 7 = (x-2)\ln 2$.</p>
                <p>Distribute: $x\ln 7 - 5\ln 7 = x\ln 2 - 2\ln 2$.</p>
                <p>Collect $x$: $x(\ln 7 - \ln 2) = 5\ln 7 - 2\ln 2$.</p>
                <p>Finish — do not stop here:</p>
                <div class="math-block">$$ \boxed{x = \frac{5\ln 7 - 2\ln 2}{\ln 7 - \ln 2} \approx 6.66} $$</div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-shield-alt"></i> Base Discipline</h4>
                <p>$\log$ (base 10) and $\ln$ (base $e$) may <strong>never</strong> be merged into one log. If an equation mixes them — e.g. $\log 3 + \tfrac14\ln x = 2\log 3$ — convert everything to $\ln$ first (via change of base), <em>then</em> condense. Merging across bases is an automatic zero on that step.</p>
            </div>

            <div class="intuition-box glass" style="margin-top:20px;">
                <h3><i class="fas fa-search"></i> Why Step 4 Exists</h3>
                <p>Condensing logs <em>hides</em> domain restrictions: $\log_6\big[(1-x)(2-x)\big]$ looks fine at $x = 4$ because $(-3)(-2) = 6 > 0$ — but the original two logs were never defined there. The algebra creates <strong>ghost solutions</strong>; only the original equation can expose them.</p>
            </div>
