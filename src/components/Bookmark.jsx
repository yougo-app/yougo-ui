import MoreVertIcon from 'material-ui-icons/MoreVert';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import AliasProp from '../utils/AliasProp';

const styles = () => ({
	root: {},
	avatar: {},
	text: {},
	action: {},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage

const Bookmark = ({classes, alias}) => (
	<ListItem button className={classes.root}>
		<ListItemAvatar className={classes.avatar}>
			<Avatar src={alias.icon} />
		</ListItemAvatar>
		<ListItemText className={classes.text} primary={alias.alias} secondary={alias.href} />
		<ListItemSecondaryAction className={classes.action}>
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

Bookmark.propTypes = {
	// eslint-disable-next-line react/no-typos
	alias: AliasProp.isRequired,

	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookmark);
