import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
	root: {
		flexGrow: 1,
		maxWidth: theme.content.maxWidth,
	},
	list: {},
});

const Bookmarks = ({classes, children}) => (
	<Paper className={classes.root}>
		<List>{children}</List>
	</Paper>
);

Bookmarks.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
	}).isRequired,
};

Bookmarks.defaultProps = {
	children: [],
};

export default withStyles(styles)(Bookmarks);
