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
	render() {
		return (
			<div>
				<MDBContainer>
					<MDBRow>
						<MDBCol align="center">
							<SearchBar />
						</MDBCol>
					</MDBRow>
					<MDBRow className="mt-3">
						<MDBCol align="center" className="">
							<p>
								bla bla bla blabaksdfkasdf kajsdfj df lkasdjfk alsdkfjl asjdfkljalksdfj{' '}
								<MDBBtn size="sm">
									<Link to="/newPost">add</Link>
								</MDBBtn>{' '}
							</p>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow>
						{this.props.posts.map((p, id) => (
							<MDBCol align="center">
								<MDBCard style={{ width: '22rem' }} key={id} className="mt-4">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
										waves
									/>
									<MDBCardBody>
										<MDBCardTitle>
											<p>{p.title}</p>
										</MDBCardTitle>
										<MDBCardText>
											<p>{p.address}</p>

											<p>{p.area}</p>

											<p>{p.state}</p>
										</MDBCardText>
										<MDBBtn>
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
