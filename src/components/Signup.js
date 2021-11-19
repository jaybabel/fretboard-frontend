import React from "react";

function Signup(props) {
  console.log(props);
  return (
    <div>
      <h1>Signup Form</h1>
      <div className="divSignup">
        <form onSubmit={props.handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="Enter a login name"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="confirmPwd"
            placeholder="confirmPwd"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>      
      </div>
      <h3>{props.validated ? "success" : "Please setup an account"}</h3>
    </div>
  );
}

export default Signup;
