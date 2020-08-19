import enqueueEditGo from 'actions/ui/snackbars/enqueueEditGo';
import enqueueEditGoFail from 'actions/ui/snackbars/enqueueEditGoFail';
import diff from 'object-diff';

import editGoReq from './requests/editGo';

const editGo = (updated, orig) => (dispatch) => {
	return dispatch(editGoReq(orig.id, diff(orig, updated))).then(({error}) => {
		if (error) {
			dispatch(enqueueEditGoFail(orig));
		} else {
			dispatch(enqueueEditGo(updated));
		}
	});
};
export default editGo;
