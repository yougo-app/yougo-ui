import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GoPropType from '../../propTypes/GoPropType';

const styles = () => ({
	root: {},
	text: {
		paddingLeft: 0,
	},
});

const GoMenu = ({classes, className, go, onCopy, onDelete, onEdit, ...other}) => (
	<Menu
		open
		MenuListProps={{
			dense: true,
		}}
		className={classNames(classes.root, className)}
		{...other}
	>
		<MenuItem onClick={onEdit}>
			<ListItemIcon>
				<EditIcon fontSize="inherit" />
			</ListItemIcon>
			<ListItemText className={classes.text}>Edit</ListItemText>
		</MenuItem>
		<MenuItem onClick={onCopy}>
			<ListItemIcon>
				<FileCopyIcon fontSize="inherit" />
			</ListItemIcon>
			<ListItemText className={classes.text}>Copy URL</ListItemText>
		</MenuItem>
		<MenuItem onClick={onDelete}>
			<ListItemIcon>
				<DeleteIcon fontSize="inherit" />
			</ListItemIcon>
			<ListItemText className={classes.text}>Delete</ListItemText>
		</MenuItem>
	</Menu>
);

GoMenu.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	classes: PropTypes.object.isRequired,
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	go: GoPropType,
	onCopy: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
};

export default withStyles(styles)(GoMenu);