let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "BatMan"},
]

let personsSvdByCA = personsList.filter(prsn=>prsn.savedby == "CaptainAmerica")
console.log(personsSvdByCA)

let personsSvdByIR = personsList.filter(prsn=>prsn.savedby == "IronMan" ? prsn.name : "").filter(prsn=> prsn!="")
console.log(personsSvdByIR)

let prsnManipulation = personsList.map((prsn)=> {
    if(prsn.savedby == "IronMan")
        return{
            "Person Name ": prsn.name + " Safe",
            "ID " : prsn.id + 10    
        }
    }).filter(prsn=> prsn!= undefined)

console.log(prsnManipulation)

let isOneSvdBySpiderMan = personsList.some(prsn=> prsn.savedby == "SpiderMan")
console.log(isOneSvdBySpiderMan)

let isOneSvdByHulk = personsList.some(prsn=> prsn.savedby == "Hulk")
console.log(isOneSvdByHulk)

let eachSuperHeroSaves = personsList.reduce((prevVal, currVal, index, list)=> {
    // console.log(`prevVal ${prevVal}`)
    // console.log(`currVal ${currVal.name}`)
    console.log(prevVal)
    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1

    return prevVal
},new Set())
console.log(eachSuperHeroSaves)



let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"},
]

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