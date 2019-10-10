import React, { Component } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import postService from '../../utils/postService';

class DetailsPage extends Component {
	state = {
		reviews: [],
		postId: this.props.getPostId(this.props.match.params.id)._id
	};

	componentDidMount() {
		this.getPostReviews(this.state.postId);
	}

	getPostReviews = (postId) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ postId })
		};

		postService.getReviews(options).then((results) =>
			this.setState({
				reviews: results.reviews
			})
		);
	};

	handleDelete = (e) => {
		let reviewId = e.target.id;
		let postId = this.state.postId;
		// console.log(postId);
		this.deleteReview(reviewId, postId);
	};

	deleteReview = async (reviewId, postId) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ reviewId, postId })
		};
		await postService.delReview(options).then((results) =>
			this.setState({
				reviews: results.reviews
			})
		);
	};

	render() {
		// this is to match the index of post from the getPost function
		let post = this.props.getPostId(this.props.match.params.id);
		return (
			<div>
				<h1>Details</h1>
				<p>{post.address}</p>
				<p>{post.area}</p>
				<p>{post.state}</p>
				<hr />
				<h3>Reviews</h3>
				{this.state.reviews.map((r, id) => (
					<div key={id}>
						<p>Comment: {r.content}</p>
						<p>Rating: {r.rating}</p>
						<p>Skills: {r.skills}</p>
						<button id={id} onClick={this.handleDelete}>
							X
						</button>
					</div>
				))}

				<ReviewForm postId={post._id} handleAddReview={this.props.handleAddReview} />
			</div>
		);
	}
}

export default DetailsPage;
