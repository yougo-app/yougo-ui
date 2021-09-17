import {Button} from '@mui/material';
import {useSnackbar} from 'notistack';
import React, {useCallback} from 'react';

import useApiDeleteGo from './api/useApiDeleteGo';

export default function useDeleteGo(go) {
	const {enqueueSnackbar} = useSnackbar();
	const {mutateAsync: deleteGo} = useApiDeleteGo();
	return useCallback(() => {
		const undoDeleteButton = <Button>Undo</Button>;
		deleteGo(go)
			.then(() => enqueueSnackbar(`'${go.alias}' deleted`, {action: undoDeleteButton}))
			.catch(() => enqueueSnackbar(`Problem deleting '${go.alias}'`, {variant: 'error'}));
	}, [deleteGo, go, enqueueSnackbar]);
}
