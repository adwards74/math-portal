# AMC: Stars and Bars Mastery
## Advanced Combinatorics (Balls in Urns)


            <div class="lesson-section">
                <h2>I. Distributing Identical Items</h2>
                <p>How many ways can we distribute $n$ identical cookies to $k$ distinct children? This is the classic <strong>Allocation Problem</strong>.</p>
            </div>

            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05);">
                <h4 style="color: #ffd700;"><i class="fas fa-star"></i> The Formula</h4>
                <p>Number of ways = $\dbinom{n + k - 1}{k - 1}$</p>
                <p><strong>Intuition:</strong> Imagine $n$ stars and $k-1$ bars as dividers. We are arranging $n + (k-1)$ symbols.</p>
            </div>

            <div class="glass-card" style="margin-top:15px; border-left: 4px solid var(--accent-orange);">
                <h4>Constraint Variation</h4>
                <p>If every child MUST receive at least one cookie ($x_i \ge 1$): <br>Ways = $\dbinom{n - 1}{k - 1}$</p>
            </div>
        