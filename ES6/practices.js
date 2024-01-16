let val;
val = ["my variable", "java", " javascript", "python"]

const Student = {
    Name : "student 1",
    ID : 101
}

let users = {username: "abc", userId: "111", userEmail: "abc111@gmail.com"}
for(const user in users){
    console.log(user)
}

for(const language of val){
    console.log(" " + language)
}

//deconstructor both array and object

let arr = ["a", "b", "c"]
// let first, second, third;
// first = arr[0]
// second = arr[1]
// third = arr[2]

// let[first, second, third] = ["a", "b", "c"]

let[first, second, third, fourth="default"] = ["a", "b", "c"]


let StudentTest = {
        firstname : "Put your name",
        address : " ??",
        sessionTopics : {
            covered1 : "CoreJS",
            covered2 : "OOJS"
        }
    }
    
let{firstname, lastname = "Your last name", address, sessionTopics = {covered1, covered2, covered3 : "ES6"}} = StudentTest




//default param
function multiply(p1=0, p2=0, p3=0){
    return p1*p2*p3
}
console.log(multiply(4,5,7))
console.log(multiply(2,78))


//short hand
let a = "A", b = "B", c= "C"
let UpperLetter = {
    a : a,
    b : b,
    c : c
}

let UpperLetters = {a,b,c}
console.log("Upper Letters are: ", UpperLetters)