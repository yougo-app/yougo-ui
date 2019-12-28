import {CLOSE_SNACKBAR, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR} from 'constants/actionTypes';

const defaultState = {
	notifications: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case ENQUEUE_SNACKBAR:
			return {
				...state,
				notifications: [
					...state.notifications,
					{
						...action.payload,
					},
				],
			};

		case CLOSE_SNACKBAR:
			return {
				...state,
				notifications: state.notifications.map(notification =>
					!action?.payload?.key || notification.key === action?.payload?.key
						? {...notification, dismissed: true}
						: notification,
				),
			};

		case REMOVE_SNACKBAR:
			return {
				...state,
				notifications: state.notifications.filter(
					notification => notification.key !== action?.payload?.key,
				),
			};

		default:
			return state;
	}
};
