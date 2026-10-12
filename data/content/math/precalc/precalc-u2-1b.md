# 2.1b: Log Properties Drill (Expand & Condense)

            <div class="intuition-box glass">
                <h3><i class="fas fa-suitcase"></i> Expand = Unpack, Condense = Pack</h3>
                <p><strong>Expand</strong> = unpack the suitcase (one log becomes many). <strong>Condense</strong> = pack it (many logs become one). Expanding is always legal; condensing is only legal when every term has the <strong>same base</strong> and there are <strong>no stray coefficients</strong> left in front.</p>
            </div>

            <h3>1. The Property Table</h3>
            <div class="math-block">
                $$ \log_b(MN) = \log_b M + \log_b N \qquad \log_b\!\left(\tfrac{M}{N}\right) = \log_b M - \log_b N \qquad \log_b(M^p) = p\,\log_b M $$
            </div>
            <div class="math-block">
                $$ \log_b M = \frac{\log_c M}{\log_c b} \;\; \text{(change of base)} \qquad \log_b 1 = 0 \qquad \log_b b = 1 $$
            </div>
            <div class="math-block">
                $$ b^{\log_b x} = x \qquad \log_b(b^x) = x \qquad \log_b x = \frac{1}{\log_x b} \;\; \text{(reciprocal)} $$
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> The Fractional-Exponent Protocol</h4>
                <p>When roots or fractional powers appear, run this protocol <strong>in order</strong>:</p>
                <ol>
                    <li>Rewrite every root as a fractional exponent: $\sqrt{x} = x^{1/2}$, $\sqrt[3]{x} = x^{1/3}$.</li>
                    <li>Bring <strong>every</strong> exponent down front <em>first</em> (power property).</li>
                    <li>Then merge with product/quotient rules.</li>
                </ol>
                <p>Worked: $\log \frac{\sqrt{2}\,y^3}{x^4} = \log 2^{1/2} + \log y^3 - \log x^4 = \tfrac12\log 2 + 3\log y - 4\log x$.</p>
            </div>

            <h3>2. Worked Examples</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-compress"></i> Condense: $\tfrac43\log_7 2 - 4\log_7 2 + \tfrac12\log_7(z+2)$</h4>
                <p><strong>Step 1 — combine like terms BEFORE merging:</strong> $\tfrac43 - 4 = \tfrac43 - \tfrac{12}{3} = -\tfrac83$.</p>
                <p>So we have $-\tfrac83\log_7 2 + \tfrac12\log_7(z+2)$.</p>
                <p><strong>Step 2 — power property:</strong> $\log_7 2^{-8/3} + \log_7 (z+2)^{1/2}$.</p>
                <p><strong>Step 3 — product rule:</strong> $\log_7\!\left(2^{-8/3}\sqrt{z+2}\right) = \log_7 \frac{\sqrt{z+2}}{2^{8/3}}$.</p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-expand"></i> Expand: $\log_3 \frac{1}{2000}$</h4>
                <p>$\log_3 \frac{1}{2000} = \log_3 1 - \log_3 2000 = 0 - \log_3 2000 = -\log_3 2000$.</p>
                <p>Deeper: $2000 = 2^4 \cdot 5^3$, so $-\log_3 2000 = -(4\log_3 2 + 3\log_3 5) = -4\log_3 2 - 3\log_3 5$.</p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-exclamation-circle"></i> Condense with the $c^{-7}$ trap: $3\log_2 a + \log_2 b - 7\log_2 c$</h4>
                <p>Power property first: $\log_2 a^3 + \log_2 b + \log_2 c^{-7}$.</p>
                <p>Merge: $\log_2(a^3 \cdot b \cdot c^{-7}) = \log_2 \frac{a^3 b}{c^7}$.</p>
                <p><strong>Trap:</strong> $-7\log_2 c$ becomes division by $c^7$ — the exponent stays <strong>7</strong>, it does not turn into "minus 7" in the answer.</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-skull-crossbones"></i> AP Trap: The Unbreakable Sum</h4>
                <p>You can <strong>never</strong> split $\log_b(x + y)$ into $\log_b x + \log_b y$. Logs break <em>products</em> into sums — they do not break <em>sums</em> into anything. This single false move is the most expensive error in the entire unit.</p>
            </div>
