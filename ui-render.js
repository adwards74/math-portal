/**
 * Genius Math Portal - UI Engine
 * Handles rendering of subjects, lessons, and interactive elements.
 */

window.UIEngine = (function () {

    function renderSubjectGrid(subjects, containerIdOrElem) {
        const container = typeof containerIdOrElem === 'string'
            ? document.getElementById(containerIdOrElem)
            : containerIdOrElem;

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

    function showSubjectDetail(subjectId) {
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
                ${subject.units.map((unit, uIdx) => {
            try {
                return renderUnitCard(unit, subject, uIdx);
            } catch (err) {
                console.error(`Error rendering unit ${uIdx}:`, err);
                return `<div class="unit-card glass">Error loading unit ${uIdx}</div>`;
            }
        }).join('')}
            </div>
        `;

        // Re-trigger MathJax for new content
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }

    function renderUnitCard(unit, subject, uIdx) {
        return `
            <div class="unit-card glass" style="padding:30px; border-radius:20px;">
                <h3 style="margin-bottom:15px; border-left:4px solid ${subject.color}; padding-left:15px;">${unit.title}</h3>
                ${unit.intuition ? `<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:15px;">${unit.intuition}</p>` : ''}
                <div class="lectures" style="display:grid; gap:10px;">
                    ${unit.lectures.map(l => renderLectureLink(l, subject)).join('')}
                </div>
                ${unit.examples ? renderExamplesSection(unit.examples, subject) : ''}
                ${unit.quiz ? renderQuizBox(unit.quiz, subject, uIdx, unit.title) : ''}
            </div>
        `;
    }

    function renderLectureLink(l, subject) {
        const id = l.url.includes('lesson:') ? l.url.split(':').pop() : null;
        const prog = (id && window.getProgress) ? window.getProgress()[id] : null;
        return `
            <div class="lecture-link glass ${prog ? 'completed' : ''}" style="cursor:pointer; display:flex; justify-content:space-between; padding:15px 20px; border-radius:12px;" onclick="window.showLessonHandler('${l.url}', '${subject.id}')">
                <div style="display:flex; align-items:center; gap:12px;">
                    <i class="fas fa-book-open" style="color:${prog ? 'var(--accent-green)' : subject.color}"></i>
                    <span>${l.name}</span>
                </div>
                <i class="fas fa-chevron-right" style="opacity:0.3;"></i>
            </div>
        `;
    }

    function renderExamplesSection(examples, subject) {
        return `
            <div class="examples-section" style="margin-top:25px;">
                <h4 style="color:${subject.color}; margin-bottom:15px;"><i class="fas fa-chalkboard-teacher"></i> Worked Examples</h4>
                ${examples.map(ex => `
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
        `;
    }

    function renderQuizBox(quiz, subject, unitIdx, unitTitle) {
        return `
            <div class="quiz-box glass" style="margin-top:15px; padding:20px; border-radius:12px;">
                <h4 style="color:${subject.color}; margin-bottom:10px;"><i class="fas fa-question-circle"></i> Concept Check</h4>
                <p style="margin-bottom:15px; font-size:0.95rem;">${quiz.question}</p>
                <div class="quiz-options" style="display:grid; gap:8px;">
                    ${quiz.options.map(opt => `
                        <button class="glass quiz-opt" style="text-align:left; padding:10px 15px; font-size:0.9rem;" 
                                onclick="window.checkQuizAnswer(${unitIdx}, '${opt.replace(/'/g, "\\'")}', '${quiz.answer.replace(/'/g, "\\'")}', '${quiz.explanation.replace(/'/g, "\\'")}', '${unitTitle.replace(/'/g, "\\'")}', '${quiz.question.replace(/'/g, "\\'")}')">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div id="feedback-${unitIdx}" style="margin-top:15px; display:none;"></div>
            </div>
        `;
    }

    function showDashboard() {
        const containerId = 'dashboard-view';
        const main = document.getElementById(containerId);
        if (!main) return;

        main.innerHTML = `
            <div class="hero">
                <h1>Sabrina <span class="gradient-text">Elite 3.0</span></h1>
                <p>Advanced Mathematical Training Architecture for TJHSST & Beyond.</p>
            </div>
            <div id="subject-cards-container" class="subject-grid"></div>
        `;
        renderSubjectGrid(MATH_DATA.subjects, 'subject-cards-container');
    }

    // Expose functions global context
    window.renderSubjectGrid = renderSubjectGrid;
    window.showSubjectDetail = showSubjectDetail;
    window.showDashboard = showDashboard;

    return {
        renderSubjectGrid,
        showSubjectDetail,
        showDashboard
    };
})();
