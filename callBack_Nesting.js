//CallBackFunction - when a function is passsed as a parameter in any other function, it would termed as callback function
// This function will remain in the entirity of the other function context

var functionComments = "Printing Details here as ";

function PrintDetails(param1, param2) {
    console.log(functionComments, param1, param2)
}


function GetDetails(userName, uAddress, CallBackFunction) {
    CallBackFunction(userName, uAddress)
}

GetDetails("Bryan", "Somewhere on earth", PrintDetails)

function AccountDetails(accType, accBal, CallBackFunction) {
    CallBackFunction(accType, "$100")
}

AccountDetails("Credit", "$1000", PrintDetails)

// create a function arithimatic calculation
// inside thta pass, 2 params
// create 4 different function - sum, substract, multiply and divide
// If we pass Sum it should do Sum, same way Substract, Multiply and Divide


function arithimaticCal(calculation,a,b){
    console.log("Print " + calculation + " of "+ a +" and "+ b)
}

function sum(a, b, CallBackFunction){
    CallBackFunction("sum",a,b)
    console.log(a + b)
    
}
function multiply(a, b,CallBackFunction){
    CallBackFunction("multiply",a,b)
    console.log(a * b)
   

}
function substract(a, b, CallBackFunction){
    CallBackFunction("substract",a,b)
    console.log(a - b)
   

}
function divide(a, b, CallBackFunction){
    CallBackFunction("divide",a,b)
    console.log(a / b)
    

}

sum(2,5,arithimaticCal)
multiply(4,7,arithimaticCal)
substract(18,7,arithimaticCal)
divide(49,7,arithimaticCal)