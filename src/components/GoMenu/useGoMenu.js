import EditGoDialog from 'components/EditGoDialog';
import copy from 'copy-to-clipboard';
import {useDeleteGo} from 'hooks';
import {useSnackbar} from 'material-ui-snackbar-provider';
import React, {useCallback} from 'react';
import {useModal} from 'react-modal-hook';

const useGoMenu = (go, closeMenu) => {
	const snackbar = useSnackbar();
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
			snackbar.showMessage('URL copied');
		} else {
			snackbar.showMessage("Can't copy URL");
		}
		closeMenu();
	}, [closeMenu, go.href, snackbar]);

	const onDelete = useCallback(() => {
		deleteGo(go)
			.then(() => snackbar.showMessage(`Deleted ${go.alias}`))
			.catch(() => snackbar.showMessage(`Can't delete ${go.alias}`));
		closeMenu();
	}, [closeMenu, deleteGo, go.alias, snackbar]);

	return [onEdit, onCopy, onDelete];
};

export default useGoMenu;
