//Q1. Create a file with name basics and show all the features that you know about javascript
//    dynamic typing, functions, closures , objects, browsers, ES6, moudule, SPA

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var value = "Robert"
console.log(value, typeof value)
var value = .0266
console.log(value, typeof value)
var value = false
console.log(value, typeof value)
var value = {myname : "Test Me"}
console.log(value, typeof value)
var value = 25166665
console.log(value, typeof value)
var value = undefined
console.log(value, typeof value)
var value = true
console.log(value, typeof value)
var value = "Robert Jr."
console.log(value, typeof value)
var value = null
console.log(value, typeof value)
var value =  {}
console.log(value, typeof value)
var value = -32767
console.log(value, typeof value)


//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function User(firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.getUserInfo = function(){
        return this.firstname + this.lastname + this.age
    }
}


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doaddition(a,b,c){
    return (a+b+c)
}
console.log(doaddition(2,3,4))   // output of 9 because the input given 3 numbers required by the function
console.log(doaddition(2))       // output NaN because only 1 number was given in the input, required are 3 numbers to do addition
console.log(doaddition(2.3,4))   // output NaN because only 2 number was given in the input, required are 3 numbers to do addition
console.log(doaddition("first",3,"three")) //output first3three, 2 of 3 inputs are string so the function treats all inputs as string and addint all string together


//Q5. Print the topics you have done so far exporting it from one file and printing in another

var {Student, highestGPA} = require("./module")

console.log(Student)


console.log(Student.getStudentInfo())
console.log(highestGPA)

console.log(globalThis.Student)


//Q6. Give me an example of your choice on closure, objects, prototype, each.
//Closure
function Student(ID,firstname, lastname, gpa){
    var StudentID = ID
    var Firstname = firstname
    var Lastname = lastname
    var GPA = gpa
    var funcGetDetails = function(studentID){
        if(studentID == ID){
            return{
                StudentID : StudentID,
                Firstname : Firstname,
                Lastname : Lastname,
                GPA : GPA
            }
        } else {
            return{
                    Arlert : "Student ID not valid!"
            }
        }
     }
        return funcGetDetails
}
   
//Object
var student = {
    name: "Danny",
    ID: 2,
    Course: "Math",
    getStudentInfo : function(){
        return{
            name : this.name,
            ID : this.ID,
            Course : this.Course
        }
    }
}
var student1 = Object.create(student)
student1.name = "Tony"
student1.ID = 4
student1.Course = "Chemistry"
console.log(student1)


//Q7. Create an object without prototype chain or i do not want it to be inherited further

var object1 = Object.create(null)
console.log(object1)


//Q8. what will the following code output? why?

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined

