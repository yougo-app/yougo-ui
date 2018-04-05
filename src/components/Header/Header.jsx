import AddIcon from 'material-ui-icons/Add';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
	root: {
		flexGrow: 1,
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
	search: {},
	avatar: {
		backgroundColor: theme.palette.secondary.light,
	},
});

const Header = ({classes, actions}) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<div className={classes.left}>
					<Typography variant="title" color="inherit" className={classes.flex}>
						Yougo
					</Typography>
				</div>
				<div className={classes.center}/>
				<div className={classes.right}>
					<IconButton color="inherit" onClick={actions.openCreateBookmarkDialog}>
						<AddIcon/>
					</IconButton>
					<IconButton>
						<Avatar className={classes.avatar}>TS</Avatar>
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	</div>
);

Header.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	actions: PropTypes.shape({
		openCreateBookmarkDialog: PropTypes.func.isRequired,
	}).isRequired,
};

export default withStyles(styles)(Header);
