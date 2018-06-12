import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types'
import axios from 'axios'

export function saveComment(value) {
	return {
		type: SAVE_COMMENT,
		payload: value
	}
}

export function fetchComments() {
	const request = axios.get(
		'http://jsonplaceholder.typicode.com/comments'
	);
	return {
		type: FETCH_COMMENTS,
		payload: request
	}
}

export function changeAuth(value) {
	return {
		type: CHANGE_AUTH,
		payload: value
	};
}