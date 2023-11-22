//question :

let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}
//print firstname and sessionTopics, 
// console.log(StudentTest.firstname)
// console.log(StudentTest.sessionTopics.covered1)
// console.log(StudentTest.sessionTopics.covered2)

// //along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest
// let{firstname, lastname = "Your last name", address, sessionTopics : {covered1, covered2, covered3 = "ES6"}} = StudentTest
// console.log(lastname)
// console.log(covered3)

// //create a funtion with name multiply which accepts three parameters, and return multiplication of all
// //but if we dont pass any parameter it returns 0
// function multiply(p1=0, p2=0, p3=0){
//     return p1*p2*p3
// }
// console.log(multiply(4,5,7))
// console.log(multiply(2,78))


// //create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
// let arr = [1,2,3,4,5];
// arr[5]= "newval"

// for(const key in arr){
//     console.log(arr[key])
// }

// for(const number of arr){
//     console.log(number)
// }


// //create an example of const where we can update on property of the object, where it says const is mutable
// const Student = {
//     Name : "Addy",
//     Address : "ABC"
// }
// Student.Address = "Main Street"
// console.log(Student)


// //create a for loop using var and let, print each value in timeout after 2 second and to 
// //demonstrate functional scope of var and lexical of let 
// let animals = ["dog", "cat", "bird", "pig"]
// for(var i = 0; i < 4;i++){       //const animal of animals
//     setTimeout(function() {
//             console.log(animals[i]);
//           }, 2000);
// }

// var brands = ["Gucci", "LV", "H&M", "GymShark"]
// for(let i = 0; i < 4;i++){
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



//1 Example of bind function on browser, we must be able to change the object on click
//2 Create object without protoype and the inherit it futher
//3 Create a function to populate user details. 
//  func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic
//4 Javascript currying is achieved by returning functions from functions. Here, the outer function (print) 
//  supplies the printing to be used while the returned function allows the caller to supply the name of the printer.
//5 Create Two objects UserDetail (Properties should be  Name, Age, Street)and UserAddress(Name, Street, City, ZipCode), merge both of them in to UserDetail.


//1 Example of bind function on browser, we must be able to change the object on click
var object1 = { name: "Object 1", value: 42 }
var object2 = { name: "Object 2", value: 99 }

var boundChangeObject1 = changeObject.bind(object1)
var boundChangeObject2 = changeObject.bind(object2)

document.getElementById('button1').addEventListener('click', boundChangeObject1)
document.getElementById('button2').addEventListener('click', boundChangeObject2)


//2 Create object without protoype and the inherit it futher
let objectNoPrototy = Object.create(null)
objectNoPrototy.name = "Bi Rain"
objectNoPrototy.age = 30

console.log(objectNoPrototy)

let inheritObject = Object.create(objectNoPrototy)
inheritObject.job = "Developer"

console.log(inheritObject.name)
console.log(inheritObject.age)

//3 Create a function to populate user details. 
//  func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic
function populateDetail(address, callbackFunction) {
    let userDetails = {
      name: "John",
      age: 25,
      topic: "JavaScript",   
    }
    
console.log("Address:", address)
  
callbackFunction(userDetails);
}
  
function printUserDetails(user) {
    console.log("Name:", user.name)
    console.log("Age:", user.age)
    console.log("Topic:", user.topic)
}
  
  populateDetail("123 Main St", printUserDetails);



//4 Javascript currying is achieved by returning functions from functions. Here, the outer function (print) 
//  supplies the printing to be used while the returned function allows the caller to supply the name of the printer.



//5 Create Two objects UserDetail (Properties should be  Name, Age, Street)and UserAddress(Name, Street, City, ZipCode), merge both of them in to UserDetail.
var UserDetail = { Name : "David", age : 30, Street : "Main"}
var UserAddress = {Name : "David", Street : "Main", City : "Chicago", ZipCode : 66511}

function mergeObjects(userDetail, userAddress) {
    const mergedUserDetail = Object.assign({}, userDetail, userAddress);
    return mergedUserDetail;
}
var UserDetail = mergeObjects(UserDetail,UserAddress)
console.log("Merged User Details: ", UserDetail)
  