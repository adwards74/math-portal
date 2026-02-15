/**
 * IBET Analytics Engine - Sabrina Elite 5.6
 * JavaScript implementation of Python-style statistical functions.
 */

window.AnalyticsEngine = (function () {

    // Helper: Cumulative Distribution Function for Standard Normal
    function normalCDF(x) {
        const t = 1 / (1 + 0.2316419 * Math.abs(x));
        const d = 0.3989423 * Math.exp(-x * x / 2);
        const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.7814779 + t * (-1.821256 + t * 1.3302745))));
        return x > 0 ? 1 - p : p;
    }

    // T-Distribution CDF approximation (for p-value)
    // Ref: Abramowitz and Stegun
    function tCDF(t, df) {
        const x = df / (df + t * t);
        if (df % 2 === 0) {
            let sum = 0;
            let term = 1;
            for (let i = 1; i < df / 2; i++) {
                term *= (2 * i - 1) / (2 * i) * (1 - x);
                sum += term;
            }
            return 1 - 0.5 * Math.sqrt(1 - x) * (1 + sum);
        } else {
            // Approximation for odd df or high df
            return normalCDF(t);
        }
    }

    function calculateDescriptive(data) {
        if (!data || data.length === 0) return null;
        const n = data.length;
        const sum = data.reduce((a, b) => a + b, 0);
        const mean = sum / n;
        const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
        const sd = Math.sqrt(variance);
        const se = sd / Math.sqrt(n);

        return { n, mean, sd, se, sum };
    }

    /**
     * Independent T-Test
     * Returns: t-statistic, p-value, df
     */
    function tTestIndependent(group1, group2) {
        const stats1 = calculateDescriptive(group1);
        const stats2 = calculateDescriptive(group2);

        if (!stats1 || !stats2) return null;

        const df = stats1.n + stats2.n - 2;
        const pooledVar = ((stats1.n - 1) * Math.pow(stats1.sd, 2) + (stats2.n - 1) * Math.pow(stats2.sd, 2)) / df;
        const tStat = (stats1.mean - stats2.mean) / Math.sqrt(pooledVar * (1 / stats1.n + 1 / stats2.n));

        // Two-tailed p-value
        const pValue = 2 * (1 - tCDF(Math.abs(tStat), df));

        return {
            tStat: tStat.toFixed(4),
            pValue: pValue.toFixed(6),
            df: df,
            significant: pValue < 0.05
        };
    }

    return {
        analyze: calculateDescriptive,
        tTest: tTestIndependent
    };

})();
