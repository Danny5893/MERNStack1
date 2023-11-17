// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object


// name = "Gauri"
// age = "22"


var user = { name:"Danny", age : 21, session : "Javascript" }
var user2 = { name:"Arda", age : 20, session : "OOJS" }

//this - execution context of executing function

// function PrintDetails(comment) {
//     //console.log(this)
//     console.log(comment)
//     console.log(this.name, this.age, this.session)
// }

//call - accepts first parameter which we want to set as execution context (this)
// PrintDetails.call(user, "Setting Execution Context of a function using call");
// PrintDetails.call(user2, "Setting Execution Context of a function using call");

// var myClassObj = new MyClass()
// myClassObj.PrintDetails()


function GetDetails(concept, session1, session2, session3, session4, session5) {
    //console.log(this)
    console.log(`Call Extension - ${concept}`)

    console.log(`${session1} 
                    ${session2} 
                        ${session3} 
                            ${session4} 
                                ${session5} `)

            if (this.name) {
console.log(`The User Details are as below 
            Name is - ${this.name}
            Age is - ${this.age}
            Session is - ${this.session} `)
            } else {
console.log(`Context is not used but parameters are used `)
            }
    
}

// GetDetails.call(user, "Setting", "Execution", "Context", "of a function", "using call");

// //GetSessionList - returns list of sessions []

// var seesionList = ["JS","ES6","NODEJS","Express","React","Redux"];

// GetDetails.apply(user, seesionList)
// GetDetails.apply(user2, seesionList)

// //just in case we dont want to pass any context but we need to set parameters as array
// GetDetails.apply(null, seesionList)


//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases

var student1 = {ID: 5, name: "Arda" , age : 22}
var student2 = {ID: 3, name: "Danny", age : 21}

var listSubjects = ["Subjects","Chemistry","Math", "English", "Spanish", "Physic"]

function GetStudentDetails(subjects, subject1, subject2,subject3, subject4, subject5){
    if(this.ID){
    console.log(`The Student Details are as below: 
                Student ID: ${this.ID}
                Name: ${this.name}
                Age: ${this.age}`)
    }else{
        console.log(`The Student for this ID is not available!`)
    }

    console.log(`Subjects Student can take: - ${subjects}: ${subject1} ${subject2} ${subject3} ${subject4} ${subject5}`)
}

GetStudentDetails.call(student2,"Subjects","Chemistry","Math", "English", "Spanish", "Physic")
GetStudentDetails.apply(student1,listSubjects)