// operators like --- &&(and) || (or) , !, = (assignment), ==, ===, <, >, >=, <=, ++ 
// ternary operator-- ?

var validVoter = true
var validAge = "18"
 
if(validVoter && validAge >= 18) {   // == only check value not data type === check both 
    console.log("valid voter!! can vote")
}
      
else {
    console.log("Invalid Voter! can't vote")
}


validVoter && validAge === 18 ? console.log("valid voter! can vote") 
    : console.log("invalid voter! can't vote")


// continous variable declaration

var firstVar =1, second = 2;
console.log(firstVar)