# 2.3: Semi-Log Analysis (Mastery)

            <div class="intuition-box glass">
                <h3><i class="fas fa-magic"></i> The Linearization Trick</h3>
                <p>Data $(x, y)$ that follows $y=ab^x$ will look like a straight line if you transform it to $(x, \ln y)$.</p>
            </div>

    <div class="mastery-box glass" style="margin:20px 0; border:1px solid var(--accent-cyan); padding:15px;">
        <h4 style="color:var(--accent-cyan);"><i class="fas fa-brain"></i> The Conversion Roadmap</h4>
        <p>If the linear regression of $(x, \ln y)$ is $Y = 0.5x + 1.2$:</p>
        <ul>
            <li>Slope ($0.5$) $= \ln(b) \implies b = e^{0.5}$</li>
            <li>Intercept ($1.2$) $= \ln(a) \implies a = e^{1.2}$</li>
        </ul>
    </div>
