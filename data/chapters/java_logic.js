window.JAVA_LOGIC_DATA = {
    // Biology Concepts
    "photosynthesis": {
        title: "Photosynthesis: Logic Flow",
        logic: `
public class Photosynthesis {
    public static void main(String[] args) {
        var sunlight = new LightEnergy(680); // nm
        var h2o = new Water();
        var co2 = new CO2();

        if (sunlight.isPresent() && h2o.isPresent()) {
            // Light-Dependent Reaction
            var energy = sunlight.convert(h2o);
            System.out.println("Oxygen released as byproduct.");

            while (co2.isPresent() && energy.amount > 0) {
                // Calvin Cycle (Light-Independent)
                var result = energy.fixCarbon(co2);
                System.out.println("Glucose synthesized: " + result.mass() + "g");
            }
        } else {
            System.out.println("Stomata closed. System in standby.");
        }
    }
}
        `,
        explanation: "This Java logic demonstrates the two stages of photosynthesis. The light-dependent reaction is represented by an if-statement, and the Calvin Cycle is represented by a while-loop that iterates as long as energy and CO2 are available."
    },

    "natural_selection": {
        title: "Natural Selection: Algorithm",
        logic: `
public class EvolutionEngine {
    public void runSelection(List<Organism> population) {
        for (var individual : population) {
            var fitness = individual.calculateFitness(Environment.CURRENT);

            if (fitness > Environment.SURVIVAL_THRESHOLD) {
                individual.reproduce(); // Next generation inherits traits
                System.out.println("Trait " + individual.trait() + " persisted.");
            } else {
                population.remove(individual);
                System.out.println("Individual removed from gene pool.");
            }
        }
    }
}
        `,
        explanation: "Natural selection is represented by a for-loop iterating through the population list. Only individuals with fitness scores exceeding the threshold call the reproduce() method to pass their genes to the next generation."
    },

    // Mathematics Concepts
    "axioms": {
        title: "Axioms: The Source Code of Math",
        logic: `
public class AxiomLogic {
    public static void main(String[] args) {
        var a = 10.5;
        var b = 20.2;
        
        // 1. Commutative Property: a + b == b + a
        if (a + b == b + a) {
            System.out.println("Commutative Axiom Verified: " + (a + b));
        }
        
        // 2. Distributive Property: a * (b + c) == ab + ac
        var c = 5.0;
        if (a * (b + c) == (a * b) + (a * c)) {
            System.out.println("Distributive Axiom Verified.");
        }
        
        // 3. Additive Inverse: a + (-a) == 0
        if (a + (-a) == 0) {
            System.out.println("Inverse Axiom (Constitutional Law) Verified.");
        }
    }
}
        `,
        explanation: "Mathematical axioms are the hard-coded rules of the logical universe. In Java, these properties are fundamental to how the JVM evaluates arithmetic expressions."
    },

    "quadratic_formula": {
        title: "Quadratic Formula: Implementation",
        logic: `
public record ComplexNumber(double real, double imag) {}

public class MathSolver {
    public void solveQuadratic(double a, double b, double c) {
        var discriminant = Math.pow(b, 2) - 4 * a * c;

        if (discriminant > 0) {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            System.out.println("Two real roots found: " + root1 + ", " + root2);
        } else if (discriminant == 0) {
            var root = -b / (2 * a);
            System.out.println("One repeated root found: " + root);
        } else {
            var root1 = new ComplexNumber(-b/(2*a), Math.sqrt(-discriminant)/(2*a));
            System.out.println("Imaginary roots calculated: " + root1);
        }
    }
}
        `,
        explanation: "The solution to the quadratic equation is clearly visualized through a multi-conditional (if-else if-else) structure based on the value of the discriminant."
    },

    "inverse_functions": {
        title: "Inverse Functions: Symmetric Logic",
        logic: `
public record MathFunction(java.util.function.DoubleFunction<Double> logic, String name) {
    public double apply(double x) { return logic.apply(x); }
}

public class SymmetryEngine {
    public static void main(String[] args) {
        var f = new MathFunction(x -> 2 * x + 3, "f(x) = 2x + 3");
        var fInv = new MathFunction(y -> (y - 3) / 2, "f^-1(y) = (y - 3) / 2");

        var input = 10.0;
        var output = f.apply(input);
        var recovered = fInv.apply(output);

        System.out.println("Original: " + input + " -> Processed: " + output);
        System.out.println("Inverse Process: " + output + " -> Recovered: " + recovered);

        if (Math.abs(input - recovered) < 1E-9) {
            System.out.println("Conclusion: f and f^-1 are perfect inverses.");
        }
    }
}
        `,
        explanation: "Inverse functions are the logical undoing of a process. In JDK 21, we can model this using records and Functional Interfaces, demonstrating how spatial symmetry translates to algorithmic symmetry."
    },

    "factorial": {
        title: "Factorial: Recursive vs Iterative",
        logic: `
public class MathPatterns {
    // Iterative approach using a For-Loop
    public long calculateFactorial(int n) {
        var result = 1L;
        for (var i = 1; i <= n; i++) {
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
        explanation: "Factorial calculation is the perfect mathematical example to explain core CS concepts: iteration (for-loops) and recursion."
    },

    "prime_numbers": {
        title: "Prime Check: Algorithmic Efficiency",
        logic: `
public class NumberTheory {
    public boolean isPrime(int n) {
        if (n <= 1) return false;
        
        // Efficiency: Only check up to the square root
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false; // Found a divisor
            }
        }
        return true; // No divisors found
    }
}
        `,
        explanation: "The prime number checking algorithm implements number theory concepts in code. Limiting the loop range to the square root of n ($ \\sqrt{n} $) is a classic example of algorithmic optimization using mathematical properties."
    },

    "logarithms": {
        title: "Logarithmic Rules: Method Overloading",
        logic: `
