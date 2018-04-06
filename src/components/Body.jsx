import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Bookmarks from './Bookmarks';

const styles = theme => ({
	root: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		maxWidth: theme.content.maxWidth,
	},
});

const Body = ({classes}) => (
	<div className={classes.root}>
		<Bookmarks />
	</div>
);

Body.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Body);
