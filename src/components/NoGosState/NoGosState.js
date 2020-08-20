import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {WarningRounded} from '@material-ui/icons';
import EmptyState from 'components/EmptyState';
import {useCreateGoDialog} from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const NoGosState = ({className, ...other}) => {
	const classes = useStyles();
	const [openCreateDialog] = useCreateGoDialog();

	return (
		<EmptyState className={className} {...other}>
			<Typography className={classes.iconContainer}>
				<WarningRounded className={classes.icon} />
			</Typography>
			<Typography variant="h4" color="textPrimary">
				You have no Gos!
			</Typography>
			<Typography color="textSecondary">Why don&apos;t you add some? :)</Typography>
			<Button variant="contained" color="primary" onClick={openCreateDialog}>
				Add a Go
			</Button>
		</EmptyState>
	);
};

NoGosState.propTypes = {
	className: PropTypes.string,
};

NoGosState.defaultProps = {
	className: undefined,
};

export default NoGosState;
