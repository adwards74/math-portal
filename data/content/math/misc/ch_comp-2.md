# 1.2 Exponent Reduction: Euler's Theorem
## Advanced Exponent Reduction & Totients


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-compress-arrows-alt"></i> Cutting Down Giant Exponents</h3>
                    <p>How do we find $7^{2024} \pmod{100}$? Instead of direct calculation, we find the cycle length using <strong>Euler's Totient Theorem</strong> and reduce the exponent.</p>
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-atom"></i> Euler's Totient Function ($\phi(n)$)</h5>
                    <p>The count of positive integers up to $n$ that are coprime to $n$. If $n = p_1^{e_1} \dots p_k^{e_k}$:</p>
                    $$\phi(n) = n(1-\frac{1}{p_1})\dots(1-\frac{1}{p_k})$$
                    <p>Theorem: $a^{\phi(n)} \equiv 1 \pmod n$ (where $\gcd(a, n)=1$).</p>
                </div>
            </div>
        