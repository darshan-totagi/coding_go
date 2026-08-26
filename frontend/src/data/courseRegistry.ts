import { CourseData } from "./courseTypes";
import { JAVA_COURSE } from "./courses/javaCourse";
import { SQL_COURSE } from "./courses/sqlCourse";
import { C_COURSE } from "./courses/cCourse";

// Python meta — only for listing; actual pages use /courses/python-basics/ specific routes
export const PYTHON_META: Pick<CourseData, "id" | "title" | "level" | "description" | "icon" | "color" | "totalHours"> = {
  id: "python-basics",
  title: "Python Basics",
  level: "Beginner",
  description: "Learn Python from scratch — variables, loops, functions, data structures, OOP, and file handling.",
  icon: "🐍",
  color: "blue",
  totalHours: "~4 Hours",
};

export const COURSE_REGISTRY: Record<string, CourseData> = {
  [JAVA_COURSE.id]: JAVA_COURSE,
  [SQL_COURSE.id]: SQL_COURSE,
  [C_COURSE.id]: C_COURSE,
};

// All courses for listing page (Python first)
export const ALL_COURSES = [
  PYTHON_META,
  JAVA_COURSE,
  SQL_COURSE,
  C_COURSE,
] as const;
