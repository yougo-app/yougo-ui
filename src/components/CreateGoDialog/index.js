import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {batchActions} from 'redux-batched-actions';
import {reset} from 'redux-form';
import createGo from '../../actions/requests/createGo';
import Modals from '../../constants/Modals';
import reduxModal from '../../util/ui/reduxModal';
import {name} from '../GoForm';
import CreateGoDialog from './CreateGoDialog';

const mapDispatchToProps = (dispatch, {onClose}) => ({
	...bindActionCreators(
		{
			onSubmit: values => batchActions([createGo(values), onClose()]),
			onExit: () => reset(name),
		},
		dispatch,
	),
});

export default reduxModal(Modals.CREATE_GO)(
	connect(
		null,
		mapDispatchToProps,
	)(CreateGoDialog),
);
