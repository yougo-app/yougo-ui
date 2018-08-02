import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import closeModal from '../../../actions/closeModal';
import submitAliasForm from '../../../actions/submitAliasForm';
import Modals from '../../../constants/Modals';
import isModalOpen from '../../../selectors/isModalOpen';
import CreateBookmarkDialog from './CreateBookmarkDialog';

const modal = Modals.CREATE_ALIAS;

const mapStateToProps = state => ({
	open: isModalOpen(state, modal),
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			onClose: () => closeModal(modal),
			onExit: () => reset(modal),
			onSubmit: values => submitAliasForm(values, modal),
		},
		dispatch,
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CreateBookmarkDialog);
