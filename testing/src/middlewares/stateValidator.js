//npm install --save tv4
//https:x//jsonschema.net/ << remove the x
import tv4 from 'tv4'
import stateSchema from 'middlewares/stateSchema'

//initially, the action should hit the reducers and update the state... then come back and validate the state
export default ({ dispatch, getState }) => next => action => {
	next(action);

	if (!tv4.validate(getState(), stateSchema)) {
		console.warn('Invalid state schema detected');
	}
}