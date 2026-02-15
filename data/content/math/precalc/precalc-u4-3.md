# 4.3: Matrix Mastery (Linear Warping)

            <div class="intuition-box glass">
                <h3><i class="fas fa-th"></i> Matrices as Functions</h3>
                <p>A matrix isn't just a table of numbers; it's a <strong>Transformation Machine</strong>. It takes a vector and spits out a new, transformed version of it.</p>
            </div>

            <div class="visual-dynamics glass" style="margin:20px 0; padding:15px; border:1px solid rgba(255,255,255,0.2);">
                <h4 style="font-size:0.9rem;">Identity $\to$ Rotation</h4>
                <div style="display:flex; justify-content:center; gap:20px;">
                    <div style="width:40px; height:40px; border:1px solid #fff;"></div>
                    <i class="fas fa-arrow-right" style="align-self:center;"></i>
                    <div style="width:40px; height:40px; border:1px solid var(--accent-cyan); transform:rotate(30deg);"></div>
                </div>
            </div>

            <h3>1. The Determinant Verdict</h3>
            <p>If $\det(A) = 0$, the matrix squashes the entire space into a lower dimension (a line or a point). This means the transformation is <strong>not invertible</strong> (you can't "un-squash" it).</p>
        