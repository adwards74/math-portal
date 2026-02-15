window.JAVA_LOGIC_DATA = {
    // Biology Concepts
    "photosynthesis": {
        title: "Photosynthesis: Logic Flow",
        logic: `
public class Photosynthesis {
    public static void main(String[] args) {
        LightEnergy sunlight = new LightEnergy(680); // nm
        Water h2o = new Water();
        CO2 co2 = new CO2();

        if (sunlight.isPresent() && h2o.isPresent()) {
            // Light-Dependent Reaction
            ATP energy = sunlight.convert(h2o);
            System.out.println("Oxygen released as byproduct.");

            while (co2.isPresent() && energy.amount > 0) {
                // Calvin Cycle (Light-Independent)
                Glucose result = energy.fixCarbon(co2);
                System.out.println("Glucose synthesized: " + result.mass + "g");
            }
        } else {
            System.out.println("Stomata closed. System in standby.");
        }
    }
}
        `,
        explanation: "이 Java 로직은 광합성의 두 단계를 보여줍니다. 명반응(Light-Dependent)은 if 조건문으로, 캘빈 회로(Calvin Cycle)는 에너지와 CO2가 있을 때 반복되는 while 루프로 표현되었습니다."
    },

    "natural_selection": {
        title: "Natural Selection: Algorithm",
        logic: `
public class EvolutionEngine {
    public void runSelection(List<Organism> population) {
        for (Organism individual : population) {
            double fitness = individual.calculateFitness(Environment.CURRENT);

            if (fitness > Environment.SURVIVAL_THRESHOLD) {
                individual.reproduce(); // Next generation inherits traits
                System.out.println("Trait " + individual.trait + " persisted.");
            } else {
                population.remove(individual);
                System.out.println("Individual removed from gene pool.");
            }
        }
    }
}
        `,
        explanation: "자연선택은 집단(List)을 순회하는 for 루프로 표현됩니다. 적합도(Fitness)가 임계값을 넘는 객체만이 reproduction() 메서드를 호출하여 다음 세대로 유전자를 전달합니다."
    },

    // Mathematics Concepts
    "quadratic_formula": {
        title: "Quadratic Formula: Implementation",
        logic: `
public class MathSolver {
    public void solveQuadratic(double a, double b, double c) {
        double discriminant = Math.pow(b, 2) - 4 * a * c;

        if (discriminant > 0) {
            double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            System.out.println("Two real roots found.");
        } else if (discriminant == 0) {
            double root = -b / (2 * a);
            System.out.println("One repeated root found.");
        } else {
            ComplexNumber root1 = new ComplexNumber(-b/(2*a), Math.sqrt(-discriminant)/(2*a));
            System.out.println("Imaginary roots calculated.");
        }
    }
}
        `,
        explanation: "이차방정식의 해법은 판별식(Discriminant)의 값에 따른 다중 조건문(if-else if-else) 구조로 명확하게 시각화됩니다."
    },

    "factorial": {
        title: "Factorial: Recursive vs Iterative",
        logic: `
public class MathPatterns {
    // Iterative approach using a For-Loop
    public long calculateFactorial(int n) {
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Recursive approach (Elite Logic)
    public long factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
}
        `,
        explanation: "계승(Factorial)은 반복문(For-loop)과 재귀(Recursion)라는 CS의 핵심 개념을 설명하기에 가장 완벽한 수학적 예시입니다."
    },

    "prime_numbers": {
        title: "Prime Check: Algorithmic Efficiency",
        logic: `
public class NumberTheory {
    public boolean isPrime(int n) {
        if (n <= 1) return false;
        
        // Efficiency: Only check up to the square root
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false; // Found a divisor
            }
        }
        return true; // No divisors found
    }
}
        `,
        explanation: "소수 판별 알고리즘은 '정수론'의 개념을 코드로 구현한 것입니다. 특히 루프의 범위를 제곱근($\\sqrt{n}$)까지로 제한하는 것은 수학적 성질을 이용한 알고리즘 최적화의 정석입니다."
    }
};

