// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. Get heroes who are not evils
let notEvilsHeroes = heroes.filter(hero=> hero.isEvil == false);
console.log(notEvilsHeroes)

// b. Print Unique family names
let uniqueFamilyName = heroes.reduce((prevVal, currVal, index, list) => {
    prevVal[currVal.family] = prevVal[currVal.family]

    return prevVal
}, new Set())
console.log(uniqueFamilyName)

// c. Print Hero Names from given objects, and append sir in each of them before printing
let heroesName = heroes.map((hero)=> {
    return {"Hero Name" : hero.name + " Sir"}
}).filter(hero => hero!=undefined)
console.log(heroesName)

// d. Do we have any hero in Marvel Family who is not evil
let heroInMarvel = heroes.some(hero => hero.isEvil == false)
console.log(heroInMarvel)


//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map();

let keyString = 'Key String', keyOjbect = {}, keyFunc =function(){return 1}, keyNum = 10;

myMap.set(keyString,"Key Stirng of the Map")
myMap.set(keyOjbect,"Object of the Map")
myMap.set(keyFunc,"Key Function of the Map")
myMap.set(keyNum,"Key Number of the Mao")

console.log(myMap.has("Key String"))
console.log(myMap.get("Key String"))
console.log(myMap.entries())

console.log(myMap.clear(keyFunc))
console.log(myMap.delete("Key String"))

let PersonSet = new Set(["Abby", "Andy", "David", "Annie", "Steve"])
console.log(PersonSet.values())
console.log(PersonSet.add("Moon"))
console.log(PersonSet.size)
console.log(PersonSet.add("David"))
console.log(PersonSet.delete("Moon"))

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let ES6 = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve({
            "5 ES6 features" : "Short Hand, Spead and Rest, ForIn ForOut, Arrow Function, Destructuring"
        })
    },2000);
    setTimeout(()=> {
        reject({
            "Status" : "Progressing",
        })
    },3000) 
})
console.log(ES6)



//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

function multiple(m,n){
    let multiple = 1
    for(let i = m; i<=n; i++){
        multiple = multiple*i;
    }
    return multiple
}
console.log(multiple(1,8))

//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
console.log(person.userDetails.last)
let{userDetails:{first,last, contact = "9119119110"}} = person
console.log(contact)


//6. Give me an example of const data manipulation






//7. What is the difference between for-of and for-in show with examples
let odd = [1,3,5,7,9]
for(const number in odd){
    console.log(odd[number])
}

let even = [2,4,6,8,10]
for(const number of even){
    console.log(" " + number)
}

//8. Give me an example of bind and write its usage, comparison with arrow function
let Employee = {
    name: 'John',
    employeeDetail: function() {
      console.log(`Employee name is ${this.name}.`)
    }
  }
  
  let employeeDetailFunction = Employee.employeeDetail
  
  let bindEmployeeDetailFunction = employeeDetailFunction.bind(Employee)
  
  console.log(bindEmployeeDetailFunction())





//9. Create an example showing usage of event loop in concurrent execution cycle
console.log('Start of cycle');

setTimeout(() => {
    console.log('Operation 1');

    console.log('Operation 1 completed');
}, 2000);
setTimeout(() => {
    console.log('Operation 2');

    console.log('Operation 2 completed');
}, 1000);
console.log('End of cycle');


//10. create an example showing usage of short hand, default param and template literal.
let fisrtName = "David", lastName = "Brown";  
let student = {fisrtName,lastName}
console.log(student)

function add(a =0, b =0){  //default a=0 and b=0 if no assign value
    return (a + b)
}
console.log(add(39,12))
console.log(add(3))
console.log(add())

let age = 20
let introduction = `Hello, my name is ${fisrtName} ${lastName} and I am ${age} years old.`
console.log(introduction)

