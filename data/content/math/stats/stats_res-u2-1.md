# Chi-Square Intuition
## Observed vs. Expected Counts


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-th-large"></i> Section I: Measuring Mismatch</h3>
                    <p>The **Chi-Square ($\chi^2$)** test is used for categorical data (counts). It measures the cumulative "distance" between what we observed ($O$) and what our theory expected ($E$).</p>
                </div>

                <div class="math-block">
                    $$\chi^2 = \sum \frac{(O - E)^2}{E}$$
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-lightbulb"></i> Why Square it?</h4>
                    <p>We square the difference $(O - E)$ so that negative differences (fewer counts than expected) don't cancel out positive ones. This ensures our "Total Error" is always positive, much like how distance is always measured as a positive scalar.</p>
                </div>

                <div class="evolution-link-box glass" style="border-color: var(--accent-orange); margin-top:20px; padding:20px; border-radius:15px; background:rgba(255,140,0,0.05);">
                    <h4><i class="fas fa-dna"></i> Biology Link: Mendelian Genetics</h4>
                    <p>Use Chi-Square to verify if your fruit fly offspring follow the $3:1$ phenotypic ratio. If $\chi^2$ is too high, you have rejected the independent assortment hypothesis, meaning you might have discovered <strong>Genetic Linkage</strong>!</p>
                </div>
            </div>
        