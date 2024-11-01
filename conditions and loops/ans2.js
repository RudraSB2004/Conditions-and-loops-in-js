// Q2. Write a Program That Grades Students Based on Their Marks.
// Here's a program that assigns grades based on student marks:

function gradeStudent(marks) {
  if (marks > 90) {
    return "A Grade";
  } else if (marks > 70 && marks <= 90) {
    return "B Grade";
  } else if (marks > 50 && marks <= 70) {
    return "C Grade";
  } else {
    return "F Grade";
  }
}

let marks = 85;
console.log("Your grade is:", gradeStudent(marks));
