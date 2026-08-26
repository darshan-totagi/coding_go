// ============================================================
// Python Basics Course — Full Content & Quiz Data
// ============================================================

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ContentSection {
  type: "heading" | "paragraph" | "code" | "list" | "tip" | "example";
  title?: string;
  text?: string;
  code?: string;
  language?: string;
  items?: string[];
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  estimatedTime: string;
  topics: string[];
  content: ContentSection[];
  quiz: QuizQuestion[];
}

export interface ModuleProgress {
  contentCompleted: boolean;
  quizScores: number[];
  bestScore: number;
  passed: boolean;
}

export interface CourseProgress {
  userId: string;
  startedAt: string;
  modules: Record<string, ModuleProgress>;
  certificateUnlocked: boolean;
  completedAt?: string;
}

// ============================================================
// MODULE 1: Python Fundamentals
// ============================================================
const module1: CourseModule = {
  id: "module-1",
  number: 1,
  title: "Python Fundamentals",
  subtitle: "Start your Python journey from scratch",
  icon: "🐍",
  estimatedTime: "45 min",
  topics: ["What is Python?", "Setup", "Syntax", "Variables", "Data Types", "Input/Output", "Type Conversion", "Operators"],
  content: [
    {
      type: "heading",
      title: "What is Python?",
    },
    {
      type: "paragraph",
      text: "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum in 1991. It is known for its clean, readable syntax that emphasizes code readability and simplicity. Python runs on virtually every platform — Windows, macOS, Linux — and is used in web development, data science, machine learning, automation, and much more.",
    },
    {
      type: "list",
      title: "Why Python?",
      items: [
        "Simple, English-like syntax — great for beginners",
        "Huge ecosystem of libraries (NumPy, Pandas, TensorFlow, Django…)",
        "Interpreted language — run code line-by-line",
        "Strongly typed but dynamically typed",
        "Used by Google, Netflix, Instagram, NASA",
      ],
    },
    {
      type: "heading",
      title: "Installing Python",
    },
    {
      type: "paragraph",
      text: "Download Python from python.org and install it. Once installed, open your terminal and verify:",
    },
    {
      type: "code",
      code: `# Check Python version in terminal
python --version
# Output: Python 3.x.x

# Run the Python REPL (interactive mode)
python`,
      language: "bash",
    },
    {
      type: "heading",
      title: "Your First Python Program",
    },
    {
      type: "code",
      code: `# hello.py
print("Hello, World!")
print("Welcome to Python!")`,
      language: "python",
    },
    {
      type: "paragraph",
      text: "Run it with: python hello.py. The print() function outputs text to the console.",
    },
    {
      type: "heading",
      title: "Python Syntax Rules",
    },
    {
      type: "list",
      items: [
        "Python uses indentation (spaces/tabs) instead of curly braces {} to define blocks",
        "No semicolons needed at the end of lines",
        "Comments start with # (single line) or triple quotes (multi-line)",
        "Python is case-sensitive: name and Name are different variables",
      ],
    },
    {
      type: "code",
      code: `# This is a single-line comment

"""
This is a
multi-line comment
"""

# Indentation is critical in Python
if True:
    print("This is indented — it's inside the if block")
print("This is NOT indented — it's outside")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Variables",
    },
    {
      type: "paragraph",
      text: "Variables are containers that store data values. In Python, you don't need to declare a type — just assign a value and Python figures out the type automatically.",
    },
    {
      type: "code",
      code: `# Variable assignment
name = "Alice"
age = 25
height = 5.7
is_student = True

# Multiple assignment on one line
x, y, z = 1, 2, 3

# Assign the same value to multiple variables
a = b = c = 0

# Variable naming rules
my_name = "valid"       # snake_case — Python convention
_private = "valid"      # leading underscore is fine
2name = "invalid"       # ❌ cannot start with a digit
my-name = "invalid"     # ❌ hyphens not allowed in variable names`,
      language: "python",
    },
    {
      type: "heading",
      title: "Data Types",
    },
    {
      type: "paragraph",
      text: "Python has several built-in data types. The most common ones are:",
    },
    {
      type: "code",
      code: `# int — whole numbers
age = 25
count = -10

# float — decimal numbers
price = 9.99
pi = 3.14159

# str — text (string)
name = "Alice"
greeting = 'Hello, World!'
multiline = """Line 1
Line 2"""

# bool — True or False
is_active = True
is_done = False

# NoneType — represents "nothing" or "no value"
result = None

# Check the type of any value
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>
print(type(name))       # <class 'str'>
print(type(is_active))  # <class 'bool'>`,
      language: "python",
    },
    {
      type: "heading",
      title: "Input and Output",
    },
    {
      type: "code",
      code: `# Output with print()
print("Hello!")
print("Name:", "Alice", "Age:", 25)  # multiple values
print("Sum:", 3 + 4)                 # expressions work too

# Formatted strings (f-strings) — modern and recommended
name = "Bob"
age = 30
print(f"My name is {name} and I am {age} years old.")

# Input from user
user_name = input("Enter your name: ")
print(f"Hello, {user_name}!")

# Note: input() always returns a string
user_age = input("Enter your age: ")
print(type(user_age))  # <class 'str'>`,
      language: "python",
    },
    {
      type: "heading",
      title: "Type Conversion",
    },
    {
      type: "paragraph",
      text: "Since input() always returns a string, you often need to convert types. Python provides built-in functions for this:",
    },
    {
      type: "code",
      code: `# Convert string to int
age_str = "25"
age_int = int(age_str)      # 25 (int)

# Convert string to float
price_str = "9.99"
price_float = float(price_str)  # 9.99 (float)

# Convert number to string
count = 42
count_str = str(count)       # "42" (str)

# Convert to bool
print(bool(0))      # False
print(bool(1))      # True
print(bool(""))     # False
print(bool("hi"))   # True

# Practical example: get a number from user input
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print(f"Sum = {num1 + num2}")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Basic Operators",
    },
    {
      type: "code",
      code: `# Arithmetic Operators
a, b = 10, 3
print(a + b)   # 13  — Addition
print(a - b)   # 7   — Subtraction
print(a * b)   # 30  — Multiplication
print(a / b)   # 3.33.. — Division (always float)
print(a // b)  # 3   — Floor division (int result)
print(a % b)   # 1   — Modulus (remainder)
print(a ** b)  # 1000 — Exponentiation (a to the power b)

# Assignment Operators
x = 5
x += 3   # x = x + 3 → 8
x -= 2   # x = x - 2 → 6
x *= 4   # x = x * 4 → 24
x //= 5  # x = x // 5 → 4

# Comparison Operators (return True/False)
print(5 == 5)    # True  — Equal
print(5 != 3)    # True  — Not equal
print(5 > 3)     # True  — Greater than
print(5 < 3)     # False — Less than
print(5 >= 5)    # True  — Greater than or equal
print(5 <= 4)    # False — Less than or equal`,
      language: "python",
    },
    {
      type: "tip",
      text: "Use f-strings (f\"Hello {name}\") instead of the older .format() or % formatting. They are more readable and faster.",
    },
  ],
  quiz: [
    {
      id: "m1q1",
      question: "What will `print(type(3.14))` output in Python?",
      options: [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'double'>",
        "<class 'decimal'>",
      ],
      correctIndex: 1,
      explanation: "3.14 is a decimal number, so Python assigns it the 'float' type. Python doesn't have a 'double' type — floats in Python are 64-bit double precision.",
    },
    {
      id: "m1q2",
      question: "What does the `//` operator do in Python?",
      options: [
        "Regular division that returns a float",
        "Modulus — returns the remainder",
        "Floor division — returns the integer part of the division",
        "Exponentiation — raises to a power",
      ],
      correctIndex: 2,
      explanation: "// is the floor division operator. It divides and returns the largest integer not greater than the result. For example, 10 // 3 = 3.",
    },
    {
      id: "m1q3",
      question: "What is the output of: `x, y = 5, 10` followed by `print(x, y)`?",
      options: ["5", "10", "5 10", "Error"],
      correctIndex: 2,
      explanation: "Python supports multiple assignment in a single line. x gets 5, y gets 10. print(x, y) prints both separated by a space: '5 10'.",
    },
    {
      id: "m1q4",
      question: "A user enters '42' via input(). What is the type of the returned value?",
      options: ["int", "float", "str", "number"],
      correctIndex: 2,
      explanation: "The input() function always returns a string (str), regardless of what the user types. You must use int() or float() to convert it to a number.",
    },
    {
      id: "m1q5",
      question: "Which of these is a valid Python variable name?",
      options: ["2myVar", "my-var", "my_var", "my var"],
      correctIndex: 2,
      explanation: "Python variable names must start with a letter or underscore, and can only contain letters, numbers, and underscores. 'my_var' is the correct snake_case convention.",
    },
  ],
};

// ============================================================
// MODULE 2: Conditions and Loops
// ============================================================
const module2: CourseModule = {
  id: "module-2",
  number: 2,
  title: "Conditions and Loops",
  subtitle: "Control the flow of your programs",
  icon: "🔁",
  estimatedTime: "50 min",
  topics: ["if/elif/else", "Comparison Operators", "Logical Operators", "for loops", "while loops", "break & continue", "Nested Loops"],
  content: [
    {
      type: "heading",
      title: "Conditional Statements: if, elif, else",
    },
    {
      type: "paragraph",
      text: "Conditional statements allow your program to make decisions. The code inside a block only runs when its condition is True.",
    },
    {
      type: "code",
      code: `# Basic if statement
age = 20

if age >= 18:
    print("You are an adult.")

# if-else
score = 75

if score >= 60:
    print("Pass!")
else:
    print("Fail!")

# if-elif-else chain
grade = 85

if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")
# Output: B`,
      language: "python",
    },
    {
      type: "heading",
      title: "Comparison Operators",
    },
    {
      type: "code",
      code: `x = 10

print(x == 10)   # True  — equal to
print(x != 5)    # True  — not equal to
print(x > 5)     # True  — greater than
print(x < 5)     # False — less than
print(x >= 10)   # True  — greater than or equal
print(x <= 9)    # False — less than or equal

# You can also compare strings
name = "Alice"
print(name == "Alice")   # True
print(name == "alice")   # False — case sensitive!`,
      language: "python",
    },
    {
      type: "heading",
      title: "Logical Operators",
    },
    {
      type: "code",
      code: `# and — both conditions must be True
age = 22
has_id = True

if age >= 18 and has_id:
    print("Entry allowed")

# or — at least one condition must be True
is_weekend = False
is_holiday = True

if is_weekend or is_holiday:
    print("Day off!")

# not — reverses a boolean
is_raining = False
if not is_raining:
    print("Go outside!")

# Combining logical operators
x = 15
if x > 10 and x < 20:
    print("x is between 10 and 20")

# Shorthand: Python supports chaining
if 10 < x < 20:
    print("x is between 10 and 20")  # Same result, more Pythonic`,
      language: "python",
    },
    {
      type: "heading",
      title: "for Loops",
    },
    {
      type: "paragraph",
      text: "A for loop iterates over a sequence (list, string, range, etc.) and executes the block for each item.",
    },
    {
      type: "code",
      code: `# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# apple
# banana
# cherry

# Loop using range()
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):    # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (step = 2)
    print(i)

# Loop over a string
for char in "Python":
    print(char)  # P y t h o n

# Using enumerate to get index + value
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")
# 0: red
# 1: green
# 2: blue`,
      language: "python",
    },
    {
      type: "heading",
      title: "while Loops",
    },
    {
      type: "paragraph",
      text: "A while loop keeps running as long as its condition remains True. Be careful — a missing or incorrect condition can cause an infinite loop.",
    },
    {
      type: "code",
      code: `# Basic while loop
count = 1
while count <= 5:
    print(count)
    count += 1
# 1 2 3 4 5

# while loop with user input
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")

# Countdown
n = 10
while n > 0:
    print(n)
    n -= 1
print("Liftoff! 🚀")`,
      language: "python",
    },
    {
      type: "heading",
      title: "break and continue",
    },
    {
      type: "code",
      code: `# break — exits the loop immediately
for i in range(10):
    if i == 5:
        break        # stop when i equals 5
    print(i)
# 0 1 2 3 4

# continue — skips the current iteration
for i in range(10):
    if i % 2 == 0:
        continue     # skip even numbers
    print(i)
# 1 3 5 7 9

# break in while loop — useful for "infinite" loops with exit condition
while True:
    response = input("Type 'quit' to exit: ")
    if response == "quit":
        break
    print(f"You typed: {response}")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Nested Loops",
    },
    {
      type: "code",
      code: `# A loop inside a loop
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print("---")
# 1 x 1 = 1
# 1 x 2 = 2
# ...

# Print a pattern using nested loops
rows = 5
for i in range(1, rows + 1):
    print("* " * i)
# *
# * *
# * * *
# * * * *
# * * * * *`,
      language: "python",
    },
    {
      type: "tip",
      text: "Use for loops when you know the number of iterations in advance. Use while loops when you don't know how many times you need to loop.",
    },
  ],
  quiz: [
    {
      id: "m2q1",
      question: "What is the output of: `for i in range(2, 8, 2): print(i)`?",
      options: ["2 4 6 8", "2 4 6", "0 2 4 6 8", "2 3 4 5 6 7"],
      correctIndex: 1,
      explanation: "range(2, 8, 2) starts at 2, stops before 8, and steps by 2. So: 2, 4, 6. The value 8 is excluded because range stops before the end value.",
    },
    {
      id: "m2q2",
      question: "Which statement immediately exits a loop in Python?",
      options: ["exit", "stop", "break", "return"],
      correctIndex: 2,
      explanation: "The 'break' statement immediately exits the innermost loop. 'continue' skips to the next iteration, 'return' exits a function, and 'exit' exits the program.",
    },
    {
      id: "m2q3",
      question: "What does the `not` logical operator do?",
      options: [
        "Returns True if both conditions are True",
        "Returns True if at least one condition is True",
        "Reverses/negates a boolean value",
        "Checks if a value is not equal",
      ],
      correctIndex: 2,
      explanation: "'not' is the logical negation operator. 'not True' returns False, and 'not False' returns True.",
    },
    {
      id: "m2q4",
      question: "What is the output of this code?\n```\nx = 0\nwhile x < 3:\n    x += 1\n    if x == 2:\n        continue\n    print(x)\n```",
      options: ["1 2 3", "1 3", "0 1 3", "1 2"],
      correctIndex: 1,
      explanation: "When x == 2, continue skips the print(x) for that iteration. So 1 and 3 are printed, but 2 is skipped.",
    },
    {
      id: "m2q5",
      question: "In Python, what does the `elif` keyword mean?",
      options: [
        "End of if block",
        "Else-if — checked only if all previous conditions were False",
        "A loop that runs while a condition is True",
        "A special type of else that requires a condition",
      ],
      correctIndex: 1,
      explanation: "'elif' stands for 'else if'. It is evaluated only if the preceding 'if' (and any previous 'elif') conditions were False. It lets you chain multiple conditions cleanly.",
    },
  ],
};

// ============================================================
// MODULE 3: Python Data Structures
// ============================================================
const module3: CourseModule = {
  id: "module-3",
  number: 3,
  title: "Python Data Structures",
  subtitle: "Organize and manage collections of data",
  icon: "📦",
  estimatedTime: "55 min",
  topics: ["Lists", "Tuples", "Sets", "Dictionaries", "Indexing & Slicing", "Adding/Removing/Updating", "Built-in Methods"],
  content: [
    {
      type: "heading",
      title: "Lists",
    },
    {
      type: "paragraph",
      text: "A list is an ordered, mutable (changeable) collection that can hold items of different types. Lists are defined with square brackets [].",
    },
    {
      type: "code",
      code: `# Creating a list
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# Indexing — access by position (0-based)
print(fruits[0])   # apple
print(fruits[1])   # banana
print(fruits[-1])  # cherry (last item)

# Slicing — extract a portion: list[start:stop:step]
print(numbers[1:4])   # [2, 3, 4]  (stop is exclusive)
print(numbers[:3])    # [1, 2, 3]  (from beginning)
print(numbers[2:])    # [3, 4, 5]  (to end)
print(numbers[::2])   # [1, 3, 5]  (every 2nd)
print(numbers[::-1])  # [5, 4, 3, 2, 1] (reversed)

# Modify a list (lists are mutable)
fruits[1] = "mango"      # replace "banana" with "mango"
print(fruits)  # ['apple', 'mango', 'cherry']

# Add elements
fruits.append("grape")        # add to end → ['apple', 'mango', 'cherry', 'grape']
fruits.insert(1, "kiwi")      # insert at index 1

# Remove elements
fruits.remove("mango")        # remove by value
popped = fruits.pop()         # remove & return last item
popped_at = fruits.pop(0)     # remove & return item at index 0

# Common list methods
nums = [3, 1, 4, 1, 5, 9, 2, 6]
nums.sort()         # [1, 1, 2, 3, 4, 5, 6, 9] — sorts in-place
nums.reverse()      # reverses in-place
print(len(nums))    # 8 — length
print(nums.count(1))  # 2 — count occurrences
print(nums.index(4))  # index of first occurrence of 4`,
      language: "python",
    },
    {
      type: "heading",
      title: "Tuples",
    },
    {
      type: "paragraph",
      text: "A tuple is like a list but immutable — you cannot change, add, or remove items after creation. Tuples are defined with parentheses ().",
    },
    {
      type: "code",
      code: `# Creating tuples
point = (3, 7)
colors = ("red", "green", "blue")
single = (42,)     # single-element tuple needs trailing comma!
nested = (1, (2, 3), 4)

# Access by index (same as list)
print(colors[0])   # red
print(colors[-1])  # blue

# Tuples are immutable
# colors[0] = "yellow"  ← ❌ This will raise a TypeError

# Tuple unpacking
x, y = point
print(x, y)  # 3  7

a, b, c = colors
print(b)     # green

# When to use tuples?
# - When data should NOT change (coordinates, RGB values, database rows)
# - Slightly faster than lists
# - Can be used as dictionary keys (lists cannot)`,
      language: "python",
    },
    {
      type: "heading",
      title: "Sets",
    },
    {
      type: "paragraph",
      text: "A set is an unordered, mutable collection of unique elements. Duplicate values are automatically removed. Sets are great for membership testing and removing duplicates.",
    },
    {
      type: "code",
      code: `# Creating sets
fruits = {"apple", "banana", "cherry"}
nums = {1, 2, 3, 4, 5}
empty_set = set()    # Note: {} creates an empty dict, not set!

# Duplicates are automatically removed
s = {1, 2, 2, 3, 3, 3}
print(s)   # {1, 2, 3}

# Remove duplicates from a list using a set
my_list = [1, 2, 2, 3, 4, 4, 5]
unique = list(set(my_list))
print(unique)  # [1, 2, 3, 4, 5]

# Add / Remove
fruits.add("mango")
fruits.discard("banana")   # no error if not found
fruits.remove("apple")     # raises KeyError if not found

# Membership test (very fast!)
print("cherry" in fruits)  # True

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # Union:        {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference:   {1, 2}
print(a ^ b)   # Symmetric diff: {1, 2, 5, 6}`,
      language: "python",
    },
    {
      type: "heading",
      title: "Dictionaries",
    },
    {
      type: "paragraph",
      text: "A dictionary stores key-value pairs. Keys must be unique and immutable (strings, numbers, tuples). Values can be anything. Dictionaries are ordered (Python 3.7+) and mutable.",
    },
    {
      type: "code",
      code: `# Creating a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "Mumbai"
}

# Access values by key
print(person["name"])         # Alice
print(person.get("age"))      # 25
print(person.get("email", "N/A"))  # N/A (default if key missing)

# Add / Update
person["email"] = "alice@example.com"   # add new key
person["age"] = 26                       # update existing key

# Remove
del person["city"]
removed = person.pop("email")            # removes & returns value

# Iterating over a dictionary
for key in person:
    print(key, ":", person[key])

for key, value in person.items():       # preferred way
    print(f"{key}: {value}")

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age'])
print(person.values())  # dict_values(['Alice', 26])
print(person.items())   # dict_items([('name', 'Alice'), ('age', 26)])

# Check if a key exists
if "name" in person:
    print("Name exists!")`,
      language: "python",
    },
    {
      type: "tip",
      text: "Use a list when order matters and duplicates are allowed. Use a set for uniqueness and fast lookups. Use a dict when you need to associate keys with values. Use a tuple for fixed, unchanging data.",
    },
  ],
  quiz: [
    {
      id: "m3q1",
      question: "What does `my_list = [1, 2, 3, 4, 5]` followed by `print(my_list[1:4])` output?",
      options: ["[1, 2, 3]", "[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]"],
      correctIndex: 1,
      explanation: "List slicing [1:4] returns elements from index 1 up to (but NOT including) index 4. So indices 1, 2, 3 → values 2, 3, 4.",
    },
    {
      id: "m3q2",
      question: "Which of the following is TRUE about Python sets?",
      options: [
        "Sets are ordered and allow duplicates",
        "Sets are unordered and allow duplicates",
        "Sets are unordered and do NOT allow duplicates",
        "Sets are ordered and do NOT allow duplicates",
      ],
      correctIndex: 2,
      explanation: "Sets are unordered collections of unique elements. Duplicate values are automatically removed, and sets do not maintain insertion order.",
    },
    {
      id: "m3q3",
      question: "How do you safely get a value from a dictionary without raising a KeyError if the key doesn't exist?",
      options: [
        "dict[key]",
        "dict.get(key)",
        "dict.fetch(key)",
        "dict.value(key)",
      ],
      correctIndex: 1,
      explanation: "dict.get(key) returns None (or a default value you specify) if the key doesn't exist, instead of raising a KeyError. dict[key] would raise a KeyError for missing keys.",
    },
    {
      id: "m3q4",
      question: "What is the key difference between a list and a tuple?",
      options: [
        "Tuples can store more items than lists",
        "Lists are ordered, tuples are unordered",
        "Tuples are immutable (cannot be changed after creation), lists are mutable",
        "Lists use () and tuples use []",
      ],
      correctIndex: 2,
      explanation: "The primary difference is mutability. Tuples are immutable — once created, you cannot add, remove, or change their items. Lists are mutable and support modification.",
    },
    {
      id: "m3q5",
      question: "What does `list.pop()` do without any argument?",
      options: [
        "Removes and returns the first item",
        "Removes and returns the last item",
        "Removes all items from the list",
        "Returns the last item without removing it",
      ],
      correctIndex: 1,
      explanation: "list.pop() with no argument removes and returns the last item in the list. list.pop(i) removes and returns the item at index i.",
    },
  ],
};

// ============================================================
// MODULE 4: Functions and Strings
// ============================================================
const module4: CourseModule = {
  id: "module-4",
  number: 4,
  title: "Functions and Strings",
  subtitle: "Write reusable code and master text processing",
  icon: "⚙️",
  estimatedTime: "50 min",
  topics: ["Defining Functions", "Parameters & Arguments", "Return Values", "Scope", "String Operations", "String Methods", "Lambda Functions"],
  content: [
    {
      type: "heading",
      title: "Defining Functions",
    },
    {
      type: "paragraph",
      text: "A function is a reusable block of code that performs a specific task. Functions help you avoid repetition and organize your code. Use the def keyword to define a function.",
    },
    {
      type: "code",
      code: `# Basic function definition
def greet():
    print("Hello, World!")

# Call the function
greet()   # Hello, World!
greet()   # Hello, World! (reusable!)

# Function with a docstring (recommended)
def greet():
    """Prints a greeting message."""
    print("Hello, World!")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Parameters and Arguments",
    },
    {
      type: "code",
      code: `# Function with parameters
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")   # Hello, Alice!
greet("Bob")     # Hello, Bob!

# Multiple parameters
def add(a, b):
    print(a + b)

add(3, 5)   # 8

# Default parameter values
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")            # Hello, Alice!
greet("Bob", "Hi")        # Hi, Bob!
greet("Charlie", greeting="Hey")  # Hey, Charlie!

# *args — accepts any number of positional arguments
def total(*numbers):
    result = 0
    for n in numbers:
        result += n
    return result

print(total(1, 2, 3))         # 6
print(total(10, 20, 30, 40))  # 100

# **kwargs — accepts any number of keyword arguments
def display_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

display_info(name="Alice", age=25, city="Delhi")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Return Values",
    },
    {
      type: "code",
      code: `# Function that returns a value
def square(n):
    return n * n

result = square(5)
print(result)   # 25

# Return multiple values (as a tuple)
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 7, 2, 9])
print(lo, hi)   # 1  9

# Return early from a function
def divide(a, b):
    if b == 0:
        return None   # return early
    return a / b

print(divide(10, 2))   # 5.0
print(divide(10, 0))   # None`,
      language: "python",
    },
    {
      type: "heading",
      title: "Scope — Local vs Global",
    },
    {
      type: "code",
      code: `# Local scope — variable only exists inside the function
def my_func():
    local_var = "I am local"
    print(local_var)

my_func()
# print(local_var)  ← ❌ NameError — not accessible outside!

# Global scope — variable exists in the whole module
global_var = "I am global"

def my_func():
    print(global_var)   # Can READ a global variable

my_func()

# Modify a global variable inside a function — use 'global' keyword
count = 0

def increment():
    global count
    count += 1

increment()
increment()
print(count)  # 2`,
      language: "python",
    },
    {
      type: "heading",
      title: "String Operations",
    },
    {
      type: "code",
      code: `# String creation
s1 = "Hello"
s2 = 'World'
s3 = """Multi
line string"""

# Concatenation and repetition
full = s1 + ", " + s2 + "!"
print(full)   # Hello, World!

repeated = "Ha" * 3
print(repeated)  # HaHaHa

# String indexing and slicing (same as lists)
text = "Python"
print(text[0])    # P
print(text[-1])   # n
print(text[1:4])  # yth
print(text[::-1]) # nohtyP  (reversed)

# String is immutable — you cannot do: text[0] = "J"

# Checking membership
print("Py" in "Python")    # True
print("Java" in "Python")  # False

# Length
print(len("Python"))  # 6`,
      language: "python",
    },
    {
      type: "heading",
      title: "String Methods",
    },
    {
      type: "code",
      code: `s = "  Hello, World!  "

# Case methods
print(s.lower())      # "  hello, world!  "
print(s.upper())      # "  HELLO, WORLD!  "
print(s.title())      # "  Hello, World!  "
print(s.capitalize()) # "  hello, world!  "

# Whitespace
print(s.strip())      # "Hello, World!"  (removes leading/trailing spaces)
print(s.lstrip())     # "Hello, World!  "
print(s.rstrip())     # "  Hello, World!"

# Find and replace
print(s.find("World"))       # 9  (index of first occurrence, -1 if not found)
print(s.replace("World", "Python"))  # "  Hello, Python!  "

# Split and join
csv = "apple,banana,cherry"
items = csv.split(",")    # ['apple', 'banana', 'cherry']
joined = " | ".join(items)  # 'apple | banana | cherry'

# Check content
print("hello".isalpha())   # True  — only letters
print("123".isdigit())     # True  — only digits
print("abc".startswith("ab"))  # True
print("hello".endswith("lo"))  # True`,
      language: "python",
    },
    {
      type: "heading",
      title: "Lambda Functions",
    },
    {
      type: "paragraph",
      text: "A lambda is a small anonymous function defined with the lambda keyword. It can have any number of parameters but only one expression.",
    },
    {
      type: "code",
      code: `# Regular function
def square(x):
    return x * x

# Equivalent lambda
square = lambda x: x * x
print(square(5))   # 25

# Lambda with multiple parameters
add = lambda a, b: a + b
print(add(3, 4))   # 7

# Common use — sorting with a custom key
names = ["Charlie", "Alice", "Bob"]
names.sort(key=lambda name: len(name))  # sort by length
print(names)  # ['Bob', 'Alice', 'Charlie']

# With filter() — keep only even numbers
nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)  # [2, 4, 6, 8]

# With map() — apply a function to every item
doubled = list(map(lambda x: x * 2, nums))
print(doubled)  # [2, 4, 6, 8, 10, 12, 14, 16]`,
      language: "python",
    },
    {
      type: "tip",
      text: "Use lambdas for short, simple operations (especially as arguments to sort, filter, map). For complex logic, define a full function with def — it's more readable.",
    },
  ],
  quiz: [
    {
      id: "m4q1",
      question: "What will `print('Python'[::-1])` output?",
      options: ["Python", "nohtyP", "P", "Error"],
      correctIndex: 1,
      explanation: "The slice [::-1] reverses a string. 'Python' reversed is 'nohtyP'.",
    },
    {
      id: "m4q2",
      question: "What is the output of: `def add(a, b=10): return a + b` called as `add(5)`?",
      options: ["5", "10", "15", "Error — missing argument"],
      correctIndex: 2,
      explanation: "b has a default value of 10. When you call add(5), a=5 and b=10 (default), so the result is 5+10=15.",
    },
    {
      id: "m4q3",
      question: "What does `'hello,world'.split(',')` return?",
      options: [
        "'hello world'",
        "['hello', 'world']",
        "('hello', 'world')",
        "{'hello', 'world'}",
      ],
      correctIndex: 1,
      explanation: "split(',') splits a string by the comma separator and returns a list of substrings: ['hello', 'world'].",
    },
    {
      id: "m4q4",
      question: "Which keyword is used to access and modify a global variable inside a function?",
      options: ["extern", "public", "global", "nonlocal"],
      correctIndex: 2,
      explanation: "The 'global' keyword declares that a variable inside a function refers to the module-level (global) variable, allowing you to modify it.",
    },
    {
      id: "m4q5",
      question: "What is the equivalent lambda of: `def cube(x): return x ** 3`?",
      options: [
        "lambda x => x ** 3",
        "lambda: x ** 3",
        "lambda x: x ** 3",
        "def lambda(x): x ** 3",
      ],
      correctIndex: 2,
      explanation: "Lambda syntax is: lambda parameters: expression. So the equivalent is lambda x: x ** 3.",
    },
  ],
};

// ============================================================
// MODULE 5: Files, Exceptions, and OOP Basics
// ============================================================
const module5: CourseModule = {
  id: "module-5",
  number: 5,
  title: "Files, Exceptions & OOP Basics",
  subtitle: "Handle real-world scenarios and learn object-oriented thinking",
  icon: "🏗️",
  estimatedTime: "60 min",
  topics: ["Reading & Writing Files", "try/except/finally", "Common Exceptions", "Classes & Objects", "Constructors", "Inheritance", "Modules & Packages"],
  content: [
    {
      type: "heading",
      title: "Reading and Writing Files",
    },
    {
      type: "paragraph",
      text: "Python makes file I/O easy with the built-in open() function. Always use the with statement — it automatically closes the file even if an error occurs.",
    },
    {
      type: "code",
      code: `# Writing to a file
with open("hello.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Reading entire file at once
with open("hello.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("hello.txt", "r") as f:
    for line in f:
        print(line.strip())   # strip() removes \\n

# Reading into a list of lines
with open("hello.txt", "r") as f:
    lines = f.readlines()   # ['Hello, World!\\n', 'Second line\\n']

# Appending (doesn't overwrite — adds to end)
with open("hello.txt", "a") as f:
    f.write("Third line\\n")

# File modes:
# "r"  — read (default)
# "w"  — write (creates or overwrites)
# "a"  — append
# "rb" — read binary (for images, PDFs, etc.)`,
      language: "python",
    },
    {
      type: "heading",
      title: "try, except, and finally",
    },
    {
      type: "paragraph",
      text: "Exception handling lets your program respond to errors gracefully instead of crashing. Use try to wrap risky code, except to catch errors, and finally for cleanup that always runs.",
    },
    {
      type: "code",
      code: `# Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Catching multiple exception types
try:
    num = int(input("Enter a number: "))
    result = 100 / num
    print(result)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")

# else — runs only if NO exception occurred
try:
    x = int("42")
except ValueError:
    print("Conversion failed")
else:
    print(f"Converted successfully: {x}")  # runs here

# finally — ALWAYS runs (cleanup code)
try:
    f = open("file.txt", "r")
    data = f.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Done — this always runs")

# Catching any exception (use sparingly)
try:
    risky_operation()
except Exception as e:
    print(f"Something went wrong: {e}")`,
      language: "python",
    },
    {
      type: "heading",
      title: "Common Python Exceptions",
    },
    {
      type: "list",
      items: [
        "ValueError — invalid value (e.g., int('abc'))",
        "TypeError — wrong type (e.g., '2' + 2)",
        "ZeroDivisionError — dividing by zero",
        "FileNotFoundError — file doesn't exist",
        "KeyError — key not found in a dictionary",
        "IndexError — index out of range for a list",
        "AttributeError — object has no such attribute",
        "NameError — variable not defined",
        "ImportError — module not found",
      ],
    },
    {
      type: "heading",
      title: "Classes and Objects",
    },
    {
      type: "paragraph",
      text: "Object-Oriented Programming (OOP) organizes code around objects. A class is a blueprint; an object is an instance of that blueprint. Classes bundle data (attributes) and behavior (methods) together.",
    },
    {
      type: "code",
      code: `# Define a class
class Dog:
    # Class attribute — shared by all instances
    species = "Canis lupus familiaris"

    # Constructor (__init__) — runs when an object is created
    def __init__(self, name, age):
        # Instance attributes — unique to each object
        self.name = name
        self.age = age

    # Instance method
    def bark(self):
        print(f"{self.name} says: Woof!")

    def describe(self):
        print(f"{self.name} is {self.age} years old.")

# Create objects (instances of the class)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Access attributes
print(dog1.name)    # Buddy
print(dog2.age)     # 5
print(Dog.species)  # Canis lupus familiaris

# Call methods
dog1.bark()         # Buddy says: Woof!
dog2.describe()     # Max is 5 years old.`,
      language: "python",
    },
    {
      type: "heading",
      title: "Constructors (__init__)",
    },
    {
      type: "code",
      code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(f"+{amount}")
            print(f"Deposited ₹{amount}. Balance: ₹{self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            self.transactions.append(f"-{amount}")

    def __str__(self):
        # __str__ defines what print(object) shows
        return f"Account({self.owner}, Balance: ₹{self.balance})"

# Usage
acc = BankAccount("Alice", 1000)
acc.deposit(500)           # Deposited ₹500. Balance: ₹1500
acc.withdraw(200)
print(acc)                 # Account(Alice, Balance: ₹1300)`,
      language: "python",
    },
    {
      type: "heading",
      title: "Inheritance",
    },
    {
      type: "code",
      code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

    def eat(self):
        print(f"{self.name} is eating.")

# Child class inherits from Animal
class Dog(Animal):
    def speak(self):          # Override parent method
        print(f"{self.name} says: Woof!")

    def fetch(self):          # New method specific to Dog
        print(f"{self.name} fetches the ball!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says: Meow!")

# Usage
dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.speak()    # Buddy says: Woof!  (overridden)
dog.eat()      # Buddy is eating.   (inherited from Animal)
dog.fetch()    # Buddy fetches the ball!
cat.speak()    # Whiskers says: Meow!

# Check inheritance
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True — dog is also an Animal!`,
      language: "python",
    },
    {
      type: "heading",
      title: "Modules and Packages",
    },
    {
      type: "code",
      code: `# Importing built-in modules
import math
print(math.pi)          # 3.14159...
print(math.sqrt(16))    # 4.0
print(math.floor(3.7))  # 3

import random
print(random.randint(1, 10))   # random int between 1 and 10
print(random.choice([1,2,3]))  # random item from list

import os
print(os.getcwd())             # current working directory
print(os.listdir("."))         # list files in current dir

# Import specific items
from math import pi, sqrt
print(pi)        # 3.14159
print(sqrt(25))  # 5.0

# Import with alias
import numpy as np          # common convention (must be installed)
import pandas as pd

# Create your own module: save as utils.py
# utils.py ——————————
def greet(name):
    return f"Hello, {name}!"
# ———————————————————

# In another file:
# import utils
# print(utils.greet("Alice"))

# Or: from utils import greet`,
      language: "python",
    },
    {
      type: "tip",
      text: "Always use the with statement when working with files. It ensures the file is properly closed even if an exception occurs, preventing resource leaks.",
    },
  ],
  quiz: [
    {
      id: "m5q1",
      question: "What is the correct way to open a file for writing in Python without losing existing content?",
      options: [
        "open('file.txt', 'w')",
        "open('file.txt', 'r')",
        "open('file.txt', 'a')",
        "open('file.txt', 'rw')",
      ],
      correctIndex: 2,
      explanation: "'a' mode (append) opens the file and adds new content at the end without deleting existing content. 'w' mode would overwrite the entire file.",
    },
    {
      id: "m5q2",
      question: "Which exception is raised when you try to access a dictionary key that doesn't exist?",
      options: ["IndexError", "ValueError", "AttributeError", "KeyError"],
      correctIndex: 3,
      explanation: "KeyError is raised when you try to access a dictionary with a key that doesn't exist. To avoid this, use dict.get(key) instead of dict[key].",
    },
    {
      id: "m5q3",
      question: "In a class definition, what is the first parameter of every instance method by convention?",
      options: ["this", "self", "cls", "me"],
      correctIndex: 1,
      explanation: "'self' refers to the current instance of the class. It is always the first parameter of instance methods and is passed automatically when you call a method on an object.",
    },
    {
      id: "m5q4",
      question: "What does the `finally` block do in exception handling?",
      options: [
        "Runs only when an exception occurs",
        "Runs only when NO exception occurs",
        "Runs always, whether or not an exception occurred",
        "Stops the exception from propagating",
      ],
      correctIndex: 2,
      explanation: "The 'finally' block always executes regardless of whether an exception occurred or not. It's typically used for cleanup code like closing files or releasing resources.",
    },
    {
      id: "m5q5",
      question: "When a child class defines a method with the same name as the parent class, what is this called?",
      options: ["Overloading", "Overriding", "Extending", "Shadowing"],
      correctIndex: 1,
      explanation: "Method overriding is when a child (subclass) redefines a method that already exists in the parent class. The child's version takes precedence when called on an instance of the child class.",
    },
  ],
};

// ============================================================
// Export
// ============================================================
export const PYTHON_COURSE_MODULES: CourseModule[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
];

export const COURSE_ID = "python-basics";
export const COURSE_TITLE = "Python Basics";
export const COURSE_LEVEL = "Beginner";
export const TOTAL_MODULES = 5;
export const PASS_THRESHOLD = 4; // out of 5

export const STORAGE_KEY = "codeplace_python_basics_progress";

export function loadProgress(userId: string): CourseProgress {
  if (typeof window === "undefined") {
    return createEmptyProgress(userId);
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createEmptyProgress(userId);
  try {
    const parsed: CourseProgress = JSON.parse(raw);
    if (parsed.userId !== userId) return createEmptyProgress(userId);
    return parsed;
  } catch {
    return createEmptyProgress(userId);
  }
}

export function saveProgress(progress: CourseProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function createEmptyProgress(userId: string): CourseProgress {
  const modules: Record<string, ModuleProgress> = {};
  for (const mod of PYTHON_COURSE_MODULES) {
    modules[mod.id] = {
      contentCompleted: false,
      quizScores: [],
      bestScore: 0,
      passed: false,
    };
  }
  return {
    userId,
    startedAt: new Date().toISOString(),
    modules,
    certificateUnlocked: false,
  };
}

export function isModuleUnlocked(moduleIndex: number, progress: CourseProgress): boolean {
  if (moduleIndex === 0) return true; // Module 1 always unlocked
  const prevModule = PYTHON_COURSE_MODULES[moduleIndex - 1];
  return progress.modules[prevModule.id]?.passed === true;
}

export function getOverallProgress(progress: CourseProgress): number {
  const totalModules = PYTHON_COURSE_MODULES.length;
  const passedModules = Object.values(progress.modules).filter((m) => m.passed).length;
  return Math.round((passedModules / totalModules) * 100);
}
