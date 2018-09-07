import {
	CREATE_GO_SUCCESS,
	DELETE_GO_CLEAR,
	DELETE_GO_SUCCESS,
	GOS_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
	byId: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GOS_SUCCESS:
			return {
				...state,
				byId: action.payload.result,
			};
		case CREATE_GO_SUCCESS:
			return {
				...state,
				byId: [...state.byId, action.payload.result],
			};
		case DELETE_GO_SUCCESS:
			return {
				...state,
				byId: state.byId.filter(id => id !== action.payload.id),
				deletedId: action.payload.id,
			};
		case DELETE_GO_CLEAR: {
			const {deletedId, ...other} = state;
			return other;
		}
		default:
			return state;
	}
};
