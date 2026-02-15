window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA['stats_res'] = {
    "stats_res:u1-1": {
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
    "stats_res:u1-2": {
        title: "Significance Levels & Alpha",
        subtitle: "Defining the Threshold of Discovery",
        vizConfig: {
            expressions: [
                "f(x) = (1/(1*sqrt(2*pi)))*e^(-0.5*((x-0)/1)^2)",
                "a = 1.96",
                "x = a {x > 0}",
                "x = -a {x < 0}"
            ],
            bounds: { left: -4, right: 4, bottom: -0.1, top: 0.5 }
        },
        content: `
            <p>How much evidence is "enough"? We define this using the <strong>Significance Level ($\alpha$)</strong>.</p>
            <p>Common thresholds in IBET research:</p>
            <ul>
                <li><strong>$\alpha = 0.05$</strong>: The standard. 5% chance of being wrong.</li>
                <li><strong>$\alpha = 0.01$</strong>: Used for high-stakes medical or chemical research.</li>
            </ul>
            <div class="tj-edge glass">
                <h4><i class="fas fa-microchip"></i> Neo-Sense Analysis</h4>
                <p>If your $p$-value is less than $\alpha$, you "Reject the Null Hypothesis". If it's greater, you "Fail to Reject" — meaning your results could just be noise.</p>
            </div>
        `
    },
    "stats_res:u2-1": {
        title: "Chi-Square Intuition",
        subtitle: "Observed vs. Expected Counts",
        content: `
            <p>The **Chi-Square ($\chi^2$)** test is used for categorical data. It tells us if our counts match a specific model.</p>
            <p>$$\chi^2 = \sum \frac{(O - E)^2}{E}$$</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-lightbulb"></i> Why Square it?</h4>
                <p>We square the difference $(O - E)$ so that negative differences (fewer counts than expected) don't cancel out positive ones. This ensures our "Total Error" is always positive.</p>
            </div>
            <div class="evolution-link-box glass" style="border-color: var(--accent-orange); margin-top:20px; padding:20px; border-radius:15px; background:rgba(255,140,0,0.05);">
                <h4><i class="fas fa-dna"></i> Biology Link: Mendelian Genetics</h4>
                <p>Use Chi-Square to verify if your fruit fly offspring follow the $3:1$ phenotypic ratio. If $\chi^2$ is too high, you might have discovered <strong>Genetic Linkage</strong>!</p>
            </div>
        `
    },
    "stats_res:u1-3": {
        title: "T-Test Mechanics",
        subtitle: "Comparing Means with Statistical Rigor",
        content: `
            <p>The <strong>T-Test</strong> is the workhorse of IBET statistics. It compares the means of two groups to see if they are truly different.</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-balance-scale"></i> Signal vs. Noise</h4>
                <p>The T-score is a ratio: (Difference between means) / (Variation within groups). If the "signal" (difference) is much larger than the "noise" (variation), the groups are likely different.</p>
            </div>
            <p>In your calculations, remember to check for <strong>Equal Variance</strong> before choosing between a Student's T-test and a Welch's T-test.</p>
        `
    },
    "stats_res:u1-4": {
        title: "IBET: Fish Respiration Case",
        subtitle: "Applied Research Integration",
        content: `
            <p>In this case study, we analyze actual IBET data from a Danio rerio respiration study.</p>
            <div class="lab-protocol-box glass" style="border-left-color: var(--accent-blue);">
                <h4><i class="fas fa-project-diagram"></i> Audit Checklist</h4>
                <ul>
                    <li>Was the sample size ($n$) sufficient?</li>
                    <li>Were outliers handled with a Grubbs' test?</li>
                    <li>Is the p-value result consistent with the biological mechanism?</li>
                </ul>
            </div>
        `
    },
    "stats_res:u2-2": {
        title: "Contingency Tables",
        subtitle: "Analyzing Multi-Variable Independence",
        content: `
            <p>Contingency tables ($r \times c$) allow us to test the independence of two categorical variables.</p>
            <p>For a table with $r$ rows and $c$ columns, the Degrees of Freedom are:</p>
            <p>$$df = (r - 1) \times (c - 1)$$</p>
        `
    },
    "stats_res:u2-3": {
        title: "Genetic Linkage Stats",
        subtitle: "When Mendel Meets Reality",
        content: `
            <p>Mendel's second law assumes independent assortment. If your Chi-Square result rejects the Null Hypothesis for a $1:1:1:1$ testcross, you have evidence of <strong>Gene Linkage</strong>.</p>
        `
    },
    "stats_res:u3-1": {
        title: "The Correlation Scale",
        subtitle: "Quantifying Linear Relationships",
        vizConfig: {
            expressions: ["y = 0.8x + 0.2", " (0,0),(1,1),(2,1.5),(3,2.8),(4,3.2) "],
            bounds: { left: -1, right: 5, bottom: -1, top: 5 }
        },
        content: `
            <p>Correlation ($r$) measures the direction and strength of a linear relationship. It always falls between $-1$ and $+1$.</p>
        `
    },
    "stats_res:u3-2": {
        title: "Linear Regression Model",
        subtitle: "Predicting the Future with Data",
        content: `
            <p>The Least Squares Regression Line (LSRL) minimizes the sum of the squared residuals.</p>
            <p>$$\hat{y} = a + bx$$</p>
        `
    },
    "stats_res:u3-3": {
        title: "Residual Mapping",
        subtitle: "The Final Quality Check",
        content: `
            <p>A residual plot checks if a linear model is appropriate. You want to see a <strong>random scatter</strong> of points. If you see a curve, your model is wrong!</p>
        `
    }
};
