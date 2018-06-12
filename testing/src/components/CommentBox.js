import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions/index'
import requireAuth from 'components/requireAuth'


class CommentBox extends Component {

	state = { comment: '' };

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ comment: '' });
		this.props.saveComment(this.state.comment);
	};

	render() {
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange} />
				<div>
					<button>Submit Comment</button>
				</div>
				</form>
				<button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
			</div>
		)
	};
}

export default connect(
	null,
	actions)(requireAuth(CommentBox));