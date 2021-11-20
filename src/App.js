import "./App.css";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ChordsSelection from "./components/ChordsSelection";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
      username: "",
      password: "",
      loggedIn: false,
      validatedUser: "",
      confirmPwd: ""
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log('handleChange ', this.state.username, this.state.password);
  };

// ********** Start - User signup code **********

handleSignup = (e) => {
  e.preventDefault();  
  console.log('handleSignup ', e)

  const data = {
    name: this.state.name,
    username: this.state.username,
    password: this.state.password,
    is_admin: false
  }

    axios.post(`${BASE_URL}/user/signup`, data)

}

handleValid = (e) => {
  e.preventDefault()
    this.setState({
      validated: true
    })
}

handleNotValid = (e) => {
  e.preventDefault()
    this.setState({
      validated: false
    })
}

// xxxxxxxxxx End - User signup code xxxxxxxxxx


  handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(`${BASE_URL}/user/login`, data)
      .then((response) => {
        this.setState({
          loggedIn: true,
          validatedUser: response.data.username
        })
        console.log('Is logged in: ', this.state.loggedIn)
        console.log('Logged in username is: ', this.state.validatedUser)
        console.log('response', response)
        // this.setState({ username: "" });
        // this.setState({ password: "" });
      })

      .catch((error) => {
        console.log('error - ', error);
        this.setState({
          loggedIn: false
        })
        console.log('Is logged in: ', this.state.loggedIn)
      });
  };

  render() {
    console.log('Is logged in: ', this.state.loggedIn)
    return (
      <div className="App">
        <nav className="navHeader">
          <h1>Jay's Fretboard</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/signup">Signup </Link>
          <h4>{this.state.validatedUser} is logged in.</h4>
        </nav>
        <Route
          exact path="/"
          render={(routerProps) => <ChordsSelection {...routerProps} />}
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
      </div>
    );
  }
}

export default App;
