import ActionTypes from '../../constants/ActionTypes';

const initialState = null;

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.MODAL_OPEN:
			return {
				...payload,
			};
		case ActionTypes.MODAL_CLOSE: {
			return null;
		}
		default:
			return state;
	}
};
