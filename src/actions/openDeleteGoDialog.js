import Modals from '../constants/Modals';
import openModal from '../util/ui/actions/openModal';

export default go => openModal(Modals.DELETE_GO, {go});
