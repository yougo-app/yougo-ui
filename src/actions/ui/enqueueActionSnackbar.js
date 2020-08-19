import Button from '@material-ui/core/Button';
import closeSnackbar from 'actions/ui/closeSnackbar';
import enqueueSnackbar from 'actions/ui/enqueueSnackbar';
import React from 'react';
import {batchActions} from 'redux-batched-actions';

const enqueueActionSnackbar = (message, {action, actionText, ...options}) => (dispatch) => {
	dispatch(
		enqueueSnackbar(message, {
			...options,
			action: (key) => (
				<Button
					onClick={() => {
						dispatch(batchActions([action, closeSnackbar(key)]));
					}}
					color="inherit"
				>
					{actionText}
				</Button>
			),
		})
	);
};
export default enqueueActionSnackbar;
