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
    }
};
