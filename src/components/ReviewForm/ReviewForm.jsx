import React, { Component } from 'react';

let checkedArr = [];

let options = [
	'Positive Attitude',
	'Patience',
	'Makes Eye Contact',
	'Speaks Clearly',
	'Pen and Paper Available',
	'Willingness to Gesture',
	'Knows Sign Language',
	'Displays Subtitles/Captions',
	'Schedule/Order On-line',
	'Assisted Listening Devices',
	'Experience Hiring Interpreter'
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
			<div>
				<h1>ReviewForm</h1>

				<form onSubmit={this.handleSubmit}>
					<label>Comments:</label>
					<textarea name="content" onChange={this.handleChange} value={this.state.comments} />

					<label id="rating">Rating:</label>
					<div id="dropDown" className="input-field">
						<select name="rating" onChange={this.handleChange} value={this.state.rating}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<p>
						<label id="skills">Skills</label>
					</p>

					<label>
						<input id="0" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Positive Attitude</span> <br />
					</label>
					<label>
						<input id="1" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Patience</span>
						<br />
					</label>
					<label>
						<input id="2" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span> Makes Eye Contact</span> <br />
					</label>
					<label>
						<input id="3" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Speaks Clearly</span>
						<br />
					</label>
					<label>
						<input id="4" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Pen and Paper Available</span>
						<br />
					</label>
					<label>
						<input id="5" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Willingness to Gesture</span>
						<br />
					</label>
					<label>
						<input id="6" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Knows Sign Language</span>
						<br />
					</label>
					<label>
						<input id="7" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Displays Subtitles/Captions</span>
						<br />
					</label>
					<label>
						<input id="8" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Schedule/Order On-line</span>
						<br />
					</label>
					<label>
						<input id="9" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Assisted Listening Devices</span>
						<br />
					</label>
					<label>
						<input id="10" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Accepts Relay Calls</span>
						<br />
					</label>
					<label>
						<input id="11" type="checkbox" name="skills" onChange={this.handleonClick} />
						<span>Experience Hiring Interpreter</span>
						<br />
					</label>
					<br />
					<button> Add Review </button>
				</form>
			</div>
		);
	}
}

export default ReviewForm;
