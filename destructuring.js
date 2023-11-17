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

let{Topic, Timing = {SecondSlot, ThirdSlot : "11am"}} = User
console.log(Topic)
console.log(Timing.SecondSlot)
console.log(Timing.ThirdSlot)