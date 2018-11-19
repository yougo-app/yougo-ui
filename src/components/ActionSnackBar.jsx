import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';

const ActionSnackBar = ({action, actionMessage, ...other}) => (
	<Snackbar
		action={[
			<Button key="undo" color="secondary" size="small" onClick={action}>
				{actionMessage}
			</Button>,
		]}
		{...other}
	/>
);

export default ActionSnackBar;
