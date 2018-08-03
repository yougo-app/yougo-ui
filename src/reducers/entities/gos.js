import ActionTypes from '../../constants/ActionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ActionTypes.GOS_SUCCESS:
			return action.payload;
		case ActionTypes.CREATE_GO_SUCCESS:
			return [action.payload, ...state];
		default:
			return state;
	}
};
