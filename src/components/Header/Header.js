import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import SearchBar from 'components/SearchBar';
import {useCreateGoDialog} from 'hooks';
import {isEmpty} from 'lodash';
import {useAuth} from 'oidc-react/build/src';
import PropTypes from 'prop-types';
import React from 'react';

import {UserProfileButton} from './components';
import useStyles from './useStyles';

const Header = ({className, ...other}) => {
	const classes = useStyles();
	const {userData, signOut, signIn} = useAuth();
	const [openCreateDialog] = useCreateGoDialog();

	return (
		<AppBar className={classNames(classes.root, className)} position="static" {...other}>
			<Toolbar>
				<div className={classes.left}>
					<Typography variant="h6" color="inherit" className={classes.flex}>
						Yougo
					</Typography>
				</div>
				<Container fixed>
					<SearchBar className={classes.searchbar} cancelOnEscape />
				</Container>
				<div className={classes.right}>
					<IconButton
						color="inherit"
						onClick={() => {
							openCreateDialog();
						}}
					>
						<AddIcon />
					</IconButton>

					{isEmpty(userData) ? (
						<Button color="inherit" onClick={signIn}>
							Sign In
						</Button>
					) : (
						<UserProfileButton user={userData.profile} onClick={signOut} />
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	className: PropTypes.string,
};

Header.defaultProps = {
	className: undefined,
};

export default Header;
