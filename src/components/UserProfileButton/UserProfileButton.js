import {useAuth0} from '@auth0/auth0-react';
import {Avatar, Menu, MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {ArrowDropDown} from '@material-ui/icons';
import {bindMenu, bindTrigger} from 'material-ui-popup-state';
import {usePopupState} from 'material-ui-popup-state/hooks';
import React, {useCallback} from 'react';

import useStyles from './useStyles';

const UserProfileButton = (props) => {
	const {user, logout, loginWithRedirect, isAuthenticated} = useAuth0();
	const classes = useStyles();
	const popupState = usePopupState({variant: 'popover'});
	const doLogout = useCallback(() => {
		popupState.close();
		logout();
	}, [popupState, logout]);

	if (!isAuthenticated) {
		return (
			<Button color="inherit" onClick={loginWithRedirect}>
				<Avatar className={classes.avatar} />
			</Button>
		);
	}

	return (
		<>
			<Button color="inherit" {...bindTrigger(popupState)} {...props}>
				<Avatar
					className={classes.avatar}
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
