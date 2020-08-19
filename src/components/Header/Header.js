import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import CreateGoDialog from 'components/CreateGoDialog';
import SearchBar from 'components/SearchBar';
import PropTypes from 'prop-types';
import React from 'react';
import {useModal} from 'react-modal-hook';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary.dark,
	},
	left: {
		flex: '1',
	},
	center: {
		display: 'flex',
		flex: '1',
		maxWidth: theme.content.maxWidth,
		justifyContent: 'center',
	},
	right: {
		flex: '1',
		textAlign: 'end',
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
	searchbar: {
		width: '100%',
	},
});

const Header = ({classes, className, ...other}) => {
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
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default withStyles(styles)(Header);
