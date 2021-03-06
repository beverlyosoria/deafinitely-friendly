import React, { Component } from 'react';
import logo from '../../assets/img/deaf-friendly-logo.jpg';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse
} from 'mdbreact';

class NavBar extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		let nav = this.props.user ? (
			<MDBNavbarNav center>
				<MDBNavItem>
					<MDBNavLink to="/" className="black-text">
						HOME
					</MDBNavLink>
				</MDBNavItem>

				<MDBNavItem right>
					<MDBNavLink to="" onClick={this.props.handleLogout}>
						LOG OUT
					</MDBNavLink>
				</MDBNavItem>

				<span className="NavBar-welcome">WELCOME, {this.props.user.name}</span>
			</MDBNavbarNav>
		) : (
			<MDBNavbarNav center>
				<MDBNavItem>
					<MDBNavLink to="/">HOME</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/login">LOG IN</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBNavLink to="/signup">SIGN UP</MDBNavLink>
				</MDBNavItem>
			</MDBNavbarNav>
		);

		return (
			<div className="">
				<MDBNavbar style={{ height: '40px', backgroundColor: '#1F3534' }} />
				<MDBNavbar color="" dark expand="md" className="mb-4">
					<MDBNavbarBrand>
						<img src={logo} width="220" height="70" />
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						{nav}
						<MDBNavbarNav right>
							<MDBNavItem />
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
			</div>
		);
	}
}

export default NavBar;
