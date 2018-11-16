import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from '../SearchBar';

const styles = theme => ({
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

const Header = ({classes, className, clearSearch, createGo, search, ...other}) => (
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
				<IconButton color="inherit" onClick={createGo}>
					<AddIcon />
				</IconButton>
			</div>
		</Toolbar>
	</AppBar>
);

Header.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	clearSearch: PropTypes.func.isRequired,
	createGo: PropTypes.func.isRequired,
	search: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
