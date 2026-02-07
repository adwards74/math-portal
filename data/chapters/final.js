window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["final"] = {
    // ==========================================================
    // UNIT 15: TJ ELITE MASTER CHALLENGE
    // ==========================================================
    "final-u15-1": {
        title: "15.1: TJ EOC Replica",
        subtitle: "The Final Hurdle",
        content: `
            <div class="intuition-box glass">
                <h3><i class="fas fa-microchip" style="color:#ffd700"></i> TJ Standard Insight</h3>
                <p>TJ's End-of-Course (EOC) exams often test <strong>System Interaction</strong>. For example, solving a system where one equation is a quadratic and another is a logarithmic curve.</p>
            </div>
            <h3>1. The Synthesis Problem</h3>
            <p>Solve for $x$: $2^{x+1} = x^2 + 4$.</p>
            <p><strong>Elite Strategy:</strong> This cannot be solved purely with logs or purely with algebra. You must use <strong>Numerical Estimation</strong> or <strong>Graphical Analysis</strong> to find the intersections. This is where 'Mental Calc' meets hardware logic.</p>
        `
    },
    "final-u15-2": {
        title: "15.2: Elite Modeling Archive",
        subtitle: "Signal Processing & Physics",
        content: `
            <h3>1. Modeling the Damped Harmonic Oscillator</h3>
            <p>In advanced Algebra 2, we move past pure sine waves to weighted waves: $y = e^{-t} \\sin(t)$.</p>
            <p><strong>The Real World:</strong> This models a shock absorber on a car. The $e^{-t}$ is the "Damping Factor" that kills the vibration over time. Understanding how parameters affect the decay is key to engineering.</p>
        `
    },
    "final-u15-3": {
        title: "15.3: Competition Logic (AMC/AIME)",
        subtitle: "The Problem Solver's Toolkit",
        content: `
            <h3>1. Stars and Bars (Combinatorics)</h3>
            <p>How many ways can you distribute 10 identical candies to 3 children such that each gets at least one?</p>
            <p><strong>Logic:</strong> Place 10 'stars' and 2 'bars' between them. $\\dbinom{n-1}{k-1} = \\dbinom{9}{2} = 36$.</p>
            <div class="intuition-box glass">
                <h3><i class="fas fa-brain" style="color:#39ff14"></i> AIME Thinking</h3>
                <p>Don't count the cases. <strong>Count the gaps</strong>. This mental shift is the difference between a high-schooler and a competition winner.</p>
            </div>
        `
    },
    "final-u15-4": {
        title: "15.4: 2024 Mock Exam A",
        subtitle: "High-Fidelity Practice",
        content: `
            <div class="lesson-section">
                <h2>I. The 2024 Synthesis Challenge</h2>
                <p><strong>Part A (No Calculator):</strong> Solve for the intersection of $y = \\log_2(x)$ and $y = 3 - x$.</p>
                <div class="example-box glass">
                    <p><strong>Step-by-Step Logic:</strong> Test integer values. If $x=2$, $\\log_2(2)=1$ and $3-2=1$. Intersection found at $(2, 1)$.</p>
                </div>
                
                <div class="video-section elite-border" style="margin-top:40px; padding:25px; background:rgba(0,0,0,0.3); border-radius:15px;">
                    <h3 style="color:var(--accent-magenta); margin-bottom:15px;"><i class="fab fa-youtube"></i> 2024 Exam Solution Archive</h3>
                    <p style="font-size:0.9rem; margin-bottom:20px; opacity:0.8;">Watch the elite-level breakdown of the 2024 Algebra 2 exam problems. Master the "TJ shortcuts" for high-speed accuracy.</p>
                    <a href="https://youtu.be/u_0V7xq-Ttk" target="_blank" class="glass-btn" style="display:inline-flex; align-items:center; gap:10px; padding:12px 25px; border-radius:10px; color:white; text-decoration:none; font-weight:600; background:linear-gradient(45deg, #FF0000 0%, #cc0000 100%);">
                        <i class="fas fa-play"></i> Watch Full Solution
                    </a>
                </div>
            </div>
        `
    },
    "final-u15-5": {
        title: "15.5: 2025 Predictive Test",
        subtitle: "Elite Mastery",
        content: `
            <div class="lesson-section">
                <h2>I. Future-Proof Logic</h2>
                <p>This module covers the "Beyond-Algebra" connections found in modern TJ curricula.</p>
                <div class="glass-card" style="border-left: 4px solid var(--accent-magenta);">
                    <h4>Matrix Determinants & Volume</h4>
                    <p>Remember that the determinant of a $3 \\times 3$ matrix represents the <strong>Volume Scaling</strong> of the space. If $det(A) = 0$, the volume collapses into a plane, meaning the system is dependent.</p>
                </div>
            </div>
        `
    }
};


