import CreateGoDialog from 'components/CreateGoDialog';
import React from 'react';
import {useModal} from 'react-modal-hook';

const useCreateGoialog = () => {
	const [openDialog, closeDialog] = useModal(() => <CreateGoDialog onClose={closeDialog} />);
	return [openDialog, closeDialog];
};

export default useCreateGoialog;
