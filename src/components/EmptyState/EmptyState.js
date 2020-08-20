import Container from '@material-ui/core/Container';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const EmptyState = ({children, className, ...other}) => {
	const classes = useStyles();
	return (
		<Container className={classNames(classes.root, className)} fixed {...other}>
			{children}
		</Container>
	);
};

EmptyState.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

EmptyState.defaultProps = {
	className: undefined,
};

export default EmptyState;
