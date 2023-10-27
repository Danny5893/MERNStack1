var Student = {
    name : "Student1",
    address : " US University",
    course : "Computer",
    getStudentInfo : function (){
        return{
            name: this.name,
            address: this.address,
            course: this.course
        }
    }
}

var highestGPA = 4.00

globalThis.Student = {
    Student : "Second Student"
}

module.exports = {
    Student, highestGPA
}