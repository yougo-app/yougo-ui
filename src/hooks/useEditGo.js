import EditGoDialog from 'components/EditGoDialog';
import React from 'react';
import {useModal} from 'react-modal-hook';

export default function useEditGo(go) {
	const [openDialog, closeDialog] = useModal(() => <EditGoDialog go={go} onClose={closeDialog} />);
	return [openDialog, closeDialog];
}
