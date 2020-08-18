import enqueueCopyUrl from 'actions/ui/snackbars/enqueueCopyUrl';
import enqueueCopyUrlFail from 'actions/ui/snackbars/enqueueCopyUrlFail';
import copy from 'copy-to-clipboard';

export default (url) => (dispatch) => {
	if (copy(url)) {
		dispatch(enqueueCopyUrl());
	} else {
		dispatch(enqueueCopyUrlFail());
	}
};
