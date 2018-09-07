import {CREATE_GO_SUCCESS, DELETE_GO_SUCCESS, GOS_SUCCESS} from '../constants/actionTypes';

export default (state = [], {type, payload}) => {
	switch (type) {
		case GOS_SUCCESS:
			return payload.result;
		case CREATE_GO_SUCCESS:
			return [...state, payload.result];
		case DELETE_GO_SUCCESS:
			return state.filter(id => id !== payload.id);
		default:
			return state;
	}
};
