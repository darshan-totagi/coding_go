import { CourseData } from "../courseTypes";

export const C_COURSE: CourseData = {
  id: "c-programming",
  title: "C Programming",
  level: "Beginner",
  description: "Learn C programming from scratch — variables, control flow, functions, pointers, memory and file I/O.",
  icon: "⚙️",
  color: "cyan",
  totalHours: "~5 Hours",
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "C Fundamentals",
      subtitle: "Variables, data types, input/output and operators",
      icon: "⚙️",
      estimatedTime: "55 min",
      topics: ["What is C?", "First Program", "Variables", "Data Types", "printf()", "scanf()", "Arithmetic Operators", "Type Conversion"],
      content: [
        {
          type: "heading",
          title: "What is C?",
        },
        {
          type: "paragraph",
          text: "C is a general-purpose, procedural programming language created by Dennis Ritchie at Bell Labs in 1972. It is one of the most influential languages ever made — Unix, Linux, and many programming languages (including Python and Java) are written in or inspired by C. C gives you fine-grained control over memory, making it ideal for systems programming, embedded systems, and performance-critical applications.",
        },
        {
          type: "list",
          title: "Key characteristics:",
          items: [
            "Compiled language — source code is compiled directly to machine code",
            "Procedural — programs are a sequence of functions",
            "Manual memory management — you control allocation and deallocation",
            "Close to hardware — direct memory access via pointers",
            "Portable — runs on virtually every platform",
          ],
        },
        {
          type: "heading",
          title: "Your First C Program",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>   // include Standard Input/Output library

int main() {          // entry point of every C program
    printf("Hello, World!\\n");  // print to console
    return 0;         // 0 means success
}

// Compilation (in terminal):
// gcc hello.c -o hello
// ./hello`,
        },
        {
          type: "heading",
          title: "Variables and Data Types",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // Integer types
    int age = 25;              // typically 4 bytes
    short small = 100;         // 2 bytes
    long big = 1234567890L;    // 4 or 8 bytes
    long long huge = 9876543210LL;  // 8 bytes

    // Floating point
    float price = 9.99f;       // 4 bytes (7 significant digits)
    double pi = 3.14159265358; // 8 bytes (15 significant digits)

    // Character
    char grade = 'A';          // 1 byte (stores ASCII value)
    char letter = 65;          // same as 'A' (ASCII 65)

    // Unsigned (no negative values, double positive range)
    unsigned int count = 4294967295U;

    // Constants
    const double GRAVITY = 9.81;

    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    printf("Pi: %lf\\n", pi);

    return 0;
}`,
        },
        {
          type: "heading",
          title: "printf() — Formatted Output",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int x = 42;
    double y = 3.14159;
    char c = 'Z';
    char name[] = "Alice";

    // Format specifiers:
    printf("%d\\n", x);        // integer
    printf("%f\\n", y);        // float/double (6 decimal places)
    printf("%.2f\\n", y);      // float with 2 decimal places → 3.14
    printf("%e\\n", y);        // scientific notation → 3.141590e+00
    printf("%c\\n", c);        // character
    printf("%s\\n", name);     // string
    printf("%p\\n", &x);       // pointer/address

    // Width and alignment
    printf("%10d\\n", x);      // right-align in 10-char field
    printf("%-10d|\\n", x);    // left-align
    printf("%05d\\n", x);      // zero-padded: 00042

    return 0;
}`,
        },
        {
          type: "heading",
          title: "scanf() — User Input",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int age;
    double salary;
    char grade;
    char name[50];  // character array for string input

    printf("Enter your age: ");
    scanf("%d", &age);      // & = address-of operator (REQUIRED)

    printf("Enter your salary: ");
    scanf("%lf", &salary);  // use %lf for double with scanf

    printf("Enter your grade: ");
    scanf(" %c", &grade);   // space before %c skips whitespace

    printf("Enter your name: ");
    scanf("%49s", name);    // reads one word (stops at space)

    printf("Name: %s, Age: %d, Salary: %.2f, Grade: %c\\n",
           name, age, salary, grade);

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Operators and Type Conversion",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("%d\\n", a + b);   // 13
    printf("%d\\n", a - b);   // 7
    printf("%d\\n", a * b);   // 30
    printf("%d\\n", a / b);   // 3 (integer division!)
    printf("%d\\n", a % b);   // 1 (modulo/remainder)

    // Increment / decrement
    int x = 5;
    printf("%d\\n", x++);    // 5 (post-increment: use then increment)
    printf("%d\\n", x);      // 6
    printf("%d\\n", ++x);    // 7 (pre-increment: increment then use)

    // Compound assignment
    x += 10;  // x = x + 10
    x *= 2;   // x = x * 2

    // Implicit type conversion (widening)
    int i = 5;
    double d = i;   // int promoted to double automatically

    // Explicit type conversion (casting)
    double result = (double)a / b;  // force decimal division
    printf("%.4f\\n", result);       // 3.3333

    int truncated = (int)3.99;      // 3 (drops decimal)
    printf("%d\\n", truncated);

    return 0;
}`,
        },
        {
          type: "tip",
          text: "Always use & before variable names in scanf() (except for arrays/strings). Forgetting & is one of the most common C bugs and causes undefined behavior or crashes. Use %lf (not %f) for double in scanf.",
        },
      ],
      quiz: [
        {
          id: "c-m1-q1",
          question: "What is the correct format specifier for printing an `int` with printf()?",
          options: ["%f", "%lf", "%s", "%d"],
          correctIndex: 3,
          explanation: "%d is the format specifier for integers (int) in printf. %f is for float, %lf for double, %c for char, %s for strings.",
        },
        {
          id: "c-m1-q2",
          question: "Which header file must be included to use printf() and scanf()?",
          options: ["<math.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
          correctIndex: 2,
          explanation: "<stdio.h> (Standard Input/Output) must be included for printf, scanf, and other I/O functions. It stands for 'standard I/O header'.",
        },
        {
          id: "c-m1-q3",
          question: "Why must you use & before a variable name in scanf()?",
          options: [
            "It's a formatting requirement",
            "It doubles the value",
            "It passes the memory address so scanf can write the value there",
            "It converts the type to string",
          ],
          correctIndex: 2,
          explanation: "& is the address-of operator. scanf needs the memory address (&var) to write the input value into the variable. Without &, you pass the value, not the address — causing undefined behavior.",
        },
        {
          id: "c-m1-q4",
          question: "What is the result of `int result = 7 / 2;` in C?",
          options: ["3.5", "3", "4", "3.0"],
          correctIndex: 1,
          explanation: "When both operands are integers, C performs integer division and truncates the result. 7 / 2 = 3 (not 3.5). To get 3.5, cast one operand: (double)7 / 2.",
        },
        {
          id: "c-m1-q5",
          question: "What does the `const` keyword do when applied to a variable?",
          options: [
            "Makes it global",
            "Makes it unchangeable after initialization",
            "Makes it a pointer",
            "Allocates it on the heap",
          ],
          correctIndex: 1,
          explanation: "const makes a variable a constant — its value cannot be changed after initialization. Attempting to modify it causes a compilation error.",
        },
      ],
    },
    {
      id: "module-2",
      number: 2,
      title: "Control Flow",
      subtitle: "if/else, switch, for, while and do-while loops",
      icon: "🔀",
      estimatedTime: "50 min",
      topics: ["if / else if / else", "switch / case", "for loop", "while loop", "do-while", "break", "continue"],
      content: [
        {
          type: "heading",
          title: "if / else if / else",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int score = 78;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }
    // Output: Grade: C

    // Ternary operator (shorthand if-else)
    int max = (score > 75) ? score : 75;
    printf("Max: %d\\n", max);  // Max: 78

    // Logical operators
    int age = 20;
    int hasLicense = 1; // 1 = true in C
    if (age >= 18 && hasLicense) {
        printf("Can drive\\n");
    }

    return 0;
}`,
        },
        {
          type: "heading",
          title: "switch / case",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
        case 5:
            printf("Thursday or Friday\\n"); // fall-through to group cases
            break;
        case 6:
        case 7:
            printf("Weekend\\n");
            break;
        default:
            printf("Invalid day\\n");
    }

    // switch works with int and char (NOT float, double, or strings)
    char grade = 'B';
    switch (grade) {
        case 'A': printf("Excellent!\\n"); break;
        case 'B': printf("Good\\n"); break;
        case 'C': printf("Average\\n"); break;
        default:  printf("Below average\\n");
    }

    return 0;
}`,
        },
        {
          type: "heading",
          title: "for Loop",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // Basic for loop
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);   // 1 2 3 4 5
    }
    printf("\\n");

    // Counting down
    for (int i = 10; i >= 1; i--) {
        printf("%d ", i);
    }
    printf("\\n");

    // Sum of 1 to 100
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("Sum = %d\\n", sum);  // Sum = 5050

    // Nested loops — print multiplication table
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%3d", i * j);
        }
        printf("\\n");
    }
    // Output:
    //   1  2  3
    //   2  4  6
    //   3  6  9

    return 0;
}`,
        },
        {
          type: "heading",
          title: "while and do-while Loops",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // while loop: check condition FIRST
    int n = 1;
    while (n <= 5) {
        printf("%d ", n);
        n++;
    }
    printf("\\n");  // 1 2 3 4 5

    // Reading until valid input
    int input;
    printf("Enter a positive number: ");
    scanf("%d", &input);
    while (input <= 0) {
        printf("Invalid! Try again: ");
        scanf("%d", &input);
    }

    // do-while: execute FIRST, check condition after
    int count = 0;
    do {
        printf("count = %d\\n", count);
        count++;
    } while (count < 3);
    // Runs even if count starts at 3!

    return 0;
}`,
        },
        {
          type: "heading",
          title: "break and continue",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // break: exit the loop immediately
    for (int i = 1; i <= 10; i++) {
        if (i == 5) break;
        printf("%d ", i);  // 1 2 3 4
    }
    printf("\\n");

    // continue: skip rest of current iteration
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;  // skip even numbers
        printf("%d ", i);           // 1 3 5 7 9
    }
    printf("\\n");

    // Search with break
    int target = 7;
    int found = 0;
    for (int i = 1; i <= 20; i++) {
        if (i == target) {
            found = 1;
            printf("Found %d!\\n", target);
            break;
        }
    }
    if (!found) printf("Not found.\\n");

    return 0;
}`,
        },
        {
          type: "tip",
          text: "In C, any non-zero integer value is considered TRUE, and 0 is FALSE. C does not have a built-in bool type (before C99). In C99 and later, include <stdbool.h> to use bool, true, and false.",
        },
      ],
      quiz: [
        {
          id: "c-m2-q1",
          question: "In C, what integer value represents FALSE in a boolean context?",
          options: ["-1", "1", "0", "NULL"],
          correctIndex: 2,
          explanation: "In C, 0 is FALSE and any non-zero value is TRUE. There's no native bool type in C89/C90, though C99 added <stdbool.h> with true (1) and false (0).",
        },
        {
          id: "c-m2-q2",
          question: "What types can be used in a C switch statement?",
          options: [
            "int and char only",
            "float, double, int, and char",
            "Integers (int, char) and enumerated types",
            "Strings and integers",
          ],
          correctIndex: 2,
          explanation: "C switch works with integer types (int, char, long, etc.) and enums. Float, double, and strings (char*) are NOT allowed in switch expressions.",
        },
        {
          id: "c-m2-q3",
          question: "What is a key difference between while and do-while loops?",
          options: [
            "while is faster than do-while",
            "do-while always executes the body at least once",
            "while loops can use break, do-while cannot",
            "do-while is used only for arrays",
          ],
          correctIndex: 1,
          explanation: "A do-while loop executes its body first, then checks the condition. This guarantees at least one execution. A while loop checks the condition first and may never execute the body.",
        },
        {
          id: "c-m2-q4",
          question: "What does `continue` do in a for loop?",
          options: [
            "Terminates the loop",
            "Skips the rest of the current iteration and goes to the next",
            "Restarts the loop from i=0",
            "Exits the program",
          ],
          correctIndex: 1,
          explanation: "continue skips the remaining code in the current iteration and jumps to the loop's increment expression (i++ in for loops), then re-evaluates the condition.",
        },
        {
          id: "c-m2-q5",
          question: "What happens if you forget to include `break` in a switch case?",
          options: [
            "Compilation error",
            "The program crashes",
            "Execution falls through to the next case",
            "The switch exits normally",
          ],
          correctIndex: 2,
          explanation: "Without break, C's switch statement 'falls through' — it continues executing the code in the next case even if it doesn't match. This is sometimes used intentionally but is often a bug.",
        },
      ],
    },
    {
      id: "module-3",
      number: 3,
      title: "Functions and Arrays",
      subtitle: "Defining functions, recursion, and working with arrays",
      icon: "🔧",
      estimatedTime: "60 min",
      topics: ["Defining Functions", "Parameters & Return Values", "Recursion", "1D Arrays", "2D Arrays", "Passing Arrays to Functions"],
      content: [
        {
          type: "heading",
          title: "Defining and Calling Functions",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

// Function declaration (prototype) — before main
int add(int a, int b);
void greet(char name[]);
double power(double base, int exp);

int main() {
    int result = add(5, 3);
    printf("5 + 3 = %d\\n", result);  // 5 + 3 = 8

    greet("Alice");  // Hello, Alice!

    printf("2^10 = %.0f\\n", power(2.0, 10));  // 2^10 = 1024

    return 0;
}

// Function definitions (after main, or in a separate file)
int add(int a, int b) {
    return a + b;
}

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
    // void functions don't need return
}

double power(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}`,
        },
        {
          type: "heading",
          title: "Recursion",
        },
        {
          type: "paragraph",
          text: "A recursive function calls itself. Every recursive function must have a base case (stopping condition) to prevent infinite recursion.",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

// Factorial: n! = n * (n-1) * ... * 1
int factorial(int n) {
    if (n <= 1) return 1;    // base case
    return n * factorial(n - 1);  // recursive case
}

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)
int fibonacci(int n) {
    if (n <= 0) return 0;    // base cases
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of digits: e.g., 123 → 1+2+3 = 6
int sumDigits(int n) {
    if (n < 10) return n;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    printf("5! = %d\\n", factorial(5));      // 120
    printf("fib(8) = %d\\n", fibonacci(8)); // 21
    printf("sum(123) = %d\\n", sumDigits(123)); // 6
    return 0;
}`,
        },
        {
          type: "heading",
          title: "1D Arrays",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // Declaration
    int scores[5];                        // uninitialized
    int primes[] = {2, 3, 5, 7, 11};     // size inferred (5)
    double temps[3] = {36.6, 37.1, 36.8};
    int zeros[10] = {0};                  // all elements = 0

    // Accessing elements (0-indexed)
    printf("%d\\n", primes[0]);  // 2
    printf("%d\\n", primes[4]);  // 11

    primes[2] = 99;              // modify element

    // Array length
    int len = sizeof(primes) / sizeof(primes[0]);  // 5
    printf("Length: %d\\n", len);

    // Traversal
    for (int i = 0; i < 5; i++) {
        printf("%d ", primes[i]);
    }
    printf("\\n");

    // Find max element
    int max = scores[0];
    int n = sizeof(scores) / sizeof(scores[0]);
    for (int i = 1; i < n; i++) {
        if (scores[i] > max) max = scores[i];
    }

    return 0;
}`,
        },
        {
          type: "heading",
          title: "2D Arrays",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // 3 rows, 4 columns
    int matrix[3][4] = {
        {1,  2,  3,  4},
        {5,  6,  7,  8},
        {9, 10, 11, 12}
    };

    printf("%d\\n", matrix[1][2]);  // Row 1, Col 2 → 7

    // Print entire matrix
    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%3d", matrix[row][col]);
        }
        printf("\\n");
    }

    // Sum all elements
    int total = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            total += matrix[i][j];
        }
    }
    printf("Total: %d\\n", total);  // 78

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Passing Arrays to Functions",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

// Array is passed as a pointer — changes affect original!
void doubleAll(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // modifies the original array
    }
}

int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

double average(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) sum += arr[i];
    return (double)sum / size;
}

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9, 2, 6};
    int n = sizeof(nums) / sizeof(nums[0]);

    printf("Max: %d\\n", findMax(nums, n));     // 9
    printf("Avg: %.2f\\n", average(nums, n));   // 3.88

    doubleAll(nums, n);
    printf("First after doubling: %d\\n", nums[0]); // 6

    return 0;
}`,
        },
        {
          type: "tip",
          text: "In C, arrays decay to pointers when passed to functions — changes inside the function affect the original array. To prevent modifications, use the `const` keyword: `void print(const int arr[], int size)`. You must always pass the array size separately since sizeof() inside the function returns the pointer size, not the array size.",
        },
      ],
      quiz: [
        {
          id: "c-m3-q1",
          question: "What is a function prototype (declaration) in C?",
          options: [
            "The first call to a function",
            "A declaration before main that tells the compiler the function's name, return type and parameters",
            "A function defined inside another function",
            "A function with no return value",
          ],
          correctIndex: 1,
          explanation: "A prototype (forward declaration) lets you define a function after main while calling it in main. It tells the compiler the function signature so it can type-check the call.",
        },
        {
          id: "c-m3-q2",
          question: "What is mandatory in every recursive function to prevent infinite recursion?",
          options: [
            "A return type of int",
            "A global variable",
            "A base case (stopping condition)",
            "A for loop",
          ],
          correctIndex: 2,
          explanation: "Without a base case, a recursive function calls itself indefinitely, causing a stack overflow. The base case is the condition under which the function returns without making another recursive call.",
        },
        {
          id: "c-m3-q3",
          question: "How do you calculate the number of elements in a C array `int arr[] = {1,2,3,4,5}`?",
          options: [
            "arr.length",
            "len(arr)",
            "sizeof(arr) / sizeof(arr[0])",
            "arr.size()",
          ],
          correctIndex: 2,
          explanation: "C arrays don't have a built-in length property. Use sizeof(arr)/sizeof(arr[0]) to get the count. Note: this only works in the same scope where the array is declared, not inside functions.",
        },
        {
          id: "c-m3-q4",
          question: "What is the index of the first element in a C array?",
          options: ["1", "-1", "0", "Depends on declaration"],
          correctIndex: 2,
          explanation: "All C arrays are 0-indexed. The first element is at index 0, and the last is at index (size-1). Accessing arr[-1] or arr[size] causes undefined behavior.",
        },
        {
          id: "c-m3-q5",
          question: "When you pass an array to a function and modify it inside, what happens to the original array?",
          options: [
            "A copy is modified, original unchanged",
            "The original array is modified",
            "The function gets only the first element",
            "A compilation error occurs",
          ],
          correctIndex: 1,
          explanation: "In C, arrays are passed as pointers to their first element. Changes inside the function affect the original array. To prevent this, mark the parameter as const.",
        },
      ],
    },
    {
      id: "module-4",
      number: 4,
      title: "Pointers and Strings",
      subtitle: "Memory addresses, pointer arithmetic, and C strings",
      icon: "🎯",
      estimatedTime: "65 min",
      topics: ["What are Pointers?", "Declaring Pointers", "Dereferencing", "Pointer Arithmetic", "Pointers & Arrays", "C Strings", "String Functions"],
      content: [
        {
          type: "heading",
          title: "What are Pointers?",
        },
        {
          type: "paragraph",
          text: "A pointer is a variable that stores the memory address of another variable. Instead of holding a value directly, it holds the location where a value is stored. Pointers are one of the most powerful (and tricky) features of C.",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int x = 42;

    int *p;       // declare a pointer to int (the * is part of the type)
    p = &x;       // assign the ADDRESS of x to p  (&= address-of operator)

    printf("Value of x: %d\\n", x);     // 42
    printf("Address of x: %p\\n", &x);  // e.g., 0x7ffee4b3c
    printf("p holds: %p\\n", p);        // same address as &x
    printf("*p (value at p): %d\\n", *p); // 42  (*= dereference operator)

    // Modifying x through the pointer
    *p = 100;
    printf("x is now: %d\\n", x);  // 100 — x changed!

    // Pointer to pointer
    int **pp = &p;   // pp holds the address of p
    printf("%d\\n", **pp);  // 100 (dereference twice)

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Pointer Arithmetic",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    int nums[] = {10, 20, 30, 40, 50};
    int *p = nums;   // p points to first element (same as &nums[0])

    printf("%d\\n", *p);      // 10 (first element)
    printf("%d\\n", *(p+1));  // 20 (second element)
    printf("%d\\n", *(p+2));  // 30

    p++;  // advance pointer by one int (4 bytes on 32-bit)
    printf("%d\\n", *p);  // 20

    // Pointer arithmetic steps by sizeof(type)
    // If int is 4 bytes: p+1 jumps 4 bytes ahead

    // Iterating array with pointer
    int *ptr = nums;
    int n = 5;
    while (ptr < nums + n) {
        printf("%d ", *ptr);
        ptr++;
    }
    printf("\\n");  // 10 20 30 40 50

    // Difference between two pointers
    int *start = &nums[1];
    int *end   = &nums[4];
    printf("Elements between: %ld\\n", end - start);  // 3

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Strings in C",
        },
        {
          type: "paragraph",
          text: "C doesn't have a built-in string type. Strings are arrays of char terminated by a null character '\\0'. This null terminator marks the end of the string.",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // String literal — stored as char array with '\\0' at end
    char name[] = "Alice";   // {'A','l','i','c','e','\\0'}
    char city[20] = "Delhi"; // fixed size buffer

    // String pointer — points to a string literal (read-only!)
    char *msg = "Hello";     // msg is a pointer; cannot modify chars

    printf("%s\\n", name);   // Alice
    printf("%c\\n", name[0]); // A (access individual chars)

    // Manual string
    char word[6];
    word[0] = 'H';
    word[1] = 'i';
    word[2] = '\\0';  // MUST have null terminator!
    printf("%s\\n", word);  // Hi

    // strlen counts characters BEFORE \\0
    // "Alice" has 5 chars; sizeof(name) is 6 (includes \\0)

    // Reading a string
    char input[100];
    printf("Enter name: ");
    scanf("%99s", input);    // stops at whitespace
    // For full line: fgets(input, 100, stdin);

    return 0;
}`,
        },
        {
          type: "heading",
          title: "String Functions — <string.h>",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>
#include <string.h>   // for string functions

int main() {
    char s1[50] = "Hello";
    char s2[] = "World";
    char s3[100];

    // strlen — length (not counting \\0)
    printf("Length: %zu\\n", strlen(s1));  // 5

    // strcpy — copy one string to another
    strcpy(s3, s1);       // s3 = "Hello"
    printf("%s\\n", s3);   // Hello

    // strcat — concatenate (append) strings
    strcat(s1, " ");       // s1 = "Hello "
    strcat(s1, s2);        // s1 = "Hello World"
    printf("%s\\n", s1);   // Hello World

    // strcmp — compare strings (0 if equal)
    printf("%d\\n", strcmp("abc", "abc")); // 0
    printf("%d\\n", strcmp("abc", "abd")); // negative (a<b)
    printf("%d\\n", strcmp("abd", "abc")); // positive

    // strstr — find substring
    char *found = strstr(s1, "World");
    if (found) printf("Found at: %s\\n", found); // World

    // Safe versions (prevent buffer overflow)
    strncpy(s3, s2, 49);  // copy at most 49 chars
    strncat(s1, s2, 20);  // append at most 20 chars

    return 0;
}`,
        },
        {
          type: "tip",
          text: "Never use strcpy or strcat with untrusted input — they can cause buffer overflows (a major security vulnerability). Always use the safer strncpy and strncat, specifying the buffer size. Or better yet, use snprintf() for formatting strings safely.",
        },
      ],
      quiz: [
        {
          id: "c-m4-q1",
          question: "What does the & operator do when applied to a variable?",
          options: [
            "Doubles the value",
            "Returns the value at that address",
            "Returns the memory address of the variable",
            "Declares a reference",
          ],
          correctIndex: 2,
          explanation: "& is the address-of operator. &x returns the memory address where variable x is stored. This is used when assigning to a pointer or passing to scanf.",
        },
        {
          id: "c-m4-q2",
          question: "What does the * operator do when applied to a pointer variable?",
          options: [
            "Multiplies the pointer",
            "Declares a new pointer",
            "Returns the memory address",
            "Dereferences the pointer — gets the value at that address",
          ],
          correctIndex: 3,
          explanation: "When used on an existing pointer, * is the dereference operator. *p reads or writes the value stored at the memory address held in p.",
        },
        {
          id: "c-m4-q3",
          question: "How does C store strings?",
          options: [
            "As a special String object",
            "As a linked list of characters",
            "As a char array terminated by '\\0'",
            "As a sequence of Unicode code points",
          ],
          correctIndex: 2,
          explanation: "C strings are arrays of char with a null terminator ('\\0') at the end. Functions like printf and strlen rely on finding this '\\0' to know where the string ends.",
        },
        {
          id: "c-m4-q4",
          question: "What does `strlen(\"Hello\")` return?",
          options: ["6 (including \\0)", "5 (characters only)", "4", "0"],
          correctIndex: 1,
          explanation: "strlen returns the number of characters BEFORE the null terminator. 'Hello' has 5 characters (H,e,l,l,o), so strlen returns 5. sizeof would return 6 (includes '\\0').",
        },
        {
          id: "c-m4-q5",
          question: "Which function safely compares two C strings for equality?",
          options: ["str1 == str2", "strcmp(str1, str2) == 0", "strequal(str1, str2)", "compare(str1, str2)"],
          correctIndex: 1,
          explanation: "strcmp returns 0 if the strings are equal. Using == compares pointer addresses (not contents), which gives wrong results for string comparison in C.",
        },
      ],
    },
    {
      id: "module-5",
      number: 5,
      title: "Structures, Memory & File I/O",
      subtitle: "structs, dynamic memory allocation, and file operations",
      icon: "💾",
      estimatedTime: "65 min",
      topics: ["Structures (struct)", "Arrays of Structs", "malloc / calloc / free", "File I/O", "fopen / fclose", "Common C Pitfalls"],
      content: [
        {
          type: "heading",
          title: "Structures (struct)",
        },
        {
          type: "paragraph",
          text: "A struct lets you group related variables of different types together into a single user-defined type — similar to a simple object in OOP languages.",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>
#include <string.h>

// Define a struct type
struct Student {
    char name[50];
    int age;
    double gpa;
    char email[100];
};

// typedef makes usage cleaner
typedef struct {
    double x;
    double y;
} Point;

int main() {
    // Declare and initialize
    struct Student s1;
    strcpy(s1.name, "Alice");
    s1.age = 20;
    s1.gpa = 3.85;

    // Or initialize at declaration
    struct Student s2 = {"Bob", 22, 3.40, "bob@example.com"};

    printf("Name: %s, GPA: %.2f\\n", s1.name, s1.gpa);
    printf("Name: %s, Age: %d\\n", s2.name, s2.age);

    // typedef struct
    Point p1 = {3.0, 4.0};
    printf("Point: (%.1f, %.1f)\\n", p1.x, p1.y);

    // Struct in function
    // Pass by value (copy) or by pointer (efficient for large structs)

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Arrays of Structs & Struct Pointers",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    double gpa;
} Student;

void printStudent(Student *s) {
    // Use -> to access members via pointer (instead of (*s).name)
    printf("%s | Age: %d | GPA: %.2f\\n", s->name, s->age, s->gpa);
}

int main() {
    // Array of structs
    Student class[3] = {
        {"Alice", 20, 3.85},
        {"Bob",   22, 3.40},
        {"Carol", 21, 3.95}
    };

    for (int i = 0; i < 3; i++) {
        printStudent(&class[i]);  // pass pointer to struct
    }

    // Find student with highest GPA
    Student *best = &class[0];
    for (int i = 1; i < 3; i++) {
        if (class[i].gpa > best->gpa) {
            best = &class[i];
        }
    }
    printf("Best: %s (%.2f)\\n", best->name, best->gpa);

    return 0;
}`,
        },
        {
          type: "heading",
          title: "Dynamic Memory Allocation",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>
#include <stdlib.h>   // for malloc, calloc, realloc, free

int main() {
    // malloc: allocate memory (contents undefined/garbage)
    int n = 5;
    int *arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {   // ALWAYS check for NULL (allocation failure)
        printf("Memory allocation failed!\\n");
        return 1;
    }

    for (int i = 0; i < n; i++) arr[i] = i * 10;
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");  // 0 10 20 30 40

    // realloc: resize existing allocation
    arr = (int *)realloc(arr, 10 * sizeof(int));
    // first 5 values preserved, next 5 are uninitialized

    free(arr);  // ALWAYS free when done to prevent memory leak
    arr = NULL; // good practice: set to NULL after free

    // calloc: allocate AND zero-initialize
    double *grades = (double *)calloc(10, sizeof(double));
    // all 10 doubles initialized to 0.0
    free(grades);

    return 0;
}`,
        },
        {
          type: "heading",
          title: "File I/O",
        },
        {
          type: "code",
          language: "c",
          code: `#include <stdio.h>

int main() {
    // ── Writing to a file ──────────────────────────────────────
    FILE *fp = fopen("data.txt", "w");  // "w" = write (creates/overwrites)
    if (fp == NULL) {
        printf("Cannot open file!\\n");
        return 1;
    }

    fprintf(fp, "Alice 3.85\\n");
    fprintf(fp, "Bob 3.40\\n");
    fprintf(fp, "Charlie 3.70\\n");
    fclose(fp);  // ALWAYS close the file

    // ── Reading from a file ─────────────────────────────────────
    fp = fopen("data.txt", "r");  // "r" = read
    if (fp == NULL) {
        printf("File not found!\\n");
        return 1;
    }

    char name[50];
    double gpa;
    while (fscanf(fp, "%s %lf", name, &gpa) == 2) {
        printf("Name: %s, GPA: %.2f\\n", name, gpa);
    }
    fclose(fp);

    // ── Appending ────────────────────────────────────────────────
    fp = fopen("data.txt", "a");  // "a" = append
    fprintf(fp, "Diana 3.95\\n");
    fclose(fp);

    // ── Reading lines ────────────────────────────────────────────
    fp = fopen("data.txt", "r");
    char line[200];
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);  // fgets includes the newline
    }
    fclose(fp);

    return 0;
}`,
        },
        {
          type: "list",
          title: "Common C Pitfalls to avoid:",
          items: [
            "Forgetting & in scanf: scanf(\"%d\", num) instead of scanf(\"%d\", &num) — causes crash",
            "Buffer overflow: writing more bytes than a char array holds",
            "Memory leak: calling malloc without a matching free",
            "Use after free: accessing memory after calling free on it",
            "Null pointer dereference: calling *p when p == NULL",
            "Integer overflow: int x = 2147483647; x++; results in undefined behavior",
            "Off-by-one: array[5] on a size-5 array accesses beyond the end",
            "Missing return from non-void function — undefined behavior",
          ],
        },
        {
          type: "tip",
          text: "Use tools like Valgrind (Linux/Mac) to detect memory leaks and invalid memory accesses. Compile with -Wall -Wextra flags to catch many common mistakes: `gcc -Wall -Wextra program.c -o program`.",
        },
      ],
      quiz: [
        {
          id: "c-m5-q1",
          question: "What does `malloc(n * sizeof(int))` do?",
          options: [
            "Creates n integer variables on the stack",
            "Allocates n bytes on the heap",
            "Allocates memory on the heap for n integers and returns a pointer",
            "Frees n bytes of memory",
          ],
          correctIndex: 2,
          explanation: "malloc allocates the specified number of bytes on the heap and returns a void pointer to the allocated memory. You must cast it to the appropriate type and always check if it returned NULL.",
        },
        {
          id: "c-m5-q2",
          question: "What is a memory leak in C?",
          options: [
            "When a pointer is set to NULL",
            "When allocated memory is never freed, causing it to be unavailable until the program exits",
            "When the stack overflows",
            "When a variable goes out of scope",
          ],
          correctIndex: 1,
          explanation: "A memory leak occurs when dynamically allocated memory (malloc/calloc) is never freed. Over time, this exhausts available memory. Always call free() when you're done with allocated memory.",
        },
        {
          id: "c-m5-q3",
          question: "How do you access a struct member through a pointer `p` to the struct?",
          options: ["p.member", "*p.member", "p->member", "(*p)->member"],
          correctIndex: 2,
          explanation: "The -> operator accesses struct members through a pointer. `p->member` is shorthand for `(*p).member`. It dereferences the pointer and accesses the field in one step.",
        },
        {
          id: "c-m5-q4",
          question: "Which function is used to open a file for reading in C?",
          options: ["openFile()", "read()", "fopen(filename, \"r\")", "open(filename)"],
          correctIndex: 2,
          explanation: "fopen() opens a file and returns a FILE pointer. The second argument is the mode: \"r\" for reading, \"w\" for writing (creates/overwrites), \"a\" for appending.",
        },
        {
          id: "c-m5-q5",
          question: "What should you always do after calling malloc() before using the returned pointer?",
          options: [
            "Cast it to int",
            "Call free() immediately",
            "Check if it is NULL (allocation might have failed)",
            "Call realloc()",
          ],
          correctIndex: 2,
          explanation: "malloc returns NULL if memory allocation fails (e.g., out of memory). Dereferencing a NULL pointer causes a segfault. Always check: if (ptr == NULL) { /* handle error */ }.",
        },
      ],
    },
  ],
};
