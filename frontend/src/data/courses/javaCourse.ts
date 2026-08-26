import { CourseData } from "../courseTypes";

export const JAVA_COURSE: CourseData = {
  id: "java-basics",
  title: "Java Basics",
  level: "Beginner",
  description: "Learn Java from the ground up — classes, OOP, collections, exception handling, and interfaces.",
  icon: "☕",
  color: "orange",
  totalHours: "~5 Hours",
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Java Fundamentals",
      subtitle: "Variables, data types, input, and operators",
      icon: "☕",
      estimatedTime: "55 min",
      topics: ["What is Java?", "JVM & JDK", "Hello World", "Variables", "Data Types", "Scanner Input", "Type Casting", "Operators"],
      content: [
        {
          type: "heading",
          title: "What is Java?",
        },
        {
          type: "paragraph",
          text: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was created by James Gosling at Sun Microsystems in 1995. Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM), making them platform-independent — 'Write Once, Run Anywhere'.",
        },
        {
          type: "list",
          title: "Key components:",
          items: [
            "JDK (Java Development Kit) — everything you need to develop Java programs (compiler, JRE, libraries)",
            "JRE (Java Runtime Environment) — runs compiled Java programs (includes JVM)",
            "JVM (Java Virtual Machine) — executes Java bytecode on any OS",
          ],
        },
        {
          type: "heading",
          title: "Your First Java Program",
        },
        {
          type: "paragraph",
          text: "Every Java program starts with a class definition and a main method. The class name must match the filename.",
        },
        {
          type: "code",
          language: "java",
          code: `// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");   // prints with newline
        System.out.print("No newline here");   // prints without newline
    }
}`,
        },
        {
          type: "heading",
          title: "Variables and Data Types",
        },
        {
          type: "paragraph",
          text: "Java is statically typed — you must declare a variable's type before using it. Java has 8 primitive types and also supports objects like String.",
        },
        {
          type: "code",
          language: "java",
          code: `public class DataTypes {
    public static void main(String[] args) {
        // Integer types
        int age = 25;              // 32-bit integer
        long population = 8000000000L;  // 64-bit integer

        // Floating point
        double pi = 3.14159;      // 64-bit decimal
        float price = 9.99f;      // 32-bit decimal

        // Character and Boolean
        char grade = 'A';         // single character (single quotes)
        boolean isActive = true;  // true or false

        // String (not a primitive — it's an object)
        String name = "Alice";

        // Constants (cannot be changed)
        final int MAX_SCORE = 100;

        System.out.println("Name: " + name + ", Age: " + age);
        System.out.println("Pi is approximately " + pi);
    }
}`,
        },
        {
          type: "heading",
          title: "Reading User Input with Scanner",
        },
        {
          type: "code",
          language: "java",
          code: `import java.util.Scanner;  // must import Scanner

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();   // reads a full line

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();        // reads an integer

        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble();  // reads a decimal

        System.out.println("Hello, " + name + "!");
        System.out.println("Age: " + age + ", GPA: " + gpa);

        scanner.close();  // good practice to close the scanner
    }
}`,
        },
        {
          type: "heading",
          title: "Type Casting",
        },
        {
          type: "code",
          language: "java",
          code: `public class TypeCasting {
    public static void main(String[] args) {
        // Widening (implicit) — no data loss, happens automatically
        int intVal = 42;
        double doubleVal = intVal;    // int → double (safe)
        System.out.println(doubleVal); // 42.0

        // Narrowing (explicit) — possible data loss, must cast manually
        double pi = 3.99;
        int truncated = (int) pi;     // double → int (drops decimal)
        System.out.println(truncated); // 3

        // String conversions
        String numStr = "123";
        int parsed = Integer.parseInt(numStr);     // String → int
        double parsedD = Double.parseDouble("3.14"); // String → double
        String back = String.valueOf(parsed);      // int → String
    }
}`,
        },
        {
          type: "heading",
          title: "Arithmetic and Comparison Operators",
        },
        {
          type: "code",
          language: "java",
          code: `public class Operators {
    public static void main(String[] args) {
        int a = 10, b = 3;

        // Arithmetic
        System.out.println(a + b);   // 13
        System.out.println(a - b);   // 7
        System.out.println(a * b);   // 30
        System.out.println(a / b);   // 3  (integer division!)
        System.out.println(a % b);   // 1  (remainder/modulo)

        // Increment / decrement
        int x = 5;
        x++;     // x is now 6
        x--;     // x is now 5

        // Compound assignment
        x += 10; // x = x + 10
        x *= 2;  // x = x * 2

        // Comparison (return boolean)
        System.out.println(a > b);   // true
        System.out.println(a == b);  // false
        System.out.println(a != b);  // true

        // Logical
        System.out.println(a > 5 && b < 5);  // true (AND)
        System.out.println(a > 20 || b < 5); // true (OR)
        System.out.println(!(a > 5));         // false (NOT)
    }
}`,
        },
        {
          type: "tip",
          text: "Integer division in Java always truncates (not rounds). So 7 / 2 = 3, not 3.5. To get a decimal result, at least one operand must be a double: 7.0 / 2 = 3.5.",
        },
      ],
      quiz: [
        {
          id: "java-m1-q1",
          question: "What does JVM stand for?",
          options: ["Java Virtual Machine", "Java Verified Module", "Java Variable Manager", "Java Version Manager"],
          correctIndex: 0,
          explanation: "JVM stands for Java Virtual Machine. It executes Java bytecode and is what makes Java platform-independent.",
        },
        {
          id: "java-m1-q2",
          question: "What is the correct data type to store a decimal number with high precision in Java?",
          options: ["float", "int", "double", "char"],
          correctIndex: 2,
          explanation: "double is a 64-bit floating point type and provides more precision than float (32-bit). It is the default for decimal literals in Java.",
        },
        {
          id: "java-m1-q3",
          question: "What is the result of `int result = 7 / 2;` in Java?",
          options: ["3.5", "3", "4", "3.0"],
          correctIndex: 1,
          explanation: "When both operands are integers, Java performs integer division and truncates the decimal. 7 / 2 = 3 (not 3.5).",
        },
        {
          id: "java-m1-q4",
          question: "Which keyword is used to declare a constant variable in Java?",
          options: ["static", "const", "final", "fixed"],
          correctIndex: 2,
          explanation: "The `final` keyword makes a variable constant in Java. Once assigned, its value cannot be changed.",
        },
        {
          id: "java-m1-q5",
          question: "Which Scanner method reads an entire line of text?",
          options: ["scanner.next()", "scanner.nextLine()", "scanner.readLine()", "scanner.nextString()"],
          correctIndex: 1,
          explanation: "scanner.nextLine() reads a complete line including spaces. scanner.next() only reads until the next whitespace.",
        },
      ],
    },
    {
      id: "module-2",
      number: 2,
      title: "Control Flow",
      subtitle: "if/else, switch, loops, break and continue",
      icon: "🔀",
      estimatedTime: "50 min",
      topics: ["if / else if / else", "switch statement", "for loop", "while loop", "do-while loop", "break", "continue"],
      content: [
        {
          type: "heading",
          title: "if / else if / else",
        },
        {
          type: "code",
          language: "java",
          code: `public class IfElse {
    public static void main(String[] args) {
        int score = 75;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else if (score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        // Output: Grade: C
    }
}`,
        },
        {
          type: "heading",
          title: "switch Statement",
        },
        {
          type: "code",
          language: "java",
          code: `public class SwitchDemo {
    public static void main(String[] args) {
        int day = 3;
        String dayName;

        switch (day) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            default:
                dayName = "Weekend";
                break;
        }
        System.out.println(dayName); // Wednesday

        // Modern switch expression (Java 14+)
        String result = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            default -> "Other";
        };
    }
}`,
        },
        {
          type: "heading",
          title: "for Loop",
        },
        {
          type: "code",
          language: "java",
          code: `public class ForLoop {
    public static void main(String[] args) {
        // Basic for loop: init; condition; update
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // Counting down
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }

        // Nested loops (multiplication table)
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println();
        }
        // Output:
        // 1 2 3
        // 2 4 6
        // 3 6 9
    }
}`,
        },
        {
          type: "heading",
          title: "while and do-while Loops",
        },
        {
          type: "code",
          language: "java",
          code: `public class WhileLoops {
    public static void main(String[] args) {
        // while: checks condition BEFORE executing
        int count = 1;
        while (count <= 5) {
            System.out.print(count + " ");
            count++;
        }
        System.out.println(); // 1 2 3 4 5

        // do-while: executes ONCE then checks condition
        // Useful when you always want at least one iteration
        int num = 10;
        do {
            System.out.println("num = " + num);
            num--;
        } while (num > 10); // condition is false but still ran once!
        // Output: num = 10
    }
}`,
        },
        {
          type: "heading",
          title: "break and continue",
        },
        {
          type: "code",
          language: "java",
          code: `public class BreakContinue {
    public static void main(String[] args) {
        // break: exits the loop immediately
        for (int i = 1; i <= 10; i++) {
            if (i == 5) break;
            System.out.print(i + " "); // 1 2 3 4
        }
        System.out.println();

        // continue: skips the rest of the current iteration
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) continue; // skip even numbers
            System.out.print(i + " "); // 1 3 5 7 9
        }
        System.out.println();

        // Finding a number in a range
        int target = 7;
        for (int i = 1; i <= 20; i++) {
            if (i == target) {
                System.out.println("Found " + target + " at index " + i);
                break;
            }
        }
    }
}`,
        },
        {
          type: "tip",
          text: "Always ensure your loop has a way to terminate! A while(true) loop without a break will run forever (infinite loop) and crash your program with high CPU usage.",
        },
      ],
      quiz: [
        {
          id: "java-m2-q1",
          question: "How many times does `for (int i = 0; i < 5; i++)` execute its body?",
          options: ["4", "5", "6", "0"],
          correctIndex: 1,
          explanation: "i starts at 0 and loops while i < 5 (0,1,2,3,4), so the body executes 5 times.",
        },
        {
          id: "java-m2-q2",
          question: "What is unique about a do-while loop compared to a while loop?",
          options: [
            "It runs faster",
            "It always executes the body at least once",
            "It can only use integer conditions",
            "It doesn't need a condition",
          ],
          correctIndex: 1,
          explanation: "A do-while loop executes its body first, then checks the condition. This guarantees at least one execution regardless of the condition.",
        },
        {
          id: "java-m2-q3",
          question: "What does the `continue` statement do inside a loop?",
          options: [
            "Exits the loop entirely",
            "Restarts the program",
            "Skips the rest of the current iteration and goes to the next",
            "Pauses execution",
          ],
          correctIndex: 2,
          explanation: "continue skips the remaining code in the current iteration and jumps to the loop's update expression (for-loop) or re-evaluates the condition.",
        },
        {
          id: "java-m2-q4",
          question: "In a switch statement, what happens if you omit the `break` statement?",
          options: [
            "Compilation error",
            "The program crashes",
            "Execution falls through to the next case",
            "Nothing changes",
          ],
          correctIndex: 2,
          explanation: "Without break, Java 'falls through' and executes the next case's code, even if it doesn't match. This is a common bug source.",
        },
        {
          id: "java-m2-q5",
          question: "Which statement correctly starts a for loop that prints numbers 1 to 10?",
          options: [
            "for (int i = 1; i < 10; i++)",
            "for (int i = 1; i <= 10; i++)",
            "for (int i = 0; i < 10; i++)",
            "for (int i = 1; i < 11; i--)",
          ],
          correctIndex: 1,
          explanation: "for (int i = 1; i <= 10; i++) starts at 1 and runs while i is less than or equal to 10, printing 1 through 10.",
        },
      ],
    },
    {
      id: "module-3",
      number: 3,
      title: "Object-Oriented Programming",
      subtitle: "Classes, objects, inheritance and encapsulation",
      icon: "🧩",
      estimatedTime: "60 min",
      topics: ["Classes & Objects", "Constructors", "this Keyword", "Inheritance", "Method Overriding", "Encapsulation", "Access Modifiers"],
      content: [
        {
          type: "heading",
          title: "Classes and Objects",
        },
        {
          type: "paragraph",
          text: "A class is a blueprint for creating objects. It defines fields (data) and methods (behavior). An object is a specific instance of a class.",
        },
        {
          type: "code",
          language: "java",
          code: `public class Car {
    // Fields (instance variables)
    String brand;
    String model;
    int year;
    double price;

    // Method
    public void displayInfo() {
        System.out.println(year + " " + brand + " " + model);
        System.out.println("Price: $" + price);
    }

    public void start() {
        System.out.println(brand + " engine started!");
    }
}

// Usage in another class or main
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();  // creates an object (instance)
        myCar.brand = "Toyota";
        myCar.model = "Camry";
        myCar.year = 2023;
        myCar.price = 25000.0;

        myCar.displayInfo();  // 2023 Toyota Camry
        myCar.start();        // Toyota engine started!
    }
}`,
        },
        {
          type: "heading",
          title: "Constructors",
        },
        {
          type: "paragraph",
          text: "A constructor is a special method called when an object is created. It has the same name as the class and no return type.",
        },
        {
          type: "code",
          language: "java",
          code: `public class Person {
    String name;
    int age;

    // No-arg constructor (default)
    public Person() {
        name = "Unknown";
        age = 0;
    }

    // Parameterized constructor
    public Person(String name, int age) {
        this.name = name;  // 'this' refers to the current object
        this.age = age;
    }

    // Constructor overloading
    public Person(String name) {
        this.name = name;
        this.age = 18;  // default age
    }

    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age);
    }
}

// Usage
Person p1 = new Person();              // calls no-arg constructor
Person p2 = new Person("Alice", 30);  // calls parameterized
Person p3 = new Person("Bob");        // calls name-only constructor`,
        },
        {
          type: "heading",
          title: "Inheritance with extends",
        },
        {
          type: "code",
          language: "java",
          code: `// Parent class (superclass)
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public String describe() {
        return name + " (age: " + age + ")";
    }
}

// Child class (subclass)
public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);  // calls Animal's constructor
        this.breed = breed;
    }

    // Method specific to Dog
    public void bark() {
        System.out.println(name + " says: Woof!");
    }

    // Override parent's describe method
    @Override
    public String describe() {
        return super.describe() + " | Breed: " + breed;
    }
}

// Usage
Dog dog = new Dog("Rex", 3, "Labrador");
dog.eat();       // inherited from Animal
dog.bark();      // Dog's own method
System.out.println(dog.describe()); // Rex (age: 3) | Breed: Labrador`,
        },
        {
          type: "heading",
          title: "Encapsulation (private + getters/setters)",
        },
        {
          type: "code",
          language: "java",
          code: `public class BankAccount {
    private String owner;   // private: only accessible inside class
    private double balance;

    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    // Getter — controlled read access
    public double getBalance() {
        return balance;
    }

    public String getOwner() {
        return owner;
    }

    // Method with validation
    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid deposit amount!");
            return;
        }
        balance += amount;
        System.out.println("Deposited $" + amount + ". New balance: $" + balance);
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds!");
        } else {
            balance -= amount;
            System.out.println("Withdrew $" + amount + ". Remaining: $" + balance);
        }
    }
}

// Usage
BankAccount account = new BankAccount("Alice", 1000.0);
account.deposit(500);    // valid
account.withdraw(2000);  // Insufficient funds!
System.out.println(account.getBalance()); // 1500.0
// account.balance = 999999; // ERROR — balance is private!`,
        },
        {
          type: "tip",
          text: "Always use private for fields and provide public getters/setters. This protects the internal state of your objects from being changed in unexpected ways — a core principle of OOP called encapsulation.",
        },
      ],
      quiz: [
        {
          id: "java-m3-q1",
          question: "What is a constructor in Java?",
          options: [
            "A method that returns an object",
            "A special method called when an object is created, with the same name as the class",
            "A static method that initializes a class",
            "A method that destroys an object",
          ],
          correctIndex: 1,
          explanation: "A constructor has the same name as the class, no return type, and is called automatically when you use `new` to create an object.",
        },
        {
          id: "java-m3-q2",
          question: "What does the `extends` keyword do in Java?",
          options: [
            "Implements an interface",
            "Creates a method",
            "Establishes an inheritance relationship between classes",
            "Declares a constant",
          ],
          correctIndex: 2,
          explanation: "`extends` creates an inheritance (IS-A) relationship. The child class inherits all non-private fields and methods from the parent class.",
        },
        {
          id: "java-m3-q3",
          question: "What does `this` refer to inside a Java class method?",
          options: [
            "The parent class",
            "The current object instance",
            "The main method",
            "A static reference",
          ],
          correctIndex: 1,
          explanation: "`this` refers to the current object instance. It's commonly used to distinguish between instance variables and constructor/method parameters with the same name.",
        },
        {
          id: "java-m3-q4",
          question: "What is encapsulation in OOP?",
          options: [
            "Splitting code into many files",
            "Making all variables public",
            "Hiding internal state using private fields and providing controlled access via getters/setters",
            "Using only static methods",
          ],
          correctIndex: 2,
          explanation: "Encapsulation is the practice of hiding an object's internal data (using private) and exposing only controlled access through public getters and setters.",
        },
        {
          id: "java-m3-q5",
          question: "What annotation should you use when overriding a parent class method?",
          options: ["@Inherited", "@Override", "@Super", "@Extends"],
          correctIndex: 1,
          explanation: "@Override tells the compiler you're intentionally overriding a parent method. If the method signature doesn't match the parent, the compiler will catch the error.",
        },
      ],
    },
    {
      id: "module-4",
      number: 4,
      title: "Arrays, Strings & Collections",
      subtitle: "Working with data structures built into Java",
      icon: "📦",
      estimatedTime: "55 min",
      topics: ["Arrays", "2D Arrays", "String Methods", "StringBuilder", "ArrayList", "HashMap"],
      content: [
        {
          type: "heading",
          title: "Arrays",
        },
        {
          type: "code",
          language: "java",
          code: `public class Arrays {
    public static void main(String[] args) {
        // Declaration and initialization
        int[] scores = {95, 87, 76, 92, 88};
        String[] names = new String[3]; // array of 3 nulls

        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";

        System.out.println(scores.length);  // 5 (number of elements)
        System.out.println(scores[0]);      // 95 (first element)
        System.out.println(scores[4]);      // 88 (last element)

        // Iterating with for loop
        for (int i = 0; i < scores.length; i++) {
            System.out.print(scores[i] + " ");
        }

        // Enhanced for-each loop
        for (int score : scores) {
            System.out.print(score + " ");
        }

        // Finding max
        int max = scores[0];
        for (int score : scores) {
            if (score > max) max = score;
        }
        System.out.println("Max: " + max); // Max: 95
    }
}`,
        },
        {
          type: "heading",
          title: "2D Arrays",
        },
        {
          type: "code",
          language: "java",
          code: `public class TwoDArrays {
    public static void main(String[] args) {
        // 3x3 grid
        int[][] grid = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println(grid[1][2]); // Row 1, Col 2 → 6

        // Nested loop to print all elements
        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[row].length; col++) {
                System.out.print(grid[row][col] + " ");
            }
            System.out.println();
        }
        // 1 2 3
        // 4 5 6
        // 7 8 9
    }
}`,
        },
        {
          type: "heading",
          title: "String Methods",
        },
        {
          type: "code",
          language: "java",
          code: `public class StringMethods {
    public static void main(String[] args) {
        String s = "Hello, World!";

        System.out.println(s.length());           // 13
        System.out.println(s.toUpperCase());      // HELLO, WORLD!
        System.out.println(s.toLowerCase());      // hello, world!
        System.out.println(s.contains("World")); // true
        System.out.println(s.replace("World", "Java")); // Hello, Java!
        System.out.println(s.substring(7));      // World!
        System.out.println(s.substring(7, 12));  // World
        System.out.println(s.indexOf("o"));      // 4
        System.out.println(s.startsWith("Hello")); // true
        System.out.println(s.trim());             // removes leading/trailing spaces

        // Splitting
        String csv = "Alice,Bob,Charlie";
        String[] parts = csv.split(",");
        System.out.println(parts[1]); // Bob

        // String comparison — always use .equals() not ==
        String a = "hello";
        String b = "hello";
        System.out.println(a.equals(b));           // true
        System.out.println(a.equalsIgnoreCase("HELLO")); // true
    }
}`,
        },
        {
          type: "heading",
          title: "ArrayList — Dynamic Lists",
        },
        {
          type: "code",
          language: "java",
          code: `import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add(1, "Blueberry"); // insert at index 1

        System.out.println(fruits);        // [Apple, Blueberry, Banana, Cherry]
        System.out.println(fruits.size()); // 4
        System.out.println(fruits.get(2)); // Banana

        // Removing elements
        fruits.remove("Banana");   // by value
        fruits.remove(0);          // by index → removes Apple

        // Checking
        System.out.println(fruits.contains("Cherry")); // true

        // Iterating
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Sorting
        java.util.Collections.sort(fruits);
    }
}`,
        },
        {
          type: "heading",
          title: "HashMap — Key-Value Pairs",
        },
        {
          type: "code",
          language: "java",
          code: `import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();

        // Adding entries
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);

        System.out.println(scores.get("Alice"));      // 95
        System.out.println(scores.containsKey("Bob")); // true
        System.out.println(scores.size());             // 3

        // Update a value
        scores.put("Alice", 98);  // overwrites existing

        // Remove an entry
        scores.remove("Bob");

        // Iterating over all entries
        for (String name : scores.keySet()) {
            System.out.println(name + ": " + scores.get(name));
        }

        // getOrDefault — safe retrieval
        int score = scores.getOrDefault("David", 0);  // 0 if not found
    }
}`,
        },
        {
          type: "tip",
          text: "Use ArrayList when you need an ordered, resizable list. Use HashMap when you need fast key-based lookup. Never use == to compare Strings — always use .equals() because == checks object identity, not content.",
        },
      ],
      quiz: [
        {
          id: "java-m4-q1",
          question: "How do you get the number of elements in a Java array called `arr`?",
          options: ["arr.size()", "arr.length", "arr.count()", "len(arr)"],
          correctIndex: 1,
          explanation: "Arrays use `.length` (a field, not a method). Note: ArrayList uses `.size()` (a method). Don't confuse the two!",
        },
        {
          id: "java-m4-q2",
          question: "What is the correct way to compare two String values in Java?",
          options: ['str1 == str2', 'str1.equals(str2)', 'str1.compare(str2)', 'str1 === str2'],
          correctIndex: 1,
          explanation: "Use .equals() to compare String contents. The == operator checks if two references point to the same object in memory, not whether the strings have the same characters.",
        },
        {
          id: "java-m4-q3",
          question: "What does `ArrayList.get(0)` return?",
          options: ["The size", "The last element", "The first element", "null"],
          correctIndex: 2,
          explanation: "ArrayList is 0-indexed. get(0) retrieves the first element. get(size()-1) retrieves the last.",
        },
        {
          id: "java-m4-q4",
          question: "Which data structure is best for storing key-value pairs (e.g., name → score)?",
          options: ["int[]", "ArrayList", "HashMap", "String"],
          correctIndex: 2,
          explanation: "HashMap stores key-value pairs and provides O(1) average-time lookup by key using put(key, value) and get(key).",
        },
        {
          id: "java-m4-q5",
          question: "What is the index of the last element in an array of size 8?",
          options: ["8", "7", "0", "9"],
          correctIndex: 1,
          explanation: "Arrays are 0-indexed. An array of size 8 has valid indices 0–7. The last index is always size - 1.",
        },
      ],
    },
    {
      id: "module-5",
      number: 5,
      title: "Exceptions, Interfaces & Abstract Classes",
      subtitle: "Error handling, contracts, and abstraction in Java",
      icon: "🛡️",
      estimatedTime: "55 min",
      topics: ["try / catch / finally", "Common Exceptions", "throw & throws", "Interfaces", "Abstract Classes"],
      content: [
        {
          type: "heading",
          title: "try / catch / finally",
        },
        {
          type: "paragraph",
          text: "Exception handling allows your program to recover from errors gracefully instead of crashing. Java uses try, catch, and finally blocks.",
        },
        {
          type: "code",
          language: "java",
          code: `public class ExceptionHandling {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Multiple catch blocks
        try {
            String s = null;
            System.out.println(s.length()); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Null reference: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        } finally {
            System.out.println("This ALWAYS runs (cleanup here)");
        }

        // try-with-resources (auto-closes)
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
        }
    }
}`,
        },
        {
          type: "list",
          title: "Common Java Exceptions:",
          items: [
            "NullPointerException — calling a method on a null object reference",
            "ArrayIndexOutOfBoundsException — accessing an index outside array bounds",
            "ArithmeticException — division by zero",
            "NumberFormatException — parsing invalid string as number (Integer.parseInt(\"abc\"))",
            "ClassCastException — illegal type casting",
            "StackOverflowError — infinite recursion depth exceeded",
          ],
        },
        {
          type: "heading",
          title: "throw and throws",
        },
        {
          type: "code",
          language: "java",
          code: `// Custom exception
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // 'throws' declares this method might throw the exception
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Cannot withdraw $" + amount + " from $" + balance
            );
        }
        balance -= amount;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(100.0);
        try {
            acc.withdraw(200.0);  // will throw
        } catch (InsufficientFundsException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,
        },
        {
          type: "heading",
          title: "Interfaces",
        },
        {
          type: "code",
          language: "java",
          code: `// Interface: defines a contract (what, not how)
public interface Shape {
    double getArea();       // abstract — no body
    double getPerimeter();  // abstract — no body

    // Default method (Java 8+) — has a body
    default void display() {
        System.out.println("Area: " + getArea() + ", Perimeter: " + getPerimeter());
    }
}

// Class implements the interface
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
}

public class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() { return width * height; }

    @Override
    public double getPerimeter() { return 2 * (width + height); }
}

// Usage
Shape circle = new Circle(5);
Shape rect = new Rectangle(4, 6);
circle.display();  // Area: 78.54, Perimeter: 31.42
rect.display();    // Area: 24.0, Perimeter: 20.0`,
        },
        {
          type: "heading",
          title: "Abstract Classes",
        },
        {
          type: "code",
          language: "java",
          code: `// Abstract class: can have both abstract and concrete methods
// Cannot be instantiated directly
public abstract class Vehicle {
    protected String brand;
    protected int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Abstract method — subclass MUST implement
    public abstract void fuelType();

    // Concrete method — inherited as-is
    public void startEngine() {
        System.out.println(brand + " engine started.");
    }

    public String getInfo() {
        return year + " " + brand;
    }
}

public class ElectricCar extends Vehicle {
    public ElectricCar(String brand, int year) {
        super(brand, year);
    }

    @Override
    public void fuelType() {
        System.out.println(brand + " uses electricity.");
    }
}

public class GasCar extends Vehicle {
    public GasCar(String brand, int year) {
        super(brand, year);
    }

    @Override
    public void fuelType() {
        System.out.println(brand + " uses gasoline.");
    }
}

// Vehicle v = new Vehicle(...); // ERROR — cannot instantiate abstract class
ElectricCar tesla = new ElectricCar("Tesla", 2024);
tesla.fuelType();    // Tesla uses electricity.
tesla.startEngine(); // Tesla engine started.`,
        },
        {
          type: "tip",
          text: "Use an interface when you want to define a capability contract (multiple classes can implement it). Use an abstract class when you want to share common code among related classes but also enforce that subclasses implement certain methods.",
        },
      ],
      quiz: [
        {
          id: "java-m5-q1",
          question: "What does the `finally` block in Java do?",
          options: [
            "Only runs when an exception is caught",
            "Only runs when no exception occurs",
            "Always runs regardless of whether an exception occurred",
            "Replaces the catch block",
          ],
          correctIndex: 2,
          explanation: "The finally block always executes — whether an exception was thrown and caught, thrown and not caught, or no exception occurred. It's used for cleanup (closing files, connections).",
        },
        {
          id: "java-m5-q2",
          question: "Which exception is thrown when you divide by zero in Java?",
          options: ["NullPointerException", "DivisionException", "ArithmeticException", "IllegalArgumentException"],
          correctIndex: 2,
          explanation: "Java throws ArithmeticException: / by zero when you perform integer division by zero. Note: floating-point division by zero returns Infinity, not an exception.",
        },
        {
          id: "java-m5-q3",
          question: "What keyword does a class use to implement an interface?",
          options: ["extends", "uses", "implements", "inherits"],
          correctIndex: 2,
          explanation: "A class uses `implements` to fulfill an interface contract. A class can implement multiple interfaces (unlike inheritance with extends, which is single).",
        },
        {
          id: "java-m5-q4",
          question: "What is an abstract class?",
          options: [
            "A class with only private methods",
            "A class that cannot have any methods",
            "A class that cannot be instantiated and may have abstract methods",
            "A class defined inside another class",
          ],
          correctIndex: 2,
          explanation: "An abstract class cannot be instantiated with `new`. It may have abstract methods (no body) that subclasses must implement, and concrete methods that subclasses inherit.",
        },
        {
          id: "java-m5-q5",
          question: "What does `throw new IllegalArgumentException(\"message\")` do?",
          options: [
            "Catches an exception",
            "Declares that a method might throw an exception",
            "Manually creates and throws an exception",
            "Creates a new class",
          ],
          correctIndex: 2,
          explanation: "The `throw` keyword manually throws an exception object. This stops normal execution and transfers control to the nearest matching catch block.",
        },
      ],
    },
  ],
};
