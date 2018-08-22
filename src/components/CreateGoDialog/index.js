import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import closeModal from '../../actions/closeModal';
import createGo from '../../actions/createGo';
import {name} from '../GoForm';
import CreateGoDialog from './CreateGoDialog';

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			onClose: closeModal,
			onExit: () => reset(name),
			onSubmit: values => createGo(values),
		},
		dispatch,
	),
});

export default connect(
	null,
	mapDispatchToProps,
)(CreateGoDialog);
