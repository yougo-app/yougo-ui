import enqueueCopyUrl from 'actions/ui/snackbars/enqueueCopyUrl';
import enqueueCopyUrlFail from 'actions/ui/snackbars/enqueueCopyUrlFail';
import copy from 'copy-to-clipboard';

const copyUrl = (url) => (dispatch) => {
	if (copy(url)) {
		dispatch(enqueueCopyUrl());
	} else {
		dispatch(enqueueCopyUrlFail());
	}
};
export default copyUrl;
