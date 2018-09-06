import ActionTypes from './constants/ActionTypes';

const openReducer = props => ({
	open: true,
	props,
});

const closeReducer = state => ({
	...state,
	open: false,
});

export default (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.OPEN_COMPONENT:
			return {
				...state,
				[action.payload.id]: openReducer(action.payload.props),
			};
		case ActionTypes.CLOSE_COMPONENT:
			return {
				...state,
				[action.payload.id]: closeReducer(state[action.payload.id]),
			};
		default:
			return state;
	}
};
