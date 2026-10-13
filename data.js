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
                        { name: "1.1b: MP3 Justification Sentence Frames", url: "lesson:precalc:precalc-u1-1b" },
                        { name: "1.2: The Battle of Scale (Big-O)", url: "lesson:precalc:precalc-u1-2" },
                        { name: "1.2b: Complex Zeros & Conjugate Pairs", url: "lesson:precalc:precalc-u1-2b" },
                        { name: "1.3: Rational Dynamics (Holes)", url: "lesson:precalc:precalc-u1-3" },
                        { name: "1.3b: Slant Asymptotes & Polynomial Long Division", url: "lesson:precalc:precalc-u1-3b" },
                        { name: "1.3c: Rational Inequalities & Sign Charts", url: "lesson:precalc:precalc-u1-3c" },
                        { name: "1.4: AP Continuity Mastery", url: "lesson:precalc:precalc-u1-4" },
                        { name: "1.5: Function Models (Selection, Assumptions & Regression)", url: "lesson:precalc:precalc-u1-5" }
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
                        { name: "2.4: Model Validation (Residuals)", url: "lesson:precalc:precalc-u2-4" },
                        { name: "2.1b: Log Properties Drill (Expand & Condense)", url: "lesson:precalc:precalc-u2-1b" },
                        { name: "2.1c: Solving Exp & Log Equations (Finish Protocol)", url: "lesson:precalc:precalc-u2-1c" },
                        { name: "2.5: Inverses of Exponential & Log Functions", url: "lesson:precalc:precalc-u2-5" },
                        { name: "2.6: e, Continuous Compounding & Real-World Models", url: "lesson:precalc:precalc-u2-6" }
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
                        levels: [
                            {
                                level: 1,
                                title: "Semi-Log Base",
                                question: "Level 3 Mastery: If log(y) = 2x + 1, what is the base 'b' of the original exponential model y = a*b^x?",
                                options: ["b = 1", "b = 2", "b = 10^2", "b = e^2"],
                                answer: "b = 10^2",
                                explanation: "When log(y) is base 10 (common log), the slope of the linear form is log(b). So log(b) = 2 -> b = 10^2 = 100."
                            },
                            {
                                level: 2,
                                title: "S1: Expand",
                                question: "Expand: $\\log_4\\frac{\\sqrt[3]{x}}{y^2}$",
                                options: ["$\\frac{1}{3}\\log_4 x - 2\\log_4 y$", "$3\\log_4 x - 2\\log_4 y$", "$\\frac{\\log_4 x - \\log_4 y^2}{3}$", "$\\log_4\\sqrt[3]{x} - \\log_4 y^2$ cannot be split further"],
                                answer: "$\\frac{1}{3}\\log_4 x - 2\\log_4 y$",
                                explanation: "Rewrite the root first: $\\sqrt[3]{x} = x^{1/3}$. Then $\\log_4(x^{1/3}) - \\log_4(y^2) = \\frac{1}{3}\\log_4 x - 2\\log_4 y$. WRONG-ANSWER WATCH: $3\\log_4 x$ flips the fraction (the 3 belongs in the denominator, not multiplied). QUICK SELF-CHECK: every root becomes a fraction out front."
                            },
                            {
                                level: 3,
                                title: "S1: Condense",
                                question: "Condense to a single log: $\\frac{1}{2}\\log 5 + \\frac{1}{3}\\log 8 - \\log 2$",
                                options: ["$\\log\\sqrt{5}$", "$\\log\\frac{\\sqrt{5 \\cdot 8}}{2}$", "$\\frac{5}{6}\\log(5 + 8 - 2)$", "$\\log\\left(\\frac{5}{2} + \\frac{8}{3} - 2\\right)$"],
                                answer: "$\\log\\sqrt{5}$",
                                explanation: "Power property: $\\log\\sqrt{5} + \\log\\sqrt[3]{8} - \\log 2 = \\log\\frac{\\sqrt{5}\\cdot 2}{2} = \\log\\sqrt{5}$. WRONG-ANSWER WATCH: coefficients never add or subtract across terms -- $\\frac{1}{2}\\log 5 + \\frac{1}{3}\\log 8$ is NOT $\\frac{5}{6}\\log(13)$. QUICK SELF-CHECK: after condensing, count the logs -- exactly one must remain."
                            },
                            {
                                level: 4,
                                title: "S1: Legal Moves",
                                question: "Which of the following is a LEGAL logarithm move?",
                                options: ["$\\log_2(x+y) = \\log_2 x + \\log_2 y$", "$\\ln(ab) = \\ln a \\cdot \\ln b$", "$\\log_5\\frac{x}{y} = \\log_5 x - \\log_5 y$", "$\\log_3 x^2 = 2\\log_3 x$ for all real $x$"],
                                answer: "$\\log_5\\frac{x}{y} = \\log_5 x - \\log_5 y$",
                                explanation: "Only the quotient rule is legal here. WRONG-ANSWER WATCH: $\\log_3 x^2 = 2\\log_3 x$ fails for $x < 0$ (the right side is undefined there -- the true identity is $2\\log_3|x|$). QUICK SELF-CHECK: logs break products and quotients, never sums."
                            },
                            {
                                level: 5,
                                title: "S2: Extraneous Root",
                                question: "Solve: $\\log_2 x + \\log_2(x-2) = 3$",
                                options: ["$x = 4$", "$x = 4$ or $x = -2$", "$x = -2$", "No solution"],
                                answer: "$x = 4$",
                                explanation: "Condense: $\\log_2[x(x-2)] = 3$, so $x(x-2) = 8$, giving $x = 4$ or $x = -2$. But $x = -2$ makes $\\log_2 x$ undefined in the ORIGINAL equation -- reject it. WRONG-ANSWER WATCH: the condensed form $\\log_2[x(x-2)]$ hides the domain break; always check candidates in the original. QUICK SELF-CHECK: every log argument positive? If not, it is a ghost."
                            },
                            {
                                level: 6,
                                title: "S2: Two Bases",
                                question: "Solve: $5^{2x} = 3^{x+1}$",
                                options: ["$x = \\frac{\\ln 3}{2\\ln 5 - \\ln 3}$", "$x = \\frac{\\ln 3 + 1}{2\\ln 5}$", "$x = \\frac{\\log_5 3}{2}$", "$x = \\frac{\\ln 5}{\\ln 3}$"],
                                answer: "$x = \\frac{\\ln 3}{2\\ln 5 - \\ln 3}$",
                                explanation: "Take $\\ln$ of both sides: $2x\\ln 5 = (x+1)\\ln 3$. Collect $x$: $x(2\\ln 5 - \\ln 3) = \\ln 3$. WRONG-ANSWER WATCH: do not 'cancel' the bases -- $5^{2x} = 3^{x+1}$ does NOT imply $2x = x+1$. QUICK SELF-CHECK: different bases on each side always means take the log."
                            },
                            {
                                level: 7,
                                title: "S2: Base Discipline",
                                question: "In solving $\\log 3 + \\frac{1}{4}\\ln x = 2\\log 3$, what is the FIRST legal move?",
                                options: ["Combine into $\\log(3\\sqrt[4]{x}) = \\log 9$", "Rewrite $\\frac{1}{4}\\ln x$ as $\\ln\\sqrt[4]{x}$, then convert $\\log 3$ to $\\ln$ via change of base", "Divide both sides by $\\log 3$", "Replace $\\ln x$ with $\\log x$ directly"],
                                answer: "Rewrite $\\frac{1}{4}\\ln x$ as $\\ln\\sqrt[4]{x}$, then convert $\\log 3$ to $\\ln$ via change of base",
                                explanation: "$\\log$ is base 10 and $\\ln$ is base $e$ -- they may never be merged. Unify the bases FIRST (change of base), then condense. WRONG-ANSWER WATCH: $\\log 3 + \\ln\\sqrt[4]{x} = \\log 9$ silently merges two different bases -- automatic zero on that step. QUICK SELF-CHECK: one base per equation before condensing."
                            },
                            {
                                level: 8,
                                title: "S3: Inverse",
                                question: "Find the inverse of $f(x) = 3(2)^{x-1} + 4$",
                                options: ["$f^{-1}(x) = \\log_2\\frac{x-4}{3} + 1$", "$f^{-1}(x) = \\log_2\\frac{x-4}{3} - 1$", "$f^{-1}(x) = \\frac{\\log_2(x-4)}{3} + 1$", "$f^{-1}(x) = \\log_2(x-4) - 2$"],
                                answer: "$f^{-1}(x) = \\log_2\\frac{x-4}{3} + 1$",
                                explanation: "Swap: $x = 3(2)^{y-1} + 4$. Isolate the WHOLE exponential term first: $\\frac{x-4}{3} = 2^{y-1}$, then $y - 1 = \\log_2\\frac{x-4}{3}$. WRONG-ANSWER WATCH: converting to log form before dividing by 3 is impossible -- the coefficient is not inside the exponent. QUICK SELF-CHECK: algebra first, conversion second."
                            },
                            {
                                level: 9,
                                title: "S3: Verify Pair",
                                question: "Which pair are true inverses of each other?",
                                options: ["$f(x) = e^x + 1$, $g(x) = \\ln(x-1)$", "$f(x) = e^x + 1$, $g(x) = \\ln x - 1$", "$f(x) = e^x + 1$, $g(x) = \\ln(x+1)$", "$f(x) = e^{x+1}$, $g(x) = \\ln(x-1)$"],
                                answer: "$f(x) = e^x + 1$, $g(x) = \\ln(x-1)$",
                                explanation: "Compose one way: $f(g(x)) = e^{\\ln(x-1)} + 1 = (x-1) + 1 = x$. WRONG-ANSWER WATCH: $\\ln x - 1$ looks close but $e^{\\ln x - 1} + 1 = \\frac{x}{e} + 1 \\neq x$ -- the $-1$ must be INSIDE the log argument. QUICK SELF-CHECK: one composition, fully simplified, must return exactly $x$."
                            },
                            {
                                level: 10,
                                title: "S4: Compounding",
                                question: "$8000 is invested at 6% compounded CONTINUOUSLY for 10 years. What is the value?",
                                options: ["About $14,577", "About $14,327", "About $12,800", "$8000e^{6}$"],
                                answer: "About $14,577",
                                explanation: "$A = 8000e^{0.06\\cdot 10} = 8000e^{0.6} \\approx 8000(1.8221) \\approx 14577$. WRONG-ANSWER WATCH: $14,327 is annual compounding $8000(1.06)^{10}$ -- continuous compounding always beats it. QUICK SELF-CHECK: the exponent must be $rt$ as a decimal ($0.6$, not $6$)."
                            },
                            {
                                level: 11,
                                title: "S4: Half-Life",
                                question: "A sample decays as $m(t) = 50e^{-0.08t}$ grams. What is its half-life?",
                                options: ["About 8.7 years", "About 12.5 years", "About 6.25 years", "0.693 years"],
                                answer: "About 8.7 years",
                                explanation: "Set $25 = 50e^{-0.08t}$: $e^{-0.08t} = 0.5$, so $-0.08t = \\ln 0.5 = -\\ln 2$, giving $t = \\frac{\\ln 2}{0.08} \\approx 8.7$ years. WRONG-ANSWER WATCH: 0.693 years confuses $\\ln 2$ itself with the answer -- you must still divide by the decay constant. QUICK SELF-CHECK: half-life $= \\frac{\\ln 2}{k}$, always with units."
                            }
                        ]
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
            "intuition": "SAT Math doesn't demand heavy calculation. Instead, it measures two things: how fast you can turn worded conditions into equations, and how accurately you dodge the traps. For a TJHSST student, managing mistakes under time pressure matters more than the computation itself. These 40 questions follow real College Board trends, built around the types Digital SAT loves — function notation, exponential models, and statistical interpretation.",
            "local_resources": [],
            "difficulty": "advanced",
            "units": [
                {
                    "title": "Unit 1: Algebra (35%)",
                    "insight": "Algebra is the largest SAT Math area at 35%. Three essentials. First, undo operations in order — clear the constant term, then the coefficient. Second, for systems of equations, read 'what is being asked' before you calculate. Third, flip the inequality sign when you multiply or divide by a negative. Every trap choice in this unit comes from real student wrong-answer patterns, so for any question you miss, be sure to read the Wrong-answer watch in the explanation.",
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
                                "explanation": "**Trap alert**: When the coefficient is a fraction, many students only remember 'multiply both sides by the fraction' and multiply by $\\frac{2}{3}$ as is. But the inverse of multiplying by $\\frac{2}{3}$ is dividing by $\\frac{2}{3}$ — that is, multiplying by $\\frac{3}{2}$. Mix up the reciprocal's direction and your answer drifts off to 16 or 8. **Solution**: (1) Clear the constant first. Adding 5 to both sides gives $\\frac{2}{3}x = 16$. (2) Multiply both sides by the reciprocal of the coefficient $\\frac{2}{3}$, which is $\\frac{3}{2}$. $x = 16 \\times \\frac{3}{2} = 24$. (3) Finish by checking. $\\frac{2}{3} \\times 24 - 5 = 16 - 5 = 11$, so both sides match. **Wrong-answer watch**: 16 is the answer you get if you skip the multiply-by-the-reciprocal step and stop after transposing; 8 is what you get if you multiply by $\\frac{2}{3}$ as is. These are the two most common mistakes on fractional-coefficient problems. **Quick self-check**: Once you have an answer, plug it back into the original equation. It takes 5 seconds, and on SAT algebra problems this one habit catches nearly every sign and reciprocal mistake.",
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
                                "explanation": "**Trap alert**: In $f(-2) = 3(-2)^2 - 2(-2) + 1$, $(-2)^2 = 4$, but many students drop one sign along the way — especially computing $-2 \\times (-2) = +4$ as $-4$. Treat a negative inside parentheses 'as a whole parenthesis.' **Solution**: (1) Substitute $-2$ for $x$: $f(-2) = 3(-2)^2 - 2(-2) + 1$. (2) Powers first: $(-2)^2 = 4$, so $3 \\times 4 = 12$. (3) $-2 \\times (-2) = +4$. (4) Adding up: $12 + 4 + 1 = 17$. **Wrong-answer watch**: 9 comes from flipping the middle term's sign ($12 - 4 + 1$) — the #1 wrong-answer pattern for negative substitution. Get in the habit of checking each term's sign right after substituting. **Quick self-check**: When substituting a negative like $x = -2$, wrap every term in parentheses and work line by line in power → multiplication → addition order. Splitting lines makes sign mistakes visible.",
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
                                "explanation": "**Trap alert**: Half of all systems-of-equations misses come not from computation but from misreading 'what is being asked.' The classic blunder: solving $x = 4$ and then bubbling in 4. Read the last line of the question before you compute. **Solution**: (1) Add the two equations. $(2x + y) + (x - y) = 11 + 1$ eliminates $y$, giving $3x = 12$, so $x = 4$. (2) Substitute $x = 4$ into the second equation: $4 - y = 1$, so $y = 3$. (3) Check: $2(4) + 3 = 11$ satisfies the first equation too. **Wrong-answer watch**: 4 is the value of $x$. Underlining 'what the question asks for' before computing is enough to dodge this trap. **Quick self-check**: Plug the ordered pair $(4, 3)$ into both equations. Checking only one equation won't catch a substitution slip. On Digital SAT systems, elimination is often faster than substitution. Look at the coefficients first for an eliminable pair — like '$y$ coefficients with opposite signs' — and most of these problems fall in under 30 seconds.",
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
                                "explanation": "**Trap alert**: In $5 - 2t = -13$, students cruise to $-2t = -18$ and then write $t = -9$ at the last step. Negative divided by negative is positive. Don't relax on the sign until the final line. **Solution**: (1) Write the function as an equation: $5 - 2t = -13$. (2) Subtract 5 from both sides: $-2t = -18$. (3) Divide both sides by $-2$: $t = 9$. (4) Check: $g(9) = 5 - 18 = -13$, matching the given condition. **Wrong-answer watch**: -9 is a sign slip in the final division; 4 comes from botching the transposition, as in $-2t = -8$. When transposing, say out loud, 'moving to the other side flips the sign.' **Quick self-check**: Plug your answer back into the function and confirm the output matches the given value. Back-substitution is the fastest check for function-notation problems. The notation $g(t) = -13$ means 'find the input $t$ that makes the function value $-13$.' Graphically, that's the $t$-coordinate of the intersection of the line $y = 5 - 2t$ with the horizontal line $y = -13$.",
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
                                "explanation": "**Trap alert**: The biggest inequality trap is knowing the 'flip the sign when dividing by a negative' rule and still skipping it at the last moment. This problem's danger point is exactly the step where you divide $-11x < 0$ by $-11$. **Solution**: (1) Expand the left side: $-6x + 8 < 5x + 8$. (2) Subtract 8 from both sides: $-6x < 5x$. (3) Gather the $x$ terms on one side: $-6x - 5x < 0$, i.e., $-11x < 0$. (4) Divide both sides by $-11$ and flip the sign: $x > 0$. **Wrong-answer watch**: $x < 0$ skips the flip — the #1 wrong answer for this type. At the divide-by-a-negative line, stop your pen and confirm the flip out loud. **Quick self-check**: Pick a number in your answer region (say $x = 1$) and plug it into the original inequality. $-2(3 - 4) = 2 < 13 = 5 + 8$ holds, so the sign direction is right. Sketching the answer range on a number line helps with inequalities. Mark $x > 0$, plot 1, and test it — the sign error becomes visible.",
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
                                "explanation": "**Trap alert**: 'No solution' means algebraically that 'the $x$ terms cancel and the leftover equation is false.' Don't freeze at 'find $k$' — just think: make the $x$ coefficients equal on both sides. **Solution**: (1) From $kx + 5 = 3x - 2$, gather the $x$ terms on one side: $(k - 3)x = -7$. (2) For no solution, the $x$ coefficient must be 0. $k - 3 = 0$, so $k = 3$. (3) Verify: with $k = 3$ the equation becomes $3x + 5 = 3x - 2$, i.e., $5 = -2$, which no $x$ satisfies. **Wrong-answer watch**: -3 comes from moving the sign the wrong way when comparing coefficients. Compare 'the whole number in front of $x$' as a unit. **Quick self-check**: Plug your $k$ back in and confirm you really get a contradiction ($5 = -2$). 'No solution' is exactly a leftover contradiction. Conversely, 'infinitely many solutions' leaves an identity like $0 = 0$. Digital SAT loves asking for $k$ given the number of solutions (none, one, infinitely many), so practice telling the three cases apart.",
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
                                "explanation": "**Trap alert**: Factoring $x^2 + 7x + 12$ means finding two numbers that multiply to 12 AND add to 7. $(x+2)(x+6)$ also multiplies to 12, but adds to 8. Both conditions must hold at once. **Solution**: (1) List factor pairs of the constant 12: $(1, 12)$, $(2, 6)$, $(3, 4)$. (2) Find the pair summing to 7: $3 + 4 = 7$. (3) So $(x+3)(x+4)$. Expansion check: $x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ matches the original. **Wrong-answer watch**: $(x+2)(x+6)$ only checks 'multiply to 12'; $(x-3)(x-4)$ reads the $x$ coefficient's sign backwards. **Quick self-check**: After factoring, always expand back to confirm you return to the original — 10 seconds is enough. Factoring is the starting point for solving quadratics. If $x^2 + 7x + 12 = 0$, then $(x+3)(x+4) = 0$ gives $x = -3$ or $x = -4$ immediately. The faster your factoring, the faster all of Advanced Math goes.",
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
                                "explanation": "**Trap alert**: $9x^2 - 25$ is a difference of perfect squares. Writing it as $(3x-5)^2$ expands to $9x^2 - 30x + 25$ — a middle term appears. A 'difference' is not a squared sum; it's a product of a sum and a difference. **Solution**: (1) Confirm $9x^2 = (3x)^2$ and $25 = 5^2$. (2) Apply $a^2 - b^2 = (a-b)(a+b)$ with $a = 3x$, $b = 5$: $(3x-5)(3x+5)$. (3) Check: $9x^2 + 15x - 15x - 25 = 9x^2 - 25$. **Wrong-answer watch**: $(3x-5)^2$ mixes up the formulas; $(3x+5)(3x+5)$ unifies the signs. **Quick self-check**: Confirm your factored form contains a 'minus' shape. The $a^2 - b^2$ form is always $(a-b)(a+b)$. Differences of perfect squares keep showing up later in rational-expression simplification and limit problems. Drill the 3-step routine: 'spot the squares → plug into the formula → expand to check.'",
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
                                "explanation": "**Trap alert**: For word problems, separate 'fixed cost' from 'variable cost' before writing the equation. The $45 is paid once; the $0.25 attaches per mile. Subtracting the fixed cost from the $120 budget first is the key. **Solution**: (1) Set up the equation: $45 + 0.25m = 120$ (equals sign, since we want the maximum miles). (2) $0.25m = 120 - 45 = 75$. (3) $m = 75 \\div 0.25 = 300$. (4) Check: $45 + 0.25 \\times 300 = 45 + 75 = 120$, matching the budget exactly. **Wrong-answer watch**: 480 computes $120 \\div 0.25$ without subtracting the fixed cost. Forgetting the 'base fee' is this type's signature mistake. **Quick self-check**: Plug your answer back into the equation and confirm it matches the budget exactly. In word problems, the check IS the answer verification. Half of a word problem is writing down 'what is fixed and what varies' first. Once the $45 fixed cost and $0.25-per-mile variable cost are in equation form, the rest is plain linear-equation solving.",
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
                                "explanation": "**Trap alert**: Two unknowns (adult tickets $a$, student tickets $s$) but also two equations. Converting '100 tickets total' into $s = 100 - a$ to reduce to one unknown is the textbook move. **Solution**: (1) $a + s = 100$, so $s = 100 - a$. (2) Substitute into the revenue equation: $12a + 8(100 - a) = 1000$. (3) Expanding: $12a + 800 - 8a = 1000$, so $4a = 200$ and $a = 50$. (4) Check: $50 \\times 12 + 50 \\times 8 = 600 + 400 = 1000$ satisfies the revenue condition, and the ticket total is $50 + 50 = 100$. **Wrong-answer watch**: 75 adds the two ticket prices, as in $12a + 8a = 1000$. Two products with different prices must be computed separately. **Quick self-check**: From $a = 50$, get $s = 50$ too, and verify both conditions (100 total tickets, $1000 total revenue).",
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 2: Advanced Math (35%)",
                    "insight": "Advanced Math takes algebra one level up and covers 35% of the test. Move freely among the three faces of quadratics (factoring, completing the square, the quadratic formula), and for exponential, radical, and rational expressions, practice 'converting to the base form.' Nonlinear systems and exponential models are Digital SAT regulars, so use these 10 questions to make the patterns muscle memory.",
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
                                "explanation": "**Trap alert**: Asked for the 'sum of the solutions,' students often solve and then write down just one, like $x = 2$. When the sum is asked, find both solutions or use Vieta's formulas. **Solution**: (1) Factor: $x^2 - 5x + 6 = (x-2)(x-3) = 0$. (2) The solutions are $x = 2$ and $x = 3$. (3) Their sum is $2 + 3 = 5$. For reference, in $ax^2 + bx + c = 0$ the sum of the solutions is $-b/a$, so $-(-5)/1 = 5$ gets you there directly. **Wrong-answer watch**: 6 mistakes the constant term for the sum; -5 reads the sign backwards. Remember the sum is '$-b/a$' in Vieta's formulas. **Quick self-check**: Plug both solutions into the original equation and confirm each gives 0: $(2)^2 - 5(2) + 6 = 0$, $(3)^2 - 5(3) + 6 = 0$. For quadratics that don't factor, use the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$. When you need the sum or product directly, Vieta's formulas (sum $-b/a$, product $c/a$) are the fastest route.",
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
                                "explanation": "**Trap alert**: Expanding $(2x+3)(x-4)$ requires tracking each sign: $2x \\times (-4) = -8x$ and $3 \\times x = 3x$. Drop one sign and the middle term becomes $-11x$ or $+5x$. **Solution**: (1) Distribute: $2x \\cdot x = 2x^2$, $2x \\cdot (-4) = -8x$, $3 \\cdot x = 3x$, $3 \\cdot (-4) = -12$. (2) Combine like terms: $-8x + 3x = -5x$. (3) Result: $2x^2 - 5x - 12$. **Wrong-answer watch**: $-11x$ fails to see $3x$ as positive; $+5x$ drops the $-8x$ sign. When writing the four products, write each term's sign right in front of it. **Quick self-check**: Plug $x = 1$ into both sides. Left: $(2+3)(1-4) = 5 \\times (-3) = -15$; right: $2 - 5 - 12 = -15$. They match.",
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
                                "explanation": "**Trap alert**: In $\\frac{x^5 \\cdot x^3}{x^4}$, products in the numerator add exponents, and division in the fraction subtracts them. Trying to do '$x^8$ divided by $x^4$' all at once produces slips like $5 + 3 + 4$ — adding everything. **Solution**: (1) Numerator: $x^5 \\cdot x^3 = x^{5+3} = x^8$ (same base → add exponents). (2) Fraction: $\\frac{x^8}{x^4} = x^{8-4} = x^4$ (division → subtract exponents). **Wrong-answer watch**: $x^{11}$ adds exponents even in division; $x^{60}$ multiplies the exponents. **Quick self-check**: multiply → add, divide → subtract, power-of-a-power → multiply. Point at each rule with your finger as you confirm which one you used. The exponent laws end at three: $x^a \\cdot x^b = x^{a+b}$, $\\frac{x^a}{x^b} = x^{a-b}$, $(x^a)^b = x^{ab}$. When it looks messy, simplify numerator and denominator separately, then combine — in that order.",
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
                                "explanation": "**Trap alert**: The key to $\\sqrt{72}$ is seeing '72 = 36 × 2' in one glance, without prime-factoring. $\\sqrt{36 \\times 2} = 6\\sqrt{2}$. Dividing the radicand blindly leads to answers like $8\\sqrt{3}$. **Solution**: (1) Split 72 into a product containing a perfect square: $72 = 36 \\times 2$. (2) $\\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$. (3) 2 has no square factor left, so you're done. **Wrong-answer watch**: $36\\sqrt{2}$ pulls 36 out without taking its root; $6\\sqrt{3}$ splits 72 wrong. **Quick self-check**: Square your answer and confirm you return to the original: $(6\\sqrt{2})^2 = 36 \\times 2 = 72$. Exactly. The trick to simplifying radicals is finding the largest perfect-square factor of the radicand. Among 72's factors, the squares are 36, 9, and 4 — using the largest, 36, finishes it in one step.",
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
                                "explanation": "**Trap alert**: Completing-the-square problems ask for $h$ and $k$ in $(x+h)^2 = k$. Students find $h = 3$, $k = 4$ and then compute $hk$ instead of $h + k$. Re-read 'what is being asked' at the end. **Solution**: (1) Move the constant: $x^2 + 6x = -5$. (2) Add the square of half the $x$ coefficient — $3^2 = 9$ — to both sides: $x^2 + 6x + 9 = 4$. (3) $(x+3)^2 = 4$, so $h = 3$, $k = 4$. (4) $h + k = 3 + 4 = 7$. **Wrong-answer watch**: 1 reads $k$ as some wrong value instead of 4; 12 computes $h \\times k$. Keep hold of the requested form until the very end. **Quick self-check**: Expand $(x+3)^2 = x^2 + 6x + 9$ and compare with the original. The constant side checks out as $9 - 4 = 5$. Completing the square is also how you find a quadratic function's vertex. From $(x+3)^2 = 4$, the solutions $x = -1$ or $x = -5$ are the parabola's $x$-intercepts.",
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
                                "explanation": "**Trap alert**: When simplifying rational expressions, you cannot cancel 'terms joined by plus or minus.' Always factor first, and cancel only common factors. That $x = -3$ makes the denominator 0 — excluded from the domain — is a favorite Digital SAT point. **Solution**: (1) Numerator: $x^2 - 9 = (x-3)(x+3)$. (2) Denominator: $x^2 + 6x + 9 = (x+3)^2$. (3) Cancel the common factor $(x+3)$ to get $\\frac{x-3}{x+3}$ (with $x \\ne -3$). **Wrong-answer watch**: $\\frac{x+3}{x-3}$ flips numerator and denominator; $-\\frac{1}{3}$ comes from trying to cancel term by term and wrecking it. **Quick self-check**: Plug in $x = 0$. The original gives $\\frac{-9}{9} = -1$; the answer gives $\\frac{-3}{3} = -1$. They match. On rational-expression problems, build the habit of excluding 'the $x$ that zeroes the denominator' before canceling. At $x = -3$ neither the original nor the answer is defined, so writing the domain restriction is part of a complete answer.",
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
                                "explanation": "**Trap alert**: Finding the intersection isn't the end. This question asks for the $y$-coordinate of the intersection in the first quadrant. The point $(-1, 1)$ at $x = -1$ is in the second quadrant, so it's out. **Solution**: (1) Solve the system: $x^2 = 2x + 3$. (2) $x^2 - 2x - 3 = 0$ factors as $(x-3)(x+1) = 0$, so $x = 3$ or $x = -1$. (3) Only $x = 3$ satisfies the first-quadrant condition ($x > 0$, $y > 0$). (4) $y = 3^2 = 9$. **Wrong-answer watch**: 3 uses the $x$-coordinate as the answer; 1 picks the point at $x = -1$. Circle qualifier phrases like quadrant conditions before computing. **Quick self-check**: Verify $(3, 9)$ satisfies both equations: $9 = 3^2$, $9 = 2(3) + 3$. Substitution is the default for nonlinear systems. A line and a parabola can intersect in 0, 1 (tangent), or 2 points — solve the quadratic for $x$ first, then find $y$, in that order.",
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
                                "explanation": "**Trap alert**: 'Doubles every 3 hours' means the exponent is $t/3$, not $3t$. Every 3 hours the exponent must grow by 1, so time $t$ divided by the period 3 becomes the exponent. **Solution**: (1) The base form is $N(t) = (\\text{initial value}) \\times 2^{t/(\\text{doubling time})}$. (2) With initial value 500 and doubling time 3: $N(t) = 500(2)^{t/3}$. (3) Check: at $t = 3$, $500 \\times 2^1 = 1000$ — exactly doubled. **Wrong-answer watch**: $500(2)^{3t}$ multiplies by the period; at $t = 3$ it gives 8×. When you see 'every,' remember you divide by the period. **Quick self-check**: Plug the period (here 3) into $t$ and confirm you get exactly double — the universal check for exponential models. In exponential models, keep 'initial value' and 'growth rate' distinct. 500 is the starting point, 2 is the doubling, and $t/3$ means 'how many periods have passed.' Digital SAT loves varying one of these three elements.",
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
                                "explanation": "**Trap alert**: Without the remainder theorem you'd need synthetic division, where sign slips are common. But directly substituting $x = 1$ is fastest — the remainder equals $P(1)$. **Solution**: (1) Remainder theorem: the remainder of $x^3 - 2x^2 + 4$ divided by $x - 1$ is $P(1)$. (2) $P(1) = 1 - 2 + 4 = 3$. (3) Synthetic division confirms it too: from coefficients $1, -2, 0, 4$, the bottom row is $1, -1, -1, 3$, leaving remainder 3. **Wrong-answer watch**: 1 mistakes the $x^3$ coefficient for the answer; -1 drops one sign during substitution. **Quick self-check**: Substituting $x = 1$ takes 10 seconds, so even if you used synthetic division, verify by substitution once more. The remainder theorem is a special case of the factor theorem. If $P(a) = 0$, then $x - a$ is a factor — link the two and you can extend to higher-degree factoring problems. On the SAT it appears in variations asking whether the remainder is 0.",
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
                                "explanation": "**Trap alert**: 'Exactly one real root' means a double root, equivalent to discriminant $D = 0$. Connect them instantly: $D > 0$ → two, $D = 0$ → one, $D < 0$ → none. **Solution**: (1) Discriminant $D = b^2 - 4ac = 16 - 4c$. (2) Double-root condition $D = 0$ gives $16 - 4c = 0$. (3) $c = 4$. (4) Verify: $x^2 + 4x + 4 = (x+2)^2 = 0$, so $x = -2$ is a double root. **Wrong-answer watch**: -4 moves the sign the wrong way while transposing; 16 skips a step from $4c = 16$. **Quick self-check**: Plug your $c$ back in and confirm a perfect square appears. The $(x+2)^2$ form confirms the double root. The discriminant connects to graphs too: $D > 0$ → the parabola crosses the $x$-axis twice, $D = 0$ → touches once, $D < 0$ → never meets it. Picturing algebra and geometry together makes it stick.",
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 3: Problem Solving & Data Analysis (15%)",
                    "insight": "Problem Solving & Data Analysis is only 15%, but it's the best points-per-minute area on the test. Most problems fall to three hand moves: 'convert to a total' (means), 'split into parts' (ratios), 'check the base' (percents). Scatterplots and standard deviation test concepts, so understand the meaning rather than memorizing formulas.",
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
                                "explanation": "**Trap alert**: '25% off' means 'pay 75% of the original,' not 'pay 25% of it.' $80 \\times 0.25 = 20$ is the discount amount, not the sale price. **Solution**: (1) With a 25% discount, the payment rate is $100\\% - 25\\% = 75\\%$. (2) $80 \\times 0.75 = 60$. (3) Check: discount $80 \\times 0.25 = 20$, and $80 - 20 = 60$. They match. **Wrong-answer watch**: 20 mistakes the discount for the sale price. This type's signature trap — ask yourself at the end, 'so how much do I actually pay?' **Quick self-check**: Confirm discount + sale price = original: $20 + 60 = 80$. Percent problems start with identifying the base. The discount's base is the $80 original. Digital SAT loves base-switching traps (e.g., an extra discount on the raised price), so always confirm 'the % of what.'",
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
                                "explanation": "**Trap alert**: A 3:5 ratio is not '3 and 5' — it's '3 parts and 5 parts of a whole split into 8.' Don't divide 40 directly by 3 and 5. **Solution**: (1) Total parts: $3 + 5 = 8$. (2) One part's size: $40 \\div 8 = 5$. (3) Smaller number: $3 \\times 5 = 15$; larger: $5 \\times 5 = 25$. (4) Check: $15 + 25 = 40$ and $15:25 = 3:5$. The ratio holds too. **Wrong-answer watch**: 24 divides 40 wrong; 25 misses the 'smaller number' condition. Confirm which side is being asked at the end. **Quick self-check**: Confirm the two numbers sum to the total, and that reducing the ratio returns the given one. Ratio problems start with 'how many parts is the whole split into?' 3:5 → 8 parts; 2:3:5 → 10 parts. Find the part count first, then one part's size — that 2-step frame solves any ratio problem.",
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
                                "explanation": "**Trap alert**: Mean of 8 means 'the total is $8 \\times 5 = 40$.' Converting to a total first is the fastest route for 90% of mean problems. **Solution**: (1) Five data points, so the total is $8 \\times 5 = 40$. (2) The four known numbers total $4 + 8 + 6 + 10 = 28$. (3) $x = 40 - 28 = 12$. (4) Check: $(4+8+6+10+12) \\div 5 = 40 \\div 5 = 8$. **Wrong-answer watch**: 10 mistakes the four known numbers' average for $x$. You need 'the difference of totals,' not 'the mean of means.' **Quick self-check**: Recompute the mean including your value. A 10-second recheck catches the slip. Mean is 'total ÷ count,' but the reverse view — 'mean × count = total' — gets used more often. The moment you write 'the five numbers including $x$ must total 40,' the problem ends with one subtraction.",
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
                                "explanation": "**Trap alert**: With an even count (6 values), the median is 'the average of the middle two.' Writing down the 3rd value, 9, as the answer is the most common slip. **Solution**: (1) The data is already ascending: 3, 7, 9, 12, 15, 21. (2) The middle two are the 3rd and 4th — 9 and 12. (3) Median = $(9 + 12) \\div 2 = 10.5$. **Wrong-answer watch**: 9 wrongly picks 'the middle one.' With an even count, it's always the average of two. **Quick self-check**: Count whether the data size is even or odd first. Odd → the middle one; even → the average of the middle two. The median resists extreme values. When mean and median differ a lot, the data is skewed. The SAT also asks about skew via the mean–median gap. Sorting the data is step one for median problems — if the order is scrambled, sort first.",
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
                                "explanation": "**Trap alert**: A 20% markup followed by a 20% markdown does NOT return to the start. The second 20% is computed on the raised price, so the cut is bigger. **Solution**: (1) 20% markup: $250 \\times 1.2 = 300$. (2) 20% markdown: $300 \\times 0.8 = 240$. (3) In one shot: $250 \\times 1.2 \\times 0.8 = 250 \\times 0.96 = 240$ — a net 4% markdown. **Wrong-answer watch**: 250 assumes 'up then down = back to start' — the classic trap of this type, and one of College Board's favorites. **Quick self-check**: Compose successive percent changes by multiplication. $1.2 \\times 0.8 = 0.96 < 1$, so the final price must be below the original. Remember: successive percent changes compose by multiplication. An $a\\%$ increase followed by a $b\\%$ decrease is $(1 + a/100)(1 - b/100)$. Even with $a = b$ it's below 1 — equal up-and-down always loses.",
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
                                "explanation": "**Trap alert**: A scatterplot line-of-best-fit problem is ultimately an algebra problem: 'find the line's equation from two points.' Don't let the graph hypnotize you — get the slope first. **Solution**: (1) Slope: $\\frac{50-20}{10-0} = 3$. (2) The $y$-intercept is 20, so the line is $y = 3x + 20$. (3) At $x = 6$: $y = 3 \\times 6 + 20 = 38$. **Wrong-answer watch**: 35 miscomputes the slope; 44 reads the intercept as something other than 20. Reading the two points exactly is the starting point. **Quick self-check**: Plug $x = 0$ and $x = 10$ into your equation and confirm it passes through the given points: $3(0)+20 = 20$, $3(10)+20 = 50$. A line of best fit is 'the line that best represents the overall trend.' Slope 3 means 'as $x$ increases by 1, $y$ increases by 3 on average.' The SAT also asks for real-world interpretations of slope.",
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
                                "explanation": "**Trap alert**: 'Without replacement' is the key phrase. After drawing the first marble, the total drops from 10 to 9. Computing $\\frac{3}{10} \\times \\frac{5}{10}$ as if with replacement is wrong. **Solution**: (1) Total marbles: $3 + 5 + 2 = 10$. (2) P(red first): $\\frac{3}{10}$. (3) After removing one red, P(blue next): $\\frac{5}{9}$. (4) Multiply: $\\frac{3}{10} \\times \\frac{5}{9} = \\frac{15}{90} = \\frac{1}{6}$. **Wrong-answer watch**: $\\frac{3}{20}$ computes with replacement; $\\frac{3}{10}$ only computes the first event. **Quick self-check**: Find 'are they put back after drawing?' in the question and underline it. Without replacement, the denominator shrinks by 1 each time. Sequential probabilities multiply stage by stage. 'First red AND then blue' — ordered events multiply; unordered cases split into cases and add.",
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
                                "explanation": "**Trap alert**: Convert mean-target problems to totals. 'To average 86' means 'the four-subject total must be $86 \\times 4 = 344$.' **Solution**: (1) Target total: $86 \\times 4 = 344$. (2) Current three-subject total: $82 \\times 3 = 246$. (3) Needed fourth score: $344 - 246 = 98$. (4) Check: $(246 + 98) \\div 4 = 344 \\div 4 = 86$. **Wrong-answer watch**: 94 assumes adding just the $86 - 82 = 4$ gap is enough. The shortfall isn't split across remaining subjects — compute it directly from the target total. **Quick self-check**: Recompute the mean including your score. 98 is near perfect, so sanity-check the feel too: 'to lift the average by 4 points, you need a score that high.' Target-mean problems reduce to one line: 'target total − current total.' With multiple tests left, divide the shortfall by the remaining count — but with one left, the shortfall IS the needed score.",
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
                                "explanation": "**Trap alert**: '2 standard deviations above' means add $2 \\times (\\text{standard deviation})$ to the mean. $72 + 2 \\times 5 = 82$ is the cutoff, and the question asks for values 'greater than' it. **Solution**: (1) The 2-SD-above value: $72 + 2 \\times 5 = 82$. (2) 'More than' means strictly greater than 82. (3) The only choice above 82 is 84. **Wrong-answer watch**: 82 confuses 'at least' with 'more than.' 'More than' is strictly greater — no equals sign. **Quick self-check**: Circle the comparison phrase (more than / at least / within). Whether the equals sign is included changes the answer. Standard deviation measures spread. Values outside mean $\\pm$ 2 SD are unusual — only about 5% of the whole. The SAT frames this concept as 'normal range' questions.",
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
                                "explanation": "**Trap alert**: Rate problems are best split into '1 machine × 1 hour' units. Treating 5 machines × 4 hours as one lump and setting up a proportion invites dropping either the machine count or the hours. **Solution**: (1) Total work units: $5 \\times 4 = 20$ machine-hours for 200 items. (2) Per-machine-hour output: $200 \\div 20 = 10$. (3) 8 machines × 6 hours: $8 \\times 6 \\times 10 = 480$. **Wrong-answer watch**: 400 scales by machine count only, ignoring the time change; 600 adds machine count and hours. **Quick self-check**: Carry the units. If 'items/(machine·hour)' works out, the setup is probably right: $10 \\times 8 \\times 6 = 480$. Rate, speed, and concentration problems all start with 'amount per unit.' Once you have 10 items per machine-hour, any variation in machine count or hours yields to the same method.",
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 4: Geometry & Trigonometry (15%)",
                    "insight": "Geometry & Trigonometry is only 15%, but it's the 'know it and you're fast' area. Drill the special-triangle side ratios ($1:1:\\sqrt{2}$, $1:\\sqrt{3}:2$), arc/sector formulas, and radian conversion until they're automatic — that saves serious computation time. For similarity and circle equations, just watch the signs.",
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
                                "explanation": "**Trap alert**: A triangle's three interior angles always sum to $180^\\circ$. It's so easy that misreading becomes the mistake — check whether it asks for 'the remaining angle' or something else. **Solution**: (1) Sum of the two known angles: $50 + 70 = 120$. (2) $180 - 120 = 60$. (3) Check: $50 + 70 + 60 = 180$ satisfies the angle-sum condition. Easy problems tempt you to skip the check — a 3-second verification blocks the slip. **Wrong-answer watch**: 110 subtracts only one angle, as in $180 - 70$. Follow the order: 'add the two angles first.' **Quick self-check**: Add the three angles and confirm 180. That one check catches computation slips. The $180^\\circ$ triangle angle sum is the starting point of SAT geometry. The exterior angle theorem gets you $180 - (50 + 70) = 60$ in one shot. Go fast on easy problems and save time for the hard ones — that's the high-score strategy.",
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
                                "explanation": "**Trap alert**: The Pythagorean theorem says the hypotenuse squared equals the sum of the other two sides squared. First judge whether 6 and 8 are 'the legs' or 'the hypotenuse and a leg' — here the hypotenuse is asked for. **Solution**: (1) $c^2 = 6^2 + 8^2 = 36 + 64 = 100$. (2) $c = \\sqrt{100} = 10$ (length is positive). (3) Note: 6-8-10 is the 3-4-5 triple doubled. SAT regulars include the 3-4-5, 5-12-13, and 8-15-17 families — memorizing them buys time. **Wrong-answer watch**: 14 just adds $6 + 8$; 48 multiplies $6 \\times 8$. The theorem is about 'the sum of squares.' **Quick self-check**: Confirm the hypotenuse is the longest side: $10 > 8$, so it's plausible. The Pythagorean triples 3-4-5, 5-12-13, 8-15-17 and their multiples (6-8-10, 9-12-15, ...) are SAT regulars. When a right triangle shows two sides, first suspect 'is this a Pythagorean triple?' and you can skip the squaring.",
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
                                "explanation": "**Trap alert**: Circle area is $\\pi r^2$; circumference is $2\\pi r$. With radius 5, area is $25\\pi$ and circumference is $10\\pi$. Swap the two and you walk straight into the trap. **Solution**: (1) Area formula $A = \\pi r^2$ with $r = 5$. (2) $A = \\pi \\times 25 = 25\\pi$. (3) Rough check: $\\pi \\approx 3.14$, so the area is about $78.5$. **Wrong-answer watch**: $10\\pi$ uses the circumference formula; $50\\pi$ blends formulas as in $2\\pi r^2$. If area is asked and a circumference value sits among the choices, be suspicious. **Quick self-check**: Ask yourself, 'does $r^2$ appear?' Area is a 2-D concept, so the radius squared must appear. $\\pi r^2$ vs $2\\pi r$ can also be told apart by units — area is square units, circumference is length units. Thinking about the answer's units tells you which formula is right when you're unsure.",
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
                                "explanation": "**Trap alert**: A 45-45-90 triangle's side ratio is $1 : 1 : \\sqrt{2}$. If the hypotenuse is 10, each leg is $\\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$. Students often err on the direction — multiplying the hypotenuse by $\\sqrt{2}$. **Solution**: (1) Use the ratio: $x : x : x\\sqrt{2} = ? : ? : 10$. (2) $x\\sqrt{2} = 10$, so $x = \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$. (3) Check: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$ satisfies the Pythagorean theorem. **Wrong-answer watch**: $10\\sqrt{2}$ multiplies the hypotenuse by $\\sqrt{2}$ (wrong direction); 5 drops the $\\sqrt{2}$. **Quick self-check**: Confirm each leg is shorter than the hypotenuse: $5\\sqrt{2} \\approx 7.07 < 10$, so it's plausible.",
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
                                "explanation": "**Trap alert**: Arc length with radians is 'radius × central angle (in radians)' in one shot. Skip converting $60^\\circ$ to radians and the answer goes sideways. **Solution**: (1) $60^\\circ = \\frac{\\pi}{3}$ radians. (2) Arc length $= r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi$. (3) Check: it's $\\frac{1}{6}$ of the full circumference $12\\pi$, so $2\\pi$ is right ($60/360 = 1/6$). **Wrong-answer watch**: $6\\pi$ never converts the angle to radians; $12\\pi$ uses the full circumference as the answer. **Quick self-check**: Confirm the arc is shorter than the full circumference and matches the $\\theta/2\\pi$ ratio. The arc formula $s = r\\theta$ holds only when $\\theta$ is in radians. When degrees are given, build the habit of multiplying by $\\pi/180$ to convert to radians first.",
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
                                "explanation": "**Trap alert**: A sector's area is 'what fraction of the whole circle.' $120^\\circ$ is $\\frac{1}{3}$ of the circle, so $\\frac{1}{3}\\pi(9^2) = 27\\pi$. Mistakes come from grabbing the circumference formula or confusing the major and minor sectors. **Solution**: (1) Whole circle's area: $\\pi \\times 9^2 = 81\\pi$. (2) Sector fraction: $\\frac{120}{360} = \\frac{1}{3}$. (3) $81\\pi \\times \\frac{1}{3} = 27\\pi$. Radian route: $\\frac{1}{2}r^2\\theta = \\frac{1}{2} \\times 81 \\times \\frac{2\\pi}{3} = 27\\pi$. **Wrong-answer watch**: $6\\pi$ uses the circumference $2\\pi r$; $54\\pi$ is the major ($240^\\circ$) sector's area (a mix-up); $81\\pi$ skips the fraction and uses the whole circle's area. **Quick self-check**: Confirm the sector area is smaller than the whole circle's and matches the angle fraction.",
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
                                "explanation": "**Trap alert**: $\\sin A = \\frac{3}{5}$ means opposite:hypotenuse = 3:5. Picture the 3-4-5 right triangle and the adjacent side is 4 — so $\\cos A = \\frac{4}{5}$ pops out. The 'A is acute' condition is what pins the sign down to one. **Solution**: (1) Since $\\sin^2 A + \\cos^2 A = 1$, $\\cos^2 A = 1 - \\frac{9}{25} = \\frac{16}{25}$. (2) $A$ is acute, so $\\cos A > 0$: $\\cos A = \\frac{4}{5}$. (3) Triangle check: opposite 3, hypotenuse 5 → adjacent $\\sqrt{25-9} = 4$. **Wrong-answer watch**: $\\frac{3}{4}$ is the value of $\\tan A$. Given sine, students often reach for tangent before cosine. **Quick self-check**: Plug into $\\sin^2 + \\cos^2 = 1$: $\\frac{9}{25} + \\frac{16}{25} = 1$.",
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
                                "explanation": "**Trap alert**: The degree→radian formula is 'multiply by $\\pi/180$.' $150 \\times \\frac{\\pi}{180} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$. Students sometimes multiply by the reciprocal. **Solution**: (1) $150^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{150\\pi}{180}$. (2) Reduce: divide top and bottom by 30 → $\\frac{5\\pi}{6}$. (3) Check: $150^\\circ$ is $\\frac{5}{6}$ of $180^\\circ$, matching $\\frac{5}{6} \\times \\pi$. **Wrong-answer watch**: $\\frac{5\\pi}{3}$ multiplies by the reciprocal, as in $180/150$; $\\frac{2\\pi}{3}$ is the value for $120^\\circ$. **Quick self-check**: Use $180^\\circ = \\pi$ in a proportion: $150:180 = 5:6$, so $\\frac{5\\pi}{6}$.",
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
                                "explanation": "**Trap alert**: Similar-triangle problems live or die on setting the proportion 'corresponding side to corresponding side.' Pole height : pole shadow = tree height : tree shadow. Either side can go on top as long as the correspondence matches. **Solution**: (1) Proportion: $\\frac{6}{4} = \\frac{h}{14}$. (2) Cross-multiply: $4h = 84$. (3) $h = 21$ feet. (4) Check: $\\frac{6}{4} = 1.5$ and $\\frac{21}{14} = 1.5$. The ratios match. **Wrong-answer watch**: 18 sets the proportion upside down. The 'height-to-shadow' order must be the same on both sides. **Quick self-check**: The tree's shadow is longer than the pole's (14 > 4), so the tree must be taller. $21 > 6$, so the direction is right. Similarity ratios are length ratios; area ratios are their squares. This problem uses only length ratios, but the SAT sometimes steps it up by asking for an area ratio from a length ratio. Just remember to keep both sides of the proportion in the same order.",
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
                                "explanation": "**Trap alert**: In the circle equation $(x-h)^2 + (y-k)^2 = r^2$, center $(2, -3)$ gives $h = 2$, $k = -3$, so the equation is $(x-2)^2 + (y+3)^2 = 16$. The flipped sign on $k$ is this type's #1 mistake. **Solution**: (1) Plug into standard form: $(x-2)^2 + (y-(-3))^2 = 4^2$. (2) Simplify: $(x-2)^2 + (y+3)^2 = 16$. (3) Check: the point $(6, -3)$ is 4 units from the center, so it must lie on the circle. $(6-2)^2 + 0 = 16$ holds. **Wrong-answer watch**: $(x+2)^2 + (y-3)^2 = 16$ copies the center's signs as-is; ending with $= 4$ forgets to square the radius. **Quick self-check**: Remember the '$-h$, $-k$' rule. Center $(h, k)$ enters the equation as $(x - h)$, $(y - k)$ — signs flipped.",
                            }
                        ]
                    }
                },
                {
                    "title": "Unit 5: Released-Exam Style Practice (Math)",
                    "insight": "This is a practice set of the 10 trap patterns that recur on real College Board exams. Mistakes like skipping unit conversion, skipping extraneous-root checks, rushing NOT questions, misreading the base of successive percents, or misreading signs come from habits, not ability. Each explanation covers the trap's identity, the step-by-step solution, an individual rebuttal of all four choices, and a self-check method — work one problem and you'll never fall for that trap type again.",
                    "topics": [
                        "Mixed review",
                        "Test strategy",
                        "Trap Pattern Analysis",
                        "Wrong-Answer Elimination",
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Released Exam 1: The Unit-Conversion Trap — Speed and Time",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "A car traveled 60 miles in 45 minutes at a constant speed. At the same speed, how many miles would it travel in 2 hours 15 minutes?",
                                "options": [
                                    "90",
                                    "135",
                                    "180",
                                    "270"
                                ],
                                "answer": "180",
                                "explanation": "This question's trap is computing without unifying the time units. Mistaking 45 minutes for 1 hour gives 60 mph and the choice 2.25×60=135; mistaking 15 minutes for 0.5 hours inflates the time to 4.5 hours and gives 270; dropping the minutes entirely and estimating 45×2=90 is also common. Here is the step-by-step solution. First, unify all times into the same unit. 45 minutes = 0.75 hours; 2 hours 15 minutes = 2.25 hours. Second, find the speed. 60 miles ÷ 0.75 hours = 80 mph. Third, multiply the speed by the travel time. 80 × 2.25 = 180 miles. You can also solve it by ratio as a check. 2 hours 15 minutes is exactly 3 times 45 minutes, so the distance is 3 times 60 miles = 180 miles. Wrong-answer rebuttal: 90 drops the minute units and multiplies only the hour numbers — the unit concept itself collapses. 135 mistakes 45 minutes for 1 hour, using the wrong speed of 60 mph. 270 mistakes 15 minutes for 0.5 hours, inflating the travel time to 4.5 hours. Quick self-check: after finding the answer, confirm all time units are unified and the speed is in mph. Also, since 2 hours 15 minutes is 3 times 45 minutes, rough-check that the answer is near 3 times 60. Test-day tip: in SAT speed/rate problems, first convert every quantity to the same unit, and remember that the choices always include at least one value you'd get by skipping the unit conversion — eliminate those.",
                            },
                            {
                                "title": "Released Exam 2: The Extraneous-Root Trap — Radical Equations",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "What is the solution of the equation $\\sqrt{x+5} = x - 1$?",
                                "options": [
                                    "-1",
                                    "4",
                                    "-1 and 4",
                                    "No solution",
                                ],
                                "answer": "4",
                                "explanation": "This question's trap is squaring both sides and skipping the check of each root in the original equation. Squaring is not an equivalence-preserving operation — it only creates a necessary condition — so extraneous roots that don't satisfy the original equation can sneak in. Here is the step-by-step solution. First, check the domain. The radicand must be nonnegative: x+5≥0, i.e., x≥-5. Also, the right side x-1 must equal a square root (≥0), additionally requiring x-1≥0, i.e., x≥1. Second, square both sides. x+5=(x-1)²=x²-2x+1 gives x²-3x-4=0, i.e., (x-4)(x+1)=0, so x=4 or x=-1. Third, substitute into the original equation — always. For x=4: √9=3 and 4-1=3, so it holds. For x=-1: √4=2 but -1-1=-2, so it fails. The solution is 4 alone. Wrong-answer rebuttal: -1 skips the substitution check and picks only the wrong one of the two squared roots. '-1 and 4' fails to filter the extraneous root — the choice for students caught by this problem's core trap. 'No solution' gives up without verifying that x=4 works. Quick self-check: when solving radical or log equations, always substitute back into the original at the end. Extraneous roots lurk especially when the right side can be negative. Test-day tip: when the choices are arranged as -1, 4, '-1 and 4,' 'no solution,' that's the test maker's signal that extraneous-root checking is the target — one substitution kills three choices.",
                            },
                            {
                                "title": "Released Exam 3: NOT Format — Intersections of a Line and a Parabola",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "The line $y = 2x + k$ meets the parabola $y = x^2 - 3x + 5$ at two distinct points. Which of the following is NOT a possible value of $k$?",
                                "options": [
                                    "-2",
                                    "-1",
                                    "0",
                                    "5"
                                ],
                                "answer": "-2",
                                "explanation": "This question's trap is twofold. First, rushing past the NOT and picking a possible value. Second, mistaking the 'two distinct intersections' condition for D≥0 instead of D>0 (the boundary value isn't among the choices here, but it shows up often on the real test). Here is the step-by-step solution. First, solve the system. x²-3x+5=2x+k gives x²-5x+(5-k)=0. Second, two distinct intersections mean this quadratic has two distinct real roots, so the discriminant must be positive. D=(-5)²-4×1×(5-k)=25-20+4k=5+4k>0. Third, solve the inequality: 4k>-5, i.e., k>-1.25. So only values greater than -1.25 are possible. Among the choices, -2 is less than -1.25, so it is not possible. Wrong-answer rebuttal: -1 is greater than -1.25, so it satisfies the condition — it IS a possible value. 0 is also greater than -1.25, and so is 5. So -1, 0, and 5 are all possible, and none can be the answer to a NOT question. Quick self-check: on NOT/EXCEPT questions, underline the last word of the question and mark each choice O/X for whether it satisfies the condition. At points where the inequality direction flips, get in the habit of plugging the boundary value into the choices directly. Test-day tip: memorize the trio — two distinct points, tangent, no intersection — as D>0, D=0, D<0. Classify which condition the problem wants the moment you read it.",
                            },
                            {
                                "title": "Released Exam 4: Successive Percents — Markup then Discount",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "An item's price was marked up 40% from its cost, and then a sale took 20% off the marked price. The sale price is what percent of the cost?",
                                "options": [
                                    "108%",
                                    "112%",
                                    "116%",
                                    "120%"
                                ],
                                "answer": "112%",
                                "explanation": "This question's trap is ignoring that the percent's base changes at each step. The most common slip is computing 40-20=20 and picking 120%; some mistake the product of the markup and discount rates (8%) for the net effect and pick 108%. Here is the step-by-step solution. First, set the cost to 100. Second, the 40%-marked-up price is 100×1.4=140. Third, the discount applies to the marked price 140, not the cost. 140×0.8=112. So the sale price is 112% of the cost. In one shot: 1.4×0.8=1.12. Wrong-answer rebuttal: 108% mistakes 0.4×0.2=0.08 for the net increase — a misread of what multiplication means. 116% is the estimation-slip type: computing 1.4×0.8 carefully gives 1.12, not 1.16. 120% ignores the changing base and subtracts 40-20 directly — the signature trap of successive-percent problems. Quick self-check: sanity-check with common sense whether markup-then-discount ends above cost (here 112%>100, still above), and re-verify multiplications like 1.4×0.8 by hand. Test-day tip: always convert successive percents to decimal multipliers (1.4, 0.8) and multiply. If a choice equals the naive add/subtract result (120%), suspect it first and eliminate against the multiplication.",
                            },
                            {
                                "title": "Released Exam 5: Graph Misread — Vertex of a Quadratic (NOT Format)",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Which of the following statements about the function $f(x) = -2(x-3)^2 + 5$ is NOT true?",
                                "options": [
                                    "The graph's vertex is (3, 5).",
                                    "It has a maximum value of 5 at x = 3.",
                                    "The y-intercept is -13.",
                                    "The function increases on the interval x > 3.",
                                ],
                                "answer": "The function increases on the interval x > 3.",
                                "explanation": "This question's trap is missing the negative sign on the quadratic coefficient -2 and misreading the graph as an upward-opening parabola. One sign flips the vertex's max/min and the increasing/decreasing intervals entirely. Here is the step-by-step solution. First, read the standard form f(x)=a(x-h)²+k: a=-2, h=3, k=5. Second, a<0 means the graph opens downward, with maximum value 5 at the vertex (3, 5). Third, the y-intercept is f(0)=-2×(0-3)²+5=-2×9+5=-13. Fourth, a downward-opening parabola increases left of the vertex (x<3) and decreases right of it (x>3). So 'increases for x>3' is NOT true. Wrong-answer rebuttal: 'The vertex is (3, 5)' reads straight out of standard form — true. 'Maximum 5 at x=3' is true for a parabola with a<0. 'The y-intercept is -13' is confirmed by computing f(0) — true. All three are true, so none can answer a NOT question. Quick self-check: on quadratic problems, first circle the sign of a and sketch the opening direction with an arrow. For increasing/decreasing intervals, mutter 'left and right of the vertex are opposite' as you confirm. Test-day tip: in NOT questions, three choices are true and one is false. Eliminate the clearly-true choices by computation first; the one left standing is the answer — don't wrestle with the confusing choice first.",
                            },
                            {
                                "title": "Released Exam 6: Exponent Laws — The Unify-the-Base Trap",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "What is the value of $x$ satisfying the equation $3^{2x} = 81^{x-1}$?",
                                "options": [
                                    "1",
                                    "2",
                                    "3",
                                    "4"
                                ],
                                "answer": "2",
                                "explanation": "This question's trap is miscounting the exponent when rewriting 81 as a power of 3. 81=3⁴, but confusing it with 3³=27 gives the clean-looking wrong answer from 2x=3(x-1): x=3. The test maker plants 3 among the choices to make that wrong answer look plausible. Here is the step-by-step solution. First, unify both sides to base 3. 81=3⁴, so the right side is (3⁴)^(x-1)=3^(4(x-1)). Second, with equal bases, compare exponents: 2x=4(x-1). Third, 2x=4x-4 gives 2x=4, so x=2. Checking: left side is 3⁴=81, right side is 81¹=81. They match. Wrong-answer rebuttal: plugging in 1 gives 3²=9 on the left and 81⁰=1 on the right — not equal. 3 is the value from mistaking 81 for 3³ — the answer for students caught by this problem's core trap. Plugging in 4 gives 3⁸=6561 on the left versus 81³ on the right — not equal; it's the value from mishandling the (x-1) distribution during exponent expansion. Quick self-check: recount powers like 81, 64, 32 in your head — 3⁴=81, 2⁶=64, 2⁵=32. After solving, always substitute back into the original equation and confirm both sides agree. Test-day tip: in exponential equations, unifying the base is priority one. Keep conversions like 81=3⁴, 27=3³, 16=2⁴ in your fingers so you save time on test day.",
                            },
                            {
                                "title": "Released Exam 7: Inequalities — Flipping the Sign When Dividing by a Negative",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "What is the range of $x$ satisfying the inequality $-5x + 3 > 28$?",
                                "options": [
                                    "x > -5",
                                    "x < -5",
                                    "x > 5",
                                    "x < 5"
                                ],
                                "answer": "x < -5",
                                "explanation": "This question's trap is forgetting to reverse the inequality when dividing or multiplying by a negative. Solving mechanically like an equation produces the choice x>-5 — which the test maker places first to lure the hasty. Here is the step-by-step solution. First, transpose the constant: -5x>28-3, i.e., -5x>25. Second, divide both sides by -5. Dividing by a negative flips the inequality: x<-5. Third, verify. Plugging x=-6 gives -5×(-6)+3=33>28, which holds; x=-4 gives 20+3=23>28, which is false — so left of the boundary -5 is correct. Wrong-answer rebuttal: x>-5 skips the flip — this problem's signature trap. x>5 mishandles the sign during transposition. x<5 botches both the constant arithmetic (28-3=25) and the sign handling. Quick self-check: when solving inequalities, mark the inequality the moment you divide by a negative, then test one number on each side of the boundary after solving. Test-day tip: when the four choices are just combinations of inequality direction and boundary sign, the test maker is hunting sign slips. Work slowly, one line at a time, and lock it in with a substitution check at the end.",
                            },
                            {
                                "title": "Released Exam 8: Statistics — Mean vs. Median",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "For the five numbers 4, 6, 9, 11, 30, what is (mean) − (median)?",
                                "options": [
                                    "3",
                                    "6",
                                    "12",
                                    "21"
                                ],
                                "answer": "3",
                                "explanation": "This question's trap is twofold. First, being pulled by the outlier 30 and using the maximum instead of the mean. Second, skipping the division when computing the mean and using the total as-is. Here is the step-by-step solution. First, find the mean. The total is 4+6+9+11+30=60, with 5 data points, so the mean is 60÷5=12. Second, find the median. The data is already sorted, so the middle — third — value 9 is the median. Third, the difference: 12-9=3. Note the tendency: a large outlier like 30 pulls the mean above the median — here the gap is 3. Wrong-answer rebuttal: 6 comes from botching the division in the mean computation or misreading the median as 6. 12 uses the mean itself as the answer — the slip of skipping the final median subtraction. 21 is 30-9, subtracting the median from the maximum — the choice for students caught by the use-the-maximum-instead-of-the-mean trap. Quick self-check: separately verify that you divided the total by the count for the mean, and that the median is the middle of sorted data. Also use direction sense for estimation: an outlier drags the mean toward itself. Test-day tip: statistics choices often shuffle mean, median, maximum, and total. Re-read the question's last line to check what you computed, and ask once more whether your value is a mean or a total.",
                            },
                            {
                                "title": "Released Exam 9: Circle Equations — Completing the Square",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "What is the radius of the circle $x^2 + y^2 - 10x + 4y + 20 = 0$?",
                                "options": [
                                    "3",
                                    "6",
                                    "9",
                                    "20"
                                ],
                                "answer": "3",
                                "explanation": "This question's trap is picking 9 — the square of the radius — as the answer. After completing the square, the number left on the right side is r²; forget that and mistake it for r, and you'll pick 9 — which the test maker always includes. Here is the step-by-step solution. First, group the x and y terms: (x²-10x)+(y²+4y)+20=0. Second, complete the squares: x²-10x=(x-5)²-25, y²+4y=(y+2)²-4. Third, substitute and simplify: (x-5)²-25+(y+2)²-4+20=0, so (x-5)²+(y+2)²=9. Fourth, compare with standard form (x-a)²+(y-b)²=r²: r²=9, so r=3 (radius is positive). Wrong-answer rebuttal: 9 mistakes r² for r — this problem's core trap. 6 computes the diameter instead of the radius, a common circle confusion. 20 links the constant term to the radius — the choice for students who grab a visible number without completing the square. Quick self-check: after the transformation, check that the center (5, -2) has signs opposite the original x, y coefficients, and that the right-side number needs a square root. From r²=9, r=±3, but length is positive, so 3. Test-day tip: on circle-equation problems, write the center and radius separately once the square is complete. The choices mix r², diameter, and the constant term — re-check what was asked at the end.",
                            },
                            {
                                "title": "Released Exam 10: Multi-Step — Finding Two Numbers from Sum and Product",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Two numbers have sum 18 and product 72. What is the larger number minus the smaller?",
                                "options": [
                                    "3",
                                    "6",
                                    "9",
                                    "12"
                                ],
                                "answer": "6",
                                "explanation": "This question's trap is stopping after finding the two numbers and skipping the final subtraction. Finding 12 and 6 and then picking 12 itself is the most common slip — and the test maker includes 12. Here is the step-by-step solution. First, call the numbers a and b: a+b=18, ab=72. Second, a and b are the two roots of t²-18t+72=0 (Vieta's formulas). Third, factor: t²-18t+72=(t-12)(t-6)=0, so the numbers are 12 and 6. Fourth, the required larger-minus-smaller is 12-6=6. Checking: the sum is 18 and the product is 72, matching the conditions. Wrong-answer rebuttal: 3 comes from mishandling coefficients during factoring — verify by expanding (t-12)(t-6) to t²-18t+72 and it's ruled out. 9 is the numbers' average (18÷2) — the division-instead-of-subtraction answer. 12 is the larger number itself — the choice for students caught by the skip-the-final-subtraction trap. Quick self-check: on multi-step problems, re-read what was asked at the end — not what you found. Plugging your two numbers into the original conditions (sum and product) blocks wrong answers. Test-day tip: given sum and product, setting up t²-(sum)t+(product)=0 is the fastest route. If it doesn't factor, use the quadratic formula; if that still fails, call the difference d and solve the system.",
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
                    "title": "Unit 6: Released-Exam Style Practice (Reading & Writing)",
                    "insight": "This is a practice set reproducing the passage style of real College Board exams. Vocabulary questions target logical relationships in context (negation, contrast), reading questions target the range the passage actually supports, and grammar questions target the true subject hiding behind modifiers. Each explanation covers the trap's identity, the step-by-step solution, an individual rebuttal of all four choices, and a self-check method — so you'll never fall for the same trap type again.",
                    "topics": [
                        "Mixed review",
                        "Test strategy",
                        "Passage Reading",
                        "Grammar & Rhetoric",
                    ],
                    "lectures": [],
                    "examples": [],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Released Exam 1: Vocabulary in Context — Spotting the Logic",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "The committee's final report was far from ___: its recommendations were so vague and heavily qualified that officials could justify almost any course of action by citing it.<br><br>Which word best fits the blank?",
                                "options": [
                                    "ambiguous",
                                    "concise",
                                    "decisive",
                                    "provocative"
                                ],
                                "answer": "decisive",
                                "explanation": "This question's trap is eyeballing the blank from 'far from' alone without reading the explanation after the colon. 'Far from' sets up a negation, so the blank must take the opposite of the quality described after the colon (vague, heavily qualified). Here is the step-by-step solution. First, map the sentence's logic. 'Far from ___' is followed by a colon, so what follows explains the blank word — or its opposite. Second, read past the colon. The recommendations were vague and so heavily qualified that any action could be justified — meaning the report was far from being decisive. Third, pick the word opposite in meaning to vague: decisive (resolute, clear) fits. Wrong-answer rebuttal: ambiguous (vague) means the same as the post-colon's 'vague,' so combined with 'far from' the whole sentence contradicts itself. This choice is the trap for students pulled by a near-synonym while ignoring the logic. Concise has no textual support — nothing says the recommendations were wordy. Provocative has no mention of provocativeness anywhere in the passage — an unsupported choice. Quick self-check: on vocabulary questions, first mark the logic connectors around the blank (far from, but, however, colon), decide whether the post-colon/dash explanation points the same way as the blank or the opposite way, then plug in the choices. Test-day tip: if a choice resembles a passage word (ambiguous≈vague), suspect it first. SAT vocabulary questions test logic, not synonyms.",
                            },
                            {
                                "title": "Released Exam 2: Literary Passage — Finding the Central Idea",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "When Mara returned to the coastal town where she had grown up, she expected the familiar streets to feel like home. Instead, the bakery on the corner had become a cafe she did not recognize, and neighbors she once knew greeted her as a stranger. She felt, oddly, like a tourist in her own memory — welcomed by the sea air, yet shut out of the life that continued without her.<br><br>Which of the following best states the central idea of Mara's experience in the passage?",
                                "options": [
                                    "Nostalgia for her hometown left her disappointed.",
                                    "Even familiar places can feel unfamiliar over time.",
                                    "She decided to leave her hometown forever.",
                                    "The neighbors welcomed her warmly.",
                                ],
                                "answer": "Even familiar places can feel unfamiliar over time.",
                                "explanation": "This question's trap is reacting only to the passage's emotions (disappointment, nostalgia) and picking a choice about the feeling. The central idea isn't the character's emotion — it's the general insight revealed through it. Here is the step-by-step solution. First, find the expectation-vs-reality contrast. She expected familiarity, but the bakery had become an unrecognized cafe and neighbors treated her like a stranger. Second, read the key metaphor: 'like a tourist in her own memory' means a place from her own memories felt unfamiliar. Third, generalize: even once-familiar places can come to feel unfamiliar with time — that's the central idea. Wrong-answer rebuttal: 'Nostalgia for her hometown left her disappointed' stays at the level of emotion and misses the passage's insight (time's passage causing the unfamiliarity). 'She decided to leave her hometown forever' invents a decision the text never mentions — no textual basis. 'The neighbors welcomed her warmly' misreads the detail in the exact opposite way ('greeted her as a stranger') — the misread-detail trap. Quick self-check: for central-idea choices, suspect each of the four types — too specific (only a feeling or event), too broad (beyond the passage), opposite, invented (no basis). The right answer covers the whole passage without leaving it. Test-day tip: underline key-metaphor sentences like 'like a tourist in her own memory' and compare the choices directly against the metaphor.",
                            },
                            {
                                "title": "Released Exam 3: Data-Based Inference — Interpreting Results",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Researchers grew three groups of seedlings under identical conditions except for light color: red, blue, and white light. After four weeks, the average heights were 12.4 cm under red light, 8.1 cm under blue light, and 10.6 cm under white light. The researchers concluded that light color affects growth rate.<br><br>Which statement is best supported by the data above?",
                                "options": [
                                    "Red light promotes seedling growth more than blue light.",
                                    "White light promotes growth more than every other color of light.",
                                    "Light color has no effect on seedling growth.",
                                    "Blue light makes seedlings grow 4.3 cm taller than red light.",
                                ],
                                "answer": "Red light promotes seedling growth more than blue light.",
                                "explanation": "This question's trap is inventing comparisons the data never makes, or reading the numbers swapped. Data questions demand answers strictly within what the text states. Here is the step-by-step solution. First, check the conditions. All conditions except light color were identical, so height differences can be attributed to light color. Second, compare the numbers: red 12.4 cm > white 10.6 cm > blue 8.1 cm. Third, check each choice against the numbers. 'Red light promotes growth more than blue light' is supported by 12.4>8.1. Wrong-answer rebuttal: 'White light promotes growth more than every other color' flatly contradicts the numbers, since red's 12.4 cm exceeds white's 10.6 cm. 'Light color has no effect on seedling growth' is the exact opposite of the researchers' conclusion (that light color affects growth rate) and denies the height differences themselves. 'Blue light makes seedlings grow 4.3 cm taller than red light' gets the 4.3 cm difference right (12.4-8.1=4.3) but flips the direction — the numbers are right and the interpretation is wrong, a sly trap. Quick self-check: on data questions, check each choice's subject, comparison target, number, and direction against the data one item at a time. Watch especially for choices with the direction of the difference flipped. Test-day tip: suspect any choice with group comparisons or causal explanations ('why') not in the passage, and keep only what the data directly shows.",
                            },
                            {
                                "title": "Released Exam 4: Research Summary — Reading the Implication",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "A team of neuroscientists asked 60 adults to learn a list of word pairs, then tested their recall either after a full night of sleep or after staying awake. The sleep group recalled 72% of the pairs on average, while the awake group recalled 54%. The researchers noted that the advantage persisted even when total study time was identical, suggesting that sleep itself — not extra practice — consolidates memory.<br><br>Which of the following is most strongly suggested by this study?",
                                "options": [
                                    "Sleep contributes to memory consolidation even without extra studying.",
                                    "Total study time determines memory performance.",
                                    "Sleep harms word-pair learning.",
                                    "A 54% recall rate is at chance level.",
                                ],
                                "answer": "Sleep contributes to memory consolidation even without extra studying.",
                                "explanation": "This question's trap is ignoring the study's controlled condition (identical study time) and jumping to conclusions from the correlation alone. The key sentence is the last one: 'sleep itself — not extra practice' states the study's implication directly. Here is the step-by-step solution. First, grasp the design: a sleep group and a wake group, with study time controlled to be identical. Second, check the results: 72% for the sleep group versus 54% for the wake group. Third, read the researchers' interpretation: since the advantage held even with identical study time, sleep itself consolidates memory. Wrong-answer rebuttal: 'Total study time determines memory performance' runs head-on into the controlled variable (identical study time) — an interpretation the passage explicitly rules out. 'Sleep harms word-pair learning' is the opposite of the 72%>54% result — the trap of swapped group labels. 'A 54% recall rate is at chance level' imports a benchmark the passage never mentions — a choice with no textual basis. Quick self-check: in research passages, find the researchers' interpretation (suggesting, indicating, concluded) in the last sentence or two first, then check that the choice points the same way. Test-day tip: underline control/exclusion phrases like 'even when' and 'not extra practice,' and immediately eliminate any choice naming a controlled variable as the cause.",
                            },
                            {
                                "title": "Released Exam 5: Historical Document — Reading the Author's Purpose",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "The following is an excerpt from an 18th-century political document. 'We hold that a government derives its just powers from the consent of the governed, and that whenever any form of government becomes destructive of these ends, it is the right of the people to alter or to abolish it.'<br><br>What is the author's primary purpose in making this argument?",
                                "options": [
                                    "To establish the legitimacy of resistance against the current government.",
                                    "To explain the government's economic role.",
                                    "To strengthen the monarch's authority.",
                                    "To urge a military alliance with foreign powers.",
                                ],
                                "answer": "To establish the legitimacy of resistance against the current government.",
                                "explanation": "This question's trap is being overwhelmed by the document's formal, declarative style and missing the concrete claim ('the right to alter or abolish'). Purpose questions ask not what was said but why it was said. Here is the step-by-step solution. First, extract the core claim: a government's just powers come from the consent of the governed, and when government destroys those ends, the people have the right to alter or abolish it. Second, consider the context of the claim: it's the logic justifying resistance against the current regime. Third, match the choices: 'to establish the legitimacy of resistance against the current government' corresponds directly. Wrong-answer rebuttal: 'To explain the government's economic role' has no mention of economics in the passage — a baseless choice. 'To strengthen the monarch's authority' points the opposite way from the people's right to alter or abolish — the direction-flipped trap. 'To urge a military alliance with foreign powers' drags in an external topic unrelated to the passage's domestic political claim. Quick self-check: on purpose questions, draw the claim's direction as an arrow (whose rights are being established?) and keep only choices pointing the same way. Immediately eliminate choices with topics absent from the passage (economics, diplomacy). Test-day tip: in historical documents, normative declarations like 'it is the right of the people' are purpose clues. Ask who benefits from the declaration and the answer appears.",
                            },
                            {
                                "title": "Released Exam 6: Grammar — The True Subject Behind the Modifiers",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "The collection of rare manuscripts, which includes letters dating back to the 1700s, ___ housed in the university's special archive.<br><br>Which choice best completes the sentence?",
                                "options": [
                                    "is",
                                    "are",
                                    "were",
                                    "have been"
                                ],
                                "answer": "is",
                                "explanation": "This question's trap is being pulled by the plural noun right before the verb (manuscripts) and picking 'are.' The relative clause 'which includes...' is just an inserted modifier; the true subject is 'The collection' (singular) at the sentence's start. Here is the step-by-step solution. First, strip the modifiers. 'Of rare manuscripts' is a prepositional phrase and 'which includes letters dating back to the 1700s' is a relative clause — neither contains the subject. Second, the remaining skeleton is 'The collection ___ housed.' Third, the subject 'collection' is singular, so the singular verb 'is' fits, and the tense is a general present statement, so 'is' works. Wrong-answer rebuttal: 'are' is pulled by the plural noun 'manuscripts' — the signature trap of mistaking a prepositional phrase's object for the subject. 'Were' is pulled by the past-time phrase 'dating back to the 1700s,' but the housing is a present fact, so past tense doesn't fit. 'Have been' fails before subject-verb agreement even matters: the slot needs a passive ('be housed'), so the form itself is wrong. Quick self-check: when you see 'of,' 'which,' 'who,' or 'that' around the blank, bracket out the modifiers and compare only the remaining subject and verb. The true subject is the noun phrase left at the sentence's start after the modifiers are stripped. Test-day tip: on SAT grammar, the noun right before the verb is probably NOT the subject. Prepositional-phrase-plus-relative-clause double modifiers are a favorite trap pattern — lock in the subject before looking at the choices.",
                            },
                            {
                                "title": "Released Exam 7: Transitions — Logic Between Sentences",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "City officials promised that the new transit line would reduce commute times by twenty minutes. ___ a follow-up study found that average commute times actually increased by five minutes after the line opened.<br><br>Which transition best fits the blank?",
                                "options": [
                                    "Therefore",
                                    "However",
                                    "For example",
                                    "Moreover"
                                ],
                                "answer": "However",
                                "explanation": "This question's trap is relaxing because the two sentences share a topic (commute times) and picking an addition/continuation transition. Same topic with opposite logical directions still needs a contrast word. Here is the step-by-step solution. First, fix the first sentence's direction: a positive promise that commute times would drop by 20 minutes. Second, fix the second sentence's direction: the negative result that times actually rose by 5 minutes. 'Actually' is the reversal signal. Third, promise versus result is a contrast, so the contrast transition 'However' fits. Wrong-answer rebuttal: 'Therefore' is for when the first sentence causes the second — but a promise doesn't cause the result, so the logic fails. 'For example' is for when the second sentence exemplifies the first — but the follow-up result rebuts the promise rather than exemplifying it. 'Moreover' adds same-direction content — unusable between two opposite-direction sentences. Quick self-check: on transition questions, mark each side of the blank with a direction arrow (positive/negative, claim/rebuttal): same direction → continuation/addition, different → contrast. Underline reversal signals like 'actually,' 'in fact,' 'yet.' Test-day tip: plugging each choice into the sentence and reading it (the substitution test) is the surest method. 'However' reads the promise-reality contrast smoothly, while 'Therefore' makes the awkward sentence where a promise caused longer commutes.",
                            },
                            {
                                "title": "Released Exam 8: Punctuation — The Colon Before a List",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Which of the following sentences uses punctuation correctly?",
                                "options": [
                                    "The survey identified three main concerns among residents: traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents; traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents, traffic congestion, rising housing costs, and limited parking.",
                                    "The survey identified three main concerns among residents: traffic congestion; rising housing costs; and limited parking."
                                ],
                                "answer": "The survey identified three main concerns among residents: traffic congestion, rising housing costs, and limited parking.",
                                "explanation": "This question's trap is mixing up the roles of the colon and the semicolon. A colon goes before a list; a semicolon joins independent clauses — know the rule cold. Here is the step-by-step solution. First, check before the colon. 'The survey identified three main concerns among residents' is a complete sentence (subject + verb + object). Second, check after the colon. 'Traffic congestion, rising housing costs, and limited parking' is the list of the announced 'three main concerns.' A complete sentence followed by a list takes a colon. Third, commas suffice inside the list; semicolons are used only when the items themselves are long or contain commas. Wrong-answer rebuttal: the second choice's semicolon is followed by a list, not a complete clause — wrong usage. A semicolon joins independent clause to independent clause. The third choice's comma-only version collapses the sentence boundary, sticking a list right after a complete sentence — the error of using a comma where a colon belongs. The fourth choice's semicolons between list items are overkill: the items are short with no internal commas. Quick self-check: read with your finger to confirm the pre-colon part is a complete sentence. If it's incomplete (e.g., ending without a verb, like 'The concerns are:'), no colon allowed. If you see semicolons with no commas inside the items, suspect them. Test-day tip: SAT punctuation rules are simple. Colon = complete sentence + explanation/list; semicolon = independent clause + independent clause. Apply those two formulas exactly and three of the four choices eliminate themselves mechanically.",
                            },
                            {
                                "title": "Released Exam 9: Finding Evidence — The Sentence That Directly Supports the Claim",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Dr. Lena Ortiz spent a decade cataloging deep-sea sponges off the Pacific coast. Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria. 'These organisms have survived for 500 million years,' Ortiz said. 'Their chemistry is a library we have barely begun to read.' Pharmaceutical researchers are now studying the compounds for potential new antibiotics.<br><br>What is the most direct evidence for the claim that the chemical properties of deep-sea sponges may have medical value?",
                                "options": [
                                    "'These organisms have survived for 500 million years,'",
                                    "'Their chemistry is a library we have barely begun to read.'",
                                    "Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria.",
                                    "Dr. Lena Ortiz spent a decade cataloging deep-sea sponges off the Pacific coast."
                                ],
                                "answer": "Her team discovered that certain sponges produce compounds that slow the growth of harmful bacteria.",
                                "explanation": "This question's trap is being charmed by the quotation's literary appeal and picking a metaphorical line as evidence. 'Their chemistry is a library' is elegant, but the direct evidence of medical value is the discovery itself: sponge compounds slow the growth of harmful bacteria. Here is the step-by-step solution. First, pin down the claim: chemical properties may have medical value — the chemistry-to-medicine (bacteria, antibiotics) link is the core. Second, check whether each choice shows that link directly. Third, the discovery that sponges produce compounds slowing harmful bacteria directly proves the chemistry–medicine link — that's the answer. Wrong-answer rebuttal: 'These organisms have survived for 500 million years' is about survival duration, not directly linked to the medical effect of the chemicals. 'Their chemistry is a library we have barely begun to read' is metaphorical — it hints at research potential but isn't direct evidence of medical value. It's the trap for students drawn to the quotation's form. 'Dr. Lena Ortiz spent a decade cataloging...' is background about the research — context, not evidence for the claim. Quick self-check: on evidence questions, pull the claim's keywords (here: chemical properties, medical value) and check that both appear directly in each choice. The prettier the quotation, the more suspicious you should be. Test-day tip: when you see 'directly support,' pick the sentence that directly states cause or effect, and eliminate background, time spans, and metaphors. The answer is usually the driest, most factual sentence.",
                            },
                            {
                                "title": "Released Exam 10: Concision — Choosing the Cleanest Sentence",
                                "difficulty": "hard",
                                "tags": [
                                    "Released Exam",
                                ],
                                "question": "Which choice most concisely and grammatically correctly revises the underlined portion?<br><br>Due to the fact that the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                "options": [
                                    "Due to the fact that the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "Because the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "The experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                    "Being conducted in a laboratory setting, the results may not be applicable to real-world conditions."
                                ],
                                "answer": "Because the experiment was conducted in a laboratory setting, the results may not be applicable to real-world conditions.",
                                "explanation": "This question's trap is twofold. First, the safe pick of leaving the original as is. 'Due to the fact that' is classic wordiness replaceable by the single word 'because.' Second, the concise-looking choice hiding a grammar error (comma splice, dangling modifier). Here is the step-by-step solution. First, find the original's wordiness: 'due to the fact that' shortens to 'because.' Second, check each choice's grammar. The 'Because'-led dependent-clause-plus-main-clause structure is complete and correct. Third, pick the choice satisfying both concision and grammar: the 'Because' version. Wrong-answer rebuttal: the unchanged original isn't grammatically wrong, but under SAT concision rules it's the penalized choice for keeping a reducible phrase. The third choice joins two independent clauses with a single comma — a comma splice: concise-looking but grammatically wrong. The fourth choice's 'Being conducted...' makes 'the results' its subject, reading as if the results were conducted rather than the experiment — a dangling-modifier error. Quick self-check: on concision questions, first screen each choice for grammar errors (comma splice, dangling, agreement) to eliminate, then pick the shortest survivor. Always suspect chunky phrases like 'due to the fact that,' 'in order to,' 'in spite of the fact that.' Test-day tip: the shortest choice is likely the answer, but don't pick it for shortness alone — check grammar first. The SAT demands concision and correctness together.",
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "sat-trends",
            "title": "SAT Trends & Concept Review (2020-2026)",
            "code": "SAT-T",
            "description": "A section organizing test trends and core concepts by year, from the 2020 paper SAT through the post-2024 digital transition. Based on analysis of College Board released exams and official practice questions, it describes trend direction rather than exact statistics, focusing on grasping the flow of what's tested.",
            "color": "#10b981",
            "icon": "fas fa-chart-line",
            "intuition": "Even when the SAT's format changes, the skeleton of tested concepts barely shifts. Knowing the yearly trends tells you which concepts appear on every test and which ones separate high scorers. Students who know the trends can sequence their studying; students who don't just memorize everything.",
            "local_resources": [],
            "difficulty": "advanced",
            "units": [
                {
                    "title": "2020: COVID and the Last Golden Age of the Paper SAT",
                    "insight": "2020 was the year COVID-19 canceled spring tests en masse and the test-optional wave took off. The format was still the paper SAT: Reading 52 questions/65 minutes, Writing and Language 44 questions/35 minutes, Math 58 questions/80 minutes (including a 20-question/25-minute No Calculator section), 3 hours total. The Essay (50 minutes) was still alive as an optional add-on. Math trends leaned heavily on algebra (Heart of Algebra), with factoring, radical expressions, and basic complex numbers appearing steadily in the No Calculator section. R&W centered on 500–750-word long-passage evidence pairs and vocabulary in context.",
                    "topics": [
                        "Understanding the Paper SAT format: R 52/65 · W 44/35 · M 58/80 (includes the No Calculator section)",
                        "Math TOP: linear equations & systems, quadratic functions, exponential models, No Calculator algebra",
                        "R&W TOP: long-passage evidence pairs, words in context, standard English grammar",
                        "Roadmap step 1: paper-era must-know concepts are often still must-know today",
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Linear Equations & Inequalities in Context",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: setting up variables and equations in real-world contexts (fees, speed, budgets)",
                                "Key points: flipping the inequality sign (dividing by a negative), checking that the answer fits the context",
                            ],
                            "intuition": "The starting point of SAT algebra, and the most-tested area on both paper and digital.",
                        },
                        {
                            "title": "[Math] Systems of Equations",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: determining the number of solutions (comparing slopes and intercepts), substitution and elimination",
                                "Key points: no-solution and infinitely-many-solutions conditions, connecting to graph interpretation",
                            ],
                            "intuition": "Elimination is often faster than substitution, and number-of-solutions questions end at the slopes.",
                        },
                        {
                            "title": "[Math] Quadratic Equations & Functions",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: factoring, the quadratic formula, completing the square; vertex and root locations",
                                "Key points: using the discriminant for the number of roots, converting to vertex form y=a(x-h)^2+k",
                            ],
                            "intuition": "A No Calculator section regular in the paper era, and still the heart of Advanced Math on digital.",
                        },
                        {
                            "title": "[Math] Exponential Functions & Models",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: real-world exponential models like population growth, radioactive decay, compound interest",
                                "Key points: in y=ab^x, b>1 grows and 0<b<1 decays; reading the initial value a",
                            ],
                            "intuition": "Long sentences, simple equations. They only ask what each letter of the model means.",
                        },
                        {
                            "title": "[Math] No Calculator Algebra",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: polynomial multiplication and division, rational-expression simplification, radical and exponent laws",
                                "Key points: the paper-era No Calculator section's core; on digital every question allows a calculator, so the burden is lighter",
                            ],
                            "intuition": "The pain of 2020 vanished with the 2024 digital transition. Train hand computation only for concept understanding.",
                        },
                        {
                            "title": "[Math] Ratios, Percents & Proportions",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Signature types: percent increase/decrease, unit conversion, direct and inverse proportion",
                                "Key points: a p% increase means multiplying by (1+p/100); watch out for base confusion",
                            ],
                            "intuition": "The basics of Problem Solving and Data Analysis. Looks easy, but the traps are many.",
                        },
                        {
                            "title": "[Math] Statistics Basics & Data Interpretation",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: mean, median, mode; reading scatterplots and histograms",
                                "Key points: how outliers move the mean, limits of sample-to-population inference",
                            ],
                            "intuition": "Interpretation matters more than computation. Read the story the graph is telling.",
                        },
                        {
                            "title": "[Math] Geometry: Triangles & Circles",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: Pythagoras, special triangles (30-60-90, 45-45-90), circle circumference and area",
                                "Key points: drawing auxiliary lines; similarity ratio squared = area ratio",
                            ],
                            "intuition": "Mid-weight in the paper era. Geometry problems demand that you draw the figure yourself.",
                        },
                        {
                            "title": "[Math] Complex Number Basics",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Signature types: the powers-of-i cycle, the four operations on complex numbers",
                                "Key points: i^2=-1, rationalizing denominators with the complex conjugate",
                            ],
                            "intuition": "Rarely tested, but easy points when it appears. The i^4=1 cycle is all you need.",
                        },
                        {
                            "title": "[Math] Function Concepts & Graph Reading",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Signature types: evaluating f(x), reading domain, range, and increase/decrease from graphs",
                                "Key points: function values by substitution; horizontal/vertical shifts flip inside/outside signs oppositely",
                            ],
                            "intuition": "The language of every algebra problem. Getting fluent in function notation is the shared task since 2020.",
                        },
                        {
                            "title": "[R&W] Evidence Pair",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: choosing the passage lines that support the previous question's claim",
                                "Key points: lock in the previous question first; the evidence question only asks whether it supports that answer",
                            ],
                            "intuition": "The signature of paper-era R&W. Carried into digital as Command of Evidence (textual).",
                        },
                        {
                            "title": "[R&W] Main Idea",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: choosing the gist of the whole passage or the author's central claim",
                                "Key points: eliminate choices that are too narrow or too broad; track repeated keywords",
                            ],
                            "intuition": "The first question asked whether the passage is long or short. The topic is scattered throughout the passage.",
                        },
                        {
                            "title": "[R&W] Words in Context",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: choosing the meaning closest to the underlined word in context",
                                "Key points: judge by the word's role in the sentence, not its usual meaning; find clues before and after",
                            ],
                            "intuition": "Tests context reading more than vocabulary. Even hard words come with sentence hints.",
                        },
                        {
                            "title": "[R&W] Inference",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: choosing the conclusion that logically follows from the passage",
                                "Key points: no adding information beyond the passage; pick the weakest claim (the safest choice)",
                            ],
                            "intuition": "Inference is logic, not imagination. Go only as far as the passage allows.",
                        },
                        {
                            "title": "[R&W] Author's Purpose & Perspective",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: a paragraph's function, identifying the author's attitude and purpose",
                                "Key points: watch the predicate verbs (claims, rebuts, exemplifies)",
                            ],
                            "intuition": "Asks why this paragraph is here. Read the passage's blueprint.",
                        },
                        {
                            "title": "[R&W] Sentence Structure & Punctuation",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Signature types: comma, semicolon, colon, and dash usage; sentence boundaries (run-on/fragment)",
                                "Key points: semicolon = complete sentence + complete sentence; colon = previews an explanation or list",
                            ],
                            "intuition": "The heavyweight Writing area. The rules are clear, so a hit here is a sure hit.",
                        },
                        {
                            "title": "[R&W] Subject-Verb Agreement & Modifiers",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Signature types: subject-verb number agreement, pronoun antecedents, modifier placement",
                                "Key points: skip the prepositional phrase to find the true subject; singular/plural traps",
                            ],
                            "intuition": "Half of grammar questions are a find-the-subject game. Strip the long modifiers and it shows.",
                        },
                        {
                            "title": "[R&W] Sentence Connections & Transitions",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: choosing the transition that fits the logical relation between or within paragraphs",
                                "Key points: judge the relation first — contrast (however), cause (therefore), addition (furthermore)",
                            ],
                            "intuition": "Transitions are logic's signposts. First explain the two sentences' relation in words.",
                        },
                        {
                            "title": "[R&W] Concision & Style Consistency",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: cutting redundancy, choosing expressions that fit the tone",
                                "Key points: when meanings match, pick the shorter choice; check it fits the passage's overall tone",
                            ],
                            "intuition": "The area that continues into digital's Expression of Ideas. Short and precise wins.",
                        },
                        {
                            "title": "[R&W] Chart & Graph Paired Reading",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Signature types: judging whether passage claims match graph data",
                                "Key points: check the graph's axes and units first; verify passage claims against the data",
                            ],
                            "intuition": "It existed in the 2020 paper era too, and expanded on digital as Command of Evidence (Quantitative).",
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: No Calculator Algebra",
                                "difficulty": "easy",
                                "question": "In the style of the 2020 paper SAT's No Calculator section: expanding (x + 3)(x - 5) gives?",
                                "options": [
                                    "x^2 - 2x - 15",
                                    "x^2 + 2x - 15",
                                    "x^2 - 8x - 15",
                                    "x^2 - 2x + 15"
                                ],
                                "answer": "x^2 - 2x - 15",
                                "explanation": "Distributing gives x*x = x^2, x*(-5) = -5x, 3*x = 3x, 3*(-5) = -15. Combining like terms, -5x + 3x = -2x, so the answer is x^2 - 2x - 15. The paper-era No Calculator section measured the ability to do basic expansion and factoring quickly and accurately by hand, and even after the digital transition, accuracy in algebraic manipulation remains the prerequisite for the Advanced Math area. Sign slips are the most common wrong-answer cause, so after expanding, the habit of checking with an easy value like x=0 is the foundation of a high score.",
                            },
                            {
                                "title": "Self-Check 2: Evidence Pair Logic",
                                "difficulty": "medium",
                                "question": "Which of the following best describes an evidence-pair question on paper SAT Reading?",
                                "options": [
                                    "It is a question type that asks you to choose the passage excerpt supporting your answer to the previous question",
                                    "It is a question type that asks about background knowledge unrelated to the passage",
                                    "It is a question type that asks only for the dictionary definition of an underlined word",
                                    "It is a question type that can be solved just by reading numbers off a graph",
                                ],
                                "answer": "It is a question type that asks you to choose the passage excerpt supporting your answer to the previous question",
                                "explanation": "The evidence pair was the signature question type of paper SAT Reading, asked as a two-question set. After answering the passage's claim or inference in the first question, the next question asked you to choose the passage lines (usually cited by line numbers) that directly support that answer. The strategy is to lock in the first question first — if the first answer wobbles, the evidence question falls with it. This type was carried into digital SAT as Command of Evidence (textual) questions, and with passages shortened to 25–150 words, the evidence-hunting range actually narrowed. Training on long passages transfers directly to short ones.",
                            },
                            {
                                "title": "Self-Check 3: Sentence Boundaries & Punctuation",
                                "difficulty": "medium",
                                "question": "Which of the following correctly joins two complete sentences into one? (Combine: The experiment failed. The data was useful.)",
                                "options": [
                                    "The experiment failed; the data was useful.",
                                    "The experiment failed, the data was useful.",
                                    "The experiment failed the data was useful.",
                                    "The experiment failed: the data was useful, however."
                                ],
                                "answer": "The experiment failed; the data was useful.",
                                "explanation": "The semicolon is the punctuation that joins two complete independent clauses. 'The experiment failed' and 'the data was useful' are each complete sentences with subject and verb, so joining them with a semicolon is grammatically correct. The second choice joins independent clauses with only a comma — a comma splice error; the third has no punctuation at all — a fused sentence error. The fourth choice tacks 'however' after a colon, which is awkward and structurally off. In the paper era, sentence-boundary questions were a high-frequency Writing area, carried straight into digital's Boundaries questions. The rule is clear, so once you organize it, it's a steady source of points.",
                            }
                        ]
                    }
                },
                {
                    "title": "2021: Essay Retired & the Paper SAT's Last Stable Era",
                    "insight": "In June 2021, the College Board officially retired the SAT Essay. The SAT stabilized as a 3-hour, essay-free paper test. With over 1,800 colleges keeping test-optional policies, test-taking strategy mattered. The tested trends themselves barely differed from 2020. In Math, quadratic functions, exponential models, and statistical inference kept appearing steadily, and in R&W, Command of Evidence, Words in Context, and standard grammar held stable shares. This era's official released exams remain useful for paper-based concept training today.",
                    "topics": [
                        "Essay retired June 2021: R&W moved to an integrated Reading+Writing comprehension-and-grammar system",
                        "Math TOP: quadratic function graphs, exponential growth and decay, sample inference, basic trig ratios",
                        "R&W TOP: evidence-based reading, words in context, sentence-boundary and agreement grammar",
                        "Study point: this era's released exams can be split by concept and recycled for digital prep",
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Quadratic Function Graphs",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: finding the vertex, axis of symmetry, and roots; recovering the equation from a graph",
                                "Key points: completing vertex form; judging upward/downward opening by the sign of a",
                            ],
                            "intuition": "Given the equation, draw the graph; given the graph, recover the equation. Two-way conversion is the key.",
                        },
                        {
                            "title": "[Math] Exponential Growth & Decay Models",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: interpreting real-world models of the form y=ab^(t/k)",
                                "Key points: base above 1 grows, below 1 decays. Reading doubling time and half-life",
                            ],
                            "intuition": "Exponential-model questions ask what each part of the equation means in reality. They're translation problems.",
                        },
                        {
                            "title": "[Math] Linear Functions: Slope and Intercept",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Signature types: slope from two points; the meaning of m and b in y=mx+b",
                                "Key points: slope = rate of change, intercept = initial value. Real-world interpretation is frequent",
                            ],
                            "intuition": "The most-seen single line in SAT algebra. Slope is rate of change.",
                        },
                        {
                            "title": "[Math] Polynomial Operations & Factoring",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Signature types: common factors, perfect squares, sum-difference formulas, polynomial division",
                                "Key point: Learn the (a+b)^2 and (a-b)(a+b) patterns cold — to the point of memorization",
                            ],
                            "intuition": "Factoring is the key to quadratics and rational expressions. Your score depends on how fast you recognize the patterns.",
                        },
                        {
                            "title": "[Math] Rational & Radical Expressions",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Simplifying rational expressions, rationalizing denominators, radical equations",
                                "Key point: For radical equations, always plug back into the original equation after squaring (watch out for extraneous roots)",
                            ],
                            "intuition": "Extraneous roots are the entire trap. If you skip the check, the problem was designed to catch you.",
                        },
                        {
                            "title": "[Math] Statistics: Sampling and Inference",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Conditions for generalizing survey results; intuition for confidence intervals",
                                "Key point: You can infer about a population only with a random sample of sufficient size",
                            ],
                            "intuition": "This is a judgment call, not a calculation. Who was sampled — and how — determines the answer.",
                        },
                        {
                            "title": "[Math] Probability Basics",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Simple probability, complementary events, reading conditional probability from tables",
                                "Key point: In two-way table (poll/survey table) problems, check what the denominator is",
                            ],
                            "intuition": "SAT probability isn't hard. It's closer to reading fractions off a table.",
                        },
                        {
                            "title": "[Math] Trigonometric Ratios Basics",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: sin, cos, tan in right triangles; cofunction relationships",
                                "Key point: SOH-CAH-TOA, sin(90°-θ)=cos θ",
                            ],
                            "intuition": "One right triangle is all you need. Name the angle and label the sides.",
                        },
                        {
                            "title": "[Math] Equations of Circles",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Finding the center and radius from (x-h)^2+(y-k)^2=r^2; completing the square",
                                "Key point: If given the general form, rewrite it by completing the square",
                            ],
                            "intuition": "Rarely tested, but the pattern never changes. One round of rewriting practice and you're done.",
                        },
                        {
                            "title": "[Math] Arithmetic & Geometric Sequences",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: nth-term and sum formulas; sequences in real-world contexts (savings, decay)",
                                "Key point: Understand the connection — arithmetic sequences are linear, geometric sequences are exponential",
                            ],
                            "intuition": "A sequence is just a special kind of function. Seeing it that way means fewer formulas to memorize.",
                        },
                        {
                            "title": "[R&W] Command of Evidence",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Choosing the text or data evidence that best supports a claim",
                                "Key point: Compress the claim into one sentence, then pick the choice that directly supports it",
                            ],
                            "intuition": "The paper-era evidence pair, evolved. The signature question type of digital R&W.",
                        },
                        {
                            "title": "[R&W] Inferences and Implications",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Conclusions that logically follow from the passage",
                                "Key point: Eliminate overgeneralizing choices; pick the safest answer within the passage's scope",
                            ],
                            "intuition": "Cook only with the ingredients the passage gives you. Don't go buy new ones.",
                        },
                        {
                            "title": "[R&W] Words in Context — Advanced",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Abstract academic/scientific vocabulary; words with multiple meanings",
                                "Key point: Identify the logic around the blank (contrast, cause-effect), then plug in candidate words",
                            ],
                            "intuition": "This isn't about memorizing words — it's about reading the sentence's logic.",
                        },
                        {
                            "title": "[R&W] Text Structure & Function",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: The role a specific sentence or paragraph plays in the whole text",
                                "Key point: Try classifying it as an example, a rebuttal, a transition, or a summary",
                            ],
                            "intuition": "The part reveals the whole. Imagine how the text would break if this sentence were removed.",
                        },
                        {
                            "title": "[R&W] Author's Perspective & Tone",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Identifying neutral, critical, or supportive attitudes",
                                "Key point: Collect evaluative words like adjectives and adverbs",
                            ],
                            "intuition": "Tone hides in word choice. Gather the evaluative words as if highlighting them, and the attitude shows itself.",
                        },
                        {
                            "title": "[R&W] Subject-Verb & Pronoun Agreement",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical types: Finding the real subject in a long subject phrase; ambiguous pronoun antecedents",
                                "Key point: Put which/that clauses and prepositional phrases in parentheses to expose the subject",
                            ],
                            "intuition": "The classic grammar question. The moment you strip the modifiers, the answer appears.",
                        },
                        {
                            "title": "[R&W] Tense & Mood Consistency",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Consistent tense within a paragraph; conditionals and the subjunctive",
                                "Key point: Match time adverbs (yesterday, since) with verb tenses",
                            ],
                            "intuition": "Tense is about syncing the paragraph's timetable. Adverbs are the hints.",
                        },
                        {
                            "title": "[R&W] Parallel Structure",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Making elements joined by and/or/but match in form",
                                "Key point: Use the first joined element's part of speech and form as the standard for the rest",
                            ],
                            "intuition": "Lists must match in form. Verbs with verbs, nouns with nouns.",
                        },
                        {
                            "title": "[R&W] Deciding Whether to Delete a Sentence",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Whether to delete a sentence unrelated to the paragraph's topic",
                                "Key point: Summarize the paragraph's main point in one line, then judge relevance",
                            ],
                            "intuition": "Even a good sentence gets deleted if it's off-topic. Relevance is the standard.",
                        },
                        {
                            "title": "[R&W] Reading Quantitative & Data Evidence",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Verifying passage claims with values from tables and graphs",
                                "Key point: Check units and axis scales; compare the claim's numbers against the data",
                            ],
                            "intuition": "Numbers don't lie, but axes can deceive. Check the units first.",
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Vertex of a Quadratic Function",
                                "difficulty": "easy",
                                "question": "What are the coordinates of the vertex of the quadratic function y = x^2 - 6x + 5?",
                                "options": [
                                    "(3, -4)",
                                    "(-3, 32)",
                                    "(3, 14)",
                                    "(-3, -4)"
                                ],
                                "answer": "(3, -4)",
                                "explanation": "The x-coordinate of the vertex is -b/2a = 6/2 = 3. Plugging it into the equation gives y = 9 - 18 + 5 = -4, so the vertex is (3, -4). Completing the square gives the same result: y = (x-3)^2 - 9 + 5 = (x-3)^2 - 4, which shows the vertex (3, -4) directly. The quadratic vertex is an essential concept tested steadily from the paper era through digital. Understanding the completed-square form — rather than just memorizing -b/2a — lets you solve root-location and max/min problems all at once. Watch out for sign errors, and build the habit of plugging the vertex back into the original equation to check.",
                            },
                            {
                                "title": "Self-Check 2: Conditions for Sample Inference",
                                "difficulty": "medium",
                                "question": "A random sample of 200 students at a high school found that 60% skip breakfast. Which is the correct interpretation of this result?",
                                "options": [
                                    "The percentage of students who skip breakfast can be estimated for this school's entire student body",
                                    "The eating habits of all high school students nationwide can be established",
                                    "We cannot even know the eating habits of the 200 surveyed students",
                                    "It proves a causal relationship between breakfast and grades",
                                ],
                                "answer": "The percentage of students who skip breakfast can be estimated for this school's entire student body",
                                "explanation": "A random sample can only be generalized to the population it was drawn from — this school's students. Extending it to all high school students nationwide would require a nationwide random sample, so the second choice is an overgeneralization. The third choice is wrong: the 200 respondents' answers were directly measured, so we do know them. The fourth choice is a causation error. This survey only shows an association (meal-skipping and responses), not proof that breakfast causes changes in grades. SAT statistics questions tend to probe these limits of inference rather than calculation. The key is asking who was sampled, how, and how far you can generalize.",
                            },
                            {
                                "title": "Self-Check 3: Words in Context",
                                "difficulty": "medium",
                                "question": "Science passage: 'The results _____ the hypothesis that the compound inhibits cell growth.' Which word best fits the blank? (Previous sentence: the experiment showed a 40% decrease in cell growth)",
                                "options": [
                                    "support",
                                    "undermine",
                                    "qualify",
                                    "complicate"
                                ],
                                "answer": "support",
                                "explanation": "The previous sentence reported a 40% decrease in cell growth, and the hypothesis is that the compound inhibits cell growth. Since the results point in the same direction as the hypothesis, the verb should express positive support — support is the best fit. undermine goes the opposite direction, and there is no basis in context for qualify (limiting) or complicate. Words in Context questions test the logic in the sentence, not dictionary definitions. First identify the cause-effect or contrast relationship around the blank, then plug in candidates — that's the standard approach.",
                            }
                        ]
                    }
                },
                {
                    "title": "2022: The Year of the Digital SAT Announcement & Pilot",
                    "insight": "In January 2022, the College Board officially announced the transition to the Digital SAT. International testing would switch in 2023, the U.S. in 2024. That fall, international pilot tests revealed what the new format would actually look like. The announced changes: short passages (25–150 words), one independent passage per question, two-stage adaptive modules, calculators allowed on all questions (built-in Desmos), and a 2-hour-14-minute test. The paper test itself kept trends similar to 2020–2021. This year's significance was the format announcement — not a content change.",
                    "topics": [
                        "January 2022 digital transition announcement: International 2023 and U.S. 2024 transition roadmap",
                        "5 announced format changes: short passages, adaptive, all-questions calculator, shorter test, Bluebook",
                        "Math TOP: the final paper year's polished algebra, functions, and statistics",
                        "R&W TOP: long-passage reading stamina + grammar accuracy (foundational skills that still matter for digital)",
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Number of Solutions to a System of Equations",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Determining the number of solutions by comparing the slopes and intercepts of two lines",
                                "Key point: Different slopes → one solution; same slope but different intercepts → no solution; everything the same → infinitely many solutions",
                            ],
                            "intuition": "You can tell without graphing. The slope says everything.",
                        },
                        {
                            "title": "[Math] Roots of Quadratic Equations",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Factoring, the quadratic formula, the discriminant, and relationships between roots and coefficients",
                                "Key point: Use the discriminant's sign for the number of real roots; if factoring fails, use the quadratic formula",
                            ],
                            "intuition": "There are three ways to solve a quadratic. Picking the right tool for the situation is the real skill.",
                        },
                        {
                            "title": "[Math] Function Values & Composite Functions",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Computing f(g(x)); reading function values from tables and graphs",
                                "Key point: Substitute from the inside out; in table problems, don't mix up rows and columns",
                            ],
                            "intuition": "Composite functions are like peeling an onion. Start from the innermost layer.",
                        },
                        {
                            "title": "[Math] Exponent Rules & Radical Operations",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: a^m·a^n, (a^m)^n, negative and fractional exponents",
                                "Key point: With the same base, add, subtract, or multiply the exponents",
                            ],
                            "intuition": "Exponent rules are a pattern, not a memorization list. Two steps: unify the base, then work the exponents.",
                        },
                        {
                            "title": "[Math] Combined Percent Increases & Decreases",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical types: Successive discounts and markups; working back to the original price",
                                "Key point: A 20% discount followed by a 20% markup is NOT the original price. Multiply — don't add.",
                            ],
                            "intuition": "Percents are multiplication, not addition. That one line is the entire trap.",
                        },
                        {
                            "title": "[Math] Scatterplots & Lines of Best Fit",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Predicting values with a trend line; direction and strength of correlation",
                                "Key point: Points on the trend line are predicted values; their difference from actual values is the residual",
                            ],
                            "intuition": "A scatterplot tells the data's story. Read the overall flow of the points.",
                        },
                        {
                            "title": "[Math] Similarity & Proportions",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Ratios of corresponding sides, areas, and volumes of similar figures",
                                "Key point: Length ratio k → area ratio k^2 → volume ratio k^3",
                            ],
                            "intuition": "Higher dimensions mean higher exponents. Keep length, area, and volume straight.",
                        },
                        {
                            "title": "[Math] Angles & Parallel Lines",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Corresponding, alternate interior, and same-side interior angles with parallel lines and a transversal",
                                "Key point: If the lines are parallel, alternate interior and corresponding angles are equal. Find the zigzag (Z).",
                            ],
                            "intuition": "One parallel condition solves an angle problem. Start by finding the Z shape.",
                        },
                        {
                            "title": "[Math] Absolute Value Equations",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: |x-a|=b; absolute value inequalities",
                                "Key point: Split into cases; graphically, understand the V-shaped bend",
                            ],
                            "intuition": "Absolute value is distance. |x-3|=5 means the points at distance 5 from 3.",
                        },
                        {
                            "title": "[Math] Quadratic Inequalities",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Solution sets of ax^2+bx+c>0",
                                "Key point: Graph it and judge which intervals are above or below the x-axis",
                            ],
                            "intuition": "Inequalities are graphing problems. Sketch the parabola and the answer shows itself.",
                        },
                        {
                            "title": "[R&W] Central Claims & Supporting Details",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Connecting a passage's claim to the details that support it",
                                "Key point: Summarize the claim in one line, then match each paragraph to the part of the claim it handles",
                            ],
                            "intuition": "A text is a building of claims and evidence. Separate the pillars (claims) from the bricks (evidence).",
                        },
                        {
                            "title": "[R&W] Distinguishing Word Nuances",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Choosing among similar-meaning words the one that fits the context's nuance",
                                "Key point: Positive/neutral/negative connotations and the strength spectrum (weak→strong)",
                            ],
                            "intuition": "Synonyms differ in nuance. Pick the word that matches the sentence's temperature.",
                        },
                        {
                            "title": "[R&W] Compare & Contrast Structure",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Identifying similarities and differences between two theories or phenomena",
                                "Key point: Mark contrast signal words (however, while, in contrast) and organize in a table",
                            ],
                            "intuition": "Turn a comparison passage into a table and you're done. One line for similarities, one line for differences.",
                        },
                        {
                            "title": "[R&W] Tracing Cause and Effect",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Mapping cause→effect chains; reverse-causation and third-variable traps",
                                "Key point: Signal words like because, lead to, and result in; distinguish correlation from causation",
                            ],
                            "intuition": "Happening together doesn't make it a cause. Claiming causation requires a mechanism.",
                        },
                        {
                            "title": "[R&W] Judging Sentence Additions & Deletions",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: The effect of adding a sentence at a specific spot; what is lost by deleting one",
                                "Key point: Check whether the logical connection to neighboring sentences is smooth and whether the topic drifts",
                            ],
                            "intuition": "A sentence has to get along with its neighbors. Check that it shakes hands with the sentences before and after.",
                        },
                        {
                            "title": "[R&W] Colon & Dash Usage",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical types: Explanations or lists after a colon; emphasis or insertion with dashes",
                                "Key point: A complete sentence comes before the colon; treat paired dashes like paired commas — an inserted phrase",
                            ],
                            "intuition": "A colon is a trailer. It signals that an important explanation is coming.",
                        },
                        {
                            "title": "[R&W] Participle & Infinitive Modifiers",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Dangling modifiers; to-infinitive usage",
                                "Key point: Check that the thing being modified comes right after the participial phrase",
                            ],
                            "intuition": "A modifier must sit right next to its owner. If it's far away, the meaning collapses.",
                        },
                        {
                            "title": "[R&W] Reordering Paragraphs & Logical Flow",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: The most logical sentence order; paragraph placement",
                                "Key point: Track demonstratives (this, such), chronological order, and the general→specific flow",
                            ],
                            "intuition": "There's a reason for every text's order. Check whether demonstratives point back to the previous sentence.",
                        },
                        {
                            "title": "[R&W] Integrating Graphs & Passages",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Evaluating passage claims against graph data",
                                "Key point: Distinguish what the graph shows from what it doesn't show",
                            ],
                            "intuition": "Data is the judge of claims. Check whether the claim accurately reflects the data.",
                        },
                        {
                            "title": "[R&W] Irony & Rhetorical Expression",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Grasping the real meaning of ironic or paradoxical expressions",
                                "Key point: The intended meaning in context — not the literal one — contrasted with the overall tone",
                            ],
                            "intuition": "Sometimes the surface meaning differs from the real one. The overall tone is the key to irony.",
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Number of Solutions to a System of Equations",
                                "difficulty": "easy",
                                "question": "How many solutions does the system 2x + 3y = 7, 4x + 6y = 10 have?",
                                "options": [
                                    "0 (no solution)",
                                    "1",
                                    "2",
                                    "Infinitely many",
                                ],
                                "answer": "0 (no solution)",
                                "explanation": "Divide the second equation by 2 to get 2x + 3y = 5. Compared with the first equation 2x + 3y = 7, the left sides are the same but the right sides differ. In slope form, the two lines are y = -(2/3)x + 7/3 and y = -(2/3)x + 5/3 — same slope, different y-intercepts, so they are parallel. Parallel lines never meet, so there is no solution. Determining the number of solutions by comparing slopes and intercepts (without graphing) is an essential question type common to both paper and digital. Remember the pattern: proportional coefficients but different constants → no solution; the entire equations proportional → infinitely many; different slopes → one solution.",
                            },
                            {
                                "title": "Self-Check 2: Announced Digital Transition Changes",
                                "difficulty": "medium",
                                "question": "Which of the following was NOT an announced change to the Digital SAT in 2022?",
                                "options": [
                                    "It was announced that calculators would be allowed on all questions (with built-in Desmos)",
                                    "It was announced that passages would become shorter (25–150 words)",
                                    "It was announced that the Essay would be revived",
                                    "It was announced that there would be two-stage adaptive modules",
                                ],
                                "answer": "It was announced that the Essay would be revived",
                                "explanation": "The College Board's January 2022 announcement of the Digital SAT previewed four key changes. First, passages would become short (25–150 words), with one independent passage per question. Second, a two-stage adaptive design: Module 2's difficulty would adjust based on Module 1 performance. Third, the no-calculator section would be eliminated — calculators allowed on all questions, with the Desmos graphing calculator built in. Fourth, test time would shrink from 3 hours to 2 hours 14 minutes. The Essay was discontinued in June 2021 and no revival was ever announced, so the third choice is the incorrect one. Knowing the format changes precisely is the starting point for building a study strategy.",
                            },
                            {
                                "title": "Self-Check 3: Colon Usage",
                                "difficulty": "medium",
                                "question": "Which sentence uses the colon correctly?",
                                "options": [
                                    "She bought three things: apples, bread, and cheese.",
                                    "She bought: apples, bread, and cheese.",
                                    "The reason is: she was tired.",
                                    "Apples, bread, and cheese: she bought."
                                ],
                                "answer": "She bought three things: apples, bread, and cheese.",
                                "explanation": "The key rule for colons: a complete independent clause must come before the colon. In the first choice, 'She bought three things' is a complete sentence with a subject and verb, followed by a list specifying those three things — correct usage. In the second choice, the colon comes right after 'bought' with no object, so the part before the colon isn't complete. In the third, the colon after 'The reason is' is unnecessary (a direct connection after the verb 'is' is more natural). In the fourth, the word order is awkward and the part before the colon isn't a complete sentence. A colon acts as a trailer for an explanation, a list, or emphasis — and it keeps showing up in digital SAT Boundaries questions.",
                            }
                        ]
                    }
                },
                {
                    "title": "2023: The First Year of International Digital & America's Final Paper Year",
                    "insight": "In March 2023, the international SAT switched to digital first. The U.S. kept the paper test through December — a transition year. The digital format's details were now confirmed: Reading and Writing 54 questions/64 minutes, Math 44 questions/70 minutes, 2 hours 14 minutes total. Both R&W and Math have two modules each, with Module 2's difficulty adjusting to Module 1 performance — two-stage adaptive. Passages became short (25–150 words), one independent passage per question. Math allowed calculators on all questions, with the Desmos graphing calculator built into the test screen. According to international test-taker reports, time pressure eased but the high-difficulty Module 2 is where scores got separated.",
                    "topics": [
                        "International Digital SAT begins (March 2023): U.S. keeps paper — transition period",
                        "Confirmed digital format: R&W 54/64 · Math 44/70 · 2 hours 14 minutes · two-stage adaptive",
                        "Math TOP: algebra, functions, and data interpretation in the all-questions-calculator era",
                        "R&W TOP: one-short-passage-one-question system; balancing Information & Ideas with grammar",
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Linear Equations in Real-World Contexts",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Setting up equations in contexts like pricing plans, budgets, and speed",
                                "Key point: Let the unknown be x, and set up the equation with matching units",
                            ],
                            "intuition": "Still the most-tested area in digital too. The ability to 'translate' words into math IS math skill.",
                        },
                        {
                            "title": "[Math] Maximum & Minimum Values of Quadratic Functions",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Vertex values of parabolas; real-world optimization (area, revenue)",
                                "Key point: The vertex's y-value is the max or min; use the sign of a to determine the direction",
                            ],
                            "intuition": "An optimization problem is a vertex problem. Build the habit of graphing it in Desmos to confirm.",
                        },
                        {
                            "title": "[Math] Exponential Function Graphs & Equations",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Reading the initial value and growth rate from a graph; writing the equation",
                                "Key point: The y-intercept is the initial value; use increase/decrease to judge the base's range",
                            ],
                            "intuition": "In the Desmos era, graph-reading skill matters more than computation skill.",
                        },
                        {
                            "title": "[Math] Systems of Inequalities",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Graph regions; number of integer solutions",
                                "Key point: Whether the boundary is included (solid vs. dashed line); check the overlapping region",
                            ],
                            "intuition": "Inequalities are region problems. Graph them and find the overlap.",
                        },
                        {
                            "title": "[Math] Data Interpretation: Mean & Standard Deviation",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Comparing centers and spreads of distributions; effects of outliers",
                                "Key point: Standard deviation measures spread; outliers pull the mean",
                            ],
                            "intuition": "Read the shape of the distribution rather than crunching numbers. The picture is the answer.",
                        },
                        {
                            "title": "[Math] Percents & Ratios in Practice",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical types: Percent change, concentration/mixture, unit price",
                                "Key point: Identify the base amount; verify with the Desmos calculator",
                            ],
                            "intuition": "Even with a calculator allowed, a wrong concept gives a wrong answer. The base amount is the key.",
                        },
                        {
                            "title": "[Math] Right Triangles & the Pythagorean Theorem",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Finding hypotenuses and heights; distance on the coordinate plane",
                                "Key point: The coordinate distance formula is the Pythagorean theorem in disguise",
                            ],
                            "intuition": "Two points on the coordinate plane always hide a right triangle.",
                        },
                        {
                            "title": "[Math] Circles: Circumference, Area & Sectors",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Proportions of central angles to arc length and sector area",
                                "Key point: Calculate with the ratio — how many degrees out of 360",
                            ],
                            "intuition": "A circle is a figure of ratios: angle ratio = arc ratio = area ratio.",
                        },
                        {
                            "title": "[Math] Trigonometry Basics",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: sin/cos values on the unit circle and for special angles; graph periods",
                                "Key point: The 30°-45°-60° values; understand periodicity",
                            ],
                            "intuition": "SAT trig is basic level. One special-angle table is enough.",
                        },
                        {
                            "title": "[Math] Polynomial Division & Remainders",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical types: Synthetic division; the remainder theorem",
                                "Key point: If f(a)=0, then (x-a) is a factor",
                            ],
                            "intuition": "The remainder theorem is a shortcut to factoring.",
                        },
                        {
                            "title": "[R&W] Information and Ideas: Central Content",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Grasping the main point or claim of a 25–150 word passage",
                                "Key point: Shorter means more direct traps. Find the topic sentence and the concluding sentence.",
                            ],
                            "intuition": "Shorter passages aren't easier. You can't afford to skim even a single sentence.",
                        },
                        {
                            "title": "[R&W] Textual Evidence",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: Choosing the quotation that best supports a claim",
                                "Key point: A direct link between the claim and the quote — whole-claim support, not a partial match",
                            ],
                            "intuition": "The paper-era evidence pair in short-passage form. Compress the claim and compare.",
                        },
                        {
                            "title": "[R&W] Quantitative Evidence",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Choosing the numbers from a table or graph that support a claim",
                                "Key point: Check that the claim's key numbers match the data",
                            ],
                            "intuition": "Find the evidence that speaks in numbers. Read the axes and units first.",
                        },
                        {
                            "title": "[R&W] Inferences (Short Passages)",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: Drawing logical conclusions from short passages",
                                "Key point: No outside knowledge; choose the weakest (safest) claim",
                            ],
                            "intuition": "Short-passage inference is a sprint of logic. Short — but it has to be exact.",
                        },
                        {
                            "title": "[R&W] Words in Context (Digital)",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical types: The in-context meaning of academic vocabulary",
                                "Key point: Identify the logic relationship around the blank, then verify by substitution",
                            ],
                            "intuition": "An area that feels bigger in digital. Context reading beats vocabulary size.",
                        },
                        {
                            "title": "[R&W] Text Purpose & Function",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: The role of an underlined sentence in the whole text",
                                "Key point: Classify its function — example, rebuttal, background, or transition",
                            ],
                            "intuition": "A part's role shows in the whole design.",
                        },
                        {
                            "title": "[R&W] Cross-Text Connections",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical types: The relationship between two short texts (agreement, rebuttal, elaboration)",
                                "Key point: Summarize each text's claim in one line, then determine the relationship"
                            ],
                            "intuition": "A new digital-era question type. Summarize each passage and the relationship reveals itself."
                        },
                        {
                            "title": "[R&W] Boundaries (Sentence Boundaries)",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Fixing comma splices and run-ons; semicolons and colons",
                                "Key point: Identifying independent clauses is everything. Find the subject + verb."
                            ],
                            "intuition": "The flagship of digital grammar. Its clear rules make it a reliable source of points."
                        },
                        {
                            "title": "[R&W] Form, Structure, and Sense (Agreement & Form)",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical type: Subject-verb agreement, verb tense, pronouns",
                                "Key point: Strip away the modifiers to expose the subject"
                            ],
                            "intuition": "Long modifiers are the trap. Parenthesize them and look at the core."
                        },
                        {
                            "title": "[R&W] Transitions",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Choosing the transition word that fits the logical relationship in the blank",
                                "Key point: Explain the relationship between the sentences in your own words, then match a transition word"
                            ],
                            "intuition": "Once you talk through the logic, the transition word shows itself."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Understanding the Digital Format",
                                "difficulty": "easy",
                                "question": "Which of the following correctly describes the digital SAT format?",
                                "options": [
                                    "R&W: 54 questions / 64 minutes, Math: 44 questions / 70 minutes, 2 hours 14 minutes total",
                                    "R: 52 questions / 65 minutes, W: 44 questions / 35 minutes, M: 58 questions / 80 minutes",
                                    "R&W: 44 questions / 70 minutes, Math: 54 questions / 64 minutes",
                                    "3 hours total across all sections, with a required Essay"
                                ],
                                "answer": "R&W: 54 questions / 64 minutes, Math: 44 questions / 70 minutes, 2 hours 14 minutes total",
                                "explanation": "The digital SAT consists of Reading and Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes), for a total testing time of 2 hours 14 minutes. The second choice describes the paper SAT (Reading 52/65, Writing 44/35, Math 58/80, 3 hours total). The third choice swaps the question counts and times, and the fourth is wrong because the Essay was discontinued in June 2021. These core numbers of the digital switch — R&W 54/64, Math 44/70 — are the foundation of your study plan. Know them cold when planning your per-section pacing: that works out to about 1 minute 35 seconds per Math question and about 1 minute 11 seconds per R&W question."
                            },
                            {
                                "title": "Self-Check 2: Adaptive Module Strategy",
                                "difficulty": "medium",
                                "question": "In the digital SAT's two-stage adaptive structure, what is the most important strategy for a top score?",
                                "options": [
                                    "Maximize your accuracy on Module 1",
                                    "Finish Module 1 quickly and devote the saved time to Module 2",
                                    "Guess on all the hard questions and solve only the easy ones",
                                    "Only attempt high-difficulty questions in Module 2"
                                ],
                                "answer": "Maximize your accuracy on Module 1",
                                "explanation": "The digital SAT is two-stage adaptive within each section. Your Module 1 performance determines the difficulty level (upper or lower) of Module 2, and you need a strong performance on the higher-difficulty module to earn a top score. So if careless mistakes on easy Module 1 questions route you into the lower-difficulty module, a near-perfect score becomes structurally impossible. Finishing Module 1 early to bank time sacrifices accuracy — a counterproductive trade. Guessing on hard questions is fatal in an adaptive test. The answer is maximizing Module 1 accuracy: eliminating careless errors on easy questions (through double-checking habits and careful reading) is the first step to a top score."
                            },
                            {
                                "title": "Self-Check 3: Quantitative Evidence",
                                "difficulty": "medium",
                                "question": "Table: annual rainfall for three cities (A: 800mm, B: 1200mm, C: 400mm). Claim: 'B receives 1.5 times as much rainfall as A and 3 times as much as C.' Which evidence best supports this claim?",
                                "options": [
                                    "1200 is 1.5 times 800 and 3 times 400",
                                    "The three cities' total rainfall is 2400mm",
                                    "A's rainfall is closest to the average",
                                    "C has the least rainfall"
                                ],
                                "answer": "1200 is 1.5 times 800 and 3 times 400",
                                "explanation": "Quantitative Evidence questions ask you to choose the option that directly supports the passage's claim with numbers from a table or graph. This claim contains two numerical relationships (1.5× and 3×), so the evidence must confirm both. Since 1200/800 = 1.5 and 1200/400 = 3, the first choice supports the entire claim. The second choice introduces new information (a total) that is unrelated to the claim. The third and fourth choices may be true, but they don't support the claim's numerical relationships. The technique for data-evidence questions: first extract the claim's key numbers, then check whether each choice directly confirms them."
                            }
                        ]
                    }
                },
                {
                    "title": "2024: The First Year of the Digital SAT in the U.S.",
                    "insight": "On March 9, 2024, the digital SAT launched in the U.S. as well. The Bluebook app, the built-in Desmos graphing calculator, and the on-screen reference formula sheet became standard. The test blueprint began to emerge through released practice questions: 4 Math domains (Algebra, Advanced Math, Problem Solving and Data Analysis, Geometry and Trigonometry) and 4 R&W domains (Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions). Trend analysis: short passages plus standalone questions reduced the stamina burden, while vocabulary-in-context and data-evidence questions felt more prominent. With official practice sets loaded into Bluebook, test prep moved fully digital too.",
                    "topics": [
                        "March 2024 U.S. digital switch: Bluebook, built-in Desmos, and a standardized formula sheet",
                        "Mastering the 4-Math / 4-R&W domain structure",
                        "Math focus: linear, quadratic, and exponential functions; statistical inference; geometry basics",
                        "R&W focus: evidence, vocabulary, sentence boundaries, transitions (adapting to the short-passage format)"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Algebra: Linear Expressions & Inequalities",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Writing expressions from real-world contexts; inequality solution sets",
                                "Key point: The core of the digital Algebra domain — roughly 35% of Math"
                            ],
                            "intuition": "Algebra is a third of digital Math. If you stumble here, everything wobbles."
                        },
                        {
                            "title": "[Math] Advanced Math: Quadratics, Exponentials & Polynomials",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Quadratic graphs, exponential models, polynomial operations",
                                "Key point: Advanced Math is also about 35% — the score-separating zone of the harder Module 2"
                            ],
                            "intuition": "The crossroads of a top score. The star of the harder Module 2."
                        },
                        {
                            "title": "[Math] PSDA: Ratios, Statistics & Probability",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Percents, sample inference, probability, scatterplots",
                                "Key point: Interpretation over calculation — about 15% of Math"
                            ],
                            "intuition": "Math that rewards reading and judgment — this is where your reading skills shape your math score."
                        },
                        {
                            "title": "[Math] Geometry & Trig: Figures & Trig Ratios",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Triangles and circles, trig ratios, radian basics",
                                "Key point: About 15%. Put the formula sheet to work."
                            ],
                            "intuition": "The formulas are on the sheet. Knowing which one to pull out, and when — that's the skill."
                        },
                        {
                            "title": "[Math] Reading Graphs with Desmos",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Graph a function to check intersections, roots, and maxima",
                                "Key point: Build the habit of entering the equation and verifying with the graph"
                            ],
                            "intuition": "The biggest weapon of 2024. Check with Desmos what you'd otherwise sketch by hand."
                        },
                        {
                            "title": "[Math] Systems of Equations in Real Life",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical type: Turn two conditions into equations; interpret what the solution means",
                                "Key point: Watch for twists that ask what the solution means in the real world"
                            ],
                            "intuition": "Finding the solution isn't the finish line. You have to say what that number means in reality."
                        },
                        {
                            "title": "[Math] Exponential Growth Models in Real Life",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: What each part of the y=ab^x model means",
                                "Key point: a is the initial value; b is the growth/decay rate"
                            ],
                            "intuition": "Model problems are translation problems: turn math symbols into real-world language."
                        },
                        {
                            "title": "[Math] Statistics: Median & Outliers",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: How adding or removing an outlier changes the mean and median",
                                "Key point: The median resists outliers"
                            ],
                            "intuition": "The mean wobbles; the median holds. That contrast is the test point."
                        },
                        {
                            "title": "[Math] Inscribed Angles & Tangent Basics",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: The relationship between central and inscribed angles",
                                "Key point: An inscribed angle is half its central angle"
                            ],
                            "intuition": "Rare, but when it shows up, one formula finishes it."
                        },
                        {
                            "title": "[Math] Complex Numbers & Radical Equations (Advanced)",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: Powers of i; extraneous roots in radical equations",
                                "Key point: Score-separating algebra items in the harder module"
                            ],
                            "intuition": "Built to separate top scorers. With solid fundamentals, it's bonus points."
                        },
                        {
                            "title": "[R&W] Information and Ideas: Details",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Matching passage details — about 26% of R&W",
                                "Key point: Verify that every word in the choice matches the passage"
                            ],
                            "intuition": "A quarter of R&W. Careful cross-checking is everything."
                        },
                        {
                            "title": "[R&W] Craft and Structure: Vocabulary & Structure",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Words in context, text structure and purpose — about 28%",
                                "Key point: The largest domain on the digital test"
                            ],
                            "intuition": "Vocabulary and structure are now the heart of R&W. Read words in context."
                        },
                        {
                            "title": "[R&W] Expression of Ideas: Transitions & Summaries",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Transitions and synthesizing notes into summaries — about 20%",
                                "Key point: Select only the notes that fit the goal"
                            ],
                            "intuition": "It's about filtering information. Read the goal (claim) first, then the notes."
                        },
                        {
                            "title": "[R&W] Standard English Conventions: Grammar",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Sentence boundaries, agreement, tense — about 26%",
                                "Key point: Rule-based, so it's a reliable source of points"
                            ],
                            "intuition": "Grammar is a rules game. Whoever masters the rules takes the points."
                        },
                        {
                            "title": "[R&W] Main Idea (Short Passages)",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: The gist of a 25–150 word passage",
                                "Key point: First and last sentences; repeated keywords"
                            ],
                            "intuition": "A short passage's main idea is even sharper. Don't miss the topic sentence."
                        },
                        {
                            "title": "[R&W] Cross-Text: Comparing Claims",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: The relationship between Text 1 and Text 2; points of rebuttal or agreement",
                                "Key point: Summarize each text's claim, then determine the relationship"
                            ],
                            "intuition": "Summarize both passages in one line each and the relationship becomes obvious."
                        },
                        {
                            "title": "[R&W] Boundaries (Advanced)",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical type: Colons, dashes, and semicolons combined",
                                "Key point: Identify independent clauses + know each punctuation mark's job"
                            ],
                            "intuition": "Punctuation is traffic control for sentences. Just follow the rules."
                        },
                        {
                            "title": "[R&W] Possessives & Apostrophes",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: its/it's, their/they're, plural possessives",
                                "Key point: An apostrophe marks omission or possession"
                            ],
                            "intuition": "Telling its from it's is the most basic of basics. Don't miss it here."
                        },
                        {
                            "title": "[R&W] Rhetorical Synthesis",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Synthesize notes to support the target claim",
                                "Key point: Don't just copy the goal sentence — support it with relevant information"
                            ],
                            "intuition": "It's selection, not summary. Pick only what the goal needs."
                        },
                        {
                            "title": "[R&W] High-Difficulty Vocabulary in Context",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: Subtle nuances of abstract academic vocabulary",
                                "Key point: Narrow the meaning using the sentence's logic"
                            ],
                            "intuition": "Even an unknown word's meaning can be narrowed down by the sentence's logic."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Bluebook and Desmos",
                                "difficulty": "easy",
                                "question": "Which of the following correctly describes the 2024 U.S. digital SAT?",
                                "options": [
                                    "It's taken in the Bluebook app, with a built-in Desmos graphing calculator",
                                    "It's taken on paper, with calculators banned entirely",
                                    "The Essay has been brought back as a requirement",
                                    "Testing time is 3 hours, the same as the paper test"
                                ],
                                "answer": "It's taken in the Bluebook app, with a built-in Desmos graphing calculator",
                                "explanation": "Since March 2024, the U.S. SAT has been a Bluebook-based digital test. A Desmos graphing calculator is built into the test screen, and calculator use is allowed on every Math question. A reference formula sheet is also provided on screen. Paper test booklets, calculator bans, the Essay's return, and a 3-hour test are all stories from the paper era — none of them is true. Knowing exactly what the digital environment means matters. Desmos is more than a calculator: you can graph functions to visually check intersections, roots, and maxima, so practicing with Desmos from the start turns it into a real weapon on test day."
                            },
                            {
                                "title": "Self-Check 2: Interpreting an Exponential Model",
                                "difficulty": "medium",
                                "question": "In the bacteria population model P = 500(1.2)^t (t = time units), what does 1.2 represent?",
                                "options": [
                                    "A 20% growth rate per unit of time",
                                    "An initial population of 120",
                                    "The population after 20 hours",
                                    "An increase of 120 per hour"
                                ],
                                "answer": "A 20% growth rate per unit of time",
                                "explanation": "In the exponential model y = ab^x, a is the initial value and b is the per-interval growth factor. In P = 500(1.2)^t, a = 500 is the initial population, and b = 1.2 means the population multiplies by 1.2 each unit of time — a 20% increase. The second choice misreads the initial value 500; the third is not what t = 20 gives you. The fourth mistakes exponential growth for linear growth (120 more per hour) — the classic trap when exponential and linear get confused. Digital SAT exponential-model questions tend to ask what each part of the equation means in the real world."
                            },
                            {
                                "title": "Self-Check 3: Choosing a Transition",
                                "difficulty": "medium",
                                "question": "Fill in the blank: 'The new policy reduced costs. _____, it improved employee satisfaction.' Which transition is most appropriate?",
                                "options": [
                                    "Moreover",
                                    "However",
                                    "Nevertheless",
                                    "Instead"
                                ],
                                "answer": "Moreover",
                                "explanation": "The first sentence gives a positive result (reduced costs); the second gives another positive result (better employee satisfaction). The two sentences are in an addition/list relationship, not contrast, so Moreover is the best fit. However, Nevertheless, and Instead all signal contrast or reversal — they're used when the sentences pull in opposite directions. The textbook approach to transition questions: first explain the sentences' logical relationship in your own words. Here it's 'one more good thing,' an addition relationship, so additive transitions like Moreover, Furthermore, or In addition are the answer. Transitions are a steady feature of the digital R&W Expression of Ideas domain."
                            }
                        ]
                    }
                },
                {
                    "title": "2025: The Digital Test Settles In — The Year of Adaptive Strategy",
                    "insight": "2025 was the year the digital SAT fully settled in. Official Bluebook practice sets expanded, and test-taker experience plus analysis of adaptive module patterns accumulated. Question trends entered a stabilization phase. In Math, applied linear/quadratic/exponential functions, statistical inference, and basic trig ratios kept appearing consistently. In R&W, Main Idea/Inference, Boundaries (punctuation), and Transitions locked in as high-frequency zones. Score separation at the top came down to multi-step algebra and trap choices in the harder Module 2. This year's lesson is crystal clear: Module 1 accuracy sets your score ceiling.",
                    "topics": [
                        "The digital test settles in: expanded Bluebook practice, growing analysis of adaptive patterns",
                        "Math focus: the three function siblings (linear, quadratic, exponential), statistical inference, and the Desmos verification habit",
                        "R&W focus: Main Idea, Inference, Boundaries, and Transitions cemented as high-frequency",
                        "Strategy point: Module 1 accuracy = score ceiling; multi-step algebra for the harder Module 2"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Linear Functions in Context",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: In y=mx+b, what m (rate of change) and b (initial value) mean in reality",
                                "Key point: Attach units when you read and the traps become visible"
                            ],
                            "intuition": "The moment you attach units to the slope, the problem gets easy."
                        },
                        {
                            "title": "[Math] Speed Factoring of Quadratics",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Factoring ax^2+bx+c — factor out the common factor first",
                                "Key point: Find two numbers that multiply to c and add to b"
                            ],
                            "intuition": "Your factoring speed sets the pace of all your algebra."
                        },
                        {
                            "title": "[Math] Exponential vs. Linear",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Growing by a fixed amount (linear) vs. by a fixed ratio (exponential)",
                                "Key point: In a table, constant differences → linear, constant ratios → exponential"
                            ],
                            "intuition": "The table's number pattern decides the model: differences or ratios?"
                        },
                        {
                            "title": "[Math] Choosing a Systems-of-Equations Strategy",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical type: The fastest of substitution, elimination, or graphing",
                                "Key point: Attack the variable with the simplest coefficients first"
                            ],
                            "intuition": "If there are three ways to solve it, pick the shortest."
                        },
                        {
                            "title": "[Math] Statistical Inference (Advanced)",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Confidence-interval intuition; the effect of sample size",
                                "Key point: Larger samples give more stable estimates"
                            ],
                            "intuition": "A bigger sample leaves less room for luck."
                        },
                        {
                            "title": "[Math] Probability: Reading Tables",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Conditional probability from a two-way table",
                                "Key point: The denominator is the whole row or column matching the condition"
                            ],
                            "intuition": "In conditional probability, the denominator is 'everyone who meets the condition.'"
                        },
                        {
                            "title": "[Math] Trig Ratios in Real Life",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Angles of elevation and depression; shadows and heights",
                                "Key point: Draw the right triangle and label each side"
                            ],
                            "intuition": "The moment you draw the picture, half the problem is solved."
                        },
                        {
                            "title": "[Math] Multi-Step Algebra (High Difficulty)",
                            "problem": "Frequency: ★★★☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: Substitute and simplify, reducing to a quadratic equation",
                                "Key point: Spot the repeated pattern in a messy expression and substitute"
                            ],
                            "intuition": "Hard algebra is a game of pattern-finding and substitution."
                        },
                        {
                            "title": "[Math] Function Transformations",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: The equation after a translation or reflection",
                                "Key point: Add to x → shift left; add to y → shift up"
                            ],
                            "intuition": "Graph shifts feel backwards in sign. Plug in and check for yourself."
                        },
                        {
                            "title": "[Math] Rational Functions: Asymptote Basics",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: Excluded domain points; asymptote intuition",
                                "Key point: x-values that make the denominator zero are excluded from the domain"
                            ],
                            "intuition": "The denominator can't be zero. That's the whole story in one line."
                        },
                        {
                            "title": "[R&W] Main Idea, Locked In",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: The central claim of a short passage",
                                "Key point: Eliminate choices that are too narrow or too broad"
                            ],
                            "intuition": "The main idea is the passage's center of gravity. Toss the lopsided choices."
                        },
                        {
                            "title": "[R&W] Inference: Dodging Traps",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Logical conclusions; overstated choices",
                                "Key point: The weakest claim = the safest answer"
                            ],
                            "intuition": "In inference questions, a strong claim is usually a trap."
                        },
                        {
                            "title": "[R&W] Vocabulary: Academic Nuance",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: The in-context meaning of a blanked or underlined word",
                                "Key point: Use contrast and cause-effect signal words to narrow the meaning"
                            ],
                            "intuition": "Signal words decide the meaning. Watch what comes after however."
                        },
                        {
                            "title": "[R&W] Structure: Grasping the Overall Design",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: How the text unfolds (problem-solution, claim-rebuttal)",
                                "Key point: Name each part's job in one word"
                            ],
                            "intuition": "Sketch the text's blueprint and the question gets easy."
                        },
                        {
                            "title": "[R&W] Purpose: Why This Sentence?",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: The rhetorical function of a specific sentence",
                                "Key point: Choose among example, concession, rebuttal, or emphasis"
                            ],
                            "intuition": "Ask the sentence its job. What does this sentence do for a living?"
                        },
                        {
                            "title": "[R&W] Boundaries: Combined Punctuation",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Semicolons, colons, and dashes combined",
                                "Key point: Mark the independent-clause boundary first"
                            ],
                            "intuition": "Once the boundary is drawn, the punctuation decides itself."
                        },
                        {
                            "title": "[R&W] Agreement: Stripping Modifiers",
                            "problem": "Frequency: ★★★★☆ | Importance: Essential",
                            "steps": [
                                "Typical type: Subject-verb and pronoun agreement",
                                "Key point: Parenthesize prepositional phrases and relative clauses"
                            ],
                            "intuition": "The real subject hides behind the modifiers."
                        },
                        {
                            "title": "[R&W] Transitions: Logical Relationships",
                            "problem": "Frequency: ★★★★☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Transition for a blank; sentence order",
                                "Key point: Put the relationship into words, then match a transition"
                            ],
                            "intuition": "If you can explain the logic in words, the answer shows itself."
                        },
                        {
                            "title": "[R&W] Synthesizing Notes (Rhetorical Synthesis)",
                            "problem": "Frequency: ★★★☆☆ | Importance: Recommended",
                            "steps": [
                                "Typical type: Support the target claim with bullet notes",
                                "Key point: Select only notes directly related to the goal"
                            ],
                            "intuition": "The goal is your filter. Dump the irrelevant notes."
                        },
                        {
                            "title": "[R&W] Paired Passages: Subtle Differences",
                            "problem": "Frequency: ★★☆☆☆ | Importance: Advanced",
                            "steps": [
                                "Typical type: Differences in stance between two texts; shared assumptions",
                                "Key point: Describe similarities and differences separately"
                            ],
                            "intuition": "Find the two texts' shared assumption and the differences come into focus."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Linear vs. Exponential",
                                "difficulty": "medium",
                                "question": "Table: x=0→y=3, x=1→y=6, x=2→y=12, x=3→y=24. Which model best describes this relationship?",
                                "options": [
                                    "Exponential model (doubles each time)",
                                    "Linear model (+3 each time)",
                                    "Quadratic model",
                                    "Inverse-variation model"
                                ],
                                "answer": "Exponential model (doubles each time)",
                                "explanation": "Looking at the y-values — 3→6→12→24 — each is multiplied by 2. A constant ratio is multiplied, not a constant amount added, so this is exponential. If it were linear, the differences would be constant, but here they're 3, 6, 12 — not constant. The test: constant differences in a table → linear; constant ratios → exponential. That's a core SAT function skill. The equation is y = 3(2)^x. In real-life terms, growing by a fixed amount means linear; growing by a fixed percent means exponential. Plotting the table's points in Desmos shows the exponential curve visually — handy for double-checking."
                            },
                            {
                                "title": "Self-Check 2: Module 1 Strategy",
                                "difficulty": "easy",
                                "question": "When working through Module 1 on the adaptive SAT, what matters most?",
                                "options": [
                                    "Eliminating careless mistakes on easy questions to lock in accuracy",
                                    "Spending lots of time on hard questions",
                                    "Finishing Module 1 as fast as possible",
                                    "Trying to predict the Module 2 questions"
                                ],
                                "answer": "Eliminating careless mistakes on easy questions to lock in accuracy",
                                "explanation": "In the two-stage adaptive format, Module 2's difficulty is set by your Module 1 performance. Miss easy Module 1 questions through carelessness and you'll be routed to the lower-difficulty module, making a top score structurally out of reach. So accuracy is the top priority for Module 1. Burning time on hard questions while missing easy ones is the worst-case scenario; finishing early sacrifices accuracy. And there's no way to predict Module 2. The test-day play: work through every Module 1 question calmly, then use leftover time to double-check. Accuracy sets your score ceiling. Remember: one careless miss on an easy question can cost you your ticket to the harder Module 2."
                            },
                            {
                                "title": "Self-Check 3: Pronoun Agreement",
                                "difficulty": "medium",
                                "question": "Fill in the blank: 'Each of the students submitted _____ assignment on time.'",
                                "options": [
                                    "his or her",
                                    "their",
                                    "its",
                                    "there"
                                ],
                                "answer": "his or her",
                                "explanation": "The subject is Each, which is singular. Of the students is a prepositional phrase and doesn't change the subject's number. So you need a singular pronoun, and since no gender is specified, his or her is correct. Their is plural and can't pair with a singular subject. The SAT loves this trap: matching singular subjects like each, every, either, and neither with plural pronouns. Its is for things or animals; there is a place adverb — neither fits grammatically. Subject-verb and pronoun agreement is the heart of Standard English Conventions, and the essential drill is stripping modifiers to find the true subject."
                            }
                        ]
                    }
                },
                {
                    "title": "2026: Latest Trends — Test-Day Ready",
                    "insight": "As of 2026, the digital SAT is in its third year: the question bank has grown and trends have stabilized. The latest trends: context problems drawn from real life, science, and social science continue; graph-reading questions that leverage Desmos; and cross-text connections plus data-evidence questions in R&W. College Board keeps tightening question-bank rotation and anti-cheating measures. Study takeaways: pair conceptual understanding with solving speed, and lock in Module 1 accuracy for the adaptive format. One conclusion runs through this section's 2020–2025 arc: even as the format changes, the must-know concept list barely budges.",
                    "topics": [
                        "2026 today: bigger question bank, stabilized trends, stronger anti-cheating",
                        "Math focus: the triangle of function applications, data interpretation, and Desmos verification",
                        "R&W focus: the three pillars of evidence, vocabulary, and grammar — plus paired passages and note synthesis",
                        "Final strategy: zero mistakes on essentials + Module 1 accuracy + pacing"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Math] Function Applications: Putting It Together",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Real-world problems with linear, quadratic, and exponential functions",
                                "Key point: Three steps — write the model, compute the value, interpret the meaning"
                            ],
                            "intuition": "Function problems are a 3-step process: equation, calculation, interpretation."
                        },
                        {
                            "title": "[Math] Quadratic Equations in Action",
                            "problem": "Frequency: ★★★★★ | Importance: Essential",
                            "steps": [
                                "Typical type: Finding roots, the discriminant, and connecting to graphs",
                                "Key point: Factor → quadratic formula → verify with Desmos"
                            ],
                            "intuition": "Quadratic equations are a toolbox. Pull out the right tool for the situation."
                        },
                        {
                            "title": "[Math] Data Interpretation in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Drawing conclusions from tables and graphs",
                                "Key point: Answer only what is asked — no over-interpretation"
                            ],
                            "intuition": "On data questions, look only at what is asked. The rest is noise."
                        },
                        {
                            "title": "[Math] Avoiding Ratio and Percent Traps",
                            "problem": "Test frequency: ★★★★☆ | Priority: Essential",
                            "steps": [
                                "Representative types: Repeated percent changes, switching the base amount",
                                "Key point: Catch the moment the base amount changes"
                            ],
                            "intuition": "The true identity of a percent trap is the shifting base."
                        },
                        {
                            "title": "[Math] Geometry: Using the Formula Sheet",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Circles, triangles, volume, radians",
                                "Key point: Formulas come from the sheet — knowing when to apply them is the skill"
                            ],
                            "intuition": "Separate what to memorize from what to look up."
                        },
                        {
                            "title": "[Math] Trig Ratios and Special Angles",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Sides and angles of right triangles, cofunction relationships",
                                "Key point: SOH-CAH-TOA + 30°·45°·60°"
                            ],
                            "intuition": "Trig ratios start with drawing the right triangle."
                        },
                        {
                            "title": "[Math] Statistics: Reading Distributions",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Interpreting histograms and box plots",
                                "Key point: The three essentials — center, spread, skew"
                            ],
                            "intuition": "A distribution graph needs just three reads: center, spread, and skew."
                        },
                        {
                            "title": "[Math] Challenging Algebra (Differentiators)",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Substitution, simplification, extraneous roots, multi-step expressions",
                                "Key point: Prep for Module 2 hard questions — break them down calmly"
                            ],
                            "intuition": "A hard problem is a chain of easy steps."
                        },
                        {
                            "title": "[Math] Sequences and Patterns",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: nth-term formulas for arithmetic and geometric sequences, pattern reasoning",
                                "Key point: View them as functions"
                            ],
                            "intuition": "A sequence is a discrete function. Look at it with the same eyes."
                        },
                        {
                            "title": "[Math] Desmos Checking Routine",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Checking work on every function and equation problem",
                                "Key point: Enter the expression → graph it → verify intercepts and roots"
                            ],
                            "intuition": "Desmos is your second solver. Use it as a checking tool."
                        },
                        {
                            "title": "[R&W] Evidence Selection in Action",
                            "problem": "Test frequency: ★★★★★ | Priority: Essential",
                            "steps": [
                                "Representative types: Textual and data-based evidence",
                                "Key point: Condense the claim, then pick the choice that directly supports it"
                            ],
                            "intuition": "Evidence is the shadow of the claim — it must stay attached."
                        },
                        {
                            "title": "[R&W] Vocabulary in Action",
                            "problem": "Test frequency: ★★★★★ | Priority: Essential",
                            "steps": [
                                "Representative types: Words in context, fill-in-the-blank",
                                "Key point: Logic signal words → meaning range → plug in"
                            ],
                            "intuition": "Vocabulary questions are logic questions."
                        },
                        {
                            "title": "[R&W] Inference in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Logical conclusions",
                                "Key point: Choose the weakest claim; nothing outside the passage"
                            ],
                            "intuition": "The humble answer is the right one."
                        },
                        {
                            "title": "[R&W] Structure and Purpose in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Sentence functions, how a text unfolds",
                                "Key point: Each part's role within the whole design"
                            ],
                            "intuition": "The parts exist for the sake of the whole."
                        },
                        {
                            "title": "[R&W] Paired Passages in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Relationships and points of disagreement",
                                "Key point: Summarize each claim, then determine the relationship"
                            ],
                            "intuition": "Summarize first — the relationship comes next."
                        },
                        {
                            "title": "[R&W] Sentence Boundaries in Action",
                            "problem": "Test frequency: ★★★★★ | Priority: Essential",
                            "steps": [
                                "Representative types: Punctuation across the board",
                                "Key point: Identifying independent clauses is 90% of it"
                            ],
                            "intuition": "Draw the boundary right, and the answer is decided."
                        },
                        {
                            "title": "[R&W] Agreement and Tense in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Essential",
                            "steps": [
                                "Representative types: Subject–verb, pronoun, and tense agreement",
                                "Key point: Strip the modifiers to expose the core"
                            ],
                            "intuition": "Grammar is the art of stripping away."
                        },
                        {
                            "title": "[R&W] Transitions in Action",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Blanks and ordering",
                                "Key point: Say the relationship out loud, then match the transition word"
                            ],
                            "intuition": "If you can say it, you can write it."
                        },
                        {
                            "title": "[R&W] Notes Synthesis in Action",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Supporting a target claim",
                                "Key point: Filter by the goal, then select the relevant notes"
                            ],
                            "intuition": "The goal is the standard. Discard the rest."
                        },
                        {
                            "title": "[R&W] Challenging Passages (Differentiators)",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Subtle arguments in abstract academic passages",
                                "Key point: Draw an argument map"
                            ],
                            "intuition": "Beat hard passages with a structure map."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Maximum of a Quadratic Function",
                                "difficulty": "medium",
                                "question": "For the revenue model R = -2x^2 + 40x - 100 (x = quantity sold), what are the maximum revenue and the corresponding quantity sold?",
                                "options": [
                                    "Max 100, x=10",
                                    "Max 200, x=20",
                                    "Max 100, x=20",
                                    "Max 300, x=10"
                                ],
                                "answer": "Max 100, x=10",
                                "explanation": "For the quadratic function R = -2x^2 + 40x - 100, a = -2 < 0, so the parabola opens downward and the maximum occurs at the vertex. The x-coordinate of the vertex is -b/2a = -40/(2·-2) = 10. Plugging in x = 10 gives R = -2(100) + 400 - 100 = -200 + 400 - 100 = 100, so the maximum revenue is 100 at a quantity sold of 10. Typing the equation into Desmos immediately confirms the vertex (10, 100). Quadratic optimization is a classic real-life context (revenue, area, trajectory): first use the sign of a to decide maximum vs. minimum, then find the vertex."
                            },
                            {
                                "title": "Self-Check 2: Data Evidence and Traps",
                                "difficulty": "medium",
                                "question": "Graph: bar chart of EV sales from 2020 to 2025 (rising every year, with the largest jump from 2024 to 2025). Claim: 'EV sales increased every year, and the increase was largest in 2025.' Which choice does NOT support the claim?",
                                "options": [
                                    "Sales in 2023 decreased from 2022",
                                    "The 2025 bar grew the most compared to the 2024 bar",
                                    "Every year's bar is higher than the previous year's",
                                    "The increase over the 2024–2025 period is the largest"
                                ],
                                "answer": "Sales in 2023 decreased from 2022",
                                "explanation": "The claim has two parts (an increase every year, and the largest increase in 2025). The first choice says sales decreased in 2023, which directly contradicts 'an increase every year' and therefore does not support the claim. The remaining choices each support part of the claim. On Quantitative Evidence questions you may be asked to pick the choice that supports the claim or the one that does not — so read the question's direction (support vs. undermine) carefully. On graph questions, first check the axes, units, and intervals, and build the habit of matching each numerical part of the claim against the data one by one. That is how you dodge the traps."
                            },
                            {
                                "title": "Self-Check 3: Challenging Vocabulary Inference",
                                "difficulty": "hard",
                                "question": "Passage: 'The theory was initially dismissed as _____, but subsequent experiments confirmed its predictions.' Which word best fills the blank?",
                                "options": [
                                    "implausible",
                                    "innovative",
                                    "controversial",
                                    "complex"
                                ],
                                "answer": "implausible",
                                "explanation": "The part after but says that subsequent experiments confirmed the theory's predictions, so the blank needs the negative judgment the theory initially received. implausible explains exactly why the theory was first ignored and dismissed. innovative is positive and clashes with but, controversial is neutral and sits poorly with dismissed, and complex is a weak reason for dismissal. On high-level vocabulary questions, contrast signal words like but and however set the answer's direction. First determine whether the signal word points positive or negative, then choose the word heading the opposite way — that is the standard approach."
                            }
                        ]
                    }
                },
                {
                    "title": "Paper-to-Digital Comparison & Priority Study Guide",
                    "insight": "Five key changes separate paper (2020–2023) from digital (2024–2026). First, testing time shrank from 3 hours to 2 hours 14 minutes. Second, 500–750-word passages became 25–150-word short passages, with one independent passage per question. Third, the no-calculator section was eliminated: calculators are now allowed on every question, and Desmos is built in. Fourth, the fixed format became two-stage adaptive testing, where Module 1 accuracy sets your score ceiling. Fifth, the Essay was discontinued in June 2021, leaving R&W as an integrated reading-and-writing section. But the conceptual backbone is unchanged. That is why the essential list below held in 2020 and still holds in 2026.",
                    "topics": [
                        "Stage 1 (foundations): 10 Essential Math + 10 Essential R&W — zero-mistake goal",
                        "Stage 2 (comfort zone): 4 Recommended Math + 4 Recommended R&W — cover frequently tested areas",
                        "Stage 3 (high scores): 3 Advanced Math + 3 Advanced R&W — prep for Module 2 hard questions",
                        "Stage 4 (test day): Bluebook practice tests + Desmos checking routine + Module 1 accuracy drills"
                    ],
                    "lectures": [],
                    "examples": [
                        {
                            "title": "[Essential Math 1] Linear Equations & Inequalities in Real Life",
                            "problem": "Priority rank: #1 | Priority: Essential",
                            "steps": [
                                "Representative types: Building equations in context, inequality direction",
                                "Key point: The algebraic fundamentals tested on every exam"
                            ],
                            "intuition": "The alphabet of SAT Math. Miss here and everything after wobbles."
                        },
                        {
                            "title": "[Essential Math 2] Systems of Equations & Number of Solutions",
                            "problem": "Priority rank: #2 | Priority: Essential",
                            "steps": [
                                "Representative types: Choosing a solution method; using slope and intercept to determine the number of solutions",
                                "Key point: The shortest path among substitution, elimination, and graphing"
                            ],
                            "intuition": "The slope tells you. You can determine it without a graph."
                        },
                        {
                            "title": "[Essential Math 3] Slope & Intercept in Linear Functions: What They Mean",
                            "problem": "Priority rank: #3 | Priority: Essential",
                            "steps": [
                                "Representative types: What m and b in y=mx+b mean in the real world",
                                "Key point: Slope = rate of change, intercept = starting value; read with units attached"
                            ],
                            "intuition": "The moment you attach units, the trap reveals itself."
                        },
                        {
                            "title": "[Essential Math 4] Quadratic Equations & Functions",
                            "problem": "Priority rank: #4 | Priority: Essential",
                            "steps": [
                                "Representative types: Factoring, the quadratic formula, the discriminant, vertex, maximum",
                                "Key point: The heart of Advanced Math; the differentiator zone of the hard module"
                            ],
                            "intuition": "Three ways to solve. Pick the right tool for the situation."
                        },
                        {
                            "title": "[Essential Math 5] Exponential Functions & Models",
                            "problem": "Priority rank: #5 | Priority: Essential",
                            "steps": [
                                "Representative types: Interpreting the y=ab^x model, distinguishing it from linear",
                                "Key point: a is the starting value, b is the growth factor"
                            ],
                            "intuition": "Model problems are translation problems — decode the symbols into plain language."
                        },
                        {
                            "title": "[Essential Math 6] Ratios, Percents & Proportions",
                            "problem": "Priority rank: #6 | Priority: Essential",
                            "steps": [
                                "Representative types: Percent change, successive discounts, base-switching traps",
                                "Key point: Percents are multiplication; catch the base change"
                            ],
                            "intuition": "The trap's true identity is the moment the base changes."
                        },
                        {
                            "title": "[Essential Math 7] Polynomial Operations & Factoring",
                            "problem": "Priority rank: #7 | Priority: Essential",
                            "steps": [
                                "Representative types: Expansion and factoring patterns, common factors",
                                "Key point: Speed here sets the speed of all your algebra"
                            ],
                            "intuition": "Factoring is the key to every quadratic problem."
                        },
                        {
                            "title": "[Essential Math 8] Function Notation & Graph Reading",
                            "problem": "Priority rank: #8 | Priority: Essential",
                            "steps": [
                                "Representative types: f(x) values, domain and range, translations",
                                "Key point: The common language of algebra problems"
                            ],
                            "intuition": "Getting comfortable with function notation is the starting point of all algebra."
                        },
                        {
                            "title": "[Essential Math 9] Statistics Basics: Center & Spread",
                            "problem": "Priority rank: #9 | Priority: Essential",
                            "steps": [
                                "Representative types: Mean, median, outlier effects, reading distributions",
                                "Key point: Interpretation over calculation — outliers pull the mean"
                            ],
                            "intuition": "The mean shakes; the median holds firm."
                        },
                        {
                            "title": "[Essential Math 10] Geometry Basics: Triangles & Circles",
                            "problem": "Priority rank: #10 | Priority: Essential",
                            "steps": [
                                "Representative types: The Pythagorean theorem, special triangles, circle circumference and area",
                                "Key point: Use the formula sheet; auxiliary lines and diagrams"
                            ],
                            "intuition": "The moment you draw a picture, half the problem is solved."
                        },
                        {
                            "title": "[Essential R&W 1] Main Idea",
                            "problem": "Priority rank: #1 | Priority: Essential",
                            "steps": [
                                "Representative types: The gist and claims of short passages",
                                "Key point: Eliminate choices that are too narrow or too broad"
                            ],
                            "intuition": "The main idea is the passage's center of gravity."
                        },
                        {
                            "title": "[Essential R&W 2] Textual Evidence",
                            "problem": "Priority rank: #2 | Priority: Essential",
                            "steps": [
                                "Representative types: Choosing the quote that supports the claim",
                                "Key point: Condense the claim, then compare it against choices that directly support it"
                            ],
                            "intuition": "Evidence is the shadow of the claim."
                        },
                        {
                            "title": "[Essential R&W 3] Words in Context",
                            "problem": "Priority rank: #3 | Priority: Essential",
                            "steps": [
                                "Representative types: The contextual meaning of underlined or blanked words",
                                "Key point: Narrow the meaning range with logic signal words"
                            ],
                            "intuition": "Vocabulary questions are logic questions."
                        },
                        {
                            "title": "[Essential R&W 4] Inference",
                            "problem": "Priority rank: #4 | Priority: Essential",
                            "steps": [
                                "Representative types: Logical conclusions",
                                "Key point: The weakest (safest) claim; nothing outside the passage"
                            ],
                            "intuition": "The humble answer is the right one."
                        },
                        {
                            "title": "[Essential R&W 5] Boundaries",
                            "problem": "Priority rank: #5 | Priority: Essential",
                            "steps": [
                                "Representative types: Comma splices, semicolons, colons, dashes",
                                "Key point: Identifying independent clauses is 90% of it"
                            ],
                            "intuition": "Draw the boundary right, and the punctuation is decided."
                        },
                        {
                            "title": "[Essential R&W 6] Form, Structure, and Sense",
                            "problem": "Priority rank: #6 | Priority: Essential",
                            "steps": [
                                "Representative types: Subject–verb, pronoun, and tense agreement",
                                "Key point: Strip the modifiers to expose the real subject"
                            ],
                            "intuition": "Grammar is the art of stripping away."
                        },
                        {
                            "title": "[Essential R&W 7] Text Structure & Purpose",
                            "problem": "Priority rank: #7 | Priority: Essential",
                            "steps": [
                                "Representative types: Sentence and paragraph functions, how a text unfolds",
                                "Key point: Each part's role within the whole design"
                            ],
                            "intuition": "The parts exist for the sake of the whole."
                        },
                        {
                            "title": "[Essential R&W 8] Quantitative Evidence",
                            "problem": "Priority rank: #8 | Priority: Essential",
                            "steps": [
                                "Representative types: Verifying claims with table and graph data",
                                "Key point: Check the axes and units, then compare the numbers"
                            ],
                            "intuition": "Numbers don't lie, but axes can deceive."
                        },
                        {
                            "title": "[Essential R&W 9] Transitions",
                            "problem": "Priority rank: #9 | Priority: Essential",
                            "steps": [
                                "Representative types: Blank transition words, logical relationships",
                                "Key point: Say the relationship out loud, then match the transition word"
                            ],
                            "intuition": "If you can say it, you can write it."
                        },
                        {
                            "title": "[Essential R&W 10] Cross-Text Connections",
                            "problem": "Priority rank: #10 | Priority: Essential",
                            "steps": [
                                "Representative types: Relationships and points of disagreement between two texts",
                                "Key point: Summarize each claim, then determine the relationship"
                            ],
                            "intuition": "Summarize first — the relationship comes next."
                        },
                        {
                            "title": "[Recommended Math 1] Probability: Reading Tables & Conditional",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Two-way tables, complements",
                                "Key point: The denominator is the total that satisfies the condition"
                            ],
                            "intuition": "SAT probability is close to a table-reading problem."
                        },
                        {
                            "title": "[Recommended Math 2] Trig Ratios in Real Life",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Angles of elevation and depression, right-triangle sides and angles",
                                "Key point: SOH-CAH-TOA — and draw the picture"
                            ],
                            "intuition": "One right triangle solves it."
                        },
                        {
                            "title": "[Recommended Math 3] Scatterplots & Lines of Best Fit",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Trend-line predictions, correlation direction and strength",
                                "Key point: Read the overall flow"
                            ],
                            "intuition": "Listen to the story the points tell."
                        },
                        {
                            "title": "[Recommended Math 4] Desmos Checking Routine",
                            "problem": "Test frequency: ★★★★☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Checking function and equation problems with graphs",
                                "Key point: Enter the expression → verify intercepts, roots, maxima"
                            ],
                            "intuition": "Desmos is your second solver."
                        },
                        {
                            "title": "[Recommended R&W 1] Rhetorical Synthesis",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Supporting a target claim with bulleted notes",
                                "Key point: Use the goal as a filter to select only relevant information"
                            ],
                            "intuition": "The goal is the standard. Discard the rest."
                        },
                        {
                            "title": "[Recommended R&W 2] Author's Perspective & Tone",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Identifying neutral, critical, or supportive stances",
                                "Key point: Collect the evaluative words"
                            ],
                            "intuition": "Tone hides in the words."
                        },
                        {
                            "title": "[Recommended R&W 3] Parallel Structure & Concision",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Matching the form of and/or-linked items, removing redundancy",
                                "Key point: Items in a list must share the same shape"
                            ],
                            "intuition": "When the meaning is the same, the shorter one is the answer."
                        },
                        {
                            "title": "[Recommended R&W 4] Tracing Cause & Effect",
                            "problem": "Test frequency: ★★★☆☆ | Priority: Recommended",
                            "steps": [
                                "Representative types: Cause→effect chains, correlation vs. causation",
                                "Key point: Verify the mechanism"
                            ],
                            "intuition": "Happening together doesn't mean one caused the other."
                        },
                        {
                            "title": "[Advanced Math 1] Multi-Step Algebra & Substitution",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Pattern substitution in complex expressions, checking for extraneous roots",
                                "Key point: Prep for Module 2 hard-question differentiation"
                            ],
                            "intuition": "A hard problem is a chain of easy steps."
                        },
                        {
                            "title": "[Advanced Math 2] Circle Equations & Inscribed Angles",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Completing the square, central vs. inscribed angles",
                                "Key point: A bonus area with fixed patterns"
                            ],
                            "intuition": "Low frequency, but one formula finishes it when it appears."
                        },
                        {
                            "title": "[Advanced Math 3] Complex Numbers & Radicals",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Powers of i, complex conjugates, radical equations",
                                "Key point: A high-score differentiator — bonus on top of fundamentals"
                            ],
                            "intuition": "Some topics need only the i^4=1 cycle."
                        },
                        {
                            "title": "[Advanced R&W 1] Argumentation in Challenging Academic Passages",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Subtle argument structures in abstract passages",
                                "Key point: Draw an argument map"
                            ],
                            "intuition": "Beat hard passages with a structure map."
                        },
                        {
                            "title": "[Advanced R&W 2] Subtle Word Nuances",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Distinguishing nuance and strength among similar words",
                                "Key point: The positive–neutral–negative spectrum"
                            ],
                            "intuition": "Synonyms run at different temperatures."
                        },
                        {
                            "title": "[Advanced R&W 3] Shared Premises in Paired Passages",
                            "problem": "Test frequency: ★★☆☆☆ | Priority: Advanced",
                            "steps": [
                                "Representative types: Shared premises and stance differences between two texts",
                                "Key point: Separate the common ground, then describe the differences"
                            ],
                            "intuition": "Find the shared premise, and the differences come into focus."
                        }
                    ],
                    "quiz": {
                        "levels": [
                            {
                                "title": "Self-Check 1: Key Changes Before and After the Transition",
                                "difficulty": "easy",
                                "question": "Which of the following is correct about the paper-to-digital transition?",
                                "options": [
                                    "Testing time was shortened from 3 hours to 2 hours 14 minutes",
                                    "Passages got longer, from 25 words to 750 words",
                                    "Calculator use was banned entirely",
                                    "The Essay was revived and made mandatory"
                                ],
                                "answer": "Testing time was shortened from 3 hours to 2 hours 14 minutes",
                                "explanation": "The five key changes of the digital SAT are as follows. First, testing time was shortened from 3 hours to 2 hours 14 minutes. Second, 500–750-word passages became 25–150-word short passages, with one independent passage per question. Third, the no-calculator section was eliminated: calculators are allowed on all Math questions, and Desmos is built in. Fourth, the fixed format became two-stage adaptive testing. Fifth, the Essay was discontinued in June 2021. So 'longer passages,' 'calculator ban,' and 'Essay revival' are all incorrect. Knowing the format changes precisely is the starting point of your study strategy."
                            },
                            {
                                "title": "Self-Check 2: Priority Study Order",
                                "difficulty": "medium",
                                "question": "According to this guide's study roadmap, what should be completed first?",
                                "options": [
                                    "Zero mistakes on the 20 Essential-tier concepts",
                                    "Advanced-tier challenging algebra",
                                    "Working through all paper-era released questions",
                                    "Memorizing a 5000-word vocabulary list"
                                ],
                                "answer": "Zero mistakes on the 20 Essential-tier concepts",
                                "explanation": "Stage 1 of the roadmap is mastering the 10 Essential Math and 10 Essential R&W concepts with zero mistakes. Essential-tier concepts appear on every test, so losing points here makes a high score structurally impossible. Advanced-tier material is covered in Stage 3 as prep for Module 2's hard questions. Paper-era released questions are useful as per-concept training material, but working through all of them is not the goal. Context-based reading practice is more efficient than memorizing a vocabulary list for digital R&W. Study order should follow frequency and importance: solidify the Essentials first, then broaden into Recommended and Advanced — that delivers the most points per hour. Once the 20 Essentials are at zero-mistake level, move to Stage 4: building test-day feel with practice tests."
                            },
                            {
                                "title": "Self-Check 3: Adaptive-Test Judgment",
                                "difficulty": "hard",
                                "question": "While working through Math Module 1, you get stuck on question 15 (multi-step algebra) for 3 minutes. You have 10 minutes left and 7 questions remaining. What is the best call?",
                                "options": [
                                    "Mark it, solve the remaining 7 accurately first, then come back",
                                    "Stay on 15 until you crack it",
                                    "Guess on 15 and guess quickly on the rest too",
                                    "Skip 15 and never return to it"
                                ],
                                "answer": "Mark it, solve the remaining 7 accurately first, then come back",
                                "explanation": "In adaptive testing, Module 1 accuracy sets your score ceiling, so eliminating careless errors on solvable questions is the top priority. If you cling to one hard question and end up rushing or guessing on easy ones, a low Module 1 score can route you to the lower-difficulty Module 2. The standard play is to use the mark feature, move on, solve the remaining questions accurately, and return with whatever time is left. Skipping and never returning throws away points you could have earned in the harder Module 2. The time-management principle: secure accuracy on easy questions first, hard questions later. The habit of marking, moving on, and returning is a core skill for adaptive tests."
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
