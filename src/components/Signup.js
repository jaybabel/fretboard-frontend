import React from "react";

function Signup(props) {
  console.log('Signup: ', props);
  return (
    <div>
      <h1>Signup Form</h1>
      <div className="divSignup">
        <form onSubmit={props.handleSignup}>

          <input
            type="text"
            name="name"
            value={props.name}
            // placeholder="Your name (optional)"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="username"
            value={props.username}
            // placeholder="Enter a login name"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="password"
            value={props.password} 
            // placeholder="password"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="confirmPwd"
            value={props.confirmPwd}
            // placeholder="confirmPwd"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>      
      </div>
    </div>
  );
}

export default Signup;
