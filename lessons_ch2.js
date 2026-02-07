const MATH_LESSONS = {
    "algebra2": {
        // --- CHAPTER 1: TOOLS OF ALGEBRA (Already Mastered) ---
        "ch1-1": { title: "1.1 Real Numbers and Operations", subtitle: "The Foundation of the Mathematical Universe", content: `...` }, // Keeping placeholders for brevity in this tool call, but I will merge properly.

        // --- CHAPTER 2: FUNCTIONS & GRAPHS (Elite 2.0 Plus) ---
        "ch2-1": {
            title: "2.1 Relations & Functions",
            subtitle: "Mapping the Inputs of the Universe",
            content: `
                <div class="lesson-section">
                    <h2>I. The Mapping Logic (Input &rarr; Output)</h2>
                    <p>In mathematics, a <strong>Relation</strong> is any set of ordered pairs. But a <strong>Function</strong> is a special subset where each input \(x\) (Domain) maps to <em>exactly one</em> output \(y\) (Range).</p>
                    
                    <div class="tj-edge glass">
                        <h4><i class="fas fa-code"></i> CS Connection: Pure Functions & Maps</h4>
                        <p>In programming, a <strong>Pure Function</strong> is deterministic: if you give it the same input, it MUST return the same output. <br>
                        In Java, we use <code>Map&lt;String, Double&gt;</code> to store these relations. A "Key" in a Map is like the Domain—it must be unique!</p>
                    </div>

                    <div class="example-box glass">
                        <h4>Mastery Check: The Vertical Line Test</h4>
                        <p>If any vertical line intersects a graph more than once, it is <strong>NOT</strong> a function. <br>
                        Why? Because one \(x\) would have two different \(y\) values. In CS, this would be an ambiguous algorithm!</p>
                    </div>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-orange);">
                    <h4><i class="fas fa-microchip"></i> TJ Edge Insight: Function Notation</h4>
                    <p>TJ Teachers will test you on \(f(x)\) not as "f times x", but as "f <em>of</em> x". Think of \(f\) as the <strong>Method Name</strong> and \(x\) as the <strong>Argument</strong> you pass into the logic gate.</p>
                </div>
            `
        },
        "ch2-3": {
            title: "2.3 Linear Functions & Slope",
            subtitle: "The Mathematics of Constant Change",
            content: `
                <div class="lesson-section">
                    <h2>I. Slope as a Rate (\(\Delta y / \Delta x\))</h2>
                    <p>Slope (\(m\)) is the heartbeat of a linear function. It describes the <strong>Rate of Change</strong>.</p>
                    \[m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}\]
                    
                    <div class="glass-card" style="padding:20px;">
                        <p><strong>Linear Search Complexity:</strong> In CS, a linear growth \(O(n)\) means that if the data size doubles, the time taken also doubles. This is a linear function with a constant slope!</p>
                    </div>
                </div>

                <div class="lesson-section">
                    <h2>II. The "Point-Slope" Power-Up</h2>
                    <p>While \(y = mx + b\) is famous, TJ Honors students prefer <strong>Point-Slope Form</strong> for active modeling:</p>
                    \[y - y_1 = m(x - x_1)\]
                    <p>This is much faster when you only have a single point and the rate. It's like <strong>Object-oriented programming</strong>: you define the center point first!</p>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-magenta);">
                    <h4><i class="fas fa-bolt"></i> TJ Edge Insight: Intercept Logic</h4>
                    <p>Always solve for intercepts by setting the other variable to zero. <br>
                    <strong>x-intercept:</strong> Set \(y = 0\). <br>
                    <strong>y-intercept:</strong> Set \(x = 0\). <br>
                    In physics, the y-intercept is often your <strong>Initial Condition</strong> (\(t=0\)).</p>
                </div>
            `
        },
        "ch2-5": {
            title: "2.5 Absolute Value Functions",
            subtitle: "The Geometry of the V-Graph",
            content: `
                <div class="lesson-section">
                    <h2>I. The Parent V: \(y = |x|\)</h2>
                    <p>The absolute value function is a <strong>Piecewise Function</strong> in disguise. It is defined as \(x\) if \(x \geq 0\) and \(-x\) if \(x < 0\).</p>
                    
                    <div class="proof-box glass" style="background: rgba(0, 210, 255, 0.05);">
                        <h4>Vertex Form: \(y = a|x - h| + k\)</h4>
                        <p>The <strong>Vertex</strong> is always at \((h, k)\). This is the "switching point" of the logic gate.</p>
                    </div>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-gamepad"></i> TJ Edge Insight: Bouncing Logic</h4>
                    <p>In game development (like Pong), when a ball hits a wall, its velocity vector uses <strong>Absolute Value logic</strong> to calculate the bounce. The vertex \((h, k)\) is the point of impact!</p>
                </div>
            `
        },
        "ch2-6": {
            title: "2.6 & 2.7 Families of Functions",
            subtitle: "The Art of Transformation",
            content: `
                <div class="lesson-section">
                    <h2>I. The Universal Transformation Formula</h2>
                    <p>Almost every function in Algebra 2 follows this <strong>Inheritance Pattern</strong>:</p>
                    \[y = a \cdot f(x - h) + k\]
                    
                    <table class="glass-table" style="width:100%;">
                        <thead>
                            <tr><th>Parameter</th><th>Effect</th><th>CS Analogy</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>\(h\)</td><td>Horizontal Shift</td><td>Translation (X-axis)</td></tr>
                            <tr><td>\(k\)</td><td>Vertical Shift</td><td>Translation (Y-axis)</td></tr>
                            <tr><td>\(a\)</td><td>Stretch / Compress</td><td>Scaling (Zoom In/Out)</td></tr>
                            <tr><td>\(-a\)</td><td>Reflection</td><td>Mirroring / Inversion</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="lesson-section">
                    <h2>II. Parent Function Library</h2>
                    <p>Master these "Base Classes" to predict any graph:</p>
                    <ul class="glass-list">
                        <li><strong>Linear:</strong> \(y = x\)</li>
                        <li><strong>Quadratic:</strong> \(y = x^2\)</li>
                        <li><strong>Absolute Value:</strong> \(y = |x|\)</li>
                        <li><strong>Square Root:</strong> \(y = \sqrt{x}\)</li>
                    </ul>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-green);">
                    <h4><i class="fas fa-layer-group"></i> TJ Edge Insight: Order of Ops</h4>
                    <p>When applying multiple transformations, always do <strong>Horizontal Shift (\(h\))</strong> first, then **Stretch/Shrink (\(a\))**, then **Vertical Shift (\(k\))**. This is like the <strong>Rendering Pipeline</strong> in a GPU!</p>
                </div>
            `
        },
        "ch2-rev": {
            title: "Chapter 2 Review Challenge",
            subtitle: "Master of Transformations",
            content: `
                <div class="glass-card" style="padding: 40px; text-align: center;">
                    <h1 style="color:var(--accent-blue); font-size: 3.2rem;"><i class="fas fa-project-diagram"></i></h1>
                    <h2>The Functional Mastery Gate</h2>
                    <p>You've learned how functions map the world and how to transform them like a graphics engine. <br>
                    Prepare for the Chapter 2 Challenge: <strong>Piecewise Models and Transformation Chains.</strong></p>
                    <button class="glass next-btn" style="margin-top:25px; padding: 18px 40px; color:var(--accent-blue);">Enter Challenge Arena</button>
                </div>
            `
        }
    }
};
