import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from '@mui/material';
import GoMenu from 'components/GoMenu';
import {bindMenu, bindTrigger, usePopupState} from 'material-ui-popup-state/hooks';
import {goPropType} from 'util/types';

const GoListItem = ({go, ...props}) => {
	const popupState = usePopupState({variant: 'popover'});

	return (
		<ListItem button {...props}>
			<ListItemText
				disableTypography
				primary={<Typography variant="subtitle1">{go.alias}</Typography>}
				secondary={
					<Typography color="text.secondary" fontSize={13} noWrap>
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
	go: goPropType.isRequired,
};

export default GoListItem;
