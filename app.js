window.onerror = function (msg, url, line, col, error) {
    alert("GLOBAL ERROR: " + msg + "\nLine: " + line);
};

document.addEventListener('DOMContentLoaded', () => {
    const PROGRESS_KEY = 'genius_math_progress';
    const QUIZ_HISTORY_KEY = 'genius_math_quiz_history';

    function getProgress() {
        const saved = localStorage.getItem(PROGRESS_KEY);
        return saved ? JSON.parse(saved) : {};
    }

    function saveProgress(progress) {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }

    function getQuizHistory() {
        const saved = localStorage.getItem(QUIZ_HISTORY_KEY);
        return saved ? JSON.parse(saved) : [];
    }

    function saveQuizAttempt(attempt) {
        const history = getQuizHistory();
        history.unshift(attempt); // Add to beginning
        localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history.slice(0, 100))); // Keep last 100
        if (window.updateStabilityUI) window.updateStabilityUI();
    }

    // --- Neo 2.0 Brain: Advanced Math Advisor ---
    const TUTOR_BRAIN = {
        // Essential Unit-level Insights
        "ch1-1": "Real Numbers: Irrational numbers like $\\pi$ never repeat or terminate. Think of them as infinite unique data streams.",
        "ch1-7": "Absolute Value: $|x-a| < d$ means the 'distance' between x and a is less than d. It's a range, not just a number!",
        "ch4-1": "Matrix Addition: Only matrices of the SAME dimensions can be added. It's like adding arrays element-by-element in code.",
        "ch4-2": "Matrix Multiplication: $A \cdot B$ is NOT the same as $B \cdot A$. Order matters deeply in linear transformations!",
        "ch4-3": "Determinants: If $det(A) = 0$, you've lost information. The transformation is destructive/singular.",
        "ch6-3": "Synthetic Division: This is a specialized optimization of Long Division. It works ONLY for divisors like $(x - c)$.",
        "ch8-3": "Logarithms: A logarithm is just an exponent. $\\log_10(100) = 2$ because $10^2 = 100$. Focus on the POWER.",
        "ch13-1": "Radians: One radian is about $57.3^{\circ}$. We use them in Calculus because they make the derivative of $\sin(x)$ stay simple.",

        // Chapter fallbacks
        "ch1": "Foundations: Mastery of axioms allows you to manipulate any expression without fear. Focus on the 'Why' behind the distributive rule.",
        "ch4": "Matrices: You are manipulating whole spatial dimensions here. Visualize matrices as vectors moving around.",
        "ch6": "Polynomials: Every root $(x-r)$ is a factor. The Fundamental Theorem guarantees N roots for degree N. No exceptions!",
        "ch14": "Trig Identities: These aren't just formulas; they are 'Math Refactoring'. Use $\sin^2\theta + \cos^2\theta = 1$ to simplify your code.",
        "ch_amc": "Competition: AMC prep is about finding the 'Symmetry' or 'Invariance' in a problem. Look for what DOESN'T change.",
        "ch_limits": "Calculus: Every great derivative starts with a humble limit. Visualize the gap closing until it vanishes.",
        "calc-u1": "Limits: Mastering the $\epsilon-\delta$ definition is the difference between a student and a mathematician. Stay rigorous.",
        "calc-u7": "Diff Eqs: When analytic solutions fail, trust Euler's method. It's the numerical ghost in the machine.",
        "calc-u10": "Series: Test for convergence first! A divergent series is like a black hole; don't get trapped in its infinite sum.",
        "calc-marathon": "Infinity Marathon: You are now synthesizing all of human calculus knowledge. Maintain structural integrity."
    };

    // --- Neo 3.0: Terminal Typing Effect ---
    window.typeTerminalMessage = (html, delay = 20) => {
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
            }
        }
        type();
    };

    // --- Neo 3.0: Stability Analytics ---
    window.updateStabilityUI = () => {
        const history = getQuizHistory();
        const canvas = document.getElementById('stability-graph');
        const percentLabel = document.getElementById('stability-percent');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const last5 = history.slice(0, 5).reverse();
        const score = last5.length > 0 ? (last5.filter(h => h.correct).length / last5.length) * 100 : 98;

        if (percentLabel) percentLabel.innerText = `${Math.round(score)}%`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = score > 70 ? '#00d2ff' : '#f5576c';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const step = canvas.width / 5;
        last5.forEach((h, idx) => {
            const x = idx * step + 10;
            const y = h.correct ? 10 : 40;
            if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);

            // Draw point
            ctx.fillStyle = h.correct ? '#38ef7d' : '#f5576c';
            ctx.fillRect(x - 2, y - 2, 4, 4);
        });
        if (last5.length === 0) {
            ctx.moveTo(0, 25); ctx.lineTo(canvas.width, 25);
        }
        ctx.stroke();
    };

    window.askTutorTip = () => {
        const bubble = document.getElementById('tutor-message');
        if (!bubble) return;

        bubble.style.borderColor = "var(--accent-blue)";
        bubble.innerHTML = `<span class="status-pulse"></span> <span style="font-size:0.7rem; opacity:0.6; font-family:monospace;">ANALYZING MATRIX...</span>`;

        setTimeout(() => {
            const lessonKey = window.currentLessonKey || "";
            const contentText = document.querySelector('.content-area')?.innerText || "";
            let rawMessage = "";

            if (TUTOR_BRAIN[lessonKey]) {
                rawMessage = TUTOR_BRAIN[lessonKey];
            } else {
                const chapterKey = lessonKey.split('-')[0];
                if (TUTOR_BRAIN[chapterKey]) rawMessage = TUTOR_BRAIN[chapterKey];
                else if (contentText.toLowerCase().includes("determinant")) rawMessage = "Determinant detected. If $det(A)=0$, the inverse is undefined. This is a critical failure point in linear systems.";
                else rawMessage = "Scanning standard structures... Maintain focus on variable isolation. Stability is within normal parameters.";
            }

            bubble.style.borderColor = "var(--accent-magenta)";
            window.typeTerminalMessage(rawMessage);
        }, 800);
    };

    // --- Neo 3.0: Proactive Neo-Sense ---
    let lessonStartTime = Date.now();
    let lastProactiveTrigger = 0;

    setInterval(() => {
        if (!document.body.classList.contains('tutor-open')) return;
        const now = Date.now();
        const timeSpent = (now - lessonStartTime) / 1000;

        const contentText = document.querySelector('.content-area')?.innerText || "";
        const avatar = document.querySelector('.tutor-avatar');

        if (contentText.toLowerCase().includes("singular") || contentText.toLowerCase().includes("extraneous") || contentText.toLowerCase().includes("complex")) {
            if (avatar && !avatar.classList.contains('proactive-alert')) {
                avatar.classList.add('proactive-alert');
                if (now - lastProactiveTrigger > 60000) {
                    window.typeTerminalMessage("COMPLEXITY SPIKE: I've detected non-trivial logic. Focus on the constraints of this domain.");
                    lastProactiveTrigger = now;
                }
            }
        } else if (avatar) {
            avatar.classList.remove('proactive-alert');
        }

        if (timeSpent > 180 && now - lastProactiveTrigger > 120000) {
            window.typeTerminalMessage("STAGNATION ALERT: You've been on this module for 3 minutes. Need a breakdown or should we move to the next challenge?");
            lastProactiveTrigger = now;
        }
    }, 5000);

    function markLessonComplete(lessonId, subjectId) {
        const progress = getProgress();
        const now = new Date();
        const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (!progress[lessonId]) {
            progress[lessonId] = { completed: true, date: dateStr };
            saveProgress(progress);
            checkChapterCompletion(lessonId, subjectId);
        }
    }

    function checkChapterCompletion(lessonId, subjectId) {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return;

        const unit = subject.units.find(u => u.lectures.some(l => l.url.includes(lessonId)));
        if (!unit) return;

        const progress = getProgress();
        const allCompleted = unit.lectures.every(l => {
            const id = l.url.split(':').pop();
            return progress[id] && progress[id].completed;
        });

        if (allCompleted) {
            showBadgePopup(unit.title);
        }
    }

    function showBadgePopup(chapterTitle) {
        let badgeName = "";
        let icon = "";

        if (chapterTitle.includes("Ch 1") || chapterTitle.includes("ch1-rev")) {
            badgeName = "Master of Foundations";
            icon = "fa-cubes";
        } else if (chapterTitle.includes("Ch 2") || chapterTitle.includes("ch2-rev")) {
            badgeName = "Tool Master";
            icon = "fa-tools";
        } else if (chapterTitle.includes("Ch 3") || chapterTitle.includes("ch3-rev")) {
            badgeName = "Master of Systems";
            icon = "fa-network-wired";
        } else if (chapterTitle.includes("Ch 4") || chapterTitle.includes("ch4-rev")) {
            badgeName = "Master of Matrices";
            icon = "fa-th";
        } else if (chapterTitle.includes("Ch 14") || chapterTitle.includes("ch14-rev")) {
            badgeName = "Trig Identity Master";
            icon = "fa-vector-square";
        } else if (chapterTitle.toLowerCase().includes("amc")) {
            badgeName = "Competition Master";
            icon = "fa-trophy";
            style = "border-color: #ffd700; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);";
        } else if (chapterTitle.toLowerCase().includes("limit") || chapterTitle.toLowerCase().includes("calculus zero")) {
            badgeName = "Limit Breaker";
            icon = "fa-rocket";
            style = "border-color: var(--accent-cyan); box-shadow: 0 0 30px rgba(0, 210, 255, 0.3);";
        } else if (chapterTitle.includes("Unit 5") && chapterTitle.includes("Calculus")) {
            badgeName = "Calculus Architect";
            icon = "fa-drafting-table";
            style = "border-color: #ffd700; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);";
        } else if (chapterTitle.includes("Unit 10") && chapterTitle.includes("Calculus")) {
            badgeName = "Infinite Master";
            icon = "fa-infinity";
            style = "border-color: var(--accent-orange); box-shadow: 0 0 30px rgba(255, 140, 0, 0.3);";
        } else if (chapterTitle.includes("Infinity Marathon")) {
            badgeName = "Grand Architect of Infinity";
            icon = "fa-crown";
            style = "border-color: #e5e5e5; box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);";
        }

        if (!badgeName) return;
        const overlay = document.createElement('div');
        overlay.className = 'badge-overlay';
        overlay.innerHTML = `
            <div class="badge-card glass animate__animated animate__zoomIn">
                <div class="badge-icon"><i class="fas ${icon}"></i></div>
                <h2>Achievement Unlocked!</h2>
                <p>You have mastered <strong>${chapterTitle}</strong></p>
                <div class="badge-title">${badgeName}</div>
                <button onclick="this.parentElement.parentElement.remove()" class="glass next-btn">Keep Going!</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    function showDashboard() {
        const main = document.getElementById('dashboard-view');
        if (!main) return;
        main.innerHTML = `
            <div class="hero">
                <h1>Your Mathematical <span class="gradient-text">Journey</span> Starts Here.</h1>
                <p>Welcome to your customized TJHSST preparation hub. Let's master the foundations of advanced mathematics together.</p>
            </div>

            <div class="stats-row">
                <div class="stat-card glass">
                    <i class="fas fa-graduation-cap"></i>
                    <div class="stat-info"><h3>AP Calculus BC</h3><p>Next Milestone</p></div>
                </div>
                <div class="stat-card glass">
                    <i class="fas fa-award"></i>
                    <div class="stat-info"><h3>AMC 10/12</h3><p>Competitive Math</p></div>
                </div>
                <div class="stat-card glass">
                    <i class="fas fa-brain"></i>
                    <div class="stat-info"><h3>Linear Algebra</h3><p>AI Foundation</p></div>
                </div>
            </div>

            <div class="search-bar glass" style="margin-bottom: 30px; display:flex; align-items:center; gap:12px; padding:15px 25px; border-radius:15px;">
                <i class="fas fa-search" style="color:var(--accent-blue);"></i>
                <input type="text" id="dashboard-search" placeholder="Search topics (e.g. matrices, logs, limits)..." style="background:none; border:none; color:white; width:100%; outline:none; font-size:1rem;">
            </div>

            <h2 class="section-title">Enrolled Curriculum</h2>
            <div id="subject-cards-container" class="subject-grid"></div>

            <div class="top-header" style="display:flex; justify-content: space-between; align-items: center; margin-top: 60px; border-top: 1px solid var(--glass-border); padding-top: 30px;">
                <div class="hero" style="margin-bottom:0;">
                    <h2 style="font-size:1.2rem; opacity:0.6;">Admin <span class="gradient-text">Settings</span></h2>
                </div>
                <div style="display:flex; gap:15px;">
                    <button class="glass" onclick="window.downloadCurriculum()" style="padding: 10px 20px; border-radius: 12px; color: var(--accent-cyan); cursor: pointer; font-size: 0.85rem; font-weight: 600;">
                        <i class="fas fa-download"></i> Download Syllabus
                    </button>
                    <button class="glass reset-btn" id="master-reset-btn" style="padding: 10px 20px; border-radius: 12px; color: var(--accent-magenta); cursor: pointer; font-size: 0.85rem; font-weight: 600;">
                        <i class="fas fa-redo"></i> Reset Progress
                    </button>
                </div>
            </div>
        `;

        document.getElementById('master-reset-btn')?.addEventListener('click', () => {
            if (confirm("Reset all progress?")) {
                localStorage.removeItem(PROGRESS_KEY);
                showDashboard();
            }
        });

        window.downloadCurriculum = () => {
            let text = "SABRINA'S MATH PORTAL - FULL CURRICULUM\nGenerated on: " + new Date().toLocaleDateString() + "\n\n";
            MATH_DATA.subjects.forEach(sub => {
                text += `=== ${sub.title} (${sub.code}) ===\n`;
                text += `${sub.description}\n\n`;
                sub.units.forEach(unit => {
                    text += `  [${unit.title}]\n`;
                    if (unit.intuition) text += `  Intuition: ${unit.intuition}\n`;
                    if (unit.topics) text += `  Topics: ${unit.topics.join(', ')}\n`;
                    unit.lectures.forEach(l => {
                        text += `    - ${l.name} (${l.url.includes('lesson:') ? 'Internal Module' : 'External Link'})\n`;
                    });
                    text += "\n";
                });
                text += "\n============================================\n\n";
            });

            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Sabrina_Math_Curriculum.txt';
            document.body.appendChild(a); // Required for Firefox
            a.click();
            document.body.removeChild(a);
        };

        const container = document.getElementById('subject-cards-container');
        renderSubjectGrid(MATH_DATA.subjects, container);

        // Reset Handler
        document.getElementById('master-reset-btn').onclick = () => {
            if (confirm("Reset all progress?")) {
                localStorage.removeItem(PROGRESS_KEY);
                showDashboard();
            }
        };

        // Search Handler
        document.getElementById('dashboard-search').oninput = (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = MATH_DATA.subjects.filter(s => {
                return s.title.toLowerCase().includes(query) ||
                    s.code.toLowerCase().includes(query) ||
                    s.units.some(u => u.title.toLowerCase().includes(query));
            });
            renderSubjectGrid(filtered, container);
        };
    }

    function showSubjects() {
        const container = document.getElementById('subjects-grid-full');
        if (container) renderSubjectGrid(MATH_DATA.subjects, container);
    }

    function showStrategy() {
        const container = document.getElementById('strategy-container');
        if (!container) return;
        container.innerHTML = `
            <div class="strategy-wrap fadeIn">
                ${MATH_DATA.strategy.content}
                <div class="tj-edge glass" style="margin-top:30px; border-left-color:var(--accent-cyan);">
                    <h4><i class="fas fa-lightbulb"></i> Pro-Tip</h4>
                    <p>Consistency over intensity. Solve 3 high-quality problems daily rather than 50 once a week.</p>
                </div>
            </div>
        `;
    }

    function showResources() {
        const container = document.getElementById('resources-container');
        if (!container) return;
        container.innerHTML = MATH_DATA.external_resources.map(res => `
            <a href="${res.url}" target="_blank" class="resource-card glass fadeIn" style="text-decoration:none; color:inherit;">
                <div class="res-icon" style="font-size:1.5rem; margin-bottom:15px; color:var(--accent-cyan);"><i class="${res.icon}"></i></div>
                <p style="font-size:0.85rem; opacity:0.7;">${res.desc}</p>
                <div style="margin-top:15px; font-size:0.75rem; color:var(--accent-cyan);">Visit Site <i class="fas fa-external-link-alt"></i></div>
            </a>
        `).join('');

        // --- NEW: Interactive Tools Section ---
        container.innerHTML += `
            <div class="glass-card fadeIn" style="grid-column: 1 / -1; margin-top:30px; border-color:var(--accent-blue);">
                <h3 style="margin-bottom:20px; color:var(--accent-blue);"><i class="fas fa-calculator"></i> Interactive Graphics Lab</h3>
                <div id="desmos-resource-target" style="height:500px; border-radius:15px; overflow:hidden;">
                    <iframe src="https://www.desmos.com/calculator" width="100%" height="100%" style="border:none;"></iframe>
                </div>
            </div>
            <div class="glass-card fadeIn" style="margin-top:20px; border-color:var(--accent-orange);">
                <h3><i class="fas fa-search-plus"></i> WolframAlpha Insight</h3>
                <p style="font-size:0.9rem; margin-bottom:15px;">Deep computational intelligence for step-by-step solutions.</p>
                <a href="https://www.wolframalpha.com" target="_blank" class="glass" style="display:inline-block; padding:10px 20px; border-radius:10px; color:var(--accent-orange); text-decoration:none;">Launch Intelligence Area</a>
            </div>
        `;
    }

    function showReviewHub() {
        const container = document.getElementById('review-hub-container');
        if (!container) return;

        const history = getQuizHistory();
        if (history.length === 0) {
            container.innerHTML = `
                <div class="glass-card" style="text-align:center; padding:50px;">
                    <i class="fas fa-ghost" style="font-size:3rem; opacity:0.2; margin-bottom:20px;"></i>
                    <h3>No history yet.</h3>
                    <p>Complete some quizzes to build your review bank!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = history.map(item => `
            <div class="review-card glass-card fadeIn" style="border-left: 4px solid ${item.correct ? 'var(--accent-green)' : 'var(--accent-magenta)'};">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:0.8rem; opacity:0.6;">
                    <span>${item.chapter}</span>
                    <span>${item.date}</span>
                </div>
                <p style="font-weight:600; margin-bottom:10px;">${item.question}</p>
                <div style="font-size:0.9rem; padding:10px; background:rgba(255,255,255,0.03); border-radius:8px;">
                    <div style="color:${item.correct ? 'var(--accent-green)' : 'var(--accent-magenta)'}">
                        Your answer: ${item.userAnswer} ${item.correct ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}
                    </div>
                    ${!item.correct ? `<div style="color:var(--accent-cyan); margin-top:5px;">Correct answer: ${item.correctAnswer}</div>` : ''}
                </div>
                <div style="margin-top:15px; font-size:0.85rem; line-height:1.6; color:#cbd5e1; border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px;">
                    <strong>Intuition:</strong> ${item.explanation}
                </div>
            </div>
        `).join('');
    }

    function switchView(viewName) {
        // Update Sidebar UI
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.view === viewName);
        });

        // Toggle Sections
        document.querySelectorAll('.view').forEach(section => {
            section.classList.toggle('active', section.id === `${viewName}-view`);
        });

        // Trigger Renderers
        if (viewName === 'dashboard') showDashboard();
        if (viewName === 'subjects') showSubjects();
        if (viewName === 'strategy') showStrategy();
        if (viewName === 'resources') showResources();
        if (viewName === 'review') showReviewHub();
        if (viewName === 'knowledge') showKnowledgeTree();

        // Fix: Scroll the actual content container to top, not the window
        document.querySelector('.content-area')?.scrollTo(0, 0);
    }

    // Nav Item Click Handlers
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.getAttribute('target') === '_blank') return; // Allow external links
            e.preventDefault();
            const view = item.dataset.view;
            if (view) switchView(view);

            // Auto-close sidebar on mobile
            document.querySelector('.sidebar')?.classList.remove('open');
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }

    function renderSubjectGrid(subjects, container) {
        if (!container) return;
        container.innerHTML = subjects.map((sub, idx) => `
            <div class="subject-card glass" style="animation-delay: ${idx * 0.1}s" onclick="window.showSubjectDetail('${sub.id}')">
                <div class="card-icon" style="background: ${sub.color}20; color: ${sub.color}"><i class="${sub.icon}"></i></div>
                <div class="card-content">
                    <span class="code">${sub.code}</span>
                    <h3>${sub.title}</h3>
                    <p>${sub.description}</p>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: 10%; background: ${sub.color};"></div></div>
                <div class="card-footer"><span style="font-size:0.8rem; color:var(--text-secondary)">Explore Syllabus</span><i class="fas fa-arrow-right" style="color:${sub.color}"></i></div>
            </div>
        `).join('');
    }

    window.showDashboard = showDashboard;

    window.showSubjectDetail = (subjectId) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return;

        const main = document.getElementById('dashboard-view');
        main.innerHTML = `
            <div class="back-link" style="cursor:pointer; margin-bottom:30px; color:${subject.color}; display:flex; align-items:center; gap:8px;" onclick="window.showDashboard()">
                <i class="fas fa-arrow-left"></i> Back to Dashboard
            </div>
            <div class="hero">
                <span class="code" style="color:${subject.color}">${subject.code}</span>
                <h1 style="color:${subject.color}; font-size:3rem;">${subject.title}</h1>
                <p>${subject.description}</p>
            </div>
            <div class="syllabus-grid" style="display:grid; gap:25px; margin-top:40px;">
                ${subject.units.map((unit, uIdx) => `
                    <div class="unit-card glass" style="padding:30px; border-radius:20px;">
                        <h3 style="margin-bottom:15px; border-left:4px solid ${subject.color}; padding-left:15px;">${unit.title}</h3>
                        ${unit.intuition ? `<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:15px;">${unit.intuition}</p>` : ''}
                        <div class="lectures" style="display:grid; gap:10px;">
                            ${unit.lectures.map(l => {
            const id = l.url.includes('lesson:') ? l.url.split(':').pop() : null;
            const prog = id ? getProgress()[id] : null;
            return `
                                    <div class="lecture-link glass ${prog ? 'completed' : ''}" style="cursor:pointer; display:flex; justify-content:space-between; padding:15px 20px; border-radius:12px;" onclick="window.showLessonHandler('${l.url}', '${subject.id}')">
                                        <div style="display:flex; align-items:center; gap:12px;">
                                            <i class="fas fa-book-open" style="color:${prog ? 'var(--accent-green)' : subject.color}"></i>
                                            <span>${l.name}</span>
                                        </div>
                                        <i class="fas fa-chevron-right" style="opacity:0.3;"></i>
                                    </div>
                                `;
        }).join('')}
                        </div>

                        ${unit.examples ? `
                            <div class="examples-section" style="margin-top:25px;">
                                <h4 style="color:${subject.color}; margin-bottom:15px;"><i class="fas fa-chalkboard-teacher"></i> Worked Examples</h4>
                                ${unit.examples.map((ex, exIdx) => `
                                    <div class="example-card glass" style="padding:20px; border-radius:12px; margin-bottom:15px; border-left:3px solid ${subject.color};">
                                        <h5 style="margin-bottom:8px; color:white;">${ex.title}</h5>
                                        <p style="font-size:0.95rem; margin-bottom:12px; font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px;">${ex.problem}</p>
                                        <details style="cursor:pointer;">
                                            <summary style="font-size:0.85rem; color:${subject.color}; font-weight:600;">View Step-by-Step Solution</summary>
                                            <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                                                ${ex.steps.map(step => `<div style="font-size:0.9rem; margin-bottom:6px; color:#cbd5e1;"><i class="fas fa-arrow-right" style="font-size:0.7rem; opacity:0.5;"></i> ${step}</div>`).join('')}
                                                <div style="margin-top:12px; font-size:0.85rem; color:var(--accent-cyan); font-style:italic;">
                                                    <strong>Intuition:</strong> ${ex.intuition}
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        ${unit.quiz ? `
                            <div class="quiz-box glass" style="margin-top:15px; padding:20px; border-radius:12px;">
                                <h4>Concept Check</h4>
                                <p style="margin-bottom:15px;">${unit.quiz.question}</p>
                                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                                    ${unit.quiz.options.map(opt => `<button class="glass" onclick="window.checkQuizAnswer(${uIdx}, '${opt.replace(/'/g, "\\'")}', '${unit.quiz.answer.replace(/'/g, "\\'")}', '${unit.quiz.explanation.replace(/'/g, "\\'")}', '${unit.title.replace(/'/g, "\\'")}', '${unit.quiz.question.replace(/'/g, "\\'")}')">${opt}</button>`).join('')}
                                </div>
                                <div id="feedback-${uIdx}" style="margin-top:10px; display:none;"></div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    };

    window.showLessonHandler = (url, subjectId) => {
        if (url.startsWith('lesson:')) {
            const lessonKey = url.split(':').pop();
            showLesson(lessonKey, subjectId);
        } else {
            window.open(url, '_blank');
        }
    }

    async function loadChapterData(chapterId) {
        if (window.CHAPTER_DATA && window.CHAPTER_DATA[chapterId]) return;

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `./data/chapters/${chapterId}.js`;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load chapter: ${chapterId}`));
            document.head.appendChild(script);
        });
    }

    function findNextLesson(currentKey, subjectId) {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return null;

        let allLectures = [];
        subject.units.forEach(u => {
            u.lectures.forEach(l => {
                if (l.url.startsWith('lesson:')) {
                    allLectures.push({
                        key: l.url.split(':').pop(),
                        title: l.name
                    });
                }
            });
        });

        const currentIndex = allLectures.findIndex(l => l.key === currentKey);
        if (currentIndex !== -1 && currentIndex < allLectures.length - 1) {
            return allLectures[currentIndex + 1];
        }
        return null;
    }

    // Expose globally for Next buttons
    window.showLesson = showLesson;

    async function showLesson(lessonKey, subjectId) {
        window.currentLessonKey = lessonKey;
        if (typeof lessonStartTime !== 'undefined') lessonStartTime = Date.now();
        console.log("SHOW LESSON TRIGGERED:", lessonKey, subjectId); // Debug
        try {

            // ... (loading logic)
            const chapterId = lessonKey.split('-')[0];
            try {
                await loadChapterData(chapterId);
            } catch (err) {
                console.error(err);
                alert("Oops! Could not load this chapter. Error: " + err.message);
                return;
            }

            if (!window.CHAPTER_DATA) throw new Error("window.CHAPTER_DATA is undefined");

            const chapterData = window.CHAPTER_DATA[chapterId];
            if (!chapterData) {
                console.error("Available Chapters:", Object.keys(window.CHAPTER_DATA));
                throw new Error(`Chapter data for '${chapterId}' failed to load.`);
            }

            const lessonData = chapterData[lessonKey];
            if (!lessonData) {
                // Simplified error handling
                throw new Error(`Lesson content for '${lessonKey}' not found.`);
            }

            // Restore missing definition
            const nextLesson = findNextLesson(lessonKey, subjectId);
            const nextButtonHtml = nextLesson
                ? `<button class="glass next-btn" onclick="window.finishLesson('${lessonKey}', '${subjectId}'); window.showLesson('${nextLesson.key}', '${subjectId}')" style="padding: 10px 20px; font-weight: 600; color: var(--accent-cyan); display: flex; align-items: center; gap: 8px;">
                 Next <i class="fas fa-arrow-right"></i>
               </button>`
                : '';

            const appContainer = document.getElementById('dashboard-view');
            appContainer.innerHTML = `
            <div class="lesson-view fadeIn">
                <nav class="lesson-nav glass" style="display:flex; justify-content:space-between; align-items:center; padding: 15px 25px;">
                    <button class="glass back-btn" onclick="window.showSubjectDetail('${subjectId}')" style="padding: 10px 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-arrow-left"></i> Syllabus
                    </button>
                    <div class="lesson-title-meta">
                        <span class="lesson-badge">${lessonKey.toUpperCase()}</span>
                        <h2 style="font-size:1.1rem; margin:0;">${lessonData.title}</h2>
                    </div>
                    <div class="lesson-actions" style="display:flex; gap:10px;">
                        <button class="glass" onclick="window.toggleLessonTool()" style="padding:10px 15px; color:var(--accent-blue);"><i class="fas fa-calculator"></i></button>
                        ${nextButtonHtml}
                        <button class="glass complete-btn" onclick="window.finishLesson('${lessonKey}', '${subjectId}')" style="padding:10px 20px;"><i class="fas fa-check"></i> Done</button>
                    </div>
                </nav>
                <div id="lesson-tool-panel" class="glass fadeIn" style="display:none; height:400px; margin: 0 25px; border-radius:15px; overflow:hidden; border:1px solid var(--accent-blue);">
                    <iframe src="https://www.desmos.com/calculator" width="100%" height="100%" style="border:none;"></iframe>
                </div>
                <div class="lesson-body-wrapper">
                    <header class="lesson-header">
                        <p class="subtitle">${lessonData.subtitle}</p>
                    </header>
                    <article class="lesson-content">
                        ${lessonData.content}
                    </article>
                    <div class="lesson-footer" style="margin-top: 50px; text-align: right; padding-bottom: 60px;">
                        ${nextButtonHtml ?
                    `<button class="next-btn-large" onclick="window.finishLesson('${lessonKey}', '${subjectId}'); window.showLesson('${nextLesson.key}', '${subjectId}')" style="padding: 15px 35px; font-size: 1.1rem; font-weight: 800; color: #000 !important; background: #00d2ff !important; border: none; border-radius: 50px; cursor: pointer; box-shadow: 0 0 25px rgba(0,210,255,0.6); transition: all 0.2s; display: inline-flex; align-items: center; gap: 10px;">
                                <span>NEXT LESSON</span>
                                <span style="font-weight:400; opacity:0.9;">${nextLesson.title}</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>`
                    : '<div style="color:var(--text-secondary); font-style:italic;">End of Chapter</div>'
                }
                    </div>
                </div>
            </div>
        `;

            // Fix: Scroll the actual content container to top
            document.querySelector('.content-area')?.scrollTo(0, 0);

            // Re-trigger MathJax
            if (window.MathJax) {
                MathJax.typesetPromise();
            }

            // --- Interactive Engine Triggers ---
            if (lessonKey === 'ch3-4') setTimeout(renderLPViz, 500);
            if (lessonKey === 'ch4-2') setTimeout(renderMatrixViz, 500);
            if (lessonKey === 'ch4-3') setTimeout(renderMatrixViz, 500);

            // Interactive Engine: Matrix Collapse Viz (Ch 4.4)
            if (lessonKey.includes('ch4-4')) {
                setTimeout(renderMatrixCollapseViz, 500);
            }
            // Interactive Engine: Parabola Viz (Ch 5.6)
            if (lessonKey.includes('ch5-6')) {
                setTimeout(renderParabolaViz, 500);
            }

            // Interactive Engine: Synthetic Division Viz (Ch 6.3)
            if (lessonKey.includes('ch6-3')) {
                setTimeout(renderSyntheticDivisionViz, 500);
            }

            // Interactive Engine: Root Curvature Slider (Ch 7.7)
            if (lessonKey.includes('ch7-7')) {
                setTimeout(renderRootSliderViz, 500);
            }

            // Interactive Engine: Log Chart Viz (Ch 8.3)
            if (lessonKey.includes('ch8-3')) {
                setTimeout(renderLogChartViz, 500);
            }

        } catch (e) {
            console.error("FATAL LESSON ERROR:", e);
            alert("CRITICAL ERROR:\n" + e.message + "\n\nSee console for details.");
        }
    }
    window.finishLesson = (key, subId) => {
        markLessonComplete(key, subId);

        // --- NEW: Check if this was the last lesson in the unit ---
        const subject = MATH_DATA.subjects.find(s => s.id === subId);
        const unit = subject.units.find(u => u.lectures.some(l => l.url.includes(key)));

        if (unit && unit.quiz) {
            // Check if all other lessons in this unit are also done
            const progress = getProgress();
            const allLessonsDone = unit.lectures.every(l => {
                const id = l.url.includes('lesson:') ? l.url.split(':').pop() : null;
                return !id || (progress[id] && progress[id].completed);
            });

            if (allLessonsDone) {
                const unitIdx = subject.units.indexOf(unit);
                window.showUnitQuiz(subId, unitIdx);
                return; // Stop here, showing quiz instead of detail
            }
        }

        window.showSubjectDetail(subId);
    };

    // --- NEW: Chapter Graduation Quiz ---
    window.showUnitQuiz = (subjectId, unitIdx) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const appContainer = document.getElementById('dashboard-view');

        appContainer.innerHTML = `
            <div class="quiz-overlay fadeIn">
                <div class="quiz-standalone-card glass animate__animated animate__zoomIn">
                    <span class="chapter-badge">${unit.title}</span>
                    <h2 class="gradient-text">Graduation Challenge</h2>
                    <p style="opacity:0.7; margin-bottom:30px;">Complete this concept check to finalize your mastery of this chapter.</p>
                    
                    <div class="question-box">
                        <p>${unit.quiz.question}</p>
                    </div>
                    
                    <div class="options-grid">
                        ${unit.quiz.options.map(opt => `
                            <button class="glass quiz-btn" onclick="window.handleFinalQuizAnswer('${subjectId}', ${unitIdx}, '${opt.replace(/'/g, "\\'")}')">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                    
                    <div id="final-quiz-feedback" style="margin-top:30px; font-weight:600;"></div>
                </div>
            </div>
        `;

        if (window.MathJax) MathJax.typesetPromise();
    };

    window.handleFinalQuizAnswer = (subjectId, unitIdx, selected) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const feedback = document.getElementById('final-quiz-feedback');

        const isCorrect = selected === unit.quiz.answer;

        saveQuizAttempt({
            chapter: unit.title,
            question: unit.quiz.question,
            userAnswer: selected,
            correctAnswer: unit.quiz.answer,
            correct: isCorrect,
            explanation: unit.quiz.explanation,
            date: new Date().toLocaleString()
        });

        if (isCorrect) {
            feedback.style.color = "var(--accent-green)";
            feedback.innerHTML = `<i class="fas fa-check-circle"></i> Matrix Verified. Mastered!`;
            setTimeout(() => {
                window.showSubjectDetail(subjectId);
            }, 1500);
        } else {
            feedback.style.color = "var(--accent-magenta)";
            feedback.innerHTML = `<i class="fas fa-times-circle"></i> Discrepancy detected. Try again.`;
            // Brief highlight on correct answer could go here
        }
    };

    function renderLPViz() {
        const container = document.getElementById('lp-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.5); padding:15px; border-radius:15px; border:1px solid var(--accent-cyan); display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
                <canvas id="lp-canvas" width="300" height="300" style="background:#050505; border-radius:10px; cursor:crosshair; box-shadow: 0 0 10px rgba(0,210,255,0.1);"></canvas>
                <div style="flex:1; min-width:200px;">
                    <h4 style="color:var(--accent-cyan); margin-bottom:10px;"><i class="fas fa-chart-area"></i> Feasible Region</h4>
                    <p style="font-size:0.85rem; color:#aaa; margin-bottom:15px;">The Optimal Solution (Max Profit) is always at a Vertex.</p>
                    <div id="lp-status" style="font-family:monospace; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; border-left:3px solid var(--accent-cyan); min-height:60px;">
                        Hover over vertices...
                    </div>
                </div>
            </div>
        `;

        const canvas = document.getElementById('lp-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Config
        const vertices = [
            { x: 50, y: 250, label: "A (0,0)", val: 0 },
            { x: 50, y: 50, label: "B (0,8)", val: 80 },
            { x: 200, y: 100, label: "C (6,6)", val: 180 },
            { x: 250, y: 250, label: "D (8,0)", val: 160 }
        ];

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Grid & Axes
            ctx.strokeStyle = '#222'; ctx.lineWidth = 1;
            for (let i = 0; i < 300; i += 25) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 300); ctx.stroke(); ctx.moveTo(0, i); ctx.lineTo(300, i); ctx.stroke(); }
            ctx.strokeStyle = '#555'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(50, 0); ctx.lineTo(50, 300); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, 250); ctx.lineTo(300, 250); ctx.stroke();

            // Feasible Region
            ctx.fillStyle = 'rgba(0, 210, 255, 0.15)';
            ctx.strokeStyle = 'var(--accent-cyan)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(vertices[0].x, vertices[0].y);
            vertices.forEach(v => ctx.lineTo(v.x, v.y));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Vertices
            vertices.forEach(v => {
                ctx.fillStyle = '#fff';
                ctx.beginPath(); ctx.arc(v.x, v.y, 5, 0, Math.PI * 2); ctx.fill();
                if (v.val === 180) { // Optimal Pulse
                    ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; ctx.lineWidth = 4; ctx.stroke();
                }
            });
        }

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            let hovered = null;
            let minDist = 20;

            vertices.forEach(v => {
                const dist = Math.sqrt((mouseX - v.x) ** 2 + (mouseY - v.y) ** 2);
                if (dist < minDist) { minDist = dist; hovered = v; }
            });

            const statusEl = document.getElementById('lp-status');
            if (hovered) {
                canvas.style.cursor = 'pointer';
                const color = hovered.val === 180 ? 'var(--accent-green)' : '#fff';
                const extra = hovered.val === 180 ? '<br><strong>★ MAX OPTIMAL ★</strong>' : '';
                statusEl.innerHTML = `Vertex: <span style="color:${color}">${hovered.label}</span><br>Profit Z = $${hovered.val}${extra}`;
            } else {
                canvas.style.cursor = 'crosshair';
                statusEl.innerHTML = "Hover over vertices to inspecting Profit function P = 20x + 10y";
            }
        });

        draw();
    }

    function renderMatrixViz() {
        const container = document.getElementById('matrix-graphics-container') || document.getElementById('matrix-canvas-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.6); padding:20px; border-radius:15px; border:1px solid var(--accent-blue); text-align:center;">
                <canvas id="matrix-canvas" width="300" height="200" style="background:#050505; border-radius:10px; box-shadow: 0 0 15px rgba(0,210,255,0.1);"></canvas>
                <p style="font-size:0.75rem; color:var(--accent-blue); margin-top:10px; font-family:monospace;">
                    <i class="fas fa-cube"></i> Real-time 3D Projection Matrix<br>
                    <span style="opacity:0.7;">$R_y(\\theta) \\cdot P_{vec}$</span>
                </p>
            </div>`;

        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let angle = 0;

        // 3D Cube Vertices (x, y, z) centered at 0
        const cube = [
            { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
            { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
        ];

        // Edges connecting vertices
        const edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // Front Face (technically Back)
            [4, 5], [5, 6], [6, 7], [7, 4], // Back Face (technically Front)
            [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting Lines
        ];

        function project(p, theta) {
            // 1. Rotation Matrix (Rotate around Y axis)
            // | cos 0 sin |
            // |  0  1  0  |
            // |-sin 0 cos |
            const cost = Math.cos(theta);
            const sint = Math.sin(theta);

            let x = p.x * cost + p.z * sint;
            let y = p.y;
            let z = p.x * -sint + p.z * cost;

            // 2. Perspective Projection
            // ScreenX = x / (z + cameraDist)
            const fov = 150;
            const dist = 3;
            const scale = fov / (dist - z);

            return {
                x: x * scale + canvas.width / 2,
                y: y * scale + canvas.height / 2
            };
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate Projected Points
            const points = cube.map(v => project(v, angle));

            // Draw Edges
            ctx.strokeStyle = '#00d2ff';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            edges.forEach(e => {
                const p1 = points[e[0]];
                const p2 = points[e[1]];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });

            // Draw Vertices (Glowing Dots)
            points.forEach(p => {
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            angle += 0.02; // Smooth rotation
            requestAnimationFrame(draw);
        }
        draw();
    }

    function renderMatrixCollapseViz() {
        const container = document.getElementById('matrix-collapse-container');
        if (!container) return;
        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.4); padding:20px; border-radius:15px; border:1px solid var(--accent-magenta);">
                <canvas id="collapse-canvas" width="300" height="250" style="background:#000; border-radius:10px;"></canvas>
                <div style="margin-top:15px;">
                    <button class="glass" onclick="window.applyCollapse(true)">Identity (det=1)</button>
                    <button class="glass" onclick="window.applyCollapse(false)" style="color:var(--accent-orange)">Collapse (det=0)</button>
                </div>
                <div id="collapse-info" style="margin-top:10px; font-size:0.8rem; color:var(--accent-magenta);">[ Normal Space ]</div>
            </div>
        `;
        const canvas = document.getElementById('collapse-canvas');
        const ctx = canvas.getContext('2d');
        let m = [[1, 0], [0, 1]], target = [[1, 0], [0, 1]];
        window.applyCollapse = (isId) => {
            target = isId ? [[1, 0], [0, 1]] : [[1, 1], [1, 1]];
            document.getElementById('collapse-info').innerText = isId ? '[ Normal Space (det=1) ]' : '[ Space Collapsed (det=0) ]';
        };
        function draw() {
            ctx.clearRect(0, 0, 300, 250);
            for (let i = 0; i < 4; i++) m[0][i % 2] += (target[0][i % 2] - m[0][i % 2]) * 0.05; // Simplified lerp
            ctx.strokeStyle = '#9d50bb';
            ctx.beginPath();
            ctx.moveTo(150 + (-50 * m[0][0] + -50 * m[0][1]), 125 - (-50 * m[1][0] + -50 * m[1][1]));
            ctx.lineTo(150 + (50 * m[0][0] + -50 * m[0][1]), 125 - (50 * m[1][0] + -50 * m[1][1]));
            ctx.lineTo(150 + (50 * m[0][0] + 50 * m[0][1]), 125 - (50 * m[1][0] + 50 * m[1][1]));
            ctx.lineTo(150 + (-50 * m[0][0] + 50 * m[0][1]), 125 - (-50 * m[1][0] + 50 * m[1][1]));
            ctx.closePath(); ctx.stroke();
            requestAnimationFrame(draw);
        }
        draw();
    }

    window.checkQuizAnswer = (uIdx, sel, corr, expl, chapterTitle, questionText) => {
        const isCorrect = sel === corr;
        const f = document.getElementById(`feedback-${uIdx}`);
        f.style.display = 'block';
        f.innerHTML = isCorrect ? `<p style="color:var(--accent-green)">Correct! ${expl}</p>` : `<p style="color:var(--accent-orange)">Incorrect. ${expl}</p>`;

        saveQuizAttempt({
            chapter: chapterTitle || "Unknown Chapter",
            question: questionText || "Multiple Choice Question",
            userAnswer: sel,
            correctAnswer: corr,
            correct: isCorrect,
            explanation: expl,
            date: new Date().toLocaleString()
        });
    };

    window.startDecryptionMission = () => {
        const c = document.getElementById('decrypt-mission');
        c.innerHTML = `<div class="glass" style="padding:20px; border:1px solid var(--accent-blue);">
            <h4>Decrypt: [14, 28, 5, 10, 21, 42]</h4>
            <p>Matrix A: [[1,1],[0,2]]</p>
            <input type="text" id="decode-in" placeholder="Code?" class="glass" style="padding:10px; color:white;">
            <button class="glass" onclick="window.verifyDecryption()">Decode</button>
            <div id="dec-res"></div>
        </div>`;
    };

    window.verifyDecryption = () => {
        const v = document.getElementById('decode-in').value.toLowerCase();
        document.getElementById('dec-res').innerHTML = (v.includes('math') || v.includes('genius')) ? '<p style="color:var(--accent-green)">SUCCESS!</p>' : '<p style="color:var(--accent-orange)">FAIL.</p>';
    };

    function renderParabolaViz() {
        const container = document.getElementById('parabola-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.4); padding:20px; border-radius:15px; border:1px solid var(--accent-orange);">
                <div style="margin-bottom:15px; display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
                    <div class="input-group">
                        <label>a:</label>
                        <input type="number" id="p-a" value="1" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                    <div class="input-group">
                        <label>b:</label>
                        <input type="number" id="p-b" value="0" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                    <div class="input-group">
                        <label>c:</label>
                        <input type="number" id="p-c" value="0" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                </div>
                <canvas id="parabola-canvas" width="300" height="250" style="background:#000; border-radius:10px;"></canvas>
                <div id="parabola-info" style="margin-top:15px; font-family:monospace; font-size:0.8rem; color:var(--accent-orange);">
                    Discriminant D = 0 | Roots: 1 Real
                </div>
            </div>
        `;

        const canvas = document.getElementById('parabola-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const infoEl = document.getElementById('parabola-info');

        const inputs = ['p-a', 'p-b', 'p-c'];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', draw);
        });

        function draw() {
            const a = parseFloat(document.getElementById('p-a').value) || 0;
            const b = parseFloat(document.getElementById('p-b').value) || 0;
            const c = parseFloat(document.getElementById('p-c').value) || 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Axis
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();

            // Draw Parabola
            ctx.strokeStyle = 'var(--accent-orange)';
            ctx.lineWidth = 2;
            ctx.beginPath();

            const scale = 15;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let px = -centerX; px <= centerX; px++) {
                let x = px / scale;
                let y = a * x * x + b * x + c;
                let screenX = centerX + px;
                let screenY = centerY - (y * scale);

                if (px === -centerX) ctx.moveTo(screenX, screenY);
                else ctx.lineTo(screenX, screenY);
            }
            ctx.stroke();

            // Calc Discriminant
            const D = b * b - 4 * a * c;
            let resText = "";
            if (D > 0) resText = "<span style='color:var(--accent-green)'>2 Distinct Real Roots</span>";
            else if (D === 0) resText = "<span style='color:var(--accent-blue)'>1 Repeated Real Root (Tangent)</span>";
            else resText = "<span style='color:var(--accent-magenta)'>2 Complex Conjugate Roots (i)</span>";

            infoEl.innerHTML = `Discriminant D = ${D.toFixed(2)}<br>${resText}`;
        }

        draw();
    }

    function renderSyntheticDivisionViz() {
        const container = document.getElementById('synthetic-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-magenta);">
                <h4 style="color:var(--accent-magenta); margin-bottom:15px;"><i class="fas fa-microchip"></i> Horner's Method Simulator</h4>
                <div style="display:flex; gap:10px; margin-bottom:20px; align-items:center;">
                    <label>Root (c):</label>
                    <input type="number" id="sd-root" value="2" class="glass-input" style="width:50px;">
                    <label style="margin-left:15px;">Coefficients (e.g. 1, -4, 1, 6):</label>
                    <input type="text" id="sd-coeffs" value="1, -4, 1, 6" class="glass-input" style="flex:1;">
                    <button class="glass" onclick="window.runSyntheticDivision()" style="background:var(--accent-magenta); color:white; padding:5px 15px;">Execute</button>
                </div>
                <div id="sd-result-area" style="font-family:monospace; font-size:1.1rem; line-height:2;"></div>
            </div>
        `;

        window.runSyntheticDivision = () => {
            const root = parseFloat(document.getElementById('sd-root').value);
            const coeffs = document.getElementById('sd-coeffs').value.split(',').map(s => parseFloat(s.trim()));
            const area = document.getElementById('sd-result-area');

            if (!coeffs.length || isNaN(root)) return;

            let current = coeffs[0];
            let steps = [`<span style="color:var(--accent-blue)">Initial: ${current}</span>`];
            let results = [current];

            for (let i = 1; i < coeffs.length; i++) {
                let nextVal = current * root;
                current = coeffs[i] + nextVal;
                results.push(current);
                steps.push(`<span style="color:var(--accent-magenta)">(${current - coeffs[i]} + ${coeffs[i]})</span> &rarr; <strong>${current}</strong>`);
            }

            const isRemainderZero = results[results.length - 1] === 0;
            area.innerHTML = `
                <div style="margin-bottom:10px;">Process: ${steps.join(' | ')}</div>
                <div style="border-top:1px solid rgba(255,255,255,0.2); padding-top:10px;">
                    Final Coefficients: [${results.slice(0, -1).join(', ')}] <br>
                    Remainder: <span style="color:${isRemainderZero ? 'var(--accent-green)' : 'var(--accent-orange)'}">${results[results.length - 1]}</span>
                    ${isRemainderZero ? `<br><span style="color:var(--accent-green); font-size:0.8rem;">(x - ${root}) is a FACTOR!</span>` : ''}
                </div>
            `;
        };

        window.runSyntheticDivision();
    }

    function renderRootSliderViz() {
        const container = document.getElementById('root-slider-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-blue);">
                <h4 style="color:var(--accent-blue); margin-bottom:15px;"><i class="fas fa-chart-line"></i> Root Curvature Simulator</h4>
                <div style="margin-bottom:20px;">
                    <label>Index (n): <span id="n-val" style="color:var(--accent-magenta); font-weight:bold;">2</span></label>
                    <input type="range" id="root-n-slider" min="1" max="10" step="1" value="2" style="width:100%; margin-top:10px;">
                    <p style="font-size:0.8rem; opacity:0.7; margin-top:5px;">Observing $y = x^{1/n}$</p>
                </div>
                <div style="height:200px; position:relative; border-left:2px solid rgba(255,255,255,0.2); border-bottom:2px solid rgba(255,255,255,0.2); margin-top:10px;">
                    <canvas id="root-canvas" width="400" height="200" style="width:100%; height:100%;"></canvas>
                </div>
            </div>
        `;

        const canvas = document.getElementById('root-canvas');
        const ctx = canvas.getContext('2d');
        const nSlider = document.getElementById('root-n-slider');
        const nLabel = document.getElementById('n-val');

        function drawGraph(n) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#00d2ff';
            ctx.lineWidth = 3;
            ctx.beginPath();

            for (let px = 0; px < canvas.width; px++) {
                const x = px / 40; // Scale
                const y = Math.pow(x, 1 / n);
                const py = canvas.height - (y * 50); // Scale and flip

                if (px === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();

            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00d2ff';
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        nSlider.oninput = () => {
            const n = parseFloat(nSlider.value);
            nLabel.innerText = n;
            drawGraph(n);
        };

        drawGraph(2);
    }

    function renderLogChartViz() {
        const container = document.getElementById('log-chart-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-magenta);">
                <h4 style="color:var(--accent-magenta); margin-bottom:15px;"><i class="fas fa-chart-area"></i> Growth Speed: Log vs. Exponential</h4>
                <div style="height:250px; position:relative; border-left:2px solid rgba(255,255,255,0.2); border-bottom:2px solid rgba(255,255,255,0.2); margin-bottom:10px;">
                    <canvas id="log-canvas" width="400" height="250" style="width:100%; height:100%;"></canvas>
                </div>
                <div style="display:flex; justify-content:space-around; font-size:0.8rem;">
                    <span style="color:#ff007f;"><i class="fas fa-minus"></i> Exponential ($2^x$)</span>
                    <span style="color:#ffffff;"><i class="fas fa-minus"></i> Linear ($x$)</span>
                    <span style="color:#00d2ff;"><i class="fas fa-minus"></i> Log ($\log_2 x$)</span>
                </div>
            </div>
        `;

        const canvas = document.getElementById('log-canvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Linear (White)
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            ctx.lineTo(canvas.width, 0);
            ctx.stroke();

            // 2. Exponential (Magenta)
            ctx.strokeStyle = '#ff007f';
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const val = Math.pow(2, x / 40);
                const py = canvas.height - (val * 10);
                if (x === 0) ctx.moveTo(x, py);
                else ctx.lineTo(x, py);
            }
            ctx.stroke();

            // 3. Logarithm (Cyan)
            ctx.strokeStyle = '#00d2ff';
            ctx.beginPath();
            for (let x = 1; x < canvas.width; x++) {
                const val = Math.log2(x / 10);
                const py = canvas.height - (val * 40 + 100);
                if (x === 1) ctx.moveTo(x, py);
                else ctx.lineTo(x, py);
            }
            ctx.stroke();
        }

        draw();
    }

    // --- Knowledge Tree Implementation ---
    function showKnowledgeTree() {
        const svg = document.getElementById('knowledge-svg');
        if (!svg) return;
        svg.innerHTML = ''; // Clear

        const nodes = [
            { id: 'ch1', x: 100, y: 300, label: 'Foundations', color: '#00d2ff' },
            { id: 'ch2', x: 250, y: 150, label: 'Functions', color: '#9d50bb' },
            { id: 'ch3', x: 250, y: 450, label: 'Systems', color: '#ff9d00' },
            { id: 'ch4', x: 400, y: 450, label: 'Matrices', color: '#38ef7d' },
            { id: 'ch5', x: 400, y: 150, label: 'Quadratics', color: '#f5576c' },
            { id: 'ch6', x: 550, y: 150, label: 'Polynomials', color: '#f093fb' },
            { id: 'ch7', x: 700, y: 100, label: 'Radicals', color: '#00d2ff' },
            { id: 'ch8', x: 700, y: 200, label: 'Logs', color: '#9d50bb' },
            { id: 'ch13', x: 550, y: 350, label: 'Trig Basics', color: '#ff9d00' },
            { id: 'ch14', x: 700, y: 350, label: 'Trig Identities', color: '#38ef7d' },
            { id: 'bc', x: 900, y: 250, label: 'AP Calculus BC', color: '#fff', size: 40 }
        ];

        const edges = [
            ['ch1', 'ch2'], ['ch1', 'ch3'], ['ch2', 'ch5'], ['ch3', 'ch4'],
            ['ch5', 'ch6'], ['ch6', 'ch7'], ['ch6', 'ch8'], ['ch6', 'ch13'],
            ['ch13', 'ch14'], ['ch7', 'bc'], ['ch8', 'bc'], ['ch14', 'bc']
        ];

        // Draw Edges
        edges.forEach(edge => {
            const start = nodes.find(n => n.id === edge[0]);
            const end = nodes.find(n => n.id === edge[1]);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', start.x); line.setAttribute('y1', start.y);
            line.setAttribute('x2', end.x); line.setAttribute('y2', end.y);
            line.setAttribute('stroke', 'rgba(255,255,255,0.1)');
            line.setAttribute('stroke-width', '2');
            svg.appendChild(line);
        });

        // Draw Nodes
        nodes.forEach(node => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.style.cursor = 'pointer';
            g.onclick = () => {
                if (node.id === 'bc') switchView('subjects');
                else window.showSubjectDetail('algebra2');
            };

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', node.x); circle.setAttribute('cy', node.y);
            circle.setAttribute('r', node.size || 25);
            circle.setAttribute('fill', 'rgba(0,0,0,0.8)');
            circle.setAttribute('stroke', node.color);
            circle.setAttribute('stroke-width', '3');
            circle.style.filter = `drop-shadow(0 0 10px ${node.color})`;

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', node.x); text.setAttribute('y', node.y + (node.size ? 50 : 45));
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.style.fontSize = '12px';
            text.style.fontWeight = '600';
            text.textContent = node.label;

            g.appendChild(circle);
            g.appendChild(text);
            svg.appendChild(g);
        });
    }

    window.toggleLessonTool = () => {
        const panel = document.getElementById('lesson-tool-panel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    };

    // --- Neo 3.0: Desmos Scripting Integration ---
    window.plotSolution = (equation) => {
        const iframe = document.querySelector('#lesson-tool-panel iframe');
        if (iframe) {
            const panel = document.getElementById('lesson-tool-panel');
            panel.style.display = 'block';
            // Note: Directly injecting scripts into cross-origin iframe is not possible
            // But if we use Desmos API correctly or postMessage (if we owned it).
            // For now, we simulate the "Instruction" by opening the panel.
            window.typeTerminalMessage(`EXECUTING PLOT: ${equation}. Check the calculator panel.`);
        } else {
            window.open(`https://www.desmos.com/calculator?q=${encodeURIComponent(equation)}`, '_blank');
        }
    };

    window.updateStabilityUI(); // Initial draw
    showDashboard();
});
