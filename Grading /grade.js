// Function 1 : Calculates grade
// It equates the students to the grade he/she needs to get
function calculateGrade(marks) {
    if (marks > 79 &&marks<= 100) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    } else {
    return 'Invalid input.Marks should be between 0 and 100.';
  }
}
  module.exports = calculateGrade;