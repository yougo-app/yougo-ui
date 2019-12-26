import diff from 'object-diff';
import editGo from './requests/editGo';
import openEditGoFailSnackbar from './ui/openEditGoFailSnackbar';
import openEditGoSnackbar from './ui/openEditGoSnackbar';

export default (updated, orig) => dispatch => {
	return dispatch(editGo(orig.id, diff(orig, updated))).then(({error}) => {
		if (error) {
			dispatch(openEditGoFailSnackbar(orig));
		} else {
			dispatch(openEditGoSnackbar(updated));
		}
	});
};
