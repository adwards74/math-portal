# 2.6: e, Continuous Compounding & Real-World Models

            <div class="intuition-box glass">
                <h3><i class="fas fa-infinity"></i> What Is $e$?</h3>
                <p>$e$ is what $\left(1 + \frac{1}{n}\right)^n$ settles to as $n$ explodes: $e = \lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n \approx 2.71828$. Think of it as <strong>interest compounded every instant</strong> — the natural speed limit of continuous growth.</p>
            </div>

            <div class="math-block">
                $$ A = Pe^{rt} \qquad \text{(continuous compounding: $P$ = principal, $r$ = rate, $t$ = time)} $$
            </div>

            <h3>1. Worked Models (from your class packet)</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-paw"></i> Endangered species: $s(t) = 119.6e^{0.0917t}$. When does the population reach 500?</h4>
                <p>$500 = 119.6e^{0.0917t} \;\Rightarrow\; e^{0.0917t} = \frac{500}{119.6} \approx 4.18$.</p>
                <p>Take $\ln$: $0.0917t = \ln(4.18) \approx 1.43$.</p>
                <div class="math-block">$$ \boxed{t = \frac{1.43}{0.0917} \approx 15.6 \text{ years}} $$</div>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-thermometer-half"></i> Newton's law of cooling: a stew cools from $200^\circ\text{F}$ in a $70^\circ\text{F}$ room with $r = 0.1$ per minute. When does it reach $120^\circ\text{F}$?</h4>
                <p>Model: $T = (T_0 - T_R)e^{-rt} + T_R$.</p>
                <p>$120 = (200-70)e^{-0.1t} + 70 \;\Rightarrow\; 50 = 130e^{-0.1t} \;\Rightarrow\; e^{-0.1t} = \frac{5}{13}$.</p>
                <p>$-0.1t = \ln\!\left(\frac{5}{13}\right) \approx -0.956$.</p>
                <div class="math-block">$$ \boxed{t \approx 9.6 \text{ minutes}} $$</div>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-globe-americas"></i> Earthquake moment magnitude: $M = 0.291\ln E + 1.17$, where $E$ is energy in joules. A quake releases $E = 1.0 \times 10^{11}$ J. Find $M$.</h4>
                <p>$\ln E = \ln(10^{11}) = 11\ln 10 \approx 11(2.303) = 25.33$.</p>
                <p>$M = 0.291(25.33) + 1.17 \approx 7.37 + 1.17$.</p>
                <div class="math-block">$$ \boxed{M \approx 8.5} $$</div>
                <p>A magnitude-8.5 "great" earthquake — the model matches reality.</p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-ruler"></i> Units Are Part of the Answer</h4>
                <p>In word problems, a bare number earns partial credit at best. <strong>Years</strong>, <strong>grams</strong>, <strong>$^\circ$F</strong> — the unit is half the answer on AP-style free response. Write it every time.</p>
            </div>

            <div class="mastery-box glass" style="margin-top:20px; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-lightbulb"></i> The Three-Step Attack for Every Model Problem</h4>
                <ol>
                    <li><strong>Substitute</strong> the knowns into the model (keep the units).</li>
                    <li><strong>Isolate</strong> the exponential or log term, then convert once.</li>
                    <li><strong>Finish with units</strong> — run the Finish Protocol (2.1c) if an extraneous root is possible.</li>
                </ol>
            </div>
