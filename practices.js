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