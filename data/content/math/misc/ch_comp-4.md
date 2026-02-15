# 2.2 Generating Functions: Counting with Polynomials
## The Algebra of Counting


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-blue);">
                    <h3><i class="fas fa-magic"></i> Section I: Polynomial Pockets</h3>
                    <p>Transform combinatorics into algebra. Place your choices in the <strong>exponents</strong>, and the number of ways to pick them will appear as the <strong>coefficient</strong>.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,163,255,0.05); border:1px solid var(--accent-blue);">
                    <h4><i class="fas fa-archive"></i> Exponents as Choices</h4>
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- Polynomial terms as boxes -->
                        <g transform="translate(40, 40)">
                            <rect x="0" y="0" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="var(--accent-cyan)"/>
                            <text x="10" y="25" fill="#fff" font-size="12">$x^0$</text>
                            <text x="0" y="55" fill="rgba(255,255,255,0.5)" font-size="8">0 items</text>
                        </g>
                        <g transform="translate(100, 40)">
                            <rect x="0" y="0" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="var(--accent-cyan)"/>
                            <text x="10" y="25" fill="#fff" font-size="12">$x^1$</text>
                            <text x="0" y="55" fill="rgba(255,255,255,0.5)" font-size="8">1 item</text>
                        </g>
                        <g transform="translate(160, 40)">
                            <rect x="0" y="0" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="var(--accent-cyan)"/>
                            <text x="10" y="25" fill="#fff" font-size="12">$x^2$</text>
                            <text x="0" y="55" fill="rgba(255,255,255,0.5)" font-size="8">2 items</text>
                        </g>
                        <!-- Plus signs -->
                        <text x="85" y="65" fill="#fff" font-size="14">+</text>
                        <text x="145" y="65" fill="#fff" font-size="14">+</text>
                        <text x="205" y="65" fill="#fff" font-size="14">...</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Each term $(x^k)$ represents an option to pick $k$ objects. Poly-multiplication automatically sums up all valid combinations.</p>
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-scroll"></i> Example: Coin Change</h5>
                    <p>The number of ways to make 10 cents with 1c, 2c, and 5c coins is the coefficient of $x^{10}$ in:</p>
                    $$\frac{1}{(1-x)(1-x^2)(1-x^5)}$$
                </div>
                
                <div class="tj-edge glass">
                    <h4><i class="fas fa-terminal"></i> CS Perspective: Dynamic Programming</h4>
                    <p>Generating functions are the mathematical twins of **Knapsack DP**. Modeling with polynomials provides the same logical structure as building a DP table.</p>
                </div>
            </div>
        