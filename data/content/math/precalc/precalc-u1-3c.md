# 1.3c: Rational Inequalities & Sign Charts

            <div class="intuition-box glass">
                <h3><i class="fas fa-plus-minus"></i> Where Is the Fraction Positive?</h3>
                <p>A <strong>rational inequality</strong> like $\frac{x-3}{x+2} \ge 0$ asks: <em>on which intervals is this fraction non-negative?</em> You cannot just "solve" it like an equation — multiplying both sides by $(x+2)$ is illegal because you don't know its sign. The safe weapon is the <strong>sign chart</strong>: find every point where the expression <em>could</em> change sign, then test each interval.</p>
            </div>

            <h3>1. The 7-Step Sign Chart Protocol</h3>
            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> The 7 Steps</h4>
                <ol>
                    <li>Move everything to <strong>one side</strong> so the other side is $0$.</li>
                    <li>Combine into a <strong>single fraction</strong> $\frac{P(x)}{Q(x)}$.</li>
                    <li>Factor numerator and denominator <strong>completely</strong>.</li>
                    <li>Find all <strong>critical values</strong>: zeros of the numerator <em>and</em> zeros of the denominator.</li>
                    <li>Plot them on a number line — mark denominator zeros with an <strong>open circle / vertical bar</strong> (never included).</li>
                    <li><strong>Test</strong> one value in each interval; record the sign.</li>
                    <li>Read the solution from the inequality direction, applying the <strong>endpoint rule</strong> below.</li>
                </ol>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-orange); padding:15px;">
                <h4 style="color:var(--accent-orange);"><i class="fas fa-exclamation-triangle"></i> The Endpoint Rule</h4>
                <p><strong>Zeros of the numerator:</strong> included (closed dot / bracket) for $\ge$ or $\le$; excluded for $>$ or $<$. They make the fraction <em>equal zero</em>, which satisfies "or equal to."</p>
                <p><strong>Zeros of the denominator:</strong> <strong>NEVER included</strong> — not for any inequality. They make the expression <em>undefined</em>. Always an open circle / parenthesis.</p>
            </div>

            <h3>2. Worked Example</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-chart-bar"></i> Solve $\frac{x-3}{x+2} \ge 0$</h4>
                <p><strong>Steps 1–3:</strong> Already a single factored fraction: $\frac{x-3}{x+2}$.</p>
                <p><strong>Step 4 — critical values:</strong> numerator zero at $x = 3$; denominator zero at $x = -2$.</p>
                <p><strong>Steps 5–6 — sign chart:</strong></p>
                <p>Intervals: $(-\infty, -2)$, $(-2, 3)$, $(3, \infty)$.</p>
                <p>Test $x = -3$: $\frac{-6}{-1} = 6 > 0$ → <strong>+</strong>. Test $x = 0$: $\frac{-3}{2} < 0$ → <strong>−</strong>. Test $x = 4$: $\frac{1}{6} > 0$ → <strong>+</strong>.</p>
                <p><strong>Step 7 — read $\ge 0$:</strong> take the <strong>+</strong> intervals. $x = 3$ is included (numerator zero, $\ge$ allows equality). $x = -2$ is excluded (denominator zero, always).</p>
                <p>Solution: $\mathbf{(-\infty, -2) \cup [3, \infty)}$.</p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-eye"></i> Reading Inequalities Off a Graph</h4>
                <p>Sometimes the test gives you the <em>graph</em> and asks: where is $f(x) \le 0$? Where is $f(x) > 0$? Where is $f(x) \ge 1$?</p>
                <p><strong>Protocol:</strong> (1) For $f(x) \le 0$: find where the graph is <em>on or below</em> the x-axis — include x-intercepts, exclude asymptotes. (2) For $f(x) > 0$: where the graph is <em>strictly above</em> the x-axis. (3) For $f(x) \ge 1$: draw the horizontal line $y = 1$ and read where the graph is on or above <em>it</em>.</p>
                <p>The endpoint rule still applies: intercepts are candidates for inclusion; asymptotes never are.</p>
            </div>

            <div class="intuition-box glass" style="margin-top:15px;">
                <h4><i class="fas fa-lightbulb"></i> Why Does the Sign Chart Work?</h4>
                <p>A continuous expression can only change sign where it <strong>hits zero</strong> or <strong>breaks</strong> (becomes undefined). The critical values are the <em>only</em> places a sign flip can hide — so testing one point per interval tells the whole story. No hidden flips are possible anywhere else.</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-skull-crossbones"></i> AP Trap: Multiplying Away the Denominator</h4>
                <p>The #1 fatal move: multiplying both sides by $(x+2)$ to "clear the fraction." If $(x+2)$ is negative, the inequality <em>flips</em> — and you don't know its sign until you've solved the problem. The sign chart exists precisely to avoid this trap. Never clear a denominator that contains $x$ in an inequality.</p>
            </div>
