import {Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmptyState from 'components/EmptyState';
import PropTypes from 'prop-types';
import React from 'react';

const LoadingState = ({className, ...other}) => {
	return (
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
};

LoadingState.propTypes = {
	className: PropTypes.string,
};

LoadingState.defaultProps = {
	className: undefined,
};

export default LoadingState;
