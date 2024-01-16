//Container contains redux and react redux connection, implements mapStateToProps and mapDispatchToProps
//also allows developer to isolate react component with functions
import { connect } from "react-redux";
import StudentComponent from "./StudentComponent.jsx";
import { AddStudentToStore, SaveStudentToDB } from "../../../State/Student/studentAction.js";

//subscriber
let mapStateToProps = (state)=>{ //state - store object from configure store in store.js
    return { //define the props that we need to read from store
        student : state.StudentReducer.Student //now props.user - can be used in component to read user Initial_state
    }
}

//publisher
let mapDispatchToProps = (dispatch)=>{
    return { 
        AddStudent : (studentObj)=>dispatch(AddStudentToStore(studentObj)),
        LoginStudent : (newStudent)=>dispatch(SaveStudentToDB(newStudent))                    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);