// functions - are first class member citizens in js, backbone of js, js is functional programming language.
// Ut us responsibleto give behavior to be used to achieve certain job

//user - class, getUserDetails - method/function
// keyword - function

//every function is pure function - it must have return statement , if not then js by then return the undefinded

//1. Named function
function MyFunc(){
return "Hello World"
}
console.log(MyFunc())

//2. Function expression
var FuncExps = function(a,b){
    console.log(a+b)
}
FuncExps(9,10)

//3. Singleton Function or IIFE - immediately incocable function expression

(function IIFE() {
    console.log()
})("Gauri")
// IIFE(params) can't be accessed second time

//4. construction function - used as class

function funcConstructor(name,age,address){
    this.name = name
    this.age = age
    this.address = address
    this.getUserDetails = function (){
        return this.name + this.age + this.address
    }
}

var user = new funcConstructor("bryan",10,"nBAcc street")

console.log(user.getUserDetails())



