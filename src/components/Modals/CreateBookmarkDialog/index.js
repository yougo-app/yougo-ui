import Modals from '../../../constants/Modals';
import createReduxFormDialog from '../../common/createReduxFormDialog';
import CreateBookmarkDialog from './CreateBookmarkDialog';

export default createReduxFormDialog(Modals.CREATE_ALIAS)(CreateBookmarkDialog);
