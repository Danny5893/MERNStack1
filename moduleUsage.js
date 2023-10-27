var {Student, highestGPA} = require("./module")

console.log(Student)

Student.name = "Tony"
Student.address = "Wasinton"
Student.course = "Math"

console.log(Student.getStudentInfo())
console.log(highestGPA)

console.log(globalThis.Student)