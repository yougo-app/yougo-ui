import {createSelector} from 'reselect';
import getModal from './getModal';

export default createSelector(getModal, modal => (modal ? modal.props : {}));
