import {connect} from 'react-redux';
import getModals from '../../selectors/getModals';
import Modals from './Modals';

const mapStateToProps = state => ({
	currentModal: getModals(state),
});

export default connect(mapStateToProps)(Modals);
