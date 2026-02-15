# 3.1 The Chain Rule Protocol
## The Onion Principle


            <div class="lesson-section">
                <h2>I. Functions within Functions</h2>
                <p>The Chain Rule is used to differentiate composite functions. You differentiate the "outer" layer first, then multiply by the derivative of the "inner" layer.</p>
                \[\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}\]
                <div class="glass-card elite-border" style="padding: 20px;">
                    <p><strong>Elite Insight:</strong> Think of it as a Russian Doll or an Onion. You peel one layer at a time. The most common AP mistake is forgetting the $u'$ at the end!</p>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> Performance Optimization</h4>
                    <p>In deep learning, "Backpropagation" is essentially the Chain Rule applied to millions of nested weights to minimize error. Calculus is the architect of modern AI.</p>
                </div>
            </div>
        