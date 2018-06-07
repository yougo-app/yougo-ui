import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, reset} from 'redux-form';
import closeModal from '../../actions/closeModal';
import submitAliasForm from '../../actions/submitAliasForm';
import isModalOpen from '../../selectors/isModalOpen';

export default name => {
	const mapStateToProps = state => ({
		open: isModalOpen(state, name),
		name,
	});

	const mapDispatchToProps = dispatch => ({
		...bindActionCreators(
			{
				onClose: () => closeModal(name),
				onExit: () => reset(name),
				onSubmit: values => submitAliasForm(values, name),
			},
			dispatch,
		),
	});

	return Component =>
		reduxForm({
			form: name,
			propNamespace: 'form',
		})(
			connect(
				mapStateToProps,
				mapDispatchToProps,
			)(Component),
		);
};
