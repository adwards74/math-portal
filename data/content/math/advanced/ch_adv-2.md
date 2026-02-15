# 1.2 Gradient Vectors & Directional Derivatives
## The Path of Steepest Ascent


            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-magenta);">
                    <h3><i class="fas fa-location-arrow"></i> Section I: Finding the Steepest Way</h3>
                    <p>The <strong>Gradient ($\nabla f$)</strong> is a vector made of all partial derivatives. It always points in the direction where the function increases 'most rapidly'.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-compass"></i> Orthogonality of Gradient</h4>
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <!-- Level Curves (Equipotential lines) -->
                        <ellipse cx="150" cy="90" rx="100" ry="60" stroke="rgba(0,163,255,0.2)" fill="transparent" stroke-width="1"/>
                        <ellipse cx="150" cy="90" rx="70" ry="42" stroke="rgba(0,163,255,0.4)" fill="transparent" stroke-width="1"/>
                        <ellipse cx="150" cy="90" rx="40" ry="24" stroke="rgba(0,163,255,0.6)" fill="transparent" stroke-width="1.5"/>
                        <!-- Gradient Vectors at points -->
                        <g transform="translate(190, 55) rotate(-30)">
                            <line x1="0" y1="0" x2="30" y2="0" stroke="var(--accent-magenta)" stroke-width="2"/>
                            <polygon points="30,0 24,-3 24,3" fill="var(--accent-magenta)"/>
                        </g>
                        <g transform="translate(150, 30)">
                            <line x1="0" y1="0" x2="0" y2="-30" stroke="var(--accent-magenta)" stroke-width="2"/>
                            <polygon points="0,-30 -3,-24 3,-24" fill="var(--accent-magenta)"/>
                        </g>
                        <text x="160" y="20" fill="var(--accent-magenta)" font-size="10">Max Steepness (∇f)</text>
                        <text x="210" y="160" fill="var(--accent-cyan)" font-size="10">Level Curve (f=const)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">The gradient vector points in the direction of <strong>max rate of change</strong>, which is always perpendicular (orthogonal) to the path of zero change (the level curve).</p>
                </div>

                <h2>II. Directional Derivatives</h2>
                <p>To find the slope in an arbitrary direction $\vec{u}$, perform the Dot Product with the gradient.</p>
                <div class="math-block">
                    $$D_{\vec{u}} f = \nabla f \cdot \vec{u} = |\nabla f| \cos \theta$$
                </div>

                <div class="practice-section glass" style="margin-top:20px; padding:15px;">
                    <h5 style="color:var(--accent-cyan);">Mastery Check</h5>
                    <p>When is $D_{\vec{u}} f$ maximized? When $\cos \theta = 1$, meaning $\vec{u}$ aligns with the gradient direction.</p>
                </div>
            </div>
        