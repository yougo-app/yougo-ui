import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import CreateGoDialog from 'components/CreateGoDialog';
import SearchBar from 'components/SearchBar';
import PropTypes from 'prop-types';
import React from 'react';
import {useModal} from 'react-modal-hook';

import useStyles from './useStyles';

const Header = ({className, ...other}) => {
	const classes = useStyles();
	const [openCreateDialog, closeCreateDialog] = useModal(() => {
		return <CreateGoDialog onClose={closeCreateDialog} />;
	});

	return (
		<AppBar className={classNames(classes.root, className)} position="static" {...other}>
			<Toolbar>
				<div className={classes.left}>
					<Typography variant="h6" color="inherit" className={classes.flex}>
						Yougo
					</Typography>
				</div>
				<div className={classes.center}>
					<SearchBar className={classes.searchbar} cancelOnEscape />
				</div>
				<div className={classes.right}>
					<IconButton
						color="inherit"
						onClick={() => {
							openCreateDialog();
						}}
					>
						<AddIcon />
					</IconButton>
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
