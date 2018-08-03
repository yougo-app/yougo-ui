import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import AliasProp from '../utils/AliasProp';

const styles = theme => ({
	root: {},
	alias: {
		fontSize: theme.typography.pxToRem(16),
	},
	href: {
		fontSize: 'inherit',
	},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage
const Bookmark = ({alias, classes, className, ...other}) => (
	<ListItem button className={classNames(classes.root, className)} {...other}>
		<ListItemText
			disableTypography
			primary={
				<Typography variant="subheading" component="span" className={classes.alias}>
					{alias.alias}
				</Typography>
			}
			secondary={
				<Typography variant="body1" component="span" color="textSecondary" className={classes.href}>
					{alias.href}
				</Typography>
			}
		/>
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
