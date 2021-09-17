import EditGoDialog from 'components/EditGoDialog';
import {useModal} from 'react-modal-hook';

export default function useEditGo(go) {
	const [openDialog, closeDialog] = useModal(() => <EditGoDialog go={go} onClose={closeDialog} />);
	return [openDialog, closeDialog];
}
