
//Create an object with name Person and have some properties in it
// inherit person object to create new object Student - this should have two properties additional and one method
// create one object Jobs - (JobTitle, Salary, Location) and one object Student with salary
// Merge person and Salary so that Salary comes from Jobs Object
// Create a null - prototype object


var Person ={
    Name : "Danny",
    Address : "US",
    Age : 20,
    PhoneNumber : 7711,

    getPersonDetails : function(){
        return {
            Name : this.Name,
            Address : this.Address,
            Age : this.Age,
            PhoneNumber : this.PhoneNumber    
        }
    }
}


var Student = Object.create(Person)
Student.Course = "Math"
Student.Tuition = "$1200"
Student.getTuition = function (){
    console.log(this.name, this.Tuition, this.Course)
}


var Jobs = {
    Titile : "job a",
    Salary : 20000,
    Location : "USA",
    
    getJobDetails : function(){
        return{
            Name : this.Name,
            Salary : this.Salary,
            Location : this.Location
        }
    }
}

var Student 

var nullProto = Object.create(null)
