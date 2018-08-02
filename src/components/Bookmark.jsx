import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import AliasProp from '../utils/AliasProp';

const styles = () => ({
	root: {},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage

const Bookmark = ({alias, classes, className, ...other}) => (
	<ListItem inset button className={classNames(classes.root, className)} {...other}>
		<ListItemText primary={alias.alias} secondary={alias.href} />
		<ListItemSecondaryAction>
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

Bookmark.propTypes = {
	alias: AliasProp.isRequired,

	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,

	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};

export default withStyles(styles)(Bookmark);
