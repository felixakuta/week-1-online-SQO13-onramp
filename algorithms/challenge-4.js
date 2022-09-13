function calculateGrade(marks) {
    if (marks<=49) {
        return "F";
    } else if (marks <= 59) {
        return "E";
    } else if (marks<=69) {
        return "D";
    } else if (marks <= 79) {
        return "C";
    } else if (marks <= 89) {
        return "B";
    } else if (marks <= 100) {
        return "A";
    } else {
        return "Score not available";
    }
}

   
  module.exports =calculateGrade
    console.log(calculateGrade([80, 80, 70]));
    