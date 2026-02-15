# 2.2: Logistic Dynamics (Mastering the Inflection)

            <div class="mastery-box glass" style="border-left:4px solid var(--accent-cyan); margin:20px 0; padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-chart-area"></i> The Inflection Protocol</h4>
                <p>A logistic model $f(x) = \frac{L}{1+ae^{-bx}}$ has a <strong>Carrying Capacity $L$</strong>. The point of fastest growth occurs at exactly $y = L/2$.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; text-align:center;">
                <div style="display:inline-block; position:relative; width:200px; height:100px; border-left:1px solid #fff; border-bottom:1px solid #fff;">
                    <svg viewBox="0 0 200 100" style="width:100%; height:100%;">
                        <path d="M 0 95 Q 100 95 100 50 T 200 5" fill="none" stroke="var(--accent-magenta)" stroke-width="2" />
                        <circle cx="100" cy="50" r="3" fill="var(--accent-cyan)" />
                    </svg>
                    <p style="font-size:0.7rem; color:var(--accent-cyan);">Fastest Growth Point ($L/2$)</p>
                </div>
            </div>

            <h3>1. Mastery Justification</h3>
            <p>If asked to justify when a phenomenon is growing faster and faster:</p>
            <div class="logic-box" style="font-style:italic; background:rgba(0,0,0,0.3); padding:10px; border-radius:8px;">
                "The rate of growth is increasing while $0 < y < L/2$ (concave up) and decreasing after $y > L/2$ (concave down)."
            </div>
        