import {SNACKBAR} from '../../constants/components';
import openComponent from '../../util/ui/actions/openComponent';
import undoDelete from '../undoDelete';

export default name => (dispatch, getState) =>
	dispatch(
		openComponent(SNACKBAR, {
			message: `Deleted '${name}'`,
			actionText: 'Undo',
			actionFunc: () => undoDelete(dispatch, getState),
		}),
	);
