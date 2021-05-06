import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {goPropType} from 'util/types';

import useGoMenu from './useGoMenu';
import useStyles from './useStyles';

const GoMenu = ({className, go, onClose, ...other}) => {
	const classes = useStyles();
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
				<ListItemIcon className={classes.icon}>
					<EditIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Edit</ListItemText>
			</MenuItem>
			<MenuItem onClick={onCopy}>
				<ListItemIcon className={classes.icon}>
					<FileCopyIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Copy URL</ListItemText>
			</MenuItem>
			<MenuItem onClick={onDelete}>
				<ListItemIcon className={classes.icon}>
					<DeleteIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Delete</ListItemText>
			</MenuItem>
		</Menu>
	);
};

GoMenu.propTypes = {
	className: PropTypes.string,
	go: goPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

GoMenu.defaultProps = {
	className: undefined,
};

export default GoMenu;
