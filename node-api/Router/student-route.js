let express = require("express");
let studentRoute = express.Router();
const studentDataModel = require('../DataModels/studentDataModel');

//localhost:9000/user/api/signinup
studentRoute.post("/api/signinup", (req, res)=>{
    let student = req.body //this will be sent as post request from userAction
    console.log(student)

    studentDataModel.findOne({studentName:req.body.studentName}).then((existingStudent)=>{
        if(existingStudent) {
            console.log("sign in success ", existingStudent);
            res.send(existingStudent)
        } else { 
            let newStudent = new studentDataModel(student)//req.body
            newStudent.save().then((newStudent)=>{//will get _id once document is created
                console.log("successful signup ", newStudent);
                res.send(newStudent)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})

studentRoute.get("/api/getstudent",(req, res)=>{
    studentDataModel.find()
    .then((allStudents)=>{
        res.send(allStudents)
    })
    .catch(()=>{
        res.send("error while fetching students")
    })
})

module.exports = studentRoute;