public class LogRules {
    public static double logProduct(double x, double y) {
        // log(xy) = log(x) + log(y)
        return Math.log(x) + Math.log(y);
    }

    public static double logQuotient(double x, double y) {
        // log(x/y) = log(x) - log(y)
        return Math.log(x) - Math.log(y);
    }

    public static double logPower(double x, double p) {
        // log(x^p) = p * log(x)
        return p * Math.log(x);
    }
}
        `,
        explanation: "Logarithmic rules are neatly abstracted into static Java methods. The mathematical logic where multiplication becomes addition and division becomes subtraction is intuitively expressed through code operators."
    },

    "differentiation": {
        title: "Differentiation: The Power Rule Logic",
        logic: `
public record Derivative(double coefficient, int power) {}

public class CalculusEngine {
    public Derivative solvePowerRule(double coefficient, int power) {
        // d/dx [ax^n] = (a*n)x^(n-1)
        var newCoeff = coefficient * power;
        var newPower = power - 1;
        
        return new Derivative(newCoeff, newPower);
    }
    
    public double solveChainRule(Function outer, Function inner, double x) {
        // d/dx [f(g(x))] = f'(g(x)) * g'(x)
        return outer.derivative(inner.value(x)) * inner.derivative(x);
    }
}
        `,
        explanation: "Differentiation formulas are like step-by-step algorithms. The Power Rule is a simple operation adjusting coefficients and exponents, while the Chain Rule can be coded as a recursive combination of functions."
    },

    "water_potential": {
        title: "Water Potential: Environmental Physics",
        logic: `
public record Cell(double psi, String id) {}

public class PlantPhysiology {
    public double calculatePsi(double solutePot, double pressurePot) {
        // Total Potential = Solute + Pressure
        return solutePot + pressurePot;
    }

    public double calculateSolutePotential(double i, double c, double r, double t) {
        // Psi_s = -iCRT
        return -1 * i * c * r * (t + 273.15); // Pressure in Kelvin
    }

