/**
 * Chapter 0: Foundation Bridge
 * Pre-Algebra fundamentals for 8th grade students
 * Designed to build confidence before Algebra 2
 */

window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch0"] = {
    "ch0-1": {
        title: "0.1 Number Sense & Fractions",
        subtitle: "The Building Blocks of All Math",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #38ef7d;">
                    <h3><i class="fas fa-puzzle-piece"></i> Why Fractions Matter</h3>
                    <p>Fractions aren't just "division"—they're the language of <strong>ratios</strong>, <strong>probability</strong>, and <strong>proportions</strong>. A "50% off sale" is really just $\\frac{1}{2}$!</p>
                </div>

                <h2>I. The Core Principle of Fractions</h2>
                <div class="example-box glass">
                    <p><strong>Fraction = Part ÷ Whole</strong></p>
                    <p>$\\frac{3}{4}$ = "3 out of 4 equal pieces" = 0.75 = 75%</p>
                </div>

                <div class="visual-analogy glass" style="text-align:center; padding:30px;">
                    <div style="display:flex; justify-content:center; gap:30px; flex-wrap:wrap;">
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-cyan); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem;">¼</div>
                            <p style="margin-top:10px;">$\\frac{1}{4}$ = 25%</p>
                        </div>
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-green); border-radius:50%; background:linear-gradient(180deg, var(--accent-green) 50%, transparent 50%); display:flex; align-items:center; justify-content:center; font-size:2rem;">½</div>
                            <p style="margin-top:10px;">$\\frac{1}{2}$ = 50%</p>
                        </div>
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-magenta); border-radius:50%; background:linear-gradient(180deg, var(--accent-magenta) 75%, transparent 75%); display:flex; align-items:center; justify-content:center; font-size:2rem;">¾</div>
                            <p style="margin-top:10px;">$\\frac{3}{4}$ = 75%</p>
                        </div>
                    </div>
                </div>

                <h2>II. Essential Fraction Rules</h2>
                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>Operation</th><th>Rule</th><th>Example</th></tr>
                    <tr><td>Add/Subtract</td><td>Need common denominators!</td><td>$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$</td></tr>
                    <tr><td>Multiply</td><td>Numerator × Numerator, Denominator × Denominator</td><td>$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$</td></tr>
                    <tr><td>Divide</td><td>Flip and multiply!</td><td>$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$</td></tr>
                </table>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #ffd700; background:rgba(255,215,0,0.05);">
                    <h4><i class="fas fa-star" style="color:#ffd700;"></i> Growth Mindset</h4>
                    <p>"It's okay if fractions feel tricky at first! Once you master them, you've already conquered 50% of algebra."</p>
                </div>

                <h2>III. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Calculate $\\frac{2}{5} + \\frac{1}{3}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Find the LCD (Least Common Denominator). What's the smallest number both 5 and 3 divide into?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">LCD = 15. $\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Simplify $\\frac{3}{4} \\times \\frac{8}{9}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Multiply straight across, then simplify. Can you cancel before multiplying?</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\frac{3 \\times 8}{4 \\times 9} = \\frac{24}{36} = \\frac{2}{3}$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Divide $\\frac{5}{6} \\div \\frac{2}{3}$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Remember: "Keep, Change, Flip!" Keep the first, change ÷ to ×, flip the second.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$\\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> Convert $\\frac{7}{8}$ to a percentage.</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Divide 7 by 8, then multiply by 100.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$7 \\div 8 = 0.875 \\times 100 = 87.5\\%$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch0-2": {
        title: "0.2 PEMDAS: Order of Operations",
        subtitle: "Calculate Like a Computer",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #00d2ff;">
                    <h3><i class="fas fa-sort-amount-down"></i> Why Order Matters</h3>
                    <p>$3 + 2 \\times 4 = ?$ If you said 20, you're wrong! The answer is <strong>11</strong>.</p>
                    <p>Multiplication comes before addition. This rule is called <strong>PEMDAS</strong>.</p>
                </div>

                <h2>I. PEMDAS Mastery</h2>
                <div class="visual-dynamics glass" style="padding:25px; text-align:center; margin:20px 0;">
                    <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; font-size:1.5rem;">
                        <span style="background:var(--accent-magenta); padding:15px 25px; border-radius:15px;"><strong>P</strong>arentheses<br><small>( )</small></span>
                        <span style="background:var(--accent-purple); padding:15px 25px; border-radius:15px;"><strong>E</strong>xponents<br><small>$x^2$</small></span>
                        <span style="background:var(--accent-blue); padding:15px 25px; border-radius:15px;"><strong>M</strong>ultiply<br><small>×</small></span>
                        <span style="background:var(--accent-cyan); padding:15px 25px; border-radius:15px;"><strong>D</strong>ivide<br><small>÷</small></span>
                        <span style="background:var(--accent-green); padding:15px 25px; border-radius:15px;"><strong>A</strong>dd<br><small>+</small></span>
                        <span style="background:var(--accent-orange); padding:15px 25px; border-radius:15px;"><strong>S</strong>ubtract<br><small>−</small></span>
                    </div>
                </div>

                <div class="example-box glass" style="margin-top:20px;">
                    <h4>Example: $2 + 3 \\times (4^2 - 6) \\div 5$</h4>
                    <ol class="glass-list">
                        <li><strong>P</strong>: Parentheses first → $(4^2 - 6)$ → $(16 - 6)$ → $10$</li>
                        <li><strong>M/D</strong>: Left to right → $3 \\times 10 \\div 5$ → $30 \\div 5$ → $6$</li>
                        <li><strong>A</strong>: Addition → $2 + 6$ → $\\boxed{8}$</li>
                    </ol>
                </div>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-code"></i> Coding Connection</h4>
                    <p>Python and Java follow the same rules! <code>print(3 + 2 * 4)</code> outputs 11. Computers also obey PEMDAS.</p>
                </div>

                <h2>II. Practice Problems</h2>
                <div class="practice-section glass" style="margin-top:20px; padding:20px;">
                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 1:</strong> Evaluate $5 + 3 \\times 2^3$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Exponents first: What is $2^3$? Then multiply, then add.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$2^3 = 8$, then $3 \\times 8 = 24$, then $5 + 24 = 29$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 2:</strong> Calculate $(8 - 2) \\times 3 + 4^2$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Parentheses and exponents first (they're at the same priority level in separate parts).</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(8-2)=6$, $4^2=16$, then $6 \\times 3 = 18$, finally $18 + 16 = 34$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 3:</strong> Simplify $20 \\div 4 + 6 \\times 3 - 2$</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Division and multiplication have equal priority—work left to right for those, then add/subtract.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$20 \\div 4 = 5$, $6 \\times 3 = 18$, then $5 + 18 - 2 = 21$</p>
                        </details>
                    </div>

                    <div class="practice-problem" style="padding:15px; background:rgba(0,0,0,0.2); border-radius:12px;">
                        <p><strong>Problem 4:</strong> What is $2 \\times (3 + 4)^2 \\div 7$?</p>
                        <details style="margin-top:10px;">
                            <summary style="color:var(--accent-cyan); cursor:pointer;"><i class="fas fa-lightbulb"></i> Hint</summary>
                            <p style="margin-top:8px; font-size:0.9rem; color:#94a3b8;">Parentheses first, then the exponent on the result.</p>
                        </details>
                        <details style="margin-top:8px;">
                            <summary style="color:var(--accent-green); cursor:pointer;"><i class="fas fa-check"></i> Answer</summary>
                            <p style="margin-top:8px;">$(3+4)=7$, $7^2=49$, then $2 \\times 49 = 98$, finally $98 \\div 7 = 14$</p>
                        </details>
                    </div>
                </div>
            </div>
        `
    },
    "ch0-3": {
        title: "0.3 Variables & Basic Equations",
        subtitle: "Your First Steps into Algebra",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #9d50bb;">
                    <h3><i class="fas fa-question-circle"></i> What is a Variable?</h3>
                    <p>$x$ is a placeholder for a number we don't know yet. Like an "X marks the spot" on a treasure map, $x$ marks the answer we're hunting for.</p>
                </div>

                <h2>I. The Golden Rule of Equations</h2>
                <div class="proof-box glass" style="border:1px solid var(--accent-purple); padding:25px;">
                    <h4 style="color:var(--accent-purple);">⚖️ The Balance Principle</h4>
                    <p>An equation is like a <strong>balance scale</strong>. Both sides must stay equal, so whatever you do to one side, you MUST do to the other!</p>
                    <ul>
                        <li>Add or subtract the same number from both sides ✓</li>
                        <li>Multiply or divide both sides by the same number ✓ (except 0!)</li>
                    </ul>
                </div>

                <div class="example-box glass" style="margin-top:20px;">
                    <h4>Example: Solve $3x + 5 = 14$</h4>
                    <table style="width:100%; border-collapse:collapse;">
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:10px;"><strong>Step 1:</strong></td>
                            <td>Subtract 5 from both sides</td>
                            <td>$3x + 5 - 5 = 14 - 5$</td>
                            <td>→ $3x = 9$</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:10px;"><strong>Step 2:</strong></td>
                            <td>Divide both sides by 3</td>
                            <td>$\\frac{3x}{3} = \\frac{9}{3}$</td>
                            <td>→ $x = 3$</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;"><strong>Check:</strong></td>
                            <td colspan="3">$3(3) + 5 = 9 + 5 = 14$ ✓</td>
                        </tr>
                    </table>
                </div>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #38ef7d; background:rgba(56,239,125,0.05);">
                    <h4><i class="fas fa-trophy" style="color:#38ef7d;"></i> You're Doing Great!</h4>
                    <p>Being able to solve equations means you can think logically. This skill helps in coding, science, and everyday problem-solving!</p>
                </div>
            </div>
        `
    },
    "ch0-4": {
        title: "0.4 The Coordinate Plane",
        subtitle: "See Math with Your Eyes",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #00d2ff;">
                    <h3><i class="fas fa-map-marker-alt"></i> The Magic of Coordinates</h3>
                    <p>The coordinate plane is math's "GPS." Every point can be described as $(x, y)$. This is the foundation of GPS navigation, video games, and all graphs!</p>
                </div>

                <h2>I. Understanding the Coordinate Plane</h2>
                <div class="visual-dynamics glass" style="padding:25px; text-align:center;">
                    <p>The coordinate $(3, 2)$ means "move 3 units right, then 2 units up."</p>
                    <div style="margin:20px auto; width:200px; height:200px; border:2px solid var(--accent-cyan); position:relative; background:rgba(0,210,255,0.05);">
                        <div style="position:absolute; left:50%; top:0; bottom:0; width:2px; background:rgba(255,255,255,0.3);"></div>
                        <div style="position:absolute; top:50%; left:0; right:0; height:2px; background:rgba(255,255,255,0.3);"></div>
                        <div style="position:absolute; left:75%; top:25%; width:12px; height:12px; background:var(--accent-magenta); border-radius:50%; transform:translate(-50%,-50%);"></div>
                        <span style="position:absolute; left:80%; top:20%; font-size:0.8rem;">(3, 2)</span>
                        <span style="position:absolute; right:-20px; top:47%; font-size:0.8rem;">x</span>
                        <span style="position:absolute; left:47%; top:-20px; font-size:0.8rem;">y</span>
                    </div>
                </div>

                <h2>II. The Four Quadrants</h2>
                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>Quadrant</th><th>x Sign</th><th>y Sign</th><th>Example</th></tr>
                    <tr><td>I (First)</td><td>+</td><td>+</td><td>$(3, 4)$</td></tr>
                    <tr><td>II (Second)</td><td>−</td><td>+</td><td>$(-2, 5)$</td></tr>
                    <tr><td>III (Third)</td><td>−</td><td>−</td><td>$(-3, -1)$</td></tr>
                    <tr><td>IV (Fourth)</td><td>+</td><td>−</td><td>$(4, -2)$</td></tr>
                </table>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-gamepad"></i> Gaming Connection</h4>
                    <p>When you press F3 in Minecraft, you see coordinates! Game characters use $(x, y, z)$ for 3D positioning. Math powers your favorite games!</p>
                </div>
            </div>
        `
    },
    "ch0-rev": {
        title: "Chapter 0 Review Challenge",
        subtitle: "Foundation Mastery Check",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture</h2>
                <p>Everything in this chapter is the <strong>foundation</strong> for all future math. Master these, and Algebra 2 becomes much easier!</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-cyan);"><i class="fas fa-pizza-slice"></i> Fractions</h4>
                        <p style="font-size:0.85rem;">Part/Whole, common denominators, flip & multiply</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-purple);"><i class="fas fa-list-ol"></i> PEMDAS</h4>
                        <p style="font-size:0.85rem;">Parentheses → Exponents → Multiply/Divide → Add/Subtract</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-green);"><i class="fas fa-balance-scale"></i> Equations</h4>
                        <p style="font-size:0.85rem;">Balance principle, same operation on both sides</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-magenta);"><i class="fas fa-crosshairs"></i> Coordinates</h4>
                        <p style="font-size:0.85rem;">$(x, y)$ notation, four quadrants</p>
                    </div>
                </div>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #ffd700; background:rgba(255,215,0,0.05);">
                    <h4><i class="fas fa-rocket" style="color:#ffd700;"></i> Ready for Launch!</h4>
                    <p>If you've got these basics down, you're ready for <strong>Algebra 2</strong>! Don't worry if it gets challenging—take it one step at a time.</p>
                </div>
            </div>
        `
    }
};
