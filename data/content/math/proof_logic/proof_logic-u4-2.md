# Power Rule First Principles
## Deriving Shortcuts through Limits


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-key"></i> Section I: Why does the Power Rule work?</h3>
                    <p>We use the limit definition to prove why the derivative of $x^n$ is simply $nx^{n-1}$. This relies on either the **Binomial Theorem** or algebraic factoring.</p>
                </div>

                <div class="math-block">
                    $$\frac{d}{dx} x^n = \lim_{h \to 0} \frac{(x+h)^n - x^n}{h}$$
                </div>

                <h2>II. The Algebraic Proof</h2>
                <div class="glass-card elite-border">
                    <p>Using the expansion $(x+h)^n = x^n + nx^{n-1}h + \frac{n(n-1)}{2}x^{n-2}h^2 + \dots + h^n$:</p>
                    <ol class="glass-list">
                        <li>Substitute into the limit: $\lim_{h \to 0} \frac{(x^n + nx^{n-1}h + \dots) - x^n}{h}$</li>
                        <li>Cancel $x^n$: $\lim_{h \to 0} \frac{nx^{n-1}h + \text{terms with } h^2}{h}$</li>
                        <li>Divide by $h$: $\lim_{h \to 0} (nx^{n-1} + \text{terms with } h)$</li>
                        <li>Set $h=0$: The result is <strong>$nx^{n-1}$</strong>.</li>
                    </ol>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo Strategy</h4>
                    <p>In high-level competitive math, we don't just memorize the rule; we understand that the power rule is essentially the 'first coefficient' of a polynomial expansion. The rest of the terms vanish because they contain higher orders of $h$.</p>
                </div>
            </div>
        