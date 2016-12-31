import {RECEIVE_CAMPUSES} from './actions/constants'

export default (state = [], action) => {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case RECEIVE_CAMPUSES:
			newState.campuses = action.campuses;
			break;

		default: return state;

	}

	return newState;
	
}

