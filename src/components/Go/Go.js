import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import GoMenu from 'components/GoMenu';
import {bindMenu, bindTrigger, usePopupState} from 'material-ui-popup-state/hooks';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

const styles = (theme) => ({
	href: {
		fontSize: theme.typography.pxToRem(13),
	},
});

// todo: https://material.io/guidelines/components/lists.html#lists-usage
const Go = ({classes, className, go, ...other}) => {
	const popupState = usePopupState({variant: 'popover', popupId: `go-menu-${go.id}`});

	return (
		<ListItem button className={classNames(classes.root, className)} {...other}>
			<ListItemText
				disableTypography
				primary={
					<Typography variant="subtitle1" className={classes.go}>
						{go.go}
					</Typography>
				}
				secondary={
					<Typography color="textSecondary" className={classes.href} noWrap>
						{go.href}
					</Typography>
				}
			/>
			<ListItemSecondaryAction>
				<IconButton className={classes.menuButton} {...bindTrigger(popupState)}>
					<MoreVertIcon />
				</IconButton>
				<GoMenu go={go} {...bindMenu(popupState)} />
			</ListItemSecondaryAction>
		</ListItem>
	);
};

Go.propTypes = {
	go: goPropType.isRequired,
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(styles)(Go);
