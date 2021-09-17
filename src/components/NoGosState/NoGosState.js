import {WarningRounded} from '@mui/icons-material';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import EmptyState from 'components/EmptyState';
import {useCreateGo} from 'hooks';
import React from 'react';

const NoGosState = ({...props}) => {
	const [createGo] = useCreateGo();

	return (
		<EmptyState {...props}>
			<WarningRounded sx={{fontSize: 'h1.fontSize'}} />
			<Typography variant="h3">You have no Gos!</Typography>
			<Typography color="text.secondary">Why don&apos;t you add some? :)</Typography>
			<Button onClick={createGo} variant="contained" color="primary">
				Add a Go
			</Button>
		</EmptyState>
	);
};

export default NoGosState;
