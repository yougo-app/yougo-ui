import {Typography} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import EmptyState from 'components/EmptyState';
import PropTypes from 'prop-types';
import React from 'react';

const LoadingState = ({className, ...other}) => (
	<EmptyState className={className} {...other}>
		<div>
			<CircularProgress size={60} color="inherit" />
		</div>
		<Typography variant="h4" color="textPrimary">
			Loading
		</Typography>
		<Typography color="textSecondary">Please wait while we load your data</Typography>
	</EmptyState>
);

LoadingState.propTypes = {
	className: PropTypes.string,
};

LoadingState.defaultProps = {
	className: undefined,
};

export default LoadingState;
