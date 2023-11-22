
//1 Example of bind function on browser, we must be able to change the object on click
//2 Create object without protoype and the inherit it futher
//3 Create a function to populate user details. 
//  func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic
//4 Javascript currying is achieved by returning functions from functions. Here, the outer function (print) 
//  supplies the printing to be used while the returned function allows the caller to supply the name of the printer.
//5 Create Two objects UserDetail (Properties should be  Name, Age, Street)and UserAddress(Name, Street, City, ZipCode), merge both of them in to UserDetail.


//1 Example of bind function on browser, we must be able to change the object on click
// var object1 = { name: "Object 1", value: 42 }
// var object2 = { name: "Object 2", value: 99 }

// var boundChangeObject1 = changeObject.bind(object1)
// var boundChangeObject2 = changeObject.bind(object2)

// document.getElementById('button1').addEventListener('click', boundChangeObject1)
// document.getElementById('button2').addEventListener('click', boundChangeObject2)


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
  