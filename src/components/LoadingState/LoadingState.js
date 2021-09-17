import {Box, Typography} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import EmptyState from 'components/EmptyState';
import React from 'react';

const LoadingState = ({...props}) => (
	<EmptyState {...props}>
		<Box>
			<CircularProgress size={60} color="inherit" />
		</Box>
		<Typography variant="h4" color="text.primary">
			Loading
		</Typography>
		<Typography color="text.secondary">Please wait while we load your data</Typography>
	</EmptyState>
);

export default LoadingState;
