window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch_comp"] = {
    "ch_comp-1": {
        title: "1.1 The Magic of Congruence: Core Number Theory",
        subtitle: "Modular Arithmetic Mastery & CRT",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-orange);">
                    <h3><i class="fas fa-clock"></i> Section I: The Cyclic Logic</h3>
                    <p>Congruence ($\\pmod n$) is a powerful tool to view numbers through their 'remainders'. It strips away the bulk of a number to reveal its underlying periodicity.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-history"></i> Clock Arithmetic ($\\mathbb{Z}_7$)</h4>
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
                    <p style="font-size:0.8rem; margin-top:10px;">Modular arithmetic is a wrap-around world where $6 + 1 = 0 \\pmod 7$. It creates a finite, cyclic system.</p>
                </div>

                <h2>II. From Fermat to Orders</h2>
                <p>For a prime $p$, Fermat's Little Theorem states $a^{p-1} \\equiv 1 \\pmod p$. More specifically, the smallest positive integer $k$ such that $a^k \\equiv 1 \\pmod n$ is called the <strong>Order</strong>, denoted as $\\text{ord}_n a$.</p>
                
                <div class="mastery-box glass" style="border-left:4px solid var(--accent-orange);">
                    <h5><i class="fas fa-key"></i> Mastery Spell: Properties of Order</h5>
                    <p>If $a^m \\equiv 1 \\pmod n$, then $k \\mid m$ (Order must divide the exponent). This single property unlocks many complex competition problems.</p>
                </div>

                <h2>III. Chinese Remainder Theorem (CRT)</h2>
                <p>For coprime $m, n$, a system of congruences has a <strong>unique solution</strong> modulo $mn$.</p>
                <div class="math-block">
                    $$\\begin{cases} x \\equiv a \\pmod m \\ x \\equiv b \\pmod n \\end{cases} \\implies x \\text{ is unique } \\pmod{mn}$$
                </div>

                <div class="practice-section glass" style="margin-top:25px; border-top: 2px solid var(--accent-orange); padding:20px;">
                    <h4 style="color:var(--accent-orange);"><i class="fas fa-trophy"></i> Elite Practice (AIME Level)</h4>
                    <div class="problem-card">
                        <p><strong>Q.</strong> Find the smallest positive $x$ such that $17x \\equiv 1 \\pmod{43}$.</p>
                        <details class="glass-details">
                            <summary>Show Solution (Euclidean Algorithm)</summary>
                            <div class="solution">
                                <p>$43 = 17 \\times 2 + 9$</p>
                                <p>$17 = 9 \\times 1 + 8$</p>
                                <p>$9 = 8 \\times 1 + 1$</p>
                                <p>Back-substitution: $1 = 9 - (17 - 9) = 2 \\times 9 - 17 = 2(43 - 2 \\times 17) - 17 = 2 \\times 43 - 5 \\times 17$.</p>
                                <p>Thus $-5 \\times 17 \\equiv 1 \\pmod{43}$. $x = -5 + 43 = 38$.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch_comp-2": {
        title: "1.2 Exponent Reduction: Euler's Theorem",
        subtitle: "Advanced Exponent Reduction & Totients",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-compress-arrows-alt"></i> Cutting Down Giant Exponents</h3>
                    <p>How do we find $7^{2024} \\pmod{100}$? Instead of direct calculation, we find the cycle length using <strong>Euler's Totient Theorem</strong> and reduce the exponent.</p>
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-atom"></i> Euler's Totient Function ($\\phi(n)$)</h5>
                    <p>The count of positive integers up to $n$ that are coprime to $n$. If $n = p_1^{e_1} \\dots p_k^{e_k}$:</p>
                    $$\\phi(n) = n(1-\\frac{1}{p_1})\\dots(1-\\frac{1}{p_k})$$
                    <p>Theorem: $a^{\\phi(n)} \\equiv 1 \\pmod n$ (where $\\gcd(a, n)=1$).</p>
                </div>
            </div>
        `
    },
    "ch_comp-3": {
        title: "2.1 Inclusion-Exclusion Principle (PIE)",
        subtitle: "Advanced Combinatorics - PIE & Derangements",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-venn-diagram"></i> Section I: The Art of De-duplication</h3>
                    <p>PIE is the logical way to count elements satisfying 'at least one' of multiple conditions. The rhythm is: <strong>Add odd overlaps, Subtract even overlaps.</strong></p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                        <!-- Venn Diagram 3-circles -->
                        <circle cx="85" cy="65" r="40" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)"/>
                        <circle cx="115" cy="65" r="40" fill="rgba(255,0,255,0.2)" stroke="var(--accent-magenta)"/>
                        <circle cx="100" cy="95" r="40" fill="rgba(255,255,255,0.1)" stroke="#fff"/>
                        <text x="100" y="80" fill="#fff" font-size="10" font-weight="bold">ABC</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">$$|A \\cup B \\cup C| = \\sum |A| - \\sum |A \\cap B| + |A \\cap B \\cap C|$$</p>
                </div>

                <h2>II. Derangements</h2>
                <p>A derangement is a permutation with no fixed points. It's a classic PIE application.</p>
                <div class="math-block">
                    $$D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$$
                </div>
            </div>
        `
    },
    "ch_comp-4": {
        title: "2.2 Generating Functions: Counting with Polynomials",
        subtitle: "The Algebra of Counting",
        content: `
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
                    $$\\frac{1}{(1-x)(1-x^2)(1-x^5)}$$
                </div>
                
                <div class="tj-edge glass">
                    <h4><i class="fas fa-terminal"></i> CS Perspective: Dynamic Programming</h4>
                    <p>Generating functions are the mathematical twins of **Knapsack DP**. Modeling with polynomials provides the same logical structure as building a DP table.</p>
                </div>
            </div>
        `
    },
    "ch_comp-5": {
        title: "3.1: The Partition Method",
        subtitle: "Stars and Bars Mastery",
        content: `
            <p>How many ways can you put 10 identical apples into 3 distinct bins? This is the **Stars and Bars** problem, a classic "Partition" technique.</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-shapes"></i> The Separator Trick</h4>
                <p>Instead of counting apple distributions, count the number of ways to arrange 10 stars (apples) and 2 bars (dividers). Result: $\\binom{n+k-1}{k-1} = \\binom{12}{2} = 66$.</p>
            </div>
        `
    },
    "ch_comp-6": {
        title: "3.2: 3-Digit Numerical Strategies",
        subtitle: "Mental Shortcuts for the AMC/AIME",
        content: `
            <p>Large number multiplication and division are time-sinks. Competition winners use specific algebraic skeletons to speed up calculation.</p>
            <div class="mastery-box glass" style="border-left: 4px solid var(--accent-magenta);">
                <h4><i class="fas fa-bolt"></i> The (100+x) Frame</h4>
                <p>To multiply $104 \\times 107$: $(100+4)(100+7) = 11128$.</p>
            </div>
        `
    }
};
