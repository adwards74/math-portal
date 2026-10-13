# 1.2b: Complex Zeros & Conjugate Pairs

            <div class="intuition-box glass">
                <h3><i class="fas fa-yin-yang"></i> Complex Zeros Travel in Pairs</h3>
                <p>For a polynomial with <strong>real coefficients</strong>, non-real zeros can never appear alone. If $a + bi$ is a zero, then its <strong>conjugate</strong> $a - bi$ must also be a zero. They come as a <em>package deal</em> — always. This is the <strong>Complex Conjugate Zeros Theorem</strong>, and it is one of the most-tested single facts in the polynomial unit.</p>
            </div>

            <div class="math-block">
                $$ \text{If } p(x) \text{ has real coefficients and } p(a+bi) = 0 \text{ with } b \neq 0, \text{ then } p(a-bi) = 0. $$
            </div>

            <h3>1. Worked Example: Building the Polynomial</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-cubes"></i> Degree-4 polynomial, real coefficients, zeros $8$, $-3$, $5-i$</h4>
                <p><strong>Step 1 — complete the pair:</strong> since $5 - i$ is a zero, $5 + i$ must also be a zero. Now we have all four zeros: $8$, $-3$, $5-i$, $5+i$.</p>
                <p><strong>Step 2 — write the factors:</strong></p>
                <p>$$ m(x) = (x - 8)(x + 3)\big(x - (5-i)\big)\big(x - (5+i)\big) $$</p>
                <p><strong>Step 3 — multiply the conjugate pair</strong> to see real coefficients emerge:</p>
                <p>$$ \big(x - (5-i)\big)\big(x - (5+i)\big) = \big((x-5) + i\big)\big((x-5) - i\big) = (x-5)^2 - i^2 = (x-5)^2 + 1 = x^2 - 10x + 26 $$</p>
                <p>So $m(x) = (x-8)(x+3)(x^2-10x+26)$ — every coefficient is real. ✓</p>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Why $(5-i)^2$ Is Wrong</h4>
                <p>A common slip: given zero $5-i$, writing the factor as $(x - (5-i))^2$ — i.e., <em>squaring</em> instead of <em>conjugating</em>.</p>
                <p><strong>Squaring</strong> $(x-(5-i))^2$ means "$5-i$ is a <em>repeated</em> (multiplicity-2) zero." That's a completely different claim — and it still leaves the polynomial with non-real coefficients.</p>
                <p><strong>Conjugating</strong> $(x-(5-i))(x-(5+i))$ means "the pair $5\pm i$ are both zeros." Only this gives real coefficients.</p>
                <p>Memory hook: <em>pair, don't square.</em></p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-search"></i> Quick Check: How many non-real zeros can a degree-5 real polynomial have?</h4>
                <p>Non-real zeros come in pairs, so the count must be <strong>even</strong>: 0, 2, or 4. (It can't be 5 — that would leave an odd one out — and a degree-5 polynomial must have at least one <em>real</em> zero.)</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-skull-crossbones"></i> AP Trap: Forgetting the Theorem's Condition</h4>
                <p>The conjugate-pairs rule applies <strong>only</strong> when the polynomial has <strong>real coefficients</strong>. If the coefficients themselves are complex, all bets are off. On a test, the problem will say "with real coefficients" (or you'll see that all given coefficients are real) — that's your license to pair them up.</p>
            </div>
