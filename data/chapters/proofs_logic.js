window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA['proof_logic'] = {
    "proof_logic:u1-1": {
        title: "The First Rule: Axioms",
        subtitle: "The Atoms of Mathematical Reality",
        content: `
            <p>In the beginning of any mathematical system, we must agree on certain truths. These are <strong>Axioms</strong> (or Postulates).</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-microchip"></i> Neo-Sense Analysis</h4>
                <p>Think of axioms as the "Source Code" of the universe. You cannot derive them from anything simpler; they are the bedrock upon which all logic is built.</p>
            </div>
            <h3>1. The Euclidean Example</h3>
            <p>Euclid’s first postulate: "A straight line segment can be drawn joining any two points." It sounds simple, but without it, Geometry cannot exist.</p>
            <div class="tj-edge glass">
                <h4>🤔 Socratic Inquiry</h4>
                <p>If we changed a single axiom — for example, saying parallel lines <em>must</em> eventually meet — would the resulting math be "wrong," or simply a different kind of reality?</p>
            </div>
        `
    },
    "proof_logic:u2-1": {
        title: "Slicing to Find Area",
        subtitle: "A Visual Proof of $A = \pi r^2$",
        vizConfig: {
            expressions: [
                "x^2 + y^2 = 4",
                "y = x*tan(pi/8) {x > 0}",
                "y = -x*tan(pi/8) {x > 0}",
                "y = x*tan(3*pi/8) {x > 0}",
                "y = -x*tan(3*pi/8) {x > 0}"
            ],
            bounds: { left: -3, right: 3, bottom: -3, top: 3 }
        },
        content: `
            <p>How do we know the area of a circle is $\pi r^2$? We can "see" it through the <strong>Method of Rearrangement</strong>.</p>
            <ol>
                <li>Imagine slicing a circle into 16 equal wedges.</li>
                <li>Line them up alternating point-up and point-down.</li>
                <li>Notice the shape looks like a bumpy rectangle.</li>
            </ol>
            <div class="intuition-box glass">
                <h4><i class="fas fa-infinity"></i> The Limit of Slicing</h4>
                <p>As we increase the number of slices to infinity, the bumps disappear. The width becomes half the circumference ($\pi r$) and the height is the radius ($r$). Area = $Base \times Height = \pi r \times r = \pi r^2$.</p>
            </div>
        `
    },
    "proof_logic:u3-1": {
        title: "Deriving the Quadratic Formula",
        subtitle: "The Geometry of Completing the Square",
        content: `
            <p>The Quadratic Formula $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$ isn't magic. It is simply the result of <strong>Completing the Square</strong> on the general form $ax^2 + bx + c = 0$.</p>
            <div class="lab-protocol-box glass" style="border-left-color: var(--accent-magenta);">
                <h4><i class="fas fa-layer-group"></i> Logic Path</h4>
                <ol>
                    <li>Divide everything by $a$.</li>
                    <li>Move constant $c/a$ to the right.</li>
                    <li>Add $(\frac{b}{2a})^2$ to both sides to "Complete the Square".</li>
                    <li>Take the square root and isolate $x$.</li>
                </ol>
            </div>
            <p>By following these steps, we transform a messy polynomial into a clean solution.</p>
        `
    },
    "proof_logic:u4-1": {
        title: "The Secret of the Secant",
        subtitle: "Visualizing the Derivative Definition",
        vizConfig: {
            expressions: [
                "f(x) = 0.5x^2",
                "a = 1",
                "h = 1",
                "(a, f(a))",
                "(a+h, f(a+h))",
                "y - f(a) = ((f(a+h)-f(a))/h)*(x-a)"
            ],
            bounds: { left: -1, right: 4, bottom: -1, top: 5 }
        },
        content: `
            <p>Calculus begins when we ask: "What is the slope at exactly one point?"</p>
            <p>We start with a <strong>Secant Line</strong> connecting two points $(x, f(x))$ and $(x+h, f(x+h))$. The slope is:</p>
            <p>$$m = \frac{f(x+h) - f(x)}{h}$$</p>
            <div class="intuition-box glass">
                <h4><i class="fas fa-compress-arrows-alt"></i> The Vanishing 'h'</h4>
                <p>As $h$ approaches zero, the two points collide into one. The secant line becomes the <strong>Tangent Line</strong>. This is the Derivative ($f'(x)$).</p>
            </div>
        `
    }
};
