# 1.1 Partial Derivatives: Slopes in Multi-Dimensional Space
## Multivariable Calculus - Rates of Change


            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-mountain"></i> Section I: Navigating the Terrain (The Zoom Logic)</h3>
                    <p>A multivariable function $z = f(x, y)$ is like a 3D landscape. The slope when walking in just one direction (parallel to the x-axis) is the <strong>Partial Derivative</strong>. The key is to treat all other variables as 'fixed' constants.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:linear-gradient(45deg, rgba(0,210,255,0.05), rgba(157,80,187,0.05));">
                    <h4><i class="fas fa-project-diagram"></i> The Slicing Mechanism</h4>
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <!-- Plane representing Y = Y0 -->
                        <polygon points="40,40 220,10 260,110 80,140" fill="rgba(0,163,255,0.1)" stroke="var(--accent-cyan)" stroke-width="1" stroke-dasharray="2"/>
                        <!-- The Surface Slice Curve -->
                        <path d="M 80,110 Q 150,40 230,60" stroke="var(--accent-magenta)" fill="transparent" stroke-width="3"/>
                        <!-- Tangent line -->
                        <line x1="110" y1="85" x2="190" y2="35" stroke="var(--accent-magenta)" stroke-width="2" stroke-dasharray="4"/>
                        <circle cx="150" cy="58" r="4" fill="var(--accent-magenta)"/>
                        <!-- Labels -->
                        <text x="50" y="35" fill="var(--accent-cyan)" font-size="10">Cutting Plane (y = y₀)</text>
                        <text x="200" y="85" fill="var(--accent-magenta)" font-size="10">Slope = ∂f/∂x</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">By fixing $y$, we reduce the 3D surface to a 2D curve, making the concept of 'slope' intuitive again.</p>
                </div>

                <h2>II. Mathematical Mechanism</h2>
                <p>For a function $f(x, y)$, the partial derivative with respect to $x$ is defined as the limit where only $x$ changes:</p>
                <div class="math-block">
                    $$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$
                </div>
                
                <div class="glass-card elite-border">
                    <h5><i class="fas fa-bolt"></i> Elite Calculus Protocol</h5>
                    <p>Calculation for $f(x, y) = \sin(x^2 y)$:</p>
                    <ul class="glass-list">
                        <li><strong>Differentiate wrt x:</strong> $y$ is constant. Using chain rule: $\cos(x^2 y) \cdot (2xy)$.</li>
                        <li><strong>Differentiate wrt y:</strong> $x^2$ is constant. Result: $\cos(x^2 y) \cdot (x^2)$.</li>
                    </ul>
                </div>

                <h2>III. Advanced Apps: Tangent Planes</h2>
                <p>While single-variable functions have tangent lines, multivariable functions have <strong>Tangent Planes</strong>. The equation at $(x_0, y_0, z_0)$ is:</p>
                <div class="math-block" style="color:var(--accent-cyan);">
                    $$z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$
                </div>

                <div class="practice-section glass" style="margin-top:30px; border-top: 2px solid var(--accent-magenta); padding:20px;">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-edit"></i> Elite Practice Set</h4>
                    <div class="problem-card" style="margin-bottom:15px;">
                        <p><strong>Q1.</strong> If $f(x, y) = e^{xy} + \ln(x)$, find $f_x(1, 2)$.</p>
                        <details class="glass-details">
                            <summary>Show Solution</summary>
                            <div class="solution">
                                <p>$f_x = y e^{xy} + \frac{1}{x}$. Substituting $x=1, y=2$ gives $2e^2 + 1$.</p>
                            </div>
                        </details>
                    </div>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> CS Connection: Backpropagation</h4>
                    <p>Neural networks optimize thousands of weights ($w$) by calculating the <strong>partial derivative</strong> of the error function with respect to each weight. Deep learning is essentially a massive collection of synchronized partial derivatives.</p>
                </div>
            </div>
        