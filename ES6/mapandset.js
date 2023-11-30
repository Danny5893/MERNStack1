//map - is a data structure which is used to create objects and array with different types of keys
//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

//let user = [{Name : "Dillon"},{Address : {Address1}},{}]
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "This is a string type key - entry")
myMap.set(keyObj, "This is a object type key - entry")
myMap.set(keyFunc, "This is a function type key - entry")
myMap.set(keyNum, "This is a number type key - entry")

console.log(myMap.has("a string"))
console.log(myMap.get("a string"))
console.log(myMap.entries())

console.log(myMap.get(keyObj))
// console.log(myMap.get({}))
// console.log(myMap.get(function() {}))


console.log(myMap.delete("a string"))
console.log(myMap.get("a string"))
 

//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Khan","Jonathan", "Gauri", "Annie", "Danny", "Bryan"])

console.log(StudentSet.values())

console.log(StudentSet.add("Nhi"))

console.log(StudentSet.values())

console.log(StudentSet.add("Jonathan"))

console.log(StudentSet.values())

console.log(StudentSet.size)