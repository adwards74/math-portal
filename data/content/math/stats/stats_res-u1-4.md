# IBET: Fish Respiration Case
## Applied Research Integration


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
                    <p>A $p$-value of $0.03$ suggests a significant difference at $\alpha = 0.05$. However, as a scientist, you must ask: <strong>Is it biologically significant?</strong> A 1 beat-per-minute difference might be statistically valid but biologically irrelevant.</p>
                </div>
            </div>
        