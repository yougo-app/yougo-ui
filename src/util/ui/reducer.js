import {CLOSE_COMPONENT, OPEN_COMPONENT} from './constants/actionTypes';

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
		case OPEN_COMPONENT:
			return {
				...state,
				[action.payload.id]: openReducer(action.payload.props),
			};
		case CLOSE_COMPONENT:
			return {
				...state,
				[action.payload.id]: closeReducer(state[action.payload.id]),
			};
		default:
			return state;
	}
};
