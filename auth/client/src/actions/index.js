import * as types from './types'
import axios from 'axios'
import decode from 'jwt-decode'

//form props is an object with an email and a password
export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:3090/signup', formProps);

		dispatch({ type: types.AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		dispatch(setCurrentUser());
		callback();
	} catch (e) {
		dispatch({ type: types.AUTH_ERROR, payload: 'Email in use' });
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: types.AUTH_USER,
		payload: ''
	}
}

export const signin = (formProps, callback) => async dispatch => {
	console.log('hit sign in');
	try {
		const response = await axios.post('http://localhost:3090/signin', formProps);

		dispatch({ type: types.AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		dispatch(setCurrentUser());
		callback();
	} catch (e) {
		dispatch({ type: types.AUTH_ERROR, payload: 'Invalid login credentials' });
	}
};


export const setCurrentUser = () => async dispatch => {
	console.log('hit setCurrentUser');
	const token = localStorage.getItem('token');
	const response = await axios.get(`http://localhost:3090/users/${decode(token).sub}`);
	dispatch({ type: types.SET_CURRENT_USER, payload: response.data });
}