import * as types from '../actions/types'

const INITIAL_STATE = {
	user: {}
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}