import "./App.css";
import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import ChordsSelection from "./components/ChordsSelection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ChangePassword from "./components/ChangePassword";
import Admin from "./components/Admin";
import axios from "axios";

// add code to switch between local and Heroku
let BASE_URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3005";
} else {
  BASE_URL = "https://jays-fretboard.herokuapp.com";
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      username: "",
      password: "",
      loggedIn: false,
      validatedUser: "",
      confirmPwd: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log("handleChange ", this.state.username, this.state.password);
  };

  handleSignup = (e) => {
    e.preventDefault();
    console.log("handleSignup ", e);

    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      confirmedPwd: this.state.confirmPwd,
      is_admin: false,
    };

    this.state.confirmPwd !== this.state.password ? alert('Passwords do not match.') :
    
    axios.post(`${BASE_URL}/user/signup`, data);

    this.props.history.push("/");    

  };


  handleValid = (e) => {
    e.preventDefault();
    this.setState({
      validated: true,
    });
  };

  handleNotValid = (e) => {
    e.preventDefault();
    this.setState({
      validated: false,
    });
  };

  handleChangePassword = (e) => {
    e.preventDefault();

    this.state.validatedUser === "admin" ||
    this.state.validatedUser === e.target[0].value
      ? axios
          .post(
            `${BASE_URL}/user/changePassword/${e.target[0].value}/${e.target[2].value}`
          )
          .then((response) => {
            this.props.history.push("/");
          })
      : alert("You are not authorized to perform this function.");

    };

  handleDeleteUser = (e) => {
    e.preventDefault();

    this.state.validatedUser === "admin" && e.target[0].value !== "admin"
      ? axios
          .post(`${BASE_URL}/user/delete/${e.target[0].value}`)
          .then((response) => {
            console.log("User deleted.");
          })
      : alert("You are not authorized to perform this function.");

      this.props.history.push("/"); 
  };

  handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post(`${BASE_URL}/user/login`, data)
      .then((response) => {
        this.setState({
          loggedIn: true,
          validatedUser: response.data.username,
        });
        this.props.history.push("/");
      })

      .catch((error) => {
        console.log("error - ", error);
        this.setState({
          loggedIn: false,
        });
        console.log("Is logged in: ", this.state.loggedIn);
      });
  };

  render() {
    console.log("Is logged in: ", this.state.loggedIn);
    return (
      <div className="App">
        <nav className="navHeader">
          <h1 id="banner">Jay's Fretboard</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/signup">Signup </Link>&nbsp;&nbsp;&nbsp;
          <Link to="/changePassword">Change Password </Link>&nbsp;&nbsp;&nbsp;
          <Link to="/admin">Admin</Link>
          <h4>{this.state.validatedUser} is logged in.</h4>
        </nav>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <ChordsSelection
              {...routerProps}
              validatedUser={this.state.validatedUser}
            />
          )}
        />
        <Route
          path="/login"
          render={(routerProps) => (
            <Login
              {...routerProps}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
            />
          )}
        />
        <Route
          path="/signup"
          render={(routerProps) => (
            <Signup
              {...routerProps}
              handleChange={this.handleChange}
              handleSignup={this.handleSignup}
            />
          )}
        />
        <Route
          path="/changePassword"
          render={(routerProps) => (
            <ChangePassword
              {...routerProps}
              handleChange={this.handleChange}
              handleChangePassword={this.handleChangePassword}
              validatedUser={this.state.validatedUser}
            />
          )}
        />
        <Route
          path="/admin"
          render={(routerProps) => (
            <Admin
              {...routerProps}
              handleChange={this.handleChange}
              handleDeleteUser={this.handleDeleteUser}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
