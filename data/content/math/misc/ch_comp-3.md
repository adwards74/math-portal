# 2.1 Inclusion-Exclusion Principle (PIE)
## Advanced Combinatorics - PIE & Derangements


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
                    <p style="font-size:0.8rem; margin-top:10px;">$$|A \cup B \cup C| = \sum |A| - \sum |A \cap B| + |A \cap B \cap C|$$</p>
                </div>

                <h2>II. Derangements</h2>
                <p>A derangement is a permutation with no fixed points. It's a classic PIE application.</p>
                <div class="math-block">
                    $$D_n = n! \sum_{k=0}^n \frac{(-1)^k}{k!}$$
                </div>
            </div>
        