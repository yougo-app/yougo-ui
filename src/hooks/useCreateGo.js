import CreateGoDialog from 'components/CreateGoDialog';
import {useModal} from 'react-modal-hook';

export default function useCreateGo() {
	const [openDialog, closeDialog] = useModal(() => <CreateGoDialog onClose={closeDialog} />);
	return [openDialog, closeDialog];
}
