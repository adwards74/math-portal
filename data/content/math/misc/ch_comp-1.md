# 1.1 The Magic of Congruence: Core Number Theory
## Modular Arithmetic Mastery & CRT


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-orange);">
                    <h3><i class="fas fa-clock"></i> Section I: The Cyclic Logic</h3>
                    <p>Congruence ($\pmod n$) is a powerful tool to view numbers through their 'remainders'. It strips away the bulk of a number to reveal its underlying periodicity.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-history"></i> Clock Arithmetic ($\mathbb{Z}_7$)</h4>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <!-- Clock Circle -->
                        <circle cx="100" cy="100" r="80" stroke="rgba(236,72,153,0.1)" fill="transparent" stroke-width="10"/>
                        <!-- Numbers 0-6 -->
                        <g font-size="12" fill="var(--accent-magenta)" font-weight="bold">
                            <text x="95" y="35">0</text>
                            <text x="145" y="55">1</text>
                            <text x="170" y="105">2</text>
                            <text x="145" y="155">3</text>
                            <text x="95" y="180">4</text>
                            <text x="45" y="155">5</text>
                            <text x="25" y="105">6</text>
                        </g>
                        <!-- Iteration Arrow -->
                        <path d="M 100,50 A 50,50 0 0,1 150,100" stroke="var(--accent-orange)" stroke-width="3" fill="transparent" marker-end="url(#arrowhead-orange)"/>
                        <text x="130" y="70" fill="var(--accent-orange)" font-size="10">+1 mod 7</text>
                        <defs>
                            <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-orange)" />
                            </marker>
                        </defs>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Modular arithmetic is a wrap-around world where $6 + 1 = 0 \pmod 7$. It creates a finite, cyclic system.</p>
                </div>

                <h2>II. From Fermat to Orders</h2>
                <p>For a prime $p$, Fermat's Little Theorem states $a^{p-1} \equiv 1 \pmod p$. More specifically, the smallest positive integer $k$ such that $a^k \equiv 1 \pmod n$ is called the <strong>Order</strong>, denoted as $\text{ord}_n a$.</p>
                
                <div class="mastery-box glass" style="border-left:4px solid var(--accent-orange);">
                    <h5><i class="fas fa-key"></i> Mastery Spell: Properties of Order</h5>
                    <p>If $a^m \equiv 1 \pmod n$, then $k \mid m$ (Order must divide the exponent). This single property unlocks many complex competition problems.</p>
                </div>

                <h2>III. Chinese Remainder Theorem (CRT)</h2>
                <p>For coprime $m, n$, a system of congruences has a <strong>unique solution</strong> modulo $mn$.</p>
                <div class="math-block">
                    $$\begin{cases} x \equiv a \pmod m \ x \equiv b \pmod n \end{cases} \implies x \text{ is unique } \pmod{mn}$$
                </div>

                <div class="practice-section glass" style="margin-top:25px; border-top: 2px solid var(--accent-orange); padding:20px;">
                    <h4 style="color:var(--accent-orange);"><i class="fas fa-trophy"></i> Elite Practice (AIME Level)</h4>
                    <div class="problem-card">
                        <p><strong>Q.</strong> Find the smallest positive $x$ such that $17x \equiv 1 \pmod{43}$.</p>
                        <details class="glass-details">
                            <summary>Show Solution (Euclidean Algorithm)</summary>
                            <div class="solution">
                                <p>$43 = 17 \times 2 + 9$</p>
                                <p>$17 = 9 \times 1 + 8$</p>
                                <p>$9 = 8 \times 1 + 1$</p>
                                <p>Back-substitution: $1 = 9 - (17 - 9) = 2 \times 9 - 17 = 2(43 - 2 \times 17) - 17 = 2 \times 43 - 5 \times 17$.</p>
                                <p>Thus $-5 \times 17 \equiv 1 \pmod{43}$. $x = -5 + 43 = 38$.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        