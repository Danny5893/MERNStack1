// OOP's fundamentals
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way
//2. Encapsulation - data hiding can be done through closures, with the help of asscess modifiers
//3. Polymorphism - Overriding ( it supports in function as well in classes) and Overloading (doesnot support overloading in js)
//4. Abstraction - not required in js

// Closures: a phoenomenon when we have two nested functions and the parent function returns child one, at the time of 
// return child function onlu retun some required properties and others are keep private

function Closures(params){

    var func = function(){
        return func;
    }
}

function Account(name,address, type){
    var AccName = name
    var Address = address
    var AccType = type
    var AccBal = "$2500"
    var AccPwd = "asdggagagsd"

    var funcGetDetails = function(userID, pwd){
        if(userID == name && pwd == AccPwd){
            return {
                AccName : AccName, //short hand
                AccType, //just declare one and ES6 will create key value pair
                AccBal 
            }
        }else{
            return{
                Alert : "Wrong Password"
            }
        }
    }
    return funcGetDetails
}

var closuerObj =  Account("gracia","US" ,"saving")

console.log(closuerObj("garcia", "ashgduyuywuu"))
console.log(closuerObj("Garcia","usaduuuwii"))

//try creating closure structure for student object, keeping their internal marks as private

