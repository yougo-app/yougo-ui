import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from '@mui/material';
import classNames from 'classnames';
import GoMenu from 'components/GoMenu';
import {bindMenu, bindTrigger, usePopupState} from 'material-ui-popup-state/hooks';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

import useStyles from './useStyles';

const GoListItem = ({className, go, ...other}) => {
	const classes = useStyles();
	const popupState = usePopupState({variant: 'popover'});

	return (
		<ListItem button className={classNames(classes.root, className)} {...other}>
			<ListItemText
				disableTypography
				primary={<Typography variant="subtitle1">{go.alias}</Typography>}
				secondary={
					<Typography color="textSecondary" className={classes.href} noWrap>
						{go.href}
					</Typography>
				}
			/>
			<ListItemSecondaryAction>
				<IconButton {...bindTrigger(popupState)} size="large">
					<MoreVertIcon />
				</IconButton>
				<GoMenu
					go={go}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					{...bindMenu(popupState)}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

GoListItem.propTypes = {
	className: PropTypes.string,
	go: goPropType.isRequired,
};

GoListItem.defaultProps = {
	className: undefined,
};

export default GoListItem;
