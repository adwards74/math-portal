# Significance Levels & Alpha
## Defining the Threshold of Discovery


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-microchip"></i> Section I: Defining "Enough"</h3>
                    <p>How much evidence is "enough" to reject the Null? We define this using the <strong>Significance Level ($\alpha$)</strong>. It is the probability of rejecting $H_0$ when it is actually true (Type I Error).</p>
                </div>

                <div class="math-block">
                    $$\text{Reject } H_0 \iff p \text{-value} < \alpha$$
                </div>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-bolt"></i> Common Thresholds</h5>
                    <ul class="glass-list">
                        <li><strong>$\alpha = 0.05$</strong>: The IBET standard. 5% chance of luck masquerading as a discovery.</li>
                        <li><strong>$\alpha = 0.01$</strong>: Used when the cost of being wrong is high (e.g., medical safety).</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-brain"></i> Neo-Sense Analysis</h4>
                    <p>Think of $\alpha$ as your "Neural Filter". A lower $\alpha$ makes your filter more restrictive, ensuring that only the strongest signals pass through the noise of random variation.</p>
                </div>
            </div>
        