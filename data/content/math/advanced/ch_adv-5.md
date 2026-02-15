# 2.2 Linear Transformations: Movement of Space
## Matrices as Operators


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-blue);">
                    <h3><i class="fas fa-expand-arrows-alt"></i> Section I: Matrix as a Mapping</h3>
                    <p>A matrix-vector product $A\vec{v}$ moves a vector to a new location. Scaling, rotating, and shearing space are all <strong>Linear Transformations</strong> expressed by matrices.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-th"></i> Transformation of a Unit Square</h4>
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- Original Grid -->
                        <g opacity="0.3">
                            <rect x="40" y="40" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="#fff"/>
                            <text x="35" y="95" fill="#fff" font-size="8">Before</text>
                        </g>
                        <!-- Arrow -->
                        <line x1="100" y1="60" x2="150" y2="60" stroke="var(--accent-cyan)" stroke-width="2" marker-end="url(#arrowhead)"/>
                        <!-- Transformed Grid (Shear Example) -->
                        <g transform="translate(180, 40)">
                            <polygon points="0,0 60,0 80,40 20,40" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)" stroke-width="2"/>
                            <text x="25" y="55" fill="var(--accent-cyan)" font-size="8">After (Shear)</text>
                        </g>
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-cyan)" />
                            </marker>
                        </defs>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Matrices do not just move points; they <strong>warp the very grid</strong> of space itself.</p>
                </div>

                <h2>II. Determinants & Area Scaling</h2>
                <p>The <strong>Determinant</strong> $\det(A)$ represents how the area (or volume) changes after transformation. If $\det(A)=0$, space has collapsed into a lower dimension.</p>

                <div class="practice-section glass" style="margin-top:20px; border-top: 2px solid var(--accent-blue); padding:15px;">
                    <h5 style="color:var(--accent-blue);">Practice Set</h5>
                    <p><strong>Q.</strong> Write the matrix that scales the x-axis by a factor of 2.</p>
                    <details class="glass-details">
                        <summary>Show Solution</summary>
                        <p>$\begin{bmatrix} 2 & 0 \ 0 & 1 \end{bmatrix}$</p>
                    </details>
                </div>
            </div>
        