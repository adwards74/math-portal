const MATH_DATA = {
    subjects: [
        {
            id: "algebra2",
            title: "Algebra 2 (TJ3)",
            code: "MA3113",
            description: "Virginia Prentice Hall Algebra 2 (TJHSST Specific). Comprehensive mastery of functions, matrices, and trigonometry.",
            color: "#9d50bb",
            icon: "fas fa-brain",
            intuition: "Algebra 2 is the foundation for ALL future STEM courses. It's where the 'Rules of the Universe' are written in variables.",
            local_resources: [
                { name: "TJ3 Algebra 2 Syllabus", path: "curriculum/algebra2/syllabus.pdf" },
                { name: "Chapter 1-5 Formula Sheet", path: "curriculum/algebra2/formulas.pdf" }
            ],
            units: [
                {
                    title: "Ch 1: Tools of Algebra",
                    topics: ["1.1-1.3 Real Numbers", "1.4-1.6 Equations", "1.7 Absolute Value"],
                    lectures: [
                        { name: "1.1: Real Numbers & Operations", url: "lesson:algebra2:ch1-1" },
                        { name: "1.2: Algebraic Expressions", url: "lesson:algebra2:ch1-2" },
                        { name: "1.3: Solving Linear Equations", url: "lesson:algebra2:ch1-3" },
                        { name: "1.4: Rewriting Formulas", url: "lesson:algebra2:ch1-4" },
                        { name: "1.5/1.6: Word Problems & Models", url: "lesson:algebra2:ch1-5" },
                        { name: "1.7: Absolute Value Equations", url: "lesson:algebra2:ch1-7" },
                        { name: "1.8: Chapter 1 Review Challenge", url: "lesson:algebra2:ch1-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Distributive Proof",
                            problem: "Solve for \\(x\\): \\(3(x - 4) = 2(x + 1) + 5\\)",
                            steps: [
                                "Distribute on both sides: \\(3x - 12 = 2x + 2 + 5\\)",
                                "Combine like terms on the right: \\(3x - 12 = 2x + 7\\)",
                                "Subtract \\(2x\\) from both sides: \\(x - 12 = 7\\)",
                                "Add 12 to both sides: \\(x = 19\\)"
                            ],
                            intuition: "Distribution is the 'broadcasting' of a multiplier across a group. Always simplify each side independently before moving terms across the equals sign."
                        },
                        {
                            title: "Example 2: Precision in Literal Equations",
                            problem: "Solve for \\(h\\) in the surface area of a cylinder formula: \\(S = 2\\pi r^2 + 2\\pi rh\\)",
                            steps: [
                                "Isolate the term with \\(h\\): \\(S - 2\\pi r^2 = 2\\pi rh\\)",
                                "Divide both sides by the coefficients of $h$ (which are $2\\pi r$): $h = \\frac{S - 2\\pi r^2}{2\\pi r}$",
                                "Simplify (optional): $h = \\frac{S}{2\\pi r} - r$"
                            ],
                            intuition: "Literal equations are 'code refactoring' for math. You are changing the interface (the isolated variable) while keeping the logic (the relationship) identical."
                        },
                        {
                            title: "Example 3: Absolute Value Logic",
                            problem: "Solve \\(|2x - 3| = 7\\)",
                            steps: [
                                "Case 1 (Positive): \\(2x - 3 = 7 \\rightarrow 2x = 10 \\rightarrow x = 5\\)",
                                "Case 2 (Negative): \\(2x - 3 = -7 \\rightarrow 2x = -4 \\rightarrow x = -2\\)",
                                "Check both in original: \\(|10-3|=7\\) (OK), \\(|-4-3|=|-7|=7\\) (OK)"
                            ],
                            intuition: "Absolute value measures DISTANCE. Saying \\(|A| = 7\\) means 'A' is 7 units away from zero, which can happen in two directions (Positive or Negative)."
                        }
                    ],
                    quiz: {
                        question: "Prove why \\(a \\times 0 = 0\\) using axioms. What is the key property used to split \\(a(0 + 0)\\)?",
                        options: ["Commutative", "Associative", "Distributive", "Transitive"],
                        answer: "Distributive",
                        explanation: "The Distributive Property allows you to say \\(a(0+0) = a\\cdot 0 + a\\cdot 0\\), which is the first step in the formal proof."
                    }
                },
                {
                    title: "Ch 2: Functions & Graphs",
                    topics: ["2.1 Relations", "2.3 Linear Functions", "2.5 Absolute Value Graphs", "2.7 Parent Functions"],
                    lectures: [
                        { name: "2.1: Relations & Functions", url: "lesson:algebra2:ch2-1" },
                        { name: "2.2: Direct Variation", url: "lesson:algebra2:ch2-2" },
                        { name: "2.3: Linear Functions & Slope", url: "lesson:algebra2:ch2-3" },
                        { name: "2.4: Designing Linear Models", url: "lesson:algebra2:ch2-4" },
                        { name: "2.5: Absolute Value Functions", url: "lesson:algebra2:ch2-5" },
                        { name: "2.5B: Piecewise Modeling", url: "lesson:algebra2:ch2-pc" },
                        { name: "2.6/2.7: Family of Functions & Shifts", url: "lesson:algebra2:ch2-6" },
                        { name: "2.8: Intro to Inverse Functions", url: "lesson:algebra2:ch2-inv" },
                        { name: "2.9: Chapter 2 Review Challenge", url: "lesson:algebra2:ch2-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The One-to-One Challenge",
                            problem: "Given $f(x) = x^2$ with domain $\\\\mathbb{R}$, does it have an inverse? If not, how do we restrict the domain to make it invertible?",
                            steps: [
                                "Apply Horizontal Line Test: A horizontal line like $y=4$ hits the graph at $x=2$ and $x=-2$. It FAILS.",
                                "Conclusion: $f(x)=x^2$ is not one-to-one on $\\mathbb{R}$, so it has no unique inverse.",
                                "Restriction: Limit the domain to $[0, \\infty)$. Now each $x$ has exactly one $y$, and its inverse is $f^{-1}(x) = \\sqrt{x}$."
                            ],
                            intuition: "Inverses require uniqueness. If the function 'forgets' where it came from (by mapping two inputs to one output), you can't go back without guessing."
                        },
                        {
                            title: "Example 2: Analyzing Transformations",
                            problem: "Describe the transformation of $y = -2|x + 3| - 5$ from the parent function $y = |x|$.",
                            steps: [
                                "The $-2$: Reflection across X-axis and Vertical Stretch (factor of 2).",
                                "The $+3$ inside: Horizontal Shift LEFT by 3 units.",
                                "The $-5$ outside: Vertical Shift DOWN by 5 units.",
                                "Vertex: $(-3, -5)$."
                            ],
                            intuition: "Think of the parent function as a piece of rubber. The multipliers stretch it, and the constants slide it across the coordinate plane."
                        },
                        {
                            title: "Example 3: Modeling Piecewise Logic",
                            problem: "A taxi charges $5 for the first 2 miles and $2 for every mile after. Write the piecewise function $C(d)$.",
                            steps: [
                                "Case 1 ($0 < d \\le 2$): $C(d) = 5$",
                                "Case 2 ($d > 2$): Initial $5 + 2 \\cdot (d - 2) \\rightarrow C(d) = 2d + 1$",
                                "Final Form: $C(d) = \\begin{cases} 5 & 0 < d \\le 2 \\\\ 2d + 1 & d > 2 \\end{cases}$"
                            ],
                            intuition: "Real-world pricing is rarely a single smooth line. Piecewise functions allow us to 'stitch' different behaviors together based on the input range."
                        }
                    ],
                    quiz: {
                        question: "In the transformation \\(y = a \\cdot f(x - h) + k\\), which parameter handles the horizontal shift?",
                        options: ["a", "h", "k", "f"],
                        answer: "h",
                        explanation: "The value \\(h\\) inside the function argument shifts the graph left or right. Remember: it's \\(x - h\\), so if \\(h=3\\), it shifts RIGHT by 3."
                    }
                },
                {
                    title: "Ch 3: Linear Systems",
                    topics: ["Substitution", "Elimination", "3-Variable Systems", "Linear Programming"],
                    lectures: [
                        { name: "3.1/3.2: Substitution & Elimination", url: "lesson:algebra2:ch3-1" },
                        { name: "3.3: Systems of Inequalities", url: "lesson:algebra2:ch3-3" },
                        { name: "3.4: Linear Programming Masterclass", url: "lesson:algebra2:ch3-4" },
                        { name: "3.5: Systems with 3 Variables", url: "lesson:algebra2:ch3-5" },
                        { name: "3.6: Review Challenge", url: "lesson:algebra2:ch3-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Analyzing System Stability",
                            problem: "Classify the system: \\(2x - y = 4\\) and \\(6x - 3y = 12\\). Is it Consistent/Inconsistent and Independent/Dependent?",
                            steps: [
                                "Put both in slope-intercept form ($y = mx + b$).",
                                "Eq 1: \\(y = 2x - 4\\). Eq 2: \\(y = 2x - 4\\).",
                                "Observation: The lines have identical slopes and identical y-intercepts.",
                                "Conclusion: The lines overlap. The system is **Consistent and Dependent**, having infinitely many solutions."
                            ],
                            intuition: "Dependent systems are redundant. The second equation provides no new information; it's just the first equation multiplied by 3."
                        },
                        {
                            title: "Example 2: Corner Point Optimization",
                            problem: "Maximize $P = 3x + 2y$ subject to $x + y \\\\le 4$, $x \\\\ge 1$, $y \\\\ge 0$.",
                            steps: [
                                "Find Vertices of the region: (1, 0), (4, 0) is wrong! Intersection of $x+y=4$ and $x=1$ is $(1, 3)$. Corners are (1,0), (4,0), and (1,3).",
                                "Test (1,0): $P = 3(1) + 2(0) = 3$.",
                                "Test (4,0): $P = 3(4) + 2(0) = 12$.",
                                "Test (1,3): $P = 3(1) + 2(3) = 9$.",
                                "Final Answer: Maximum $P = 12$ at $(4,0)$."
                            ],
                            intuition: "Linear programming is like a laser beam hitting a wall. The strongest signal always occurs at the sharpest corners of the boundary."
                        },
                        {
                            title: "Example 3: 3D System Logic",
                            problem: "Solve for $x, y, z$: \\(x+y+z=6, 2y+5z=-4, 3z=3\\).",
                            steps: [
                                "Start from the simplest (Bottom-Up): From $3z=3$, we get $z = 1$.",
                                "Substitute $z=1$ into Eq 2: \\(2y + 5(1) = -4 \\rightarrow 2y = -9 \\rightarrow y = -4.5\\).",
                                "Substitute both into Eq 1: \\(x - 4.5 + 1 = 6 \\rightarrow x - 3.5 = 6 \\rightarrow x = 9.5\\)."
                            ],
                            intuition: "This is a 'Triangular' system. It is the ideal state we aim for when using Gaussian Elimination—each step reveals exactly one more unknown."
                        }
                    ],
                    quiz: {
                        question: "In Linear Programming, where does the maximum or minimum value of the objective function always occur?",
                        options: ["Center of the region", "Origin (0,0)", "Vertices of feasible region", "Y-intercept"],
                        answer: "Vertices of feasible region",
                        explanation: "The Vertex Principle states that optimization occurs at the corners of the feasible region shaded by the inequalities."
                    }
                },
                {
                    title: "Ch 4: Matrices",
                    intuition: "Matrices are the data structures of the modern world. They bridge the gap between simple variables and high-dimensional AI architecture.",
                    topics: ["4.1 Data Organization", "4.2 Matrix Operations", "4.3 Multiplication", "4.4 Geometric Transformations", "4.5 Determinants", "4.6 Inverses", "4.7 Systems Solving"],
                    lectures: [
                        { name: "4.1: Organising Data into Matrices", url: "lesson:algebra2:ch4-1" },
                        { name: "4.2: Matrix Multiplication", url: "lesson:algebra2:ch4-2" },
                        { name: "4.3: Determinants & Cramer's Rule", url: "lesson:algebra2:ch4-3" },
                        { name: "4.4: Visualizing Linear Transformations", url: "lesson:algebra2:ch4-4" },
                        { name: "4.5: Inverse Matrices", url: "lesson:algebra2:ch4-5" },
                        { name: "4.6: Identity & Inverse Matrices", url: "lesson:algebra2:ch4-6" },
                        { name: "4.7: 3x3 Determinants & Volume", url: "lesson:algebra2:ch4-7" },
                        { name: "4.8: Review Challenge", url: "lesson:algebra2:ch4-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Matrix Multiplier",
                            problem: "Compute $AB$ where $A = \\\\begin{pmatrix} 1 & 2 \\\\\\\\ 3 & 4 \\\\end{pmatrix}$ and $B = \\\\begin{pmatrix} 5 & 6 \\\\\\\\ 7 & 8 \\\\end{pmatrix}$. Show the dot products.",
                            steps: [
                                "Row 1 &times; Col 1: $(1)(5) + (2)(7) = 5 + 14 = 19$.",
                                "Row 1 &times; Col 2: $(1)(6) + (2)(8) = 6 + 16 = 22$.",
                                "Row 2 &times; Col 1: $(3)(5) + (4)(7) = 15 + 28 = 43$.",
                                "Row 2 &times; Col 2: $(3)(6) + (4)(8) = 18 + 32 = 50$.",
                                "Final Matrix: $\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$."
                            ],
                            intuition: "Notice how Row 1 of the output depends only on Row 1 of A. Matrix multiplication is essentially a batch processing of vectors."
                        },
                        {
                            title: "Example 2: Inverting Space",
                            problem: "Find the inverse of Matrix $M = \\\\begin{pmatrix} 3 & 1 \\\\\\\\ 5 & 2 \\\\end{pmatrix}$. Check if det $\\\\neq$ 0.",
                            steps: [
                                "Calculate Determinant: $\\det M = (3)(2) - (1)(5) = 6 - 5 = 1$. Since $det \\neq 0$, the inverse exists.",
                                "Swap $a$ and $d$: $\\begin{pmatrix} 2 & \\dots \\\\ \\dots & 3 \\end{pmatrix}$.",
                                "Negate $b$ and $c$: $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$.",
                                "Multiply by $1/det$: Since $det=1$, the inverse is simply $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$."
                            ],
                            intuition: "The inverse matrix is the 'Negative Operator'. If $M$ encodes your data, $M^{-1}$ is the only key that can bring it back without noise."
                        },
                        {
                            title: "Example 3: Determinants as Scaling",
                            problem: "How does the matrix $\\\\begin{pmatrix} 2 & 0 \\\\\\\\ 0 & 3 \\\\end{pmatrix}$ transform a unit square $(1 \\times 1)$?",
                            steps: [
                                "Calculate Determinant: $\\det = (2)(3) - (0)(0) = 6$.",
                                "Physical result: The square's width is doubled (2) and its height is tripled (3).",
                                "Area change: The new area is $2 \times 3 = 6$ square units. The determinant correctly predicted the 6-fold scaling of area."
                            ],
                            intuition: "A matrix is a physical distortion of space. The determinant is the 'Magnification' factor of that distortion."
                        }
                    ],
                    quiz: {
                        question: "If the determinant of a matrix is 0, what does this tell us about its inverse?",
                        options: ["Inverse is also 0", "Inverse is twice as large", "No inverse exists", "Inverse is its transpose"],
                        answer: "No inverse exists",
                        explanation: "A matrix with det=0 is 'singular' and has collapsed space into a lower dimension, making the transformation irreversible."
                    }
                },
                {
                    title: "Ch 5: Quadratic Equations",
                    intuition: "Curves govern the physical world. From gravity to growth, quadratics provide the parabolic logic for modeling motion and optimization.",
                    topics: ["5.1 Parabolas", "5.3 Factoring", "5.4 Complex Numbers", "5.5 Completing Square", "5.6 Quadratic Formula", "5.8 Systems"],
                    lectures: [
                        { name: "5.1/5.2: Vertex & Intercept Form", url: "lesson:algebra2:ch5-1" },
                        { name: "5.3: Factoring Mastery", url: "lesson:algebra2:ch5-3" },
                        { name: "5.4: Complex Numbers Intro", url: "lesson:algebra2:ch5-4" },
                        { name: "5.5: Completing the Square", url: "lesson:algebra2:ch5-5" },
                        { name: "5.6: The Quadratic Formula", url: "lesson:algebra2:ch5-6" },
                        { name: "5.7: Quadratic Inequalities", url: "lesson:algebra2:ch5-7" },
                        { name: "5.8: Linear-Quadratic Systems", url: "lesson:algebra2:ch5-8" },
                        { name: "5.rev: Review Challenge", url: "lesson:algebra2:ch5-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Parabolic Orbit",
                            problem: "A satellite dish vertex is at $(0,0)$ and the focus is at $(0, 2)$. Write the equation in vertex form.",
                            steps: [
                                "Identify parameters: $(h, k) = (0,0)$. Focus is $p=2$ units above vertex.",
                                "Use the geometric formula: $y = a(x - h)^2 + k$.",
                                "Find $a$: Since $p = 1/(4a)$, we have $2 = 1/(4a) \rightarrow 8a = 1 \rightarrow a = 1/8$.",
                                "Final Equation: $y = \\frac{1}{8}x^2$."
                            ],
                            intuition: "The 'shallower' the dish (smaller $a$), the further away its focus is. This determines the signal gain of the antenna."
                        },
                        {
                            title: "Example 2: The Vieta Shortcut",
                            problem: "For the equation $2x^2 + 5x - 12 = 0$, find the value of $(r_1)^2 + (r_2)^2$ without solving for the roots.",
                            steps: [
                                "Use Vieta: $r_1 + r_2 = -5/2$ and $r_1 r_2 = -12/2 = -6$.",
                                "Use identity: $(r_1 + r_2)^2 = (r_1)^2 + (r_2)^2 + 2r_1 r_2$.",
                                "Rearrange: $(r_1)^2 + (r_2)^2 = (r_1 + r_2)^2 - 2r_1 r_2$.",
                                "Substitute: $(-2.5)^2 - 2(-6) = 6.25 + 12 = 18.25$."
                            ],
                            intuition: "Vieta's formulas allow you to perform 'Symmetric Arithmetic' on the solution space without ever knowing the individual roots."
                        },
                        {
                            title: "Example 3: Complex Conjugate Logic",
                            problem: "Find the roots of $x^2 - 4x + 13 = 0$. Plot them in the complex plane.",
                            steps: [
                                "Discriminant: $D = (-4)^2 - 4(1)(13) = 16 - 52 = -36$.",
                                "Apply formula: $x = \\frac{4 \pm \sqrt{-36}}{2} = \\frac{4 \pm 6i}{2}$.",
                                "Roots: $2 + 3i$ and $2 - 3i$.",
                                "Geometry: These points are symmetric reflections across the Real (X) axis."
                            ],
                            intuition: "Complex roots always come in pairs (conjugates) because the physical parabola is symmetric. They represent the roots of an equation that 'misses' the X-axis."
                        }
                    ],
                    quiz: {
                        question: "What is the nature of roots if the discriminant (D) is less than zero?",
                        options: ["Two Real Roots", "One Real Root", "Two Complex Roots", "No Roots whatsoever"],
                        answer: "Two Complex Roots",
                        explanation: "When \\(b^2 - 4ac < 0\\), the square root yields an imaginary component, resulting in two complex conjugate roots."
                    }
                },
                {
                    title: "Ch 6: Polynomials",
                    intuition: "Polynomials are the DNA of functional analysis. From the behavior of global temperatures to the trajectory of satellites, understanding roots and degree is essential for predicting complex systems.",
                    topics: ["6.1 Degree & End Behavior", "6.2 Remainder Theorem", "6.3 Synthetic Division", "6.4 Advanced Factoring", "6.6 Rational Root Theorem", "6.7 Fundamental Theorem"],
                    lectures: [
                        { name: "6.1: Polynomial Essentials", url: "lesson:algebra2:ch6-1" },
                        { name: "6.2: Polynomials & Linear Factors", url: "lesson:algebra2:ch6-2" },
                        { name: "6.3: Synthetic Division", url: "lesson:algebra2:ch6-3" },
                        { name: "6.4: Factoring Polynomials", url: "lesson:algebra2:ch6-4" },
                        { name: "6.5/6.6: Roots & Rational Root Theorem", url: "lesson:algebra2:ch6-5" },
                        { name: "6.7: Fundamental Theorem of Algebra", url: "lesson:algebra2:ch6-7" },
                        { name: "6.rev: Review Challenge", url: "lesson:algebra2:ch6-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Remainder Shortcut",
                            problem: "Without dividing, find the remainder when $f(x) = 2x^4 - 5x^2 + 8$ is divided by $(x - 2)$.",
                            steps: [
                                "Use the Remainder Theorem: $Remainder = f(2)$.",
                                "Substitute $x=2$: $2(2)^4 - 5(2)^2 + 8$.",
                                "Calculate: $2(16) - 5(4) + 8 = 32 - 20 + 8 = 20$.",
                                "Final Answer: The remainder is 20."
                            ],
                            intuition: "Evaluating a function at a point is equivalent to finding a 'residue' of its division. This is the math behind modern error-checking in telecommunications."
                        },
                        {
                            title: "Example 2: Rational Root Pruning",
                            problem: "List all possible rational roots for $P(x) = 3x^3 + x^2 - 12x + 10$ using the Rational Root Theorem.",
                            steps: [
                                "Identify factors of constant ($p$): $\\\\pm 1, \\\\pm 2, \\\\pm 5, \\\\pm 10$.",
                                "Identify factors of leading coeff ($q$): $\\\\pm 1, \\\\pm 3$.",
                                "Form all $p/q$ combinations: $\\\\pm 1, \\\\pm 2, \\\\pm 5, \\\\pm 10, \\\\pm \\\\frac{1}{3}, \\\\pm \\\\frac{2}{3}, \\\\pm \\\\frac{5}{3}, \\\\pm \\\\frac{10}{3}$.",
                                "Observation: This reduces the search space from 'any number' to just 16 candidates."
                            ],
                            intuition: "Even in complex automation, we first 'prune' impossible options. The Rational Root Theorem is a heuristic that makes impossible root-finding possible."
                        },
                        {
                            title: "Example 3: Multiplicity & Geometry",
                            problem: "Describe the behavior of $f(x) = (x-1)^2(x+3)$ near its roots.",
                            steps: [
                                "Root $x=1$: Multiplicity 2 (Even). The graph will **Touch and Turn** (Tangent) at $(1,0)$.",
                                "Root $x=-3$: Multiplicity 1 (Odd). The graph will **Cross** the X-axis at $(-3,0)$.",
                                "End Behavior: Leading term is $x^3$ (Odd Degree, Pos Coeff). Ends go in opposite directions (Down-Left, Up-Right)."
                            ],
                            intuition: "Algebra predicts geometry. By knowing the multiplicity, you can sketch the entire 'soul' of the function without plotting points."
                        }
                    ],
                    quiz: {
                        question: "If (x - 3) is a factor of a polynomial P(x), what must P(3) be equal to?",
                        options: ["-3", "0", "3", "Unknown"],
                        answer: "0",
                        explanation: "The Factor Theorem states that (x - c) is a factor of P(x) if and only if P(c) = 0."
                    }
                },
                {
                    title: "Ch 7: Radical Functions & Rational Exponents",
                    intuition: "Roots are the inverse of power, allowing us to reverse complex operations. From calculating the radius of a sphere to modeling the decay of particles, radicals provide the mathematical lens to look backwards into the core of a value.",
                    topics: ["7.1 n-th Roots", "7.2 Rational Exponents", "7.3 Binomial Radical Expressions", "7.4 Advanced Laws of Exponents", "7.5 Radical Equations", "7.6 Function Operations", "7.7 Inverse Relations & Functions"],
                    lectures: [
                        { name: "7.1: n-th Roots & Radicals", url: "lesson:algebra2:ch7-1" },
                        { name: "7.2: Power of the Fractional", url: "lesson:algebra2:ch7-2" },
                        { name: "7.3: Binomial Radical Expressions", url: "lesson:algebra2:ch7-3" },
                        { name: "7.4: Advanced Exponent Laws", url: "lesson:algebra2:ch7-4" },
                        { name: "7.5: Solving Radical Equations", url: "lesson:algebra2:ch7-5" },
                        { name: "7.6: Function Operations", url: "lesson:algebra2:ch7-6" },
                        { name: "7.7: Inverse Relations & Functions", url: "lesson:algebra2:ch7-7" },
                        { name: "7.rev: Review Challenge", url: "lesson:algebra2:ch7-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Rational Exponent Mastery",
                            problem: "Simplify: $\\\\frac{x^{5/2}}{x^{1/2}} \\\\cdot \\\\sqrt[3]{x^6}$",
                            steps: [
                                "Simplify current power: $x^{5/2 - 1/2} = x^2$.",
                                "Convert radical to power: $\\\\sqrt[3]{x^6} = x^{6/3} = x^2$.",
                                "Combine: $x^2 \\\\cdot x^2 = x^4$."
                            ],
                            intuition: "Rational exponents are the 'standard protocol' of algebra. By converting everything to a base power, complex radical problems become simple additions."
                        },
                        {
                            title: "Example 2: The Extraneous Root Hunt",
                            problem: "Solve $\\\\sqrt{4x + 1} = x - 1$. Check for false positives.",
                            steps: [
                                "Square both sides: $4x + 1 = (x - 1)^2 \\\\rightarrow 4x + 1 = x^2 - 2x + 1$.",
                                "Rearrange: $x^2 - 6x = 0 \\\\rightarrow x(x - 6) = 0$.",
                                "Candidates: $x = 0, x = 6$.",
                                "Test $x=0$: $\\\\sqrt{1} = -1$ (False! Extraneous).",
                                "Test $x=6$: $\\\\sqrt{25} = 5$ (True!)."
                            ],
                            intuition: "Squaring is a 'lossy' operation—it loses the information about the original sign. Always verify your results in the original code."
                        },
                        {
                            title: "Example 3: Function Inversion",
                            problem: "Find the inverse of $f(x) = \\\\sqrt{x - 3} + 2$. State the domain.",
                            steps: [
                                "Swap $x$ and $y$: $x = \\\\sqrt{y - 3} + 2$.",
                                "Isolate radical: $x - 2 = \\\\sqrt{y - 3}$.",
                                "Square: $(x - 2)^2 = y - 3$.",
                                "Solve for $y$: $y = (x - 2)^2 + 3$.",
                                "Constraint: Since the original range was $y \\\\ge 2$, the new domain is $x \\\\ge 2$."
                            ],
                            intuition: "An inverse is a geometric mirror. But mirrors can only reflect what exists; we must carefully clip the domain to ensure a one-to-one reflection."
                        }
                    ],
                    quiz: {
                        question: "Why do we check for extraneous solutions in radical equations?",
                        options: ["To find more answers", "Because squaring can create false results", "To simplify the math", "It's not actually necessary"],
                        answer: "Because squaring can create false results",
                        explanation: "When you square both sides, you lose the sign information, which can lead to values that solve the squared equation but not the original radical one."
                    }
                },
                {
                    title: "Ch 8: Exponential & Logarithmic Functions",
                    intuition: "Logarithms are the language of scale and complexity. They allow us to map the infinite growth of data into manageable linear steps, powering everything from the Richter scale to the efficiency of Google's Search algorithms.",
                    topics: ["8.1 Growth & Decay", "8.2 The Natural Base 'e'", "8.3 Logarithmic Functions", "8.4 Properties of Logarithms", "8.5 Exponential & Logarithmic Equations", "8.6 Natural Logarithms"],
                    lectures: [
                        { name: "8.1: Exponential Growth & Decay", url: "lesson:algebra2:ch8-1" },
                        { name: "8.2: The Natural Base 'e'", url: "lesson:algebra2:ch8-2" },
                        { name: "8.3: Logs as Inverses", url: "lesson:algebra2:ch8-3" },
                        { name: "8.4: Properties of Logs", url: "lesson:algebra2:ch8-4" },
                        { name: "8.5: Solving Log Equations", url: "lesson:algebra2:ch8-5" },
                        { name: "8.6: Natural Logs & Change of Base", url: "lesson:algebra2:ch8-6" },
                        { name: "8.rev: Review Challenge", url: "lesson:algebra2:ch8-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Continuous Growth",
                            problem: "You invest $1,000 in an account with 5% annual interest compounded continuously. How much will you have after 10 years?",
                            steps: [
                                "Use the formula $A = Pe^{rt}$.",
                                "Substitute values: $1000 \\\\cdot e^{(0.05)(10)}$.",
                                "Simplify exponent: $1000 \\\\cdot e^{0.5}$.",
                                "Calculate: $1000 \\\\cdot 1.6487 \\\\approx \\\\$1,648.70$."
                            ],
                            intuition: "Continuous compounding is the theoretical limit of growth. It assumes interest is being added at every possible instant."
                        },
                        {
                            title: "Example 2: The Log Power Hack",
                            problem: "Solve for $x$: $3^{x+1} = 20$. Give the answer using natural logs.",
                            steps: [
                                "Take $\\\\ln$ of both sides: $\\\\ln(3^{x+1}) = \\\\ln(20)$.",
                                "Use Power Rule: $(x+1)\\\\ln(3) = \\\\ln(20)$.",
                                "Divide by $\\\\ln(3)$: $x+1 = \\\\frac{\\\\ln(20)}{\\\\ln(3)}$.",
                                "Solve for $x$: $x = \\\\frac{\\\\ln(20)}{\\\\ln(3)} - 1$."
                            ],
                            intuition: "Logarithms 'pull down' variables from the exponent. They are the only way to solve for a variable that is trapped in a power."
                        },
                        {
                            title: "Example 3: Magnitude & Scale",
                            problem: "Compare the intensity of an earthquake of magnitude 8.0 vs 6.0 on the Richter scale ($M = \\\\log_{10}(I/I_0)$).",
                            steps: [
                                "Set up equations: $8 = \\\\log_{10}(I_8/I_0)$ and $6 = \\\\log_{10}(I_6/I_0)$.",
                                "Convert to exponential: $10^8 = I_8/I_0$ and $10^6 = I_6/I_0$.",
                                "Divide: $I_8/I_6 = 10^8/10^6 = 10^2 = 100$.",
                                "Result: A magnitude 8 earthquake is 100 times more intense than a magnitude 6 one."
                            ],
                            intuition: "Logarithmic scales allow us to represent a massive range of data (from 1 to 100,000,000) using a simple linear ruler (1 to 8)."
                        }
                    ],
                    quiz: {
                        question: "What does the Natural Log (ln) have as its base?",
                        options: ["10", "2", "e (~2.718)", "0"],
                        answer: "e (~2.718)",
                        explanation: "The natural logarithm, ln(x), is defined as the logarithm with base e."
                    }
                },
                {
                    title: "Ch 9: Rational Functions",
                    intuition: "Rational functions are the ratios of rules, creating asymptotes and holes. They represent shared resources, inverse scaling, and the constraints of digital precision.",
                    topics: ["9.1 Inverse Variation", "9.2 Reciprocal Functions", "9.3 Rational Graphs", "9.4 Expressions", "9.5 Adding/Subtracting", "9.6 Solving Equations"],
                    lectures: [
                        { name: "9.1: Variation Theory", url: "lesson:algebra2:ch9-1" },
                        { name: "9.2: Reciprocal Families", url: "lesson:algebra2:ch9-2" },
                        { name: "9.3: Asymptote Analysis", url: "lesson:algebra2:ch9-3" },
                        { name: "9.4: Rational Algebra", url: "lesson:algebra2:ch9-4" },
                        { name: "9.5: Complex Fractions", url: "lesson:algebra2:ch9-5" },
                        { name: "9.6: Solving Rational Systems", url: "lesson:algebra2:ch9-6" },
                        { name: "9.rev: Review Challenge", url: "lesson:algebra2:ch9-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Asymptote Hunter",
                            problem: "Identify the vertical and horizontal asymptotes for $f(x) = \\\\frac{3x - 6}{x + 4}$.",
                            steps: [
                                "Vertical: Set denominator to zero: $x + 4 = 0 \\\\rightarrow x = -4$.",
                                "Horizontal: Compare degrees (n=1, d=1). They are equal.",
                                "Ratio of leading coefficients: $y = 3/1 = 3$.",
                                "Final Results: V.A. at $x = -4$, H.A. at $y = 3$."
                            ],
                            intuition: "Asymptotes are the 'unreachable horizons' of a function. The vertical asymptote is a hard boundary (division by zero), while the horizontal is the long-term trend."
                        },
                        {
                            title: "Example 2: Hole vs. Asymptote",
                            problem: "Determine if $f(x) = \\\\frac{x^2 - 9}{x - 3}$ has a hole or an asymptote at $x = 3$.",
                            steps: [
                                "Factor the numerator: $x^2 - 9 = (x - 3)(x + 3)$.",
                                "Function becomes $f(x) = \\\\frac{(x-3)(x+3)}{x-3}$.",
                                "Since the $(x-3)$ factor cancels out, it is a **Removable Discontinuity**.",
                                "Result: There is a **Hole** at $x = 3$."
                            ],
                            intuition: "A hole is a temporary logical gap that can be 'filled' by simplifying the code. An asymptote is a fundamental limit that cannot be crossed."
                        },
                        {
                            title: "Example 3: Complex Fraction Logic",
                            problem: "Simplify: $\\\\frac{\\\\frac{1}{x} + \\\\frac{1}{y}}{\\\\frac{1}{x} - \\\\frac{1}{y}}$",
                            steps: [
                                "Find the LCD of all small fractions: $xy$.",
                                "Multiply top and bottom by $xy$: $\\\\frac{xy(\\\\frac{1}{x} + \\\\frac{1}{y})}{xy(\\\\frac{1}{x} - \\\\frac{1}{y})}$.",
                                "Distribute: $\\\\frac{y + x}{y - x}$."
                            ],
                            intuition: "Complex fractions are just nested systems. By identifying the 'Global Denominator' (LCD), we can collapse the nested layers into a single, clean expression."
                        }
                    ],
                    quiz: {
                        question: "What happens to the graph of a rational function when a factor cancels out from both the numerator and denominator?",
                        options: ["A Vertical Asymptote is created", "A Horizontal Asymptote is created", "A Hole (Removable Discontinuity) is created", "The graph becomes a straight line with no gaps"],
                        answer: "A Hole (Removable Discontinuity) is created",
                        explanation: "When a factor cancels out, the function is still undefined at that point, but the graph doesn't approach infinity; it simply has a missing point called a hole."
                    }
                },
                {
                    title: "Ch 10: Conic Sections",
                    intuition: "Conic sections are the shapes formed by slicing a cone. They describe the orbits of planets (Ellipses), the shape of satellite dishes (Parabolas), and the navigation of GPS signals (Hyperbolas).",
                    topics: ["10.1 Parabolas", "10.2 Circles", "10.3 Ellipses", "10.4 Hyperbolas", "10.5 Identifying Conics", "10.6 Systems of Conics"],
                    lectures: [
                        { name: "10.1: Exploring Conic Sections", url: "lesson:algebra2:ch10-1" },
                        { name: "10.2: Circles & Distance", url: "lesson:algebra2:ch10-2" },
                        { name: "10.3: Ellipses & Orbits", url: "lesson:algebra2:ch10-3" },
                        { name: "10.4: Hyperbolas & GPS", url: "lesson:algebra2:ch10-4" },
                        { name: "10.rev: Conic Architect", url: "lesson:algebra2:ch10-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Identifying the Conic",
                            problem: "Identify the type of conic section: $3x^2 - 12x + 3y^2 + 6y = 15$.",
                            steps: [
                                "Look at coefficients $A=3$ and $C=3$.",
                                "Since $A = C$ and there is no $xy$ term ($B=0$), it is likely a Circle.",
                                "Discriminant: $B^2 - 4AC = 0^2 - 4(3)(3) = -36$.",
                                "$-36 < 0$ and $A=C$ confirms it is a **Circle**."
                            ],
                            intuition: "Coefficients are the 'DNA' of a shape. Identical growth in both X and Y directions always results in the perfect symmetry of a circle."
                        },
                        {
                            title: "Example 2: Ellipse Parameters",
                            problem: "Find the vertices and foci of $\\\\frac{x^2}{25} + \\\\frac{y^2}{9} = 1$.",
                            steps: [
                                "Identify $a^2=25 \\\\to a=5$ and $b^2=9 \\\\to b=3$.",
                                "Vertices are $(\\\\pm 5, 0)$.",
                                "Find focal distance $c$: $c^2 = a^2 - b^2 = 25 - 9 = 16$.",
                                "So $c = 4$. Foci are $(\\\\pm 4, 0)$."
                            ],
                            intuition: "The major axis (a) defines the reach of the ellipse, while the foci (c) are the 'gravity centers' that govern its curvature."
                        },
                        {
                            title: "Example 3: Hyperbola Asymptotes",
                            problem: "Write the equations of the asymptotes for $\\\\frac{y^2}{16} - \\\\frac{x^2}{4} = 1$.",
                            steps: [
                                "Identify $a^2=16 \\\\to a=4$ (vertical axis) and $b^2=4 \\\\to b=2$ (horizontal).",
                                "The hyperbola is vertical (y-positive).",
                                "Asymptote slope is rise/run: $a/b = 4/2 = 2$.",
                                "Equations: $y = \\\\pm 2x$."
                            ],
                            intuition: "Asymptotes are the 'Target Vectors' of a hyperbola. As you move far from the center, the curve becomes indistinguishable from these straight lines."
                        }
                    ],
                    quiz: {
                        question: "In Kepler's Laws, what geometric shape do planets follow for their orbits around the Sun?",
                        options: ["Perfect Circles", "Parabolas", "Ellipses", "Hyperbolas"],
                        answer: "Ellipses",
                        explanation: "Kepler's First Law states that planets move in elliptical orbits with the Sun at one of the two foci."
                    }
                },
                {
                    title: "Ch 11: Sequences & Series",
                    intuition: "Nature is built on patterns. From the Fibonacci sequence to compound interest, sequences define how discrete steps build into continuous structures.",
                    topics: ["11.1 Pattern Logic", "11.2 Arithmetic", "11.3 Geometric", "11.4 Series Summations", "11.5 Infinite Series"],
                    lectures: [
                        { name: "11.1: Pattern Intelligence", url: "lesson:algebra2:ch11-1" },
                        { name: "11.2: Arithmetic Progressions", url: "lesson:algebra2:ch11-2" },
                        { name: "11.3: Geometric Scaling", url: "lesson:algebra2:ch11-3" },
                        { name: "11.4: Series & Sigma Notation", url: "lesson:algebra2:ch11-4" },
                        { name: "11.5: Convergent Series", url: "lesson:algebra2:ch11-5" },
                        { name: "11.rev: Series Masterclass", url: "lesson:algebra2:ch11-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Gauss Shortcut",
                            problem: "Find the sum of all integers from 1 to 100.",
                            steps: [
                                "Identify parameters: $a_1 = 1, a_{100} = 100, n = 100$.",
                                "Use Arithmetic Sum: $S = \\frac{n(a_1 + a_n)}{2}$.",
                                "Substitute: $S = \\frac{100(1 + 100)}{2} = 50 \cdot 101$.",
                                "Result: 5,050."
                            ],
                            intuition: "Arithmetic sequences are the 'Linear Functions' of the discrete world. By pairing terms, we reduce a complex addition problem into a single multiplication."
                        },
                        {
                            title: "Example 2: Geometric Growth",
                            problem: "Find the 10th term of the sequence $3, 6, 12, \dots$.",
                            steps: [
                                "Identify common ratio $r = 6/3 = 2$.",
                                "Use explicit formula: $a_n = a_1 \\\\cdot r^{n-1}$.",
                                "Substitute: $a_{10} = 3 \\\\cdot 2^{10-1} = 3 \\\\cdot 2^9$.",
                                "Calculate: $3 \\\\cdot 512 = 1,536$."
                            ],
                            intuition: "Geometric growth is explosive ($O(2^n)$). Each step represents a doubling of the system's state, common in data replication and infectious spread models."
                        },
                        {
                            title: "Example 3: Infinite Convergence",
                            problem: "Find the sum of the infinite series $10 + 5 + 2.5 + \dots$.",
                            steps: [
                                "Identify $a_1 = 10$ and $r = 5/10 = 0.5$.",
                                "Since $|0.5| < 1$, the series converges.",
                                "Use $S = \\\\frac{a_1}{1 - r}$.",
                                "Substitute: $S = \\frac{10}{1 - 0.5} = \\frac{10}{0.5} = 20$."
                            ],
                            intuition: "Even though there are an infinite number of terms, their total sum stays within a finite 'box'. This is how computers render smooth gradients using discrete pixels."
                        }
                    ],
                    quiz: {
                        question: "Under what condition does an infinite geometric series converge to a finite number?",
                        options: ["When r > 1", "When r = 1", "When |r| < 1", "When a1 = 0"],
                        answer: "When |r| < 1",
                        explanation: "An infinite geometric series converges if and only if the absolute value of the common ratio is strictly less than 1, meaning the terms get progressively smaller."
                    }
                },
                {
                    title: "Ch 12: Probability & Statistics",
                    intuition: "Probability is the logic of uncertainty. It is the engine of Artificial Intelligence, governing how machines learn from data (Bayesian Logic) and how we make decisions under risk.",
                    topics: ["12.1 Probability Rules", "12.2 Conditional Probability", "12.3 Discrete Events", "12.4 Normal Distribution", "12.5 Sampling Methods"],
                    lectures: [
                        { name: "12.1: The Logic of Chance", url: "lesson:algebra2:ch12-1" },
                        { name: "12.2: Conditional Logic", url: "lesson:algebra2:ch12-2" },
                        { name: "12.3: Discrete Random Variables", url: "lesson:algebra2:ch12-3" },
                        { name: "12.4: The Bell Curve (AI)", url: "lesson:algebra2:ch12-4" },
                        { name: "12.5: Sampling & Bias", url: "lesson:algebra2:ch12-5" },
                        { name: "12.rev: Data Scientist", url: "lesson:algebra2:ch12-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Permutation vs. Combination",
                            problem: "How many ways can you choose a 3-person leadership committee from a class of 10? What if you assign them specific roles (President, VP, Secretary)?",
                            steps: [
                                "Identify: Order doesn't matter for a flat committee.",
                                "Calculate Combination: $10C3 = \\\\frac{10!}{3!7!} = \\\\frac{10 \\\\cdot 9 \\\\cdot 8}{3 \\\\cdot 2 \\\\cdot 1} = 120$.",
                                "Identify: Order MATTERS for defined roles.",
                                "Calculate Permutation: $10P3 = \\\\frac{10!}{7!} = 10 \\\\cdot 9 \\\\cdot 8 = 720$."
                            ],
                            intuition: "Order is the multiplier of possibilities. When you add rank or sequence, the number of states expands rapidly."
                        },
                        {
                            title: "Example 2: The Bayesian Spam Filter",
                            problem: "If 10% of all emails are spam ($P(S)=0.1$), and 80% of spam contains 'Free' ($P(F|S)=0.8$), while only 5% of good mail does ($P(F|G)=0.05$), what is $P(S|F)$?",
                            steps: [
                                "Use Bayes' Rule: $P(S|F) = \\\\frac{P(F|S)P(S)}{P(F)}$.",
                                "Calculate Total $P(F) = (0.8)(0.1) + (0.05)(0.9) = 0.08 + 0.045 = 0.125$.",
                                "Substitute: $P(S|F) = \\\\frac{(0.8)(0.1)}{0.125} = \\\\frac{0.08}{0.125} = 0.64$.",
                                "Result: There is a 64% chance the mail is spam."
                            ],
                            intuition: "Bayesian thinking is about 'Updating' probabilities. Seeing the word 'Free' boosted the probability of spam from 10% to 64%."
                        },
                        {
                            title: "Example 3: Standardizing the Score",
                            problem: "A student scored 85 on a test where the mean was 70 and deviation was 10. What is their Z-score, and where do they rank?",
                            steps: [
                                "Formula: $z = \\\\frac{x - \\mu}{\\sigma}$.",
                                "Calculate: $z = \\\\frac{85 - 70}{10} = 1.5$.",
                                "Interpretation: The student is 1.5 standard deviations above the average.",
                                "Lookup: This puts them in the top ~7% of the class."
                            ],
                            intuition: "Standardization allows us to compare 'apples to oranges'. A Z-score of 1.5 is equally impressive whether you're measuring test scores or height."
                        }
                    ],
                    quiz: {
                        question: "What does the 'Empirical Rule' state about data within 2 standard deviations of the mean in a normal distribution?",
                        options: ["68% of data", "95% of data", "99.7% of data", "50% of data"],
                        answer: "95% of data",
                        explanation: "The empirical rule (68-95-99.7) states that approximately 95% of observations in a normal distribution fall within two standard deviations of the mean."
                    }
                },
                {
                    title: "Ch 13: Periodic Functions & Trigonometry",
                    intuition: "Periodic functions are the heartbeat of the universe. They model everything that repeats, from sound waves and light to the cycles of the economy and the rotation of engines.",
                    topics: ["13.1 Exploring Periodic Data", "13.2 Angles & Rotation", "13.3 Radian Measure", "13.4 The Sine Function", "13.5 The Cosine Function", "13.6 The Tangent Function", "13.7 Translating Sine/Cosine", "13.8 Reciprocal Functions"],
                    lectures: [
                        { name: "13.1: Periodic Functions", url: "lesson:algebra2:ch13-1" },
                        { name: "13.2: Angles & Rotation", url: "lesson:algebra2:ch13-2" },
                        { name: "13.3: Radian Mastery", url: "lesson:algebra2:ch13-3" },
                        { name: "13.4: Sine Wave Architecture", url: "lesson:algebra2:ch13-4" },
                        { name: "13.5: Cosine Phase Shift", url: "lesson:algebra2:ch13-5" },
                        { name: "13.6: Tangent Slopes", url: "lesson:algebra2:ch13-6" },
                        { name: "13.7: Wave Transformations", url: "lesson:algebra2:ch13-7" },
                        { name: "13.8: Reciprocal Inversions", url: "lesson:algebra2:ch13-8" },
                        { name: "13.rev: Wave Engineer", url: "lesson:algebra2:ch13-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Amplitude & Period",
                            problem: "Find the amplitude and period of $y = 5 \\\\sin(2x)$.",
                            steps: [
                                "Identify $a=5$. The amplitude is $|a| = 5$.",
                                "Identify $b=2$.",
                                "Calculate Period: $P = \\\\frac{2\\\\pi}{b} = \\\\frac{2\\\\pi}{2} = \\\\pi$.",
                                "The wave repeats every $\\\\pi$ units horizontally."
                            ],
                            intuition: "The $b$ value is the 'Speed Multiplier'. By doubling the speed of rotation, the wave completes its cycle twice as fast, cutting the period in half."
                        },
                        {
                            title: "Example 2: Arc Length & Radians",
                            problem: "How far does a point travel on a circle with radius 10cm if it rotates through $3\\\\pi/2$ radians?",
                            steps: [
                                "Use the formula: $s = r \theta$.",
                                "Identify $r = 10$ and $\theta = 3\pi/2$.",
                                "Calculate: $s = 10 \cdot (3\pi/2) = 15\pi$.",
                                "Result: $\approx 47.12$ cm."
                            ],
                            intuition: "Radians are the bridge between the 'Angle' (rotation) and 'Distance' (travel). If $r=1$, the angle is the distance."
                        },
                        {
                            title: "Example 3: Phase Shift Calculation",
                            problem: "Determine the phase shift for $y = \\sin(3(x - \\pi/6))$.",
                            steps: [
                                "Compare to standard form $y = a \\sin(b(x - h))$.",
                                "Identify $h = \\pi/6$.",
                                "The phase shift is $\\pi/6$ units to the right.",
                                "This means the entire wave is 'delayed' by 30 degrees."
                            ],
                            intuition: "Phase shifting is about 'Timing'. In electronics, shifting a wave right is like delaying a signal, while shifting left is advancing it."
                        }
                    ],
                    quiz: {
                        question: "If two identical sine waves are $180^{\\circ}$ ($\pi$ radians) out of phase, what happens when they are added together?",
                        options: ["They double in amplitude", "They cancel each other out", "The frequency doubles", "Nothing changes"],
                        answer: "They cancel each other out",
                        explanation: "Destructive interference occurs when two waves are 180 degrees out of phase, as the peak of one aligns with the trough of the other."
                    }
                },
                {
                    title: "Ch 14: Trigonometric Identities & Equations",
                    intuition: "Trigonometric identities are the 'algebra of geometry'. They allow us to simplify complex wave interactions, solve navigation problems, and optimize signal processing algorithms.",
                    topics: ["14.1 Key Identities", "14.2 Proving Identities", "14.3 Sum & Double Angles", "14.4 Solving Equations", "14.5 Triangulation Laws"],
                    lectures: [
                        { name: "14.1: Fundamental Identities", url: "lesson:algebra2:ch14-1" },
                        { name: "14.2: The Art of Proof", url: "lesson:algebra2:ch14-2" },
                        { name: "14.3: Sum & Double Angles", url: "lesson:algebra2:ch14-3" },
                        { name: "14.4: Solving Trig Systems", url: "lesson:algebra2:ch14-4" },
                        { name: "14.5: Triangulation Laws", url: "lesson:algebra2:ch14-5" },
                        { name: "14.rev: Global Architect", url: "lesson:algebra2:ch14-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: Identity Refactoring",
                            problem: "Prove that $(\\sin \\theta + \\cos \\theta)^2 = 1 + \\sin(2\\theta)$.",
                            steps: [
                                "Expand the left side: $\\sin^2 \\theta + 2 \\sin \\theta \\cos \\theta + \\cos^2 \\theta$.",
                                "Group terms: $(\\sin^2 \\theta + \\cos^2 \\theta) + 2 \\sin \\theta \\cos \\theta$.",
                                "Apply Pythagorean Identity: $1 + 2 \\sin \\theta \\cos \\theta$.",
                                "Apply Double Angle Identity: $1 + \\sin(2\\theta)$. Identity Verified."
                            ],
                            intuition: "Proving is matching patterns. By expanding the squared binomial, we reveal the two core 'atomic' units of trigonometry: the Pythagorean unity and the Double Angle expansion."
                        },
                        {
                            title: "Example 2: The General Solution",
                            problem: "Solve $2 \\cos^2 x - \\cos x = 1$ for all real values of $x$.",
                            steps: [
                                "Treat as a quadratic: $2u^2 - u - 1 = 0$, where $u = \\cos x$.",
                                "Factor: $(2u + 1)(u - 1) = 0$.",
                                "Find $u$: $\\cos x = -1/2$ or $\\cos x = 1$.",
                                "Solve for $x$: $x = 2\\pi/3, 4\\pi/3$ (from $-1/2$) and $x = 0$ (from $1$).",
                                "Write General Solution: $x = \\frac{2\\pi}{3} + 2n\\pi, \\frac{4\\pi}{3} + 2n\\pi, 2n\\pi$."
                            ],
                            intuition: "Trig equations are often 'Algebra in Disguise'. By substituting $u$, we use familiar factoring tools before returning to the unit circle for the final periodic mapping."
                        },
                        {
                            title: "Example 3: Low of Cosines in Mapping",
                            problem: "In a triangle, $a=5, b=8$ and the angle between them $C=60^{\\circ}$. Find side $c$.",
                            steps: [
                                "Apply Law of Cosines: $c^2 = a^2 + b^2 - 2ab \\cos C$.",
                                "Substitute: $c^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^{\\circ})$.",
                                "Calculate: $c^2 = 25 + 64 - 80(0.5) = 25 + 64 - 40 = 49$.",
                                "Result: $c = 7$."
                            ],
                            intuition: "The Law of Cosines is the 'Error Correction' version of Pythagoras. It allows you to find distances even when the 'right angle' assumption fails, making it the bedrock of GPS."
                        }
                    ],
                    quiz: {
                        question: "Which identity is a direct consequence of dividing the primary Pythagorean identity (sin²θ + cos²θ = 1) by cos²θ?",
                        options: ["1 + cot²θ = csc²θ", "1 + tan²θ = sec²θ", "sin(2θ) = 2sinθcosθ", "cos(2θ) = 1 - 2sin²θ"],
                        answer: "1 + tan²θ = sec²θ",
                        explanation: "Dividing sin²θ + cos²θ = 1 by cos²θ yields (sin²θ/cos²θ) + (cos²θ/cos²θ) = 1/cos²θ, which simplifies to tan²θ + 1 = sec²θ."
                    }
                },
                {
                    title: "Special Module: The Competition Wing (AMC 10/12)",
                    intuition: "School math teaches you to follow rules. Competition math teaches you to break them efficiently. This is the gym for your mathematical IQ.",
                    topics: ["Number Theory", "Combinatorics", "Logic Puzzles", "Pigeonhole Principle", "Modular Arithmetic"],
                    lectures: [
                        { name: "AMC: Prime Factorization Secrets", url: "lesson:algebra2:ch_amc-1" },
                        { name: "AMC: The Art of Counting", url: "lesson:algebra2:ch_amc-2" },
                        { name: "AMC: Vieta's Theorem", url: "lesson:algebra2:ch_amc-3" },
                        { name: "AMC: Diophantine Equations", url: "lesson:algebra2:ch_amc-4" }
                    ],
                    examples: [
                        {
                            title: "AMC Challenge: Divisor Counting",
                            problem: "How many positive divisors does $12!$ have?",
                            steps: [
                                "Find the prime factorization of 12! using Legendre's Formula for each prime $p \le 12$ ($2, 3, 5, 7, 11$).",
                                "For $p=2$: $\lfloor 12/2 \rfloor + \lfloor 12/4 \rfloor + \lfloor 12/8 \rfloor = 6+3+1 = 10$. Exponent is 10.",
                                "For $p=3$: $\lfloor 12/3 \rfloor + \lfloor 12/9 \rfloor = 4+1 = 5$. Exponent is 5.",
                                "Repeat for 5 (exp 2), 7 (exp 1), 11 (exp 1).",
                                "$12! = 2^{10} \cdot 3^{5} \cdot 5^{2} \cdot 7^{1} \cdot 11^{1}$.",
                                "Calculate $\tau(12!)$: $(10+1)(5+1)(2+1)(1+1)(1+1) = 11 \cdot 6 \cdot 3 \cdot 2 \cdot 2 = 792$."
                            ],
                            intuition: "Legendre's Formula is the 'Prime Decompiler'. It tells you exactly how many times a prime is 'invoked' inside a factorial."
                        }
                    ],
                    quiz: {
                        question: "If a polynomial $x^3 - 7x^2 + 14x - 8 = 0$ has roots $a, b, c$, what is the sum of its roots?",
                        options: ["7", "-7", "14", "8"],
                        answer: "7",
                        explanation: "According to Vieta's Formulas, for a cubic $ax^3 + bx^2 + \dots$, the sum of roots is $-b/a$. Here, $-(-7)/1 = 7$."
                    }
                },
                {
                    title: "Sneak Peek: Calculus Zero",
                    intuition: "Before we measure static shapes (Geometry), we must learn to measure change itself. Welcome to the edge of infinity.",
                    topics: ["The Tangent Problem", "The Area Problem", "Limits at Infinity", "Derivative Intuition"],
                    lectures: [
                        { name: "Calc Intro: The Paradox of Zeno", url: "lesson:algebra2:ch_limits-1" },
                        { name: "Calc Intro: The Tangent Problem", url: "lesson:algebra2:ch_limits-2" },
                        { name: "Calc Intro: Visualizing Limits", url: "lesson:algebra2:ch_limits-3" }
                    ],
                    examples: [
                        {
                            title: "Visualizing the Derivative",
                            problem: "Find the slope of the tangent line to $f(x) = x^2$ at $x = 3$.",
                            steps: [
                                "Set up the difference quotient: $\lim_{h \to 0} \frac{(3+h)^2 - 3^2}{h}$.",
                                "Expand: $\lim_{h \to 0} \frac{9 + 6h + h^2 - 9}{h}$.",
                                "Simplify: $\lim_{h \to 0} \frac{6h + h^2}{h} = \lim_{h \to 0} (6 + h)$.",
                                "Evaluate the limit: As $h \to 0$, $6+h = 6$.",
                                "The slope is exactly 6."
                            ],
                            intuition: "You aren't calculating $0/0$. You are calculating the value the fraction APPROACHES as $h$ becomes infinitely small. This is the 'Speedometer' of the function at that exact moment."
                        }
                    ],
                    quiz: {
                        question: "What does the limit $\lim_{x \to \infty} \frac{1}{x}$ equal?",
                        options: ["1", "$\infty$", "0", "Undefined"],
                        answer: "0",
                        explanation: "As the denominator gets infinitely large, the value of the fraction gets infinitely small, approaching 0."
                    }
                }
            ]
        },
        {
            id: "calc-bc",
            title: "AP Calculus BC",
            code: "MA3177",
            description: "Advanced study of limits, derivatives, integrals, and power series for TJHSST's most challenging track.",
            color: "#00d2ff",
            icon: "fas fa-infinity",
            units: [
                {
                    title: "Unit 1: Limits & Continuity",
                    topics: ["Limit Laws", "Squeeze Theorem", "IVT", "Infinite Limits", "Formal Definition"],
                    intuition: "Calculus is the art of measuring change. Limits are the 'bridge' to understanding instantaneous movement.",
                    lectures: [
                        { name: "1.1: Essence of Calculus", url: "lesson:calc-bc:calc-u1-1" },
                        { name: "1.2: Formal $\epsilon-\delta$ Definition", url: "lesson:calc-bc:calc-u1-2" },
                        { name: "1.3: Limit Laws & Algebraic Manipulations", url: "lesson:calc-bc:calc-u1-3" },
                        { name: "1.4: Infinite Limits & Asymptotes", url: "lesson:calc-bc:calc-u1-4" },
                        { name: "1.5: Continuity & IVT Logic", url: "lesson:calc-bc:calc-u1-5" }
                    ],
                    quiz: {
                        question: "Use the Squeeze Theorem: If $\cos(x) \le f(x) \le 1$ near $x=0$, what is $\lim_{x \to 0} f(x)$?",
                        options: ["0", "1", "Undefined", "$\pi/2$"],
                        answer: "1",
                        explanation: "Since both $\cos(0)=1$ and the upper bound is 1, $f(x)$ is forced to 1 as $x \to 0$."
                    }
                },
                {
                    title: "Unit 2: Differentiation",
                    topics: ["Definition of Derivative", "Power Rule", "Product/Quotient Rules", "High-Order Derivatives"],
                    lectures: [
                        { name: "2.1: The Tangent Problem", url: "lesson:calc-bc:calc-u2-1" },
                        { name: "2.2: Differentiability & Smoothness", url: "lesson:calc-bc:calc-u2-2" },
                        { name: "2.3: Basic Rules (Power, Sum, Difference)", url: "lesson:calc-bc:calc-u2-3" },
                        { name: "2.4: Product & Quotient Rules", url: "lesson:calc-bc:calc-u2-4" },
                        { name: "2.5: Derivatives of Trig Functions", url: "lesson:calc-bc:calc-u2-5" }
                    ]
                },
                {
                    title: "Unit 3: Implicit & Inverse",
                    topics: ["Chain Rule", "Implicit Differentiation", "Inverse Trig", "Logarithmic Diff"],
                    lectures: [
                        { name: "3.1: The Chain Rule Protocol", url: "lesson:calc-bc:calc-u3-1" },
                        { name: "3.2: Implicit Differentiation", url: "lesson:calc-bc:calc-u3-2" },
                        { name: "3.3: Derivatives of Inverses", url: "lesson:calc-bc:calc-u3-3" },
                        { name: "3.4: Inverse Trig Masterclass", url: "lesson:calc-bc:calc-u3-4" }
                    ]
                },
                {
                    title: "Unit 4: Contextual Apps",
                    topics: ["Related Rates", "Linearization", "L'Hospital's Rule", "Differential Error"],
                    lectures: [
                        { name: "4.1: Related Rates Strategies", url: "lesson:calc-bc:calc-u4-1" },
                        { name: "4.2: Linearization & Differentials", url: "lesson:calc-bc:calc-u4-2" },
                        { name: "4.3: L'Hospital's Rule & Indeterminants", url: "lesson:calc-bc:calc-u4-3" }
                    ]
                },
                {
                    title: "Unit 5: Analytical Apps",
                    topics: ["Mean Value Theorem", "Optimization", "Curve Sketching", "Concavity"],
                    lectures: [
                        { name: "5.1: Extreme Values & Rolle's", url: "lesson:calc-bc:calc-u5-1" },
                        { name: "5.2: Mean Value Theorem", url: "lesson:calc-bc:calc-u5-2" },
                        { name: "5.3: Concavity & Second Deriv Test", url: "lesson:calc-bc:calc-u5-3" },
                        { name: "5.4: Optimization Problems", url: "lesson:calc-bc:calc-u5-4" }
                    ]
                },
                {
                    title: "Unit 6: Integration",
                    topics: ["Riemann Sums", "Fundamental Theorem", "U-Substitution", "Integration by Parts"],
                    lectures: [
                        { name: "6.1: Sigma Notation & Riemann Sums", url: "lesson:calc-bc:calc-u6-1" },
                        { name: "6.2: Definite Integrals & FTC", url: "lesson:calc-bc:calc-u6-2" },
                        { name: "6.3: Integration by Substitution", url: "lesson:calc-bc:calc-u6-3" },
                        { name: "6.4: Integration by Parts (BC)", url: "lesson:calc-bc:calc-u6-4" },
                        { name: "6.5: Partial Fractions (BC)", url: "lesson:calc-bc:calc-u6-5" }
                    ]
                },
                {
                    title: "Unit 7: Diff Eqs",
                    topics: ["Slope Fields", "Separable Equations", "Euler's Method", "Logistic Models"],
                    lectures: [
                        { name: "7.1: Slope Fields & General Solutions", url: "lesson:calc-bc:calc-u7-1" },
                        { name: "7.2: Euler's Method (BC)", url: "lesson:calc-bc:calc-u7-2" },
                        { name: "7.3: Separation of Variables", url: "lesson:calc-bc:calc-u7-3" },
                        { name: "7.4: Logistic Growth Models (BC)", url: "lesson:calc-bc:calc-u7-4" }
                    ]
                },
                {
                    title: "Unit 8: App of Integration",
                    topics: ["Average Value", "Volume (Disk/Washer/Shell)", "Arc Length"],
                    lectures: [
                        { name: "8.1: Areas between Curves", url: "lesson:calc-bc:calc-u8-1" },
                        { name: "8.2: Volumes of Revolution", url: "lesson:calc-bc:calc-u8-2" },
                        { name: "8.3: Arc Length & Surface Area (BC)", url: "lesson:calc-bc:calc-u8-3" }
                    ]
                },
                {
                    title: "Unit 9: Parametric & Polar",
                    topics: ["Vector Motion", "Polar Areas", "Parametric Derivatives"],
                    lectures: [
                        { name: "9.1: Parametric Curves & Calc", url: "lesson:calc-bc:calc-u9-1" },
                        { name: "9.2: Vectors in the Plane", url: "lesson:calc-bc:calc-u9-2" },
                        { name: "9.3: Polar Coordinates & Graphs", url: "lesson:calc-bc:calc-u9-3" },
                        { name: "9.4: Area & Arc Length in Polar (BC)", url: "lesson:calc-bc:calc-u9-4" }
                    ]
                },
                {
                    title: "Unit 10: Sequences & Series",
                    topics: ["Convergence Tests", "Taylor Series", "Lagrange Error"],
                    lectures: [
                        { name: "10.1: Sequences & Convergence", url: "lesson:calc-bc:calc-u10-1" },
                        { name: "10.2: Convergence Tests Masterlist", url: "lesson:calc-bc:calc-u10-2" },
                        { name: "10.3: Power Series & Radius", url: "lesson:calc-bc:calc-u10-3" },
                        { name: "10.4: Taylor & Maclaurin Series", url: "lesson:calc-bc:calc-u10-4" },
                        { name: "10.5: Lagrange Error Bound (BC)", url: "lesson:calc-bc:calc-u10-5" }
                    ]
                },
                {
                    title: "Infinity Marathon: Final Synthesis",
                    topics: ["AP Style FRQs", "Cross-Unit Integration", "Theoretical Proofs"],
                    lectures: [
                        { name: "M.1: The Grand Synthesis (All Units)", url: "lesson:calc-bc:calc-marathon-1" },
                        { name: "M.2: Theoretical Edge (MIT 18.01 Review)", url: "lesson:calc-bc:calc-marathon-2" }
                    ],
                    quiz: {
                        question: "If $y(x)$ is represented by a Taylor Series centered at 0, and $y' = y$ with $y(0)=1$, which function is it?",
                        options: ["$\ln(x)$", "$e^x$", "$\sin(x)$", "$x^2$"],
                        answer: "$e^x$",
                        explanation: "$e^x$ is the unique function where the derivative is equal to the function itself and $e^0=1$."
                    }
                }
            ]
        }
    ],
    strategy: {
        title: "TJ 9th Grade Prep Strategy",
        content: `
            <h3>1. The Placement Reality</h3>
            <p>TJHSST uses a semester-based system. To take AP Calculus BC in 9th grade, precalculus mastery is non-negotiable.</p>
            <h3>2. Conceptual 'Why'</h3>
            <p>TJ teachers value depth. Understand the "Fundamental Theorem" visually, not just the formula.</p>
            <h3>3. Join the Community</h3>
            <p>The Varsity Math Team is where the best learning happens. Join early!</p>
        `
    },
    external_resources: [
        { name: "OmegaLearn", desc: "Best AMC 10/12 Free PDF Books", url: "https://www.omegalearn.org/mastering-amc1012", icon: "fas fa-book" },
        { name: "3Blue1Brown", desc: "Intuition Building Animations", url: "https://www.youtube.com/@3blue1brown", icon: "fab fa-youtube" },
        { name: "Paul's Notes", desc: "Legendary Math Cheat Sheets", url: "https://tutorial.math.lamar.edu/", icon: "fas fa-file-pdf" },
        { name: "Art of Problem Solving", desc: "The competitive math gold standard", url: "https://artofproblemsolving.com/", icon: "fas fa-brain" }
    ]
};
