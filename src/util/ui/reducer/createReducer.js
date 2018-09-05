const openReducer = props => ({
	open: true,
	props,
});

const closeReducer = state => ({
	...state,
	open: false,
});

export default (openType, closeType) => (state = {}, action) => {
	switch (action.type) {
		case openType:
			return {
				...state,
				[action.payload.id]: openReducer(action.payload.props),
			};
		case closeType:
			return {
				...state,
				[action.payload.id]: closeReducer(state[action.payload.id]),
			};
		default:
			return state;
	}
};
