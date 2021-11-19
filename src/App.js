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
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(this.state.username, this.state.password);
  };

  handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post(`${BASE_URL}/user/login`, data)

      .then(() => {
        this.setState({ username: "" });
        this.setState({ password: "" });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <nav className="navHeader">
          <h1>Jay's Fretboard</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/signup">Signup </Link>
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
          render={(routerProps) => <Signup {...routerProps} />}
        />
      </div>
    );
  }
}

export default App;
