import {List, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	root: {
		flex: 1,
	},
};

const Gos = ({children, classes, className, ...other}) => (
	<Paper className={classNames(classes.root, className)} {...other}>
		<List dense>{children}</List>
	</Paper>
);

Gos.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

Gos.defaultProps = {
	children: [],
};

export default withStyles(styles)(Gos);
