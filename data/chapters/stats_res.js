window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA['stats_res'] = {
    "stats_res-u1-1": {
        title: "The Null Hypothesis Protocol",
        subtitle: "The Foundation of Scientific Skepticism",
        content: `
            <p>In research, we never "prove" a theory. Instead, we fail to disprove it. This is the core of the <strong>Null Hypothesis ($H_0$)</strong>.</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-brain"></i> The Courtroom Analogy</h4>
                <p>The Null Hypothesis is like the "Presumption of Innocence". We assume there is no effect (the defendant is innocent) until the evidence (data) is so overwhelming that it would be unreasonable to maintain that assumption.</p>
            </div>
            <h3>1. The Setup</h3>
            <ul>
                <li><strong>Null Hypothesis ($H_0$)</strong>: The status quo. No difference, no effect, no change.</li>
                <li><strong>Alternative Hypothesis ($H_a$)</strong>: The researcher's claim. There <em>is</em> a difference or effect.</li>
            </ul>
            <div class="lab-protocol-box glass" style="border-left-color: var(--accent-emerald);">
                <h4><i class="fas fa-flask"></i> IBET Protocol: Stating Hypotheses</h4>
                <p>When studying the effect of temperature on fish respiration:</p>
                <p><strong>$H_0$:</strong> Temperature has no effect on the respiration rate of <em>Danio rerio</em>.</p>
                <p><strong>$H_a$:</strong> Increased temperature leads to a significantly higher respiration rate.</p>
            </div>
        `
    },
    "stats_res-u1-2": {
        title: "Significance Levels & Alpha",
        subtitle: "Defining the Threshold of Discovery",
        vizConfig: {
            expressions: [
                "f(x) = (1/(1*sqrt(2*pi)))*e^{-0.5((x-0)/1)^2}",
                "a = 1.96",
                "x = a {x > 0}",
                "x = -a {x < 0}"
            ],
            bounds: { left: -4, right: 4, bottom: -0.1, top: 0.5 }
        },
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-microchip"></i> Section I: Defining "Enough"</h3>
                    <p>How much evidence is "enough" to reject the Null? We define this using the <strong>Significance Level ($\\alpha$)</strong>. It is the probability of rejecting $H_0$ when it is actually true (Type I Error).</p>
                </div>

                <div class="math-block">
                    $$\\text{Reject } H_0 \\iff p \\text{-value} < \\alpha$$
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-bolt"></i> Common Thresholds</h5>
                    <ul class="glass-list">
                        <li><strong>$\\alpha = 0.05$</strong>: The IBET standard. 5% chance of luck masquerading as a discovery.</li>
                        <li><strong>$\\alpha = 0.01$</strong>: Used when the cost of being wrong is high (e.g., medical safety).</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo-Sense Analysis</h4>
                    <p>Think of $\\alpha$ as your "Neural Filter". A lower $\\alpha$ makes your filter more restrictive, ensuring that only the strongest signals pass through the noise of random variation.</p>
                </div>
            </div>
        `
    },
    "stats_res-u2-1": {
        title: "Chi-Square Intuition",
        subtitle: "Observed vs. Expected Counts",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-th-large"></i> Section I: Measuring Mismatch</h3>
                    <p>The **Chi-Square ($\\chi^2$)** test is used for categorical data (counts). It measures the cumulative "distance" between what we observed ($O$) and what our theory expected ($E$).</p>
                </div>

                <div class="math-block">
                    $$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-lightbulb"></i> Why Square it?</h4>
                    <p>We square the difference $(O - E)$ so that negative differences (fewer counts than expected) don't cancel out positive ones. This ensures our "Total Error" is always positive, much like how distance is always measured as a positive scalar.</p>
                </div>

                <div class="evolution-link-box glass" style="border-color: var(--accent-orange); margin-top:20px; padding:20px; border-radius:15px; background:rgba(255,140,0,0.05);">
                    <h4><i class="fas fa-dna"></i> Biology Link: Mendelian Genetics</h4>
                    <p>Use Chi-Square to verify if your fruit fly offspring follow the $3:1$ phenotypic ratio. If $\\chi^2$ is too high, you have rejected the independent assortment hypothesis, meaning you might have discovered <strong>Genetic Linkage</strong>!</p>
                </div>
            </div>
        `
    },
    "stats_res-u1-3": {
        title: "T-Test Mechanics",
        subtitle: "Comparing Means with Statistical Rigor",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-balance-scale"></i> Section I: Signal vs. Noise</h3>
                    <p>The <strong>T-Test</strong> is the workhorse of IBET statistics. It determines if the difference between two sample means is likely due to a real effect or just random sampling error.</p>
                </div>

                <div class="math-block">
                    $$t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$$
                </div>

                <div class="visual-dynamic glass" style="margin:20px 0; padding:15px; text-align:center;">
                    <svg width="320" height="120" viewBox="0 0 320 120">
                        <!-- Two overlapping bell curves -->
                        <path d="M10,110 Q80,10 150,110" fill="rgba(0,210,255,0.2)" stroke="var(--accent-cyan)"/>
                        <path d="M50,110 Q120,10 190,110" fill="rgba(255,0,255,0.2)" stroke="var(--accent-magenta)"/>
                        <line x1="80" y1="60" x2="120" y2="60" stroke="#fff" marker-end="url(#arrowhead)"/>
                        <text x="70" y="50" fill="#fff" font-size="10">Difference (Signal)</text>
                    </svg>
                    <p style="font-size:0.8rem;">If the "Signal" (difference) is large compared to the "Noise" (width), $t$ increases.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-microchip"></i> Decision Logic</h4>
                    <ol class="glass-list">
                        <li><strong>Student's T-Test:</strong> Assumes equal variances ($s_1^2 \\approx s_2^2$).</li>
                        <li><strong>Welch's T-Test:</strong> More robust; does NOT assume equal variances. Use this for IBET by default.</li>
                    </ol>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo Strategy</h4>
                    <p>On the AP Exam or in senior research, always check **Degrees of Freedom ($df$)**. For a T-test, $df$ defines the shape of the distribution. As $df \\to \\infty$, the T-distribution morphs into the Normal Distribution.</p>
                </div>
            </div>
        `
    },
    "stats_res-u1-4": {
        title: "IBET: Fish Respiration Case",
        subtitle: "Applied Research Integration",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-flask"></i> Section I: Real-World Data Audit</h3>
                    <p>In this case study, we analyze actual IBET data from a *Danio rerio* respiration study. The goal is to determine if water temperature significantly alters the opercular beat rate.</p>
                </div>

                <div class="lab-protocol-box glass" style="border-left-color: var(--accent-blue);">
                    <h4><i class="fas fa-list-check"></i> Mastery Audit Checklist</h4>
                    <ul class="glass-list">
                        <li><strong>Sample Size ($n$):</strong> Was it sufficient to achieve statistical power?</li>
                        <li><strong>Outliers:</strong> Were they detected using a Grubbs' test or IQR rule?</li>
                        <li><strong>Normality:</strong> Did the data follow a Gaussian distribution (check via Shapiro-Wilk)?</li>
                    </ul>
                </div>

                <div class="glass-card elite-border" style="margin-top:20px;">
                    <h5><i class="fas fa-project-diagram"></i> Data Synthesis</h5>
                    <p>A $p$-value of $0.03$ suggests a significant difference at $\\alpha = 0.05$. However, as a scientist, you must ask: <strong>Is it biologically significant?</strong> A 1 beat-per-minute difference might be statistically valid but biologically irrelevant.</p>
                </div>
            </div>
        `
    },
    "stats_res-u2-2": {
        title: "Contingency Tables",
        subtitle: "Analyzing Multi-Variable Independence",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-table"></i> Section I: Correlation of Categories</h3>
                    <p>Contingency tables ($r \\times c$) allow us to test the independence of two categorical variables. For example, does "Eye Color" have a statistical dependency on "Hair Color"?</p>
                </div>

                <div class="math-block">
                    $$df = (r - 1) \\times (c - 1)$$
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-calculator"></i> Expected Count Formula</h5>
                    <p>For each cell in a contingency table, the expected value under the null (independence) is:</p>
                    <div class="math-block">
                        $$E = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}}$$
                    </div>
                </div>
            </div>
        `
    },
    "stats_res-u2-3": {
        title: "Genetic Linkage Stats",
        subtitle: "When Mendel Meets Reality",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-dna"></i> Section I: Breaking Mendel's 2nd Law</h3>
                    <p>Mendel's Law of Independent Assortment predicts a specific ratio for dihybrid testcrosses ($1:1:1:1$). If your observed offspring counts deviate wildly from this, the genes are likely **Linked** on the same chromosome.</p>
                </div>

                <div class="math-block">
                    $$\\chi^2 \\text{ for Assortment} = \\sum \\frac{(O - E)^2}{E} \\quad [df = 3]$$
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-calculator"></i> Linkage Evidence Map</h4>
                    <ul class="glass-list">
                        <li><strong>$p < 0.05$:</strong> Reject Independent Assortment. Genes are likely linked.</li>
                        <li><strong>Recombination Frequency:</strong> Calculate as (Recombinants / Total) $\\times$ 100.</li>
                        <li><strong>Gene Mapping:</strong> $1\\%$ recombination = $1$ map unit (centiMorgan).</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> Neo Strategy</h4>
                    <p>In high-stakes genetics exams, look for "Parental Types" that dominate the population. If the two non-recombinant classes make up $>50\\%$ of the offspring, linkage is mathematically confirmed.</p>
                </div>
            </div>
        `
    },
    "stats_res-u3-1": {
        title: "The Correlation Scale",
        subtitle: "Quantifying Linear Relationships",
        vizConfig: {
            expressions: ["y = 0.8x + 0.2", " (0,0),(1,1),(2,1.5),(3,2.8),(4,3.2) "],
            bounds: { left: -1, right: 5, bottom: -1, top: 5 }
        },
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-signal"></i> Section I: The Magnitude of Connection</h3>
                    <p>Correlation ($r$) measures the direction and strength of a linear relationship. It is a normalized scalar that always falls between **$-1$** and **$+1$**.</p>
                </div>

                <div class="glass-card elite-border">
                    <ul class="glass-list">
                        <li><strong>$r = 1$:</strong> Perfect positive linear relationship.</li>
                        <li><strong>$r = 0$:</strong> No linear relationship (random noise).</li>
                        <li><strong>$r = -1$:</strong> Perfect negative linear relationship.</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-exclamation-triangle"></i> Elite Rule: Correlation $\neq$ Causation</h4>
                    <p>Even if $r = 0.99$, it doesn't mean $X$ caused $Y$. They might both be driven by a "Lurking Variable" (Neural Ghost). Statistics identifies patterns; science explains mechanisms.</p>
                </div>
            </div>
        `
    },
    "stats_res-u3-2": {
        title: "Linear Regression Model",
        subtitle: "Predicting the Future with Data",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-chart-line"></i> Section I: The Regression Engine</h3>
                    <p>Linear Regression is the "Prediction Algorithm" of statistics. We find the single line that minimizes the total distance (residuals) between itself and every data point in the set.</p>
                </div>

                <div class="math-block" style="font-size: 1.5rem; color: var(--accent-cyan);">
                    $$\\hat{y} = a + bx$$
                </div>

                <div class="visual-dynamic glass" style="padding:20px; margin:20px 0; text-align:center;">
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <!-- Simplified scatter plot with line -->
                        <circle cx="40" cy="120" r="3" fill="var(--accent-cyan)"/>
                        <circle cx="80" cy="90" r="3" fill="var(--accent-cyan)"/>
                        <circle cx="120" cy="100" r="3" fill="var(--accent-cyan)"/>
                        <circle cx="160" cy="60" r="3" fill="var(--accent-cyan)"/>
                        <circle cx="200" cy="40" r="3" fill="var(--accent-cyan)"/>
                        <line x1="20" y1="140" x2="250" y2="20" stroke="var(--accent-magenta)" stroke-width="2" stroke-dasharray="4"/>
                        <text x="260" y="30" fill="var(--accent-magenta)" font-size="12">LSRL</text>
                    </svg>
                    <p style="font-size:0.8rem; opacity:0.7;">The LSRL acts as the "Average Path" through the cloud of data.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-clipboard-check"></i> Parameter Decoding</h4>
                    <ul class="glass-list">
                        <li><strong>$\\hat{y}$ (y-hat):</strong> The **Predicted** value for a given $x$.</li>
                        <li><strong>$b$ (Slope):</strong> For every unit increase in $x$, we predict an average increase of $b$ units in $y$.</li>
                        <li><strong>$a$ (y-intercept):</strong> The predicted value when $x = 0$ (often a theoretical baseline).</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-robot"></i> Machine Learning Connection</h4>
                    <p>In the world of AI, this is called **Gradient Descent Prep**. The model tries to minimize the **Loss Function** (SSE), which is exactly what the Least Squares method does analytically.</p>
                </div>
            </div>
        `
    },
    "stats_res-u3-3": {
        title: "Residual Mapping",
        subtitle: "The Final Quality Check",
        vizConfig: {
            expressions: [
                "y = 0",
                "(1, 0.2), (2, -0.1), (3, 0.3), (4, -0.2), (5, 0.1)"
            ],
            bounds: { left: -1, right: 6, bottom: -1, top: 1 }
        },
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-filter"></i> Section I: Auditing the Model</h3>
                    <p>A residual is the vertical distance between the actual data and the prediction: $\\text{Residual} = y - \\hat{y}$. A good model leaves only <strong>Random Noise</strong> behind.</p>
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-search"></i> The "Randomness" Protocol</h5>
                    <p>If you see a clear pattern (curve, megaphone, or wave) in your residual plot:</p>
                    <ol class="glass-list">
                        <li>Your linear model is **Technically Invalid**.</li>
                        <li>The relationship is likely non-linear (exponential or power).</li>
                        <li>You need to <strong>Transform</strong> the data (logs or squares) to linearize it.</li>
                    </ol>
                </div>

                <div class="mastery-protocol glass" style="border-color: var(--accent-orange);">
                    <h4><i class="fas fa-exclamation-triangle"></i> IBET Rule: Outlier Sensitivity</h4>
                    <p>Regression is <strong>not robust</strong>. High-leverage outliers or influential points can "pull" the entire line toward them, destroying the accuracy for the rest of the data. Always check your residuals!</p>
                </div>
            </div>
        `
    }
};
