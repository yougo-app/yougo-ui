import Gos from 'api/gos';
import EditGoDialog from 'components/EditGoDialog';
import copy from 'copy-to-clipboard';
import {useSnackbar} from 'material-ui-snackbar-provider';
import React, {useCallback} from 'react';
import {useModal} from 'react-modal-hook';

const useGoMenu = (go, closeMenu) => {
	const snackbar = useSnackbar();
	const [deleteGo] = Gos.delete();

	const [showEditModal, hideEditModal] = useModal(() => {
		return <EditGoDialog go={go} hideModal={hideEditModal} />;
	}, [go]);

	const onEdit = useCallback(() => {
		showEditModal();
		closeMenu();
	}, [closeMenu, showEditModal]);

	const onCopy = useCallback(() => {
		if (copy(go.href)) {
			snackbar.showMessage('URL copied');
		} else {
			snackbar.showMessage("Can't copy URL");
		}
		closeMenu();
	}, [closeMenu, go.href, snackbar]);

	const onDelete = useCallback(() => {
		deleteGo(go.id)
			.then(() => snackbar.showMessage(`Deleted ${go.go}`))
			.catch(() => snackbar.showMessage(`Can't delete ${go.go}`));
		closeMenu();
	}, [closeMenu, deleteGo, go.go, go.id, snackbar]);

	return [onEdit, onCopy, onDelete];
};

export default useGoMenu;
