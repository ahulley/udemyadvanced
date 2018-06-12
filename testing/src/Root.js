import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import async from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator'

export default ({ children, initialState = {} }) => {
	const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(async, stateValidator)));

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};