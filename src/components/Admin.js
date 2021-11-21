import React from "react";

function Admin(props) {
  console.log("Admin page props: ", props);
  return (
    <div>
      <h1>Admin Page</h1>
      <div className="divSignup">
        <form className="frmUserAdmin">
          <select className="optSelectKey">
            {/* <option selected value=""></option>
            {props.userlist.map((userid, index) => {
                return (
                    <option id={userid.id} value={userid.username}>{userid}</option>
                )
            })} */}
          </select>
          <br></br>
          <br></br>
          <label for="name">Name: </label>
          <input
            onChange={props.handleChange}
            type="text"
            name="name"
            placeholder="name"
          />
          <br></br>
          <br></br>
          <input className="btnChooseKey" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Admin;
