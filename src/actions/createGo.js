import closeModal from './closeModal';
import createGo from './requests/createGo';

export default values => dispatch => dispatch(createGo(values)).then(() => dispatch(closeModal()));
