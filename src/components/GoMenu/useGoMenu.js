import EditGoDialog from 'components/EditGoDialog';
import copy from 'copy-to-clipboard';
import {useDeleteGo} from 'hooks';
import React, {useCallback} from 'react';
import {useModal} from 'react-modal-hook';

const useGoMenu = (go, closeMenu) => {
	// const snackbar = useSnackbar();
	const {mutateAsync: deleteGo} = useDeleteGo();

	const [openEditDialog, closeEditDialog] = useModal(
		() => <EditGoDialog go={go} onClose={closeEditDialog} />,
		[go]
	);

	const onEdit = useCallback(() => {
		openEditDialog();
		closeMenu();
	}, [closeMenu, openEditDialog]);

	const onCopy = useCallback(() => {
		if (copy(go.href)) {
			console.log('success'); // snackbar.showMessage('URL copied');
		} else {
			console.log('fail'); // snackbar.showMessage("Can't copy URL");
		}
		closeMenu();
	}, [closeMenu, go.href]);

	const onDelete = useCallback(() => {
		deleteGo(go)
			.then(() => console.log('success')) // snackbar.showMessage(`Deleted ${go.alias}`))
			.catch(() => console.log('fail')); // snackbar.showMessage(`Can't delete ${go.alias}`));
		closeMenu();
	}, [closeMenu, deleteGo, go]);

	return [onEdit, onCopy, onDelete];
};

export default useGoMenu;
