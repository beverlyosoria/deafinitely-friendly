import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBCol,
	MDBContainer,
	MDBRow
} from 'mdbreact';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}
	//  -----Setting Search state ---------
	updateSearch(event) {
		this.setState({
			search: event.target.value.substr(0, 20)
		});
	}
	// ---------- Filters through posts already created in search ----------
	render() {
		let filteredPosts = this.props.posts.filter((post) => {
			return post.name.indexOf(this.state.search) !== -1;
		});
		return (
			<div>
				<MDBContainer>
					<MDBRow>
						<MDBCol align="center">
							<p>
								A place where you can search for deaf-friendly businesses in your area or share your
								consumer experience.
							</p>
							<p>The aim is to promote deaf-friendliness in your community via awareness and feedback.</p>
							{/*---------Search Bar------------  */}
							<SearchBar search={this.state.search} updateSearch={this.updateSearch.bind(this)} />
						</MDBCol>
					</MDBRow>
					<MDBRow className="mt-3">
						<MDBCol align="center" className="">
							<p>Place not listed yet?</p>
							<p>
								<MDBBtn color="white" size="sm">
									<Link to="/newPost">Add New</Link>
								</MDBBtn>{' '}
							</p>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow>
						{/* ------------- populates posts-------------- */}
						{filteredPosts.map((p, id) => (
							<MDBCol align="center">
								<MDBCard style={{ width: '22rem' }} key={id} className="mt-4">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
										waves
									/>
									<MDBCardBody>
										<MDBCardTitle>
											<p>{p.name}</p>
										</MDBCardTitle>
										<MDBCardText>
											<p>{p.address}</p>

											<p>{p.city}</p>

											<p>{p.state}</p>
										</MDBCardText>
										<MDBBtn color="white">
											<Link to={`/details/${id}`}>Details</Link>
										</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						))}
					</MDBRow>
					<br />
					<br />
				</MDBContainer>
			</div>
		);
	}
}

export default HomePage;
