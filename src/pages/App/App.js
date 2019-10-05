import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from  "../../components/NavBar/NavBar";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div>
        <Router>
          <h1>App</h1>
          <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
