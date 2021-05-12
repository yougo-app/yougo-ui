import {Typography} from '@material-ui/core';
import EmptyState from 'components/EmptyState';
import LoginButton from 'components/LoginButton';
import PropTypes from 'prop-types';
import React from 'react';

const Unauthenticated = ({className, ...other}) => (
	<EmptyState className={className} {...other}>
		<Typography variant="h1" color="textPrimary">
			Yougo
		</Typography>
		<Typography color="textSecondary">Please sign in to use this site</Typography>
		<LoginButton />
	</EmptyState>
);

Unauthenticated.propTypes = {
	className: PropTypes.string,
};

Unauthenticated.defaultProps = {
	className: undefined,
};

export default Unauthenticated;
