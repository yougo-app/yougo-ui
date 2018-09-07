import Button from '@material-ui/core/Button';
import React from 'react';
import SnackBar from './SnackBar';

const ActionSnackBar = ({action, actionMessage, ...other}) => (
	<SnackBar
		action={[
			<Button key="undo" color="secondary" size="small" onClick={action}>
				{actionMessage}
			</Button>,
		]}
		{...other}
	/>
);

export default ActionSnackBar;
