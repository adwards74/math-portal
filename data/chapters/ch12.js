window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch12"] = {
    "ch12-1": {
        title: "12.1 The Logic of Chance",
        subtitle: "Permutations & Combinations",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-dice"></i> The Global Monitor</h3>
                    <p>Statistics is the **Overhead View** of chaos. Individual events (like a coin flip) are unpredictable, but the collective behavior of millions of events follows a perfect, rigid pattern. It is the math of finding order in noise.</p>
                </div>

                <h2>I. Counting the Universe</h2>
                <p>Before calculating probability, you must learn to count the possibilities. This follows two distinct paths:</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <ul class="glass-list">
                        <li><strong>Permutation (Order Matters):</strong> $nPk = \\frac{n!}{(n-k)!}$</li>
                        <li><strong>Combination (Order Disregarded):</strong> $nCk = \\frac{n!}{k!(n-k)!}$</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-key"></i> CS: Password Entropy</h4>
                <p>The security of an encryption key is measured in **Bits of Entropy**. If a password has $n$ possible characters and a length of $k$, it has $n^k$ permutations. Every extra character exponentially scales the difficulty of a brute-force attack?봳his is combinatorial security.</p>
            </div>
        `
    },
    "ch12-2": {
        title: "12.2 Conditional Logic",
        subtitle: "The Bayesian Perspective",
        content: `
            <div class="lesson-section">
                <h2>I. Bayes' Theorem</h2>
                <p>Conditional probability allows us to update our beliefs as new data arrives. This is the "Engine of Intelligence".</p>
                
                <div class="proof-box glass">
                    \\[P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}\\]
                    <p style="margin-top:10px;">In AI, $P(A)$ is our **Prior Belief**, and $P(A|B)$ is our **Posterior Belief** after seeing evidence $B$.</p>
                </div>
            </div>
        `
    },
    "ch12-3": {
        title: "12.3 Discrete Random Variables",
        subtitle: "Expected Value & Variability",
        content: `
            <div class="lesson-section">
                <h2>I. The Law of Large Numbers</h2>
                <p>The **Expected Value ($E[X]$)** is not what you expect to get in one turn, but the average outcome over thousands of turns.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4>The House Edge</h4>
                    <p>Casinos don't rely on luck; they rely on Expected Value. If $E[X]$ is negative for the player (-0.05), it means the house is guaranteed to make 5% profit in the long run, even if a few people hit the jackpot.</p>
                </div>
            </div>
        `
    },
    "ch12-4": {
        title: "12.4 The Bell Curve (AI)",
        subtitle: "Normal Distribution & Standard Deviation",
        content: `
            <div class="lesson-section">
                <h2>I. The Gaussian Distribution</h2>
                <p>In a **Normal Distribution**, data clusters symmetrically around the mean ($\\mu$). The spread is controlled by the **Standard Deviation ($\\sigma$)**.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <h4>The Empirical Rule (68-95-99.7)</h4>
                    <ul class="glass-list">
                        <li>68% of data falls within $\\pm 1\\sigma$.</li>
                        <li>95% falls within $\\pm 2\\sigma$.</li>
                        <li>99.7% falls within $\\pm 3\\sigma$ (The "Three-Sigma" limit).</li>
                    </ul>
                </div>

                <div class="proof-box glass" style="margin-top:20px;">
                    <h4>$Z$-Score (Standardization)</h4>
                    <p>To compare different datasets, we convert values into $Z$-scores: $z = \\frac{x - \\mu}{\\sigma}$. This tells you how many standard deviations a value is from the average.</p>
                </div>
            </div>
        `
    },
    "ch12-5": {
        title: "12.5 Sampling & Bias",
        subtitle: "The Science of Surveys",
        content: `
            <div class="lesson-section">
                <h2>I. The Central Limit Theorem</h2>
                <p>The **Central Limit Theorem (CLT)** states that if you take enough samples, the distribution of their means will be normal, regardless of the population's shape. This is why Statistics works!</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-red);">
                    <h4>Sampling Bias Guardrail</h4>
                    <p>A sample is only valid if it mimics the population's diversity. **Selection Bias** occurs when your methodology systematically excludes certain groups, leading to "Skewed Data".</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px; border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-microscope"></i> CS: Data Poisoning in AI</h4>
                <p>If an AI is trained on biased data (e.g., facial recognition trained only on certain ethnicities), the resulting model will inherit those biases. In data science, <strong>Garbage In, Garbage Out</strong> is the law of the land.</p>
            </div>
        `
    },
    "ch12-rev": {
        title: "Chapter 12 Review Challenge",
        subtitle: "The Data Scientist",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Mastering Uncertainty</h2>
                <p>Statistics is the tool we use to tame the chaos of the world. It allows us to make predictions with confidence and identify the truth hidden in noise.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Combinatorics</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Map the total possibility space to understand the magnitude of risk.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Bayesian Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Update your beliefs dynamically as new information becomes available.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Normalcy</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize the Bell Curve as the natural equilibrium of random data.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Inference</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Deduce population truths from small, clean, and unbiased samples.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-green);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Statistical Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why does a "Spam Filter" get smarter over time using Bayesian logic?</li>
                    <li>If a value has a Z-score of +3.0, what does that tell you about its rarity in the population?</li>
                    <li>How can you identify 'Selection Bias' in a study about the effects of social media?</li>
                </ol>
            </div>
        `
    }
};


