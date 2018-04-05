import {Modals} from '../../../constants';
import {createReduxFormDialog} from '../../form/index';
import CreateBookmarkDialog from './CreateBookmarkDialog';

export default createReduxFormDialog(Modals.CREATE_ALIAS)(CreateBookmarkDialog);
