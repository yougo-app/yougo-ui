import {ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

import useGoMenu from './useGoMenu';

const styles = () => ({
	root: {},
	text: {
		paddingLeft: 0,
	},
});

const GoMenu = ({classes, className, go, onClose, ...other}) => {
	const [onEdit, onCopy, onDelete] = useGoMenu(go, onClose);
	return (
		<Menu
			MenuListProps={{
				dense: true,
			}}
			className={classNames(classes.root, className)}
			onClose={onClose}
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
};

GoMenu.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	go: goPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(GoMenu);
