window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch8"] = {
    "ch8-1": {
        title: "8.1 Exponential Growth & Decay",
        subtitle: "The Explosion of Complexity",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-bolt"></i> The Kinetic Engine</h3>
                    <p>Exponential growth is like a snowball rolling down a mountain. The bigger it gets, the faster it grows. It is the default state of biological systems, viral memes, and interest-bearing debt.</p>
                </div>

                <h2>I. The Dynamics of Compounding</h2>
                <p>Exponential growth occurs when the rate of change is proportional to the current value. This leads to the fundamental formula:</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <p><strong>Periodic Compounding:</strong> $A = P(1 + \\\\frac{r}{n})^{nt}$</p>
                    <ul class="glass-list" style="margin-top:10px;">
                        <li>$P$: Principal (Initial amount).</li>
                        <li>$r$: Annual interest rate.</li>
                        <li>$n$: Number of compounding periods per year.</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-biohazard"></i> $O(2^n)$ vs $O(n^2)$</h4>
                <p>Exponential scale is deceptive. If you double a penny every day for 30 days, you end up with over $5 million. This "Explosion of Complexity" explains why certain encryption algorithms are unbreakable?봳he time required to crack them grows exponentially with the key length.</p>
            </div>
        `
    },
    "ch8-2": {
        title: "8.2 The Natural Base 'e'",
        subtitle: "The Magic Constant of Continuity",
        content: `
            <div class="lesson-section">
                <h2>I. Continuous Compounding</h2>
                <p>What happens if we compound every second? Every nanosecond? As $n \\\\to \\\\infty$, the compounding formula $A = P(1 + r/n)^{nt}$ converges to the <strong>Continuous Model</strong>:</p>
                
                <div class="proof-box glass">
                    \\[A = Pe^{rt}\\]
                    <p style="margin-top:10px;">The constant $e \\\\approx 2.718$ is the unique base such that the slope of the function $f(x) = e^x$ is exactly equal to its value at every point.</p>
                </div>
            </div>
        `
    },
    "ch8-3": {
        title: "8.3 Logs as Inverses",
        subtitle: "The Reversibility Architecture",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-compress-alt"></i> The Scale-Down Lens</h3>
                    <p>Logarithms are the **Opposite of Growth**. They tell you "How many times do I need to divide until I reach the beginning?". They turn multiplication into addition, making impossible scales manageable.</p>
                </div>

                <h2>I. Information Compression</h2>
                <p>Logarithms translate Exponential growth back into Linear scale. If $y = b^x$, then $x = \\\\log_b(y)$.</p>
                
                <div class="tj-edge glass" style="border-left-color: var(--accent-green);">
                    <h4><i class="fas fa-search"></i> The $O(\\\\log n)$ Miracle</h4>
                    <p>Finding a specific record in a 2-billion row database (like Facebook's user list) takes only ~31 steps with <strong>Binary Search</strong>. Logarithms are the math of "Dividing until Conquered". They represent the ultimate tool for managing scale.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Convert to logarithmic form: $2^5 = 32$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">$b^x = y$ becomes $\\\\log_b(y) = x$.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\\\log_2(32) = 5$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Evaluate $\\\\log_3(81)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Ask: "3 to what power equals 81?" What is $3^4$?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\\\log_3(81) = 4$ (since $3^4 = 81$)</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Expand using log properties: $\\\\log_2(8x^3)$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Use Product Rule: $\\\\log(AB) = \\\\log A + \\\\log B$, then Power Rule.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\\\log_2(8) + \\\\log_2(x^3) = 3 + 3\\\\log_2(x)$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Solve $2^x = 16$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Convert to log form or think: 2 to what power is 16?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$x = \\\\log_2(16) = 4$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch8-4": {
        title: "8.4 Properties of Logs",
        subtitle: "The Multiplication-to-Addition Hack",
        content: `
            <div class="lesson-section">
                <h2>I. The Laws of Exponents in Reverse</h2>
                <p>Since logs are inverses of exponents, the laws of logs are just mirrors of exponent properties.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <ul class="glass-list">
                        <li><strong>Product Rule:</strong> $\\\\log_b(MN) = \\\\log_b M + \\\\log_b N$</li>
                        <li><strong>Quotient Rule:</strong> $\\\\log_b(M/N) = \\\\log_b M - \\\\log_b N$</li>
                        <li><strong>Power Rule:</strong> $\\\\log_b(M^k) = k \\\\cdot \\\\log_b M$</li>
                    </ul>
                </div>

                <div class="tj-edge glass" style="border-left-color: var(--accent-orange); margin-top:20px;">
                    <h4><i class="fas fa-compress-arrows-alt"></i> Why Addition?</h4>
                    <p>Multiplying two massive numbers is computationally expensive. Adding their logarithms is fast. This property allowed NASA scientists to calculate Moon landings using **Slide Rules** before computers existed!</p>
                </div>
            </div>
        `
    },
    "ch8-5": {
        title: "8.5 Solving Log Equations",
        subtitle: "Unlocking the Exponent",
        content: `
            <div class="lesson-section">
                <h2>I. The Exponentiation Protocol</h2>
                <p>To solve $\\\\log_b(x) = c$, we convert to exponential form: $b^c = x$. But we must be careful with the <strong>Domain</strong>.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-ban"></i> The Negative Void</h3>
                    <p>Logs are asymmetrically guarded. You can grow to infinity, but you can never reach zero or become negative. It is an **Algebraic Firewall**?봳rying to log a negative number is like asking 'At what time was I before I existed?'.</p>
                </div>

                <div class="mastery-protocol glass">
                    <h4><i class="fas fa-check-double"></i> Mastery Protocol: Domain Validation</h4>
                    <p>Always solve the inner argument inequality ($Argument > 0$) BEFORE solving the equation. This defines your **Valid State Space**.</p>
                </div>
            </div>
        `
    },
    "ch8-6": {
        title: "8.6 Natural Logs & Change of Base",
        subtitle: "The Universal Scale",
        content: `
            <div class="lesson-section">
                <h2>I. The Change of Base Formula</h2>
                <p>Calculators often only have $\\\\log_{10}$ and $\\\\ln$. To find $\\\\log_2(7)$, we use:</p>
                
                <div class="proof-box glass">
                    \\[\\\\log_b(a) = \\\\frac{\\\\log_c(a)}{\\\\log_c(b)}\\]
                    <p style="margin-top:10px;">This formula proves that all logarithms are just scaled versions of each other. Base $e$ (Natural Log) is the primary base for all Calculus and Physics.</p>
                </div>
            </div>
        `
    },
    "ch8-rev": {
        title: "Chapter 8 Review Challenge",
        subtitle: "The Logarithmic Master",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Scale & Complexity</h2>
                <p>Exponentials and Logarithms are the dual languages of growth and measurement. They allow us to map the infinite down to a human-readable scale.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Growth Modeling</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use base $e$ for continuous processes and base 2 for binary digital growth.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-green);">Search Optimization</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand $O(\\\\log n)$ to write highly efficient algorithms and database queries.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Log Properties</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Master the Product/Power laws to dismantle complex exponential equations.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">The Natural Way</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Adopt $\\\\ln$ as your default tool for modeling entropy, loss, and natural change.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-magenta);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Logarithmic Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why does base $e$ appear in nature even when human systems use base 10?</li>
                    <li>If multiplication is "addition in log-space", what is exponentiation in log-space?</li>
                    <li>How does domain restriction for $\\\\log(x)$ mirror the exception handling for $\\\\sqrt{x}$?</li>
                </ol>
            </div>
        `
    }
};


