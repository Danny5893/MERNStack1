//Practice questions
//1. Create a constructor Function with Name account and add properties like - AccType, Name, Balance, etc
//2. Create a method in it to return account details 
//3. Create an IIFE and try to access it after execution
//4. Create a function with name Add (accept two params) and
//  again create a function expression with name Add(three params), both should return the Sum of params
//5. Try executing both functions on top (i.e. before declaration of it and see results)




//1. Create a constructor Function with Name account and add properties like - AccType, Name, Balance, etc
//2. Create a method in it to return account details 
function accountName(AccType, name, Balance){
    this.AccType = AccType
    this.name = name
    this.Balance = Balance
    this.getAccountDetails = function(){
        return this.AccType + this.name + this.Balance
    }
}
var newAccount = new accountName("checking", "Andy", 2100)
// console.log(newAccount.getAccountDetails())


//3. Create an IIFE and try to access it after execution
// (function IIFE(account){
//     console.log(account)
// })("Saving")



// 4. Create a function with name Add (accept two params) and
//  again create a function expression with name Add(three params), both should return the Sum of params

console.log(add)

// function add(a, b){
//     return a + b
// }
// console.log(add(1,2))

function add(a,b,c){
    console.log(a+b+c)
}
console.log(add(2,7,29))


//5. Try executing both functions on top (i.e. before declaration of it and see results)

function add(a,b,c){
    return a + b + c
}
console.log(add(10,3))
console.log(add(2,7,29))
console.log(add(1,2,4))



//Create an object with name Person and have some properties in it
// inherit person object to create new object Student - this should have two properties additional and one method
// create one object Jobs - (JobTitle, Salary, Location) and one object Student with salary
// Merge person and Salary so that Salary comes from Jobs Object
// Create a null - prototype object


var Person ={
    Name : "Danny",
    Address : "US",
    Age : 20,
    PhoneNumber : 7711,

    getPersonDetails : function(){
        return {
            Name : this.Name,
            Address : this.Address,
            Age : this.Age,
            PhoneNumber : this.PhoneNumber    
        }
    }
}


var Student = Object.create(Person)
Student.Course = "Math"
Student.Tuition = "$1200"
Student.getTuition = function (){
    console.log(this.name, this.Tuition, this.Course)
}


var Jobs = {
    Titile : "job a",
    Salary : 20000,
    Location : "USA",
    
    getJobDetails : function(){
        return{
            Name : this.Name,
            Salary : this.Salary,
            Location : this.Location
        }
    }
}

var student1 = Object.create(Person,Jobs)



var nullProto = Object.create(null)
