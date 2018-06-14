import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'

export default combineReducers({
	authReducer,
	form: formReducer,
	userReducer
});