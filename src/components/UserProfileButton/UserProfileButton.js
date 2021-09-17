import {useAuth0} from '@auth0/auth0-react';
import {ArrowDropDown} from '@mui/icons-material';
import {Avatar, Menu, MenuItem} from '@mui/material';
import Button from '@mui/material/Button';
import {bindMenu, bindTrigger} from 'material-ui-popup-state';
import {usePopupState} from 'material-ui-popup-state/hooks';
import {useCallback} from 'react';

const UserProfileButton = (props) => {
	const {user, logout, loginWithRedirect, isAuthenticated} = useAuth0();
	const popupState = usePopupState({variant: 'popover'});
	const doLogout = useCallback(() => {
		popupState.close();
		logout();
	}, [popupState, logout]);

	if (!isAuthenticated) {
		return (
			<Button color="inherit" onClick={loginWithRedirect}>
				<Avatar
					sx={{
						width: 48,
						height: 48,
					}}
				/>
			</Button>
		);
	}

	return (
		<>
			<Button color="inherit" {...bindTrigger(popupState)} {...props}>
				<Avatar
					sx={{
						width: 48,
						height: 48,
					}}
					imgProps={{referrerPolicy: 'no-referrer'}}
					src={user.picture}
				/>
				<ArrowDropDown />
			</Button>
			<Menu
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				{...bindMenu(popupState)}
			>
				<MenuItem onClick={popupState.close}>Profile</MenuItem>
				<MenuItem onClick={popupState.close}>My account</MenuItem>
				<MenuItem onClick={doLogout}>Logout</MenuItem>
			</Menu>
		</>
	);
};
export default UserProfileButton;
