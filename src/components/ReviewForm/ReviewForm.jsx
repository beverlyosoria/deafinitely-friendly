import React, { Component } from 'react';

class ReviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: '',
			rating: '',
			skills: [
				'Positive Attitude',
				'Patience',
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
			]
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<h1>ReviewForm</h1>
				<form>
					<label id="comments">Comments:</label>
					<textarea name="content" />

					<label id="rating">Rating:</label>
					<div id="dropDown" class="input-field">
						<select name="rating">
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
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[0]}
							onChange={this.handleChange}
						/>
						<span>Positive Attitude</span> <br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[1]}
							onChange={this.handleChange}
						/>
						<span>Patience</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[2]}
							onChange={this.handleChange}
						/>
						<span> Makes Eye Contact</span> <br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[3]}
							onChange={this.handleChange}
						/>
						<span>Speaks Clearly</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[4]}
							onChange={this.handleChange}
						/>
						<span>Pen and Paper Available</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[5]}
							onChange={this.handleChange}
						/>
						<span>Willingness to Gesture</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[6]}
							onChange={this.handleChange}
						/>
						<span>Knows Sign Language</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[7]}
							onChange={this.handleChange}
						/>
						<span>Displays Subtitles/Captions</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[8]}
							onChange={this.handleChange}
						/>
						<span>Schedule/Order On-line</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[9]}
							onChange={this.handleChange}
						/>
						<span>Assisted Listening Devices</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[10]}
							onChange={this.handleChange}
						/>
						<span>Accepts Relay Calls</span>
						<br />
					</label>
					<label>
						<input
							type="checkbox"
							name="skills"
							value={this.state.skills[11]}
							onChange={this.handleChange}
						/>
						<span>Experience Hiring Interpreter</span>
						<br />
					</label>
					<br />
					<input id="add" type="submit" value="Add Review" />
				</form>
			</div>
		);
	}
}

export default ReviewForm;
