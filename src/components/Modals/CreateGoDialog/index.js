import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import {reset} from 'redux-form';
import closeModal from '../../../actions/closeModal';
import createGo from '../../../actions/createGo';
import Modals from '../../../constants/Modals';
import isModalOpen from '../../../selectors/isModalOpen';
import CreateGoDialog from './CreateGoDialog';

const mapStateToProps = state => ({
	open: isModalOpen(state, Modals.CREATE_GO),
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			onClose: () => closeModal(Modals.CREATE_GO),
			onExit: () => reset(Modals.CREATE_GO),
			onSubmit: values => batchActions([createGo(values), closeModal(Modals.CREATE_GO)]),
		},
		dispatch,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateGoDialog);
