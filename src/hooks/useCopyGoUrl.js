import copy from 'copy-to-clipboard';
import {useSnackbar} from 'notistack';
import {useCallback} from 'react';

export default function useCopyGoUrl(go) {
	const {enqueueSnackbar} = useSnackbar();
	return useCallback(() => {
		if (copy(go.href)) {
			enqueueSnackbar('URL copied');
		} else {
			enqueueSnackbar(`Problem copying '${go.alias}' URL`, {variant: 'error'});
		}
	}, [go.href, go.alias, enqueueSnackbar]);
}
