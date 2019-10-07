import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import NavBar from  "../../components/NavBar/NavBar";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import HomePage from "../HomePage/HomePage";
import NewPost from "../../components/NewPost/NewPost";
import postService from "../../utils/postService";


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

  handleAddPost = async ({ title }) => {
    const options = {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({title})
    }
    await postService.createPost(options) 
  }

  render() {
    return (
      <div>
        
        <Router>
          <h1>Deafinitely Friendly</h1>
          <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
          <Route
          exact
          path="/"
          render={({ history }) => (
          <HomePage
          history={history}
            />
          )}
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
            <Route
            exact
            path="/newPost"
            render={({ history }) => (
              <NewPost
                history={history}
                handleAddPost={this.handleAddPost}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
