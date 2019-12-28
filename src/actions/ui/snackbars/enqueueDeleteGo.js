import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';
import undoDelete from 'actions/undoDelete';

export default name => (dispatch, getState) =>
	dispatch(
		enqueueActionSnackbar(`Deleted '${name}'`, {
			actionText: 'Undo',
			action: () => undoDelete(dispatch, getState),
		}),
	);
