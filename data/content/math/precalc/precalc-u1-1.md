# 1.1: Change & Concavity (Level 4 Mastery)

            <div class="intuition-box glass">
                <h3><i class="fas fa-microscope" style="color:#ffd700"></i> Elite Insight</h3>
                <p>On the AP Exam, the "Numerical Approach" is king. They won't just give you a graph; they will give you a <strong>Finite Difference Table</strong>. If the rate of change is decreasing while y is increasing, the function is <strong>Concave Down</strong>.</p>
            </div>

            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-cyan); margin: 20px 0; padding: 15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Mastery Justification Protocol</h4>
                <p>To get full credit on the FRQ, use this exact sentence structure:</p>
                <div class="logic-box" style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; font-style: italic;">
                    "Since the average rate of change on the interval [a, b] is [increasing/decreasing] while the function values are [increasing/decreasing], the function is concave [up/down] on the interval."
                </div>
            </div>

            <h3>1. The Logic of Discrete Rate of Change</h3>
            <p>In Algebra 1, we calculated slope as a constant. In Precalc, we analyze how that slope <em>changes</em>. This is the precursor to the Second Derivative in Calculus.</p>
            <div class="math-block">
                $$ r(x) = \frac{f(x_2) - f(x_1)}{x_2 - x_1} \text{ (Average Rate of Change)} $$
            </div>
            
            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; text-align: center; background: linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,0,0,0.5));">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-eye"></i> Visual Logic: Concave Down</h4>
                <div style="display: flex; justify-content: center; align-items: flex-end; height: 100px; gap: 5px;">
                    <div style="width: 20px; height: 30%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.5;"></div>
                    <div style="width: 20px; height: 60%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.7;"></div>
                    <div style="width: 20px; height: 80%; background: var(--accent-cyan); border-radius: 4px 4px 0 0; opacity: 0.9;"></div>
                    <div style="width: 20px; height: 90%; background: var(--accent-magenta); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 20px; height: 95%; background: var(--accent-magenta); border-radius: 4px 4px 0 0; opacity: 0.8;"></div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">Notice: The "jumps" are getting smaller ($30\% \to 20\% \to 10\% \to 5\%$). <br>The growth is <strong>Slowing Down</strong> = Concave Down.</p>
            </div>

            <div class="example-card glass" style="margin-top:20px;">
                <h4><i class="fas fa-table"></i> Numerical Deep Dive (AP Style)</h4>
                <table style="width:100%; text-align:center; border-collapse:collapse; margin:15px 0;">
                    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);"><th>x</th><td>0</td><td>2</td><td>4</td><td>6</td></tr>
                    <tr><th>f(x)</th><td>10</td><td>15</td><td>18</td><td>20</td></tr>
                    <tr style="color:var(--accent-cyan);"><th>$\Delta f$</th><td></td><td>+5</td><td>+3</td><td>+2</td></tr>
                </table>
                <p><strong>Analysis:</strong> As $x$ increases by 2, the changes in $f(x)$ are $5 \to 3 \to 2$. Since the rate of increase is dropping, the acceleration is negative $\implies$ <strong>Concave Down</strong>.</p>
            </div>
        