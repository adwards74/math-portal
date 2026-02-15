# 1.4: AP Continuity Mastery

            <div class="intuition-box glass" style="border-right:4px solid var(--accent-cyan);">
                <h3><i class="fas fa-link"></i> The 3-Step Legal Proof</h3>
                <p>For a function to be continuous at $x=c$, you must satisfy ALL THREE:</p>
                <div class="logic-box" style="margin:10px 0; background:rgba(0,0,0,0.2); border-radius:10px; padding:15px;">
                    1. $f(c)$ is defined.<br>
                    2. $\lim_{x \to c} f(x)$ exists ($L = R$).<br>
                    3. $\lim_{x \to c} f(x) = f(c)$.
                </div>
            </div>

            <div class="mastery-box glass" style="margin:20px 0; border: 1px dashed var(--accent-magenta); padding:15px;">
                <h4 style="color:var(--accent-magenta);"><i class="fas fa-fingerprint"></i> FRQ Justification Protocol</h4>
                <p>Standard response for proving continuity:</p>
                <div style="background:rgba(0,0,0,0.4); padding:10px; border-radius:5px; font-style:italic;">
                    "The function $f(x)$ is continuous at $x=c$ because $f(c)$ is defined as [value], $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = [value]$, and the limit equals the function value."
                </div>
            </div>

            <div class="visual-dynamics glass" style="margin: 20px 0; padding: 20px; text-align: center; background: linear-gradient(135deg, rgba(255,255,0,0.1), rgba(0,0,0,0.5));">
                <h4 style="margin-bottom: 15px;"><i class="fas fa-eye"></i> Visual Logic: Continuity</h4>
                <div style="display: flex; justify-content: center; align-items: center; height: 100px; gap: 30px;">
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-green); border-radius: 50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:10px; height:10px; background:var(--accent-green); border-radius:50%; top:calc(50% - 5px); left:calc(50% - 5px);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-green); transform:rotate(45deg);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-green); transform:rotate(-45deg);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-green);">Hole (Limit Exists)</p>
                    </div>
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-red); display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px);"></div>
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px); transform:translateX(-20px);"></div>
                        <div style="position:absolute; width:2px; height:100%; background:var(--accent-red); left:calc(50% - 1px); transform:translateX(20px);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-red);">VA (Limit DNE)</p>
                    </div>
                    <div style="position:relative; width: 80px; height: 80px; border: 2px solid var(--accent-magenta); display:flex; align-items:center; justify-content:center; font-weight:bold;">
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-magenta); left:calc(50% - 1px); transform:translateY(-20px);"></div>
                        <div style="position:absolute; width:2px; height:80px; background:var(--accent-magenta); left:calc(50% - 1px); transform:translateY(20px);"></div>
                        <p style="position:absolute; top:-20px; font-size:0.8rem; color:var(--accent-magenta);">Jump (Limit DNE)</p>
                    </div>
                </div>
                <p style="font-size: 0.9rem; margin-top: 10px;">Continuity requires no holes, no VAs, and no jumps.</p>
            </div>

            <div class="tj-edge glass">
                <h4><i class="fas fa-exclamation-triangle"></i> The Piecewise Trap</h4>
                <p>On the AP exam, they will give you a piecewise function and ask for the value of '$k$' to make it continuous. <strong>Always set the Left limit equal to the Right limit and solve.</strong></p>
            </div>
        