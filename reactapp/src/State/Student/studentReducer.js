import * as ActionTypes from "../actionTypes";

const Initial_State = {
    Student : {
        studentName : "DANNY",
        password : "",
        session : "MERN Stack",
        mobile : 0
    }
}

//write callback/ reducer to generate new state upon action change
let StudentReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {
        case ActionTypes.AddStudentToStore:
           
            return {...state, Student : action.payload}

        default:
            return state
    }
}

export default StudentReducer;