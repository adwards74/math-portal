/**
 * Math-Archive Library Data
 * Curated external resources including YouTube videos and academic sites.
 * Ratings are based on curriculum relevance (1-5 stars).
 */

window.MATH_LIBRARY = {
    categories: [
        {
            id: "neural-intuition",
            title: "Neural Intuition (The Essence Series)",
            icon: "fas fa-brain",
            resources: [
                {
                    type: "video",
                    title: "The Essence of Calculus",
                    author: "3Blue1Brown",
                    id: "WUvTyaaN26w",
                    views: "10M+",
                    relevance: 5,
                    description: "The gold standard for visual intuition. Covers the fundamental theorem and derivatives."
                },
                {
                    type: "video",
                    title: "Essence of Linear Algebra",
                    author: "3Blue1Brown",
                    id: "fNk_zzaMoSs",
                    views: "8M+",
                    relevance: 5,
                    description: "Visualizes matrices as linear transformations. Essential for TJHSST advanced math."
                },
                {
                    type: "video",
                    title: "But what is the Central Limit Theorem?",
                    author: "3Blue1Brown",
                    id: "zeJD6dqJ5lo",
                    views: "2M+",
                    relevance: 5,
                    description: "Perfect for IBET Stats. Visualizes probability distributions and variance logic."
                }
            ]
        },
        {
            id: "calculus-mastery",
            title: "Elite Calculus & Analysis",
            icon: "fas fa-infinity",
            resources: [
                {
                    type: "video",
                    title: "Calculus 1 Full Course (Lecture 1.1)",
                    author: "Professor Leonard",
                    id: "WUvTyaaN26w",
                    views: "3.5M+",
                    relevance: 5,
                    description: "Full-length lecture series. Unparalleled depth for AP Calculus BC prep."
                },
                {
                    type: "site",
                    title: "MIT OpenCourseWare: Mathematics",
                    url: "https://ocw.mit.edu/search/?d=Mathematics",
                    author: "MIT",
                    relevance: 5,
                    description: "Access actual MIT lectures on Multivariable Calculus and Differential Equations."
                },
                {
                    type: "video",
                    title: "BlackPenRedPen Calculus Mix",
                    author: "BlackPenRedPen",
                    id: "A7-SnyX47hA",
                    views: "1.5M+",
                    relevance: 4,
                    description: "Fast-paced problem solving for integration and optimization challenges."
                }
            ]
        },
        {
            id: "competitive-logic",
            title: "Competitive Logic & AMC Prep",
            icon: "fas fa-trophy",
            resources: [
                {
                    type: "site",
                    title: "Art of Problem Solving (AoPS)",
                    url: "https://artofproblemsolving.com/alcumus",
                    author: "AoPS",
                    relevance: 5,
                    description: "Alcumus adaptive trainer. The ultimate arena for competitive math athletes."
                },
                {
                    type: "site",
                    title: "MAA AMC Past Problems",
                    url: "https://www.maa.org/math-competitions",
                    author: "MAA",
                    relevance: 5,
                    description: "Past AMC 10/12 exams. Essential for TJHSST math team preparation."
                },
                {
                    type: "video",
                    title: "Michael Penn: Olympiad Math",
                    author: "Michael Penn",
                    id: "m4SExD7H2_s",
                    views: "500K+",
                    relevance: 4,
                    description: "High-level proof-based mathematics and number theory explorations."
                }
            ]
        }
    ]
};
