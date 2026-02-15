# 2.1 The Skeleton of Space: Basis & Dimension
## Vector Spaces - Linear Foundations


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-cube"></i> Section I: The Recipe of Space</h3>
                    <p>Every element in a vector space is built from a few 'core vectors'. These are called the <strong>Basis</strong>, and the number of basis vectors is the <strong>Dimension</strong> of that space.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                        <!-- Grid -->
                        <path d="M 20 130 L 180 130 M 30 20 L 30 140" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                        <!-- Basis Vectors -->
                        <line x1="30" y1="130" x2="80" y2="130" stroke="var(--accent-cyan)" stroke-width="3"/>
                        <line x1="30" y1="130" x2="30" y2="80" stroke="var(--accent-magenta)" stroke-width="3"/>
                        <polygon points="80,130 75,127 75,133" fill="var(--accent-cyan)"/>
                        <polygon points="30,80 27,85 33,85" fill="var(--accent-magenta)"/>
                        <text x="85" y="140" fill="var(--accent-cyan)" font-size="10">e₁ (1,0)</text>
                        <text x="5" y="75" fill="var(--accent-magenta)" font-size="10">e₂ (0,1)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">The standard basis vectors ($e_1, e_2$) form the grid that defines 2D space.</p>
                </div>

                <h2>II. Linear Independence</h2>
                <p>To be a basis, vectors must be independent—no vector in the set can be represented as a combination of others. There must be NO redundant information.</p>

                <div class="glass-card elite-border">
                    <h5><i class="fas fa-microchip"></i> CS Connection: Data Compression (PCA)</h5>
                    <p>Principal Component Analysis (PCA) finds the most important 'basis' in high-dimensional data, allowing us to compress it while stripping away noise.</p>
                </div>
            </div>
        