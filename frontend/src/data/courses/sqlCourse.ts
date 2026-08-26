import { CourseData } from "../courseTypes";

export const SQL_COURSE: CourseData = {
  id: "sql-basics",
  title: "SQL Basics",
  level: "Beginner",
  description: "Master SQL from scratch — querying, filtering, joins, aggregations, and data manipulation.",
  icon: "🗄️",
  color: "emerald",
  totalHours: "~4 Hours",
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Introduction to SQL",
      subtitle: "Databases, tables, SELECT and WHERE",
      icon: "🗄️",
      estimatedTime: "45 min",
      topics: ["What is SQL?", "RDBMS", "CREATE TABLE", "Data Types", "INSERT INTO", "SELECT", "WHERE"],
      content: [
        {
          type: "heading",
          title: "What is SQL?",
        },
        {
          type: "paragraph",
          text: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It is used by virtually every major database system — MySQL, PostgreSQL, SQLite, SQL Server, and Oracle. SQL lets you create, read, update, and delete data (CRUD) using simple English-like commands.",
        },
        {
          type: "list",
          title: "Key SQL categories:",
          items: [
            "DDL (Data Definition Language) — CREATE, ALTER, DROP (structure)",
            "DML (Data Manipulation Language) — INSERT, UPDATE, DELETE (data)",
            "DQL (Data Query Language) — SELECT (reading data)",
            "DCL (Data Control Language) — GRANT, REVOKE (permissions)",
          ],
        },
        {
          type: "heading",
          title: "Creating a Database and Table",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Create a new database
CREATE DATABASE school;

-- Use the database
USE school;

-- Create a table with columns and data types
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    age         INT,
    email       VARCHAR(150) UNIQUE,
    gpa         DECIMAL(3, 2),
    enrolled_at DATE,
    is_active   BOOLEAN DEFAULT TRUE
);

-- Common data types:
-- INT, BIGINT       → whole numbers
-- VARCHAR(n)        → variable-length text up to n chars
-- TEXT              → long text
-- DECIMAL(p, s)     → exact decimal (p=precision, s=scale)
-- FLOAT / DOUBLE    → approximate decimal
-- DATE              → YYYY-MM-DD
-- DATETIME          → YYYY-MM-DD HH:MM:SS
-- BOOLEAN           → TRUE / FALSE`,
        },
        {
          type: "heading",
          title: "INSERT INTO — Adding Rows",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Insert a single row
INSERT INTO students (name, age, email, gpa)
VALUES ('Alice Johnson', 20, 'alice@example.com', 3.85);

-- Insert multiple rows at once
INSERT INTO students (name, age, email, gpa)
VALUES
    ('Bob Smith', 22, 'bob@example.com', 3.40),
    ('Charlie Davis', 19, 'charlie@example.com', 3.70),
    ('Diana Lee', 21, 'diana@example.com', 3.95),
    ('Ethan Brown', 23, 'ethan@example.com', 2.90);

-- If AUTO_INCREMENT is set, you don't need to specify 'id'`,
        },
        {
          type: "heading",
          title: "SELECT — Querying Data",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Select ALL columns from a table
SELECT * FROM students;

-- Select specific columns only
SELECT name, age, gpa FROM students;

-- Give columns a display alias
SELECT name AS student_name, gpa AS grade_point
FROM students;

-- Select distinct (unique) values
SELECT DISTINCT age FROM students;

-- Limit the number of results
SELECT * FROM students LIMIT 3;

-- Offset + Limit (pagination)
SELECT * FROM students LIMIT 3 OFFSET 3; -- rows 4,5,6`,
        },
        {
          type: "heading",
          title: "WHERE — Filtering Rows",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Basic comparison
SELECT * FROM students WHERE age = 21;
SELECT * FROM students WHERE gpa > 3.5;
SELECT * FROM students WHERE gpa >= 3.0;
SELECT * FROM students WHERE age != 20;   -- or <> 20

-- Comparing text
SELECT * FROM students WHERE name = 'Alice Johnson';

-- Multiple conditions
SELECT * FROM students WHERE age >= 20 AND gpa >= 3.5;
SELECT * FROM students WHERE age < 20 OR gpa > 3.9;

-- Negation
SELECT * FROM students WHERE NOT age = 22;

-- NULL checks
SELECT * FROM students WHERE email IS NULL;
SELECT * FROM students WHERE email IS NOT NULL;`,
        },
        {
          type: "tip",
          text: "SQL is case-insensitive for keywords (SELECT, FROM, WHERE can also be written select, from, where). However, string comparisons ARE case-sensitive in most databases. Always use IS NULL / IS NOT NULL — never = NULL.",
        },
      ],
      quiz: [
        {
          id: "sql-m1-q1",
          question: "Which SQL command is used to retrieve data from a table?",
          options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
          correctIndex: 2,
          explanation: "SELECT is the SQL command used to query and retrieve data from one or more tables. It is the most frequently used SQL statement.",
        },
        {
          id: "sql-m1-q2",
          question: "What does `SELECT * FROM employees` return?",
          options: [
            "Only the first column",
            "All columns and all rows from the employees table",
            "The number of rows in employees",
            "Only distinct rows",
          ],
          correctIndex: 1,
          explanation: "The * (asterisk) is a wildcard meaning 'all columns'. This query returns every column and every row from the employees table.",
        },
        {
          id: "sql-m1-q3",
          question: "Which clause filters rows based on a condition?",
          options: ["FILTER", "WHERE", "HAVING", "CASE"],
          correctIndex: 1,
          explanation: "The WHERE clause filters rows based on a condition. Only rows matching the condition are included in the result.",
        },
        {
          id: "sql-m1-q4",
          question: "Which SQL command adds a new row to a table?",
          options: ["ADD ROW", "INSERT INTO", "APPEND", "CREATE ROW"],
          correctIndex: 1,
          explanation: "INSERT INTO is used to add new rows to a table. You specify the table name, columns, and VALUES to insert.",
        },
        {
          id: "sql-m1-q5",
          question: "How do you check if a column value is NULL in SQL?",
          options: ["WHERE col = NULL", "WHERE col == NULL", "WHERE col IS NULL", "WHERE col.isNull()"],
          correctIndex: 2,
          explanation: "You must use IS NULL (or IS NOT NULL) because NULL represents absence of a value — comparing with = NULL always returns false/unknown in SQL.",
        },
      ],
    },
    {
      id: "module-2",
      number: 2,
      title: "Filtering and Sorting",
      subtitle: "LIKE, IN, BETWEEN, ORDER BY and LIMIT",
      icon: "🔍",
      estimatedTime: "45 min",
      topics: ["AND / OR / NOT", "LIKE & Wildcards", "IN", "BETWEEN", "IS NULL", "ORDER BY", "LIMIT"],
      content: [
        {
          type: "heading",
          title: "LIKE — Pattern Matching",
        },
        {
          type: "paragraph",
          text: "LIKE is used with WHERE to search for a pattern in a column. Two wildcards: % (any sequence of characters), _ (exactly one character).",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Students whose name starts with 'A'
SELECT * FROM students WHERE name LIKE 'A%';

-- Students whose name ends with 'son'
SELECT * FROM students WHERE name LIKE '%son';

-- Students with 'ali' anywhere in name (case varies by DB)
SELECT * FROM students WHERE name LIKE '%ali%';

-- Exactly one character before 'ob'
SELECT * FROM students WHERE name LIKE '_ob%';
-- Matches: Bob, Rob, Job...

-- NOT LIKE
SELECT * FROM students WHERE email NOT LIKE '%gmail%';`,
        },
        {
          type: "heading",
          title: "IN and BETWEEN",
        },
        {
          type: "code",
          language: "sql",
          code: `-- IN: check if value is in a list
SELECT * FROM students WHERE age IN (19, 20, 21);
-- equivalent to: WHERE age = 19 OR age = 20 OR age = 21

-- NOT IN
SELECT * FROM students WHERE age NOT IN (19, 20);

-- BETWEEN: inclusive range check
SELECT * FROM students WHERE gpa BETWEEN 3.0 AND 3.9;
-- equivalent to: WHERE gpa >= 3.0 AND gpa <= 3.9

SELECT * FROM students WHERE age BETWEEN 18 AND 22;

-- NOT BETWEEN
SELECT * FROM students WHERE gpa NOT BETWEEN 2.0 AND 3.0;

-- BETWEEN with dates
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';`,
        },
        {
          type: "heading",
          title: "ORDER BY — Sorting Results",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Sort by GPA ascending (default)
SELECT name, gpa FROM students ORDER BY gpa;

-- Sort descending (highest first)
SELECT name, gpa FROM students ORDER BY gpa DESC;

-- Sort alphabetically by name
SELECT * FROM students ORDER BY name ASC;

-- Sort by multiple columns
-- First by age (asc), then by gpa (desc) for same age
SELECT * FROM students ORDER BY age ASC, gpa DESC;

-- Sort by column alias
SELECT name, gpa AS grade_point
FROM students
ORDER BY grade_point DESC;`,
        },
        {
          type: "heading",
          title: "LIMIT and OFFSET",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Get top 3 students by GPA
SELECT name, gpa
FROM students
ORDER BY gpa DESC
LIMIT 3;

-- Pagination: page 2 with 5 rows per page
SELECT *
FROM students
ORDER BY id
LIMIT 5 OFFSET 5; -- skip first 5, get next 5

-- Get the single highest GPA
SELECT name, gpa
FROM students
ORDER BY gpa DESC
LIMIT 1;

-- MySQL / PostgreSQL syntax
-- SQL Server uses: SELECT TOP 3 * FROM students ORDER BY gpa DESC`,
        },
        {
          type: "heading",
          title: "Combining Multiple Conditions",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Complex WHERE with parentheses for clarity
SELECT * FROM students
WHERE (age >= 20 AND age <= 22)
  AND (gpa > 3.5 OR name LIKE 'A%')
  AND email IS NOT NULL
ORDER BY gpa DESC
LIMIT 5;

-- Practical: find active students with high GPA
SELECT name, gpa, email
FROM students
WHERE is_active = TRUE
  AND gpa >= 3.8
ORDER BY gpa DESC;`,
        },
        {
          type: "tip",
          text: "Use parentheses when mixing AND and OR — SQL evaluates AND before OR which can lead to unexpected results. `WHERE a OR b AND c` is treated as `WHERE a OR (b AND c)`, not `(a OR b) AND c`.",
        },
      ],
      quiz: [
        {
          id: "sql-m2-q1",
          question: "What does the `%` wildcard in a LIKE pattern represent?",
          options: [
            "Exactly one character",
            "A number only",
            "Any sequence of zero or more characters",
            "A space character",
          ],
          correctIndex: 2,
          explanation: "% matches any sequence of zero or more characters. For example, LIKE 'A%' matches 'A', 'Alice', 'Amazon', etc.",
        },
        {
          id: "sql-m2-q2",
          question: "Which query returns students sorted by name in descending (Z to A) order?",
          options: [
            "SELECT * FROM students ORDER BY name ASC",
            "SELECT * FROM students SORT BY name DESC",
            "SELECT * FROM students ORDER BY name DESC",
            "SELECT * FROM students WHERE name DESC",
          ],
          correctIndex: 2,
          explanation: "ORDER BY name DESC sorts alphabetically in reverse order (Z to A). ASC (ascending, A to Z) is the default.",
        },
        {
          id: "sql-m2-q3",
          question: "What does `WHERE age BETWEEN 18 AND 25` return?",
          options: [
            "Ages strictly between 18 and 25 (not including 18 or 25)",
            "Ages from 18 to 25 inclusive",
            "Ages outside 18 and 25",
            "Only age = 18 or age = 25",
          ],
          correctIndex: 1,
          explanation: "BETWEEN is inclusive on both ends. WHERE age BETWEEN 18 AND 25 is equivalent to WHERE age >= 18 AND age <= 25.",
        },
        {
          id: "sql-m2-q4",
          question: "What does `LIMIT 5 OFFSET 10` do?",
          options: [
            "Returns 10 rows starting from row 5",
            "Returns 5 rows starting from row 11 (skips first 10)",
            "Returns 15 rows total",
            "Limits results to 10 rows",
          ],
          correctIndex: 1,
          explanation: "OFFSET 10 skips the first 10 rows, then LIMIT 5 takes the next 5. This is used for pagination (page 3 with 5 rows per page).",
        },
        {
          id: "sql-m2-q5",
          question: "Which query finds all products whose name contains 'phone'?",
          options: [
            "SELECT * FROM products WHERE name = 'phone'",
            "SELECT * FROM products WHERE name CONTAINS 'phone'",
            "SELECT * FROM products WHERE name LIKE '%phone%'",
            "SELECT * FROM products WHERE name IN ('phone')",
          ],
          correctIndex: 2,
          explanation: "LIKE '%phone%' matches any name containing 'phone' anywhere. The % before and after ensures it matches 'phone', 'smartphone', 'headphone', etc.",
        },
      ],
    },
    {
      id: "module-3",
      number: 3,
      title: "Aggregate Functions & Grouping",
      subtitle: "COUNT, SUM, AVG, GROUP BY and HAVING",
      icon: "📊",
      estimatedTime: "50 min",
      topics: ["COUNT", "SUM", "AVG", "MIN / MAX", "GROUP BY", "HAVING", "DISTINCT", "Aliases"],
      content: [
        {
          type: "heading",
          title: "Aggregate Functions",
        },
        {
          type: "paragraph",
          text: "Aggregate functions perform a calculation on a set of rows and return a single value. They are used with SELECT and optionally with GROUP BY.",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Setup: imagine an 'orders' table
-- orders(id, customer_id, product, amount, status)

-- COUNT: count rows
SELECT COUNT(*) FROM orders;           -- total rows
SELECT COUNT(amount) FROM orders;      -- non-NULL amounts
SELECT COUNT(DISTINCT customer_id) FROM orders; -- unique customers

-- SUM: total of a column
SELECT SUM(amount) FROM orders;        -- total revenue
SELECT SUM(amount) FROM orders WHERE status = 'completed';

-- AVG: average value
SELECT AVG(amount) FROM orders;
SELECT ROUND(AVG(amount), 2) FROM orders;  -- 2 decimal places

-- MIN and MAX
SELECT MIN(amount) FROM orders;        -- cheapest order
SELECT MAX(amount) FROM orders;        -- most expensive
SELECT MIN(amount), MAX(amount), AVG(amount) FROM orders;`,
        },
        {
          type: "heading",
          title: "GROUP BY — Aggregating per Group",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Count orders per status
SELECT status, COUNT(*) AS order_count
FROM orders
GROUP BY status;
-- Result:
-- completed | 150
-- pending   | 45
-- cancelled | 12

-- Total revenue per customer
SELECT customer_id,
       COUNT(*) AS num_orders,
       SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
ORDER BY total_spent DESC;

-- Multiple grouping columns
SELECT status, product, COUNT(*) AS count
FROM orders
GROUP BY status, product
ORDER BY status, count DESC;`,
        },
        {
          type: "heading",
          title: "HAVING — Filtering Groups",
        },
        {
          type: "paragraph",
          text: "HAVING filters groups AFTER GROUP BY is applied. WHERE filters individual rows BEFORE grouping. They serve different purposes.",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Customers who placed more than 3 orders
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 3;

-- Products with average order value above $100
SELECT product, ROUND(AVG(amount), 2) AS avg_value
FROM orders
GROUP BY product
HAVING AVG(amount) > 100
ORDER BY avg_value DESC;

-- Combined WHERE + GROUP BY + HAVING
-- Among completed orders, find customers who spent > $500
SELECT customer_id, SUM(amount) AS total
FROM orders
WHERE status = 'completed'          -- filter rows first
GROUP BY customer_id                -- then group
HAVING SUM(amount) > 500            -- then filter groups
ORDER BY total DESC;`,
        },
        {
          type: "heading",
          title: "DISTINCT",
        },
        {
          type: "code",
          language: "sql",
          code: `-- students table with city column
-- Get all unique cities
SELECT DISTINCT city FROM students;

-- Unique combinations of city and major
SELECT DISTINCT city, major FROM students;

-- Count unique values
SELECT COUNT(DISTINCT city) AS unique_cities FROM students;

-- DISTINCT vs GROUP BY (often equivalent for simple counts)
SELECT city, COUNT(*) FROM students GROUP BY city;
-- vs
SELECT DISTINCT city FROM students;  -- no count, just unique values`,
        },
        {
          type: "heading",
          title: "Aliases with AS",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Column aliases
SELECT
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_order_value,
    MAX(amount) AS largest_order
FROM orders;

-- Table alias (useful in joins)
SELECT s.name, s.gpa
FROM students AS s
WHERE s.gpa > 3.5;

-- Alias can be used in ORDER BY but not in WHERE
SELECT name, gpa * 100 AS gpa_percent
FROM students
ORDER BY gpa_percent DESC;`,
        },
        {
          type: "tip",
          text: "Key rule: WHERE filters individual rows BEFORE grouping. HAVING filters groups AFTER GROUP BY. If you need to filter on an aggregate (like COUNT(*) > 5), you must use HAVING, not WHERE.",
        },
      ],
      quiz: [
        {
          id: "sql-m3-q1",
          question: "Which aggregate function returns the total sum of a numeric column?",
          options: ["COUNT()", "TOTAL()", "SUM()", "ADD()"],
          correctIndex: 2,
          explanation: "SUM() calculates the total of all non-NULL values in a column. For example, SUM(salary) returns the total salary bill.",
        },
        {
          id: "sql-m3-q2",
          question: "What does `GROUP BY department` do?",
          options: [
            "Sorts rows by department",
            "Filters out duplicate departments",
            "Groups rows with the same department value so aggregate functions apply per group",
            "Deletes duplicate department rows",
          ],
          correctIndex: 2,
          explanation: "GROUP BY collapses rows with the same column value into one group. Aggregate functions (COUNT, SUM, AVG) then operate on each group independently.",
        },
        {
          id: "sql-m3-q3",
          question: "What is the difference between WHERE and HAVING?",
          options: [
            "WHERE works with JOINs, HAVING doesn't",
            "WHERE filters rows before grouping; HAVING filters groups after GROUP BY",
            "They are identical",
            "HAVING is faster than WHERE",
          ],
          correctIndex: 1,
          explanation: "WHERE filters individual rows before GROUP BY runs. HAVING filters the resulting groups after GROUP BY. You can't use aggregate functions in WHERE.",
        },
        {
          id: "sql-m3-q4",
          question: "What does `SELECT COUNT(DISTINCT city) FROM students` return?",
          options: [
            "The total number of students",
            "The number of rows with non-NULL city",
            "The number of unique city values",
            "All distinct cities as rows",
          ],
          correctIndex: 2,
          explanation: "COUNT(DISTINCT column) counts how many unique non-NULL values exist in that column. It's useful for metrics like 'how many different cities do our customers come from?'",
        },
        {
          id: "sql-m3-q5",
          question: "Which query finds departments with more than 10 employees?",
          options: [
            "SELECT dept, COUNT(*) FROM emp WHERE COUNT(*) > 10 GROUP BY dept",
            "SELECT dept, COUNT(*) FROM emp GROUP BY dept WHERE COUNT(*) > 10",
            "SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 10",
            "SELECT dept FROM emp HAVING COUNT(*) > 10",
          ],
          correctIndex: 2,
          explanation: "HAVING must be placed AFTER GROUP BY and is the correct clause for filtering on aggregate results like COUNT(*). WHERE cannot use aggregate functions.",
        },
      ],
    },
    {
      id: "module-4",
      number: 4,
      title: "SQL Joins",
      subtitle: "Combining data from multiple tables",
      icon: "🔗",
      estimatedTime: "55 min",
      topics: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "ON clause", "Multiple Joins"],
      content: [
        {
          type: "heading",
          title: "Why Joins?",
        },
        {
          type: "paragraph",
          text: "In relational databases, data is split across multiple tables to avoid repetition (normalization). Joins let you combine rows from two or more tables based on a related column — usually a foreign key relationship.",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Two related tables:

-- customers(id, name, email, city)
-- orders(id, customer_id, product, amount, order_date)

-- customer_id in orders is a foreign key referencing customers.id

-- Sample data:
-- customers: 1=Alice, 2=Bob, 3=Charlie, 4=Diana (no orders)
-- orders: order for id=1 (Alice), two for id=2 (Bob), one for unknown id=99`,
        },
        {
          type: "heading",
          title: "INNER JOIN — Only Matching Rows",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Returns rows where there is a match in BOTH tables
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;
-- Only shows customers who HAVE orders
-- Diana (no orders) is excluded
-- Order with customer_id=99 (no customer) is excluded

-- Can write just JOIN (INNER is the default)
SELECT c.name, o.product, o.amount
FROM customers c
JOIN orders o ON c.id = o.customer_id;

-- Aggregation with join
SELECT c.name, COUNT(o.id) AS num_orders, SUM(o.amount) AS total
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total DESC;`,
        },
        {
          type: "heading",
          title: "LEFT JOIN — All Left Rows + Matching Right",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Returns ALL rows from the LEFT table
-- Matching rows from right, NULL if no match
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c           -- LEFT table
LEFT JOIN orders o ON c.id = o.customer_id;
-- All customers shown, including Diana
-- Diana's product and amount will be NULL

-- Find customers with NO orders (very useful!)
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;  -- no matching order
-- Returns: Diana`,
        },
        {
          type: "heading",
          title: "RIGHT JOIN — All Right Rows + Matching Left",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Returns ALL rows from the RIGHT table
-- Matching rows from left, NULL if no match
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;
-- All orders shown, including the orphan (customer_id=99)
-- That order's customer name will be NULL

-- Note: RIGHT JOIN is less common.
-- You can always rewrite it as a LEFT JOIN by swapping tables.
SELECT c.name, o.product
FROM orders o
LEFT JOIN customers c ON c.id = o.customer_id;
-- Equivalent to the RIGHT JOIN above`,
        },
        {
          type: "heading",
          title: "FULL OUTER JOIN",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Returns ALL rows from BOTH tables
-- NULL wherever there's no match on either side
SELECT
    c.name AS customer,
    o.product,
    o.amount
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id;
-- Shows: Diana (no orders → NULL), orphan order (no customer → NULL)

-- Note: MySQL doesn't support FULL OUTER JOIN directly.
-- Simulate it using UNION:
SELECT c.name, o.product FROM customers c LEFT JOIN orders o ON c.id = o.customer_id
UNION
SELECT c.name, o.product FROM customers c RIGHT JOIN orders o ON c.id = o.customer_id;`,
        },
        {
          type: "heading",
          title: "Joining Three Tables",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Three tables:
-- customers(id, name)
-- orders(id, customer_id, product_id, amount)
-- products(id, name, category)

SELECT
    c.name AS customer,
    p.name AS product,
    p.category,
    o.amount
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN products p  ON o.product_id  = p.id
WHERE o.amount > 100
ORDER BY o.amount DESC;`,
        },
        {
          type: "tip",
          text: "Visualize joins like Venn diagrams: INNER = intersection, LEFT = full left circle, RIGHT = full right circle, FULL OUTER = both circles combined. Always specify ON conditions carefully — a missing condition creates a Cartesian product (every row × every row).",
        },
      ],
      quiz: [
        {
          id: "sql-m4-q1",
          question: "What does INNER JOIN return?",
          options: [
            "All rows from the left table only",
            "All rows from both tables including unmatched rows",
            "Only rows where there is a match in both tables",
            "All rows from the right table only",
          ],
          correctIndex: 2,
          explanation: "INNER JOIN (or just JOIN) returns only the rows that have matching values in both tables based on the ON condition. Unmatched rows from either side are excluded.",
        },
        {
          id: "sql-m4-q2",
          question: "You want to find all customers, including those who haven't placed any orders. Which join should you use?",
          options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN (customers on left)", "FULL OUTER JOIN"],
          correctIndex: 2,
          explanation: "LEFT JOIN returns all rows from the left table (customers) plus matching rows from orders. Customers with no orders will appear with NULL for the order columns.",
        },
        {
          id: "sql-m4-q3",
          question: "In a LEFT JOIN, what does a NULL in the right table's columns indicate?",
          options: [
            "The row was deleted",
            "There is no matching row in the right table",
            "The column has no data type",
            "The join condition was wrong",
          ],
          correctIndex: 1,
          explanation: "When there is no matching row in the right table, all columns from that table appear as NULL in the result. This is used to find 'orphaned' records (e.g., customers with no orders).",
        },
        {
          id: "sql-m4-q4",
          question: "What clause specifies the join condition?",
          options: ["WHERE", "MATCH", "ON", "USING"],
          correctIndex: 2,
          explanation: "The ON clause specifies which columns to match between the tables (e.g., ON customers.id = orders.customer_id). Without it, you'd get a Cartesian product.",
        },
        {
          id: "sql-m4-q5",
          question: "What does FULL OUTER JOIN return?",
          options: [
            "Only rows with matches in both tables",
            "All rows from the left table",
            "All rows from both tables, with NULLs where there is no match on either side",
            "All rows from the right table",
          ],
          correctIndex: 2,
          explanation: "FULL OUTER JOIN returns all rows from both tables. Where there is no match, the columns from the non-matching side are NULL.",
        },
      ],
    },
    {
      id: "module-5",
      number: 5,
      title: "Data Modification & Advanced SQL",
      subtitle: "UPDATE, DELETE, subqueries, views and indexes",
      icon: "⚙️",
      estimatedTime: "50 min",
      topics: ["UPDATE", "DELETE", "Transactions", "Subqueries", "CREATE VIEW", "CREATE INDEX"],
      content: [
        {
          type: "heading",
          title: "UPDATE — Modifying Existing Data",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Update a single column for one row
UPDATE students
SET gpa = 3.95
WHERE id = 1;

-- Update multiple columns at once
UPDATE students
SET gpa = 4.0,
    is_active = TRUE,
    email = 'alice.new@example.com'
WHERE name = 'Alice Johnson';

-- Update based on calculation
UPDATE orders
SET amount = amount * 1.10   -- 10% price increase
WHERE status = 'pending';

-- Update using a subquery
UPDATE students
SET gpa = gpa + 0.1
WHERE id IN (
    SELECT student_id FROM honors_list
);

-- ⚠️ Without WHERE, ALL rows are updated!
-- UPDATE students SET is_active = FALSE;  -- affects everyone!`,
        },
        {
          type: "heading",
          title: "DELETE — Removing Rows",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Delete specific rows
DELETE FROM students WHERE id = 5;

-- Delete based on condition
DELETE FROM orders
WHERE status = 'cancelled' AND order_date < '2023-01-01';

-- Delete using subquery
DELETE FROM students
WHERE id NOT IN (
    SELECT student_id FROM enrollments
);

-- TRUNCATE: delete ALL rows quickly (no WHERE, no rollback in most DBs)
TRUNCATE TABLE temp_data;

-- ⚠️ DELETE without WHERE removes ALL rows!
-- Always double-check your WHERE clause first with a SELECT:
SELECT * FROM orders WHERE status = 'cancelled'; -- verify first
DELETE FROM orders WHERE status = 'cancelled';   -- then delete`,
        },
        {
          type: "heading",
          title: "Transactions",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Transactions ensure all operations succeed or none do (ACID)
-- Useful for bank transfers, inventory updates, etc.

START TRANSACTION;  -- or BEGIN;

-- Transfer $100 from Alice to Bob
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';

-- If both succeed:
COMMIT;   -- make changes permanent

-- If something went wrong:
ROLLBACK; -- undo everything since START TRANSACTION

-- Practical pattern with error handling (in application code):
-- START TRANSACTION
-- try:
--     debit Alice
--     credit Bob
--     COMMIT
-- except:
--     ROLLBACK`,
        },
        {
          type: "heading",
          title: "Subqueries",
        },
        {
          type: "code",
          language: "sql",
          code: `-- Subquery in WHERE (scalar)
SELECT name, gpa
FROM students
WHERE gpa > (SELECT AVG(gpa) FROM students);
-- Returns students above average GPA

-- Subquery in WHERE with IN
SELECT name FROM students
WHERE id IN (
    SELECT student_id FROM enrollments
    WHERE course_id = 101
);

-- Subquery in FROM (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_avg
WHERE avg_sal > 60000;

-- Correlated subquery (references outer query)
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department  -- references outer e
);`,
        },
        {
          type: "heading",
          title: "CREATE VIEW and CREATE INDEX",
        },
        {
          type: "code",
          language: "sql",
          code: `-- VIEW: a saved SELECT query treated as a virtual table
CREATE VIEW high_gpa_students AS
SELECT name, email, gpa
FROM students
WHERE gpa >= 3.8;

-- Use the view like a table
SELECT * FROM high_gpa_students ORDER BY gpa DESC;
SELECT COUNT(*) FROM high_gpa_students;

-- Drop a view
DROP VIEW high_gpa_students;

-- ─────────────────────────────────────────────────────

-- INDEX: speeds up query performance on frequently searched columns
-- Trade-off: faster reads, slightly slower writes

-- Create index on a single column
CREATE INDEX idx_students_gpa ON students(gpa);

-- Create index on multiple columns
CREATE INDEX idx_orders_status_date ON orders(status, order_date);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_email ON students(email);

-- View indexes (MySQL)
SHOW INDEX FROM students;

-- Drop index
DROP INDEX idx_students_gpa ON students;`,
        },
        {
          type: "tip",
          text: "Safety tip: Before running DELETE or UPDATE, always run the equivalent SELECT first to verify which rows will be affected. A missing WHERE clause is one of the most common and costly mistakes in SQL.",
        },
      ],
      quiz: [
        {
          id: "sql-m5-q1",
          question: "What happens if you run `DELETE FROM employees` without a WHERE clause?",
          options: [
            "Deletes only the first row",
            "Does nothing",
            "Deletes ALL rows from the employees table",
            "Causes a syntax error",
          ],
          correctIndex: 2,
          explanation: "Without WHERE, DELETE removes every row from the table. The table structure remains, but all data is gone. Always use WHERE to specify which rows to delete.",
        },
        {
          id: "sql-m5-q2",
          question: "What does ROLLBACK do in a transaction?",
          options: [
            "Saves all changes permanently",
            "Undoes all changes made since the transaction started",
            "Creates a savepoint",
            "Starts a new transaction",
          ],
          correctIndex: 1,
          explanation: "ROLLBACK reverts all changes made during the current transaction, restoring the database to the state before the transaction began.",
        },
        {
          id: "sql-m5-q3",
          question: "What is a SQL VIEW?",
          options: [
            "A copy of a table stored on disk",
            "A saved SELECT query that acts as a virtual table",
            "A type of index",
            "A stored procedure",
          ],
          correctIndex: 1,
          explanation: "A VIEW is a stored SELECT statement that you can query like a regular table. It doesn't store data itself — it runs the underlying query each time. Useful for hiding complexity and enforcing security.",
        },
        {
          id: "sql-m5-q4",
          question: "What does a database index do?",
          options: [
            "Adds constraints to columns",
            "Speeds up data retrieval by creating a lookup structure on columns",
            "Automatically sorts table rows",
            "Encrypts sensitive data",
          ],
          correctIndex: 1,
          explanation: "An index creates an internal data structure that speeds up SELECT queries on indexed columns. The trade-off is slightly slower INSERT/UPDATE/DELETE since the index must also be updated.",
        },
        {
          id: "sql-m5-q5",
          question: "Which of the following correctly uses a subquery?",
          options: [
            "SELECT * FROM emp WHERE salary > AVG(salary)",
            "SELECT * FROM emp WHERE salary > (SELECT AVG(salary) FROM emp)",
            "SELECT * FROM emp HAVING salary > AVG(salary)",
            "SELECT AVG(salary) WHERE salary > 50000",
          ],
          correctIndex: 1,
          explanation: "You cannot use aggregate functions directly in a WHERE clause. Instead, use a subquery: WHERE salary > (SELECT AVG(salary) FROM emp).",
        },
      ],
    },
  ],
};
