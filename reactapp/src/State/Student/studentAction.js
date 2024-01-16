import * as ActionTypes from "../actionTypes";
import axios from "axios";
//call back function to define type and payload to be used in reducer
export const AddStudentToStore = (newStudent)=>{
    return {
        type : ActionTypes.AddStudentToStore,
        payload : newStudent
    }
}


//server call

export const SaveStudentToDB = (newStudent)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/student/api/signinup",//uri or end point of singninup api
                newStudent //passing into the body req.body
            )
            .then((savedStudent)=>{
                let signdStudent = savedStudent.data;
                console.log(signdStudent)
                dispatch(AddStudentToStore(signdStudent))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}