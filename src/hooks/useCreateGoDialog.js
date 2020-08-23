import CreateGoDialog from 'components/CreateGoDialog';
import React from 'react';
import {useModal} from 'react-modal-hook';

export default function useCreateGoDialog() {
	const [openDialog, closeDialog] = useModal(() => <CreateGoDialog onClose={closeDialog} />);
	return [openDialog, closeDialog];
}
