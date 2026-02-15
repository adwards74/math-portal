# 10.4 Taylor & Maclaurin Series
## Polynomi-fying Reality


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-dna"></i> Polynomial DNA</h3>
                    <p>Taylor Series prove that every complex function (sin, cos, exp) is secretly just an infinite polynomial. The derivatives at the center contain the "genetic code" for the entire function.</p>
                </div>

                <h2>I. Universal Proximity</h2>
                \[f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + dots\]

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-layer-group"></i> Layered Approximation</h4>
                    <div style="position:relative; height:80px; width:200px; margin:0 auto; border-bottom:1px solid #fff;">
                        <svg width="200" height="80">
                            <path d="M 0 40 Q 100 0 200 80" stroke="#fff" fill="transparent" stroke-width="1" stroke-dasharray="4"/>
                            <line x1="50" y1="20" x2="150" y2="20" stroke="var(--accent-blue)" stroke-width="2"/>
                            <path d="M 60 25 Q 100 10 140 25" stroke="var(--accent-cyan)" fill="transparent" stroke-width="2"/>
                        </svg>
                    </div>
                    <p style="font-size:0.8rem; margin-top:10px;">Blue (Linear) $\to$ Cyan (Quadratic) $\to$ White (Actual Function). More terms = Better "Cling".</p>
                </div>
            </div>
        