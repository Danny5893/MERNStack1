import React, { Component } from "react";
//import { connect } from "react-redux";

export default class StudentComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentName : props.student.studentName, // we need to read from store using props through container
            password : props.student.password,
            mobile : props.student.mobile,
            session : props.student.session
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("studentname")){
            this.setState({ studentName : value })
        }else if (classList.contains("pass")) {
            this.setState({ password : value })
        } else if (classList.contains("session")) {
            this.setState({ session : value })
        } else {
            this.setState({ mobile : value })
        }    
        evt.preventDefault();
    }

    loginStudent = (evt)=>{        
        let newStudent = this.state;
        alert("Logged Innn -"+JSON.stringify(newStudent))
        //this.props.AddUser(newUser) //returned in user container mapDispatchToProps
        this.props.LoginStudent(newStudent)
        evt.preventDefault();
    }

    render(){
        return(
            <>
                <h1>Student Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Student Name</b>
                            <input type="text" className="form-control col-md-6 studentname" 
                                    value={this.state.studentName} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Password</b>
                                    <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                            <b>Session </b>
                                <input type="text" className="form-control col-md-6 session" value={this.state.session} 
                                        placeholder="Session Name" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mobile </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                placeholder="Mobile" maxLength="11"
                                onChange={this.onTextChange} />
                            </div>

                            <input type="button" className={"btn btn-primary col-md-2 saveStudent"} 
                                    value={"Student Sign Up"} 
                                    onClick={this.loginStudent}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}