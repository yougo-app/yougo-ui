import ActionTypes from '../../constants/ActionTypes';

const initialState = null;

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.MENU_OPEN:
			return {
				...payload,
			};
		case ActionTypes.MENU_CLOSE: {
			return null;
		}
		default:
			return state;
	}
};
