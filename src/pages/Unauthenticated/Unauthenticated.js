import {Typography} from '@material-ui/core';
import EmptyState from 'components/EmptyState';
import PropTypes from 'prop-types';
import React from 'react';

const Unauthenticated = ({className, ...other}) => {
	return (
		<EmptyState className={className} {...other}>
			<Typography variant="h1" color="textPrimary">
				Yougo
			</Typography>
			<Typography color="textSecondary">Please log in to use this site</Typography>
		</EmptyState>
	);
};

Unauthenticated.propTypes = {
	className: PropTypes.string,
};

Unauthenticated.defaultProps = {
	className: undefined,
};

export default Unauthenticated;
