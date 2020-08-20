import {Typography} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const BodyMessage = ({children, className, disableTypography}) => {
	const classes = useStyles();
	return (
		<div className={classNames(classes.root, className)}>
			{disableTypography ? (
				children
			) : (
				<Typography className={classes.message} variant="body1">
					{children}
				</Typography>
			)}
		</div>
	);
};

BodyMessage.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	disableTypography: PropTypes.bool,
};

BodyMessage.defaultProps = {
	className: undefined,
	disableTypography: false,
};

export default BodyMessage;
