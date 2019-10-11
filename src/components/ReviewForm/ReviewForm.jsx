import React, { Component } from 'react';
import './ReviewForm.css';
import { MDBContainer, MDBIcon, MDBInputGroup, MDBInput, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

let checkedArr = [];

let options = [
	'Positive Attitude, ',
	'Patience, ',
	'Makes Eye Contact, ',
	'Speaks Clearly, ',
	'Pen and Paper Available, ',
	'Willingness to Gesture, ',
	'Knows Sign Language, ',
	'Displays Subtitles/Captions, ',
	'Schedule/Order On-line, ',
	'Assisted Listening Devices, ',
	'Experience Hiring Interpreter, '
];

class ReviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			rating: '',
			skills: checkedArr,
			postId: this.props.postId
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.props.handleAddReview({ ...this.state });
	};

	handleonClick = (e) => {
		checkedArr.push(options[parseInt(e.target.id)]);
	};

	render() {
		return (
			<div class="review-form">
				<MDBContainer className="my-5 text-center">
					<MDBRow>
						<MDBCol align="center">
							<MDBCard className="text-center card-body" style={{ width: '100vmin' }}>
								<h1>Leave a Review</h1>

								<form onSubmit={this.handleSubmit}>
									<MDBInput
										type="textarea"
										name="content"
										label="How was your experience?"
										onChange={this.handleChange}
										value={this.state.content}
										outline
										className="form-control"
									/>

									<label className="font-weight-bold" id="rating">
										Rating:
									</label>
									<div id="dropDown" className="input-field">
										<select
											className="custom-select mb-4"
											name="rating"
											onChange={this.handleChange}
											value={this.state.rating}
										>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</div>

									<div>
										<label className="font-weight-bold" id="skills">
											Skills
										</label>
									</div>
									<div>
										<label>
											<input id="0" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2"> Positive Attitude</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="1" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Patience</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="2" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2"> Makes Eye Contact</span>

											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="3" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Speaks Clearly</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="4" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Pen and Paper Available</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="5" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Willingness to Gesture</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="6" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Knows Sign Language</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="7" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Displays Subtitles/Captions</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="8" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Schedule/Order On-line</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input id="9" type="checkbox" name="skills" onChange={this.handleonClick} />
											<span className="ml-2">Assisted Listening Devices</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input
												id="10"
												type="checkbox"
												name="skills"
												onChange={this.handleonClick}
											/>
											<span className="ml-2">Accepts Relay Calls</span>
											<br />
										</label>
									</div>
									<div>
										<label>
											<input
												id="11"
												type="checkbox"
												name="skills"
												onChange={this.handleonClick}
											/>
											<span className="ml-2">Experience Hiring Interpreter</span>
											<br />
										</label>
									</div>

									<button className="btn">
										Submit
										<MDBIcon far icon="paper-plane" className="ml-2" />
									</button>
								</form>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}

export default ReviewForm;
