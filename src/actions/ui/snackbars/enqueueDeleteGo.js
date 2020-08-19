import enqueueActionSnackbar from 'actions/ui/enqueueActionSnackbar';

const enqueueDeleteGo = (name) => (dispatch) =>
	dispatch(
		enqueueActionSnackbar(`Deleted '${name}'`, {
			actionText: 'Undo',
			action: () => {},
		})
	);
export default enqueueDeleteGo;
