import undoDelete from 'actions/undoDelete';
import {SNACKBAR} from 'constants/components';
import openComponent from 'util/ui/actions/openComponent';

export default name => (dispatch, getState) =>
	dispatch(
		openComponent(SNACKBAR, {
			message: `Deleted '${name}'`,
			actionText: 'Undo',
			actionFunc: () => undoDelete(dispatch, getState),
		}),
	);
