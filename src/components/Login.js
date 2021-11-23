import React from "react";


function Login(props) {
  console.log("login page", props);
  return (
    <div className="LSCA">
      <h1>User Login Page</h1>
      <div className="divLogin">
        <form onSubmit={props.handleLogin}>
          <h3>Username</h3>
          <input
            onChange={props.handleChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <br></br>
          <br></br>
          <h3>Password</h3>
          <input
            onChange={props.handleChange}
            type="password"
            name="password"
            placeholder="password"
          />
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="Login" />          
        </form>   
      </div>
    </div>
  );
}

export default Login;
