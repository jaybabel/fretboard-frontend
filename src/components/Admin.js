import React from "react";

function Admin(props) {
  console.log("Admin page props: ", props);
  return (
    <div className="LSCA">
      <h1>Admin Page</h1>
      <div className="divListUsers">
        <h1>Users List</h1>
        {/* <select className="optSelectKey" value={props.user_accounts.username}>
          {props.state.username.map((user, index) => {
            return (
              <option user={user} value={props.user_accounts.value}>
                {user.username}
              </option>
            )
          })}
        </select> */}
      </div>
      <div className="divDeleteUser">
        <h1>Delete User</h1>
        <form className="frmDeleteUser" onSubmit={props.handleDeleteUser}>
          <br></br>
          <br></br>
          <label for="username">Username: </label>
          <input
            onChange={props.handleChange}
            type="text"
            name="username"
            placeholder="username"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <input className="btnChooseKey" type="submit" value="Delete User" />
        </form>
      </div>
    </div>
  );
}

export default Admin;
