import React, { Component } from 'react';
import './NewPost.css';
import Map from './../../components/Map/Map';

class NewPost extends Component {
	state = {
		name: ''
	};

	handleOnChange = (event) => {
		this.setState({
			name: event.target.value
		});
	};

	render() {
		return (
			<div>
				<h1>Post</h1>
				<form className="post">
					{' '}
					<input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} />
					<Map
						handleAddPost={this.props.handleAddPost}
						name={this.state.name}
						google={this.props.google}
						center={{ lat: 30.2672, lng: -97.7431 }}
						height="300px"
						zoom={15}
					/>
					<br />
					<br />
					<br />
				</form>
			</div>
		);
	}
}

export default NewPost;
