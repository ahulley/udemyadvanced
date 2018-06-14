import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Router } from 'react-router-dom'
import './HeaderStyle.css'

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return (
				<div>
					<Link to="/signout">Sign Out</Link>
					<Link to="/feature">Feature</Link>
					Welcome, {this.props.user.email}
				</div>
			);
		}
		else {
			return (
				<div>
					<Link to="/signup">Sign Up</Link>
					<Link to="/signin">Sign In</Link>
					Welcome, {this.props.user.email}
				</div>
			);
		}
	}

	render() {
		return (
			<div className="header">
				<Link to="/">Redux Auth</Link>
				{this.renderLinks()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.userReducer.user,
		authenticated: state.authReducer.authenticated
	};
}

export default connect(
	mapStateToProps,
	null
)(Header);