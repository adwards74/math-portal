window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch_amc"] = {
    "ch_amc-1": {
        title: "AMC: Prime Factorization Secrets",
        subtitle: "The DNA of Numbers \\u0026 Divisor Counting",
        content: `
            <div class="lesson-section" style="border-left: 4px solid #ffd700;">
                <h2>I. The Fundamental Theorem of Arithmetic</h2>
                <p>Every integer $n > 1$ has a unique representation as a product of prime powers: $n = p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k}$. This isn't just a fact; it's the <strong>Universal Database Schema</strong> for integers.</p>
            </div>
            
            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05); box-shadow: 0 0 15px rgba(255, 215, 0, 0.1);">
                <h4 style="color: #ffd700;"><i class="fas fa-magic"></i> Elite Trick: The Divisor Function $\\tau(n)$</h4>
                <p>To count ALL divisors of $n$, simply multiply the (exponents + 1):</p>
                <p style="text-align:center; font-size: 1.2rem; margin: 15px 0;">$\\tau(n) = (e_1+1)(e_2+1) \\dots (e_k+1)$</p>
                <p><strong>Example:</strong> $72 = 2^3 \\times 3^2$. <br>Divisors = $(3+1)(2+1) = 4 \\times 3 = 12$.</p>
            </div>

            <div class="proof-box glass" style="margin-top:20px;">
                <h4>AMC Challenge: Product of Divisors</h4>
                <p>The product of all divisors of $n$ is simply $n^{\\tau(n)/2}$. Visualize this as pairing divisors: $d$ and $n/d$. Each pair multiplies to $n$.</p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Fundamental theorem:</strong> Every integer > 1 has unique prime factorization.</li><li><strong>Count divisors:</strong> If $n = p_1^{e_1}...p_k^{e_k}$, divisors $= (e_1+1)...(e_k+1)$.</li><li><strong>Find GCD/LCM:</strong> Use prime factorizations.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> How many divisors does 72 have?</span>
                </div>
            </div>`
    },
    "ch_amc-2": {
        title: "AMC: Stars and Bars Mastery",
        subtitle: "Advanced Combinatorics (Balls in Urns)",
        content: `
            <div class="lesson-section">
                <h2>I. Distributing Identical Items</h2>
                <p>How many ways can we distribute $n$ identical cookies to $k$ distinct children? This is the classic <strong>Allocation Problem</strong>.</p>
            </div>

            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05);">
                <h4 style="color: #ffd700;"><i class="fas fa-star"></i> The Formula</h4>
                <p>Number of ways = $\\dbinom{n + k - 1}{k - 1}$</p>
                <p><strong>Intuition:</strong> Imagine $n$ stars and $k-1$ bars as dividers. We are arranging $n + (k-1)$ symbols.</p>
            </div>

            <div class="glass-card" style="margin-top:15px; border-left: 4px solid var(--accent-orange);">
                <h4>Constraint Variation</h4>
                <p>If every child MUST receive at least one cookie ($x_i \\ge 1$): <br>Ways = $\\dbinom{n - 1}{k - 1}$</p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Stars and bars:</strong> Distribute $n$ identical items into $k$ bins: $C(n+k-1, k-1)$.</li><li><strong>Non-negative:</strong> Standard formula. For positive, subtract 1 from each.</li><li><strong>Visualize:</strong> Stars = items, bars = dividers.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> How many ways to distribute 10 identical candies to 3 kids?</span>
                </div>
            </div>`
    },
    "ch_amc-3": {
        title: "AMC: Vieta's Theorem \\u0026 Polynomials",
        subtitle: "Roots, Sums, and Products",
        content: `
            <div class="lesson-section">
                <h2>I. Beyond the Quadratic Formula</h2>
                <p>Vieta's formulas relate the coefficients of a polynomial to sums and products of its roots. This is the ultimate shortcut for AMC polynomial questions.</p>
            </div>

            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05);">
                <h4 style="color: #ffd700;"><i class="fas fa-link"></i> Cubic Vieta (degree 3)</h4>
                <p>For $ax^3 + bx^2 + cx + d = 0$ with roots $r_1, r_2, r_3$:</p>
                <ul class="glass-list">
                    <li>$\\sum r_i = -b/a$</li>
                    <li>$\\sum r_i r_j = c/a$</li>
                    <li>$r_1 r_2 r_3 = -d/a$</li>
                </ul>
            </div>
            
            <p style="margin-top:15px; opacity:0.8;">Notice the sign pattern: $(-), (+), (-), \\dots$ It always alternates!</p>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Vieta's formulas:</strong> For $ax^2+bx+c=0$, sum $= -b/a$, product $= c/a$.</li><li><strong>Higher degree:</strong> Generalizes to $n$th degree polynomials.</li><li><strong>Use symmetry:</strong> Avoid solving, use relationships.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> If roots are 2 and 3, what is the quadratic?</span>
                </div>
            </div>`
    },
    "ch_amc-4": {
        title: "AMC: Diophantine Equations",
        subtitle: "Finding Integer Solutions",
        content: `
            <div class="lesson-section">
                <h2>I. Linear Diophantine</h2>
                <p>Equations of the form $ax + by = c$ have integer solutions if and only if $\\text{gcd}(a,b)$ divides $c$.</p>
            </div>

            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05);">
                <h4 style="color: #ffd700;"><i class="fas fa-key"></i> Simon's Favorite Factoring Trick</h4>
                <p>Used to solve $xy + ax + by + c = 0$.</p>
                <p><strong>Protocol:</strong> $xy + ax + by + ab = (x+b)(y+a)$. <br>Just add $ab-c$ to both sides to force a factorization.</p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Diophantine:</strong> Integer solutions to equations.</li><li><strong>Linear:</strong> $ax + by = c$ has solutions iff $\\gcd(a,b)$ divides $c$.</li><li><strong>Modular arithmetic:</strong> Often the key to proving no solutions.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Find integer solutions to $3x + 5y = 1$.</span>
                </div>
            </div>`
    }
};


