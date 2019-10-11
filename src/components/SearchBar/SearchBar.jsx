import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return (
			<div class="d-flex justify-content-center">
				<MDBCol md="8">
					<input
						value={this.props.search}
						onChange={this.props.updateSearch}
						className="form-control"
						type="text"
						placeholder="Search"
						aria-label="Search"
					/>
				</MDBCol>
			</div>
		);
	}
}

export default SearchBar;
