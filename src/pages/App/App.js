import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import NewPost from '../../components/NewPost/NewPost';
import postService from '../../utils/postService';
import DetailsPage from '../DetailsPage/DetailsPage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: userService.getUser(),
			posts: []
		};
	}
	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	getPostId = (id) => {
		return this.state.posts[id];
	};

	handleAddPost = async ({ name, city, state, address }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ name, city, state, address })
		};
		await postService.createPost(options).then(() => this.getAllPost());
	};

	componentDidMount() {
		this.getAllPost();
	}

	getAllPost() {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		};

		postService.getPost(options).then((results) =>
			this.setState({
				posts: results
			})
		);
	}

	render() {
		return (
			<div>
				<Router>
					<NavBar user={this.state.user} handleLogout={this.handleLogout} />
					<Route
						exact
						path="/"
						render={({ history }) => <HomePage history={history} posts={this.state.posts} />}
					/>
					<Route
						exact
						path="/signup"
						render={({ history }) => (
							<SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
						)}
					/>
					<Route
						exact
						path="/login"
						render={({ history }) => (
							<LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
						)}
					/>
					<Route
						exact
						path="/newPost"
						render={({ history }) => <NewPost history={history} handleAddPost={this.handleAddPost} />}
					/>

					<Route
						exact
						path="/details/:id"
						render={(props) => <DetailsPage user={this.state.user} {...props} getPostId={this.getPostId} />}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
