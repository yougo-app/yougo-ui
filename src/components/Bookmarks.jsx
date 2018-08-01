import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const styles = theme => ({
	root: {
		flexGrow: 1,
		maxWidth: theme.content.maxWidth,
	},
});

const Bookmarks = ({children, classes, className, ...other}) => (
	<Paper className={classNames(classes.root, className)} {...other}>
		<List>{children}</List>
	</Paper>
);

Bookmarks.propTypes = {
	children: PropTypes.node,
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

Bookmarks.defaultProps = {
	children: [],
};

export default withStyles(styles)(Bookmarks);
