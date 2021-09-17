import {WarningRounded} from '@mui/icons-material';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import EmptyState from 'components/EmptyState';
import {useCreateGo} from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const NoGosState = ({className, ...other}) => {
	const classes = useStyles();
	const [createGo] = useCreateGo();

	return (
		<EmptyState className={className} {...other}>
			<Typography className={classes.iconContainer}>
				<WarningRounded className={classes.icon} />
			</Typography>
			<Typography variant="h4" color="textPrimary">
				You have no Gos!
			</Typography>
			<Typography color="textSecondary">Why don&apos;t you add some? :)</Typography>
			<Button variant="contained" color="primary" onClick={createGo}>
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
