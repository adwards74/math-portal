window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch_limits"] = {
    "ch_limits-1": {
        title: "Calc Intro: The Paradox of Zeno",
        subtitle: "The Infinite Step & Limit Intuition",
        content: `
            <div class="lesson-section" style="border-left: 4px solid var(--accent-cyan);">
                <h2>I. Can you ever reach the door?</h2>
                <p>If you walk halfway to the door, then halfway again, and again... mathematically, you never arrive. Calculus solves this by defining the destination as the <strong>Limit</strong>.</p>
            </div>

            <div class="glass-card" style="border: 2px solid var(--accent-cyan); background: rgba(0, 210, 255, 0.05);">
                <h4 style="color: var(--accent-cyan);"><i class="fas fa-microchip"></i> Concept: Dynamic Approximation</h4>
                <p>A limit isn't where you ARE; it's where you are HEADED. As $n \\to \\infty$, the distance remaining $\\to 0$.</p>
                <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; margin-top: 10px;">
                    while(distance > 0) { <br>
                    &nbsp;&nbsp;distance /= 2; <br>
                    } // Returns 0 in limit space
                </p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Zeno's paradox:</strong> Infinite steps, finite distance. How?</li><li><strong>Resolution:</strong> Infinite geometric series converges!</li><li><strong>Key insight:</strong> $1/2 + 1/4 + 1/8 + ... = 1$.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Does the sum $1 + 1/2 + 1/4 + ...$ converge?</span>
                </div>
            </div>`
    },
    "ch_limits-2": {
        title: "Calc Intro: The Tangent Problem",
        subtitle: "Instantaneous Rate of Change",
        content: `
            <div class="lesson-section">
                <h2>I. Secant vs. Tangent</h2>
                <p>Algebra can find the average slope between two points (Secant). Calculus finds the slope at <em>one</em> single point (Tangent) by bringing the two points infinitely close together ($h \\to 0$).</p>
            </div>

            <div class="glass-card" style="border: 2px solid var(--accent-cyan); background: rgba(0, 210, 255, 0.05);">
                <h4 style="color: var(--accent-cyan);"><i class="fas fa-chart-line"></i> The Difference Quotient</h4>
                <p>$$ m_{tan} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$</p>
                <button class="glass tutor-btn" onclick="window.plotSolution('y=x^2; y-1=2(x-1); (1,1)')" style="margin-top:15px; border-color:var(--accent-cyan);">
                    <i class="fas fa-eye"></i> Visualizing the Tangent ($y=x^2$)
                </button>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Tangent problem:</strong> Slope of curve at a point.</li><li><strong>Secant lines:</strong> Approximate, then take limit.</li><li><strong>Derivative:</strong> Limit of difference quotient.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> What is the slope of $y=x^2$ at $x=1$?</span>
                </div>
            </div>`
    },
    "ch_limits-3": {
        title: "Calc Intro: Visualizing Infinity",
        subtitle: "Asymptotes & End Behavior",
        content: `
            <div class="lesson-section">
                <h2>I. The Horizon of Math</h2>
                <p>What happens to $f(x) = \\frac{1}{x}$ as $x$ gets astronomical? It never hits zero, but it becomes indistinguishable from it. This is the <strong>Horizontal Asymptote</strong>.</p>
            </div>

            <div class="glass-card" style="border: 2px solid var(--accent-blue);">
                <h4 style="color: var(--accent-blue);"><i class="fas fa-infinity"></i> Elite Bridge: Algebra 2 to Calc</h4>
                <p>In Algebra 2, you learned "End Behavior". In Calculus, we formalize this as limits at infinity. They are the same thing, just with a more precise "API".</p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Infinity:</strong> Not a number, but a concept of unboundedness.</li><li><strong>Limits at infinity:</strong> End behavior of functions.</li><li><strong>Vertical asymptotes:</strong> Function goes to ±∞.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Find $\\lim_{x\\to\\infty} \\frac{2x+1}{x-3}$.</span>
                </div>
            </div>`
    }
};


