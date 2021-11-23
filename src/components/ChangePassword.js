import React from 'react';

function ChangePassword(props) {
  console.log("change password page", props.validatedUser);
  return (
    <div>
      <h1>Change Password Page</h1>
      <div className="divLogin">
        <form onSubmit={props.handleChangePassword}>
          <h3>{props.validatedUser} - change your password.</h3>
          <input
            onChange={props.handleChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <br></br>
          <br></br>
          <br></br>
          <label>New password</label><br></br>
          <input
            type="password"
            name="password"
            value={props.password} 
            placeholder="new password"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <br></br>
          <label>Retype password</label><br></br>
          <input
            type="password"
            name="password"
            value={props.password} 
            placeholder="confirm new password"
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="Change Password" />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
