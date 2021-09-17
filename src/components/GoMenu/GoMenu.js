import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useCopyGoUrl, useDeleteGo, useEditGo} from 'hooks';
import PropTypes from 'prop-types';
import {useCallback} from 'react';
import {goPropType} from 'util/types';

const GoMenu = ({go, onClose, ...props}) => {
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
			onClose={onClose}
			{...props}
		>
			<MenuItem onClick={onEdit}>
				<ListItemIcon>
					<EditIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Edit</ListItemText>
			</MenuItem>
			<MenuItem onClick={onCopy}>
				<ListItemIcon>
					<FileCopyIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Copy URL</ListItemText>
			</MenuItem>
			<MenuItem onClick={onDelete}>
				<ListItemIcon>
					<DeleteIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText>Delete</ListItemText>
			</MenuItem>
		</Menu>
	);
};

GoMenu.propTypes = {
	go: goPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default GoMenu;
