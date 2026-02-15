# Calc Intro: The Paradox of Zeno
## The Infinite Step & Limit Intuition


            <div class="lesson-section" style="border-left: 4px solid var(--accent-cyan);">
                <h2>I. Can you ever reach the door?</h2>
                <p>If you walk halfway to the door, then halfway again, and again... mathematically, you never arrive. Calculus solves this by defining the destination as the <strong>Limit</strong>.</p>
            </div>

            <div class="glass-card" style="border: 2px solid var(--accent-cyan); background: rgba(0, 210, 255, 0.05);">
                <h4 style="color: var(--accent-cyan);"><i class="fas fa-microchip"></i> Concept: Dynamic Approximation</h4>
                <p>A limit isn't where you ARE; it's where you are HEADED. As $n \to \infty$, the distance remaining $\to 0$.</p>
                <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; margin-top: 10px;">
                    while(distance > 0) { <br>
                    &nbsp;&nbsp;distance /= 2; <br>
                    } // Returns 0 in limit space
                </p>
            </div>
        