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
        ,
        {
            "id": "sat-math",
            "title": "SAT Math (Digital)",
            "code": "SAT-M",
            "description": "Digital SAT Math prep: Algebra, Advanced Math, Problem Solving & Data Analysis, Geometry & Trigonometry.",
            "color": "#f59e0b",
            "icon": "fas fa-calculator",
            "intuition": "SAT Math는 어려운 계산을 요구하지 않는다. 대신 '말로 된 조건을 식으로 옮기는 속도'와 '함정에 걸리지 않는 정확도'를 잰다. TJHSST 학생에게는 계산 자체보다 시간 압박 속의 실수 관리가 관건이다. 이 40문제는 College Board 실제 출제 경향을 따라, 함수 표기·지수 모델·통계 해석처럼 Digital SAT가 사랑하는 유형으로 구성했다.",
            "local_resources": [],
            "difficulty": "advanced",
            "units": [
                {
                    "title": "Unit 1: Algebra (35%)",
                    "insight": "대수는 SAT Math의 35%로 가장 큰 영역이다. 핵심은 세 가지다. 첫째, 역연산은 순서대로 — 상수항 정리 후 계수 정리. 둘째, 연립방정식은 '무엇을 묻는가'를 먼저 읽기. 셋째, 부등식에서 음수를 곱하거나 나누면 부호를 뒤집기. 이 유닛의 함정 선택지는 전부 실제 학생 오답 패턴에서 가져왔으니, 틀린 문제는 설명의 Wrong-answer watch를 꼭 읽어라.",
                    "topics": [
                        "Linear equations",
                        "Linear inequalities",
                        "Systems of equations",
                        "Function notation",
                        "Factoring"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Linear Equations with Fractions",
                                "difficulty": "medium",
                                "question": "If $\\frac{2}{3}x - 5 = 11$, what is the value of $x$?",
                                "options": [
                                    "16",
                                    "24",
                                    "8",
                                    "12"
                                ],
                                "answer": "24",
                                "explanation": "**함정 먼저**: 계수가 분수일 때 많은 학생이 '양변에 분수를 곱한다'는 말만 기억하고 $\\frac{2}{3}$을 그대로 곱해 버린다. 곱하기 $\\frac{2}{3}$의 역연산은 나누기 $\\frac{2}{3}$, 즉 곱하기 $\\frac{3}{2}$이다. 역수의 방향을 헷갈리면 답이 16이나 8처럼 어긋난다. **풀이**: (1) 상수항부터 정리한다. 양변에 5를 더하면 $\\frac{2}{3}x = 16$. (2) 계수 $\\frac{2}{3}$의 역수 $\\frac{3}{2}$를 양변에 곱한다. $x = 16 \\times \\frac{3}{2} = 24$. (3) 검산으로 마무리한다. $\\frac{2}{3} \\times 24 - 5 = 16 - 5 = 11$로 좌변과 우변이 일치한다. **Wrong-answer watch**: 16은 역수를 곱하는 단계를 빼먹고 이항에서 멈춘 답, 8은 $\\frac{2}{3}$을 그대로 곱한 답이다. 분수 계수 문제에서 가장 흔한 두 실수다. **Quick self-check**: 답을 구했으면 원래 식에 대입해 보라. 5초면 충분하고, SAT 대수 문제에서 이 습관 하나로 부호·역수 실수를 거의 다 잡을 수 있다."
                            },
                            {
                                "title": "Level 2: Function Notation Basics",
                                "difficulty": "medium",
                                "question": "If $f(x) = 3x^2 - 2x + 1$, what is the value of $f(-2)$?",
                                "options": [
                                    "17",
                                    "9",
                                    "5",
                                    "21"
                                ],
                                "answer": "17",
                                "explanation": "**함정 먼저**: $f(-2) = 3(-2)^2 - 2(-2) + 1$에서 $(-2)^2 = 4$인데, 많은 학생이 부호를 하나씩 흘린다. 특히 $-2 \\times (-2) = +4$를 $-4$로 계산하는 실수가 잦다. 괄호 안의 음수는 '괄호째로' 다룬다는 원칙을 지켜라. **풀이**: (1) $x$ 자리에 $-2$를 대입한다: $f(-2) = 3(-2)^2 - 2(-2) + 1$. (2) 거듭제곱부터 계산한다: $(-2)^2 = 4$이므로 $3 \\times 4 = 12$. (3) $-2 \\times (-2) = +4$. (4) 합산하면 $12 + 4 + 1 = 17$. **Wrong-answer watch**: 9는 중간 항의 부호를 반대로 계산한 답($12 - 4 + 1$)으로, 음수 대입 문제의 오답 1순위 패턴이다. 대입 직후 각 항의 부호를 따로 체크하는 습관을 들여라. **Quick self-check**: $x = -2$처럼 음수를 대입할 때는 모든 항을 괄호로 감싸고, 거듭제곱→곱셈→덧셈 순서로 한 줄씩 내려가라. 줄을 나누면 부호 실수가 눈에 보인다."
                            },
                            {
                                "title": "Level 3: Systems of Linear Equations",
                                "difficulty": "medium",
                                "question": "If $2x + y = 11$ and $x - y = 1$, what is the value of $y$?",
                                "options": [
                                    "3",
                                    "4",
                                    "5",
                                    "2"
                                ],
                                "answer": "3",
                                "explanation": "**함정 먼저**: 연립방정식 문제의 절반은 계산이 아니라 '묻는 값'을 잘못 읽는 데서 틀린다. $x = 4$를 구해놓고 답지에 4를 찍는 실수가 대표적이다. 계산 전에 문제 마지막 줄을 먼저 읽어라. **풀이**: (1) 두 식을 더한다. $(2x + y) + (x - y) = 11 + 1$에서 $y$가 소거되고 $3x = 12$, 즉 $x = 4$. (2) $x = 4$를 두 번째 식에 대입하면 $4 - y = 1$이므로 $y = 3$. (3) 검산: $2(4) + 3 = 11$로 첫 번째 식도 만족한다. **Wrong-answer watch**: 4는 $x$의 값이다. '무엇을 구하라는 문제인가'를 계산 전에 밑줄 치는 것만으로 이 함정을 피할 수 있다. **Quick self-check**: 구한 순서쌍 $(4, 3)$을 두 식 모두에 대입해 확인하라. 한 식에만 대입하면 대입 과정의 실수를 잡지 못한다. Digital SAT의 연립방정식은 대입법보다 가감법이 빠른 경우가 많다. 계수를 보고 '$y$의 계수가 서로 반대 부호인가'처럼 소거 가능한 쌍을 먼저 찾으면, 30초 안에 풀리는 문제가 대부분이다."
                            },
                            {
                                "title": "Level 4: Solving for a Variable in Functions",
                                "difficulty": "medium",
                                "question": "If $g(t) = 5 - 2t$ and $g(t) = -13$, what is the value of $t$?",
                                "options": [
                                    "9",
                                    "-9",
                                    "4",
                                    "-4"
                                ],
                                "answer": "9",
                                "explanation": "**함정 먼저**: $5 - 2t = -13$에서 $-2t = -18$까지는 잘 가다가, 마지막에 $t = -9$라고 쓰는 학생이 많다. 음수 나누기 음수는 양수다. 부호는 마지막 한 줄까지 긴장을 놓지 말아야 한다. **풀이**: (1) 함수식을 방정식으로 쓴다: $5 - 2t = -13$. (2) 양변에서 5를 빼면 $-2t = -18$. (3) 양변을 $-2$로 나누면 $t = 9$. (4) 검산: $g(9) = 5 - 18 = -13$으로 문제의 조건과 일치한다. **Wrong-answer watch**: -9는 마지막 나눗셈의 부호 실수, 4는 $-2t = -8$처럼 이항을 잘못한 경우다. 이항할 때는 '반대편으로 넘기면 부호가 바뀐다'를 소리 내어 확인하라. **Quick self-check**: 답을 함수에 다시 넣어 함수값이 문제의 값과 같은지 확인하라. 함수 표기 문제는 대입 검산이 가장 빠르다. 함수 표기 $g(t) = -13$은 '함수값이 $-13$이 되는 입력 $t$를 찾아라'는 뜻이다. 그래프로 보면 $y = 5 - 2t$ 직선과 수평선 $y = -13$의 교점의 $t$좌표를 구하는 것과 같다."
                            },
                            {
                                "title": "Level 5: Linear Inequalities",
                                "difficulty": "hard",
                                "question": "If $-2(3x - 4) < 5x + 8$, which of the following is true?",
                                "options": [
                                    "$x > 0$",
                                    "$x < 0$",
                                    "$x < \\frac{8}{11}$",
                                    "$x > -\\frac{8}{11}$"
                                ],
                                "answer": "$x > 0$",
                                "explanation": "**함정 먼저**: 부등식의 최대 함정은 '음수로 나누면 부호가 뒤집힌다'는 규칙을 아는데도 막판에 적용을 빼먹는 것이다. 이 문제는 $-11x < 0$에서 $-11$로 나누는 순간이 바로 그 지점이다. **풀이**: (1) 좌변을 전개한다: $-6x + 8 < 5x + 8$. (2) 양변에서 8을 빼면 $-6x < 5x$. (3) $x$항을 한쪽으로 모은다: $-6x - 5x < 0$, 즉 $-11x < 0$. (4) 양변을 $-11$로 나누고 부호를 뒤집는다: $x > 0$. **Wrong-answer watch**: $x < 0$은 부호 뒤집기를 빼먹은 답으로, 이 유형 오답의 1순위다. 음수로 나누는 줄에서는 펜을 멈추고 '뒤집기'를 말로 확인하라. **Quick self-check**: 답 영역의 수(예: $x = 1$)를 골라 원래 부등식에 대입해 보라. $-2(3 - 4) = 2 < 13 = 5 + 8$로 성립하면 부호 방향이 맞은 것이다. 부등식 문제는 답의 범위를 수직선에 그려보는 습관이 도움이 된다. $x > 0$을 수직선에 표시하고 1을 찍어 대입하면, 부호 방향 실수를 시각적으로 잡을 수 있다."
                            },
                            {
                                "title": "Level 6: Equations with No Solution",
                                "difficulty": "hard",
                                "question": "For which value of $k$ does the equation $kx + 5 = 3x - 2$ have no solution?",
                                "options": [
                                    "3",
                                    "-3",
                                    "5",
                                    "-2"
                                ],
                                "answer": "3",
                                "explanation": "**함정 먼저**: '해가 없다'는 말의 대수적 의미는 '$x$항이 소거되고 남은 등식이 거짓'이 되는 것이다. $k$를 구하라는 말에 당황하지 말고, 양변의 $x$ 계수를 같게 만들면 된다고 생각하라. **풀이**: (1) $kx + 5 = 3x - 2$에서 $x$항을 한쪽으로 모으면 $(k - 3)x = -7$. (2) 해가 없으려면 $x$의 계수가 0이어야 한다. $k - 3 = 0$이므로 $k = 3$. (3) 확인: $k = 3$이면 식은 $3x + 5 = 3x - 2$, 즉 $5 = -2$가 되어 어떤 $x$도 만족하지 않는다. **Wrong-answer watch**: -3은 계수를 비교할 때 부호를 반대로 옮긴 답이다. '$x$ 앞에 붙은 수'를 통째로 비교하라. **Quick self-check**: 구한 $k$를 대입해 실제로 모순($5 = -2$)이 나오는지 확인하라. 해가 없다는 것은 모순인 등식이 남는 것과 같다. 반대로 '해가 무수히 많다'는 것은 $0 = 0$ 같은 항등식이 남는 경우다. Digital SAT는 해의 개수(0개·1개·무수히 많음)를 조건으로 $k$를 묻는 유형을 자주 내니, 세 경우를 구분하는 연습을 해두자."
                            },
                            {
                                "title": "Level 7: Factoring Quadratics",
                                "difficulty": "hard",
                                "question": "Which of the following is equivalent to $x^2 + 7x + 12$?",
                                "options": [
                                    "$(x+3)(x+4)$",
                                    "$(x+2)(x+6)$",
                                    "$(x-3)(x-4)$",
                                    "$(x+1)(x+12)$"
                                ],
                                "answer": "$(x+3)(x+4)$",
                                "explanation": "**함정 먼저**: $x^2 + 7x + 12$를 인수분해할 때 '곱해서 12, 더해서 7'인 두 수를 찾는다. $(x+2)(x+6)$도 곱하면 12가 되지만 더하면 8이다. 두 조건을 동시에 만족해야 한다. **풀이**: (1) 상수항 12의 인수쌍을 나열한다: $(1, 12)$, $(2, 6)$, $(3, 4)$. (2) 합이 7인 쌍을 찾는다: $3 + 4 = 7$. (3) 따라서 $(x+3)(x+4)$. 전개 검산: $x^2 + 4x + 3x + 12 = x^2 + 7x + 12$로 원래 식과 일치한다. **Wrong-answer watch**: $(x+2)(x+6)$은 '곱해서 12'만 확인한 답, $(x-3)(x-4)$는 $x$ 계수의 부호를 반대로 본 답이다. **Quick self-check**: 인수분해가 끝나면 항상 전개해서 원래 식으로 돌아오는지 확인하라. 10초면 충분하다. 인수분해는 이차방정식 풀이의 출발점이다. $x^2 + 7x + 12 = 0$이라면 $(x+3)(x+4) = 0$에서 $x = -3$ 또는 $x = -4$가 바로 나온다. 인수분해가 빠르면 Advanced Math 전체가 빨라진다."
                            },
                            {
                                "title": "Level 8: Difference of Squares",
                                "difficulty": "hard",
                                "question": "Which of the following is equivalent to $9x^2 - 25$?",
                                "options": [
                                    "$(3x-5)(3x+5)$",
                                    "$(3x-5)^2$",
                                    "$(3x+5)(3x+5)$",
                                    "$(9x-5)(x+5)$"
                                ],
                                "answer": "$(3x-5)(3x+5)$",
                                "explanation": "**함정 먼저**: $9x^2 - 25$는 완전제곱식의 차다. $(3x-5)^2$으로 쓰면 $9x^2 - 30x + 25$가 되어 중간항이 생긴다. '차'는 합의 제곱이 아니라 합과 차의 곱이다. **풀이**: (1) $9x^2 = (3x)^2$, $25 = 5^2$임을 확인한다. (2) 공식 $a^2 - b^2 = (a-b)(a+b)$에 $a = 3x$, $b = 5$를 대입한다: $(3x-5)(3x+5)$. (3) 검산: $9x^2 + 15x - 15x - 25 = 9x^2 - 25$. **Wrong-answer watch**: $(3x-5)^2$은 공식을 헷갈린 답, $(3x+5)(3x+5)$는 부호를 통일해 버린 답이다. **Quick self-check**: 인수분해 결과가 '빼기' 형태를 포함하는지 확인하라. $a^2 - b^2$형은 반드시 $(a-b)(a+b)$다. 완전제곱식의 차는 이후 유리식 약분이나 극한 문제에서도 계속 등장한다. $9x^2 - 25 = (3x-5)(3x+5)$처럼 '제곱수 판별 → 공식 대입 → 전개 검산'의 3단계를 몸에 익혀두자."
                            },
                            {
                                "title": "Level 9: Linear Models in Context",
                                "difficulty": "hard",
                                "question": "A rental car costs a $45 flat fee plus $0.25 per mile driven. If a driver has a budget of $120, what is the maximum number of miles the driver can drive?",
                                "options": [
                                    "300",
                                    "250",
                                    "480",
                                    "660"
                                ],
                                "answer": "300",
                                "explanation": "**함정 먼저**: 말로 된 문제는 식을 세우기 전에 '고정비와 변동비'를 구분해야 한다. 45달러는 한 번만 내고, 0.25달러는 마일마다 붙는다. 120달러 예산에서 고정비를 먼저 빼는 것이 핵심이다. **풀이**: (1) 식을 세운다: $45 + 0.25m = 120$ (최대 마일이므로 등호로 둔다). (2) $0.25m = 120 - 45 = 75$. (3) $m = 75 \\div 0.25 = 300$. (4) 검산: $45 + 0.25 \\times 300 = 45 + 75 = 120$으로 예산과 정확히 일치한다. **Wrong-answer watch**: 480은 $120 \\div 0.25$로 고정비를 빼지 않은 답이다. '기본 요금'을 빼먹는 것이 이 유형의 대표 실수다. **Quick self-check**: 답을 식에 넣어 예산과 정확히 일치하는지 확인하라. 문장제에서는 검산이 곧 정답 확인이다. 문장제는 '무엇이 고정이고 무엇이 변하는가'를 먼저 적는 것이 반이다. 고정비 45달러, 변동비 마일당 0.25달러를 식으로 옮기는 순간, 나머지는 일차방정식 풀이와 같다."
                            },
                            {
                                "title": "Level 10: Systems in Context",
                                "difficulty": "hard",
                                "question": "A theater sells adult tickets for $12 and student tickets for $8. If 100 tickets were sold for a total revenue of $1,000, how many adult tickets were sold?",
                                "options": [
                                    "50",
                                    "40",
                                    "60",
                                    "75"
                                ],
                                "answer": "50",
                                "explanation": "**함정 먼저**: 미지수가 두 개(성인표 $a$, 학생표 $s$)지만 식도 두 개다. '합계 100장'이라는 조건을 $s = 100 - a$로 바꿔 미지수를 하나로 줄이는 것이 정석이다. **풀이**: (1) $a + s = 100$이므로 $s = 100 - a$. (2) 수입 식에 대입: $12a + 8(100 - a) = 1000$. (3) 전개하면 $12a + 800 - 8a = 1000$, 즉 $4a = 200$이므로 $a = 50$. (4) 검산: $50 \\times 12 + 50 \\times 8 = 600 + 400 = 1000$으로 수입 조건을 만족하고, 장수 합도 $50 + 50 = 100$이다. **Wrong-answer watch**: 75는 $12a + 8a = 1000$처럼 두 표 가격을 더해 버린 답이다. 가격이 다른 두 상품은 따로 계산해야 한다. **Quick self-check**: 구한 $a = 50$에서 $s = 50$도 구해 두 조건(장수 합 100, 수입 합 1000)을 모두 확인하라."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 2: Advanced Math (35%)",
                    "insight": "Advanced Math는 대수를 한 단계 끌어올린 영역으로 전체의 35%다. 이차식의 세 얼굴(인수분해·완전제곱·근의 공식)을 자유롭게 오가고, 지수·근호·유리식은 '기본형으로 고치는' 연습이 핵심이다. 비선형 연립과 지수 모델은 Digital SAT의 단골이니, 이 10문제로 패턴을 몸에 익혀라.",
                    "topics": [
                        "Quadratic equations",
                        "Polynomials",
                        "Rational expressions",
                        "Exponents and radicals",
                        "Nonlinear systems"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Quadratic Roots via Factoring",
                                "difficulty": "medium",
                                "question": "If $x^2 - 5x + 6 = 0$, what is the sum of the solutions?",
                                "options": [
                                    "5",
                                    "6",
                                    "-5",
                                    "1"
                                ],
                                "answer": "5",
                                "explanation": "**함정 먼저**: '해의 합'을 물었는데 해를 하나하나 구하다가 $x = 2$ 하나만 답으로 쓰는 실수가 잦다. 합을 물으면 두 해를 다 구하거나 근과 계수의 관계를 써라. **풀이**: (1) 인수분해한다: $x^2 - 5x + 6 = (x-2)(x-3) = 0$. (2) 해는 $x = 2$와 $x = 3$. (3) 합은 $2 + 3 = 5$. 참고로 $ax^2 + bx + c = 0$에서 해의 합은 $-b/a$이므로 $-(-5)/1 = 5$로 바로 구할 수도 있다. **Wrong-answer watch**: 6은 상수항을 합으로 착각한 답, -5는 부호를 반대로 본 답이다. 근과 계수의 관계에서 합은 '$-b/a$'임을 기억하라. **Quick self-check**: 두 해를 원래 식에 대입해 0이 되는지 빠르게 확인하라. $(2)^2 - 5(2) + 6 = 0$, $(3)^2 - 5(3) + 6 = 0$. 인수분해가 안 되는 이차식은 근의 공식 $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$을 쓴다. 합과 곱이 바로 필요하면 근과 계수의 관계(합 $-b/a$, 곱 $c/a$)가 가장 빠르다."
                            },
                            {
                                "title": "Level 2: Multiplying Binomials",
                                "difficulty": "medium",
                                "question": "Which of the following is equivalent to $(2x + 3)(x - 4)$?",
                                "options": [
                                    "$2x^2 - 5x - 12$",
                                    "$2x^2 - 11x - 12$",
                                    "$2x^2 + 5x - 12$",
                                    "$2x^2 - 5x + 12$"
                                ],
                                "answer": "$2x^2 - 5x - 12$",
                                "explanation": "**함정 먼저**: $(2x+3)(x-4)$를 전개할 때 $2x \\times (-4) = -8x$와 $3 \\times x = 3x$의 부호를 각각 챙겨야 한다. 한 항의 부호만 흘려도 중간항이 $-11x$나 $+5x$로 바뀐다. **풀이**: (1) 분배한다: $2x \\cdot x = 2x^2$, $2x \\cdot (-4) = -8x$, $3 \\cdot x = 3x$, $3 \\cdot (-4) = -12$. (2) 동류항을 합친다: $-8x + 3x = -5x$. (3) 결과: $2x^2 - 5x - 12$. **Wrong-answer watch**: $-11x$는 $3x$의 부호를 양수로 못 본 답, $+5x$는 $-8x$의 부호를 흘린 답이다. 네 개의 곱을 쓸 때는 각 항의 부호를 항 앞에 붙여 쓰라. **Quick self-check**: $x = 1$을 양쪽에 대입해 보라. 왼쪽: $(2+3)(1-4) = 5 \\times (-3) = -15$, 오른쪽: $2 - 5 - 12 = -15$로 일치한다."
                            },
                            {
                                "title": "Level 3: Exponent Rules",
                                "difficulty": "medium",
                                "question": "Which of the following is equivalent to $\\frac{x^5 \\cdot x^3}{x^4}$?",
                                "options": [
                                    "$x^4$",
                                    "$x^2$",
                                    "$x^{11}$",
                                    "$x^{60}$"
                                ],
                                "answer": "$x^4$",
                                "explanation": "**함정 먼저**: $\\frac{x^5 \\cdot x^3}{x^4}$에서 분자의 곱은 지수를 더하고, 분수 나눗셈은 지수를 뺀다. '$x^8$을 $x^4$로 나눈다'는 흐름을 한 번에 하려다 $5 + 3 + 4$처럼 다 더해 버리는 실수가 나온다. **풀이**: (1) 분자: $x^5 \\cdot x^3 = x^{5+3} = x^8$ (밑이 같으면 지수는 덧셈). (2) 분수: $\\frac{x^8}{x^4} = x^{8-4} = x^4$ (나눗셈이면 지수는 뺄셈). **Wrong-answer watch**: $x^{11}$은 나누기에서도 지수를 더한 답, $x^{60}$은 지수를 곱해 버린 답이다. **Quick self-check**: 곱하기→더하기, 나누기→빼기, 거듭제곱의 거듭제곱→곱하기. 세 규칙 중 어느 것을 썼는지 손가락으로 짚어가며 확인하라. 지수 법칙은 $x^a \\cdot x^b = x^{a+b}$, $\\frac{x^a}{x^b} = x^{a-b}$, $(x^a)^b = x^{ab}$ 세 가지로 끝난다. 복잡해 보이면 분자와 분모를 따로 정리한 뒤 합치는 순서를 지켜라."
                            },
                            {
                                "title": "Level 4: Simplifying Radicals",
                                "difficulty": "medium",
                                "question": "Which of the following is equivalent to $\\sqrt{72}$?",
                                "options": [
                                    "$6\\sqrt{2}$",
                                    "$36\\sqrt{2}$",
                                    "$8\\sqrt{3}$",
                                    "$6\\sqrt{3}$"
                                ],
                                "answer": "$6\\sqrt{2}$",
                                "explanation": "**함정 먼저**: $\\sqrt{72}$를 소인수분해 없이 '72 = 36 × 2' 한 번에 보는 것이 핵심이다. $\\sqrt{36 \\times 2} = 6\\sqrt{2}$. 루트 안의 수를 무작정 나누다 보면 $8\\sqrt{3}$같은 답이 나온다. **풀이**: (1) 72를 제곱수가 포함된 곱으로 나눈다: $72 = 36 \\times 2$. (2) $\\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$. (3) 2는 더 이상 제곱인수로 나눠지지 않으므로 여기서 끝이다. **Wrong-answer watch**: $36\\sqrt{2}$는 루트를 씌우지 않고 36을 밖으로 꺼낸 답, $6\\sqrt{3}$은 72를 잘못 나눈 답이다. **Quick self-check**: 답을 제곱해 원래 수로 돌아오는지 확인하라. $(6\\sqrt{2})^2 = 36 \\times 2 = 72$로 정확히 일치한다. 근호 간단화의 요령은 루트 안의 수에서 가장 큰 제곱인수를 찾는 것이다. 72의 인수 중 제곱수는 36, 9, 4가 있고, 가장 큰 36을 쓰면 한 번에 끝난다."
                            },
                            {
                                "title": "Level 5: Completing the Square",
                                "difficulty": "hard",
                                "question": "The equation $x^2 + 6x + 5 = 0$ can be written in the form $(x + h)^2 = k$. What is the value of $h + k$?",
                                "options": [
                                    "7",
                                    "1",
                                    "12",
                                    "-2"
                                ],
                                "answer": "7",
                                "explanation": "**함정 먼저**: 완전제곱식 문제는 $(x+h)^2 = k$ 꼴에서 $h$와 $k$를 묻는다. $h = 3$, $k = 4$를 구해놓고 $h + k$가 아니라 $hk$를 계산하는 실수가 나온다. 마지막에 '무엇을 묻는가'를 다시 읽어라. **풀이**: (1) 상수항을 이항한다: $x^2 + 6x = -5$. (2) $x$ 계수의 절반인 3을 제곱한 9를 양변에 더한다: $x^2 + 6x + 9 = 4$. (3) $(x+3)^2 = 4$이므로 $h = 3$, $k = 4$. (4) $h + k = 3 + 4 = 7$. **Wrong-answer watch**: 1은 $k$를 4가 아니라 엉뚱한 값으로 본 답, 12는 $h \\times k$를 계산한 답이다. 묻는 식의 형태를 마지막까지 붙잡고 있어라. **Quick self-check**: $(x+3)^2 = x^2 + 6x + 9$를 전개해 원래 식과 비교하라. 상수항 쪽이 $9 - 4 = 5$로 맞는지 확인하면 된다. 완전제곱식 변형은 이차함수의 꼭짓점을 구할 때도 쓰인다. $(x+3)^2 = 4$에서 $x = -1$ 또는 $x = -5$가 해이며, 이는 포물선과 $x$축의 교점과 같다."
                            },
                            {
                                "title": "Level 6: Rational Expressions",
                                "difficulty": "hard",
                                "question": "If $x \\ne -3$, which of the following is equivalent to $\\frac{x^2 - 9}{x^2 + 6x + 9}$?",
                                "options": [
                                    "$\\frac{x-3}{x+3}$",
                                    "$\\frac{x+3}{x-3}$",
                                    "$-\\frac{1}{3}$",
                                    "$x - 3$"
                                ],
                                "answer": "$\\frac{x-3}{x+3}$",
                                "explanation": "**함정 먼저**: 유리식을 약분할 때는 '더하기 빼기로 묶인 항'은 약분할 수 없다. 반드시 인수분해부터 하고, 공통 '인수'만 지운다. 분모가 0이 되는 $x = -3$은 정의역에서 제외된다는 점도 Digital SAT가 좋아하는 포인트다. **풀이**: (1) 분자: $x^2 - 9 = (x-3)(x+3)$. (2) 분모: $x^2 + 6x + 9 = (x+3)^2$. (3) 공통인수 $(x+3)$을 약분하면 $\\frac{x-3}{x+3}$ (단, $x \\ne -3$). **Wrong-answer watch**: $\\frac{x+3}{x-3}$은 분자·분모를 뒤집은 답, $-\\frac{1}{3}$은 항 단위로 약분하려다 망가진 답이다. **Quick self-check**: $x = 0$을 대입해 보라. 원래 식은 $\\frac{-9}{9} = -1$, 답 식도 $\\frac{-3}{3} = -1$로 일치한다. 유리식 문제에서는 약분 전에 '분모가 0이 되는 $x$'를 먼저 제외하는 습관을 들여라. $x = -3$에서는 원래 식도 답 식도 정의되지 않으므로, 정의역을 함께 적는 것이 완전한 답이다."
                            },
                            {
                                "title": "Level 7: Nonlinear Systems",
                                "difficulty": "hard",
                                "question": "The graphs of $y = x^2$ and $y = 2x + 3$ intersect at two points. What is the $y$-coordinate of the intersection point in the first quadrant?",
                                "options": [
                                    "9",
                                    "1",
                                    "3",
                                    "4"
                                ],
                                "answer": "9",
                                "explanation": "**함정 먼저**: 교점을 구했으면 끝이 아니다. 이 문제는 '제1사분면에 있는 교점의 $y$좌표'를 묻는다. $x = -1$일 때의 점 $(-1, 1)$은 제2사분면이므로 탈락이다. **풀이**: (1) 두 식을 연립한다: $x^2 = 2x + 3$. (2) $x^2 - 2x - 3 = 0$을 인수분해하면 $(x-3)(x+1) = 0$이므로 $x = 3$ 또는 $x = -1$. (3) 제1사분면 조건($x > 0$, $y > 0$)을 만족하는 것은 $x = 3$뿐이다. (4) $y = 3^2 = 9$. **Wrong-answer watch**: 3은 $x$좌표를 답으로 쓴 경우, 1은 $x = -1$인 점을 고른 경우다. 사분면 조건 같은 수식어는 계산 전에 동그라미 쳐라. **Quick self-check**: 구한 점 $(3, 9)$가 두 식을 모두 만족하는지 대입해 확인하라. $9 = 3^2$, $9 = 2(3) + 3$. 비선형 연립은 대입법이 기본이다. 직선과 포물선의 교점은 0개, 1개(접함), 2개가 가능하며, 이 문제처럼 이차식을 풀어 $x$값을 먼저 구한 뒤 $y$를 구하는 순서를 지켜라."
                            },
                            {
                                "title": "Level 8: Exponential Growth Models",
                                "difficulty": "hard",
                                "question": "A bacterial culture starts with 500 bacteria and doubles every 3 hours. Which function models the number of bacteria after $t$ hours?",
                                "options": [
                                    "$500(2)^{t/3}$",
                                    "$500(2)^{3t}$",
                                    "$500(3)^{t/2}$",
                                    "$500(2)^t$"
                                ],
                                "answer": "$500(2)^{t/3}$",
                                "explanation": "**함정 먼저**: '3시간마다 2배'는 지수가 $3t$가 아니라 $t/3$이다. 3시간이 지날 때마다 지수가 1씩 늘어나야 하므로, 시간 $t$를 주기 3으로 나눈 값이 지수가 된다. **풀이**: (1) 기본형은 $N(t) = (\\text{초기값}) \\times 2^{t/(\\text{배가 시간})}$이다. (2) 초기값 500, 배가 시간 3을 대입하면 $N(t) = 500(2)^{t/3}$. (3) 검산: $t = 3$이면 $500 \\times 2^1 = 1000$으로 정확히 2배다. **Wrong-answer watch**: $500(2)^{3t}$는 주기를 곱한 답으로, $t = 3$일 때 8배가 되어 버린다. '마다'라는 말이 나오면 주기로 나누는 방향임을 기억하라. **Quick self-check**: $t$에 주기(여기서는 3)를 넣어 정확히 2배가 되는지 확인하라. 지수 모델 문제의 만능 검산법이다. 지수 모델에서 '초기값'과 '변화율'을 구분하는 것이 핵심이다. 500은 시작점, 2는 배가, $t/3$은 '몇 주기가 지났는가'를 뜻한다. Digital SAT는 이 세 요소 중 하나를 바꿔 묻는 변형을 자주 낸다."
                            },
                            {
                                "title": "Level 9: Polynomial Remainder",
                                "difficulty": "hard",
                                "question": "When $x^3 - 2x^2 + 4$ is divided by $x - 1$, what is the remainder?",
                                "options": [
                                    "3",
                                    "1",
                                    "-1",
                                    "5"
                                ],
                                "answer": "3",
                                "explanation": "**함정 먼저**: 나머정리를 모르면 조립제법을 써야 하고, 조립제법에서 부호 실수가 잦다. 하지만 $x = 1$을 직접 대입하는 것이 가장 빠르다. 나머지는 $P(1)$과 같다. **풀이**: (1) 나머정리: $x^3 - 2x^2 + 4$를 $x - 1$로 나눈 나머지는 $P(1)$이다. (2) $P(1) = 1 - 2 + 4 = 3$. (3) 조립제법으로 검산해도 계수 $1, -2, 0, 4$에서 마지막 줄이 $1, -1, -1, 3$으로 나머지가 3이다. **Wrong-answer watch**: 1은 $x^3$의 계수를 답으로 착각한 경우, -1은 대입 과정에서 부호를 하나 흘린 경우다. **Quick self-check**: $x = 1$ 대입은 10초면 끝나니, 조립제법으로 풀었어도 대입으로 한 번 더 확인하라. 나머정리는 인수정리의 특수한 경우다. $P(a) = 0$이면 $x - a$가 인수라는 인수정리까지 연결하면, 고차식 인수분해 문제로 확장할 수 있다. SAT에서는 나머지가 0인지 아닌지를 묻는 형태로 변형되어 나온다."
                            },
                            {
                                "title": "Level 10: Discriminant",
                                "difficulty": "hard",
                                "question": "For which value of $c$ does the equation $x^2 + 4x + c = 0$ have exactly one real solution?",
                                "options": [
                                    "4",
                                    "-4",
                                    "2",
                                    "16"
                                ],
                                "answer": "4",
                                "explanation": "**함정 먼저**: '실근이 정확히 하나'라는 말은 중근을 의미하고, 판별식 $D = 0$과 동치다. '$D > 0$이면 두 개, $D = 0$이면 하나, $D < 0$이면 없음'을 바로 연결해야 한다. **풀이**: (1) 판별식 $D = b^2 - 4ac = 16 - 4c$. (2) 중근 조건 $D = 0$에서 $16 - 4c = 0$. (3) $c = 4$. (4) 확인: $x^2 + 4x + 4 = (x+2)^2 = 0$이므로 $x = -2$ 중근이다. **Wrong-answer watch**: -4는 이항 과정에서 부호를 반대로 옮긴 답, 16은 $4c = 16$에서 한 단계를 빼먹은 답이다. **Quick self-check**: 구한 $c$를 넣어 완전제곱식이 되는지 확인하라. $(x+2)^2$ 꼴이 나오면 중근이 맞다. 판별식은 그래프와도 연결된다. $D > 0$이면 포물선이 $x$축과 두 점에서 만나고, $D = 0$이면 한 점에서 접하고, $D < 0$이면 만나지 않는다. 대수와 기하를 함께 떠올리면 기억에 오래 남는다."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 3: Problem Solving & Data Analysis (15%)",
                    "insight": "Problem Solving & Data Analysis는 15%지만 시간 대비 효율이 가장 좋은 영역이다. 대부분 '합으로 바꾸기(평균)', '부분으로 나누기(비율)', '기준 확인하기(백분율)' 세 가지 손놀림으로 풀린다. 산점도와 표준편차는 개념을 묻는 문제이니 공식을 외우기보다 의미를 이해하라.",
                    "topics": [
                        "Ratios and percents",
                        "Mean and median",
                        "Scatterplots",
                        "Probability",
                        "Data interpretation"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Percent Discount",
                                "difficulty": "medium",
                                "question": "A jacket originally priced at $80 is on sale for 25% off. What is the sale price?",
                                "options": [
                                    "60",
                                    "55",
                                    "20",
                                    "75"
                                ],
                                "answer": "60",
                                "explanation": "**함정 먼저**: '25% 할인'은 '원가의 25%를 낸다'가 아니라 '원가의 75%를 낸다'는 뜻이다. $80 \\times 0.25 = 20$은 할인액이지 판매가가 아니다. **풀이**: (1) 할인율 25%이므로 지불 비율은 $100\\% - 25\\% = 75\\%$. (2) $80 \\times 0.75 = 60$. (3) 검산: 할인액 $80 \\times 0.25 = 20$, $80 - 20 = 60$으로 일치한다. **Wrong-answer watch**: 20은 할인액을 판매가로 착각한 답이다. 이 유형의 대표 함정이니 '그래서 얼마를 내는가'를 마지막에 자문하라. **Quick self-check**: 할인액 + 판매가 = 원가가 되는지 확인하라. $20 + 60 = 80$. 백분율 문제는 '기준이 무엇인가'를 먼저 파악해야 한다. 할인율의 기준은 원가 80달러다. Digital SAT는 기준을 바꾸는 함정(예: 인상된 가격을 기준으로 추가 할인)을 자주 쓰니, '%의 대상'을 항상 확인하라."
                            },
                            {
                                "title": "Level 2: Ratios",
                                "difficulty": "medium",
                                "question": "Two numbers are in the ratio 3:5, and their sum is 40. What is the smaller number?",
                                "options": [
                                    "15",
                                    "24",
                                    "25",
                                    "12"
                                ],
                                "answer": "15",
                                "explanation": "**함정 먼저**: 비율 3:5는 '3개와 5개'가 아니라 '전체를 8등분했을 때 3부분과 5부분'이다. 40을 3과 5로 직접 나누면 안 된다. **풀이**: (1) 전체 부분 수: $3 + 5 = 8$. (2) 한 부분의 크기: $40 \\div 8 = 5$. (3) 작은 수: $3 \\times 5 = 15$, 큰 수: $5 \\times 5 = 25$. (4) 검산: $15 + 25 = 40$이고 $15:25 = 3:5$로 비율도 맞다. **Wrong-answer watch**: 24는 40을 잘못 나눈 답, 25는 '작은 수'라는 조건을 놓친 답이다. 묻는 것이 어느 쪽인지 마지막에 확인하라. **Quick self-check**: 두 수의 합이 전체와 같은지, 비율을 약분하면 주어진 비율이 되는지 확인하라. 비율 문제는 '전체를 몇 부분으로 나누는가'가 출발점이다. 3:5는 8부분, 2:3:5는 10부분이다. 부분 수를 먼저 구하고 한 부분의 크기를 구하는 2단계로 풀면 어떤 비율 문제도 같은 틀로 해결된다."
                            },
                            {
                                "title": "Level 3: Mean with a Missing Value",
                                "difficulty": "medium",
                                "question": "The mean of 4, 8, 6, 10, and $x$ is 8. What is the value of $x$?",
                                "options": [
                                    "12",
                                    "10",
                                    "8",
                                    "14"
                                ],
                                "answer": "12",
                                "explanation": "**함정 먼저**: 평균이 8이라는 것은 '합이 $8 \\times 5 = 40$'이라는 뜻이다. 평균 문제의 90%는 합으로 바꿔 푸는 것이 가장 빠르다. **풀이**: (1) 자료가 5개이므로 합은 $8 \\times 5 = 40$. (2) 알려진 네 수의 합: $4 + 8 + 6 + 10 = 28$. (3) $x = 40 - 28 = 12$. (4) 검산: $(4+8+6+10+12) \\div 5 = 40 \\div 5 = 8$. **Wrong-answer watch**: 10은 알려진 네 수의 평균을 $x$로 착각한 답이다. '평균의 평균'이 아니라 '합의 차이'로 구해야 한다. **Quick self-check**: 구한 값을 포함해 평균을 다시 계산해 보라. 10초 검산으로 실수를 잡을 수 있다. 평균은 '합 ÷ 개수'이지만, 역으로 '평균 × 개수 = 합'이라는 관점이 더 자주 쓰인다. $x$를 포함한 다섯 수의 합이 40이어야 한다는 식을 세우는 순간, 문제는 뺄셈 한 번으로 끝난다."
                            },
                            {
                                "title": "Level 4: Median of an Even Data Set",
                                "difficulty": "medium",
                                "question": "What is the median of 3, 7, 9, 12, 15, 21?",
                                "options": [
                                    "10.5",
                                    "9",
                                    "10",
                                    "12"
                                ],
                                "answer": "10.5",
                                "explanation": "**함정 먼저**: 자료가 짝수 개(6개)일 때 중앙값은 '가운데 두 수의 평균'이다. 3번째 수인 9를 그대로 답으로 쓰는 실수가 가장 많다. **풀이**: (1) 자료는 이미 오름차순이다: 3, 7, 9, 12, 15, 21. (2) 가운데 두 수는 3번째와 4번째, 즉 9와 12다. (3) 중앙값 = $(9 + 12) \\div 2 = 10.5$. **Wrong-answer watch**: 9는 '가운데 하나'를 잘못 고른 답이다. 짝수 개 자료에서는 항상 두 수의 평균임을 기억하라. **Quick self-check**: 자료 개수가 짝수인지 홀수인지 먼저 세라. 홀수면 가운데 하나, 짝수면 가운데 두 개의 평균이라는 규칙을 적용하라. 중앙값은 극단값에 흔들리지 않는 대표값이다. 평균과 중앙값이 크게 다르면 자료가 한쪽으로 치우친 것이다. SAT는 두 대표값의 차이를 이용해 자료의 치우침을 묻기도 한다. 자료를 크기 순으로 나열하는 것이 중앙값 문제의 첫 단계이니, 순서가 뒤죽박죽이면 반드시 먼저 정렬하라."
                            },
                            {
                                "title": "Level 5: Successive Percent Change",
                                "difficulty": "hard",
                                "question": "A $250 item is first increased by 20%, then decreased by 20%. What is the final price?",
                                "options": [
                                    "240",
                                    "250",
                                    "200",
                                    "260"
                                ],
                                "answer": "240",
                                "explanation": "**함정 먼저**: 20% 인상 후 20% 인하는 원점으로 돌아오지 않는다. 두 번째 20%는 '인상된 가격'을 기준으로 계산되므로, 깎이는 금액이 더 크다. **풀이**: (1) 20% 인상: $250 \\times 1.2 = 300$. (2) 20% 인하: $300 \\times 0.8 = 240$. (3) 한 번에 계산하면 $250 \\times 1.2 \\times 0.8 = 250 \\times 0.96 = 240$. 즉 순수하게는 4% 인하된 셈이다. **Wrong-answer watch**: 250은 '올랐다 내렸으니 제자리'라고 착각한 답으로, 이 유형의 고전 함정이다. College Board가 가장 사랑하는 함정 중 하나다. **Quick self-check**: 연속 변화율은 곱하기로 합성하라. $1.2 \\times 0.8 = 0.96 < 1$이므로 최종가는 원가보다 낮아야 한다. 연속 백분율 변화는 곱하기로 합성된다는 점을 기억하라. $a\\%$ 인상 후 $b\\%$ 인하는 $(1 + a/100)(1 - b/100)$이다. $a = b$여도 1보다 작아지므로, 같은 비율의 인상과 인하는 항상 손해다."
                            },
                            {
                                "title": "Level 6: Line of Best Fit",
                                "difficulty": "hard",
                                "question": "The line of best fit for a scatterplot passes through $(0, 20)$ and $(10, 50)$. What is the predicted value of $y$ when $x = 6$?",
                                "options": [
                                    "38",
                                    "35",
                                    "40",
                                    "44"
                                ],
                                "answer": "38",
                                "explanation": "**함정 먼저**: 산점도의 최적직선 문제는 결국 '두 점으로 직선의 방정식을 구하는' 대수 문제다. 그래프에 현혹되지 말고 기울기부터 구하라. **풀이**: (1) 기울기: $\\frac{50-20}{10-0} = 3$. (2) $y$절편이 20이므로 직선은 $y = 3x + 20$. (3) $x = 6$일 때 $y = 3 \\times 6 + 20 = 38$. **Wrong-answer watch**: 35는 기울기를 잘못 구한 답, 44는 절편을 20이 아니라 엉뚱한 값으로 본 답이다. 두 점을 정확히 읽는 것이 출발점이다. **Quick self-check**: $x = 0$과 $x = 10$을 식에 넣어 주어진 두 점을 지나는지 확인하라. $3(0)+20 = 20$, $3(10)+20 = 50$. 최적직선은 '전체 경향을 가장 잘 나타내는 직선'이다. 기울기 3은 '$x$가 1 증가할 때 $y$는 평균적으로 3 증가한다'는 뜻이다. SAT는 기울기의 실생활 해석을 묻는 문제도 자주 낸다."
                            },
                            {
                                "title": "Level 7: Probability Without Replacement",
                                "difficulty": "hard",
                                "question": "A bag contains 3 red, 5 blue, and 2 green marbles. If two marbles are drawn one after another without replacement, what is the probability that the first is red and the second is blue?",
                                "options": [
                                    "$\\frac{1}{6}$",
                                    "$\\frac{3}{20}$",
                                    "$\\frac{3}{10}$",
                                    "$\\frac{1}{2}$"
                                ],
                                "answer": "$\\frac{1}{6}$",
                                "explanation": "**함정 먼저**: '비복원'이라는 말이 핵심이다. 첫 번째 구슬을 꺼낸 뒤에는 전체 개수가 10개에서 9개로 줄어든다. 복원 추출처럼 $\\frac{3}{10} \\times \\frac{5}{10}$으로 계산하면 틀린다. **풀이**: (1) 전체 구슬: $3 + 5 + 2 = 10$. (2) 빨간색을 뽑을 확률: $\\frac{3}{10}$. (3) 빨간색 1개를 꺼낸 뒤 파란색을 뽑을 확률: $\\frac{5}{9}$. (4) 두 사건을 곱하면 $\\frac{3}{10} \\times \\frac{5}{9} = \\frac{15}{90} = \\frac{1}{6}$. **Wrong-answer watch**: $\\frac{3}{20}$은 복원 추출로 계산한 답, $\\frac{3}{10}$은 첫 번째 사건만 계산한 답이다. **Quick self-check**: '꺼낸 뒤 되돌려 놓는가'를 문제에서 찾아 밑줄 쳐라. 비복원이면 분모가 1씩 줄어든다. 연속 확률은 각 단계의 확률을 곱한다. '첫 번째는 빨강 AND 두 번째는 파랑'처럼 순서가 정해진 사건은 곱셈으로, 순서가 없는 경우는 경우를 나누어 더한다."
                            },
                            {
                                "title": "Level 8: Target Average",
                                "difficulty": "hard",
                                "question": "A student has an average of 82 on 3 tests. What score is needed on a 4th test to raise the average to 86?",
                                "options": [
                                    "98",
                                    "94",
                                    "100",
                                    "90"
                                ],
                                "answer": "98",
                                "explanation": "**함정 먼저**: 평균을 맞추는 문제는 합으로 바꿔라. '평균 86을 맞추려면'은 '네 과목 합이 $86 \\times 4 = 344$여야 한다'는 뜻이다. **풀이**: (1) 목표 합: $86 \\times 4 = 344$. (2) 현재 세 과목 합: $82 \\times 3 = 246$. (3) 필요한 네 번째 점수: $344 - 246 = 98$. (4) 검산: $(246 + 98) \\div 4 = 344 \\div 4 = 86$. **Wrong-answer watch**: 94는 $86 - 82 = 4$의 차이만큼만 더하면 된다고 착각한 답이다. 부족분은 남은 과목 수로 나누는 것이 아니라 목표 합에서 직접 구해야 한다. **Quick self-check**: 구한 점수를 포함해 평균을 다시 계산하라. 98점이 만점에 가까우니 '평균을 4점 올리려면 그만큼 높은 점수가 필요하구나'라는 감각도 맞는지 확인하라. 목표 평균 문제는 '목표 합 - 현재 합'이라는 한 줄 공식으로 정리된다. 남은 시험이 여러 개라면 부족분을 남은 횟수로 나누면 되지만, 이 문제처럼 한 번이면 부족분이 곧 필요한 점수다."
                            },
                            {
                                "title": "Level 9: Standard Deviation",
                                "difficulty": "hard",
                                "question": "In a survey, the mean score is 72 and the standard deviation is 5. Which of the following values is more than 2 standard deviations above the mean?",
                                "options": [
                                    "80",
                                    "82",
                                    "77",
                                    "84"
                                ],
                                "answer": "84",
                                "explanation": "**함정 먼저**: '2 표준편차 위'라는 말은 평균에 $2 \\times (\\text{표준편차})$를 더하라는 뜻이다. $72 + 2 \\times 5 = 82$가 기준선이고, 문제는 그 '보다 큰' 값을 묻는다. **풀이**: (1) 2 표준편차 위의 값: $72 + 2 \\times 5 = 82$. (2) 'more than'이므로 82보다 커야 한다. (3) 선택지 중 82보다 큰 것은 84뿐이다. **Wrong-answer watch**: 82는 '이상'과 '초과'를 헷갈린 답이다. more than은 strictly greater, 즉 등호를 포함하지 않는다. **Quick self-check**: 문제의 비교 표현(more than / at least / within)을 동그라미 쳐라. 등호 포함 여부가 답을 바꾼다. 표준편차는 자료의 흩어진 정도를 나타낸다. 평균 $\\pm$ 2 표준편차 범위를 벗어나는 값은 전체의 약 5%에 불과한 이례적인 값이다. SAT는 이 개념을 '정상 범위'를 묻는 형태로 출제한다."
                            },
                            {
                                "title": "Level 10: Work Rates",
                                "difficulty": "hard",
                                "question": "If 5 machines produce 200 widgets in 4 hours, how many widgets can 8 machines produce in 6 hours, assuming the same rate?",
                                "options": [
                                    "480",
                                    "400",
                                    "600",
                                    "320"
                                ],
                                "answer": "480",
                                "explanation": "**함정 먼저**: 일률 문제는 '기계 1대 × 1시간' 단위로 쪼개는 것이 정석이다. 5대 4시간을 한 덩어리로 보고 비례식을 세우면 기계 수와 시간 중 하나를 빼먹기 쉽다. **풀이**: (1) 전체 작업량 단위: $5 \\times 4 = 20$ 기계-시간에 200개. (2) 기계 1대 1시간당 생산량: $200 \\div 20 = 10$. (3) 8대 6시간: $8 \\times 6 \\times 10 = 480$. **Wrong-answer watch**: 400은 시간 변화를 반영하지 않고 기계 수로만 비례한 답, 600은 기계 수와 시간을 더해 버린 답이다. **Quick self-check**: 단위를 붙여 계산하라. '개/(대·시간)'처럼 단위가 맞으면 식도 맞을 확률이 높다. $10 \\times 8 \\times 6 = 480$. 일률·속도·농도 문제는 모두 '단위당 양'을 먼저 구하는 것이 정석이다. 기계 1대 1시간당 10개라는 단위 생산량을 구해두면, 기계 수와 시간이 바뀌는 어떤 변형에도 같은 방식으로 대응할 수 있다."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 4: Geometry & Trigonometry (15%)",
                    "insight": "Geometry & Trigonometry는 15%로 비중은 작지만, 아는 만큼 빨리 풀리는 영역이다. 특수삼각형 변의 비($1:1:\\sqrt{2}$, $1:\\sqrt{3}:2$), 호·부채꼴 공식, 라디안 변환을 손에 익혀두면 계산 시간을 크게 줄일 수 있다. 닮음과 원의 방정식은 부호 실수만 조심하면 된다.",
                    "topics": [
                        "Triangles",
                        "Circles",
                        "Arc length and sector area",
                        "Trigonometric ratios",
                        "Radians"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Triangle Angle Sum",
                                "difficulty": "medium",
                                "question": "Two angles of a triangle measure $50^\\circ$ and $70^\\circ$. What is the measure of the third angle?",
                                "options": [
                                    "60",
                                    "50",
                                    "70",
                                    "110"
                                ],
                                "answer": "60",
                                "explanation": "**함정 먼저**: 삼각형 세 내각의 합은 항상 $180^\\circ$다. 너무 쉬워서 오히려 문제를 잘못 읽는 실수가 나온다. '나머지 한 각'을 묻는지, 아니면 다른 것을 묻는지 확인하라. **풀이**: (1) 알려진 두 각의 합: $50 + 70 = 120$. (2) $180 - 120 = 60$. (3) 검산: $50 + 70 + 60 = 180$으로 내각의 합 조건을 만족한다. 쉬운 문제일수록 검산을 생략하는데, 3초 검산이 실수를 막는다. **Wrong-answer watch**: 110은 $180 - 70$처럼 한 각만 뺀 답이다. '두 각을 먼저 더하라'는 순서를 지키면 피할 수 있다. **Quick self-check**: 세 각의 합이 180이 되는지 더해 보라. 이 확인 하나로 계산 실수를 잡을 수 있다. 삼각형 내각의 합 $180^\\circ$는 SAT 기하의 출발점이다. 외각 정리를 이용하면 $180 - (50 + 70) = 60$을 한 번에 구할 수도 있다. 쉬운 문제는 빠르게, 어려운 문제에 시간을 남기는 것이 고득점 전략이다."
                            },
                            {
                                "title": "Level 2: Pythagorean Theorem",
                                "difficulty": "medium",
                                "question": "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
                                "options": [
                                    "10",
                                    "14",
                                    "12",
                                    "48"
                                ],
                                "answer": "10",
                                "explanation": "**함정 먼저**: 피타고라스 정리는 빗변의 제곱이 나머지 두 변의 제곱합과 같다는 것이다. 6과 8이 '밑변과 높이'인지 '빗변과 한 변'인지를 먼저 판단해야 한다. 이 문제에서는 빗변을 묻는다. **풀이**: (1) $c^2 = 6^2 + 8^2 = 36 + 64 = 100$. (2) $c = \\sqrt{100} = 10$ (길이는 양수). (3) 참고: 6-8-10은 3-4-5의 2배인 피타고라스 수다. SAT에서는 3-4-5, 5-12-13, 8-15-17 계열이 단골이니 외워두면 시간을 번다. **Wrong-answer watch**: 14는 $6 + 8$로 더해 버린 답, 48은 $6 \\times 8$로 곱한 답이다. 정리는 '제곱의 합'임을 잊지 말라. **Quick self-check**: 빗변이 가장 긴 변인지 확인하라. $10 > 8$이므로 타당하다. 피타고라스 수 3-4-5, 5-12-13, 8-15-17과 그 배수(6-8-10, 9-12-15 등)는 SAT 단골이다. 직각삼각형의 두 변이 보이면 '혹시 피타고라스 수인가'를 먼저 의심하면 제곱 계산을 생략할 수 있다."
                            },
                            {
                                "title": "Level 3: Circle Area",
                                "difficulty": "medium",
                                "question": "What is the area of a circle with radius 5?",
                                "options": [
                                    "$25\\pi$",
                                    "$10\\pi$",
                                    "$50\\pi$",
                                    "$5\\pi$"
                                ],
                                "answer": "$25\\pi$",
                                "explanation": "**함정 먼저**: 원의 넓이는 $\\pi r^2$이고 둘레는 $2\\pi r$이다. 반지름이 5일 때 넓이는 $25\\pi$, 둘레는 $10\\pi$다. 둘을 바꿔 쓰면 바로 함정에 빠진다. **풀이**: (1) 넓이 공식 $A = \\pi r^2$에 $r = 5$를 대입한다. (2) $A = \\pi \\times 25 = 25\\pi$. (3) 어림 검산: $\\pi \\approx 3.14$이므로 넓이는 약 $78.5$. **Wrong-answer watch**: $10\\pi$는 둘레 공식을 쓴 답, $50\\pi$는 $2\\pi r^2$처럼 공식을 섞은 답이다. 넓이를 물었는데 둘레가 선택지에 있으면 의심하라. **Quick self-check**: '$r^2$이 들어가는가'를 자문하라. 넓이는 2차원 개념이므로 반지름의 제곱이 반드시 들어간다. 원의 넓이 $\\pi r^2$와 둘레 $2\\pi r$는 단위로도 구분된다. 넓이는 제곱 단위, 둘레는 길이 단위다. 답의 단위를 생각하면 공식을 헷갈릴 때 어느 쪽이 맞는지 판단할 수 있다."
                            },
                            {
                                "title": "Level 4: 45-45-90 Triangles",
                                "difficulty": "medium",
                                "question": "In a 45-45-90 triangle, the hypotenuse has length 10. What is the length of each leg?",
                                "options": [
                                    "$5\\sqrt{2}$",
                                    "$10\\sqrt{2}$",
                                    "$5$",
                                    "$5\\sqrt{3}$"
                                ],
                                "answer": "$5\\sqrt{2}$",
                                "explanation": "**함정 먼저**: 45-45-90 삼각형의 변의 비는 $1 : 1 : \\sqrt{2}$다. 빗변이 10이면 다리 길이는 $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$다. 빗변에 $\\sqrt{2}$를 곱하는 방향 실수가 잦다. **풀이**: (1) 비를 이용해 $x : x : x\\sqrt{2} = ? : ? : 10$. (2) $x\\sqrt{2} = 10$이므로 $x = \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$. (3) 검산: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$로 피타고라스 정리를 만족한다. **Wrong-answer watch**: $10\\sqrt{2}$는 빗변에 $\\sqrt{2}$를 곱한 답(방향 반대), 5는 $\\sqrt{2}$를 빼먹은 답이다. **Quick self-check**: 다리 길이가 빗변보다 짧은지 확인하라. $5\\sqrt{2} \\approx 7.07 < 10$이므로 타당하다."
                            },
                            {
                                "title": "Level 5: Arc Length",
                                "difficulty": "hard",
                                "question": "A circle has radius 6. What is the length of an arc with a central angle of $60^\\circ$?",
                                "options": [
                                    "$2\\pi$",
                                    "$6\\pi$",
                                    "$\\pi$",
                                    "$12\\pi$"
                                ],
                                "answer": "$2\\pi$",
                                "explanation": "**함정 먼저**: 호의 길이는 라디안을 쓰면 '반지름 × 중심각(라디안)' 한 방에 나온다. $60^\\circ$를 라디안으로 바꾸는 것을 빼먹으면 답이 엉뚱해진다. **풀이**: (1) $60^\\circ = \\frac{\\pi}{3}$ 라디안. (2) 호의 길이 $= r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi$. (3) 검산: 전체 둘레 $12\\pi$의 $\\frac{1}{6}$이므로 $2\\pi$가 맞다 ($60/360 = 1/6$). **Wrong-answer watch**: $6\\pi$는 각도를 라디안으로 안 바꾼 답, $12\\pi$는 전체 둘레를 답으로 쓴 경우다. **Quick self-check**: 호의 길이가 전체 둘레보다 짧은지, 비율($\\theta/2\\pi$)과 맞는지 확인하라. 호의 길이 공식 $s = r\\theta$는 $\\theta$가 라디안일 때만 성립한다. 도(degree)가 주어지면 반드시 $\\pi/180$을 곱해 라디안으로 먼저 바꾸는 습관을 들여라."
                            },
                            {
                                "title": "Level 6: Sector Area",
                                "difficulty": "hard",
                                "question": "A circle has radius 9. What is the area of a sector with a central angle of $120^\\circ$?",
                                "options": [
                                    "$27\\pi$",
                                    "$6\\pi$",
                                    "$54\\pi$",
                                    "$81\\pi$"
                                ],
                                "answer": "$27\\pi$",
                                "explanation": "**함정 먼저**: 부채꼴 넓이는 '원 넓이의 몇 분의 몇'이다. $120^\\circ$는 전체의 $\\frac{1}{3}$이므로 $\\frac{1}{3}\\pi(9^2) = 27\\pi$. 둘레 공식을 가져오거나 큰 부채꼴과 작은 부채꼴을 헷갈리는 실수가 나온다. **풀이**: (1) 원의 넓이: $\\pi \\times 9^2 = 81\\pi$. (2) 부채꼴 비율: $\\frac{120}{360} = \\frac{1}{3}$. (3) $81\\pi \\times \\frac{1}{3} = 27\\pi$. 라디안 풀이: $\\frac{1}{2}r^2\\theta = \\frac{1}{2} \\times 81 \\times \\frac{2\\pi}{3} = 27\\pi$. **Wrong-answer watch**: $6\\pi$는 둘레 공식 $2\\pi r$을 쓴 답, $54\\pi$는 $240^\\circ$짜리 큰 부채꼴의 넓이(대응 실수), $81\\pi$는 비율을 빼먹고 전체 원 넓이를 쓴 답이다. **Quick self-check**: 부채꼴 넓이가 전체 원 넓이보다 작은지, 각도 비율과 맞는지 확인하라."
                            },
                            {
                                "title": "Level 7: Sine and Cosine",
                                "difficulty": "hard",
                                "question": "In a right triangle, $\\sin A = \\frac{3}{5}$ where $A$ is an acute angle. What is the value of $\\cos A$?",
                                "options": [
                                    "$\\frac{4}{5}$",
                                    "$\\frac{3}{4}$",
                                    "$\\frac{5}{4}$",
                                    "$\\frac{5}{3}$"
                                ],
                                "answer": "$\\frac{4}{5}$",
                                "explanation": "**함정 먼저**: $\\sin A = \\frac{3}{5}$이면 대변:빗변 = 3:5다. 3-4-5 직각삼각형을 떠올리면 이웃변은 4, 즉 $\\cos A = \\frac{4}{5}$가 바로 나온다. $A$가 예각이라는 조건이 있어야 부호가 하나로 정해진다. **풀이**: (1) $\\sin^2 A + \\cos^2 A = 1$이므로 $\\cos^2 A = 1 - \\frac{9}{25} = \\frac{16}{25}$. (2) $A$가 예각이므로 $\\cos A > 0$, 즉 $\\cos A = \\frac{4}{5}$. (3) 삼각형으로 검산: 대변 3, 빗변 5이면 이웃변은 $\\sqrt{25-9} = 4$. **Wrong-answer watch**: $\\frac{3}{4}$는 $\\tan A$의 값이다. sin이 주어졌다고 cos이 아니라 tan부터 구하는 실수가 잦다. **Quick self-check**: $\\sin^2 + \\cos^2 = 1$에 대입해 $\\frac{9}{25} + \\frac{16}{25} = 1$인지 확인하라."
                            },
                            {
                                "title": "Level 8: Degrees to Radians",
                                "difficulty": "hard",
                                "question": "What is the radian measure of a $150^\\circ$ angle?",
                                "options": [
                                    "$\\frac{5\\pi}{6}$",
                                    "$\\frac{2\\pi}{3}$",
                                    "$\\frac{3\\pi}{4}$",
                                    "$\\frac{5\\pi}{3}$"
                                ],
                                "answer": "$\\frac{5\\pi}{6}$",
                                "explanation": "**함정 먼저**: 도(degree)를 라디안으로 바꾸는 공식은 '$\\pi/180$을 곱한다'다. 150에 $\\frac{\\pi}{180}$을 곱하면 $\\frac{150\\pi}{180} = \\frac{5\\pi}{6}$. 분자와 분모를 반대로 곱하는 실수가 나온다. **풀이**: (1) $150^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{150\\pi}{180}$. (2) 약분: 분자 분모를 30으로 나누면 $\\frac{5\\pi}{6}$. (3) 검산: $150^\\circ$는 $180^\\circ$의 $\\frac{5}{6}$이므로 $\\frac{5}{6} \\times \\pi$와 일치한다. **Wrong-answer watch**: $\\frac{5\\pi}{3}$은 $180/150$처럼 역수를 곱한 답, $\\frac{2\\pi}{3}$는 $120^\\circ$의 값이다. **Quick self-check**: $180^\\circ = \\pi$임을 이용해 비례식으로 검산하라. $150:180 = 5:6$이므로 $\\frac{5\\pi}{6}$."
                            },
                            {
                                "title": "Level 9: Similar Triangles",
                                "difficulty": "hard",
                                "question": "A 6-foot pole casts a 4-foot shadow. At the same time, a tree casts a 14-foot shadow. What is the height of the tree, in feet?",
                                "options": [
                                    "21",
                                    "18",
                                    "24",
                                    "28"
                                ],
                                "answer": "21",
                                "explanation": "**함정 먼저**: 닮은 삼각형 문제의 핵심은 '대응하는 변끼리' 비례식을 세우는 것이다. 기둥 높이 : 기둥 그림자 = 나무 높이 : 나무 그림자. 어느 쪽을 분자에 놓든 대응만 맞으면 된다. **풀이**: (1) 비례식: $\\frac{6}{4} = \\frac{h}{14}$. (2) 외항의 곱: $4h = 84$. (3) $h = 21$피트. (4) 검산: $\\frac{6}{4} = 1.5$, $\\frac{21}{14} = 1.5$로 비율이 일치한다. **Wrong-answer watch**: 18은 비례식을 거꾸로 세운 답이다. '높이 대 그림자'의 순서가 양쪽에서 같아야 한다. **Quick self-check**: 나무가 기둥보다 그림자가 길므로(14 > 4) 나무가 더 높아야 한다. $21 > 6$이므로 방향이 맞다. 닮음비는 길이의 비이고, 넓이의 비는 그 제곱이다. 이 문제는 길이의 비만 쓰지만, SAT는 길이 비에서 넓이 비를 묻는 식으로 한 단계 올리기도 한다. 비례식의 양쪽 순서를 같게 유지하는 것만 기억하면 된다."
                            },
                            {
                                "title": "Level 10: Circle Equations",
                                "difficulty": "hard",
                                "question": "Which of the following is the equation of a circle with center $(2, -3)$ and radius 4?",
                                "options": [
                                    "$(x-2)^2 + (y+3)^2 = 16$",
                                    "$(x+2)^2 + (y-3)^2 = 16$",
                                    "$(x-2)^2 + (y-3)^2 = 4$",
                                    "$(x-2)^2 + (y+3)^2 = 4$"
                                ],
                                "answer": "$(x-2)^2 + (y+3)^2 = 16$",
                                "explanation": "**함정 먼저**: 원의 방정식 $(x-h)^2 + (y-k)^2 = r^2$에서 중심이 $(2, -3)$이면 $h = 2$, $k = -3$이므로 식은 $(x-2)^2 + (y+3)^2 = 16$이다. $k$의 부호가 뒤집히는 것이 이 유형의 1순위 실수다. **풀이**: (1) 표준형에 대입: $(x-2)^2 + (y-(-3))^2 = 4^2$. (2) 정리하면 $(x-2)^2 + (y+3)^2 = 16$. (3) 검산: 점 $(6, -3)$은 중심에서 4만큼 떨어져 있으므로 원 위에 있어야 한다. $(6-2)^2 + 0 = 16$으로 성립한다. **Wrong-answer watch**: $(x+2)^2 + (y-3)^2 = 16$은 중심 좌표의 부호를 그대로 쓴 답, $= 4$로 끝낸 것은 반지름을 제곱하지 않은 답이다. **Quick self-check**: '$-h$, $-k$' 규칙을 기억하라. 중심 $(h, k)$는 식에서 $(x - h)$, $(y - k)$로 부호가 뒤집혀 들어간다."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 5: 기출 스타일 실전 문제 (Math)",
                    "insight": "실제 College Board 기출에서 반복 등장하는 함정 패턴 10선을 모은 실전 세트이다. 단위 변환 누락, 무연근 검증 생략, NOT형 문제의 성급한 답 선택, 연속 백분율의 기준 착각, 부호 오독 같은 실수는 실력이 아니라 습관에서 나온다. 각 문제의 해설은 함정의 정체, 단계별 풀이, 네 보기 전부에 대한 개별 반박, 그리고 스스로 점검하는 방법으로 구성되어 있어 한 문제를 풀면 같은 유형의 함정에는 다시 걸리지 않게 된다.",
                    "topics": [
                        "Mixed review",
                        "Test strategy",
                        "함정 패턴 분석",
                        "오답 소거법"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "기출 1: 단위 변환 함정 — 속력과 시간",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "자동차가 일정한 속력으로 45분 동안 60마일을 이동했다. 같은 속력으로 2시간 15분 동안 이동하면 이동 거리는 몇 마일인가?",
                                "options": [
                                    "90",
                                    "135",
                                    "180",
                                    "270"
                                ],
                                "answer": "180",
                                "explanation": "이 문제가 노리는 함정은 시간 단위를 통일하지 않고 계산하는 실수이다. 45분을 1시간으로 착각하면 시속 60마일로 계산해 2.25×60=135를 고르고, 15분을 0.5시간으로 착각하면 4.5시간으로 계산해 270을 고르며, 분을 통째로 버리고 45×2=90처럼 어림잡는 실수도 흔하다. 풀이 단계는 다음과 같다. 첫째, 모든 시간을 같은 단위로 통일한다. 45분=0.75시간, 2시간 15분=2.25시간이다. 둘째, 속력을 구한다. 60마일÷0.75시간=80mph이다. 셋째, 구한 속력에 이동 시간을 곱한다. 80×2.25=180마일이다. 검산 차원에서 비율로 풀 수도 있다. 2시간 15분은 45분의 정확히 3배이므로 거리도 60마일의 3배인 180마일이다. 오답 반박: 90은 분 단위를 버리고 시간 숫자만 곱한 것으로 단위 개념 자체가 무너진 답이다. 135는 45분을 1시간으로 착각해 시속 60마일이라는 잘못된 속력을 쓴 결과이다. 270은 15분을 0.5시간으로 착각해 이동 시간을 4.5시간으로 부풀린 결과이다. Quick self-check: 답을 구한 뒤 시간 단위가 전부 통일되었는지, 속력의 단위가 mph인지 확인하라. 또한 2시간 15분이 45분의 3배이므로 답이 60의 3배 근처인지 어림셈으로 대조하라. 실전 팁: SAT의 속력·일률 문제에서는 가장 먼저 모든 수량을 같은 단위로 바꾸고, 보기 중에 단위 변환을 생략했을 때 나오는 값이 반드시 하나 이상 섞여 있다는 점을 기억하고 소거하라."
                            },
                            {
                                "title": "기출 2: 무연근 함정 — 제곱근 방정식",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "방정식 $\\sqrt{x+5} = x - 1$의 해는?",
                                "options": [
                                    "-1",
                                    "4",
                                    "-1과 4",
                                    "해가 없다"
                                ],
                                "answer": "4",
                                "explanation": "이 문제가 노리는 함정은 양변을 제곱한 뒤 구한 근을 원래 식에 대입해 검증하지 않는 것이다. 제곱은 동치 변형이 아니라 필요조건만 만드는 연산이므로, 제곱 과정에서 원래 방정식을 만족하지 않는 무연근이 끼어들 수 있다. 풀이 단계는 다음과 같다. 첫째, 정의역을 확인한다. 근호 안은 0 이상이어야 하므로 x+5≥0, 즉 x≥-5이다. 또한 우변 x-1은 제곱근(0 이상)과 같아야 하므로 x-1≥0, 즉 x≥1까지 추가로 요구된다. 둘째, 양변을 제곱한다. x+5=(x-1)²=x²-2x+1이 되어 x²-3x-4=0, 즉 (x-4)(x+1)=0이므로 x=4 또는 x=-1이다. 셋째, 반드시 원래 식에 대입한다. x=4이면 √9=3이고 4-1=3이므로 성립한다. x=-1이면 √4=2이지만 -1-1=-2이므로 성립하지 않는다. 따라서 해는 4뿐이다. 오답 반박: -1은 대입 검증을 생략하고 제곱해서 얻은 두 근 중 틀린 쪽만 고른 답이다. -1과 4는 무연근을 걸러내지 못한 답으로, 이 문제의 핵심 함정에 정확히 걸린 선택이다. 해가 없다는 보기는 x=4의 성립을 확인하지 않고 포기한 답이다. Quick self-check: 제곱근·로그 방정식을 풀 때는 마지막에 반드시 원래 식 대입을 하라. 특히 우변이 음수가 될 수 있는 경우 무연근이 생기기 쉽다. 실전 팁: 보기 쌍이 -1, 4, -1과 4, 해가 없다는 식으로 구성되어 있으면 출제자가 무연근 검증을 노린다는 신호이므로, 대입 한 번으로 3개 보기를 날릴 수 있다."
                            },
                            {
                                "title": "기출 3: NOT형 — 직선과 포물선의 교점 개수",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "직선 $y = 2x + k$가 포물선 $y = x^2 - 3x + 5$와 서로 다른 두 점에서 만난다. 다음 중 $k$의 값으로 가능하지 않은 것은?",
                                "options": [
                                    "-2",
                                    "-1",
                                    "0",
                                    "5"
                                ],
                                "answer": "-2",
                                "explanation": "이 문제가 노리는 함정은 두 가지이다. 첫째, NOT형 질문을 읽지 않고 가능한 값을 고르는 성급함이다. 둘째, 서로 다른 두 점에서 만난다는 조건을 판별식 D>0이 아니라 D≥0으로 착각하는 것이다(여기서는 경곗값이 보기에 없지만 실전에서는 자주 나온다). 풀이 단계는 다음과 같다. 첫째, 두 식을 연립한다. x²-3x+5=2x+k이므로 x²-5x+(5-k)=0이다. 둘째, 서로 다른 두 교점은 이 이차방정식이 서로 다른 두 실근을 갖는다는 뜻이므로 판별식이 0보다 커야 한다. D=(-5)²-4×1×(5-k)=25-20+4k=5+4k>0이다. 셋째, 부등식을 풀면 4k>-5, 즉 k>-1.25이다. 따라서 -1.25보다 큰 값만 가능하다. 보기 중 -2는 -1.25보다 작으므로 가능하지 않다. 오답 반박: -1은 -1.25보다 크므로 조건을 만족해 실제로 가능한 값이다. 0 역시 -1.25보다 크므로 가능하고, 5도 마찬가지이다. 즉 -1, 0, 5는 모두 가능한 값이므로 NOT형 질문의 답이 될 수 없다. Quick self-check: NOT·EXCEPT형 문제는 질문의 마지막 단어를 밑줄 치고, 보기를 하나씩 조건에 대입해 가능 여부를 O/X로 표시하라. 부등식 방향이 바뀌는 지점에서는 경곗값을 보기에 넣고 직접 대입해 확인하는 습관이 안전하다. 실전 팁: 서로 다른 두 점, 접한다, 만나지 않는다는 서로 다른 판별식 조건(D>0, D=0, D<0)을 한 세트로 외워 두고, 문제를 읽자마자 어떤 조건인지 먼저 분류하라."
                            },
                            {
                                "title": "기출 4: 연속 백분율 — 인상 후 할인",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "어떤 상품의 가격을 원가에서 40% 인상하여 판매하다가, 그 판매 가격에서 20%를 할인하는 행사를 열었다. 행사 가격은 원가의 몇 %인가?",
                                "options": [
                                    "108%",
                                    "112%",
                                    "116%",
                                    "120%"
                                ],
                                "answer": "112%",
                                "explanation": "이 문제가 노리는 함정은 백분율의 기준이 매 단계마다 바뀐다는 점을 간과하는 것이다. 40% 인상 후 20% 할인을 40-20=20으로 계산해 120%를 고르는 실수가 가장 흔하고, 인상분과 할인율을 곱한 8%를 순효과로 착각해 108%를 고르는 경우도 있다. 풀이 단계는 다음과 같다. 첫째, 원가를 100이라 둔다. 둘째, 40% 인상된 판매가는 100×1.4=140이다. 셋째, 할인율이 적용되는 기준은 원가가 아니라 판매가 140이다. 140×0.8=112이다. 따라서 행사 가격은 원가의 112%이다. 한 번에 계산하면 1.4×0.8=1.12이다. 오답 반박: 108%는 0.4×0.2=0.08을 순증가율로 착각한 답으로, 곱셈의 의미를 잘못 해석한 것이다. 116%는 중간 계산 과정에서 어림셈 오류를 낸 유형으로, 1.4×0.8을 정확히 계산하면 1.12이지 1.16이 아니다. 120%는 기준이 바뀌는 것을 무시하고 40-20을 직접 뺀 답으로, 연속 백분율 문제의 대표 함정에 걸린 것이다. Quick self-check: 인상 후 할인하면 원가보다 항상 낮아지는지(112%>100이므로 여기서는 여전히 원가보다 높음) 상식으로 대조하고, 1.4×0.8 같은 곱셈은 필산으로 한 번 더 확인하라. 실전 팁: 연속 백분율은 반드시 소수 배율(1.4, 0.8)로 바꿔 곱하라. 보기 중 단순 가감으로 나오는 값(120%)이 있으면 일단 의심하고, 곱셈 결과를 기준으로 소거하라."
                            },
                            {
                                "title": "기출 5: 그래프 오독 — 이차함수의 꼭짓점 (NOT형)",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "함수 $f(x) = -2(x-3)^2 + 5$에 대한 설명으로 옳지 않은 것은?",
                                "options": [
                                    "그래프의 꼭짓점은 (3, 5)이다.",
                                    "x = 3에서 최댓값 5를 갖는다.",
                                    "y절편은 -13이다.",
                                    "x > 3인 구간에서 함수는 증가한다."
                                ],
                                "answer": "x > 3인 구간에서 함수는 증가한다.",
                                "explanation": "이 문제가 노리는 함정은 이차항의 계수 -2의 부호를 놓치고 그래프를 위로 볼록한 포물선으로 오독하는 것이다. 부호 하나가 꼭짓점의 최대·최소, 증가·감소 구간을 전부 뒤집는다. 풀이 단계는 다음과 같다. 첫째, 표준형 f(x)=a(x-h)²+k에서 a=-2, h=3, k=5를 읽는다. 둘째, a<0이므로 그래프는 아래로 볼록하고 꼭짓점 (3, 5)에서 최댓값 5를 갖는다. 셋째, y절편은 f(0)=-2×(0-3)²+5=-2×9+5=-13이다. 넷째, 아래로 볼록한 포물선은 꼭짓점 왼쪽(x<3)에서는 증가하고 오른쪽(x>3)에서는 감소한다. 따라서 x>3에서 증가한다는 설명은 옳지 않다. 오답 반박: 꼭짓점은 (3, 5)이다는 표준형에서 직접 읽히는 참인 설명이다. x=3에서 최댓값 5를 갖는다는 a<0인 포물선의 성질상 참이다. y절편은 -13이다는 f(0)을 계산하면 확인되는 참인 설명이다. 이 셋은 모두 옳으므로 NOT형 질문의 답이 될 수 없다. Quick self-check: 이차함수 문제를 만나면 가장 먼저 a의 부호에 동그라미를 치고 볼록 방향을 화살표로 그려라. 증가·감소 구간은 꼭짓점을 기준으로 좌우가 반대임을 입으로 중얼이며 확인하라. 실전 팁: NOT형 보기는 셋이 참이고 하나만 거짓이다. 계산으로 확실히 참인 보기부터 지워 나가면 마지막에 남는 하나가 답이 되므로, 헷갈리는 보기부터 붙잡지 말고 쉬운 것부터 소거하라."
                            },
                            {
                                "title": "기출 6: 지수 법칙 — 밑 통일 함정",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "방정식 $3^{2x} = 81^{x-1}$을 만족하는 $x$의 값은?",
                                "options": [
                                    "1",
                                    "2",
                                    "3",
                                    "4"
                                ],
                                "answer": "2",
                                "explanation": "이 문제가 노리는 함정은 81을 3의 거듭제곱으로 바꿀 때 지수를 잘못 세는 것이다. 81=3⁴인데 3³=27과 헷갈려 3으로 착각하면 2x=3(x-1)에서 x=3이라는 깔끔한 오답이 나온다. 출제자는 이 오답이 그럴듯해 보이도록 보기에 3을 넣어 둔다. 풀이 단계는 다음과 같다. 첫째, 양변의 밑을 3으로 통일한다. 81=3⁴이므로 우변은 (3⁴)^(x-1)=3^(4(x-1))이다. 둘째, 밑이 같으므로 지수끼리 비교한다. 2x=4(x-1)이다. 셋째, 2x=4x-4에서 2x=4, 즉 x=2이다. 검산하면 좌변은 3⁴=81, 우변은 81¹=81로 일치한다. 오답 반박: 1을 대입하면 좌변은 3²=9, 우변은 81⁰=1이므로 성립하지 않는다. 3은 81을 3³으로 착각했을 때 나오는 값으로, 이 문제의 핵심 함정에 걸린 답이다. 4를 대입하면 좌변은 3⁸=6561, 우변은 81³으로 성립하지 않으며, 지수 전개 과정에서 (x-1) 분배를 잘못한 경우에 나오는 값이다. Quick self-check: 81, 64, 32 같은 수는 3⁴=81, 2⁶=64, 2⁵=32처럼 거듭제곱 표를 머릿속에서 한 번 더 세어라. 답을 구한 뒤에는 원래 식에 대입해 양변이 같은지 반드시 확인하라. 실전 팁: 지수방정식에서는 밑 통일이 1순위이다. 81=3⁴, 27=3³, 16=2⁴ 같은 변환을 손이 기억하도록 평소에 외워 두면 시험장에서 시간을 벌 수 있다."
                            },
                            {
                                "title": "기출 7: 부등식 — 음수로 나눌 때 부등호 반전",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "부등식 $-5x + 3 > 28$을 만족하는 $x$의 범위는?",
                                "options": [
                                    "x > -5",
                                    "x < -5",
                                    "x > 5",
                                    "x < 5"
                                ],
                                "answer": "x < -5",
                                "explanation": "이 문제가 노리는 함정은 음수로 나누거나 곱할 때 부등호의 방향을 바꾸지 않는 것이다. 등식처럼 기계적으로 풀면 x>-5라는 보기가 나오는데, 출제자는 이 오답을 첫 번째 보기에 배치해 성급한 선택을 유도한다. 풀이 단계는 다음과 같다. 첫째, 상수항을 이항한다. -5x>28-3, 즉 -5x>25이다. 둘째, 양변을 -5로 나눈다. 음수로 나누므로 부등호의 방향이 바뀌어 x<-5가 된다. 셋째, 검산한다. x=-6을 대입하면 -5×(-6)+3=33>28로 성립하고, x=-4를 대입하면 20+3=23>28이 거짓이므로 경계 -5를 기준으로 왼쪽이 맞다. 오답 반박: x>-5는 부등호 반전을 빠뜨린 답으로 이 문제의 대표 함정이다. x>5는 이항 과정에서 부호를 잘못 처리한 답이다. x<5는 상수 계산(28-3=25)과 부호 처리를 동시에 틀린 경우에 나오는 값이다. Quick self-check: 부등식을 풀 때는 음수로 나누는 순간 부등호에 표시를 하고, 답을 구한 뒤 경계 양쪽의 수를 하나씩 대입해 어느 쪽이 성립하는지 확인하라. 실전 팁: 보기 4개가 부등호 방향과 경계 부호의 조합으로만 이루어진 문제는 출제자가 부호 실수를 노린다는 뜻이다. 천천히 한 줄씩 쓰면서 풀고, 마지막에 대입 검산으로 확정하라."
                            },
                            {
                                "title": "기출 8: 통계 — 평균과 중앙값의 차이",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "다섯 개의 수 4, 6, 9, 11, 30에 대하여 (평균) − (중앙값)의 값은?",
                                "options": [
                                    "3",
                                    "6",
                                    "12",
                                    "21"
                                ],
                                "answer": "3",
                                "explanation": "이 문제가 노리는 함정은 두 가지이다. 첫째, 이상값 30에 끌려 평균 대신 최댓값을 쓰는 실수이다. 둘째, 평균을 구하는 나눗셈을 생략하고 합계를 그대로 쓰는 실수이다. 풀이 단계는 다음과 같다. 첫째, 평균을 구한다. 합은 4+6+9+11+30=60이고 자료가 5개이므로 평균은 60÷5=12이다. 둘째, 중앙값을 구한다. 자료가 이미 크기 순으로 정렬되어 있으므로 가운데인 세 번째 값 9가 중앙값이다. 셋째, 차이를 구한다. 12-9=3이다. 참고로 30 같은 큰 이상값이 있으면 평균이 중앙값보다 커지는 경향이 있는데, 여기서는 그 차이가 3으로 나타났다. 오답 반박: 6은 평균 계산 과정에서 나눗셈을 잘못했거나 중앙값을 6으로 잘못 읽은 경우에 나오는 값이다. 12는 평균 자체를 답으로 쓴 것으로, 마지막에 중앙값을 빼는 단계를 생략한 실수이다. 21은 30-9로 최댓값에서 중앙값을 뺀 것으로, 평균 대신 최댓값을 쓴 대표 함정에 걸린 답이다. Quick self-check: 평균은 합계를 자료 수로 나누었는지, 중앙값은 정렬된 자료의 가운데 값인지 각각 따로 확인하라. 이상값이 있으면 평균이 중앙값 쪽으로 끌려간다는 방향성도 어림셈에 활용하라. 실전 팁: 통계 문제의 보기는 평균·중앙값·최댓값·합계를 뒤섞어 만든 경우가 많다. 무엇을 구했는지 문제의 마지막 줄을 다시 읽고, 구한 값이 평균인지 합계인지 한 번 더 물어보라."
                            },
                            {
                                "title": "기출 9: 원의 방정식 — 완전제곱식 변형",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "원 $x^2 + y^2 - 10x + 4y + 20 = 0$의 반지름의 길이는?",
                                "options": [
                                    "3",
                                    "6",
                                    "9",
                                    "20"
                                ],
                                "answer": "3",
                                "explanation": "이 문제가 노리는 함정은 반지름의 제곱인 9를 그대로 답으로 고르는 것이다. 완전제곱식으로 변형한 뒤 우변에 남는 수가 r²임을 잊고 r로 착각하면 9를 고르게 되는데, 출제자는 이 오답을 보기에 반드시 넣어 둔다. 풀이 단계는 다음과 같다. 첫째, x항과 y항을 각각 묶는다. (x²-10x)+(y²+4y)+20=0이다. 둘째, 완전제곱식을 만든다. x²-10x=(x-5)²-25, y²+4y=(y+2)²-4이다. 셋째, 대입해 정리한다. (x-5)²-25+(y+2)²-4+20=0이므로 (x-5)²+(y+2)²=9이다. 넷째, 표준형 (x-a)²+(y-b)²=r²와 비교하면 r²=9이므로 r=3이다(반지름은 양수). 오답 반박: 9는 r²를 r로 착각한 답으로 이 문제의 핵심 함정이다. 6은 반지름 대신 지름을 구한 답으로, 원 문제에서 자주 나오는 혼동이다. 20은 상수항을 반지름과 연결 지은 답으로, 완전제곱식 변형을 시도하지 않고 눈에 보이는 숫자를 고른 것이다. Quick self-check: 변형이 끝나면 중심 (5, -2)가 원래 식의 x, y 계수 부호와 반대인지, 우변의 수가 제곱근을 씌워야 하는지 확인하라. r²=9에서 r=±3이 나오지만 길이는 양수이므로 3이다. 실전 팁: 원의 방정식 문제는 완전제곱식 변형이 끝나면 중심과 반지름을 따로 적어 두라. 보기에는 r², 지름, 상수항이 섞여 있으므로 무엇을 물었는지 마지막에 다시 확인하라."
                            },
                            {
                                "title": "기출 10: 다단계 — 합과 곱으로 두 수 구하기",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "합이 18이고 곱이 72인 두 수에 대하여, 큰 수에서 작은 수를 뺀 값은?",
                                "options": [
                                    "3",
                                    "6",
                                    "9",
                                    "12"
                                ],
                                "answer": "6",
                                "explanation": "이 문제가 노리는 함정은 두 수를 구하는 데서 멈추고 마지막 뺄셈 단계를 생략하는 것이다. 두 수 12와 6을 구한 뒤 큰 수 12를 그대로 답으로 고르는 실수가 가장 흔하며, 출제자는 12를 보기에 넣어 둔다. 풀이 단계는 다음과 같다. 첫째, 두 수를 a, b라 하면 a+b=18, ab=72이다. 둘째, a, b는 이차방정식 t²-18t+72=0의 두 근이다(근과 계수의 관계). 셋째, 인수분해한다. t²-18t+72=(t-12)(t-6)=0이므로 두 수는 12와 6이다. 넷째, 문제에서 요구한 큰 수에서 작은 수를 뺀 값은 12-6=6이다. 검산하면 합은 18, 곱은 72로 조건과 일치한다. 오답 반박: 3은 인수분해 과정에서 계수를 잘못 다룬 경우에 나오는 값으로, (t-12)(t-6)의 전개가 t²-18t+72인지 확인하면 배제된다. 9는 두 수의 평균(18÷2)으로, 뺄셈이 아니라 나눗셈을 한 답이다. 12는 두 수 중 큰 수 자체로, 마지막 뺄셈 단계를 생략한 대표 함정에 걸린 답이다. Quick self-check: 다단계 문제는 무엇을 구했는지가 아니라 무엇을 물었는지를 마지막에 다시 읽어라. 구한 두 수를 원래 조건(합과 곱)에 대입해 검산하는 습관이 오답을 막는다. 실전 팁: 합과 곱이 주어지면 이차방정식 t²-(합)t+(곱)=0을 세우는 것이 가장 빠른 길이다. 인수분해가 안 되면 근의 공식을 쓰되, 그래도 안 되면 두 수의 차이를 d라 두고 연립하는 방법도 있다."
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "sat-rw",
            "title": "SAT Reading & Writing (Digital)",
            "code": "SAT-RW",
            "description": "Digital SAT Reading & Writing prep: Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions.",
            "color": "#8b5cf6",
            "icon": "fas fa-book-open",
            "intuition": "Digital SAT Reading & Writing gives you one short passage (25-150 words) and one question — there is no time to skim and hope. Every correct answer is directly supported by specific words in the text, so the winning habit is to locate the exact evidence before looking at the choices. When you can point to the line that proves your answer and explain why each wrong choice fails, traps like extreme wording, half-true details, and outside knowledge stop working on you.",
            "local_resources": [],
            "difficulty": "advanced",
            "units": [
                {
                    "title": "Unit 1: Information and Ideas (26%)",
                    "insight": "These questions test whether you can find what the text actually says: the central claim, a stated detail, a reasonable inference, or what a table or graph supports. The passage always contains the answer — inference questions only ask for what must be true given the evidence, never for outside knowledge or plausible speculation.",
                    "topics": [
                        "Main idea",
                        "Explicit detail",
                        "Inference",
                        "Data interpretation (tables and graphs)",
                        "Evidence-based reasoning"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Main Idea — The Honeybee Waggle Dance",
                                "difficulty": "medium",
                                "question": "Honeybees perform a figure-eight 'waggle dance' to tell nestmates about food sources. Biologist Karl von Frisch showed that the angle of the dance encodes the direction of the food relative to the sun, and the duration of the waggle run encodes distance. More recent research has revealed a further layer: dancers adjust the vigor and repetition of their performance according to how rich the source is, so the dance also communicates profitability. Together, these findings portray the dance as a remarkably information-dense signal.<br><br>Which choice best states the main idea of the text?",
                                "options": [
                                    "A) The waggle dance is a complex communication system that conveys direction, distance, and food quality.",
                                    "B) Karl von Frisch discovered that the waggle dance encodes direction and distance.",
                                    "C) Honeybees rely solely on the waggle dance to locate every food source.",
                                    "D) Recent research has disproved von Frisch's explanation of the waggle dance."
                                ],
                                "answer": "A) The waggle dance is a complex communication system that conveys direction, distance, and food quality.",
                                "explanation": "Trap alert: choice B is tempting because von Frisch is a named detail that feels important, but the test rewards the idea that covers the WHOLE passage, not one sentence of it. The passage builds in layers — direction and distance (von Frisch), then profitability (recent research) — and the final sentence explicitly sums this up as 'a remarkably information-dense signal,' which directly supports A. Wrong-answer watch: B is too narrow since it ignores the entire second half about profitability; C uses the extreme word 'solely,' which the text never claims (bees also use scent and other cues, and 'solely' is a classic SAT red flag); D flatly contradicts the text because recent research adds to von Frisch's findings rather than disproving them. Quick self-check: cover the choices and ask yourself, 'What is this passage mostly about?' If your one-sentence summary mentions only one researcher or one detail, it is too narrow — the main idea must account for every paragraph."
                            },
                            {
                                "title": "Level 2: Explicit Detail — San Francisco, 1906",
                                "difficulty": "medium",
                                "question": "In April 1906, a powerful earthquake and the fires that followed devastated San Francisco. Photographer Arnold Genthe, whose studio and entire archive of negatives were destroyed in the disaster, borrowed a camera and spent days documenting the ruined city. His images — of collapsed buildings, refugees camped in parks, and soldiers patrolling the streets — became some of the most widely reproduced photographs of the catastrophe, shaping how the nation visualized the event.<br><br>According to the text, what did Arnold Genthe do after the 1906 earthquake?",
                                "options": [
                                    "A) He rebuilt his photography studio in downtown San Francisco.",
                                    "B) He borrowed a camera and photographed the ruined city.",
                                    "C) He sold his surviving negatives to national newspapers.",
                                    "D) He left San Francisco to document other natural disasters."
                                ],
                                "answer": "B) He borrowed a camera and photographed the ruined city.",
                                "explanation": "Trap alert: this is a pure detail-location question, and the trap is to answer from general knowledge about photographers instead of from the text. The text states directly that Genthe 'borrowed a camera and spent days documenting the ruined city' after his studio and archive were destroyed. Choice B restates that sentence almost word for word, which is exactly what detail questions reward. Wrong-answer watch: A is never mentioned — the text says his studio was destroyed, not rebuilt; C contradicts the text, which says his entire archive of negatives was destroyed, so there were no surviving negatives to sell; D invents an action (leaving the city) that the passage never describes. Quick self-check: for detail questions, put your finger on the sentence that answers the question before reading the choices. If you cannot find it, the answer is not 'probably' — it is the choice you can underline."
                            },
                            {
                                "title": "Level 3: Inference — Mara's Tin Box",
                                "difficulty": "medium",
                                "question": "Mara kept her grandmother's letters in a tin box at the back of her closet. On rainy afternoons she would take the box down, read two or three letters slowly, and return them in their original order before putting the box away. She never mentioned the letters to her friends, and when her sister once asked to see them, Mara smiled and changed the subject.<br><br>Based on the text, what can most reasonably be inferred about Mara?",
                                "options": [
                                    "A) She regards the letters as deeply personal treasures.",
                                    "B) She is embarrassed by her grandmother's writing.",
                                    "C) She plans to publish the letters someday.",
                                    "D) She has forgotten most of what the letters say."
                                ],
                                "answer": "A) She regards the letters as deeply personal treasures.",
                                "explanation": "Trap alert: inference questions punish answers that go one step beyond the evidence. Every behavior in the passage — storing the letters carefully, rereading them slowly, preserving their order, and deflecting her sister's request — points to privacy and cherishing, which choice A captures without adding anything new. Wrong-answer watch: B assumes a motive (embarrassment) the text never hints at; nothing suggests shame, only protectiveness. C invents a future plan; someone guarding letters from her own sister is unlikely to be planning publication, and the text gives zero evidence of it. D contradicts the rereading habit — she reads them repeatedly and carefully, which implies familiarity, not forgetting. Quick self-check: a valid inference must be something the author would agree is true given these facts. Ask, 'Must this be true, or just could it be true?' Only A must be true."
                            },
                            {
                                "title": "Level 4: Data — Migratory Bird Speeds",
                                "difficulty": "medium",
                                "question": "Researchers used lightweight geolocators to measure the average cruising speeds of four migratory birds during long-distance flights. The results, in kilometers per hour, were as follows: Arctic tern, 35; Swainson's hawk, 42; ruby-throated hummingbird, 48; blackpoll warbler, 32. The team noted that body size did not predict speed in any simple way.<br><br>Which choice is best supported by the data?",
                                "options": [
                                    "A) The ruby-throated hummingbird had the highest average cruising speed of the four birds.",
                                    "B) The Arctic tern flew faster than the Swainson's hawk.",
                                    "C) Larger birds consistently flew at higher speeds than smaller birds.",
                                    "D) The blackpoll warbler had the second-highest average cruising speed."
                                ],
                                "answer": "A) The ruby-throated hummingbird had the highest average cruising speed of the four birds.",
                                "explanation": "Trap alert: data questions are easy points only if you actually compare every number instead of trusting your instincts about birds. Reading the values — tern 35, hawk 42, hummingbird 48, warbler 32 — the hummingbird's 48 is the largest, so A is directly supported. Wrong-answer watch: B reverses the numbers (35 is less than 42); C contradicts the text's explicit statement that body size did not predict speed in any simple way, and the tiny hummingbird being fastest is itself a counterexample; D is wrong because the warbler's 32 is the lowest, not the second-highest (second-highest is the hawk at 42). Quick self-check: before choosing, rank the values yourself on scratch paper. Data questions reward thirty seconds of careful sorting, not bird knowledge."
                            },
                            {
                                "title": "Level 5: Inference — Ocean Iron Fertilization",
                                "difficulty": "hard",
                                "question": "In several experiments, scientists scattered iron particles across patches of ocean to stimulate phytoplankton blooms, hoping the tiny organisms would absorb atmospheric carbon dioxide and carry it to the deep sea when they died. The blooms did form and did absorb carbon, but follow-up measurements showed that most of the dead plankton decomposed near the surface, releasing their carbon back into the air. Only a small fraction sank deep enough for long-term storage.<br><br>Which choice is the most reasonable inference from the text?",
                                "options": [
                                    "A) Iron fertilization is a less effective carbon-storage strategy than its supporters had hoped.",
                                    "B) Phytoplankton blooms are harmful to all other marine life.",
                                    "C) Iron particles dissolve too quickly to affect ocean chemistry.",
                                    "D) The experiments prove that ocean-based climate solutions cannot work."
                                ],
                                "answer": "A) Iron fertilization is a less effective carbon-storage strategy than its supporters had hoped.",
                                "explanation": "Trap alert: the hardest inferences require you to combine two facts (blooms absorbed carbon AND most of it returned to the air) into one measured conclusion. The passage sets up a hope — long-term deep-sea storage — and then reports that only 'a small fraction' achieved it, which logically means the strategy underperformed expectations. That is exactly what A says, using the cautious comparative 'less effective than hoped.' Wrong-answer watch: B leaps far beyond the text, which says nothing about harm to other marine life; C contradicts the passage, since the iron clearly worked well enough to create blooms; D is the classic extreme trap — 'prove' and 'cannot work' are absolute claims, while the text describes one strategy's disappointing results, not the impossibility of all ocean solutions. Quick self-check: check every strong word in a choice (all, prove, cannot, solely). If the passage uses qualified language like 'most' and 'a small fraction,' the answer should be qualified too."
                            },
                            {
                                "title": "Level 6: Main Idea — The Highway Bypass",
                                "difficulty": "hard",
                                "question": "When the new interstate bypassed the town of Millerton in 1978, local leaders predicted economic ruin. Some businesses did fail: three motels and a diner closed within two years. Yet others adapted in unexpected ways. A former gas station became an antique shop catering to tourists who now stopped deliberately rather than out of necessity, and the town's annual harvest festival, once a modest local affair, grew into a regional attraction. By 1985, total retail revenue had nearly recovered to pre-bypass levels.<br><br>Which choice best states the main idea of the text?",
                                "options": [
                                    "A) Economic shocks can produce varied adaptations rather than uniform decline.",
                                    "B) The 1978 bypass had no significant effect on Millerton's economy.",
                                    "C) Tourism is the only reliable foundation for a small town's economy.",
                                    "D) Local leaders accurately predicted the bypass's consequences."
                                ],
                                "answer": "A) Economic shocks can produce varied adaptations rather than uniform decline.",
                                "explanation": "Trap alert: this passage deliberately gives you both failures AND recoveries, so any choice that mentions only one side is half-right and therefore wrong. The structure is contrast — 'some businesses did fail' versus 'yet others adapted' — and the revenue recovery confirms the larger point: the shock produced a mix of outcomes, which A states as a general principle. Wrong-answer watch: B ignores the closed motels and diner, so 'no significant effect' is false; C overgeneralizes from one antique shop and one festival into 'the only reliable foundation,' an extreme claim the text never makes; D contradicts the text directly, since leaders predicted 'ruin' but revenue nearly recovered. Quick self-check: when a passage shows two contrasting outcomes, the main idea almost always embraces both. Eliminate any choice that describes only the failures or only the successes."
                            },
                            {
                                "title": "Level 7: Data — Exoplanet Detection Methods",
                                "difficulty": "hard",
                                "question": "A census of confirmed exoplanets lists the detection method for each discovery. The transit method, which spots the slight dimming of a star as a planet passes in front of it, accounts for about 4,200 planets. The radial velocity method accounts for roughly 1,050. Microlensing has found about 200, and direct imaging about 70. Astronomers caution that these counts reflect what each technique is best at finding, not the true abundance of each planet type.<br><br>Which choice is best supported by the data?",
                                "options": [
                                    "A) The transit method has detected more exoplanets than all the other listed methods combined.",
                                    "B) Direct imaging is the most productive detection method.",
                                    "C) Most exoplanets in the galaxy are discovered by the transit method.",
                                    "D) Microlensing will soon surpass radial velocity in total discoveries."
                                ],
                                "answer": "A) The transit method has detected more exoplanets than all the other listed methods combined.",
                                "explanation": "Trap alert: you must do the arithmetic, not just spot the biggest number. The other methods total roughly 1,050 + 200 + 70 = 1,320, and 4,200 is greater than 1,320, so A is mathematically supported. Wrong-answer watch: B contradicts the data — direct imaging's 70 is the smallest count, a trap for students who confuse 'advanced' with 'productive'; C makes an unjustified leap from 'planets discovered' to 'planets in the galaxy,' which the passage explicitly warns against ('not the true abundance of each planet type'); D predicts the future, and the data describe only past discoveries with no trend information. Quick self-check: for 'combined' or 'majority' claims, add the numbers yourself. And watch for the classic scope shift from the sample (discovered planets) to the universe (all planets) — the passage itself tells you not to make it."
                            },
                            {
                                "title": "Level 8: Inference — Houses Without Doors",
                                "difficulty": "hard",
                                "question": "At Catalhoyuk, a 9,000-year-old settlement in present-day Turkey, archaeologists found houses with no ground-level doors; residents entered by ladders through openings in the roofs. The dead were buried beneath the floors, and interior walls were covered with paintings of hunts and geometric patterns. Daily activities — cooking, toolmaking, sleeping — took place in the same rooms that held burials and art.<br><br>What does the evidence described in the text most strongly suggest?",
                                "options": [
                                    "A) The inhabitants' homes served ritual and commemorative functions as well as domestic ones.",
                                    "B) The inhabitants feared invasion and built houses purely for defense.",
                                    "C) The inhabitants had no concept of private property.",
                                    "D) The settlement was primarily a ceremonial center rather than a place where people lived."
                                ],
                                "answer": "A) The inhabitants' homes served ritual and commemorative functions as well as domestic ones.",
                                "explanation": "Trap alert: the inference must explain ALL the evidence, not just the most striking detail. Roof entry alone might suggest defense, but the burials under floors and the elaborate wall paintings in rooms also used for cooking and sleeping show that domestic space doubled as ritual space — exactly what A claims, with the careful qualifier 'as well as.' Wrong-answer watch: B explains the ladders but ignores the burials and art, which have nothing to do with defense; C is a sweeping claim about property concepts that no evidence in the passage addresses; D goes too far in the other direction — people clearly lived there (cooking, sleeping, toolmaking), so 'primarily a ceremonial center' contradicts the domestic evidence. Quick self-check: list each piece of evidence and ask whether your choice accounts for all of them. The right inference is the one that leaves no detail unexplained and adds no new claim."
                            },
                            {
                                "title": "Level 9: Detail — Sleep and Memory",
                                "difficulty": "hard",
                                "question": "To test whether sleep consolidates memory, researchers taught two groups of volunteers a list of paired words in the evening. One group then slept for eight hours, while the other stayed awake watching films. When both groups were tested the next morning, the sleep group recalled an average of 72 percent of the pairs, compared with 51 percent for the wake group. Brain scans during the test showed stronger activity in the hippocampus among participants who had slept.<br><br>According to the text, what did the experiment find?",
                                "options": [
                                    "A) Sleeping after learning was associated with better recall and greater hippocampal activity.",
                                    "B) Watching films before a memory test improves word-pair recall.",
                                    "C) The hippocampus is the only brain region involved in memory.",
                                    "D) Eight hours of sleep is required for any learning to occur."
                                ],
                                "answer": "A) Sleeping after learning was associated with better recall and greater hippocampal activity.",
                                "explanation": "Trap alert: with two results reported (recall scores AND brain scans), the correct choice must include both — a choice mentioning only one is incomplete. The text gives two findings: 72 percent versus 51 percent recall, and stronger hippocampal activity in the sleep group. Choice A captures both, and its cautious word 'associated' correctly avoids claiming proof of causation from a single experiment. Wrong-answer watch: B reverses the result — the film-watching (wake) group did worse, not better; C uses the extreme 'only,' which the text never claims (it mentions the hippocampus but does not rule out other regions); D turns one experimental condition (eight hours) into a universal requirement ('required for any learning'), an unjustified generalization. Quick self-check: when a study reports multiple findings, the right answer usually combines them. Strike any choice that upgrades a correlation ('associated with') into a proven cause or an absolute rule."
                            },
                            {
                                "title": "Level 10: Data — Irrigation and Crop Yield",
                                "difficulty": "hard",
                                "question": "An agricultural station compared flood irrigation with drip irrigation for wheat grown in three soil types. Average yields in tons per hectare were: sandy soil — flood 2.1, drip 3.4; loam — flood 3.8, drip 4.6; clay — flood 4.1, drip 4.0. The researchers concluded that irrigation method interacts with soil texture rather than being universally superior.<br><br>Which choice is best supported by the data?",
                                "options": [
                                    "A) Drip irrigation produced higher yields than flood irrigation on sandy and loam soils, but not on clay.",
                                    "B) Drip irrigation produced higher yields than flood irrigation on every soil type tested.",
                                    "C) Clay soil produced the highest yields regardless of irrigation method.",
                                    "D) Flood irrigation is the better choice for sandy soil."
                                ],
                                "answer": "A) Drip irrigation produced higher yields than flood irrigation on sandy and loam soils, but not on clay.",
                                "explanation": "Trap alert: the numbers here reward a comparison done soil by soil, and the trap is to generalize from the two soils where drip wins. Check each pair: sandy 3.4 > 2.1 (drip wins), loam 4.6 > 3.8 (drip wins), clay 4.0 < 4.1 (drip loses slightly). Only A states this exact pattern, including the exception. Wrong-answer watch: B is the overgeneralization trap — it is true for two soils but false for clay, and 'every' makes it wrong; C is wrong because on sandy soil drip yielded 3.4 while on clay flood yielded 4.1 — but the claim says clay is highest 'regardless of method,' and drip on clay (4.0) is lower than drip on loam (4.6); D directly contradicts the data (drip 3.4 beats flood 2.1 on sandy soil). Quick self-check: for comparison tables, write win/loss for each row before reading the choices. The correct answer on hard data questions almost always contains a qualifier or an exception — here, 'but not on clay.'"
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 2: Craft and Structure (28%)",
                    "insight": "These questions ask how the text is built and why: what a word means in this exact context, what a sentence or paragraph is doing, what the author's attitude is, and how two texts relate. Context clues — not memorized definitions — always unlock vocabulary questions, and structure questions are answered by the text's logical job, not its topic.",
                    "topics": [
                        "Words in context",
                        "Text structure and purpose",
                        "Author perspective and tone",
                        "Cross-text comparison"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Words in Context — 'Sweeping'",
                                "difficulty": "medium",
                                "question": "The committee's report was sweeping: it addressed everything from budget procedures and hiring practices to the design of the employee handbook, leaving almost no aspect of the organization unexamined.<br><br>As used in the text, what does the word 'sweeping' most nearly mean?",
                                "options": [
                                    "A) Wide-ranging",
                                    "B) Forceful",
                                    "C) Hasty",
                                    "D) Controversial"
                                ],
                                "answer": "A) Wide-ranging",
                                "explanation": "Trap alert: 'sweeping' has several dictionary meanings, and the trap is to pick the one you know best instead of the one the context demands. The colon after 'sweeping' introduces the definition: the report 'addressed everything' and left 'almost no aspect unexamined.' That is a statement about scope, which matches 'wide-ranging' exactly. Wrong-answer watch: B ('forceful') confuses breadth with intensity — the text describes how much the report covers, not how aggressively it argues; C ('hasty') has no support at all, since thoroughness is the opposite of haste; D ('controversial') imports an attitude the passage never mentions — nothing says anyone objected to the report. Quick self-check: cover the word and substitute each choice into the sentence. The right substitute must make the explanatory clause after the colon ('it addressed everything...') still make sense. Only 'wide-ranging' does."
                            },
                            {
                                "title": "Level 2: Purpose — Urban Beekeeping",
                                "difficulty": "medium",
                                "question": "Rooftop beehives have become fashionable in major cities, and supporters claim urban honey is purer because cities use fewer pesticides than farmland. This claim is misleading. Urban bees forage on ornamental flowers treated with garden chemicals and collect water from contaminated sources; studies have found higher levels of certain pollutants in city honey than in rural honey. The romance of the rooftop hive should not obscure what the bees are actually eating.<br><br>What is the main purpose of the text?",
                                "options": [
                                    "A) To challenge a popular claim about urban beekeeping",
                                    "B) To instruct readers on how to maintain a rooftop hive",
                                    "C) To celebrate the growth of urban beekeeping",
                                    "D) To compare the taste of urban and rural honey"
                                ],
                                "answer": "A) To challenge a popular claim about urban beekeeping",
                                "explanation": "Trap alert: purpose questions test the author's job, not the topic. The topic is urban beekeeping, but the author's job is signaled by 'This claim is misleading' followed by counterevidence about pollutants — the whole passage works to knock down the 'purer honey' claim. That is exactly A. Wrong-answer watch: B mistakes the topic for the purpose; the text gives zero instructions about hive maintenance. C gets the attitude backwards — the author is skeptical ('should not obscure'), not celebratory. D invents a comparison the text never makes; taste is never mentioned, only pollutant levels. Quick self-check: find the sentence where the author takes a stance ('This claim is misleading'). The purpose is whatever that stance is doing — here, challenging. If a choice describes the topic without the stance, it is wrong."
                            },
                            {
                                "title": "Level 3: Words in Context — 'Tempered'",
                                "difficulty": "medium",
                                "question": "The historian's enthusiasm for the expedition was tempered by the diaries of its crew members, which described months of hunger, disease, and despair. While she admired the navigators' courage, she could not ignore the suffering their ambition had caused.<br><br>As used in the text, what does the word 'tempered' most nearly mean?",
                                "options": [
                                    "A) Moderated",
                                    "B) Strengthened",
                                    "C) Heated",
                                    "D) Documented"
                                ],
                                "answer": "A) Moderated",
                                "explanation": "Trap alert: 'tempered' in the sense of tempered steel means strengthened, and that familiar meaning is the trap. But the context here is emotional: enthusiasm pulled in one direction by admiration, pulled back by accounts of suffering — the result is enthusiasm reduced or balanced, i.e., 'moderated.' The second sentence confirms it: 'she could not ignore the suffering,' which restrains rather than fuels her enthusiasm. Wrong-answer watch: B is the steel metaphor misapplied — the diaries do not strengthen her enthusiasm, they check it; C ('heated') goes the wrong direction entirely, intensifying instead of restraining; D ('documented') is unrelated to what the diaries do to her feelings — they influence her attitude, not her records. Quick self-check: ask what the surrounding facts do to the feeling. Diaries of suffering applied to enthusiasm can only dampen it. The context always outranks the first definition you remember."
                            },
                            {
                                "title": "Level 4: Author Perspective — Polynesian Wayfinders",
                                "difficulty": "medium",
                                "question": "Long before modern instruments, Polynesian navigators crossed thousands of miles of open ocean, reading the swells, the stars, and the flight paths of birds with a precision that still astonishes scientists. Their voyaging canoes carried families, crops, and animals to islands they had never seen, guided by knowledge passed down through generations of careful observation. It was, by any measure, one of humanity's great intellectual achievements.<br><br>Which choice best describes the author's perspective on Polynesian navigators?",
                                "options": [
                                    "A) Admiring of their skill and knowledge",
                                    "B) Skeptical that their voyages really occurred",
                                    "C) Concerned about the risks they took",
                                    "D) Neutral and purely descriptive"
                                ],
                                "answer": "A) Admiring of their skill and knowledge",
                                "explanation": "Trap alert: perspective questions are answered by the author's evaluative words, not by the facts alone. Here the evaluations pile up: 'precision that still astonishes scientists,' 'careful observation,' and the closing judgment — 'one of humanity's great intellectual achievements.' That is unmistakable admiration, stated in A. Wrong-answer watch: B contradicts the text, which treats the voyages as established fact, never questioning them; C invents a worry the author never expresses — risks are never mentioned, only accomplishments; D ignores the loaded language ('astonishes,' 'great intellectual achievements'), which is the opposite of neutral. Quick self-check: circle every adjective or judgment phrase. If they are all positive, the perspective is positive. Students miss these by summarizing the facts and forgetting to weigh the author's own words."
                            },
                            {
                                "title": "Level 5: Words in Context — 'Plastic'",
                                "difficulty": "hard",
                                "question": "After a stroke damaged the language centers of his left hemisphere, the patient gradually recovered the ability to speak — not because the dead tissue healed, but because neighboring regions of his brain took over the lost functions. Such cases demonstrate that the adult brain is far more plastic than scientists once believed, capable of rewiring itself in response to injury.<br><br>As used in the text, what does the word 'plastic' most nearly mean?",
                                "options": [
                                    "A) Adaptable",
                                    "B) Artificial",
                                    "C) Fragile",
                                    "D) Complex"
                                ],
                                "answer": "A) Adaptable",
                                "explanation": "Trap alert: this is a classic SAT move — a common word used in its technical sense, with the everyday meaning ('made of plastic') offered as a trap. The context defines it for you: neighboring brain regions 'took over the lost functions,' and the brain is 'capable of rewiring itself.' Rewiring in response to injury is adaptability, so A is the only fit. Wrong-answer watch: B is the everyday-meaning trap — nothing here is artificial; the recovery is natural. C ('fragile') reverses the point: the passage celebrates the brain's resilience, not its breakability. D ('complex') is true of brains in general but does not explain the specific phenomenon described — rewiring after damage is about flexibility, not complexity. Quick self-check: when a familiar word feels odd in context, treat it as a term of art and let the surrounding sentences define it. Here 'capable of rewiring itself' is the built-in dictionary."
                            },
                            {
                                "title": "Level 6: Text Structure — Coffee's Origins",
                                "difficulty": "hard",
                                "question": "Ethiopian legend holds that coffee was discovered when a goat herder noticed his animals dancing after eating certain berries. Genetic analysis of coffee plants now supports an Ethiopian origin: the wild coffee populations of Ethiopia's highlands show far greater genetic diversity than cultivated varieties elsewhere, a pattern expected in a species' homeland. A rival claim traces coffee to Yemen, but Yemeni plants are genetically uniform, consistent with a later introduction rather than an origin.<br><br>Which choice best describes the structure of the text?",
                                "options": [
                                    "A) It presents a traditional account, then cites scientific evidence supporting it while undermining a competing claim.",
                                    "B) It describes two equally valid theories without favoring either.",
                                    "C) It refutes a legend by showing that genetic evidence contradicts it.",
                                    "D) It traces the chronological spread of coffee from Ethiopia to Yemen."
                                ],
                                "answer": "A) It presents a traditional account, then cites scientific evidence supporting it while undermining a competing claim.",
                                "explanation": "Trap alert: structure questions describe the logical moves, and each wrong choice mislabels one move. Map the passage: sentence one gives the legend (traditional account), sentences two and three give genetic evidence FOR Ethiopia ('supports an Ethiopian origin'), and the final sentence presents the Yemen rival and the evidence AGAINST it ('consistent with a later introduction rather than an origin'). That three-part structure is exactly A. Wrong-answer watch: B is wrong because the text clearly favors Ethiopia — the theories are not treated as equal; C reverses the logic, since the genetic evidence supports rather than refutes the legend; D invents a chronological narrative the text never gives — no dates or spread sequence appear. Quick self-check: label each sentence's job (claim, evidence-for, evidence-against) before reading the choices. The right answer will match your labels in order."
                            },
                            {
                                "title": "Level 7: Cross-Text — Social Media and Attention",
                                "difficulty": "hard",
                                "question": "Text 1: Teenagers who spend hours on social media show measurably shorter attention spans than their peers. The constant novelty of feeds and notifications trains the brain to expect rapid stimulation, making sustained focus increasingly difficult. Social media is rewiring adolescent attention for the worse. Text 2: A ten-year study tracking 5,000 adolescents found that heavy social media users did have shorter attention spans — but the difference vanished once researchers controlled for pre-existing attention difficulties and sleep deprivation. The apparent effect of social media was largely explained by factors that predated it.<br><br>How would the author of Text 2 most likely respond to the claim made in Text 1?",
                                "options": [
                                    "A) By arguing that the observed correlation has alternative explanations",
                                    "B) By denying that teenagers use social media heavily",
                                    "C) By agreeing that social media directly damages attention",
                                    "D) By suggesting that attention spans cannot be measured reliably"
                                ],
                                "answer": "A) By arguing that the observed correlation has alternative explanations",
                                "explanation": "Trap alert: cross-text questions test the logical relationship, and the trap is to think Text 2 merely disagrees about the facts. Text 2 does not dispute that heavy users have shorter attention spans — it concedes the correlation ('did have shorter attention spans') but explains it away with confounds: 'pre-existing attention difficulties and sleep deprivation.' That is a causal challenge, not a factual denial, which A captures precisely. Wrong-answer watch: B is wrong because Text 2 accepts that heavy use occurs — it studies 'heavy social media users'; C is the opposite of Text 2's position, which says the effect 'was largely explained by factors that predated' social media; D invents a methodological objection Text 2 never raises — the study itself measures attention spans without questioning the measurement. Quick self-check: ask what Text 2 concedes and what it contests. Conceded: the correlation. Contested: the causation. The answer must reflect both."
                            },
                            {
                                "title": "Level 8: Tone — The Comedy of Errors",
                                "difficulty": "hard",
                                "question": "My first year in the lab was a comedy of errors. I contaminated a month's worth of cell cultures by sneezing at the worst possible moment, mislabeled an entire freezer of samples, and once set off the fire alarm with an overheated centrifuge. Each disaster taught me something, though — usually the importance of writing things down — and I eventually became the most careful researcher in the group, if only from hard-won habit.<br><br>Which choice best describes the author's attitude toward the failures described in the text?",
                                "options": [
                                    "A) Self-deprecating but ultimately positive",
                                    "B) Bitter and resentful",
                                    "C) Embarrassed and eager to forget them",
                                    "D) Indifferent and detached"
                                ],
                                "answer": "A) Self-deprecating but ultimately positive",
                                "explanation": "Trap alert: tone questions often require two halves — the attitude toward the failures AND the attitude toward the outcome — and choices that capture only one half are traps. The author mocks herself ('comedy of errors,' sneezing into cultures), which is self-deprecation, but the arc bends upward: 'each disaster taught me something' and she became 'the most careful researcher.' Both halves are in A. Wrong-answer watch: B misses the humor entirely — nothing here is bitter; the comic framing rules out resentment. C captures the embarrassment but ignores the explicit lesson-taking; someone 'eager to forget' would not recount each disaster in loving detail. D contradicts the vivid, personal storytelling — detached writers do not call their own year 'a comedy of errors.' Quick self-check: check the ending first. Endings reveal the final attitude: here it is growth and pride, which eliminates every purely negative choice."
                            },
                            {
                                "title": "Level 9: Function of a Detail — Parrotfish and Coral",
                                "difficulty": "hard",
                                "question": "Coral reefs recover from bleaching events at strikingly different rates, and the presence of grazing fish appears to be a key factor. On reefs where parrotfish are abundant, the fish scrape algae off the coral surfaces, keeping the surfaces clean for new coral polyps to settle and grow. Reefs without such grazers often remain smothered in algae for years. Marine biologists now consider protecting herbivorous fish as important as reducing pollution.<br><br>What is the function of the mention of parrotfish in the text?",
                                "options": [
                                    "A) To provide an example of how grazing animals aid reef recovery",
                                    "B) To argue that parrotfish are the most important species on reefs",
                                    "C) To describe the diet of parrotfish in detail",
                                    "D) To suggest that algae is harmless to coral reefs"
                                ],
                                "answer": "A) To provide an example of how grazing animals aid reef recovery",
                                "explanation": "Trap alert: function questions ask what the detail DOES for the argument, and the trap is to describe the detail's content instead of its role. The parrotfish sentence sits between the general claim ('grazing fish appears to be a key factor') and the conclusion ('protecting herbivorous fish'), serving as the concrete illustration of the mechanism — scraping algae so polyps can settle. That illustrative role is A. Wrong-answer watch: B upgrades an example into a superlative ('most important species') the text never asserts; C mistakes content for function — the diet is mentioned only to explain the mechanism, not as an end in itself; D contradicts the passage, which presents algae as smothering reefs for years. Quick self-check: delete the detail mentally and ask what the paragraph loses. Here it loses its proof — the example that makes the general claim believable. Function answers almost always contain words like 'example,' 'illustrate,' or 'support.'"
                            },
                            {
                                "title": "Level 10: Cross-Text — AI and Radiologists",
                                "difficulty": "hard",
                                "question": "Text 1: Artificial intelligence systems now detect tumors in medical scans with accuracy matching or exceeding that of human radiologists. Within a decade, the routine work of reading scans will be fully automated, and the radiologist's role as image interpreter will largely disappear. Text 2: In recent clinical trials, AI-assisted radiologists did outperform both AI alone and radiologists alone — but the gains came from the partnership, not the replacement. Radiologists caught the AI's false alarms, while the AI flagged subtle patterns humans missed. The technology appears to be making experts more valuable, not obsolete.<br><br>Which choice best describes the relationship between the two texts?",
                                "options": [
                                    "A) Text 2 qualifies Text 1's prediction by presenting evidence for a collaborative outcome.",
                                    "B) Text 2 completely agrees with Text 1's prediction about automation.",
                                    "C) Text 2 disputes the accuracy of AI tumor detection reported in Text 1.",
                                    "D) Text 2 argues that radiologists are unnecessary even with AI assistance."
                                ],
                                "answer": "A) Text 2 qualifies Text 1's prediction by presenting evidence for a collaborative outcome.",
                                "explanation": "Trap alert: the relationship here is partial agreement, and the choices test whether you see exactly where the texts converge and diverge. Both accept that AI detects tumors well — Text 2 never disputes the accuracy claim. They differ on the consequence: Text 1 predicts replacement ('will largely disappear'), while Text 2 shows trials where the partnership beat either alone, making experts 'more valuable, not obsolete.' That is a qualification — accepting the premise, limiting the conclusion — which A states precisely. Wrong-answer watch: B ignores the direct contradiction between 'largely disappear' and 'more valuable, not obsolete'; C is wrong because Text 2 concedes AI's accuracy ('AI-assisted radiologists did outperform'), disputing only what follows from it; D reverses Text 2, which defends radiologists' value rather than dismissing it. Quick self-check: for cross-text questions, write 'agree on X, differ on Y.' Here: agree on AI capability, differ on replacement versus collaboration. The answer must contain both halves."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 3: Expression of Ideas (20%)",
                    "insight": "These questions test revision skills: choosing the transition that matches the logical relationship, combining sentences without redundancy, and selecting the detail that actually supports the claim. Read the sentences around the blank as a logical equation — cause, contrast, or continuation — and the right transition becomes the only one that fits.",
                    "topics": [
                        "Transitions and logical connectors",
                        "Effective sentence combining",
                        "Relevance and supporting details",
                        "Concision"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Transition — Car-Free Downtown",
                                "difficulty": "medium",
                                "question": "In 2019, the city banned private cars from the downtown core. _____, nitrogen dioxide levels in the area fell by 32 percent within two years, and pedestrian traffic doubled.<br><br>Which choice completes the text with the most logical transition?",
                                "options": [
                                    "A) Consequently,",
                                    "B) Nevertheless,",
                                    "C) For instance,",
                                    "D) In contrast,"
                                ],
                                "answer": "A) Consequently,",
                                "explanation": "Trap alert: transition questions are logic questions in disguise — identify the relationship between the two sentences before reading the choices. Sentence one states a cause (banning cars); sentence two states results (cleaner air, more pedestrians). Cause followed by effect demands a consequence transition, which is 'consequently.' Wrong-answer watch: B ('nevertheless') signals contrast, but nothing here contradicts expectations — cleaner air is exactly what a car ban should produce; C ('for instance') would introduce an example of the ban, but sentence two is a result, not an example; D ('in contrast') needs two opposing ideas, and there is only one storyline here. Quick self-check: label the relationship in two words — 'cause, effect.' Then test each transition: only 'consequently' means 'as a result.' If you can name the logic first, the traps answer themselves."
                            },
                            {
                                "title": "Level 2: Sentence Combining — Marie Tharp",
                                "difficulty": "medium",
                                "question": "Marie Tharp was a geologist. She created detailed maps of the ocean floor. Her maps provided key evidence for the theory of plate tectonics.<br><br>Which choice most effectively combines the sentences?",
                                "options": [
                                    "A) Geologist Marie Tharp's detailed maps of the ocean floor provided key evidence for the theory of plate tectonics.",
                                    "B) Marie Tharp was a geologist, and she created detailed maps of the ocean floor, and her maps provided key evidence for the theory of plate tectonics.",
                                    "C) Being a geologist, Marie Tharp created detailed maps, which were of the ocean floor, and they provided key evidence for the theory of plate tectonics.",
                                    "D) Marie Tharp, a geologist who created detailed maps of the ocean floor, and her maps provided key evidence for the theory of plate tectonics."
                                ],
                                "answer": "A) Geologist Marie Tharp's detailed maps of the ocean floor provided key evidence for the theory of plate tectonics.",
                                "explanation": "Trap alert: combining questions reward the choice that keeps every fact while cutting every wasted word — and punishes both wordiness and lost information. Choice A preserves all three facts (geologist, ocean-floor maps, evidence for plate tectonics) in one smooth sentence with no repeated subjects. Wrong-answer watch: B is grammatical but clunky — the chained 'and... and...' repeats 'she' and 'her maps' instead of subordinating, which is exactly the awkwardness combining questions ask you to fix; C is wordy ('which were of the ocean floor') and buries the main point in a participial pile-up; D is a fragment error in disguise — 'Marie Tharp, a geologist..., and her maps provided...' leaves the first half without a verb, so the sentence never properly starts. Quick self-check: the best combination usually makes the most important fact the main clause and tucks the rest into appositives or possessives. If you can delete words without losing facts, keep deleting."
                            },
                            {
                                "title": "Level 3: Supporting Detail — Octopus Camouflage",
                                "difficulty": "medium",
                                "question": "The common octopus is a master of disguise, able to vanish against coral, sand, or rock in less than a second. _____. This remarkable ability helps it evade predators and ambush prey.<br><br>Which choice best supports the paragraph's claim about the octopus's camouflage?",
                                "options": [
                                    "A) Specialized skin cells called chromatophores can change color and texture in about three-tenths of a second.",
                                    "B) Octopuses are highly intelligent invertebrates with excellent memories.",
                                    "C) The common octopus typically lives for only one to two years.",
                                    "D) Octopuses have three hearts and blue, copper-based blood."
                                ],
                                "answer": "A) Specialized skin cells called chromatophores can change color and texture in about three-tenths of a second.",
                                "explanation": "Trap alert: every choice here is a true fact about octopuses — relevance questions test whether the fact supports THIS claim, not whether it is true. The paragraph's claim is about camouflage speed and mechanism, and only A explains how the disguise works (chromatophores changing color and texture in 0.3 seconds), directly supporting 'vanish... in less than a second.' Wrong-answer watch: B, C, and D are all factually correct but topically irrelevant — intelligence, lifespan, and circulatory anatomy do nothing to support a claim about camouflage. This is the SAT's favorite relevance trap: true but off-topic. Quick self-check: ask, 'Does this sentence help prove the paragraph's specific claim?' If it proves something interesting about a different topic, it does not belong."
                            },
                            {
                                "title": "Level 4: Transition — Vaccine Uptake",
                                "difficulty": "medium",
                                "question": "Clinical trials showed the new vaccine to be 94 percent effective at preventing severe illness. _____, public uptake remained disappointingly low, with fewer than 40 percent of eligible adults receiving it in the first year.<br><br>Which choice completes the text with the most logical transition?",
                                "options": [
                                    "A) Nevertheless,",
                                    "B) Therefore,",
                                    "C) Moreover,",
                                    "D) For example,"
                                ],
                                "answer": "A) Nevertheless,",
                                "explanation": "Trap alert: the logic here is expectation versus reality, which is the signature pattern for contrast transitions. High effectiveness creates the expectation of high uptake; the reality (under 40 percent) defies that expectation. 'Nevertheless' means 'despite what was just said,' which fits perfectly. Wrong-answer watch: B ('therefore') would mean low uptake logically follows from high effectiveness — backwards; C ('moreover') adds a supporting point, but low uptake does not support high effectiveness, it undercuts it; D ('for example') needs the second sentence to exemplify the first, but low uptake is not an example of effectiveness. Quick self-check: look for the expectation gap. When sentence two surprises you after sentence one, the answer is a contrast word: however, nevertheless, still, yet."
                            },
                            {
                                "title": "Level 5: Transition — A Caveat in Climate Research",
                                "difficulty": "hard",
                                "question": "As atmospheric carbon dioxide rises, many plants photosynthesize faster and grow more quickly. _____, field experiments show that this 'fertilization effect' diminishes within a few years as soils run short of nitrogen and phosphorus, limiting how much extra carbon forests can actually absorb.<br><br>Which choice completes the text with the most logical transition?",
                                "options": [
                                    "A) However,",
                                    "B) Consequently,",
                                    "C) Similarly,",
                                    "D) Indeed,"
                                ],
                                "answer": "A) However,",
                                "explanation": "Trap alert: this is harder because both sentences are true and scientific — the contrast is between an initial finding and its limitation, not between true and false. Sentence one reports faster growth; sentence two restricts how far that finding extends ('diminishes,' 'limiting'). That is a classic however-pattern: concession followed by qualification. Wrong-answer watch: B ('consequently') would make the limitation a result of the faster growth, which misstates the logic — the limit comes from nutrient shortage, not from growth itself; C ('similarly') needs parallel ideas, but diminishing returns are not similar to faster growth; D ('indeed') would emphasize or confirm sentence one, whereas sentence two actually scales it back. Quick self-check: watch for limiting words in sentence two — 'diminishes,' 'limiting,' 'only,' 'within a few years.' They are flashing signals that the author is pulling back from sentence one, which means contrast."
                            },
                            {
                                "title": "Level 6: Sentence Combining — The Antikythera Mechanism",
                                "difficulty": "hard",
                                "question": "The Antikythera mechanism is an ancient Greek device. It was recovered from a shipwreck in 1901. It used bronze gears to predict eclipses and track the Olympic Games cycle.<br><br>Which choice most effectively combines the sentences?",
                                "options": [
                                    "A) Recovered from a shipwreck in 1901, the Antikythera mechanism is an ancient Greek device that used bronze gears to predict eclipses and track the Olympic Games cycle.",
                                    "B) The Antikythera mechanism is an ancient Greek device, it was recovered from a shipwreck in 1901, and it used bronze gears to predict eclipses and track the Olympic Games cycle.",
                                    "C) The Antikythera mechanism, which is an ancient Greek device, was recovered from a shipwreck in 1901, and it used bronze gears for predicting eclipses and for the tracking of the Olympic Games cycle.",
                                    "D) Being an ancient Greek device recovered from a shipwreck in 1901, eclipses were predicted and the Olympic Games cycle was tracked by the bronze gears of the Antikythera mechanism."
                                ],
                                "answer": "A) Recovered from a shipwreck in 1901, the Antikythera mechanism is an ancient Greek device that used bronze gears to predict eclipses and track the Olympic Games cycle.",
                                "explanation": "Trap alert: hard combining questions hide a grammar error inside one of the wordy choices — here, D dangles its modifier. In A, the opening participial phrase ('Recovered from a shipwreck in 1901') correctly modifies the mechanism, the main clause identifies it, and a relative clause ('that used bronze gears...') carries the function, all in parallel infinitives ('to predict... and track'). Nothing is repeated or lost. Wrong-answer watch: B commits a comma splice — three independent clauses joined by commas alone; C is grammatical but bloated ('for predicting eclipses and for the tracking of' breaks the parallel infinitives and pads the sentence); D dangles: 'Being an ancient Greek device...' must modify the subject, but the subject is 'eclipses,' so the sentence literally says the eclipses were the device. Quick self-check: check what each introductory phrase modifies — it must touch the noun it describes. Then check parallelism in any list: 'to predict... and track' must match in form."
                            },
                            {
                                "title": "Level 7: Supporting Detail — Green Roofs",
                                "difficulty": "hard",
                                "question": "Urban heat islands — city areas significantly warmer than surrounding regions — threaten public health during heat waves. Green roofs, which cover buildings with vegetation, have been proposed as a remedy. _____. Cities such as Chicago and Toronto have begun subsidizing their installation.<br><br>Which choice best supports the claim that green roofs can remedy urban heat islands?",
                                "options": [
                                    "A) Measurements show that buildings with green roofs have rooftop temperatures up to 5 degrees Celsius lower than those with conventional roofs.",
                                    "B) Green roofs are visually attractive and provide habitat for pollinators.",
                                    "C) Installing a green roof typically costs more than installing a conventional roof.",
                                    "D) Chicago and Toronto are among the largest cities in North America."
                                ],
                                "answer": "A) Measurements show that buildings with green roofs have rooftop temperatures up to 5 degrees Celsius lower than those with conventional roofs.",
                                "explanation": "Trap alert: the paragraph's claim is specifically about cooling (remedying heat islands), so the supporting detail must contain temperature evidence — attractive but off-claim facts are traps. Choice A delivers exactly the needed evidence: a measured temperature difference (5 degrees Celsius) directly tied to green roofs, which is precisely what 'remedy urban heat islands' requires. Wrong-answer watch: B is true and positive but irrelevant to cooling — beauty and pollinators do not lower temperatures; C actually weakens the case for adoption by raising cost, the opposite of support; D is filler about city size that supports nothing about roofs. Quick self-check: restate the claim as a question — 'Do green roofs cool buildings?' The right detail must answer yes with evidence. If a choice answers a different question ('Are they pretty?'), it is out."
                            },
                            {
                                "title": "Level 8: Transition — An Incomplete Theory",
                                "difficulty": "hard",
                                "question": "The new model predicted the particles' behavior with unprecedented accuracy, matching every experimental result to date. _____, its equations offer no explanation for why the particles behave this way, leaving the theory descriptively powerful but fundamentally incomplete.<br><br>Which choice completes the text with the most logical transition?",
                                "options": [
                                    "A) Still,",
                                    "B) Therefore,",
                                    "C) Moreover,",
                                    "D) For instance,"
                                ],
                                "answer": "A) Still,",
                                "explanation": "Trap alert: 'therefore' is bait here because the second sentence feels like a conclusion — but it is actually a concession that limits the praise. Sentence one celebrates predictive success; sentence two admits explanatory failure ('no explanation,' 'fundamentally incomplete'). Success at prediction coexisting with failure at explanation is a contrast, and 'still' (like 'however' or 'nevertheless') marks exactly that: 'despite the success just described.' Wrong-answer watch: B ('therefore') would present incompleteness as the logical result of accuracy, which is nonsense — accuracy does not cause incompleteness; C ('moreover') would add another praise, but sentence two criticizes; D ('for instance') needs an example of accurate prediction, but sentence two gives a limitation instead. Quick self-check: when sentence one praises and sentence two criticizes the same thing, the transition is always contrast. Do not let 'therefore' seduce you just because sentence two sounds conclusive."
                            },
                            {
                                "title": "Level 9: Sentence Combining — Ada Lovelace",
                                "difficulty": "hard",
                                "question": "Ada Lovelace wrote what is considered the first computer algorithm. She was the daughter of the poet Lord Byron. The algorithm was designed for Charles Babbage's Analytical Engine.<br><br>Which choice most effectively combines the sentences?",
                                "options": [
                                    "A) Ada Lovelace, Lord Byron's daughter, wrote the first computer algorithm for Charles Babbage's Analytical Engine.",
                                    "B) Ada Lovelace wrote what is considered the first computer algorithm, and she was the daughter of the poet Lord Byron, and the algorithm was designed for Charles Babbage's Analytical Engine.",
                                    "C) The daughter of the poet Lord Byron, Ada Lovelace wrote what is considered the first computer algorithm, designing it for Charles Babbage's Analytical Engine.",
                                    "D) Ada Lovelace was the daughter of the poet Lord Byron, writing what is considered the first computer algorithm, which was designed for Charles Babbage's Analytical Engine."
                                ],
                                "answer": "A) Ada Lovelace, Lord Byron's daughter, wrote the first computer algorithm for Charles Babbage's Analytical Engine.",
                                "explanation": "Trap alert: all four choices keep the facts, so this one is decided purely by concision and smoothness — the SAT rewards the shortest grammatical version. Choice A tucks the parentage into a crisp appositive ('Lord Byron's daughter') and states the achievement in one clean main clause: 16 words, zero repetition. Wrong-answer watch: B chains three clauses with 'and... and,' repeating 'she' and 'the algorithm' — the exact wordiness the question asks you to eliminate; C is grammatical but clunkier, with the redundant 'what is considered' and a dangling-feeling participial tail that separates the algorithm from its engine; D awkwardly stacks a participial phrase ('writing...') onto a 'was' clause, making the sentence's main action ('was the daughter') the least important fact. Quick self-check: when every choice is grammatical, count words and repeated nouns. The winner usually turns repeated subjects into appositives or possessives — here, 'Lord Byron's daughter' replaces a whole clause."
                            },
                            {
                                "title": "Level 10: Supporting Detail — Deep-Sea Mining",
                                "difficulty": "hard",
                                "question": "Mining companies have begun targeting the deep ocean floor for metals used in batteries, but marine biologists warn that the ecological costs could be severe. The abyssal plains targeted for mining host fragile, slow-growing ecosystems. _____. Once destroyed, these communities might take centuries to recover, if they recover at all.<br><br>Which choice best supports the biologists' warning?",
                                "options": [
                                    "A) Sediment plumes from mining tests have been shown to smother filter-feeding organisms up to ten kilometers from the extraction site.",
                                    "B) The metals on the ocean floor are essential for manufacturing electric vehicle batteries.",
                                    "C) Deep-sea mining operations would create jobs in coastal communities.",
                                    "D) The ocean floor covers more than half of Earth's surface."
                                ],
                                "answer": "A) Sediment plumes from mining tests have been shown to smother filter-feeding organisms up to ten kilometers from the extraction site.",
                                "explanation": "Trap alert: the warning is about ecological harm, so the support must show harm happening — economic or scale facts are off-claim even when true. Choice A provides concrete damage evidence: sediment plumes smothering organisms ten kilometers away, which directly justifies 'ecological costs could be severe' and sets up the slow-recovery conclusion. Wrong-answer watch: B supports the mining companies' case (the need for metals), not the biologists' warning — a classic wrong-side trap; C is also pro-mining (jobs), answering an economic question nobody asked; D is a true scale fact that says nothing about harm — big does not mean vulnerable. Quick self-check: identify whose claim needs support (the biologists') and what direction it faces (harm). Any choice facing the other way — benefits, necessity, jobs — is automatically out, no matter how factual."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 4: Standard English Conventions (26%)",
                    "insight": "These questions test grammar in context: agreement, tense, parallelism, modifier placement, and sentence boundaries. Strip the sentence to its skeleton — subject, verb, and the blank — and ignore the distracting phrases in between. One choice will fit the skeleton perfectly; the traps are designed to agree with the nearest wrong noun instead.",
                    "topics": [
                        "Subject-verb agreement",
                        "Pronoun agreement and clarity",
                        "Verb tense and consistency",
                        "Parallel structure",
                        "Modifier placement",
                        "Sentence boundaries (run-ons, comma splices)"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Level 1: Subject-Verb Agreement — Essay Collection",
                                "difficulty": "medium",
                                "question": "The collection of essays on urban wildlife _____ praised by critics for its vivid descriptions and careful research.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The collection of essays on urban wildlife has been praised by critics for its vivid descriptions and careful research.",
                                    "B) The collection of essays on urban wildlife have been praised by critics for its vivid descriptions and careful research.",
                                    "C) The collection of essays on urban wildlife are being praised by critics for its vivid descriptions and careful research.",
                                    "D) The collection of essays on urban wildlife were praised by critics for its vivid descriptions and careful research."
                                ],
                                "answer": "A) The collection of essays on urban wildlife has been praised by critics for its vivid descriptions and careful research.",
                                "explanation": "Trap alert: the prepositional phrase 'of essays on urban wildlife' is placed between the subject and the verb precisely to lure you into agreeing with 'essays' instead of 'collection.' Cross it out: the subject is 'collection' (singular), so the verb must be singular — 'has been praised.' Choice A is the only one with a singular verb. Wrong-answer watch: B, C, and D all use plural verbs ('have been,' 'are being,' 'were') that agree with the nearby plural noun 'essays' — the classic proximity trap. Additionally, C awkwardly mixes 'are being praised' with the completed-action sense the sentence needs. Quick self-check: bracket every prepositional phrase between the subject and the verb, then match the verb to the bare subject. If the verb agrees with the noun closest to the blank rather than the true subject, it is wrong."
                            },
                            {
                                "title": "Level 2: Verb Tense — The Committee Vote",
                                "difficulty": "medium",
                                "question": "By the time the committee voted on the proposal, the research team _____ the survey data for nearly six months.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) By the time the committee voted on the proposal, the research team had been analyzing the survey data for nearly six months.",
                                    "B) By the time the committee voted on the proposal, the research team has been analyzing the survey data for nearly six months.",
                                    "C) By the time the committee voted on the proposal, the research team will have been analyzing the survey data for nearly six months.",
                                    "D) By the time the committee voted on the proposal, the research team analyzes the survey data for nearly six months."
                                ],
                                "answer": "A) By the time the committee voted on the proposal, the research team had been analyzing the survey data for nearly six months.",
                                "explanation": "Trap alert: 'by the time' plus a past-tense verb ('voted') signals that the analyzing happened BEFORE that past moment — the past perfect is required. 'Had been analyzing' places the ongoing analysis correctly in the past-before-the-past, which only A does. Wrong-answer watch: B uses the present perfect ('has been'), which would mean the team is still analyzing now — but the vote already happened, so the timeline clashes; C jumps to the future perfect ('will have been'), contradicting the past-tense 'voted'; D uses the simple present ('analyzes'), which cannot describe an action completed before a past vote. Quick self-check: find the time anchor first ('voted' = past). Then ask whether the blank's action finished before, during, or after it. 'By the time X happened, Y had been happening' is the pattern — past perfect for the earlier ongoing action."
                            },
                            {
                                "title": "Level 3: Pronoun Agreement — The Researchers",
                                "difficulty": "medium",
                                "question": "After months of fieldwork, the researchers published _____ findings in a leading journal.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) After months of fieldwork, the researchers published their findings in a leading journal.",
                                    "B) After months of fieldwork, the researchers published its findings in a leading journal.",
                                    "C) After months of fieldwork, the researchers published his findings in a leading journal.",
                                    "D) After months of fieldwork, the researchers published their finding's in a leading journal."
                                ],
                                "answer": "A) After months of fieldwork, the researchers published their findings in a leading journal.",
                                "explanation": "Trap alert: pronoun questions are solved by finding the antecedent and matching number — nothing else matters. The antecedent is 'researchers' (plural), so the pronoun must be plural: 'their.' Choice A is the only fully correct option. Wrong-answer watch: B uses 'its,' which is singular and can only refer to a thing, not to plural people; C uses 'his,' singular and gendered, which cannot refer to 'researchers'; D gets the pronoun right ('their') but misspells 'findings' as the possessive 'finding's' — a spelling trap hiding inside the correct pronoun choice. Quick self-check: draw an arrow from the pronoun back to its antecedent. Then check number (singular/plural) and, for people versus things, the right form. And always read the whole choice — the SAT loves to pair the right pronoun with a wrong word nearby."
                            },
                            {
                                "title": "Level 4: Sentence Boundary — Comma Splice",
                                "difficulty": "medium",
                                "question": "The storm knocked out power across the county, residents relied on generators for three days.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The storm knocked out power across the county; residents relied on generators for three days.",
                                    "B) The storm knocked out power across the county, residents relied on generators for three days.",
                                    "C) The storm knocked out power across the county, residents had relied on generators for three days.",
                                    "D) The storm knocked out power across the county, this caused residents to rely on generators for three days."
                                ],
                                "answer": "A) The storm knocked out power across the county; residents relied on generators for three days.",
                                "explanation": "Trap alert: the original is a comma splice — two independent clauses ('The storm knocked out power across the county' and 'residents relied on generators for three days') joined by only a comma. A semicolon correctly separates two related independent clauses, which is what A does. Wrong-answer watch: B is the original error unchanged — a comma alone cannot join two independent clauses; C keeps the same comma splice and merely changes the tense, which fixes nothing (changing 'relied' to 'had relied' does not repair the boundary); D is still a comma splice with a vague 'this' added — 'this caused residents...' is its own independent clause, and the comma before it remains illegal. Quick self-check: cover everything before the punctuation and ask, 'Can this stand alone?' Then do the same after it. If both halves are complete sentences, you need a period, a semicolon, or a comma plus a coordinating conjunction (for, and, nor, but, or, yet, so)."
                            },
                            {
                                "title": "Level 5: Parallel Structure — Weekend Hobbies",
                                "difficulty": "hard",
                                "question": "On weekends, Maya enjoys hiking through the hills, swimming in the lake, and _____ along the river trails.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) On weekends, Maya enjoys hiking through the hills, swimming in the lake, and biking along the river trails.",
                                    "B) On weekends, Maya enjoys hiking through the hills, swimming in the lake, and to bike along the river trails.",
                                    "C) On weekends, Maya enjoys hiking through the hills, swimming in the lake, and she bikes along the river trails.",
                                    "D) On weekends, Maya enjoys hiking through the hills, swimming in the lake, and bikes along the river trails."
                                ],
                                "answer": "A) On weekends, Maya enjoys hiking through the hills, swimming in the lake, and biking along the river trails.",
                                "explanation": "Trap alert: parallelism requires every item in the list to share the same grammatical form — here, gerunds ('hiking,' 'swimming') governed by 'enjoys.' Only A continues the pattern with 'biking,' making all three items gerunds. Wrong-answer watch: B breaks the pattern with the infinitive 'to bike' — after two gerunds, the ear expects a third gerund, and the SAT enforces that expectation; C smuggles in a whole new clause ('she bikes'), destroying the list structure entirely; D uses the finite verb 'bikes,' which would need its own subject-verb relationship and cannot sit in a list of objects of 'enjoys.' Quick self-check: list the items vertically — hiking / swimming / _____. The blank must match the form of the others exactly. When you see a list, check the first item's form and demand that every following item copy it."
                            },
                            {
                                "title": "Level 6: Modifier Placement — Dangling Participle",
                                "difficulty": "hard",
                                "question": "Walking through the museum's fossil hall, _____.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) Walking through the museum's fossil hall, she was amazed by the towering dinosaur skeletons.",
                                    "B) Walking through the museum's fossil hall, the towering dinosaur skeletons amazed her.",
                                    "C) Walking through the museum's fossil hall, her amazement at the towering dinosaur skeletons grew.",
                                    "D) Walking through the museum's fossil hall, the visit was made memorable by the towering dinosaur skeletons."
                                ],
                                "answer": "A) Walking through the museum's fossil hall, she was amazed by the towering dinosaur skeletons.",
                                "explanation": "Trap alert: an introductory participial phrase must modify the grammatical subject of the main clause — whoever is 'walking' must be the subject. In A, the subject is 'she,' who can walk, so the modifier attaches correctly. Wrong-answer watch: B dangles — the subject is 'the towering dinosaur skeletons,' which cannot walk through a hall; C dangles too — 'her amazement' cannot walk; D dangles worst of all — 'the visit' cannot walk. The SAT deliberately offers vivid, tempting wrong answers (the skeletons are the interesting thing!) to distract from the mechanical rule. Quick self-check: ask 'who is doing the -ing action?' and check that the very next noun is the answer. If the noun after the comma cannot perform the action, the modifier dangles and the choice is wrong — no matter how natural it sounds."
                            },
                            {
                                "title": "Level 7: Subject-Verb Agreement — Trial Results",
                                "difficulty": "hard",
                                "question": "The results of the clinical trial, which included over two thousand participants from twelve countries, _____ published in a medical journal last week.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The results of the clinical trial, which included over two thousand participants from twelve countries, were published in a medical journal last week.",
                                    "B) The results of the clinical trial, which included over two thousand participants from twelve countries, was published in a medical journal last week.",
                                    "C) The results of the clinical trial, which included over two thousand participants from twelve countries, has been published in a medical journal last week.",
                                    "D) The results of the clinical trial, which included over two thousand participants from twelve countries, is published in a medical journal last week."
                                ],
                                "answer": "A) The results of the clinical trial, which included over two thousand participants from twelve countries, were published in a medical journal last week.",
                                "explanation": "Trap alert: this is the long-distance version of the Level 1 trap — a relative clause ('which included... countries') plus a prepositional phrase stand between the plural subject 'results' and the verb. Delete everything between the commas: 'The results... were published.' Only A uses the plural 'were.' Wrong-answer watch: B's 'was' agrees with the nearest singular nouns ('trial,' 'countries') instead of the true subject — the proximity trap at full strength; C compounds two errors, singular 'has been' plus a tense clash ('has been published... last week' mixes present perfect with a finished past time); D's 'is published' is both singular and present tense, clashing with 'last week.' Quick self-check: cross out nonessential clauses (anything between commas, 'which' clauses, prepositional phrases) before choosing the verb. Then check tense against time markers — 'last week' demands simple past."
                            },
                            {
                                "title": "Level 8: Pronoun-Antecedent — The Prototype",
                                "difficulty": "hard",
                                "question": "The engineers tested the new prototype repeatedly until _____ battery failed during the final trial.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The engineers tested the new prototype repeatedly until its battery failed during the final trial.",
                                    "B) The engineers tested the new prototype repeatedly until their battery failed during the final trial.",
                                    "C) The engineers tested the new prototype repeatedly until it's battery failed during the final trial.",
                                    "D) The engineers tested the new prototype repeatedly until they battery failed during the final trial."
                                ],
                                "answer": "A) The engineers tested the new prototype repeatedly until its battery failed during the final trial.",
                                "explanation": "Trap alert: there are two plural nouns competing for antecedent status ('engineers' and, implicitly, the testers), but the battery belongs to the prototype — a singular thing. 'Its' (singular, possessive, for things) is the only pronoun that matches 'prototype' in number and type. Wrong-answer watch: B's 'their' is plural and would refer to the engineers — but engineers do not have a single shared battery, and the plural clashes with the singular prototype; C confuses the contraction 'it's' (it is) with the possessive 'its' — 'until it is battery failed' is nonsense; D uses 'they,' a subject pronoun, where a possessive is required ('they battery' is ungrammatical). Quick self-check: first ask WHOSE battery it is (the prototype's), then pick the pronoun matching that antecedent's number. And always separate 'its' (possessive) from 'it's' (it is) — the SAT tests this confusion constantly."
                            },
                            {
                                "title": "Level 9: Verb Tense — A Decade of Study",
                                "difficulty": "hard",
                                "question": "The scientists had studied the deep-sea sample for nearly a decade before the new microscope _____ its hidden structure.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The scientists had studied the deep-sea sample for nearly a decade before the new microscope revealed its hidden structure.",
                                    "B) The scientists had studied the deep-sea sample for nearly a decade before the new microscope had revealed its hidden structure.",
                                    "C) The scientists had studied the deep-sea sample for nearly a decade before the new microscope will reveal its hidden structure.",
                                    "D) The scientists had studied the deep-sea sample for nearly a decade before the new microscope reveals its hidden structure."
                                ],
                                "answer": "A) The scientists had studied the deep-sea sample for nearly a decade before the new microscope revealed its hidden structure.",
                                "explanation": "Trap alert: with 'had studied' (past perfect) already marking the earlier action, students over-apply the past perfect to the later action too. The sequence is: studying happened first (past perfect: 'had studied'), then the microscope revealed the structure (simple past: 'revealed'). Only A keeps this correct order. Wrong-answer watch: B puts BOTH actions in the past perfect ('had studied... had revealed'), which scrambles the sequence — the past perfect is only for the earlier of two past events, and 'before' already establishes the order; C's 'will reveal' leaps into the future, contradicting the past-tense frame; D's present-tense 'reveals' clashes with the past narrative. Quick self-check: map the timeline. Past perfect = the earlier past event; simple past = the later past event. Use the past perfect exactly once per sequence, for the action that finished first."
                            },
                            {
                                "title": "Level 10: Punctuation — The Colon",
                                "difficulty": "hard",
                                "question": "The recipe calls for three spices _____ turmeric, cumin, and coriander.<br><br>Which choice completes the text so that it conforms to the conventions of Standard English?",
                                "options": [
                                    "A) The recipe calls for three spices: turmeric, cumin, and coriander.",
                                    "B) The recipe calls for three spices, turmeric, cumin, and coriander.",
                                    "C) The recipe calls for three spices; turmeric, cumin, and coriander.",
                                    "D) The recipe calls for three spices turmeric, cumin, and coriander."
                                ],
                                "answer": "A) The recipe calls for three spices: turmeric, cumin, and coriander.",
                                "explanation": "Trap alert: a colon must follow a complete independent clause and introduce an explanation or list — both conditions are met here ('The recipe calls for three spices' stands alone, and the list explains 'three spices'). Choice A is the textbook colon use. Wrong-answer watch: B creates a comma splice variant — the comma cannot properly introduce the list, leaving the sentence boundary broken; C misuses the semicolon, which must separate two independent clauses, but 'turmeric, cumin, and coriander' cannot stand alone as a sentence; D is a run-on with no punctuation at all, fusing the list into the clause. Quick self-check: test the colon by covering the list — what remains must be a complete sentence. Then test the semicolon choice by covering each side — both sides must be complete sentences. Here only the colon passes both tests."
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 6: 기출 스타일 실전 문제 (Reading & Writing)",
                    "insight": "실제 College Board 기출의 지문 스타일을 재현한 실전 세트이다. 어휘 문제는 문맥 속 논리 관계(부정·대조)를, 독해 문제는 지문이 실제로 뒷받침하는 범위를, 문법 문제는 수식어에 가려진 진짜 주어를 노린다. 각 해설은 함정의 정체, 단계별 풀이, 네 보기 전부에 대한 개별 반박, 그리고 스스로 점검하는 방법으로 구성되어 있어 같은 유형의 함정에 다시 걸리지 않게 된다.",
                    "topics": [
                        "Mixed review",
                        "Test strategy",
                        "지문 독해",
                        "문법·수사"
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "기출 1: 문맥 속 어휘 — 논리 관계 파악",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "The committee's final report was far from ___: its recommendations were so vague and heavily qualified that officials could justify almost any course of action by citing it.<br><br>빈칸에 들어갈 가장 적절한 단어는?",
                                "options": [
                                    "ambiguous",
                                    "concise",
                                    "decisive",
                                    "provocative"
                                ],
                                "answer": "decisive",
                                "explanation": "이 문제가 노리는 함정은 콜론 뒤의 설명을 읽지 않고 빈칸 앞의 far from만 보고 어림잡는 것이다. far from은 부정의 논리이므로, 빈칸에는 콜론 뒤에서 묘사된 성질(vague, heavily qualified)과 반대되는 단어가 들어가야 한다. 풀이 단계는 다음과 같다. 첫째, 문장의 논리 구조를 파악한다. far from ___ 다음에 콜론이 오므로, 콜론 뒤는 빈칸의 단어에 대한 설명 또는 그 반대에 대한 설명이다. 둘째, 콜론 뒤를 읽는다. 권고안이 모호하고 단서가 많아 어떤 행동이든 정당화할 수 있었다고 했으므로, 보고서는 결단력 있는 것과는 거리가 멀었다는 뜻이다. 셋째, vague의 반대 의미를 가진 단어를 고른다. decisive(결단력 있는, 명확한)가 적절하다. 오답 반박: ambiguous(모호한)는 콜론 뒤의 vague와 같은 의미이므로 far from과 결합하면 문장 전체가 모순된다. 이 보기는 논리 관계를 무시하고 유사어에 끌린 함정이다. concise(간결한)는 권고안이 장황했다는 언급이 없으므로 문맥상 근거가 없다. provocative(도발적인)는 지문 어디에도 도발성에 대한 언급이 없어 근거 없는 보기이다. Quick self-check: 어휘 문제에서는 빈칸 앞뒤의 논리 연결어(far from, but, however, colon)를 먼저 표시하고, 콜론·대시 뒤의 설명이 빈칸과 같은 방향인지 반대 방향인지 정한 뒤 보기를 대입하라. 실전 팁: 보기 중에 지문의 단어와 유사한 것(ambiguous≈vague)이 있으면 일단 의심하라. SAT 어휘 문제는 동의어가 아니라 논리 관계를 묻는다."
                            },
                            {
                                "title": "기출 2: 문학 지문 — 중심 생각 파악",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "When Mara returned to the coastal town where she had grown up, she expected the familiar streets to feel like home. Instead, the bakery on the corner had become a cafe she did not recognize, and neighbors she once knew greeted her as a stranger. She felt, oddly, like a tourist in her own memory — welcomed by the sea air, yet shut out of the life that continued without her.<br><br>이 지문에서 Mara의 경험에 대한 중심 생각으로 가장 적절한 것은?",
                                "options": [
                                    "고향에 대한 향수가 그녀를 실망시켰다.",
                                    "익숙한 장소도 시간이 지나면 낯설게 느껴질 수 있다.",
                                    "그녀는 고향을 영원히 떠나기로 결심했다.",
                                    "이웃들은 그녀를 따뜻하게 환영했다."
                                ],
                                "answer": "익숙한 장소도 시간이 지나면 낯설게 느껴질 수 있다.",
                                "explanation": "이 문제가 노리는 함정은 지문의 감정(실망, 향수)에만 반응해 세부 감정을 답으로 고르는 것이다. 중심 생각은 주인공의 감정이 아니라 그 감정을 통해 드러나는 일반적 통찰이다. 풀이 단계는 다음과 같다. 첫째, 기대와 현실의 대조를 찾는다. 익숙할 것이라 기대했지만 빵집은 모르는 카페가 되었고 이웃은 낯선 사람처럼 대했다. 둘째, 핵심 비유를 읽는다. like a tourist in her own memory는 자신의 기억 속 장소가 낯설게 느껴진다는 뜻이다. 셋째, 이를 일반화한다. 익숙했던 장소도 시간이 흐르면 낯설게 느껴질 수 있다는 것이 중심 생각이다. 오답 반박: 고향에 대한 향수가 그녀를 실망시켰다는 감정 묘사에만 머문 보기로, 지문의 통찰(낯설음의 원인인 시간의 흐름)을 담지 못한다. 그녀는 고향을 영원히 떠나기로 결심했다는 지문에 전혀 없는 결심을 지어낸 보기로, 텍스트 근거가 없다. 이웃들은 그녀를 따뜻하게 환영했다는 greeted her as a stranger와 정반대로 읽은 보기로, 세부 사실을 오독한 함정이다. Quick self-check: 중심 생각 보기에서는 too specific(세부 감정·사건만), too broad(지문 범위 초과), opposite(정반대), invented(근거 없음)의 네 유형을 각각 의심하라. 정답은 지문 전체를 포괄하면서도 지문을 벗어나지 않는 보기이다. 실전 팁: like a tourist in her own memory 같은 핵심 비유 문장은 밑줄 치고, 보기와 비유를 직접 대조하라."
                            },
                            {
                                "title": "기출 3: 데이터 기반 추론 — 연구 결과 해석",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "Researchers grew three groups of seedlings under identical conditions except for light color: red, blue, and white light. After four weeks, the average heights were 12.4 cm under red light, 8.1 cm under blue light, and 10.6 cm under white light. The researchers concluded that light color affects growth rate.<br><br>위 자료가 뒷받침하는 진술은?",
                                "options": [
                                    "빨간빛은 파란빛보다 묘목의 성장을 촉진한다.",
                                    "흰빛은 모든 색의 빛보다 성장을 촉진한다.",
                                    "빛의 색은 묘목의 성장에 영향을 주지 않는다.",
                                    "파란빛은 빨간빛보다 묘목을 4.3cm 더 크게 자라게 한다."
                                ],
                                "answer": "빨간빛은 파란빛보다 묘목의 성장을 촉진한다.",
                                "explanation": "이 문제가 노리는 함정은 자료에 없는 비교를 지어내거나 수치를 뒤바꿔 읽는 것이다. 데이터 문제는 지문이 말한 범위 안에서만 답을 고르는 것이 핵심이다. 풀이 단계는 다음과 같다. 첫째, 조건을 확인한다. 빛의 색을 제외한 모든 조건이 동일하므로 높이 차이는 빛의 색 때문으로 볼 수 있다. 둘째, 수치를 비교한다. 빨강 12.4cm > 흰색 10.6cm > 파랑 8.1cm이다. 셋째, 각 보기를 수치와 대조한다. 빨간빛이 파란빛보다 성장을 촉진한다는 12.4>8.1로 뒷받침된다. 오답 반박: 흰빛은 모든 색의 빛보다 성장을 촉진한다는 빨강 12.4cm가 흰색 10.6cm보다 크므로 수치와 정면으로 모순된다. 빛의 색은 묘목의 성장에 영향을 주지 않는다는 연구자의 결론(빛의 색이 성장 속도에 영향을 준다)과 정반대이며, 세 집단의 높이 차이 자체를 부정하는 보기이다. 파란빛은 빨간빛보다 묘목을 4.3cm 더 크게 자라게 한다는 4.3cm라는 차이는 맞지만(12.4-8.1=4.3) 방향이 뒤바뀐 것으로, 수치는 맞고 해석이 틀린 교묘한 함정이다. Quick self-check: 데이터 문제에서는 각 보기의 주어·비교 대상·수치·방향을 자료와 한 항목씩 대조하라. 특히 차이의 방향(누가 더 큰지)이 뒤바뀐 보기를 조심하라. 실전 팁: 지문에 없는 집단 간 비교나 인과(왜 그런지)에 대한 설명이 들어간 보기는 일단 의심하고, 자료가 직접 보여주는 것만 남겨라."
                            },
                            {
                                "title": "기출 4: 과학 연구 요약 — 시사점 파악",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "A team of neuroscientists asked 60 adults to learn a list of word pairs, then tested their recall either after a full night of sleep or after staying awake. The sleep group recalled 72% of the pairs on average, while the awake group recalled 54%. The researchers noted that the advantage persisted even when total study time was identical, suggesting that sleep itself — not extra practice — consolidates memory.<br><br>이 연구가 시사하는 바로 가장 적절한 것은?",
                                "options": [
                                    "수면은 추가 학습 없이도 기억 공고화에 기여한다.",
                                    "학습 시간의 총량이 기억력을 결정한다.",
                                    "수면은 단어 쌍 학습에 해롭다.",
                                    "54%의 회상률은 우연 수준이다."
                                ],
                                "answer": "수면은 추가 학습 없이도 기억 공고화에 기여한다.",
                                "explanation": "이 문제가 노리는 함정은 연구의 통제 조건(학습 시간 동일)을 무시하고 상관관계만 보고 성급히 결론내리는 것이다. 핵심 문장은 마지막 문장으로, sleep itself — not extra practice가 연구의 시사점을 직접 말한다. 풀이 단계는 다음과 같다. 첫째, 실험 설계를 파악한다. 수면 집단과 각성 집단, 학습 시간은 동일하게 통제되었다. 둘째, 결과를 확인한다. 수면 집단 72% 대 각성 집단 54%로 차이가 있다. 셋째, 연구자의 해석을 읽는다. 학습 시간이 동일해도 우위가 유지되었으므로, 수면 자체가 기억을 공고화한다는 것이다. 오답 반박: 학습 시간의 총량이 기억력을 결정한다는 통제된 변수(학습 시간 동일)를 정면으로 거스르는 보기로, 지문이 명시적으로 배제한 해석이다. 수면은 단어 쌍 학습에 해롭다는 72%>54%라는 결과와 정반대인 보기로, 집단 라벨을 뒤바꿔 읽은 함정이다. 54%의 회상률은 우연 수준이라는 지문에 전혀 언급되지 않은 기준을 끌어온 보기로, 텍스트 근거가 없는 보기이다. Quick self-check: 연구 지문에서는 마지막 1~2문장에 연구자의 해석(suggesting, indicating, concluded)이 나오므로 그 문장을 먼저 찾아라. 보기가 그 해석과 같은 방향인지 확인하라. 실전 팁: even when, not extra practice 같은 통제·배제 표현은 밑줄 치고, 보기가 통제된 변수를 원인으로 지목하면 즉시 소거하라."
                            },
                            {
                                "title": "기출 5: 역사 문서 — 저자의 목적 파악",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "다음은 18세기 정치 문서의 발췌이다. 'We hold that a government derives its just powers from the consent of the governed, and that whenever any form of government becomes destructive of these ends, it is the right of the people to alter or to abolish it.'<br><br>저자가 이 주장을 펼치는 주된 목적은?",
                                "options": [
                                    "현 정부에 대한 저항의 정당성을 확립하려는 것이다.",
                                    "정부의 경제적 역할을 설명하려는 것이다.",
                                    "군주의 권위를 강화하려는 것이다.",
                                    "외국과의 군사 동맹을 촉구하려는 것이다."
                                ],
                                "answer": "현 정부에 대한 저항의 정당성을 확립하려는 것이다.",
                                "explanation": "이 문제가 노리는 함정은 문서의 문체(격식 있는 선언문)에 압도되어 구체적 주장(right to alter or abolish)을 놓치는 것이다. 목적 문제는 무엇을 말했는지가 아니라 왜 말했는지를 묻는다. 풀이 단계는 다음과 같다. 첫째, 핵심 주장을 추출한다. 정부의 정당한 권력은 피지배자의 동의에서 나오고, 정부가 목적을 파괴하면 인민은 그것을 변경하거나 폐지할 권리가 있다. 둘째, 이 주장이 쓰이는 맥락을 생각한다. 현 체제에 대한 저항을 정당화하는 논리이다. 셋째, 보기와 대조한다. 현 정부에 대한 저항의 정당성을 확립하려는 것이 직접 대응된다. 오답 반박: 정부의 경제적 역할을 설명하려는 것은 지문에 경제에 대한 언급이 전혀 없으므로 근거 없는 보기이다. 군주의 권위를 강화하려는 것은 인민의 변경·폐지 권리와 정반대 방향의 보기로, 주장의 방향을 뒤집은 함정이다. 외국과의 군사 동맹을 촉구하려는 것은 지문의 국내 정치적 주장과 무관한 외부 주제를 끌어온 보기이다. Quick self-check: 목적 문제에서는 주장의 방향(누구의 권리를 세우는가)을 화살표로 그리고, 보기 중 그 화살표와 같은 방향인 것만 남겨라. 지문에 없는 주제(경제, 외교)가 들어간 보기는 즉시 소거하라. 실전 팁: 역사 문서 지문에서는 it is the right of the people 같은 규범적 선언이 목적의 단서이다. 선언의 수혜자가 누구인지 물으면 답이 보인다."
                            },
                            {
                                "title": "기출 6: 문법 — 수식어에 가려진 진짜 주어",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "The collection of rare manuscripts, which includes letters dating back to the 1700s, ___ housed in the university's special archive.<br><br>빈칸에 들어갈 가장 적절한 것은?",
                                "options": [
                                    "is",
                                    "are",
                                    "were",
                                    "have been"
                                ],
                                "answer": "is",
                                "explanation": "이 문제가 노리는 함정은 동사 바로 앞에 있는 복수 명사(manuscripts)에 끌려 are를 고르는 것이다. 관계절 which includes...는 삽입된 수식어일 뿐이며, 진짜 주어는 문장 맨 앞의 The collection(단수)이다. 풀이 단계는 다음과 같다. 첫째, 수식어를 걷어낸다. of rare manuscripts는 전치사구, which includes letters dating back to the 1700s는 관계절이므로 둘 다 주어가 아니다. 둘째, 남은 뼈대는 The collection ___ housed이다. 셋째, 주어 collection은 단수이므로 단수 동사 is가 온다. 시제도 현재 일반 진술이므로 is가 적절하다. 오답 반박: are는 manuscripts라는 복수 명사에 끌린 답으로, 전치사구의 목적어를 주어로 착각한 대표 함정이다. were는 dating back to the 1700s라는 과거 시점 표현에 끌린 답이지만, 소장 상태는 현재 사실이므로 과거형이 어울리지 않는다. have been은 주어-동사 수 일치 이전에 문장 구조상 수동태(be housed)가 필요한 자리이므로 형태 자체가 맞지 않는 보기이다. Quick self-check: 빈칸 앞뒤로 of, which, who, that이 보이면 수식어를 괄호 쳐서 지우고 남은 주어와 동사만 대조하라. 진짜 주어는 수식어를 걷어낸 뒤 문장 맨 앞에 남는 명사구이다. 실전 팁: SAT 문법에서 동사 바로 앞 명사가 주어가 아닐 확률이 높다. 전치사구+관계절 이중 수식어는 함정의 단골 패턴이므로, 보기를 보기 전에 주어를 먼저 확정하는 습관을 들여라."
                            },
                            {
                                "title": "기출 7: 전이 어구 — 문장 간 논리 관계",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "City officials promised that the new transit line would reduce commute times by twenty minutes. ___ a follow-up study found that average commute times actually increased by five minutes after the line opened.<br><br>빈칸에 들어갈 가장 적절한 전이 어구는?",
                                "options": [
                                    "Therefore",
                                    "However",
                                    "For example",
                                    "Moreover"
                                ],
                                "answer": "However",
                                "explanation": "이 문제가 노리는 함정은 두 문장이 같은 주제(통근 시간)를 다룬다는 점에 안심하고 순접·첨가 관계의 전이 어구를 고르는 것이다. 주제가 같아도 논리 방향이 반대이면 역접을 써야 한다. 풀이 단계는 다음과 같다. 첫째, 앞 문장의 방향을 정한다. 통근 시간이 20분 줄어들 것이라는 긍정적 약속이다. 둘째, 뒷문장의 방향을 정한다. 실제로는 5분 늘어났다는 부정적 결과이다. actually가 방향 반전의 신호이다. 셋째, 약속과 결과는 대조 관계이므로 역접의 However가 적절하다. 오답 반박: Therefore는 앞 문장이 원인이 되어 뒷문장이 결과로 이어질 때 쓰는 것으로, 약속이 결과의 원인이 아니므로 논리가 맞지 않는다. For example은 뒷문장이 앞문장의 예시일 때 쓰는 것인데, 후속 연구 결과는 약속의 예시가 아니라 반박이므로 맞지 않는다. Moreover는 같은 방향의 내용을 덧붙일 때 쓰는 것으로, 방향이 반대인 두 문장 사이에는 쓸 수 없다. Quick self-check: 전이 어구 문제에서는 빈칸 앞뒤 문장의 방향(긍정/부정, 주장/반박)을 각각 화살표로 표시하고, 방향이 같으면 순접·첨가, 다르면 역접을 고르라. actually, in fact, yet 같은 반전 신호어에 밑줄을 쳐라. 실전 팁: 보기를 문장에 직접 넣어 읽어 보는 대입법이 가장 확실하다. However를 넣으면 약속-현실의 대조가 매끄럽게 읽히지만, Therefore를 넣으면 약속이 통근 시간 증가의 원인이라는 어색한 문장이 된다."
                            },
                            {
                                "title": "기출 8: 구두점 — 목록 앞의 콜론",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "다음 문장 중 구두점이 올바르게 사용된 것은?",
                                "options": [
                                    "The survey identified three main concerns among residents: traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents; traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents, traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents: traffic congestion; rising housing costs; and limited parking."
                                ],
                                "answer": "The survey identified three main concerns among residents: traffic congestion, rising housing costs, and limited parking.",
                                "explanation": "이 문제가 노리는 함정은 콜론과 세미콜론의 역할을 뒤섞는 것이다. 목록 앞에는 콜론이 오고, 세미콜론은 독립된 절을 연결할 때 쓴다는 원칙을 정확히 알아야 한다. 풀이 단계는 다음과 같다. 첫째, 콜론 앞을 확인한다. The survey identified three main concerns among residents는 완전한 문장(주어+동사+목적어)이다. 둘째, 콜론 뒤를 확인한다. traffic congestion, rising housing costs, and limited parking은 앞에서 예고한 three main concerns의 목록이다. 완전한 문장 뒤에 목록이 오므로 콜론이 올바르다. 셋째, 목록 내부의 구분은 쉼표로 충분하고, 항목 자체가 길거나 내부에 쉼표가 있을 때만 세미콜론을 쓴다. 오답 반박: 세미콜론을 쓴 두 번째 보기는 세미콜론 뒤가 완전한 절이 아니라 목록이므로 용법에 맞지 않는다. 세미콜론은 독립 절과 독립 절을 연결하는 자리이다. 쉼표만 쓴 세 번째 보기는 완전한 문장 뒤에 목록이 바로 붙어 문장 경계가 무너진 경우로, 콜론이 필요한 자리에 쉼표를 쓴 오류이다. 네 번째 보기는 목록 항목 사이에 세미콜론을 쓴 것으로, 항목이 짧고 내부에 쉼표가 없으므로 과도한 구두점이다. Quick self-check: 콜론 앞이 완전한 문장인지 손가락으로 짚으며 읽어라. 완전하지 않으면(예: The concerns are: 처럼 동사 없이 끝나면) 콜론을 쓸 수 없다. 목록 항목 안에 쉼표가 없을 때 세미콜론이 보이면 일단 의심하라. 실전 팁: SAT 구두점 문제는 원칙이 단순하다. 콜론=완전한 문장+설명·목록, 세미콜론=독립 절+독립 절. 이 두 공식만 정확히 적용하면 4개 보기 중 3개는 기계적으로 소거된다."
                            },
                            {
                                "title": "기출 9: 근거 찾기 — 주장을 직접 뒷받침하는 문장",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "Dr. Lena Ortiz spent a decade cataloging deep-sea sponges off the Pacific coast. Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria. 'These organisms have survived for 500 million years,' Ortiz said. 'Their chemistry is a library we have barely begun to read.' Pharmaceutical researchers are now studying the compounds for potential new antibiotics.<br><br>'심해 해면의 화학적 특성이 의학적 가치가 있을 수 있다'는 주장에 대한 가장 직접적인 근거는?",
                                "options": [
                                    "'These organisms have survived for 500 million years,'",
                                    "'Their chemistry is a library we have barely begun to read.'",
                                    "Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria.",
                                    "Dr. Lena Ortiz spent a decade cataloging deep-sea sponges off the Pacific coast."
                                ],
                                "answer": "Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria.",
                                "explanation": "이 문제가 노리는 함정은 인용문의 문학적 매력에 끌려 은유적 표현을 근거로 고르는 것이다. Their chemistry is a library라는 표현은 멋있지만, 의학적 가치에 대한 직접 근거는 해면의 화합물이 해로운 박테리아의 성장을 늦춘다는 발견 자체이다. 풀이 단계는 다음과 같다. 첫째, 주장을 정확히 잡는다. 화학적 특성이 의학적 가치가 있을 수 있다는 것으로, 화학 물질과 의학(박테리아·항생제)의 연결이 핵심이다. 둘째, 각 보기가 그 연결을 직접 보여주는지 대조한다. 셋째, 해면이 해로운 박테리아의 성장을 늦추는 화합물을 만든다는 발견이 화학-의학 연결을 직접 증명하므로 정답이다. 오답 반박: These organisms have survived for 500 million years는 생존 기간에 대한 진술로, 화학 물질의 의학적 효과와 직접 연결되지 않는다. Their chemistry is a library we have barely begun to read는 은유적 표현으로 연구의 가능성을 시사할 뿐, 의학적 가치의 직접 근거가 아니다. 이 보기는 인용문이라는 형식에 끌리는 함정이다. Dr. Lena Ortiz spent a decade cataloging...은 연구 배경에 대한 진술로, 주장의 근거가 아니라 맥락 정보이다. Quick self-check: 근거 문제에서는 주장의 핵심어(여기서는 화학적 특성, 의학적 가치)를 뽑아 각 보기에 그 두 요소가 모두 직접 등장하는지 확인하라. 멋있는 인용문일수록 한 번 더 의심하라. 실전 팁: 직접적(directly support)이라는 말이 있으면 인과·효과를 직접 진술한 문장을 고르고, 배경·기간·은유는 소거하라. 정답은 대개 가장 건조하고 사실적인 문장이다."
                            },
                            {
                                "title": "기출 10: 간결성 — 군더더기 없는 문장 선택",
                                "difficulty": "hard",
                                "tags": [
                                    "기출"
                                ],
                                "question": "밑줄 친 부분을 가장 간결하면서도 문법적으로 올바르게 고친 것은?<br><br>Due to the fact that the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                "options": [
                                    "Due to the fact that the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "Because the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "The experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "Being conducted in a laboratory setting, the results may not be applicable to real-world conditions."
                                ],
                                "answer": "Because the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                "explanation": "이 문제가 노리는 함정은 두 가지이다. 첫째, 원문을 그대로 두는 안전 선택이다. Due to the fact that는 because 한 단어로 바꿀 수 있는 전형적인 군더더기이다. 둘째, 간결해 보이는 보기가 문법 오류(콤마 스플라이스, 댕글링 수식어)를 숨기고 있는 경우이다. 풀이 단계는 다음과 같다. 첫째, 원문의 군더더기를 찾는다. Due to the fact that은 because로 줄일 수 있다. 둘째, 각 보기의 문법을 검사한다. Because로 시작하는 종속절+주절 구조는 완전하고 올바르다. 셋째, 간결성과 문법을 동시에 만족하는 보기를 고른다. Because 버전이 정답이다. 오답 반박: 원문 그대로인 첫 번째 보기는 문법적으로 틀리지 않았지만 SAT 간결성 원칙상 because로 줄일 수 있는 표현을 그대로 둔 감점 보기이다. 세 번째 보기는 두 개의 독립 절을 쉼표 하나로 연결한 콤마 스플라이스로, 간결해 보이지만 문법 오류이다. 네 번째 보기는 Being conducted...의 주어가 the results가 되어 실험이 아니라 결과가 수행된 것처럼 읽히는 댕글링 수식어 오류이다. Quick self-check: 간결성 문제에서는 먼저 각 보기의 문법 오류(콤마 스플라이스, 댕글링, 수일치)를 검사해 탈락시키고, 남은 보기 중 가장 짧은 것을 고르라. Due to the fact that, in order to, in spite of the fact that 같은 덩어리 표현은 항상 의심하라. 실전 팁: 가장 짧은 보기가 답일 확률이 높지만, 짧다는 이유만으로 고르지 말고 문법 검사를 먼저 하라. SAT는 간결함과 정확성을 동시에 요구한다."
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "sat-trends",
            "title": "SAT 트렌드 & 개념 총정리 (2020-2026)",
            "code": "SAT-T",
            "description": "2020년 paper SAT부터 2024년 디지털 전환 이후까지, 년도별 출제 경향과 핵심 개념을 정리한 섹션. College Board 공개 기출·공식 연습문제 분석 기반의 경향 서술로, 정확한 통계가 아닌 출제 흐름 파악에 초점을 둔다.",
            "color": "#10b981",
            "icon": "fas fa-chart-line",
            "intuition": "SAT는 형식이 바뀌어도 출제되는 개념의 뼈대는 크게 흔들리지 않는다. 년도별 트렌드를 알면 무엇이 매 시험 나오는 필수 개념이고 무엇이 고득점 변별용인지 구분할 수 있다. 트렌드를 아는 학생은 공부 순서를 정할 수 있고, 모르는 학생은 그냥 다 외운다.",
            "local_resources": [],
            "difficulty": "advanced",
            "units": [
                {
                    "title": "2020: COVID와 paper SAT의 마지막 전성기",
                    "insight": "2020년은 COVID-19로 봄 시험이 대거 취소되며 test-optional 물결이 본격화된 해다. 형식은 paper SAT 그대로였다. Reading 52문항/65분, Writing and Language 44문항/35분, Math 58문항/80분(계산기 금지 20문항/25분 포함), 총 3시간 체제였다. Essay(50분)는 아직 선택 응시로 살아 있었다. Math 출제 경향은 대수(Heart of Algebra) 비중이 높았고, 계산기 금지 섹션에서 인수분해·무리식·복소수 기초가 꾸준히 출제되는 경향이 있었다. R&W는 500~750단어 긴 지문 기반의 evidence pair와 어휘 in context가 핵심이었다.",
                    "topics": [
                        "Paper SAT 형식 이해: R 52/65 · W 44/35 · M 58/80 (계산기 금지 섹션 포함)",
                        "Math TOP: 일차방정식·연립방정식, 이차함수, 지수 모델, 계산기 금지 대수 연산",
                        "R&W TOP: 긴 지문 evidence pair, 어휘 in context, 표준 영어 문법",
                        "로드맵 1단계: paper 시절 필수 개념 = 지금도 필수인 경우가 많다"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 일차방정식·부등식 응용",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 실생활 맥락(요금·속도·예산) 속 미지수 설정 후 식 세우기",
                                "핵심 포인트: 부등호 방향 전환(음수 나누기), 답이 맥락에 맞는지 검산"
                            ],
                            "intuition": "SAT 대수의 출발점이자 paper·digital 공통 최다 출제 영역이다."
                        },
                        {
                            "title": "[Math] 연립방정식",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 해의 개수 판별(기울기·절편 비교), 대입·가감법",
                                "핵심 포인트: 해가 없음·무수히 많음 조건, 그래프 해석 연결"
                            ],
                            "intuition": "대입보다 소거가 빠른 경우가 많고, 해의 개수 문제는 기울기만 보면 끝난다."
                        },
                        {
                            "title": "[Math] 이차방정식·이차함수",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 인수분해·근의 공식·완전제곱식, 꼭짓점·근의 위치",
                                "핵심 포인트: 판별식으로 근의 개수, 꼭짓점 형태 y=a(x-h)^2+k 변환"
                            ],
                            "intuition": "paper 시절 계산기 금지 섹션의 단골이자 digital에서도 Advanced Math 핵심이다."
                        },
                        {
                            "title": "[Math] 지수함수·지수 모델",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 인구 증가·방사성 붕괴·복리 같은 실생활 지수 모델",
                                "핵심 포인트: y=ab^x에서 b>1 증가·0<b<1 감소, 초기값 a 읽기"
                            ],
                            "intuition": "문장이 길지만 식은 단순하다. 모델의 각 문자가 무엇을 뜻하는지만 물어본다."
                        },
                        {
                            "title": "[Math] 계산기 금지 대수 연산",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 다항식 곱셈·나눗셈, 유리식 간단화, 무리식·지수법칙",
                                "핵심 포인트: paper 시절 No Calculator 섹션의 핵심, digital에서는 전 문항 계산기 허용으로 부담 감소"
                            ],
                            "intuition": "2020년의 이 고통은 2024년 디지털 전환으로 사라졌다. 손계산 훈련은 개념 이해용으로만."
                        },
                        {
                            "title": "[Math] 비율·백분율·비례식",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 퍼센트 증감, 단위 환산, 비례·반비례",
                                "핵심 포인트: 증가율 p%면 곱하기 (1+p/100), 기준량 헷갈림 주의"
                            ],
                            "intuition": "Problem Solving and Data Analysis의 기본기. 쉬워 보이지만 함정이 많다."
                        },
                        {
                            "title": "[Math] 통계 기초·자료 해석",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 평균·중앙값·최빈값, 산점도·히스토그램 읽기",
                                "핵심 포인트: 이상값이 평균에 미치는 영향, 표본→모집단 추론의 한계"
                            ],
                            "intuition": "계산보다 해석이 중요하다. 그래프가 말하는 이야기를 읽는 문제다."
                        },
                        {
                            "title": "[Math] 기하: 삼각형·원",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 피타고라스, 특수삼각형(30-60-90, 45-45-90), 원의 둘레·넓이",
                                "핵심 포인트: 보조선 긋기, 닮음비의 제곱=넓이비"
                            ],
                            "intuition": "paper 시절 비중은 중간. 도형 문제는 그림을 직접 그려야 풀린다."
                        },
                        {
                            "title": "[Math] 복소수 기초",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: i의 거듭제곱 순환, 복소수 사칙연산",
                                "핵심 포인트: i^2=-1, 켤레복소수로 분모 실수화"
                            ],
                            "intuition": "출제는 드물지만 나오면 쉬운 점수. i^4=1 순환만 알면 된다."
                        },
                        {
                            "title": "[Math] 함수 개념·그래프 해석",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: f(x) 값 구하기, 그래프에서 정의역·치역·증감 읽기",
                                "핵심 포인트: 함숫값은 대입, 그래프 평행이동은 안/밖 부호 반대"
                            ],
                            "intuition": "모든 대수 문제의 언어다. 함수 표기법에 익숙해지는 것이 2020년 이후 공통 과제다."
                        },
                        {
                            "title": "[R&W] Evidence Pair (근거 쌍)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 앞 문항 주장의 근거가 되는 지문 구절 고르기",
                                "핵심 포인트: 앞 문항을 먼저 확정하고, 근거 문항은 앞 답을 뒷받침하는지만 본다"
                            ],
                            "intuition": "paper 시절 R&W의 상징. digital에서는 Command of Evidence(텍스트 근거)로 계승됐다."
                        },
                        {
                            "title": "[R&W] Main Idea / 중심 주장",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 지문 전체의 요지·저자의 중심 주장 고르기",
                                "핵심 포인트: 너무 좁거나 너무 넓은 선지 제거, 반복되는 키워드 추적"
                            ],
                            "intuition": "긴 지문이든 단문이든 가장 먼저 물어보는 질문. 주제는 지문 곳곳에 흩어져 있다."
                        },
                        {
                            "title": "[R&W] Words in Context (문맥 어휘)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 밑줄 친 단어와 문맥상 가장 가까운 뜻 고르기",
                                "핵심 포인트: 평소 뜻이 아닌 문장 속 역할로 판단, 앞뒤 단서 찾기"
                            ],
                            "intuition": "어휘력보다 문맥 독해력을 잰다. 어려운 단어라도 문장이 힌트를 준다."
                        },
                        {
                            "title": "[R&W] 추론 (Inference)",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 지문에서 논리적으로 도출되는 결론 고르기",
                                "핵심 포인트: 지문에 없는 정보 추가 금지, 가장 약한 주장(가장 안전한 선지) 선택"
                            ],
                            "intuition": "추론은 상상이 아니라 논리다. 지문이 허락한 만큼만 나아간다."
                        },
                        {
                            "title": "[R&W] 저자의 목적·관점",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 특정 단락의 기능, 저자의 태도·목적 파악",
                                "핵심 포인트: 서술어 동사(주장하다·반박하다·예시하다)에 주목"
                            ],
                            "intuition": "왜 이 문단이 여기 있는가를 묻는다. 글의 설계도를 읽는 문제다."
                        },
                        {
                            "title": "[R&W] 문장 구조·구두점",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 콤마·세미콜론·콜론·대시 용법, 문장 경계(run-on/fragment)",
                                "핵심 포인트: 세미콜론=완전한 문장+완전한 문장, 콜론=설명·나열 예고"
                            ],
                            "intuition": "Writing 섹션의 배점 큰 영역. 규칙이 명확해서 맞히면 확실히 맞는 파트다."
                        },
                        {
                            "title": "[R&W] 주어-동사 일치·수식어",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주어와 동사의 수 일치, 대명사 선행사, 수식어 위치",
                                "핵심 포인트: 전치사구 건너뛰고 진짜 주어 찾기, 단수·복수 함정"
                            ],
                            "intuition": "문법 문제의 절반은 주어 찾기 게임이다. 길게 늘어진 수식어를 걷어내면 보인다."
                        },
                        {
                            "title": "[R&W] 문장 연결·전환어",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 문단 사이·문장 사이 논리 관계에 맞는 전환어 선택",
                                "핵심 포인트: 대조(however)·인과(therefore)·추가(furthermore) 관계 먼저 판단"
                            ],
                            "intuition": "전환어는 논리의 방향표지판이다. 앞뒤 문장의 관계를 먼저 말로 설명해보자."
                        },
                        {
                            "title": "[R&W] 간결성·문체 일관성",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 중복 표현 제거, 문체·어조에 맞는 표현 선택",
                                "핵심 포인트: 같은 뜻이면 짧은 선지, 지문 전체 어조와 어울리는지 확인"
                            ],
                            "intuition": "digital의 Expression of Ideas로 이어지는 영역. 짧고 정확한 것이 답이다."
                        },
                        {
                            "title": "[R&W] 도표·그래프 연계 독해",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 지문 주장과 그래프 데이터의 일치 여부 판단",
                                "핵심 포인트: 그래프 축·단위 먼저 확인, 지문 주장을 데이터로 검증"
                            ],
                            "intuition": "2020년 paper 시절에도 있었고 digital에서 Command of Evidence(Quantitative)로 확대됐다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 계산기 금지 대수",
                                "difficulty": "easy",
                                "question": "2020년 paper SAT의 No Calculator 섹션 스타일이다. 식 (x + 3)(x - 5)를 전개하면?",
                                "options": [
                                    "x^2 - 2x - 15",
                                    "x^2 + 2x - 15",
                                    "x^2 - 8x - 15",
                                    "x^2 - 2x + 15"
                                ],
                                "answer": "x^2 - 2x - 15",
                                "explanation": "분배법칙으로 전개하면 x*x = x^2, x*(-5) = -5x, 3*x = 3x, 3*(-5) = -15이다. 동류항을 정리하면 -5x + 3x = -2x가 되므로 답은 x^2 - 2x - 15이다. paper 시절 No Calculator 섹션은 이런 기본 전개·인수분해를 손으로 빠르고 정확하게 하는 능력을 측정했고, digital 전환 후에도 대수 연산의 정확성은 Advanced Math 영역의 전제 조건으로 남았다. 부호 실수가 가장 흔한 오답 원인이므로 전개 후에는 x=0 같은 쉬운 값을 대입해 검산하는 습관이 고득점의 기본이다."
                            },
                            {
                                "title": "자가체크 2: Evidence Pair 논리",
                                "difficulty": "medium",
                                "question": "paper SAT Reading의 evidence pair 문항에 대한 설명으로 가장 적절한 것은?",
                                "options": [
                                    "앞 문항의 답을 뒷받침하는 지문 구절을 고르는 문항이다",
                                    "지문과 무관한 배경지식을 묻는 문항이다",
                                    "밑줄 친 단어의 사전적 정의만 묻는 문항이다",
                                    "그래프의 수치만 읽으면 풀리는 문항이다"
                                ],
                                "answer": "앞 문항의 답을 뒷받침하는 지문 구절을 고르는 문항이다",
                                "explanation": "Evidence pair는 두 문항이 한 쌍으로 출제되는 paper SAT Reading의 대표 유형이었다. 첫 문항에서 지문의 주장·추론에 답하면, 다음 문항에서 그 답의 직접적 근거가 되는 지문 구절(보통 줄 번호 인용)을 고르게 했다. 전략은 앞 문항을 먼저 확정하는 것이다. 앞 답이 흔들리면 근거 문항도 함께 틀리기 때문이다. 이 유형은 digital SAT에서 Command of Evidence(텍스트 근거) 문항으로 계승되었는데, 지문이 25~150단어 단문으로 바뀌면서 근거 찾기의 범위는 오히려 좁아졌다. 긴 지문에서 근거를 찾던 훈련은 단문에서도 그대로 유효하다."
                            },
                            {
                                "title": "자가체크 3: 문장 경계와 구두점",
                                "difficulty": "medium",
                                "question": "다음 중 완전한 두 문장을 올바르게 연결한 것은? (A: The experiment failed. The data was useful.를 한 문장으로)",
                                "options": [
                                    "The experiment failed; the data was useful.",
                                    "The experiment failed, the data was useful.",
                                    "The experiment failed the data was useful.",
                                    "The experiment failed: the data was useful, however."
                                ],
                                "answer": "The experiment failed; the data was useful.",
                                "explanation": "세미콜론은 완전한 독립절 두 개를 연결하는 구두점이다. The experiment failed와 the data was useful는 각각 주어와 동사를 갖춘 완전한 문장이므로 세미콜론으로 연결하는 것이 문법적으로 올바르다. 두 번째 선지는 콤마만으로 독립절을 연결한 comma splice 오류이고, 세 번째는 구두점이 전혀 없는 fused sentence 오류이다. 네 번째 선지는 콜론 뒤에 however를 붙여 어색하고 문장 구조도 어긋난다. paper 시절 Writing 섹션에서 문장 경계 문제는 고빈도 출제 영역이었고, digital의 Boundaries(문장 경계) 문항으로 그대로 이어졌다. 규칙이 명확하므로 한 번 정리하면 안정적인 득점원이 된다."
                            }
                        ]
                    }
                },
                {
                    "title": "2021: Essay 폐지 & paper SAT 마지막 안정기",
                    "insight": "2021년 6월 College Board가 SAT Essay를 공식 폐지했다. 이후 SAT는 Essay 없는 3시간 paper 시험으로 안정화됐다. Test-optional 정책을 유지하는 대학이 1,800곳을 넘어서며 응시 전략이 중요해졌다. 출제 경향 자체는 2020년과 큰 차이가 없었다. Math에서는 이차함수·지수 모델·통계 추론이 꾸준히 출제되는 경향이 이어졌고, R&W에서는 Command of Evidence·Words in Context·표준 문법의 비중이 안정적이었다. 이 시기의 공식 기출은 지금도 paper 기반 개념 훈련용으로 유효하다.",
                    "topics": [
                        "2021년 6월 Essay 폐지: 이후 R&W는 Reading+Writing 통합 독해·문법 체제",
                        "Math TOP: 이차함수 그래프, 지수 성장·감소, 표본 추론, 삼각비 기초",
                        "R&W TOP: 근거 기반 독해, 문맥 어휘, 문장 경계·일치 문법",
                        "학습 포인트: 이 시기 기출은 개념별로 쪼개어 digital 대비 훈련에 재활용 가능"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 이차함수 그래프 해석",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 꼭짓점·대칭축·근 구하기, 그래프에서 식 복원",
                                "핵심 포인트: 꼭짓점 형태 완성, a의 부호로 위/아래 볼록 판별"
                            ],
                            "intuition": "식이 주어지면 그래프를, 그래프가 주어지면 식을. 양방향 변환이 핵심이다."
                        },
                        {
                            "title": "[Math] 지수 성장·감소 모델",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: y=ab^(t/k) 형태의 실생활 모델 해석",
                                "핵심 포인트: 밑이 1보다 크면 성장, 작으면 감소. 배가 시간·반감기 읽기"
                            ],
                            "intuition": "지수 모델 문제는 식의 각 부분이 현실의 무엇인지 묻는다. 번역 문제다."
                        },
                        {
                            "title": "[Math] 일차함수: 기울기와 절편",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 두 점으로 기울기, y=mx+b에서 m·b의 의미",
                                "핵심 포인트: 기울기=변화율, 절편=초기값. 실생활 맥락 해석 빈출"
                            ],
                            "intuition": "SAT 대수에서 가장 많이 나오는 한 줄. 기울기는 곧 변화율이다."
                        },
                        {
                            "title": "[Math] 다항식 연산·인수분해",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 공통인수·완전제곱·합차 공식, 다항식 나눗셈",
                                "핵심 포인트: (a+b)^2, (a-b)(a+b) 패턴 암기 수준으로 익히기"
                            ],
                            "intuition": "인수분해는 이차방정식·유리식의 열쇠. 패턴 인식 속도가 점수다."
                        },
                        {
                            "title": "[Math] 유리식·무리식",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 유리식 간단화, 분모 유리화, 무리방정식",
                                "핵심 포인트: 무리방정식은 제곱 후 반드시 원래 식에 대입 검산(무연근 주의)"
                            ],
                            "intuition": "무연근이 함정의 전부다. 검산을 빼먹으면 틀리라고 낸 문제다."
                        },
                        {
                            "title": "[Math] 통계: 표본과 추론",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 표본조사 결과의 일반화 가능 조건, 신뢰구간 직관",
                                "핵심 포인트: 무작위 표본+충분한 크기일 때만 모집단 추론 가능"
                            ],
                            "intuition": "계산이 아니라 판단 문제. 누가·어떻게 뽑았는지가 답을 정한다."
                        },
                        {
                            "title": "[Math] 확률 기초",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 단순 확률, 여사건, 표에서 조건부 확률 읽기",
                                "핵심 포인트: 2원 분할표(투표·설문 표) 문제에서 분모가 무엇인지 확인"
                            ],
                            "intuition": "SAT 확률은 어렵지 않다. 표에서 분수를 읽는 문제에 가깝다."
                        },
                        {
                            "title": "[Math] 삼각비 기초",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 직각삼각형에서 sin·cos·tan, 여각 관계",
                                "핵심 포인트: SOH-CAH-TOA, sin(90°-θ)=cos θ"
                            ],
                            "intuition": "직각삼각형 하나면 풀린다. 각도에 이름을 붙이고 변을 표시하자."
                        },
                        {
                            "title": "[Math] 원의 방정식",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: (x-h)^2+(y-k)^2=r^2에서 중심·반지름, completing the square",
                                "핵심 포인트: 일반형이 주어지면 완전제곱식으로 변형"
                            ],
                            "intuition": "출제 빈도는 낮지만 패턴이 고정돼 있다. 변형 연습 한 번이면 끝난다."
                        },
                        {
                            "title": "[Math] 등차·등비수열",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 일반항·합 공식, 실생활 맥락(저축·감소) 수열",
                                "핵심 포인트: 등차는 일차식, 등비는 지수식이라는 연결 이해"
                            ],
                            "intuition": "수열은 함수의 특수한 경우다. 그렇게 보면 공식이 외울 게 줄어든다."
                        },
                        {
                            "title": "[R&W] Command of Evidence",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주장을 뒷받침하는 텍스트·데이터 근거 선택",
                                "핵심 포인트: 주장을 한 문장으로 압축한 뒤, 그것을 직접 뒷받침하는 선지만 고른다"
                            ],
                            "intuition": "paper의 evidence pair가 진화한 형태. digital R&W의 간판 유형이다."
                        },
                        {
                            "title": "[R&W] 추론과 함의",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 지문 정보로 논리적으로 도출되는 결론",
                                "핵심 포인트: 과한 일반화 선지 제거, 지문 범위 안에서 가장 안전한 답"
                            ],
                            "intuition": "지문이 준 재료로만 요리한다. 재료를 새로 사 오면 안 된다."
                        },
                        {
                            "title": "[R&W] 어휘 in context 심화",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 학술·과학 지문의 추상 어휘, 다의어",
                                "핵심 포인트: 빈칸 앞뒤 논리(대조·인과) 파악 후 후보 단어 대입"
                            ],
                            "intuition": "단어를 외우는 게 아니라 문장의 논리를 읽는 문제다."
                        },
                        {
                            "title": "[R&W] 텍스트 구조·기능",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 특정 문장·단락이 전체에서 하는 역할",
                                "핵심 포인트: 예시·반박·전환·요약 중 하나로 분류해보기"
                            ],
                            "intuition": "부분을 보면 전체가 보인다. 이 문장이 빠지면 글이 어떻게 망가지는지 상상하자."
                        },
                        {
                            "title": "[R&W] 저자의 관점·어조",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 중립적·비판적·옹호적 태도 판별",
                                "핵심 포인트: 형용사·부사 같은 평가 어휘 수집"
                            ],
                            "intuition": "어조는 단어에 숨어 있다. 평가 어휘를 형광펜 치듯 모으면 태도가 보인다."
                        },
                        {
                            "title": "[R&W] 주어-동사·대명사 일치",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 긴 주어구 속 진짜 주어 찾기, 대명사 선행사 모호성",
                                "핵심 포인트: which·that 절과 전치사구를 괄호 치고 주어 노출시키기"
                            ],
                            "intuition": "문법 문제의 정석. 수식어를 걷어내는 순간 답이 보인다."
                        },
                        {
                            "title": "[R&W] 시제·법의 일관성",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 문단 내 시제 통일, 조건문·가정법",
                                "핵심 포인트: 시간 부사(yesterday·since)와 동사 시제 짝 맞추기"
                            ],
                            "intuition": "시제는 문단의 시간표를 맞추는 일이다. 부사가 힌트다."
                        },
                        {
                            "title": "[R&W] 병렬 구조",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: and·or·but으로 연결된 요소들의 형태 통일",
                                "핵심 포인트: 연결된 첫 요소의 품사·형태를 기준으로 나머지를 맞춘다"
                            ],
                            "intuition": "리스트는 모양이 같아야 한다. 동사면 동사, 명사면 명사로."
                        },
                        {
                            "title": "[R&W] 불필요한 문장 삭제 판단",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 문단 주제와 무관한 문장 삭제 여부",
                                "핵심 포인트: 문단의 중심 주제 한 줄 요약 후 관련성 판단"
                            ],
                            "intuition": "좋은 문장도 주제와 무관하면 삭제 대상이다. 관련성이 기준이다."
                        },
                        {
                            "title": "[R&W] 수량·데이터 근거 독해",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 표·그래프 수치로 지문 주장 검증",
                                "핵심 포인트: 단위·축 눈금 확인, 주장의 수치와 데이터 대조"
                            ],
                            "intuition": "숫자는 거짓말하지 않지만 축은 속일 수 있다. 단위부터 확인하자."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 이차함수 꼭짓점",
                                "difficulty": "easy",
                                "question": "이차함수 y = x^2 - 6x + 5의 꼭짓점 좌표는?",
                                "options": [
                                    "(3, -4)",
                                    "(-3, 32)",
                                    "(3, 14)",
                                    "(-3, -4)"
                                ],
                                "answer": "(3, -4)",
                                "explanation": "꼭짓점의 x좌표는 -b/2a = 6/2 = 3이다. 이를 식에 대입하면 y = 9 - 18 + 5 = -4이므로 꼭짓점은 (3, -4)이다. 완전제곱식으로 변형해도 같은 결과를 얻을 수 있다. y = (x-3)^2 - 9 + 5 = (x-3)^2 - 4이므로 꼭짓점 (3, -4)이 바로 보인다. 이차함수 꼭짓점은 paper 시절부터 digital까지 꾸준히 출제되는 필수 개념이다. -b/2a 공식 암기보다 완전제곱식 변형을 이해하면 근의 위치·최댓값·최솟값 문제까지 한 번에 해결된다. 부호 실수에 주의하고, 구한 꼭짓점을 원래 식에 대입해 검산하는 습관을 들이자."
                            },
                            {
                                "title": "자가체크 2: 표본 추론의 조건",
                                "difficulty": "medium",
                                "question": "어느 고등학교 학생 200명을 무작위로 뽑아 조사했더니 60%가 아침 식사를 거른다고 답했다. 이 결과에 대한 올바른 해석은?",
                                "options": [
                                    "이 학교 전체 학생에 대해 아침 식사를 거르는 비율을 추정할 수 있다",
                                    "전국 모든 고등학생의 식습관을 확정할 수 있다",
                                    "조사 대상 200명의 식습관도 알 수 없다",
                                    "아침 식사와 성적의 인과관계를 증명했다"
                                ],
                                "answer": "이 학교 전체 학생에 대해 아침 식사를 거르는 비율을 추정할 수 있다",
                                "explanation": "무작위 표본은 표본이 추출된 모집단(이 학교 학생)에 대해서만 일반화할 수 있다. 전국 고등학생으로 확대하려면 전국 단위의 무작위 표본이 필요하므로 두 번째 선지는 과한 일반화이다. 세 번째 선지는 틀렸다. 조사 대상 200명의 응답은 직접 측정된 사실이므로 알 수 있다. 네 번째 선지는 인과관계의 오류이다. 이 조사는 상관관계(식사 여부와 응답)만 보여줄 뿐, 아침 식사가 성적에 미치는 인과를 증명한 것이 아니다. SAT 통계 문항은 계산보다 이런 추론의 한계를 묻는 경향이 강하다. 누가·어떻게 뽑았는지, 어디까지 일반화할 수 있는지를 따지는 것이 핵심이다."
                            },
                            {
                                "title": "자가체크 3: 문맥 어휘",
                                "difficulty": "medium",
                                "question": "과학 지문: 'The results _____ the hypothesis that the compound inhibits cell growth.' 빈칸에 가장 적절한 단어는? (앞 문장: 실험에서 세포 성장이 40% 감소했다)",
                                "options": [
                                    "support",
                                    "undermine",
                                    "qualify",
                                    "complicate"
                                ],
                                "answer": "support",
                                "explanation": "앞 문장에서 세포 성장이 40% 감소했다는 실험 결과가 제시되었고, 가설은 그 화합물이 세포 성장을 억제한다는 내용이다. 실험 결과가 가설과 같은 방향이므로 결과를 설명하는 동사는 긍정적 지지가 되어야 한다. support(뒷받침하다)가 문맥상 가장 적절하다. undermine(약화시키다)은 반대 방향, qualify(제한하다)·complicate(복잡하게 하다)는 문맥상 근거가 없다. Words in Context 문항은 단어의 사전적 정의가 아니라 문장 속 논리 관계를 묻는다. 빈칸 앞뒤의 인과·대조 관계를 먼저 파악하고 후보 단어를 대입해보는 것이 정석 풀이이다."
                            }
                        ]
                    }
                },
                {
                    "title": "2022: 디지털 SAT 발표 & 파일럿의 해",
                    "insight": "2022년 1월 College Board가 디지털 SAT 전환을 공식 발표했다. 국제는 2023년, 미국은 2024년 전환 예정이었다. 2022년 가을에는 국제 파일럿 시험이 시행되며 새 형식의 실체가 드러나기 시작했다. 예고된 변화는 지문 단문화(25~150단어), 문항당 1지문 독립형, 2단계 적응형 모듈, 전 문항 계산기 허용(Desmos 내장), 시험 시간 2시간 14분이었다. Paper 시험 자체의 출제 경향은 2020~2021년과 유사하게 유지됐다. 이 해의 의미는 형식 예고이지 내용 변화가 아니었다.",
                    "topics": [
                        "2022년 1월 디지털 전환 발표: 국제 2023·미국 2024 전환 로드맵",
                        "예고된 형식 변화 5가지: 단문 지문·적응형·계산기 전면 허용·단축·Bluebook",
                        "Math TOP: paper 마지막 해의 대수·함수·통계 완성",
                        "R&W TOP: 긴 지문 독해 지구력 + 문법 정확도 (digital에서도 유효한 기초 체력)"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 연립방정식 해의 개수",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 두 직선의 기울기·절편 비교로 해의 개수 판별",
                                "핵심 포인트: 기울기 다르면 한 개, 같고 절편 다르면 0개, 같으면 무수히 많음"
                            ],
                            "intuition": "그래프를 그리지 않고도 판별할 수 있다. 기울기가 모든 것을 말한다."
                        },
                        {
                            "title": "[Math] 이차방정식의 근",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 인수분해·근의 공식·판별식, 근과 계수 관계",
                                "핵심 포인트: 판별식 부호로 실근 개수, 인수분해가 안 되면 근의 공식"
                            ],
                            "intuition": "이차방정식은 푸는 방법이 세 가지다. 상황에 맞는 도구를 고르는 게 실력이다."
                        },
                        {
                            "title": "[Math] 함수값과 합성함수",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: f(g(x)) 계산, 표·그래프에서 함숫값 읽기",
                                "핵심 포인트: 안쪽부터 차례로 대입, 표 문제는 행·열 헷갈림 주의"
                            ],
                            "intuition": "합성함수는 양파 까기다. 가장 안쪽부터 벗겨낸다."
                        },
                        {
                            "title": "[Math] 지수법칙·근호 연산",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: a^m·a^n, (a^m)^n, 음지수·분수지수",
                                "핵심 포인트: 밑이 같으면 지수끼리 더하고 빼고 곱한다"
                            ],
                            "intuition": "지수법칙은 외우는 게 아니라 패턴이다. 밑 통일→지수 계산의 2단계다."
                        },
                        {
                            "title": "[Math] 백분율 증감 복합",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 연속 할인·인상, 원가 역산",
                                "핵심 포인트: 20% 할인 후 20% 인상은 원가가 아니다. 곱셈으로 계산"
                            ],
                            "intuition": "퍼센트는 덧셈이 아니라 곱셈이다. 이 한 줄이 함정의 전부다."
                        },
                        {
                            "title": "[Math] 산점도·추세선",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 추세선으로 값 예측, 상관관계 방향·강도",
                                "핵심 포인트: 추세선 위의 점이 예측값, 실제값과의 차이가 잔차"
                            ],
                            "intuition": "산점도는 데이터의 이야기다. 점들의 전체 흐름을 읽는다."
                        },
                        {
                            "title": "[Math] 닮음과 비례",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 닮은 도형의 대응변·넓이·부피 비",
                                "핵심 포인트: 길이비 k → 넓이비 k^2 → 부피비 k^3"
                            ],
                            "intuition": "차원이 올라가면 지수도 올라간다. 길이·넓이·부피를 구분하자."
                        },
                        {
                            "title": "[Math] 각도와 평행선",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 평행선과 횡단선의 동위각·엇각·동측내각",
                                "핵심 포인트: 평행이면 엇각·동위각이 같다. 지그재그(Z)를 찾아라"
                            ],
                            "intuition": "각도 문제는 평행 조건 하나면 풀린다. Z 모양을 찾는 게 시작이다."
                        },
                        {
                            "title": "[Math] 절댓값 방정식",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: |x-a|=b, 절댓값 부등식",
                                "핵심 포인트: 경우 나누기, 그래프로는 V자 꺾임 이해"
                            ],
                            "intuition": "절댓값은 거리다. |x-3|=5는 3에서 거리가 5인 점이다."
                        },
                        {
                            "title": "[Math] 이차 부등식",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: ax^2+bx+c>0 해집합",
                                "핵심 포인트: 그래프를 그려 x축 위·아래 구간 판단"
                            ],
                            "intuition": "부등식은 그래프 문제다. 포물선을 그리면 답이 보인다."
                        },
                        {
                            "title": "[R&W] 중심 주장과 세부 근거",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 지문 주장 + 그것을 뒷받침하는 세부 사항 연결",
                                "핵심 포인트: 주장 한 줄 요약 → 각 단락이 주장의 어떤 부분을 맡는지 매칭"
                            ],
                            "intuition": "글은 주장과 근거의 건축물이다. 기둥(주장)과 벽돌(근거)을 구분하자."
                        },
                        {
                            "title": "[R&W] 어휘 뉘앙스 구분",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 유사한 뜻의 단어 중 문맥 뉘앙스에 맞는 선택",
                                "핵심 포인트: 긍정·중립·부정의 어감, 강도(weak→strong) 스펙트럼"
                            ],
                            "intuition": "동의어는 뉘앙스가 다르다. 문장의 온도에 맞는 단어를 고른다."
                        },
                        {
                            "title": "[R&W] 비교·대조 구조",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 두 이론·현상의 공통점·차이점 파악",
                                "핵심 포인트: 대조 신호어(however·while·in contrast) 표시, 표로 정리"
                            ],
                            "intuition": "비교 지문은 표로 바꾸면 끝난다. 공통점 한 줄, 차이점 한 줄이다."
                        },
                        {
                            "title": "[R&W] 인과관계 추적",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 원인→결과 사슬 파악, 역인과·제3변수 함정",
                                "핵심 포인트: because·lead to·result in 신호어, 상관관계와 인과 구분"
                            ],
                            "intuition": "함께 일어난다고 원인이 아니다. 인과를 주장하려면 메커니즘이 있어야 한다."
                        },
                        {
                            "title": "[R&W] 삽입·삭제 문장 판단",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 특정 위치에 문장 추가 시 효과, 삭제 시 손실",
                                "핵심 포인트: 앞뒤 문장과의 논리 연결이 매끄러운지, 주제 일탈 여부"
                            ],
                            "intuition": "문장은 이웃과 어울려야 한다. 앞뒤 문장과 악수하는지 확인하자."
                        },
                        {
                            "title": "[R&W] 콜론·대시 용법",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 콜론 뒤 설명·나열, 대시의 강조·삽입",
                                "핵심 포인트: 콜론 앞은 완전한 문장, 대시 쌍은 콤마 쌍처럼 삽입구 처리"
                            ],
                            "intuition": "콜론은 예고편이다. 뒤에 중요한 설명이 온다는 신호다."
                        },
                        {
                            "title": "[R&W] 분사·부정사 수식",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 현수분사(dangling modifier), to부정사 용법",
                                "핵심 포인트: 분사구 바로 뒤에 수식 대상이 오는지 확인"
                            ],
                            "intuition": "수식어는 주인 바로 옆에 있어야 한다. 떨어져 있으면 의미가 무너진다."
                        },
                        {
                            "title": "[R&W] 문단 재배열·논리 흐름",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 가장 논리적인 문장 순서, 문단 위치",
                                "핵심 포인트: 지시어(this·such)·시간 순서·일반→구체 흐름 추적"
                            ],
                            "intuition": "글에는 순서의 이유가 있다. 지시어가 앞 문장을 가리키는지 보자."
                        },
                        {
                            "title": "[R&W] 그래프+지문 통합",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 그래프 데이터로 지문 주장의 타당성 평가",
                                "핵심 포인트: 그래프가 보여주는 것과 보여주지 않는 것 구분"
                            ],
                            "intuition": "데이터는 주장의 심판이다. 주장이 데이터를 정확히 반영하는지 대조한다."
                        },
                        {
                            "title": "[R&W] 반어·수사적 표현",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 아이러니·역설 표현의 실제 의미 파악",
                                "핵심 포인트: 문자 그대로가 아닌 맥락상 의도, 전체 어조와 대조"
                            ],
                            "intuition": "겉말과 속뜻이 다를 때가 있다. 전체 어조가 반어의 열쇠다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 연립방정식 해의 개수",
                                "difficulty": "easy",
                                "question": "연립방정식 2x + 3y = 7, 4x + 6y = 10의 해의 개수는?",
                                "options": [
                                    "0개 (해가 없음)",
                                    "1개",
                                    "2개",
                                    "무수히 많음"
                                ],
                                "answer": "0개 (해가 없음)",
                                "explanation": "두 번째 식을 2로 나누면 2x + 3y = 5가 된다. 첫 번째 식 2x + 3y = 7과 비교하면 좌변은 같은데 우변이 다르다. 기울기로 보면 두 직선은 2x + 3y = 7 즉 y = -(2/3)x + 7/3과 y = -(2/3)x + 5/3으로 기울기가 같고 y절편이 다르므로 평행한 두 직선이다. 평행한 직선은 만나지 않으므로 해가 없다. 해의 개수 판별은 그래프를 그리지 않고도 기울기와 절편 비교만으로 해결되는 paper·digital 공통 필수 유형이다. 계수가 비례하는데 상수항만 다르면 해 없음, 식 전체가 비례하면 무수히 많음, 기울기가 다르면 해 1개라는 패턴을 기억하자."
                            },
                            {
                                "title": "자가체크 2: 디지털 전환 예고 내용",
                                "difficulty": "medium",
                                "question": "2022년 발표된 디지털 SAT의 예고된 변화로 옳지 않은 것은?",
                                "options": [
                                    "전 문항 계산기 허용(Desmos 내장)이 예고됐다",
                                    "지문이 25~150단어 단문화될 것이 예고됐다",
                                    "Essay가 부활할 것이 예고됐다",
                                    "2단계 적응형 모듈이 예고됐다"
                                ],
                                "answer": "Essay가 부활할 것이 예고됐다",
                                "explanation": "2022년 1월 College Board의 디지털 SAT 발표에서 예고된 핵심 변화는 네 가지였다. 첫째, 지문이 25~150단어의 짧은 단문으로 바뀌고 문항당 하나의 지문이 독립 출제된다. 둘째, 2단계 적응형으로 모듈 1의 성적에 따라 모듈 2의 난이도가 조정된다. 셋째, 계산기 금지 섹션이 폐지되고 전 문항 계산기 사용이 허용되며 Desmos 그래핑 계산기가 내장된다. 넷째, 시험 시간이 3시간에서 2시간 14분으로 단축된다. Essay는 2021년 6월에 폐지되었고 부활 계획은 발표된 바 없으므로 세 번째 선지가 옳지 않은 것이다. 형식 변화를 정확히 아는 것은 학습 전략 수립의 출발점이다."
                            },
                            {
                                "title": "자가체크 3: 콜론 용법",
                                "difficulty": "medium",
                                "question": "콜론 사용이 올바른 문장은?",
                                "options": [
                                    "She bought three things: apples, bread, and cheese.",
                                    "She bought: apples, bread, and cheese.",
                                    "The reason is: she was tired.",
                                    "Apples, bread, and cheese: she bought."
                                ],
                                "answer": "She bought three things: apples, bread, and cheese.",
                                "explanation": "콜론의 핵심 규칙은 콜론 앞이 완전한 독립절이어야 한다는 것이다. 첫 번째 선지에서 She bought three things는 주어와 동사를 갖춘 완전한 문장이고, 콜론 뒤에 그 three things의 구체적 나열이 오므로 올바른 용법이다. 두 번째 선지는 bought 뒤에 목적어 없이 콜론이 와서 앞부분이 완전하지 않다. 세 번째 선지는 The reason is 뒤에 콜론이 불필요하게 들어갔고(동사 is 뒤 직접 연결이 자연스럽다), 네 번째 선지는 어순이 어색하고 콜론 앞이 완전한 문장이 아니다. 콜론은 설명·나열·강조의 예고편 역할을 하며, digital SAT의 Boundaries 문항에서도 꾸준히 출제되는 경향이 있다."
                            }
                        ]
                    }
                },
                {
                    "title": "2023: 국제 디지털 원년 · 미국 paper 마지막 해",
                    "insight": "2023년 3월 국제 SAT가 먼저 디지털로 전환됐다. 미국은 12월까지 paper 시험이 유지된 과도기였다. 디지털 형식의 실체가 확정됐다. Reading and Writing 54문항/64분, Math 44문항/70분, 총 2시간 14분이다. R&W와 Math 모두 2개 모듈씩, 모듈 2의 난이도가 모듈 1 성적에 따라 조정되는 2단계 적응형이다. 지문은 25~150단어 단문, 문항당 1지문 독립형으로 바뀌었다. Math는 전 문항 계산기 허용, Desmos 그래핑 계산기가 시험 화면에 내장됐다. 국제 응시 경험담에서는 시간 압박은 줄었지만 고난이도 모듈 2에서 변별이 걸린다는 분석이 나왔다.",
                    "topics": [
                        "국제 디지털 SAT 시작(2023년 3월): 미국은 paper 유지, 과도기",
                        "확정된 디지털 형식: R&W 54/64 · Math 44/70 · 2시간 14분 · 2단계 적응형",
                        "Math TOP: 전 문항 계산기 허용 시대의 대수·함수·데이터 해석",
                        "R&W TOP: 단문 1지문 1문항 체제, 정보·아이디어와 문법의 균형"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 일차방정식 실생활 응용",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 요금제·예산·속도 맥락에서 식 세우기",
                                "핵심 포인트: 구하는 값을 x로, 단위를 맞춰 식을 세운다"
                            ],
                            "intuition": "디지털에서도 변함없는 최다 출제 영역. 번역 능력이 곧 수학 실력이다."
                        },
                        {
                            "title": "[Math] 이차함수 최댓값·최솟값",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 포물선 꼭짓값, 실생활 최적화(넓이·수익)",
                                "핵심 포인트: 꼭짓점의 y값이 최대·최소, a 부호로 방향 판단"
                            ],
                            "intuition": "최적화 문제는 꼭짓점 문제다. Desmos로 그래프를 그려 확인하는 습관."
                        },
                        {
                            "title": "[Math] 지수함수 그래프와 식",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 그래프에서 초기값·성장률 읽기, 식 쓰기",
                                "핵심 포인트: y절편이 초기값, 증가·감소로 밑의 범위 판단"
                            ],
                            "intuition": "Desmos 시대에는 그래프 해석 능력이 계산 능력보다 중요해졌다."
                        },
                        {
                            "title": "[Math] 연립부등식",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 그래프 영역, 정수 해 개수",
                                "핵심 포인트: 경계선 포함 여부(실선·점선), 교차 영역 확인"
                            ],
                            "intuition": "부등식은 영역 문제다. 그래프를 그려 겹치는 부분을 찾는다."
                        },
                        {
                            "title": "[Math] 데이터 해석: 평균·표준편차",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 분포의 중심·퍼짐 비교, 이상값 영향",
                                "핵심 포인트: 표준편차는 퍼짐의 척도, 이상값은 평균을 끌어당긴다"
                            ],
                            "intuition": "숫자를 계산하기보다 분포의 모양을 읽는다. 그림이 답이다."
                        },
                        {
                            "title": "[Math] 백분율·비율 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 증감률, 농도·혼합, 단위당 가격",
                                "핵심 포인트: 기준량 파악, Desmos 계산기로 검산"
                            ],
                            "intuition": "계산기 허용이어도 개념이 틀리면 답이 안 나온다. 기준량이 핵심이다."
                        },
                        {
                            "title": "[Math] 직각삼각형·피타고라스",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 빗변·높이 구하기, 좌표평면 거리",
                                "핵심 포인트: 좌표 거리 공식은 피타고라스의 변형"
                            ],
                            "intuition": "좌표평면의 두 점은 항상 직각삼각형을 숨기고 있다."
                        },
                        {
                            "title": "[Math] 원의 둘레·넓이·부채꼴",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 중심각과 호·부채꼴 넓이 비례",
                                "핵심 포인트: 360도 중 몇 도인지 비율로 계산"
                            ],
                            "intuition": "원은 비율의 도형이다. 각도 비율=호 비율=넓이 비율이다."
                        },
                        {
                            "title": "[Math] 삼각함수 기본",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 단위원·특수각 sin·cos 값, 그래프 주기",
                                "핵심 포인트: 30°·45°·60° 값, 주기성 이해"
                            ],
                            "intuition": "SAT 삼각함수는 기초 수준. 특수각 표 하나면 충분하다."
                        },
                        {
                            "title": "[Math] 다항식 나눗셈·나머지",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 조립제법, 나머지 정리",
                                "핵심 포인트: f(a)=0이면 (x-a)가 인수"
                            ],
                            "intuition": "나머지 정리는 인수분해의 지름길이다."
                        },
                        {
                            "title": "[R&W] Information and Ideas: 중심 내용",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 25~150단어 지문의 요지·주장 파악",
                                "핵심 포인트: 짧아진 만큼 함정도 직접적. 주제문·결론문 찾기"
                            ],
                            "intuition": "지문이 짧아졌다고 쉬워진 게 아니다. 한 문장도 허투루 읽으면 안 된다."
                        },
                        {
                            "title": "[R&W] Textual Evidence (텍스트 근거)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주장을 가장 잘 뒷받침하는 인용 선택",
                                "핵심 포인트: 주장과 인용의 직접적 연결, 부분 일치가 아닌 전체 지지"
                            ],
                            "intuition": "paper의 evidence pair가 단문화된 형태. 주장을 압축하고 대조한다."
                        },
                        {
                            "title": "[R&W] Quantitative Evidence (데이터 근거)",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 표·그래프에서 주장을 뒷받침하는 수치 선택",
                                "핵심 포인트: 주장의 핵심 수치와 데이터 일치 확인"
                            ],
                            "intuition": "숫자로 말하는 근거 찾기. 축과 단위를 먼저 읽는다."
                        },
                        {
                            "title": "[R&W] 추론 (단문)",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 짧은 지문에서 논리적 결론 도출",
                                "핵심 포인트: 지문 밖 지식 금지, 가장 약한(안전한) 주장 선택"
                            ],
                            "intuition": "단문 추론은 논리의 단거리 달리기다. 짧지만 정확해야 한다."
                        },
                        {
                            "title": "[R&W] 어휘 in context (디지털)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 학술 어휘의 문맥상 의미",
                                "핵심 포인트: 앞뒤 논리 관계 파악 후 대입 검증"
                            ],
                            "intuition": "디지털에서 체감 비중이 커진 영역. 문맥 독해가 어휘력을 이긴다."
                        },
                        {
                            "title": "[R&W] 텍스트의 목적·기능",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 밑줄 문장의 전체 글에서의 역할",
                                "핵심 포인트: 예시·반박·배경·전환 중 기능 분류"
                            ],
                            "intuition": "부분의 역할은 전체의 설계에서 보인다."
                        },
                        {
                            "title": "[R&W] Cross-Text Connections",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 두 짧은 텍스트의 관계(동의·반박·보완)",
                                "핵심 포인트: 각 텍스트 주장 한 줄 요약 후 관계 판별"
                            ],
                            "intuition": "디지털 신유형. 두 글을 각각 요약하면 관계가 보인다."
                        },
                        {
                            "title": "[R&W] Boundaries (문장 경계)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 콤마 스플라이스·run-on 수정, 세미콜론·콜론",
                                "핵심 포인트: 독립절 판별이 전부. 주어+동사 찾기"
                            ],
                            "intuition": "디지털 문법의 간판. 규칙이 명확해 안정적 득점원이다."
                        },
                        {
                            "title": "[R&W] Form, Structure, and Sense (형태·일치)",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주어-동사 일치, 시제, 대명사",
                                "핵심 포인트: 수식어 걷어내고 주어 노출"
                            ],
                            "intuition": "길어진 수식어가 함정. 괄호 치고 본질을 보자."
                        },
                        {
                            "title": "[R&W] Transitions (전환어)",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 빈칸에 논리 관계 맞는 전환어",
                                "핵심 포인트: 앞뒤 문장 관계를 말로 설명한 뒤 전환어 매칭"
                            ],
                            "intuition": "논리를 말로 풀면 전환어는 저절로 보인다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 디지털 형식 이해",
                                "difficulty": "easy",
                                "question": "디지털 SAT의 형식으로 올바른 것은?",
                                "options": [
                                    "R&W 54문항/64분, Math 44문항/70분, 총 2시간 14분",
                                    "R 52문항/65분, W 44문항/35분, M 58문항/80분",
                                    "R&W 44문항/70분, Math 54문항/64분",
                                    "전 섹션 합쳐 3시간, Essay 필수"
                                ],
                                "answer": "R&W 54문항/64분, Math 44문항/70분, 총 2시간 14분",
                                "explanation": "디지털 SAT는 Reading and Writing 54문항 64분, Math 44문항 70분으로 구성되며 총 시험 시간은 2시간 14분이다. 두 번째 선지는 paper SAT의 구성(Reading 52/65, Writing 44/35, Math 58/80, 총 3시간)이다. 세 번째 선지는 문항 수와 시간을 뒤바꾼 오답이고, 네 번째 선지는 Essay가 2021년 6월에 폐지되었으므로 틀렸다. 디지털 전환의 핵심 수치(R&W 54/64, Math 44/70)는 학습 계획의 기준이 된다. 섹션별 시간 배분 전략을 세울 때 이 수치를 정확히 알아야 하며, 특히 Math는 문항당 약 1분 35초, R&W는 문항당 약 1분 11초의 계산이 나온다."
                            },
                            {
                                "title": "자가체크 2: 적응형 모듈 전략",
                                "difficulty": "medium",
                                "question": "디지털 SAT의 2단계 적응형 구조에서 고득점을 위한 가장 중요한 전략은?",
                                "options": [
                                    "모듈 1의 정확도를 최대한 확보하는 것이다",
                                    "모듈 1을 빨리 풀고 모듈 2에 시간을 몰아주는 것이다",
                                    "어려운 문제는 모두 찍고 쉬운 문제만 푸는 것이다",
                                    "모듈 2에서만 고난도 문제를 푸는 것이다"
                                ],
                                "answer": "모듈 1의 정확도를 최대한 확보하는 것이다",
                                "explanation": "디지털 SAT는 섹션 내 2단계 적응형이다. 모듈 1의 성적에 따라 모듈 2의 난이도(상위·하위)가 결정되고, 상위 난이도 모듈에서 좋은 성적을 받아야 고득점이 가능하다. 따라서 모듈 1에서 실수로 쉬운 문제를 틀리면 하위 난이도 모듈로 배정되어 만점에 가까운 점수가 구조적으로 어려워진다. 모듈 1을 빨리 풀어 시간을 아끼는 전략은 정확도를 희생하므로 역효과이다. 어려운 문제를 찍는 것은 적응형에서 치명적이다. 정답은 모듈 1의 정확도 확보이며, 이는 쉬운 문제의 실수를 없애는 훈련(검산 습관, 문제 꼼꼼히 읽기)이 고득점의 첫걸음임을 의미한다."
                            },
                            {
                                "title": "자가체크 3: Quantitative Evidence",
                                "difficulty": "medium",
                                "question": "표: 세 도시의 연간 강수량 (A: 800mm, B: 1200mm, C: 400mm). 주장: 'B의 강수량은 A의 1.5배이며 C의 3배다.' 이 주장을 뒷받침하는 근거로 가장 적절한 것은?",
                                "options": [
                                    "1200은 800의 1.5배이고 400의 3배이다",
                                    "세 도시의 강수량 합은 2400mm이다",
                                    "A의 강수량이 가장 평균에 가깝다",
                                    "C의 강수량이 가장 적다"
                                ],
                                "answer": "1200은 800의 1.5배이고 400의 3배이다",
                                "explanation": "Quantitative Evidence 문항은 표·그래프의 수치로 지문의 주장을 직접 뒷받침하는 선지를 고르는 유형이다. 주장은 두 개의 수치 관계(1.5배, 3배)를 포함하므로, 근거 선지도 두 관계를 모두 확인해야 한다. 1200/800 = 1.5, 1200/400 = 3이므로 첫 번째 선지가 주장 전체를 뒷받침한다. 두 번째 선지는 합계라는 새로운 정보이고 주장과 무관하다. 세 번째·네 번째 선지는 사실일 수 있으나 주장의 수치 관계를 뒷받침하지 않는다. 데이터 근거 문항의 요령은 주장의 핵심 수치를 먼저 뽑아낸 뒤, 각 선지가 그 수치를 직접 확인해주는지 대조하는 것이다."
                            }
                        ]
                    }
                },
                {
                    "title": "2024: 미국 디지털 SAT 원년",
                    "insight": "2024년 3월 9일 미국에서도 디지털 SAT가 시행됐다. Bluebook 앱 기반, 내장 Desmos 그래핑 계산기, 참고 공식 시트 제공이 표준이 됐다. Math 4개 도메인(Algebra·Advanced Math·Problem Solving and Data Analysis·Geometry and Trigonometry)과 R&W 4개 도메인(Information and Ideas·Craft and Structure·Expression of Ideas·Standard English Conventions)의 출제 비중이 공개 연습문제를 통해 드러나기 시작했다. 출제 경향으로는 짧은 지문+독립 문항으로 지구력 부담이 줄었고, 어휘 in context와 데이터 근거 문항의 체감 비중이 커졌다는 분석이 나왔다. 공식 연습 세트가 Bluebook에 탑재되며 준비 환경도 디지털로 일원화됐다.",
                    "topics": [
                        "2024년 3월 미국 디지털 전환: Bluebook·Desmos 내장·공식 시트 표준화",
                        "Math 4도메인 / R&W 4도메인 출제 구조 파악",
                        "Math TOP: 일차·이차·지수 함수, 통계 추론, 기하 기초",
                        "R&W TOP: 근거·어휘·문장 경계·전환어 (단문 체제 적응)"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Algebra: 일차식·부등식",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 실생활 맥락 식 세우기, 부등식 해집합",
                                "핵심 포인트: digital Algebra 도메인의 핵심, 약 35% 비중 경향"
                            ],
                            "intuition": "대수는 디지털 Math의 3분의 1이다. 여기서 무너지면 전체가 흔들린다."
                        },
                        {
                            "title": "[Math] Advanced Math: 이차·지수·다항식",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 이차함수 그래프, 지수 모델, 다항식 연산",
                                "핵심 포인트: Advanced Math도 약 35% 경향. 고난도 모듈 2의 변별 구간"
                            ],
                            "intuition": "고득점의 갈림길. 모듈 2 고난이도의 주인공이다."
                        },
                        {
                            "title": "[Math] PSDA: 비율·통계·확률",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 백분율, 표본 추론, 확률, 산점도",
                                "핵심 포인트: 계산보다 해석. 약 15% 비중 경향"
                            ],
                            "intuition": "읽고 판단하는 수학. 국어 실력이 수학 점수를 좌우하는 영역이다."
                        },
                        {
                            "title": "[Math] Geometry & Trig: 도형·삼각비",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 삼각형·원, 삼각비, 라디안 기초",
                                "핵심 포인트: 약 15% 비중 경향. 공식 시트 활용"
                            ],
                            "intuition": "공식은 시트에 있다. 언제 어떤 공식을 꺼내는지가 실력이다."
                        },
                        {
                            "title": "[Math] Desmos 활용 그래프 해석",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 함수 그래프 그려 교점·근·최댓값 확인",
                                "핵심 포인트: 식을 입력하고 그래프로 검증하는 습관"
                            ],
                            "intuition": "2024년의 가장 큰 무기. 손으로 그릴 것을 Desmos로 확인한다."
                        },
                        {
                            "title": "[Math] 연립방정식 실생활",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 두 조건을 식으로, 해의 의미 해석",
                                "핵심 포인트: 해가 현실에서 무엇을 뜻하는지 묻는 변형 주의"
                            ],
                            "intuition": "해를 구하고 끝이 아니다. 그 숫자가 현실에서 뭔지 답해야 한다."
                        },
                        {
                            "title": "[Math] 지수 성장 실생활 모델",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: y=ab^x 모델의 각 요소 의미",
                                "핵심 포인트: a는 초기값, b는 성장·감소율"
                            ],
                            "intuition": "모델 문제는 번역 문제. 수학 기호를 현실 언어로 푼다."
                        },
                        {
                            "title": "[Math] 통계: 중앙값·이상값",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 이상값 추가·제거 시 평균·중앙값 변화",
                                "핵심 포인트: 중앙값은 이상값에 강하다"
                            ],
                            "intuition": "평균은 흔들리고 중앙값은 버틴다. 이 대비가 출제 포인트다."
                        },
                        {
                            "title": "[Math] 원주각·접선 기초",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 중심각과 원주각 관계",
                                "핵심 포인트: 원주각은 중심각의 절반"
                            ],
                            "intuition": "빈도는 낮지만 나오면 공식 하나로 끝난다."
                        },
                        {
                            "title": "[Math] 복소수·무리식 심화",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: i의 순환, 무리방정식 무연근",
                                "핵심 포인트: 고난도 모듈의 대수 변별 문항"
                            ],
                            "intuition": "고득점 변별용. 기본기가 탄탄하면 bonus 점수다."
                        },
                        {
                            "title": "[R&W] Information and Ideas: 세부 정보",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 지문 세부 내용 일치, 약 26% 비중 경향",
                                "핵심 포인트: 선지의 각 단어가 지문과 일치하는지 검증"
                            ],
                            "intuition": "R&W의 4분의 1. 꼼꼼한 대조가 전부다."
                        },
                        {
                            "title": "[R&W] Craft and Structure: 어휘·구조",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 문맥 어휘, 텍스트 구조·목적, 약 28% 비중 경향",
                                "핵심 포인트: 디지털에서 가장 큰 도메인"
                            ],
                            "intuition": "어휘와 구조가 R&W의 핵심이 됐다. 단어를 문맥에서 읽는다."
                        },
                        {
                            "title": "[R&W] Expression of Ideas: 전환·요약",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 전환어, 노트 종합 요약, 약 20% 비중 경향",
                                "핵심 포인트: 노트에서 목표에 맞는 정보만 선별"
                            ],
                            "intuition": "정보 선별 능력. 목표(claim)를 먼저 읽고 노트를 본다."
                        },
                        {
                            "title": "[R&W] Standard English Conventions: 문법",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 문장 경계·일치·시제, 약 26% 비중 경향",
                                "핵심 포인트: 규칙 암기형이라 안정적 득점원"
                            ],
                            "intuition": "문법은 규칙 게임. 정리한 자가 가져간다."
                        },
                        {
                            "title": "[R&W] Main Idea (단문)",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 25~150단어 지문의 요지",
                                "핵심 포인트: 첫문장·마지막 문장, 반복 키워드"
                            ],
                            "intuition": "짧은 글의 요지는 더 선명하다. 주제문을 놓치지 말자."
                        },
                        {
                            "title": "[R&W] Cross-Text: 주장 비교",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: Text 1과 Text 2의 관계, 반박·동의 지점",
                                "핵심 포인트: 각 텍스트 주장 요약 후 관계 판별"
                            ],
                            "intuition": "두 글을 한 줄씩 요약하면 관계는 자명해진다."
                        },
                        {
                            "title": "[R&W] Boundaries 심화",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 콜론·대시·세미콜론 복합",
                                "핵심 포인트: 독립절 판별 + 구두점별 용법"
                            ],
                            "intuition": "구두점은 문장의 교통정리. 규칙대로만 하면 된다."
                        },
                        {
                            "title": "[R&W] 소유격·아포스트로피",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: its/it's, their/they're, 복수 소유격",
                                "핵심 포인트: 아포스트로피는 생략 또는 소유 표시"
                            ],
                            "intuition": "its와 it's 구분은 기본 중의 기본. 여기서 틀리면 안 된다."
                        },
                        {
                            "title": "[R&W] 수사학적 종합",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 노트를 목표 주장에 맞게 종합",
                                "핵심 포인트: 목표 문장 그대로 베끼지 말고 관련 정보로 뒷받침"
                            ],
                            "intuition": "요약이 아니라 선별이다. 목표에 필요한 것만 고른다."
                        },
                        {
                            "title": "[R&W] 고난도 어휘 추론",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 추상 학술 어휘의 미묘한 뉘앙스",
                                "핵심 포인트: 논리 구조로 의미 좁히기"
                            ],
                            "intuition": "모르는 단어도 문장의 논리로 뜻을 좁힐 수 있다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: Bluebook과 Desmos",
                                "difficulty": "easy",
                                "question": "2024년 미국 디지털 SAT에 대한 설명으로 올바른 것은?",
                                "options": [
                                    "Bluebook 앱으로 응시하며 Desmos 그래핑 계산기가 내장되어 있다",
                                    "종이 시험지로 응시하며 계산기 사용이 전면 금지된다",
                                    "Essay 작성이 필수로 부활했다",
                                    "시험 시간은 3시간으로 paper와 동일하다"
                                ],
                                "answer": "Bluebook 앱으로 응시하며 Desmos 그래핑 계산기가 내장되어 있다",
                                "explanation": "2024년 3월부터 미국 SAT는 Bluebook 앱 기반 디지털 시험으로 전환되었다. 시험 화면에는 Desmos 그래핑 계산기가 내장되어 있고, Math 전 문항에서 계산기 사용이 허용된다. 참고 공식 시트도 화면에서 제공된다. 종이 시험지·계산기 금지·Essay 부활·3시간 유지는 모두 paper 시절의 이야기이거나 사실이 아니다. 디지털 환경의 의미를 정확히 아는 것이 중요하다. Desmos는 단순 계산을 넘어 함수 그래프를 그려 교점·근·최댓값을 시각적으로 확인할 수 있는 강력한 도구이므로, 평소 연습부터 Desmos 활용을 병행해야 실전에서 무기가 된다."
                            },
                            {
                                "title": "자가체크 2: 지수 모델 해석",
                                "difficulty": "medium",
                                "question": "박테리아 개체수 모델 P = 500(1.2)^t (t는 시간 단위) 에서 1.2가 의미하는 것은?",
                                "options": [
                                    "단위 시간당 20% 증가율",
                                    "초기 개체수 120마리",
                                    "20시간 후 개체수",
                                    "시간당 120마리씩 증가"
                                ],
                                "answer": "단위 시간당 20% 증가율",
                                "explanation": "지수 모델 y = ab^x에서 a는 초기값, b는 단위 구간당 변화 배율이다. P = 500(1.2)^t에서 a = 500이 초기 개체수이고, b = 1.2는 매 단위 시간마다 개체수가 1.2배가 됨을 뜻한다. 1.2배는 곧 20% 증가와 같다. 두 번째 선지는 초기값 500을 잘못 읽은 것이고, 세 번째 선지는 t = 20을 대입한 값에 대한 설명이 아니다. 네 번째 선지는 지수 증가를 선형 증가(매시간 120마리씩)로 오해한 것으로, 지수와 선형의 구분이 안 되면 틀리는 대표 함정이다. 디지털 SAT의 지수 모델 문항은 식의 각 요소가 현실에서 무엇을 뜻하는지 묻는 경향이 강하다."
                            },
                            {
                                "title": "자가체크 3: 전환어 선택",
                                "difficulty": "medium",
                                "question": "빈칸: 'The new policy reduced costs. _____, it improved employee satisfaction.' 가장 적절한 전환어는?",
                                "options": [
                                    "Moreover",
                                    "However",
                                    "Nevertheless",
                                    "Instead"
                                ],
                                "answer": "Moreover",
                                "explanation": "앞 문장은 비용 절감이라는 긍정적 결과, 뒷문장은 직원 만족도 향상이라는 또 다른 긍정적 결과이다. 두 문장은 대조가 아니라 추가·나열 관계이므로 Moreover(게다가)가 가장 적절하다. However·Nevertheless·Instead는 모두 대조·반전의 전환어로, 앞뒤 내용이 반대 방향일 때 쓴다. 전환어 문항의 정석 풀이는 앞뒤 문장의 논리 관계를 먼저 말로 설명해보는 것이다. 여기서는 '좋은 점 하나 더'라는 추가 관계이므로 Moreover, Furthermore, In addition 같은 추가형 전환어가 답이 된다. 디지털 R&W의 Expression of Ideas 도메인에서 전환어는 꾸준히 출제되는 경향이 있다."
                            }
                        ]
                    }
                },
                {
                    "title": "2025: 디지털 정착기 · 적응형 공략의 해",
                    "insight": "2025년은 디지털 SAT가 완전히 정착된 해다. Bluebook 공식 연습 세트가 확충되고, 적응형 모듈 패턴에 대한 응시 경험과 분석이 축적됐다. 출제 경향은 안정화 단계에 들어섰다. Math에서는 일차·이차·지수 함수 응용, 통계 추론, 삼각비 기본형이 꾸준히 출제되는 경향이 확인됐다. R&W에서는 Main Idea·Inference, Boundaries(구두점), Transitions가 고빈도 영역으로 자리 잡았다. 고득점 변별은 모듈 2 고난이도의 다단계 대수와 함정 선지에서 걸리는 양상이다. 이 해의 교훈은 명확하다. 모듈 1의 정확도가 곧 점수 상한을 정한다.",
                    "topics": [
                        "디지털 정착: Bluebook 연습 확충, 적응형 패턴 분석 축적",
                        "Math TOP: 함수 3형제(일차·이차·지수), 통계 추론, Desmos 검증 습관",
                        "R&W TOP: Main Idea·Inference·Boundaries·Transitions 고빈도 굳히기",
                        "전략 포인트: 모듈 1 정확도 = 점수 상한, 고난도 모듈 2 대비 다단계 대수"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 일차함수 맥락 해석",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: y=mx+b에서 m(변화율)·b(초기값)의 현실 의미",
                                "핵심 포인트: 단위를 붙여 읽으면 함정이 보인다"
                            ],
                            "intuition": "기울기에 단위를 붙이는 순간 문제가 쉬워진다."
                        },
                        {
                            "title": "[Math] 이차식 인수분해 고속화",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: ax^2+bx+c 인수분해, 공통인수 먼저",
                                "핵심 포인트: 곱해서 c, 더해서 b 되는 두 수 찾기"
                            ],
                            "intuition": "인수분해 속도가 대수 전체의 속도를 정한다."
                        },
                        {
                            "title": "[Math] 지수 vs 선형 구분",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 일정량씩 증가(선형) vs 일정 비율씩 증가(지수)",
                                "핵심 포인트: 표에서 차분 일정→선형, 비율 일정→지수"
                            ],
                            "intuition": "표의 숫자 패턴이 모델을 정한다. 차분인가 비율인가."
                        },
                        {
                            "title": "[Math] 연립방정식 해법 선택",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 대입·가감·그래프 중 빠른 방법",
                                "핵심 포인트: 계수가 간단한 문자부터 공략"
                            ],
                            "intuition": "푸는 방법이 세 가지면 가장 짧은 것을 고른다."
                        },
                        {
                            "title": "[Math] 통계 추론 심화",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 신뢰구간 직관, 표본 크기 효과",
                                "핵심 포인트: 표본이 클수록 추정이 안정적"
                            ],
                            "intuition": "표본이 크면 운이 개입할 여지가 줄어든다."
                        },
                        {
                            "title": "[Math] 확률: 표 읽기",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 2원 분할표 조건부 확률",
                                "핵심 포인트: 분모는 조건에 해당하는 행·열 전체"
                            ],
                            "intuition": "조건부 확률의 분모는 '조건을 만족하는 전체'다."
                        },
                        {
                            "title": "[Math] 삼각비 실생활",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 앙각·부각, 그림자·높이",
                                "핵심 포인트: 직각삼각형 그리고 변에 이름 붙이기"
                            ],
                            "intuition": "그림을 그리는 순간 문제의 절반이 풀린다."
                        },
                        {
                            "title": "[Math] 다단계 대수 (고난도)",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 치환·정리 후 이차방정식으로 귀결",
                                "핵심 포인트: 복잡한 식에서 반복 패턴을 찾아 치환"
                            ],
                            "intuition": "어려운 대수는 패턴 찾기와 치환의 게임이다."
                        },
                        {
                            "title": "[Math] 함수 변환",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 평행이동·대칭이동 후 식",
                                "핵심 포인트: x에 더하면 왼쪽, y에 더하면 위쪽"
                            ],
                            "intuition": "그래프 이동은 부호가 반대로 느껴진다. 직접 대입해 확인하자."
                        },
                        {
                            "title": "[Math] 유리함수 점근선 기초",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 정의역 제외점, 점근선 직관",
                                "핵심 포인트: 분모가 0이 되는 x는 정의역 제외"
                            ],
                            "intuition": "분모가 0이면 안 된다. 이 한 줄이 전부다."
                        },
                        {
                            "title": "[R&W] Main Idea 굳히기",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 단문 지문의 중심 주장",
                                "핵심 포인트: 지나치게 좁거나 넓은 선지 제거"
                            ],
                            "intuition": "요지는 지문의 무게중심이다. 치우친 선지는 버린다."
                        },
                        {
                            "title": "[R&W] Inference 함정 회피",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 논리적 귀결, 과한 주장 선지",
                                "핵심 포인트: 가장 약한 주장=가장 안전한 답"
                            ],
                            "intuition": "추론 문제에서 강한 주장은 대개 함정이다."
                        },
                        {
                            "title": "[R&W] 어휘: 학술어 뉘앙스",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 빈칸·밑줄 어휘의 문맥 의미",
                                "핵심 포인트: 대조·인과 신호어로 의미 범위 좁히기"
                            ],
                            "intuition": "신호어가 뜻을 정한다. however 뒤를 주목하자."
                        },
                        {
                            "title": "[R&W] 구조: 전체 설계 파악",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 글의 전개 방식(문제-해결, 주장-반박)",
                                "핵심 포인트: 각 부분의 기능을 한 단어로"
                            ],
                            "intuition": "글의 설계도를 그리면 문제가 쉬워진다."
                        },
                        {
                            "title": "[R&W] 목적: 왜 이 문장인가",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 특정 문장의 수사적 기능",
                                "핵심 포인트: 예시·양보·반박·강조 중 선택"
                            ],
                            "intuition": "문장에게 역할을 물어보자. 이 문장의 직업은 무엇인가."
                        },
                        {
                            "title": "[R&W] Boundaries: 복합 구두점",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 세미콜론·콜론·대시 종합",
                                "핵심 포인트: 독립절 경계 먼저 긋기"
                            ],
                            "intuition": "경계를 그으면 구두점은 저절로 정해진다."
                        },
                        {
                            "title": "[R&W] 일치: 수식어 걷어내기",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주어-동사·대명사 일치",
                                "핵심 포인트: 전치사구·관계절 괄호 처리"
                            ],
                            "intuition": "진짜 주어는 수식어 뒤에 숨어 있다."
                        },
                        {
                            "title": "[R&W] Transitions: 논리 관계",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 빈칸 전환어, 문장 순서",
                                "핵심 포인트: 관계를 말로 풀고 전환어 매칭"
                            ],
                            "intuition": "논리를 말로 설명할 수 있으면 답은 보인다."
                        },
                        {
                            "title": "[R&W] 노트 종합 (Rhetorical Synthesis)",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 불릿 노트로 목표 주장 뒷받침",
                                "핵심 포인트: 목표에 직접 관련된 노트만 선별"
                            ],
                            "intuition": "목표가 필터다. 관련 없는 노트는 버린다."
                        },
                        {
                            "title": "[R&W] 이중 지문 미묘한 차이",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 두 텍스트의 입장 차이·공통 전제",
                                "핵심 포인트: 공통점과 차이점을 분리해 기술"
                            ],
                            "intuition": "두 글의 공통 전제를 찾으면 차이가 선명해진다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 선형 vs 지수",
                                "difficulty": "medium",
                                "question": "표: x=0→y=3, x=1→y=6, x=2→y=12, x=3→y=24. 이 관계를 가장 잘 설명하는 모델은?",
                                "options": [
                                    "지수 모델 (매번 2배)",
                                    "선형 모델 (매번 +3)",
                                    "이차 모델",
                                    "반비례 모델"
                                ],
                                "answer": "지수 모델 (매번 2배)",
                                "explanation": "y값의 변화를 보면 3→6→12→24로 매번 2배씩 곱해진다. 일정한 양이 더해지는 것이 아니라 일정한 비율이 곱해지므로 지수 모델이다. 선형 모델이라면 차분이 일정해야 하는데 차분은 3, 6, 12로 일정하지 않다. 표에서 차분이 일정하면 선형(일차함수), 비율이 일정하면 지수라는 판별법은 디지털 SAT 함수 유형의 핵심 스킬이다. 지수 모델의 식은 y = 3(2)^x가 된다. 실생활 맥락에서는 일정 금액씩 증가하면 선형, 일정 퍼센트씩 증가하면 지수로 연결된다. Desmos에 표의 점을 찍어보면 곡선 형태가 지수임을 시각적으로도 확인할 수 있어 검산에 유용하다."
                            },
                            {
                                "title": "자가체크 2: 모듈 1 전략",
                                "difficulty": "easy",
                                "question": "적응형 SAT에서 모듈 1을 풀 때 가장 중요한 것은?",
                                "options": [
                                    "쉬운 문제의 실수를 없애 정확도를 확보하는 것",
                                    "어려운 문제에 시간을 많이 쓰는 것",
                                    "모듈 1을 최대한 빨리 끝내는 것",
                                    "모듈 2 문제를 미리 예상하는 것"
                                ],
                                "answer": "쉬운 문제의 실수를 없애 정확도를 확보하는 것",
                                "explanation": "2단계 적응형에서 모듈 2의 난이도는 모듈 1의 성적에 따라 정해진다. 모듈 1에서 쉬운 문제를 실수로 틀리면 하위 난이도 모듈로 배정되어 고득점이 구조적으로 어려워진다. 따라서 모듈 1의 최우선 목표는 정확도이다. 어려운 문제에 시간을 쏟다가 쉬운 문제를 틀리는 것은 최악의 시나리오이고, 빨리 끝내는 것은 정확도를 희생한다. 모듈 2를 미리 예상할 수는 없다. 실전 전략은 모듈 1의 모든 문제를 침착하게 풀고, 남는 시간으로 검산하는 것이다. 정확도가 곧 점수 상한을 정한다. 쉬운 문제 한 개의 실수가 고난도 모듈 2행 티켓을 날릴 수 있다는 점을 항상 기억하자."
                            },
                            {
                                "title": "자가체크 3: 대명사 일치",
                                "difficulty": "medium",
                                "question": "빈칸: 'Each of the students submitted _____ assignment on time.'",
                                "options": [
                                    "his or her",
                                    "their",
                                    "its",
                                    "there"
                                ],
                                "answer": "his or her",
                                "explanation": "주어는 Each로 단수이다. of the students는 전치사구로 주어의 수를 바꾸지 않는다. 따라서 단수 대명사가 필요하고, 성별이 특정되지 않았으므로 his or her가 정답이다. their는 복수 대명사로 단수 주어와 일치하지 않는다. SAT는 전통적으로 each·every·either·neither 같은 단수 주어를 복수 대명사와 짝지은 선지를 함정으로 낸다. its는 사물·동물용, there는 장소 부사로 문법적으로 맞지 않다. 주어-동사·대명사 일치는 Standard English Conventions의 핵심으로, 수식어를 걷어내고 진짜 주어를 찾는 훈련이 필수이다."
                            }
                        ]
                    }
                },
                {
                    "title": "2026: 최신 트렌드 · 실전 완성",
                    "insight": "2026년 현재 디지털 SAT는 3년차에 접어들며 문항 은행이 확대되고 출제 경향이 안정됐다. 최신 트렌드로는 실생활·과학·사회과학 소재의 맥락 문제 지속, Desmos 활용형 그래프 해석 문항, R&W의 cross-text connections와 데이터 근거 문항이 꼽힌다. College Board는 문제 은행 순환과 부정행위 방지를 강화하는 추세다. 학습 포인트는 개념 이해와 풀이 속도의 병행, 그리고 적응형 대비 모듈 1 정확도 확보다. 이 섹션의 2020~2025년 흐름을 관통하는 결론은 하나다. 형식이 바뀌어도 필수 개념의 명단은 거의 바뀌지 않았다.",
                    "topics": [
                        "2026년 현재: 문항 은행 확대, 출제 경향 안정화, 부정행위 방지 강화",
                        "Math TOP: 함수 응용·데이터 해석·Desmos 검증의 삼각 완성",
                        "R&W TOP: 근거·어휘·문법 3축 + 이중 지문·노트 종합 대비",
                        "최종 전략: 필수 개념 무실수 + 모듈 1 정확도 + 시간 배분"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] 함수 응용 종합",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 일차·이차·지수 함수의 실생활 문제",
                                "핵심 포인트: 모델 식 세우기→값 구하기→의미 해석의 3단계"
                            ],
                            "intuition": "함수 문제는 3단계 프로세스다. 식, 계산, 해석."
                        },
                        {
                            "title": "[Math] 이차방정식 실전",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 근 구하기·판별식·그래프 연결",
                                "핵심 포인트: 인수분해→근의 공식→Desmos 검증"
                            ],
                            "intuition": "이차방정식은 도구 상자다. 상황에 맞는 도구를 꺼낸다."
                        },
                        {
                            "title": "[Math] 데이터 해석 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 표·그래프에서 결론 도출",
                                "핵심 포인트: 묻는 것만 답하기, 과잉 해석 금지"
                            ],
                            "intuition": "데이터 문제는 묻는 것만 본다. 나머지는 노이즈다."
                        },
                        {
                            "title": "[Math] 비율·퍼센트 함정 회피",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 연속 증감, 기준량 전환",
                                "핵심 포인트: 기준량이 바뀌는 순간을 포착"
                            ],
                            "intuition": "퍼센트 함정의 정체는 바뀌는 기준량이다."
                        },
                        {
                            "title": "[Math] 기하: 공식 시트 활용",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 원·삼각형·부피, 라디안",
                                "핵심 포인트: 공식은 시트에서, 적용 판단이 실력"
                            ],
                            "intuition": "외울 것과 꺼내 쓸 것을 구분하자."
                        },
                        {
                            "title": "[Math] 삼각비·특수각",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 직각삼각형 변·각, 여각 관계",
                                "핵심 포인트: SOH-CAH-TOA + 30°·45°·60°"
                            ],
                            "intuition": "삼각비는 직각삼각형 그리기부터 시작이다."
                        },
                        {
                            "title": "[Math] 통계: 분포 읽기",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 히스토그램·박스플롯 해석",
                                "핵심 포인트: 중심·퍼짐·치우침 3요소"
                            ],
                            "intuition": "분포 그래프는 3가지만 읽는다. 중심, 퍼짐, 치우침."
                        },
                        {
                            "title": "[Math] 고난도 대수 변별",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 치환·정리·무연근, 다단계 식",
                                "핵심 포인트: 모듈 2 고난이도 대비, 침착한 단계 분해"
                            ],
                            "intuition": "어려운 문제는 쉬운 단계들의 연결이다."
                        },
                        {
                            "title": "[Math] 수열·패턴",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 등차·등비 일반항, 패턴 추론",
                                "핵심 포인트: 함수 관점으로 보기"
                            ],
                            "intuition": "수열은 이산 함수다. 같은 눈으로 본다."
                        },
                        {
                            "title": "[Math] Desmos 검증 루틴",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 모든 함수·방정식 문제의 검산",
                                "핵심 포인트: 식 입력→그래프→교점·근 확인"
                            ],
                            "intuition": "Desmos는 두 번째 풀이자다. 검산 도구로 쓰자."
                        },
                        {
                            "title": "[R&W] 근거 선택 실전",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 텍스트·데이터 근거",
                                "핵심 포인트: 주장 압축→직접 지지 선지"
                            ],
                            "intuition": "근거는 주장의 그림자다. 딱 붙어 있어야 한다."
                        },
                        {
                            "title": "[R&W] 어휘 실전",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 문맥 어휘, 빈칸",
                                "핵심 포인트: 논리 신호어→의미 범위→대입"
                            ],
                            "intuition": "어휘 문제는 논리 문제다."
                        },
                        {
                            "title": "[R&W] 추론 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 논리적 귀결",
                                "핵심 포인트: 약한 주장 선택, 지문 밖 금지"
                            ],
                            "intuition": "겸손한 답이 정답이다."
                        },
                        {
                            "title": "[R&W] 구조·목적 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 문장 기능, 글의 전개",
                                "핵심 포인트: 전체 설계 속 부분의 역할"
                            ],
                            "intuition": "부분은 전체를 위해 존재한다."
                        },
                        {
                            "title": "[R&W] 이중 지문 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 관계·반박 지점",
                                "핵심 포인트: 각 주장 요약→관계 판별"
                            ],
                            "intuition": "요약이 먼저, 관계는 그 다음이다."
                        },
                        {
                            "title": "[R&W] 문장 경계 실전",
                            "problem": "출제 빈도: ★★★★★ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 구두점 종합",
                                "핵심 포인트: 독립절 판별이 90%"
                            ],
                            "intuition": "경계만 그으면 답은 정해져 있다."
                        },
                        {
                            "title": "[R&W] 일치·시제 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주어-동사·대명사·시제",
                                "핵심 포인트: 수식어 제거→본질 노출"
                            ],
                            "intuition": "문법은 걷어내기의 기술이다."
                        },
                        {
                            "title": "[R&W] 전환어 실전",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 빈칸·순서",
                                "핵심 포인트: 관계 말하기→전환어 매칭"
                            ],
                            "intuition": "말로 풀리면 글로도 풀린다."
                        },
                        {
                            "title": "[R&W] 노트 종합 실전",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 목표 주장 뒷받침",
                                "핵심 포인트: 목표 필터→관련 노트 선별"
                            ],
                            "intuition": "목표가 기준이다. 나머지는 버린다."
                        },
                        {
                            "title": "[R&W] 고난도 지문 변별",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 추상 학술 지문의 미묘한 논증",
                                "핵심 포인트: 논증 구조도 그리기"
                            ],
                            "intuition": "어려운 지문은 구조도로 이긴다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 이차함수 최댓값",
                                "difficulty": "medium",
                                "question": "수익 모델 R = -2x^2 + 40x - 100 (x는 판매량)에서 최대 수익과 그때의 판매량은?",
                                "options": [
                                    "최대 100, x=10",
                                    "최대 200, x=20",
                                    "최대 100, x=20",
                                    "최대 300, x=10"
                                ],
                                "answer": "최대 100, x=10",
                                "explanation": "이차함수 R = -2x^2 + 40x - 100에서 a = -2 < 0이므로 아래로 볼록한 포물선이고 최댓값은 꼭짓점에서 나온다. 꼭짓점의 x좌표는 -b/2a = -40/(2·-2) = 10이다. x = 10을 대입하면 R = -2(100) + 400 - 100 = -200 + 400 - 100 = 100이다. 따라서 판매량 10에서 최대 수익 100이다. Desmos에 식을 입력하면 꼭짓점 (10, 100)이 바로 확인된다. 이차함수 최적화는 실생활 맥락(수익·넓이·궤적)의 단골 유형으로, a의 부호로 최대·최소를 먼저 판단하고 꼭짓점을 구하는 것이 정석이다."
                            },
                            {
                                "title": "자가체크 2: 데이터 근거와 함정",
                                "difficulty": "medium",
                                "question": "그래프: 2020~2025년 전기차 판매량 막대그래프 (매년 증가, 2024→2025 증가폭이 가장 큼). 주장: '전기차 판매량은 매년 증가했으며, 2025년의 증가폭이 가장 컸다.' 주장을 뒷받침하지 못하는 선지는?",
                                "options": [
                                    "2023년 판매량이 2022년보다 감소했다",
                                    "2025년 막대가 2024년 막대보다 가장 많이 길어졌다",
                                    "모든 연도의 막대가 전년보다 높다",
                                    "2024→2025 구간 증가량이 최대이다"
                                ],
                                "answer": "2023년 판매량이 2022년보다 감소했다",
                                "explanation": "주장은 두 가지(매년 증가, 2025년 증가폭 최대)를 포함한다. 첫 번째 선지는 2023년 판매량이 감소했다고 말하므로 '매년 증가'와 직접 모순되어 주장을 뒷받침하지 못한다. 나머지 선지들은 주장의 각 부분을 지지한다. Quantitative Evidence 문항에서는 주장을 뒷받침하는 선지를 고르기도 하고, 뒷받침하지 못하는 선지를 고르기도 하므로 질문의 방향(지지 vs 반박)을 정확히 읽어야 한다. 그래프 문제를 풀 때는 축·단위·구간을 먼저 확인하고, 주장의 수치적 내용과 데이터를 하나씩 대조하는 습관이 함정을 피하는 길이다."
                            },
                            {
                                "title": "자가체크 3: 고난도 어휘 추론",
                                "difficulty": "hard",
                                "question": "지문: 'The theory was initially dismissed as _____, but subsequent experiments confirmed its predictions.' 빈칸에 가장 적절한 것은?",
                                "options": [
                                    "implausible",
                                    "innovative",
                                    "controversial",
                                    "complex"
                                ],
                                "answer": "implausible",
                                "explanation": "but 뒤에 후속 실험이 그 이론의 예측을 확인했다고 나오므로, 빈칸에는 처음에 이론이 받았던 부정적 평가가 들어가야 한다. implausible(그럴듯하지 않은)은 이론이 처음에 무시·기각된 이유를 정확히 설명한다. innovative(혁신적인)는 긍정적이라 but의 대조와 맞지 않고, controversial(논란의)은 중립적이라 dismissed와 어울리지 않으며, complex(복잡한)는 기각의 이유가 되기 어렵다. 고난도 어휘 문항은 but·however 같은 대조 신호어가 답의 방향을 정해준다. 신호어 뒤의 긍정·부정을 먼저 파악하고, 그 반대 방향의 어휘를 고르는 것이 정석이다."
                            }
                        ]
                    }
                },
                {
                    "title": "디지털 전환 전후 비교 & 우선순위 학습 가이드",
                    "insight": "paper(2020~2023)와 digital(2024~2026)을 가르는 핵심 변화는 다섯 가지다. 첫째, 시험 시간이 3시간에서 2시간 14분으로 단축됐다. 둘째, 500~750단어 긴 지문이 25~150단어 단문으로 바뀌고 문항당 1지문 독립형이 됐다. 셋째, 계산기 금지 섹션이 폐지되고 전 문항 계산기가 허용되며 Desmos가 내장됐다. 넷째, 고정형에서 2단계 적응형으로 바뀌어 모듈 1의 정확도가 점수 상한을 정한다. 다섯째, Essay가 2021년 6월 폐지되며 R&W가 독해·문법 통합형으로 정리됐다. 그러나 개념의 뼈대는 그대로다. 아래 필수 리스트가 2020년에도, 2026년에도 통하는 이유다.",
                    "topics": [
                        "1단계(기초 체력): 필수 Math 10 + 필수 R&W 10 — 무실수 목표",
                        "2단계(안정권): 권장 Math 4 + 권장 R&W 4 — 자주 출제 영역 커버",
                        "3단계(고득점): 심화 Math 3 + 심화 R&W 3 — 모듈 2 고난이도 대비",
                        "4단계(실전): Bluebook 모의고사 + Desmos 검증 루틴 + 모듈 1 정확도 훈련"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[필수 Math 1] 일차방정식·부등식과 실생활 응용",
                            "problem": "우선순위: 1위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 맥락 속 식 세우기, 부등호 방향",
                                "핵심 포인트: 매 시험 출제되는 대수의 기본기"
                            ],
                            "intuition": "SAT 수학의 알파벳. 여기서 틀리면 뒤가 다 흔들린다."
                        },
                        {
                            "title": "[필수 Math 2] 연립방정식과 해의 개수",
                            "problem": "우선순위: 2위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 해법 선택, 기울기·절편으로 해의 개수 판별",
                                "핵심 포인트: 대입·가감·그래프 중 최단 경로"
                            ],
                            "intuition": "기울기가 말해준다. 그래프 없이도 판별 가능하다."
                        },
                        {
                            "title": "[필수 Math 3] 일차함수 기울기·절편의 의미",
                            "problem": "우선순위: 3위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: y=mx+b의 m·b가 현실에서 뜻하는 것",
                                "핵심 포인트: 기울기=변화율, 절편=초기값, 단위 붙여 읽기"
                            ],
                            "intuition": "단위를 붙이는 순간 함정이 보인다."
                        },
                        {
                            "title": "[필수 Math 4] 이차방정식·이차함수",
                            "problem": "우선순위: 4위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 인수분해·근의 공식·판별식, 꼭짓점·최댓값",
                                "핵심 포인트: Advanced Math의 중심, 고난도 모듈 변별 구간"
                            ],
                            "intuition": "푸는 법이 세 가지. 상황에 맞는 도구를 고르자."
                        },
                        {
                            "title": "[필수 Math 5] 지수함수와 지수 모델",
                            "problem": "우선순위: 5위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: y=ab^x 모델 해석, 선형과 구분",
                                "핵심 포인트: a는 초기값, b는 변화 배율"
                            ],
                            "intuition": "모델 문제는 번역 문제. 기호를 현실 언어로 푼다."
                        },
                        {
                            "title": "[필수 Math 6] 비율·백분율·비례식",
                            "problem": "우선순위: 6위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 증감률, 연속 할인, 기준량 전환 함정",
                                "핵심 포인트: 퍼센트는 곱셈, 기준량 변화를 포착"
                            ],
                            "intuition": "기준량이 바뀌는 순간이 함정의 정체다."
                        },
                        {
                            "title": "[필수 Math 7] 다항식 연산·인수분해",
                            "problem": "우선순위: 7위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 전개·인수분해 패턴, 공통인수",
                                "핵심 포인트: 속도가 대수 전체의 속도를 정한다"
                            ],
                            "intuition": "인수분해는 모든 이차 문제의 열쇠다."
                        },
                        {
                            "title": "[필수 Math 8] 함수 표기·그래프 해석",
                            "problem": "우선순위: 8위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: f(x) 값, 정의역·치역, 평행이동",
                                "핵심 포인트: 대수 문제의 공통 언어"
                            ],
                            "intuition": "함수 표기법에 익숙해지는 것이 모든 대수의 출발점이다."
                        },
                        {
                            "title": "[필수 Math 9] 통계 기초: 중심·퍼짐",
                            "problem": "우선순위: 9위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 평균·중앙값·이상값 영향, 분포 읽기",
                                "핵심 포인트: 계산보다 해석, 이상값은 평균을 끌어당긴다"
                            ],
                            "intuition": "평균은 흔들리고 중앙값은 버틴다."
                        },
                        {
                            "title": "[필수 Math 10] 기하 기초: 삼각형·원",
                            "problem": "우선순위: 10위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 피타고라스, 특수삼각형, 원의 둘레·넓이",
                                "핵심 포인트: 공식 시트 활용, 보조선과 그림"
                            ],
                            "intuition": "그림을 그리는 순간 절반이 풀린다."
                        },
                        {
                            "title": "[필수 R&W 1] Main Idea · 중심 주장",
                            "problem": "우선순위: 1위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 단문 지문의 요지·주장",
                                "핵심 포인트: 너무 좁거나 넓은 선지 제거"
                            ],
                            "intuition": "요지는 지문의 무게중심이다."
                        },
                        {
                            "title": "[필수 R&W 2] Textual Evidence · 텍스트 근거",
                            "problem": "우선순위: 2위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주장을 뒷받침하는 인용 선택",
                                "핵심 포인트: 주장 압축 후 직접 지지 선지 대조"
                            ],
                            "intuition": "근거는 주장의 그림자다."
                        },
                        {
                            "title": "[필수 R&W 3] Words in Context · 문맥 어휘",
                            "problem": "우선순위: 3위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 밑줄·빈칸 어휘의 문맥 의미",
                                "핵심 포인트: 논리 신호어로 의미 범위 좁히기"
                            ],
                            "intuition": "어휘 문제는 논리 문제다."
                        },
                        {
                            "title": "[필수 R&W 4] Inference · 추론",
                            "problem": "우선순위: 4위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 논리적 귀결",
                                "핵심 포인트: 가장 약한(안전한) 주장, 지문 밖 금지"
                            ],
                            "intuition": "겸손한 답이 정답이다."
                        },
                        {
                            "title": "[필수 R&W 5] Boundaries · 문장 경계",
                            "problem": "우선순위: 5위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 콤마 스플라이스, 세미콜론·콜론·대시",
                                "핵심 포인트: 독립절 판별이 90%"
                            ],
                            "intuition": "경계만 그으면 구두점은 정해져 있다."
                        },
                        {
                            "title": "[필수 R&W 6] Form, Structure, and Sense · 일치",
                            "problem": "우선순위: 6위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 주어-동사·대명사·시제 일치",
                                "핵심 포인트: 수식어 걷어내고 진짜 주어 노출"
                            ],
                            "intuition": "문법은 걷어내기의 기술이다."
                        },
                        {
                            "title": "[필수 R&W 7] 텍스트 구조·목적",
                            "problem": "우선순위: 7위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 문장·단락의 기능, 글의 전개 방식",
                                "핵심 포인트: 전체 설계 속 부분의 역할"
                            ],
                            "intuition": "부분은 전체를 위해 존재한다."
                        },
                        {
                            "title": "[필수 R&W 8] Quantitative Evidence · 데이터 근거",
                            "problem": "우선순위: 8위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 표·그래프 수치로 주장 검증",
                                "핵심 포인트: 축·단위 확인 후 수치 대조"
                            ],
                            "intuition": "숫자는 거짓말하지 않지만 축은 속일 수 있다."
                        },
                        {
                            "title": "[필수 R&W 9] Transitions · 전환어",
                            "problem": "우선순위: 9위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 빈칸 전환어, 논리 관계",
                                "핵심 포인트: 관계를 말로 풀고 전환어 매칭"
                            ],
                            "intuition": "말로 풀리면 글로도 풀린다."
                        },
                        {
                            "title": "[필수 R&W 10] Cross-Text Connections · 이중 지문",
                            "problem": "우선순위: 10위 | 중요도: 필수",
                            "steps": [
                                "대표 유형: 두 텍스트의 관계·반박 지점",
                                "핵심 포인트: 각 주장 요약 후 관계 판별"
                            ],
                            "intuition": "요약이 먼저, 관계는 그 다음이다."
                        },
                        {
                            "title": "[권장 Math 1] 확률: 표 읽기와 조건부",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 2원 분할표, 여사건",
                                "핵심 포인트: 분모는 조건을 만족하는 전체"
                            ],
                            "intuition": "SAT 확률은 표 읽기 문제에 가깝다."
                        },
                        {
                            "title": "[권장 Math 2] 삼각비와 실생활",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 앙각·부각, 직각삼각형 변·각",
                                "핵심 포인트: SOH-CAH-TOA, 그림 그리기"
                            ],
                            "intuition": "직각삼각형 하나면 풀린다."
                        },
                        {
                            "title": "[권장 Math 3] 산점도·추세선 해석",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 추세선 예측, 상관 방향·강도",
                                "핵심 포인트: 전체 흐름 읽기"
                            ],
                            "intuition": "점들의 이야기에 귀 기울이자."
                        },
                        {
                            "title": "[권장 Math 4] Desmos 검증 루틴",
                            "problem": "출제 빈도: ★★★★☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 함수·방정식 문제의 그래프 검산",
                                "핵심 포인트: 식 입력→교점·근·최댓값 확인"
                            ],
                            "intuition": "Desmos는 두 번째 풀이자다."
                        },
                        {
                            "title": "[권장 R&W 1] Rhetorical Synthesis · 노트 종합",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 불릿 노트로 목표 주장 뒷받침",
                                "핵심 포인트: 목표 필터로 관련 정보만 선별"
                            ],
                            "intuition": "목표가 기준이다. 나머지는 버린다."
                        },
                        {
                            "title": "[권장 R&W 2] 저자의 관점·어조",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 중립·비판·옹호 태도 판별",
                                "핵심 포인트: 평가 어휘 수집"
                            ],
                            "intuition": "어조는 단어에 숨어 있다."
                        },
                        {
                            "title": "[권장 R&W 3] 병렬 구조·간결성",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: and·or 연결 요소 형태 통일, 중복 제거",
                                "핵심 포인트: 리스트는 모양이 같아야 한다"
                            ],
                            "intuition": "같은 뜻이면 짧은 것이 답이다."
                        },
                        {
                            "title": "[권장 R&W 4] 인과관계 추적",
                            "problem": "출제 빈도: ★★★☆☆ | 중요도: 권장",
                            "steps": [
                                "대표 유형: 원인→결과 사슬, 상관과 인과 구분",
                                "핵심 포인트: 메커니즘 확인"
                            ],
                            "intuition": "함께 일어난다고 원인이 아니다."
                        },
                        {
                            "title": "[심화 Math 1] 다단계 대수·치환",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 복잡한 식의 패턴 치환, 무연근 검산",
                                "핵심 포인트: 모듈 2 고난이도 변별 대비"
                            ],
                            "intuition": "어려운 문제는 쉬운 단계들의 연결이다."
                        },
                        {
                            "title": "[심화 Math 2] 원의 방정식·원주각",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 완전제곱식 변형, 중심각과 원주각",
                                "핵심 포인트: 패턴이 고정된 bonus 영역"
                            ],
                            "intuition": "빈도는 낮지만 나오면 공식 하나로 끝난다."
                        },
                        {
                            "title": "[심화 Math 3] 복소수·무리식",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: i의 순환, 켤레복소수, 무리방정식",
                                "핵심 포인트: 고득점 변별용, 기본기 위에서 bonus"
                            ],
                            "intuition": "i^4=1 순환만 알면 되는 영역도 있다."
                        },
                        {
                            "title": "[심화 R&W 1] 고난도 학술 지문 논증",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 추상 지문의 미묘한 논증 구조",
                                "핵심 포인트: 논증 구조도 그리기"
                            ],
                            "intuition": "어려운 지문은 구조도로 이긴다."
                        },
                        {
                            "title": "[심화 R&W 2] 미묘한 어휘 뉘앙스",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 유사 어휘의 뉘앙스·강도 구분",
                                "핵심 포인트: 긍정·중립·부정 스펙트럼"
                            ],
                            "intuition": "동의어는 온도가 다르다."
                        },
                        {
                            "title": "[심화 R&W 3] 이중 지문의 공통 전제",
                            "problem": "출제 빈도: ★★☆☆☆ | 중요도: 심화",
                            "steps": [
                                "대표 유형: 두 텍스트가 공유하는 전제와 입장 차이",
                                "핵심 포인트: 공통점 분리 후 차이 기술"
                            ],
                            "intuition": "공통 전제를 찾으면 차이가 선명해진다."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "자가체크 1: 전환 전후 핵심 변화",
                                "difficulty": "easy",
                                "question": "디지털 전환 전후 비교로 올바른 것은?",
                                "options": [
                                    "시험 시간이 3시간에서 2시간 14분으로 단축됐다",
                                    "지문이 25단어에서 750단어로 길어졌다",
                                    "계산기 사용이 전면 금지됐다",
                                    "Essay가 부활해 필수화됐다"
                                ],
                                "answer": "시험 시간이 3시간에서 2시간 14분으로 단축됐다",
                                "explanation": "디지털 SAT의 핵심 변화 다섯 가지는 다음과 같다. 첫째, 시험 시간이 3시간에서 2시간 14분으로 단축됐다. 둘째, 500~750단어의 긴 지문이 25~150단어 단문으로 바뀌고 문항당 1지문 독립형이 됐다. 셋째, 계산기 금지 섹션이 폐지되고 Math 전 문항 계산기 사용이 허용되며 Desmos가 내장됐다. 넷째, 고정형에서 2단계 적응형으로 바뀌었다. 다섯째, Essay는 2021년 6월에 폐지됐다. 따라서 지문이 길어졌다·계산기 금지·Essay 부활은 모두 틀린 설명이다. 형식 변화를 정확히 아는 것은 학습 전략의 출발점이다."
                            },
                            {
                                "title": "자가체크 2: 우선순위 학습 순서",
                                "difficulty": "medium",
                                "question": "이 가이드의 학습 로드맵에 따르면 가장 먼저 완성해야 할 것은?",
                                "options": [
                                    "필수 등급 20개 개념의 무실수",
                                    "심화 등급의 고난도 대수",
                                    "paper 시절 기출 전량 풀이",
                                    "어휘집 5000단어 암기"
                                ],
                                "answer": "필수 등급 20개 개념의 무실수",
                                "explanation": "로드맵 1단계는 필수 Math 10개 + 필수 R&W 10개 개념의 무실수 완성이다. 필수 등급은 매 시험 출제되는 개념들이므로 여기서 점수를 잃으면 고득점이 구조적으로 불가능하다. 심화 등급은 모듈 2 고난이도 대비용으로 3단계에서 다룬다. paper 시절 기출은 개념별 훈련 재료로 유용하지만 전량 풀이가 목표는 아니다. 어휘집 암기보다 문맥 독해 훈련이 디지털 R&W에서 효율적이다. 학습 순서는 빈도와 중요도에 따라 정해야 하며, 필수를 먼저 탄탄히 한 뒤 권장·심화로 넓혀가는 것이 점수 대비 효율이 가장 높다. 필수 20개가 무실수 수준이 되면 모의고사로 실전 감각을 붙이는 4단계로 넘어가자."
                            },
                            {
                                "title": "자가체크 3: 적응형 실전 판단",
                                "difficulty": "hard",
                                "question": "모듈 1 Math를 풀던 중 15번 문제(다단계 대수)가 3분째 안 풀린다. 남은 시간은 10분, 남은 문제는 7개다. 최선의 판단은?",
                                "options": [
                                    "표시해두고 남은 7개를 먼저 정확히 푼 뒤 돌아온다",
                                    "풀릴 때까지 15번에 매달린다",
                                    "15번을 찍고 나머지도 빠르게 찍는다",
                                    "15번을 건너뛰고 다시 돌아오지 않는다"
                                ],
                                "answer": "표시해두고 남은 7개를 먼저 정확히 푼 뒤 돌아온다",
                                "explanation": "적응형에서 모듈 1의 정확도가 점수 상한을 정하므로, 풀 수 있는 문제의 실수를 없애는 것이 최우선이다. 어려운 한 문제에 매달리다 쉬운 문제들을 시간 부족으로 틀리거나 찍으면 모듈 1 성적이 떨어져 하위 난이도 모듈로 배정될 수 있다. 정석은 표시(mark) 기능을 활용해 일단 넘어가고, 남은 문제들을 정확히 푼 뒤 남는 시간에 돌아오는 것이다. 건너뛰고 돌아오지 않는 것은 고난도 모듈 2에서 나올 수 있는 점수를 버리는 선택이다. 시간 배분의 원칙은 쉬운 문제의 정확도 확보가 먼저, 어려운 문제는 나중에이다. 표시(mark) 기능을 적극 활용해 일단 넘어갔다가 돌아오는 습관이 적응형 시험의 핵심 스킬이다."
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
