window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch4"] = {
    "ch4-1": {
        title: "4.1 Organising Data into Matrices",
        subtitle: "The 2D Array Paradigm",
        content: `
            <div class="lesson-section">
                <h2>I. The Anatomy of a Matrix</h2>
                <p>A <strong>Matrix</strong> $A_{m \\times n}$ is a grid of $m$ rows and $n$ columns. We use double-subscript notation $a_{i,j}$ to locate an element at row $i$ and column $j$.</p>
                
                <div class="intuition-box glass">
                    <h3><i class="fas fa-layer-group"></i> The Unified Data Block</h3>
                    <p>A matrix is not just a list of numbers; it's a **State Container**. In AI, a row might be a user's preferences, and a column might be a product's features. A matrix is where these two dimensions of reality meet.</p>
                </div>

                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-blue);">
                    <h4 style="color:var(--accent-blue);"><i class="fas fa-th"></i> Matrix Dimension</h4>
                    <p>Two matrices are <strong>Equal</strong> only if they have the same dimensions and identical corresponding elements.</p>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-database"></i> Database Indexing</h4>
                <p>In SQL databases or Spreadsheet software, a 'Table' is essentially a matrix. Rows are Records, and Columns are Fields. Understanding matrix indexing is the key to writing efficient database queries.</p>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Matrix = grid of numbers:</strong> Rows × columns. A 2×3 matrix has 2 rows, 3 columns.</li>
                    <li><strong>Matrix addition:</strong> Add corresponding entries. Matrices must have the same dimensions.</li>
                    <li><strong>Scalar multiplication:</strong> Multiply every entry by the scalar.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Add: $\\begin{bmatrix}1 & 2 \\\\ 3 & 4\\end{bmatrix} + \\begin{bmatrix}5 & 6 \\\\ 7 & 8\\end{bmatrix}$.</span>
                </div>
            </div>`
    },
    // ... Ch 4.2 to 4.7
    "ch4-6": {
        title: "4.6 Identity & Inverse Matrices",
        subtitle: "The Encryption/Decryption Key",
        content: `
            <div class="lesson-section">
                <h2>I. The Identity Matrix ($I$)</h2>
                <pre><code>// Java: Building an n x n Identity Matrix
for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        if (i == j) matrix[i][j] = 1.0;
        else matrix[i][j] = 0.0;
    }
}</code></pre>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Identity matrix:</strong> $I$ has 1s on diagonal, 0s elsewhere. $AI = A$.</li>
                    <li><strong>Inverse properties:</strong> $(AB)^{-1} = B^{-1}A^{-1}$. Reverse the order!</li>
                    <li><strong>Solving systems:</strong> $AX = B$ becomes $X = A^{-1}B$.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> What is $I_3$? (3×3 identity matrix)</span>
                </div>
            </div>`
    },
    "ch4-2": {
        title: "4.2 Matrix Multiplication",
        subtitle: "The Dot Product Engine",
        content: `
            <div class="lesson-section">
                <h2>I. The Multiplication Protocol</h2>
                <p>Unlike addition, matrix multiplication is a complex <strong>Dot Product</strong> process. For $AB$ to exist, the number of columns in $A$ must equal the number of rows in $B$.</p>
                
                <div class="paradigm-shift" style="border-left-color: var(--accent-red);">
                    <h4>Non-Commutativity ($AB \\neq BA$)</h4>
                    <p>In normal arithmetic, $3 \\times 5 = 5 \\times 3$. In Matrix land, <strong>Order Matters</strong>. Changing the order of multiplication usually results in a completely different matrix or is mathematically impossible.</p>
                </div>

                <div class="proof-box glass" style="margin-top:20px;">
                    <p>Row $i$ of Matrix $A$ &times; Column $j$ of Matrix $B$ = Element $c_{i,j}$ of the product.</p>
                </div>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Matrix multiplication:</strong> (m×n) × (n×p) = (m×p). Inner dimensions must match.</li>
                    <li><strong>Not commutative:</strong> $AB ≠ BA$ in general. Order matters!</li>
                    <li><strong>Dot product:</strong> Row × column. Multiply pairs and sum.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Can you multiply a 2×3 by a 3×4 matrix? What size is the result?</span>
                </div>
            </div>`
    },
    "ch4-3": {
        title: "4.3 Determinants & Cramer's Rule",
        subtitle: "The Scaling Factor of Space",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-compress-arrows-alt"></i> The Magnitude of Space</h3>
                    <p>The **Determinant** is the "Volume Multiplier" of a matrix. If you have a box of volume 1, and you transform it with Matrix $A$, its new volume will be exactly $\\det A$.</p>
                </div>

                <h2>I. What is a Determinant?</h2>
                <p>The <strong>Determinant</strong> ($\\det A$) is a scalar value that captures the scaling property of a linear transformation.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan);">
                    <h4>Geometric Significance</h4>
                    <ul class="glass-list">
                        <li><strong>$\\det A > 1$:</strong> Space is expanded.</li>
                        <li><strong>$0 < \\det A < 1$:</strong> Space is compressed.</li>
                        <li><strong>$\\det A = 0$:</strong> Space collapses into a lower dimension (Line or Point). The matrix is <strong>Singular</strong> and has NO inverse.</li>
                        <li><strong>$\\det A < 0$:</strong> Space is flipped (Orientation is reversed).</li>
                    </ul>
                </div>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Determinant (2×2):</strong> $\\det = ad - bc$ for $\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}$.</li>
                    <li><strong>Cramer's Rule:</strong> Solve systems using determinants. $x = D_x / D$.</li>
                    <li><strong>Zero determinant:</strong> Means no unique solution (parallel lines or same line).</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Find the determinant of $\\begin{bmatrix}3 & 2 \\\\ 1 & 4\\end{bmatrix}$.</span>
                </div>
            </div>`
    },
    "ch4-4": {
        title: "4.4 Visualizing Linear Transformations",
        subtitle: "Graphics Engine Fundamentals",
        content: `
            <div class="lesson-section">
                <h2>I. Matrices as Transformations</h2>
                <p>Every $n \\times n$ matrix is a <strong>Map</strong> that takes a vector from one position in space to another. It preserves the origin and parallel lines.</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-magenta);">
                    <h4 style="color:var(--accent-magenta);"><i class="fas fa-cube"></i> Visual Logic</h4>
                    <ul class="glass-list">
                        <li><strong>Scale:</strong> Diagonal elements determine how much we stretch along axes.</li>
                        <li><strong>Rotation:</strong> Off-diagonal elements (sines/cosines) twist the space.</li>
                    </ul>
                </div>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-gamepad"></i> GPU Optimization</h4>
                    <p>Modern GPUs are designed to do matrix-vector multiplication in parallel. This is why a $4 \\times 4$ transformation matrix is the "core atom" of 3D gaming and VR.</p>
                </div>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Linear transformations:</strong> Matrices transform vectors (rotate, scale, shear).</li>
                    <li><strong>Visualize:</strong> Watch how the unit square changes under the transformation.</li>
                    <li><strong>Composition:</strong> Multiplying matrices composes transformations.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> What does $\\begin{bmatrix}2 & 0 \\\\ 0 & 2\\end{bmatrix}$ do to a shape?</span>
                </div>
            </div>`
    },
    "ch4-5": {
        title: "4.5 Inverse Matrices",
        subtitle: "The Undo Button for Transformations",
        content: `
            <div class="lesson-section">
                <h2>I. Undoing a Matrix Operation</h2>
                <p>The **Inverse** $A^{-1}$ of a matrix $A$ is the matrix that "neutralizes" its effect. $A \\cdot A^{-1} = I$.</p>
                
                <div class="proof-box glass">
                    <h4>The Shortcut (2x2)</h4>
                    <p>$$ \\text{If } A = \\begin{pmatrix} a & b \\ c & d \\end{pmatrix}, \\text{ then } A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\ -c & a \\end{pmatrix} $$</p>
                    <p style="margin-top:10px;">If $\\det A = 0$, you cannot divide by zero? ence, No Inverse exists.</p>
                </div>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>Inverse undoes:</strong> $A^{-1}A = I$. Like reciprocal for matrices.</li>
                    <li><strong>2×2 inverse:</strong> Swap $a,d$, negate $b,c$, divide by determinant.</li>
                    <li><strong>Only square matrices:</strong> Must be n×n with non-zero determinant.</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> Find the inverse of $\\begin{bmatrix}2 & 0 \\\\ 0 & 2\\end{bmatrix}$.</span>
                </div>
            </div>`
    },
    "ch4-7": {
        title: "4.7 3x3 Determinants",
        subtitle: "Scaling Volume",
        content: `
            <div class="lesson-section">
                <h2>I. Scaling the 3rd Dimension</h2>
                <p>A 2x2 determinant measures Area scaling. A 3x3 determinant measures <strong>Volume scaling</strong>.</p>
                
                <div class="paradigm-shift" style="border-left-color: var(--accent-red);">
                    <h4>Recursive Algorithms</h4>
                    <p>To solve for larger matrices, we use <strong>Cofactor Expansion</strong>. We recursively break down the big matrix into smaller and smaller matrices until we reach the 2x2 base case.</p>
                </div>
            </div>
        `
    },
    "ch4-rev": {
        title: "Chapter 4 Review Challenge",
        subtitle: "Graphics Engineer Mastery",
        content: `
            <div class="lesson-section">
                <h2>I. The Big Picture: Matrices</h2>
                <p>Matrices are the language of <strong>Linear Algebra</strong>. They allow us to handle thousands of dimensions with single symbolic operations.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-blue);">Spatial Encoding</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Use matrices to store and organize multi-dimensional datasets.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-orange);">Transformative Power</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Recognize that multiplication is movement (Rotation, Scaling, Shear).</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-cyan);">Invertible Logic</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Understand that non-zero determinants are the key to 'undoing' any process.</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h5 style="color:var(--accent-magenta);">Algorithmic Design</h5>
                        <p style="font-size:0.85rem; opacity:0.8;">Apply Determinants and Cramer's Rule to solve complex systems automatically.</p>
                    </div>
                </div>
            </div>

            <div class="metacognition glass" style="margin-top:25px; border-left-color:var(--accent-cyan);">
                <h4><i class="fas fa-brain"></i> Synthesis: The Matrix Vision</h4>
                <ol style="font-size:0.9rem; line-height:1.6; margin-top:10px;">
                    <li>Why is matrix multiplication non-commutative? (Think about rotating and then shifting vs. shifting and then rotating).</li>
                    <li>If the determinant of a 3x3 matrix is 0, what does that say about the 3 planes it represents?</li>
                    <li>How does a GPU use matrix algebra to render a shadow on a 3D surface?</li>
                </ol>
            </div>
        
            <div class="key-takeaways glass" style="margin: 30px 0; padding: 25px; border-left: 4px solid var(--accent-green);">
                <h4 style="color: var(--accent-green); margin-bottom: 15px;"><i class="fas fa-key"></i> Key Takeaways</h4>
                <ul style="line-height: 2; margin: 0; padding-left: 20px;">
                    <li><strong>3×3 determinant:</strong> Use cofactor expansion along any row/column.</li>
                    <li><strong>Sign pattern:</strong> $+ - +$ / $- + -$ / $+ - +$. Alternating signs.</li>
                    <li><strong>Sarrus rule:</strong> Shortcut for 3×3 only. Not for larger!</li>
                </ul>
                <div style="margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <strong style="color: var(--accent-yellow);">Quick Check:</strong>
                    <span style="opacity: 0.9;"> When is a 3×3 matrix invertible?</span>
                </div>
            </div>`
    }
};


