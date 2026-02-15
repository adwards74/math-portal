# AMC: Prime Factorization Secrets
## The DNA of Numbers & Divisor Counting


            <div class="lesson-section" style="border-left: 4px solid #ffd700;">
                <h2>I. The Fundamental Theorem of Arithmetic</h2>
                <p>Every integer $n > 1$ has a unique representation as a product of prime powers: $n = p_1^{e_1} p_2^{e_2} \dots p_k^{e_k}$. This isn't just a fact; it's the <strong>Universal Database Schema</strong> for integers.</p>
            </div>
            
            <div class="glass-card" style="border: 2px solid #ffd700; background: rgba(255, 215, 0, 0.05); box-shadow: 0 0 15px rgba(255, 215, 0, 0.1);">
                <h4 style="color: #ffd700;"><i class="fas fa-magic"></i> Elite Trick: The Divisor Function $\tau(n)$</h4>
                <p>To count ALL divisors of $n$, simply multiply the (exponents + 1):</p>
                <p style="text-align:center; font-size: 1.2rem; margin: 15px 0;">$\tau(n) = (e_1+1)(e_2+1) \dots (e_k+1)$</p>
                <p><strong>Example:</strong> $72 = 2^3 \times 3^2$. <br>Divisors = $(3+1)(2+1) = 4 \times 3 = 12$.</p>
            </div>

            <div class="proof-box glass" style="margin-top:20px;">
                <h4>AMC Challenge: Product of Divisors</h4>
                <p>The product of all divisors of $n$ is simply $n^{\tau(n)/2}$. Visualize this as pairing divisors: $d$ and $n/d$. Each pair multiplies to $n$.</p>
            </div>
        