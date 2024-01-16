import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
 
const Danny = () => {
  let params = useParams(); 
      

    let goToUser = useNavigate();

    let onGoToUserClick = (evt)=>{
        goToUser("/user");
        
        evt.preventDefault();//it stops the default behaviour like event propagation
    }


  return (
    <div className='Danny Info'>
    <h2>Danny Info: </h2>
    <hr/>
    <p className='danny-content'>
    First Name: Danny,
    Last Name: Hoang,
    Address: Chicago,
    Age: 30,
    Email: abc@gmail.com
    </p>


    <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={onGoToUserClick} 
                        //onSubmit={onGoToUserClick}
                        >Go To User</button>
    </div>
  )
}

export default Danny