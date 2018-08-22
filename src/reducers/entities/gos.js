import ActionTypes from '../../constants/ActionTypes';

export default (state = [], {type, payload}) => {
	switch (type) {
		case ActionTypes.GOS_SUCCESS:
			return payload;
		case ActionTypes.CREATE_GO_SUCCESS:
			return [payload, ...state];
		case ActionTypes.DELETE_GO_SUCCESS:
			return state.filter(go => go.id !== payload.id);
		default:
			return state;
	}
};
