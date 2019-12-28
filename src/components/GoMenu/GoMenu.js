import {ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copyUrl from 'actions/copyUrl';
import deleteGo from 'actions/deleteGo';
import classNames from 'classnames';
import EditGoDialog from 'components/EditGoDialog';
import PropTypes from 'prop-types';
import GoPropType from 'propTypes/GoPropType';
import React from 'react';
import {useModal} from 'react-modal-hook';
import {useDispatch} from 'react-redux';

const styles = () => ({
	root: {},
	text: {
		paddingLeft: 0,
	},
});

const GoMenu = ({classes, className, go, onClose, ...other}) => {
	const dispatch = useDispatch();
	const [showModal, hideModal] = useModal(() => {
		return <EditGoDialog go={go} hideModal={hideModal} />;
	}, [go]);

	return (
		<Menu
			MenuListProps={{
				dense: true,
			}}
			className={classNames(classes.root, className)}
			{...other}
		>
			<MenuItem
				onClick={() => {
					showModal();
					onClose();
				}}
			>
				<ListItemIcon>
					<EditIcon fontSize="inherit" />
				</ListItemIcon>
				<ListItemText className={classes.text}>Edit</ListItemText>
			</MenuItem>
			<MenuItem
				onClick={() => {
					dispatch(copyUrl(go.href));
					onClose();
				}}
			>
				<ListItemIcon>
					<FileCopyIcon fontSize="inherit" />
				</ListItemIcon>
				<ListItemText className={classes.text}>Copy URL</ListItemText>
			</MenuItem>
			<MenuItem
				onClick={() => {
					dispatch(deleteGo(go));
					onClose();
				}}
			>
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
	go: GoPropType.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(GoMenu);