    public void determineWaterFlow(Cell a, Cell b) {
        if (a.psi() > b.psi()) {
            System.out.println("Water flows from " + a.id() + " to " + b.id());
        } else {
            System.out.println("Water flows from " + b.id() + " to " + a.id());
        }
    }
}
        `,
        explanation: "The concept of water potential in biology is equivalent to calculating equilibrium in a physical system. The logic of water flowing from high to low potential is perfectly explained through if-else conditional logic."
    },

    "mendelian_genetics": {
        title: "Genetics: Punnett Square Simulation",
        logic: `
public record Genotype(char allele1, char allele2) {
    public boolean isDominant() { return Character.isUpperCase(allele1) || Character.isUpperCase(allele2); }
}

public class GeneticsEngine {
    public List<Genotype> cross(String parent1, String parent2) {
        var offspring = new ArrayList<Genotype>();
        
        for (var allele1 : parent1.toCharArray()) {
            for (var allele2 : parent2.toCharArray()) {
                offspring.add(new Genotype(allele1, allele2));
            }
        }
        return offspring; // Returns 4 combinations
    }
    
    public String determinePhenotype(Genotype g) {
        if (g.isDominant()) return "Dominant Trait Observed";
        return "Recessive Trait Observed";
    }
}
        `,
        explanation: "Mendelian genetics is a combination generation algorithm using nested for-loops. The logic for determining dominant traits based on the presence of dominant alleles is simply implemented with boolean checks and conditionals."
    },

    "enzyme_kinetics": {
        title: "Enzyme Kinetics: Inhibition States",
        logic: `
public enum InhibitorType { COMPETITIVE, NON_COMPETITIVE }
public record Inhibitor(InhibitorType type, double concentration, double ki) {}

public class BioChemistry {
    public double calculateRate(double vMax, double s, double km, Inhibitor i) {
        if (i == null) {
            return (vMax * s) / (km + s); // Michaelis-Menten
        }
        
        return switch (i.type()) {
            case COMPETITIVE -> (vMax * s) / (km * (1 + i.concentration() / i.ki()) + s);
            case NON_COMPETITIVE -> (vMax / (1 + i.concentration() / i.ki()) * s) / (km + s);
        };
    }
}
        `,
        explanation: "Enzyme kinetics is expressed through modern switch expressions (JDK 21). Competitive inhibition is modeled by modifying the Km value, while non-competitive inhibition is modeled by varying the Vmax value."
    },

    "cell_transport": {
        title: "Cell Transport: Active vs Passive",
        logic: `
public class MembraneManager {
    public void transport(Molecule m, Gradient g, Energy atp) {
        if (g.isDownhill()) {
            // Passive Transport (Diffusion)
            m.move(Direction.WITH_GRADIENT);
            System.out.println("No ATP consumed.");
        } else if (atp.amount() >= m.energyCost()) {
            // Active Transport (Pump)
            atp.consume(m.energyCost());
            m.move(Direction.AGAINST_GRADIENT);
            System.out.println("Pumping against gradient...");
        } else {
            System.out.println("Insufficient energy for transport.");
        }
    }
}
        `,
        explanation: "Cellular transport is an if-else logic check for energy (ATP) availability and concentration gradients. Diffusion occurs without conditions, but active transport always requires ATP consumption."
    },
    "eigenvalues": {
        title: "Eigenvalues & Eigenvectors: Linear Transformation Logic",
        logic: `
public class MatrixMaster {
    public void solveEigen(Matrix A) {
        // Characteristic Equation: det(A - lambda*I) = 0
        System.out.println("Step 1: Constructing Characteristic Polynomial...");
        
        var p = A.getCharacteristicPolynomial();
        var eigenvalues = p.findRoots();
        
        for (var lambda : eigenvalues) {
            System.out.println("Eigenvalue found: " + lambda);
            // Solve (A - lambda*I)v = 0 for Eigenvectors
            var v = A.solveHomogeneousSystem(lambda);
            System.out.println("Corresponding Eigenvector: " + v.toString());
        }
    }
}
        `,
        explanation: "Eigenvalues and eigenvectors are core to linear transformations. In Java code, this is expressed as a procedural algorithm that solves the characteristic equation and then finds the corresponding vectors for each eigenvalue."
    }
};
