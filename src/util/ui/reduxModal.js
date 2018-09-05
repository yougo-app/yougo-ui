import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import closeModal from './actions/closeModal';
import getModalProps from './selectors/getModalProps';
import isModalOpen from './selectors/isModalOpen';

export default modalId => {
	const mapState = state => ({
		open: isModalOpen(state, modalId),
		...getModalProps(state, modalId),
	});

	const mapDispatch = dispatch => ({
		...bindActionCreators({onClose: () => closeModal(modalId)}, dispatch),
	});

	return WrappedComponent =>
		connect(
			mapState,
			mapDispatch,
		)(WrappedComponent);
};
