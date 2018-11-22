import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
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
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

Gos.defaultProps = {
	children: [],
};

export default withStyles(styles)(Gos);
