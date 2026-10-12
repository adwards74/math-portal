window.MATH_DATA = {
    subjects: [
        {
            id: "foundation",
            title: "Ch0: Foundation Bridge",
            code: "PRE-ALG",
            description: "Pre-Algebra review: fractions, order of operations, basic equations, and the coordinate plane. Master these before Algebra 2!",
            color: "#38ef7d",
            icon: "fas fa-bridge",
            intuition: "Every hard Algebra 2 problem is secretly a foundation problem in disguise — a quadratic you can't solve is usually a fraction you can't add, and a 'tricky' equation is usually order-of-operations wearing a costume. Think of this chapter as pouring the concrete slab: fractions, PEMDAS, basic equations, and the coordinate plane are the load-bearing walls everything else stands on. Students who rush past Ch 0 don't fail at quadratics — they fail at the arithmetic INSIDE the quadratics. Master this first, and every later chapter gets measurably easier.",
            local_resources: [],
            difficulty: "basic",
            units: [
                {
                    title: "Ch 0: Pre-Algebra Foundations",
                    videoUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
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
                                explanation: "The trap here is adding straight across: $\\frac{1}{2}+\\frac{1}{3} \\ne \\frac{2}{5}$. A fraction is a count of equal-sized pieces, so you can only add pieces of the same size — convert first: $\\frac{1}{2}=\\frac{3}{6}$ and $\\frac{1}{3}=\\frac{2}{6}$, giving $\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$. Wrong-answer watch: $\\frac{2}{5}$ comes from adding numerators and denominators separately, which silently redefines what the 'whole' is mid-problem. Quick self-check: $\\frac{5}{6} \\approx 0.83$ sits sensibly above $\\frac{1}{2}$ — any answer smaller than both inputs (like $\\frac{2}{5} = 0.4$) is an instant red flag."
                            },
                            {
                                title: "Level 2: PEMDAS",
                                question: "$3 + 2 \\times 4^2$ = ?",
                                options: ["80", "35", "44", "100"],
                                answer: "35",
                                explanation: "The trap here is reading left to right: $(3+2)\\times 16 = 80$ treats addition as if it outranks multiplication. PEMDAS is a hierarchy, not a sequence — exponents first ($4^2 = 16$), then multiplication ($2 \\times 16 = 32$), then addition ($3 + 32 = 35$). Wrong-answer watch: $80$ comes from adding before multiplying; $44$ comes from computing $2 \\times 4^2$ as $(2 \\times 4)^2$. Quick self-check: multiplication binds tighter than addition, so the product term $2 \\times 16 = 32$ must dominate the sum — an answer like $80$, where the tiny $+3$ visibly inflated the result, should look suspicious."
                            },
                            {
                                title: "Level 3: Equations",
                                question: "If $2x + 5 = 13$, what is $x$?",
                                options: ["x = 4", "x = 9", "x = 6", "x = 3"],
                                answer: "x = 4",
                                explanation: "The trap here is 'undoing' in the wrong order, or on only one side. An equation is a balanced scale: whatever you do, do it to both sides. Peel the operations off in reverse — first subtract 5 from both sides ($2x = 8$), then divide both sides by 2 ($x = 4$). Wrong-answer watch: $x = 9$ comes from adding 5 instead of subtracting ($(13+5)/2$); $x = 6$ comes from dividing before the $x$-term is isolated. Quick self-check: plug back into the ORIGINAL equation — $2(4)+5 = 13$ ✓. If your candidate fails the original, the algebra went wrong somewhere, no matter how clean it looked."
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
            intuition: "Algebra 2 is the last course where math is still 'just math' — after this, every STEM subject (physics, chemistry, precalculus, computer science) assumes you already speak this language fluently. Functions, logarithms, matrices, and trigonometry are the vocabulary; the chapters ahead teach you to read and write with them. Think of it as learning the grammar of the universe: projectile motion, compound interest, sound waves, and AI models are all sentences written in these symbols. The students who thrive in TJHSST's later courses aren't the ones who memorized the most formulas — they're the ones for whom these ideas became intuition.",
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
                    videoUrl: "https://www.youtube.com/watch?v=9vKqVkMQHKk",
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
                                answer: "Consequence of Distributive Property",
                                explanation: "The trap here is treating $a \\cdot 0 = 0$ as an unquestionable definition — in a rigorous system it is a THEOREM. Proof idea in two lines: $a \\cdot 0 = a \\cdot (0 + 0) = a\\cdot 0 + a\\cdot 0$ by distributivity; subtract $a\\cdot 0$ from both sides and $0 = a \\cdot 0$ falls out. The distributive property does all the work: zero 'absorbs' because it is the additive identity. Wrong-answer watch: 'Inverse Identity' and 'Associative Law' sound sophisticated, but neither one connects multiplication to addition — only distributivity bridges the two operations. Takeaway: whenever a fact feels 'obvious', ask which axiom it actually follows from."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Solve for $x$: $3(x - 5) = 2x + 4$.",
                                options: ["x = 19", "x = 9", "x = 1", "x = 11"],
                                answer: "x = 19",
                                explanation: "The trap here is rushing the distribution or flipping a sign mid-move. Slow it down: distribute fully on the left — $3x - 15 = 2x + 4$ (the 3 hits BOTH terms inside the parentheses). Then collect variables on one side, constants on the other: $3x - 2x = 4 + 15$, so $x = 19$. Wrong-answer watch: $x = 11$ comes from writing $3x - 5$ (distributing to only the first term); $x = 9$ from a sign slip when moving the $-15$. Quick self-check: $3(19-5) = 3(14) = 42$ and $2(19)+4 = 42$ ✓ — always verify in the original equation, since distribution errors are invisible in the final line."
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
                                explanation: "The trap here is 'undoing' the operations in the wrong order — or just shuffling symbols. An inverse runs the machine backwards: $f$ multiplies by 2 THEN adds 3, so $f^{-1}$ must subtract 3 FIRST, then divide by 2. Formally, swap $x$ and $y$: $x = 2y + 3 \\rightarrow x - 3 = 2y \\rightarrow y = \\frac{x-3}{2}$. Wrong-answer watch: $2x - 3$ merely swaps coefficients without reversing anything; $\\frac{x}{2} - 3$ undoes the multiplication before the addition. Quick self-check: compose them — $f(f^{-1}(x)) = 2\\cdot\\frac{x-3}{2} + 3 = x$ ✓. If the composition doesn't return $x$, it isn't the inverse."
                            }
                        ]
                    }
                },
                {
                    title: "Ch 2: Functions & Graphs",
                    videoUrl: "https://www.youtube.com/watch?v=S0_qX4VJhMQ",
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
                                "Final Form: $C(d) = \\begin{cases} 5 & 0 < d \\le 2 \\ 2d + 1 & d > 2 \\end{cases}$"
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
                                answer: "Exactly One",
                                explanation: "The trap here is confusing 'function' with 'one-to-one'. A function only demands determinism in ONE direction: each input gets EXACTLY ONE output — but different inputs may happily share an output (in $f(x) = x^2$, both $2$ and $-2$ map to $4$, and it's still a function). The forbidden move is one input splitting into two outputs, which is why the vertical line test works: a vertical line crossing the graph twice means one $x$ produced two $y$'s. Wrong-answer watch: 'At least One' would permit ambiguity, which defeats the entire purpose — a function must give a definite answer. Takeaway: functions may forget where they came from (many-to-one), they just can't be indecisive."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Describe the shift in $y = |x - 4| + 5$.",
                                options: ["Left 4, Up 5", "Right 4, Up 5", "Right 4, Down 5", "Left 4, Down 5"],
                                answer: "Right 4, Up 5",
                                explanation: "The trap here is reading the sign literally: $(x - 4)$ looks like 'left 4', but horizontal shifts run OPPOSITE to intuition. Why: the graph of $|x|$ has its corner at $x = 0$; in $|x - 4|$, the corner occurs where $x - 4 = 0$, i.e. at $x = 4$ — the whole picture slid RIGHT by 4. The $+5$ sitting outside is direct: every $y$-value rises by 5. So: right 4, up 5. Wrong-answer watch: 'Left 4' trusts the minus sign at face value; 'Down 5' misreads the vertical shift. Quick self-check: plug in $x = 4$: $y = |0| + 5 = 5$ — the corner $(0,0)$ moved to $(4,5)$, confirming right 4 and up 5."
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
                    videoUrl: "https://www.youtube.com/watch?v=rfG8ce4nNh0",
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
                            problem: "Maximize $P = 3x + 2y$ subject to $x + y \\le 4$, $x \\ge 1$, $y \\ge 0$.",
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
                                explanation: "The trap here is mixing up 'dependent' with 'parallel'. Parallel lines never meet (no solution — inconsistent). Dependent means the two equations are secretly the SAME line — one is just a multiple of the other — so every point on the line is a solution (infinitely many). Algebraically: if you can multiply equation 1 by some constant to get equation 2, the second equation contributes zero new information. Wrong-answer watch: 'Lines are parallel' describes DISTINCT parallel lines, which is the inconsistent case, not the dependent one. Quick self-check: try eliminating — a dependent system collapses to $0 = 0$ (a truth), while an inconsistent one collapses to $0 = 5$ (a contradiction)."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "In Linear Programming, why do we only check the vertices of the feasible region?",
                                options: ["Because it's easier", "Maximum/Minimum always occurs at a corner", "Inside points are not allowed", "Boundaries don't matter"],
                                answer: "Maximum/Minimum always occurs at a corner",
                                explanation: "The trap here is thinking we check vertices just because it's 'easier' — it's a THEOREM, not a shortcut. The feasible region is a convex polygon and the objective (say, profit $= 3x + 2y$) is linear, so its 'slope' never changes: standing at an interior point, you can always slide a little further uphill and improve. You only stop when you hit the boundary — then keep sliding until a corner blocks you. That's why the optimum must sit at a vertex. Wrong-answer watch: 'Because it's easier' confuses justification with convenience; interior points aren't forbidden, they're just never strictly better. Takeaway: linearity plus convexity forces extremes to the corners — the same idea powers the simplex method used in real logistics."
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
                    videoUrl: "https://www.youtube.com/watch?v=3d6DsjIBzJ4",
                    insight: "Matrices: You are manipulating whole spatial dimensions here. Visualize matrices as vectors moving around.",
                    intuition: "Matrices are the data structures of the modern world. They bridge the gap between simple variables and high-dimensional AI architecture. Why they matter: a single matrix equation $AX = B$ can encode an entire system of a hundred equations — it's compression for linear relationships. Visualize a matrix as a machine that stretches, rotates, and squashes space; the determinant tells you exactly how much area survives the trip. This chapter connects forward everywhere: it scales up Ch 3's elimination to industrial size, powers computer graphics (every 3D game transforms coordinates with matrices), and underlies neural networks — an AI layer IS a matrix multiplication. Learn to think of matrices as verbs (actions on space), not just grids of numbers.",
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
                        { name: "💡 Competition Tip: Cramer's Rule", url: "#", insight: "For a system $AX=B$, if $det(A) \\neq 0$, the unique solution is $x_i = det(A_i)/det(A)$. It's the most efficient way to solve specific variables in high-speed competitions!" }
                    ],
                    examples: [
                        {
                            title: "Example 1: The Matrix Multiplier",
                            problem: "Compute $AB$ where $A = \\begin{pmatrix} 1 & 2 \\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 6 \\ 7 & 8 \\end{pmatrix}$. Show the dot products.",
                            steps: [
                                "Row 1 &times; Col 1: $(1)(5) + (2)(7) = 5 + 14 = 19$.",
                                "Row 1 &times; Col 2: $(1)(6) + (2)(8) = 6 + 16 = 22$.",
                                "Row 2 &times; Col 1: $(3)(5) + (4)(7) = 15 + 28 = 43$.",
                                "Row 2 &times; Col 2: $(3)(6) + (4)(8) = 18 + 32 = 50$.",
                                "Final Matrix: $\\begin{pmatrix} 19 & 22 \\ 43 & 50 \\end{pmatrix}$."
                            ],
                            intuition: "Notice how Row 1 of the output depends only on Row 1 of A. Matrix multiplication is essentially a batch processing of vectors."
                        },
                        {
                            title: "Example 2: Inverting Space",
                            problem: "Find the inverse of Matrix $M = \\begin{pmatrix} 3 & 1 \\ 5 & 2 \\end{pmatrix}$. Check if det $\\neq$ 0.",
                            steps: [
                                "Calculate Determinant: $\\det M = (3)(2) - (1)(5) = 6 - 5 = 1$. Since $det \\neq 0$, the inverse exists.",
                                "Swap $a$ and $d$: $\\begin{pmatrix} 2 & \\dots \\ \\dots & 3 \\end{pmatrix}$.",
                                "Negate $b$ and $c$: $\\begin{pmatrix} 2 & -1 \\ -5 & 3 \\end{pmatrix}$.",
                                "Multiply by $1/det$: Since $det=1$, the inverse is simply $\\begin{pmatrix} 2 & -1 \\ -5 & 3 \\end{pmatrix}$."
                            ],
                            intuition: "The inverse matrix is the 'Negative Operator'. If $M$ encodes your data, $M^{-1}$ is the only key that can bring it back without noise."
                        },
                        {
                            title: "Example 3: Determinants as Scaling",
                            problem: "How does the matrix $\\begin{pmatrix} 2 & 0 \\ 0 & 3 \\end{pmatrix}$ transform a unit square $(1 \\times 1)$?",
                            steps: [
                                "Calculate Determinant: $\\det = (2)(3) - (0)(0) = 6$.",
                                "Physical result: The square's width is doubled (2) and its height is tripled (3).",
                                "Area change: The new area is $2 \\times 3 = 6$ square units. The determinant correctly predicted the 6-fold scaling of area.",
                                "Final Matrix: $\\begin{pmatrix} 2 & 0 \\ 0 & 3 \\end{pmatrix}$."
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
                                explanation: "The trap here is answering 'inverse is zero' — a matrix with determinant 0 has NO inverse at all, not a zero one. Think geometrically: the determinant measures how much the transformation scales area. $\\det = 0$ means the transformation crushes space flat (a whole plane collapses onto a line or a point), destroying information — two different inputs land on the same output, so the trip can't be reversed. It's exactly like multiplying by 0: from $0 \\cdot x = 0$ you can never recover $x$. Wrong-answer watch: 'Inverse is its transpose' holds only for rotations and reflections (orthogonal matrices). Quick self-check: a matrix is invertible if and only if $\\det \\ne 0$ — whenever you need an inverse, compute the determinant first."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Compute the determinant of $M = \\begin{pmatrix} 3 & 2 \\ 1 & 4 \\end{pmatrix}$.",
                                options: ["10", "14", "12", "7"],
                                answer: "10",
                                explanation: "The trap here is combining the four numbers the wrong way. For a $2\\times2$ matrix, $\\det = ad - bc$: multiply along the main diagonal and SUBTRACT the product of the off-diagonal: $(3)(4) - (2)(1) = 12 - 2 = 10$. Wrong-answer watch: $14$ comes from ADDING the cross-products ($12 + 2$); $12$ from computing only $(3)(4)$ and forgetting the subtraction; $7$ from adding the main diagonal ($3 + 4$). Quick self-check: the determinant is a signed area-scale factor — compute $ad$ and $bc$ separately ($12$ and $2$) and confirm you're subtracting, not adding."
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
                    videoUrl: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
                    intuition: "Curves govern the physical world. From gravity to growth, quadratics provide the parabolic logic for modeling motion and optimization. Why they matter: the quadratic is the simplest nonlinear function, which makes it the laboratory where you first meet the big ideas — the vertex as the optimum, the discriminant as a 'reality detector' for roots, and completing the square as the ancestor of every optimization algorithm. Visualize every quadratic as a dish (or a hill) with one special point, the vertex, where everything interesting happens: maximum height of a ball, minimum cost, maximum profit. This chapter connects forward to polynomials (Ch 6 — quadratics are degree-2 polynomials, and every technique here generalizes), to conic sections (Ch 10 — the parabola returns as a sliced cone), and to physics, where $d = \\frac{1}{2}gt^2$ rules falling objects.",
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
                                explanation: "The trap here is picking a vague answer like 'Symmetry Principle' — symmetry alone doesn't focus light. The real reason is baked into the DEFINITION of a parabola: the set of points equidistant from the focus and the directrix. That equal-distance property forces incoming parallel rays to reflect through the focus (the angles work out so each ray's path to the focus equals its distance to the directrix). Wrong-answer watch: 'Inverse Square Law' governs how intensity fades with distance, not reflection geometry. Takeaway: this isn't a physics coincidence — it's why satellite dishes and telescope mirrors are parabolic: the geometry does the focusing for free."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "If the discriminant $D = b^2 - 4ac$ is negative, what is the nature of the roots?",
                                options: ["One Real Root", "Two Real Roots", "Two Complex Roots", "No Roots"],
                                answer: "Two Complex Roots",
                                explanation: "The trap here is answering 'No Roots' — the equation still HAS two roots; they're just not real numbers. When $D = b^2 - 4ac < 0$, the quadratic formula asks for $\\sqrt{D}$, the square root of a negative — which pushes the roots into the complex plane as a conjugate pair $a \\pm bi$. Graphically, the parabola floats entirely above (or below) the $x$-axis and never touches it. Wrong-answer watch: 'No Roots' confuses 'no REAL roots' with 'no roots at all' — over the complex numbers, every quadratic has exactly two roots (Fundamental Theorem of Algebra). Quick self-check: if $b^2 < 4ac$, expect complex conjugates before you even finish the formula."
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
                    videoUrl: "https://www.youtube.com/watch?v=9vKqVkMQHKk",
                    insight: "Polynomials: Every root $(x-r)$ is a factor. The Fundamental Theorem guarantees N roots for degree N. No exceptions!",
                    intuition: "Polynomials are the DNA of functional analysis. From the behavior of global temperatures to the trajectory of satellites, understanding roots and degree is essential for predicting complex systems. Why they matter: polynomials are the building blocks of approximation — calculators compute $\\sin x$ and $e^x$ using polynomial (Taylor) approximations, so this chapter is secretly about how machines do 'impossible' math. Visualize a polynomial by its roots and its ends: roots are where it touches the axis, multiplicity tells you whether it crosses or bounces, and the leading term alone decides where it goes at infinity. This connects forward to rational functions (Ch 9 — ratios of polynomials) and backward to quadratics (Ch 5), which are just the degree-2 case of everything here. The Factor Theorem is the chapter's master key: roots and factors are two names for the same thing.",
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
                                "Identify factors of constant ($p$): $\\pm 1, \\pm 2, \\pm 5, \\pm 10$.",
                                "Identify factors of leading coeff ($q$): $\\pm 1, \\pm 3$.",
                                "Form all $p/q$ combinations: $\\pm 1, \\pm 2, \\pm 5, \\pm 10, \\pm \\frac{1}{3}, \\pm \\frac{2}{3}, \\pm \\frac{5}{3}, \\pm \\frac{10}{3}$.",
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
                                explanation: "The trap here is thinking every term gets a vote — for large $x$, only the leading term matters. Compare growth rates: $\\frac{-2x^3}{3x^4} = \\frac{-2}{3x} \\to 0$ as $x \\to \\infty$, so the $-2x^3$ and $10x$ terms become rounding errors next to $3x^4$. That's why end behavior is decided by degree and leading coefficient alone. Wrong-answer watch: $-2x^3$ or $10x$ treat all terms as equals, ignoring that $x^4$ outgrows $x^3$ without bound. Quick self-check: plug in $x = 1000$: $3x^4 = 3 \\times 10^{12}$ versus $-2x^3 = -2 \\times 10^9$ — three orders of magnitude apart, and the gap only widens."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "If $f(2) = 0$ for a polynomial $f(x)$, what does the Factor Theorem guarantee?",
                                options: ["(x+2) is a factor", "(x-2) is a factor", "x=0 is a root", "f(x) has no real roots"],
                                answer: "(x-2) is a factor",
                                explanation: "The trap here is the sign: $f(2) = 0$ gives the factor $(x - 2)$, NOT $(x + 2)$. Why it works: polynomial division says $f(x) = (x - c)\\cdot q(x) + f(c)$ — the remainder of dividing by $(x-c)$ is exactly $f(c)$. So $f(c) = 0$ means the remainder vanishes and $(x - c)$ divides cleanly. The factor must be zero AT $x = c$, and $(x - 2)$ is zero at $x = 2$. Wrong-answer watch: $(x + 2)$ is zero at $x = -2$ — the classic sign flip. Quick self-check: $f(x) = (x-2)\\cdot q(x)$ must satisfy $f(2) = 0 \\cdot q(2) = 0$ ✓."
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
                    videoUrl: "https://www.youtube.com/watch?v=riXcZT2ICjA",
                    intuition: "Roots are the inverse of power, allowing us to reverse complex operations. From calculating the radius of a sphere to modeling the decay of particles, radicals provide the mathematical lens to look backwards into the core of a value. Why they matter: almost every 'undo' in applied math is a root — square roots undo areas ($A = \\pi r^2 \\to r = \\sqrt{A/\\pi}$), cube roots undo volumes, $n$th roots undo compound growth. The chapter's two big ideas: rational exponents turn root-taming into plain exponent arithmetic ($x^{m/n}$), and every non-reversible step (squaring!) can smuggle in extraneous solutions — so verification isn't optional. This connects forward to exponentials and logarithms (Ch 8), where roots become fractional powers and then logarithms, completing the 'undo' toolkit: power $\\leftrightarrow$ root $\\leftrightarrow$ logarithm.",
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
                            problem: "Simplify: $\\frac{x^{5/2}}{x^{1/2}} \\cdot \\sqrt[3]{x^6}$",
                            steps: [
                                "Simplify current power: $x^{5/2 - 1/2} = x^2$.",
                                "Convert radical to power: $\\sqrt[3]{x^6} = x^{6/3} = x^2$.",
                                "Combine: $x^2 \\cdot x^2 = x^4$."
                            ],
                            intuition: "Rational exponents are the 'standard protocol' of algebra. By converting everything to a base power, complex radical problems become simple additions."
                        },
                        {
                            title: "Example 2: The Extraneous Root Hunt",
                            problem: "Solve $\\sqrt{4x + 1} = x - 1$. Check for false positives.",
                            steps: [
                                "Square both sides: $4x + 1 = (x - 1)^2 \\rightarrow 4x + 1 = x^2 - 2x + 1$.",
                                "Rearrange: $x^2 - 6x = 0 \\rightarrow x(x - 6) = 0$.",
                                "Candidates: $x = 0, x = 6$.",
                                "Test $x=0$: $\\sqrt{1} = -1$ (False! Extraneous).",
                                "Test $x=6$: $\\sqrt{25} = 5$ (True!)."
                            ],
                            intuition: "Squaring is a 'lossy' operation—it loses the information about the original sign. Always verify your results in the original code."
                        },
                        {
                            title: "Example 3: Function Inversion",
                            problem: "Find the inverse of $f(x) = \\sqrt{x - 3} + 2$. State the domain.",
                            steps: [
                                "Swap $x$ and $y$: $x = \\sqrt{y - 3} + 2$.",
                                "Isolate radical: $x - 2 = \\sqrt{y - 3}$.",
                                "Square: $(x - 2)^2 = y - 3$.",
                                "Solve for $y$: $y = (x - 2)^2 + 3$.",
                                "Constraint: Since the original range was $y \\ge 2$, the new domain is $x \\ge 2$."
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
                                explanation: "The trap here is treating verification as optional busywork — it's the actual point. Squaring is a 'lossy' operation: both $a = b$ and $a = -b$ square to $a^2 = b^2$, so squaring MERGES two different equations into one. The squared equation's solution set is therefore a superset — it can contain impostors that satisfy the squared equation but not the original. That's why you must plug every candidate back into the ORIGINAL equation (not the squared one). Wrong-answer watch: 'To find more answers' gets it backwards — verification can only REMOVE candidates, never add them. Takeaway: any non-reversible step (squaring, multiplying by a variable expression) demands a check at the end."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Rewrite $\\sqrt[3]{x^6}$ using rational exponents.",
                                options: ["x^2", "x^3", "x^18", "x^0.5"],
                                answer: "x^2",
                                explanation: "The trap here is guessing the new exponent: dividing by the wrong number, or multiplying instead. The rule: $\\sqrt[n]{x^m} = x^{m/n}$ — the root becomes a FRACTIONAL exponent, and you multiply: $x^{6 \\cdot (1/3)} = x^{6/3} = x^2$. Wrong-answer watch: $x^3$ divides by 2 (confusing cube root with square root); $x^{18}$ multiplies $6 \\times 3$ (inverting the rule); $x^{0.5}$ answers a different question entirely. Quick self-check: cube your answer — $(x^2)^3 = x^6$ ✓. If cubing the candidate doesn't return the radicand, the exponent is wrong."
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
                    videoUrl: "https://www.youtube.com/watch?v=5yfh5cf4-0w",
                    intuition: "Logarithms are the language of scale and complexity. They allow us to map the infinite growth of data into manageable linear steps, powering everything from the Richter scale to the efficiency of Google's search algorithms. Why they matter: the world rarely grows linearly — populations, investments, viral posts, and algorithm runtimes are exponential, and logarithms are the only tool that makes exponential relationships readable (a straight line on a log scale). Visualize $e$ as nature's favorite growth constant: $e^x$ is the unique function that grows exactly as fast as its current size, which is why it appears in everything from radioactive decay to continuous interest. This chapter connects backward to roots (Ch 7 — logarithms complete the inverse family: $b^y = x \\iff y = \\log_b x$) and forward to sequences (Ch 11 — geometric sequences are exponentials in discrete clothing) and to all of data science.",
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
                                "Substitute values: $1000 \\cdot e^{(0.05)(10)}$.",
                                "Simplify exponent: $1000 \\cdot e^{0.5}$.",
                                "Calculate: $1000 \\cdot 1.6487 \\approx \\$1,648.70$."
                            ],
                            intuition: "Continuous compounding is the theoretical limit of growth. It assumes interest is being added at every possible instant."
                        },
                        {
                            title: "Example 2: The Log Power Hack",
                            problem: "Solve for $x$: $3^{x+1} = 20$. Give the answer using natural logs.",
                            steps: [
                                "Take $\\ln$ of both sides: $\\ln(3^{x+1}) = \\ln(20)$.",
                                "Use Power Rule: $(x+1)\\ln(3) = \\ln(20)$.",
                                "Divide by $\\ln(3)$: $x+1 = \\frac{\\ln(20)}{\\ln(3)}$.",
                                "Solve for $x$: $x = \\frac{\\ln(20)}{\\ln(3)} - 1$."
                            ],
                            intuition: "Logarithms 'pull down' variables from the exponent. They are the only way to solve for a variable that is trapped in a power."
                        },
                        {
                            title: "Example 3: Magnitude & Scale",
                            problem: "Compare the intensity of an earthquake of magnitude 8.0 vs 6.0 on the Richter scale ($M = \\log_{10}(I/I_0)$).",
                            steps: [
                                "Set up equations: $8 = \\log_{10}(I_8/I_0)$ and $6 = \\log_{10}(I_6/I_0)$.",
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
                                explanation: "The trap here is answering 10 — that's the common log ($\\log_{10}$), the engineer's log. The natural log uses $e \\approx 2.718$, and it's 'natural' for a deep reason: $e^x$ is the unique exponential that is its own derivative, which makes $\\ln x$ the unique logarithm whose derivative is the beautifully simple $\\frac{1}{x}$. That's why calculus, continuous growth models, and information theory all speak base $e$. Wrong-answer watch: base 2 belongs to computer science (bits); base 10 to slide rules and pH. Quick self-check: $\\ln(e) = 1$ by definition — the base that makes $\\ln(\\text{base}) = 1$ is the answer, and only $e$ qualifies."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Using the Rule of 72, if an investment grows at 6% annually, how long does it take to double?",
                                options: ["6 years", "12 years", "10 years", "72 years"],
                                answer: "12 years",
                                explanation: "The trap here is treating 72 as magic — it's an approximation with a real derivation. Exact doubling at rate $r$ takes $\\frac{\\ln 2}{\\ln(1+r)} \\approx \\frac{0.693}{r}$ years; for small $r$ this is about $\\frac{72}{100r}$, and 72 is chosen because it has many divisors (1, 2, 3, 4, 6, 8, 9, 12...), making mental math clean. Here: $72/6 = 12$ years. Wrong-answer watch: $72$ years forgets to divide by the rate; $6$ years confuses the rate with the time. Quick self-check: the exact math gives $\\ln 2 / \\ln 1.06 \\approx 11.9$ years — the rule's $12$ is within 1%, which is the whole point of a good heuristic."
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
                    videoUrl: "https://www.youtube.com/watch?v=S0_qX4VJhMQ",
                    intuition: "Rational functions are the ratios of rules, creating asymptotes and holes. They represent shared resources, inverse scaling, and the constraints of digital precision. Why they matter: whenever one quantity is divided by another that can approach zero — average cost per item, the lens formula, electrical resistance in parallel — rational functions appear, and their asymptotes mark the boundaries of what's physically possible. Visualize the graph as a landscape with fences: vertical asymptotes are walls the curve can never cross (division by zero), horizontal asymptotes are the horizon it approaches but never quite reaches, and holes are single missing planks you could fill with a finger. This chapter is where earlier skills fuse: factoring (Ch 6) finds the holes and asymptotes, and end-behavior analysis (Ch 5–6) predicts the horizon. Master this and you can 'read' a function's global behavior straight from its formula.",
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
                            problem: "Identify the vertical and horizontal asymptotes for $f(x) = \\frac{3x - 6}{x + 4}$.",
                            steps: [
                                "Vertical: Set denominator to zero: $x + 4 = 0 \\rightarrow x = -4$.",
                                "Horizontal: Compare degrees (n=1, d=1). They are equal.",
                                "Ratio of leading coefficients: $y = 3/1 = 3$.",
                                "Final Results: V.A. at $x = -4$, H.A. at $y = 3$."
                            ],
                            intuition: "Asymptotes are the 'unreachable horizons' of a function. The vertical asymptote is a hard boundary (division by zero), while the horizontal is the long-term trend."
                        },
                        {
                            title: "Example 2: Hole vs. Asymptote",
                            problem: "Determine if $f(x) = \\frac{x^2 - 9}{x - 3}$ has a hole or an asymptote at $x = 3$.",
                            steps: [
                                "Factor the numerator: $x^2 - 9 = (x - 3)(x + 3)$.",
                                "Function becomes $f(x) = \\frac{(x-3)(x+3)}{x-3}$.",
                                "Since the $(x-3)$ factor cancels out, it is a **Removable Discontinuity**.",
                                "Result: There is a **Hole** at $x = 3$."
                            ],
                            intuition: "A hole is a temporary logical gap that can be 'filled' by simplifying the code. An asymptote is a fundamental limit that cannot be crossed."
                        },
                        {
                            title: "Example 3: Complex Fraction Logic",
                            problem: "Simplify: $\\frac{\\frac{1}{x} + \\frac{1}{y}}{\\frac{1}{x} - \\frac{1}{y}}$",
                            steps: [
                                "Find the LCD of all small fractions: $xy$.",
                                "Multiply top and bottom by $xy$: $\\frac{xy(\\frac{1}{x} + \\frac{1}{y})}{xy(\\frac{1}{x} - \\frac{1}{y})}$.",
                                "Distribute: $\\frac{y + x}{y - x}$."
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
                                explanation: "The trap here is thinking that canceling a factor erases the problem — it doesn't. If $\\frac{(x-2)(x+3)}{(x-2)(x-5)}$ simplifies to $\\frac{x+3}{x-5}$, the SIMPLIFIED form is fine at $x = 2$, but the ORIGINAL function still computes $\\frac{0}{0}$ there — undefined. So the graph follows the simplified curve everywhere EXCEPT at $x = 2$, where a single point is missing: a hole (removable discontinuity). Contrast with a vertical asymptote, where the function blows up to $\\pm\\infty$ and no simplification can fix it. Wrong-answer watch: 'Vertical asymptote' confuses a removable gap with a blowup — check whether the factor cancels (hole) or survives in the denominator (asymptote). Quick self-check: always factor FIRST and note the canceled $x$-values before simplifying."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Find the Horizontal Asymptote of $f(x) = \\frac{4x^2 + 1}{2x^2 - 3}$.",
                                options: ["y = 0", "y = 2", "y = 4", "None"],
                                answer: "y = 2",
                                explanation: "The trap here is grabbing a single coefficient ($y = 4$). The horizontal asymptote describes the tug-of-war as $x \\to \\infty$: divide top and bottom by the highest power, $x^2$: $\\frac{4 + 1/x^2}{2 - 3/x^2} \\to \\frac{4}{2} = 2$. When the degrees are EQUAL, the asymptote is the RATIO of leading coefficients. The full rule: degree(top) < degree(bottom) → $y = 0$; equal → ratio; greater → no horizontal asymptote (oblique instead). Wrong-answer watch: $y = 4$ uses only the numerator's coefficient; $y = 0$ is the rule for a SMALLER-degree numerator. Quick self-check: test $x = 1000$ — $f(1000) \\approx 2.000$ hugs $y = 2$ ✓."
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
                    videoUrl: "https://www.youtube.com/watch?v=rfG8ce4nNh0",
                    intuition: "Conic sections are the shapes formed by slicing a cone. They describe the orbits of planets (ellipses), the shape of satellite dishes (parabolas), and the navigation of GPS signals (hyperbolas). Why they matter: conics are where algebra BECOMES geometry — every equation in this chapter draws a shape, and every shape has an equation, which is the central promise of analytic geometry. The unifying idea: all four conics are one family, distinguished by eccentricity $e$ — how 'stretched' the slice is ($e < 1$ ellipse, $e = 1$ parabola, $e > 1$ hyperbola). Visualize slicing an actual cone with a plane: tilt the cut slightly and the circle becomes an ellipse, then a parabola, then a hyperbola — one motion, four shapes. This connects backward to quadratics (Ch 5 — the parabola returns, now with focus and directrix) and forward to physics and astronomy, where these curves are the actual paths of planets, comets, and spacecraft.",
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
                            problem: "Find the vertices and foci of $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
                            steps: [
                                "Identify $a^2=25 \\to a=5$ and $b^2=9 \\to b=3$.",
                                "Vertices are $(\\pm 5, 0)$.",
                                "Find focal distance $c$: $c^2 = a^2 - b^2 = 25 - 9 = 16$.",
                                "So $c = 4$. Foci are $(\\pm 4, 0)$."
                            ],
                            intuition: "The major axis (a) defines the reach of the ellipse, while the foci (c) are the 'gravity centers' that govern its curvature."
                        },
                        {
                            title: "Example 3: Hyperbola Asymptotes",
                            problem: "Write the equations of the asymptotes for $\\frac{y^2}{16} - \\frac{x^2}{4} = 1$.",
                            steps: [
                                "Identify $a^2=16 \\to a=4$ (vertical axis) and $b^2=4 \\to b=2$ (horizontal).",
                                "The hyperbola is vertical (y-positive).",
                                "Asymptote slope is rise/run: $a/b = 4/2 = 2$.",
                                "Equations: $y = \\pm 2x$."
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
                                explanation: "The trap here is 'Perfect Circles' — a circle is just an ellipse with eccentricity 0, and real orbits are (slightly) eccentric ellipses. Kepler's First Law: planets orbit in ellipses with the Sun at ONE FOCUS — not the center. The deep reason: Newton's inverse-square gravity mathematically forces bound orbits to be conic sections, and the negative-energy ones are ellipses. Wrong-answer watch: parabolas and hyperbolas are the shapes of UNBOUND trajectories (comets passing through, never to return). Takeaway: the Sun sitting off-center at a focus — not in the middle — is exactly what makes the orbit an ellipse rather than a circle."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "What type of conic is represented by $x^2 - 4y^2 + 10x = 0$?",
                                options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
                                answer: "Hyperbola",
                                explanation: "The trap here is seeing two squared terms and guessing 'ellipse' — the SIGN between them decides. Opposite signs ($+x^2$ vs $-4y^2$) mean the equation can never describe a bounded curve: it must open in two opposite directions — a hyperbola. The general test: for $Ax^2 + Bxy + Cy^2 + \\cdots = 0$, the discriminant $B^2 - 4AC$ classifies it; here $0 - 4(1)(-4) = 16 > 0$ → hyperbola. Wrong-answer watch: 'Ellipse' needs the SAME sign on both squared terms (with $A \\ne C$); 'Parabola' needs only ONE squared term. Quick self-check: complete the square — $(x+5)^2 - 4y^2 = 25$ — the minus sign between the squares is the hyperbola's fingerprint."
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
                    videoUrl: "https://www.youtube.com/watch?v=3d6DsjIBzJ4",
                    intuition: "Nature is built on patterns. From the Fibonacci sequence to compound interest, sequences define how discrete steps build into continuous structures. Why they matter: sequences are functions whose domain is the counting numbers — they're how math handles anything that happens step by step: savings growing month by month, bacteria doubling hourly, algorithms looping. The chapter's two archetypes: arithmetic sequences (add the same amount — linear growth in disguise) and geometric sequences (multiply by the same ratio — exponential growth in disguise). The showpiece is the infinite geometric series: infinitely many terms collapsing into one finite number ($\\frac{a}{1-r}$) — your first real taste of infinity behaving politely, and a preview of calculus. This connects backward to exponentials (Ch 8 — geometric sequences ARE exponential functions sampled at integers) and forward to series in calculus, where infinite sums become the engine of approximation.",
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
                                "Use explicit formula: $a_n = a_1 \\cdot r^{n-1}$.",
                                "Substitute: $a_{10} = 3 \\cdot 2^{10-1} = 3 \\cdot 2^9$.",
                                "Calculate: $3 \\cdot 512 = 1,536$."
                            ],
                            intuition: "Geometric growth is explosive ($O(2^n)$). Each step represents a doubling of the system's state, common in data replication and infectious spread models."
                        },
                        {
                            title: "Example 3: Infinite Convergence",
                            problem: "Find the sum of the infinite series $10 + 5 + 2.5 + \\dots$.",
                            steps: [
                                "Identify $a_1 = 10$ and $r = 5/10 = 0.5$.",
                                "Since $|0.5| < 1$, the series converges.",
                                "Use $S = \\frac{a_1}{1 - r}$.",
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
                                explanation: "The trap here is including the endpoints: $|r| = 1$ does NOT converge. Why $|r| < 1$ works: each term shrinks by a fixed fraction, so the tail becomes negligible — formally, $S_n = a\\frac{1-r^n}{1-r}$ and $r^n \\to 0$ exactly when $|r| < 1$, leaving $\\frac{a}{1-r}$. Proof idea: subtract $rS$ from $S$ and the middle telescopes away. If $|r| \\ge 1$, the terms don't die out (for $r = 1$: $a + a + a + \\cdots$ diverges; for $r = -1$: it oscillates forever). Wrong-answer watch: '$r = 1$' gives a sum that grows without bound, not a finite number. Takeaway: convergence is about the terms DYING OUT — $|r| < 1$ is precisely the condition that kills them."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Find the 5th term of a geometric sequence where $a_1 = 3$ and $r = -2$.",
                                options: ["48", "-48", "96", "-32"],
                                answer: "48",
                                explanation: "The trap here is the sign: $(-2)^4 = +16$, NOT $-16$ — an even exponent eats the negative. Then $a_5 = a_1 \\cdot r^{4} = 3 \\cdot 16 = 48$ (note the exponent is $n - 1 = 4$, because $a_1$ already accounts for zero multiplications). Wrong-answer watch: $-48$ slips a sign into the even power; $96$ uses exponent $5$ instead of $4$; $-32$ computes $-(2^5)$, mangling both the sign and the index. Quick self-check: list the terms — $3, -6, 12, -24, 48$ — alternating signs with doubling magnitude; the 5th term lands positive ✓."
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
                    videoUrl: "https://www.youtube.com/watch?v=kfF40MiS7zA",
                    intuition: "Probability is the logic of uncertainty. It is the engine of Artificial Intelligence, governing how machines learn from data (Bayesian logic) and how we make decisions under risk. Why it matters: most real decisions — medical tests, investments, weather forecasts — are bets under uncertainty, and probability is the mathematics of betting WELL. The chapter builds in layers: counting (permutations and combinations measure how big the sample space is), conditional probability (how new evidence updates beliefs — Bayes' rule), and the normal distribution with z-scores (how to compare measurements from completely different worlds on one scale). Visualize probability as a fluid: total 1, poured across outcomes; evidence just re-pours it. This connects to everything: statistics is applied probability, machine learning is probability at scale, and the z-score standardization here is the same trick data scientists use before training any model.",
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
                                "Calculate Combination: $10C3 = \\frac{10!}{3!7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$.",
                                "Identify: Order MATTERS for defined roles.",
                                "Calculate Permutation: $10P3 = \\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$."
                            ],
                            intuition: "Order is the multiplier of possibilities. When you add rank or sequence, the number of states expands rapidly."
                        },
                        {
                            title: "Example 2: The Bayesian Spam Filter",
                            problem: "If 10% of all emails are spam ($P(S)=0.1$), and 80% of spam contains 'Free' ($P(F|S)=0.8$), while only 5% of good mail does ($P(F|G)=0.05$), what is $P(S|F)$?",
                            steps: [
                                "Use Bayes' Rule: $P(S|F) = \\frac{P(F|S)P(S)}{P(F)}$.",
                                "Calculate Total $P(F) = (0.8)(0.1) + (0.05)(0.9) = 0.08 + 0.045 = 0.125$.",
                                "Substitute: $P(S|F) = \\frac{(0.8)(0.1)}{0.125} = \\frac{0.08}{0.125} = 0.64$.",
                                "Result: There is a 64% chance the mail is spam."
                            ],
                            intuition: "Bayesian thinking is about 'Updating' probabilities. Seeing the word 'Free' boosted the probability of spam from 10% to 64%."
                        },
                        {
                            title: "Example 3: Standardizing the Score",
                            problem: "A student scored 85 on a test where the mean was 70 and deviation was 10. What is their Z-score, and where do they rank?",
                            steps: [
                                "Formula: $z = \\frac{x - \\mu}{\\sigma}$.",
                                "Calculate: $z = \\frac{85 - 70}{10} = 1.5$.",
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
                                explanation: "The trap here is scrambling 68 / 95 / 99.7 with 1 / 2 / 3 standard deviations — they pair in order: 1σ→68%, 2σ→95%, 3σ→99.7%. These are areas under the normal curve: about 95% of observations fall within $\\mu \\pm 2\\sigma$, leaving roughly 2.5% in each tail. But remember the fine print: this rule describes NORMAL (bell-shaped) distributions only — skewed data plays by different rules (Chebyshev's inequality is the fallback). Wrong-answer watch: 68% is the ONE-sigma figure; 99.7% is three sigmas. Quick self-check: the percentages must INCREASE with more sigmas — 95% within 2σ, with symmetric 2.5% tails, is the one to memorize cold."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "A value has a Z-score of -1.5. If the mean is 10 and standard deviation is 2, what is the value?",
                                options: ["8.5", "7", "11.5", "13"],
                                answer: "7",
                                explanation: "The trap here is dropping the sign or skipping the multiplication: $x = \\mu + z\\sigma$ needs BOTH. Compute carefully: $x = 10 + (-1.5)(2) = 10 - 3 = 7$. The negative $z$ means 'below the mean', and $\\sigma = 2$ stretches each $z$-unit into 2 raw units. Wrong-answer watch: $8.5$ forgets to multiply by $\\sigma$ ($10 - 1.5$); $13$ flips the sign ($10 + 3$); $11.5$ drops both errors at once ($10 + 1.5$). Quick self-check: $z = -1.5 < 0$, so the answer MUST sit below the mean of 10 — anything above 10 is immediately wrong."
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
                    videoUrl: "https://www.youtube.com/watch?v=riXcZT2ICjA",
                    intuition: "Periodic functions are the heartbeat of the universe. They model everything that repeats, from sound waves and light to the cycles of the economy and the rotation of engines. Why they matter: sines and cosines are the atoms of repetition — any repeating signal, no matter how complicated, can be decomposed into sine waves (Fourier's idea), which is how MP3s compress music and how noise-canceling headphones work. The chapter's core moves: radians (measuring angles by distance traveled around the unit circle — the 'natural' unit that makes calculus work), the unit circle (every trig value as coordinates), and transformations (amplitude, period, phase shift as dials you can turn). Visualize a point riding the unit circle: its height IS $\\sin\\theta$, its horizontal position IS $\\cos\\theta$ — the whole chapter is that one moving point. This connects forward to identities (Ch 14 — the algebra of these waves) and to physics, where every oscillation is a sine wave in disguise.",
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
                            problem: "Find the amplitude and period of $y = 5 \\sin(2x)$.",
                            steps: [
                                "Identify $a=5$. The amplitude is $|a| = 5$.",
                                "Identify $b=2$.",
                                "Calculate Period: $P = \\frac{2\\pi}{b} = \\frac{2\\pi}{2} = \\pi$.",
                                "The wave repeats every $\\pi$ units horizontally."
                            ],
                            intuition: "The $b$ value is the 'Speed Multiplier'. By doubling the speed of rotation, the wave completes its cycle twice as fast, cutting the period in half."
                        },
                        {
                            title: "Example 2: Arc Length & Radians",
                            problem: "How far does a point travel on a circle with radius 10cm if it rotates through $3\\pi/2$ radians?",
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
                                explanation: "The trap here is 'they double in amplitude' — that's CONSTRUCTIVE interference (waves in phase, peaks aligned). At $180°$ ($\\pi$ radians) out of phase, the peak of one wave sits exactly on the trough of the other: $\\sin(\\theta) + \\sin(\\theta + \\pi) = \\sin\\theta - \\sin\\theta = 0$ everywhere, for all time — total cancellation. Wrong-answer watch: 'The frequency doubles' confuses superposition (adding waves) with nonlinear effects; adding same-frequency waves can never change the frequency. Takeaway: this is the physics inside noise-canceling headphones — generate the anti-wave, add it, and silence remains."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Convert $5\\pi/6$ radians to degrees.",
                                options: ["120°", "150°", "210°", "300°"],
                                answer: "150°",
                                explanation: "The trap here is flipping the conversion fraction. Radians → degrees means multiplying by $\\frac{180°}{\\pi}$ (the radian units cancel): $\\frac{5\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{6} = 150°$. The $\\pi$'s cancel first — that's the whole point of the factor. Wrong-answer watch: multiplying by $\\frac{\\pi}{180}$ instead (the degrees→radians factor) gives a tiny nonsense number; $120°$ and $210°$ come from arithmetic slips in $5 \\times 180 / 6$. Quick self-check: $\\frac{5\\pi}{6}$ sits just under $\\pi$ ($180°$) and well above $\\frac{\\pi}{2}$ ($90°$) — so the answer must land between 90° and 180°, ruling out 210° and 300° instantly."
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
                    videoUrl: "https://www.youtube.com/watch?v=riXcZT2ICjA",
                    intuition: "Trigonometric identities are the 'algebra of geometry'. They allow us to simplify complex wave interactions, solve navigation problems, and optimize signal processing algorithms. Why they matter: identities are the REWRITE RULES of trigonometry — they let you morph any trig expression into the form you need, which is the entire skill behind proving identities, solving trig equations, and simplifying the formulas physics and engineering throw at you. The master strategy: when stuck, convert everything to sines and cosines — it's the 'common denominator' of trig. The Pythagorean identities ($\\sin^2\\theta + \\cos^2\\theta = 1$ and its children) do 90% of the work; the sum, double-angle, and half-angle formulas handle the rest. This chapter caps the trig arc (Ch 13 → Ch 14): Ch 13 taught you what the waves ARE, Ch 14 teaches you to manipulate them fluently — the same fluency Fourier analysis and quantum mechanics demand.",
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
                                explanation: "The trap here is doubting that dividing an identity is legal — it is, as long as you don't divide by zero ($\\cos\\theta \\ne 0$). Dividing every term of $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$ gives $\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}$, i.e. $\\tan^2\\theta + 1 = \\sec^2\\theta$ — the same truth, rescaled. It's not a new identity; it's the Pythagorean identity wearing a different outfit. Wrong-answer watch: $1 + \\cot^2\\theta = \\csc^2\\theta$ is what you get dividing by $\\sin^2\\theta$ instead — same move, different divisor. Quick self-check: test $\\theta = \\frac{\\pi}{4}$: $1 + 1 = 2$ and $\\sec^2(\\pi/4) = (\\sqrt{2})^2 = 2$ ✓."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Simplify $(1 - \\cos^2 \\theta) / \\sin \\theta$.",
                                options: ["1", "sin θ", "cos θ", "tan θ"],
                                answer: "sin θ",
                                explanation: "The trap here is 'canceling' the $\\sin\\theta$ to get 1 — you can't cancel across a subtraction. The legal move is the Pythagorean identity: $1 - \\cos^2\\theta = \\sin^2\\theta$ (it's $\\sin^2\\theta + \\cos^2\\theta = 1$, rearranged). Then $\\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$ (valid for $\\sin\\theta \\ne 0$). Wrong-answer watch: $1$ comes from misreading $1 - \\cos^2\\theta$ as $1$; $\\cos\\theta$ from grabbing the wrong Pythagorean rearrangement. Quick self-check: try $\\theta = \\frac{\\pi}{2}$: $\\frac{1 - 0}{1} = 1 = \\sin(\\pi/2)$ ✓ — one test value catches most algebra slips."
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
                    intuition: "School math teaches you to follow rules. Competition math teaches you to break them efficiently. This is the gym for your mathematical IQ. Why it matters: AMC problems are engineered to punish rote memorization and reward STRUCTURAL thinking — noticing that a counting problem is secretly a bijection, or that a scary Diophantine equation collapses under modular arithmetic. The training transfers directly: the 'look for the invariant', 'try small cases', and 'work backwards' reflexes you build here are the same moves behind real mathematical research and clever engineering. Visualize each problem as a locked room where the intended solution is the elegant one-line key, not the battering ram — if your approach needs three pages of computation, you're missing the intended insight. This module draws on all of Algebra 2 (number theory leans on Ch 6's factor thinking, combinatorics on Ch 12's counting) and points toward proof-based math — the world beyond computation.",
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
                                question: "What does the limit $\\lim_{x \\to \\infty} \\frac{1}{x}$ equal?",
                                options: ["1", "$\\infty$", "0", "Undefined"],
                                answer: "0",
                                explanation: "As the denominator gets infinitely large, the value of the fraction gets infinitely small, approaching 0."
                            },
                            {
                                title: "Level 2: Drill",
                                question: "Evaluate $\\lim_{h \\to 0} (6 + h)$.",
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
                            steps: ["Construct matrix $A = \\begin{pmatrix} 3 & -4 \\ 4 & 3 \\end{pmatrix}$.", "Calculate determinant: $(3)(3) - (-4)(4) = 9 + 16 = 25$.", "Result: Area is scaled by 25x."],
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
                    videoUrl: "https://www.youtube.com/watch?v=S0_qX4VJhMQ",
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
                    videoUrl: "https://www.youtube.com/watch?v=5yfh5cf4-0w",
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
                    videoUrl: "https://www.youtube.com/watch?v=5yfh5cf4-0w",
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
                            intuition: "This matters because most interesting calculus limits are exactly the ones algebra cannot evaluate directly: the 0/0 'holes' are where the action is. Picture the graph of $\\frac{x^2-9}{x-3}$: it looks identical to the line $y = x+3$ except for a single punctured dot at $x = 3$. Factoring and canceling 'patches' that hole by revealing the simpler function hiding underneath. This connects straight to the continuity work later in this unit: the repaired value IS the value a continuous extension would take, and the same 'refactor and cancel' instinct powers L'Hôpital's Rule in Unit 4."
                        },
                        {
                            title: "Practice FRQ (Level 3): IVT Justification",
                            problem: "Given a continuous function f(x) where f(1)=-2 and f(5)=4. Justify why there must be a 'c' in [1,5] such that f(c)=0.",
                            steps: [
                                "Protocol Step 1: State continuity. 'Since f is continuous on [1,5]...'",
                                "Protocol Step 2: Compare values. 'And since f(1)=-2 < 0 < 4=f(5)...'",
                                "Protocol Step 3: Invoke the theorem. 'By the Intermediate Value Theorem (IVT), there must exist at least one c...'"
                            ],
                            intuition: "This matters because the IVT is your first existence theorem: it guarantees a solution exists before you have found it, which is exactly how root-finding algorithms like bisection justify themselves. Picture a hiker walking from 200 feet below sea level to 300 feet above. Continuity (no teleporting) forces the path to cross sea level somewhere, and the theorem simply names that crossing point $c$. This uses the limit idea from earlier in Unit 1, since continuity is what makes the unbroken path possible, and the same 'guarantee without construction' pattern returns in the Mean Value Theorem in Unit 5."
                        }
                    ],
                    quiz: {
                        question: "If left-hand limit is 5 and right-hand limit is 5, but f(c) is 10, is f(x) continuous?",
                        options: ["Yes", "No", "Only if c=0", "DNE"],
                        answer: "No",
                        explanation: "The trap here is thinking 'limit exists, so we're done.' Continuity at $c$ demands a three-part handshake: (a) the limit exists, (b) $f(c)$ is defined, and (c) the two values are EQUAL, that is $\\lim_{x \\to c} f(x) = f(c)$. Here the limit exists (both sides give 5) and $f(c)=10$ is defined, but $5 \\ne 10$, so condition (c) fails. This is a removable discontinuity: a graph with a 'hole' at height 5 plus one isolated dot at $(c, 10)$. Wrong-answer watch: answering 'Yes' confuses the existence of a limit with continuity, but AP rubrics check all three conditions every time. Quick self-check: picture the graph. Your pencil would have to jump from the hole up to the dot, so no single unbroken trace exists, and the function is not continuous at $c$."
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
                            intuition: "This matters because the Power Rule turns differentiation from a painful limit computation into pattern matching: it is the single most-used differentiation shortcut in all of calculus. Picture $y = x^3$. The exponent 3 'kicks down' to become the multiplier while the power drops one notch, giving $3x^2$. Every term's degree falls by exactly one, so differentiation visibly 'flattens' polynomials. This is the payoff of the limit definition from Unit 1: the rule is just the difference-quotient limit pre-computed once, and it becomes the engine for every rule in Units 3 and 4 (product, quotient, chain)."
                        },
                        {
                            title: "Level 2: Quotient Trap",
                            problem: "Differentiate f(x) = (x^2) / (sin x).",
                            steps: [
                                "Rule: (Low D-High - High D-Low) / (Low^2).",
                                "Setup: (sin x * 2x - x^2 * cos x) / (sin x)^2.",
                                "Conclude: (2x sin x - x^2 cos x) / sin^2 x."
                            ],
                            intuition: "This matters because the Quotient Rule is the number-one sign-error trap on the AP exam: the subtraction order is the whole battle. Picture a fraction as a tug-of-war. The numerator's change pulls one way while the denominator's change pulls back, and the denominator squared normalizes the result: 'low d-high minus high d-low, all over low-low.' Getting the order backwards flips the sign of the entire derivative. This connects to the Product Rule from earlier in Unit 2 (a quotient is a product with $g^{-1}$), and the same 'derivative of a ratio' structure reappears in logarithmic differentiation in Unit 3."
                        }
                    ],
                    quiz: {
                        question: "If a function has a sharp 'corner', is it differentiable?",
                        options: ["Yes", "No", "Always", "Only if it's positive"],
                        answer: "No",
                        explanation: "The trap here is assuming continuity is enough. Differentiability is stricter: it asks whether the limit of the difference quotient $\\lim_{h \\to 0} \\frac{f(c+h)-f(c)}{h}$ exists, which is the same as asking whether the left-hand and right-hand slopes agree. At a sharp corner (picture $y=|x|$ at $x=0$), the left slope is $-1$ and the right slope is $+1$. Since $-1 \\ne +1$, the difference-quotient limit does not exist, so the function is not differentiable there, even though it is perfectly continuous. Wrong-answer watch: 'Yes' treats every continuous curve as smooth, but continuity is necessary, not sufficient, for differentiability. Quick self-check: zoom in on the corner as far as you like. The V-shape never straightens into a single line, so no unique tangent line can exist."
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
                            intuition: "This matters because nearly every real-world function is layered: position inside velocity inside acceleration, or in machine learning, nested activation functions. The Chain Rule is the only tool that peels layers correctly. Picture an onion. Differentiate the outer skin ($\\sin u$ becomes $\\cos u$), keep it wrapped around the inner layer, then multiply by the inner layer's own derivative ($x^3$ becomes $3x^2$): outside-in, one layer at a time. This uses the limit idea from Unit 1 in its proof (the difference quotient factors across the composition), and it becomes the backbone of implicit differentiation later in this unit and of related rates in Unit 4."
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
                            intuition: "This matters because most curves in science (circles, ellipses, level sets) cannot be solved for $y$ cleanly, yet we still need their slopes. Implicit differentiation finds slopes without ever isolating $y$. Picture $y$ as a puppet controlled by the string $x$: whenever you differentiate a $y$-term, the Chain Rule fires automatically and attaches the 'shadow' factor $\\frac{dy}{dx}$, because the puppet cannot move unless the string moves. This is the Chain Rule from earlier in Unit 3 applied to an unknown function, and the same idea (differentiate both sides, then solve for the rate) powers every related-rates problem in Unit 4."
                        }
                    ],
                    quiz: {
                        question: "What is the derivative of e^(2x)?",
                        options: ["e^(2x)", "2e^(x)", "2e^(2x)", "e^(2)"],
                        answer: "2e^(2x)",
                        explanation: "The trap here is forgetting the inner multiplier: the Chain Rule fires every time the exponent is more than a bare $x$. Since $e^{2x}$ is the composition of the outer function $e^u$ with the inner function $u=2x$, differentiate outside-in: $\\frac{d}{dx}e^u = e^u \\cdot u'$, so $\\frac{d}{dx}e^{2x} = e^{2x} \\cdot 2 = 2e^{2x}$. The factor of 2 is not decoration; it is the rate at which the exponent itself is changing. Wrong-answer watch: $e^{2x}$ drops the Chain Rule entirely (that is the derivative of $e^x$, not $e^{2x}$), and $2e^x$ moves the 2 onto the wrong exponent. Quick self-check: at $x=0$ the curve passes through $(0,1)$ with slope $2e^0 = 2$, twice as steep as the chain-rule-free answer would claim."
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
                            intuition: "This matters because related rates is calculus's answer to 'how fast is THAT changing': the bread and butter of physics and engineering word problems. Picture the circle as an onion. In one instant the radius grows a tiny bit $dr$, adding a thin ring of area whose size is roughly circumference times thickness ($2\\pi r \\cdot dr$). That is exactly why $\\frac{dA}{dt} = 2\\pi r\\,\\frac{dr}{dt}$ has the circumference $2\\pi r$ in it: each new layer's area is governed by the current perimeter. This uses the Chain Rule from Unit 3 ($A$ depends on $r$, which depends on $t$), and the same differentiate-both-sides instinct drives implicit differentiation and L'Hôpital's Rule in this unit."
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
                            intuition: "This matters because 0/0 limits are a race: the numerator and denominator are both sprinting to zero, and the limit is decided by who gets there faster. Picture two runners collapsing at the finish line. Differentiating top and bottom is like checking their instantaneous speeds at the line; the faster shrinker dominates. Here the first round is still 0/0 (a tie), so we race again: $\\lim_{x \\to 0}\\frac{e^x}{2} = \\frac{1}{2}$. This connects to the Squeeze Theorem intuition from Unit 1 (bounding a limit between two known behaviors) and previews Taylor series in BC: $e^x \\approx 1 + x + \\frac{x^2}{2}$ shows the $\\frac{1}{2}$ hiding in the quadratic term."
                        }
                    ],
                    quiz: {
                        question: "Can you use L'Hospital's Rule on 0/infinity?",
                        options: ["Yes", "No", "Only on Tuesdays", "Only if it's negative"],
                        answer: "No",
                        explanation: "The trap here is treating L'Hôpital's Rule as a universal limit solver. The rule is a theorem with hypotheses: it applies only to the two indeterminate forms $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$. The form $\\frac{0}{\\infty}$ is not indeterminate at all: a numerator shrinking to 0 while the denominator explodes forces the fraction toward 0 directly, no rule needed. Worse, applying L'Hôpital outside its hypotheses produces nonsense. Wrong-answer watch: 'Yes' assumes the rule works on any fraction-shaped limit, but forms like $0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$, and $\\frac{0}{\\infty}$ must each be refactored or evaluated directly first. Quick self-check: before differentiating top and bottom, write down the form. If it is not exactly $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, the rule is off-limits."
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
                            intuition: "This matters because critical points are the candidate locations for every maximum and minimum in optimization: from maximizing profit to minimizing material cost, the answer always hides among them. Picture a roller coaster cresting a hill. At the very top the track is momentarily flat ($f' = 0$) before plunging the other way: the derivative 'takes a breath' at exactly the turnaround. This uses the derivative-as-slope idea from Unit 2, and it sets up the First and Second Derivative Tests later in this unit, which classify each breath as a peak, a valley, or a flat straightaway."
                        },
                        {
                            title: "Practice FRQ (Level 3): MVT Justification",
                            problem: "If f(0)=0 and f(2)=10, justify why there must be a 'c' where f'(c)=5.",
                            steps: [
                                "State Differentiability: 'Since f is differentiable (and thus continuous)...'",
                                "Calculate avg ROC: (10-0)/(2-0) = 5.",
                                "Invoke MVT: 'By the Mean Value Theorem, there must exist c in (0,2) such that f'(c)=5.'"
                            ],
                            intuition: "This matters because the Mean Value Theorem is the theoretical bridge from average behavior to instantaneous behavior: it lets us rigorously claim a function 'must have' behaved a certain way somewhere. Picture a road trip. If you averaged 60 mph, your speedometer needle (moving continuously) had to sweep past 60 at least once; you cannot teleport from 40 to 80. Formally, differentiability on $(a, b)$ plus continuity on $[a, b]$ guarantees a $c$ with $f'(c) = \\frac{f(b)-f(a)}{b-a}$. This is the IVT's sibling from Unit 1 (both are existence theorems), and the MVT becomes the workhorse proving that functions with zero derivative are constant: the foundation of the FTC in Unit 6."
                        }
                    ],
                    quiz: {
                        question: "If f''(x) > 0, what is the 'shape' of the graph?",
                        options: ["Increasing", "Decreasing", "Concave Up (Cup)", "Concave Down (Frown)"],
                        answer: "Concave Up (Cup)",
                        explanation: "The trap here is confusing 'increasing function' with 'increasing slope'. The second derivative measures the rate of change of the SLOPE, not of the function value. If $f''(x) > 0$, the slope is increasing: it might climb from $-5$ to $-1$ (still falling, but flattening) or from $2$ to $8$. Either way, a slope that keeps increasing traces a cup shape $\\cup$, concave up, like the bottom of a valley. Wrong-answer watch: 'Increasing' describes $f' > 0$, a completely different test. A function can be decreasing yet concave up; picture $y = e^{-x}$, which falls while its slope climbs toward 0. Quick self-check: sketch $y = x^2$. It holds water like a cup, and its slope grows from negative to positive as you move right, exactly what $f''(x) = 2 > 0$ predicts."
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
                            intuition: "This matters because FTC Part 2 turns the hard problem (adding up infinitely many slices) into the easy problem (evaluate an antiderivative twice and subtract). Picture a bank account. The total deposits over a month equal the final balance minus the starting balance: you do not need every transaction, just the net change $F(b) - F(a)$. The antiderivative is the 'balance function' and the integral is the net deposit. This is the mirror image of the quiz's FTC Part 1 (differentiate the accumulator to recover the rate), and together the two parts close the loop: differentiation and integration are inverse operations, a fact Unit 7's differential equations exploit constantly."
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
                            intuition: "This matters because u-substitution is the single most-used integration technique: most integrals you will ever meet are Chain Rule derivatives in disguise. Picture running the Chain Rule film backwards. The integrand $x e^{x^2}$ has an 'extra' $x$ sitting next to $e^{x^2}$, which is exactly the inner derivative $\\frac{d}{dx}x^2 = 2x$ up to the constant 2. Set $u = x^2$ and the integral collapses to $\\frac{1}{2}\\int e^u\\,du$. The constant adjustment is the whole skill: constants can be absorbed, but a missing $x$ factor cannot. This directly reverses the Chain Rule from Unit 3, and the 'spot the inner derivative' instinct is the same one that makes implicit differentiation click."
                        }
                    ],
                    quiz: {
                        question: "What does FTC Part 1 say about d/dx [integral from a to x of f(t) dt]?",
                        options: ["F(x)", "f(x)", "f'(x)", "0"],
                        answer: "f(x)",
                        explanation: "The trap here is the dummy variable: $\\frac{d}{dx}\\int_a^x f(t)\\,dt$ differentiates with respect to the upper limit $x$, not the $t$ inside the integral. Think of the integral as an accumulator function $A(x)$, the area under $f$ up to $x$. FTC Part 1 says the rate at which area accumulates at $x$ is exactly the height of the curve there, $f(x)$, so $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. Differentiating the accumulated quantity recovers the original rate. Wrong-answer watch: $F(x)$ is an antiderivative, the answer to $\\int f(x)\\,dx$, not to this derivative. Choosing $f'(x)$ differentiates one layer too many, and $0$ confuses this with a definite integral, which is a constant. Quick self-check: test it with $f(t) = 2t$. Then $\\int_0^x 2t\\,dt = x^2$, and $\\frac{d}{dx}x^2 = 2x = f(x)$. The machinery closes the loop."
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
                            intuition: "This matters because slope fields let you 'see' a differential equation's solutions without solving anything: the entire family of solution curves is already drawn in the tick marks. Picture a weather map of wind arrows. Here the arrows depend only on longitude ($x$), so every vertical column of arrows is identical, and along the y-axis ($x = 0$) every arrow lies flat because $\\frac{dy}{dx} = 0$ there. Solution curves must thread through these arrows, so just from the field you can predict they will be parabolas $y = \\frac{x^2}{2} + C$. This is the geometric face of the derivative from Unit 2, and it previews Euler's method in BC, which builds solutions by walking along these arrows step by step."
                        }
                    ],
                    quiz: {
                        question: "If dy/dx = ky, what is the general solution?",
                        options: ["y = kx + C", "y = Ce^(kx)", "y = x^k", "y = sin(kx)"],
                        answer: "y = Ce^(kx)",
                        explanation: "The trap here is confusing proportional growth with linear growth. The equation $\\frac{dy}{dx} = ky$ says the rate of change is proportional to the CURRENT amount: the more you have, the faster you grow, like compound interest or an unchecked population. Separate the variables: $\\frac{dy}{y} = k\\,dx$. Integrating gives $\\ln|y| = kx + C_1$, and exponentiating yields $y = Ce^{kx}$: exponential growth, not linear. The constant $C$ is simply the initial amount $y(0)$, fixed by the starting condition. Wrong-answer watch: $y = kx + C$ solves $\\frac{dy}{dx} = k$, a constant rate (arithmetic growth), not a rate that scales with $y$. And $y = x^k$ is power growth with the wrong structure entirely. Quick self-check: differentiate $Ce^{kx}$ to get $kCe^{kx} = ky$, which reproduces the original equation and confirms the solution."
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
                            intuition: "This matters because 'area between curves' is the template for every accumulation-between-two-things problem, including the volumes in the next lesson. Picture a sandwich. At each $x$, the vertical slice has height (top function minus bottom function), and integrating stacks all those slices from $x = 0$ to $x = 1$. The order matters: top minus bottom keeps every slice positive, while flipping it would compute negative area. This is Riemann-sum accumulation from Unit 6 with a fancier slice height, and the same 'integrate the slice' strategy scales up to washers and cross-sections next."
                        }
                    ],
                    quiz: {
                        question: "Which method is used for a solid of revolution with a 'hole' in the middle?",
                        options: ["Disk Method", "Was cowl Method", "Washer Method", "Riemann Method"],
                        answer: "Washer Method",
                        explanation: "The trap here is reaching for the Disk Method on autopilot. When the revolved region does not touch the axis of rotation, each cross-section is a disk with a bite taken out of it: a washer with area $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$, where $R$ is the outer radius (far edge to the axis) and $r$ is the inner radius (near edge to the axis). The method models the hole directly: full disk minus missing core, slice by slice. Wrong-answer watch: the plain Disk Method only applies when the region touches the axis ($r = 0$). Using it here fills the hole with phantom volume you never had. Quick self-check: if the region did touch the axis, the washer formula collapses to the disk formula, since $r = 0$ gives $\\pi R^2$. The washer is the general case; the disk is its special case."
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
                            intuition: "This matters because the Squeeze Theorem is how calculus tames functions too wild to evaluate directly: it is the rigorous version of 'if you are trapped between two things both going to zero, you go to zero too.' Picture $\\sin(1/x)$ as a spring oscillating insanely fast near 0, trapped between the envelopes $y = x^2$ and $y = -x^2$. As $x \\to 0$ both envelopes pinch shut at the origin, squashing the wild oscillation flat, so the limit must be 0. The proof idea is pure $\\epsilon$-$\\delta$: for any $\\epsilon > 0$, the envelope bound $|x^2\\sin(1/x)| \\le x^2$ forces the function within $\\epsilon$ of 0 once $x$ is close enough. This is the Unit 1 limit machinery at full power, and the same bounding instinct returns in BC for series error bounds (Lagrange) in Unit 10."
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
                            intuition: "This matters because $\\epsilon$-$\\delta$ is the foundation everything in calculus stands on: limits, continuity, derivatives, and integrals are all defined in this language, and BC demands that you speak it. Picture a challenge game. Your opponent names any tolerance $\\epsilon$ around the target value 5 ('get within 0.001'), and you must produce a $\\delta$-window around $x = 3$ guaranteeing success. Here $|(2x-1) - 5| = 2|x - 3| < \\epsilon$ whenever $|x - 3| < \\epsilon/2$, so $\\delta = \\epsilon/2$ wins every round. The proof idea is working backwards from the goal: massage $|f(x) - L| < \\epsilon$ until $|x - a|$ appears, then read off $\\delta$. This formalizes the intuitive limits from AB Unit 1, and it is the same rigor the Squeeze Theorem and series convergence proofs lean on later."
                        }
                    ],
                    quiz: {
                        question: "If f(x) is continuous, does f(c) always exist for any c in the domain?",
                        options: ["Yes", "No", "Only if differentiable", "Only if positive"],
                        answer: "Yes",
                        explanation: "The trap here is thinking continuity just means 'no breaks in the drawing.' The formal definition is a three-part contract at every point $c$ of the domain: (1) $f(c)$ must be defined, so the function actually has a value there; (2) $\\lim_{x \\to c} f(x)$ must exist, so the left and right behavior agree; (3) the two must match, so the value equals the limit. That means for any $c$ in the domain of a continuous function, $f(c)$ necessarily exists: continuity is impossible at a point where the function is undefined, because condition (1) cannot even be stated. Wrong-answer watch: 'Only if differentiable' reverses the logic. Differentiability IMPLIES continuity, not the other way around; a corner like $|x|$ at 0 is continuous but not differentiable. Quick self-check: try $f(x) = \\frac{1}{x}$ at $x = 0$. Since $f(0)$ is undefined, continuity there is not even a question the definition can ask."
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
                            intuition: "This matters because high-order derivatives reveal hidden structure, and in BC the $n$th-derivative pattern is literally the engine that builds Taylor series coefficients ($f^{(n)}(a)/n!$). Picture the derivatives of $\\sin x$ as a four-step dance that loops forever: $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin \\cdots$. The 50th derivative is just the 2nd one ($50 = 4 \\cdot 12 + 2$), giving $-\\sin x$. Spotting the cycle beats differentiating 50 times. This extends the basic differentiation rules from AB Unit 2, and the same 'find the period' thinking powers the ratio test and power series work in Unit 10."
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
                            intuition: "This matters because functions like $x^x$ defeat every standard rule: the Power Rule needs a constant exponent, the exponential rule needs a constant base, and here both are moving. Picture logarithms as a crane that lifts the exponent down from the sky. Taking logs gives $\\ln y = x\\ln x$, turning the untouchable $x^x$ into a product, which the Product Rule handles easily ($\\frac{y'}{y} = \\ln x + 1$); then multiply back by $y$. The key move is implicit differentiation of $\\ln y$, which produces $\\frac{y'}{y}$ as the Chain Rule fires on a logarithm. This fuses the Chain Rule and implicit differentiation from earlier in this unit, and the 'take logs to linearize' trick reappears in logistic growth (Unit 7) and throughout differential equations."
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
                            intuition: "This matters because the logistic model is the realistic version of exponential growth: it describes populations, rumor spread, and even neural-network saturation, anywhere growth hits a ceiling. Picture a concert venue with exactly 500 seats. When the crowd is small, newcomers arrive fast (near-exponential), but as seats fill, the $(1 - P/500)$ factor chokes growth toward zero, and the $P = 500$ equilibrium is where arrivals and departures balance. The 'seats' are the carrying capacity $L$, readable directly from the factored form $\\frac{dP}{dt} = kP(1 - P/L)$. This builds on the exponential model $\\frac{dP}{dt} = kP$ from AB Unit 7 (logistic is what happens when the environment pushes back), and the equilibrium analysis here previews stability ideas in differential equations."
                        },
                        {
                            title: "Practice FRQ (Level 3): Euler's Step Justification",
                            problem: "Use Euler's method with 2 steps of h=0.5 to approx f(1) if dy/dx=x+y and f(0)=1.",
                            steps: [
                                "Step 1: (0,1), slope=1. Next y = 1 + 1(0.5) = 1.5.",
                                "Step 2: (0.5, 1.5), slope=2. Next y = 1.5 + 2(0.5) = 2.5.",
                                "Conclude: f(1) approx 2.5."
                            ],
                            intuition: "This matters because most differential equations in science cannot be solved with formulas: Euler's method is the simplest numerical solver, the ancestor of every ODE integrator in engineering software. Picture hiking in dense fog with only a compass showing the local slope. Walk straight for a short step $h$, re-check the compass at your new position, walk again. Each step is $y_{n+1} = y_n + h\\cdot f(x_n, y_n)$, and smaller steps mean less drift, since you re-check the 'compass' more often. This is the slope-field idea from AB Unit 7 turned into an algorithm (the field IS the compass), and the local-linearization instinct is the same one behind tangent-line approximations in Unit 4."
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
                            intuition: "This matters because polar coordinates describe rotation-symmetric phenomena (planetary orbits, antenna patterns, spirals) where rectangles are the wrong shape and sectors are natural. Picture the curve $r = 3\\sin\\theta$ as a pizza being sliced from the origin. Each infinitesimal slice has angle $d\\theta$ and radius $r$, so its area is $\\frac{1}{2}r^2\\,d\\theta$: a sector, not a triangle (the $\\frac{1}{2}$ comes from the sector area formula $\\frac{1}{2}r^2\\theta$). Integrating stacks the slices: $\\int_0^{\\pi} \\frac{1}{2}(3\\sin\\theta)^2\\,d\\theta = \\frac{9\\pi}{4}$. This is Riemann-sum accumulation from AB Unit 6 with polar slices instead of rectangles, and the limits $0$ to $\\pi$ (not $2\\pi$) come from tracing the circle exactly once: a classic polar pitfall."
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
                            intuition: "This matters because Taylor series are how computers actually compute $\\sin x$, $e^x$, and $\\ln(1+x)$: no calculator has a 'sine' circuit, just polynomial arithmetic. Picture zooming into $\\sin x$ at the origin. The curve looks increasingly like its tangent line $y = x$, then like the cubic $x - \\frac{x^3}{3!}$, then the quintic: each added term matches one more derivative at the center, so the polynomial 'personality' gets more faithful. The pattern here (alternating signs, odd powers, factorials) comes straight from the four-cycle of trig derivatives in Unit 2, since $\\sin^{(n)}(0)$ cycles through $0, 1, 0, -1$. This is the payoff of the entire BC course (limits, derivatives, and series converging), and the Lagrange error bound in the next lesson tells you exactly how faithful the personality is."
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
                            intuition: "This matters because a power series is only a faithful stand-in for its function INSIDE its interval of convergence: using it outside is like navigating with a map of the wrong city. Picture the center $x = 2$ as home base with a 'safety radius' of 3. The Ratio Test measures how fast the terms shrink and reports $|x - 2| < 3$, the open interval $(-1, 5)$, and then you must interrogate the endpoints individually (here both diverge, so the interval stays open). Outside $(-1, 5)$ the terms do not even go to zero, so the series blows up: the nth-Term Test from the Unit 11 quiz would kill it in one line. This fuses the convergence tests from earlier in Unit 10, and the endpoint-checking discipline is exactly what AP FRQs grade."
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
                        explanation: "The trap here is reaching for the Ratio Test first on every series. It is powerful but slow. The nth-Term Test for Divergence is your bouncer at the door: if $\\lim_{n \\to \\infty} a_n \\ne 0$ (or the limit fails to exist), the series $\\sum a_n$ diverges immediately, full stop, with no further testing needed. Why? A convergent series must have terms shrinking to zero; otherwise the partial sums keep growing by non-vanishing chunks. Note it is a one-way test: passing it ($a_n \\to 0$) proves nothing, since the harmonic series $\\sum \\frac{1}{n}$ passes and still diverges. Wrong-answer watch: running the Ratio Test on $\\sum \\frac{n}{n+1}$ wastes a page of algebra where one glance ($a_n \\to 1 \\ne 0$) ends the story. The Integral Test, meanwhile, demands a positive, decreasing, continuous function: overkill for a ten-second check. Quick self-check: make the nth-term check the literal first line of scratch work on every series problem. If the terms do not vanish, you are done in one line."
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
                            intuition: "This matters because gradient descent is the algorithm training virtually every neural network: it is how AI 'learns' by minimizing error across millions of parameters. Picture yourself on a foggy mountainside holding an altimeter. You cannot see the valley, but the gradient $\\nabla f$ reports the steepest uphill direction at your feet, so you step the opposite way ($-\\nabla f$), re-measure, and repeat. Each step is $\\mathbf{x}_{n+1} = \\mathbf{x}_n - \\eta\\nabla f(\\mathbf{x}_n)$, where the learning rate $\\eta$ is your step size: too big and you leap over the valley, too small and you crawl. This is the gradient from L2 and L3 of this unit made into an algorithm (steepest descent runs perpendicular to level curves), and it is the computational payoff of multivariable calculus: the same idea scales to hundred-dimensional loss landscapes."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Conceptual Intuition",
                                question: "Geometrically, what does $f_x$ represent for a function $f(x, y)$?",
                                answer: "Slope parallel to x-axis",
                                options: ["Total volume", "Slope parallel to x-axis", "Slope parallel to y-axis", "Area of tangent plane"],
                                explanation: "The trap here is reading $f_x$ as the 'total' slope of the surface. A partial derivative is a slice, not the whole picture: $f_x$ is the slope of the curve you get by freezing $y$ at a constant and walking in the $x$-direction. Geometrically, it is the tangent line parallel to the $x$-axis on the surface $z = f(x, y)$. Holding the other variables constant is what makes it 'partial': you measure the rate of change along one coordinate axis only and ignore everything else. Wrong-answer watch: 'Slope parallel to the y-axis' describes $f_y$, a different measurement. 'Total volume' and 'area of tangent plane' mix up derivatives with integrals or full two-dimensional constructions. Quick self-check: for $f(x, y) = x^2 + y^3$, we get $f_x = 2x$, which does not even contain $y$. Freeze $y$ and the surface becomes a family of parabolas, each with slope $2x$ at that height."
                            },
                            {
                                title: "L2: Applied Analysis",
                                question: "For $f(x, y) = x^2 y$, what is the gradient $\\nabla f$ at point $(1, 2)$?",
                                answer: "(4, 1)",
                                options: ["(2, 1)", "(4, 1)", "(1, 2)", "(4, 2)"],
                                explanation: "The trap here is stopping after computing the partials and forgetting to evaluate them at the point. Step by step: differentiate partially to get $f_x = 2xy$ (treating $y$ as a constant) and $f_y = x^2$ (treating $x$ as a constant). Note that $f_y$ at $(1, 2)$ is $1^2 = 1$, not 2, because differentiating killed the $y$ factor. Now substitute $(x, y) = (1, 2)$: $f_x(1, 2) = 2(1)(2) = 4$ and $f_y(1, 2) = 1$, so $\\nabla f(1, 2) = \\langle 4, 1 \\rangle$. Wrong-answer watch: $(2, 1)$ is the gradient at $(1, 1)$; evaluating at the wrong point or half-substituting is the classic slip. And $(4, 2)$ comes from differentiating the $y$ as if it were $2y$. Quick self-check: the gradient points in the direction of steepest increase. At $(1, 2)$ the surface rises 4 units per $x$-step and 1 per $y$-step, matching the answer's proportions."
                            },
                            {
                                title: "L3: Elite Mastery",
                                question: "What is the relationship between the gradient vector and level curves?",
                                answer: "They are always orthogonal",
                                options: ["They are parallel", "They are always orthogonal", "They form a 45-degree angle", "No relationship"],
                                explanation: "The trap here is memorizing 'perpendicular' without the why. A level curve $f(x, y) = c$ is the set of points where the function does not change at all, so moving along it, the directional derivative is zero. The gradient $\\nabla f$ is the direction of MAXIMUM change, and the only direction that can be 'maximum' while the tangent direction gives 'zero change' is the one at $90^\\circ$ to it. The Chain Rule says it precisely: differentiating $f(\\mathbf{r}(t)) = c$ gives $\\nabla f \\cdot \\mathbf{r}'(t) = 0$, a zero dot product, which is orthogonality. Wrong-answer watch: 'Parallel' would mean walking along the level curve changes the value fastest, but the value is constant there by definition, a contradiction. Quick self-check: look at a topographic map. Contour lines are level curves, and the steepest downhill path crosses them at right angles. Your hiking intuition already knows this theorem."
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
                                answer: "2",
                                options: ["1", "2", "3", "Infinite"],
                                explanation: "The trap here is counting directions instead of INDEPENDENT directions. A basis is a minimal spanning set: enough vectors to reach every point, with none redundant. In a 2D plane you need exactly 2. One vector gives only a line (one-dimensional), and a third vector can always be written as a combination of the other two, adding nothing new. That is why the number of basis vectors always equals the dimension: dimension IS defined as the size of any basis. Wrong-answer watch: '3' or 'Infinite' confuses 'spanning' with 'being a basis.' Infinitely many sets span the plane, but only two-vector independent sets are bases. Quick self-check: test any candidate basis for independence. If $a\\mathbf{v}_1 + b\\mathbf{v}_2 = \\mathbf{0}$ forces $a = b = 0$, and the space is two-dimensional, you are done; no third vector can sneak in."
                            },
                            {
                                title: "L2: Transformations",
                                question: "What does it mean if a transformation matrix has a determinant of 0?",
                                answer: "Space lost dimensions",
                                options: ["Area is preserved", "Only rotation occurred", "Space lost dimensions", "Inverse matrix exists"],
                                explanation: "The trap here is reading 'determinant zero' as 'nothing happens.' The determinant measures volume scaling: $|\\det A|$ is how much the transformation stretches or shrinks volumes. A determinant of 0 means volumes collapse to zero: the transformation squashes space flat, sending a 2D plane onto a line (or a point) and a 3D volume onto a plane at most. Dimension is genuinely lost: distinct inputs land on the same output, so the map cannot be undone, and no inverse matrix exists, exactly as multiplying by zero has no reciprocal. Wrong-answer watch: 'Inverse matrix exists' is the exact opposite of the truth; invertibility requires $\\det \\ne 0$. 'Area is preserved' describes $|\\det| = 1$, the case of rotations and reflections. Quick self-check: a singular matrix has linearly dependent columns. If one column is a multiple of another, the transformation is already collapsing that direction, and the determinant must be 0."
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
                    intuition: "Axioms are the 'atoms' of thought: tiny, undeniable truths from which we build entire universes. Nothing proves an axiom — that is the point. Like Euclid's parallel postulate, axioms are the handful of statements we agree to accept without argument, and everything else is built upward from them: axioms feed definitions, definitions feed lemmas, lemmas feed theorems. Picture them as the Lego bricks of a logical universe — change even one brick (as non-Euclidean geometry did with the parallel postulate) and you build an entirely different world. That is why the choice of axioms matters so much: it silently decides everything your system can ever prove, and it connects directly to the proof strategies in Units 2–4, where every derivation must trace back to these starting truths.",
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
                                answer: "Axioms are starting points; Theorems are proven from them",
                                explanation: "The trap here is thinking axioms get 'proved' by experiments or authority — nothing proves an axiom. An axiom is a starting point we agree to accept (like Euclid's parallel postulate); a theorem is the destination, a statement proven by chaining logic back down to the axioms. Proof strategy: to prove a theorem, trace its dependencies backward like a river to its spring — every step must be justified until you reach axioms or already-proven theorems. Wrong-answer watch: 'Theorems are self-evident' reverses the roles — theorems earn certainty through proof, while axioms start with certainty by agreement. Quick self-check: ask 'was this proven, or was it agreed to?' — proven means theorem, agreed means axiom."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Geometric Visual Proofs",
                    intuition: "A diagram can be a complete proof — moving us from 'calculated' results to 'seen' truths. Where algebra manipulates symbols, a picture lets you watch why something must be true — the Pythagorean theorem falling out of four rearranged triangles, or a sliced circle unfurling into a rectangle with area $\pi r^2$. These 'proofs without words' work because your brain's fastest, most reliable reasoning is visual. But pictures demand discipline too: a misleading diagram can fool the eye, so every visual insight here gets checked against logic. Think of the diagram as the argument's skeleton and the logic as its spine — together they make proofs you can both see and trust, a skill that carries straight into the geometric derivations of Unit 4.",
                    topics: ["Slicing the Circle", "Pythagorean Rearrangement", "The Square of Sums"],
                    lectures: [
                        { name: "2.1: Slicing to Find Area", url: "lesson:proof_logic:proof_logic-u2-1" },
                        { name: "2.2: The Square inside a Square", url: "lesson:proof_logic:proof_logic-u2-2" }
                    ],
                    examples: [
                        {
                            title: "Visual Mastery: Pi Intuition",
                            problem: "How does slicing a circle into infinite triangles prove the area is $A = \\pi r^2$?",
                            steps: [
                                "Slice circle into small wedges.",
                                "Rearrange wedges into a rectangle-like shape.",
                                "Observe the base is half the circumference ($\\pi r$) and height is $r$.",
                                "Calculate area: $r \\times \\pi r = \\pi r^2$."
                            ],
                            intuition: "Infinity is a tool for simplification. By making things smaller, we make the truth bigger."
                        }
                    ]
                },
                {
                    title: "Unit 3: Algebraic Derivations",
                    intuition: "Where did the formulas come from? We strip away the Quadratic and Binomial labels to expose the mechanical heart of Algebra. A formula is not a magic spell — it is a shortcut through a derivation someone once did by hand. Here we peel back the Quadratic Formula to watch it grow out of completing the square, and we dissect Pascal's triangle to see the Binomial Theorem counting real combinations, $\binom{n}{k}$, one row at a time. Picture a formula as a frozen river: beneath the smooth surface, a whole logical current still flows. Reconnecting with those currents is what separates memorizers from problem-solvers — and it links back to Unit 1's axioms, because every step of a derivation must be justified, or the formula inherits nothing.",
                    topics: ["Completing the Square", "Binomial Theorem Geometry", "Summing Infinity"],
                    lectures: [
                        { name: "3.1: Deriving the Quadratic Formula", url: "lesson:proof_logic:proof_logic-u3-1" },
                        { name: "3.2: Pascal’s Triangle Mechanics", url: "lesson:proof_logic:proof_logic-u3-2" }
                    ]
                },
                {
                    title: "Unit 4: Calculus from First Principles",
                    intuition: "The derivative is not a formula; it is a movement — the secant line sliding until it becomes the tangent. Imagine zooming in on a curve again and again: the secant joining two nearby points slides until it melts into the tangent line, and the slope it carries is the instantaneous rate of change. That sliding is the limit in action: not a static value, but a process arriving. Picture a car on a highway — average speed over a long stretch is the secant; the speedometer reading at one instant is the tangent. This single image fuses algebra, geometry, and physics, and it is the seed from which all of calculus grows. It also closes the loop with Unit 1: the $\epsilon$-$\delta$ definition exists precisely to turn this beautiful movement into axiom-grade certainty.",
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
                    intuition: "Hypothesis testing is the judicial system of science. We hold the 'Null' innocent until the evidence (a small p-value) proves the 'Alternative' guilty. This framing matters for your IBET research: a guilty verdict against the null is exactly what turns an anecdote into a discovery. But courts make mistakes, and so do tests — convicting the innocent is a Type I error (controlled by your $\alpha$), letting the guilty walk is a Type II error (controlled by sample size and power). Keep the metaphor running through this unit: the t-test, z-test, and confidence interval are just different courtrooms running the same trial, and the p-value is always the jury's verdict on how surprising your data would be if the null were telling the truth.",
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
                                explanation: "The trap here is picking 'the result we want to prove' — that is the alternative hypothesis ($H_a$), the exciting claim. The null ($H_0$) plays devil's advocate: it states there is no effect, no difference, nothing going on — and we try our hardest to prove it wrong. Proof strategy: contradiction — assume the null is true, compute how weird our data would be under that assumption (that weirdness score is the p-value), and if it is too weird to believe, reject the null. Wrong-answer watch: 'potential error in sampling' describes Type I and Type II errors, not the hypothesis itself — those errors are about the verdict, not the charge. Quick self-check: the null is always the boring claim — 'the drug does nothing,' 'the means are equal.' If your claim sounds exciting, it is the alternative."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 2: Categorical Analysis (Chi-Square)",
                    intuition: "Chi-Square is the 'Equality Inspector'. It audits whether the counts you actually observed match the counts your model expected. The statistic $\chi^2 = \sum \frac{(O-E)^2}{E}$ is a penalty score: big mismatches inflate it fast, especially in categories you expected to be rare — dividing by a small $E$ makes discrepancies hurt more. Picture a quality-control inspector on a conveyor belt: Mendel's 9:3:3:1 ratio is the factory blueprint, and your seed counts are the actual products rolling off. This connects chi-square straight back to Unit 1's hypothesis testing — the null hypothesis here is simply 'the blueprint is right,' and the p-value of your $\chi^2$ decides whether to keep or reject it. Degrees of freedom (this unit's quiz) then tell the $\chi^2$ distribution exactly which shape to use for the verdict.",
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
                                explanation: "The trap here is answering 4 — the number of categories themselves. Degrees of freedom count how many categories are free to vary: once the total is fixed and you know three of the four counts, the fourth is forced ($total - c_1 - c_2 - c_3$), so $df = 4 - 1 = 3$. Think of it as 'room to move' — three categories can roam freely, but the last one is locked in place by the total. Wrong-answer watch: 4 ignores the constraint that observed counts must sum to the sample size; that total always consumes exactly one degree of freedom. Quick self-check: if the total is 1600 peas and the first three counts are 900, 300, 300, the fourth must be 100 — only three numbers were truly free."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 3: Regression & Correlation",
                    intuition: "Correlation measures the strength of the handshake between two variables; regression goes further and tells you what happens next. The correlation coefficient $r$ is the handshake's firmness (from $-1$ to $+1$); squaring it gives $R^2$, the fraction of $y$'s wobble your line explains; and the residuals — what is left over — reveal whether your straight-line model was even telling the truth. Think of $r$ as a weather vane and regression as a forecast: one describes, the other predicts. But remember the classic caution — a firm handshake is not causation, and a curved relationship can hide behind a weak $r$. These tools extend Unit 1's courtroom logic into prediction: once you can reject 'no relationship,' regression lets you measure the relationship and use it.",
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
                                explanation: "The trap here is grabbing 1 (perfect positive) or 0 (no correlation) without reading the sign. An R-value of $-1$ is perfect negative correlation: as $x$ climbs, $y$ falls in an exact straight line — every point lands on the line with zero scatter. Picture a see-saw: one side up means the other side down, locked in perfect opposition. Wrong-answer watch: $-0.5$ is only a moderate negative relationship — 'perfect' demands the extreme, $|r| = 1$, in either direction. Quick self-check: square it — $R^2 = 1$ means the line explains 100% of the variation, the hallmark of perfection."
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
                                explanation: "The trap here is trying to compute $3^{2024}$ directly — it has 968 digits, and even a calculator chokes on the modulus. Proof strategy (cycle detection): compute the first few powers mod 10 — $3^1 \equiv 3$, $3^2 \equiv 9$, $3^3 \equiv 7$, $3^4 \equiv 1$ — and the moment you hit 1, the cycle restarts with length 4. Since $2024 \div 4$ has remainder 0, $3^{2024} \equiv (3^4)^{506} \equiv 1^{506} = 1 \pmod{10}$. Wrong-answer watch: 3 is just $3^1$ — it ignores the cycle and answers as if the exponent were 1. Quick self-check: $3^{2024} = (3^4)^{506}$, and anything built from 1 stays at 1 mod 10. Speed tip: on AMC, reduce the exponent modulo the cycle length first ($2024 \bmod 4 = 0$) — never multiply out the full power."
                            },
                            {
                                title: "L3: Competition Challenge",
                                question: "What is the primary condition for applying the Chinese Remainder Theorem?",
                                answer: "Moduli must be coprime",
                                options: ["Moduli must be prime", "Moduli must be coprime", "Moduli must be even", "Always applicable"],
                                explanation: "The trap here is 'moduli must be prime' — prime moduli work, but the real condition is weaker and more useful. The Chinese Remainder Theorem guarantees a unique solution mod $mn$ exactly when $\gcd(m,n) = 1$ (coprime). Proof strategy (counterexample): try $x \equiv 1 \pmod{6}$ with $x \equiv 2 \pmod{4}$ — since 6 and 4 share a factor of 2, no integer can satisfy both at once, and the system collapses. But $x \equiv 1 \pmod{5}$ with $x \equiv 2 \pmod{7}$ ($\gcd = 1$) stitches into one unique solution mod 35. Wrong-answer watch: 'always applicable' skips the coprime requirement entirely, and 'moduli must be even' is pure noise. Speed tip: check $\gcd$ with Euclid's algorithm — it takes seconds and decides the whole problem before you write a single congruence."
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
                                answer: "44",
                                options: ["44", "120", "24", "9"],
                                explanation: "The trap here is 120 ($5!$) — that counts every permutation, including the ones where someone goes home with their own hat. A derangement bans every fixed point. Proof strategy (inclusion–exclusion): start with everything, then alternately subtract and add back the arrangements that fix at least one, two, three… people: $D_5 = \binom{5}{0}5! - \binom{5}{1}4! + \binom{5}{2}3! - \binom{5}{3}2! + \binom{5}{4}1! - \binom{5}{5}0! = 120 - 120 + 60 - 20 + 5 - 1 = 44$. Wrong-answer watch: 24 is $4!$, the count for four people — a 'shift-down' mistake; 9 is $D_4$, one hat too few. Quick self-check: $44/120 \approx 0.367 \approx 1/e$ — derangements always converge to about $1/e$ of all permutations, a beautiful sanity check. Speed tip: memorize the sequence 1, 0, 1, 2, 9, 44, 265 — derangements show up constantly."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 3: Advanced Heuristics (AMC/AIME)",
                    intuition: "When the clock is ticking, elegance beats brute force. Here we master 'AIME-style' 3-digit logic. Competition problems are engineered so the clever path takes a minute and the grind takes twenty — this unit trains your eye for the clever path. Stars & bars collapses distribution puzzles into a single combination; complementary counting solves 'at least one' by subtracting the one case it isn't; modular invariants prove the impossible without trying every case. Since AIME answers are always clean 0–999 integers, a messy expression is a signal to switch strategies, not to push harder. These heuristics are proof logic wearing a stopwatch — an invariant, after all, is just an axiom's cousin: a truth that survives every move of the game.",
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
                                answer: "15",
                                explanation: "The trap here is using $\binom{7+3-1}{3-1} = \binom{9}{2} = 35$ straight away — that counts distributions where a child might get zero candies, but the problem demands at least one each. The fix: hand one candy to each child first (3 gone), then distribute the remaining 4 freely among 3 children with stars & bars: $\binom{4+3-1}{3-1} = \binom{6}{2} = 15$. Equivalently, $(7-1)\text{C}(3-1) = 6\text{C}2 = 15$ — the 'give-one-first' trick bakes the constraint into the formula. Wrong-answer watch: 35 is the at-least-zero count — it answers the wrong problem; 21 ($= \binom{7}{2}$) decrements the wrong number. Quick self-check: adding a constraint must shrink the count — if your 'constrained' answer is bigger than the unconstrained one (35), back up. Speed tip: 'at least one each' → subtract first, then stars & bars on the remainder."
                            },
                            {
                                title: "L3: AIME Challenge",
                                question: "Calculate the last three digits of $7^{100}$. (Format: 001, 123, etc.)",
                                answer: "001",
                                options: ["001", "007", "049", "343"],
                                explanation: "The trap here is computing $7^{100}$ — an 85-digit monster — or stopping at the last digit and guessing 007. Proof strategy (cycle reduction): find a power that collapses to 1 mod 1000. Since $7^4 = 2401 \equiv 1 \pmod{1000}$, the exponent factors neatly: $7^{100} = (7^4)^{25} \equiv 1^{25} = 1 \pmod{1000}$. But AIME demands three digits, so the answer is written 001 — leading zeros count! Wrong-answer watch: 343 is $7^3$, one power short of closing the cycle — the classic 'stopped too early' mistake; 007 is only the last digit. Quick self-check: $7^5 \equiv 7 \pmod{1000}$, so the cycle visibly restarts — the pattern holds together. Speed tip: for 'last three digits,' hunt for a small collapsing power like $7^4 \equiv 1$ before reaching for Euler's totient — cycles are faster under time pressure."
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
        "Partial Derivative": "A derivative where only one variable changes while others are held constant. Denoted as $\\partial f / \\partial x$.",
        "Gradient": "A vector ($\\nabla f$) pointing in the direction of the steepest ascent on a high-dimensional surface.",
        "Basis": "The 'skeleton' of a vector space; a set of linearly independent vectors that span the entire space.",
        "Modular Arithmetic": "A system where numbers 'wrap around' like a clock (e.g., $15 \\equiv 3 \\pmod{12}$).",
        "Chinese Remainder Theorem": "A theorem used to determine a unique integer $x$ that satisfies multiple congruences with coprime moduli.",
        "Vieta's Formulas": "Formulas relating polynomial coefficients to the sums and products of its roots ($r_1+r_2 = -b/a$).",
        "Linear Programming": "Optimization of linear functions subject to linear constraints, governed by the Vertex Principle.",
        "Complex Conjugate": "For $z = a + bi$, the conjugate is $\\bar{z} = a - bi$. Vital for ensuring real-world coefficients in wave equations.",
        "Differential": "A measure of an infinitely small change in a variable, the fundamental atom of Calculus."
    }
};
