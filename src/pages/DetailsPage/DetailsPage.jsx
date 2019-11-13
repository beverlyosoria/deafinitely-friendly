import React, { Component } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import postService from '../../utils/postService';
import {
	MDBContainer,
	MDBTable,
	MDBCardTitle,
	MDBCardText,
	MDBInputGroup,
	MDBInput,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody
} from 'mdbreact';

class DetailsPage extends Component {
	state = {
		reviews: [],
		postId: this.props.getPostId(this.props.match.params.id)._id
	};
	// ------ Send post Id to server --------
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
		//  Set results to reviews array
		postService.getReviews(options).then((results) =>
			this.setState({
				reviews: results.reviews
			})
		);
	};

	handleAddReview = async ({ content, rating, skills, postId }) => {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ content, rating, skills, postId })
		};
		await postService.createReview(options).then((results) =>
			this.setState({
				reviews: results.reviews
			})
		);
	};

	handleDelete = (e) => {
		let reviewId = e.target.id;
		let postId = this.state.postId;
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
		// match the index of post from the getPost function
		let post = this.props.getPostId(this.props.match.params.id);
		// Hides form if user is not logged in
		let userReview = this.props.user ? (
			<div>
				<ReviewForm postId={post._id} handleAddReview={this.handleAddReview} />
			</div>
		) : (
			<div align="center">
				{' '}
				Log In to leave a review!
				<br />
			</div>
		);
		return (
			<div>
				<MDBContainer>
					<MDBRow>
						<MDBCol align="center">
							<h1>Details</h1>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol align="center">
							<MDBCard style={{ width: '22rem' }}>
								<MDBCardBody>
									<MDBCardTitle>
										<p>{post.name}</p>
									</MDBCardTitle>
									<MDBCardText>
										<p>{post.address}</p>
										<p>{post.city}</p>
										<p>{post.state}</p>
									</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>

					<hr />
					<MDBRow>
						<MDBCol>
							<h3>Reviews</h3>
							<MDBTable className="mt-3" scrollY>
								{this.state.reviews.map((r, id) => (
									<div key={id} className="mb-2">
										<p>
											<strong>Comment:</strong> {r.content}
										</p>
										<p>
											<strong>Rating:</strong> {r.rating}
										</p>
										<p>
											<strong>Skills:</strong> {r.skills}
										</p>
										<button className="btn btn-sm" id={id} onClick={this.handleDelete}>
											Delete
										</button>
										<hr />
									</div>
								))}
							</MDBTable>
						</MDBCol>
					</MDBRow>
					{userReview}
				</MDBContainer>
			</div>
		);
	}
}

export default DetailsPage;
