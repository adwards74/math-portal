# 2.2 Differentiability & Smoothness
## When Derivatives Fail


            <div class="lesson-section">
                <h2>I. Non-Differentiable Points</h2>
                <p>A function can be continuous but NOT differentiable. You cannot draw a unique tangent at:</p>
                
                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; display:flex; justify-content:space-around; align-items:flex-end; height:100px;">
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 0 60 L 30 10 L 60 60" stroke="var(--accent-red)" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Corner ($|x|$)</p>
                    </div>
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 0 10 Q 30 60 60 10" stroke="var(--accent-magenta)" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Cusp</p>
                    </div>
                    <div style="text-align:center;">
                        <svg width="60" height="60"><path d="M 30 0 L 30 60" stroke="#fff" fill="transparent" stroke-width="2"/></svg>
                        <p style="font-size:0.6rem;">Vertical Tan</p>
                    </div>
                </div>

                <ul class="glass-list">
                    <li><strong>Corners:</strong> Sharp turns where left-slope $\neq$ right-slope.</li>
                    <li><strong>Cusps:</strong> "Spikes" where the slope goes to $\pm \infty$ instantly.</li>
                    <li><strong>Vertical Tangents:</strong> Where the graph becomes perfectly vertical (infinite slope).</li>
                </ul>
            </div>
    <div class="resources-box glass" style="margin-top:20px;">
                    <h5><i class="fas fa-external-link-alt"></i> MIT Deep Dive</h5>
                    <a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-2-definition-of-the-derivative/" target="_blank" class="resource-link">MIT 18.01SC: Session 2 - Differentiability</a>
                </div>
            </div>
        