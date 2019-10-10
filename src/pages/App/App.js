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

	handleAddPost = async ({ name, area, state, address }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ name, area, state, address })
		};
		await postService.createPost(options);
	};

	handleAddReview = async ({ content, rating, skills, postId }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ content, rating, skills, postId })
		};
		await postService.createReview(options);
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
					<h1>Deafinitely Friendly</h1>
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
						render={(props) => (
							<DetailsPage {...props} getPostId={this.getPostId} handleAddReview={this.handleAddReview} />
						)}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
