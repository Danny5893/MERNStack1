import React from "react";
import HeaderComponent from "./Common/headerComponent"
import selfComponent from "./Common/selfComponent";

let ApplicationComponent = ()=>{
    let a = 10, b = 5;
    return(
        <>
            <selfComponent/>
            <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
            <h1>This is the Application Component</h1>

        </>
        
    )
}

export default ApplicationComponent
