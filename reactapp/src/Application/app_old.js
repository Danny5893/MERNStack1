import React, { Component } from "react";
import "./app.css";

import HeaderComponent from "./Common/HeaderComponent"
import Footer from "./Common/footerComponent";
import NotFound from "./Common/NotFoundComponent";
import HomeComponent from "./Common/HomeComponent";

//class component

export default class ApplicationComponent extends Component {

    constructor(props){ //props - is used to pass information from parent to child component
        super(props); //this is used to push back updated state in parent components

        this.state = { //state is tightely coupled with react renderer and reads the change to recreate virtual dom
            name : "Khan Tran",
            header : "10,001+ employees · UI Specialist"
        }
    }

    changeNameEvent = ()=>{
        //alert("Name will be updated!!!!")

        this.setState({
            name : "Annie ",
            header : "20,001+ employees· For backend dev!!!",
        })
    }

    //get data from child component using callback function
    getChildData = (data)=>{
        //alert(data)

        this.setState({
            name : data
        })
    }

    //this method returns virtual dom on every change of state using this.setState
    render(){ //life cycle method of React.Component base class, generated virtual dom on state change
        let a = 10, b = 5;
        //let header = "10,001+ employees · UI Specialist"
        console.log("Rendering the application component")
        return(
            <>
                <h1>{this.state.header}</h1>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData}/>
                <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
                <h1>This is the Application Component</h1>
                <button onClick={this.changeNameEvent}>Change Name</button>
                <HomeComponent />
                <NotFound />
                <Footer />
                {/* <Footer name={this.state.name}>
                    <HeaderComponent />
                    <h3>Keep Shopping with us</h3>
                    <h3>Most discounts on each purchase!!!</h3>
                </Footer> */}
            </>
        )
    }
}




//functional component
// let ApplicationComponent = ()=>{
//     let a = 10, b = 5;
//     let header = "10,001+ employees · UI Specialist"
//     return(
//         <>
//             <HeaderComponent/>
//             <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
//             <h1>This is the Application Component</h1>
//             <h1>{header}</h1>
//         </>
//     )
// }

// export default ApplicationComponent