import React, { Component } from 'react';

class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  formSubmit = () => {
    let username = this.usernameInput.current.value;
    let password = this.passwordInput.current.value;

    console.log("Signing in with:", username, password);

    this.usernameInput.current.value = '';
    this.passwordInput.current.value = '';
  };

  render() {
    return (
      <div>
        <h2>User Sign In</h2>
        <form className='form' action='/api/loginUser' onSubmit={this.formSubmit}>
            <b>User Name</b>
            <input type="text" placeholder={"User Name"} 
                        ref={this.usernameInput} maxLength={20}></input>
            <b>Password</b>
                    <input type="password" placeholder={"password"} 
                        ref={this.passwordInput} maxLength={20}></input>

                    <button type="submit" >Submit</button>
        </form>
      </div>
    );
  }
}

export default UserSignIn;
