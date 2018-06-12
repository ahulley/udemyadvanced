import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
	class ComposedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}

		render() {
			return <ChildComponent {...this.props}/>;
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth
		};
	}

	return connect(
		mapStateToProps,
		null)(ComposedComponent);
};

//Imagine we are in commentbox.js
//import requireAuth from 'components/requireAuth';

//class CommentBox {

//}

//export default requireAuth(CommentBox);