import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary.dark,
	},
	left: {
		flex: '1 1 0',
	},
	center: {
		display: 'flex',
		flex: '1 1 auto',
		maxWidth: theme.content.maxWidth,
	},
	right: {
		flex: '1 1 0',
		textAlign: 'end',
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
});

const Header = ({classes, className, createGo, ...other}) => (
	<AppBar className={classNames(classes.root, className)} position="static" {...other}>
		<Toolbar>
			<div className={classes.left}>
				<Typography variant="title" color="inherit" className={classes.flex}>
					Yougo
				</Typography>
			</div>
			<div className={classes.center} />
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
	createGo: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
