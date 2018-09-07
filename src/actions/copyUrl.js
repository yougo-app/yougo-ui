import copy from 'copy-to-clipboard';
import openCopyUrlFailSnackbar from './ui/openCopyUrlFailSnackbar';
import openCopyUrlSnackbar from './ui/openCopyUrlSnackbar';

export default url => dispatch => {
	if (copy(url)) {
		dispatch(openCopyUrlSnackbar());
	} else {
		dispatch(openCopyUrlFailSnackbar());
	}
};
