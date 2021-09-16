import AddIcon from '@mui/icons-material/Add';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import classNames from 'classnames';
import SearchBar from 'components/SearchBar';
import UserProfileButton from 'components/UserProfileButton';
import {useCreateGoDialog} from 'hooks';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './useStyles';

const Header = ({className, ...other}) => {
	const classes = useStyles();
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
						size="large"
					>
						<AddIcon />
					</IconButton>
					<UserProfileButton />
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
