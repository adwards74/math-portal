window.MATH_DATA = {
    subjects: [
        {
            id: "foundation",
            title: "Ch0: Foundation Bridge",
            code: "PRE-ALG",
            description: "Pre-Algebra review: fractions, order of operations, basic equations, and the coordinate plane. Master these before Algebra 2!",
            color: "#38ef7d",
            icon: "fas fa-bridge",
            intuition: "A strong foundation lets you build higher. Complete this chapter first!",
            local_resources: [],
            difficulty: "basic",
            units: [
                {
                    title: "Ch 0: Pre-Algebra Foundations",
                    insight: "Essential concepts you must master before diving into Algebra 2.",
                    topics: ["Fractions", "PEMDAS", "Basic Equations", "Coordinate Plane"],
                    lectures: [
                        { name: "0.1: Number Sense & Fractions", url: "lesson:foundation:ch0-1", insight: "Fractions are the language of ratios and probability!" },
                        { name: "0.2: PEMDAS Order of Operations", url: "lesson:foundation:ch0-2" },
                        { name: "0.3: Variables & Basic Equations", url: "lesson:foundation:ch0-3" },
                        { name: "0.4: The Coordinate Plane", url: "lesson:foundation:ch0-4" },
                        { name: "📝 Foundation Mastery Check", url: "lesson:foundation:ch0-rev" }
                    ],
                    examples: [],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Fractions",
                                question: "What is $\\frac{1}{2} + \\frac{1}{3}$?",
                                options: ["$\\frac{2}{5}$", "$\\frac{5}{6}$", "$\\frac{1}{6}$", "$\\frac{2}{6}$"],
                                answer: "$\\frac{5}{6}$",
                                explanation: "Find common denominator: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$"
                            },
                            {
                                title: "Level 2: PEMDAS",
                                question: "$3 + 2 \\times 4^2$ = ?",
                                options: ["80", "35", "44", "100"],
                                answer: "35",
                                explanation: "Exponents first: $4^2=16$, then multiply: $2 \\times 16=32$, finally add: $3+32=35$"
                            },
                            {
                                title: "Level 3: Equations",
                                question: "If $2x + 5 = 13$, what is $x$?",
                                options: ["x = 4", "x = 9", "x = 6", "x = 3"],
                                answer: "x = 4",
                                explanation: "$2x = 8 \\rightarrow x = 4$"
                            }
                        ]
                    }
                }
            ]
        },
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
                { name: "Chapter 1-5 Formula Sheet", path: "curriculum/algebra2/formulas.pdf" },
                { name: "Exam: Functions Introduction", path: "curriculum/algebra2/Alg2 - Functions Introduction.pdf" },
                { name: "Exam: Functions Composition", path: "curriculum/algebra2/Algbera Two - Functions Composition.pdf" },
                { name: "Regents 2025: Part 1 (Q1-24) Mastery", path: "curriculum/algebra2/algtwo-82025-exam.pdf" }
            ],
            difficulty: "intermediate",
            units: [

                {
                    title: "Ch 1: Tools of Algebra",
                    insight: "Foundations: Mastery of axioms allows you to manipulate any expression without fear. Focus on the 'Why' behind the distributive rule.",
                    topics: ["1.1-1.3 Real Numbers", "1.4-1.6 Equations", "1.7 Absolute Value"],
                    lectures: [
                        { name: "1.1: Real Numbers & Operations", url: "lesson:algebra2:ch1-1", insight: "Real Numbers: Irrational numbers like $\\pi$ never repeat or terminate. Think of them as infinite unique data streams." },
                        { name: "1.2: Algebraic Expressions", url: "lesson:algebra2:ch1-2" },
                        { name: "1.3: Solving Linear Equations", url: "lesson:algebra2:ch1-3" },
                        { name: "1.4: Rewriting Formulas", url: "lesson:algebra2:ch1-4" },
                        { name: "1.5/1.6: Word Problems & Models", url: "lesson:algebra2:ch1-5" },
                        { name: "1.7: Absolute Value Equations", url: "lesson:algebra2:ch1-7", insight: "Absolute Value: $|x-a| < d$ means the 'distance' between x and a is less than d. It's a range, not just a number!" },
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "Why is $a \\cdot 0 = 0$ in the formal system of Algebra?",
                                options: ["It's just a definition", "Consequence of Distributive Property", "Inverse Identity", "Associative Law"],
                                answer: "It",
                                explanation: "Formal proofs show that multiplying by zero is a result of distributing across an identity ($0+0$)."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Solve for $x$: $3(x - 5) = 2x + 4$.",
                                options: ["x = 19", "x = 9", "x = 1", "x = 11"],
                                answer: "x = 19",
                                explanation: "$3x - 15 = 2x + 4 \\rightarrow x = 19$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Identify the error in this sequence: $|x + 5| = -2 \\rightarrow x + 5 = -2$ or $x + 5 = 2$.",
                                answer: "The equation has no solution because the absolute value (distance) cannot be negative.",
                                template: "The error is... Therefore, the solution set is..."
                            },
                            {
                                title: "Level 4: Advanced Analysis",
                                question: "What is the inverse of $f(x) = 2x + 3$?",
                                answer: "$f^{-1}(x) = (x-3)/2$",
                                options: ["$f^{-1}(x) = (x-3)/2$", "$f^{-1}(x) = 2x - 3$", "$f^{-1}(x) = x/2 - 3$"],
                                explanation: "Swap $x$ and $y$: $x = 2y + 3 \\rightarrow y = (x-3)/2$."
                            }
                        ]
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
                        { name: "2.9: Chapter 2 Review Challenge", url: "lesson:algebra2:ch2-rev" },
                        { name: "📝 Exam Prep: Functions Intro", url: "curriculum/algebra2/Alg2 - Functions Introduction.pdf", type: "pdf" },
                        { name: "📝 Exam Prep: Composition Mastery", url: "curriculum/algebra2/Algbera Two - Functions Composition.pdf", type: "pdf" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The One-to-One Challenge",
                            problem: "Given $f(x) = x^2$ with domain $\\mathbb{R}$, does it have an inverse? If not, how do we restrict the domain to make it invertible?",
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "If $f(x)$ is a function, how many unique outputs can it have for a single input $x$?",
                                options: ["Zero", "Exactly One", "At least One", "Infinite"],
                                answer: "$f^{-1}(x) = (x-3)/2$",
                                explanation: "Determinism is the core of functions. One input must map to exactly one output."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Describe the shift in $y = |x - 4| + 5$.",
                                options: ["Left 4, Up 5", "Right 4, Up 5", "Right 4, Down 5", "Left 4, Down 5"],
                                answer: "Right 4, Up 5",
                                explanation: "Horizontal shifts are opposite ($x-h$), vertical shifts are direct ($+k$)."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why $f(x) = x^2$ is not invertible on the domain of all real numbers.",
                                answer: "It fails the horizontal line test; multiple inputs (like 2 and -2) map to the same output (4).",
                                template: "Because the function maps... to... it is not... and thus preserves no inverse."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "If a system of two lines is 'Consistent and Dependent', what does this mean geometrically?",
                                options: ["Lines are parallel", "Lines intersect at one point", "Lines are identical/overlap", "Lines are perpendicular"],
                                answer: "Lines are identical/overlap",
                                explanation: "Dependent systems mean the equations are redundant, representing the same line."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "In Linear Programming, why do we only check the vertices of the feasible region?",
                                options: ["Because it's easier", "Maximum/Minimum always occurs at a corner", "Inside points are not allowed", "Boundaries don't matter"],
                                answer: "Because it",
                                explanation: "The Vertex Principle states that optimization occurs at the boundaries/corners of constraints."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain what an 'Inconsistent' system represents in terms of real-world constraints.",
                                answer: "It represents contradictory constraints (e.g., $x>10$ and $x<5$) that can never be satisfied simultaneously.",
                                template: "An inconsistent system implies... which means that the constraints... therefore..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 4: Matrices",
                    insight: "Matrices: You are manipulating whole spatial dimensions here. Visualize matrices as vectors moving around.",
                    intuition: "Matrices are the data structures of the modern world. They bridge the gap between simple variables and high-dimensional AI architecture.",
                    topics: ["4.1 Data Organization", "4.2 Matrix Operations", "4.3 Multiplication", "4.4 Geometric Transformations", "4.5 Determinants", "4.6 Inverses", "4.7 Systems Solving"],
                    lectures: [
                        { name: "4.1: Organising Data into Matrices", url: "lesson:algebra2:ch4-1", insight: "Matrix Addition: Only matrices of the SAME dimensions can be added. It's like adding arrays element-by-element in code." },
                        { name: "4.2: Matrix Multiplication", url: "lesson:algebra2:ch4-2", insight: "$A \\cdot B$ is NOT the same as $B \\cdot A$. Order matters deeply in linear transformations!" },
                        { name: "4.3: Determinants & Cramer's Rule", url: "lesson:algebra2:ch4-3", insight: "Determinants: If $det(A) = 0$, you've lost information. The transformation is destructive/singular." },
                        { name: "4.4: Visualizing Linear Transformations", url: "lesson:algebra2:ch4-4" },
                        { name: "4.5: Inverse Matrices", url: "lesson:algebra2:ch4-5" },
                        { name: "4.6: Identity & Inverse Matrices", url: "lesson:algebra2:ch4-6" },
                        { name: "4.7: 3x3 Determinants & Volume", url: "lesson:algebra2:ch4-7" },
                        { name: "4.8: Review Challenge", url: "lesson:algebra2:ch4-rev" },
                        { name: "💡 Competition Tip: Cramer's Rule", url: "#", insight: "For a system $AX=B$, if $det(A) \neq 0$, the unique solution is $x_i = det(A_i)/det(A)$. It's the most efficient way to solve specific variables in high-speed competitions!" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Matrix Multiplier",
                            problem: "Compute $AB$ where $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$. Show the dot products.",
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
                            problem: "Find the inverse of Matrix $M = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$. Check if det $\\neq$ 0.",
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
                            problem: "How does the matrix $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ transform a unit square $(1 \\times 1)$?",
                            steps: [
                                "Calculate Determinant: $\\det = (2)(3) - (0)(0) = 6$.",
                                "Physical result: The square's width is doubled (2) and its height is tripled (3).",
                                "Area change: The new area is $2 \\times 3 = 6$ square units. The determinant correctly predicted the 6-fold scaling of area.",
                                "Final Matrix: $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$."
                            ],
                            intuition: "A matrix is a physical distortion of space. The determinant is the 'Magnification' factor of that distortion."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "If the determinant of a matrix is 0, what does this tell us about its inverse?",
                                options: ["Inverse is zero", "Determinant is irrelevant", "No unique inverse exists", "Inverse is its transpose"],
                                answer: "No unique inverse exists",
                                explanation: "A zero determinant means the transformation has collapsed space, making it irreversible."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Compute the determinant of $M = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$.",
                                options: ["10", "14", "12", "7"],
                                answer: "10",
                                explanation: "$(3)(4) - (2)(1) = 12 - 2 = 10$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why matrix multiplication $AB$ is not equal to $BA$ using the concept of transformations.",
                                answer: "Transformations like rotating then shifting produce different results than shifting then rotating.",
                                template: "Since matrices represent... changing the order... results in... just like in..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 5: Quadratic Equations",
                    intuition: "Curves govern the physical world. From gravity to growth, quadratics provide the parabolic logic for modeling motion and optimization.",
                    vizConfig: {
                        expressions: ["y = a(x - h)^2 + k", "a = 1", "h = 0", "k = 0"],
                        bounds: { left: -10, right: 10, bottom: -10, top: 10 }
                    },
                    topics: ["5.1 Parabolas", "5.3 Factoring", "5.4 Complex Numbers", "5.5 Completing Square", "5.6 Quadratic Formula", "5.8 Systems"],
                    lectures: [
                        { name: "5.1/5.2: Vertex & Intercept Form", url: "lesson:algebra2:ch5-1" },
                        { name: "5.3: Factoring Mastery", url: "lesson:algebra2:ch5-3" },
                        { name: "5.4: Complex Numbers Intro", url: "lesson:algebra2:ch5-4" },
                        { name: "5.5: Completing the Square", url: "lesson:algebra2:ch5-5" },
                        { name: "5.6: The Quadratic Formula", url: "lesson:algebra2:ch5-6" },
                        { name: "5.7: Quadratic Inequalities", url: "lesson:algebra2:ch5-7" },
                        { name: "5.8: Linear-Quadratic Systems", url: "lesson:algebra2:ch5-8" },
                        { name: "5.rev: Chapter 5 Review", url: "lesson:algebra2:ch5-rev" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Parabolic Orbit",
                            problem: "A satellite dish vertex is at $(0,0)$ and the focus is at $(0, 2)$. Write the equation in vertex form.",
                            steps: [
                                "Identify parameters: $(h, k) = (0,0)$. Focus is $p=2$ units above vertex.",
                                "Use the geometric formula: $y = a(x - h)^2 + k$.",
                                "Find $a$: Since $p = 1/(4a)$, we have $2 = 1/(4a) \\rightarrow 8a = 1 \\rightarrow a = 1/8$.",
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
                                "Apply formula: $x = \\frac{4 \\pm \\sqrt{-36}}{2} = \\frac{4 \\pm 6i}{2}$.",
                                "Roots: $2 + 3i$ and $2 - 3i$.",
                                "Geometry: These points are symmetric reflections across the Real (X) axis."
                            ],
                            intuition: "Complex roots always come in pairs (conjugates) because the physical parabola is symmetric. They represent the roots of an equation that 'misses' the X-axis."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What physical property ensures that all parallel light rays reflect through the Focus of a parabola?",
                                options: ["Linear Reflection", "Parabolic Optical Property", "Symmetry Principle", "Inverse Square Law"],
                                answer: "Parabolic Optical Property",
                                explanation: "The geometry of a parabola forces all parallel incoming lines to converge at a single point, the focus."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "If the discriminant $D = b^2 - 4ac$ is negative, what is the nature of the roots?",
                                options: ["One Real Root", "Two Real Roots", "Two Complex Roots", "No Roots"],
                                answer: "Two Complex Roots",
                                explanation: "A negative discriminant means the parabola never touches the X-axis, resulting in complex solutions."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Using Vieta's Formulas, explain why the product of roots for $3x^2 - 12x + 15 = 0$ is $5$.",
                                answer: "The product of roots is $c/a = 15/3 = 5$.",
                                template: "According to Vieta's Formulas, the product is... By substituting... we get..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 6: Polynomials",
                    insight: "Polynomials: Every root $(x-r)$ is a factor. The Fundamental Theorem guarantees N roots for degree N. No exceptions!",
                    intuition: "Polynomials are the DNA of functional analysis. From the behavior of global temperatures to the trajectory of satellites, understanding roots and degree is essential for predicting complex systems.",
                    topics: ["6.1 Degree & End Behavior", "6.2 Remainder Theorem", "6.3 Synthetic Division", "6.4 Advanced Factoring", "6.6 Rational Root Theorem", "6.7 Fundamental Theorem"],
                    lectures: [
                        { name: "6.1: Polynomial Essentials", url: "lesson:algebra2:ch6-1" },
                        { name: "6.2: Polynomials & Linear Factors", url: "lesson:algebra2:ch6-2" },
                        { name: "6.3: Synthetic Division", url: "lesson:algebra2:ch6-3", insight: "Synthetic Division: This is a specialized optimization of Long Division. It works ONLY for divisors like $(x - c)$." },
                        { name: "6.4: Factoring Polynomials", url: "lesson:algebra2:ch6-4" },
                        { name: "6.5/6.6: Roots & Rational Root Theorem", url: "lesson:algebra2:ch6-5" },
                        { name: "6.7: Fundamental Theorem of Algebra", url: "lesson:algebra2:ch6-7" },
                        { name: "6.rev: Chapter 6 Review", url: "lesson:algebra2:ch6-rev" }
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "As $x \\to \\infty$, which term in $f(x) = 3x^4 - 2x^3 + 10x$ determines the end behavior?",
                                options: ["3x^4", "-2x^3", "10x", "All of them"],
                                answer: "3x^4",
                                explanation: "The leading term dominates as x becomes large; all other terms become insignificant in comparison."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "If $f(2) = 0$ for a polynomial $f(x)$, what does the Factor Theorem guarantee?",
                                options: ["(x+2) is a factor", "(x-2) is a factor", "x=0 is a root", "f(x) has no real roots"],
                                answer: "(x-2) is a factor",
                                explanation: "If substituting $c$ results in zero, then $(x-c)$ MUST be a linear factor of the polynomial."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why complex roots of polynomials with real coefficients must occur in conjugate pairs.",
                                answer: "To maintain real coefficients, the 'i' terms must cancel out during expansion $(x-(a+bi))(x-(a-bi))$.",
                                template: "Because the coefficients are real... the product of... must result in... which only happens if..."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "Why must we verify solutions after squaring both sides of a radical equation?",
                                options: ["To find more answers", "Because squaring can create false results", "To simplify the math", "It's not actually necessary"],
                                answer: "Because squaring can create false results",
                                explanation: "Squaring can create 'false positives' that solve the squared equation but fail the original radical's domain."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Rewrite $\\sqrt[3]{x^6}$ using rational exponents.",
                                options: ["x^2", "x^3", "x^18", "x^0.5"],
                                answer: "x^2",
                                explanation: "$x^{6/3} = x^2$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain the condition required for a function $f(x)$ to have an inverse function $f^{-1}(x)$.",
                                answer: "It must be one-to-one, passing the Horizontal Line Test, ensuring each output has a unique input.",
                                template: "For an inverse to exist as a function... it must satisfy... which means that..."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What does the Natural Log (ln) have as its base?",
                                options: ["10", "2", "e (~2.718)", "0"],
                                answer: "e (~2.718)",
                                explanation: "The natural logarithm, ln(x), is defined as the logarithm with base e."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Using the Rule of 72, if an investment grows at 6% annually, how long does it take to double?",
                                options: ["6 years", "12 years", "10 years", "72 years"],
                                answer: "12 years",
                                explanation: "$72 / 6 = 12$ years. This is a common heuristic for exponential growth."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why $\\log_b(x)$ is undefined for $x \\le 0$ using its relationship to exponents.",
                                answer: "Since $b^y$ is always positive for any real $y$, there is no $y$ such that $b^y \\le 0$.",
                                template: "A logarithm is the inverse of... Since an exponential function with base $b > 0$... it follows that..."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What happens to the graph of a rational function when a factor cancels out from both the numerator and denominator?",
                                options: ["A Vertical Asymptote is created", "A Horizontal Asymptote is created", "A Hole (Removable Discontinuity) is created", "The graph becomes a straight line with no gaps"],
                                answer: "A Hole (Removable Discontinuity) is created",
                                explanation: "When a factor cancels out, the function is still undefined at that point, but the graph doesn't approach infinity; it simply has a missing point called a hole."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Find the Horizontal Asymptote of $f(x) = \\frac{4x^2 + 1}{2x^2 - 3}$.",
                                options: ["y = 0", "y = 2", "y = 4", "None"],
                                answer: "y = 2",
                                explanation: "The degrees are equal; divide leading coefficients: $4/2 = 2$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain the logical difference between a Hole and a Vertical Asymptote.",
                                answer: "A hole is a removable point discontinuity, while an asymptote is a fundamental limit where the function values explode to infinity.",
                                template: "Algebraically, a hole is caused by... while a vertical asymptote is caused by... geometrically, this means..."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "In Kepler's Laws, what geometric shape do planets follow for their orbits around the Sun?",
                                options: ["Perfect Circles", "Parabolas", "Ellipses", "Hyperbolas"],
                                answer: "Ellipses",
                                explanation: "Kepler's First Law states that planets move in elliptical orbits with the Sun at one of the two foci."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "What type of conic is represented by $x^2 - 4y^2 + 10x = 0$?",
                                options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
                                answer: "Hyperbola",
                                explanation: "The minus sign between squared terms ($A=1, C=-4$) indicates a hyperbola."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain how a spacecraft uses a Hyperbolic trajectory for a 'Slingshot' maneuver.",
                                answer: "The open curve of the hyperbola allowed the craft to enter a planet's gravity well, gain kinetic energy, and 'escape' with higher velocity.",
                                template: "Because a hyperbola is an open curve... the spacecraft is not captured by gravity... instead, it..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 11: Sequences & Series",
                    intuition: "Nature is built on patterns. From the Fibonacci sequence to compound interest, sequences define how discrete steps build into continuous structures.",
                    vizConfig: {
                        expressions: ["y = a_1 + (x-1)d", "a_1 = 1", "d = 1", "y = a_1(r)^{(x-1)}", "r = 1.2"],
                        bounds: { left: 0, right: 10, bottom: 0, top: 20 }
                    },
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
                                "Substitute: $S = \\frac{100(1 + 100)}{2} = 50 \\cdot 101$.",
                                "Result: 5,050."
                            ],
                            intuition: "Arithmetic sequences are the 'Linear Functions' of the discrete world. By pairing terms, we reduce a complex addition problem into a single multiplication."
                        },
                        {
                            title: "Example 2: Geometric Growth",
                            problem: "Find the 10th term of the sequence $3, 6, 12, \\dots$.",
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
                            problem: "Find the sum of the infinite series $10 + 5 + 2.5 + \\dots$.",
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "Under what condition does an infinite geometric series converge to a finite number?",
                                options: ["When r > 1", "When r = 1", "When |r| < 1", "When a1 = 0"],
                                answer: "When |r| < 1",
                                explanation: "An infinite geometric series converges if and only if the absolute value of the common ratio is strictly less than 1, meaning the terms get progressively smaller."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Find the 5th term of a geometric sequence where $a_1 = 3$ and $r = -2$.",
                                options: ["48", "-48", "96", "-32"],
                                answer: "48",
                                explanation: "$a_5 = 3 \\cdot (-2)^4 = 3 \\cdot 16 = 48$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why an infinite *Arithmetic* series with $d \\ne 0$ never converges.",
                                answer: "Because the terms themselves do not approach zero; they either grow to positive or negative infinity, making the running total unbounded.",
                                template: "For a series to converge, its terms must... In an arithmetic sequence... which means the sum..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 12: Probability & Statistics",
                    intuition: "Probability is the logic of uncertainty. It is the engine of Artificial Intelligence, governing how machines learn from data (Bayesian Logic) and how we make decisions under risk.",
                    vizConfig: {
                        expressions: ["y = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}", "\\mu = 0", "\\sigma = 1"],
                        bounds: { left: -5, right: 5, bottom: 0, top: 1 }
                    },
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What does the 'Empirical Rule' state about data within 2 standard deviations of the mean in a normal distribution?",
                                options: ["68% of data", "95% of data", "99.7% of data", "50% of data"],
                                answer: "95% of data",
                                explanation: "The empirical rule (68-95-99.7) states that approximately 95% of observations in a normal distribution fall within two standard deviations of the mean."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "A value has a Z-score of -1.5. If the mean is 10 and standard deviation is 2, what is the value?",
                                options: ["8.5", "7", "11.5", "13"],
                                answer: "7",
                                explanation: "$x = \\mu + z\\sigma = 10 + (-1.5)(2) = 10 - 3 = 7$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why a 'Self-Selected' sample often leads to selection bias.",
                                answer: "Because individuals with strong opinions are more likely to volunteer, making the sample unrepresentative of the neutral general population.",
                                template: "In a self-selected sample... this creates bias because... therefore the results..."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 13: Periodic Functions & Trigonometry",
                    intuition: "Periodic functions are the heartbeat of the universe. They model everything that repeats, from sound waves and light to the cycles of the economy and the rotation of engines.",
                    vizConfig: {
                        expressions: ["y = a \\sin(b(x - h)) + k", "a = 1", "b = 1", "h = 0", "k = 0"],
                        bounds: { left: -6.28, right: 6.28, bottom: -5, top: 5 }
                    },
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
                        { name: "13.rev: The Wave Engineer", url: "lesson:algebra2:ch13-rev" }
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
                                "Use the formula: $s = r \\theta$.",
                                "Identify $r = 10$ and $\\theta = 3\\pi/2$.",
                                "Calculate: $s = 10 \\cdot (3\\pi/2) = 15\\pi$.",
                                "Result: $\\approx 47.12$ cm."
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "If two identical sine waves are $180^{\\circ}$ ($\\pi$ radians) out of phase, what happens when they are added together?",
                                options: ["They double in amplitude", "They cancel each other out", "The frequency doubles", "Nothing changes"],
                                answer: "They cancel each other out",
                                explanation: "Destructive interference occurs when two waves are 180 degrees out of phase, as the peak of one aligns with the trough of the other."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Convert $5\\pi/6$ radians to degrees.",
                                options: ["120°", "150°", "210°", "300°"],
                                answer: "150°",
                                explanation: "$(5\\pi/6) \\cdot (180/\\pi) = 150°$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why the Period of $y = \\tan(x)$ is $\\pi$ instead of $2\\pi$.",
                                answer: "Because slopes of terminal rays repeat exactly every 180 degrees (half a circle) as they mirror in opposite quadrants.",
                                template: "The tangent function represents the ratio... which geometrically is... since these ratios repeat when..."
                            }
                        ]
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
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "Which identity is a direct consequence of dividing the primary Pythagorean identity (sin²θ + cos²θ = 1) by cos²θ?",
                                options: ["1 + cot²θ = csc²θ", "1 + tan²θ = sec²θ", "sin(2θ) = 2sinθcosθ", "cos(2θ) = 1 - 2sin²θ"],
                                answer: "1 + tan²θ = sec²θ",
                                explanation: "Dividing sin²θ + cos²θ = 1 by cos²θ yields (sin²θ/cos²θ) + (cos²θ/cos²θ) = 1/cos²θ, which simplifies to tan²θ + 1 = sec²θ."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Simplify $(1 - \\cos^2 \\theta) / \\sin \\theta$.",
                                options: ["1", "sin θ", "cos θ", "tan θ"],
                                answer: "sin θ",
                                explanation: "$(1 - \\cos^2 \\theta) = \\sin^2 \\theta$. So $\\sin^2 \\theta / \\sin \\theta = \\sin \\theta$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain the 'Refactoring' strategy in proving a complex trigonometric identity.",
                                answer: "It involves substituting primary units (sin/cos) and simplifying common denominators until both sides converge to the same logical state.",
                                template: "When proving an identity, we treat one side as... and the other as... through a series of substitutions like..."
                            }
                        ]
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
                                "Find the prime factorization of 12! using Legendre's Formula for each prime $p \\le 12$ ($2, 3, 5, 7, 11$).",
                                "For $p=2$: $\\lfloor 12/2 \\rfloor + \\lfloor 12/4 \\rfloor + \\lfloor 12/8 \\rfloor = 6+3+1 = 10$. Exponent is 10.",
                                "For $p=3$: $\\lfloor 12/3 \\rfloor + \\lfloor 12/9 \\rfloor = 4+1 = 5$. Exponent is 5.",
                                "Repeat for 5 (exp 2), 7 (exp 1), 11 (exp 1).",
                                "$12! = 2^{10} \\cdot 3^{5} \\cdot 5^{2} \\cdot 7^{1} \\cdot 11^{1}$.",
                                "Calculate $\\tau(12!)$: $(10+1)(5+1)(2+1)(1+1)(1+1) = 11 \\cdot 6 \\cdot 3 \\cdot 2 \\cdot 2 = 792$."
                            ],
                            intuition: "Legendre's Formula is the 'Prime Decompiler'. It tells you exactly how many times a prime is 'invoked' inside a factorial."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "If a polynomial $x^3 - 7x^2 + 14x - 8 = 0$ has roots $a, b, c$, what is the sum of its roots?",
                                options: ["7", "-7", "14", "8"],
                                answer: "7",
                                explanation: "According to Vieta's Formulas, for a cubic $ax^3 + bx^2 + \\dots$, the sum of roots is $-b/a$. Here, $-(-7)/1 = 7$."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Find the product of the roots for $x^2 - 10x + 24 = 0$.",
                                options: ["10", "-10", "24", "-24"],
                                answer: "24",
                                explanation: "Vieta's Formula: Product of roots = $c/a = 24/1 = 24$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain the Pigeonhole Principle using a real-world server analogy.",
                                answer: "If you have $n$ servers and $n+1$ requests, at least one server MUST handle more than one request.",
                                template: "The principle states that if... objects are placed in... containers... then it is mathematically certain that..."
                            }
                        ]
                    }
                },
                {
                    title: "Sneak Peek: Calculus Zero",
                    insight: "Calculus: Every great derivative starts with a humble limit. Visualize the gap closing until it vanishes.",
                    intuition: "Before we measure static shapes (Geometry), we must learn to measure change itself. Welcome to the edge of infinity.",
                    topics: ["The Tangent Problem", "The Area Problem", "Limits at Infinity", "Derivative Intuition"],
                    lectures: [
                        { name: "Calc Intro: The Paradox of Zeno", url: "lesson:algebra2:ch_limits-1" },
                        { name: "Calc Intro: The Tangent Problem", url: "lesson:algebra2:ch_limits-2" },
                        { name: "Calc Intro: Visualizing Infinity", url: "lesson:algebra2:ch_limits-3" }
                    ],
                    examples: [
                        {
                            title: "Visualizing the Derivative",
                            problem: "Find the slope of the tangent line to $f(x) = x^2$ at $x = 3$.",
                            steps: [
                                "Set up the difference quotient: $\\lim_{h \\to 0} \\frac{(3+h)^2 - 3^2}{h}$.",
                                "Expand: $\\lim_{h \\to 0} \\frac{9 + 6h + h^2 - 9}{h}$.",
                                "Simplify: $\\lim_{h \\to 0} \\frac{6h + h^2}{h} = \\lim_{h \\to 0} (6 + h)$.",
                                "Evaluate the limit: As $h \\to 0$, $6+h = 6$.",
                                "The slope is exactly 6."
                            ],
                            intuition: "You aren't calculating $0/0$. You are calculating the value the fraction APPROACHES as $h$ becomes infinitely small. This is the 'Speedometer' of the function at that exact moment."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What does the limit $\\\\lim_{x \\\\to \\\\infty} \\\\frac{1}{x}$ equal?",
                                options: ["1", "$\\\\infty$", "0", "Undefined"],
                                answer: "0",
                                explanation: "As the denominator gets infinitely large, the value of the fraction gets infinitely small, approaching 0."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Evaluate $\\\\lim_{h \\\\to 0} (6 + h)$.",
                                options: ["0", "6", "h", "Undefined"],
                                answer: "6",
                                explanation: "Direct substitution: $6 + 0 = 6$."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain the 'Paradox of the Tangent' and how limits resolve it.",
                                answer: "Calculating slope at a single point yields $0/0$ (undefined). Limits allow us to find the value the slope *approaches* as the interval becomes infinitely small.",
                                template: "Normally, slope requires... points. At a single point... but by using limits... we find..."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 15: TJ Elite Master Challenge",
                    vizConfig: {
                        expressions: ["y = 2^{x+1}", "y = x^2 + 4"],
                        bounds: { left: -5, right: 10, bottom: -5, top: 20 }
                    },
                    topics: ["Non-linear Systems", "Signal Modeling", "AMC Logic Bridge"],
                    lectures: [
                        { name: "15.1: TJ EOC (End of Course) Replica", url: "lesson:final:final-u15-1" },
                        { name: "15.2: Elite Modeling Archive", url: "lesson:final:final-u15-2" },
                        { name: "15.3: Competition Logic (AMC/AIME)", url: "lesson:final:final-u15-3" },
                        { name: "15.4: 2024 Algebra 2 Mock Exam A", url: "lesson:final:final-u15-4" },
                        { name: "15.5: 2025 Predictive Master Test", url: "lesson:final:final-u15-5" },
                        { name: "🏆 2025 Regents Mastery Pack (Part 1)", url: "curriculum/algebra2/algtwo-82025-exam.pdf", type: "pdf" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What is the primary goal of modeling data with a regression function in Algebra 2?",
                                options: ["To find exact answers", "To find the line or curve of best fit", "To simplify the math", "To ignore outliers"],
                                answer: "To find the line or curve of best fit",
                                explanation: "Regression modeling aims to find the mathematical function that most accurately describes the trend in a real-world dataset."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Which value of the correlation coefficient (r) indicates the strongest linear relationship?",
                                options: ["0.5", "-0.1", "-0.92", "0.85"],
                                answer: "-0.92",
                                explanation: "The strength of a relationship is determined by the absolute value of r. $|-0.92| = 0.92$, which is the highest."
                            },
                            {
                                title: "Level 3: Mastery",
                                type: "justification",
                                question: "Explain why 'Elite Mastery' requires understanding both the mechanics and the intuition behind a mathematical model.",
                                answer: "Because mechanics allow for precision, while intuition allows for the application of those mechanics to complex, novel problems in engineering and science.",
                                template: "In the Elite 4.0 standard, understanding the 'why'... is essential because... whereas simply following steps..."
                            }
                        ]
                    },
                    examples: [
                        {
                            title: "Mock FRQ 1: Transcendental Intersections",
                            problem: "Solve $3^x = e^{2x} + 5$ and justify the number of solutions.",
                            steps: ["Analyze growth rates: $3 > e^2$ for large $x$?", "Calculate $e^2 \\approx 7.39$.", "Since $3 < 7.39$, the exponential $e^{2x}$ will eventually dominate.", "Graphical analysis: Left side grows slower than right.", "Conclusion: Intersections occur where the gap closes."],
                            intuition: "TJ exams test your ability to look past the symbols and evaluate the relative 'power' of functions."
                        },
                        {
                            title: "Mock FRQ 2: Matrix Transformation Rigor",
                            problem: "A transformation $A$ maps $(1, 0)$ to $(3, 4)$ and $(0, 1)$ to $(-4, 3)$. Does $A$ preserve area?",
                            steps: ["Construct matrix $A = \\begin{pmatrix} 3 & -4 \\\\ 4 & 3 \\end{pmatrix}$.", "Calculate determinant: $(3)(3) - (-4)(4) = 9 + 16 = 25$.", "Result: Area is scaled by 25x."],
                            intuition: "Matrices are the 'lenses' of geometry. The determinant tells you if the lens enlarges or shrinks the view."
                        }
                    ]
                }
            ]
        },
        {
            id: "precalc_ab",
            title: "AP Precalculus (The Bridge)",
            code: "MA3164",
            description: "Advanced functions, modeling, and trigonometry. The essential bridge that unifies Algebra 2 mechanics with Calculus concepts.",
            color: "#00d2ff",
            icon: "fas fa-project-diagram",
            insight: "AP Marathon: Justify every claim. On the AP Precalc exam, your argument is as important as your answer.",
            intuition: "Precalculus is not just 'Pre-Calculus'. It is the study of Change and Rate. It is where we stop studying static numbers and start studying dynamic systems.",
            local_resources: [],
            units: [
                {
                    title: "Unit 1: Polynomial & Rational (Change & Scale)",
                    insight: "Numerical Analysis: AP Precalculus prioritizes tables over graphs. If the rate of change is decreasing while y is increasing, the system is Concave Down. This is the seed of Calculus acceleration.",
                    topics: ["Rate of Change & Concavity", "Asymptotic Dominance", "Rational Singularities", "3-Step Continuity Protocol"],
                    lectures: [
                        { name: "1.1: Change & Concavity (Numerical)", url: "lesson:precalc:precalc-u1-1" },
                        { name: "1.2: The Battle of Scale (Big-O)", url: "lesson:precalc:precalc-u1-2" },
                        { name: "1.3: Rational Dynamics (Holes)", url: "lesson:precalc:precalc-u1-3" },
                        { name: "1.4: AP Continuity Mastery", url: "lesson:precalc:precalc-u1-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Scale Intuition",
                            problem: "In f(x) = 5x^3 - 1000x^2, which term determines the end behavior?",
                            steps: [
                                "Identify the leading term: $5x^3$.",
                                "Rule: The highest power dictates the limit as $x \\to \\infty$.",
                                "Conclude: $5x^3$ wins."
                            ],
                            intuition: "The 'Dictator' always wins at scale."
                        },
                        {
                            title: "Level 2: The Drill Bit",
                            problem: "Given f(2)=10, f(4)=15, f(6)=22. Is the function concave up or down?",
                            steps: [
                                "ROC [2,4]: (15-10)/2 = 2.5",
                                "ROC [4,6]: (22-15)/2 = 3.5",
                                "Compare: 3.5 > 2.5 (Increasing ROC)",
                                "Conclusion: Level 2 Mastery -> Concave Up."
                            ],
                            intuition: "Numerical verification is faster than graphing."
                        },
                        {
                            title: "Practice FRQ (Level 3): The Mastery Justification",
                            problem: "Given a table: (0, 10), (2, 18), (4, 24). Justify the concavity of f(x) on [0, 4].",
                            steps: [
                                "Calculate ROC [0,2]: (18-10)/(2-0) = 4.",
                                "Calculate ROC [2,4]: (24-18)/(4-2) = 3.",
                                "Compare: Since the ROC is decreasing (4 > 3) on the interval, f(x) is Concave Down.",
                                "Justification: 'The average rate of change is decreasing, therefore the function is concave down.'"
                            ],
                            intuition: "Math in AP Precalc is an argument. Use the 'Because... Therefore' structure."
                        }
                    ],
                    quiz: {
                        question: "Level 3 Mastery: As x approachs infinity, a degree 6 polynomial with a negative leading coefficient will...",
                        options: ["Approach infinity", "Approach negative infinity", "Approach zero", "Oscillate"],
                        answer: "Approach negative infinity",
                        explanation: "Even degree means arms point the same way. Negative leading coefficient means both arms point DOWN."
                    }
                },
                {
                    title: "Unit 2: Exponential & Logarithmic (Mastery)",
                    insight: "Semi-logplots: Logs are magnitude compressors. If data looks like a curve in Cartesian but a line in Semi-log, it is exponential. Use residual plots to validate your claim.",
                    topics: ["Logistic Inflection Points", "Semi-Log Linearization", "Residual Plot Validation", "Inverse Composition"],
                    lectures: [
                        { name: "2.1: The Magnitude Compressor", url: "lesson:precalc:precalc-u2-1" },
                        { name: "2.2: Logistic Dynamics (L/2)", url: "lesson:precalc:precalc-u2-2" },
                        { name: "2.3: Semi-Log Analysis", url: "lesson:precalc:precalc-u2-3" },
                        { name: "2.4: Model Validation (Residuals)", url: "lesson:precalc:precalc-u2-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Logistic Capacity",
                            problem: "In f(t) = 5000 / (1 + 4e^-0.2t), what is the Carrying Capacity?",
                            steps: [
                                "Identify the numerator $L$.",
                                "Conclude: L = 5000.",
                                "Meaning: The population will never exceed 5000."
                            ],
                            intuition: "The numerator is the 'ceiling' of the system."
                        },
                        {
                            title: "Level 2: The Inflection Point",
                            problem: "For the same model (L=5000), at what population value is the growth rate maximized?",
                            steps: [
                                "Mastery Rule: Fastest growth occurs at $y = L/2$.",
                                "Calculate: $5000 / 2 = 2500$.",
                                "Conclude: Growth is fastest when 2500 people are infected/aware."
                            ],
                            intuition: "Halfway to the ceiling is where the 'S-curve' is steepest."
                        },
                        {
                            title: "Practice FRQ (Level 3): Residual Verdict",
                            problem: "A student transforms data and sees a U-shaped pattern in the residual plot. Justify if the model is appropriate.",
                            steps: [
                                "Observation: The residuals show a non-random pattern (a curve).",
                                "Rule: A good model MUST have random scatter.",
                                "Justification: 'Since the residual plot shows a clear curved pattern, the chosen model is NOT appropriate for the data.'"
                            ],
                            intuition: "Patterns in residuals mean you missed something in the original data."
                        }
                    ],
                    quiz: {
                        question: "Level 3 Mastery: If log(y) = 2x + 1, what is the base 'b' of the original exponential model y = a*b^x?",
                        options: ["b = 1", "b = 2", "b = 10^2", "b = e^2"],
                        answer: "b = 10^2",
                        explanation: "When log(y) is base 10 (common log), the slope of the linear form is log(b). So log(b) = 2 -> b = 10^2 = 100."
                    }
                },
                {
                    title: "Unit 3: Trigonometric & Polar (Mastery)",
                    insight: "Harmonic Dynamics: Trig is not about triangles; it's about circular motion. Polar coordinates allow us to model spirals and orbits where x-y grids fail.",
                    topics: ["Radian Logic", "Harmonic Modeling", "Inverse Trig Prisons", "Polar Rate of Change"],
                    lectures: [
                        { name: "3.1: The Rotation Generator", url: "lesson:precalc:precalc-u3-1" },
                        { name: "3.2: Inverse Trig (Domains)", url: "lesson:precalc:precalc-u3-2" },
                        { name: "3.3: Polar Dynamics", url: "lesson:precalc:precalc-u3-3" },
                        { name: "3.4: Trig Refactoring", url: "lesson:precalc:precalc-u3-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Midline Mastery",
                            problem: "A tide heights oscillate between 2m and 10m. Find the amplitude and midline.",
                            steps: [
                                "Midline (d) = (Max + Min)/2 = (10+2)/2 = 6.",
                                "Amplitude (a) = Max - d = 10 - 6 = 4.",
                                "Conclude: d=6, a=4."
                            ],
                            intuition: "The midline is the 'average' sea level."
                        },
                        {
                            title: "Level 2: Polar Shift",
                            problem: "Convert the polar point (4, 2pi/3) to Cartesian (x, y).",
                            steps: [
                                "x = r*cos(theta) = 4*cos(2pi/3) = 4*(-0.5) = -2.",
                                "y = r*sin(theta) = 4*sin(2pi/3) = 4*(sqrt(3)/2) = 2sqrt(3).",
                                "Conclude: (-2, 2sqrt(3))."
                            ],
                            intuition: "2pi/3 is in Quadrant II, so x must be negative."
                        },
                        {
                            title: "Practice FRQ (Level 3): Polar Direction",
                            problem: "If r = 3 - 2sin(theta), is the curve moving toward or away from the pole at theta = pi/2?",
                            steps: [
                                "Calculate dr/d(theta): derivative of -2sin(theta) is -2cos(theta).",
                                "Evaluate at pi/2: -2cos(pi/2) = 0.",
                                "Analyze: At exactly pi/2, the distance is momentarily constant.",
                                "Further Check: If we approach pi/2, r decreases from 3 to 1. Since r is decreasing, it is moving TOWARD the pole."
                            ],
                            intuition: "Distance change in Polar is always about the pole (0,0)."
                        }
                    ],
                    quiz: {
                        question: "Level 3 Mastery: What is the value of arcsin(sin(5pi/4))?",
                        options: ["5pi/4", "pi/4", "-pi/4", "-5pi/4"],
                        answer: "-pi/4",
                        explanation: "sin(5pi/4) = -sqrt(2)/2. However, arcsin is restricted to [-pi/2, pi/2]. The equivalent angle in that range is -pi/4."
                    }
                },
                {
                    title: "Unit 4: Parameters, Vectors & Matrices (Mastery)",
                    insight: "Calculus-Lite: This unit bridges the gap between geometry and motion. Parametrics allow us to decouple x and y, which is the heart of multi-variable calculus.",
                    topics: ["Parametric Motion", "Vector Decomposition", "Matrix Transformations", "Linear Systems"],
                    lectures: [
                        { name: "4.1: Parametric Mastery", url: "lesson:precalc:precalc-u4-1" },
                        { name: "4.2: Vector Mastery", url: "lesson:precalc:precalc-u4-2" },
                        { name: "4.3: Matrix Mastery", url: "lesson:precalc:precalc-u4-3" },
                        { name: "4.4: The Linear Bridge", url: "lesson:precalc:precalc-u4-4" }
                    ],
                    examples: [
                        {
                            title: "Practice FRQ: Orthogonal Forces",
                            problem: "Calculate the dot product of $\\langle 3, 2 \\rangle$ and $\\langle -2, 3 \\rangle$. What does this imply?",
                            steps: [
                                "Dot product: $(3)(-2) + (2)(3) = -6 + 6 = 0$.",
                                "Conclusion: The vectors are Orthogonal (90 degrees apart).",
                                "In Physics terms: They are completely independent forces."
                            ],
                            intuition: "Zero dot product = zero influence of one vector on the other."
                        },
                        {
                            title: "Level 1: Parametric Time",
                            problem: "If x = 2t + 1 and y = t^2 - 1, find the position at t = 3.",
                            steps: [
                                "Substitute t=3 into x: x = 2(3) + 1 = 7.",
                                "Substitute t=3 into y: y = (3)^2 - 1 = 8.",
                                "Conclude: (7, 8)."
                            ],
                            intuition: "Think of t as a slider that determines where the particle lands."
                        },
                        {
                            title: "Level 2: The Path Equation",
                            problem: "Eliminate the parameter for x = cos(t), y = sin(t).",
                            steps: [
                                "Use identity: x^2 + y^2 = (cos t)^2 + (sin t)^2.",
                                "Apply identity: x^2 + y^2 = 1.",
                                "Conclude: The path is a circle with radius 1."
                            ],
                            intuition: "Collapsing time reveals the 'footprint' of the motion."
                        },
                        {
                            title: "Practice FRQ (Level 3): Transformation Mastery",
                            problem: "A matrix transforms vector v = [1, 2] to v' = [2, 4]. What is the determinant if the matrix squashes space into the line y=2x?",
                            steps: [
                                "Identify the squash: Since all outputs land on one line, space is collapsed.",
                                "Det Rule: A collapsed space has a determinant of 0.",
                                "Conclude: det(A) = 0.",
                                "Justification: 'Because the transformation is not one-to-one and maps R^2 to a line, the matrix is singular (det=0).'"
                            ],
                            intuition: "Squashed space = Zero Determinant = No Inverse."
                        }
                    ],
                    quiz: {
                        question: "Level 3 Mastery: If vector u = [2, 3] and v = [-3, 2], what is their dot product?",
                        options: ["0 (Orthogonal)", "1", "12", "13"],
                        answer: "0 (Orthogonal)",
                        explanation: "Dot Product = (2*-3) + (3*2) = -6 + 6 = 0. This means the vectors are perfectly perpendicular."
                    }
                },
                {
                    title: "Unit 5: Calculus Prerequisites (The Limit Bridge)",
                    insight: "Limits & Bridge: We are approaching the edge of Calculus. A limit is a destination, even if the bridge is broken (hole).",
                    topics: ["Continuity", "Rates of Change", "Limit Notation"],
                    lectures: [
                        { name: "5.1: The Limit Concept", url: "lesson:precalc:precalc-u5-1" },
                        { name: "5.2: Continuity Defined", url: "lesson:precalc:precalc-u5-2" },
                        { name: "5.3: Instantaneous Rate of Change", url: "lesson:precalc:precalc-u5-3" }
                    ],
                    examples: [
                        {
                            title: "Ex 1: Removable Discontinuity",
                            problem: "Evaluate $\\lim_{x\\to 2} \\frac{x^2-4}{x-2}$.",
                            steps: ["Factor: $(x-2)(x+2)/(x-2)$.", "Cancel $(x-2)$.", "Eval $2+2 = 4$."],
                            intuition: "We repair the road to see where it *should* go."
                        }
                    ],
                    quiz: {
                        question: "If left limit $\\neq$ right limit, what happens?",
                        options: ["Limit DNE", "Limit is 0", "Limit is Infinity", "Function is continuous"],
                        answer: "Limit DNE",
                        explanation: "For a limit to exist, both sides must agree on the destination."
                    }
                },
                {
                    title: "Unit 6: AP Exam Archives (2023-2025)",
                    topics: ["2023 Sample Logic", "2024 Released FRQs", "2025 Prediction", "Scoring Guidelines"],
                    lectures: [
                        { name: "6.1: 2023 Official Sample (Foundry)", url: "lesson:precalc:precalc-u6-1" },
                        { name: "6.2: 2024 Official Exam (Actual)", url: "lesson:precalc:precalc-u6-2" },
                        { name: "6.3: 2025 Elite Prediction (Hard Mode)", url: "lesson:precalc:precalc-u6-3" }
                    ],
                    examples: [
                        {
                            title: "Ex 1: Point Economy",
                            problem: "How are points distributed in a 9-point FRQ?",
                            steps: ["1-2 pts: Correct setup/formula.", "3-4 pts: Algebraic work.", "1 pt: Final answer with units.", "1-2 pts: Justification ('Because...')."],
                            intuition: "Math is an argument. Even if your answer is wrong, your logic can earn 8/9 points."
                        }
                    ],
                    quiz: {
                        question: "Which exam year represents the first actual administration of AP Precalculus?",
                        options: ["2022", "2023", "2024", "2025"],
                        answer: "2024",
                        explanation: "2024 was the historic 'Inaugural' year for this AP course."
                    }
                }
            ]
        },
        {
            id: "calc-ab",
            title: "AP Calculus AB",
            code: "MA3176",
            description: "The foundations of limits, derivatives, and integrals. Focused on single-variable dynamics and real-world applications.",
            color: "#6e45e2",
            icon: "fas fa-calculus",
            units: [
                {
                    title: "Unit 1: Limits & Continuity (Mastery)",
                    insight: "Calculus starts where Algebra gives up. A limit is the mathematical 'spyglass' that lets us see what happens when denominator becomes zero.",
                    topics: ["Limit Laws", "Squeeze Theorem", "IVT", "Infinite Behavior"],
                    lectures: [
                        { name: "1.1: Essence of Calculus", url: "lesson:calc:calc-u1-1" },
                        { name: "1.2: Formal Limits (Rigor)", url: "lesson:calc:calc-u1-2" },
                        { name: "1.3: Algebraic Refactoring", url: "lesson:calc:calc-u1-3" },
                        { name: "1.4: Asymptotic Logic", url: "lesson:calc:calc-u1-4" },
                        { name: "1.5: Continuity Protocol", url: "lesson:calc:calc-u1-5" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Substitution Logic",
                            problem: "Evaluate lim (x->3) (x^2 - 9) / (x - 3).",
                            steps: [
                                "Direct sub gives 0/0 (Indeterminate).",
                                "Refactor: (x-3)(x+3) / (x-3).",
                                "Cancel (x-3) and evaluate x+3 at 3: 3+3=6.",
                                "Conclude: 6."
                            ],
                            intuition: "We are repairing a 'hole' in the graph to find where it would have been."
                        },
                        {
                            title: "Practice FRQ (Level 3): IVT Justification",
                            problem: "Given a continuous function f(x) where f(1)=-2 and f(5)=4. Justify why there must be a 'c' in [1,5] such that f(c)=0.",
                            steps: [
                                "Protocol Step 1: State continuity. 'Since f is continuous on [1,5]...'",
                                "Protocol Step 2: Compare values. 'And since f(1)=-2 < 0 < 4=f(5)...'",
                                "Protocol Step 3: Invoke the theorem. 'By the Intermediate Value Theorem (IVT), there must exist at least one c...'"
                            ],
                            intuition: "You can't go from negative to positive heights without crossing the x-axis!"
                        }
                    ],
                    quiz: {
                        question: "If left-hand limit is 5 and right-hand limit is 5, but f(c) is 10, is f(x) continuous?",
                        options: ["Yes", "No", "Only if c=0", "DNE"],
                        answer: "No",
                        explanation: "Limit must equal function value. Here, 5 equals 5 (limit exists), but it doesn't equal 10 (function value)."
                    }
                },
                {
                    title: "Unit 2: Differentiation Mastery",
                    insight: "Slope at a Point: Derivatives turn curves into collections of infinitely many small lines. This is the heart of prediction.",
                    topics: ["Power Rule", "Product/Quotient Rules", "High-Order Derivs", "Differentiability"],
                    lectures: [
                        { name: "2.1: The Tangent Engine", url: "lesson:calc:calc-u2-1" },
                        { name: "2.2: Differentiation Rules", url: "lesson:calc:calc-u2-2" },
                        { name: "2.3: Product/Quotient Protocols", url: "lesson:calc:calc-u2-3" },
                        { name: "2.4: Trigonometric Derivatives", url: "lesson:calc:calc-u2-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Rule Application",
                            problem: "Find the derivative of f(x) = 5x^4 - 3x^2 + 7.",
                            steps: [
                                "Use Power Rule: d/dx(x^n) = nx^(n-1).",
                                "Apply: 5(4)x^3 - 3(2)x^1 + 0.",
                                "Conclude: f'(x) = 20x^3 - 6x."
                            ],
                            intuition: "Every power term 'kicks' its exponent down and loses one degree."
                        },
                        {
                            title: "Level 2: Quotient Trap",
                            problem: "Differentiate f(x) = (x^2) / (sin x).",
                            steps: [
                                "Rule: (Low D-High - High D-Low) / (Low^2).",
                                "Setup: (sin x * 2x - x^2 * cos x) / (sin x)^2.",
                                "Conclude: (2x sin x - x^2 cos x) / sin^2 x."
                            ],
                            intuition: "Low d-High minus High d-Low, square the bottom and off you go!"
                        }
                    ],
                    quiz: {
                        question: "If a function has a sharp 'corner', is it differentiable?",
                        options: ["Yes", "No", "Always", "Only if it's positive"],
                        answer: "No",
                        explanation: "Differentiation requires 'smoothness'. At a sharp corner, the slope changes instantly, so the limit of the slope from the left doesn't equal the right."
                    }
                },
                {
                    title: "Unit 3: Chain Rule & Implicit Mastery",
                    insight: "Nested Mechanics: Most real-world functions are layers inside layers. The Chain Rule is our tool for peeling them back.",
                    topics: ["Chain Rule", "Implicit Differentiation", "Inverse Functions", "Logarithmic Differentiation"],
                    lectures: [
                        { name: "3.1: The Chain Rule Protocol", url: "lesson:calc:calc-u3-1" },
                        { name: "3.2: Implicit Differentiation", url: "lesson:calc:calc-u3-2" },
                        { name: "3.3: Derivatives of Inverses", url: "lesson:calc:calc-u3-3" },
                        { name: "3.4: Function Layering", url: "lesson:calc:calc-u3-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Chain Rule Drill",
                            problem: "Differentiate f(x) = sin(x^3).",
                            steps: [
                                "Identify Outer: sin(u), Inner: x^3.",
                                "Deriv Outer: cos(x^3).",
                                "Deriv Inner: 3x^2.",
                                "Multiply: 3x^2 * cos(x^3)."
                            ],
                            intuition: "Differentiate the wrapper, then the candy inside."
                        },
                        {
                            title: "Practice FRQ (Level 3): Implicit Justification",
                            problem: "Find dy/dx for x^2 + y^2 = 25 at (3,4).",
                            steps: [
                                "Diff both sides: 2x + 2y(dy/dx) = 0.",
                                "Solve for dy/dx: 2y(dy/dx) = -2x -> dy/dx = -x/y.",
                                "Evaluate at (3,4): dy/dx = -3/4.",
                                "Interpretation: The tangent line is decreasing at this point."
                            ],
                            intuition: "y is a function of x, so every time you diff y, you must multiply by its 'shadow' dy/dx."
                        }
                    ],
                    quiz: {
                        question: "What is the derivative of e^(2x)?",
                        options: ["e^(2x)", "2e^(x)", "2e^(2x)", "e^(2)"],
                        answer: "2e^(2x)",
                        explanation: "Derivative of e^u is e^u * u'. Here u=2x and u'=2."
                    }
                },
                {
                    title: "Unit 4: Contextual Apps of Differentiation",
                    insight: "Connecting to the World: Related rates and linearization show us that calculus isn't just on paper—it's how we model expanding ripples and falling ladders.",
                    topics: ["Related Rates", "Linearization", "L'Hospital's Rule", "Differentials"],
                    lectures: [
                        { name: "4.1: Related Rates Strategy", url: "lesson:calc:calc-u4-1" },
                        { name: "4.2: Linearization & Error", url: "lesson:calc:calc-u4-2" },
                        { name: "4.3: L'Hospital's Rule", url: "lesson:calc:calc-u4-3" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Related Rates Setup",
                            problem: "A circle's radius expands at 2 cm/s. Find the rate of area change when r = 10.",
                            steps: [
                                "Equation: A = pi * r^2.",
                                "Diff w.r.t time: dA/dt = 2 * pi * r * (dr/dt).",
                                "Plug in: dA/dt = 2 * pi * (10) * (2) = 40pi.",
                                "Conclude: 40pi cm^2/s."
                            ],
                            intuition: "As the radius grows, the 'new layer' of area we add depends on the current circumference."
                        },
                        {
                            title: "Practice FRQ (Level 3): L'Hospital's Precision",
                            problem: "Evaluate lim (x->0) (e^x - 1 - x) / (x^2).",
                            steps: [
                                "Sub x=0: (1-1-0)/0 = 0/0.",
                                "L'Hospital 1: lim (e^x - 1) / (2x). Still 0/0.",
                                "L'Hospital 2: lim (e^x) / 2.",
                                "Eval: e^0 / 2 = 1/2."
                            ],
                            intuition: "When top and bottom both vanish, we compare their 'speeds' (derivatives) to see who wins."
                        }
                    ],
                    quiz: {
                        question: "Can you use L'Hospital's Rule on 0/infinity?",
                        options: ["Yes", "No", "Only on Tuesdays", "Only if it's negative"],
                        answer: "No",
                        explanation: "L'Hospital's Rule only applies to indeterminate forms 0/0 or infinity/infinity. Other forms must be refactored into these first."
                    }
                },
                {
                    title: "Unit 5: Analytical Apps (Curve Sketching)",
                    insight: "DNA of a Function: MVT and the Second Derivative Test allow us to reconstruct the entire 'personality' of a graph from just its formulas.",
                    topics: ["Mean Value Theorem", "Optimization", "Concavity", "Candidate Test"],
                    lectures: [
                        { name: "5.1: MVT & Rolle's", url: "lesson:calc:calc-u5-1" },
                        { name: "5.2: The First Derivative Test", url: "lesson:calc:calc-u5-2" },
                        { name: "5.3: Concavity & Points of Inflection", url: "lesson:calc:calc-u5-3" },
                        { name: "5.4: Optimization Masterclass", url: "lesson:calc:calc-u5-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Critical Points",
                            problem: "Find the critical points of f(x) = x^3 - 3x^2.",
                            steps: [
                                "Diff: f'(x) = 3x^2 - 6x.",
                                "Set to 0: 3x(x - 2) = 0.",
                                "Conclude: x = 0, x = 2."
                            ],
                            intuition: "Critical points are where the graph 'takes a breath' before switching direction."
                        },
                        {
                            title: "Practice FRQ (Level 3): MVT Justification",
                            problem: "If f(0)=0 and f(2)=10, justify why there must be a 'c' where f'(c)=5.",
                            steps: [
                                "State Differentiability: 'Since f is differentiable (and thus continuous)...'",
                                "Calculate avg ROC: (10-0)/(2-0) = 5.",
                                "Invoke MVT: 'By the Mean Value Theorem, there must exist c in (0,2) such that f'(c)=5.'"
                            ],
                            intuition: "If your average speed for a trip was 60mph, you must have hit exactly 60mph at least once!"
                        }
                    ],
                    quiz: {
                        question: "If f''(x) > 0, what is the 'shape' of the graph?",
                        options: ["Increasing", "Decreasing", "Concave Up (Cup)", "Concave Down (Frown)"],
                        answer: "Concave Up (Cup)",
                        explanation: "Positive second derivative means the 'slope is increasing', creating a cup-like shape."
                    }
                },
                {
                    title: "Unit 6: Integration Mastery (AB)",
                    insight: "The accumulation engine: If differentiation is 'shredding', integration is 'weaving'. We use Riemann sums to approximate real-world accumulation.",
                    topics: ["Riemann Sums", "Fundamental Theorem", "U-Substitution", "Average Value"],
                    lectures: [
                        { name: "6.1: Riemann Sums & Sigma", url: "lesson:calc:calc-u6-1" },
                        { name: "6.2: Definite Integrals & FTC", url: "lesson:calc:calc-u6-2" },
                        { name: "6.3: Integration by Substitution", url: "lesson:calc:calc-u6-3" },
                        { name: "6.4: Numerical Integration", url: "lesson:calc:calc-u6-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: FTC Part 2",
                            problem: "Evaluate integral [1 to 3] (3x^2) dx.",
                            steps: [
                                "Anti-deriv: x^3.",
                                "Upper bound: 3^3 = 27.",
                                "Lower bound: 1^3 = 1.",
                                "Subtract: 27 - 1 = 26."
                            ],
                            intuition: "The total accumulation is simply the 'net change' in the anti-derivative."
                        },
                        {
                            title: "Practice FRQ (Level 3): U-Sub Decoupling",
                            problem: "Evaluate integral [0 to 1] x * e^(x^2) dx.",
                            steps: [
                                "Let u = x^2, then du = 2x dx -> x dx = 1/2 du.",
                                "Change bounds: x=0 -> u=0; x=1 -> u=1.",
                                "Integral: 1/2 * integral [0 to 1] e^u du = 1/2(e^1 - e^0).",
                                "Conclude: 1/2(e - 1)."
                            ],
                            intuition: "U-Substitution is 'reverse chain rule'—we adjust for the inner derivative's multiplier."
                        }
                    ],
                    quiz: {
                        question: "What does FTC Part 1 say about d/dx [integral from a to x of f(t) dt]?",
                        options: ["F(x)", "f(x)", "f'(x)", "0"],
                        answer: "f(x)",
                        explanation: "Diff and Int are inverse operations. Starting with f, integrating, then differentiating brings you back to f(x)."
                    }
                },
                {
                    title: "Unit 7: Differential Equations (AB)",
                    insight: "Modeling Change: Differential equations are the 'laws of nature'. They tell us how a system evolves based on its current state.",
                    topics: ["Slope Fields", "Separable Equations", "Exponential Growth"],
                    lectures: [
                        { name: "7.1: Slope Field Logic", url: "lesson:calc:calc-u7-1" },
                        { name: "7.2: Separation of Variables", url: "lesson:calc:calc-u7-2" },
                        { name: "7.3: Exponential Modeling", url: "lesson:calc:calc-u7-3" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Slope Field Matching",
                            problem: "If dy/dx = x, describe the slopes along the y-axis.",
                            steps: [
                                "On y-axis, x = 0.",
                                "dy/dx = 0.",
                                "Conclude: All slope segments are horizontal along the y-axis."
                            ],
                            intuition: "The slope is purely determined by the x-coordinate here."
                        }
                    ],
                    quiz: {
                        question: "If dy/dx = ky, what is the general solution?",
                        options: ["y = kx + C", "y = Ce^(kx)", "y = x^k", "y = sin(kx)"],
                        answer: "y = Ce^(kx)",
                        explanation: "This is the 'Natural Growth' equation where the rate of change is proportional to the amount present."
                    }
                },
                {
                    title: "Unit 8: App of Integration (Area & Volume)",
                    insight: "Building Worlds: We can find the area between complex curves and even the volume of 3D shapes turned on a lathe.",
                    topics: ["Area between Curves", "Disk/Washer Method", "Cross-Sections", "Average Value"],
                    lectures: [
                        { name: "8.1: Areas between Curves", url: "lesson:calc:calc-u8-1" },
                        { name: "8.2: Disk & Washer Methods", url: "lesson:calc:calc-u8-2" },
                        { name: "8.3: Known Cross-Sections", url: "lesson:calc:calc-u8-3" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Area Between Curves",
                            problem: "Find the area between y = x and y = x^2 from x=0 to x=1.",
                            steps: [
                                "Identify Top: x, Bottom: x^2.",
                                "Integral: integral [0 to 1] (x - x^2) dx.",
                                "Anti-deriv: x^2/2 - x^3/3.",
                                "Eval: (1/2 - 1/3) - (0) = 1/6."
                            ],
                            intuition: "Subtracting the lower area from the upper area leaves the 'slice' in between."
                        }
                    ],
                    quiz: {
                        question: "Which method is used for a solid of revolution with a 'hole' in the middle?",
                        options: ["Disk Method", "Was cowl Method", "Washer Method", "Riemann Method"],
                        answer: "Washer Method",
                        explanation: "A washer is a disk with a smaller disk removed from the center, modeling the 'hole'."
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
                    title: "Unit 1: Limits & Continuity (Elite 4.0)",
                    insight: "Limits: The bridge to infinity. Mastering the $\\epsilon-\\delta$ definition is what separates a student from a mathematical architect.",
                    topics: ["Formal Limits", "Squeeze Theorem", "Continuity Rigor", "Intermediate Value Theorem"],
                    lectures: [
                        { name: "1.1: The Calculus Essence", url: "lesson:calc:calc-u1-1" },
                        { name: "1.2: Rigorous Limits", url: "lesson:calc:calc-u1-2" },
                        { name: "1.3: Algebraic Refactoring", url: "lesson:calc:calc-u1-3" },
                        { name: "1.4: Asymptotic Logic", url: "lesson:calc:calc-u1-4" },
                        { name: "1.5: Continuity Protocol", url: "lesson:calc:calc-u1-5" }
                    ],
                    examples: [
                        {
                            title: "Level 1: The Squeeze Logic",
                            problem: "Solve lim (x->0) x^2 * sin(1/x).",
                            steps: [
                                "Bound: -1 <= sin(1/x) <= 1.",
                                "Multiply: -x^2 <= x^2 * sin(1/x) <= x^2.",
                                "Limits: lim -x^2 = 0 and lim x^2 = 0.",
                                "Conclude: By Squeeze Theorem, the limit is 0."
                            ],
                            intuition: "Even if sin(1/x) oscilliates wildly, x^2 'squashes' it to zero at the origin."
                        },
                        {
                            title: "Practice FRQ (Level 3): Epsilon-Delta Mastery",
                            problem: "Prove lim (x->3) (2x - 1) = 5.",
                            steps: [
                                "Target: |(2x-1) - 5| < eps -> |2x-6| < eps.",
                                "Factoring: 2|x-3| < eps -> |x-3| < eps/2.",
                                "Choice: Set delta = eps/2.",
                                "Justification: 'For every eps > 0, choosing delta = eps/2 ensures the target range.'"
                            ],
                            intuition: "You tell me how close you want to be to 5 (eps), and I'll tell you how close x must be to 3 (delta)."
                        }
                    ],
                    quiz: {
                        question: "If f(x) is continuous, does f(c) always exist for any c in the domain?",
                        options: ["Yes", "No", "Only if differentiable", "Only if positive"],
                        answer: "Yes",
                        explanation: "By definition, a function is continuous at c only if f(c) is defined and equal to the limit."
                    }
                },
                {
                    title: "Unit 2: Differentiation (Elite 4.0)",
                    insight: "Linearization: Every smooth function is just a collection of microscopic straight lines. Differentiation is the 'zoom' tool.",
                    topics: ["Definition of Derivative", "Power/Product/Quotient", "High-Order Logic", "Smoothness"],
                    lectures: [
                        { name: "2.1: The Tangent Engine", url: "lesson:calc:calc-u2-1" },
                        { name: "2.2: Differentiation Rules", url: "lesson:calc:calc-u2-2" },
                        { name: "2.3: Product/Quotient Protocols", url: "lesson:calc:calc-u2-3" },
                        { name: "2.4: Trigonometric Derivatives", url: "lesson:calc:calc-u2-4" }
                    ],
                    examples: [
                        {
                            title: "Level 2: High-Order Pattern",
                            problem: "Find the 50th derivative of sin(x).",
                            steps: [
                                "Pattern: sin -> cos -> -sin -> -cos -> sin.",
                                "Cycle: Recurs every 4 derivatives.",
                                "Divide: 50 / 4 = 12 remainder 2.",
                                "Conclude: Same as 2nd derivative -> -sin(x)."
                            ],
                            intuition: "Trig derivatives are a 4-chord loop in a song!"
                        }
                    ]
                },
                {
                    title: "Unit 3: Implicit & Chain Mastery (BC)",
                    insight: "Deep Layers: In BC, we apply the chain rule to multi-variable relations. Implicit differentiation is the key to decoupling x and y.",
                    topics: ["Advanced Chain Rule", "Implicit Logic", "Inverse Trig Rigor", "Logarithmic Diff"],
                    lectures: [
                        { name: "3.1: Chain Rule Protocol", url: "lesson:calc:calc-u3-1" },
                        { name: "3.2: Implicit Differentiation", url: "lesson:calc:calc-u3-2" },
                        { name: "3.3: Derivatives of Inverses", url: "lesson:calc:calc-u3-3" },
                        { name: "3.4: Inverse Trig Masterclass", url: "lesson:calc:calc-u3-4" }
                    ],
                    examples: [
                        {
                            title: "Level 3: Logarithmic Differentiation",
                            problem: "Differentiate y = x^x.",
                            steps: [
                                "Take ln: ln y = x ln x.",
                                "Diff: (1/y) y' = ln x + x(1/x) = ln x + 1.",
                                "Multiply: y' = y(ln x + 1).",
                                "Conclude: y' = x^x(ln x + 1)."
                            ],
                            intuition: "When both base and exponent are moving, take a log to bring the exponent down to earth."
                        }
                    ]
                },
                {
                    title: "Unit 4: Advanced Differentiation Apps",
                    topics: ["Related Rates", "Linearization", "L'Hospital's Rule (Indeterminant Forms)"],
                    lectures: [
                        { name: "4.1: Related Rates Strategy", url: "lesson:calc-bc:calc-u4-1" },
                        { name: "4.2: Linearization & Differentials", url: "lesson:calc-bc:calc-u4-2" },
                        { name: "4.3: L'Hospital's Mastery", url: "lesson:calc-bc:calc-u4-3" }
                    ]
                },
                {
                    title: "Unit 5: Analytical Apps (BC Depth)",
                    topics: ["MVT", "Optimization", "Curve Analysis", "Concavity Logic"],
                    lectures: [
                        { name: "5.1: Extreme Values & Rolle's", url: "lesson:calc-bc:calc-u5-1" },
                        { name: "5.2: Mean Value Theorem", url: "lesson:calc-bc:calc-u5-2" },
                        { name: "5.3: Concavity & Points of Inflection", url: "lesson:calc-bc:calc-u5-3" },
                        { name: "5.4: Optimization Problems", url: "lesson:calc-bc:calc-u5-4" }
                    ]
                },
                {
                    title: "Unit 6: Integration (BC Rigor)",
                    insight: "Foundations of Area: Calculus is the study of accumulation. Riemann sums are the bricks; the Fundamental Theorem is the mortar.",
                    topics: ["FTC", "Riemann Limits", "U-Substitution", "Advanced Integration (Parts/Fractions)"],
                    lectures: [
                        { name: "6.1: Sigma Notation & Riemann Sums", url: "lesson:calc-bc:calc-u6-1" },
                        { name: "6.2: Definite Integrals & FTC", url: "lesson:calc-bc:calc-u6-2" },
                        { name: "6.3: Integration by Substitution", url: "lesson:calc-bc:calc-u6-3" },
                        { name: "6.4: Integration by Parts (BC)", url: "lesson:calc-bc:calc-u6-4" },
                        { name: "6.5: Partial Fractions (BC)", url: "lesson:calc-bc:calc-u6-5" }
                    ]
                },
                {
                    title: "Unit 7: Differential Equations (Elite 4.0)",
                    insight: "Predicting the Future: Differential equations are the 'laws of motion'. Euler's method gives us a numerical bridge when analytic paths are blocked.",
                    topics: ["Slope Fields", "Separable Equations", "Euler's Method (BC)", "Logistic Growth"],
                    lectures: [
                        { name: "7.1: Slope Field Analysis", url: "lesson:calc:calc-u7-1" },
                        { name: "7.2: Euler's Method (BC Expansion)", url: "lesson:calc:calc-u7-2" },
                        { name: "7.3: Separation of Variables", url: "lesson:calc:calc-u7-3" },
                        { name: "7.4: Logistic Modeling (BC Depth)", url: "lesson:calc:calc-u7-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Logistic Capacity",
                            problem: "For dP/dt = 0.2P(1 - P/500), find the carrying capacity.",
                            steps: [
                                "Identify L in (1 - P/L).",
                                "Conclude: L = 500.",
                                "Meaning: The population limit is 500."
                            ],
                            intuition: "The environment has exactly 500 'seats' available."
                        },
                        {
                            title: "Practice FRQ (Level 3): Euler's Step Justification",
                            problem: "Use Euler's method with 2 steps of h=0.5 to approx f(1) if dy/dx=x+y and f(0)=1.",
                            steps: [
                                "Step 1: (0,1), slope=1. Next y = 1 + 1(0.5) = 1.5.",
                                "Step 2: (0.5, 1.5), slope=2. Next y = 1.5 + 2(0.5) = 2.5.",
                                "Conclude: f(1) approx 2.5."
                            ],
                            intuition: "We are walking along the fog, following the local compass (slope) for a short distance before re-checking."
                        }
                    ]
                },
                {
                    title: "Unit 8: App of Integration (BC Rigor)",
                    insight: "Geometric Complexity: Beyond area, we master arc length and surface area. Calculus lets us measure the 'un-measurable'.",
                    topics: ["Area between Curves", "Volumes (Disk/Washer/Shell)", "Arc Length (BC)", "Average Value"],
                    lectures: [
                        { name: "8.1: Areas between Curves", url: "lesson:calc:calc-u8-1" },
                        { name: "8.2: Volumes of Revolution", url: "lesson:calc:calc-u8-2" },
                        { name: "8.3: Known Cross-Sections", url: "lesson:calc:calc-u8-3" },
                        { name: "8.4: Arc Length & Surfaces (BC)", url: "lesson:calc:calc-u8-4" }
                    ]
                },
                {
                    title: "Unit 9: Parametric, Vector, & Polar (BC Only)",
                    insight: "Pathways in Space: In BC, motion isn't just left-right. We follow particles in the plane and calculate areas 'swept out' by polar rays.",
                    topics: ["Parametric Calc", "Vector Motion", "Polar Area", "Polar Arc Length"],
                    lectures: [
                        { name: "9.1: Parametric Calculus", url: "lesson:calc:calc-u9-1" },
                        { name: "9.2: Vectors in the Plane", url: "lesson:calc:calc-u9-2" },
                        { name: "9.3: Polar Coordinates & Graphs", url: "lesson:calc:calc-u9-3" },
                        { name: "9.4: Polar Area Mastery", url: "lesson:calc:calc-u9-4" }
                    ],
                    examples: [
                        {
                            title: "Level 1: Polar Area Setup",
                            problem: "Find the area of r = 3sin(theta).",
                            steps: [
                                "Formula: integral [0 to pi] 1/2 * r^2 dtheta.",
                                "Setup: integral 1/2 * (3sin(theta))^2 dtheta.",
                                "Integrate: 9/2 * integral sin^2(theta) dtheta.",
                                "Conclude: 9pi/4."
                            ],
                            intuition: "We are adding up infinitely many small 'pizza slices' (sectors)."
                        }
                    ]
                },
                {
                    title: "Unit 10: Sequences & Infinite Series (BC Only)",
                    insight: "The Final Boss: Series allow us to turn any complex function into a simple polynomial. Taylor is the architect of this conversion.",
                    topics: ["Convergence Tests", "Power Series", "Taylor/Maclaurin", "Error Bounds"],
                    lectures: [
                        { name: "10.1: Sequences & Convergence", url: "lesson:calc:calc-u10-1" },
                        { name: "10.2: Convergence Tests Masterlist", url: "lesson:calc:calc-u10-2" },
                        { name: "10.3: Power Series & Radius", url: "lesson:calc:calc-u10-3" },
                        { name: "10.4: Taylor Series Mastery", url: "lesson:calc:calc-u10-4" },
                        { name: "10.5: Lagrange Error Bound", url: "lesson:calc:calc-u10-5" }
                    ],
                    examples: [
                        {
                            title: "Level 2: Common Taylor Series",
                            problem: "Write the Maclaurin series for f(x) = sin(x).",
                            steps: [
                                "Pattern: Alternating odd powers.",
                                "Term: x - x^3/3! + x^5/5! - ...",
                                "Conclude: Sigma (-1)^n * x^(2n+1) / (2n+1)!"
                            ],
                            intuition: "Every function has a 'polynomial personality' if you zoom in enough at the center."
                        },
                        {
                            title: "Practice FRQ (Level 3): Radius of Convergence",
                            problem: "Find the interval of convergence for Sigma (n(x-2)^n) / 3^n.",
                            steps: [
                                "Ratio Test: lim |(n+1)(x-2) / 3n | < 1.",
                                "Radius: |x-2|/3 < 1 -> |x-2| < 3.",
                                "Interval: -1 < x < 5.",
                                "Test endpoints: Both fail (diverge).",
                                "Conclude: (-1, 5)."
                            ],
                            intuition: "Outside this 'safety zone', the series explodes to infinity."
                        }
                    ]
                },
                {
                    title: "Unit 11: Infinity Marathon & Archives",
                    insight: "Final Synthesis: You are now a math athlete. We combine Series, Polar, and Integration into unified challenges.",
                    topics: ["Cross-Unit FRQs", "MIT 18.01 Synthesis", "Exam Archive (2023-2025)"],
                    lectures: [
                        { name: "11.1: The Grand Synthesis", url: "lesson:calc:calc-u11-1" },
                        { name: "11.2: Theoretical Depth (MIT Review)", url: "lesson:calc:calc-u11-2" },
                        { name: "11.3: 2025 Elite Prediction", url: "lesson:calc:calc-u11-3" }
                    ],
                    quiz: {
                        question: "Final Mastery: Which convergence test is your 'first line of defense'?",
                        options: ["Ratio Test", "Integral Test", "nth Term Test for Divergence", "P-Series Test"],
                        answer: "nth Term Test for Divergence",
                        explanation: "If the limit of terms is not zero, the series diverges IMMEDIATELY. Save time by checking this first!"
                    }
                }
            ]
        },
        {
            id: "adv-math",
            title: "Advanced Mathematical Systems",
            code: "MA4000",
            description: "Deep dive into Multivariable Calculus and Linear Algebra. The frontier of modern engineering and AI research.",
            color: "#6366f1",
            icon: "fas fa-wave-square",
            units: [
                {
                    title: "Unit 1: Multivariable Calculus (Concepts)",
                    insight: "Beyond the Flatline: In the real world, systems have multiple inputs. Multivariable calculus lets us model the 'topography' of change in 3D space.",
                    topics: ["Partial Derivatives", "Gradient Vectors", "Multiple Integrals", "Lagrange Multipliers"],
                    lectures: [
                        { name: "1.1: Partial Derivatives & Rates", url: "lesson:adv-math:ch_adv-1" },
                        { name: "1.2: The Gradient Vector FIELD", url: "lesson:adv-math:ch_adv-2" },
                        { name: "1.3: Optimization in Higher D", url: "lesson:adv-math:ch_adv-3" }
                    ],
                    examples: [
                        {
                            title: "The Gradient Descent Intuition",
                            problem: "How does an AI minimize error in 100 dimensions?",
                            steps: ["Calculate the Gradient $\\nabla f$.", "The gradient points in the direction of steepest increase.", "Move in the OPPOSITE direction $(- \\nabla f)$.", "Repeat until reaching the local minimum."],
                            intuition: "Gradient descent is like walking down a mountain in a thick fog; you just step in the direction where the ground falls away fastest."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Conceptual Intuition",
                                question: "Geometrically, what does $f_x$ represent for a function $f(x, y)$?",
                                answer: "Slope parallel to x-axis",
                                options: ["Total volume", "Slope parallel to x-axis", "Slope parallel to y-axis", "Area of tangent plane"],
                                explanation: "Partial derivative represents the rate of change in one specific dimension while others are held constant."
                            },
                            {
                                title: "L2: Applied Analysis",
                                question: "For $f(x, y) = x^2 y$, what is the gradient $\\nabla f$ at point $(1, 2)$?",
                                answer: "Total volume",
                                options: ["(2, 1)", "(4, 1)", "(1, 2)", "(4, 2)"],
                                explanation: "$f_x = 2xy, f_y = x^2$. Substituting $(1,2)$ gives $f_x=4, f_y=1$."
                            },
                            {
                                title: "L3: Elite Mastery",
                                question: "What is the relationship between the gradient vector and level curves?",
                                answer: "(4, 1)",
                                options: ["They are parallel", "They are always orthogonal", "They form a 45-degree angle", "No relationship"],
                                explanation: "Since change along a level curve is zero, the gradient (direction of max change) must be perpendicular to it."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Linear Algebra & Vector Spaces",
                    insight: "The Matrix Engine: Linear Algebra is the language of transformations. It is how computers rotate 3D objects and how GPT-4 processes embeddings.",
                    topics: ["Vector Spaces", "Basis & Dimension", "Eigenvalues & Eigenvectors", "Singular Value Decomposition"],
                    lectures: [
                        { name: "2.1: Vector Space Foundations", url: "lesson:adv-math:ch_adv-4" },
                        { name: "2.2: Transformations & Matrices", url: "lesson:adv-math:ch_adv-5" },
                        { name: "2.3: The Power of Eigenvalues", url: "lesson:adv-math:ch_adv-6" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Core Logic",
                                question: "What is the minimum number of basis vectors needed to span a 2D plane?",
                                answer: "They are always orthogonal",
                                options: ["1", "2", "3", "Infinite"],
                                explanation: "The number of basis vectors equals the dimension of the space."
                            },
                            {
                                title: "L2: Transformations",
                                question: "What does it mean if a transformation matrix has a determinant of 0?",
                                answer: "2",
                                options: ["Area is preserved", "Only rotation occurred", "Space lost dimensions", "Inverse matrix exists"],
                                explanation: "A zero determinant means the mapping is 'singular', squeezing higher-dimensional space into a lower one."
                            }
                        ]
                    }
                }
            ]
        },
        {
            id: "proof-logic",
            title: "Proof, Logic & First Principles",
            code: "MA6000",
            description: "A rigorous exploration of the architecture of reason. From axioms to advanced derivations.",
            color: "#6366f1",
            icon: "fas fa-scroll",
            insight: "Logical Sovereignty: In mathematics, a formula is a destination. A proof is the journey. To know 'Why' is to own the logic forever.",
            units: [
                {
                    title: "Unit 1: The Architecture of Axioms",
                    intuition: "Axioms are the 'atoms' of thought. We build universes from these small, undeniable truths.",
                    topics: ["Postulational Systems", "Logic Gates of Math", "Euclidean vs Non-Euclidean"],
                    lectures: [
                        { name: "1.1: The First Rule: Axioms", url: "lesson:proof_logic:proof_logic-u1-1" },
                        { name: "1.2: Syllogisms & Truth Tables", url: "lesson:proof_logic:proof_logic-u1-2" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What is the primary difference between an Axiom and a Theorem?",
                                options: ["Axioms require proof", "Theorems are self-evident", "Axioms are starting points; Theorems are proven from them", "None"],
                                answer: "Space lost dimensions",
                                explanation: "Axioms are accepted without proof to serve as the foundation for further logical derivation."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Geometric Visual Proofs",
                    intuition: "A diagram can be a complete proof. We move from 'calculated' results to 'seen' truths.",
                    topics: ["Slicing the Circle", "Pythagorean Rearrangement", "The Square of Sums"],
                    lectures: [
                        { name: "2.1: Slicing to Find Area", url: "lesson:proof_logic:proof_logic-u2-1" },
                        { name: "2.2: The Square inside a Square", url: "lesson:proof_logic:proof_logic-u2-2" }
                    ],
                    examples: [
                        {
                            title: "Visual Mastery: Pi Intuition",
                            problem: "How does slicing a circle into infinite triangles prove the area is $A = \pi r^2$?",
                            steps: [
                                "Slice circle into small wedges.",
                                "Rearrange wedges into a rectangle-like shape.",
                                "Observe the base is half the circumference ($\pi r$) and height is $r$.",
                                "Calculate area: $r \times \pi r = \pi r^2$."
                            ],
                            intuition: "Infinity is a tool for simplification. By making things smaller, we make the truth bigger."
                        }
                    ]
                },
                {
                    title: "Unit 3: Algebraic Derivations",
                    intuition: "Where did the formulas come from? We strip the Quadratic and Binomial markers to see the mechanical heart of Algebra.",
                    topics: ["Completing the Square", "Binomial Theorem Geometry", "Summing Infinity"],
                    lectures: [
                        { name: "3.1: Deriving the Quadratic Formula", url: "lesson:proof_logic:proof_logic-u3-1" },
                        { name: "3.2: Pascal’s Triangle Mechanics", url: "lesson:proof_logic:proof_logic-u3-2" }
                    ]
                },
                {
                    title: "Unit 4: Calculus from First Principles",
                    intuition: "The derivative is not a formula; it is a movement. We watch the secant line become the tangent.",
                    topics: ["The Difference Quotient", "Limits Visualized", "Accumulation of Fluxions"],
                    lectures: [
                        { name: "4.1: The Secret of the Secant", url: "lesson:proof_logic:proof_logic-u4-1" },
                        { name: "4.2: Power Rule First Principles", url: "lesson:proof_logic:proof_logic-u4-2" }
                    ]
                }
            ]
        },
        {
            id: "res-stats",
            title: "Research Statistics & Data Science",
            code: "MA5100",
            description: "Advanced statistical inference and data modeling for TJHSST IBET and scientific research.",
            color: "#38ef7d",
            icon: "fas fa-microscope",
            insight: "Research Intelligence: Statistics is the language of proof. In IBET, your p-value is the difference between an anecdote and a discovery.",
            units: [
                {
                    title: "Unit 1: Hypothesis Testing Protocol",
                    intuition: "Hypothesis testing is the judicial system of science. We assume the 'Null' (innocent) until evidence (p-value) proves 'Alternative' (guilty).",
                    topics: ["Type I & II Errors", "P-Value Logic", "Z-Tests vs T-Tests", "Confidence Intervals"],
                    lectures: [
                        { name: "1.1: The Null Hypothesis", url: "lesson:stats_res:stats_res-u1-1" },
                        { name: "1.2: Significance Levels (Alpha)", url: "lesson:stats_res:stats_res-u1-2" },
                        { name: "1.3: T-Test Mechanics", url: "lesson:stats_res:stats_res-u1-3" },
                        { name: "1.4: IBET: Fish Respiration Case", url: "lesson:stats_res:stats_res-u1-4" }
                    ],
                    examples: [
                        {
                            title: "IBET Application: P-Value Verdict",
                            problem: "A student finds a p-value of 0.03 for their bean growth experiment with alpha = 0.05. What is the conclusion?",
                            steps: [
                                "Compare p-value (0.03) to alpha (0.05).",
                                "Since 0.03 < 0.05, we reject the Null Hypothesis.",
                                "Conclude: There is a statistically significant difference in growth."
                            ],
                            intuition: "The p-value tells you how likely it is that your results happened by pure luck. If it's small, it probably wasn't luck!"
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "What does the 'Null Hypothesis' ($H_0$) typically represent?",
                                options: ["The result we want to prove", "Statement of no effect or difference", "Potential error in sampling", "The probability of success"],
                                answer: "Statement of no effect or difference",
                                explanation: "The null hypothesis is the baseline assumption that any observed effect is due to chance alone."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Categorical Analysis (Chi-Square)",
                    intuition: "Chi-Square is the 'Equality Inspector'. It checks if the counts you SAVED (observed) match the counts you EXPECTED.",
                    topics: ["Goodness-of-Fit", "Test of Independence", "Degrees of Freedom", "Observed vs Expected"],
                    lectures: [
                        { name: "2.1: Chi-Square Intuition", url: "lesson:stats_res:stats_res-u2-1" },
                        { name: "2.2: Contingency Tables", url: "lesson:stats_res:stats_res-u2-2" },
                        { name: "2.3: Genetic Linkage Stats", url: "lesson:stats_res:stats_res-u2-3" }
                    ],
                    examples: [
                        {
                            title: "Genetic Mastery: Mendelian Ratios",
                            problem: "In a cross with expected 9:3:3:1 ratio, calculate the Degrees of Freedom.",
                            steps: [
                                "Count the number of categories: 4.",
                                "Formula: $df = n - 1$.",
                                "Result: $4 - 1 = 3$."
                            ],
                            intuition: "Degrees of freedom are like 'room to move'. Once you know the total and three of the categories, the fourth is already decided."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "When calculating Chi-Square for Genetic Linkage ($9:3:3:1$), how many Degrees of Freedom are used?",
                                options: ["1", "2", "3", "4"],
                                answer: "3",
                                explanation: "Degrees of Freedom = (Categories - 1). Here, $4 - 1 = 3$."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 3: Regression & Correlation",
                    intuition: "Correlation measures the strength of a handshake between two variables. Regression tells you what happens next.",
                    topics: ["Pearson Correlation (r)", "Coefficient of Determination (R²)", "Residual Analysis", "Influence points"],
                    lectures: [
                        { name: "3.1: The Correlation Scale", url: "lesson:stats_res:stats_res-u3-1" },
                        { name: "3.2: Linear Regression Model", url: "lesson:stats_res:stats_res-u3-2" },
                        { name: "3.3: Residual Mapping", url: "lesson:stats_res:stats_res-u3-3" }
                    ],
                    examples: [
                        {
                            title: "Regression: R-Squared Logic",
                            problem: "If R² = 0.85, what percentage of the variance is explained by the model?",
                            steps: [
                                "Identify R² = 0.85.",
                                "Convert to percentage: 85%.",
                                "Conclude: 85% of variability is explained by the independent variable."
                            ],
                            intuition: "R-squared is the 'Accuracy Score' of your prediction line."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "Level 1: Intuition",
                                question: "Which R-value indicates a perfect negative linear correlation?",
                                options: ["0", "1", "-1", "-0.5"],
                                answer: "-1",
                                explanation: "An R-value of -1 means as one variable increases, the other decreases in a perfect straight line."
                            }
                        ]
                    }
                }
            ]
        },
        {
            id: "comp-math",
            title: "Competition Strategy (Elite)",
            code: "CP5000",
            description: "Advanced heuristics for AMC 10/12, AIME, and beyond. Mastering the art of the 'elegant shortcut'.",
            color: "#ec4899",
            icon: "fas fa-trophy",
            units: [
                {
                    title: "Unit 1: Number Theory (Mastery)",
                    topics: ["Modular Arithmetic", "Chinese Remainder Theorem", "Euler's Totient Function", "Orders & Primitive Roots"],
                    lectures: [
                        { name: "1.1: Modular Powerhouses", url: "lesson:competition:ch_comp-1" },
                        { name: "1.2: Totients & Cycles", url: "lesson:competition:ch_comp-2" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Congruence Basics",
                                question: "What is $3^{2024} \\pmod{10}$?",
                                answer: "1",
                                options: ["1", "3", "7", "9"],
                                explanation: "The powers of 3 mod 10 follow the cycle (3, 9, 7, 1) with length 4. 2024 is a multiple of 4."
                            },
                            {
                                title: "L3: Competition Challenge",
                                question: "What is the primary condition for applying the Chinese Remainder Theorem?",
                                answer: "1",
                                options: ["Moduli must be prime", "Moduli must be coprime", "Moduli must be even", "Always applicable"],
                                explanation: "A unique solution mod $mn$ is guaranteed only when $\\gcd(m, n)=1$."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Combinatorics & Logic Maps",
                    topics: ["Principle of Inclusion-Exclusion", "Recursion in Counting", "Generating Functions", "Graph Theory Intuition"],
                    lectures: [
                        { name: "2.1: Advanced PIE", url: "lesson:competition:ch_comp-3" },
                        { name: "2.2: Recursive Logic", url: "lesson:competition:ch_comp-4" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L2: PIE Applications",
                                question: "How many ways can 5 people take home a hat such that nobody gets their own (Derangements)?",
                                answer: "Moduli must be coprime",
                                options: ["44", "120", "24", "9"],
                                explanation: "$D_5 = 44$. Calculated via PIE as $120 - 60 + 20 - 5 + 1 = 44$."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 3: Advanced Heuristics (AMC/AIME)",
                    intuition: "When the clock is ticking, elegance is faster than brute force. We master the 'AIME-style' 3-digit logic.",
                    topics: ["Stars & Bars", "Complementary Counting", "Modular Invariants", "Symmetry in Probability"],
                    lectures: [
                        { name: "3.1: The Partition Method", url: "lesson:competition:ch_comp-5" },
                        { name: "3.2: 3-Digit Numerical Strategies", url: "lesson:competition:ch_comp-6" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Stars & Bars",
                                question: "How many ways can 7 identical candies be given to 3 children such that each child gets at least one?",
                                options: ["15", "21", "10", "35"],
                                answer: "44",
                                explanation: "Using Stars & Bars: $(n-1)C(k-1) = (7-1)C(3-1) = 6C2 = 15$."
                            },
                            {
                                title: "L3: AIME Challenge",
                                question: "Calculate the last three digits of $7^{100}$. (Format: 001, 123, etc.)",
                                answer: "001",
                                options: ["001", "007", "049", "343"],
                                explanation: "$7^4 = 2401 \equiv 1 \pmod{1000}$. Thus $7^{100} = (7^4)^{25} \equiv 1^{25} = 1$. The 3-digit format is 001."
                            }
                        ]
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
        { name: "Biology Science Tools", desc: "Interactive calculators for Chi-Square, Stats, and Water Potential", url: "../biology/index.html", icon: "fas fa-flask" },
        { name: "OmegaLearn", desc: "Best AMC 10/12 Free PDF Books", url: "https://www.omegalearn.org/mastering-amc1012", icon: "fas fa-book" },
        { name: "3Blue1Brown", desc: "Intuition Building Animations", url: "https://www.youtube.com/@3blue1brown", icon: "fab fa-youtube" },
        { name: "Paul's Notes", desc: "Legendary Math Cheat Sheets", url: "https://tutorial.math.lamar.edu/", icon: "fas fa-file-pdf" },
        { name: "SHSAT Review YouTube", desc: "Elite Algebra 2 & Math Problem Solving breakdowns", url: "https://www.youtube.com/@shsatreview6318", icon: "fab fa-youtube" },
        { name: "Art of Problem Solving", desc: "The competitive math gold standard", url: "https://artofproblemsolving.com/", icon: "fas fa-brain" }
    ],
    glossary: {
        "Axiom": "A statement or proposition that is regarded as being established, accepted, or self-evidently true.",
        "Matrix": "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.",
        "Determinant": "A scalar value that encodes properties of a linear transformation. If zero, the transformation is destructive.",
        "Logarithm": "The inverse of exponentiation. It maps multiplication to addition, powering the Richter and Decibel scales.",
        "Partial Derivative": "A derivative where only one variable changes while others are held constant. Denoted as $\partial f / \partial x$.",
        "Gradient": "A vector ($\nabla f$) pointing in the direction of the steepest ascent on a high-dimensional surface.",
        "Basis": "The 'skeleton' of a vector space; a set of linearly independent vectors that span the entire space.",
        "Modular Arithmetic": "A system where numbers 'wrap around' like a clock (e.g., $15 \\equiv 3 \\pmod{12}$).",
        "Chinese Remainder Theorem": "A theorem used to determine a unique integer $x$ that satisfies multiple congruences with coprime moduli.",
        "Vieta's Formulas": "Formulas relating polynomial coefficients to the sums and products of its roots ($r_1+r_2 = -b/a$).",
        "Linear Programming": "Optimization of linear functions subject to linear constraints, governed by the Vertex Principle.",
        "Complex Conjugate": "For $z = a + bi$, the conjugate is $\bar{z} = a - bi$. Vital for ensuring real-world coefficients in wave equations.",
        "Differential": "A measure of an infinitely small change in a variable, the fundamental atom of Calculus."
    }
};
