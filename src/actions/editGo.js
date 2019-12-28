import enqueueEditGo from 'actions/ui/snackbars/enqueueEditGo';
import enqueueEditGoFail from 'actions/ui/snackbars/enqueueEditGoFail';
import diff from 'object-diff';
import editGo from './requests/editGo';

export default (updated, orig) => dispatch => {
	return dispatch(editGo(orig.id, diff(orig, updated))).then(({error}) => {
		if (error) {
			dispatch(enqueueEditGoFail(orig));
		} else {
			dispatch(enqueueEditGo(updated));
		}
	});
};
