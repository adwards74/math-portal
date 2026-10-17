/**
 * Neo Tutor 5.3 - Advanced Neural Link (Elite AI)
 * Features: Neural Mapping, Logic Map Visualization, Fuzzy Search, Voice Link, Session Memory
 */

window.TutorEngine = (function () {

    // ========================================
    // NEURAL KNOWLEDGE MAPPER (Neo 5.0)
    // ========================================
    const KnowledgeMap = {
        index: {},
        isMapped: false,
        conversationBuffer: [], // Neo 5.1: Context Buffer
        lastQueryTopic: null,

        addToBuffer(query, response) {
            this.conversationBuffer.push({ query, response });
            if (this.conversationBuffer.length > 3) this.conversationBuffer.shift();
        },

        getBufferContext() {
            return this.conversationBuffer.map(b => b.query).join(" ");
        },

        build() {
            if (this.isMapped) return;
            console.log("🧠 Neo Neural Link: Mapping Curriculum...");

            // 1. Map Subject Level
            if (window.MATH_DATA) {
                window.MATH_DATA.subjects.forEach(sub => {
                    this.addtoIndex(sub.id, {
                        type: 'subject',
                        title: sub.title,
                        description: sub.description,
                        color: sub.color,
                        insight: sub.intuition
                    });

                    // 2. Map Units
                    sub.units.forEach(unit => {
                        this.addtoIndex(unit.title, {
                            type: 'unit',
                            subjectId: sub.id,
                            insight: unit.insight,
                            topics: unit.topics
                        });

                        // 3. Map Lectures
                        unit.lectures.forEach(lecture => {
                            const lessonKey = lecture.url.split(':').pop();
                            this.addtoIndex(lessonKey, {
                                type: 'lecture',
                                name: lecture.name,
                                subjectId: sub.id,
                                insight: lecture.insight
                            });
                        });
                    });
                });
            }

            // 4. Map Deep Content (CHAPTER_DATA)
            if (window.CHAPTER_DATA) {
                for (const [chId, lessons] of Object.entries(window.CHAPTER_DATA)) {
                    for (const [lessonId, lesson] of Object.entries(lessons)) {
                        this.addtoIndex(lessonId, {
                            type: 'content',
                            title: lesson.title,
                            subtitle: lesson.subtitle,
                            content: lesson.content // We will parse this for keywords on demand
                        });
                        this.addtoIndex(lesson.title, { type: 'content_ref', id: lessonId });
                    }
                }
            }

            // NEW: Automatically integrate Glossary into Knowledge Map
            if (window.MATH_DATA && window.MATH_DATA.glossary) {
                for (const [term, def] of Object.entries(window.MATH_DATA.glossary)) {
                    this.addtoIndex(term, {
                        type: 'glossary',
                        definition: def
                    });
                }
            }

            this.isMapped = true;
            console.log("✅ Neo Neural Link: Mapping Complete.");
        },

        addtoIndex(key, data) {
            const normalizedKey = key.toLowerCase().trim();
            if (!this.index[normalizedKey]) this.index[normalizedKey] = [];
            this.index[normalizedKey].push(data);
        },

        search(query) {
            const lowerQuery = query.toLowerCase().trim();
            const results = [];

            // Neo 5.1/5.2: Weighted + Fuzzy Search Logic
            for (const [key, items] of Object.entries(this.index)) {
                let score = 0;
                if (key === lowerQuery) score = 15; // Exact
                else if (key.includes(lowerQuery) || lowerQuery.includes(key)) score = 8; // Partial
                else {
                    // Neo 5.2: Fuzzy Match
                    const distance = this.getLevenshtein(key, lowerQuery);
                    const threshold = Math.max(2, Math.floor(key.length * 0.3));
                    if (distance <= threshold) {
                        score = 5 - distance; // Higher score for lower distance
                    }
                }

                if (score > 0) {
                    items.forEach(item => {
                        results.push({ ...item, score });
                    });
                }
            }

            // NEW: Deep Content Scanning (Elite 5.5 Feature)
            // If no high-quality match (score < 10), scan inner lesson strings
            if (results.length === 0 || results[0].score < 10) {
                for (const [chId, lessons] of Object.entries(window.CHAPTER_DATA || {})) {
                    for (const [lessonId, lesson] of Object.entries(lessons)) {
                        if (!lesson.content) continue;
                        const plainContent = lesson.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                        if (plainContent.includes(lowerQuery)) {
                            results.push({
                                type: 'content',
                                title: lesson.title,
                                subtitle: lesson.subtitle,
                                content: lesson.content,
                                score: 7 // Medium score for deep content discovery
                            });
                        }
                    }
                }
            }

            // Sort by score descending
            return results.sort((a, b) => b.score - a.score);
        },

        summarize(lessonKey) {
            const data = this.index[lessonKey.toLowerCase()];
            if (!data) return "Neo-Sense: No local data for summarization.";

            const contentItem = data.find(i => i.type === 'content');
            if (!contentItem) return "Neo-Sense: Content stream too fragmented for summary.";

            // Basic extraction logic: identify h2 tags or pull from intuition-box
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentItem.content;

            const headings = Array.from(tempDiv.querySelectorAll('h2')).map(h => h.innerText);
            const intuition = tempDiv.querySelector('.intuition-box p')?.innerText;

            return {
                title: contentItem.title,
                points: headings,
                intuition: intuition
            };
        },

        // Neo 5.3: Neural Concept Mapping
        getConceptMatrix(topic) {
            let normalized = topic.toLowerCase().trim();

            // Elite 5.3: Fallback to last searched topic
            if (normalized === "general" && this.lastQueryTopic) {
                normalized = this.lastQueryTopic;
            }

            const neuralMatches = this.search(normalized);
            const matrix = {
                current: normalized,
                parents: PREREQUISITE_MAP[normalized] || [],
                children: []
            };

            if (neuralMatches.length > 0) {
                const best = neuralMatches[0];
                matrix.current = best.title || best.name || best.id || normalized;

                // Parents fallback
                if (matrix.parents.length === 0) {
                    if (best.type === 'glossary' && best.relatedUnits) {
                        matrix.parents = best.relatedUnits.map(u => u.unitTitle);
                    } else if (best.type === 'lecture' && best.subjectId) {
                        const sub = window.MATH_DATA && window.MATH_DATA.subjects.find(s => s.id === best.subjectId);
                        if (sub) {
                            const unit = sub.units.find(u => u.lectures.some(l => l.url.includes(normalized)));
                            if (unit) matrix.parents = [unit.title];
                        }
                    }
                }
            }

            // Find children that list this as a prerequisite
            for (const [key, prereqs] of Object.entries(PREREQUISITE_MAP)) {
                if (prereqs.includes(normalized)) {
                    matrix.children.push(key);
                }
            }

            return matrix;
        },

        // Neo 5.2: Fuzzy Logic Engine (Levenshtein)
        getLevenshtein(s1, s2) {
            const m = s1.length, n = s2.length;
            const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
            for (let i = 0; i <= m; i++) dp[i][0] = i;
            for (let j = 0; j <= n; j++) dp[0][j] = j;
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                    dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
                }
            }
            return dp[m][n];
        }
    };

    // ========================================
    // PHASE 1: CONTEXT-AWARE HINT DATABASE
    // ========================================
    const HINT_DATABASE = {
        // Algebra 2 Topics
        "axiom": "Remember: Axioms are the foundational rules we accept without proof. Think of them as the 'constitution' of mathematics.",
        "commutative": "Commutative means order doesn't matter: a + b = b + a. Think of it like shuffling cards.",
        "associative": "Associative means grouping doesn't matter: (a + b) + c = a + (b + c). Think of it like rearranging parentheses.",
        "distributive": "Distributive connects addition and multiplication: a(b + c) = ab + ac. It's the key to expanding expressions!",
        "literal": "Literal equations have multiple variables. Treat all other variables as constants and isolate your target.",
        "quadratic": "For quadratics, try factoring first. If stuck, use the quadratic formula: x = (-b ± √(b²-4ac)) / 2a",
        "factor": "Factoring is reverse distribution. Look for common factors first, then try special patterns like difference of squares.",
        "vieta": "Vieta's Formulas: For ax² + bx + c = 0, sum of roots = -b/a and product of roots = c/a. No solving needed!",
        "discriminant": "The discriminant (b²-4ac) tells you: positive → 2 real roots, zero → 1 real root, negative → complex roots.",
        "complex": "Complex numbers use i = √(-1). Remember: i² = -1, i³ = -i, i⁴ = 1, then the cycle repeats!",
        "polynomial": "For polynomials, the degree tells you the maximum number of roots. Leading coefficient determines end behavior.",
        "rational": "For rational expressions, factor both numerator and denominator. Cancel common factors carefully!",
        "sequence": "Arithmetic sequence: add a constant (d). Geometric sequence: multiply by a constant (r).",
        "series": "A series is the sum of a sequence. Use formulas: Arithmetic = n(a₁+aₙ)/2, Geometric = a₁(1-rⁿ)/(1-r)",
        "sigma": "Sigma notation is a loop: ∑ tells you to add. The index starts at the bottom, ends at the top.",
        "logarithm": "Logs are the inverse of exponentials. log_b(x) = y means b^y = x. Think: 'What power gives me x?'",
        "exponential": "Exponential growth: f(x) = ab^x. If b > 1, growth. If 0 < b < 1, decay.",
        "trig": "SOHCAHTOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent",
        "identity": "Trig identity tip: sin²θ + cos²θ = 1 is your best friend. Derive everything from it!",
        "radian": "Radians are the 'natural' angle unit. π radians = 180°. To convert: multiply by π/180 or 180/π.",
        "matrix": "Matrix multiplication: Row × Column. The dimensions must match: (m×n) × (n×p) = (m×p)",
        "determinant": "The determinant tells you if a matrix is invertible. If det = 0, no inverse exists!",
        "probability": "Basic probability = favorable outcomes / total outcomes. Always between 0 and 1.",
        "binomial": "Binomial probability: P(X=k) = C(n,k) × p^k × (1-p)^(n-k). Remember Pascal's Triangle!",
        "normal": "For normal distribution, use z-scores: z = (x - μ) / σ. Then look up in z-table.",
        // Precalc Topics
        "limit": "Limits describe behavior as x approaches a value. Try direct substitution first!",
        "continuity": "Continuous = no holes, no jumps, no vertical asymptotes. The pencil test: can you draw it without lifting?",
        "asymptote": "Horizontal asymptotes: compare degrees. Vertical asymptotes: where denominator = 0 (after canceling).",
        "polar": "Polar coordinates: (r, θ). Convert with x = r·cos(θ), y = r·sin(θ), r² = x² + y².",
        "parametric": "Parametric equations describe motion over time. Eliminate t to see the path shape.",
        "vector": "Vectors have magnitude and direction. Add component-wise: <a,b> + <c,d> = <a+c, b+d>.",
        // Competition & Prep
        "shsat": "The Specialized High Schools Admissions Test (SHSAT) is the portal to NYC's elite schools. Focus on Math precision and Reading speed. Check the 'SHSAT Review' link in the sidebar for my targeted YouTube strategies!",
        "tj": "Thomas Jefferson High School for Science and Technology (TJHSST) prep requires mastery of Algebra 2 and strong problem-solving 'intuition'. Use our 'TJ Strategy' dashboard for the full elite roadmap.",
        "test": "Standardized tests aren't just about math; they're about 'Mental Endurance'. Practice with a timer and always audit your mistakes in the Review Hub!",
        "version": "I am Neo Tutor 5.3 Elite. My current upgrades include Neural Logic Map Visualization, Fuzzy Neural Search, Voice Input Integration, and Contextual Intelligence. I am running on the local deterministic logic kernel v5.3.",
        // 2028 Elite Expansion: Math
        "partial": "Partial derivatives measure the rate of change of a multivariable function with respect to one variable, holding others constant. Look for ∂f/∂x notation!",
        "gradient": "The gradient (∇f) points in the direction of steepest increase. In machine learning, gradient descent follows the negative gradient to minimize loss!",
        "basis": "A basis is a set of linearly independent vectors that spans a vector space. Every vector can be written as a unique combination of basis vectors.",
        "modular": "Modular arithmetic works with remainders: a ≡ b (mod n) means a and b have the same remainder when divided by n. Clocks are mod 12!",
        "pie": "The digits of π are infinite and non-repeating. For calculations, 3.14159 is usually enough precision!",
        "differential": "The differential represents an infinitely small change in a quantity. It's the building block of Calculus!",
        "integral": "Integration is the 'accumulation' process. Area under a curve, volume of solids, or total change over time—it all comes down to the Integral.",
        "derivative": "The derivative measures instantaneous rate of change. It's the slope of the tangent line at any specific point.",
        "topology": "Topology is 'rubber-sheet geometry'. We study properties that don't change through stretching or bending, only tearing.",
        "optimization": "Optimization is finding the 'Best' solution. Usually, it involves setting a derivative to zero and checking for Max/Min.",
        // Research & Statistics (Math 5)
        "null-hypothesis": "The Null Hypothesis ($H_0$) is the 'defense' in the courtroom of science. We assume no effect until the evidence (p-value) is overwhelming.",
        "p-value": "The p-value is the probability that your results happened by chance. If $p < \\alpha$ (usually 0.05), your results are 'statistically significant'!",
        "chi-square": "Chi-Square ($\\chi^2$) checks for 'Goodness of Fit'. It measures how much your observed data differs from what we expected.",
        "degrees-of-freedom": "Degrees of Freedom (df) is the number of values in a final calculation that are free to vary. For Chi-Square, it's usually (categories - 1).",
        "correlation": "Correlation ($r$) ranges from -1 to 1. Closer to ±1 means a stronger relationship. Remember: Correlation does NOT equal Causation!",
        "r-squared": "R-squared ($R^2$) is the 'percentage of explanation'. If $R^2 = 0.85$, then 85% of the change in $y$ is explained by your $x$ variable.",
        // Proof & Logic (Math 6)
        "derivation": "A derivation is a sequence of logical steps showing how a result follows from axioms or previously proven theorems. It's the 'map' of the proof.",
        "first-principles": "Mastering First Principles means understanding the fundamental logic of a concept without relying on memorized formulas. It's the ultimate 'why'.",
        "syllogism": "A syllogism is a logical argument: If p implies q, and q implies r, then p implies r. It's the gravity of logic.",
        // S5-S9 Supplements (Neo 6.0) — Ruri's school test error patterns
        "slant": "Slant (oblique) asymptotes occur when the numerator's degree is exactly one more than the denominator's. Do polynomial long division — the quotient (ignore the remainder) is your slant asymptote!",
        "oblique": "Oblique asymptote = slant asymptote. Divide numerator by denominator; the quotient gives the line, the remainder tells you how the curve approaches it.",
        "long division": "Polynomial long division: divide leading terms, multiply back, subtract, bring down. Repeat until the remainder's degree is less than the divisor's.",
        "rational inequality": "Rational inequalities: 1) Find critical points (zeros AND undefined points), 2) Plot on a sign chart, 3) Test each interval, 4) Undefined points are NEVER included. Use open/closed dots carefully!",
        "sign chart": "Sign charts: mark critical values on a number line, pick a test value in each interval, record the sign. The solution is where the sign matches the inequality.",
        "function model": "Function models: 1) Identify variables, 2) Choose type (linear/exponential/logarithmic/logistic), 3) Fit and check residuals, 4) State assumptions. R-squared = % of variation explained.",
        "complex zeros": "Complex zeros come in conjugate pairs! If 2+3i is a zero, so is 2-3i. For polynomials with real coefficients, multiply (x - (a+bi))(x - (a-bi)) to get a real quadratic factor.",
        "conjugate": "Conjugate pairs: (a+bi) and (a-bi). Their product is a^2 + b^2 (always real). Use this to clear complex factors fast.",
        "justification": "MP3 Justification protocol: Claim (one precise sentence) + Evidence (specific values, no vagueness) + Reasoning (connect to the concept). Never write 'I think' — state it.",
        // Competition Mastery (Elite 5.5)
        "stars-and-bars": "Stars & Bars is used to count ways to distribute identical items into distinct groups. Formula: C(n+k-1, k-1).",
        "complementary-counting": "If it's too hard to count directly, count the 'bad' cases and subtract from the total. Total - Bad = Good.",
        "casework": "Casework is the ultimate brute-force-of-logic. Break the problem into mutually exclusive scenarios and sum them up.",
        "invariants": "An invariant is a property that stays the same while other things change (e.g., parity, sum of angles). It's the 'anchor' in a messy problem.",
    };

    // Neo 5.1: Prerequisite Roadmap
    const PREREQUISITE_MAP = {
        "res-stats": ["probability", "algebra2"],
        "null-hypothesis": ["probability"],
        "chi-square": ["probability"],
        "quadratic": ["factoring", "complex"],
        "polynomial": ["quadratic", "factor"],
        "logarithm": ["exponential"],
        "trig": ["radian", "geometry"],
        "calculus": ["limit", "function"],
        "proof-logic": ["algebra2", "geometry"],
        "derivation": ["proof-logic"],
        "stars-and-bars": ["algebra2", "probability"],
        "complementary-counting": ["probability"],
        "casework": ["logic"],
        "complex": ["radical", "number-line"],
        "gradient": ["partial", "vector"],
        "partial": ["limit", "calculus"],
        "basis": ["vector", "matrix"],
        "modular": ["axiom", "integer"],
        // S5-S9 Supplements (Neo 6.0)
        "slant": ["polynomial", "rational"],
        "oblique": ["slant", "polynomial"],
        "long division": ["polynomial", "factor"],
        "rational inequality": ["rational", "quadratic"],
        "sign chart": ["rational inequality", "factor"],
        "function model": ["exponential", "logarithm"],
        "complex zeros": ["complex", "polynomial"],
        "conjugate": ["complex"],
        "justification": ["proof-logic", "first-principles"]
    };

    // ========================================
    // PHASE 2: LEARNING STATS TRACKER
    // ========================================
    const STATS_KEY = 'neo_tutor_stats';

    function getStats() {
        const saved = localStorage.getItem(STATS_KEY);
        return saved ? JSON.parse(saved) : {
            currentStreak: 0,
            bestStreak: 0,
            totalCorrect: 0,
            totalAttempts: 0,
            topicAccuracy: {},
            dailyGoal: 5,
            dailyProgress: 0,
            lastActiveDate: null
        };
    }

    function saveStats(stats) {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    }

    function recordQuizResult(topic, isCorrect) {
        const stats = getStats();
        const today = new Date().toDateString();

        // Reset daily progress if new day
        if (stats.lastActiveDate !== today) {
            stats.dailyProgress = 0;
            stats.lastActiveDate = today;
        }

        stats.totalAttempts++;
        stats.dailyProgress++;

        if (isCorrect) {
            stats.totalCorrect++;
            stats.currentStreak++;
            if (stats.currentStreak > stats.bestStreak) {
                stats.bestStreak = stats.currentStreak;
            }
        } else {
            stats.currentStreak = 0;
        }

        // Track topic accuracy
        if (topic) {
            const normalizedTopic = topic.toLowerCase();
            if (!stats.topicAccuracy[normalizedTopic]) {
                stats.topicAccuracy[normalizedTopic] = { correct: 0, total: 0 };
            }
            stats.topicAccuracy[normalizedTopic].total++;
            if (isCorrect) {
                stats.topicAccuracy[normalizedTopic].correct++;
            }
        }

        saveStats(stats);
        updateTutorUI(stats, isCorrect);
        return stats;
    }

    function getWeakTopics() {
        const stats = getStats();
        const weak = [];
        for (const [topic, data] of Object.entries(stats.topicAccuracy)) {
            const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
            if (accuracy < 70 && data.total >= 2) {
                weak.push({ topic, accuracy: Math.round(accuracy), attempts: data.total });
            }
        }
        return weak.sort((a, b) => a.accuracy - b.accuracy);
    }

    // ========================================
    // PHASE 3: INTERACTIVE CHAT SYSTEM
    // ========================================
    function handleChatInput(query) {
        if (!query || query.trim().length === 0) {
            return "Type a math term like 'quadratic', 'factor', or 'trig' to get instant help!";
        }

        const lowerQuery = query.toLowerCase().trim();
        const context = KnowledgeMap.getBufferContext ? KnowledgeMap.getBufferContext() : "";

        // Neo 6.0: Friday session bridge (check before general search)
        const fridayResponse = handleFridayFlow(lowerQuery);
        if (fridayResponse) return fridayResponse;

        // Neo 6.0: Wrong Answer Journal (check before general search)
        const journalResponse = handleWrongAnswerFlow(lowerQuery, query);
        if (journalResponse) return journalResponse;

        // Neo 6.0 Phase 2 (F5): learning-path map trigger
        const mapResponse = handleMapFlow(lowerQuery);
        if (mapResponse) return mapResponse;

        // Neo 5.1 Contextual follow-up check
        let followUpQuery = lowerQuery;
        if (lowerQuery.includes("more") || lowerQuery.includes("explain") || lowerQuery.includes("example")) {
            followUpQuery = (context + " " + lowerQuery).trim();
        }

        // Neo 5.0/5.1 Neural Search
        const neuralMatches = KnowledgeMap.search ? KnowledgeMap.search(followUpQuery) : [];

        let response = "";
        if (neuralMatches.length > 0) {
            const bestMatch = neuralMatches[0];

            // Layer 1: Intuition
            if (bestMatch.insight) {
                response += `💡 **Intuition:** ${bestMatch.insight}\n\n`;
            } else if (bestMatch.type === 'glossary') {
                response += `📖 **Definition:** ${bestMatch.definition}\n\n`;
            } else if (HINT_DATABASE[lowerQuery]) {
                response += `💡 **Intuition:** ${HINT_DATABASE[lowerQuery]}\n\n`;
            }

            // Layer 2: Mechanism
            if (bestMatch.type === 'content' && bestMatch.subtitle) {
                response += `⚙️ **Mechanism:** This relates to *${bestMatch.subtitle}*. `;
                if (bestMatch.title.includes("&")) {
                    response += `It is a core junction in ${bestMatch.title}. `;
                }
            } else if (bestMatch.type === 'unit') {
                response += `⚙️ **Mechanism:** This is a major unit covering: ${bestMatch.topics.join(', ')}. `;
            } else if (bestMatch.type === 'glossary') {
                response += `⚙️ **Mechanism:** This is a vital term in our mathematical framework. `;
            }

            // Neo 5.1: Prerequisite Intelligence
            const prereqs = PREREQUISITE_MAP[lowerQuery] || [];
            if (prereqs.length > 0) {
                response += `\n\n🛡️ **Foundation Check:** To master this, ensure you are comfortable with *${prereqs.join(' and ')}*. Would you like a quick review?`;
            }

            // Layer 3: Socratic Inquiry
            const inquiries = [
                "How does this relate to your previous mental model?",
                "What happens if we break the symmetry of this expression?",
                "Could this be modeled as a linear transformation?",
                "What's the 'zero-cost' intuition here?",
                "How does this connect to the SHSAT or TJ Prep roadmap?"
            ];

            // Neo 5.2: Simplicity Filter
            if (lowerQuery.includes("simple") || lowerQuery.includes("easy") || lowerQuery.includes("kid")) {
                response = `🧒 **Simpler View:** Think of this as ${bestMatch.title} but explained like a story. ${bestMatch.insight || "It's a fundamental bridge between concepts."}\n\n` + response;
            }

            response += `\n\n🤔 **Neo's Inquiry:** ${inquiries[Math.floor(Math.random() * inquiries.length)]}`;

            if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, response);
            return response;
        }

        // Search hint database for matching keywords (Neo 5.3 Fallback)
        for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
            if (lowerQuery.includes(keyword) || keyword.includes(lowerQuery)) {
                return hint;
            }
        }

        // Fallback responses
        const fallbacks = [
            `I don't have specific data on "${query}" yet, but try breaking it down into simpler concepts!`,
            `Hmm, "${query}" is interesting. Can you be more specific about what concept you're working with?`,
            `Let me think... For "${query}", try reviewing the related chapter lesson first!`
        ];

        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    // ========================================
    // PHASE 4: MOTIVATION SYSTEM
    // ========================================
    function updateTutorUI(stats, justAnsweredCorrect) {
        const bubble = document.getElementById('tutor-message');
        const statsDisplay = document.getElementById('tutor-stats-display');

        // Update streak display
        if (statsDisplay) {
            const accuracy = stats.totalAttempts > 0
                ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
                : 0;

            let streakEmoji = '';
            if (stats.currentStreak >= 10) streakEmoji = '🔥🔥🔥';
            else if (stats.currentStreak >= 5) streakEmoji = '🔥🔥';
            else if (stats.currentStreak >= 3) streakEmoji = '🔥';

            statsDisplay.innerHTML = `
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:8px;">
                    <span>Streak: ${stats.currentStreak} ${streakEmoji}</span>
                    <span>Accuracy: ${accuracy}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.7rem; opacity:0.7;">
                    <span>Best: ${stats.bestStreak}</span>
                    <span>Today: ${stats.dailyProgress}/${stats.dailyGoal}</span>
                </div>
                <div style="margin-top:8px;">
                    <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px;">
                        <div style="height:100%; width:${Math.min((stats.dailyProgress / stats.dailyGoal) * 100, 100)}%; background:linear-gradient(90deg, var(--accent-cyan), var(--accent-green)); border-radius:2px; transition:width 0.5s;"></div>
                    </div>
                </div>
            `;
        }

        // Show celebration for milestones
        if (justAnsweredCorrect && stats.currentStreak > 0) {
            if (stats.currentStreak === 3) {
                typeTerminalMessage("🔥 HAT TRICK! 3 correct in a row. You're warming up!");
            } else if (stats.currentStreak === 5) {
                typeTerminalMessage("🔥🔥 FIVE STREAK! Your neural pathways are firing! Keep this momentum!");
            } else if (stats.currentStreak === 10) {
                typeTerminalMessage("🔥🔥🔥 LEGENDARY 10-STREAK! You've achieved FLOW STATE. The matrix bends to your will!");
                triggerCelebration();
            } else if (stats.currentStreak % 10 === 0) {
                typeTerminalMessage(`⚡ INCREDIBLE ${stats.currentStreak}-STREAK! You're rewriting the algorithm of genius!`);
                triggerCelebration();
            }
        }

        // Goal completion message
        if (stats.dailyProgress === stats.dailyGoal) {
            setTimeout(() => {
                typeTerminalMessage("🎯 DAILY GOAL ACHIEVED! You've completed today's mission. Want to push further?");
            }, 2000);
        }
    }

    function triggerCelebration() {
        // Create confetti effect
        const overlay = document.createElement('div');
        overlay.className = 'celebration-overlay';
        overlay.innerHTML = `
            <div class="celebration-content">
                <div class="confetti-container">
                    ${Array(50).fill().map(() => `<div class="confetti" style="left:${Math.random() * 100}%; animation-delay:${Math.random() * 2}s; background:${['#00d2ff', '#9d50bb', '#38ef7d', '#f5576c', '#ffd700'][Math.floor(Math.random() * 5)]};"></div>`).join('')}
                </div>
                <div class="celebration-badge">
                    <i class="fas fa-trophy" style="font-size:4rem; color:#ffd700;"></i>
                    <h2 style="margin-top:20px; color:var(--accent-cyan);">STREAK MASTER!</h2>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        setTimeout(() => overlay.remove(), 4000);
    }

    // ========================================
    // PHASE 5: PREDICTIVE RECOMMENDATIONS
    // ========================================
    function getNextRecommendation(currentSubjectId, currentProgress) {
        const weakTopics = getWeakTopics();

        // Priority 1: Review weak topics
        if (weakTopics.length > 0) {
            const weakest = weakTopics[0];
            return {
                type: 'review',
                message: `📊 Review Recommended: "${weakest.topic}" (${weakest.accuracy}% accuracy). Let's strengthen this foundation!`,
                topic: weakest.topic
            };
        }

        // Priority 2: Continue to next lesson based on progress
        if (typeof MATH_DATA !== 'undefined' && currentSubjectId) {
            const subject = MATH_DATA.subjects.find(s => s.id === currentSubjectId);
            if (subject) {
                for (const unit of subject.units) {
                    for (const lecture of unit.lectures) {
                        if (!currentProgress[lecture.url]) {
                            return {
                                type: 'next',
                                message: `⏭️ Next Up: "${lecture.title}" in ${unit.title}. Ready to level up?`,
                                url: lecture.url
                            };
                        }
                    }
                }
            }
        }

        return {
            type: 'complete',
            message: "🏆 Amazing! You've mastered all available content. Explore another subject or revisit for reinforcement!"
        };
    }

    // ========================================
    // ENHANCED SOCRATIC ADVICE
    // ========================================
    function getSocraticAdvice(lessonKey, subjectId) {
        const subject = typeof MATH_DATA !== 'undefined' ? MATH_DATA.subjects.find(s => s.id === subjectId) : null;
        if (!subject) return "Neo-Sense: Subject data missing. Manual override required.";

        let insight = null;
        let contextHint = null;

        // Search in units or lectures
        subject.units.forEach(unit => {
            if (unit.insight && lessonKey.startsWith(unit.title.split(':')[0].toLowerCase().trim())) {
                insight = unit.insight;
            }
            unit.lectures.forEach(l => {
                if (l.url.includes(lessonKey)) {
                    if (l.insight) insight = l.insight;
                    // Get context hints based on lesson content
                    for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
                        if ((l.name && l.name.toLowerCase().includes(keyword)) || lessonKey.includes(keyword)) {
                            contextHint = hint;
                            break;
                        }
                    }
                }
            });
        });

        // Fallback to subject level
        if (!insight) insight = subject.insight || "Scanning the mathematical continuum...";

        const inquiries = [
            "How does this relate to your previous mental model?",
            "What happens if we break the symmetry of this expression?",
            "If this were an algorithm, what would be the time complexity?",
            "Could this be modeled as a linear transformation?",
            "What's the 'zero-cost' intuition here?",
            "How would you explain this to someone who only knows Algebra 1?"
        ];

        let response = `${insight}\n\n**Neo's Inquiry:** ${inquiries[Math.floor(Math.random() * inquiries.length)]}`;

        if (contextHint) {
            response += `\n\n💡 **Quick Tip:** ${contextHint}`;
        }

        return response;
    }

    function getWrongAnswerHint(question, wrongAnswer, correctAnswer) {
        // Extract topic from question for targeted hints
        const lowerQuestion = question.toLowerCase();

        for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
            if (lowerQuestion.includes(keyword)) {
                return `💡 **Hint:** ${hint}\n\nReview this concept and try again!`;
            }
        }

        return "Take a moment to review the lesson content. The answer is hidden in the patterns!";
    }

    // ========================================
    // TERMINAL TYPING EFFECT
    // ========================================
    function typeTerminalMessage(html, delay = 20) {
        const bubble = document.getElementById('tutor-message');
        if (!bubble) return;

        bubble.innerHTML = '<span class="terminal-prefix">></span> ';
        let i = 0;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const plainText = tempDiv.innerText;

        function type() {
            if (i < plainText.length) {
                bubble.innerText = '> ' + plainText.substring(0, i + 1);
                i++;
                setTimeout(type, delay);
            } else {
                bubble.innerHTML = `<span class="terminal-prefix">></span> ${html}<span class="terminal-cursor"></span>`;
                if (window.MathJax) MathJax.typesetPromise();
                // Neo 6.0 Phase 2 (F7): speak when TTS enabled or query came from voice
                const voiceOnce = window._voiceQuery === true;
                window._voiceQuery = false;
                if (voiceOnce || isTTSEnabled()) speakText(stripForSpeech(plainText));
            }
        }
        type();
    }

    function updateStabilityUI() {
        const stats = getStats();
        const canvas = document.getElementById('stability-graph');
        const percentDisplay = document.getElementById('stability-percent');

        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const accuracy = stats.totalAttempts > 0
            ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
            : 98;

        if (percentDisplay) {
            percentDisplay.textContent = `${accuracy}%`;
        }

        // Draw stability graph
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = accuracy > 80 ? '#38ef7d' : accuracy > 60 ? '#ffd700' : '#f5576c';
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
            const normalizedAccuracy = accuracy / 100;
            const wave = Math.sin(x * 0.05 + Date.now() * 0.002) * (1 - normalizedAccuracy) * 15;
            const baseline = canvas.height / 2;
            const y = baseline + wave + (Math.random() - 0.5) * 5 * (1 - normalizedAccuracy);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }

        ctx.stroke();
    }

    // Start stability animation
    setInterval(updateStabilityUI, 100);

    // ========================================
    // NEO 6.0: WRONG ANSWER JOURNAL
    // ========================================
    // Auto-records topics the student struggles with. Stored in localStorage
    // (no server needed). "review" pulls a random unresolved item for quiz.
    const WRONG_KEY = 'neo_wrong_answers';
    const WRONG_MAX = 50;

    function getWrongAnswers() {
        try {
            const saved = localStorage.getItem(WRONG_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    function saveWrongAnswers(list) {
        try {
            localStorage.setItem(WRONG_KEY, JSON.stringify(list));
        } catch (e) { /* storage unavailable — silent */ }
    }

    function recordWrongAnswer(topic, question) {
        const list = getWrongAnswers();
        // Avoid exact duplicates of unresolved items
        const dup = list.some(w => !w.resolved &&
            w.topic.toLowerCase() === (topic || 'general').toLowerCase());
        if (!dup) {
            const now = Date.now();
            const item = {
                topic: topic || 'general',
                question: question || '',
                timestamp: now,
                resolved: false,
                // Neo 6.0 Phase 2 (F6): spaced repetition fields
                subject: (typeof TUTOR_SUBJECT !== 'undefined' ? TUTOR_SUBJECT : 'general'),
                lastReviewed: now,
                reviewCount: 0,
                nextReview: now + DAY_MS // first review due in 1 day
            };
            list.push(item);
            if (list.length > WRONG_MAX) list.splice(0, list.length - WRONG_MAX);
            saveWrongAnswers(list);
        }
        updateReviewBadge();
        return getUnresolvedCount();
    }

    function getUnresolvedCount() {
        return getWrongAnswers().filter(w => !w.resolved).length;
    }

    function getUnresolvedList() {
        return getWrongAnswers().filter(w => !w.resolved);
    }

    function markWrongResolved(topic) {
        const list = getWrongAnswers();
        const lower = (topic || '').toLowerCase().trim();
        let count = 0;
        list.forEach(w => {
            if (!w.resolved && (lower === '' ||
                w.topic.toLowerCase().includes(lower) ||
                lower.includes(w.topic.toLowerCase()))) {
                w.resolved = true;
                count++;
            }
        });
        saveWrongAnswers(list);
        updateReviewBadge();
        return count;
    }

    function pickReviewItem() {
        // Neo 6.0 Phase 2 (F6): prefer items due for spaced review
        const due = getDueItems();
        const pool = due.length > 0 ? due : getUnresolvedList();
        if (pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    }

    // Neo 6.0 trigger phrases (English only — Ruri)
    const WRONG_TRIGGERS = [
        "i don't understand", "i dont understand", "don't get it",
        "dont get it", "i'm confused", "im confused", "i got it wrong",
        "this is wrong", "i made a mistake", "still confused"
    ];
    const REVIEW_TRIGGERS = ["review", "quiz me", "test me", "practice"];
    const RESOLVED_TRIGGERS = ["got it now", "understand now", "i get it now", "resolved", "makes sense now"];
    const FRIDAY_PREP_TRIGGERS = ["prepare friday", "friday prep", "prepare for friday", "friday preview"];
    const FRIDAY_REVIEW_TRIGGERS = ["review friday", "friday review", "friday recap"];

    function stripTriggerWords(query, triggers) {
        let cleaned = query.toLowerCase();
        triggers.forEach(t => { cleaned = cleaned.split(t).join(' '); });
        return cleaned.replace(/\s+/g, ' ').trim();
    }

    function handleWrongAnswerFlow(lowerQuery, originalQuery) {
        // Returns a response string if a journal trigger matched, else null
        if (WRONG_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const topicGuess = stripTriggerWords(lowerQuery, WRONG_TRIGGERS) ||
                (KnowledgeMap.lastQueryTopic || 'general');
            const count = recordWrongAnswer(topicGuess, originalQuery);
            // Still give a helpful answer on the topic itself
            const topicMatches = KnowledgeMap.search ? KnowledgeMap.search(topicGuess) : [];
            let help = "";
            if (topicMatches.length > 0 && HINT_DATABASE[topicGuess]) {
                help = `\n\n💡 **Quick help on "${topicGuess}":** ${HINT_DATABASE[topicGuess]}`;
            } else if (topicMatches.length > 0) {
                const best = topicMatches[0];
                help = `\n\n💡 **Quick help:** ${best.insight || best.definition || best.title || ''}`;
            }
            if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, 'wrong-journal');
            return `📝 **Saved to your Wrong Answer Journal** ("${topicGuess}"). ` +
                `You have ${count} unresolved item${count === 1 ? '' : 's'}. ` +
                `Type "review" anytime to quiz yourself on them.${help}`;
        }
        // Neo 6.0 Phase 2 (F6): "due" lists items due for spaced review
        if (lowerQuery === "due" || lowerQuery === "what's due" ||
            lowerQuery === "what is due" || lowerQuery === "review due" ||
            lowerQuery === "due for review") {
            const due = getDueItems();
            if (due.length === 0) {
                return "📅 **Nothing due for review!** " +
                    (getUnresolvedCount() > 0
                        ? `You have ${getUnresolvedCount()} unresolved item(s), but none are due yet. Spaced review keeps them fresh.`
                        : "Your Wrong Answer Journal is clear. Nice work!");
            }
            let out = `📅 **Due for review (${due.length}):**\n\n`;
            due.slice(0, 8).forEach(w => { out += `• ${w.topic}\n`; });
            out += `\nType "review" to start quizzing.`;
            return out;
        }
        if (REVIEW_TRIGGERS.some(t => lowerQuery === t || lowerQuery.startsWith(t + ' '))) {
            const item = pickReviewItem();
            if (!item) {
                return "🎉 **Wrong Answer Journal is clear!** No unresolved items. " +
                    "When something confuses you, tell me and I'll save it here for review.";
            }
            // Neo 6.0 Phase 2 (F6): presenting the quiz counts as a review —
            // push the next review to the next spaced interval
            scheduleNextReview(item);
            updateJournalItem(item);
            const hint = HINT_DATABASE[item.topic.toLowerCase()] || '';
            return `📝 **Review Quiz** (${getUnresolvedCount()} unresolved):\n\n` +
                `**Topic:** ${item.topic}\n` +
                `**You asked:** "${item.question}"\n\n` +
                (hint ? `💡 **Hint:** ${hint}\n\n` : '') +
                `Explain this concept back to me in your own words. ` +
                `When you've got it, say "got it now" and I'll mark it resolved.`;
        }
        if (RESOLVED_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const topicGuess = stripTriggerWords(lowerQuery, RESOLVED_TRIGGERS);
            const n = markWrongResolved(topicGuess);
            if (n > 0) {
                return `✅ **Marked ${n} item${n === 1 ? '' : 's'} resolved!** ` +
                    `${getUnresolvedCount()} still in your journal. Keep going!`;
            }
            return "✅ Noted! If you were working through a journal item, it's now marked resolved.";
        }
        return null;
    }

    // ========================================
    // NEO 6.0: ZOOM SESSION BRIDGE
    // Friday tutoring (starts 2026-10-16): pre-session prep + post-session review
    // ========================================
    const FRIDAY_CORE_TOPICS = [
        "slant asymptotes",
        "rational inequalities",
        "function models",
        "complex zeros",
        "justification"
    ];

    function handleFridayFlow(lowerQuery) {
        if (FRIDAY_PREP_TRIGGERS.some(t => lowerQuery.includes(t))) {
            // Prep: 3 core concepts — prefer weak topics, fall back to S5-S9 core
            const weak = getWeakTopics().slice(0, 3).map(w => w.topic);
            const topics = weak.length >= 3 ? weak :
                [...weak, ...FRIDAY_CORE_TOPICS.filter(t => !weak.includes(t))].slice(0, 3);
            let out = "🎯 **Friday Session Prep** — 3 key concepts to review before your Zoom:\n\n";
            topics.forEach((t, i) => {
                const hint = HINT_DATABASE[t.toLowerCase()] || '';
                const matrix = KnowledgeMap.getConceptMatrix ?
                    KnowledgeMap.getConceptMatrix(t) : { parents: [] };
                out += `**${i + 1}. ${t}**\n`;
                if (hint) out += `   ${hint}\n`;
                if (matrix.parents && matrix.parents.length > 0) {
                    out += `   🛡️ Prereqs: ${matrix.parents.join(', ')}\n`;
                }
                out += "\n";
            });
            out += "Skim these, note what confuses you, and bring questions to your tutor!";
            if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, 'friday-prep');
            return out;
        }
        if (FRIDAY_REVIEW_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const unresolved = getUnresolvedList();
            let out = "🔄 **Friday Session Review**\n\n";
            if (unresolved.length > 0) {
                out += `📝 **Wrong Answer Journal:** ${unresolved.length} unresolved\n`;
                unresolved.slice(0, 5).forEach(w => { out += `   • ${w.topic}\n`; });
                out += "\nType \"review\" to quiz yourself on one.\n\n";
            } else {
                out += "📝 **Wrong Answer Journal:** all clear! Nice work.\n\n";
            }
            const weak = getWeakTopics().slice(0, 3);
            if (weak.length > 0) {
                out += "📊 **Weakest topics this week:**\n";
                weak.forEach(w => { out += `   • ${w.topic} (${w.accuracy}% accuracy)\n`; });
            }
            if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, 'friday-review');
            return out;
        }
        return null;
    }

    // ========================================
    // NEO 6.0 PHASE 2: SPACED REPETITION + VOICE LINK + LEARNING-PATH TREE
    // ========================================
    const TUTOR_SUBJECT = 'math';
    const REVIEW_INTERVALS = [1, 3, 7, 14]; // days between reviews (1d, 3d, 7d, 14d)
    const DAY_MS = 24 * 60 * 60 * 1000;
    const TTS_KEY = 'neo_tts_enabled';

    function escHtml(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    // --- F6: spaced repetition helpers (backward compatible with Phase 1 records) ---
    function normalizeJournalItem(w) {
        if (typeof w.reviewCount !== 'number') w.reviewCount = 0;
        if (typeof w.lastReviewed !== 'number') w.lastReviewed = w.timestamp || Date.now();
        if (typeof w.nextReview !== 'number') {
            w.nextReview = w.lastReviewed + REVIEW_INTERVALS[0] * DAY_MS;
        }
        if (!w.subject) w.subject = 'general';
        return w;
    }

    function getDueItems() {
        const now = Date.now();
        return getWrongAnswers().map(normalizeJournalItem)
            .filter(w => !w.resolved && w.nextReview <= now);
    }

    function scheduleNextReview(w) {
        normalizeJournalItem(w);
        w.lastReviewed = Date.now();
        w.reviewCount = (w.reviewCount || 0) + 1;
        const idx = Math.min(w.reviewCount, REVIEW_INTERVALS.length - 1);
        w.nextReview = w.lastReviewed + REVIEW_INTERVALS[idx] * DAY_MS;
        return w;
    }

    function updateJournalItem(updated) {
        const list = getWrongAnswers();
        const i = list.findIndex(w => w.topic === updated.topic && w.timestamp === updated.timestamp);
        if (i >= 0) {
            list[i] = updated;
            saveWrongAnswers(list);
        }
        updateReviewBadge();
    }

    function updateReviewBadge() {
        try {
            const anchor = document.querySelector('.tutor-chat-input');
            if (!anchor) return;
            let badge = document.getElementById('neo-review-badge');
            if (!badge) {
                badge = document.createElement('div');
                badge.id = 'neo-review-badge';
                anchor.parentNode.insertBefore(badge, anchor);
            }
            const due = getDueItems().length;
            if (due > 0) {
                badge.style.display = 'block';
                badge.innerHTML =
                    `<div style="margin-bottom:8px; padding:8px 12px; border-radius:10px; ` +
                    `background:rgba(255,215,0,.08); border:1px solid rgba(255,215,0,.35); ` +
                    `font-size:.78rem; color:#ffd700; cursor:pointer;" ` +
                    `onclick="if(window.TutorEngine&&window.TutorEngine.handleChatInput){` +
                    `var r=window.TutorEngine.handleChatInput('due');` +
                    `if(window.typeTerminalMessage)window.typeTerminalMessage(r);}" ` +
                    `title="Click to see what is due">` +
                    `📅 <strong>Today: ${due} to review</strong> ` +
                    `<span style="opacity:.65;">— tap to see</span></div>`;
            } else {
                badge.style.display = 'none';
                badge.innerHTML = '';
            }
        } catch (e) { /* DOM not ready — silent */ }
    }

    // --- F5: prerequisite learning-path tree (CSS only, no libraries) ---
    function injectTreeCSS() {
        if (document.getElementById('neo-tree-css')) return;
        const style = document.createElement('style');
        style.id = 'neo-tree-css';
        style.textContent =
            '.neo-logic-tree{margin-top:12px;padding:14px;border:1px solid rgba(0,210,255,.25);' +
            'border-radius:14px;background:rgba(0,0,0,.25);text-align:center;}' +
            '.neo-tree-title{font-weight:bold;color:var(--accent-cyan,#00d2ff);margin-bottom:10px;font-size:.9rem;}' +
            '.neo-tree-level{margin:2px 0;}' +
            '.neo-tree-level-label{font-size:.62rem;letter-spacing:1px;opacity:.55;margin-bottom:6px;}' +
            '.neo-tree-nodes{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;}' +
            '.neo-tree-node{display:inline-block;padding:6px 12px;border:1px solid rgba(0,210,255,.35);' +
            'border-radius:10px;font-size:.75rem;background:rgba(0,0,0,.35);color:#fff;}' +
            '.neo-tree-node.prereq{border-color:rgba(56,239,125,.5);}' +
            '.neo-tree-node.current{border:2px solid var(--accent-magenta,#f0f);font-weight:bold;' +
            'font-size:.85rem;padding:9px 16px;}' +
            '.neo-tree-node.child{border-color:rgba(255,215,0,.5);}' +
            '.neo-tree-arrow{opacity:.4;margin:4px 0;font-size:.8rem;}' +
            '.neo-tree-empty{font-size:.75rem;opacity:.7;margin-top:8px;}';
        document.head.appendChild(style);
    }

    function renderLogicMap(topic) {
        injectTreeCSS();
        const key = (topic || '').toLowerCase().trim();
        const display = topic || 'general';
        const parents = PREREQUISITE_MAP[key] || [];
        const grandparents = [];
        parents.forEach(p => {
            (PREREQUISITE_MAP[p.toLowerCase()] || []).forEach(gp => {
                if (gp.toLowerCase() !== key && !parents.includes(gp) && !grandparents.includes(gp)) {
                    grandparents.push(gp);
                }
            });
        });
        const children = Object.keys(PREREQUISITE_MAP).filter(k =>
            (PREREQUISITE_MAP[k] || []).some(p => p.toLowerCase() === key));
        let html = `<div class="neo-logic-tree">` +
            `<div class="neo-tree-title">🗺️ Learning Path: ${escHtml(display)}</div>`;
        if (grandparents.length > 0) {
            html += `<div class="neo-tree-level"><div class="neo-tree-level-label">START HERE — FOUNDATION</div>` +
                `<div class="neo-tree-nodes">` +
                grandparents.map(g => `<span class="neo-tree-node">${escHtml(g)}</span>`).join('') +
                `</div></div><div class="neo-tree-arrow">⬇</div>`;
        }
        if (parents.length > 0) {
            html += `<div class="neo-tree-level"><div class="neo-tree-level-label">PREREQUISITES</div>` +
                `<div class="neo-tree-nodes">` +
                parents.map(p => `<span class="neo-tree-node prereq">${escHtml(p)}</span>`).join('') +
                `</div></div><div class="neo-tree-arrow">⬇</div>`;
        }
        html += `<div class="neo-tree-level"><div class="neo-tree-nodes">` +
            `<span class="neo-tree-node current">★ ${escHtml(display)}</span></div></div>`;
        if (children.length > 0) {
            html += `<div class="neo-tree-arrow">⬇</div>` +
                `<div class="neo-tree-level"><div class="neo-tree-level-label">UNLOCKS NEXT</div>` +
                `<div class="neo-tree-nodes">` +
                children.slice(0, 6).map(c => `<span class="neo-tree-node child">${escHtml(c)}</span>`).join('') +
                `</div></div>`;
        }
        if (parents.length === 0 && grandparents.length === 0 && children.length === 0) {
            html += `<div class="neo-tree-empty">No prerequisite links recorded for this topic yet — ` +
                `it is a foundation topic. 🌱</div>`;
        }
        html += `</div>`;
        return html;
    }

    const MAP_TRIGGERS = ["map ", "path ", "learning path", "prerequisites of ", "prereqs of "];

    function handleMapFlow(lowerQuery) {
        for (const t of MAP_TRIGGERS) {
            if (lowerQuery.startsWith(t)) {
                const topic = lowerQuery.slice(t.length).trim() ||
                    KnowledgeMap.lastQueryTopic || 'general';
                if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, 'logic-map');
                return renderLogicMap(topic);
            }
        }
        if (lowerQuery === "map" || lowerQuery === "path" ||
            lowerQuery === "prerequisites" || lowerQuery === "prereqs") {
            const topic = KnowledgeMap.lastQueryTopic || 'general';
            if (KnowledgeMap.addToBuffer) KnowledgeMap.addToBuffer(lowerQuery, 'logic-map');
            return renderLogicMap(topic);
        }
        return null;
    }

    // --- F7: Voice Link — TTS (speech synthesis). STT lives in app.js. ---
    function isTTSEnabled() {
        try { return localStorage.getItem(TTS_KEY) === '1'; }
        catch (e) { return false; }
    }

    function setTTSEnabled(on) {
        try { localStorage.setItem(TTS_KEY, on ? '1' : '0'); } catch (e) { /* silent */ }
        syncTTSButton();
    }

    function stripForSpeech(html) {
        const d = document.createElement('div');
        d.innerHTML = html;
        let t = d.innerText || '';
        t = t.replace(/[*_#`>|~]/g, ' ');
        try {
            t = t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, ' ');
        } catch (e) { /* older regex engine — keep emoji */ }
        return t.replace(/\s+/g, ' ').trim().slice(0, 500);
    }

    function speakText(text) {
        if (!('speechSynthesis' in window)) return false;
        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'en-US';
            u.rate = 1.0;
            window.speechSynthesis.speak(u);
            return true;
        } catch (e) { return false; }
    }

    function toggleTutorVoice() {
        const on = !isTTSEnabled();
        setTTSEnabled(on);
        return on
            ? "🔊 Voice responses ON — I will read my answers aloud."
            : "🔇 Voice responses OFF.";
    }

    function syncTTSButton() {
        try {
            const btn = document.getElementById('tts-btn');
            if (!btn) return;
            const icon = btn.querySelector('i');
            const on = isTTSEnabled();
            if (icon) icon.className = on ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            btn.style.color = on ? 'var(--accent-green)' : 'var(--accent-magenta)';
        } catch (e) { /* silent */ }
    }

    // Refresh badge + TTS button once the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { updateReviewBadge(); syncTTSButton(); });
    } else {
        updateReviewBadge(); syncTTSButton();
    }

    // ========================================
    // EXPOSE PUBLIC API
    // ========================================
    window.getSocraticAdvice = getSocraticAdvice;
    window.typeTerminalMessage = typeTerminalMessage;
    window.updateStabilityUI = updateStabilityUI;
    window.handleChatInput = handleChatInput;
    window.recordQuizResult = recordQuizResult;
    window.getWrongAnswerHint = getWrongAnswerHint;
    window.getNextRecommendation = getNextRecommendation;
    window.getTutorStats = getStats;
    window.getWeakTopics = getWeakTopics;
    window.triggerCelebration = triggerCelebration;
    window.buildNeuralMap = () => KnowledgeMap.build();
    window.summarizeContent = (key) => KnowledgeMap.summarize(key);
    window.getConceptMatrix = (topic) => KnowledgeMap.getConceptMatrix(topic);

    // Neo 6.0: Wrong Answer Journal + Friday Bridge
    window.getWrongAnswers = getWrongAnswers;
    window.getUnresolvedCount = getUnresolvedCount;
    window.markWrongResolved = markWrongResolved;
    window.pickReviewItem = pickReviewItem;

    // Neo 5.4: Pattern Analysis & Logic Maps
    window.analyzePattern = (userInput) => {
        const stats = getStats();
        const weak = getWeakTopics();

        let analysis = "🎨 **Neural Pattern Analysis:**\n";
        if (weak.length > 0) {
            analysis += `You seem to have a recurring challenge with **${weak[0].topic}**. `;
            const needed = PREREQUISITE_MAP[weak[0].topic] || [];
            if (needed.length > 0) {
                analysis += `This often stems from a slight gap in **${needed[0]}**. Let's bridge that.`;
            }
        } else {
            analysis += "Your logical consistency is remarkably high across all modules. Ready for Elite challenges.";
        }
        return analysis;
    };

    // Neo 6.0 Phase 2 (F5): multi-level prerequisite learning-path tree (replaces
    // the old single-level horizontal map). Same signature — existing callers keep working.
    window.renderLogicMap = renderLogicMap;

    // Neo 6.0 Phase 2 (F7): voice toggle
    window.toggleTutorVoice = toggleTutorVoice;
    window.isTTSEnabled = isTTSEnabled;
    window.speakText = speakText;
    window.getDueItems = getDueItems;
    window.updateReviewBadge = updateReviewBadge;

    return {
        getSocraticAdvice,
        typeTerminalMessage,
        updateStabilityUI,
        handleChatInput,
        recordQuizResult,
        getWrongAnswerHint,
        getNextRecommendation,
        getStats,
        getWeakTopics,
        triggerCelebration,
        analyzePattern: window.analyzePattern,
        buildNeuralMap: () => KnowledgeMap.build(),
        summarizeContent: (key) => KnowledgeMap.summarize(key),
        getConceptMatrix: (topic) => KnowledgeMap.getConceptMatrix(topic),
        fuzzyMatch: (s1, s2) => KnowledgeMap.getLevenshtein(s1, s2),
        // Neo 6.0
        getWrongAnswers,
        getUnresolvedCount,
        markWrongResolved,
        pickReviewItem,
        // Neo 6.0 Phase 2
        getDueItems,
        updateReviewBadge,
        renderLogicMap,
        toggleTutorVoice,
        isTTSEnabled,
        speakText
    };
})();
