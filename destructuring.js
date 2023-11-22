// Destructuring allows to not create multiple variables and initializers for the same
//1. Array Destructuring
//a. Mapping values from array
// let arr = ["one", "two", "three"]
// let first, second, third;
// first = arr[0]
// second = arr[1]
// third = arr[2]

// let[first,second,third] = ["one","two","three"]

// console.log(first)
// console.log(second)
// console.log(third)

// b. when value is not present/defaulting
// let[first,second,third,fourth="default"] = ["one","two","three"]
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)



//2. Object destructuring

let User = {Session : "ES6", Topic: "Destructuring", Timing : {FirstSlot : "9am" , SecondSlot : "10am"}}

// console.log(User.Topic)
// console.log(User.Timing.SecondSlot)

let{Topic, Timing : {SecondSlot, ThirdSlot = "11am"}} = User
console.log(Topic)
console.log(SecondSlot)
console.log(ThirdSlot)



// //question :

// let StudentTest = {
//     firstname : "Put your name",
//     address : " ??",
//     sessionTopics : {
//         covered1 : "CoreJS",
//         covered2 : "OOJS"
//     }
// }
// //print firstname and sessionTopics, 
// console.log(StudentTest.firstname)
// console.log(StudentTest.sessionTopics.covered1)
// console.log(StudentTest.sessionTopics.covered2)

// //along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest
// let{firstname, lastname = "Your last name", address, sessionTopics = {covered1, covered2, covered3 : "ES6"}} = StudentTest

// //create a funtion with name multiply which accepts three parameters, and return multiplication of all
// //but if we dont pass any parameter it returns 0
// function multiply(p1=0, p2=0, p3=0){
//     return p1*p2*p3
// }
// console.log(multiply(4,5,7))
// console.log(multiply(2,78))


// //create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
// let arr = [1,2,3,4,5];
// arr[5]=6

// for(const key in arr){
//     console.log(key)
// }

// for(const number of arr){
//     console.log(" "+ number)
// }


// //create an example of const where we can update on property of the object, where it says const is mutable
// const Student = {
//     Name : "Addy",
//     Address : "ABC"
// }
// Student.Address = "Main Street"


// //create a for loop using var and let, print each value in timeout after 2 second and to 
// //demonstrate functional scope of var and lexical of let 
// let animals = ["dog", "cat", "bird", "pig"]
// for(const animal of animals){
//     setTimeout(function() {
//             console.log(animal);
//           }, 2000);
// }

// var brands = ["Gucci", "LV", "H&M", "GymShark"]
// for(let i = 0; i < brands.length;i++){
//     setTimeout(function() {
//         console.log(brands[i])
//     },2000);
// }




//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

