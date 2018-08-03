import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import closeModal from '../../../actions/closeModal';
import submitCreateGoForm from '../../../actions/submitCreateGoForm';
import Modals from '../../../constants/Modals';
import isModalOpen from '../../../selectors/isModalOpen';
import CreateGoDialog from './CreateGoDialog';

const modal = Modals.CREATE_GO;

const mapStateToProps = state => ({
	open: isModalOpen(state, modal),
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			onClose: () => closeModal(modal),
			onExit: () => reset(modal),
			onSubmit: values => submitCreateGoForm(values, modal),
		},
		dispatch,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateGoDialog);
