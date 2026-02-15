# Residual Mapping
## The Final Quality Check


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-filter"></i> Section I: Auditing the Model</h3>
                    <p>A residual is the vertical distance between the actual data and the prediction: $\text{Residual} = y - \hat{y}$. A good model leaves only <strong>Random Noise</strong> behind.</p>
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
        