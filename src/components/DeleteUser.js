import React from 'react';

function DeleteUser(props) {
  console.log("login page", props);
  return (
    <div>
      <h1>Delete User Page</h1>
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
          <input
            type="text"
            name="password"
            value={props.password} 
            placeholder="password"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="Delete User" />
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
