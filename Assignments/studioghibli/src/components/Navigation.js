import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavbarToggler,
	Collapse
} from 'reactstrap';

const routeList = [
	{ path: '/c/films', label: 'Films' },
	{ path: '/c/people', label: 'People' },
];

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	/**
	 * Hide or show the header navigation.
	 */
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	mapNavbar() {
		return routeList.map(navItem => {
			return (
				<NavItem key={navItem.label}>
					<NavLink
						exact
						to={`${process.env.PUBLIC_URL}${navItem.path}`}
						activeClassName="active"
						className="nav-link"
					>
						{navItem.label}
					</NavLink>
				</NavItem>
			);
		});
	}

	render() {
		return (
			<Navbar className="navbar-expand-lg" light>
				<NavbarBrand tag="div">
					<NavLink id='title' to={process.env.PUBLIC_URL}>Studio Ghibli API</NavLink>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
				<Collapse isOpen={!this.state.collapsed} navbar>
					<Nav id="subs">{this.mapNavbar()}</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
