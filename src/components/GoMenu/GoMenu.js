import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classNames from 'classnames';
import {useCopyGoUrl, useDeleteGo, useEditGo} from 'hooks';
import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {goPropType} from 'util/types';

import useStyles from './useStyles';

const GoMenu = ({className, go, onClose, ...other}) => {
	const classes = useStyles();
	const [editGo] = useEditGo(go);
	const copyGo = useCopyGoUrl(go);
	const deleteGo = useDeleteGo(go);

	const onEdit = useCallback(() => {
		editGo();
		onClose();
	}, [editGo, onClose]);

	const onCopy = useCallback(() => {
		copyGo();
		onClose();
	}, [copyGo, onClose]);

	const onDelete = useCallback(() => {
		deleteGo();
		onClose();
	}, [deleteGo, onClose]);

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
