let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack16 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let studentSchema = new schemaObj({
    studentName : {type: String, required : true},
    password: {type:String, required : true},
    session : {type:String, required : true},
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb
})

let StudentModel = mongooseObj.model("student",studentSchema);//user - collection name, pluralised by mongodb

module.exports = StudentModel;