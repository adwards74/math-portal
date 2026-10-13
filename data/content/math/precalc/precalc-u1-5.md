# 1.5: Function Models — Selection, Assumptions & Regression

            <div class="intuition-box glass">
                <h3><i class="fas fa-shapes"></i> Which Shape Fits the Story?</h3>
                <p>AP Precalculus doesn't just ask you to <em>use</em> functions — it asks you to <strong>choose</strong> the right one. Given a table of data or a real-world story, which model fits: linear, quadratic, cubic, rational, piecewise? The choice is an <strong>argument</strong> (MP3): you claim a model <em>because</em> the data behaves a certain way. And every model comes with <strong>assumptions</strong> — domain restrictions the context forces on the math.</p>
            </div>

            <h3>1. The Model Selection Decision Tree</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-sitemap"></i> Which Model?</h4>
                <p><strong>Constant rate of change</strong> over equal intervals → <strong>linear</strong>. <em>Because the rate of change is constant.</em></p>
                <p><strong>Linear rate of change</strong> (rate itself changes steadily) → <strong>quadratic</strong>. <em>Because the second differences are constant.</em></p>
                <p><strong>Symmetric max/min</strong> (rises then falls, or falls then rises) → <strong>quadratic</strong>. Think bottle-rocket height, open-box volume near its peak.</p>
                <p><strong>Inverse proportion</strong> ($y$ shrinks as $x$ grows, product roughly constant) → <strong>rational</strong> ($y = k/x$).</p>
                <p><strong>Per-unit pricing tiers or on/off behavior</strong> → <strong>step / piecewise</strong>. Think strawberry pricing per pint bracket, insulin levels over the day.</p>
                <p><strong>Volume from cutting squares out of a sheet</strong> → <strong>cubic</strong>. Think the open-box problem.</p>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
                <h4 style="color:var(--accent-cyan);"><i class="fas fa-check-double"></i> Assumption Articulation: Domain Restrictions from Context</h4>
                <p>The math may allow $(-\infty, \infty)$, but the <strong>story</strong> usually doesn't. Always state the restriction <em>and the reason</em>:</p>
                <ul>
                    <li>Bottle rocket: height $h \ge 0$ — <em>the rocket can't go below the ground</em>.</li>
                    <li>Coffee-table border: border width $w > 0$ — <em>a width of zero or less is meaningless</em>.</li>
                    <li>Open box: cut size $x$ must satisfy $0 < x < \frac{\text{short side}}{2}$ — <em>you can't cut more than half the side</em>.</li>
                    <li>Stopping distance vs. speed: speed $v \ge 0$ — <em>negative speed isn't driving</em>.</li>
                </ul>
                <p>On the AP exam, an unstated assumption is a lost justification point.</p>
            </div>

            <h3>2. Regression Walkthrough (Graphing Calculator)</h3>
            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-calculator"></i> From Data to Prediction</h4>
                <p><strong>Step 1 — enter the data</strong> into lists (L1 = inputs, L2 = outputs).</p>
                <p><strong>Step 2 — choose the model</strong> using the decision tree above (don't just try all of them).</p>
                <p><strong>Step 3 — run the regression</strong> (LinReg, QuadReg, etc.) and record the equation <em>with the model's parameters</em>.</p>
                <p><strong>Step 4 — predict with units.</strong> Example: a quadratic regression on stopping-distance data gives $d(v) = 0.06v^2 + 1.1v$; at $v = 60$ mph, $d \approx 282$ <strong>feet</strong>. The unit is part of the answer.</p>
                <p><strong>Step 5 — sanity-check the assumption:</strong> is 60 mph inside the data's domain? If the data only covered 20–50 mph, say so — extrapolation needs a disclaimer.</p>
            </div>

            <div class="example-card glass" style="margin-top:15px;">
                <h4><i class="fas fa-tachometer-alt"></i> AROC with Units — The Sentence Frame</h4>
                <p>Average rate of change on $[a, b]$ is $\frac{f(b) - f(a)}{b - a}$ — but the <strong>units</strong> carry the meaning: $\frac{\text{output unit}}{\text{input unit}}$.</p>
                <p>Frame: <em>"The [quantity] changed by approximately [value] [output units] per [input unit] on the interval $[a, b]$."</em></p>
                <p>Example: <em>"The stopping distance increased by approximately 9.4 feet per mph on the interval $[40, 60]$ mph."</em></p>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-skull-crossbones"></i> AP Trap: The Model Without a Reason</h4>
                <p>Writing "use a quadratic model" with no justification earns <strong>zero</strong> model-selection points. The AP rubric wants: <em>claim + evidence</em> — "A quadratic model is appropriate <strong>because</strong> the second differences of the outputs over equal-length input intervals are approximately constant." No "because," no point.</p>
            </div>
