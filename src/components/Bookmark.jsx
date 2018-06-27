import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
