import {formName} from 'components/EditGoDialog/EditGoDialog';
import diff from 'object-diff';
import {getFormInitialValues} from 'redux-form';
import editGo from './requests/editGo';
import openEditGoFailSnackbar from './ui/openEditGoFailSnackbar';
import openEditGoSnackbar from './ui/openEditGoSnackbar';

export default updated => (dispatch, getState) => {
	const orig = getFormInitialValues(formName)(getState());
	return dispatch(editGo(orig.id, diff(orig, updated))).then(({error}) => {
		if (error) {
			dispatch(openEditGoFailSnackbar(orig));
		} else {
			dispatch(openEditGoSnackbar(updated));
		}
	});
};
