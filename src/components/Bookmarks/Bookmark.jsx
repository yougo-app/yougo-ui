import MoreVertIcon from 'material-ui-icons/MoreVert';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Props from '../../utils/Props';

const styles = theme => ({
	root: {
		paddingRight: theme.spacing.unit * 6,
	},
	avatar: {},
	text: {},
	subtext: {
		flex: 2,
	},
	action: {},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage

const Bookmark = ({classes, alias}) => (
	<ListItem button className={classes.root}>
		<ListItemAvatar className={classes.avatar}>
			<Avatar src={alias.icon} />
		</ListItemAvatar>
		<ListItemText
			className={classes.text}
			primary={alias.name}
			secondary={alias.aliases.join(', ')}
		/>
		<Typography className={classes.subtext} variant="caption" align="right" noWrap>
			{alias.href}
		</Typography>
		<ListItemSecondaryAction className={classes.action}>
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

Bookmark.propTypes = {
	// eslint-disable-next-line react/no-typos
	alias: Props.alias.isRequired,

	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookmark);
