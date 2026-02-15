# Slicing to Find Area
## A Visual Proof of $A = \pi r^2$


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-pizza-slice"></i> Section I: The Rearrangement Logic</h3>
                    <p>How do we know the area of a circle is $\pi r^2$? We can "see" it through the <strong>Method of Rearrangement</strong>. By slicing a circle into infinitely thin wedges, we can reshape it into a familiar polygon.</p>
                </div>

                <div class="visual-dynamic glass" style="margin:20px 0; text-align:center;">
                    <svg width="400" height="120" viewBox="0 0 400 120">
                        <!-- Circle slices being moved -->
                        <g transform="translate(100,60)">
                            <circle cx="0" cy="0" r="40" fill="none" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2"/>
                            <path d="M0,0 L40,0 A40,40 0 0,1 37,15 Z" fill="rgba(0,210,255,0.3)" stroke="var(--accent-cyan)"/>
                        </g>
                        <line x1="160" y1="60" x2="220" y2="60" stroke="var(--accent-magenta)" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <!-- Rectangular shape -->
                        <g transform="translate(240,45)">
                            <path d="M0,30 Q10,0 20,30 Q30,0 40,30 Q50,0 60,30 Q70,0 80,30 L80,35 Q70,65 60,35 Q50,65 40,35 Q30,65 20,35 Q10,65 0,35 Z" fill="rgba(0,210,255,0.2)" stroke="var(--accent-cyan)"/>
                        </g>
                    </svg>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-infinity"></i> The Limit Transformation</h4>
                    <ol>
                        <li>Slice a circle into $n$ equal wedges (sectors).</li>
                        <li>Line them up alternating point-up and point-down.</li>
                        <li>The shape approaches a **Rectangle**.</li>
                        <li>The width approaches half the circumference: $W = \frac{1}{2}(2\pi r) = \pi r$.</li>
                        <li>The height approaches the radius: $H = r$.</li>
                        <li>$Area = W \times H = \pi r \times r = \pi r^2$.</li>
                    </ol>
                </div>
            </div>
        