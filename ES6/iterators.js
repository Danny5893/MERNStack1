//We can do iterations over an array and also by using for, forin/of loops
//However when need to iterate and at the same time do manipulation in array of objects or in object
// When we do new changes it should not impact the core object, preserve the immutability

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
];

//1. List of persons saved by captain america

let personsSvdByCA = personsList.filter(prsn=> prsn.savedby == "CaptainAmerica")

// console.log(personsSvdByCA)
// console.log(personsList)

//2. List the Names of persons saved by Iron Man

let personsSvdByInMn = personsList.map(prsn=> prsn.savedby == "IronMan" ? prsn.name : "").filter(prsn=> prsn!="")

console.log(personsSvdByInMn)

let prsnManipulation = personsList.map((prsn)=> {
                            if(prsn.savedby == "IronMan")  
                                    return {
                                        "Person Name ": prsn.name + " Safe",
                                        "ID ": prsn.id + 10
                                    } 
                                }).filter(prsn=> prsn!=undefined)
//console.log(prsnManipulation)
//console.log(personsList)

//3. Any person saved by SpiderMan

let isOneSvdBySpiderMan = personsList.some(prsn=> prsn.savedby == "SpiderMan")
//console.log(isOneSvdBySpiderMan)

let isOneSvdByHulk = personsList.some(prsn=> prsn.savedby == "Hulk")
//console.log(isOneSvdByHulk)

//4. Get count of uniquely saved persons by each superhero

let eachSuperHeroSaves = personsList.reduce((prevVal, currVal, index, list)=>{
    console.log(`prevVal ${prevVal}`)
    //console.log(`currVal ${currVal.name}`)

    console.log(`index ${index}`)
    //console.log(`list ${ JSON.stringify(list)}`)
    console.log(prevVal)

    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1

    return prevVal
}, new Set())

console.log(eachSuperHeroSaves)


//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list

let prsnJavascript = persons.filter(prsn=> prsn.tags == "javascript")
console.log(prsnJavascript)

let prsnJava = persons.map(prsn=> prsn.tags == "java"? prsn.name : "Developer").filter(prsn=> prsn!="")
console.log(prsnJava)

let isPersonPython = persons.some(prsn=> prsn.tags == "Python")
console.log(isPersonPython)

let countProgrammer = persons.reduce((prevVal,currVal,index, list)=>{

    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1
    return prevVal
}, new Set())
console.log(countProgrammer)