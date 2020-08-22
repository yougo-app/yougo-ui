import {Avatar, Menu, MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {ArrowDropDown} from '@material-ui/icons';
import {get} from 'lodash';
import {bindMenu, bindTrigger} from 'material-ui-popup-state';
import {usePopupState} from 'material-ui-popup-state/hooks';
import {useAuth} from 'oidc-react';
import React, {useCallback} from 'react';

import Authenticated from '../Authenticated';
import useStyles from './useStyles';

const UserProfileButton = (props) => {
	const auth = useAuth();
	const classes = useStyles();
	const popupState = usePopupState({variant: 'popover'});
	const logout = useCallback(() => {
		popupState.close();
		auth.signOut();
	}, [auth, popupState]);

	const fallback = (
		<Button color="inherit" onClick={auth.signIn}>
			<Avatar className={classes.avatar} />
		</Button>
	);

	return (
		<Authenticated fallback={fallback}>
			<Button color="inherit" {...bindTrigger(popupState)} {...props}>
				<Avatar
					className={classes.avatar}
					imgProps={{referrerPolicy: 'no-referrer'}}
					src={get(auth, 'userData.profile.picture.0')}
				/>
				<ArrowDropDown />
			</Button>
			<Menu
				className={classes.menu}
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
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</Authenticated>
	);
};

export default UserProfileButton;
