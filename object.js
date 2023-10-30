// {}, Object -
//Objects : Are the basics building blocks in Javascript with many predefined functions to be used at various fetures
//Objects mainely are key value pair and can be used to create a class structure

//Creating an object
// new Object({}), Object.create({})

var User = {
    Name : "Gauri",
    Age : 22,
    Session : "MERNStack",
    getUserDetails : function () {
        return {
            Name : this.Name,
            Session : this.Session,
            Address : this.Address,
            //Specialtiy : this.Specialtiy
        }
    }
}

//adding properties using prototype
//User.__proto__.Address = "Somewhere on earth";

//console.log(User.getUserDetails());


//Inheritance of JS Object
//1. Using new keyword - not a right way to inherit but a good way for extension and copy
// var Engineer = new Object(User);

// Engineer.Salary = "$25000"

// console.log(Engineer.getUserDetails())

// console.log(User.getUserDetails());

// Engineer.Speciality = "Mechanical Engineer";

// console.log(Engineer.Session);

// Engineer.getSpecialityAndAddress = function () {
//     return {
//         Speciality : this.Speciality,
//         Address : this.Address
//     }   
// }

// console.log(Engineer.getSpecialityAndAddress());

// //override 

// Engineer.getUserDetails = function () {
//     return {
//         Speciality : this.Speciality,
//         Address : this.Address,
//         Name : this.Name
//     }   
// }

// console.log(Engineer.getUserDetails());
// console.log(User.getUserDetails());

//2. Object.Create({}) : correct way of inheriting and overriding

var Engineer = Object.create(User);

Engineer.Specialtiy = "Mechanical Engineer"
Engineer.Name = "Danny" //Overriding property

Engineer.getSpeciality = function () {
    console.log(this.Name, this.Specialtiy)
}

// console.log(Engineer.getSpeciality());
// //console.log(User.getSpeciality());

// //override 

// Engineer.getUserDetails = function () {
//     return {
//         Speciality : this.Specialtiy,
//         Address : this.Address,
//         Name : this.Name
//     }   
// }


// console.log(Engineer.getUserDetails());
// console.log(User.getUserDetails());

// console.log(Engineer.__proto__)
// console.log(User.__proto__)

//3. Prototype of Empty Object

// var emptyObj = {}

// //4. Object without prototype

// var noPrototype = Object.create(null) //null prototype


// //5. Object.Assign - merge with immutability in place

// var User = {name : "Garcia", add1 : "Lake City 1", mobile : "9898989889"}

// var Address = {name : "Garcia", add1 : "Wall Streetss", productName : "New product" }

// //var Delivery = {User, Address}

// var Delivery = {}

// Delivery = Object.assign(Delivery, User, Address)

// User.Session = "Test Sessions" // follows the principles of immutability

// console.log(Delivery)