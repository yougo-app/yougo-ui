import closeModal from './closeModal';
import deleteGo from './requests/deleteGo';

export default id => dispatch => dispatch(deleteGo(id)).then(() => dispatch(closeModal()));
