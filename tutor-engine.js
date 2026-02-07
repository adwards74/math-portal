/**
 * Genius Math Portal - Tutor Engine
 * Handles Socratic Intelligence, Terminal Effects, and MathJax integration.
 */

window.TutorEngine = (function () {

    /**
     * getSocraticAdvice
     * Fetches context-aware insights from MATH_DATA
     */
    function getSocraticAdvice(lessonKey, subjectId) {
        const subject = typeof MATH_DATA !== 'undefined' ? MATH_DATA.subjects.find(s => s.id === subjectId) : null;
        if (!subject) return "Neo-Sense: Subject data missing. Manual override required.";

        let insight = null;

        // Search in units or lectures
        subject.units.forEach(unit => {
            if (unit.insight && lessonKey.startsWith(unit.title.split(':')[0].toLowerCase().trim())) {
                insight = unit.insight;
            }
            unit.lectures.forEach(l => {
                if (l.url.includes(lessonKey) && l.insight) {
                    insight = l.insight;
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

        return `${insight}\n\n**Neo's Inquiry:** ${inquiries[Math.floor(Math.random() * inquiries.length)]}`;
    }

    /**
     * typeTerminalMessage
     * Simulates a hacker-style terminal typing effect
     */
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
            }
        }
        type();
    }

    function updateStabilityUI() {
        console.log("TutorEngine: Neural Stability Synchronized.");
    }

    // Expose to window context
    window.getSocraticAdvice = getSocraticAdvice;
    window.typeTerminalMessage = typeTerminalMessage;
    window.updateStabilityUI = updateStabilityUI;

    return {
        getSocraticAdvice,
        typeTerminalMessage,
        updateStabilityUI
    };
})();
